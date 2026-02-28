const principles = [
  {
    number: "01",
    title: "標準化された課題設計",
    description:
      "外国人雇用において共通して発生する課題（言語・文化・報連相）を前提にコンテンツを設計。個社ごとに１から作る必要はありません。",
  },
  {
    number: "02",
    title: "スケーラブルな構造",
    description:
      "5名でも500名でも、同じ仕組みが機能します。企業規模に応じて適用されるだけで、設計の本質は変わりません。",
  },
  {
    number: "03",
    title: "属人化の完全排除",
    description:
      "担当者が変わっても、システムが引き継ぎます。「あの人がいないと回らない」という状態を構造的に解消します。",
  },
];

export default function Model() {
  return (
    <section id="model" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Model
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            属人化を排除する、
            <br />
            標準設計モデル。
          </h2>
          <p className="mt-5 text-gray-500 text-base leading-relaxed">
            本サービスは個別受託型ではありません。
            <br />
            外国人雇用で共通して発生する課題を前提に、
            標準化された教育管理モデルとして設計されています。
          </p>
          <p className="mt-3 text-gray-500 text-base leading-relaxed">
            企業規模に応じて適用されるだけで、
            構造そのものは一貫しています。
            <br />
            再現性を持たせるための設計です。
          </p>
        </div>

        {/* Principles */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div key={p.number} className="card p-7 hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-gray-100 mb-4 font-mono select-none">
                {p.number}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-12 card overflow-hidden">
          <div className="grid grid-cols-3 text-sm">
            <div className="p-5 bg-gray-50 border-b border-r border-gray-100" />
            <div className="p-5 bg-gray-50 border-b border-r border-gray-100 text-center font-medium text-gray-500">
              従来の個別受託
            </div>
            <div className="p-5 bg-navy-900 border-b border-gray-100 text-center font-semibold text-white">
              本サービス
            </div>

            {[
              ["構造の再現性", "△ 属人化しやすい", "◎ 標準設計で一貫"],
              ["担当者変更時", "× 引き継ぎコスト大", "◎ システムが継続"],
              ["進捗の可視化", "△ 手動で集計", "◎ 自動・リアルタイム"],
              ["スケール対応", "△ 規模拡大で崩れやすい", "◎ 設計が変わらない"],
            ].map(([label, before, after]) => (
              <>
                <div
                  key={`${label}-label`}
                  className="p-4 border-b border-r border-gray-100 text-gray-600 font-medium text-sm"
                >
                  {label}
                </div>
                <div
                  key={`${label}-before`}
                  className="p-4 border-b border-r border-gray-100 text-center text-gray-400 text-sm"
                >
                  {before}
                </div>
                <div
                  key={`${label}-after`}
                  className="p-4 border-b border-gray-100 text-center text-navy-900 font-semibold text-sm bg-navy-50"
                  style={{ background: "rgba(15,27,76,0.04)" }}
                >
                  {after}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
