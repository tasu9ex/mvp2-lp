import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "(MVP)² - 思いつきが明日にはビジネスになる",
  description:
    "投資家や他人にそのまま見せて説明できるMVP（動く試作品）を、Web・アプリとして短期間で作るサービス。アイデアを形に、相談から。",
  openGraph: {
    title: "(MVP)² - 思いつきが明日にはビジネスになる",
    description:
      "投資家や他人にそのまま見せて説明できるMVPを、短期間で。まずは気軽に相談してください。",
    locale: "ja_JP",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
