# Magic UI landing notes

這份筆記只給製作過程。頁面本體在 `index.html`。theirs 要求的 output format 放在這裡，不放進頁面。

Attribution comment on the page: Structure and conversion copy follow elayadesign/ai-design-skills landing-page-design (MIT, https://github.com/elayadesign/ai-design-skills); fonts, colour, i18n and asset rules follow github-repo-landing-page-skill.

## 假設

- 主要行動只有一個：前往安裝說明 `https://magicui.design/docs/installation`（網址出自 `skills/magic-ui/SKILL.md`）。轉換定義是點擊這個連結。
- 對象是已經使用 React 或 Next.js，以及 Tailwind CSS 的設計工程師。依據是 README 的 “UI Library for Design Engineers”，以及 skill 寫的前置條件。
- 流量來源未知。這是常青的元件庫說明，不是限時廣告頁，因此 `index, follow`。
- 沒有可引用的用戶引言、星數、下載量或客戶商標數字。頁面不顯示這類證明。showcase 圖說依檔名與畫面內容寫成簡短說明。
- 「75」是這份 `registry.json` 裡、頂層 `"type": "registry:ui"` 的項目數（`magic-card` 到 `grid-beams`）。example / demo 不算。`mode-toggle.tsx` 只出現在 dock demo 的 files 裡，不算獨立項目。
- 根目錄 `package.json` 是 `"private": true`、`"version": "0.1.0"`。頁面不把它寫成 `npm install magicui`。
- 風險消除只用 MIT 授權本文。頁面不提定價、試用或退款。
- 預設語言是繁體中文。選擇存在 `localStorage` 鍵 `magicui-landing-lang`。
- 色彩取自 `apps/www/app/icon.svg`（以及本頁 `./assets/icon.svg`）的 `#9E7AFF`、`#FE8BBB`、`#FFBD7A`、`#F8EAC3`，底色是偏紫的暖墨 `#141016`。
- Hero 是 README 的 bento-grid 動圖（原 GIF 3.2 MB），轉成靜音循環的 `hero.webm`（87 KB）與 `hero.mp4`（104 KB），搭配 `hero-poster.webp`（10 KB）。`og:image` 是自架的 1200×630 `og.jpg`（38 KB）。showcase 框用 16:10，`object-fit: contain`，避免裁切與版面位移。
- `package.json` engines 是 Node `>=22.14.0`、pnpm `>=9`，`packageManager` 是 `pnpm@9.15.0`。
- 貢獻時間同時保留兩個原文數字：README 寫約 5 分鐘，CONTRIBUTING.md 寫約 10 分鐘、5 個檔案。頁面兩邊都寫明出處，不取其中一個當成唯一事實。

## 1. 頁面結構大綱

版型 **A. Classic hero plus sections**。理由：元件庫可以用一張 Pixel Image 示範圖與一條 registry 指令理解，不需要長篇故事，也沒有本機可比對的競品頁。

順序：

1. Skip link
2. 浮動導覽（概覽、結果、使用方式、作品截圖、常見問題、倉庫文字連結、語言、同一個主要行動）
3. Hero：標題、副標、唯一主要按鈕、MIT / 版本 / 75 項證明、Pixel Image 示範圖
4. Benefits：四個結果，加上可篩選的 75 個 slug（空狀態、清除按鈕的 disabled）
5. B11 標語逐字顯現（獨立區塊，不貼在 hero 正下方）
6. How it works：三步驟，內含三種真實指令分頁與複製
7. Proof：六張 showcase 截圖
8. FAQ：十題
9. Final CTA：與 hero 相同的標題、副標、按鈕、證明句，前面加上 MIT 風險說明
10. Footer：MIT、倉庫、文件、貢獻指南、Discord、Twitter、回到頂端

沒有做的 B10 項目：privacy、terms、自訂 404、cookie consent、表單驗證。

## 2. Hero 文案

英文

- Headline: The UI library / for design engineers
- Subheadline: Animated React components for people who design and build. Add them to a Tailwind project through the shadcn registry. The source in this repository is under the MIT license.
- CTA: Open the installation guide
- Proof: MIT license · package version 0.1.0 · 75 registry:ui items in registry.json

繁體中文

- 標題：給設計工程師的 / 介面元件庫
- 副標：給同時做設計與實作的人。把 React 動效元件，透過 shadcn registry 加進已使用 Tailwind 的專案。原始碼在這個倉庫，授權為 MIT。
- CTA：開啟安裝說明
- 證明：MIT 授權 · 套件版本 0.1.0 · registry.json 有 75 個 registry:ui 項目

## 3. Benefits

1. 已命名的動效可安裝：Marquee、Blur Fade、Border Beam、Shimmer Button（描述依 registry.json）。
2. add 指令把原始碼放進專案：target 為 `components/magicui`；skill 的 import 示例是 `@/components/ui`，alias 不同要改。
3. 文件在 magicui.design：docs、components、installation、mcp。
4. 貢獻路徑寫在指南裡：5 個檔案、`pnpm build:registry`；README 約 5 分鐘，CONTRIBUTING 約 10 分鐘。

## 4. How it works

1. 在使用 Tailwind CSS 的 React 或 Next.js 專案執行 `npx shadcn@latest init`。
2. 執行 `npx shadcn@latest add @magicui/<slug>`。頁面示例 slug 是 skill 裡的 `magic-card`。Globe 的依賴是 `cobe` 與 `motion`。Marquee 的 keyframes 在 registry.json。
3. 優先用 props 與 className。檢查鍵盤、窄螢幕溢出，以及同一視窗裡的高強度動效數量。

分頁指令只收錄倉庫裡出現過的命令：registry 安裝、CONTRIBUTING 的 clone / pnpm / env / dev、以及 `pnpm check`、`pnpm build:registry`、`pnpm build`。

## 5. FAQ

十題：是什麼、如何安裝、授權、如何本機跑倉庫、腳本檢查什麼、文件在哪、去哪提問、0.1.0 是不是 npm 套件、import 失敗怎麼辦、有沒有試用定價退款。答案只複述 README、LICENSE.md、CONTRIBUTING.md、package.json、.nvmrc、registry.json、skills/magic-ui。

## 6. SEO / AEO

- 建議索引：是。常青開源元件庫，不是廣告限定頁。
- `<title>` 預設繁體中文：Magic UI，給設計工程師的介面元件庫
- 英文 title（語言切到 English 時寫入 `document.title`，並作為 `og:title`）：Magic UI, the UI library for design engineers
- meta description（英文）與 meta description:zh-TW（繁體中文）寫在 `<head>`
- `og:image` 與 `twitter:image` 使用 README 已寫出的公開位址 `https://cdn.magicui.design/bento-grid.gif`。這次沒有連網，沒有核對該 URL 是否仍回 200。
- FAQ 以 HTML 問答呈現。JSON-LD `FAQPage` 由頁面字典在執行時寫入，語言與畫面一致。
- 頁面圖片不用這個 GIF，只用 `./assets/`。

## 7. 版型

**A. Classic hero plus sections。** 見上方理由。

## 視覺實作摘要

- 字體：Fraunces（標題，含斜體強調）、Plus Jakarta Sans、JetBrains Mono、Noto Sans TC。中文走 Noto Sans TC。
- 間距只用 theirs 的 token，對應 Tailwind：2、4、8、12、16、24、32、40、48、64、80、96px（`0.5` 到 `24` 的對應階級，不含 `p-5` 這類中間值）。
- 主按鈕 `text-base` / `font-semibold`，垂直 8px、水平 12px。標頭按鈕 `text-sm`。
- 圓角只用 Tailwind 預設。卡片 `rounded-3xl`（24px）加 `p-4`（16px）時，內層 `rounded-lg`（8px），符合 inner = outer − gap。
- 動態曲線 `cubic-bezier(0.22, 1, 0.36, 1)`。區塊 reveal：32px、透明度、700ms、IntersectionObserver、只播一次。`prefers-reduced-motion` 拿掉位移，只留透明度。
- 標語：每個詞先以 30% 透明度呈現完整文字色（第二行是琥珀色）。`IntersectionObserver` 的 `rootMargin: 0px 0px -28% 0px` 把觸發區收成視窗上方約 72%。詞進入該區後依閱讀順序逐詞變成不透明，間隔 80ms，過渡只動 opacity。Reduced motion 時直接全不透明、不逐詞播放。導覽目前區段與區塊進場也用 IntersectionObserver，沒有 scroll 監聽。
- 導覽：離開頂緣 16px、內容寬、半透明與模糊。手機選單是全高面板。漢堡線用 transform / opacity 變成關閉圖示。選單連結依序上移 24px 並淡入，間隔 60ms，最後一項延遲 360ms（低於 400ms 上限）。
- 狀態：hover 變色或微縮放、active `translateY(1px)`、focus-visible 紫色外框、圖片骨架為載入狀態、slug 篩選無結果為空狀態、複製失敗與圖片失敗為行內錯誤、篩選為空時清除按鈕 disabled。
- 圖示用 Lucide 0.469.0（ours 指定的 SRI）。不用 Phosphor / Solar / Iconamoon。

## 衝突與取捨

| 衝突項目 | 採用 | 原因 |
| --- | --- | --- |
| 字體選擇、斜體、字重上限 | ours | 使用者指定字體規則以 ours 為準。選 Fraunces + Plus Jakarta Sans + JetBrains Mono + Noto Sans TC，標題可用斜體。 |
| 平面深色底、背景漸層禁令、hero 灰階文字漸層、指定深色色票 | ours | 使用者指定色彩以 ours 與倉庫個性為準。底色與強調色來自 icon.svg。背景有低對比光暈與格線。 |
| 繁體中文 / English、`data-i18n`、`translations = { en, zh }`、預設繁中、記住選擇 | ours | 使用者指定。 |
| 單檔、Tailwind Play CDN 3.4.17、Lucide SRI、自架圖片相對路徑 | ours | 使用者指定。Lucide 的 SRI 使用 ours 範本裡針對 `lucide@0.469.0` 寫出的 hash。這次不能連網也不能跑 shell，沒有重算 hash。 |
| 圖示庫 Phosphor / Solar / Iconamoon | ours 的 Lucide | 與 CDN 規則同一衝突，使用者指定 Lucide。 |
| 單一主要行動、Hero / Benefits / How it works / Proof / FAQ / Final CTA、轉換文案、SEO 與 og | theirs | 使用者指定 Part A。hero 不放第二顆填色按鈕。 |
| 間距、圓角、動態、狀態、內容真實度 | theirs | 使用者指定 Part B 這些小節。 |
| B11 標語逐字顯現 | theirs | 使用者要求必須實作且會動。 |
| 語意化 HTML、alt、skip link | theirs | 使用者指定。 |
| B10 的 privacy、terms、404、cookie、表單驗證 | 略過 | 使用者指定略過。保留 favicon、meta、回到頂端、倉庫連結。 |
| A1 intake 提問 | 略過，改寫假設 | 使用者要求不要提問。假設在 `index.html` 開頭註解，並複寫在本檔。 |
| theirs 的 output format | 寫入本檔，不進頁面 | 使用者指定。 |
| ours 的 GitHub Star 填色按鈕 vs 單一 CTA | theirs 的單一 CTA | 倉庫連結做成導覽文字連結與頁尾連結，不是 hero 裡的第二顆按鈕。 |
| ours 的多套件安裝分頁 vs theirs 頁面結構 | 折衷：分頁放在 How it works 裡 | 結構骨架用 theirs。分頁內容只用倉庫真實指令，不補 npm / pip / brew。ours 對未涵蓋衝突優先，但頁面結構已被使用者指定為 theirs，所以不安插成獨立大段。 |
| ours 黏性玻璃頂欄 vs theirs 浮動導覽 | theirs 的浮動導覽 | 動態小節指定用 theirs。內容仍有 logo、版本、MIT、語言切換。 |
| B8 要求編造可信姓名、品牌與非整數 | 不編造 | 使用者明確禁止編造數字、徽章、用戶名稱與引言。B8 的「寫真實句子、不用填充詞、句子大小寫」仍採用。官方 slug、腳本名、網址裡的連字號保留，否則會改寫事實。 |
| B1 禁止內文連字號 vs 官方識別名 | 識別名保留連字號 | `registry-deps:check`、`magic-card`、檔名 `overlay-ui` 是來源字串，不是文案修辭。一般句子改寫成沒有連字號。 |
| 字級必須落在 Tailwind 預設階級 | theirs | ours 沒有相反規定，不構成字體選擇衝突。沒有使用任意 `font-size`。 |
| `text-wrap: balance` / `pretty`、句子大小寫 | theirs | 屬 Part A / B1 文案規則，與「選哪一種字體」無關。 |
| 主要 CTA 要 Quick Install 本機指令 vs 必須連到倉庫內真實網址 | 連到安裝文件 | 使用者限制主要 CTA 只能是倉庫出現過的網址。指令留在 How it works 的複製區。 |

## 本機核對

- 讀過 README.md、LICENSE.md、AGENTS.md、CONTRIBUTING.md、package.json、pnpm-workspace.yaml、lefthook.yml、.nvmrc、registry.json 的元件項目、skills/magic-ui/SKILL.md 與 references。
- `./assets/` 檔案：`icon.svg`、`pixel-image-demo.webp`、`showcase-aryankarma.webp`、`showcase-d1rshan.webp`、`showcase-miles.webp`、`showcase-overlay-ui.webp`、`showcase-pulpsense.webp`、`showcase-robot-toast.webp`。
- 沒有連網，沒有用 shell，所以沒有在瀏覽器執行頁面，也沒有重算 Lucide SRI，沒有確認 CDN 或 `og:image` 的 HTTP 狀態。
- 完成前以檔案搜尋核對：`data-i18n` / `data-i18n-alt` 的 key 是否兩邊字典都有、`./assets/` 路徑是否都在目錄裡、標語 CSS class 與 JS 是否都在。

## 修訂

第一版 hero 用了元件 demo 的樣本照片，頁面文字裡也有「這份檢出」之類關於素材來源的後設文字，圖說是通用句。這一版改成產品本身的 hero 動圖、移除後設文字、改寫成具體的 alt 與圖說。規則寫在 SKILL.md §6。
