# Frontend Engineer Exam

## 如何執行

1. install package

> npm i

2. run start

> npm run start

## 專案架構

- 使用專案提供的 cra 模板繼續開發
- 使用 `react + tailwind + js` 進行開發
- 使用其他套件：`react-query`, `react-router-dom`, `framer-motion`, `react-hook-form`
- 使用 `@mui` 元件進行開發

## 邏輯說明

- banner 使用 framer-motion, 偵測滑鼠軌跡, 改變眼睛的位置, logo 也是使用 framer-motion 的 animate 操作放大縮小。
- 將 filter 及 pagination 的結果放在 `url searchParams` 裡面做狀態管理, 配合 `react-query ` 做狀態更新。
- 使用監聽 resize 的 custom hook 決定 per_page 跟 要不要 filter。
- 使用 `react-query` 控制資料狀態, 如 isPending, isError... 等。
- job card 同樣藉由 `react-query` 控制狀態, 傳入資料的同時, 也抓詳細資料, 點擊 查看細節 可以打開 dialog。
- job detail 的 description 用 `dangerouslySetInnerHTML` 塞入 raw html, 沒辦法用 tailwind 的部分用 css 作樣式處理。

## 遇到困難, 問題, 解決辦法

第一次使用 `@mui` 所以花了點時間研究使用及樣式的串接, 解決辦法就是去看官方文件, 照著做就解決了。
