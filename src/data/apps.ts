import type { AppRecord, Locale, LocalizedAppCopy, Storefront, StorefrontListing } from "../lib/types";

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

function plannedWithoutStorefront(storefront: Storefront, nextReleaseName: string): StorefrontListing {
  return { storefront, state: "planned", nextReleaseName };
}

function copy(values: Record<Locale, LocalizedAppCopy>): AppRecord["copy"] {
  return values;
}

const banzhuren: AppRecord = {
  slug: "banzhuren",
  supportedLocales: ["zh-Hans"],
  contactEmail: publicContactEmail,
  icon: "/assets/apps/banzhuren/web/icon.webp",
  screenshots: ["/assets/apps/banzhuren/web/screen-01.webp"],
  copy: {
    "zh-Hans": {
      eyebrow: "班主任的日常工作台",
      summary: "把班级档案、教学安排、学生表现、待办提醒和电脑端编辑收进一处，让每天的班级工作更容易查、更容易跟进。",
      features: [
        { title: "班级与学生资料放在一起", description: "建立多个班级和学年档案，集中维护学生基本资料、学号、家长联系方式、宿舍、职务、生日与特长等信息。" },
        { title: "教学安排与成绩分析更清楚", description: "记录课程表、考试和倒计时，导入成绩后查看科目表现、班级排名和阶段变化，让教学记录和班级日常连起来。" },
        { title: "操行、请假与班级事件可追溯", description: "围绕学生记录表现分、操行、请假、宿舍和支持计划，也能留下班级事件与工作日志，方便在需要时回看经过。" },
        { title: "待办、语音和提醒一起推进", description: "为班级工作建立待办，设置重复规则和提醒；需要快速记录时可使用语音待办与语音留痕，再回到列表继续处理。" },
        { title: "电脑端编辑与表格交换", description: "在同一局域网内用电脑编辑当前班级资料，并通过配对码保护访问；学生与成绩数据支持 CSV 或 Excel 导入导出，减少重复录入。" }
      ]
    }
  },
  listings: {
    CN: plannedWithoutStorefront("CN", "班主任小秘书")
  }
};

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
      eyebrow: "系统级闹钟、任务与习惯",
      summary: "让系统级闹钟理解节假日、工作日与排班节奏，再把农历生日、任务、习惯和日历收进同一份日程。",
      features: [
        { title: "系统级闹钟，懂你的排班", description: "在支持的 iOS 18+ 系统版本且获授权时使用 AlarmKit；闹钟支持每天、每周、每月、每年、工作日与节假日，还能适配单休、大小周和自定义周循环。" },
        { title: "农历生日，不再手算", description: "为农历或公历生日建立提醒，也能管理重复日期，让重要的人和日子提前出现在日程里。" },
        { title: "任务进入系统日历", description: "用优先级、分类和时间整理任务，并可把有日期的任务同步到系统日历，安排与待办保持一致。" },
        { title: "习惯与番茄钟一起推进", description: "按每日、每周、每月或每年建立习惯，在任务之间启动番茄钟，用清晰的专注时段完成计划。" },
        { title: "常用设备上随时查看", description: "在 iPhone、iPad、Mac、Apple Watch 与小组件中查看日程，并可按设备设置使用 iCloud 同步。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "系統級鬧鐘、任務與習慣",
      summary: "讓系統級鬧鐘理解節假日、工作日與排班節奏，再把農曆生日、任務、習慣和日曆收進同一份日程。",
      features: [
        { title: "系統級鬧鐘，懂你的排班", description: "在支援的 iOS 18+ 系統版本且獲得授權時使用 AlarmKit；鬧鐘支援每天、每週、每月、每年、工作日與節假日，也能配合單休、大小週和自訂週循環。" },
        { title: "農曆生日，不再手算", description: "為農曆或國曆生日建立提醒，也能管理重複日期，讓重要的人和日子提早出現在日程裡。" },
        { title: "任務進入系統日曆", description: "用優先順序、分類和時間整理任務，並可把有日期的任務同步到系統日曆，安排與待辦保持一致。" },
        { title: "習慣與番茄鐘一起推進", description: "依每日、每週、每月或每年建立習慣，在任務之間啟動番茄鐘，以清楚的專注時段完成計畫。" },
        { title: "常用裝置隨時查看", description: "在 iPhone、iPad、Mac、Apple Watch 與小工具中查看日程，並可依裝置設定使用 iCloud 同步。" }
      ]
    },
    en: {
      eyebrow: "System alarms, tasks, and habits",
      summary: "Let system-level alarms follow holidays, workdays, and your work rhythm, then keep lunar birthdays, tasks, habits, and calendar plans in one schedule.",
      features: [
        { title: "A system-level alarm for your schedule", description: "On supported, authorized iOS 18+ devices, use AlarmKit for daily, weekly, monthly, yearly, workday, and holiday alarms, including single-day weekends, alternating work weeks, and custom weekly cycles." },
        { title: "Lunar birthdays without mental math", description: "Create reminders for lunar or Gregorian birthdays and recurring dates, so important people and days appear before they are due." },
        { title: "Tasks that reach your calendar", description: "Organize tasks with priorities, categories, and times, then synchronize dated tasks with the system calendar to keep plans aligned." },
        { title: "Habits and Pomodoro in one flow", description: "Build daily, weekly, monthly, or yearly habits, then start a Pomodoro session between tasks for a defined period of focus." },
        { title: "Ready on your Apple devices", description: "Check the schedule from iPhone, iPad, Mac, Apple Watch, and widgets, with iCloud synchronization available through your device settings." }
      ]
    },
    ja: {
      eyebrow: "システムアラーム、タスク、習慣",
      summary: "祝日、平日、勤務サイクルに合わせたシステムレベルのアラームと、旧暦の誕生日、タスク、習慣、カレンダーを一つの予定にまとめます。",
      features: [
        { title: "勤務に合わせるシステムレベルのアラーム", description: "対応し、許可された iOS 18+ では AlarmKit を使用。毎日、毎週、毎月、毎年、平日、祝日のアラームに加え、週休1日、隔週勤務、カスタムの週サイクルにも対応します。" },
        { title: "旧暦の誕生日も迷わない", description: "旧暦または新暦の誕生日と繰り返し日を通知に設定し、大切な人と日を前もって予定に表示します。" },
        { title: "タスクをシステムカレンダーへ", description: "優先度、カテゴリ、時刻でタスクを整理し、日付のあるタスクをシステムカレンダーに同期して予定をそろえます。" },
        { title: "習慣とポモドーロを一つの流れに", description: "毎日、毎週、毎月、毎年の習慣を作り、タスクの合間にポモドーロを始めて集中時間を確保できます。" },
        { title: "いつもの Apple デバイスで", description: "iPhone、iPad、Mac、Apple Watch、ウィジェットで予定を確認し、端末設定に応じて iCloud 同期も利用できます。" }
      ]
    },
    ko: {
      eyebrow: "시스템 알람, 할 일, 습관",
      summary: "공휴일, 평일, 근무 리듬에 맞는 시스템 수준 알람과 음력 생일, 할 일, 습관, 캘린더 계획을 하나의 일정으로 관리하세요.",
      features: [
        { title: "근무 일정에 맞는 시스템 수준 알람", description: "지원되고 권한이 허용된 iOS 18+ 기기에서 AlarmKit을 사용합니다. 매일, 매주, 매월, 매년, 평일, 공휴일 알람과 주 1회 휴무, 격주 근무, 사용자 지정 주간 반복을 지원합니다." },
        { title: "음력 생일도 계산 없이", description: "음력 또는 양력 생일과 반복 날짜에 알림을 설정해 중요한 사람과 날짜를 미리 일정에서 확인합니다." },
        { title: "캘린더까지 이어지는 할 일", description: "우선순위, 카테고리, 시간으로 할 일을 정리하고 날짜가 있는 할 일을 시스템 캘린더와 동기화해 계획을 맞춥니다." },
        { title: "습관과 포모도로를 한 흐름으로", description: "매일, 매주, 매월, 매년 습관을 만들고 할 일 사이에서 포모도로를 시작해 분명한 집중 시간을 확보합니다." },
        { title: "익숙한 Apple 기기에서", description: "iPhone, iPad, Mac, Apple Watch, 위젯에서 일정을 확인하고 기기 설정에 따라 iCloud 동기화를 이용합니다." }
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

const appstoryline: AppRecord = {
  slug: "appstoryline",
  supportedLocales: ["zh-Hans", "zh-Hant", "en", "ja", "ko"],
  contactEmail: publicContactEmail,
  icon: "/assets/apps/appstoryline/web/icon.webp",
  screenshots: [
    "/assets/apps/appstoryline/web/screen-01.webp",
    "/assets/apps/appstoryline/web/screen-02.webp",
    "/assets/apps/appstoryline/web/screen-03.webp",
    "/assets/apps/appstoryline/web/screen-04.webp"
  ],
  pricing: {
    "zh-Hans": { value: "¥12", note: "一次性购买" },
    "zh-Hant": { value: "¥12", note: "一次性購買" },
    en: { value: "$3.99", note: "One-time purchase" },
    ja: { value: "$3.99", note: "一度きりの購入" },
    ko: { value: "$3.99", note: "일회성 구매" }
  },
  copy: copy({
    "zh-Hans": {
      eyebrow: "App Store 截图排版",
      summary: "在设备上把截图整理成更清楚的上架图片：选择模板、编辑文字和背景，保存项目并导出 PNG 或 ZIP。",
      features: [
        { title: "模板先把尺寸准备好", description: "从内置的 iPhone 和 iPad 模板开始，先确定画布与设备框架，再专注于截图内容。" },
        { title: "导入你自己的截图", description: "从文件或照片中选择截图，替换模板画面；应用只读取你主动选择的内容。" },
        { title: "文字、背景和版式都能改", description: "直接调整标题、字号、颜色、字效、背景和画布上的位置，让每一张图更接近你的产品。" },
        { title: "项目留在本地", description: "保存可继续编辑的本地项目，不需要账号、云同步或订阅，换一个版本也能重新导入。" },
        { title: "一次导出一张或一组", description: "导出当前 PNG，或把五张截图整理成 ZIP；提交 App Store 前可以在设备上再次检查。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "App Store 截圖排版",
      summary: "在裝置上把截圖整理成更清楚的上架圖片：選擇範本、編輯文字和背景，保存專案並輸出 PNG 或 ZIP。",
      features: [
        { title: "範本先準備好尺寸", description: "從內建的 iPhone 和 iPad 範本開始，先確定畫布與裝置框架，再專注於截圖內容。" },
        { title: "匯入自己的截圖", description: "從檔案或照片中選擇截圖，替換範本畫面；App 只讀取你主動選擇的內容。" },
        { title: "文字、背景和版式都能改", description: "直接調整標題、字號、顏色、文字效果、背景和畫布上的位置，讓每一張圖更接近你的產品。" },
        { title: "專案留在本機", description: "保存可繼續編輯的本機專案，不需要帳戶、雲端同步或訂閱，換一個版本也能重新匯入。" },
        { title: "一次輸出一張或一組", description: "輸出目前 PNG，或把五張截圖整理成 ZIP；提交 App Store 前可以在裝置上再次檢查。" }
      ]
    },
    en: {
      eyebrow: "App Store screenshot layouts",
      summary: "Turn your screenshots into clear, ready-to-review product images on your device: choose a template, edit the message and background, save the project, and export PNG or ZIP.",
      features: [
        { title: "Templates start with the right canvas", description: "Begin with built-in iPhone and iPad templates, set the canvas and device frame first, and keep your attention on the product story." },
        { title: "Bring your own screenshots", description: "Choose screenshots from Files or Photos to replace the template artwork. The app reads only what you actively select." },
        { title: "Edit type, background, and layout", description: "Adjust headlines, size, color, text effects, background, and on-canvas position so each image fits your product." },
        { title: "Projects stay local", description: "Save an editable local project without an account, cloud sync, or subscription, then reopen it whenever you need another pass." },
        { title: "Export one or the full set", description: "Export the current PNG or package all five screenshots as a ZIP, then review the files on your device before submission." }
      ]
    },
    ja: {
      eyebrow: "App Store スクリーンショットのレイアウト",
      summary: "デバイス上でスクリーンショットを見やすい製品画像に整えます。テンプレートを選び、文字と背景を編集し、プロジェクトを保存して PNG や ZIP に書き出せます。",
      features: [
        { title: "テンプレートでキャンバスを準備", description: "内蔵の iPhone と iPad テンプレートから始め、キャンバスとデバイスフレームを決めて製品の内容に集中できます。" },
        { title: "自分のスクリーンショットを読み込む", description: "ファイルまたは写真からスクリーンショットを選んでテンプレートの画像を置き換えます。選択した内容だけを読み込みます。" },
        { title: "文字、背景、レイアウトを編集", description: "見出し、サイズ、色、文字効果、背景、キャンバス上の位置を調整し、製品に合う一枚に仕上げます。" },
        { title: "プロジェクトはローカルに保存", description: "アカウント、クラウド同期、サブスクリプションなしで編集可能なプロジェクトを保存し、必要なときに開き直せます。" },
        { title: "一枚でも一式でも書き出し", description: "現在の PNG、または5枚のスクリーンショットをまとめた ZIP を書き出し、提出前にデバイス上で確認できます。" }
      ]
    },
    ko: {
      eyebrow: "App Store 스크린샷 레이아웃",
      summary: "기기에서 스크린샷을 알아보기 쉬운 제품 이미지로 정리하세요. 템플릿을 선택하고 메시지와 배경을 편집한 뒤 프로젝트를 저장하고 PNG 또는 ZIP으로 내보냅니다.",
      features: [
        { title: "템플릿으로 캔버스부터 준비", description: "내장 iPhone 및 iPad 템플릿으로 시작해 캔버스와 기기 프레임을 먼저 정하고 제품 내용에 집중합니다." },
        { title: "내 스크린샷 가져오기", description: "파일이나 사진에서 스크린샷을 선택해 템플릿 이미지를 바꿉니다. 직접 선택한 콘텐츠만 읽습니다." },
        { title: "텍스트, 배경, 레이아웃 편집", description: "제목, 크기, 색상, 텍스트 효과, 배경, 캔버스 위치를 조정해 제품에 맞는 이미지를 만듭니다." },
        { title: "프로젝트는 로컬에 보관", description: "계정, 클라우드 동기화, 구독 없이 편집 가능한 로컬 프로젝트를 저장하고 필요할 때 다시 엽니다." },
        { title: "한 장 또는 전체 세트 내보내기", description: "현재 PNG를 내보내거나 다섯 장의 스크린샷을 ZIP으로 묶어 제출 전에 기기에서 다시 확인합니다." }
      ]
    }
  }),
  listings: {
    CN: plannedWithoutStorefront("CN", "上架图生成器"),
    HK: plannedWithoutStorefront("HK", "上架圖生成器"),
    TW: plannedWithoutStorefront("TW", "上架圖生成器"),
    CA: plannedWithoutStorefront("CA", "AppStoryline"),
    US: plannedWithoutStorefront("US", "AppStoryline"),
    JP: plannedWithoutStorefront("JP", "AppStoryline"),
    KR: plannedWithoutStorefront("KR", "AppStoryline")
  }
};

export const apps = [perfectlist, meowtalkDiary, myBookmarks, jiajiaIdPhoto, partyGames, banzhuren, appstoryline] as const satisfies readonly AppRecord[];

export const appsBySlug = Object.fromEntries(apps.map((app) => [app.slug, app])) as Record<string, AppRecord>;
