import { createLegalDocuments } from "./factory";

export const partyGamesLegal = createLegalDocuments({
  slug: "party-games",
  names: { "zh-Hans": "派对游戏", "zh-Hant": "派對遊戲", en: "Party Games", ja: "パーティーゲーム", ko: "파티 게임" },
  contentKinds: { "zh-Hans": "本地游戏设置和偏好", "zh-Hant": "本機遊戲設定與偏好", en: "local game settings and preferences", ja: "ローカルゲーム設定と環境設定", ko: "로컬 게임 설정 및 환경설정" },
  email: "fxcpxs@163.com",
  operator: "付书艺 / Shuyi Fu",
  permissions: ["localNetwork", "notifications"],
  usesICloud: false,
  usesStoreKit: false,
  localSharing: {
    "zh-Hans": "蓝牙或 Wi-Fi 本地连接仅用于面对面游戏",
    "zh-Hant": "藍牙或 Wi-Fi 本機連線僅用於面對面遊戲",
    en: "Bluetooth or Wi-Fi local connections are used only for in-person play.",
    ja: "Bluetooth または Wi-Fi のローカル接続は、対面でのプレイにのみ使用されます。",
    ko: "Bluetooth 또는 Wi-Fi 로컬 연결은 대면 게임에만 사용됩니다."
  },
  purchaseDetails: {
    "zh-Hans": "本应用为一次性付费下载，购买并下载后即可使用全部游戏功能。中国大陆区计划价格为 ¥6，其他地区计划价格为 $1.00；最终价格、可用地区和退款条件以实际下载平台显示为准。本应用不提供订阅、自动续费或应用内购买。",
    "zh-Hant": "本 App 為一次性付費下載，購買並下載後即可使用全部遊戲功能。中國大陸區計畫價格為 ¥6，其他地區計畫價格為 $1.00；最終價格、可用地區與退款條件以實際下載平台顯示為準。本 App 不提供訂閱、自動續費或 App 內購買。",
    en: "Party Games is a one-time paid download. The planned Mainland China price is ¥6 and the planned price in other regions is $1.00; the final price, availability, and refund conditions are shown by the actual download platform. The app does not offer subscriptions, auto-renewal, or in-app purchases.",
    ja: "本アプリは一度きりの有料ダウンロードです。中国本土の予定価格は ¥6、その他の地域の予定価格は $1.00 です。最終価格、提供地域、返金条件は実際のダウンロードプラットフォームに表示されます。サブスクリプション、自動更新、アプリ内課金は提供しません。",
    ko: "Party Games는 일회성 유료 다운로드 앱입니다. 중국 본토 예정 가격은 ¥6, 그 외 지역 예정 가격은 $1.00이며 최종 가격, 제공 지역과 환불 조건은 실제 다운로드 플랫폼에 표시됩니다. 구독, 자동 갱신 또는 인앱 구매를 제공하지 않습니다."
  },
  hasPurchases: false
});
