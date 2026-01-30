# (MVP)^2 LP

**(MVP)^2** のランディングページ（オープンソース）。問い合わせ・Slack 参加が主目的。

「こんなLPも作れます」の一例として公開しています。MIT License。

## 技術スタック

- Next.js 15（App Router）
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui（new-york）



## 開発

```bash
pnpm install
pnpm dev
```

`http://localhost:3000` で表示。

## ビルド・デプロイ

```bash
pnpm build
pnpm start
```

Vercel / Netlify などにそのままデプロイ可能。

## お問い合わせフォーム（Google フォーム）

`/contact` でフォームを埋め込み表示します。Google フォーム作成後、以下どちらかで URL を設定してください。

- **環境変数**: `.env.local` に `NEXT_PUBLIC_GOOGLE_FORM_URL=フォームのURL` を追加（`.env.local.example` を参照）
- **コード**: `src/lib/constants.ts` の `CONTACT_FORM_URL` を直接書き換え

未設定のときは設定手順が表示されます。
