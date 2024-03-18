---
title: Optmizing Critical Rendering Path
description: TODO
isDraft: true
isContentSummaryOpen: false
image: ../../hello/cover-hello.jpg
imageCredit: ADD HERE
publishedOn: 2024-01-20
lastUpdatedOn: 2024-01-20
topics:
  - performance
  - web-development
---

TODO

## The preload scanner

The preload scanner is a browser optimization in the form of a secondary HTML parser that scans the raw HTML response to find and speculatively fetch resources before the primary HTML parser would otherwise discover them. For example, the preload scanner would allow the browser to start downloading a resource specified in an `<img>` element, even when the HTML parser is blocked while fetching and processing resources such as CSS and JavaScript.

## Optimizing CRP

The general sequence of steps to optimize the critical rendering path is:

- Analyze and characterize your critical path: number of resources, bytes, length.
- Minimize number of critical resources: eliminate them, defer their download, mark them as async, and so on.
- Optimize the number of critical bytes to reduce the download time (number of roundtrips).
- Optimize the order in which the remaining critical resources are loaded: download all critical assets as early as possible to shorten the critical path length.

## Reference

- [Optimizing Resource Loading](https://web.dev/learn/performance/optimize-resource-loading)
- [Optimizing the Critical Rendering Path](https://web.dev/articles/critical-rendering-path/optimizing-critical-rendering-path)
