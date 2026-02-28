interface GrantProps {
  onOpenModal: () => void;
}

export default function Grant({ onOpenModal }: GrantProps) {
  return (
    <section id="grant" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge bg-accent-green-bg text-accent-green border border-accent-green-border text-sm px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="flex-shrink-0">
                <path d="M7 0l1.76 4.43L14 5.09l-3.5 3.26.89 4.65L7 10.77 2.61 13l.89-4.65L0 5.09l5.24-.66L7 0z" />
              </svg>
              助成金活用可能
            </span>
          </div>

          {/* Content card */}
          <div className="card p-10 md:p-14 text-center border-2 border-accent-green-border bg-gradient-to-b from-white to-accent-green-bg/30">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Grant
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              導入の選択肢を広げる
              <br />
              制度があります。
            </h2>

            <p className="mt-7 text-gray-600 text-base leading-relaxed max-w-lg mx-auto">
              本プログラムは、助成金活用が可能です。
              <br />
              条件により、実質負担を抑えた導入も可能です。
            </p>

            <p className="mt-3 text-gray-500 text-sm">
              詳細は資料にてご案内いたします。
            </p>

            {/* Info items */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
              {[
                {
                  label: "人材開発支援助成金",
                  note: "OFF-JT訓練費用への適用",
                },
                {
                  label: "キャリアアップ助成金",
                  note: "外国人労働者支援コース",
                },
                {
                  label: "その他制度",
                  note: "自治体ごとの補助制度も案内",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 border border-accent-green-border"
                >
                  <div className="w-6 h-6 mb-3 text-accent-green">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenModal}
              className="mt-10 inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-700 transition-colors shadow-md"
            >
              助成金活用を含む資料を請求する
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
