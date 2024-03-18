---
title: DOM Construction
description: Bytes → characters → tokens → nodes → DOM
isDraft: false
isContentSummaryOpen: false
image: ./dom-construction.svg
imageCredit: Dom Construction
publishedOn: 2024-01-11
lastUpdatedOn: 2024-01-11
topics:
  - performance
  - web-development
---

## DOM Construction Process

- **Conversion**: The browser reads the raw bytes of HTML off the disk or network, and translates them to individual characters based on specified encoding of the file (for example, UTF-8).
- **Tokenizing**: The browser converts strings of characters into distinct tokens—as specified by the W3C HTML5 standard for example, `<html>`, `<body>`—and other strings within angle brackets. Each token has a special meaning and its own set of rules.
- **Lexing**: The emitted tokens are converted into "objects," which define their properties and rules.
- **DOM construction**: Finally, because the HTML markup defines relationships between different tags (some tags are contained within other tags) the created objects are linked in a tree data structure that also captures the parent-child relationships defined in the original markup: the HTML object is a parent of the body object, the body is a parent of the paragraph object, and so on.

```html
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link href="style.css" rel="stylesheet" />
    <title>Critical Path</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg" /></div>
  </body>
</html>
```

![DOM Construction Process](./dom.png)

## References

- [Constructing the Object Model](https://web.dev/articles/critical-rendering-path/constructing-the-object-model)
- [You Don't Need the DOM Ready Event](https://thanpol.as/javascript/you-dont-need-dom-ready)
