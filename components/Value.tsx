const hiddenCosts = [
  {
    label: "教育担当者の工数",
    description: "毎月何時間が「説明」に消えていますか？",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" />
      </svg>
    ),
  },
  {
    label: "トラブル対応時間",
    description: "ミスが発生してから対処に費やす時間と費用。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 3L2 17h16L10 3z" />
        <path d="M10 9v4M10 14.5v.5" />
      </svg>
    ),
  },
  {
    label: "再説明の時間",
    description: "同じことを何度も繰り返す疲弊感と非効率。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4a8 8 0 110 12" />
        <path d="M4 8V4H8" />
      </svg>
    ),
  },
];

const gains = [
  "注意の回数が減る",
  "衝突が減る",
  "現場の心理的負担が減る",
  "組織の安定性が向上する",
];

export default function Value() {
  return (
    <section id="value" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Value
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              これは教育コストではありません。
            </h2>
            <p className="mt-6 text-gray-500 text-base leading-relaxed">
              見えない負担は、積み重なっています。
            </p>

            <div className="mt-8 space-y-5">
              {hiddenCosts.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Transformation */}
          <div>
            <div className="card p-8 border-l-4 border-accent-green">
              <div className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-6">
                教育を管理することで
              </div>
              <ul className="space-y-4">
                {gains.map((gain) => (
                  <li key={gain} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green-bg border border-accent-green-border flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-gray-800 font-medium">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 card p-7 bg-navy-900 text-white border-0">
              <div className="text-sm text-navy-100 mb-2 opacity-70">結果として</div>
              <p className="text-xl font-semibold leading-snug">
                組織の安定性が向上します。
              </p>
              <p className="text-sm text-blue-100 mt-3 opacity-80 leading-relaxed">
                これは教育投資ではありません。
                <br />
                組織運営の基盤整備です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
