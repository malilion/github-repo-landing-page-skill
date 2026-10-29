# GitHub Repo Landing Page Skill

English | [繁體中文](README.zh-TW.md)

A Claude skill that turns any GitHub repository URL or `README.md` into a production-grade, bilingual (Traditional Chinese / English), single-file HTML landing page.

## Features

- **Single file**: everything lives in one `index.html`; no build step, no npm install.
- **CDN only**: Tailwind CSS, Google Fonts and Lucide Icons.
- **Adaptive design**: picks a visual direction that matches the repo (CLI/DevOps, AI/SaaS, design tools, consumer/gaming).
- **Instant bilingual switch**: 繁體中文 / English via a client-side `data-i18n` dictionary, no reload.
- **No broken assets**: uses Tailwind-built mockups and SVGs instead of invented image paths.
- **Complete sections**: SEO/Open Graph meta, sticky header, hero, visual showcase, feature grid, multi-platform install tabs with copy button, FAQ accordion, footer.

## Usage

1. Add `github_repo_landing_page_skill.md` to your Claude skills (e.g. as `SKILL.md` in a skill folder).
2. Give Claude a GitHub repo URL or paste its README, for example `https://github.com/owner/repo`.
3. Claude outputs a complete `index.html`. Open it in a browser or host it on GitHub Pages.

## Files

| File | Description |
| --- | --- |
| `github_repo_landing_page_skill.md` | The skill definition (rules, section checklist, workflow, HTML scaffold) |
| `README.md` | English documentation |
| `README.zh-TW.md` | 繁體中文說明 |
