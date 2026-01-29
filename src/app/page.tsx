import Link from "next/link";
import { MessageCircle, Zap, CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import LPFooter from "@/components/LPFooter";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/mvp2hq/shared_invite/zt-3opjr9ajp-wfmvyEn6sKKZCzGeDvKrjQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="border-b border-border bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-lg">(MVP)^2</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 sm:py-16">
        {/* Hero */}
        <section className="text-center mb-14">
          <p className="text-sm text-muted-foreground mb-2">モットー</p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            思いつきが明日にはビジネスになる
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            投資家や他人にそのまま見せて説明できる
            <strong className="text-foreground"> MVP（動く試作品）</strong>
            を、Web・アプリとして短期間で作るサービスです。
          </p>
        </section>

        {/* 3 points */}
        <section className="mb-12 space-y-4">
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>実際に触れる</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>画面を見せながら説明できる</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>「こういうサービスです」と一発で伝わる</span>
            </li>
          </ul>
        </section>

        {/* こんな方へ */}
        <section className="mb-12 p-4 sm:p-6 rounded-lg border border-border bg-muted/20">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4 text-secondary" />
            こんな方へ
          </h2>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>アイデアはあるけど形にできていない</li>
            <li>投資家に見せるものがなくて止まっている</li>
          </ul>
          <p className="text-sm text-foreground mt-3">
            まずは気軽に相談してください。最初のお客さん目線での率直な意見も歓迎です。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-4">
            相談用 Slack で DM も投稿も OK です。
          </p>
          <Button size="lg" asChild>
            <Link
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Slack で参加する
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            料金は成果報酬を想定。需要に合わせて相談しながら決めます。
          </p>
        </section>
      </main>

      <LPFooter />
    </div>
  );
}
