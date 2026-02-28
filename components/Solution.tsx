const steps = [
  {
    num: "01",
    title: "配信",
    desc: "多言語コンテンツをスタッフへ自動配信。受講期限・順序も一括設定。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "可視化",
    desc: "受講率・理解度スコアをダッシュボードでリアルタイム把握。レポートは月次自動生成。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "フォロー",
    desc: "未受講・理解度不足のスタッフを自動検知。再受講を促すアラートを即時通知。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "受講状況をリアルタイム可視化",
    desc: "誰がどのコンテンツを受講済みか、一画面で即時把握。未受講者を自動検知します。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    title: "理解度を数値管理",
    desc: "テスト・確認クイズのデータから理解度スコアを算出。感覚ではなく数値で判断。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: "未受講・未理解を自動検知",
    desc: "閾値を下回るスタッフを即時抽出。フォロー必要者のリストが自動生成されます。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
      </svg>
    ),
  },
  {
    title: "月次レポート自動生成",
    desc: "月ごとの教育状況サマリーを自動出力。経営層への報告資料を作る手間がゼロに。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
  },
  {
    title: "管理ダッシュボードで即時把握",
    desc: "個人・チーム・拠点ごとにドリルダウン。状況を一画面でコントロール。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: "多言語コンテンツ対応",
    desc: "日本語・英語・ベトナム語など多言語でコンテンツを配信。言語の壁を構造で越える。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section bg-surface">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Solution</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            教育を「再現可能」にする設計。
          </h2>
          <p className="mt-4 text-gray-500 text-base">
            担当者が変わっても、同じ質で運用できる。それが「仕組み」の力です。
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="relative mb-14">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-gray-200" aria-hidden />

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-navy-900 flex items-center justify-center text-white shadow-lg mb-5">
                  {s.icon}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-navy-900 text-[10px] font-bold text-navy-900 flex items-center justify-center">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card-hover p-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-navy-900 mb-4"
                style={{ background: "rgba(15,27,76,0.07)" }}
              >
                {f.icon}
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
