"use client";

import { useState, useEffect, useRef } from "react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  company: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  consent: boolean;
}

const initial: FormState = {
  company: "", name: "", email: "", phone: "", note: "", consent: false,
};

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [form,       setForm]       = useState<FormState>(initial);
  const [errors,     setErrors]     = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [apiError,   setApiError]   = useState("");
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.company.trim()) e.company = "会社名を入力してください。";
    if (!form.name.trim())    e.name    = "お名前を入力してください。";
    if (!form.email.trim())   e.email   = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "メール形式が正しくありません。";
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
      else setApiError(data.error ?? "送信に失敗しました。");
    } catch {
      setApiError("ネットワークエラーが発生しました。");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => { setSubmitted(false); setErrors({}); setApiError(""); }, 300);
  }

  const field = (key: keyof FormState) =>
    `w-full px-4 py-3 text-sm border rounded-xl outline-none transition-colors placeholder:text-gray-300 ${
      errors[key]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-navy-900 bg-white"
    }`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-modal overflow-hidden max-h-[92vh] overflow-y-auto">

          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between z-10">
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-gray-900">
                資料請求フォーム
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                1営業日以内にご連絡いたします
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="閉じる"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="px-8 py-7">
            {submitted ? (
              /* ── Success ── */
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent-green-bg border-2 border-accent-green-border flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14.5L11 20.5L23 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ご送信ありがとうございます</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  1営業日以内にご連絡いたします。<br />
                  しばらくお待ちください。
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 btn-secondary"
                >
                  閉じる
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>

                {/* Row 1: company (full) */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    会社名 <span className="text-red-400">*</span>
                  </label>
                  <input
                    ref={firstRef}
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="株式会社サンプル"
                    className={field("company")}
                  />
                  {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                </div>

                {/* Row 2: name + email (2-col) */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="山田 太郎"
                      className={field("name")}
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
                      className={field("email")}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 3: phone (full) */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    電話番号 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="03-0000-0000"
                    className={field("phone")}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Row 4: note */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    ご質問・備考
                    <span className="ml-1 text-gray-400 font-normal">任意</span>
                  </label>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="外国人スタッフが10名ほどいます。現状の教育をどう改善できるか相談したいです。"
                    rows={3}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-navy-900 transition-colors resize-none placeholder:text-gray-300"
                  />
                </div>

                {/* Consent */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0" onClick={() => setForm({ ...form, consent: !form.consent })}>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        form.consent ? "bg-navy-900 border-navy-900" : errors.consent ? "border-red-400 bg-red-50" : "border-gray-300"
                      }`}>
                        {form.consent && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1.5 5L4 8 8.5 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
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
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                    {apiError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary !py-4 !text-base !rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75"/>
                      </svg>
                      送信中...
                    </>
                  ) : "資料を請求する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
