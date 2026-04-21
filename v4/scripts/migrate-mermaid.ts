/**
 * Migration script: Extract inline mermaid diagrams from markdown files
 * into separate .mermaid files and replace with SVG image references.
 *
 * Usage: npx tsx scripts/migrate-mermaid.ts
 *
 * Patterns handled:
 * 1. Figure-wrapped: <figure>\n\n```mermaid...```\n\n<figcaption>...</figcaption>\n</figure>
 * 2. Standalone with figcaption: ```mermaid...```\n\n<figcaption>...</figcaption>
 * 3. Standalone without figcaption: ```mermaid...```
 */

import { execSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const CONTENT_DIR = join(import.meta.dirname!, "..", "content");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

/** Recursively collect all .md files under a directory */
function collectMarkdownFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectMarkdownFiles(full));
    } else if (entry.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Extraction types
// ---------------------------------------------------------------------------

interface Extraction {
  /** The mermaid source code */
  mermaidContent: string;
  /** File name (without extension) for the .mermaid / .svg files */
  name: string;
  /** Path to the .mermaid file that will be written */
  mermaidFilePath: string;
  /** The original full matched text in the markdown */
  originalText: string;
  /** The replacement text for the markdown */
  replacementText: string;
}

// ---------------------------------------------------------------------------
// Pattern matching
// ---------------------------------------------------------------------------

/**
 * Process a single markdown file. Returns extractions and the updated content.
 */
function processFile(filePath: string): {
  extractions: Extraction[];
  updatedContent: string;
} {
  let content = readFileSync(filePath, "utf-8");
  const dir = dirname(filePath);
  const extractions: Extraction[] = [];
  let diagramCounter = 0;

  // Track used names to avoid collisions within a file
  const usedNames = new Set<string>();

  function getUniqueName(base: string): string {
    let name = base;
    let counter = 1;
    while (usedNames.has(name)) {
      name = `${base}-${counter}`;
      counter++;
    }
    usedNames.add(name);
    return name;
  }

  // -----------------------------------------------------------------------
  // Pattern 1: Figure-wrapped mermaid with figcaption
  //   <figure>\n\n```mermaid\n...\n```\n\n<figcaption>...</figcaption>\n</figure>
  //   (also handles optional whitespace variations)
  // -----------------------------------------------------------------------
  const figurePattern =
    /(<figure>\s*\n\s*\n)```mermaid\n([\s\S]*?)```(\s*\n\s*\n<figcaption>([\s\S]*?)<\/figcaption>\s*\n<\/figure>)/g;

  content = content.replace(
    figurePattern,
    (_match, figureOpen: string, mermaidBody: string, figureClose: string, caption: string) => {
      const captionText = caption.trim();
      const name = getUniqueName(slugify(captionText) || `diagram-${++diagramCounter}`);
      const mermaidFilePath = join(dir, `${name}.mermaid`);

      extractions.push({
        mermaidContent: mermaidBody.trimEnd() + "\n",
        name,
        mermaidFilePath,
        originalText: _match,
        replacementText: `${figureOpen}![${captionText}](./${name}.svg)${figureClose}`,
      });

      return `${figureOpen}![${captionText}](./${name}.svg)${figureClose}`;
    },
  );

  // -----------------------------------------------------------------------
  // Pattern 2: Standalone mermaid followed by figcaption (no <figure> wrapper)
  //   ```mermaid\n...\n```\n\n<figcaption>...</figcaption>
  // -----------------------------------------------------------------------
  const standaloneWithCaptionPattern =
    /```mermaid\n([\s\S]*?)```(\s*\n\s*\n<figcaption>([\s\S]*?)<\/figcaption>)/g;

  content = content.replace(
    standaloneWithCaptionPattern,
    (_match, mermaidBody: string, captionBlock: string, caption: string) => {
      const captionText = caption.trim();
      const name = getUniqueName(slugify(captionText) || `diagram-${++diagramCounter}`);
      const mermaidFilePath = join(dir, `${name}.mermaid`);

      extractions.push({
        mermaidContent: mermaidBody.trimEnd() + "\n",
        name,
        mermaidFilePath,
        originalText: _match,
        replacementText: `![${captionText}](./${name}.svg)${captionBlock}`,
      });

      return `![${captionText}](./${name}.svg)${captionBlock}`;
    },
  );

  // -----------------------------------------------------------------------
  // Pattern 3: Standalone mermaid without figcaption
  //   ```mermaid\n...\n```
  // -----------------------------------------------------------------------
  const standalonePattern = /```mermaid\n([\s\S]*?)```/g;

  content = content.replace(standalonePattern, (_match, mermaidBody: string) => {
    diagramCounter++;
    const name = getUniqueName(`diagram-${diagramCounter}`);
    const mermaidFilePath = join(dir, `${name}.mermaid`);

    extractions.push({
      mermaidContent: mermaidBody.trimEnd() + "\n",
      name,
      mermaidFilePath,
      originalText: _match,
      replacementText: `![Diagram](./${name}.svg)`,
    });

    return `![Diagram](./${name}.svg)`;
  });

  return { extractions, updatedContent: content };
}

// ---------------------------------------------------------------------------
// SVG generation
// ---------------------------------------------------------------------------

function generateSvg(mermaidFilePath: string): boolean {
  const svgPath = mermaidFilePath.replace(/\.mermaid$/, ".svg");
  try {
    execSync(`npx mmdc -i "${mermaidFilePath}" -o "${svgPath}" --theme default -q`, {
      timeout: 30_000,
      stdio: "pipe",
    });
    return true;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  [FAIL] SVG generation failed: ${relative(CONTENT_DIR, mermaidFilePath)}`);
    console.error(`         ${msg.split("\n")[0]}`);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log("Mermaid migration: scanning content directory...\n");

  const mdFiles = collectMarkdownFiles(CONTENT_DIR);
  console.log(`Found ${mdFiles.length} markdown files total.\n`);

  let totalExtractions = 0;
  let filesModified = 0;
  const allMermaidFiles: string[] = [];

  for (const filePath of mdFiles) {
    const originalContent = readFileSync(filePath, "utf-8");
    if (!originalContent.includes("```mermaid")) {
      continue;
    }

    const { extractions, updatedContent } = processFile(filePath);

    if (extractions.length === 0) {
      continue;
    }

    // Write .mermaid files
    for (const ext of extractions) {
      writeFileSync(ext.mermaidFilePath, ext.mermaidContent, "utf-8");
      allMermaidFiles.push(ext.mermaidFilePath);
    }

    // Update the markdown file
    writeFileSync(filePath, updatedContent, "utf-8");

    filesModified++;
    totalExtractions += extractions.length;

    const rel = relative(CONTENT_DIR, filePath);
    console.log(`  [OK] ${rel} — ${extractions.length} diagram(s) extracted`);
  }

  console.log(`\n--- Extraction complete ---`);
  console.log(`  Files modified:    ${filesModified}`);
  console.log(`  Diagrams extracted: ${totalExtractions}`);
  console.log(`  .mermaid files:    ${allMermaidFiles.length}`);

  // Generate SVGs
  console.log(`\nGenerating SVGs...\n`);
  let svgSuccess = 0;
  let svgFail = 0;

  for (const mermaidFile of allMermaidFiles) {
    const ok = generateSvg(mermaidFile);
    if (ok) {
      svgSuccess++;
    } else {
      svgFail++;
    }
  }

  console.log(`\n--- SVG generation complete ---`);
  console.log(`  Success: ${svgSuccess}`);
  console.log(`  Failed:  ${svgFail}`);
  console.log(`  Total:   ${allMermaidFiles.length}`);

  if (svgFail > 0) {
    console.log(`\nNote: ${svgFail} SVG(s) failed to generate. The .mermaid files are still present.`);
  }
}

main();
