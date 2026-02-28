interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="contact" className="bg-navy-900 py-24 md:py-32">
      <div className="ct text-center">

        <span className="text-xs font-semibold tracking-widest text-blue-300 opacity-60 uppercase">
          Contact
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
          まずは資料をご確認ください。
        </h2>
        <p className="mt-5 text-blue-100 text-base leading-relaxed opacity-80 max-w-md mx-auto">
          導入規模や体制により、最適な運用モデルをご案内します。<br />
          価格を並べる前に、貴社に合う形をご提示します。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-navy-900 font-bold text-base px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            資料を請求する
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Trust chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[13px] text-blue-200 opacity-50">
          <span>返信1営業日以内</span>
          <span className="hidden sm:block">|</span>
          <span>費用は資料にてご案内</span>
          <span className="hidden sm:block">|</span>
          <span>情報収集だけでも歓迎</span>
        </div>

      </div>
    </section>
  );
}
