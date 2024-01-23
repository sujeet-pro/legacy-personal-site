---
title: "SSG - Reducing CLS, Handling Redirections & Rollbacks"
description: Reducing CLS with SSG, when we have different laouts in mobile and desktop. How we handle redirections for non-existing urls and rollbacks in case of emergency
isDraft: false
initialTocClose: false
image: ./mobile-desktop-ssg.svg
imageCredit: Architecture Diagram
publishedOn: 2024-01-21
lastUpdatedOn: 2024-01-21
topics:
  - availability
  - infra
  - performance
  - web-development
---

## Introducing the Problem

Enter the realm of Server Side Generated (SSG) builds, where static files are generated for every conceivable URL, finding their home in S3 and seamlessly delivered via a Cloudfront CDN.

Updates requires a regeneration of the entire site, synchronization with S3, and a subsequent Cloudfront cache invalidation.

While the performance benefits for non-dynamic content are evident, this approach introduces a unique set of technical challenges:

- Escalating Cumulative Layout Shift (CLS)
- Absence of Robust Redirection Mechanisms
- The Intricacies of Version Rollbacks

## Deciphering the CLS Challenge

The nuanced differences between mobile and desktop views pose a significant challenge during the build process, resulting in an unintended spike in Cumulative Layout Shift (CLS) on the non-default view. Eg, if build for mobile, desktop suffers with higher CLS and vice-versa.

### Solution 1: CSS Tactics

One common strategy involves leveraging CSS to dynamically adjust rendering, a viable solution for straightforward cases like grid item alignment. However, this approach falters when faced with more complex scenarios involving divergent DOM structures.

### Solution 2: Dual DOM Dilemma

In situations where different DOM structures come into play, an alternative is to render both variants and selectively hide one using CSS. However, this workaround introduces the trade-off of an increased DOM size.

### The Ultimate Solution: Origin Request Interceptor

Introducing the "Origin Request Interceptor," a lambda@edge in Cloudfront designed to modify the request object during a cache miss when fetching from the Origin (S3). Embedding the Cloudfront-Is-Mobile-Viewer header allows for nuanced cache key differentiation.

- CSS for simple use cases, fostering common components.
- Utilize an environment variable to determine the default value (mobile/desktop) for varying DOM structures.
- Develop two distinct site versions (one for mobile and one for desktop) syncing to S3 within designated folders (`mobile/*` or `desktop/*`).
- Leverage the `Cloudfront-Is-Mobile-Viewer` header in the Origin Request to append a prefix for mobile or desktop.

## Mastering Rollbacks

Post-build, introduce the build number as a prefix during S3 synchronization, organizing folders as `[buildNumber]/[mobile|desktop]/*`. Update the Cloudfront Origin with a custom header (buildNumber) containing the latest build number and trigger cache invalidation. The Origin Request Interceptor should consider the buildNumber header when applying the prefix.

## Crafting Redirection Mechanisms

- An admin portal equipped with a UI manages redirection configurations, storing data in an RDS.
- As a build initiates, generate a JSON configuration based on RDS data, seamlessly integrated with Origin Request Interceptor code.
- Evolve the Interceptor code to scrutinize a request URI within the JSON key. If detected, promptly trigger a 302 redirection, bypassing the origin forwarding.
