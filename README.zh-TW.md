# GitHub Repo Landing Page Skill

[English](README.md) | 繁體中文

一個通用的 Agent Skill(標準 `SKILL.md` 格式,任何支援 skill 的 AI 程式助理都能用,例如 Claude Code、Grok CLI),可將任何 GitHub 儲存庫網址或 `README.md` 轉換成可直接上線、支援雙語(繁體中文 / English)的單檔 HTML 登陸頁。

![示範:Grok CLI 搭配本 skill 為 JetBrains/thinkrail 產生的登陸頁](assets/demo.gif)

*上圖登陸頁由 Grok CLI 搭配本 skill 為 [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail)(Apache-2.0)產生。GIF 內容為首屏、捲動瀏覽數個區塊,以及 繁體中文 / English 切換。*

**線上示範:** [https://malilion.github.io/github-repo-landing-page-skill/demo/](https://malilion.github.io/github-repo-landing-page-skill/demo/)

## 特色

- **單一檔案**:所有內容都在一個 `index.html`,不需建置流程,也不需 npm install。
- **僅使用 CDN**:Tailwind CSS、Google Fonts(含 Noto TC 繁中字型)、Lucide Icons,固定版本並在可行處加 SRI。
- **自適應設計**:依專案性質自動選擇視覺風格(CLI/DevOps、AI/SaaS、設計工具、消費/遊戲)。
- **即時雙語切換**:以前端 `data-i18n` 字典切換 繁體中文 / English,無需重新載入。
- **無破圖、不編造**:repo 有真實截圖就優先使用,沒有才用 Tailwind 擬真介面與 SVG;內容只取自 repo(優先本機檔案)。
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
| `demo/index.html` | 產生的示範頁,以 GitHub Pages 提供 |
