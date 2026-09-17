const blocks = [
  {
    num: "01",
    label: "対象",
    items: ["受入企業", "登録支援機関", "監理団体等"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "学習",
    items: ["5つの基礎コース", "多言語で受講可能"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "管理",
    items: ["受講進捗の確認", "理解度の確認", "学習データの確認"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 13v-3M11.5 13V8M16 13v-5" />
      </svg>
    ),
  },
];

export default function FreePlan() {
  return (
    <section id="freeplan" className="section bg-surface">
      <div className="ct">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.3fr_auto] gap-8 items-center mb-12">
          <div>
            <span className="section-label">Free</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              SKILL TUNE<span className="text-navy-900">無料版</span>で
              <br className="hidden sm:block" />
              できること
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              現行機能を、無料版としてご利用いただけます。
            </p>
          </div>

          {/* Price badge */}
          <div className="flex lg:justify-end">
            <div
              className="rounded-2xl px-8 py-6 text-center text-white"
              style={{ backgroundColor: "#1B2B4B" }}
            >
              <div className="text-[11px] tracking-widest uppercase text-white/60 mb-1">
                利用料金
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold leading-none">0</span>
                <span className="text-xl font-bold">円</span>
              </div>
              <div className="mt-2 text-[12px] font-medium text-white/80">
                無料で始められます
              </div>
            </div>
          </div>
        </div>

        {/* 3 blocks */}
        <div className="grid md:grid-cols-3 gap-4">
          {blocks.map((b) => (
            <div key={b.num} className="card p-7">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-navy-900 flex-shrink-0"
                  style={{ background: "rgba(15,27,76,0.07)" }}
                >
                  {b.icon}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-300 font-mono leading-none mb-1">
                    {b.num}
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 leading-none">{b.label}</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {b.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-navy-900 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 7 7.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scope note */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white px-5 py-4 flex items-start gap-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="flex-shrink-0 mt-0.5 text-navy-900"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            無料版は<span className="font-semibold text-gray-900">現行機能の範囲</span>で提供します。個別開発・追加機能は対象外です。
            なお、無料版の提供は予告なく終了する場合があります。
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary !px-10 !py-4 !text-[15px]">
            無料版を申し込む
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
