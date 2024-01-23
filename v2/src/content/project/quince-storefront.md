---
title: Quince Web Ecommerce
description: "Quince is a fashion retail e-commerce startup operating Manufacturing to Consumer model with ~$400M revenue, ~4M MAU, and peak RPS of 2600."
isDraft: false
initialTocClose: false
startDate: 2023-05-28
endDate: 2024-12-31
company: quince
topics:
  - availability
  - accessibility
  - cost-optimization
  - infra
  - javascript
  - performance
  - web-development
---

Leading a team of 6 engineers to scale the entire e-commerce web platform of Quince, a fashion retail e-commerce startup with ~$400M revenue, ~4M MAU, and peak RPS of 2600.

## Current Focus Area

- Re-building the entire e-commerce in Next.JS SSR and migrating from Gatsby’s SSG.
- Implementing a BFF in node.js and express while supporting content rollbacks.
- Infrastructure and Architectural Optimizations for cost and performance.
- Tech: React, Next.js, Jest, Node.js, AWS, Algolia, Shopify, Redis

## Impacts

- Increased availability and reduced cost of image service by 70% by adding a caching layer with a static failover ($20K/m to $1K/m + $5K/m for CDN).
- I reduced CLS (Web Vital) to 0.002 by building different builds for mobile and desktop and serving conditionally based on the CloudFront Headers using Lambda@edge
- Reduced CDN Cost by 50% and zero cost spikes by serving pre-compressed assets.
- Reduced compute cost (70-80% expected) using nginx’s proxy cache lock (Ongoing).
- Improving site performance (page load, network congestion) by using server GTM for telemetry (analytics & tracking) and using BFFs. (Ongoing, +10 lighthouse score)
- Created a PoC on AI-assisted search using OpenAI APIs.
- Reduced triaging & resolution time to <10 min & <30 min, respectively, by improving the system’s observability using Datadog and Sentry for alerts and monitoring.
