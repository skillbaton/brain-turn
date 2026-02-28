"use client";

import { motion, useReducedMotion } from "framer-motion";
import DashboardMock from "@/components/DashboardMock";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-0 md:pt-32">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 60% 0%, rgba(15,27,76,0.055) 0%, transparent 65%)",
        }}
      />

      <div className="ct relative pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy with stagger ── */}
          <motion.div
            variants={stagger}
            initial={shouldReduce ? "show" : "hidden"}
            animate="show"
          >
            {/* Badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold bg-navy-900 text-white">
                多言語対応
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold bg-navy-900 text-white">
                法人向けeラーニングシステム
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-gray-400 border border-gray-200 bg-white">
                助成金活用可能
              </span>
            </motion.div>

            {/* H1 — 3行固定改行 */}
            <motion.h1
              variants={item}
              className="tracking-tight text-gray-900 font-bold"
              style={{ lineHeight: 1.08 }}
            >
              {/* 行1 */}
              <span className="block text-[1.95rem] md:text-[2.2rem] xl:text-[2.55rem]">
                外国人雇用を
              </span>
              {/* 行2 — 「教育」をグラデーション＋extrabold で強調 */}
              <span className="block text-[1.95rem] md:text-[2.2rem] xl:text-[2.55rem]">
                &ldquo;<span
                  className="text-transparent bg-clip-text font-extrabold"
                  style={{ backgroundImage: "linear-gradient(135deg, #0F1B4C 0%, #2a3f8f 100%)" }}
                >教育</span>&rdquo;という武器で
              </span>
              {/* 行3 — 「整える」を一回り大きく＋同グラデーション */}
              <span className="block text-[2.3rem] md:text-[2.6rem] xl:text-[3rem] mt-1.5">
                「<span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #0F1B4C 0%, #2a3f8f 100%)" }}
                >整える</span>」
              </span>
            </motion.h1>

            {/* Sub copy — 4行、一切削らない */}
            <motion.div
              variants={item}
              className="mt-8 space-y-2 max-w-[460px]"
            >
              {/* 1行目: やや太字 */}
              <p className="text-[15px] md:text-base font-semibold text-gray-700 leading-relaxed">
                SKILL TUNEは、ただの教育システムではありません。
              </p>
              <p className="text-[15px] md:text-base text-gray-500 leading-relaxed">
                受講状況・理解度・未対応者を可視化。
              </p>
              <p className="text-[15px] md:text-base text-gray-500 leading-relaxed">
                属人化しない教育運用を実現する。
              </p>
              {/* 4行目: 定義文、やや小さめ */}
              <p className="text-[13px] text-gray-400 leading-relaxed pt-1">
                外国人雇用に特化した法人向けeラーニングシステムです。
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary !px-8 !py-4 !text-[15px]">
                資料を請求する
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#solution" className="btn-secondary !px-8 !py-4 !text-[15px]">
                仕組みを見る
              </a>
            </motion.div>

            {/* Login links */}
            <motion.div
              variants={item}
              className="mt-6 flex items-center gap-4 text-[13px] text-gray-400"
            >
              <a
                href="#"
                className="hover:text-gray-600 transition-colors underline underline-offset-2 decoration-gray-200"
              >
                受講者ログイン
              </a>
              <span className="text-gray-200">|</span>
              <a
                href="#"
                className="hover:text-gray-600 transition-colors underline underline-offset-2 decoration-gray-200"
              >
                企業管理者ログイン
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard Mock (fade-in + float) ── */}
          <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-[0.15]"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, #0F1B4C, transparent 70%)",
              }}
            />
            {/* Fade-in wrapper */}
            <motion.div
              className="relative"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              {/* Float loop */}
              <motion.div
                animate={shouldReduce ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
              >
                <DashboardMock />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
