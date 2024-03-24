---
title: Optmizing Critical Rendering Path
description: Browser Optimizations and custom optimizations to improve the CRP
isDraft: false
isContentSummaryOpen: false
image: ./optimize-crp.svg
imageCredit: Resource loading optimizations
publishedOn: 2023-08-13
lastUpdatedOn: 2023-08-13
topics:
  - performance
  - web-development
---

## The preload scanner

The preload scanner is a browser optimization in the form of a secondary HTML parser that scans the raw HTML response to find and speculatively fetch resources before the primary HTML parser would otherwise discover them. For example, the preload scanner would allow the browser to start downloading a resource specified in an `<img>` element, even when the HTML parser is blocked while fetching and processing resources such as CSS and JavaScript.

## Optimizing CRP

The general sequence of steps to optimize the critical rendering path is:

- Analyze and characterize your critical path: number of resources, bytes, length.
- Minimize number of critical resources: eliminate them, defer their download, mark them as async, and so on.
- Optimize the number of critical bytes to reduce the download time (number of roundtrips).
- Optimize the order in which the remaining critical resources are loaded: download all critical assets as early as possible to shorten the critical path length.

### Action Items

- Move to Server Side Rendering
- Deffering Javascript
- Preload fonts and using `font-display: swap`
- Prioritize Above the flod.

## Reference

- [Optimizing Resource Loading](https://web.dev/learn/performance/optimize-resource-loading)
- [Optimizing the Critical Rendering Path](https://web.dev/articles/critical-rendering-path/optimizing-critical-rendering-path)

<iframe width="560" height="315" class="yt-embed" src="https://www.youtube.com/embed/25fkjIIk2_o?si=3cxf1u6rv_7UK_MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
