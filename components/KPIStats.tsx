"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    label: "受講状況を一目で把握",
    desc:  "誰がどこまで進んでいるか、一画面で確認できます。",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    label: "多言語コンテンツに対応",
    desc:  "日本語・英語・ベトナム語など、母語での受講を実現。",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    label: "導入後すぐに進捗を一覧化",
    desc:  "設定後すぐにダッシュボードで全員の状況を把握できます。",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    label: "月次レポート生成",
    desc:  "月ごとの教育状況をレポートにまとめ、経営層への報告を簡略化。",
  },
];

export default function KPIStats() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="ct">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white px-6 py-7 hover:bg-gray-50/60 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduce ? 0 : i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-navy-900 mb-4"
                style={{ background: "rgba(15,27,76,0.07)" }}
              >
                {s.icon}
              </div>
              <div className="text-[14px] font-semibold text-gray-900 mb-1.5 leading-snug">
                {s.label}
              </div>
              <div className="text-[13px] text-gray-400 leading-relaxed">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
