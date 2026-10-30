# GitHub Repo Landing Page Skill

[English](README.md) | 繁體中文

一個通用的 Agent Skill(標準 `SKILL.md` 格式,任何支援 skill 的 AI 程式助理都能用,例如 Claude Code、Grok CLI),可將任何 GitHub 儲存庫網址或 `README.md` 轉換成可直接上線、支援雙語(繁體中文 / English)的單檔 HTML 登陸頁。

![示範:Grok CLI 搭配本 skill 為 JetBrains/thinkrail 產生的登陸頁](assets/demo.gif)

*上圖登陸頁由 Grok CLI 搭配本 skill 為 [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail)(Apache-2.0)產生。GIF 內容為首屏、捲動瀏覽數個區塊,以及 繁體中文 / English 切換。*

**線上示範入口:** [https://malilion.github.io/github-repo-landing-page-skill/](https://malilion.github.io/github-repo-landing-page-skill/),集中列出下方所有線上示範。

**線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/](https://malilion.github.io/github-repo-landing-page-skill/demo/)

**第二個線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/macro/](https://malilion.github.io/github-repo-landing-page-skill/demo/macro/),由 Grok CLI 搭配本 skill 為 [macro-inc/macro](https://github.com/macro-inc/macro)(AGPL-3.0)產生。

**另一個線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/assistant-ui/](https://malilion.github.io/github-repo-landing-page-skill/demo/assistant-ui/),由 Grok CLI 搭配本 skill 為 [assistant-ui/assistant-ui](https://github.com/assistant-ui/assistant-ui)(MIT)產生。

**再一個線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/magicui/](https://malilion.github.io/github-repo-landing-page-skill/demo/magicui/),由 Grok CLI 搭配本 skill 為 [magicuidesign/magicui](https://github.com/magicuidesign/magicui)(MIT)產生。

**對照示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/magicui-v2/](https://malilion.github.io/github-repo-landing-page-skill/demo/magicui-v2/),為同一個 repo([magicuidesign/magicui](https://github.com/magicuidesign/magicui),MIT)搭配本 skill 與 [ai-design-skills](https://github.com/elayadesign/ai-design-skills) 的 landing-page-design skill(MIT)產生,可與上方示範並排比較。

**還有一個線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/agenui/](https://malilion.github.io/github-repo-landing-page-skill/demo/agenui/),由 Grok CLI 搭配本 skill 為 [AGenUI/AGenUI](https://github.com/AGenUI/AGenUI)(Apache-2.0)產生。

## 特色

- **單一檔案**:所有內容都在一個 `index.html`,不需建置流程,也不需 npm install。
- **僅使用 CDN**:Tailwind CSS、Google Fonts(含 Noto TC 繁中字型)、Lucide Icons,固定版本並在可行處加 SRI。
- **自適應設計**:依專案性質自動選擇視覺風格(CLI/DevOps、AI/SaaS、設計工具、消費/遊戲)。
- **即時雙語切換**:以前端 `data-i18n` 字典切換 繁體中文 / English,無需重新載入。
- **無破圖、不編造**:repo 有真實截圖就優先使用(主要圖片會複製到頁面旁、不盜連上游網址,驗收前會確認每張圖都已載入),沒有才用 Tailwind 擬真介面與 SVG;內容只取自 repo(優先本機檔案)。
- **完整區塊**:SEO/Open Graph meta、置頂導覽列、Hero、視覺展示、功能網格、含複製按鈕的多平台安裝分頁、FAQ 手風琴、頁尾。

## 使用方式

1. 將本 repo(或只放 `SKILL.md`)放進你所用工具的 skill 資料夾,例如 `.claude/skills/github-repo-landing-page/SKILL.md` 或 `.grok/skills/github-repo-landing-page/SKILL.md`,工具才能自動發現。
2. 提供本機 clone、GitHub 儲存庫網址或貼上其 README,例如 `https://github.com/owner/repo`。
3. 它會輸出 `landing/index.html`(不會覆蓋既有的 `index.html`)並執行驗證清單。可直接用瀏覽器開啟,或部署到 GitHub Pages。

### Headless 執行

建議的 Grok CLI 設定(不開 shell 工具,寫入限制在 `landing/`):

```bash
grok --prompt-file prompt.md --cwd <repo> --trust --permission-mode dontAsk \
  --tools read_file,list_dir,grep,write,search_replace,todo_write \
  --allow 'Write(<repo>/landing/**)' --allow 'Edit(<repo>/landing/**)' \
  --deny 'Read(~/.grok/**)' --deny 'Write(~/**)' --deny 'Edit(~/**)' \
  --disable-web-search --max-turns 30
```

- `dontAsk` 模式下,任何未預先核准的工具呼叫都會取消整個 turn(`stopReason: cancelled`)。把 `--tools` 限縮為檔案類工具,並只允許寫入 `<repo>/landing/**`,就能順利跑完。
- `--permission-mode acceptEdits` 不允許 shell 指令(只會自動核准檔案編輯),所以無法解決這個問題。
- shell 白名單在實測中行不通:複合指令(`&&`、`;`、`||`、重導向)會逐段檢查,兩次執行都在數秒內被取消。
- Headless 需要加 `--trust`,`.grok/skills/` 裡的專案 skill 才會被發現。這是隱藏旗標,會寫入 `~/.grok/trusted_folders.toml`;若不想讓該資料夾持續受信任,請事後移除該筆。
- 沒有 shell 時,agent 無法自行跑瀏覽器檢查,請事後自行驗證(例如用 Playwright)。

## 實測:Grok CLI

2026-10-29 使用 Grok CLI 1.0.62,依上述 headless 設定對 [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail)(GitHub Trending 專案,Apache-2.0)實測一次:

| 結果 | 數值 |
| --- | --- |
| 結束原因 | `end_turn` |
| 耗時 | 約 29 分鐘 |
| 回合數 | 18 |
| 費用 | 約 US$0.58 |

以上僅為單次執行的數字,會因模型與 repo 而異。

事後以 Playwright 驗證:

- 使用 repo 的真實截圖,沒有編造 badge。
- 無 console 錯誤。
- 390px 寬度下沒有橫向溢出。
- 繁體中文 / English 切換正常。

## 檔案說明

| 檔案 | 說明 |
| --- | --- |
| `SKILL.md` | Skill 定義(規則、區塊清單、工作流程、HTML 範本) |
| `README.md` | 英文說明 |
| `README.zh-TW.md` | 繁體中文說明 |
| `assets/demo.gif` | 上方的示範動畫 |
| `index.html` | 示範入口頁(所有示範頁的集中列表),作為 GitHub Pages 首頁 |
| `portal/*.webp` | 入口頁使用的縮圖 |
| `portal/template.html` | 入口頁的 HTML 範本 |
| `scripts/build-portal.mjs` | 由 `demo/**/index.html` 產生 `index.html`(純 Node,無相依套件) |
| `.github/workflows/build-portal.yml` | 當 `demo/**`、`portal/**` 或腳本變動時,自動重新產生 `index.html` 的 GitHub Action |
| `demo/index.html` | 產生的示範頁,以 GitHub Pages 提供 |
| `demo/macro/index.html` | 第二個產生的示範頁(macro-inc/macro),以 GitHub Pages 提供 |
| `demo/assistant-ui/index.html` | 另一個產生的示範頁(assistant-ui/assistant-ui),以 GitHub Pages 提供 |
| `demo/magicui/index.html` | 再一個產生的示範頁(magicuidesign/magicui),以 GitHub Pages 提供 |
| `demo/magicui-v2/` | magicuidesign/magicui 的對照示範(本 skill + ai-design-skills),含自架 `assets/` 與記錄假設與衝突取捨的 `NOTES.md` |
| `demo/agenui/index.html` | 還有一個產生的示範頁(AGenUI/AGenUI),以 GitHub Pages 提供 |

入口頁為自動產生:要新增示範,只要在 `demo/<名稱>/index.html` 放入頁面並 push,Action 就會加入對應卡片。示範頁可選用的 `<meta>`:`portal-name`、`portal-order`、`upstream-repo`、`upstream-license`、`description:zh-TW`。縮圖可選:`portal/<名稱>.webp`。
