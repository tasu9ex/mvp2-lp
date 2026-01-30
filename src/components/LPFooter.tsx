"use client";

import { useEffect, useState } from "react";

export default function LPFooter() {
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const deployTime = process.env.NEXT_PUBLIC_DEPLOY_TIME;
    if (deployTime) {
      const deployDate = new Date(deployTime);
      setLastUpdated(
        new Intl.DateTimeFormat("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour12: false,
        }).format(deployDate)
      );
    } else {
      setLastUpdated(
        new Intl.DateTimeFormat("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    }
  }, []);

  return (
    <footer className="border-t border-border bg-muted/30 py-6 px-6 text-center mt-auto">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} (MVP)². All rights reserved.
        </p>
        {lastUpdated && (
          <p className="text-xs text-muted-foreground mt-1">
            最終更新: {lastUpdated} (JST)
          </p>
        )}
      </div>
    </footer>
  );
}
