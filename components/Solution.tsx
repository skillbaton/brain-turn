const features = [
  {
    title: "受講状況を可視化",
    description: "誰がどのコンテンツを受講済みか、リアルタイムで把握。未受講者を自動検知し、管理者に通知します。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "理解度を数値管理",
    description: "テスト・確認クイズ・進捗データをもとに理解度スコアを算出。感覚ではなく数値で状態を把握します。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "未受講・未理解を検知",
    description: "閾値を下回るスタッフを自動で抽出。フォロー必要者のリストが即時生成されます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "月次レポート自動生成",
    description: "月ごとの教育状況サマリーを自動で出力。経営層への報告資料を作成する手間がなくなります。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "管理ダッシュボードで即時把握",
    description: "全スタッフの状況を一画面で確認。ドリルダウンにより個人・チーム・拠点単位での分析が可能です。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Solution
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            教育を「再現可能」にする設計。
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            担当者が変わっても、同じ質で運用できる。
            <br />
            それが「仕組み」の力です。
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`card p-7 hover:shadow-md transition-shadow ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900 mb-5"
                style={{ background: "rgba(15,27,76,0.06)", borderColor: "rgba(15,27,76,0.1)" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard mock strip */}
        <div className="mt-10 card overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-navy-900 to-navy-500" />
          <div className="p-8 bg-gray-50">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 font-mono">管理ダッシュボード</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "受講完了率", value: "87%", delta: "+5%" },
                { label: "平均理解度スコア", value: "72点", delta: "+8点" },
                { label: "未受講スタッフ", value: "3名", delta: "−2名" },
                { label: "今月の受講数", value: "142件", delta: "+31件" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-accent-green font-medium mt-1">{stat.delta} 先月比</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
