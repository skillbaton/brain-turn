import Image from "next/image";

const serviceLinks = [
  { label: "課題",        href: "#problem"    },
  { label: "仕組み",      href: "#solution"   },
  { label: "学べる内容",  href: "#courses"    },
  { label: "無料版",      href: "#freeplan"   },
  { label: "導入の流れ",  href: "#onboarding" },
];

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
                src="/SKILL_TUNE_new.svg"
                alt="SKILL TUNE"
                width={120}
                height={38}
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              学習・可視化・育成を一つにまとめた<br />外国人材向けeラーニング
            </p>
          </div>

          {/* Service */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">サービス</div>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">会社情報</div>
            <div className="text-sm text-gray-300 font-medium mb-3">株式会社SKILL BATON</div>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:0359624048" className="text-sm hover:text-white transition-colors">
                  03-5962-4048
                </a>
              </li>
              <li>
                <a
                  href="mailto:nabetani.k@skillbaton.co.jp"
                  className="text-sm hover:text-white transition-colors break-all"
                >
                  nabetani.k@skillbaton.co.jp
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">リンク</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://skill-tune.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  システムログイン
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-white transition-colors">
                  無料版を申し込む
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-white transition-colors">
                  よくあるご質問
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {year} SKILL BATON Inc. All rights reserved.</p>
          <p className="text-xs text-gray-600">外国人材教育を、無料で仕組み化。</p>
        </div>
      </div>
    </footer>
  );
}
