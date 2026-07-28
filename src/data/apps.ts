import type { AppRecord, Locale, Storefront, StorefrontListing } from "../lib/types";

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
  contactEmail: "fxcpxs@163.com",
  icon: "/assets/apps/perfectlist/icon.png",
  screenshots: [
    "/assets/apps/perfectlist/screen-01.png",
    "/assets/apps/perfectlist/screen-02.png",
    "/assets/apps/perfectlist/screen-03.png"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "任务、习惯与提醒",
      summary: "把待办、习惯、生日和工作日闹钟放在一个清晰的日程里。",
      features: [
        { title: "今日任务", description: "用优先级、时间和分类把当天该做的事排好。" },
        { title: "习惯追踪", description: "建立可持续的日常习惯，并回看完成进度。" },
        { title: "提醒与生日", description: "为重要日期和重复安排设置贴近生活的提醒。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "任務、習慣與提醒",
      summary: "把待辦、習慣、生日和工作日鬧鐘放在一個清晰的日程裡。",
      features: [
        { title: "今日任務", description: "用優先順序、時間和分類安排每天要做的事。" },
        { title: "習慣追蹤", description: "建立可持續的日常習慣，並回看完成進度。" },
        { title: "提醒與生日", description: "為重要日期和重複安排設定貼近日常的提醒。" }
      ]
    },
    en: {
      eyebrow: "Tasks, habits, and reminders",
      summary: "Keep tasks, habits, birthdays, and weekday alarms in one calm daily view.",
      features: [
        { title: "Today at a glance", description: "Organize the day with priorities, times, and categories." },
        { title: "Habit tracking", description: "Build routines and revisit steady progress over time." },
        { title: "Dates that matter", description: "Set practical reminders for birthdays and repeating plans." }
      ]
    },
    ja: {
      eyebrow: "タスク、習慣、リマインダー",
      summary: "やること、習慣、誕生日、平日のアラームを一つの見やすい予定にまとめます。",
      features: [
        { title: "今日の予定", description: "優先度、時刻、カテゴリで一日のタスクを整理します。" },
        { title: "習慣を記録", description: "続けたい習慣を作り、積み重ねを振り返れます。" },
        { title: "大切な日を通知", description: "誕生日や繰り返し予定に実用的な通知を設定できます。" }
      ]
    },
    ko: {
      eyebrow: "할 일, 습관, 알림",
      summary: "할 일과 습관, 생일, 평일 알람을 차분한 하루 화면에서 관리하세요.",
      features: [
        { title: "오늘 한눈에", description: "우선순위, 시간, 카테고리로 하루를 정리합니다." },
        { title: "습관 기록", description: "지속하고 싶은 루틴을 만들고 성과를 돌아봅니다." },
        { title: "중요한 날짜", description: "생일과 반복 일정에 실용적인 알림을 설정합니다." }
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
  contactEmail: "fxcpxs@163.com",
  icon: "/assets/apps/meowtalk-diary/icon.png",
  screenshots: [
    "/assets/apps/meowtalk-diary/screen-01.png",
    "/assets/apps/meowtalk-diary/screen-02.png",
    "/assets/apps/meowtalk-diary/screen-03.png"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "宠物日记与猫语参考",
      summary: "把宠物的日记、照片、提醒和照护记录慢慢收进同一个温暖的家。",
      features: [
        { title: "日常记录", description: "保存宠物生活中的笔记、照片和重要片段。" },
        { title: "照护工具", description: "随手记录体重、病历、提醒和日常用品。" },
        { title: "猫语参考", description: "浏览离线猫叫示例和日常养猫参考内容。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "寵物日記與貓語參考",
      summary: "把寵物的日記、照片、提醒和照護記錄慢慢收進同一個溫暖的家。",
      features: [
        { title: "日常記錄", description: "保存寵物生活中的筆記、照片和重要片段。" },
        { title: "照護工具", description: "隨手記錄體重、病歷、提醒和日常用品。" },
        { title: "貓語參考", description: "瀏覽離線貓叫示例和日常養貓參考內容。" }
      ]
    },
    en: {
      eyebrow: "A diary for life with pets",
      summary: "Bring pet notes, photos, reminders, and care details together in one warm place.",
      features: [
        { title: "Everyday memories", description: "Keep notes, photos, and moments from life together." },
        { title: "Care in context", description: "Track weight, medical notes, reminders, and supplies." },
        { title: "Cat sound reference", description: "Explore offline cat-sound examples and everyday cat-care references." }
      ]
    },
    ja: {
      eyebrow: "ペットの日記と猫語のヒント",
      summary: "日記、写真、リマインダー、お世話の記録を、ペットのための温かな場所にまとめます。",
      features: [
        { title: "毎日の思い出", description: "ノート、写真、大切な瞬間を残せます。" },
        { title: "お世話を記録", description: "体重、通院メモ、リマインダー、用品をまとめて管理します。" },
        { title: "猫の声の参考", description: "オフラインの猫の鳴き声例と日常ケアの情報を見られます。" }
      ]
    },
    ko: {
      eyebrow: "반려동물 일기와 고양이 소리 참고",
      summary: "일기, 사진, 알림, 돌봄 기록을 반려동물을 위한 따뜻한 한곳에 모으세요.",
      features: [
        { title: "일상의 추억", description: "메모, 사진, 소중한 순간을 남깁니다." },
        { title: "돌봄 기록", description: "체중, 진료 기록, 알림, 용품을 함께 관리합니다." },
        { title: "고양이 소리 참고", description: "오프라인 고양이 소리 예시와 일상 돌봄 정보를 살펴봅니다." }
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
  contactEmail: "fxcpxs@163.com",
  icon: "/assets/apps/my-bookmarks/icon.png",
  screenshots: ["/assets/apps/my-bookmarks/screen-01.png"],
  copy: copy({
    "zh-Hans": {
      eyebrow: "极简书签管理",
      summary: "把工作、学习和生活中的链接整理成随时能找到的私人书签库。",
      features: [
        { title: "自由分类", description: "创建分类并拖拽排序，让每一个网址各得其所。" },
        { title: "私密保护", description: "使用面容 ID 或指纹保护需要额外隐私的分类。" },
        { title: "轻松分享", description: "通过二维码和常用方式分享整理好的链接。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "極簡書籤管理",
      summary: "把工作、學習和生活中的連結整理成隨時能找到的私人書籤庫。",
      features: [
        { title: "自由分類", description: "建立分類並拖曳排序，讓每一個網址各得其所。" },
        { title: "私密保護", description: "使用 Face ID 或指紋保護需要額外隱私的分類。" },
        { title: "輕鬆分享", description: "透過 QR Code 和常用方式分享整理好的連結。" }
      ]
    },
    en: {
      eyebrow: "A minimal bookmark library",
      summary: "Keep work, learning, and everyday links organized in a private library you can return to.",
      features: [
        { title: "Flexible categories", description: "Create categories and drag them into the order that works for you." },
        { title: "Private spaces", description: "Protect sensitive categories with Face ID or Touch ID." },
        { title: "Simple sharing", description: "Share curated links with QR codes and familiar share options." }
      ]
    },
    ja: {
      eyebrow: "ミニマルなブックマーク管理",
      summary: "仕事、学び、日常のリンクを、いつでも戻れる自分だけのライブラリに整理します。",
      features: [
        { title: "柔軟なカテゴリ", description: "カテゴリを作成し、ドラッグで使いやすい順番に並べられます。" },
        { title: "プライベートな保存", description: "Face ID または Touch ID で大切なカテゴリを保護します。" },
        { title: "かんたん共有", description: "QR コードや共有メニューでリンクを届けられます。" }
      ]
    },
    ko: {
      eyebrow: "미니멀 북마크 관리",
      summary: "업무, 학습, 일상의 링크를 언제든 다시 찾을 수 있는 개인 라이브러리에 정리하세요.",
      features: [
        { title: "유연한 카테고리", description: "카테고리를 만들고 드래그하여 원하는 순서로 정리합니다." },
        { title: "개인 정보 보호", description: "Face ID 또는 Touch ID로 민감한 카테고리를 보호합니다." },
        { title: "간편한 공유", description: "QR 코드와 기본 공유 기능으로 링크를 보냅니다." }
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
  contactEmail: "panxiaosen@163.com",
  icon: "/assets/apps/jiajia-id-photo/icon.png",
  screenshots: ["/assets/apps/jiajia-id-photo/screen-01.jpg"],
  copy: copy({
    "zh-Hans": {
      eyebrow: "证件照制作",
      summary: "在手机上完成抠图、换底和常用证件照尺寸调整。",
      features: [
        { title: "智能抠图", description: "从照片中分离人物，准备证件照所需的干净画面。" },
        { title: "背景与尺寸", description: "选择常用背景颜色和证件照规格。" },
        { title: "本地优先", description: "将照片处理流程保留在设备端，按需要保存结果。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "證件照製作",
      summary: "在手機上完成去背、換底和常用證件照尺寸調整。",
      features: [
        { title: "智慧去背", description: "從照片中分離人物，準備證件照所需的乾淨畫面。" },
        { title: "背景與尺寸", description: "選擇常用背景顏色和證件照規格。" },
        { title: "本機優先", description: "把照片處理流程留在裝置端，依需要儲存結果。" }
      ]
    },
    en: {
      eyebrow: "ID photo tools",
      summary: "Prepare an ID photo on your phone with background and size tools for common requirements.",
      features: [
        { title: "Subject cutout", description: "Separate the subject from a photo for a clean ID-photo canvas." },
        { title: "Background and size", description: "Choose common background colors and photo dimensions." },
        { title: "On-device first", description: "Keep the photo workflow on the device and save results when needed." }
      ]
    },
    ja: {
      eyebrow: "証明写真ツール",
      summary: "背景とサイズのツールで、スマートフォン上で証明写真を整えます。",
      features: [
        { title: "人物の切り抜き", description: "写真から人物を分離し、きれいな証明写真用の画面を準備します。" },
        { title: "背景とサイズ", description: "よく使う背景色と証明写真の寸法を選べます。" },
        { title: "端末内を優先", description: "写真の処理を端末内で行い、必要に応じて保存します。" }
      ]
    },
    ko: {
      eyebrow: "증명사진 도구",
      summary: "배경과 크기 도구로 휴대폰에서 증명사진을 준비하세요.",
      features: [
        { title: "인물 분리", description: "사진에서 인물을 분리해 깔끔한 증명사진 화면을 만듭니다." },
        { title: "배경과 크기", description: "자주 쓰는 배경색과 증명사진 규격을 선택합니다." },
        { title: "기기 내 처리 우선", description: "사진 작업을 기기에서 처리하고 필요할 때 결과를 저장합니다." }
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
  contactEmail: "fxcpxs@163.com",
  icon: "/assets/apps/party-games/icon.png",
  screenshots: [
    "/assets/apps/party-games/screen-01.png",
    "/assets/apps/party-games/screen-02.png",
    "/assets/apps/party-games/screen-03.png"
  ],
  copy: copy({
    "zh-Hans": {
      eyebrow: "多人聚会小游戏",
      summary: "拿起手机就能开始的本地多人游戏合集，为聚会快速破冰。",
      features: [
        { title: "多种玩法", description: "反应对决、点球、转盘、翻牌、摸高和手指炸弹一次拥有。" },
        { title: "面对面开玩", description: "通过本地连接邀请朋友，几秒钟就能开始一局。" },
        { title: "聚会气氛", description: "适合朋友聚会、家庭娱乐和旅途中的轻松时刻。" }
      ]
    },
    "zh-Hant": {
      eyebrow: "多人派對小遊戲",
      summary: "拿起手機就能開始的本機多人遊戲合集，為聚會快速破冰。",
      features: [
        { title: "多種玩法", description: "反應對決、點球、轉盤、翻牌、摸高和手指炸彈一次擁有。" },
        { title: "面對面開玩", description: "透過本機連線邀請朋友，幾秒鐘就能開始一局。" },
        { title: "聚會氣氛", description: "適合朋友聚會、家庭娛樂和旅途中的輕鬆時刻。" }
      ]
    },
    en: {
      eyebrow: "Local multiplayer party games",
      summary: "A collection of quick local games made to get a group playing within seconds.",
      features: [
        { title: "Six ways to play", description: "Reaction duels, penalties, a wheel, cards, high jump, and finger bomb." },
        { title: "Play together", description: "Invite friends through a local connection and start a round quickly." },
        { title: "Made for gatherings", description: "Bring some energy to friends, family, and travel downtime." }
      ]
    },
    ja: {
      eyebrow: "ローカル対戦パーティーゲーム",
      summary: "集まった人がすぐに遊び始められる、ローカル対戦ゲームのコレクションです。",
      features: [
        { title: "6つのゲーム", description: "反応対決、PK、ルーレット、カード、ハイジャンプ、指爆弾を収録。" },
        { title: "みんなで遊ぶ", description: "ローカル接続で友達を招待し、すぐにラウンドを始められます。" },
        { title: "集まりの時間に", description: "友達、家族、旅先のちょっとした時間を盛り上げます。" }
      ]
    },
    ko: {
      eyebrow: "로컬 멀티플레이 파티 게임",
      summary: "모임에서 몇 초 만에 함께 시작할 수 있는 빠른 로컬 게임 모음입니다.",
      features: [
        { title: "여섯 가지 게임", description: "반응 대결, 페널티, 룰렛, 카드, 높이뛰기, 손가락 폭탄을 즐깁니다." },
        { title: "함께 플레이", description: "로컬 연결로 친구를 초대하고 빠르게 한 판을 시작합니다." },
        { title: "모임을 위한 재미", description: "친구, 가족, 여행 중의 여유 시간을 즐겁게 만듭니다." }
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
