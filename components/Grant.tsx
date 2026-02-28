export default function Grant() {
  return (
    <section id="grant" className="section bg-surface">
      <div className="ct">
        <div className="max-w-3xl mx-auto">

          {/* Card */}
          <div className="card p-10 md:p-14 text-center">
            <span className="section-label">Grant</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              助成金を活用できる<br />場合があります。
            </h2>

            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md mx-auto">
              条件により、助成金活用のご案内が可能です。<br />
              詳細は資料でご案内します。
            </p>

            {/* Subtle badge — 控えめに */}
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium text-gray-400 border border-gray-200 bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block" />
                助成金活用可能
              </span>
            </div>

            {/* Points */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
              {[
                {
                  title: "助成金の活用",
                  body: "要件を満たす場合、助成金の適用が可能です。詳細はお問い合わせください。",
                },
                {
                  title: "実質負担の軽減",
                  body: "制度を活用することで、導入コストを抑えられる場合があります。",
                },
                {
                  title: "申請のサポート",
                  body: "必要書類の整理など、担当者が伴走でサポートします。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-left"
                >
                  <div className="w-6 h-6 mb-3 text-accent-green">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 btn-primary !px-10 !py-4 !text-[15px]"
            >
              資料で詳細を確認する
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
