import { createLegalDocuments } from "./factory";

export const partyGamesLegal = createLegalDocuments({
  slug: "party-games",
  names: { "zh-Hans": "派对游戏", "zh-Hant": "派對遊戲", en: "Party Games", ja: "パーティーゲーム", ko: "파티 게임" },
  contentKinds: { "zh-Hans": "本地游戏设置、偏好和购买状态", "zh-Hant": "本機遊戲設定、偏好和購買狀態", en: "local game settings, preferences, and purchase state", ja: "ローカルゲーム設定、環境設定、購入状態", ko: "로컬 게임 설정, 환경설정 및 구매 상태" },
  email: "fxcpxs@163.com",
  operator: "付书艺 / Shuyi Fu",
  permissions: ["localNetwork", "notifications"],
  usesICloud: false,
  usesStoreKit: true,
  localSharing: {
    "zh-Hans": "蓝牙或 Wi-Fi 本地连接仅用于面对面游戏",
    "zh-Hant": "藍牙或 Wi-Fi 本機連線僅用於面對面遊戲",
    en: "Bluetooth or Wi-Fi local connections are used only for in-person play.",
    ja: "Bluetooth または Wi-Fi のローカル接続は、対面でのプレイにのみ使用されます。",
    ko: "Bluetooth 또는 Wi-Fi 로컬 연결은 대면 게임에만 사용됩니다."
  },
  hasPurchases: true
});
