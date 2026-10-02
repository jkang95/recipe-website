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
      <body className="min-h-full flex flex-col">
        <header className="flex justify-between">
          <Link href="/">Jingles</Link>
          <nav className="flex gap-4">
            <Link href="/recipes">레시피</Link>
            <Link href="/about">요리사 이야기</Link>
            <Link href="/contact">문의</Link>
          </nav>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
