---
title: Script Execution
description: When are your scripts executed? How to control the order of execution? Let us explore all these.
isDraft: false
isContentSummaryOpen: true
image: ./asyncdefer.svg
imageCredit: Script Download and Execution
publishedOn: 2023-08-09
lastUpdatedOn: 2023-08-09
topics:
  - performance
---

## Parser Bocking Scripts

Script tags without `async` or `defer` are parser-blocking.

When the parser encounters a `<script>` element, the browser needs to evaluate and execute the script before proceeding with parsing the rest of the HTML. This is by design, as scripts may modify or access the DOM during a time while it is still being constructed. (using `document.write()`)

A parser-blocking `<script>` must also wait for any in-flight render-blocking CSS resources to arrive and be parsed before the browser can execute it. This is also by design, as a script may access styles declared in the render-blocking style sheet (for example, by using `element.getComputedStyle()`).

## Oder of execution

Order of execution is guaranteed in blocking scripts and when using defer.
This is not guaranteed when using `async`, since these scripts are executed as soon as they are downloaded.

## Reference

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html)
