interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="bg-navy-900 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <span className="text-xs font-semibold tracking-widest text-blue-300 opacity-70 uppercase">
          Contact
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
          まずは資料をご確認ください。
        </h2>

        <p className="mt-6 text-blue-100 text-base leading-relaxed max-w-lg mx-auto opacity-80">
          導入規模や体制により、
          <br className="hidden sm:block" />
          最適な運用モデルをご案内します。
        </p>
        <p className="mt-2 text-blue-100 text-base leading-relaxed opacity-80">
          価格を並べる前に、
          <br className="hidden sm:block" />
          貴社に合う形をご提示します。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-navy-900 font-semibold text-base px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            資料を請求する
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200 opacity-60">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" opacity="0.7">
              <path fillRule="evenodd" d="M7 0l1.4 4.43L14 5.09 10.5 8.35l.89 4.65L7 10.77 2.61 13l.89-4.65L0 5.09l5.6-.66L7 0z" clipRule="evenodd" />
            </svg>
            返信は通常1営業日以内
          </span>
          <span>|</span>
          <span>費用・価格は相談ベース</span>
          <span>|</span>
          <span>まずは情報収集だけでも歓迎</span>
        </div>
      </div>
    </section>
  );
}
