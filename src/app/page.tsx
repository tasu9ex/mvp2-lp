import Link from "next/link";
import { MessageCircle, Zap, CheckCircle2, ArrowRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import LPFooter from "@/components/LPFooter";
import { SLACK_INVITE_URL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="border-b border-border bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-lg">(MVP)²</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 sm:py-16">
        {/* Hero */}
        <section className="text-center mb-14">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            思いつきが明日にはビジネスになる
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            投資家や他人にそのまま見せて説明できる
            <strong className="text-foreground"> MVP（動く試作品）</strong>
            を、Web・アプリとして短期間で作るサービスです。
          </p>
          <p className="text-muted-foreground text-xs mt-3 max-w-xl mx-auto">
            その MVP を、MVP（最優秀選手）が作る。だから (MVP)²。
          </p>
        </section>

        {/* 3 points */}
        <section className="mb-12 space-y-4">
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>実際に触れる</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>画面を見せながら説明できる</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>「こういうサービスです」と一発で伝わる</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            例えば、こんな感じの簡易的なサイトもお作りできます。
          </p>
        </section>

        {/* こんな方へ */}
        <section className="mb-12 p-4 sm:p-6 rounded-lg border border-border bg-muted/20">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            こんな方へ
          </h2>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>アイデアはあるけど形にできていない</li>
            <li>投資家に見せるものがなくて止まっている</li>
          </ul>
          <p className="text-sm text-foreground mt-3">
            まずは気軽にご相談ください。率直なご意見・ご要望も歓迎です。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            相談・参加はこちら
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Slack で参加するか、フォームから希望の連絡方法（メール・LINE・電話など）で問い合わせできます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button size="lg" className="w-full sm:w-auto sm:min-w-[260px]" asChild>
              <Link
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Slack で参加する
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto sm:min-w-[260px] hover:bg-muted hover:text-foreground"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" />
                フォームで問い合わせる
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            お気軽にご相談ください。相談は無料です。
          </p>
        </section>
      </main>

      <LPFooter />
    </div>
  );
}
