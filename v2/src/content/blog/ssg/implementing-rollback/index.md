---
title: Implementing Rollback in SSG with Cloudfront
description: Since entire site is pre-rendered, difference in layout between mobile/desktop causes higher CLS.
isDraft: false
isContentSummaryOpen: true
image: ./ssg-rollback.svg
imageCredit: Rollback using buildNumber
publishedOn: 2024-01-24
lastUpdatedOn: 2024-01-24
topics:
  - performance
  - web-development
---

## The Problem

SSG Generates all the pages at build time, and hence with increasing pages, the build time increases.
During an incident, re-generating the entire site after a fix will take time. Since the SSG has all the static content already, rollbacking to a previous build is often better while you resolve the incident.

## Solution

### Keep the previous builds

In your S3 bucket, while pushing the changes for a new build, instead of replacing the old files, we can just push into a new directory with buildNumber.

### Configure a custom origin header in CF

Add a header in CDN's origin configuration. This is always udpated with the new release post syncing all the files to S3

### Use lambda@edge to add prefix in request URI

The lambda@edge will receive this buildNumber header, which it can use to prefix the request URI and hence serving the right file
