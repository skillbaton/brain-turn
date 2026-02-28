# 外国人材 教育管理SaaS — LP

外国人雇用に特化した法人向け教育管理SaaSのランディングページ。
Next.js App Router + TypeScript + Tailwind CSS で構築。

---

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Deploy**: Vercel

---

## ローカル起動

### 前提

- Node.js 20+
- npm / yarn / pnpm / bun のいずれか

### 手順

```bash
# 1. 依存関係インストール
npm install

# 2. 開発サーバー起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

---

## ビルド確認

```bash
npm run build
npm run start
```

---

## ファイル構成

```
education-saas-lp/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts        # リード受信APIエンドポイント
│   ├── globals.css             # グローバルスタイル
│   ├── layout.tsx              # ルートレイアウト・メタデータ
│   └── page.tsx                # トップページ（状態管理）
├── components/
│   ├── Header.tsx              # 固定ヘッダー（スクロール連動）
│   ├── Hero.tsx                # ファーストビュー
│   ├── Problem.tsx             # 課題提起セクション
│   ├── Insight.tsx             # インサイト（管理構造の必要性）
│   ├── Solution.tsx            # ソリューション・機能説明
│   ├── Value.tsx               # 価値訴求（ROI）
│   ├── Model.tsx               # 標準設計モデル
│   ├── Grant.tsx               # 助成金セクション
│   ├── FinalCTA.tsx            # 最終CTA
│   ├── Footer.tsx              # フッター
│   └── LeadModal.tsx           # 資料請求モーダルフォーム
├── public/                     # 静的ファイル（必要に応じて）
├── .gitignore
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## API仕様

### POST `/api/lead`

資料請求フォームの送信エンドポイント。

#### リクエストボディ

```json
{
  "company": "株式会社サンプル",
  "name": "山田 太郎",
  "email": "taro@example.com",
  "phone": "03-0000-0000",
  "note": "（任意）質問・備考",
  "consent": true
}
```

#### レスポンス

**成功時 (200)**
```json
{ "success": true }
```

**バリデーションエラー (400)**
```json
{ "error": "会社名は必須です。" }
```

#### バリデーションルール

| フィールド | 必須 | 検証内容 |
|---|---|---|
| company | ✅ | 空文字不可 |
| name | ✅ | 空文字不可 |
| email | ✅ | 空文字不可・メール形式チェック |
| phone | ✅ | 空文字不可 |
| note | - | 任意 |
| consent | ✅ | `true` のみ許可 |

#### 本番実装時のTODO

`app/api/lead/route.ts` の `// TODO:` コメント箇所に以下を追加：

- CRM連携（HubSpot, Salesforce等）
- Slack/メール通知
- データベース保存（Supabase, PlanetScale等）

---

## GitHub → Vercelデプロイ手順

### 1. GitHubリポジトリ作成

```bash
cd education-saas-lp

# Gitリポジトリ初期化
git init
git add .
git commit -m "feat: initial implementation of education SaaS LP"

# GitHubでリポジトリ作成後
git remote add origin https://github.com/<your-username>/education-saas-lp.git
git branch -M main
git push -u origin main
```

### 2. Vercelデプロイ

1. [vercel.com](https://vercel.com) にログイン（GitHubアカウント連携）
2. **Add New Project** → GitHubリポジトリを選択
3. フレームワークは **Next.js** が自動検出される
4. **Deploy** をクリック

デプロイ完了後、自動でプレビューURLが発行される。

### 3. 環境変数（必要な場合）

Vercelダッシュボード → Project Settings → Environment Variables で設定：

```
# 例：CRM WebhookやメールサービスのAPIキー
LEAD_WEBHOOK_URL=https://...
SMTP_API_KEY=...
```

`.env.local` をローカルで使う場合：

```bash
cp .env.local.example .env.local
# .env.local は .gitignore に含まれているため、Gitにコミットされない
```

---

## デザイン仕様

| 項目 | 値 |
|---|---|
| 背景色 | `#FFFFFF` |
| セクション背景 | `#F8FAFC` |
| テキスト（主） | `#111827` |
| テキスト（副） | `#374151` |
| CTAボタン | `#0F1B4C`（濃紺） |
| アクセント | `#16a34a`（グリーン：助成金用） |
| フォント | Inter + Hiragino Sans / Noto Sans JP |

---

## カスタマイズ

### ブランド名の変更

`components/Header.tsx` と `components/Footer.tsx` の `EduManage` を変更。

### CTAリンク先の変更

ログインURL等は各コンポーネントの `href="#"` を実際のURLに変更。

### リード送信先の追加

`app/api/lead/route.ts` の `console.log` 部分を実際の連携処理に置き換え。
