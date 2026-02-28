export default function Insight() {
  const gaps = [
    { question: "誰が理解しているか", answered: false },
    { question: "どこでつまずいているか", answered: false },
    { question: "どの項目が定着していないか", answered: false },
  ];

  return (
    <section id="insight" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Insight
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            必要なのは、教育ではなく
            <br />「管理構造」。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Left: State of the art */}
          <div className="card p-8 border-dashed border-2 border-gray-200 bg-gray-50/50">
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
              現状
            </div>
            <p className="text-gray-600 text-base mb-6 font-medium">
              教育は実施されています。
            </p>
            <div className="text-sm text-gray-500 mb-3">しかし、</div>
            <ul className="space-y-4">
              {gaps.map((item) => (
                <li key={item.question} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 6H8" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-gray-600">
                    {item.question}
                    <span className="ml-1 text-gray-400 text-sm">— 把握できていない</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: What this service does */}
          <div className="card p-8 border-navy-900/20 border-2 bg-navy-50/5">
            <div className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-5">
              本サービスの役割
            </div>
            <p className="text-gray-900 text-xl font-semibold leading-snug mb-6">
              理解されている状態を
              <br />
              管理できるようにします。
            </p>
            <ul className="space-y-4">
              {[
                "誰が・何を・どの程度理解しているかを記録",
                "つまずきポイントをデータで特定",
                "定着状況をスコアで管理",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4.5 8L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
