"use client";

import { motion, useReducedMotion } from "framer-motion";
import DashboardMock from "@/components/DashboardMock";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        backgroundColor: "#1B2B4B",
        minHeight: "100vh",
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "#1B2B4B", opacity: 0.6 }}
      />

      {/* Content */}
      <div className="ct relative z-10 w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            variants={stagger}
            initial={shouldReduce ? "show" : "hidden"}
            animate="show"
          >
            {/* Badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-bold bg-amber-300 text-navy-900">
                利用料金 0円
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold bg-white/20 text-white backdrop-blur-sm">
                多言語対応
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-white/70 border border-white/30">
                受入企業・登録支援機関・監理団体等
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={item}
              className="tracking-tight text-white font-bold"
              style={{ lineHeight: 1.08 }}
            >
              <span className="block text-[1.95rem] md:text-[2.2rem] xl:text-[2.55rem]">
                外国人材教育を、
              </span>
              <span className="block text-[2.3rem] md:text-[2.6rem] xl:text-[3rem] mt-1.5">
                <span className="font-extrabold text-amber-300">無料</span>で仕組み化。
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="mt-4 text-[13px] md:text-[14px] text-white/60 tracking-wide"
            >
              学習・可視化・育成を一つにまとめた、外国人材向け<span className="text-white/90 font-medium">eラーニング</span>。
            </motion.p>

            {/* Sub copy */}
            <motion.div variants={item} className="mt-8 space-y-2 max-w-[460px]">
              <p className="text-[15px] md:text-base font-semibold text-white leading-relaxed">
                現行機能を、SKILL TUNE 無料版としてご利用いただけます。
              </p>
              <p className="text-[15px] md:text-base text-white/70 leading-relaxed">
                5つの基礎コースを多言語で受講。
              </p>
              <p className="text-[15px] md:text-base text-white/70 leading-relaxed">
                受講状況・理解度・学習データを可視化し、次の育成へつなげる。
              </p>
              <p className="text-[13px] text-white/50 leading-relaxed pt-1">
                受入企業・登録支援機関・監理団体等にご利用いただけます。
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary !px-8 !py-4 !text-[15px] !bg-amber-300 !text-navy-900 hover:!bg-amber-200">
                無料版を申し込む
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#freeplan" className="btn-secondary !px-8 !py-4 !text-[15px] !text-white !border-white/60 !bg-white/15 hover:!bg-white/25">
                無料版でできること
              </a>
            </motion.div>

            {/* Login links */}
            <motion.div
              variants={item}
              className="mt-6 flex items-center gap-4 text-[13px] text-white/50"
            >
              <a
                href="https://skill-tune.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors underline underline-offset-2 decoration-white/20"
              >
                システムログイン
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard Mock ── */}
          <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-[0.15]"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, #ffffff, transparent 70%)",
              }}
            />
            <motion.div
              className="relative"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <motion.div
                animate={shouldReduce ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
              >
                <DashboardMock />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
