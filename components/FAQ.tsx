"use client";

import { useState } from "react";

const faqs = [
  {
    q: "価格・費用はどのくらいかかりますか？",
    a: "導入規模や運用体制によって最適なプランが異なります。価格の目安は資料にてご案内していますので、まずはお気軽にご請求ください。",
  },
  {
    q: "助成金は必ず活用できますか？",
    a: "助成金の適用可否は企業の状況・条件によって異なります。要件を満たした場合に活用できる制度があるため「助成金活用可能」とご案内しています。詳細は資料または担当者にてご確認ください。",
  },
  {
    q: "導入にかかる期間はどのくらいですか？",
    a: "初期ヒアリングから運用開始まで、最短3週間を目安にしています。スタッフ規模や業種により前後しますが、導入設計から運用開始まで担当者が伴走します。",
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
