# (MVP)^2 LP

**(MVP)^2** のランディングページ（オープンソース）。問い合わせ・Slack 参加が主目的。

「こんなLPも作れます」の一例として公開しています。MIT License。

## 技術スタック

- Next.js 15（App Router）
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui（new-york）※ Button のみ使用

fullsq-site と同じ土台で、DB・認証・Sentry・GA は未使用。

## 開発

```bash
npm install
npm run dev
```

`http://localhost:3000` で表示。

## ビルド・デプロイ

```bash
npm run build
npm start
```

Vercel / Netlify などにそのままデプロイ可能。
