const painPoints = [
  { text: "同じミスが繰り返される",         icon: "🔁" },
  { text: "「聞いていない」と言われる",      icon: "🔇" },
  { text: "報告が遅れる",                  icon: "⏰" },
  { text: "注意が増え、担当者が疲弊する",    icon: "😤" },
];

const causes = [
  { label: "口頭指導",        sub: "記録に残らない" },
  { label: "紙マニュアル",    sub: "読んだか確認できない" },
  { label: "「分かった？」",  sub: "理解は可視化されない" },
];

export default function Problem() {
  return (
    <section id="problem" className="section bg-surface">
      <div className="ct">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Problem</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            問題は、人ではなく<br />
            <span className="text-navy-900">「再現性」</span>にあります。
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            外国人スタッフは真面目です。<br />
            やる気がないわけでもありません。<br />
            それでも、現場では同じ問題が繰り返されます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">

          {/* Left: Pain points */}
          <div className="space-y-3">
            {painPoints.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-card"
              >
                <span className="text-xl flex-shrink-0">{p.icon}</span>
                <span className="font-medium text-gray-700 text-sm">{p.text}</span>
                <div className="ml-auto flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Root cause */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-7">
              <div className="text-sm font-semibold text-gray-900 mb-1">なぜでしょうか。</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                それは、教育が「管理されていない」からです。
              </p>
              <div className="grid grid-cols-3 gap-3">
                {causes.map((c) => (
                  <div key={c.label} className="text-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="font-semibold text-gray-600 text-[13px] mb-1">{c.label}</div>
                    <div className="text-[10px] text-gray-400 leading-snug">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-900 text-white rounded-2xl p-6">
              <div className="text-xs text-blue-200 mb-2 opacity-70">結果として</div>
              <p className="text-base font-semibold leading-snug">
                理解は、可視化されていません。
              </p>
              <p className="text-sm text-blue-100 mt-2 opacity-70 leading-relaxed">
                教育が「実施されたか」は分かる。<br />
                しかし「理解されたか」は分からない。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
