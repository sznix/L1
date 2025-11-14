import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FocusQuest",
  description:
    "Organize ADHD-friendly quests and track progress across Backlog, Doing, and Done columns.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
