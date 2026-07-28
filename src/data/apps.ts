import type { AppRecord, Locale, Storefront, StorefrontListing } from "../lib/types";

export const publicContactEmail = "fxcpxs@163.com";

const countryCodes: Record<Storefront, string> = {
  CN: "cn",
  HK: "hk",
  TW: "tw",
  CA: "ca",
  US: "us",
  JP: "jp",
  KR: "kr"
};

function appStoreURL(storefront: Storefront, id: string): string {
  return `https://apps.apple.com/${countryCodes[storefront]}/app/id${id}`;
}

function liveListing(storefront: Storefront, id: string, currentName: string): StorefrontListing {
  return { storefront, state: "live", currentName, url: appStoreURL(storefront, id) };
}

function plannedListing(
  storefront: Storefront,
  id: string,
  nextReleaseName: string,
  currentName?: string
): StorefrontListing {
  return { storefront, state: "planned", currentName, nextReleaseName, url: appStoreURL(storefront, id) };
}

function copy(values: Record<Locale, AppRecord["copy"][Locale]>): AppRecord["copy"] {
  return values;
}

const perfectlist: AppRecord = {
  slug: "perfectlist",
  appStoreId: "6759079848",
  contactEmail: publicContactEmail,
  icon: "/assets/apps/perfectlist/web/icon.webp",
  screenshots: [
    "/assets/apps/perfectlist/web/screen-01.webp",
    "/assets/apps/perfectlist/web/screen-02.webp",
    "/assets/apps/perfectlist/web/screen-03.webp"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "任务、习惯与提醒",
      summary: "把待办、习惯、生日与工作日提醒安排进同一条清晰日程，知道现在该做什么，也看得见坚持过的每一天。",
      features: [
        { title: "今天先做什么", description: "用优先级、分类和时间整理任务，把零散事项收成一份可执行的今日清单。" },
        { title: "让习惯自然延续", description: "按每日、每周、每月或每年建立习惯，在完成记录里回看持续积累的节奏。" },
        { title: "记住重要的日子", description: "把生日、重复安排和工作日闹钟放进提醒体系；生日管理也覆盖农历日期。" },
        { title: "给专注留一段时间", description: "在任务之间启动番茄钟，用短而明确的专注时段推进真正重要的事。" },
        { title: "跟随你的日常设备", description: "在 iPhone、iPad、Mac、Apple Watch 与小组件中快速查看计划，并可按设备设置使用 iCloud 同步。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "任務、習慣與提醒",
      summary: "把待辦、習慣、生日與工作日提醒安排進同一條清晰日程，知道現在該做什麼，也看得見每天的累積。",
      features: [
        { title: "今天先做什麼", description: "用優先順序、分類和時間整理任務，把零散事項收成一份可執行的今日清單。" },
        { title: "讓習慣自然延續", description: "依每日、每週、每月或每年建立習慣，從完成記錄回看持續累積的節奏。" },
        { title: "記住重要日子", description: "把生日、重複安排和工作日鬧鐘放進提醒系統；生日管理也支援農曆日期。" },
        { title: "留一段專注時間", description: "在任務之間啟動番茄鐘，用短而明確的專注時段推進真正重要的事。" },
        { title: "跟著日常裝置使用", description: "在 iPhone、iPad、Mac、Apple Watch 與小工具中快速查看計畫，並可依裝置設定使用 iCloud 同步。" }
      ]
    },
    en: {
      eyebrow: "Tasks, habits, and reminders",
      summary: "Bring tasks, habits, birthdays, and weekday reminders into one clear rhythm, so you know what is next and can see what you have kept up with.",
      features: [
        { title: "A practical view of today", description: "Use priorities, categories, and times to turn loose thoughts into a list that is ready to act on." },
        { title: "Habits that fit real life", description: "Set up daily, weekly, monthly, or yearly routines and revisit the record of your steady progress." },
        { title: "Dates worth remembering", description: "Keep birthdays, repeating plans, and weekday alarms together, including support for lunar-calendar birthdays." },
        { title: "Make room to focus", description: "Start a Pomodoro session between tasks and give an important piece of work a defined stretch of attention." },
        { title: "Close on the devices you use", description: "Check plans from iPhone, iPad, Mac, Apple Watch, and widgets, with iCloud synchronization available through your device settings." }
      ]
    },
    ja: {
      eyebrow: "タスク、習慣、リマインダー",
      summary: "やること、習慣、誕生日、平日の通知を一つの見やすい流れにまとめ、次にすることと続けてきたことの両方を確認できます。",
      features: [
        { title: "今日を行動できる形に", description: "優先度、カテゴリ、時刻でタスクを整理し、散らばった用事を実行しやすい今日のリストにまとめます。" },
        { title: "続けやすい習慣づくり", description: "毎日、毎週、毎月、毎年の習慣を設定し、積み重ねた記録を振り返れます。" },
        { title: "大切な日を忘れない", description: "誕生日、繰り返し予定、平日のアラームをまとめて管理。誕生日は旧暦の日付にも対応します。" },
        { title: "集中のための時間", description: "タスクの合間にポモドーロタイマーを始め、重要なことに短く明確な集中時間を作れます。" },
        { title: "いつもの Apple デバイスで", description: "iPhone、iPad、Mac、Apple Watch、ウィジェットで予定をすばやく確認し、端末設定に応じて iCloud 同期も利用できます。" }
      ]
    },
    ko: {
      eyebrow: "할 일, 습관, 알림",
      summary: "할 일, 습관, 생일, 평일 알림을 하나의 분명한 흐름으로 정리해 다음 할 일과 꾸준히 이어 온 기록을 함께 확인하세요.",
      features: [
        { title: "오늘을 실행 가능한 목록으로", description: "우선순위, 카테고리, 시간으로 할 일을 정리하여 흩어진 생각을 바로 실행할 수 있는 오늘의 목록으로 만듭니다." },
        { title: "일상에 맞는 습관", description: "매일, 매주, 매월, 매년 반복할 습관을 만들고 꾸준히 쌓인 기록을 돌아봅니다." },
        { title: "기억하고 싶은 날짜", description: "생일, 반복 일정, 평일 알람을 한곳에서 관리하며 음력 생일도 지원합니다." },
        { title: "집중할 시간을 남기기", description: "할 일 사이에서 포모도로 타이머를 시작해 중요한 일에 명확한 집중 시간을 만듭니다." },
        { title: "자주 쓰는 기기에서", description: "iPhone, iPad, Mac, Apple Watch, 위젯에서 계획을 빠르게 확인하고 기기 설정에 따라 iCloud 동기화를 이용합니다." }
      ]
    }
  }),
  listings: {
    CN: liveListing("CN", "6759079848", "番茄钟Todo|生日管理器(支持农历)|工作日闹钟"),
    HK: liveListing("HK", "6759079848", "番茄鐘Todo-農曆生日與工作日鬧鐘-任務清單"),
    US: liveListing("US", "6759079848", "PerfectList·To-Do"),
    JP: liveListing("JP", "6759079848", "やることリストと誕生日アラーム"),
    KR: liveListing("KR", "6759079848", "PerfectList-Birthday Alarm")
  }
};

const meowtalkDiary: AppRecord = {
  slug: "meowtalk-diary",
  appStoreId: "6761005924",
  contactEmail: publicContactEmail,
  icon: "/assets/apps/meowtalk-diary/web/icon.webp",
  screenshots: [
    "/assets/apps/meowtalk-diary/web/screen-01.webp",
    "/assets/apps/meowtalk-diary/web/screen-02.webp",
    "/assets/apps/meowtalk-diary/web/screen-03.webp"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "宠物日记与猫语参考",
      summary: "为宠物留下一本慢慢长大的生活档案：日记、照片、照护记录与小提醒都回到同一个温暖的家。",
      features: [
        { title: "把日常写成一册日记", description: "按宠物保存文字、心情和重要片段，让平凡的一天也能在以后被轻松找到。" },
        { title: "照片有自己的位置", description: "用相册收纳成长、玩耍与相伴的画面，把回忆和当天的记录放在一起。" },
        { title: "照护记录更连贯", description: "集中记录体重、就诊与用药等信息，帮助你回看照护过程；它不是医疗诊断工具。" },
        { title: "把琐事提前记住", description: "为日常事项设置提醒，并记录用品、账本和食谱，让照护安排不再散落在不同地方。" },
        { title: "留给猫咪的声音与纪念", description: "浏览离线猫叫示例和养猫参考内容，也可以为想念的伙伴保存专属的纪念页面。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "寵物日記與貓語參考",
      summary: "為寵物留下一本慢慢長大的生活檔案：日記、照片、照護記錄與小提醒都回到同一個溫暖的家。",
      features: [
        { title: "把日常寫成一本日記", description: "依寵物保存文字、心情和重要片段，讓平凡的一天也能在以後輕鬆找到。" },
        { title: "照片有自己的位置", description: "用相簿收納成長、玩耍與相伴的畫面，把回憶和當天的記錄放在一起。" },
        { title: "照護記錄更連貫", description: "集中記錄體重、就診與用藥等資訊，協助回看照護過程；它不是醫療診斷工具。" },
        { title: "把瑣事提前記住", description: "為日常事項設定提醒，並記錄用品、帳本和食譜，讓照護安排不再散落在不同地方。" },
        { title: "留給貓咪的聲音與紀念", description: "瀏覽離線貓叫示例和養貓參考內容，也能為想念的夥伴保存專屬紀念頁。" }
      ]
    },
    en: {
      eyebrow: "A diary for life with pets",
      summary: "Give a pet's life a place to grow: notes, photos, care records, and gentle reminders belong together in one warm diary.",
      features: [
        { title: "A diary for the everyday", description: "Save notes, feelings, and meaningful moments for each pet, so an ordinary day is still easy to find later." },
        { title: "A home for photos", description: "Keep growth, play, and companionship in albums, alongside the notes that give each image its context." },
        { title: "Care in context", description: "Bring together weight, visits, medication, and other care notes to help you review the journey. It is not a medical diagnostic tool." },
        { title: "Remember the small things", description: "Set reminders and keep supplies, household notes, and recipes close, so care plans do not disappear across separate apps." },
        { title: "Cat sounds and keepsakes", description: "Explore offline cat-sound examples and everyday cat-care references, and make a dedicated memorial space for a pet you miss." }
      ]
    },
    ja: {
      eyebrow: "ペットの日記と猫語のヒント",
      summary: "日記、写真、お世話の記録、小さなリマインダーを一つの温かな場所に。ペットとの暮らしがゆっくり育つ記録になります。",
      features: [
        { title: "毎日を日記に残す", description: "ペットごとに文章、気持ち、大切な瞬間を保存。何気ない一日も後からすぐに見つけられます。" },
        { title: "写真にも居場所を", description: "成長、遊び、一緒に過ごした場面をアルバムにまとめ、その日の記録と並べて残せます。" },
        { title: "お世話の流れを振り返る", description: "体重、通院、投薬などのメモをまとめて確認できます。医療診断を行うアプリではありません。" },
        { title: "小さな用事を忘れない", description: "日々の予定にリマインダーを設定し、用品、家計メモ、レシピも一緒に記録できます。" },
        { title: "猫の声と大切な記憶", description: "オフラインの猫の鳴き声例と日常ケアの情報を見られ、会いたいペットのための記念ページも残せます。" }
      ]
    },
    ko: {
      eyebrow: "반려동물 일기와 고양이 소리 참고",
      summary: "일기, 사진, 돌봄 기록, 작은 알림을 한곳에 모아 반려동물과 함께한 시간이 천천히 쌓이는 따뜻한 기록으로 남깁니다.",
      features: [
        { title: "평범한 하루를 일기로", description: "반려동물별로 글, 감정, 중요한 순간을 남겨 평범했던 하루도 나중에 쉽게 찾을 수 있습니다." },
        { title: "사진을 위한 자리", description: "성장, 놀이, 함께한 장면을 앨범에 모으고 그날의 기록과 나란히 보관합니다." },
        { title: "이어지는 돌봄 기록", description: "체중, 진료, 투약 등 돌봄 메모를 모아 과정을 돌아봅니다. 의료 진단 도구는 아닙니다." },
        { title: "작은 일을 미리 기억", description: "일상 알림을 설정하고 용품, 가계 기록, 레시피를 함께 정리해 돌봄 계획이 흩어지지 않게 합니다." },
        { title: "고양이 소리와 추억", description: "오프라인 고양이 소리 예시와 일상 돌봄 정보를 살펴보고 그리운 반려동물을 위한 추억 페이지를 남깁니다." }
      ]
    }
  }),
  listings: {
    CN: liveListing("CN", "6761005924", "喵语日记｜与猫对话，记录宠物的点滴"),
    HK: liveListing("HK", "6761005924", "喵語日記｜與貓對話，記錄寵物的點滴"),
    US: liveListing("US", "6761005924", "MeowTalk Diary | Cat Talk Log"),
    JP: liveListing("JP", "6761005924", "にゃん語日記｜猫と話して日々を記録"),
    KR: liveListing("KR", "6761005924", "냥어일기｜고양이와 대화, 반려일상 기록")
  }
};

const myBookmarks: AppRecord = {
  slug: "my-bookmarks",
  appStoreId: "6758990165",
  contactEmail: publicContactEmail,
  icon: "/assets/apps/my-bookmarks/web/icon.webp",
  screenshots: ["/assets/apps/my-bookmarks/web/screen-01.webp"],
  copy: copy({
    "zh-Hans": {
      eyebrow: "极简书签管理",
      summary: "把工作、学习和生活里的链接整理成真正会再打开的私人书签库，而不是又一个被遗忘的收藏夹。",
      features: [
        { title: "链接按你的方式归位", description: "创建自己的分类，给常用网站一个明确位置；需要时可拖拽调整分类和链接顺序。" },
        { title: "从收藏到再次使用", description: "点击就能打开链接，让资料、工具和灵感从静态收藏变成随手可用的入口。" },
        { title: "私密分类单独保护", description: "为需要额外保护的分类启用 Face ID 或 Touch ID，在设备生物识别验证后访问。" },
        { title: "一条或一组都能分享", description: "分享单个书签，也可分享整理好的分类；二维码和系统分享让链接传递更直接。" },
        { title: "带着书签迁移与整理", description: "支持批量选择和移动链接，并可导出或导入书签数据，便于备份与重新整理。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "極簡書籤管理",
      summary: "把工作、學習和生活裡的連結整理成真正會再打開的私人書籤庫，而不是另一個被遺忘的收藏夾。",
      features: [
        { title: "連結照你的方式歸位", description: "建立自己的分類，給常用網站明確位置；需要時可拖曳調整分類和連結順序。" },
        { title: "從收藏到再次使用", description: "點一下就能開啟連結，讓資料、工具和靈感從靜態收藏變成隨手可用的入口。" },
        { title: "私密分類分開保護", description: "為需要額外保護的分類啟用 Face ID 或 Touch ID，通過裝置生物辨識後再存取。" },
        { title: "一條或一組都能分享", description: "分享單一書籤，也可分享整理好的分類；QR Code 和系統分享讓連結傳遞更直接。" },
        { title: "帶著書籤遷移與整理", description: "支援批次選取和移動連結，並可匯出或匯入書籤資料，方便備份與重新整理。" }
      ]
    },
    en: {
      eyebrow: "A minimal bookmark library",
      summary: "Turn work, learning, and everyday links into a private library you will actually revisit, not another forgotten collection.",
      features: [
        { title: "Put links where they belong", description: "Create your own categories for the sites you return to, then drag categories and links into an order that makes sense to you." },
        { title: "From saved to useful again", description: "Open a link in a tap and turn saved references, tools, and ideas into a practical starting point for what you are doing." },
        { title: "A private space when needed", description: "Protect sensitive categories with Face ID or Touch ID, using your device's biometric authentication before they open." },
        { title: "Share one link or a collection", description: "Send an individual bookmark or a curated category with QR codes and the familiar system share sheet." },
        { title: "Move, back up, and reorganize", description: "Select and move links in batches, then export or import bookmark data when you want to back up or start fresh." }
      ]
    },
    ja: {
      eyebrow: "ミニマルなブックマーク管理",
      summary: "仕事、学び、日常のリンクを、忘れられたコレクションではなく本当にまた開く自分だけのライブラリに整理します。",
      features: [
        { title: "リンクを使いやすい場所へ", description: "よく使うサイトのために自分だけのカテゴリを作り、カテゴリとリンクをドラッグで好みの順番に並べられます。" },
        { title: "保存しただけで終わらせない", description: "タップでリンクを開き、資料、ツール、アイデアを今していることのための入口に変えられます。" },
        { title: "必要な場所だけを保護", description: "大切なカテゴリは Face ID または Touch ID で保護。端末の生体認証後に開けます。" },
        { title: "一つのリンクも一つの束も共有", description: "単体のブックマークも整理したカテゴリも、QR コードや共有シートで届けられます。" },
        { title: "移動、バックアップ、整理", description: "複数のリンクを選んで移動し、ブックマークデータの書き出しと読み込みでバックアップや再整理ができます。" }
      ]
    },
    ko: {
      eyebrow: "미니멀 북마크 관리",
      summary: "업무, 학습, 일상의 링크를 잊혀진 저장 목록이 아니라 실제로 다시 찾게 되는 개인 라이브러리로 정리하세요.",
      features: [
        { title: "링크를 제자리에", description: "자주 찾는 사이트를 위한 카테고리를 만들고 카테고리와 링크를 드래그해 나에게 맞는 순서로 정리합니다." },
        { title: "저장에서 다시 쓰기로", description: "한 번의 탭으로 링크를 열어 자료, 도구, 아이디어를 지금 하고 있는 일의 실용적인 출발점으로 바꿉니다." },
        { title: "필요한 공간만 비공개로", description: "민감한 카테고리는 Face ID 또는 Touch ID로 보호하고 기기의 생체 인증을 거친 뒤 열 수 있습니다." },
        { title: "링크 하나도, 모음도 공유", description: "개별 북마크나 정리한 카테고리를 QR 코드와 기본 공유 시트로 전달합니다." },
        { title: "이동, 백업, 다시 정리", description: "여러 링크를 선택해 이동하고 북마크 데이터를 내보내거나 가져와 백업과 재정리를 할 수 있습니다." }
      ]
    }
  }),
  listings: {
    CN: liveListing("CN", "6758990165", "我的书签 - 极简书签管理器 & 二维码分享"),
    HK: liveListing("HK", "6758990165", "我的书签 - 极简书签管理器 & 二维码分享"),
    US: liveListing("US", "6758990165", "我的书签 - 极简书签管理器 & 二维码分享"),
    JP: liveListing("JP", "6758990165", "我的书签 - 极简书签管理器 & 二维码分享"),
    KR: liveListing("KR", "6758990165", "我的书签 - 极简书签管理器 & 二维码分享")
  }
};

const jiajiaIdPhoto: AppRecord = {
  slug: "jiajia-id-photo",
  appStoreId: "6758612379",
  contactEmail: publicContactEmail,
  icon: "/assets/apps/jiajia-id-photo/web/icon.webp",
  screenshots: ["/assets/apps/jiajia-id-photo/web/screen-01.webp"],
  copy: copy({
    "zh-Hans": {
      eyebrow: "证件照制作辅助",
      summary: "从一张自拍或相册照片开始，整理尺寸、底色与导出格式，在手机上完成一张更接近使用要求的证件照。",
      features: [
        { title: "相机或相册，直接开始", description: "从相机拍摄或已有照片选图，再调整画面，让人物以更合适的构图进入制作流程。" },
        { title: "人物与背景分开处理", description: "进行人物分离并替换常用底色，先把照片整理成干净、易继续调整的证件照画布。" },
        { title: "规格不再只凭记忆", description: "按地区、用途或搜索选择模板，查看尺寸、像素、DPI 与文件要求等资料，辅助准备对应规格。" },
        { title: "调整有边界", description: "在模板允许的范围内进行亮度和轻量美化；对限制像素内容修改的规格，应用保留相应的制作边界。" },
        { title: "为打印和提交准备文件", description: "制作单张图或排版到常用相纸，并按模板导出 PNG 或 JPEG。最终是否接受仍以使用机构的审核为准。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "證件照製作輔助",
      summary: "從一張自拍或相簿照片開始，整理尺寸、底色與輸出格式，在手機上完成一張更接近使用要求的證件照。",
      features: [
        { title: "相機或相簿，直接開始", description: "從相機拍攝或既有照片選圖，再調整畫面，讓人物以更合適的構圖進入製作流程。" },
        { title: "人物與背景分開處理", description: "進行人物分離並替換常用底色，先把照片整理成乾淨、容易繼續調整的證件照畫布。" },
        { title: "規格不再只憑記憶", description: "依地區、用途或搜尋選擇範本，查看尺寸、像素、DPI 與檔案要求等資料，輔助準備對應規格。" },
        { title: "調整有邊界", description: "在範本允許的範圍內進行亮度和輕量美化；對限制像素內容修改的規格，App 保留相應製作邊界。" },
        { title: "為列印與提交準備檔案", description: "製作單張圖或排版到常用相紙，並依範本輸出 PNG 或 JPEG。最終是否接受仍以使用機構審核為準。" }
      ]
    },
    en: {
      eyebrow: "ID photo preparation tools",
      summary: "Start with a selfie or a library photo, then organize size, background, and export format to prepare an ID photo on your phone.",
      features: [
        { title: "Start from the camera or library", description: "Take a photo or choose an existing image, then adjust the framing before bringing the subject into the preparation flow." },
        { title: "Separate subject and background", description: "Isolate the subject and switch to common background colors, creating a clean canvas for the rest of the ID-photo workflow." },
        { title: "Requirements in one place", description: "Choose a template by region, purpose, or search, then review size, pixels, DPI, and file requirements while preparing the image." },
        { title: "Adjustments with guardrails", description: "Use brightness and light enhancement where a template permits them. Templates that restrict pixel-content edits keep those production boundaries." },
        { title: "Prepare files for print or upload", description: "Make a single image or a print layout, then export PNG or JPEG as a template requires. Final acceptance is always decided by the receiving authority." }
      ]
    },
    ja: {
      eyebrow: "証明写真作成サポート",
      summary: "自撮りや写真ライブラリの一枚から、サイズ、背景、出力形式を整え、スマートフォンで証明写真を準備できます。",
      features: [
        { title: "カメラでもライブラリでも開始", description: "撮影した写真または既存の写真を選び、人物が適切に収まるよう構図を整えてから作成を始めます。" },
        { title: "人物と背景を分けて準備", description: "人物を切り抜き、よく使う背景色に切り替えて、後の調整をしやすい証明写真用の画面を作ります。" },
        { title: "要件を一か所で確認", description: "地域、用途、検索からテンプレートを選び、サイズ、ピクセル、DPI、ファイル要件を確認しながら準備できます。" },
        { title: "調整にはガードレールを", description: "テンプレートが許可する場合に明るさや軽い補正を使用。ピクセル内容の変更を制限する規格では、その作成上の境界を保ちます。" },
        { title: "印刷・提出用のファイルへ", description: "単写真または印刷レイアウトを作り、テンプレートに合わせて PNG または JPEG を出力します。最終的な受理は提出先の判断によります。" }
      ]
    },
    ko: {
      eyebrow: "증명사진 준비 도구",
      summary: "셀피나 사진 보관함의 이미지에서 시작해 크기, 배경, 내보내기 형식을 정리하고 휴대폰에서 증명사진을 준비합니다.",
      features: [
        { title: "카메라나 사진 보관함에서 시작", description: "직접 촬영하거나 기존 사진을 고른 뒤 인물이 알맞게 들어오도록 구도를 조정해 준비 과정을 시작합니다." },
        { title: "인물과 배경을 나누어 준비", description: "인물을 분리하고 자주 쓰는 배경색으로 바꾸어 이후 조정에 적합한 깔끔한 증명사진 캔버스를 만듭니다." },
        { title: "요건을 한곳에서 확인", description: "지역, 용도, 검색으로 템플릿을 선택하고 이미지 준비 중 크기, 픽셀, DPI, 파일 요건을 확인합니다." },
        { title: "경계를 지키는 조정", description: "템플릿이 허용할 때 밝기와 가벼운 보정을 사용하며, 픽셀 내용 변경을 제한하는 규격에서는 그 제작 경계를 유지합니다." },
        { title: "인쇄 또는 제출용 파일 준비", description: "단일 사진이나 인쇄 레이아웃을 만들고 템플릿에 맞춰 PNG 또는 JPEG로 내보냅니다. 최종 수락 여부는 제출 기관이 결정합니다." }
      ]
    }
  }),
  listings: {
    CN: plannedListing("CN", "6758612379", "证照准拍", "佳佳证件照"),
    HK: plannedListing("HK", "6758612379", "證照好拍"),
    TW: plannedListing("TW", "6758612379", "證照好拍"),
    CA: plannedListing("CA", "6758612379", "MapleLens ID"),
    US: plannedListing("US", "6758612379", "US PassSnap")
  }
};

const partyGames: AppRecord = {
  slug: "party-games",
  appStoreId: "6759240304",
  contactEmail: publicContactEmail,
  icon: "/assets/apps/party-games/web/icon.webp",
  screenshots: [
    "/assets/apps/party-games/web/screen-01.webp",
    "/assets/apps/party-games/web/screen-02.webp",
    "/assets/apps/party-games/web/screen-03.webp"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "多人聚会小游戏",
      summary: "为面对面聚会准备的本地多人游戏合集：短规则、快开局，让陌生人与老朋友都能迅速加入。",
      features: [
        { title: "在同一空间快速集合", description: "让设备通过蓝牙或同一 Wi-Fi 进行本地连接，不依赖互联网就能邀请朋友进入一局。" },
        { title: "六种玩法轮流上场", description: "反应对决、点球大战、幸运转盘、翻扑克牌、摸高挑战和手指炸弹，按当下气氛选一款开始。" },
        { title: "用反应把气氛点燃", description: "在反应对决中等待信号、摇动手机抢先出手，把几秒钟的紧张感变成一阵笑声。" },
        { title: "给每个人一个上场理由", description: "点球的射手与守门员、转盘的随机选择、翻牌与倒计时的悬念，让轮次自然往下走。" },
        { title: "结果留得下，也传得开", description: "对局结束后可生成并分享结果画面；游戏数据只在参与设备之间进行本地传输。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "多人派對小遊戲",
      summary: "為面對面聚會準備的本機多人遊戲合集：短規則、快開局，讓陌生人與老朋友都能迅速加入。",
      features: [
        { title: "在同一空間快速集合", description: "讓裝置透過藍牙或同一 Wi-Fi 進行本機連線，不依賴網際網路就能邀請朋友進入一局。" },
        { title: "六種玩法輪流上場", description: "反應對決、點球大戰、幸運轉盤、翻撲克牌、摸高挑戰和手指炸彈，依當下氣氛選一款開始。" },
        { title: "用反應點燃氣氛", description: "在反應對決中等待訊號、搖動手機搶先出手，把幾秒鐘的緊張感變成一陣笑聲。" },
        { title: "給每個人上場理由", description: "點球的射手與守門員、轉盤的隨機選擇、翻牌與倒數的懸念，讓輪次自然往下走。" },
        { title: "結果留得下，也傳得開", description: "對局結束後可產生並分享結果畫面；遊戲資料只在參與裝置之間進行本機傳輸。" }
      ]
    },
    en: {
      eyebrow: "Local multiplayer party games",
      summary: "A local multiplayer collection made for people in the same room: short rules, quick starts, and an easy way for new and old friends to join in.",
      features: [
        { title: "Gather in the same room", description: "Connect devices through Bluetooth or the same Wi-Fi network and invite friends to a round without depending on the internet." },
        { title: "Six games for the moment", description: "Choose from reaction duels, penalty shootouts, a lucky wheel, card flips, high jump, and finger bomb as the mood changes." },
        { title: "Build the tension with reaction", description: "Wait for the cue in a reaction duel, shake first, and turn a few charged seconds into a roomful of laughter." },
        { title: "Give everyone a turn", description: "Shooters and keepers in penalties, a random wheel pick, cards, and countdown suspense keep each round moving naturally." },
        { title: "Keep the result, share the moment", description: "Generate and share a result image after a round. Game data is transferred locally only between participating devices." }
      ]
    },
    ja: {
      eyebrow: "ローカル対戦パーティーゲーム",
      summary: "同じ場所に集まった人のためのローカル対戦ゲーム集。短いルールとすばやい開始で、初対面でもいつもの友達でもすぐに参加できます。",
      features: [
        { title: "同じ空間ですぐ集合", description: "Bluetooth または同じ Wi-Fi で端末をローカル接続し、インターネットに頼らず友達をラウンドへ招待できます。" },
        { title: "その場に合わせて6つのゲーム", description: "反応対決、PK、ルーレット、カードめくり、ハイジャンプ、指爆弾から、雰囲気に合うものを選べます。" },
        { title: "反応で場を盛り上げる", description: "反応対決では合図を待って先に端末を振ります。数秒の緊張感が、みんなの笑いにつながります。" },
        { title: "全員に出番が回る", description: "PK のキッカーとキーパー、ルーレットのランダム選択、カードとカウントダウンの意外性で、ラウンドが自然に進みます。" },
        { title: "結果を残して共有", description: "ラウンド後に結果画像を作成して共有できます。ゲームデータは参加端末間でのみローカル送信されます。" }
      ]
    },
    ko: {
      eyebrow: "로컬 멀티플레이 파티 게임",
      summary: "같은 공간에 모인 사람들을 위한 로컬 멀티플레이 게임 모음입니다. 짧은 규칙과 빠른 시작으로 처음 만난 사람도 익숙한 친구도 쉽게 함께합니다.",
      features: [
        { title: "같은 공간에서 빠르게 모이기", description: "Bluetooth 또는 같은 Wi-Fi로 기기를 로컬 연결해 인터넷에 의존하지 않고 친구를 한 판에 초대합니다." },
        { title: "그 순간에 맞는 여섯 가지 게임", description: "반응 대결, 페널티 슛아웃, 럭키 휠, 카드 뒤집기, 높이뛰기, 손가락 폭탄 중 분위기에 맞는 게임을 고릅니다." },
        { title: "반응으로 분위기 올리기", description: "반응 대결에서 신호를 기다렸다가 먼저 휴대폰을 흔들어 몇 초의 긴장감을 모두의 웃음으로 바꿉니다." },
        { title: "모두에게 돌아가는 차례", description: "페널티의 슈터와 골키퍼, 룰렛의 무작위 선택, 카드와 카운트다운의 긴장감이 라운드를 자연스럽게 이어 줍니다." },
        { title: "결과를 남기고 순간을 공유", description: "라운드 뒤 결과 이미지를 만들고 공유할 수 있습니다. 게임 데이터는 참가 기기 사이에서만 로컬로 전송됩니다." }
      ]
    }
  }),
  listings: {
    CN: liveListing("CN", "6759240304", "派对游戏 — 多人聚会小游戏合集-PartyGames"),
    HK: liveListing("HK", "6759240304", "派对游戏 — 多人聚会小游戏合集-PartyGames"),
    US: liveListing("US", "6759240304", "派对游戏 — 多人聚会小游戏合集-PartyGames"),
    JP: liveListing("JP", "6759240304", "派对游戏 — 多人聚会小游戏合集-PartyGames"),
    KR: liveListing("KR", "6759240304", "派对游戏 — 多人聚会小游戏合集-PartyGames")
  }
};

export const apps = [perfectlist, meowtalkDiary, myBookmarks, jiajiaIdPhoto, partyGames] as const satisfies readonly AppRecord[];

export const appsBySlug = Object.fromEntries(apps.map((app) => [app.slug, app])) as Record<string, AppRecord>;
