import type { AppLegalDocuments } from "./types";

export const banzhurenLegal: AppLegalDocuments = {
  "zh-Hans": {
    privacy: {
      title: "隐私政策",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "运营者与适用范围",
          paragraphs: [
            "班主任小秘书由付书艺开发和运营。本隐私政策适用于你使用班主任小秘书 iPhone、iPad 或其他受支持 Apple 设备功能的情形。",
            "本应用面向班主任和教师的班级工作管理。由于应用可能记录学生及家长资料，请只在具有合法依据、必要授权和适当安全措施的情况下录入相关信息。"
          ]
        },
        {
          title: "处理的信息",
          paragraphs: [
            "本应用处理你主动创建、导入或通过局域网编辑的内容，用于提供班级管理、教学安排、成绩分析、工作记录、待办和提醒功能。内容可能包括班级资料、学生姓名和学号、性别、生日、家长联系方式、宿舍、职务、特长、家庭地址、课程、考试与成绩、表现分、操行、请假、支持计划、班级事件、工作日志、反馈和待办内容。",
            "语音待办和语音留痕功能会处理你主动录制的音频以及系统生成的语音转写文本。你主动选择导入的照片、CSV 或 Excel 文件也会被应用读取并用于对应功能。",
            "只有当你主动使用工作留痕的拍摄功能时，应用才会调用相机并将拍摄结果作为留痕附件保存。只有当你主动使用位置功能时，应用才会请求定位，处理当前经纬度，并可能通过系统反向地理编码将坐标转换为可读位置。坐标和位置文本会随对应工作留痕记录保存。"
          ]
        },
        {
          title: "本地存储、iCloud 备份、删除与控制",
          paragraphs: [
            "班级资料、工作记录、待办、附件和语音记录默认保存在设备本地的 Core Data 数据库及应用支持目录中，并使用系统提供的文件保护能力。应用不会把这些班级资料上传给开发者。",
            "如果你主动启用可选的 iCloud 备份，应用会使用你 Apple 账户的 CloudKit 私有数据库，同步 Core Data 中的业务记录和你选择的应用设置。这些数据归你的 Apple 账户管理，开发者无法访问。照片、录音和文件附件的二进制内容不会随 Core Data 自动同步，因此不应将 iCloud 备份视为这些附件的完整备份。",
            "你可以在应用内删除相应的本地记录，或卸载应用以移除设备上的班级数据库、附件和其他业务数据。如果已启用 iCloud 备份，iCloud 中数据的保留、同步和删除还受你的 Apple 账户设置及 Apple 规则约束。已导出的 CSV、Excel、图片、音频、系统照片以及电脑端保存的副本不受应用内删除操作控制，需要由你在相应保存位置自行管理。"
          ]
        },
        {
          title: "免费功能、会员与购买信息",
          paragraphs: [
            "移动端基础班务管理功能可以免费使用。数据导入、数据导出、局域网电脑版和成绩分析属于会员功能，可通过月度自动续期订阅、年度自动续期订阅或一次性终身会员购买解锁。本版本不提供免费试用或介绍优惠。",
            "Apple StoreKit 处理商品查询、购买、订阅续期、交易验证、恢复购买和订阅管理。应用会在设备上读取经 Apple 验证的商品标识、当前权益、订阅到期时间及撤销状态，以判断会员权限；应用不运营用于保存购买记录的开发者账户或自有购买服务器。",
            "付款、续期、退款和 Apple ID 账户凭据由 Apple 按其规则处理，开发者不会获得你的 Apple ID 密码、完整支付信息或银行卡资料。购买终身会员会立即解锁会员功能，但不会自动取消或退还当前的月度或年度订阅；你需要在 Apple 的订阅管理页面单独管理或取消仍有效的订阅。"
          ]
        },
        {
          title: "意见建议与支持邮件",
          paragraphs: [
            "应用内的“意见建议”只在本机生成一封系统邮件草稿。你可以在系统邮件界面核对、修改或取消。如果你选择保存草稿，系统邮件草稿箱及邮件服务商可能保存或同步该草稿，开发者不会因你保存草稿而收到邮件。",
            "只有你明确发送且邮件成功发送后，开发者才会在其收件邮箱收到邮件。开发者支持邮箱及参与传递的邮件服务商可能收到你的发件邮箱、邮件主题、邮件正文和你选择填写的微信号；你的邮件 App 或邮件服务商还可能保留已发送副本。请在发送前删除支持所不必要的学生、家长或班级个人资料。",
            "应用不自行上传意见建议内容，不保存反馈历史，也不轮询回复。开发者如需回复，会通过电子邮件与你联系。"
          ]
        },
        {
          title: "权限与第三方服务",
          paragraphs: [
            "只有在你主动使用相关功能并授权后，应用才会请求相应系统权限。你可以在设备设置中关闭权限；关闭后，对应功能可能无法使用。"
          ],
          bullets: [
            "麦克风：录入语音待办和语音留痕。录音在应用内按你的操作保存，不会由“意见建议”功能自动添加到邮件。",
            "语音识别：将你主动录制的语音转换为待办文字。设备支持时应用会请求设备端识别；否则音频会交给 Apple 的系统语音识别服务处理，具体处理方式受 Apple 的服务和隐私政策约束。",
            "相机：只在你主动为工作留痕拍摄时调用，拍摄结果作为附件保存在应用数据中。",
            "照片：当你在工作日志中主动选择照片时，应用读取所选内容并将副本保存在应用数据中；保存应用生成的图片时，应用只请求添加到系统照片图库的权限，不读取你未选择的既有照片。",
            "定位：只在你主动为工作留痕获取位置时处理当前经纬度，并可能使用系统反向地理编码生成位置文本。坐标和位置文本随对应记录保存；撤回定位权限会阻止后续定位，不会自动删除已保存的内容。",
            "通知：发送你主动设置的待办提醒。提醒使用系统本地通知，不需要把班级资料上传到开发者服务器。",
            "Apple StoreKit：处理月度、年度自动续期订阅和一次性终身会员的商品查询、购买、续期、交易验证、恢复购买及订阅管理。付款和 Apple ID 账户凭据由 Apple 处理，开发者不会获得你的 Apple ID 密码或完整支付信息。",
            "iCloud 与 CloudKit：只有在你主动启用可选备份后，才使用你 Apple 账户的 CloudKit 私有数据库同步前述数据；开发者无法访问。",
            "意见建议：只调用系统邮件界面创建草稿；应用不使用广告、分析或 App Tracking Transparency 跟踪。"
          ]
        },
        {
          title: "局域网编辑、Tips 与网络请求",
          paragraphs: [
            "当你主动启动电脑端编辑时，应用会开启局域网服务。同一局域网内的电脑需要使用应用显示的配对码和会话令牌访问当前班级资料。进入后台不会自动停止该服务；监听会持续到用户主动停止、App 终止或系统终止监听。当前版本的局域网编辑使用 HTTP，传输不加密；在公共 Wi-Fi 或不受信任的网络中开启可能导致传输内容被窃听或篡改，请仅在你信任的局域网中使用并保护配对码。",
            "宠物 Tips 只读取随应用内置的 SecretaryTips.json，不请求远程 Tips 或推荐目录。",
            "应用会请求 timor.tech 提供的节假日数据；请求失败时，可能从 raw.githubusercontent.com（GitHub）获取失败回退数据。这两类请求只发送查询年份及标准网络请求信息，不附带你的班级、学生、成绩、联系方式或其他应用记录；网络服务提供方仍可能按其自身政策处理网络日志。"
          ]
        },
        {
          title: "保存期限、撤回与删除请求",
          paragraphs: [
            "本地业务资料，包括工作留痕的经纬度、位置文本、拍摄照片和其他附件，会保留到你在应用内删除相应记录、清空数据或卸载应用为止。可选 iCloud 备份中的数据由你的 Apple 账户和 Apple 的 CloudKit 规则管理。",
            "应用不保存你的意见建议邮件历史。系统邮件草稿箱中的草稿和你一侧的已发送副本，需要由你在邮件 App 或邮件服务商侧删除。对于邮件成功发送后开发者收件邮箱中仍保存的支持邮件，你可以联系 fxcpxs@163.com 请求删除，并提供足以核验相应邮件的信息。该删除请求仅覆盖开发者收件邮箱，不会删除你的草稿、已发送副本或邮件服务商备份；邮件服务商的备份和日志按其自身政策处理。",
            "你可以随时在系统设置中撤回麦克风、语音识别、相机、照片、定位或通知权限，也可以停止使用意见建议、语音和局域网功能。撤回权限会阻止后续使用对应能力，不会自动删除撤回前已保存的照片、位置或其他内容。"
          ]
        },
        {
          title: "联系我们",
          paragraphs: [
            "如需了解隐私政策、请求支持或申请删除开发者邮箱中仍保存的支持邮件，请发送邮件至 fxcpxs@163.com。请不要在邮件中发送密码、Apple ID 凭据或与处理问题无关的学生和家长个人资料。"
          ]
        }
      ]
    },
    support: {
      title: "用户支持",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "获得帮助",
          paragraphs: [
            "班主任小秘书通过电子邮件提供功能使用、数据导入导出、iCloud 备份、局域网编辑、提醒、语音待办、购买和恢复购买方面的支持。支持邮箱为 fxcpxs@163.com。你可以手动编写邮件，也可以用应用内“意见建议”在本机生成系统邮件草稿。"
          ]
        },
        {
          title: "问题报告中请提供",
          paragraphs: [
            "请发送应用版本、设备型号、iOS 版本、问题所在功能、必要的界面截图，以及可以稳定复现问题的步骤。如果问题与局域网编辑有关，请说明电脑和设备是否连接到同一网络、配对码是否已重新生成，以及浏览器显示的错误信息。",
            "如果问题涉及导入文件，请先删除或遮盖学生姓名、学号、联系方式、地址和其他不必要的个人资料，再提供最小化的示例。请不要把完整班级数据库、原始录音或包含学生信息的照片作为附件发送，除非你已确认确有必要并具备相应授权。"
          ]
        },
        {
          title: "支持范围与隐私边界",
          paragraphs: [
            "支持人员不会要求你提供密码、Apple ID 凭据、支付信息或不必要的学生和家长个人资料。“意见建议”只创建本机邮件草稿；请在系统邮件界面核对内容。如果你选择保存草稿，系统邮件草稿箱及邮件服务商可能保存或同步该草稿。开发者只会在邮件成功发送后收到邮件；开发者支持邮箱和邮件服务商可能收到发件邮箱、主题、正文和你选择填写的微信号。你的邮件 App 或邮件服务商可能保留已发送副本。",
            "应用不自行上传邮件内容、不保存反馈历史、不轮询回复。草稿和你一侧的已发送副本需在邮件 App 或邮件服务商侧删除。如需删除开发者收件邮箱中仍保存的支持邮件，请联系 fxcpxs@163.com 并提供可核验的信息；该请求仅覆盖开发者收件邮箱，邮件服务商的备份按其自身政策处理。"
          ]
        },
        {
          title: "iCloud 备份与附件",
          paragraphs: [
            "可选 iCloud 备份使用你 Apple 账户的 CloudKit 私有数据库，同步 Core Data 业务记录和你选择的应用设置，开发者无法访问。照片、录音和文件附件的二进制内容不会随 Core Data 自动同步，请为重要附件自行保留必要副本。"
          ]
        },
        {
          title: "会员、订阅与恢复购买",
          paragraphs: [
            "移动端基础班务管理可免费使用。数据导入、数据导出、局域网电脑版和成绩分析可通过月度自动续期订阅、年度自动续期订阅或一次性终身会员解锁；本版本不提供免费试用。",
            "购买未生效时，请先确认使用的是完成购买的 Apple ID，再尝试应用内的“恢复购买”。月度和年度订阅可通过应用内“管理订阅”或 Apple 账户的订阅设置管理及取消。若在订阅有效时购买终身会员，原订阅不会自动取消或退款，需要你另行管理。",
            "开发者无法代替 Apple 处理扣款、取消、退款或 Apple ID 账户问题；如需申请退款，请使用 Apple 提供的退款与购买支持渠道。"
          ]
        },
        {
          title: "联系我们",
          paragraphs: ["支持邮箱：fxcpxs@163.com。"]
        }
      ]
    },
    terms: {
      title: "服务条款",
      updatedAt: "2026-09-09",
      sections: [
        {
          title: "使用条款（Apple 标准 EULA）",
          paragraphs: [
            "班主任小秘书采用 Apple 标准最终用户许可协议（EULA）。请通过下方链接查看完整使用条款。",
            "本页其余内容为班级资料处理、会员订阅和支持服务的补充说明，不替代 Apple 标准 EULA；涉及应用使用许可的内容以该标准 EULA 为准。"
          ],
          links: [{
            label: "查看 Apple 标准使用条款（EULA）",
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          }]
        },
        {
          title: "班级资料与用户责任",
          paragraphs: [
            "你对录入、导入、编辑、导出和分享的班级、学生及家长资料负责，包括确认处理这些资料具有适用法律要求的依据、告知和授权。你应采取合理措施保护设备、导出文件、语音记录和局域网配对码，不应把配对码分享给不受信任的人。",
            "你保留对自己创建或合法导入内容的权利，并应确保内容真实、合法，不侵犯他人隐私、名誉、知识产权或其他权利。请不要在意见反馈中提交超出支持所需范围的学生或家长个人资料。"
          ]
        },
        {
          title: "免费功能、会员与购买",
          paragraphs: [
            "本应用免费下载，移动端基础班务管理功能可以免费使用。数据导入、数据导出、局域网电脑版和成绩分析属于会员功能。本版本不提供免费试用或介绍优惠。",
            "月度会员和年度会员是通过 Apple App 内购买提供的自动续期订阅。确认购买后，费用由 Apple 计入你的 Apple 账户；除非你在当前订阅周期结束前至少 24 小时取消，否则订阅会自动续期，Apple 会在当前周期结束前 24 小时内为下一周期扣款。你可以在应用内“管理订阅”或 Apple 账户的订阅设置中查看、变更或取消订阅。实际价格和续期周期以 Apple 购买确认页显示为准。",
            "终身会员是通过 Apple App 内购买提供的一次性非消耗型购买，购买后可永久使用会员功能，不会自动续费。若你在月度或年度订阅有效时购买终身会员，原订阅不会自动取消或退款；你仍需在 Apple 的订阅管理页面处理该订阅。购买后可以使用“恢复购买”，开发者无法代替 Apple 处理付款、取消或退款。"
          ]
        },
        {
          title: "局域网编辑、意见建议与文件交换",
          paragraphs: [
            "局域网编辑是由你的设备临时提供的本地功能，并不等同于互联网云端服务。进入后台不会自动停止该服务；监听会持续到用户主动停止、App 终止或系统终止监听。当前版本局域网编辑使用未加密 HTTP；在公共 Wi-Fi 或不受信任网络中开启可能导致窃听或篡改，你应保护配对码并核对批量导入、批量修改和导出结果。",
            "“意见建议”只在本机生成系统邮件草稿。如果你选择保存草稿，系统邮件草稿箱和邮件服务商可能保存或同步草稿。你需在系统邮件界面核对并明确发送；只有邮件成功发送后，开发者才会在其收件邮箱收到邮件。发送后，开发者支持邮箱和邮件服务商可能收到发件邮箱、主题、正文和可选微信号；你的邮件 App 或邮件服务商可能保留已发送副本。应用不自行上传、不保存反馈历史、不轮询回复。",
            "草稿和你一侧的已发送副本需在邮件 App 或邮件服务商侧删除；针对支持邮件的开发者删除请求仅覆盖开发者收件邮箱，邮件服务商备份按其政策处理。因错误文件、错误操作、网络中断、明文局域网传输或邮件中包含不必要个人资料造成的后果，应由使用者在其责任范围内承担。"
          ]
        },
        {
          title: "系统服务、购买与网络",
          paragraphs: [
            "通知、语音识别、相机、照片导入和保存、定位与反向地理编码、StoreKit、Apple ID、可选 iCloud 备份、系统邮件以及 timor.tech 节假日数据等能力依赖 Apple 或其他系统/网络服务。只有当你主动使用对应功能时，应用才会调用相机或处理工作留痕的经纬度与位置文本。相关服务可能因设备设置、系统版本、网络状态或服务方变更而不可用。月度、年度订阅和一次性终身会员的付款、续期、退款及账户交易由 Apple 按其规则处理。",
            "可选 iCloud 备份使用你 Apple 账户的 CloudKit 私有数据库同步 Core Data 业务记录和你选择的应用设置，开发者无法访问；照片、录音和文件附件的二进制内容不会随 Core Data 自动同步。宠物 Tips 只读取应用内置 SecretaryTips.json，不请求远程 Tips 或推荐目录。节假日数据优先请求 timor.tech，失败时可能回退请求 raw.githubusercontent.com（GitHub）；这些请求只包含查询年份和标准网络请求信息。"
          ]
        },
        {
          title: "服务可用性与免责声明",
          paragraphs: [
            "本应用用于辅助班级工作记录和整理，不替代学校规章、教师的专业判断、正式教务系统、法律意见、医疗意见或安全管理流程。提醒、成绩分析、工作日判断和数据导入结果应由你在实际使用前后进行核对。",
            "在适用法律允许的范围内，本应用按现状提供。我们不保证应用、局域网连接、通知、语音识别、iCloud 备份、系统邮件、网络数据或其他第三方服务持续无误或始终可用。"
          ]
        },
        {
          title: "条款变更与联系我们",
          paragraphs: [
            "我们可能根据功能、法律或服务变化更新本条款和隐私政策，并在本页面更新日期和内容。更新后继续使用本应用，表示你接受修订后的内容。",
            "如对本条款有疑问，请联系 fxcpxs@163.com。"
          ]
        }
      ]
    }
  },
  "zh-Hant": {
    privacy: {
      title: "隱私政策",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "營運者與適用範圍",
          paragraphs: [
            "班主任小秘書由付書藝開發與營運。本政策適用於你在 iPhone、iPad 或其他受支援的 Apple 裝置上使用本 App。",
            "本 App 面向班主任與教師。由於可能記錄學生及家長資料，請只在具備合法依據、必要授權和適當安全措施時輸入相關資訊。"
          ]
        },
        {
          title: "處理的資訊",
          paragraphs: [
            "本 App 處理你主動建立、匯入或透過區域網路編輯的班級、學生、課程、考試、成績、操行、請假、待辦、工作記錄與附件，以提供班務管理功能。",
            "只有在你主動使用時，App 才會處理所選照片或檔案、錄音與語音辨識文字、相機拍攝內容，以及工作記錄的經緯度與系統反向地理編碼產生的位置文字。"
          ]
        },
        {
          title: "本機儲存、iCloud、刪除與控制",
          paragraphs: [
            "資料預設儲存在裝置本機的 Core Data 資料庫與 App 支援目錄，開發者不會把班級資料上傳到自己的伺服器。",
            "如你主動啟用 iCloud 備份，Core Data 業務記錄及你選擇的 App 設定會透過你 Apple 帳戶的 CloudKit 私有資料庫同步，開發者無法存取。照片、錄音和檔案附件的二進位內容不會隨 Core Data 自動同步。",
            "你可在 App 內刪除記錄，或移除 App 以清除裝置上的本機資料。已匯出的 CSV、Excel、圖片、音訊、系統照片及電腦副本需在各自的儲存位置另行管理。"
          ]
        },
        {
          title: "免費功能、會員與購買資訊",
          paragraphs: [
            "行動端基礎班務管理可免費使用。資料匯入、資料匯出、區域網路電腦版與成績分析屬於會員功能，可透過月度自動續期訂閱、年度自動續期訂閱或一次性終身會員解鎖。本版本不提供免費試用或介紹優惠。",
            "Apple StoreKit 會處理商品查詢、購買、續期、交易驗證、恢復購買與訂閱管理。App 只會在裝置上讀取 Apple 驗證的商品識別碼、權益、到期時間與撤銷狀態，以判斷會員權限。",
            "付款、續期、退款和 Apple ID 憑證由 Apple 處理，開發者不會取得你的 Apple ID 密碼或完整付款資料。購買終身會員不會自動取消或退還仍有效的月度或年度訂閱。"
          ]
        },
        {
          title: "意見建議與支援郵件",
          paragraphs: [
            "「意見建議」只會在本機產生系統郵件草稿。你可以檢查、修改、取消或儲存草稿；儲存草稿不會把郵件寄給開發者。",
            "只有在你於系統郵件介面明確寄出且郵件成功傳送後，開發者信箱才會收到寄件地址、主旨、正文與你選填的微信號。請先移除支援所不必要的學生、家長或班級個人資料。",
            "App 不會自行上傳意見內容、不保存回饋歷史，也不輪詢回覆。"
          ]
        },
        {
          title: "權限、區域網路與第三方服務",
          paragraphs: [
            "App 只會在你主動使用相關功能並授權後，才使用麥克風、語音辨識、相機、所選照片、定位、通知、本機網路、StoreKit、iCloud 和系統郵件。",
            "區域網路電腦版由你的裝置臨時提供服務，使用配對碼與工作階段憑證。進入背景不會自動停止；服務會持續至你主動停止、App 終止或系統終止監聽。現行傳輸使用未加密 HTTP，請只在可信任網路中使用。",
            "寵物 Tips 只讀取 App 內建的 SecretaryTips.json，不請求遠端 Tips。節假日資料會請求 timor.tech，失敗時可能改由 raw.githubusercontent.com 取得；請求只包含查詢年份和標準網路請求資訊，不包含班級或學生資料。",
            "App 不含廣告或第三方分析，不使用 App Tracking Transparency 進行跨 App 或跨網站追蹤。"
          ]
        },
        {
          title: "保存期限與聯絡方式",
          paragraphs: [
            "本機資料會保留到你刪除相應記錄、清除資料或移除 App 為止；iCloud 私有資料受你的 Apple 帳戶設定與 Apple 規則管理。",
            "如需刪除開發者信箱中仍保存的支援郵件，或對本政策有疑問，請聯絡 fxcpxs@163.com。該請求不會刪除你一側的草稿、已寄出副本或郵件服務商備份。"
          ]
        }
      ]
    },
    support: {
      title: "用戶支援",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "取得協助",
          paragraphs: ["我們透過 fxcpxs@163.com 提供功能、資料匯入匯出、iCloud、區域網路電腦版、提醒、語音、會員與恢復購買支援。App 內「意見建議」只會產生系統郵件草稿。"]
        },
        {
          title: "回報問題時請提供",
          paragraphs: [
            "請提供 App 版本、裝置型號、iOS 版本、問題功能與可重現步驟。若需附上截圖或匯入範例，請先遮蔽學生姓名、學號、聯絡方式與其他不必要的個人資料。",
            "除非確有必要且具備相應授權，請勿傳送完整班級資料庫、原始錄音或含有學生資料的照片。"
          ]
        },
        {
          title: "iCloud 與附件",
          paragraphs: ["可選 iCloud 備份透過你 Apple 帳戶的 CloudKit 私有資料庫同步 Core Data 業務記錄與你選擇的設定，開發者無法存取。照片、錄音與檔案附件不會隨 Core Data 自動同步。"]
        },
        {
          title: "會員、訂閱與恢復購買",
          paragraphs: [
            "基礎班務管理免費；資料匯入、資料匯出、區域網路電腦版與成績分析可透過月度、年度或終身會員解鎖。本版本沒有免費試用。",
            "月度與年度訂閱可在 App 內「管理訂閱」或 Apple 帳戶設定中管理與取消。購買終身會員不會自動取消或退款現有訂閱。購買未生效時可嘗試「恢復購買」。",
            "付款、取消和退款由 Apple 處理；開發者無法代替 Apple 修改帳單或 Apple ID。"
          ]
        },
        {
          title: "隱私與聯絡",
          paragraphs: ["支援人員不會要求密碼、Apple ID 憑證或完整付款資料。如需一般支援或刪除開發者信箱中的支援郵件，請聯絡 fxcpxs@163.com。"]
        }
      ]
    },
    terms: {
      title: "服務條款",
      updatedAt: "2026-09-09",
      sections: [
        {
          title: "使用條款（Apple 標準 EULA）",
          paragraphs: [
            "班主任小秘書採用 Apple 標準最終用戶許可協議（EULA）。請透過下方連結查看完整使用條款。",
            "本頁其餘內容為班級資料處理、會員訂閱和支援服務的補充說明，不取代 Apple 標準 EULA；涉及 App 使用授權的內容以該標準 EULA 為準。"
          ],
          links: [{
            label: "查看 Apple 標準使用條款（EULA）",
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          }]
        },
        {
          title: "班級資料與使用者責任",
          paragraphs: [
            "你應確保錄入、匯入、匯出或分享學生及家長資料符合適用法律、學校規定和必要授權，並妥善保護裝置、匯出檔案、錄音與區域網路配對碼。",
            "本 App 用於輔助班務記錄，不取代教師專業判斷、正式教務系統、法律、醫療或安全流程。"
          ]
        },
        {
          title: "免費功能、會員與購買",
          paragraphs: [
            "本 App 免費下載，行動端基礎班務管理可免費使用。資料匯入、資料匯出、區域網路電腦版與成績分析屬於會員功能。本版本不提供免費試用。",
            "月度與年度會員是自動續期訂閱。確認購買後由 Apple 向你的 Apple 帳戶收費；除非你在目前週期結束至少 24 小時前取消，訂閱將自動續期，Apple 會在週期結束前 24 小時內為下一週期扣款。實際價格以 Apple 購買頁為準。",
            "終身會員為一次性非消耗型購買，不會自動續期。購買終身會員不會自動取消或退還現有訂閱；你仍需在 Apple 訂閱管理中處理該訂閱。"
          ]
        },
        {
          title: "區域網路、郵件與系統服務",
          paragraphs: [
            "現行區域網路電腦版使用未加密 HTTP，進入背景不會自動停止，請只在可信任網路中使用並保護配對碼。",
            "「意見建議」只建立系統郵件草稿；只有你成功寄出後開發者才會收到。StoreKit、Apple ID、iCloud、語音辨識、通知、相機、定位、系統郵件和網路資料服務受各服務方規則與可用性限制。"
          ]
        },
        {
          title: "備份、風險與免責",
          paragraphs: [
            "iCloud 私有資料庫不會自動同步照片、錄音和檔案附件。請自行核對匯入、匯出、成績分析、提醒和備份結果，並保留必要副本。",
            "在適用法律允許的範圍內，本 App 按現狀提供，不保證所有裝置、網路或第三方服務持續無誤。"
          ]
        },
        {
          title: "變更與聯絡",
          paragraphs: ["我們可能因功能或法律變化更新條款與政策。如有疑問，請聯絡 fxcpxs@163.com。"]
        }
      ]
    }
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "Operator and scope",
          paragraphs: [
            "Banzhuren Secretary is developed and operated by Shuyi Fu. This policy applies when you use the app on iPhone, iPad, or another supported Apple device.",
            "The app is intended for homeroom teachers and educators. Because it may contain student and guardian information, enter such information only when you have a lawful basis, required authorization, and suitable safeguards."
          ]
        },
        {
          title: "Information processed",
          paragraphs: [
            "The app processes class, student, course, exam, grade, conduct, leave, task, work-log, and attachment content that you choose to create, import, or edit over your local network in order to provide classroom-management features.",
            "Only when you choose the relevant feature, the app processes selected photos or files, recordings and speech-recognition text, camera captures, and coordinates or place text generated through system reverse geocoding for a work log."
          ]
        },
        {
          title: "On-device storage, iCloud, deletion, and control",
          paragraphs: [
            "Data is stored on your device by default in Core Data and the app-support directory. The developer does not upload classroom records to a developer-operated server.",
            "If you enable optional iCloud backup, Core Data records and the app settings you select are synchronized through the private CloudKit database of your Apple Account. The developer cannot access that private database. Binary photo, audio, and file attachments are not automatically synchronized with Core Data.",
            "You can delete records in the app or remove the app to delete local app data. Exported spreadsheets, images, audio, Photos-library items, and copies saved on a computer must be managed at their respective locations."
          ]
        },
        {
          title: "Free features, membership, and purchase information",
          paragraphs: [
            "Core classroom management on mobile devices is free. Data import, data export, the local-network computer editor, and grade analytics are member features available through monthly or yearly auto-renewable subscriptions or a one-time lifetime membership. This release has no free trial or introductory offer.",
            "Apple StoreKit handles product lookup, purchases, renewals, transaction verification, restoration, and subscription management. The app reads Apple-verified product identifiers, entitlements, subscription expiration dates, and revocation status on the device to determine membership access.",
            "Apple handles payment, renewal, refunds, and Apple ID credentials. The developer does not receive your Apple ID password or full payment details. Buying lifetime membership does not automatically cancel or refund an active monthly or yearly subscription."
          ]
        },
        {
          title: "Feedback and support email",
          paragraphs: [
            "The Feedback feature only creates a draft in the system mail composer. You can review, edit, cancel, or save the draft. Saving a draft does not send it to the developer.",
            "Only after you explicitly send the email and delivery succeeds can the developer mailbox receive your sender address, subject, message, and optional WeChat ID. Remove student, guardian, or class information that is not needed for support before sending.",
            "The app does not upload feedback by itself, keep an online feedback history, or poll for replies."
          ]
        },
        {
          title: "Permissions, local network, and third-party services",
          paragraphs: [
            "The app uses microphone, speech recognition, camera, selected Photos items, location, notifications, local network, StoreKit, iCloud, and the system mail composer only when you choose the relevant feature and grant the required permission.",
            "The computer editor is temporarily hosted by your device and protected by a pairing code and session credential. It does not stop automatically when the app enters the background; it continues until you stop it, the app terminates, or the system stops the listener. Current local-network traffic uses unencrypted HTTP, so use it only on a trusted network.",
            "Pet tips are read only from the bundled SecretaryTips.json and do not use a remote tips feed. Holiday data is requested from timor.tech, with a possible fallback to raw.githubusercontent.com. These requests contain the queried year and standard network-request information, not class or student records.",
            "The app contains no advertising or third-party analytics and does not track you across apps or websites."
          ]
        },
        {
          title: "Retention and contact",
          paragraphs: [
            "Local content remains until you delete the relevant record, clear the data, or remove the app. Private iCloud data is controlled by your Apple Account settings and Apple's rules.",
            "For privacy questions or to request deletion of a support email still held in the developer mailbox, contact fxcpxs@163.com. This request cannot delete drafts, sent copies, or backups held by your mail provider."
          ]
        }
      ]
    },
    support: {
      title: "User Support",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "Getting help",
          paragraphs: ["Email fxcpxs@163.com for help with features, import and export, iCloud, the local-network computer editor, reminders, voice features, membership, and restore purchases. The in-app Feedback feature only creates a system email draft."]
        },
        {
          title: "Include with a report",
          paragraphs: [
            "Include the app version, device model, iOS version, affected feature, and reliable reproduction steps. Redact student names, identifiers, contacts, and other unnecessary personal information from screenshots or sample files.",
            "Do not send a full classroom database, original recording, or student photo unless it is necessary and you have appropriate authorization."
          ]
        },
        {
          title: "iCloud and attachments",
          paragraphs: ["Optional iCloud backup uses your Apple Account's private CloudKit database for Core Data records and selected settings. The developer cannot access it. Binary photo, audio, and file attachments are not automatically synchronized with Core Data."]
        },
        {
          title: "Membership, subscriptions, and restore purchases",
          paragraphs: [
            "Core classroom management is free. Import, export, the local-network computer editor, and grade analytics are available through monthly, yearly, or lifetime membership. This release has no free trial.",
            "Manage or cancel monthly and yearly subscriptions from Manage Subscriptions in the app or your Apple Account settings. Buying lifetime membership does not automatically cancel or refund an existing subscription. Use Restore Purchases if a completed purchase is not recognized.",
            "Apple handles billing, cancellation, and refund requests. The developer cannot change your Apple bill or Apple ID."
          ]
        },
        {
          title: "Privacy and contact",
          paragraphs: ["Support will not ask for your password, Apple ID credentials, or full payment information. For support or deletion of a support email held in the developer mailbox, contact fxcpxs@163.com."]
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      updatedAt: "2026-09-09",
      sections: [
        {
          title: "Terms of Use (Apple Standard EULA)",
          paragraphs: [
            "Banzhuren Secretary uses Apple’s Standard End User License Agreement (EULA). Follow the link below to read the full Terms of Use.",
            "The remaining sections supplement the Standard EULA with information about class data, membership subscriptions, and support services. They do not replace it; the Standard EULA governs the app license."
          ],
          links: [{
            label: "Read Apple’s Standard Terms of Use (EULA)",
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          }]
        },
        {
          title: "Class data and your responsibilities",
          paragraphs: [
            "You are responsible for ensuring that student and guardian information you enter, import, export, or share is handled under applicable law, school policy, and required authorization. Protect your devices, exports, recordings, and local-network pairing codes.",
            "The app assists with classroom records. It does not replace professional judgment, an official school system, legal or medical advice, or safety procedures."
          ]
        },
        {
          title: "Free features, membership, and purchases",
          paragraphs: [
            "The app is free to download, and core mobile classroom-management features are free. Data import, data export, the local-network computer editor, and grade analytics are member features. This release does not include a free trial.",
            "Monthly and yearly memberships are auto-renewable subscriptions. Payment is charged to your Apple Account at confirmation. Unless cancelled at least 24 hours before the end of the current period, the subscription renews automatically and Apple charges the next period within 24 hours before the current period ends. The Apple purchase sheet shows the applicable price.",
            "Lifetime membership is a one-time non-consumable purchase and does not renew. Buying lifetime membership does not automatically cancel or refund an active subscription; you must manage that subscription separately through Apple."
          ]
        },
        {
          title: "Local network, email, and system services",
          paragraphs: [
            "The current computer editor uses unencrypted HTTP and does not automatically stop in the background. Use it only on a trusted network and protect the pairing code.",
            "Feedback only creates a system email draft; the developer receives it only after you send it successfully. StoreKit, Apple ID, iCloud, speech recognition, notifications, camera, location, system mail, and network data providers are subject to their own terms and availability."
          ]
        },
        {
          title: "Backup, risk, and disclaimer",
          paragraphs: [
            "The private iCloud database does not automatically synchronize binary photo, audio, or file attachments. Review import, export, grade analytics, reminders, and backup results, and keep any necessary independent copy.",
            "To the extent permitted by law, the app is provided as is and uninterrupted operation on every device, network, or third-party service is not guaranteed."
          ]
        },
        {
          title: "Changes and contact",
          paragraphs: ["We may update these terms and policies as features or laws change. Contact fxcpxs@163.com with questions."]
        }
      ]
    }
  },
  ja: {
    privacy: {
      title: "プライバシーポリシー",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "運営者と適用範囲",
          paragraphs: [
            "班主任小秘书（Banzhuren Secretary）は付書藝が開発・運営しています。本ポリシーは、iPhone、iPad、その他の対応する Apple デバイスで本アプリを利用する場合に適用されます。",
            "本アプリは担任教師および教育者向けです。生徒や保護者の情報を記録する場合は、法的根拠、必要な許可、適切な安全対策がある場合に限ってください。"
          ]
        },
        {
          title: "処理する情報",
          paragraphs: [
            "学級管理機能を提供するため、あなたが作成、読み込み、またはローカルネットワーク経由で編集した学級、生徒、科目、試験、成績、行動、欠席、タスク、業務記録、添付ファイルを処理します。",
            "該当機能を選んだ場合に限り、選択した写真やファイル、録音と音声認識テキスト、カメラ撮影内容、業務記録の座標とシステムの逆ジオコーディングによる場所名を処理します。"
          ]
        },
        {
          title: "端末内保存、iCloud、削除、管理",
          paragraphs: [
            "データは初期状態で端末の Core Data とアプリサポート領域に保存されます。開発者は学級データを開発者運営サーバーへアップロードしません。",
            "任意の iCloud バックアップを有効にすると、Core Data の業務記録と選択したアプリ設定が Apple Account の CloudKit プライベートデータベースで同期されます。開発者はアクセスできません。写真、録音、ファイル添付のバイナリは Core Data と一緒に自動同期されません。",
            "アプリ内で記録を削除するか、アプリを削除して端末内データを消去できます。書き出した表計算ファイル、画像、音声、写真ライブラリや PC に保存したコピーは、それぞれの保存先で管理してください。"
          ]
        },
        {
          title: "無料機能、会員、購入情報",
          paragraphs: [
            "モバイルの基本的な学級管理は無料です。データのインポート、エクスポート、LAN 内の PC 編集、成績分析は、月額・年額の自動更新サブスクリプションまたは買い切りの永続会員で利用できます。本バージョンに無料トライアルや初回特典はありません。",
            "Apple StoreKit が商品照会、購入、更新、取引検証、購入の復元、サブスクリプション管理を処理します。アプリは端末上で Apple が検証した商品 ID、権利、有効期限、取消状態を読み取り、会員権限を判断します。",
            "支払い、更新、返金、Apple ID 認証情報は Apple が処理します。開発者は Apple ID のパスワードや完全な支払い情報を取得しません。永続会員の購入は、有効な月額・年額プランを自動的に解約または返金しません。"
          ]
        },
        {
          title: "ご意見とサポートメール",
          paragraphs: [
            "「ご意見」機能はシステムメールの下書きだけを端末内で作成します。確認、編集、取消、保存ができ、下書きの保存だけでは開発者へ送信されません。",
            "あなたが明示的に送信し、配信に成功した後に限り、開発者の受信箱は送信元アドレス、件名、本文、任意の WeChat ID を受け取ります。不要な生徒・保護者・学級の個人情報は送信前に削除してください。",
            "アプリがご意見を自動送信したり、オンライン履歴を保存したり、返信を定期取得したりすることはありません。"
          ]
        },
        {
          title: "権限、ローカルネットワーク、外部サービス",
          paragraphs: [
            "マイク、音声認識、カメラ、選択した写真、位置情報、通知、ローカルネットワーク、StoreKit、iCloud、システムメールは、関連機能を選び必要な権限を与えた場合に限って使用します。",
            "PC 編集機能は端末が一時的に提供し、ペアリングコードとセッション資格情報で保護します。バックグラウンド移行時に自動停止せず、利用者が停止するか、アプリまたはシステムが待受を終了するまで続きます。現在は暗号化されていない HTTP を使うため、信頼できるネットワークだけで利用してください。",
            "ペット Tips は同梱の SecretaryTips.json のみを読み、リモート Tips を取得しません。休日情報は timor.tech を使用し、失敗時は raw.githubusercontent.com に切り替わることがあります。送信内容は対象年と標準的なネットワーク情報で、学級や生徒データは含みません。",
            "広告や第三者分析はなく、他社のアプリやウェブサイトをまたいだ追跡は行いません。"
          ]
        },
        {
          title: "保存期間と連絡先",
          paragraphs: [
            "端末内データは、該当記録を削除、データを消去、またはアプリを削除するまで保存されます。iCloud のプライベートデータは Apple Account 設定と Apple の規則に従います。",
            "プライバシーに関する質問、または開発者の受信箱に残るサポートメールの削除依頼は fxcpxs@163.com へご連絡ください。あなた側の下書き、送信済みコピー、メール事業者のバックアップは削除できません。"
          ]
        }
      ]
    },
    support: {
      title: "ユーザーサポート",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "サポート",
          paragraphs: ["機能、入出力、iCloud、LAN 内 PC 編集、通知、音声機能、会員、購入の復元については fxcpxs@163.com へご連絡ください。アプリ内の「ご意見」はシステムメールの下書きだけを作成します。"]
        },
        {
          title: "お問い合わせに含める内容",
          paragraphs: [
            "アプリのバージョン、機種、iOS バージョン、問題の機能、再現手順をお知らせください。画面写真やサンプルファイルから、生徒名、番号、連絡先など不要な個人情報を隠してください。",
            "必要性と適切な許可がない限り、学級データベース全体、元の録音、生徒写真を送信しないでください。"
          ]
        },
        {
          title: "iCloud と添付ファイル",
          paragraphs: ["任意の iCloud バックアップは Apple Account の CloudKit プライベートデータベースを使います。開発者はアクセスできません。写真、録音、ファイル添付は Core Data と一緒に自動同期されません。"]
        },
        {
          title: "会員、サブスクリプション、購入の復元",
          paragraphs: [
            "基本的な学級管理は無料です。入出力、LAN 内 PC 編集、成績分析は月額、年額、永続会員で利用できます。無料トライアルはありません。",
            "月額・年額プランはアプリの「サブスクリプションを管理」または Apple Account 設定で管理・解約できます。永続会員を購入しても既存プランは自動解約・返金されません。購入が反映されない場合は「購入を復元」をお試しください。",
            "請求、解約、返金は Apple が処理し、開発者は Apple の請求や Apple ID を変更できません。"
          ]
        },
        {
          title: "プライバシーと連絡先",
          paragraphs: ["サポートがパスワード、Apple ID の認証情報、完全な支払い情報を求めることはありません。一般サポートや開発者受信箱のメール削除依頼は fxcpxs@163.com へご連絡ください。"]
        }
      ]
    },
    terms: {
      title: "利用規約",
      updatedAt: "2026-09-09",
      sections: [
        {
          title: "利用規約（Apple 標準 EULA）",
          paragraphs: [
            "本アプリには Apple 標準エンドユーザ使用許諾契約（EULA）が適用されます。利用規約の全文は下記のリンクからご確認ください。",
            "本ページのその他の項目は、学級データ、会員サブスクリプション、サポートサービスに関する補足説明であり、Apple 標準 EULA に代わるものではありません。アプリの使用許諾については標準 EULA が適用されます。"
          ],
          links: [{
            label: "Apple 標準利用規約（EULA）を読む",
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          }]
        },
        {
          title: "学級データと利用者の責任",
          paragraphs: [
            "生徒・保護者情報の入力、読み込み、書き出し、共有について、適用法、学校規定、必要な許可を確認し、端末、書き出しファイル、録音、ペアリングコードを保護してください。",
            "本アプリは学級記録を補助するもので、教師の専門的判断、正式な校務システム、法務・医療助言、安全手順に代わるものではありません。"
          ]
        },
        {
          title: "無料機能、会員、購入",
          paragraphs: [
            "本アプリは無料でダウンロードでき、モバイルの基本的な学級管理は無料です。入出力、LAN 内 PC 編集、成績分析は会員機能です。無料トライアルはありません。",
            "月額・年額会員は自動更新サブスクリプションです。購入確認時に Apple Account へ請求されます。現在の期間終了の24時間以上前に解約しない限り自動更新され、Apple は終了前24時間以内に次期間分を請求します。価格は Apple の購入画面で確認してください。",
            "永続会員は買い切りの非消耗型購入で自動更新されません。永続会員を購入しても有効なサブスクリプションは自動解約・返金されないため、Apple で別途管理してください。"
          ]
        },
        {
          title: "ローカルネットワーク、メール、システムサービス",
          paragraphs: [
            "現行の PC 編集は暗号化されていない HTTP を使用し、バックグラウンドでも自動停止しません。信頼できるネットワークのみで利用し、ペアリングコードを保護してください。",
            "ご意見はシステムメールの下書きだけを作り、送信に成功した場合のみ開発者へ届きます。StoreKit、Apple ID、iCloud、音声認識、通知、カメラ、位置情報、メール、外部データは各サービスの規約と可用性に従います。"
          ]
        },
        {
          title: "バックアップ、リスク、免責",
          paragraphs: [
            "iCloud のプライベートデータベースは写真、録音、ファイル添付を自動同期しません。入出力、成績分析、通知、バックアップの結果を確認し、必要なコピーを保管してください。",
            "適用法で認められる範囲で本アプリは現状有姿で提供され、すべての端末、ネットワーク、第三者サービスでの無停止動作を保証しません。"
          ]
        },
        {
          title: "変更と連絡先",
          paragraphs: ["機能や法令の変更に応じて規約とポリシーを更新することがあります。お問い合わせは fxcpxs@163.com までお願いします。"]
        }
      ]
    }
  },
  ko: {
    privacy: {
      title: "개인정보 처리방침",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "운영자와 적용 범위",
          paragraphs: [
            "Banzhuren Secretary는 Shuyi Fu가 개발하고 운영합니다. 본 방침은 iPhone, iPad 또는 기타 지원되는 Apple 기기에서 앱을 사용할 때 적용됩니다.",
            "이 앱은 담임 교사와 교육자를 위한 도구입니다. 학생 및 보호자 정보는 적법한 근거, 필요한 권한, 적절한 보호 조치가 있는 경우에만 입력해 주세요."
          ]
        },
        {
          title: "처리하는 정보",
          paragraphs: [
            "학급 관리 기능을 제공하기 위해 사용자가 만들거나 가져오거나 로컬 네트워크에서 편집한 학급, 학생, 과목, 시험, 성적, 행동, 결석, 할 일, 업무 로그 및 첨부 콘텐츠를 처리합니다.",
            "관련 기능을 선택한 경우에만 선택한 사진이나 파일, 녹음 및 음성 인식 텍스트, 카메라 촬영물, 업무 기록의 좌표와 시스템 역지오코딩으로 생성된 장소 문구를 처리합니다."
          ]
        },
        {
          title: "기기 저장, iCloud, 삭제 및 관리",
          paragraphs: [
            "데이터는 기본적으로 기기의 Core Data와 앱 지원 폴더에 저장됩니다. 개발자는 학급 기록을 개발자 운영 서버로 업로드하지 않습니다.",
            "선택형 iCloud 백업을 활성화하면 Core Data 업무 기록과 선택한 앱 설정이 Apple Account의 CloudKit 비공개 데이터베이스를 통해 동기화됩니다. 개발자는 접근할 수 없습니다. 사진, 녹음 및 파일 첨부의 바이너리 내용은 Core Data와 함께 자동 동기화되지 않습니다.",
            "앱에서 기록을 삭제하거나 앱을 제거해 로컬 데이터를 지울 수 있습니다. 내보낸 스프레드시트, 이미지, 오디오, 사진 보관함 항목 및 PC 사본은 각각의 저장 위치에서 관리해야 합니다."
          ]
        },
        {
          title: "무료 기능, 회원 및 구매 정보",
          paragraphs: [
            "모바일 기본 학급 관리는 무료입니다. 데이터 가져오기, 내보내기, 로컬 네트워크 PC 편집, 성적 분석은 월간 또는 연간 자동 갱신 구독이나 일회성 평생 회원으로 이용할 수 있습니다. 이 버전에는 무료 체험이나 첫 구매 혜택이 없습니다.",
            "Apple StoreKit은 상품 조회, 구매, 갱신, 거래 검증, 구매 복원 및 구독 관리를 처리합니다. 앱은 기기에서 Apple이 검증한 상품 ID, 권한, 구독 만료일 및 철회 상태를 읽어 회원 권한을 결정합니다.",
            "결제, 갱신, 환불 및 Apple ID 자격 증명은 Apple이 처리합니다. 개발자는 Apple ID 비밀번호나 전체 결제 정보를 받지 않습니다. 평생 회원 구매는 유효한 월간 또는 연간 구독을 자동으로 취소하거나 환불하지 않습니다."
          ]
        },
        {
          title: "의견 및 지원 이메일",
          paragraphs: [
            "의견 보내기 기능은 기기에서 시스템 이메일 초안만 만듭니다. 내용을 검토, 수정, 취소 또는 저장할 수 있으며, 초안을 저장하는 것만으로 개발자에게 전송되지 않습니다.",
            "사용자가 명시적으로 이메일을 보내고 전송에 성공한 뒤에만 개발자 사서함에서 발신 주소, 제목, 본문 및 선택 입력한 WeChat ID를 받을 수 있습니다. 지원에 필요하지 않은 학생, 보호자 또는 학급 개인정보는 전송 전에 삭제해 주세요.",
            "앱은 의견을 자동 업로드하거나 온라인 의견 기록을 저장하거나 답변을 주기적으로 확인하지 않습니다."
          ]
        },
        {
          title: "권한, 로컬 네트워크 및 외부 서비스",
          paragraphs: [
            "마이크, 음성 인식, 카메라, 선택한 사진, 위치, 알림, 로컬 네트워크, StoreKit, iCloud 및 시스템 이메일은 관련 기능을 선택하고 필요한 권한을 허용한 경우에만 사용됩니다.",
            "PC 편집 기능은 기기에서 임시로 제공되며 페어링 코드와 세션 자격 증명으로 보호됩니다. 앱이 백그라운드로 이동해도 자동 중지되지 않으며 사용자가 중지하거나 앱 또는 시스템이 수신을 끝낼 때까지 계속됩니다. 현재 암호화되지 않은 HTTP를 사용하므로 신뢰할 수 있는 네트워크에서만 이용하세요.",
            "반려동물 Tips는 앱에 포함된 SecretaryTips.json만 읽고 원격 Tips를 요청하지 않습니다. 공휴일 데이터는 timor.tech를 사용하며 실패 시 raw.githubusercontent.com으로 대체될 수 있습니다. 요청에는 조회 연도와 표준 네트워크 정보만 포함되며 학급이나 학생 기록은 포함되지 않습니다.",
            "앱에는 광고나 제3자 분석이 없으며 다른 앱이나 웹사이트를 가로지르는 추적을 하지 않습니다."
          ]
        },
        {
          title: "보관 기간 및 문의",
          paragraphs: [
            "로컬 콘텐츠는 관련 기록을 삭제하거나 데이터를 지우거나 앱을 제거할 때까지 보관됩니다. iCloud 비공개 데이터는 Apple Account 설정과 Apple 규칙에 따라 관리됩니다.",
            "개인정보 문의 또는 개발자 사서함에 남아 있는 지원 이메일 삭제 요청은 fxcpxs@163.com으로 보내 주세요. 사용자 측 초안, 보낸 편지 사본 또는 이메일 제공업체 백업은 이 요청으로 삭제되지 않습니다."
          ]
        }
      ]
    },
    support: {
      title: "사용자 지원",
      updatedAt: "2026-08-30",
      sections: [
        {
          title: "도움받기",
          paragraphs: ["기능, 가져오기와 내보내기, iCloud, 로컬 네트워크 PC 편집, 알림, 음성 기능, 회원 및 구매 복원 지원은 fxcpxs@163.com으로 문의해 주세요. 앱 내 의견 보내기는 시스템 이메일 초안만 만듭니다."]
        },
        {
          title: "문제 보고에 포함할 내용",
          paragraphs: [
            "앱 버전, 기기 모델, iOS 버전, 문제가 발생한 기능 및 재현 단계를 알려 주세요. 화면 캡처나 예시 파일에서 학생 이름, 번호, 연락처 및 불필요한 개인정보를 가려 주세요.",
            "꼭 필요하고 적절한 권한이 있는 경우가 아니라면 전체 학급 데이터베이스, 원본 녹음 또는 학생 사진을 보내지 마세요."
          ]
        },
        {
          title: "iCloud 및 첨부 파일",
          paragraphs: ["선택형 iCloud 백업은 Apple Account의 CloudKit 비공개 데이터베이스를 사용합니다. 개발자는 접근할 수 없습니다. 사진, 녹음 및 파일 첨부는 Core Data와 함께 자동 동기화되지 않습니다."]
        },
        {
          title: "회원, 구독 및 구매 복원",
          paragraphs: [
            "기본 학급 관리는 무료입니다. 가져오기, 내보내기, 로컬 네트워크 PC 편집 및 성적 분석은 월간, 연간 또는 평생 회원으로 이용할 수 있습니다. 무료 체험은 없습니다.",
            "월간 및 연간 구독은 앱의 구독 관리 또는 Apple Account 설정에서 관리하거나 취소할 수 있습니다. 평생 회원을 구매해도 기존 구독은 자동 취소 또는 환불되지 않습니다. 구매가 반영되지 않으면 구매 복원을 이용하세요.",
            "청구, 취소 및 환불은 Apple이 처리하며 개발자는 Apple 청구나 Apple ID를 변경할 수 없습니다."
          ]
        },
        {
          title: "개인정보 및 문의",
          paragraphs: ["지원팀은 비밀번호, Apple ID 자격 증명 또는 전체 결제 정보를 요구하지 않습니다. 일반 지원 또는 개발자 사서함의 지원 이메일 삭제는 fxcpxs@163.com으로 문의해 주세요."]
        }
      ]
    },
    terms: {
      title: "서비스 약관",
      updatedAt: "2026-09-09",
      sections: [
        {
          title: "이용 약관 (Apple 표준 EULA)",
          paragraphs: [
            "본 앱에는 Apple 표준 최종 사용자 사용권 계약(EULA)이 적용됩니다. 아래 링크에서 전체 이용 약관을 확인할 수 있습니다.",
            "이 페이지의 나머지 내용은 학급 데이터, 멤버십 구독 및 지원 서비스에 관한 보충 설명이며 Apple 표준 EULA를 대체하지 않습니다. 앱 사용권에는 표준 EULA가 적용됩니다."
          ],
          links: [{
            label: "Apple 표준 이용 약관(EULA) 보기",
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          }]
        },
        {
          title: "학급 데이터 및 사용자 책임",
          paragraphs: [
            "학생 및 보호자 정보를 입력, 가져오기, 내보내기 또는 공유할 때 관련 법률, 학교 규정 및 필요한 권한을 확인하고 기기, 내보낸 파일, 녹음 및 페어링 코드를 보호해야 합니다.",
            "앱은 학급 기록을 보조하며 교사의 전문적 판단, 공식 학교 시스템, 법률·의료 조언 또는 안전 절차를 대체하지 않습니다."
          ]
        },
        {
          title: "무료 기능, 회원 및 구매",
          paragraphs: [
            "앱은 무료로 다운로드할 수 있고 모바일 기본 학급 관리는 무료입니다. 가져오기, 내보내기, 로컬 네트워크 PC 편집 및 성적 분석은 회원 기능입니다. 무료 체험은 없습니다.",
            "월간 및 연간 회원은 자동 갱신 구독입니다. 구매 확인 시 Apple Account로 청구됩니다. 현재 기간이 끝나기 최소 24시간 전에 취소하지 않으면 자동 갱신되며 Apple은 종료 전 24시간 이내에 다음 기간 요금을 청구합니다. 가격은 Apple 구매 화면에서 확인하세요.",
            "평생 회원은 일회성 비소모성 구매이며 자동 갱신되지 않습니다. 평생 회원을 구매해도 유효한 구독은 자동 취소 또는 환불되지 않으므로 Apple에서 별도로 관리해야 합니다."
          ]
        },
        {
          title: "로컬 네트워크, 이메일 및 시스템 서비스",
          paragraphs: [
            "현재 PC 편집 기능은 암호화되지 않은 HTTP를 사용하며 백그라운드에서도 자동 중지되지 않습니다. 신뢰할 수 있는 네트워크에서만 이용하고 페어링 코드를 보호하세요.",
            "의견 보내기는 시스템 이메일 초안만 만들며 사용자가 성공적으로 전송한 경우에만 개발자에게 전달됩니다. StoreKit, Apple ID, iCloud, 음성 인식, 알림, 카메라, 위치, 이메일 및 외부 데이터는 각 서비스의 약관과 가용성에 따릅니다."
          ]
        },
        {
          title: "백업, 위험 및 면책",
          paragraphs: [
            "iCloud 비공개 데이터베이스는 사진, 녹음 및 파일 첨부를 자동 동기화하지 않습니다. 가져오기, 내보내기, 성적 분석, 알림 및 백업 결과를 확인하고 필요한 별도 사본을 보관하세요.",
            "관련 법률이 허용하는 범위에서 앱은 현재 상태로 제공되며 모든 기기, 네트워크 또는 제3자 서비스에서 중단 없이 동작함을 보장하지 않습니다."
          ]
        },
        {
          title: "변경 및 문의",
          paragraphs: ["기능이나 법률 변경에 따라 약관과 정책을 업데이트할 수 있습니다. 문의는 fxcpxs@163.com으로 보내 주세요."]
        }
      ]
    }
  }
};
