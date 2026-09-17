// ============================================================
//  SKILL TUNE LP - 無料版お申し込みフォーム GAS Webhook
// ============================================================
//
// 【デプロイ手順】
//  1. Google スプレッドシートを新規作成し、「フォーム受信」などシートに名前をつける
//  2. メニュー「拡張機能」→「Apps Script」を開く
//  3. このファイルの内容を貼り付ける
//  4. SPREADSHEET_ID に対象スプレッドシートのIDを設定する
//     （スプレッドシートURLの /d/〇〇〇/ の部分）
//  5. SHEET_NAME にシート名を設定する（デフォルト：フォーム受信）
//  6. NOTIFICATION_EMAIL に通知先メールアドレスを設定する
//  7. 「デプロイ」→「新しいデプロイ」を選択
//  8. 種類：「ウェブアプリ」を選択
//  9. 実行ユーザー：「自分」、アクセスできるユーザー：「全員」に設定
// 10. 「デプロイ」をクリックし、発行されたウェブアプリURLをコピー
// 11. Vercel の環境変数 NEXT_PUBLIC_GAS_URL にそのURLを設定する
//     Vercel ダッシュボード → Settings → Environment Variables
// ============================================================

var SPREADSHEET_ID    = "1aQkwsoNnTwn6n6hQ_dQTC-baFF7pWLuywKavhTecxBQ";
var SHEET_NAME        = "SKILLTUNE_LIST";
var NOTIFICATION_EMAIL = "nabetani.k@skillbaton.co.jp";

// ヘッダー行の定義
var HEADERS = ["送信日時", "会社名・団体名", "区分", "対象人数", "お名前", "メールアドレス", "電話番号", "ご質問・備考"];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // シートが空の場合はヘッダーを挿入
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length)
           .setFontWeight("bold")
           .setBackground("#1B2B4B")
           .setFontColor("#ffffff");
    }

    // データ行を追記
    sheet.appendRow([
      data.timestamp  || new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
      data.company    || "",
      data.orgType    || "",
      data.headcount  || "",
      data.name       || "",
      data.email      || "",
      data.phone      || "",
      data.note       || "",
    ]);

    // 通知メール送信
    var subject = "【SKILL TUNE】無料版のお申し込みがありました：" + (data.company || "（会社名未入力）");
    var body = [
      "無料版お申し込みフォームから新しいお問い合わせがありました。",
      "",
      "■ 送信日時：" + (data.timestamp || ""),
      "■ 会社名　：" + (data.company   || ""),
      "■ 区分　　：" + (data.orgType   || ""),
      "■ 対象人数：" + (data.headcount || "（未選択）"),
      "■ お名前　：" + (data.name      || ""),
      "■ メール　：" + (data.email     || ""),
      "■ 電話番号：" + (data.phone     || ""),
      "■ 備考　　：" + (data.note      || "（なし）"),
      "",
      "スプレッドシートで確認: https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID,
    ].join("\n");

    GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
