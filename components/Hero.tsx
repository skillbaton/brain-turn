"use client";

interface HeroProps {
  onOpenModal: () => void;
}

/* ── SVG Sparkline (bar chart) ── */
function SparkBar({ heights, color = "#0F1B4C" }: { heights: number[]; color?: string }) {
  const max = Math.max(...heights);
  return (
    <svg viewBox={`0 0 ${heights.length * 14} 40`} className="w-full h-10">
      {heights.map((h, i) => {
        const barH = (h / max) * 36;
        return (
          <rect
            key={i}
            x={i * 14 + 1}
            y={40 - barH}
            width={10}
            height={barH}
            rx={2}
            fill={color}
            opacity={0.15 + (h / max) * 0.7}
          />
        );
      })}
    </svg>
  );
}

/* ── Donut progress ── */
function Donut({ pct, color = "#0F1B4C", size = 52 }: { pct: number; color?: string; size?: number }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 44 44">
      <circle cx="22" cy="22" r={r} fill="none" stroke="#e5e7eb" strokeWidth="5" />
      <circle
        cx="22" cy="22" r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeDashoffset={circ / 4}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray .6s ease" }}
      />
      <text x="22" y="26" textAnchor="middle" fontSize="9" fontWeight="700" fill="#111827">
        {pct}%
      </text>
    </svg>
  );
}

/* ── Dashboard Mock ── */
function DashboardMock() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white select-none">
      {/* Window chrome */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-gray-400 font-mono tracking-tight">
          SKILL TUNE — 管理ダッシュボード
        </span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          リアルタイム更新中
        </span>
      </div>

      <div className="p-4 bg-gray-50 space-y-3">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "受講完了率",      value: "87%",   delta: "+5%", donut: 87, color: "#0F1B4C" },
            { label: "平均理解度スコア", value: "72点",  delta: "+8点", donut: 72, color: "#16a34a" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-2.5">
              <Donut pct={s.donut} color={s.color} size={44} />
              <div>
                <div className="text-[10px] text-gray-400 leading-none mb-1">{s.label}</div>
                <div className="text-lg font-bold text-gray-900 leading-none">{s.value}</div>
                <div className="text-[10px] font-semibold text-green-600 mt-0.5">{s.delta} 先月比</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + alerts row */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Monthly trend */}
          <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-gray-500">今月の受講推移</span>
              <span className="text-[10px] text-gray-400">142件 (+31)</span>
            </div>
            <SparkBar heights={[30, 42, 38, 55, 50, 68, 60, 80, 72, 90, 88, 95]} />
          </div>

          {/* Alert card */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="#d97706">
                <path d="M6 1L11 10H1L6 1z" />
                <path d="M6 5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] font-semibold text-amber-700">要フォロー</span>
            </div>
            <div className="text-2xl font-bold text-amber-700 leading-none">3</div>
            <div className="text-[10px] text-amber-600 mt-1">80点未満→再受講</div>
          </div>
        </div>

        {/* Staff list */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-gray-500">スタッフ別理解度</span>
            <div className="flex gap-1.5">
              {["日本語", "EN", "Viet"].map((lang) => (
                <span key={lang} className="text-[9px] px-1.5 py-0.5 rounded bg-navy-50 text-navy-700 font-medium border border-navy-100"
                  style={{ background: "rgba(15,27,76,0.06)", color: "#0F1B4C", borderColor: "rgba(15,27,76,0.1)" }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
          {[
            { name: "Nguyen T.",   score: 92, status: "完了",     statusColor: "text-green-600 bg-green-50" },
            { name: "田中 花子",   score: 78, status: "要フォロー", statusColor: "text-amber-600 bg-amber-50" },
            { name: "Santos M.",   score: 95, status: "完了",     statusColor: "text-green-600 bg-green-50" },
            { name: "Lin W.",      score: 61, status: "再受講",    statusColor: "text-red-600 bg-red-50" },
          ].map((row) => (
            <div
              key={row.name}
              className="px-3 py-2 flex items-center justify-between border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0" />
                <span className="text-[11px] font-medium text-gray-700">{row.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.score}%`, background: row.score >= 80 ? "#16a34a" : row.score >= 70 ? "#d97706" : "#dc2626" }}
                  />
                </div>
                <span className="text-[11px] font-bold text-gray-700 w-7 text-right">{row.score}</span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${row.statusColor}`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Hero ── */
export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 55% 0%, rgba(15,27,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="ct relative">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="badge-green">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                助成金活用可能
              </span>
              <span className="badge-gray">多言語対応</span>
              <span className="badge-gray">法人向けSaaS</span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] md:text-5xl xl:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-gray-900">
              外国人雇用を、<br />
              感覚ではなく<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0F1B4C 0%, #2a3f8f 100%)" }}
              >
                「構造」
              </span>
              で管理する。
            </h1>

            {/* Sub copy */}
            <p className="mt-6 text-[15px] md:text-base text-gray-500 leading-relaxed max-w-md">
              日本語能力の差。報連相の不足。文化理解のズレ。<br />
              「注意」で解決し続けるのではなく、<br className="hidden sm:block" />
              理解を<strong className="text-gray-700 font-semibold">数値で管理</strong>できる仕組みへ。
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenModal} className="btn-primary !px-8 !py-4 !text-base">
                資料を請求する
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#solution" className="btn-secondary !px-8 !py-4 !text-base">
                デモを見る
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
              {[
                "返信1営業日以内",
                "無料で資料請求",
                "導入まで伴走サポート",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#16a34a">
                    <path d="M2 6.5L4.5 9 10 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard Mock ── */}
          <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">
            {/* Glow backdrop */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-20"
              style={{ background: "radial-gradient(ellipse at 50% 50%, #0F1B4C, transparent 70%)" }}
            />
            <div className="relative animate-fade-in">
              <DashboardMock />
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: "即日",  label: "ダッシュボード稼働" },
            { num: "100%", label: "受講状況の可視化" },
            { num: "多言語", label: "コンテンツ対応" },
            { num: "月次",  label: "レポート自動生成" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-navy-900">{s.num}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
