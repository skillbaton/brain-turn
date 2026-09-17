export default function Survey() {
  return (
    <section className="section bg-surface">
      <div className="ct">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ backgroundColor: "#1B2B4B" }}
          >
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-white/60 mb-4">
              SURVEY
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
              外国人雇用に関する課題アンケート
            </h2>
            <p className="mt-5 text-white/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              本アンケートは、外国人雇用における課題や今後必要な支援内容を把握するためのものです。回答内容は、今後の情報提供や支援内容の改善に活用されます。
            </p>
            <p className="mt-3 text-white/50 text-xs">
              全20問 / 所要時間：約5分
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd3XzZGyp6FdlsPkJNZKcnL88zdCthoYz6B5kRHZsUej4nnA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#1B2B4B" }}
            >
              アンケートに回答する →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
