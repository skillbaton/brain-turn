import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const title = "外国人材教育を、無料で仕組み化。| SKILL TUNE 無料版";
const description =
  "学習・可視化・育成を一つにまとめた外国人材向けeラーニング。5つの基礎コースを多言語で受講でき、受講状況・理解度・学習データを可視化します。現行機能を利用料金0円の無料版として提供。受入企業・登録支援機関・監理団体等にご利用いただけます。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
    siteName: "SKILL TUNE",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "外国人材教育を、無料で仕組み化。利用料金0円のSKILL TUNE 無料版。",
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
