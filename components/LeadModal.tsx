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

const initialForm: FormState = {
  company: "",
  name: "",
  email: "",
  phone: "",
  note: "",
  consent: false,
};

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.company.trim()) newErrors.company = "会社名を入力してください。";
    if (!form.name.trim()) newErrors.name = "お名前を入力してください。";
    if (!form.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "メールアドレスの形式が正しくありません。";
    }
    if (!form.phone.trim()) newErrors.phone = "電話番号を入力してください。";
    if (!form.consent) newErrors.consent = "個人情報の取り扱いへの同意が必要です。";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setApiError(data.error ?? "送信に失敗しました。しばらくしてから再度お試しください。");
      }
    } catch {
      setApiError("ネットワークエラーが発生しました。しばらくしてから再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      setApiError("");
    }, 300);
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 text-sm border rounded-lg outline-none transition-colors ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 focus:border-navy-900 bg-white"
    }`;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-7 py-5 flex items-center justify-between z-10">
            <div>
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-900"
              >
                資料請求フォーム
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                1営業日以内にご連絡いたします
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="閉じる"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-7 py-6">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-accent-green-bg border-2 border-accent-green-border flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14.5L11 20.5L23 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ご送信ありがとうございます
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  内容を確認の上、
                  <br />
                  1営業日以内にご連絡いたします。
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-6 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  閉じる
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="株式会社サンプル"
                    className={inputClass("company")}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="taro@example.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="03-0000-0000"
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    ご質問・備考
                    <span className="ml-1.5 text-xs text-gray-400 font-normal">任意</span>
                  </label>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="例：外国人スタッフ10名程度。現状の教育方法をどう改善できるか聞きたい。"
                    rows={3}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-navy-900 transition-colors resize-none"
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          form.consent
                            ? "bg-navy-900 border-navy-900"
                            : errors.consent
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {form.consent && (
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 leading-relaxed">
                      <a href="#" className="underline hover:text-gray-700">
                        プライバシーポリシー
                      </a>
                      に同意の上、個人情報を送信します。
                      <span className="ml-1 text-red-500">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-red-500 mt-1 ml-8">{errors.consent}</p>
                  )}
                </div>

                {/* API error */}
                {apiError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                    {apiError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-navy-900 text-white font-semibold py-4 rounded-xl hover:bg-navy-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      送信中...
                    </>
                  ) : (
                    "資料を請求する"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
