const steps = [
  {
    num: "01",
    title: "ご相談",
    desc: "対象人数・利用目的を確認します。まずは情報収集だけでも問題ありません。",
  },
  {
    num: "02",
    title: "利用準備",
    desc: "企業・管理者アカウントを準備します。複雑な設定作業は必要ありません。",
  },
  {
    num: "03",
    title: "受講者登録",
    desc: "対象者を登録し、受講方法をご案内します。多言語での受講にも対応します。",
  },
  {
    num: "04",
    title: "学習開始",
    desc: "受講状況と学習データを確認できる状態になります。運用開始後もサポートします。",
  },
];

export default function Onboarding() {
  return (
    <section id="onboarding" className="section bg-white">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label">Onboarding</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            導入までの流れ
          </h2>
          <p className="mt-4 text-gray-500 text-base">
            ご相談から利用開始まで、4ステップでご案内します。
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[39px] top-10 bottom-10 w-px bg-gray-200" aria-hidden />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 items-start">
                {/* Circle */}
                <div className={`flex-shrink-0 relative z-10 w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-sm ${
                  i === steps.length - 1
                    ? "bg-navy-900 border-navy-900 text-white"
                    : "bg-white border-gray-200 text-navy-900"
                }`}>
                  <span className="text-xl font-bold font-mono">{s.num}</span>
                </div>

                {/* Content */}
                <div className="card p-6 flex-1 hover:shadow-card-hover transition-shadow">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-2 text-center"
          style={{ background: "rgba(15,27,76,0.05)" }}>
          <p className="text-[15px] font-semibold text-navy-900">
            最初の利用開始まで伴走します。
          </p>
          <p className="text-[13px] text-gray-500 sm:border-l sm:border-gray-300 sm:pl-5">
            利用条件・開始時期は、導入時に個別にご案内します。
          </p>
        </div>

        {/* Trust chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "利用料金0円",
            "返信は1営業日以内",
            "導入まで専任サポート",
            "まずは情報収集だけでも歓迎",
          ].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-[13px] text-gray-500"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 7L4.5 9.5 11 3" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
