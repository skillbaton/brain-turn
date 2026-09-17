const courses = [
  {
    num: "01",
    title: "多言語で学べる",
    desc: "日本語＋外国語に対応。母語で理解してから、日本語での業務につなげます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "職場ルールと安全教育",
    desc: "安全・衛生・会社ルール・日本の働き方。現場で最初に必要になる基準を揃えます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.4 8.9-8 10-4.6-1.1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "キャリアアップ支援",
    desc: "目標設定とスキル向上。働き続けた先に何があるかを示し、定着につなげます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h4v-6H3zM10 20h4V9h-4zM17 20h4V4h-4z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "問題解決力と実践力",
    desc: "ケース学習で「考えて行動する」力を育成。指示待ちから一歩先へ進みます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4" />
        <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "日本社会と仕事文化",
    desc: "マナー・文化・チームワーク。「なぜそうするのか」の背景から理解を揃えます。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 13l-3.5 3.5a2.1 2.1 0 003 3L11 16" />
        <path d="M16 11l3.5-3.5a2.1 2.1 0 00-3-3L13 8" />
        <path d="M9 15l6-6" />
      </svg>
    ),
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section bg-white">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Courses</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            5つの基礎教育テーマ
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            仕事の基礎から、将来の成長まで支えます。
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {courses.map((c) => (
            <div key={c.num} className="card-hover p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-navy-900"
                  style={{ background: "rgba(15,27,76,0.07)" }}
                >
                  {c.icon}
                </div>
                <span className="text-[11px] font-bold text-gray-300 font-mono">{c.num}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-2 leading-snug">
                {c.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-[13px] text-gray-400">
          業種固有の専門教育ではなく、外国人材に共通して必要な基礎教育を扱います。
        </p>

      </div>
    </section>
  );
}
