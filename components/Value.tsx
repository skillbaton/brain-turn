const merits = [
  {
    num: "01",
    title: "教育内容を統一できる",
    desc: "担当者ごとにバラついていた教え方を、共通のコースに揃えられます。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l2 2 4-4" />
        <path d="M16 3H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "同じ説明・再指導の負担を減らせる",
    desc: "一度整えた教材が繰り返し使われるため、口頭での説明が積み重ならなくなります。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0112 3a8.4 8.4 0 019 8.5z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "人材ごとの状況を把握できる",
    desc: "受講状況・理解度・学習データが残るため、感覚ではなく記録で判断できます。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M7 12v-2M11.5 12V8M16 12v-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "フォローすべき人を絞り込める",
    desc: "未受講者・基準未達者が一覧でわかるため、限られた時間を必要な人に使えます。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "継続的な育成につなげられる",
    desc: "蓄積した学習データから育成候補を選定し、次の支援へ接続できます。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 7v5h-5" />
      </svg>
    ),
  },
];

const gains = [
  "注意・指摘の回数が減る",
  "スタッフとの衝突が減る",
  "現場の心理的負担が下がる",
  "組織の安定性が向上する",
];

export default function Value() {
  return (
    <section id="value" className="section bg-white">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Value</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            受入企業にとってのメリット
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            現場任せの教育から、会社として管理する教育へ。
          </p>
        </div>

        {/* Merits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {merits.map((m) => (
            <div key={m.num} className="card-hover p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-navy-900"
                  style={{ background: "rgba(15,27,76,0.07)" }}
                >
                  {m.icon}
                </div>
                <span className="text-[11px] font-bold text-gray-300 font-mono">{m.num}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-2 leading-snug">
                {m.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}

          {/* Closing card */}
          <div className="card p-7 bg-navy-900 text-white border-0 flex flex-col justify-center">
            <div className="text-xs text-blue-200 opacity-60 mb-2">本質的な価値</div>
            <p className="text-lg font-bold leading-snug mb-3">
              教育負担の軽減と、
              <br />
              人材の戦力化を同時に。
            </p>
            <p className="text-[13px] text-blue-100 opacity-75 leading-relaxed">
              これは教育投資ではなく、
              <br />
              組織運営の基盤整備です。
            </p>
          </div>
        </div>

        {/* Gains */}
        <div className="card p-7 max-w-4xl mx-auto border-l-4 border-accent-green">
          <div className="text-xs font-semibold text-accent-green uppercase tracking-wider mb-5">
            教育を管理することで
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {gains.map((g) => (
              <li key={g} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-green-bg border border-accent-green-border flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 8 8.5 2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">{g}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
