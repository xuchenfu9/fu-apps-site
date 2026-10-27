import { createLegalDocuments } from "./factory";

export const mobiEllipticalLegal = createLegalDocuments({
  slug: "mobi-elliptical",
  names: { "zh-Hans": "Mobi椭圆机" },
  contentKinds: {
    "zh-Hans": "椭圆机设备标识、蓝牙服务数据、踏频、速度、功率、里程、热量、训练记录、体重和训练计划"
  },
  email: "fxcpxs@163.com",
  operator: "独立开发者",
  permissions: [],
  usesICloud: false,
  usesStoreKit: false,
  updatedAt: "2026-10-03",
  localSharing: {
    "zh-Hans": "蓝牙仅在您主动搜索、连接和训练时用于与椭圆机交换数据；应用不会把设备数据上传到开发者服务器，也不会要求注册账号。"
  },
  purchaseDetails: {
    "zh-Hans": "计划在中国区以 ¥12 一次性付费下载，不提供订阅或应用内购买；最终价格、付款和退款以 App Store 显示及 Apple 规则为准。"
  },
  retentionDetails: {
    "zh-Hans": "训练记录、体重和训练计划默认保存在本机。您可以在应用内删除设备和训练记录，也可以卸载应用移除本地数据；导出的系统备份由相应系统单独管理。"
  },
  hasPurchases: false
});
