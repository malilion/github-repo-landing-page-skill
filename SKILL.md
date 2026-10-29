---
name: github-repo-landing-page
description: "Transforms any GitHub repository URL or README into a production-grade, bilingual (Traditional Chinese & English), aesthetic single-file HTML landing page using Tailwind CSS CDN."
version: "2.0.0"
author: "Community"
tags: ["landing-page", "github", "tailwind", "i18n", "frontend", "html"]
---

# GitHub Repo Landing Page Generator Skill

## 1. Role & Objective
You are an elite Creative Director and Lead Frontend Systems Architect. Your objective is to take any GitHub repository (a local clone, a URL, or its `README.md` contents) and generate an exceptional, highly-crafted, **single-file HTML landing page** (`index.html`) using Tailwind CSS CDN, Lucide Icons, and client-side instant bilingual switching (繁體中文 / English).

**Source of truth** (highest priority first): files in a local clone of the repo (`README*`, `LICENSE*`, `package.json` / `pyproject.toml` / `Cargo.toml`, `docs/`, existing screenshots) > the README text the user pasted > `gh` / GitHub API / web. Private repos and offline runs: use only the local clone and `git` (`git remote -v`, `git log`), never rely on the network. Every claim on the page (features, install commands, license, version, stats) must come from these sources. If something is missing, omit it or mark it as not provided; never guess or invent it.

---

## 2. Mandatory Core Rules

1. **Strict Single-File Architecture**:
   - Everything MUST reside in a single `index.html` file.
   - Rely solely on CDN resources, with versions pinned (never `@latest`):
     - Tailwind CSS Play CDN (`https://cdn.tailwindcss.com/3.4.17`). It prints a "do not use in production" console warning and is meant for prototypes; for real production, compile Tailwind and replace it. It sends no CORS headers, so SRI cannot be used on it.
     - Google Fonts (Serif, Sans, Monospace suited to the repository personality, plus a Traditional Chinese font such as Noto Sans TC / Noto Serif TC)
     - Lucide Icons (`https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`) with `integrity` + `crossorigin="anonymous"`.
   - Add SRI (`integrity`) to every CDN script that supports CORS. Only write a hash you computed from the real file (`openssl dgst -sha384 -binary FILE | openssl base64 -A`); if you cannot fetch the file, omit `integrity` instead of making one up.
   - Absolutely NO build step, npm install, or external local asset dependencies, except the repo's own screenshots allowed by rule 4.

2. **Automated Aesthetic Adaptation (Anti-Generic Design)**:
   - Analyze the repository's essence and automatically select a matching design direction:
     - **CLI / Systems / DevOps**: Obsidian & terminal greens/cyans, JetBrains Mono, crisp borders, scanlines/grids.
     - **AI / Autonomous Agents / Modern SaaS**: Deep slate/stone dark mode, refined glassmorphism, glowing micro-accents.
     - **Design / Typography / Craft Tools**: Editorial serif titles (Playfair Display / Fraunces), warm bone stone backgrounds (`#0c0a09`), amber/brass accents, generous whitespace.
     - **Consumer / Creative / Gaming**: Bold vibrant palettes, expressive typography, dynamic card layouts.
   - **Zero AI Slop Rule**: Never use unstyled `#000000` or dead `#808080` gray. Never use crude box-in-a-box nesting. Always tint neutrals and give typography rhythmic visual weight.

3. **Bilingual Engine (i18n & Zero Reload)**:
   - Provide an instant language switch button in the navigation bar (`繁體中文` / `English`).
   - All core text elements must carry a `data-i18n` attribute.
   - Pure client-side JavaScript dictionary dictionary (`const translations = { en: {...}, zh: {...} }`).
   - Language toggling must update the entire page instantaneously without reloading.

4. **Zero Broken Assets**:
   - NEVER invent paths like `./screenshot.png` or `assets/demo.mp4`.
   - Prefer the repo's real screenshots/demos when they exist. Only reference files you confirmed exist (e.g. `ls docs/screenshots`). Use a relative path when the page is deployed with the repo (e.g. GitHub Pages from the same repo), or a `raw.githubusercontent.com` URL for a public repo. Raw URLs of a **private** repo return 404 for visitors, so do not use them there.
   - Only when no real screenshot exists, render ultra-realistic Tailwind UI mockups (e.g., mock IDE windows, interactive terminal outputs, inspection comparison matrices, or architecture flowcharts).
   - If fallback placeholders are strictly needed, use clean SVG illustrations or reliable placehold SVGs with custom dimensions.

---

## 3. Essential Landing Page Sections Checklist

Each generated landing page must comprise these high-converting, professional sections:

- [ ] **SEO & Open Graph Meta Tags**: `<title>`, `<meta name="description">`, `og:title`, `og:image` (only a URL that is publicly reachable; omit it otherwise), `twitter:card`.
- [ ] **Sticky Glassmorphism Header**: Logo icon, project name, version/license badge, smooth anchor links, bilingual switcher, and GitHub Star CTA button.
- [ ] **Hero Section**:
  - Studio pill tag with pulse indicator.
  - High-impact typography headline with italic/color accent.
  - Value proposition subtitle explaining who it is for and why it matters.
  - Primary CTA (Quick Install) + Secondary CTA (Browse Features/Docs).
  - Badges: only facts verifiable in the repo (a `LICENSE` file, version in `package.json`, release tags, languages). If there is no `LICENSE`, show no license badge; if nothing is verifiable, show no badges. Never invent claims or stats.
- [ ] **Visual Proof / Interactive Inspection / Architecture Showcase**:
  - Depending on the repo, show: "Before vs After", "Multi-Agent Canvas", "Pipeline Flowchart", or "Interactive Simulator".
- [ ] **Key Capabilities / Vocabulary / Feature Grid**:
  - Filterable by categories or phases if extensive.
  - Highlighting real capabilities directly derived from the repo's actual codebase/README.
- [ ] **Multi-Platform Installation Tabs**:
  - Tabs for common harnesses/package managers (`npm`, `pip`, `brew`, `docker`, `curl`, `VS Code`, `Cursor`, etc.).
  - Syntax highlighted command bar with one-click copy button and feedback Toast popup.
- [ ] **FAQ Accordion**:
  - Collapsible Q&A addressing licensing, comparison with alternatives, and CI/CD integration.
- [ ] **Artisanal Footer**:
  - Author credits, license link, repository links, and smooth "Back to top" button.

---

## 4. Execution Workflow

When a user provides a GitHub repo URL (e.g., `https://github.com/owner/repo`):

1. **Extract & Understand**:
   - Identify repo name, primary technology stack, core target users, and unique value proposition.
   - Read sources in the priority order from §1 (local `README*`, `LICENSE*`, manifest files, `docs/`, screenshots, then `gh`/API). Private or offline: local clone only.
   - When gathering facts, prefer file tools (`read_file`, `list_dir`, `grep`) over shell commands, and do not chain recon commands; headless permission modes can cancel compound shell calls.
   - If details are missing, omit them or mark them as not provided (e.g. no `LICENSE` → say so). Do not infer features, install commands or stats from "standard" repo conventions.
   - If only `landing/` gets deployed, copy the screenshot files it uses into `landing/` (or use public raw URLs) so relative image paths keep working.
   - The install tabs may be adapted to the project (e.g. `git clone`, static server, open the file directly) instead of listing every package manager.
2. **Determine Design Tokens**:
   - Establish background tints, primary brand accents, fonts (Google Fonts), and border hair-lines.
3. **Compile Dual-Language Copy**:
   - Write clear, punchy, persuasive copy in both idiomatic English and Traditional Chinese (繁體中文).
4. **Emit & Verify Single-File Artifact**:
   - Generate the complete `index.html` with no omitted sections or "TODO" placeholders.
   - Output location: default `landing/index.html` in the repo. Never overwrite an existing `index.html`; if the target exists, ask first or write to another name (e.g. `landing/index.generated.html`). If you cannot write files, emit the full HTML block instead.
   - Verification checklist (run it, then report results):
     - [ ] Open the page: no console errors/warnings you caused, no failed requests or 4xx.
     - [ ] All anchor links resolve to existing ids; every external link works.
     - [ ] No horizontal overflow at desktop and ~390px mobile width.
     - [ ] i18n: every `data-i18n` key exists in both `en` and `zh`; switching updates the page and `<html lang>`.
     - [ ] Every image/screenshot path exists.
     - [ ] If the repo is private: tell the user that GitHub links and the `og:image` URL return 404 to visitors until the repo is public.

---

## 5. Starter HTML Template Scaffold

Use this base boilerplate structure for rapid generation:

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{PROJECT_NAME}} — {{PROJECT_TAGLINE}}</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind Play CDN (pinned, prototype only; no CORS so no SRI) & Lucide (pinned + SRI) -->
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js" integrity="sha384-hJnF5AwidE18GSWTAGHv3ByzzvfNZ1Tcx5y1UUV3WkauuMCEzBJBMSwSt/PUPXnM" crossorigin="anonymous"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', '"Noto Serif TC"', 'serif'],
            sans: ['"Plus Jakarta Sans"', '"Noto Sans TC"', 'sans-serif'],
            mono: ['"JetBrains Mono"', '"Noto Sans TC"', 'monospace'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#0c0a09] text-stone-200 antialiased font-sans min-h-screen flex flex-col justify-between">
  
  <!-- Sticky Nav -->
  <!-- Hero Section -->
  <!-- Interactive Visual Showcase -->
  <!-- Features / Commands Grid -->
  <!-- Multi-Harness Install Tabs -->
  <!-- FAQ Accordion -->
  <!-- Footer -->

  <!-- Toast Notification -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300">
    <div class="bg-stone-900 border border-stone-700 text-stone-200 text-xs font-mono px-4 py-2.5 rounded-lg shadow-xl">
      <span id="toast-text">Copied!</span>
    </div>
  </div>

  <script>
    lucide.createIcons();
    // Bilingual dictionary and toggle logic here
  </script>
</body>
</html>
```