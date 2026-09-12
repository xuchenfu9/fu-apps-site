import { createLegalDocuments } from "./factory";

export const fuzhixingDashcamLegal = createLegalDocuments({
  slug: "fuzhixing-dashcam",
  names: { "zh-Hans": "福之行车记录仪" },
  contentKinds: {
    "zh-Hans": "行车录像、录音、位置摘要、应用设置和您主动传输到车机的录像副本"
  },
  email: "fxcpxs@163.com",
  operator: "付书艺 / Shuyi Fu",
  permissions: ["camera", "microphone", "location", "photos", "localNetwork"],
  usesICloud: false,
  usesStoreKit: true,
  updatedAt: "2026-09-12",
  localSharing: {
    "zh-Hans": "Wi-Fi 或 Bluetooth 只在您主动打开车辆连接、完成配对或发起共享时传输录像；录像不会上传到云端，车机保存的副本由车机运营方负责。"
  },
  purchaseDetails: {
    "zh-Hans": "App 下载后包含基础 480p 录像；720p 和 1080p 由 Apple StoreKit 提供一次性非消耗型购买解锁，实际价格和退款规则以 App Store 显示及 Apple 规则为准。"
  },
  retentionDetails: {
    "zh-Hans": "您可以在应用内删除录像和设置，或卸载应用以移除本机数据。已导出到系统照片或车机的副本由相应系统或车机运营方单独管理；录像删除可能无法撤销。"
  },
  hasPurchases: true
});
