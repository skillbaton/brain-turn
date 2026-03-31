import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="ct py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/LOGO_SKILLTUNE.svg"
                alt="SKILL TUNE"
                width={120}
                height={45}
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              外国人雇用に特化した<br />法人向け教育管理SaaS
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">サービス</div>
            <ul className="space-y-3">
              {["機能", "ソリューション", "導入の流れ", "助成金活用"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">会社情報</div>
            <ul className="space-y-3">
              {["会社概要", "プライバシーポリシー", "利用規約"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">ログイン</div>
            <ul className="space-y-3">
              {["受講者ログイン", "企業管理者ログイン", "資料請求"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {year} SKILL TUNE. All rights reserved.</p>
          <p className="text-xs text-gray-600">外国人材の教育管理を、仕組みで解決する。</p>
        </div>
      </div>
    </footer>
  );
}
