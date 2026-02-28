export default function Problem() {
  const painPoints = [
    "同じミスが繰り返される",
    "「聞いていない」と言われる",
    "報告が遅れる",
    "注意が増える",
    "教育担当が疲弊する",
  ];

  return (
    <section id="problem" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + intro */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Problem
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              問題は、人ではなく
              <br />「再現性」にあります。
            </h2>
            <div className="mt-8 space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                外国人スタッフは真面目です。
                <br />
                やる気がないわけでもありません。
              </p>
              <p>それでも、</p>
            </div>

            {/* Pain point list */}
            <ul className="mt-6 space-y-3">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2L8 8M8 2L2 8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Root cause card */}
          <div className="space-y-6">
            <div className="card p-8 border-l-4 border-navy-900">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                なぜでしょうか。
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                それは、教育が「管理されていない」からです。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🗣️", label: "口頭指導" },
                { icon: "📄", label: "紙マニュアル" },
                { icon: "❓", label: "「分かった？」" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card p-5 text-center opacity-60"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6 bg-gray-50 border-gray-200">
              <p className="text-gray-600 text-base leading-relaxed">
                <span className="font-semibold text-gray-900">
                  理解は、可視化されていません。
                </span>
                <br />
                教育が実施されているかどうかは分かる。
                <br />
                しかし、理解されているかどうかは分からない。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
