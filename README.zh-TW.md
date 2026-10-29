# GitHub Repo Landing Page Skill

[English](README.md) | 繁體中文

一個 Claude Skill,可將任何 GitHub 儲存庫網址或 `README.md` 轉換成可直接上線、支援雙語(繁體中文 / English)的單檔 HTML 登陸頁。

## 特色

- **單一檔案**:所有內容都在一個 `index.html`,不需建置流程,也不需 npm install。
- **僅使用 CDN**:Tailwind CSS、Google Fonts(含 Noto TC 繁中字型)、Lucide Icons,固定版本並在可行處加 SRI。
- **自適應設計**:依專案性質自動選擇視覺風格(CLI/DevOps、AI/SaaS、設計工具、消費/遊戲)。
- **即時雙語切換**:以前端 `data-i18n` 字典切換 繁體中文 / English,無需重新載入。
- **無破圖、不編造**:repo 有真實截圖就優先使用,沒有才用 Tailwind 擬真介面與 SVG;內容只取自 repo(優先本機檔案)。
- **完整區塊**:SEO/Open Graph meta、置頂導覽列、Hero、視覺展示、功能網格、含複製按鈕的多平台安裝分頁、FAQ 手風琴、頁尾。

## 使用方式

1. 將本 repo(或只放 `SKILL.md`)放進 skill 資料夾,例如 `.claude/skills/github-repo-landing-page/SKILL.md` 或 `.grok/skills/github-repo-landing-page/SKILL.md`,工具才能自動發現。
2. 提供本機 clone、GitHub 儲存庫網址或貼上其 README,例如 `https://github.com/owner/repo`。
3. 它會輸出 `landing/index.html`(不會覆蓋既有的 `index.html`)並執行驗證清單。可直接用瀏覽器開啟,或部署到 GitHub Pages。

### Headless 執行

在 headless 模式搭配 Grok CLI `--permission-mode dontAsk` 這類權限模式時,任何未預先允許的工具呼叫都會取消整個 turn(`stopReason: cancelled`),常常就發生在最後的驗證步驟。請預先允許 skill 需要的指令,例如寫入輸出資料夾、唯讀的 `git -C <repo> rev-parse/log/remote`、`ls`,以及你用來驗證的工具(本機靜態伺服器、headless 瀏覽器腳本);並拒絕危險指令(`git push`、`rm`)。

## 檔案說明

| 檔案 | 說明 |
| --- | --- |
| `SKILL.md` | Skill 定義(規則、區塊清單、工作流程、HTML 範本) |
| `README.md` | 英文說明 |
| `README.zh-TW.md` | 繁體中文說明 |
