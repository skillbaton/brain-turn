const hiddenCosts = [
  {
    label: "教育担当者の工数",
    desc: "毎月何時間が「説明」に消えていますか？",
    before: "月10時間",
    after:  "月1時間以下",
    annual: "年間▲108時間",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    label: "トラブル対応時間",
    desc: "ミスが起きてから対処に費やす時間。",
    before: "月4〜5件",
    after:  "月1件以下",
    annual: "年間▲48件",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L2 19h20L12 2z"/><path d="M12 9v5M12 16.5v.5"/>
      </svg>
    ),
  },
  {
    label: "再説明の工数",
    desc: "同じことを繰り返す疲弊感と非効率。",
    before: "月6回以上",
    after:  "月1〜2回",
    annual: "年間▲60回",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4a8.82 8.82 0 0113.78 5M20 20a8.82 8.82 0 01-13.78-5M4 12h16"/>
      </svg>
    ),
  },
];

const gains = [
  "注意・指摘の回数が減る",
  "スタッフとの衝突が減る",
  "現場の心理的負担が下がる",
  "組織の安定性が向上する",
];

export default function Value() {
  return (
    <section id="value" className="section bg-white">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Value</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            これは教育コストではありません。
          </h2>
          <p className="mt-4 text-gray-500 text-base">
            見えない負担は、積み重なっています。
          </p>
        </div>

        {/* Cost table */}
        <div className="card overflow-hidden mb-10 max-w-4xl mx-auto">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-0 bg-gray-50 border-b border-gray-100 px-6 py-3">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">負担項目</div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center w-24">導入前</div>
            <div className="text-xs font-semibold text-navy-900 uppercase tracking-wider text-center w-24">導入後</div>
            <div className="text-xs font-semibold text-accent-green uppercase tracking-wider text-center w-28">削減効果</div>
          </div>
          {hiddenCosts.map((item, i) => (
            <div
              key={item.label}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-0 items-center px-6 py-4 ${
                i < hiddenCosts.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 line-through text-center w-24">{item.before}</div>
              <div className="text-sm font-semibold text-navy-900 text-center w-24">{item.after}</div>
              <div className="text-sm font-semibold text-accent-green text-center w-28">{item.annual}</div>
            </div>
          ))}
        </div>

        {/* Gains */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card p-7 border-l-4 border-accent-green">
            <div className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-5">
              教育を管理することで
            </div>
            <ul className="space-y-3">
              {gains.map((g) => (
                <li key={g} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-green-bg border border-accent-green-border flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4 8 8.5 2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700">{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7 bg-navy-900 text-white border-0">
            <div className="text-xs text-blue-200 opacity-60 mb-2">本質的な価値</div>
            <p className="text-xl font-bold leading-snug mb-3">
              組織の安定性が向上します。
            </p>
            <p className="text-sm text-blue-100 opacity-75 leading-relaxed">
              これは教育投資ではありません。<br />
              組織運営の基盤整備です。<br />
              数値で管理できる仕組みが、<br />
              現場の安心をつくります。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
