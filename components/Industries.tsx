const industries = [
  {
    label: "介護",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" />
        <path d="M12 9v7M8.5 12.5L12 11l3.5 1.5M9 21l3-5 3 5" />
      </svg>
    ),
  },
  {
    label: "製造",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18V10l-5 3.5V10l-5 3.5V10l-5 3.5V20z" />
        <path d="M3 13.5V5h3v8.5" />
      </svg>
    ),
  },
  {
    label: "建設",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8l7-4 7 4v13" />
        <path d="M9.5 21v-5h5v5" />
      </svg>
    ),
  },
  {
    label: "外食",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v8a2 2 0 004 0V3M8 11v10" />
        <path d="M17 3c-1.5 1.5-2 3.5-2 5.5V13h3V3z M16.5 13v8" />
      </svg>
    ),
  },
  {
    label: "宿泊",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20V9l9-5 9 5v11" />
        <path d="M3 20h18M9 20v-5h6v5M9 11h.01M15 11h.01" />
      </svg>
    ),
  },
  {
    label: "その他",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="ct">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Industries</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            幅広い業種で利用可能
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            外国人材に必要な共通基礎教育として、業種を問わず活用できます。
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="card-hover flex flex-col items-center justify-center py-8 px-4"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-navy-900 mb-4"
                style={{ background: "rgba(15,27,76,0.07)" }}
              >
                {ind.icon}
              </div>
              <span className="text-sm font-semibold text-gray-900">{ind.label}</span>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-8 max-w-5xl mx-auto rounded-xl px-6 py-5 text-center"
          style={{ background: "rgba(15,27,76,0.05)" }}>
          <p className="text-[15px] font-semibold text-navy-900">
            特定技能の主要分野を含む、幅広い現場で活用できます。
          </p>
        </div>

      </div>
    </section>
  );
}
