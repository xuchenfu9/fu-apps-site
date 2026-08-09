import type { AppLegalDocuments, LegalDocument, LegalSection } from "./types";

const updatedAt = "2026-08-09";

function document(title: string, sections: readonly LegalSection[]): LegalDocument {
  return { title, updatedAt, sections };
}

export const appstorylineLegal: AppLegalDocuments = {
  "zh-Hans": {
    privacy: document("隐私政策", [
      { title: "运营者与范围", paragraphs: ["AppStoryline（中文名：上架图生成器）由付书艺 / Shuyi Fu 独立开发和运营。本政策适用于你在受支持的 Apple 设备上使用本应用。", "应用面向 App Store 截图和宣传图排版，不要求创建账户。"] },
      { title: "应用处理的信息", paragraphs: ["应用只处理你主动选择、导入或创建的模板、文字、颜色、截图、照片、项目文件和导出文件，用于编辑、保存和导出上架图片。", "这些内容默认保存在设备本地的应用存储中。应用不会把图片或项目自动上传到开发者服务器。"] },
      { title: "离线处理与删除", paragraphs: ["当前版本不使用云同步、广告、分析、崩溃追踪或跨应用跟踪。如需删除应用创建的项目数据，请在系统中删除应用及其本地数据；已导出的文件和系统照片副本需要在相应位置单独管理。"] },
      { title: "权限与联系我们", paragraphs: ["当你主动从照片图库选择内容或将导出图片保存到图库时，系统可能请求照片权限。文件导入使用你主动选择的文件。应用不会读取未选择的照片。", "隐私问题和删除请求请发送至 fxcpxs@163.com。"] }
    ]),
    support: document("用户支持", [
      { title: "获得帮助", paragraphs: ["AppStoryline 用于在设备本地制作 App Store 截图和宣传图。支持范围包括模板选择、截图导入、文字与背景编辑、项目保存、PNG 导出和 ZIP 导出。"] },
      { title: "问题报告", paragraphs: ["请提供应用版本、设备型号、系统版本、问题所在步骤和最小复现步骤。发送截图或项目文件前，请删除不必要的个人资料和未获授权的内容。"] },
      { title: "付款问题", paragraphs: ["AppStoryline 是一次性付费下载，不提供应用内订阅或应用内购买。购买、退款和账单由实际下载平台按其规则处理；开发者无法代替平台处理付款或退款。"] },
      { title: "联系我们", paragraphs: ["支持邮箱：fxcpxs@163.com。请不要发送 Apple ID 密码、支付凭据或与问题无关的私人图片。"] }
    ]),
    terms: document("服务条款", [
      { title: "许可", paragraphs: ["下载、安装或使用 AppStoryline，即表示你同意本条款。你获得在自己拥有或控制的受支持 Apple 设备上使用本应用的有限、非独占、不可转让许可。"] },
      { title: "一次性购买", paragraphs: ["中国区计划定价为 ¥12，其他地区计划定价为 $3.99；最终价格以实际下载平台显示为准。该价格对应一次性付费下载，不是订阅，不会自动续费，也不包含应用内购买。付款、退款和平台账户由实际下载平台处理。"] },
      { title: "用户内容与责任", paragraphs: ["你保留自己创建或合法导入内容的权利，并负责确认截图、照片、文字、品牌和其他素材具有必要的使用权。你应保护设备、本地项目和导出文件，不得使用本应用制作违法或侵犯他人权利的内容。"] },
      { title: "可用性与联系", paragraphs: ["应用按现状提供，不保证每一张导出的图片都符合特定国家、地区、商店或审核人员的要求；提交前请自行核对 App Store 当前规范。我们可能因系统或应用版本变化更新功能和条款。问题请联系 fxcpxs@163.com。"] }
    ]),
    marketing: document("营销条款", [
      { title: "产品主张", paragraphs: ["一次购买，无订阅。你的截图始终留在设备上。AppStoryline 让你在本地选择模板、导入截图、编辑文字与背景，并导出适合继续检查和提交的 PNG 或 ZIP 文件。"] },
      { title: "价格与购买方式", paragraphs: ["中国区计划定价为 ¥12，其他地区计划定价为 $3.99。价格是一次性付费下载，不是订阅；最终价格、可用地区和退款条件以实际下载平台显示为准。"] },
      { title: "营销信息的边界", paragraphs: ["“留在设备上”表示当前版本默认在本地处理和保存，不代表系统备份、用户主动分享、导出到其他位置或第三方平台会被应用控制。应用不承诺自动通过 App Store 审核，也不保证特定素材或文案适合每个市场。"] },
      { title: "联系", paragraphs: ["关于功能、价格或营销信息的更正，请联系 fxcpxs@163.com。"] }
    ])
  },
  "zh-Hant": {
    privacy: document("隱私政策", [
      { title: "營運者與範圍", paragraphs: ["AppStoryline（中文名：上架圖生成器）由付書藝 / Shuyi Fu 獨立開發和營運。本政策適用於你在支援的 Apple 裝置上使用本 App。", "App 用於 App Store 截圖和宣傳圖排版，不要求建立帳戶。"] },
      { title: "App 處理的資訊", paragraphs: ["App 只處理你主動選擇、匯入或建立的範本、文字、顏色、截圖、照片、專案檔案和輸出檔案，用於編輯、保存和輸出上架圖片。", "這些內容預設保存在裝置本機的 App 儲存空間中。App 不會把圖片或專案自動上傳到開發者伺服器。"] },
      { title: "離線處理與刪除", paragraphs: ["目前版本不使用雲端同步、廣告、分析、當機追蹤或跨 App 追蹤。如需刪除 App 建立的專案資料，請在系統中刪除 App 及其本機資料；已輸出的檔案和系統照片副本需要在相應位置另行管理。"] },
      { title: "權限與聯絡", paragraphs: ["當你主動從照片圖庫選擇內容或將輸出圖片保存到圖庫時，系統可能要求照片權限。檔案匯入使用你主動選擇的檔案。App 不會讀取未選擇的照片。", "隱私問題和刪除請求請寄至 fxcpxs@163.com。"] }
    ]),
    support: document("用戶支援", [
      { title: "取得協助", paragraphs: ["AppStoryline 用於在裝置本機製作 App Store 截圖和宣傳圖。支援範圍包括範本選擇、截圖匯入、文字與背景編輯、專案保存、PNG 輸出和 ZIP 輸出。"] },
      { title: "問題回報", paragraphs: ["請提供 App 版本、裝置型號、系統版本、問題所在步驟和最小重現步驟。傳送截圖或專案檔案前，請刪除不必要的個人資料和未獲授權的內容。"] },
      { title: "付款問題", paragraphs: ["AppStoryline 是一次性付費下載，不提供 App 內訂閱或 App 內購買。購買、退款和帳單由實際下載平台按其規則處理；開發者無法代替平台處理付款或退款。"] },
      { title: "聯絡我們", paragraphs: ["支援信箱：fxcpxs@163.com。請不要傳送 Apple ID 密碼、付款憑據或與問題無關的私人照片。"] }
    ]),
    terms: document("服務條款", [
      { title: "授權", paragraphs: ["下載、安裝或使用 AppStoryline，即表示你同意本條款。你取得在自己擁有或控制的支援 Apple 裝置上使用本 App 的有限、非專屬、不可轉讓授權。"] },
      { title: "一次性購買", paragraphs: ["中國區計畫定價為 ¥12，其他地區計畫定價為 $3.99；最終價格以實際下載平台顯示為準。該價格對應一次性付費下載，不是訂閱，不會自動續費，也不包含 App 內購買。付款、退款和平台帳戶由實際下載平台處理。"] },
      { title: "使用者內容與責任", paragraphs: ["你保留自己建立或合法匯入內容的權利，並負責確認截圖、照片、文字、品牌和其他素材具有必要的使用權。你應保護裝置、本機專案和輸出檔案，不得使用本 App 製作違法或侵犯他人權利的內容。"] },
      { title: "可用性與聯絡", paragraphs: ["App 按現狀提供，不保證每一張輸出的圖片都符合特定國家、地區、商店或審核人員的要求；提交前請自行核對 App Store 當前規範。我們可能因系統或 App 版本變化更新功能和條款。問題請聯絡 fxcpxs@163.com。"] }
    ]),
    marketing: document("行銷條款", [
      { title: "產品主張", paragraphs: ["一次購買，無訂閱。你的截圖始終留在裝置上。AppStoryline 讓你在本機選擇範本、匯入截圖、編輯文字與背景，並輸出適合繼續檢查和提交的 PNG 或 ZIP 檔案。"] },
      { title: "價格與購買方式", paragraphs: ["中國區計畫定價為 ¥12，其他地區計畫定價為 $3.99。價格是一次性付費下載，不是訂閱；最終價格、可用地區和退款條件以實際下載平台顯示為準。"] },
      { title: "行銷資訊的界線", paragraphs: ["「留在裝置上」表示目前版本預設在本機處理和保存，不代表系統備份、使用者主動分享、輸出到其他位置或第三方平台會被 App 控制。App 不承諾自動通過 App Store 審核，也不保證特定素材或文案適合每個市場。"] },
      { title: "聯絡", paragraphs: ["關於功能、價格或行銷資訊的更正，請聯絡 fxcpxs@163.com。"] }
    ])
  },
  en: {
    privacy: document("Privacy Policy", [
      { title: "Operator and scope", paragraphs: ["AppStoryline, also known in Chinese as 上架图生成器, is independently developed and operated by 付书艺 / Shuyi Fu. This policy applies when you use the app on a supported Apple device.", "The app prepares App Store screenshots and promotional layouts. It does not require an account."] },
      { title: "Information the app handles", paragraphs: ["The app handles only templates, text, colors, screenshots, photos, project files, and exported files that you actively create, choose, or import, to provide editing, saving, and export features.", "This content is stored in the app's local device storage by default. The app does not automatically upload images or projects to a developer server."] },
      { title: "Offline processing and deletion", paragraphs: ["The current version does not use cloud sync, advertising, analytics, crash tracking, or cross-app tracking. To remove project data created by the app, delete the app and its local data in the system; exported files and copies in Photos must be managed in their respective locations."] },
      { title: "Permissions and contact", paragraphs: ["When you actively choose content from Photos or save an exported image to Photos, the system may request photo access. File import uses only files you select. The app does not read unselected photos.", "For privacy questions or deletion requests, contact fxcpxs@163.com."] }
    ]),
    support: document("User Support", [
      { title: "Get help", paragraphs: ["AppStoryline makes App Store screenshots and promotional layouts on your device. Support covers template selection, screenshot import, text and background editing, project saving, PNG export, and ZIP export."] },
      { title: "Report a problem", paragraphs: ["Include the app version, device model, system version, the step where the problem appears, and the smallest reproducible sequence. Remove unnecessary personal information and unauthorized content before sending screenshots or project files."] },
      { title: "Payment questions", paragraphs: ["AppStoryline is a one-time paid download and does not provide subscriptions or in-app purchases. The actual download platform handles payment, refunds, and billing under its own rules; the developer cannot process them on the platform's behalf."] },
      { title: "Contact", paragraphs: ["Support email: fxcpxs@163.com. Do not send an Apple ID password, payment credentials, or private images unrelated to the problem."] }
    ]),
    terms: document("Terms of Service", [
      { title: "License", paragraphs: ["By downloading, installing, or using AppStoryline, you agree to these terms. You receive a limited, non-exclusive, non-transferable license to use the app on supported Apple devices that you own or control."] },
      { title: "One-time purchase", paragraphs: ["The planned China-region price is ¥12 and the planned price in other regions is $3.99; the final price is the one shown by the actual download platform. This is a one-time paid download, not a subscription, does not renew automatically, and does not include in-app purchases. The platform handles payment, refunds, and account matters."] },
      { title: "User content and responsibility", paragraphs: ["You retain rights to content you create or legally import, and you are responsible for confirming that screenshots, photos, text, brands, and other assets may be used. Protect your device, local projects, and exported files. Do not use the app to create unlawful content or content that infringes another person's rights."] },
      { title: "Availability and contact", paragraphs: ["The app is provided as-is. It does not guarantee that every exported image will satisfy a particular country, region, storefront, or reviewer; check the current App Store requirements before submission. We may update features and terms as systems and app versions change. Contact fxcpxs@163.com with questions."] }
    ]),
    marketing: document("Marketing Terms", [
      { title: "Product promise", paragraphs: ["One payment. No subscription. Your screenshots stay on your device. AppStoryline lets you choose a template, import screenshots, edit text and backgrounds locally, and export PNG or ZIP files for further review and submission."] },
      { title: "Price and purchase", paragraphs: ["The planned China-region price is ¥12 and the planned price in other regions is $3.99. The price is a one-time paid download, not a subscription; the actual platform determines the final price, availability, and refund conditions."] },
      { title: "Limits of marketing information", paragraphs: ["“Stay on your device” means that the current version processes and stores content locally by default. It does not control system backups, sharing initiated by you, exports to another location, or third-party platforms. The app does not promise automatic App Store approval or suitability of a particular asset or caption for every market."] },
      { title: "Contact", paragraphs: ["For corrections to feature, price, or marketing information, contact fxcpxs@163.com."] }
    ])
  },
  ja: {
    privacy: document("プライバシーポリシー", [
      { title: "運営者と対象", paragraphs: ["AppStoryline（中国語名：上架图生成器）は、付书艺 / Shuyi Fu が独立して開発・運営しています。本ポリシーは、対応する Apple デバイスで本アプリを使用するときに適用されます。", "本アプリは App Store のスクリーンショットと宣伝用レイアウトを作成し、アカウントを要求しません。"] },
      { title: "取り扱う情報", paragraphs: ["本アプリは、編集、保存、書き出しのために、あなたが自分で作成、選択、または読み込んだテンプレート、文字、色、スクリーンショット、写真、プロジェクト、書き出しファイルだけを扱います。", "これらの内容は通常、デバイス内のアプリ領域に保存されます。画像やプロジェクトを開発者のサーバーへ自動送信することはありません。"] },
      { title: "オフライン処理と削除", paragraphs: ["現在のバージョンは、クラウド同期、広告、分析、クラッシュ追跡、アプリ間追跡を使用しません。アプリが作成したプロジェクトデータを削除するには、システムからアプリとその本機データを削除してください。書き出したファイルや写真のコピーは保存先で管理してください。"] },
      { title: "権限と連絡先", paragraphs: ["写真から内容を自分で選ぶとき、または書き出した画像を写真に保存するとき、システムが写真へのアクセスを求める場合があります。ファイル読み込みでは選択したファイルだけを使用します。", "プライバシーに関する質問や削除依頼は fxcpxs@163.com までご連絡ください。"] }
    ]),
    support: document("ユーザーサポート", [
      { title: "サポート範囲", paragraphs: ["AppStoryline はデバイス上で App Store スクリーンショットと宣伝用レイアウトを作成します。テンプレート選択、スクリーンショット読み込み、文字・背景編集、プロジェクト保存、PNG・ZIP 書き出しをサポートします。"] },
      { title: "問題の報告", paragraphs: ["アプリのバージョン、デバイス機種、システムバージョン、問題が起きる手順、最小限の再現手順をお知らせください。スクリーンショットやプロジェクトを送る前に、不要な個人情報と権利のない内容を削除してください。"] },
      { title: "支払いについて", paragraphs: ["AppStoryline は一度きりの有料ダウンロードで、サブスクリプションとアプリ内課金はありません。購入、返金、請求は実際のダウンロードプラットフォームがその規則に従って処理します。"] },
      { title: "連絡先", paragraphs: ["サポートメール：fxcpxs@163.com。Apple ID のパスワード、支払い情報、問題に関係のない個人的な画像は送らないでください。"] }
    ]),
    terms: document("利用規約", [
      { title: "ライセンス", paragraphs: ["AppStoryline をダウンロード、インストール、または使用することで、本規約に同意したものとします。あなたが所有または管理する対応 Apple デバイスで使用する、限定的、非独占的、譲渡不可のライセンスを付与します。"] },
      { title: "一度きりの購入", paragraphs: ["中国地域の予定価格は ¥12、その他の地域の予定価格は $3.99 です。最終価格は実際のダウンロードプラットフォームに表示される金額です。一度きりの有料ダウンロードであり、サブスクリプションではなく、自動更新もアプリ内課金もありません。"] },
      { title: "コンテンツと責任", paragraphs: ["自分で作成または合法的に読み込んだコンテンツの権利はあなたにあります。スクリーンショット、写真、文章、ブランド、その他の素材を使用できることを確認する責任はあなたにあります。違法または他者の権利を侵害する内容には使用しないでください。"] },
      { title: "提供と連絡", paragraphs: ["本アプリは現状のまま提供され、すべての書き出し画像が特定の国、地域、ストア、審査担当者の要件を満たすことを保証しません。提出前に最新の App Store 要件を確認してください。質問は fxcpxs@163.com まで。"] }
    ]),
    marketing: document("マーケティング規約", [
      { title: "製品の約束", paragraphs: ["一度の購入で、サブスクリプションなし。スクリーンショットはデバイス内に保管されます。AppStoryline はテンプレートを選び、スクリーンショットを読み込み、文字と背景をローカルで編集し、PNG または ZIP を書き出せます。"] },
      { title: "価格と購入", paragraphs: ["中国地域の予定価格は ¥12、その他の地域は $3.99 です。一度きりの有料ダウンロードであり、サブスクリプションではありません。最終価格、提供地域、返金条件は実際のプラットフォームに従います。"] },
      { title: "マーケティング情報の範囲", paragraphs: ["「デバイス内に保管」は、現在のバージョンが通常ローカルで処理・保存することを示します。システムバックアップ、あなたが開始する共有、別の場所への書き出し、第三者プラットフォームは管理しません。App Store の自動承認や、すべての市場への適合を約束するものではありません。"] },
      { title: "連絡先", paragraphs: ["機能、価格、マーケティング情報の訂正は fxcpxs@163.com までご連絡ください。"] }
    ])
  },
  ko: {
    privacy: document("개인정보 처리방침", [
      { title: "운영자와 적용 범위", paragraphs: ["AppStoryline(중국어 이름: 上架图生成器)은 付书艺 / Shuyi Fu가 독립적으로 개발하고 운영합니다. 이 정책은 지원되는 Apple 기기에서 앱을 사용할 때 적용됩니다.", "앱은 App Store 스크린샷과 홍보용 레이아웃을 만들며 계정을 요구하지 않습니다."] },
      { title: "앱이 처리하는 정보", paragraphs: ["앱은 편집, 저장, 내보내기를 위해 사용자가 직접 만들거나 선택하거나 가져온 템플릿, 텍스트, 색상, 스크린샷, 사진, 프로젝트, 내보낸 파일만 처리합니다.", "이 콘텐츠는 기본적으로 기기의 앱 저장 공간에 보관됩니다. 이미지나 프로젝트를 개발자 서버로 자동 업로드하지 않습니다."] },
      { title: "오프라인 처리와 삭제", paragraphs: ["현재 버전은 클라우드 동기화, 광고, 분석, 충돌 추적, 앱 간 추적을 사용하지 않습니다. 앱이 만든 프로젝트 데이터를 삭제하려면 시스템에서 앱과 로컬 데이터를 삭제하세요. 내보낸 파일과 사진 사본은 저장된 위치에서 관리해야 합니다."] },
      { title: "권한과 문의", paragraphs: ["사진에서 콘텐츠를 직접 선택하거나 내보낸 이미지를 사진에 저장할 때 시스템이 사진 접근 권한을 요청할 수 있습니다. 파일 가져오기는 사용자가 선택한 파일만 사용합니다.", "개인정보 문의나 삭제 요청은 fxcpxs@163.com으로 보내 주세요."] }
    ]),
    support: document("사용자 지원", [
      { title: "도움 받기", paragraphs: ["AppStoryline은 기기에서 App Store 스크린샷과 홍보용 레이아웃을 만듭니다. 템플릿 선택, 스크린샷 가져오기, 텍스트·배경 편집, 프로젝트 저장, PNG·ZIP 내보내기를 지원합니다."] },
      { title: "문제 신고", paragraphs: ["앱 버전, 기기 모델, 시스템 버전, 문제가 발생한 단계, 최소 재현 절차를 알려 주세요. 스크린샷이나 프로젝트를 보내기 전에 불필요한 개인정보와 권한 없는 콘텐츠를 제거하세요."] },
      { title: "결제 문의", paragraphs: ["AppStoryline은 한 번 구매하는 유료 다운로드이며 구독이나 앱 내 구매를 제공하지 않습니다. 결제, 환불, 청구는 실제 다운로드 플랫폼의 규칙에 따라 처리됩니다."] },
      { title: "문의하기", paragraphs: ["지원 이메일: fxcpxs@163.com. Apple ID 비밀번호, 결제 정보 또는 문제와 무관한 사적인 이미지를 보내지 마세요."] }
    ]),
    terms: document("서비스 약관", [
      { title: "사용권", paragraphs: ["AppStoryline을 다운로드, 설치 또는 사용하면 이 약관에 동의하는 것입니다. 사용자가 소유하거나 관리하는 지원 Apple 기기에서 사용할 수 있는 제한적이고 비독점적이며 양도할 수 없는 사용권을 제공합니다."] },
      { title: "일회성 구매", paragraphs: ["중국 지역의 예정 가격은 ¥12, 그 외 지역의 예정 가격은 $3.99입니다. 최종 가격은 실제 다운로드 플랫폼에 표시되는 금액입니다. 일회성 유료 다운로드이며 구독이 아니고 자동 갱신이나 앱 내 구매를 포함하지 않습니다."] },
      { title: "사용자 콘텐츠와 책임", paragraphs: ["직접 만들거나 합법적으로 가져온 콘텐츠의 권리는 사용자에게 있습니다. 스크린샷, 사진, 텍스트, 브랜드 및 기타 자산을 사용할 권리가 있는지 확인할 책임도 사용자에게 있습니다. 불법이거나 타인의 권리를 침해하는 콘텐츠를 만들지 마세요."] },
      { title: "서비스와 문의", paragraphs: ["앱은 현재 상태로 제공되며 모든 내보낸 이미지가 특정 국가, 지역, 스토어 또는 심사자의 요구사항을 충족한다고 보장하지 않습니다. 제출 전에 최신 App Store 요구사항을 확인하세요. 문의는 fxcpxs@163.com으로 보내 주세요."] }
    ]),
    marketing: document("마케팅 약관", [
      { title: "제품 약속", paragraphs: ["한 번 구매하고 구독 없이 사용하세요. 스크린샷은 기기에 보관됩니다. AppStoryline은 템플릿을 선택하고 스크린샷을 가져오며 텍스트와 배경을 기기에서 편집하고 PNG 또는 ZIP으로 내보냅니다."] },
      { title: "가격과 구매", paragraphs: ["중국 지역의 예정 가격은 ¥12, 그 외 지역은 $3.99입니다. 일회성 유료 다운로드이며 구독이 아닙니다. 최종 가격, 제공 지역, 환불 조건은 실제 플랫폼에 따릅니다."] },
      { title: "마케팅 정보의 범위", paragraphs: ["‘기기에 보관’은 현재 버전이 기본적으로 콘텐츠를 로컬에서 처리하고 저장한다는 의미입니다. 시스템 백업, 사용자가 시작한 공유, 다른 위치로의 내보내기, 제3자 플랫폼은 앱이 통제하지 않습니다. App Store 자동 승인이나 모든 시장에 대한 적합성을 약속하지 않습니다."] },
      { title: "문의", paragraphs: ["기능, 가격 또는 마케팅 정보의 정정은 fxcpxs@163.com으로 문의해 주세요."] }
    ])
  }
};
