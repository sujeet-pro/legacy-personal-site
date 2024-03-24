---
title: Script Execution
description: When are your scripts executed? How to control the order of execution? Let us explore all these.
isDraft: false
isContentSummaryOpen: false
image: ./asyncdefer.svg
imageCredit: Script Download and Execution
publishedOn: 2023-08-09
lastUpdatedOn: 2023-08-09
topics:
  - performance
---

## TLDR

- Script download can be sync or async.
- Script execution is always parser-blocking
- default - Parser Blocking everythign - Download + Execution
- `async` - Download in parallel, execute ASAP
- `defer` - Download in parallel, execute after DOM
- JS Execution wait for any inflight render-blocking CSS (CSSOM Construction)

## Parser Bocking Scripts

Script tags without `async` or `defer` are parser-blocking.

When the parser encounters a `<script>` element, the browser needs to evaluate and execute the script before proceeding with parsing the rest of the HTML. This is by design, as scripts may modify or access the DOM during a time while it is still being constructed. (using `document.write()`)

### Blocked on CSS, Why?

A parser-blocking `<script>` must also wait for any in-flight render-blocking CSS resources to arrive and be parsed before the browser can execute it. This is also by design, as a script may access styles declared in the render-blocking style sheet (for example, by using `element.getComputedStyle()`).

### Browser Optimization for parser blocking

Blocking the parser can have a huge performance cost—much more than just blocking rendering. For this reason, browsers will try to reduce this cost by using a secondary HTML parser known as the **preload scanner** to download upcoming resources while the primary HTML parser is blocked.

## Oder of execution

Order of execution is guaranteed in blocking scripts and when using defer.
This is not guaranteed when using `async`, since these scripts are executed as soon as they are downloaded.

## Reference

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html)
