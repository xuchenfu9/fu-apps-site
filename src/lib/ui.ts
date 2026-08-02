import type { Locale, Storefront } from "./types";

export interface UiCopy {
  home: string;
  allApps: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryBody: string;
  viewApp: string;
  features: string;
  screenshots: string;
  documents: string;
  privacy: string;
  support: string;
  terms: string;
  appStore: string;
  openAppStore: string;
  storefront: string;
  language: string;
  nowAvailable: string;
  planned: string;
  releasePreparing: string;
  availableIn: (region: string) => string;
  releasePlanned: (region: string) => string;
  notFoundTitle: string;
  notFoundBody: string;
  returnHome: string;
  footer: string;
}

export const ui: Record<Locale, UiCopy> = {
  "zh-Hans": {
    home: "首页", allApps: "全部应用", galleryEyebrow: "FU apps", galleryTitle: "为日常留一处好用的空间。", galleryBody: "一组专注于记录、整理、连接与轻松时刻的 Apple 平台应用。",
    viewApp: "查看应用", features: "功能", screenshots: "应用截图", documents: "应用文档", privacy: "隐私政策", support: "用户支持", terms: "服务条款", appStore: "App Store", openAppStore: "前往 App Store", storefront: "App Store 地区", language: "语言", nowAvailable: "现可下载", planned: "计划发布", releasePreparing: "上架中", availableIn: (region) => `当前跳转至 ${region} App Store`, releasePlanned: (region) => `${region} 版本计划发布，届时将使用当地名称`, notFoundTitle: "页面未找到", notFoundBody: "这个链接可能已更新，或页面暂时不可用。", returnHome: "返回应用首页", footer: "为 Apple 平台设计的独立应用"
  },
  "zh-Hant": {
    home: "首頁", allApps: "所有 App", galleryEyebrow: "FU apps", galleryTitle: "為日常留一處好用的空間。", galleryBody: "一組專注於記錄、整理、連結與輕鬆時刻的 Apple 平台 App。",
    viewApp: "查看 App", features: "功能", screenshots: "App 截圖", documents: "App 文件", privacy: "隱私政策", support: "用戶支援", terms: "服務條款", appStore: "App Store", openAppStore: "前往 App Store", storefront: "App Store 地區", language: "語言", nowAvailable: "現可下載", planned: "計畫發布", releasePreparing: "上架中", availableIn: (region) => `目前跳轉至 ${region} App Store`, releasePlanned: (region) => `${region} 版本計畫發布，屆時將使用當地名稱`, notFoundTitle: "找不到頁面", notFoundBody: "這個連結可能已更新，或頁面暫時無法使用。", returnHome: "返回 App 首頁", footer: "為 Apple 平台設計的獨立 App"
  },
  en: {
    home: "Home", allApps: "All apps", galleryEyebrow: "FU apps", galleryTitle: "Useful places for everyday life.", galleryBody: "A collection of Apple-platform apps for recording, organizing, connecting, and lighter moments.",
    viewApp: "View app", features: "Features", screenshots: "Screens", documents: "App documents", privacy: "Privacy Policy", support: "User Support", terms: "Terms of Service", appStore: "App Store", openAppStore: "View on the App Store", storefront: "App Store region", language: "Language", nowAvailable: "Available now", planned: "Planned release", releasePreparing: "Coming soon", availableIn: (region) => `Opening the ${region} App Store`, releasePlanned: (region) => `Planned for ${region}; the local name will appear when released`, notFoundTitle: "Page not found", notFoundBody: "This link may have moved, or the page is not available yet.", returnHome: "Return to apps", footer: "Independent apps for Apple platforms"
  },
  ja: {
    home: "ホーム", allApps: "すべてのアプリ", galleryEyebrow: "FU apps", galleryTitle: "毎日に、使いやすい居場所を。", galleryBody: "記録、整理、つながり、気軽なひとときのための Apple プラットフォーム向けアプリです。",
    viewApp: "アプリを見る", features: "機能", screenshots: "スクリーン", documents: "アプリの文書", privacy: "プライバシーポリシー", support: "ユーザーサポート", terms: "利用規約", appStore: "App Store", openAppStore: "App Store で見る", storefront: "App Store の地域", language: "言語", nowAvailable: "配信中", planned: "配信予定", releasePreparing: "配信準備中", availableIn: (region) => `${region} の App Store を開きます`, releasePlanned: (region) => `${region} 向けに配信予定です。配信時に現地名が表示されます`, notFoundTitle: "ページが見つかりません", notFoundBody: "リンクが変更されたか、まだ利用できないページです。", returnHome: "アプリ一覧に戻る", footer: "Apple プラットフォームのためのインディペンデントアプリ"
  },
  ko: {
    home: "홈", allApps: "모든 앱", galleryEyebrow: "FU apps", galleryTitle: "일상을 위한 쓸모 있는 공간.", galleryBody: "기록, 정리, 연결, 가벼운 순간을 위한 Apple 플랫폼 앱 모음입니다.",
    viewApp: "앱 보기", features: "기능", screenshots: "화면", documents: "앱 문서", privacy: "개인정보 처리방침", support: "사용자 지원", terms: "서비스 약관", appStore: "App Store", openAppStore: "App Store에서 보기", storefront: "App Store 지역", language: "언어", nowAvailable: "현재 다운로드 가능", planned: "출시 예정", releasePreparing: "출시 준비 중", availableIn: (region) => `${region} App Store를 엽니다`, releasePlanned: (region) => `${region} 출시 예정이며 출시 후 현지 이름이 표시됩니다`, notFoundTitle: "페이지를 찾을 수 없습니다", notFoundBody: "링크가 변경되었거나 아직 사용할 수 없는 페이지입니다.", returnHome: "앱 목록으로 돌아가기", footer: "Apple 플랫폼을 위한 독립 앱"
  }
};

export const storefrontLabels: Record<Locale, Record<Storefront, string>> = {
  "zh-Hans": { CN: "中国大陆", HK: "香港", TW: "台湾", CA: "加拿大", US: "美国", JP: "日本", KR: "韩国" },
  "zh-Hant": { CN: "中國大陸", HK: "香港", TW: "台灣", CA: "加拿大", US: "美國", JP: "日本", KR: "韓國" },
  en: { CN: "Mainland China", HK: "Hong Kong", TW: "Taiwan", CA: "Canada", US: "United States", JP: "Japan", KR: "South Korea" },
  ja: { CN: "中国本土", HK: "香港", TW: "台湾", CA: "カナダ", US: "アメリカ", JP: "日本", KR: "韓国" },
  ko: { CN: "중국 본토", HK: "홍콩", TW: "대만", CA: "캐나다", US: "미국", JP: "일본", KR: "대한민국" }
};
