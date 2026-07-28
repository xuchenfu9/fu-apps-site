import { createLegalDocuments } from "./factory";

export const meowtalkDiaryLegal = createLegalDocuments({
  slug: "meowtalk-diary",
  names: { "zh-Hans": "喵语日记", "zh-Hant": "喵語日記", en: "MeowTalk Diary", ja: "にゃん語日記", ko: "냥어일기" },
  contentKinds: { "zh-Hans": "宠物日记、照片、照护、健康和提醒记录", "zh-Hant": "寵物日記、照片、照護、健康和提醒紀錄", en: "pet diary, photo, care, health, and reminder records", ja: "ペットの日記、写真、ケア、健康、リマインダーの記録", ko: "반려동물 일기, 사진, 돌봄, 건강 및 알림 기록" },
  email: "fxcpxs@163.com",
  operator: "付书艺 / ShuyiFu",
  permissions: ["photos", "camera", "microphone", "calendar", "notifications"],
  usesICloud: true,
  usesStoreKit: false,
  localSharing: {
    "zh-Hans": "微信分享仅在您主动发起时使用",
    "zh-Hant": "微信分享僅在你主動發起時使用",
    en: "WeChat sharing is used only when you initiate it.",
    ja: "WeChat 共有は、あなたが開始した場合にのみ使用されます。",
    ko: "WeChat 공유는 사용자가 직접 시작할 때만 사용됩니다."
  },
  hasPurchases: false
});
