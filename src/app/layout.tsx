import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRODARTS",
  description: "Phoenixdarts PRODARTS Tournament",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans bg-[#eee] dark:bg-[#121212] text-black dark:text-[#E0E0E0] overflow-x-hidden transition-colors duration-300 flex flex-col min-h-screen">
        
        {/* 신규 메인 헤더 */}
        <Header />
        
        {/* 전체 레이아웃 래퍼 */}
        <div className="w-full relative flex-1 flex flex-col">
          {children}
        </div>
        
        {/* 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
