"use client";

import { useState } from "react";

interface FormState {
  company: string;
  orgType: string;
  headcount: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  consent: boolean;
}

const initial: FormState = {
  company: "", orgType: "", headcount: "", name: "", email: "", phone: "", note: "", consent: false,
};

const orgTypes = ["受入企業", "登録支援機関", "監理団体等", "その他"];

const headcounts = ["1〜9名", "10〜29名", "30〜99名", "100名以上", "未定"];

export default function ContactForm() {
  const [form,       setForm]       = useState<FormState>(initial);
  const [errors,     setErrors]     = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [apiError,   setApiError]   = useState("");

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.company.trim()) e.company = "会社名・団体名を入力してください。";
    if (!form.orgType)        e.orgType = "区分を選択してください。";
    if (!form.name.trim())    e.name    = "お名前を入力してください。";
    if (!form.email.trim())   e.email   = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "メール形式が正しくありません。";
    if (!form.phone.trim())   e.phone   = "電話番号を入力してください。";
    if (!form.consent)        e.consent = "同意が必要です。";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setApiError("");
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res  = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) { setSubmitted(true); setForm(initial); }
      else setApiError(data.error ?? "送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
    } catch {
      setApiError("送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldCls = (key: keyof FormState) =>
    `w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors placeholder:text-gray-300 bg-white ${
      errors[key]
        ? "border-red-300 bg-red-50/60 focus:border-red-400"
        : "border-gray-200 focus:border-navy-900"
    }`;

  return (
    <section id="contact" className="bg-navy-950 py-24 md:py-28">
      <div className="ct">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 xl:gap-20 items-start">

          {/* ── Left: Copy ── */}
          <div className="text-white pt-2">
            <span className="text-xs font-semibold tracking-widest text-blue-300 opacity-60 uppercase">
              Contact
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              まずは無料版を<br />ご利用ください。
            </h2>
            <p className="mt-5 text-blue-100 text-base leading-relaxed opacity-75">
              無料版の導入をご希望の<br />
              企業・支援機関を募集しています。<br />
              対象人数と利用目的をうかがい、<br />
              利用開始までご案内します。
            </p>

            {/* Trust chips */}
            <div className="mt-8 space-y-3">
              {[
                "利用料金0円",
                "返信は1営業日以内",
                "情報収集だけでも歓迎",
                "受入企業・支援機関どちらも可",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13px] text-blue-200 opacity-70">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7.5L5 10.5 12 3.5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div className="bg-white rounded-2xl shadow-modal overflow-hidden">
            {submitted ? (
              /* Success state */
              <div className="p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-green-bg border-2 border-accent-green-border flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14.5L11 20.5L23 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">お申し込みを受け付けました。</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  1営業日以内にご連絡します。<br />
                  しばらくお待ちください。
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="p-7 md:p-9 space-y-4">
                <h3 className="text-base font-bold text-gray-900 mb-5">無料版 お申し込みフォーム</h3>

                {/* Company */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    会社名・団体名 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="株式会社サンプル"
                    className={fieldCls("company")}
                  />
                  {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                </div>

                {/* Org type + headcount (2-col) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      区分 <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={form.orgType}
                      onChange={(e) => setForm({ ...form, orgType: e.target.value })}
                      className={`${fieldCls("orgType")} ${form.orgType ? "text-gray-900" : "text-gray-300"}`}
                    >
                      <option value="" disabled>選択してください</option>
                      {orgTypes.map((t) => (
                        <option key={t} value={t} className="text-gray-900">{t}</option>
                      ))}
                    </select>
                    {errors.orgType && <p className="text-[11px] text-red-500 mt-1">{errors.orgType}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      対象人数{" "}
                      <span className="text-gray-400 font-normal">任意</span>
                    </label>
                    <select
                      value={form.headcount}
                      onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                      className={`${fieldCls("headcount")} ${form.headcount ? "text-gray-900" : "text-gray-300"}`}
                    >
                      <option value="" disabled>選択してください</option>
                      {headcounts.map((h) => (
                        <option key={h} value={h} className="text-gray-900">{h}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Name + Email (2-col) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="山田 太郎"
                      className={fieldCls("name")}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="taro@example.com"
                      className={fieldCls("email")}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    電話番号 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="03-0000-0000"
                    className={fieldCls("phone")}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Note */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    ご質問・備考{" "}
                    <span className="text-gray-400 font-normal">任意</span>
                  </label>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="外国人スタッフが10名ほどおり、まず無料版で基礎教育を整えたいと考えています。"
                    rows={3}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-navy-900 transition-colors resize-none placeholder:text-gray-300"
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        form.consent ? "bg-navy-900 border-navy-900" : errors.consent ? "border-red-400 bg-red-50" : "border-gray-300"
                      }`}
                      onClick={() => setForm({ ...form, consent: !form.consent })}
                    >
                      {form.consent && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L4 8 8.5 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 leading-relaxed">
                      <a href="#" className="underline hover:text-gray-700">プライバシーポリシー</a>
                      に同意の上、個人情報を送信します。
                      <span className="text-red-400 ml-0.5">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-red-500 mt-1 ml-8">{errors.consent}</p>}
                </div>

                {/* API error */}
                {apiError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                    {apiError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary !py-4 !text-[15px] !rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75"/>
                      </svg>
                      送信中...
                    </>
                  ) : "無料版を申し込む"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
