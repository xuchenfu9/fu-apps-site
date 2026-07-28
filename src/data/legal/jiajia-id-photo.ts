import { createLegalDocuments } from "./factory";

export const jiajiaIdPhotoLegal = createLegalDocuments({
  slug: "jiajia-id-photo",
  names: { "zh-Hans": "证照准拍", "zh-Hant": "證照好拍", en: "US PassSnap", ja: "ID Photo", ko: "ID Photo" },
  contentKinds: { "zh-Hans": "您选择的照片和证件照处理结果", "zh-Hant": "你選擇的照片和證件照處理結果", en: "photos you select and generated ID-photo results", ja: "選択した写真と生成した証明写真", ko: "선택한 사진과 생성한 증명사진 결과" },
  email: "panxiaosen@163.com",
  operator: "Panxiaosen",
  permissions: ["photos", "camera"],
  usesICloud: false,
  usesStoreKit: false,
  hasPurchases: false
});
