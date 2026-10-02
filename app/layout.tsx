import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Jingu's kitchen journey to release his secret recipe learned throughout his life as a Chef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex justify-between">
          <a href="/">Jingles</a>
          
          <nav className="flex gap-4">
            <a href="#recipe">레시피</a>
            <a href="#story">요리사 이야기</a>
            <a href="#contact">문의</a> 
          </nav>
        </header>  
        {children}
      </body>
    </html>
  );
}
