"use client";

import DashboardMock from "@/components/DashboardMock";

export default function Hero() {
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

          {/* ── Left: Copy ── */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {/* solid badges */}
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold bg-navy-900 text-white">
                多言語対応
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold bg-navy-900 text-white">
                法人向けeラーニングシステム
              </span>
              {/* outline badge — 助成金は控えめ */}
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-gray-400 border border-gray-200 bg-white">
                助成金活用可能
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[2.5rem] md:text-5xl xl:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-gray-900">
              外国人雇用を、<br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #0F1B4C 0%, #2a3f8f 100%)",
                }}
              >
                &ldquo;現場任せ&rdquo;
              </span>
              から整える。
            </h1>

            {/* Sub copy */}
            <div className="mt-6 space-y-1 text-[15px] md:text-base text-gray-500 leading-relaxed max-w-[440px]">
              <p>日本語能力の差。報連相の不足。文化理解のズレ。</p>
              <p className="mt-3 text-gray-600">
                &ldquo;育成する&rdquo;のではなく、<br />
                理解と運用が揃う状態をつくる。
              </p>
              <p className="mt-2 text-gray-500">
                崩れたら気づける。だから、現場が安定する。
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary !px-8 !py-4 !text-[15px]">
                資料を請求する
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#solution" className="btn-secondary !px-8 !py-4 !text-[15px]">
                仕組みを見る
              </a>
            </div>

            {/* Login links */}
            <div className="mt-6 flex items-center gap-4 text-[13px] text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors underline underline-offset-2 decoration-gray-200">
                受講者ログイン
              </a>
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-gray-600 transition-colors underline underline-offset-2 decoration-gray-200">
                企業管理者ログイン
              </a>
            </div>
          </div>

          {/* ── Right: Dashboard Mock ── */}
          <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-[0.15]"
              style={{ background: "radial-gradient(ellipse at 50% 50%, #0F1B4C, transparent 70%)" }}
            />
            <div className="relative animate-fade-in">
              <DashboardMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
