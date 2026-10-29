# GitHub Repo Landing Page Skill

English | [繁體中文](README.zh-TW.md)

A Claude skill that turns any GitHub repository URL or `README.md` into a production-grade, bilingual (Traditional Chinese / English), single-file HTML landing page.

## Features

- **Single file**: everything lives in one `index.html`; no build step, no npm install.
- **CDN only**: Tailwind CSS, Google Fonts (incl. Noto TC) and Lucide Icons, with pinned versions and SRI where supported.
- **Adaptive design**: picks a visual direction that matches the repo (CLI/DevOps, AI/SaaS, design tools, consumer/gaming).
- **Instant bilingual switch**: 繁體中文 / English via a client-side `data-i18n` dictionary, no reload.
- **No broken assets, no invented facts**: uses the repo's real screenshots when they exist, otherwise Tailwind mockups and SVGs; content comes only from the repo (local files first).
- **Complete sections**: SEO/Open Graph meta, sticky header, hero, visual showcase, feature grid, multi-platform install tabs with copy button, FAQ accordion, footer.

## Usage

1. Put this repo (or just `SKILL.md`) in a skill folder, e.g. `.claude/skills/github-repo-landing-page/SKILL.md` or `.grok/skills/github-repo-landing-page/SKILL.md`, so the tool can discover it.
2. Give the agent a local clone, a GitHub repo URL, or paste its README, for example `https://github.com/owner/repo`.
3. It writes `landing/index.html` (never overwrites an existing `index.html`) and runs the verification checklist. Open it in a browser or host it on GitHub Pages.

### Headless runs

In headless mode with a permission mode like Grok CLI `--permission-mode dontAsk`, any tool call that is not pre-allowed cancels the whole turn (`stopReason: cancelled`), often right at the verification step. Allow the commands the skill needs up front, e.g. writes to the output folder and read-only `git -C <repo> rev-parse/log/remote`, `ls`, plus whatever you use to verify (a local static server, a headless browser script). Deny the dangerous ones (`git push`, `rm`).

## Files

| File | Description |
| --- | --- |
| `SKILL.md` | The skill definition (rules, section checklist, workflow, HTML scaffold) |
| `README.md` | English documentation |
| `README.zh-TW.md` | 繁體中文說明 |
