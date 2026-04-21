# Markdown Features and Usage

This project uses GitHub Flavored Markdown (GFM), Mermaid diagrams, and Expressive Code for code blocks.

## Code Blocks (Expressive Code)

### Basic Syntax

````markdown
```ts title="example.ts"
// code here
```
````

### Collapse (MANDATORY)

Only relevant lines should be visible. Collapse everything else using `collapse={...}`.

````markdown
```ts title="service.ts" collapse={1-6, 14-20}
// Collapsed: imports and setup
import { Client } from "./client"
import { logger } from "./logger"

const client = new Client()

// Visible: the key call pattern
export async function fetchUser(id: string) {
  const user = await client.get(`/users/${id}`)
  return user
}

// Collapsed: helpers
function normalizeUser() {}
```
````

### Line Highlighting

````markdown
```ts {2-3}
const a = 1
const b = 2
const c = 3
```
````

### Diff Highlighting

````markdown
```ts
const before = "old" - const old = "old" + const after = "new"
```
````

## Diagrams

### Diagram File Requirements

- All diagrams MUST be generated as separate files with proper extensions: `.excalidraw` for Excalidraw diagrams, `.mermaid` for Mermaid diagrams
- After generating diagram source files, additionally generate `.svg` files from them
- SVG files are the rendered output; source files (`.excalidraw`, `.mermaid`) are the editable source of truth
- The markdown file references ONLY the `.svg` files using relative file paths: `![Caption](./diagram-name.svg)`

### Diagram Preference

- **ALWAYS prefer Excalidraw** for: overview diagrams, architecture diagrams, flow diagrams, system context diagrams, infrastructure diagrams
- **Use Mermaid** for: sequence diagrams, class diagrams, state diagrams, ER diagrams, Gantt charts, C4 diagrams
- When in doubt about which tool to use, generate BOTH and embed both in the markdown. The author will review the rendered output and remove the less effective one.

### Diagram Generation

- Use the `/diagram`, `/excalidraw`, and `/mermaid` skills from the global claude-devkit for all diagram generation
- Each diagram file should be named descriptively (e.g., `overview-architecture.excalidraw`, `request-flow.mermaid`)
- Place diagram source files and SVGs in the same folder as the article's README.md

### Embedding Diagrams in Markdown

````markdown
<figure>

![Architecture Overview](./overview-architecture.svg)

<figcaption>High-level architecture showing the main components and data flow.</figcaption>
</figure>
````

### Thumbnail Image

- Every article/blog/project MUST have a generated thumbnail image in JPEG format
- The thumbnail should be generated using Excalidraw and converted to JPEG
- Name it `thumbnail.jpg` in the article folder
- The thumbnail should be a visual summary of what the article is about (key concept, main diagram simplified)
- Use the `/excalidraw` skill to generate and `/image-transform` to convert SVG to JPEG

## Tables

```
| Column | Description |
| ------ | ----------- |
| A      | Value       |
```

## Images

- Standard: `![Alt](./image.png)`
- Invert in dark mode: `![Alt](./diagram.invert.png)`
- Inline SVG: `![Alt](./icon.inline.svg)`

## File-Path Based Linking

- All internal links in markdown MUST use relative file paths (not URL paths)
- This enables navigation within the repo (GitHub, IDE, etc.)
- Example: `[Related Article](../topic/article-slug/README.md)` NOT `/articles/category/topic/article-slug`
- External links use full URLs as usual
- Cross-article references should use relative paths from the current file

## Markdown Structure Rules

- Only one H1 per article.
- Keep headings hierarchical (H2 -> H3 -> H4).
