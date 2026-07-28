import { locales } from "../../lib/locales";
import type { Locale } from "../../lib/types";
import type { AppLegalDocuments, LegalDocument, LegalProfile, PermissionKind } from "./types";

type Labels = {
  privacy: string;
  support: string;
  terms: string;
  operator: string;
  information: string;
  permissions: string;
  retention: string;
  contact: string;
  help: string;
  report: string;
  scope: string;
  acceptance: string;
  content: string;
  purchases: string;
  changes: string;
  permissionNames: Record<PermissionKind, string>;
  data: (kind: string) => string;
  cloud: string;
  local: string;
  controller: string;
  helpBody: string;
  reportBody: string;
  scopeBody: string;
  acceptanceBody: string;
  contentBody: string;
  purchaseBody: string;
  noPurchaseBody: string;
  changesBody: string;
  retentionBody: string;
};

const labels: Record<Locale, Labels> = {
  "zh-Hans": {
    privacy: "隐私政策", support: "用户支持", terms: "服务条款", operator: "运营者与适用范围", information: "信息与处理方式", permissions: "权限与第三方服务", retention: "保存、删除与控制", contact: "联系我们", help: "获得帮助", report: "提交问题时请提供", scope: "支持范围", acceptance: "接受条款与许可", content: "内容与服务边界", purchases: "购买与订阅", changes: "免责声明、变更与联系",
    permissionNames: { photos: "照片", camera: "相机", microphone: "麦克风", calendar: "日历", location: "位置", notifications: "通知", biometric: "生物识别", localNetwork: "本地网络" },
    data: (kind) => `本应用处理您主动创建或导入的${kind}，用于提供应用功能。`,
    cloud: "如您在设备上主动启用 iCloud，同步数据会通过与您 Apple ID 关联的 Apple CloudKit 服务保存和同步；开发者无法访问该数据。",
    local: "数据默认保留在您的设备本地，开发者不运营用于接收该数据的自有服务器。",
    controller: "本页说明您使用本应用时的信息处理方式。",
    helpBody: "我们通过电子邮件提供使用、功能、购买和审核相关支持。",
    reportBody: "请附上应用版本、设备型号、系统版本、问题截图，以及可以稳定复现问题的步骤。",
    scopeBody: "支持人员不会要求您提供密码、Apple ID 凭据或不必要的个人资料。",
    acceptanceBody: "下载、安装或使用本应用，即表示您同意在自己拥有或控制的 Apple 设备上按本条款使用本应用。",
    contentBody: "您对自己创建的内容负责并保有其权利。第三方平台、系统服务和网络可用性受其各自条款约束。",
    purchaseBody: "如应用提供订阅或一次性购买，付款由 Apple StoreKit 和您的 Apple ID 处理。自动续期项目可在设备的 Apple ID 订阅设置中管理或取消。",
    noPurchaseBody: "本应用不提供应用内购买；如未来加入付费功能，将在相应版本和本页更新说明。",
    changesBody: "在适用法律允许的范围内，本应用按现状提供。我们可能更新本条款或政策，更新后继续使用即表示接受修订内容。",
    retentionBody: "您可以在应用内删除内容，或卸载应用以移除本地数据。已同步的 iCloud 数据还受您的 iCloud 设置和 Apple 同步机制影响。"
  },
  "zh-Hant": {
    privacy: "隱私政策", support: "用戶支援", terms: "服務條款", operator: "營運者與適用範圍", information: "資料與處理方式", permissions: "權限與第三方服務", retention: "保存、刪除與控制", contact: "聯絡我們", help: "取得協助", report: "回報問題時請提供", scope: "支援範圍", acceptance: "接受條款與授權", content: "內容與服務界線", purchases: "購買與訂閱", changes: "免責、變更與聯絡",
    permissionNames: { photos: "照片", camera: "相機", microphone: "麥克風", calendar: "日曆", location: "位置", notifications: "通知", biometric: "生物辨識", localNetwork: "本機網路" },
    data: (kind) => `本 App 處理你主動建立或匯入的${kind}，用於提供 App 功能。`,
    cloud: "如你在裝置上主動啟用 iCloud，同步資料會透過與你的 Apple ID 關聯的 Apple CloudKit 服務保存與同步；開發者無法存取該資料。",
    local: "資料預設保留在你的裝置本機，開發者不營運用於接收該資料的自有伺服器。",
    controller: "本頁說明你使用本 App 時的資料處理方式。",
    helpBody: "我們透過電子郵件提供使用、功能、購買和審核相關支援。",
    reportBody: "請附上 App 版本、裝置型號、系統版本、問題截圖，以及可以穩定重現問題的步驟。",
    scopeBody: "支援人員不會要求你提供密碼、Apple ID 憑證或不必要的個人資料。",
    acceptanceBody: "下載、安裝或使用本 App，即表示你同意在自己擁有或控制的 Apple 裝置上依本條款使用本 App。",
    contentBody: "你對自己建立的內容負責並保有其權利。第三方平台、系統服務和網路可用性受其各自條款約束。",
    purchaseBody: "如 App 提供訂閱或一次性購買，付款由 Apple StoreKit 和你的 Apple ID 處理。自動續期項目可在裝置的 Apple ID 訂閱設定中管理或取消。",
    noPurchaseBody: "本 App 不提供 App 內購買；如未來加入付費功能，將在相應版本和本頁更新說明。",
    changesBody: "在適用法律允許的範圍內，本 App 按現狀提供。我們可能更新本條款或政策，更新後繼續使用即表示接受修訂內容。",
    retentionBody: "你可以在 App 內刪除內容，或移除 App 以刪除本機資料。已同步的 iCloud 資料還受你的 iCloud 設定和 Apple 同步機制影響。"
  },
  en: {
    privacy: "Privacy Policy", support: "User Support", terms: "Terms of Service", operator: "Operator and scope", information: "Information and processing", permissions: "Permissions and third-party services", retention: "Retention, deletion, and control", contact: "Contact", help: "Getting help", report: "Include with a report", scope: "Support scope", acceptance: "Acceptance and license", content: "Content and service boundaries", purchases: "Purchases and subscriptions", changes: "Disclaimers, changes, and contact",
    permissionNames: { photos: "Photos", camera: "Camera", microphone: "Microphone", calendar: "Calendar", location: "Location", notifications: "Notifications", biometric: "Biometric authentication", localNetwork: "Local network" },
    data: (kind) => `The app processes ${kind} that you choose to create or import in order to provide its features.`,
    cloud: "If you choose to enable iCloud on your device, synchronized data is stored and synchronized through Apple CloudKit services associated with your Apple ID. The developer cannot access that data.",
    local: "Data stays on your device by default. The developer does not operate a server for receiving that data.",
    controller: "This page explains how information is handled when you use the app.",
    helpBody: "Support for use, features, purchases, and App Store review questions is provided by email.",
    reportBody: "Include the app version, device model, system version, a screenshot, and steps that reliably reproduce the issue.",
    scopeBody: "Support will never ask for your password, Apple ID credentials, or unnecessary personal information.",
    acceptanceBody: "By downloading, installing, or using the app, you agree to use it on Apple devices that you own or control under these terms.",
    contentBody: "You remain responsible for and retain rights to the content you create. Third-party platforms, system services, and network availability are governed by their own terms.",
    purchaseBody: "When the app offers subscriptions or one-time purchases, payment is handled by Apple StoreKit and your Apple ID. Auto-renewing items can be managed or cancelled in your Apple ID subscription settings.",
    noPurchaseBody: "The app does not offer in-app purchases. Any future paid feature will be described in the relevant release and on this page.",
    changesBody: "To the extent allowed by law, the app is provided as is. We may update these terms or this policy; continued use after an update means acceptance of the revised content.",
    retentionBody: "You can delete content in the app or remove the app to remove local data. iCloud-synchronized data is also subject to your iCloud settings and Apple's synchronization behavior."
  },
  ja: {
    privacy: "プライバシーポリシー", support: "ユーザーサポート", terms: "利用規約", operator: "運営者と適用範囲", information: "情報と処理", permissions: "権限と第三者サービス", retention: "保存、削除、管理", contact: "お問い合わせ", help: "サポート", report: "お問い合わせに含める内容", scope: "サポート範囲", acceptance: "同意とライセンス", content: "コンテンツとサービスの範囲", purchases: "購入とサブスクリプション", changes: "免責、変更、お問い合わせ",
    permissionNames: { photos: "写真", camera: "カメラ", microphone: "マイク", calendar: "カレンダー", location: "位置情報", notifications: "通知", biometric: "生体認証", localNetwork: "ローカルネットワーク" },
    data: (kind) => `アプリは、機能を提供するために、あなたが作成または読み込んだ${kind}を処理します。`,
    cloud: "端末で iCloud を有効にした場合、同期対象のデータは Apple ID に関連付けられた Apple CloudKit を通じて保存・同期されます。開発者はそのデータにアクセスできません。",
    local: "データは初期状態で端末内に保存されます。開発者はそのデータを受け取るサーバーを運営していません。",
    controller: "このページでは、アプリ利用時の情報の取り扱いを説明します。",
    helpBody: "利用方法、機能、購入、App Store 審査に関するサポートはメールで提供します。",
    reportBody: "アプリのバージョン、機種、OS バージョン、画面写真、再現手順をお知らせください。",
    scopeBody: "サポートからパスワード、Apple ID の認証情報、不必要な個人情報を求めることはありません。",
    acceptanceBody: "アプリをダウンロード、インストール、または使用した時点で、あなたが所有または管理する Apple 端末で本規約に従って使用することに同意したものとします。",
    contentBody: "あなたが作成したコンテンツの責任と権利はあなたにあります。第三者プラットフォーム、システムサービス、ネットワークの可用性には、それぞれの規約が適用されます。",
    purchaseBody: "アプリでサブスクリプションまたは買い切り購入を提供する場合、決済は Apple StoreKit と Apple ID で処理されます。自動更新項目は Apple ID のサブスクリプション設定で管理または解約できます。",
    noPurchaseBody: "このアプリにはアプリ内課金がありません。将来有料機能を追加する場合は、該当リリースとこのページで説明します。",
    changesBody: "適用法で認められる範囲で、アプリは現状有姿で提供されます。規約またはポリシーを更新することがあり、更新後も利用を続けると改定内容に同意したものとします。",
    retentionBody: "アプリ内でコンテンツを削除するか、アプリを削除して端末内データを消去できます。iCloud 同期データには、あなたの iCloud 設定と Apple の同期動作も影響します。"
  },
  ko: {
    privacy: "개인정보 처리방침", support: "사용자 지원", terms: "서비스 약관", operator: "운영자와 적용 범위", information: "정보 및 처리 방식", permissions: "권한 및 제3자 서비스", retention: "보관, 삭제 및 관리", contact: "문의", help: "도움받기", report: "문제 보고에 포함할 내용", scope: "지원 범위", acceptance: "약관 동의 및 라이선스", content: "콘텐츠와 서비스 범위", purchases: "구매 및 구독", changes: "면책, 변경 및 문의",
    permissionNames: { photos: "사진", camera: "카메라", microphone: "마이크", calendar: "캘린더", location: "위치", notifications: "알림", biometric: "생체 인증", localNetwork: "로컬 네트워크" },
    data: (kind) => `앱은 기능을 제공하기 위해 사용자가 만들거나 가져온 ${kind}을(를) 처리합니다.`,
    cloud: "기기에서 iCloud를 선택해 활성화하면 동기화 데이터는 Apple ID와 연결된 Apple CloudKit 서비스를 통해 저장 및 동기화됩니다. 개발자는 해당 데이터에 접근할 수 없습니다.",
    local: "데이터는 기본적으로 기기에 남습니다. 개발자는 이 데이터를 수신하는 서버를 운영하지 않습니다.",
    controller: "이 페이지는 앱 사용 중 정보가 처리되는 방식을 설명합니다.",
    helpBody: "사용법, 기능, 구매, App Store 심사 관련 지원은 이메일로 제공합니다.",
    reportBody: "앱 버전, 기기 모델, 시스템 버전, 화면 캡처, 재현 가능한 단계를 포함해 주세요.",
    scopeBody: "지원팀은 비밀번호, Apple ID 자격 증명 또는 불필요한 개인정보를 요구하지 않습니다.",
    acceptanceBody: "앱을 다운로드, 설치 또는 사용하면 본인이 소유하거나 관리하는 Apple 기기에서 본 약관에 따라 앱을 사용하는 데 동의하는 것입니다.",
    contentBody: "사용자가 만든 콘텐츠의 책임과 권리는 사용자에게 있습니다. 제3자 플랫폼, 시스템 서비스, 네트워크 가용성에는 각각의 약관이 적용됩니다.",
    purchaseBody: "앱에서 구독 또는 일회성 구매를 제공하는 경우 결제는 Apple StoreKit과 Apple ID로 처리됩니다. 자동 갱신 항목은 Apple ID 구독 설정에서 관리하거나 취소할 수 있습니다.",
    noPurchaseBody: "이 앱은 앱 내 구매를 제공하지 않습니다. 향후 유료 기능이 추가되면 해당 릴리스와 이 페이지에 안내합니다.",
    changesBody: "관련 법률이 허용하는 범위에서 앱은 현재 상태로 제공됩니다. 약관 또는 정책은 업데이트될 수 있으며, 업데이트 후 계속 사용하면 변경된 내용에 동의한 것으로 봅니다.",
    retentionBody: "앱에서 콘텐츠를 삭제하거나 앱을 제거하여 로컬 데이터를 삭제할 수 있습니다. iCloud 동기화 데이터는 사용자의 iCloud 설정과 Apple의 동기화 방식에도 영향을 받습니다."
  }
};

function document(title: string, sections: LegalDocument["sections"]): LegalDocument {
  return { title, updatedAt: "2026-07-28", sections };
}

function serviceBullets(profile: LegalProfile, label: Labels, locale: Locale): string[] {
  const bullets = profile.permissions.map((permission) => label.permissionNames[permission]);
  if (profile.usesICloud) bullets.push(label.cloud);
  if (profile.usesWeatherKit) bullets.push("Apple Weather / WeatherKit");
  if (profile.usesStoreKit) bullets.push("Apple StoreKit");
  if (profile.localSharing) bullets.push(profile.localSharing[locale]);
  return bullets;
}

export function createLegalDocuments(profile: LegalProfile): AppLegalDocuments {
  return Object.fromEntries(
    locales.map((locale) => {
      const label = labels[locale];
      const localServiceBullets = serviceBullets(profile, label, locale);
      const privacy = document(label.privacy, [
        { title: label.operator, paragraphs: [`${profile.names[locale]} · ${profile.operator}`, label.controller] },
        { title: label.information, paragraphs: [label.data(profile.contentKinds[locale]), label.local] },
        { title: label.permissions, paragraphs: profile.permissions.length ? [] : [label.local], bullets: localServiceBullets },
        { title: label.retention, paragraphs: [label.retentionBody] },
        { title: label.contact, paragraphs: [profile.email] }
      ]);
      const support = document(label.support, [
        { title: label.help, paragraphs: [label.helpBody] },
        { title: label.report, paragraphs: [label.reportBody] },
        { title: label.scope, paragraphs: [label.scopeBody] },
        { title: label.contact, paragraphs: [profile.email] }
      ]);
      const terms = document(label.terms, [
        { title: label.acceptance, paragraphs: [label.acceptanceBody] },
        { title: label.content, paragraphs: [label.contentBody] },
        { title: label.purchases, paragraphs: [profile.hasPurchases ? label.purchaseBody : label.noPurchaseBody] },
        { title: label.changes, paragraphs: [label.changesBody] },
        { title: label.contact, paragraphs: [profile.email] }
      ]);
      return [locale, { privacy, support, terms }];
    })
  ) as AppLegalDocuments;
}
