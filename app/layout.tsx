import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SiteFooter from "@/components/home/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jingles",
  description: "진구의 레시피 웹사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 border-b border-line px-6 py-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="justify-self-center font-serif text-xl text-ink md:justify-self-start">Jingles</Link>
          <nav aria-label="주요메뉴" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-body md:col-start-2 md:row-start-1">
            <Link href="/recipes" className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">레시피</Link>
            <Link href="/about" className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">요리사 이야기</Link>
            <Link href="/contact" className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">문의</Link>
          </nav>
          <p className="hidden justify-self-end text-xs uppercase tracking-[0.16em] text-body md:block">Recipes from the line</p>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
