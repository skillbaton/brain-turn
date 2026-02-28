const steps = [
  {
    num: "01",
    title: "資料請求・ヒアリング",
    desc: "フォームよりご連絡ください。1営業日以内にご連絡し、貴社の状況をヒアリングします。",
    duration: "〜1週間",
  },
  {
    num: "02",
    title: "導入設計・初期設定",
    desc: "スタッフ構成・業務内容に合わせて初期設定を実施。コンテンツの配信設定まで伴走します。",
    duration: "〜2週間",
  },
  {
    num: "03",
    title: "運用開始・定着支援",
    desc: "ダッシュボードで即日運用スタート。定着まで担当サポーターがサポートします。",
    duration: "運用開始",
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
            最短3週間で運用開始。複雑な設定は不要です。
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
                <div className={`flex-shrink-0 relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 shadow-sm ${
                  i === steps.length - 1
                    ? "bg-navy-900 border-navy-900 text-white"
                    : "bg-white border-gray-200 text-navy-900"
                }`}>
                  <span className="text-[10px] font-semibold opacity-60">{s.num}</span>
                  <span className="text-[10px] font-semibold mt-0.5">{s.duration}</span>
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

        {/* Trust chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "初期費用の目安は資料に記載",
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
