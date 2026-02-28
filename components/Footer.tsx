export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="ct py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <rect x="2"  y="2"  width="6" height="6" rx="1.5" fill="white" fillOpacity=".8"/>
                  <rect x="10" y="2"  width="6" height="6" rx="1.5" fill="white" fillOpacity=".4"/>
                  <rect x="2"  y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity=".4"/>
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity=".8"/>
                </svg>
              </div>
              <span className="text-[14px] font-bold text-white tracking-tight">SKILL TUNE</span>
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
