# FU apps 静态官网设计

**日期：** 2026-07-28  
**状态：** 已确认，待实施计划

## 目标

建立 `FU apps` 的多语言产品官网，并发布到 GitHub Pages 仓库 `xuchenfu9/fu-apps-site`。网站是纯静态站点：首页展示已发布应用，应用详情页展示图标、截图、功能与 App Store 下载入口，并为每个应用提供公开的隐私政策、用户支持与服务条款。

站点支持简体中文（`zh-Hans`）、繁体中文（`zh-Hant`）、英文（`en`）、日文（`ja`）和韩文（`ko`）。所有公开页面，包括法律和支持页，均包含独立的语言切换控件。

不收录未通过审核的 Shift Wake Clock。

## 已收录应用

| 标识 | 产品工程 | App Store ID | 当前可用商店 |
| --- | --- | --- | --- |
| `perfectlist` | `/Volumes/外置硬盘/Developer/Mylist` | `6759079848` | CN、HK、US、JP、KR |
| `meowtalk-diary` | `/Volumes/外置硬盘/Developer/noteofpets` | `6761005924` | CN、HK、US、JP、KR |
| `my-bookmarks` | `/Volumes/外置硬盘/Developer/WebManger` | `6758990165` | CN、HK、US、JP、KR |
| `jiajia-id-photo` | `/Volumes/外置硬盘/Developer/OneDollarID` | `6758612379` | CN 已上线；HK、TW、CA、US 为下一版本计划市场 |
| `party-games` | `/Volumes/外置硬盘/Developer/fastwin-1` | `6759240304` | CN、HK、US、JP、KR |

App Store 名称是商店地区属性，而不是单一的站点翻译字段。维护数据保存查询到的正式名称与 URL；在更新时通过 Apple iTunes Lookup 接口复核。页面不在访问时请求 Apple。

佳佳证件照下一版本的 Storefront 品牌已确定：CN 为“证照准拍”，HK/TW 为“證照好拍”，CA 为“MapleLens ID”，US 为“US PassSnap”。这些条目以 `planned` 状态进入目录；版本实际在对应商店可查询后，刷新命令把它们切换为 `live`，并以 Apple Lookup 返回的名称和 URL 为准。JP/KR 没有发布计划，不为佳佳证件照声明未来上架。

## 体验与视觉

采用已确认的“精选作品画廊”方向：

- 首页以 FU apps 字标、简洁说明和五个应用的真实图标/截图卡片构成；应用而非营销文案是第一视口主体。
- 背景使用暖白和中性色，排版紧凑清晰；每张应用卡片只从自身图标和截图提取有限的强调色，避免全站单一色调。
- 首页卡片和每个应用页的首屏均给出 App Store 跳转；文档入口保持常驻、可扫描且不压过产品内容。
- 应用详情页按“图标与正式商店名称 -> 功能 -> 截图 -> 文档与下载”排列。截图以设备比例展示，不裁切关键信息。
- 手机端为单列或双列稳定网格，导航与语言选择可触达，触控目标不小于 44px；桌面端保留应用画廊的层次与必要留白。

## 路由与页面

Astro 在构建时生成下列直接可访问的 HTML 页面：

```text
/{locale}/
/{locale}/apps/{app-slug}/
/{locale}/apps/{app-slug}/privacy/
/{locale}/apps/{app-slug}/support/
/{locale}/apps/{app-slug}/terms/
/404.html
/sitemap-index.xml
```

根路径通过轻量静态跳转使用已保存语言或浏览器语言；没有匹配项时进入 `zh-Hans`。所有语言切换器保留当前应用和页面类型，例如从日文隐私页切到韩文时进入同一应用的韩文隐私页。每个页面同时提供明确的首页和应用详情页返回链接。

## App Store 地区与下载规则

语言和商店地区的默认映射如下：`zh-Hans -> CN`、`zh-Hant -> HK`、`en -> US`、`ja -> JP`、`ko -> KR`。语言不是 Storefront 的唯一来源：站点在首次访问时读取浏览器语言中的地区子标签，例如 `en-CA` 和 `zh-Hant-TW`；用户还可以通过 App Store 地区选择器明确选择商店，选择保存到浏览器。英文 CA 选项显示 `MapleLens ID`，英文 US 选项显示 `US PassSnap`；繁体中文 HK/TW 都显示 `證照好拍`。

下载按钮始终显示，并按以下顺序选择链接：

1. 使用页面语言对应的商店，前提是该应用已上架。
2. 若不可用，优先使用 US 商店。
3. 若 US 也不可用，使用该应用维护数据中优先级最高的实际可下载商店；当前佳佳证件照回退到 CN。

佳佳证件照在 `planned` 商店中仍显示当地正式名称和对应地区的 App Store 入口，并标明“随下一版本提供”；`live` 状态前不把它陈述为已经可下载。按钮和辅助文字必须说明实际跳转地区；不伪装为当前地区下载。首页和详情页使用同一解析器，保证商店名称、URL、地区说明一致。

## 内容与法规文档迁移

既有 HTML、MD 和现有站点内容是合规事实的基线。实施时抽取其正文，不继承旧页面的布局和样式；所有现有义务、权限说明、数据处理事实、订阅说明、联系信息和更新日期必须保留。翻译可重写语言表达，但不得改变政策含义或引入没有证据支持的收集、追踪、云端处理、付款或数据删除承诺。

| 应用 | 既有文档来源 |
| --- | --- |
| PerfectList | `Mylist/docs/privacy-policy.html`、`support.html`、`terms-of-use.html` |
| MeowTalk Diary | `noteofpets/docs/privacy/index.html`、`support/index.html`、`terms/index.html` 与 `docs/assets/content.js` |
| 我的书签 | `WebManger/docs/bookmarkprivacy.html`、`bookmartsupport.html`、`bookmarks-marketing.html` |
| 佳佳证件照 | `OneDollarID/docs/photo-privacy-policy.html`、`photo-technical-support.html`、本地化隐私/支持页与发布资料 |
| 派对游戏 | `fastwin-1/ReactionDuel/AppStoreAssets/privacy-policy.html`、`support.html`、`terms-of-service.html`、`APP_STORE_LISTING.md` |

“我的书签”和“佳佳证件照”没有现成的独立服务条款。为满足统一公开材料要求，为两者新增应用专属服务条款，并只采用其现有功能和付费资料可证实的表述。所有应用均发布隐私、支持、条款三类页面的五语版本。

联系邮箱取自对应应用现有公开材料：佳佳证件照使用 `panxiaosen@163.com`；其他四个应用使用 `fxcpxs@163.com`。不得以统一的虚构联系方式替代。

## 实现边界

采用 Astro 静态站点生成，而非 SPA 或手写重复 HTML：

- 结构化应用目录保存应用标识、商店映射、`live`/`planned` 状态、截图、图标、功能、邮箱和文档内容引用。
- 公共布局组件负责页头、五语选择、App Store CTA、应用卡片、页脚和文档导航；法律文档仍以独立路由生成，不嵌入单页应用。
- 图标、截图和本地字体/图片均复制到本仓库管理的静态资源目录；原应用项目只读，不被修改。
- `docs/adding-an-app.md` 定义并约束新增应用流程。新增记录必须提供五语介绍、五个目标商店的已核实名称/URL或不可用状态、真实图标与截图、功能列表、联系邮箱，以及五语隐私/支持/条款内容。

不实现账号、表单提交、分析追踪、后端、运行时内容 API 或应用内推荐目录功能。

## 发布与维护

- 本地构建输出为 `dist/`，GitHub Pages 仅托管该静态产物。
- GitHub Actions 在主分支推送时安装依赖、运行验证、构建并部署 Pages。
- 站点的公开基路径适配项目页 `https://xuchenfu9.github.io/fu-apps-site/`。
- 提供商店元数据刷新命令，在发布前读取 Apple Lookup 的当前名称与 URL，更新受版本控制的目录数据；`planned` 条目在接口可查询前允许不存在，查询成功后必须改为 `live`。此步骤需人工审阅 diff 后提交。

## 验证

构建前验证必须拒绝下列状态：

- 任一应用缺少五个语言变体、图标、至少一张可显示截图、功能内容、联系邮箱、三类文档或可下载商店。
- 任一语言切换目标、应用卡片、文档导航、下载链接或静态资源为断链。
- 商店显示名、地区说明、发布状态和下载 URL 由不同数据源生成而互相矛盾。

自动测试覆盖语言切换保持当前路径、语言和浏览器地区到 Storefront 的映射、手动 Storefront 选择的持久化、US 优先回退、佳佳证件照的 CN 回退与 CA/US/HK/TW 计划名称、所有静态路由生成、生产构建和关键移动端/桌面端视口。发布前使用浏览器截图检查首页、五个应用页和五语法律页的响应式排版与可达性。
