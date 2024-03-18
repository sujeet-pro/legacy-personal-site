---
title: CSSOM Construction
description: Bytes → characters → tokens → nodes → CSSOM
isDraft: true
isContentSummaryOpen: false
image: ./cssom.svg
imageCredit: CSSOM Construction
publishedOn: 2024-01-12
lastUpdatedOn: 2024-01-12
topics:
  - performance
  - web-development
---

## Process

![CSSOM Constructed Tree](./cssom-tree.png)

#### Sample Code

```css
body {
  font-size: 16px;
}
p {
  font-weight: bold;
}
span {
  color: red;
}
p span {
  display: none;
}
img {
  float: right;
}
```

## Render Blocking - CSS

CSS is render blocking as its blocks rendering of parsed content until CSS Object Model (CSSOM) is constructed.
The browser does this to prevent Flash of Unstyled Content (FOUC)

## References

- [Constructing the Object Model](https://web.dev/articles/critical-rendering-path/constructing-the-object-model)
