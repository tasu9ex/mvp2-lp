/**
 * LP で使う外部URL。
 * Google フォームは作成後、.env.local に NEXT_PUBLIC_GOOGLE_FORM_URL を設定するか
 * ここで直接書き換えてください。
 */
export const SLACK_INVITE_URL =
  "https://join.slack.com/t/mvp2hq/shared_invite/zt-3opjr9ajp-wfmvyEn6sKKZCzGeDvKrjQ";

/** お問い合わせ用 Google フォームの URL（viewform のリンクでOK） */
export const CONTACT_FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ?? "https://forms.gle/6EweuDyRE6hNxGN5A";

/** 埋め込み用（?embedded=true を付与） */
export const CONTACT_FORM_EMBED_URL = CONTACT_FORM_URL
  ? `${CONTACT_FORM_URL}${CONTACT_FORM_URL.includes("?") ? "&" : "?"}embedded=true`
  : "";
