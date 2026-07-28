import { createLegalDocuments } from "./factory";

export const myBookmarksLegal = createLegalDocuments({
  slug: "my-bookmarks",
  names: { "zh-Hans": "我的书签", "zh-Hant": "我的書籤", en: "My Bookmarks", ja: "マイブックマーク", ko: "내 북마크" },
  contentKinds: { "zh-Hans": "书签、分类、收藏图标和应用偏好", "zh-Hant": "書籤、分類、收藏圖示和 App 偏好", en: "bookmarks, categories, saved icons, and app preferences", ja: "ブックマーク、カテゴリ、保存したアイコン、アプリ設定", ko: "북마크, 카테고리, 저장한 아이콘 및 앱 설정" },
  email: "fxcpxs@163.com",
  operator: "付书艺 / Shuyi Fu",
  permissions: ["biometric"],
  usesICloud: true,
  usesStoreKit: true,
  hasPurchases: true
});
