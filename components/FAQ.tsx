"use client";

import { useState } from "react";

const faqs = [
  {
    q: "本当に無料で使えますか？",
    a: "はい。SKILL TUNE 無料版は利用料金0円でご利用いただけます。現行機能の範囲での提供となり、個別開発・追加機能は対象外です。なお、無料版の提供は予告なく終了する場合があります。",
  },
  {
    q: "誰が利用できますか？",
    a: "外国人材を受け入れている企業のほか、登録支援機関・監理団体等にもご利用いただけます。支援先への基礎教育や、受入企業への報告材料としても活用できます。",
  },
  {
    q: "どんな内容を学べますか？",
    a: "「多言語で学べる」「職場ルールと安全教育」「キャリアアップ支援」「問題解決力と実践力」「日本社会と仕事文化」の5つの基礎コースをご用意しています。業種固有の専門教育ではなく、外国人材に共通して必要な基礎教育を扱います。",
  },
  {
    q: "導入にかかる期間はどのくらいですか？",
    a: "ご相談・利用準備・受講者登録・学習開始の4ステップでご案内します。利用条件や開始時期は対象人数や体制により異なるため、導入時に個別にご案内します。",
  },
  {
    q: "対応している言語を教えてください。",
    a: "日本語・英語・ベトナム語・中国語（簡体字）に対応しています。その他の言語については個別にご相談ください。スタッフの母語でコンテンツを届けられる設計です。",
  },
  {
    q: "管理者権限の設定はできますか？セキュリティは大丈夫ですか？",
    a: "拠点管理者・現場リーダー・HR担当など役割ごとに権限を設定できます。データはすべて暗号化して管理しており、個人情報の取り扱いは関連法令に準拠しています。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 text-xs font-bold text-navy-900 mt-0.5 w-4">Q</span>
          <span className="text-sm font-semibold text-gray-800 leading-snug">{q}</span>
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 flex gap-3 border-t border-gray-50">
          <span className="flex-shrink-0 text-xs font-bold text-accent-green mt-3 w-4">A</span>
          <p className="text-sm text-gray-500 leading-relaxed mt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="ct">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            よくあるご質問
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
