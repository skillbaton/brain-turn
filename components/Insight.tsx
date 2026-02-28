export default function Insight() {
  return (
    <section id="insight" className="section bg-white">
      <div className="ct">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label">Insight</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              必要なのは、&ldquo;教育&rdquo;ではなく<br />
              <span className="text-navy-900">整える仕組み。</span>
            </h2>
          </div>

          {/* Before → After */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">

            {/* Before */}
            <div className="card p-7 border-dashed border-2 border-gray-200 bg-gray-50/60">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                現状
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                研修や説明は、実施されています。
              </p>
              <p className="text-xs text-gray-400 mb-3">でも、こんな疑問が残ります。</p>
              <ul className="space-y-3">
                {[
                  "誰がどこまで理解しているか",
                  "どこでつまずいているか",
                  "どの項目が現場で定着していないか",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-500">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 5h4" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span>
                      {item}{" "}
                      <em className="not-italic text-gray-400">— 見えていない</em>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow (desktop) */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {/* Arrow (mobile) */}
            <div className="flex md:hidden items-center justify-center my-2">
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center shadow-md">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M9 4v10M5 10l4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* After */}
            <div className="card p-7 border-2 border-navy-200">
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#0F1B4C" }}
              >
                SKILL TUNE で整える
              </div>
              <p className="text-base font-semibold text-gray-900 leading-snug mb-5">
                「理解が揃っている状態」を<br />
                見える形で保てるようにします。
              </p>
              <ul className="space-y-3">
                {[
                  "誰が・何を・どの程度理解しているかを記録",
                  "つまずきポイントをデータで把握",
                  "定着状況をスコアで継続追跡",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: "#0F1B4C" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
