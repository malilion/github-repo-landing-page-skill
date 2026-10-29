# GitHub Repo Landing Page Skill

[English](README.md) | 繁體中文

一個 Claude Skill,可將任何 GitHub 儲存庫網址或 `README.md` 轉換成可直接上線、支援雙語(繁體中文 / English)的單檔 HTML 登陸頁。

## 特色

- **單一檔案**:所有內容都在一個 `index.html`,不需建置流程,也不需 npm install。
- **僅使用 CDN**:Tailwind CSS、Google Fonts、Lucide Icons。
- **自適應設計**:依專案性質自動選擇視覺風格(CLI/DevOps、AI/SaaS、設計工具、消費/遊戲)。
- **即時雙語切換**:以前端 `data-i18n` 字典切換 繁體中文 / English,無需重新載入。
- **無破圖**:使用 Tailwind 打造的擬真介面與 SVG,不虛構圖片路徑。
- **完整區塊**:SEO/Open Graph meta、置頂導覽列、Hero、視覺展示、功能網格、含複製按鈕的多平台安裝分頁、FAQ 手風琴、頁尾。

## 使用方式

1. 將 `github_repo_landing_page_skill.md` 加入你的 Claude skills(例如放在 skill 資料夾中並命名為 `SKILL.md`)。
2. 提供 GitHub 儲存庫網址或貼上其 README,例如 `https://github.com/owner/repo`。
3. Claude 會輸出完整的 `index.html`,可直接用瀏覽器開啟,或部署到 GitHub Pages。

## 檔案說明

| 檔案 | 說明 |
| --- | --- |
| `github_repo_landing_page_skill.md` | Skill 定義(規則、區塊清單、工作流程、HTML 範本) |
| `README.md` | 英文說明 |
| `README.zh-TW.md` | 繁體中文說明 |
