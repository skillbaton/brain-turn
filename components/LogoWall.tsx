/* ─────────────────────────────────────────────────────────
   LogoWall  ─  実ロゴが揃い次第 <img> に差し替えてください
   ───────────────────────────────────────────────────────── */

const placeholders = [
  "株式会社 A 社",
  "B Holdings",
  "C グループ",
  "D サービス株式会社",
  "E Corp.",
  "F インダストリー",
];

function PlaceholderLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-10 px-6 grayscale opacity-40 hover:opacity-60 transition-opacity">
      {/* Replace with: <img src="/logos/xxx.svg" alt={name} className="h-8 w-auto" /> */}
      <span className="text-xs font-semibold text-gray-500 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

export default function LogoWall() {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="ct">
        <p className="text-center text-[11px] font-semibold text-gray-300 uppercase tracking-widest mb-6">
          外国人雇用に取り組む企業に選ばれています
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {placeholders.map((name) => (
            <PlaceholderLogo key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
