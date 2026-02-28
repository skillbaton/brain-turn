import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "外国人雇用を、構造で管理する | 教育管理SaaS",
  description:
    "日本語能力の差・報連相の不足・文化理解のズレを、注意ではなく仕組みで解決。外国人スタッフの理解度を数値管理し、教育を再現可能にする法人向け教育管理SaaSです。",
  openGraph: {
    title: "外国人雇用を、構造で管理する | 教育管理SaaS",
    description:
      "理解を数値で管理できる仕組みへ。外国人雇用に特化した教育管理SaaSで、属人化を排除し、再現性のある組織運営を実現します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "外国人雇用を、構造で管理する | 教育管理SaaS",
    description: "理解を数値で管理できる仕組みへ。法人向け教育管理SaaS。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
