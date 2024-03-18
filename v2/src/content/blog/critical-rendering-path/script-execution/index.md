---
title: Script Execution
description: Some description
isDraft: true
isContentSummaryOpen: true
image: ./asyncdefer.svg
imageCredit: Script Download and Execution
publishedOn: 2024-01-13
lastUpdatedOn: 2024-01-13
topics:
  - performance
---

## Parser Bocking Scripts

Script tags without `async` or `defer` are parser-blocking.

When the parser encounters a `<script>` element, the browser needs to evaluate and execute the script before proceeding with parsing the rest of the HTML. This is by design, as scripts may modify or access the DOM during a time while it is still being constructed. (using `document.write()`)

A parser-blocking `<script>` must also wait for any in-flight render-blocking CSS resources to arrive and be parsed before the browser can execute it. This is also by design, as a script may access styles declared in the render-blocking style sheet (for example, by using `element.getComputedStyle()`).

## Reference

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html)
