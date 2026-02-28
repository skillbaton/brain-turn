"use client";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative bg-white pt-32 pb-28 md:pt-40 md:pb-36 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,27,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="badge bg-accent-green-bg text-accent-green border border-accent-green-border">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <circle cx="5" cy="5" r="5" />
            </svg>
            助成金活用可能
          </span>
          <span className="badge bg-gray-50 text-gray-600 border border-gray-200">
            多言語対応
          </span>
          <span className="badge bg-gray-50 text-gray-600 border border-gray-200">
            法人向け教育管理SaaS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.12] tracking-tight max-w-3xl">
          外国人雇用を、
          <br />
          感覚ではなく
          <br className="sm:hidden" />
          <span className="text-navy-900">「構造」</span>で管理する。
        </h1>

        {/* Sub copy */}
        <div className="mt-8 max-w-xl space-y-1 text-gray-500 text-lg leading-relaxed">
          <p>日本語能力の差。</p>
          <p>報連相の不足。</p>
          <p>文化理解のズレ。</p>
          <p className="mt-4 text-gray-600">
            それらを「注意」で解決し続けるのではなく、
            <br />
            理解を数値で管理できる仕組みへ。
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-navy-900 text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-navy-700 transition-all shadow-md hover:shadow-lg"
          >
            資料を請求する
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-0.5">
              受講者ログイン
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-600 transition-colors border-b border-gray-200 pb-0.5">
              企業管理者ログイン
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
          <div>
            <div className="text-3xl font-bold text-navy-900">100%</div>
            <div className="text-sm text-gray-500 mt-1">受講状況の可視化</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900">多言語</div>
            <div className="text-sm text-gray-500 mt-1">コンテンツ対応</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-navy-900">即日</div>
            <div className="text-sm text-gray-500 mt-1">ダッシュボード把握</div>
          </div>
        </div>
      </div>
    </section>
  );
}
