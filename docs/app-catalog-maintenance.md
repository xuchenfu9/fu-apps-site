# 应用目录与官网发布维护说明

更新时间：2026-10-27

这份文档是官网和各 App 共享应用目录的维护入口。以后每次更新网站项目，都要同步检查应用目录、生成 `/apps.json`，并核对中国区 App Store 信息。

## 本次优化目标与完成情况

| 优化目标 | 已完成内容 | 维护入口 |
| --- | --- | --- |
| 中国区展示开发者的全部 App | 官网从 `src/data/apps.ts` 生成静态 `/apps.json`，当前输出 9 款应用 | `src/data/apps.ts`、`src/pages/apps.json.ts` |
| 海外继续兼容旧逻辑 | 海外客户端仍读取原 GitHub `recommendations.json`；没有修改旧 JSON 协议 | 各 App 的海外目录配置 |
| “我的 App”支持图片和简介 | 客户端横向分页展示应用截图、简介、详情页和商店状态 | 书签 App 的 `MyAppsView.swift` |
| 可从目录跳转商店 | 目录输出 `storeURL` 与 `storeStatus`；只有中国区 `live` 项显示下载按钮 | `src/data/apps.ts` 的 `listings.CN` |
| 官网内容更新可被多个 App 复用 | 固定使用 `https://www.appoffu.com/apps.json`，不解析首页 HTML | 目录协议见下文 |
| iPhone Duo / iPad 体验 | 常规宽度显示书签列表与右侧 `WKWebView`；窄屏继续单列和外部浏览器 | 书签 App 的 `ContentView.swift` |
| 老版本应用继续可用 | 新增接口，不删除旧页面、旧 JSON 或旧字段；旧客户端不认识新字段时仍按原逻辑运行 | 发布兼容性约束 |

## 每次网站更新的固定流程

### 1. 更新应用目录

编辑 `src/data/apps.ts`。新增或变更应用时必须同时检查：

- `slug`、应用名称、简介、图标和截图路径；
- `copy["zh-Hans"]` 的中文名称/简介；
- `listings.CN` 的状态、App Store ID、显示名称和 URL；
- `release` 版本和构建号；
- 对应的法律文档和 `scripts/check-content.mts` 校验条件。

中国区 App Store 信息要以当前公开商店结果为准。已上架应用使用：

```ts
listings: {
  CN: liveListing("CN", "6811306608", "福之行车记录仪")
}
```

尚未上架的应用使用 `plannedWithoutStorefront`，不要填写伪造的下载 URL，也不要提前标记为 `live`。

### 2. 生成并检查 JSON

运行以下命令：

```sh
npm ci
npm run validate
npm run check
PUBLIC_SITE_URL=https://www.appoffu.com PUBLIC_BASE_PATH=/ npm run build
```

构建产物必须包含 `dist/apps.json`。检查它的结构和数量：

```sh
node - <<'NODE'
const fs = require("fs");
const feed = JSON.parse(fs.readFileSync("dist/apps.json", "utf8"));
if (feed.schemaVersion !== 1) throw new Error("Unexpected apps.json schemaVersion");
if (!Array.isArray(feed.apps) || feed.apps.length === 0) throw new Error("apps.json has no apps");
for (const app of feed.apps) {
  for (const key of ["id", "title", "url", "summary", "iconURL", "screenshots", "websiteURL", "storeStatus"]) {
    if (!(key in app)) throw new Error(`${app.id}: missing ${key}`);
  }
}
console.log(`apps.json: ${feed.apps.length} apps`);
NODE
```

### 3. 核对中国区商店信息

发布前检查 `dist/apps.json`：

- `storeStatus: "live"` 必须有 `storeURL`；
- `storeStatus: "planned"` 可以没有 `storeURL`，客户端应显示“即将上架”；
- `storeURL` 应为对应中国区 App Store URL；
- 已下架或待审核应用不能继续沿用旧的 `live` 状态；
- 详情页名称、目录名称和 App Store 名称应保持一致。

### 4. 发布网站和 JSON

域名站构建必须使用根路径：

```sh
PUBLIC_SITE_URL=https://www.appoffu.com PUBLIC_BASE_PATH=/ npm run build
```

将完整 `dist/` 原子同步到官网静态目录 `/var/www/appoffu`，保留发布前备份。发布后至少回读：

```sh
curl --fail --silent --show-error https://www.appoffu.com/apps.json
curl --fail --silent --show-error https://www.appoffu.com/zh-Hans/
curl --fail --silent --show-error https://www.appoffu.com/zh-Hans/apps/my-bookmarks/
```

GitHub Pages 使用另一套配置：

```sh
PUBLIC_SITE_URL=https://xuchenfu9.github.io PUBLIC_BASE_PATH=/fu-apps-site npm run build
```

两套 `PUBLIC_BASE_PATH` 不能混用。公开 Pages 发布仓库为 `publish`，其镜像为 `nas-publish`；私有源码仓库为 `origin`，其镜像为 `nas`。用户明确要求推送或主线发布时，按 GitHub → `git ls-remote` → NAS → `git ls-remote` 的顺序执行，并确认两端指向同一提交。

## `/apps.json` 协议（schemaVersion 1）

`src/pages/apps.json.ts` 从应用目录生成静态 JSON。字段约定如下：

| 字段 | 类型 | 约束 |
| --- | --- | --- |
| `schemaVersion` | number | 当前固定为 `1` |
| `updatedAt` | ISO 8601 string | 构建生成时间 |
| `apps` | array | 应用记录数组 |
| `id` | string | 对应站点 `slug`，稳定且唯一 |
| `title` | object | 至少包含 `zh-Hans` |
| `url` | string | 应用中文详情页绝对 URL |
| `summary` | object | 至少包含 `zh-Hans` 的简介 |
| `iconURL` | string | 绝对 URL |
| `screenshots` | string[] | 一个或多个绝对 URL |
| `websiteURL` | string | 应用详情页绝对 URL |
| `storeURL` | string，可省略 | 只有对应 storefront 已上架时提供 |
| `storeStatus` | `live` / `planned` | 控制客户端下载按钮和上架提示 |

以后如果需要增加字段，只能做向后兼容的加法；不要删除或改变现有字段含义。协议需要不兼容变更时，新增 `schemaVersion` 并在客户端同时保留旧版本解析逻辑。

## 老版本兼容性约束

1. 不删除或重命名既有官网页面、法律文档 URL、图片路径和 GitHub `recommendations.json`。
2. `/apps.json` 是新增静态资源；老版本 App 不请求它，因此部署不会改变老版本的启动和推荐逻辑。
3. 新客户端对目录新增字段使用可选解析；官网缺少新字段时，应继续使用缓存或降级显示标题和商店链接。
4. 中国区目录和海外 JSON 分开缓存。官网暂时不可访问时，客户端使用最近一次有效缓存；首次没有缓存时显示空状态，不阻塞书签功能。
5. 计划上架应用不能生成不可用的下载按钮；商店信息更新只影响目录卡片，不影响已有书签数据。
6. 网站发布失败时保留上一次官网目录和备份，不删除旧静态文件；回滚必须恢复完整 `dist/`，避免 HTML、图片和 `/apps.json` 版本不一致。

## 发布前清单

- [ ] 应用数量、slug、截图和法律文档校验通过。
- [ ] `npm run validate`、`npm run check`、`npm run build` 通过。
- [ ] `dist/apps.json` 已生成，schemaVersion 为 `1`。
- [ ] 所有 `live` 应用都有正确的中国区 App Store URL。
- [ ] 官网首页、一个详情页、一个法律页面和 `/apps.json` 可读取。
- [ ] 域名站使用 `PUBLIC_BASE_PATH=/`，Pages 使用 `/fu-apps-site`。
- [ ] 已保存发布前备份，可在失败时恢复完整静态站。
- [ ] GitHub 与 NAS 远端核验到同一提交（仅在本次明确执行推送时）。
