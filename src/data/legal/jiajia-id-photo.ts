import type { AppLegalDocuments, LegalDocument, LegalSection } from "./types";

const updatedAt = "2026-08-28";

function document(title: string, sections: readonly LegalSection[]): LegalDocument {
  return { title, updatedAt, sections };
}

export const jiajiaIdPhotoLegal: AppLegalDocuments = {
  "zh-Hans": {
    privacy: document("隐私政策", [
      { title: "运营者与范围", paragraphs: ["佳佳照片（JiaJia Photo）由 Panxiaosen 独立开发和运营。本政策适用于您在受支持的 Apple 设备上使用本应用。", "本应用是通用人像照片编辑器，不要求创建账户。"] },
      { title: "照片与处理信息", paragraphs: ["本应用只处理您主动拍摄或从照片中选择的图片，以及处理过程中临时产生的人脸位置数据，用于裁剪、主体分离、背景调整、自然美化和导出。", "照片和临时人脸位置数据在设备端处理；我们不会把照片、面部数据或身份信息上传到开发者服务器，也不会将其出售或用于广告。"] },
      { title: "网络请求与第三方", paragraphs: ["应用可能查询公开的版本信息和推荐内容。此类请求不包含照片、面部数据或身份信息；推荐内容缓存保留在设备本地。", "您主动打开的 App Store、社交平台或其他外部链接由相应服务提供商处理，网络服务商可能依其政策处理建立连接所必需的技术信息。本应用不集成第三方广告或行为分析服务。"] },
      { title: "权限、保存与删除", paragraphs: ["当您拍照、选择照片或保存结果时，系统可能请求相机或照片权限。应用不会读取您未选择的照片。", "处理期间的临时数据在设备内存中使用。导出的图片只有在您主动保存时才写入系统照片；地区、语言偏好和公开推荐缓存保存在设备本地。删除应用可以移除应用保存的本地数据，系统照片中的副本需要在照片应用中单独删除。"] },
      { title: "联系我们", paragraphs: ["隐私问题、删除请求或数据处理疑问，请联系 fxcpxs@163.com。"] }
    ]),
    support: document("用户支持", [
      { title: "获得帮助", paragraphs: ["佳佳照片（JiaJia Photo）支持拍摄或选取人像、设备端处理、背景调整、自然美化、常用比例和自由裁剪，以及 PNG/JPEG 导出。"] },
      { title: "问题报告", paragraphs: ["请提供应用版本、设备型号、系统版本、发生问题的步骤和截图。发送图片前，请移除与问题无关的个人资料。"] },
      { title: "使用边界", paragraphs: ["应用用于一般人像照片编辑和分享，不保证任何导出结果适合特定平台或第三方流程；请以相关平台的最新要求为准。"] },
      { title: "联系我们", paragraphs: ["支持邮箱：fxcpxs@163.com。支持人员不会要求您提供 Apple ID 密码、支付凭据或不必要的私人照片。"] }
    ]),
    terms: document("服务条款", [
      { title: "许可与使用", paragraphs: ["下载、安装或使用佳佳照片（JiaJia Photo），即表示您同意本条款。您获得在自己拥有或控制的受支持 Apple 设备上使用本应用的有限、非独占、不可转让许可。"] },
      { title: "内容与责任", paragraphs: ["您对自己拍摄、导入、编辑、保存和分享的内容负责，并应确认拥有使用这些内容所需的权利。请勿使用本应用制作违法、误导他人或侵犯他人权利的内容。"] },
      { title: "购买与可用性", paragraphs: ["当前版本不提供应用内购买或订阅。应用按现状提供，不保证每次处理、导出或分享都适合特定设备、平台或第三方流程；系统服务和外部平台受其各自条款约束。"] },
      { title: "变更与联系", paragraphs: ["我们可能因功能、系统或法律变化更新本条款和隐私政策；更新后继续使用即表示接受修订内容。问题请联系 fxcpxs@163.com。"] }
    ])
  },
  "zh-Hant": {
    privacy: document("隱私政策", [
      { title: "營運者與範圍", paragraphs: ["佳佳照片（JiaJia Photo）由 Panxiaosen 獨立開發和營運。本政策適用於你在支援的 Apple 裝置上使用本 App。", "本 App 是通用人像照片編輯器，不要求建立帳戶。"] },
      { title: "照片與處理資料", paragraphs: ["本 App 只處理你主動拍攝或從照片中選取的圖片，以及處理期間暫時產生的人臉位置資料，用於裁切、主體分離、背景調整、自然美化和匯出。", "照片和暫時的人臉位置資料在裝置本機處理；我們不會把照片、面部資料或身分資訊上傳到開發者伺服器，也不會出售或用於廣告。"] },
      { title: "網路請求與第三方", paragraphs: ["App 可能查詢公開的版本資訊和推薦內容。這類請求不包含照片、面部資料或身分資訊；推薦內容快取保留在裝置本機。", "你主動開啟的 App Store、社交平台或其他外部連結由相應服務提供商處理，網路服務商可能依其政策處理建立連線所需的技術資訊。本 App 不整合第三方廣告或行為分析服務。"] },
      { title: "權限、保存與刪除", paragraphs: ["當你拍照、選擇照片或儲存結果時，系統可能要求相機或照片權限。App 不會讀取你未選擇的照片。", "處理期間的暫時資料在裝置記憶體中使用。匯出的圖片只會在你主動儲存時寫入系統照片；地區、語言偏好和公開推薦快取保存在裝置本機。刪除 App 可以移除 App 保存的本機資料，系統照片中的副本需要在照片 App 中另外刪除。"] },
      { title: "聯絡我們", paragraphs: ["隱私問題、刪除請求或資料處理疑問，請聯絡 fxcpxs@163.com。"] }
    ]),
    support: document("用戶支援", [
      { title: "取得協助", paragraphs: ["佳佳照片（JiaJia Photo）支援拍攝或選取人像、裝置本機處理、背景調整、自然美化、常用比例和自由裁切，以及 PNG/JPEG 匯出。"] },
      { title: "問題回報", paragraphs: ["請提供 App 版本、裝置型號、系統版本、發生問題的步驟和截圖。傳送圖片前，請移除與問題無關的個人資料。"] },
      { title: "使用界線", paragraphs: ["App 用於一般人像照片編輯和分享，不保證任何匯出結果適合特定平台或第三方流程；請以相關平台的最新要求為準。"] },
      { title: "聯絡我們", paragraphs: ["支援信箱：fxcpxs@163.com。支援人員不會要求你提供 Apple ID 密碼、付款憑據或不必要的私人照片。"] }
    ]),
    terms: document("服務條款", [
      { title: "授權與使用", paragraphs: ["下載、安裝或使用佳佳照片（JiaJia Photo），即表示你同意本條款。你取得在自己擁有或控制的支援 Apple 裝置上使用本 App 的有限、非專屬、不可轉讓授權。"] },
      { title: "內容與責任", paragraphs: ["你對自己拍攝、匯入、編輯、保存和分享的內容負責，並應確認擁有使用這些內容所需的權利。請勿使用本 App 製作違法、誤導他人或侵犯他人權利的內容。"] },
      { title: "購買與可用性", paragraphs: ["目前版本不提供 App 內購買或訂閱。App 按現狀提供，不保證每次處理、匯出或分享都適合特定裝置、平台或第三方流程；系統服務和外部平台受其各自條款約束。"] },
      { title: "變更與聯絡", paragraphs: ["我們可能因功能、系統或法律變化更新本條款和隱私政策；更新後繼續使用即表示接受修訂內容。問題請聯絡 fxcpxs@163.com。"] }
    ])
  },
  en: {
    privacy: document("Privacy Policy", [
      { title: "Operator and scope", paragraphs: ["JiaJia Photo is independently developed and operated by Panxiaosen. This policy applies when you use the app on a supported Apple device.", "JiaJia Photo is a general portrait photo editor and does not require an account."] },
      { title: "Photos and processing data", paragraphs: ["The app processes only images that you actively capture or choose from Photos, together with temporary face-position data used for cropping, subject separation, background adjustments, natural retouching, and export.", "Photos and temporary face-position data are processed on device. We do not upload, sell, or use your photos, face data, or identity information for advertising."] },
      { title: "Network requests and third parties", paragraphs: ["The app may request public version information and public recommendation content. These requests do not include photos, face data, or identity information; recommendation caches remain on your device.", "App Store, social, and other external links open only when you choose them and are handled by the relevant provider. Network providers may process technical information needed to establish a connection. The app does not integrate third-party advertising or behavioural analytics."] },
      { title: "Permissions, saving, and deletion", paragraphs: ["The system may request Camera or Photos permission when you take a photo, choose a photo, or save a result. The app does not read photos that you did not select.", "Temporary data is held in device memory during processing. An exported image enters Photos only when you actively save it. Region and language preferences and public recommendation caches remain on device. Deleting the app removes data stored by the app; copies in Photos must be deleted there."] },
      { title: "Contact", paragraphs: ["For privacy questions, deletion requests, or questions about processing, contact fxcpxs@163.com."] }
    ]),
    support: document("User Support", [
      { title: "Get help", paragraphs: ["JiaJia Photo supports capturing or choosing a portrait, on-device processing, background adjustments, natural retouching, common ratios and free crop, plus PNG/JPEG export."] },
      { title: "Report a problem", paragraphs: ["Include the app version, device model, system version, the steps that show the problem, and a screenshot. Remove unrelated personal information before sending images."] },
      { title: "Use boundaries", paragraphs: ["The app is for general portrait photo editing and sharing. It does not guarantee that an export is suitable for a particular platform or third-party workflow; check the latest requirements of that platform."] },
      { title: "Contact", paragraphs: ["Support email: fxcpxs@163.com. Support will not ask for your Apple ID password, payment credentials, or unnecessary private photos."] }
    ]),
    terms: document("Terms of Service", [
      { title: "License and use", paragraphs: ["By downloading, installing, or using JiaJia Photo, you agree to these terms. You receive a limited, non-exclusive, non-transferable license to use the app on supported Apple devices that you own or control."] },
      { title: "Content and responsibility", paragraphs: ["You are responsible for content that you capture, import, edit, save, or share, and for confirming that you have the rights needed to use it. Do not use the app to create unlawful, misleading, or rights-infringing content."] },
      { title: "Purchases and availability", paragraphs: ["The current version does not offer in-app purchases or subscriptions. The app is provided as-is and does not guarantee that every processing, export, or share action is suitable for a particular device, platform, or third-party workflow; system services and external platforms have their own terms."] },
      { title: "Changes and contact", paragraphs: ["We may update these terms and the Privacy Policy when features, systems, or laws change. Continued use after an update means acceptance of the revised content. Contact fxcpxs@163.com with questions."] }
    ])
  },
  ja: {
    privacy: document("プライバシーポリシー", [
      { title: "運営者と対象", paragraphs: ["JiaJia Photo は Panxiaosen が独立して開発・運営しています。本ポリシーは、対応する Apple デバイスでアプリを使用するときに適用されます。", "JiaJia Photo は一般的なポートレート写真編集アプリで、アカウントを要求しません。"] },
      { title: "写真と処理データ", paragraphs: ["アプリは、あなたが撮影または写真から選択した画像と、切り抜き、被写体分離、背景調整、自然な補正、書き出しに使う一時的な顔位置データだけを処理します。", "写真と一時的な顔位置データはデバイス上で処理されます。写真、顔データ、身元情報をアップロード、販売、広告に利用することはありません。"] },
      { title: "ネットワークと第三者", paragraphs: ["アプリは公開のバージョン情報とおすすめ情報をリクエストする場合があります。リクエストに写真、顔データ、身元情報は含まれず、おすすめのキャッシュはデバイス内に保管されます。", "App Store、ソーシャルサービス、その他の外部リンクはあなたが選択したときだけ開き、各提供者のポリシーが適用されます。接続に必要な技術情報はネットワーク事業者が処理する場合があります。第三者広告や行動分析サービスは組み込みません。"] },
      { title: "権限、保存、削除", paragraphs: ["撮影、写真の選択、結果の保存を行うとき、システムがカメラまたは写真へのアクセスを求める場合があります。選択していない写真は読み取りません。", "一時データは処理中にデバイスメモリで使用されます。書き出した画像が写真に入るのは、あなたが保存を選んだときだけです。地域と言語の設定、おすすめ情報のキャッシュはデバイス内に残ります。アプリを削除するとアプリが保存したデータを削除できますが、写真にあるコピーは写真アプリで削除してください。"] },
      { title: "連絡先", paragraphs: ["プライバシー、削除依頼、処理についての質問は fxcpxs@163.com までご連絡ください。"] }
    ]),
    support: document("ユーザーサポート", [
      { title: "サポート範囲", paragraphs: ["JiaJia Photo はポートレートの撮影・選択、デバイス上の処理、背景調整、自然な補正、一般的な比率と自由な切り抜き、PNG/JPEG 書き出しをサポートします。"] },
      { title: "問題の報告", paragraphs: ["アプリのバージョン、デバイス機種、システムバージョン、問題が起きる手順、画面写真をお知らせください。画像を送る前に、問題に関係のない個人情報を削除してください。"] },
      { title: "利用上の範囲", paragraphs: ["本アプリは一般的なポートレート写真の編集と共有を目的とします。特定のプラットフォームや第三者の手続きへの適合を保証しません。各プラットフォームの最新要件を確認してください。"] },
      { title: "連絡先", paragraphs: ["サポートメール：fxcpxs@163.com。Apple ID パスワード、支払い情報、問題に関係のない個人的な写真は送らないでください。"] }
    ]),
    terms: document("利用規約", [
      { title: "ライセンスと利用", paragraphs: ["JiaJia Photo をダウンロード、インストール、または使用することで、本規約に同意したものとします。あなたが所有または管理する対応 Apple デバイスで使用する限定的、非独占的、譲渡不可のライセンスを付与します。"] },
      { title: "コンテンツと責任", paragraphs: ["撮影、読み込み、編集、保存、共有するコンテンツについての責任と、利用に必要な権利の確認はあなたにあります。違法、誤解を招く内容、または他者の権利を侵害する内容には使用しないでください。"] },
      { title: "購入と提供", paragraphs: ["現在のバージョンにアプリ内課金やサブスクリプションはありません。アプリは現状のまま提供され、特定のデバイス、プラットフォーム、第三者の手続きへの適合を保証しません。"] },
      { title: "変更と連絡", paragraphs: ["機能、システム、法律の変更に応じて本規約とプライバシーポリシーを更新する場合があります。更新後も利用を続けると改定内容に同意したものとします。質問は fxcpxs@163.com まで。"] }
    ])
  },
  ko: {
    privacy: document("개인정보 처리방침", [
      { title: "운영자와 적용 범위", paragraphs: ["JiaJia Photo는 Panxiaosen이 독립적으로 개발하고 운영합니다. 이 정책은 지원되는 Apple 기기에서 앱을 사용할 때 적용됩니다.", "JiaJia Photo는 일반 인물 사진 편집 앱이며 계정을 요구하지 않습니다."] },
      { title: "사진과 처리 데이터", paragraphs: ["앱은 사용자가 직접 촬영하거나 사진에서 선택한 이미지와 자르기, 피사체 분리, 배경 조정, 자연스러운 보정, 내보내기에 사용하는 임시 얼굴 위치 데이터만 처리합니다.", "사진과 임시 얼굴 위치 데이터는 기기에서 처리됩니다. 사진, 얼굴 데이터 또는 신원 정보를 업로드하거나 판매하거나 광고에 사용하지 않습니다."] },
      { title: "네트워크 요청과 제3자", paragraphs: ["앱은 공개 버전 정보와 추천 정보를 요청할 수 있습니다. 요청에는 사진, 얼굴 데이터 또는 신원 정보가 포함되지 않으며 추천 캐시는 기기에 보관됩니다.", "App Store, 소셜 서비스 및 기타 외부 링크는 사용자가 선택할 때만 열리고 각 제공자의 정책이 적용됩니다. 네트워크 사업자는 연결에 필요한 기술 정보를 처리할 수 있습니다. 타사 광고나 행동 분석 서비스는 통합하지 않습니다."] },
      { title: "권한, 저장 및 삭제", paragraphs: ["사진을 촬영하거나 선택하거나 결과를 저장할 때 시스템이 카메라 또는 사진 접근 권한을 요청할 수 있습니다. 선택하지 않은 사진은 읽지 않습니다.", "임시 데이터는 처리 중 기기 메모리에서 사용됩니다. 내보낸 이미지는 사용자가 저장할 때만 사진에 들어갑니다. 지역 및 언어 설정과 추천 캐시는 기기에 남습니다. 앱을 삭제하면 앱이 저장한 데이터를 삭제할 수 있지만 사진에 있는 사본은 사진 앱에서 삭제해야 합니다."] },
      { title: "문의", paragraphs: ["개인정보, 삭제 요청 또는 처리 방식에 관한 질문은 fxcpxs@163.com으로 문의해 주세요."] }
    ]),
    support: document("사용자 지원", [
      { title: "지원 범위", paragraphs: ["JiaJia Photo는 인물 촬영 및 선택, 기기 내 처리, 배경 조정, 자연스러운 보정, 일반 비율과 자유 자르기, PNG/JPEG 내보내기를 지원합니다."] },
      { title: "문제 신고", paragraphs: ["앱 버전, 기기 모델, 시스템 버전, 문제가 발생하는 단계와 화면 캡처를 알려 주세요. 이미지를 보내기 전에 문제와 무관한 개인정보를 제거하세요."] },
      { title: "사용 범위", paragraphs: ["앱은 일반 인물 사진 편집과 공유를 위한 것입니다. 특정 플랫폼이나 제3자 절차에 적합하다고 보장하지 않으므로 각 플랫폼의 최신 요구사항을 확인하세요."] },
      { title: "문의하기", paragraphs: ["지원 이메일: fxcpxs@163.com. Apple ID 비밀번호, 결제 정보 또는 문제와 무관한 사적인 사진을 보내지 마세요."] }
    ]),
    terms: document("서비스 약관", [
      { title: "사용권과 이용", paragraphs: ["JiaJia Photo를 다운로드, 설치 또는 사용하면 본 약관에 동의하는 것입니다. 사용자가 소유하거나 관리하는 지원 Apple 기기에서 사용할 수 있는 제한적이고 비독점적이며 양도할 수 없는 사용권을 제공합니다."] },
      { title: "콘텐츠와 책임", paragraphs: ["촬영, 가져오기, 편집, 저장 또는 공유하는 콘텐츠에 대한 책임과 사용에 필요한 권리 확인은 사용자에게 있습니다. 불법적이거나 오해를 일으키거나 타인의 권리를 침해하는 콘텐츠를 만들지 마세요."] },
      { title: "구매와 제공", paragraphs: ["현재 버전은 앱 내 구매나 구독을 제공하지 않습니다. 앱은 현재 상태로 제공되며 특정 기기, 플랫폼 또는 제3자 절차에 적합하다고 보장하지 않습니다."] },
      { title: "변경과 문의", paragraphs: ["기능, 시스템 또는 법률이 변경되면 본 약관과 개인정보 처리방침을 업데이트할 수 있습니다. 업데이트 후 계속 사용하면 변경된 내용에 동의한 것으로 봅니다. 문의는 fxcpxs@163.com으로 보내 주세요."] }
    ])
  }
};
