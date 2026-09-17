const columns = [
  {
    title: "登録支援機関",
    items: [
      "複数人の基礎教育を支援",
      "学習状況を把握",
      "受入企業への報告材料に活用",
      "継続支援の接点をつくる",
    ],
  },
  {
    title: "監理団体等",
    items: [
      "来日前後の基礎教育に活用",
      "共通基準づくりに活用",
      "育成就労・特定技能を見据えた支援",
    ],
  },
];

const effects = [
  {
    label: "教育の標準化",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h4v-6H3zM10 20h4V9h-4zM17 20h4V4h-4z" />
      </svg>
    ),
  },
  {
    label: "見える化による説明力向上",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "受入企業との連携強化",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 13l-3.5 3.5a2.1 2.1 0 003 3L11 16" />
        <path d="M16 11l3.5-3.5a2.1 2.1 0 00-3-3L13 8" />
        <path d="M9 15l6-6" />
      </svg>
    ),
  },
];

export default function Support() {
  return (
    <section id="support" className="section bg-surface">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Support</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            登録支援機関・監理団体にも
            <br className="hidden sm:block" />
            活用できます。
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            企業だけでなく、支援側の運用にも役立ちます。
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr_0.9fr] gap-4 max-w-5xl mx-auto">

          {/* Two target columns */}
          {columns.map((col) => (
            <div key={col.title} className="card overflow-hidden">
              <div
                className="px-5 py-3.5 text-center"
                style={{ backgroundColor: "#0F1B4C" }}
              >
                <span className="text-sm font-bold text-white">{col.title}</span>
              </div>
              <ul className="p-6 space-y-3.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 border-navy-900 flex items-center justify-center">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 7 7.5 2" stroke="#0F1B4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[13px] text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Effects */}
          <div className="card overflow-hidden">
            <div className="px-5 py-3.5 text-center bg-gray-50 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-700">期待できる効果</span>
            </div>
            <ul className="p-6 space-y-5">
              {effects.map((e) => (
                <li key={e.label} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-navy-900"
                    style={{ background: "rgba(15,27,76,0.07)" }}>
                    {e.icon}
                  </span>
                  <span className="text-[13px] font-medium text-gray-800 leading-snug">
                    {e.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-8 max-w-5xl mx-auto rounded-xl px-6 py-5 text-center"
          style={{ background: "rgba(15,27,76,0.05)" }}>
          <p className="text-[15px] font-semibold text-navy-900">
            支援の質をそろえながら、現場との接点を増やします。
          </p>
        </div>

      </div>
    </section>
  );
}
