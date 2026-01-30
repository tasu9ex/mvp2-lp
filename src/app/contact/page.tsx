import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import LPFooter from "@/components/LPFooter";
import { CONTACT_FORM_EMBED_URL, CONTACT_FORM_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="border-b border-border bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg hover:opacity-80">
            (MVP)^2
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            トップへ
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <h1 className="text-xl font-bold mb-2">お問い合わせ</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Slack が難しい方は以下のフォームからご連絡ください。返信希望方法（メール / LINE /
          電話）を選んでいただけます。
        </p>

        {CONTACT_FORM_URL ? (
          <div className="min-h-[500px] w-full rounded-lg border border-border overflow-hidden bg-muted/20">
            <iframe
              src={CONTACT_FORM_EMBED_URL}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="お問い合わせフォーム"
              className="min-h-[500px] w-full"
            />
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-muted/20 p-6 text-center text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">
              フォームの URL を設定してください
            </p>
            <p>
              Google フォームを作成後、<code className="bg-muted px-1 rounded">.env.local</code> に
              <br />
              <code className="bg-muted px-1 rounded text-xs">
                NEXT_PUBLIC_GOOGLE_FORM_URL=フォームのURL
              </code>
              <br />
              を追加するか、<code className="bg-muted px-1 rounded">src/lib/constants.ts</code> の
              CONTACT_FORM_URL を書き換えてください。
            </p>
            <p className="mt-4 text-xs">
              フォームのURL例:
              https://docs.google.com/forms/d/e/xxxxx/viewform
            </p>
          </div>
        )}
      </main>

      <LPFooter />
    </div>
  );
}
