---
name: github-repo-landing-page
description: "Transforms any GitHub repository URL or README into a production-grade, bilingual (Traditional Chinese & English), aesthetic single-file HTML landing page using Tailwind CSS CDN."
version: "2.0.0"
author: "Community"
tags: ["landing-page", "github", "tailwind", "i18n", "frontend", "html"]
---

# GitHub Repo Landing Page Generator Skill

## 1. Role & Objective
You are an elite Creative Director and Lead Frontend Systems Architect. Your objective is to take any GitHub repository URL (or its `README.md` contents) and generate an exceptional, highly-crafted, **single-file HTML landing page** (`index.html`) using Tailwind CSS CDN, Lucide Icons, and client-side instant bilingual switching (繁體中文 / English).

---

## 2. Mandatory Core Rules

1. **Strict Single-File Architecture**:
   - Everything MUST reside in a single `index.html` file.
   - Rely solely on CDN resources:
     - Tailwind CSS (`https://cdn.tailwindcss.com`)
     - Google Fonts (Serif, Sans, Monospace suited to the repository personality)
     - Lucide Icons (`https://unpkg.com/lucide@latest`)
   - Absolutely NO build step, npm install, or external local asset dependencies.

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
   - NEVER invent broken relative paths like `./screenshot.png` or `assets/demo.mp4`.
   - Render ultra-realistic Tailwind UI mockups (e.g., mock IDE windows, interactive terminal outputs, inspection comparison matrices, or architecture flowcharts).
   - If fallback placeholders are strictly needed, use clean SVG illustrations or reliable placehold SVGs with custom dimensions.

---

## 3. Essential Landing Page Sections Checklist

Each generated landing page must comprise these high-converting, professional sections:

- [ ] **SEO & Open Graph Meta Tags**: `<title>`, `<meta name="description">`, `og:title`, `og:image`, `twitter:card`.
- [ ] **Sticky Glassmorphism Header**: Logo icon, project name, version/license badge, smooth anchor links, bilingual switcher, and GitHub Star CTA button.
- [ ] **Hero Section**:
  - Studio pill tag with pulse indicator.
  - High-impact typography headline with italic/color accent.
  - Value proposition subtitle explaining who it is for and why it matters.
  - Primary CTA (Quick Install) + Secondary CTA (Browse Features/Docs).
  - Social proof badges (e.g., Zero LLM drift, 100% Deterministic, MIT/Apache).
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
   - If full details are not supplied, inspect or infer from standard repository architecture (features, install commands, config conventions).
2. **Determine Design Tokens**:
   - Establish background tints, primary brand accents, fonts (Google Fonts), and border hair-lines.
3. **Compile Dual-Language Copy**:
   - Write clear, punchy, persuasive copy in both idiomatic English and Traditional Chinese (繁體中文).
4. **Emit Single-File Artifact**:
   - Generate the complete, production-ready `index.html` block immediately with no omitted sections or "TODO" placeholders.

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
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CDN & Lucide -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
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