interface GrantProps {
  onOpenModal: () => void;
}

export default function Grant({ onOpenModal }: GrantProps) {
  return (
    <section id="grant" className="section bg-surface">
      <div className="ct">
        <div className="max-w-3xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge-green text-sm px-5 py-2">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" className="flex-shrink-0">
                <path d="M7 0l1.76 4.43L14 5.09l-3.5 3.26.89 4.65L7 10.77 2.61 13l.89-4.65L0 5.09l5.24-.66L7 0z"/>
              </svg>
              助成金活用可能
            </span>
          </div>

          {/* Card */}
          <div className="card p-10 md:p-14 text-center border-2 border-accent-green-border">
            <span className="section-label">Grant</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              導入の選択肢を<br />広げる制度があります。
            </h2>

            <p className="mt-7 text-gray-600 text-base leading-relaxed max-w-md mx-auto">
              本プログラムは、助成金活用が可能です。<br />
              条件により、実質負担を抑えた導入も可能です。
            </p>
            <p className="mt-3 text-gray-400 text-sm">
              詳細は資料にてご案内いたします。
            </p>

            {/* Points */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
              {[
                { title: "助成金の活用",     body: "条件を満たす場合、各種助成金の適用が可能です。詳細はお問い合わせください。" },
                { title: "実質負担の軽減",   body: "制度を活用することで、初期・月額コストを抑えた導入が可能です。" },
                { title: "申請サポート",      body: "助成金申請に必要な書類の整理など、担当者が伴走でサポートします。" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-accent-green-border text-left">
                  <div className="w-7 h-7 mb-3 text-accent-green">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenModal}
              className="mt-10 btn-primary !px-10 !py-4 !text-base"
            >
              助成金活用を含む資料を請求する
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
