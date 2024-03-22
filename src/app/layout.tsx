import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickCut AI",
  description: "영상 편집, AI로 쉽고 편하게",
  robots:
    "영상편집, 동영상편집, ai영상편집, ai동영상편집, 인공지능영상편집, 영상공백제거, 오디오공백제거, 팟캐스트편집, 인터뷰편집, 유튜브편집, 자동편집, 영상자동편집, 자동영상편집",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
