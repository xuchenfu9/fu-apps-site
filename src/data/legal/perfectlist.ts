import { createLegalDocuments } from "./factory";

export const perfectlistLegal = createLegalDocuments({
  slug: "perfectlist",
  names: { "zh-Hans": "番茄钟Todo", "zh-Hant": "番茄鐘Todo", en: "PerfectList·To-Do", ja: "やることリストと誕生日アラーム", ko: "PerfectList-Birthday Alarm" },
  contentKinds: { "zh-Hans": "任务、习惯、提醒、附件和备份数据", "zh-Hant": "任務、習慣、提醒、附件和備份資料", en: "tasks, habits, reminders, attachments, and backup data", ja: "タスク、習慣、リマインダー、添付ファイル、バックアップデータ", ko: "할 일, 습관, 알림, 첨부 파일 및 백업 데이터" },
  email: "fxcpxs@163.com",
  operator: "付书艺 / Shuyi Fu",
  permissions: ["notifications", "location", "photos", "microphone", "calendar"],
  usesICloud: true,
  usesStoreKit: true,
  usesWeatherKit: true,
  hasPurchases: true
});
