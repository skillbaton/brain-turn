import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  company: string;
  name: string;
  email: string;
  phone: string;
  note?: string;
  consent: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエスト形式が不正です。" },
      { status: 400 }
    );
  }

  const payload = body as Partial<LeadPayload>;

  // Required field validation
  if (!payload.company || payload.company.trim() === "") {
    return NextResponse.json(
      { error: "会社名は必須です。" },
      { status: 400 }
    );
  }
  if (!payload.name || payload.name.trim() === "") {
    return NextResponse.json(
      { error: "お名前は必須です。" },
      { status: 400 }
    );
  }
  if (!payload.email || payload.email.trim() === "") {
    return NextResponse.json(
      { error: "メールアドレスは必須です。" },
      { status: 400 }
    );
  }
  if (!isValidEmail(payload.email.trim())) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }
  if (!payload.phone || payload.phone.trim() === "") {
    return NextResponse.json(
      { error: "電話番号は必須です。" },
      { status: 400 }
    );
  }
  if (payload.consent !== true) {
    return NextResponse.json(
      { error: "個人情報の取り扱いへの同意が必要です。" },
      { status: 400 }
    );
  }

  // Sanitize and build the lead object
  const lead: LeadPayload = {
    company: payload.company.trim(),
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    note: payload.note?.trim() ?? "",
    consent: true,
  };

  // TODO: Persist lead (e.g. send to CRM, database, or email notification)
  // For now, log to server console
  console.log("[LEAD RECEIVED]", {
    ...lead,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
