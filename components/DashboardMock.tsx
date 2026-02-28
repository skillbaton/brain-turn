/* ─────────────────────────────────────────────────
   DashboardMock — SVGベース管理画面モック
   ───────────────────────────────────────────────── */

function SparkBar({ heights }: { heights: number[] }) {
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
            fill="#0F1B4C"
            opacity={0.12 + (h / max) * 0.65}
          />
        );
      })}
    </svg>
  );
}

function Donut({
  pct,
  color = "#0F1B4C",
  size = 48,
}: {
  pct: number;
  color?: string;
  size?: number;
}) {
  const r = 17;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 44 44">
      <circle cx="22" cy="22" r={r} fill="none" stroke="#e5e7eb" strokeWidth="5" />
      <circle
        cx="22"
        cy="22"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeDashoffset={circ / 4}
        strokeLinecap="round"
      />
      <text x="22" y="26" textAnchor="middle" fontSize="9" fontWeight="700" fill="#111827">
        {pct}%
      </text>
    </svg>
  );
}

const staffList = [
  { name: "Nguyen T.",  score: 92, label: "完了",      labelCls: "text-green-600 bg-green-50"  },
  { name: "田中 花子",  score: 78, label: "要フォロー", labelCls: "text-amber-600 bg-amber-50"  },
  { name: "Santos M.", score: 95, label: "完了",       labelCls: "text-green-600 bg-green-50"  },
  { name: "Lin W.",    score: 61, label: "再受講",     labelCls: "text-red-600   bg-red-50"    },
];

export default function DashboardMock() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white select-none">
      {/* Window chrome */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-gray-400 font-mono tracking-tight flex-1">
          SKILL TUNE — 管理ダッシュボード
        </span>
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
          更新中
        </span>
      </div>

      <div className="p-4 bg-gray-50 space-y-3">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "受講完了率",       val: "87%",  delta: "+5%",  pct: 87, color: "#0F1B4C" },
            { label: "平均理解度スコア", val: "72点", delta: "+8点", pct: 72, color: "#16a34a" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-2.5"
            >
              <Donut pct={s.pct} color={s.color} size={44} />
              <div>
                <div className="text-[10px] text-gray-400 leading-none mb-1">{s.label}</div>
                <div className="text-lg font-bold text-gray-900 leading-none">{s.val}</div>
                <div className="text-[10px] font-semibold text-green-600 mt-0.5">{s.delta} 先月比</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + alert */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-gray-500">今月の受講推移</span>
              <span className="text-[10px] text-gray-400">142件</span>
            </div>
            <SparkBar heights={[30, 42, 38, 55, 50, 68, 60, 80, 72, 90, 88, 95]} />
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-1 mb-1">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="#d97706">
                <path d="M6 1L11 10H1L6 1z" />
                <path d="M6 5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] font-semibold text-amber-700">要フォロー</span>
            </div>
            <div className="text-2xl font-bold text-amber-700 leading-none">3名</div>
            <div className="text-[9px] text-amber-600 mt-1 leading-tight">
              80点未満
              <br />→ 再受講対象
            </div>
          </div>
        </div>

        {/* Staff list */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-gray-500">スタッフ別進捗</span>
            <div className="flex gap-1.5">
              {["JA", "EN", "VI"].map((l) => (
                <span
                  key={l}
                  className="text-[9px] px-1.5 py-0.5 rounded font-semibold"
                  style={{
                    background: "rgba(15,27,76,0.06)",
                    color: "#0F1B4C",
                    border: "1px solid rgba(15,27,76,0.12)",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          {staffList.map((row) => (
            <div
              key={row.name}
              className="px-3 py-2 flex items-center justify-between border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0" />
                <span className="text-[11px] font-medium text-gray-700">{row.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-14 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${row.score}%`,
                      background:
                        row.score >= 80
                          ? "#16a34a"
                          : row.score >= 70
                          ? "#d97706"
                          : "#dc2626",
                    }}
                  />
                </div>
                <span className="text-[11px] font-bold text-gray-700 w-6 text-right">
                  {row.score}
                </span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${row.labelCls}`}>
                  {row.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
