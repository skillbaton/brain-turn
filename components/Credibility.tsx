const awards = [
  {
    year: "2020年",
    title: "全国留学生日本語スピーチコンテスト",
    prize: "最優秀賞",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0z" />
        <path d="M7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
      </svg>
    ),
  },
  {
    year: "2025年",
    title: "第64回 全国外国人弁論大会",
    prize: "外務大臣賞",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" />
      </svg>
    ),
  },
];

const partners = [
  { label: "提携日本語学校", value: "30", unit: "校以上" },
  { label: "提携専門学校",   value: "20", unit: "校以上" },
];

export default function Credibility() {
  return (
    <section id="credibility" className="section bg-surface">
      <div className="ct">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Background</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              外国人材支援の知見を、
              <br className="hidden sm:block" />
              教育設計へ。
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              日本で学び、現場で働いた経験を基に、
              <br className="hidden sm:block" />
              日本語・職場スキル・キャリア支援を統合しています。
            </p>
          </div>

          {/* Awards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {awards.map((a) => (
              <div key={a.title} className="card p-6 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-navy-900 flex-shrink-0"
                  style={{ background: "rgba(15,27,76,0.07)" }}
                >
                  {a.icon}
                </div>
                <div>
                  <div className="text-[12px] text-gray-400 mb-1">{a.year}</div>
                  <div className="text-[13px] text-gray-600 leading-snug mb-1">{a.title}</div>
                  <div className="text-[15px] font-bold text-navy-900">{a.prize}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner counts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p.label} className="card p-6 flex items-center justify-between">
                <span className="text-[13px] text-gray-600">{p.label}</span>
                <span className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-navy-900 leading-none">
                    {p.value}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">{p.unit}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-8 rounded-xl px-6 py-5 text-center"
            style={{ background: "rgba(15,27,76,0.05)" }}>
            <p className="text-[15px] font-semibold text-navy-900 leading-relaxed">
              教育内容だけでなく、外国人材が現場でつまずくポイントまで踏まえて設計しています。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
