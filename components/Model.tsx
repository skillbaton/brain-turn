const principles = [
  {
    num: "01",
    title: "標準化された課題設計",
    desc: "外国人雇用で共通して発生する課題を前提に設計。個社ごとにゼロから作る必要はありません。",
  },
  {
    num: "02",
    title: "スケーラブルな構造",
    desc: "5名でも500名でも同じ仕組みが機能します。規模が変わっても設計の本質は一貫します。",
  },
  {
    num: "03",
    title: "属人化の完全排除",
    desc: "担当者が変わってもシステムが引き継ぎます。「あの人がいないと回らない」を構造的に解消。",
  },
];

type CellType = "label" | "bad" | "good";

const rows: { label: string; before: string; after: string }[] = [
  { label: "構造の再現性",   before: "属人化しやすい",      after: "標準設計で一貫" },
  { label: "担当者変更時",   before: "引き継ぎコスト大",    after: "システムが継続" },
  { label: "進捗の可視化",   before: "手動で集計",          after: "自動・リアルタイム" },
  { label: "スケール対応",   before: "規模拡大で崩れやすい", after: "設計が変わらない" },
  { label: "レポート",       before: "毎月手作業で作成",     after: "月次自動生成" },
];

function Cell({ type, children }: { type: CellType; children: React.ReactNode }) {
  if (type === "label") {
    return (
      <div className="px-5 py-4 text-sm font-medium text-gray-700 border-b border-gray-100 border-r">
        {children}
      </div>
    );
  }
  if (type === "bad") {
    return (
      <div className="px-5 py-4 border-b border-gray-100 border-r flex items-center gap-2">
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M2 2l5 5M7 2L2 7" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="text-sm text-gray-400">{children}</span>
      </div>
    );
  }
  return (
    <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2"
      style={{ background: "rgba(15,27,76,0.03)" }}>
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 4.5L3.5 7 7.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="text-sm font-semibold text-navy-900">{children}</span>
    </div>
  );
}

export default function Model() {
  return (
    <section id="model" className="section bg-surface">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Model</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            属人化を排除する、<br />
            標準設計モデル。
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            本サービスは個別受託型ではありません。<br />
            外国人雇用に共通する課題を前提に標準化されており、<br />
            企業規模に関わらず同じ構造で機能します。
          </p>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {principles.map((p) => (
            <div key={p.num} className="card-hover p-7">
              <div className="text-5xl font-black text-gray-100 font-mono select-none mb-4 leading-none">
                {p.num}
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="card overflow-hidden max-w-4xl mx-auto">
          {/* Header row */}
          <div className="grid grid-cols-3">
            <div className="px-5 py-4 bg-gray-50 border-b border-r border-gray-100" />
            <div className="px-5 py-4 bg-gray-50 border-b border-r border-gray-100 text-center">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                従来の個別受託
              </span>
            </div>
            <div className="px-5 py-4 border-b border-gray-100 text-center"
              style={{ background: "#0F1B4C" }}>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                SKILL TUNE
              </span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-3 last:border-b-0">
              <Cell type="label">{row.label}</Cell>
              <Cell type="bad">{row.before}</Cell>
              <Cell type="good">{row.after}</Cell>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
