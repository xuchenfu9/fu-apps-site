# FU apps Legal Source Map

The site renders app-specific legal documents from `src/data/legal/` rather than serving copied source HTML. This keeps every published document on one URL structure, gives every document its own language switcher, and keeps the static build reproducible.

## Source records

| App | Privacy source | Support source | Terms source | Contact |
| --- | --- | --- | --- | --- |
| PerfectList | `/Volumes/外置硬盘/Developer/Mylist/docs/privacy-policy.html` | `/Volumes/外置硬盘/Developer/Mylist/docs/support.html` | `/Volumes/外置硬盘/Developer/Mylist/docs/terms-of-use.html` | `fxcpxs@163.com` |
| MeowTalk Diary | `/Volumes/外置硬盘/Developer/noteofpets/docs/privacy/index.html` | `/Volumes/外置硬盘/Developer/noteofpets/docs/support/index.html` | `/Volumes/外置硬盘/Developer/noteofpets/docs/terms/index.html` | `fxcpxs@163.com` |
| My Bookmarks | `/Volumes/外置硬盘/Developer/WebManger/docs/bookmarkprivacy.html` | `/Volumes/外置硬盘/Developer/WebManger/docs/bookmartsupport.html` | `/Volumes/外置硬盘/Developer/WebManger/WebManager/Views/TermsOfServiceView.swift` | `fxcpxs@163.com` |
| ID Photo | `/Volumes/外置硬盘/Developer/OneDollarID/docs/photo-privacy-policy.html` | `/Volumes/外置硬盘/Developer/OneDollarID/docs/photo-technical-support.html` | No existing standalone terms document; the site uses the shared StoreKit and Apple-device license template. | `fxcpxs@163.com` |
| Party Games | `/Volumes/外置硬盘/Developer/fastwin-1/ReactionDuel/AppStoreAssets/partygames-privacy-policy.html` | `/Volumes/外置硬盘/Developer/fastwin-1/ReactionDuel/AppStoreAssets/partygames-support.html` | `/Volumes/外置硬盘/Developer/fastwin-1/ReactionDuel/AppStoreAssets/partygames-terms-of-service.html` | `fxcpxs@163.com` |
| 班主任小秘书 | `/Volumes/外置硬盘/Developer/班主任/Banzhuren/`（依据当前本地 Core Data、权限声明、StoreKit、局域网编辑和网络请求实现整理） | `/Volumes/外置硬盘/Developer/班主任/`（依据当前应用功能和支持流程整理） | `/Volumes/外置硬盘/Developer/班主任/`（依据当前应用功能、购买和责任边界整理） | `fxcpxs@163.com` |

## Update procedure

1. Review the current app behavior and the source records above before changing a document. Runtime behavior and shipped permission declarations take precedence over older copy.
2. Update the relevant profile in `src/data/legal/<app>.ts`. Keep every locale declared by the app's `supportedLocales`; apps without that field use all five site locales: `zh-Hans`, `zh-Hant`, `en`, `ja`, and `ko`.
3. Preserve the actual support contact that the app exposes. Do not substitute a personal or unrelated mailbox.
4. Run `npm test` and `npm run check`. Before publishing, run `npm run validate` and inspect the generated document pages in a browser.
5. For a new app, add its source row here, create its `src/data/legal/<slug>.ts` profile, register it in `src/data/legal/index.ts`, and add privacy, support, and terms links to its app record. The app must not be listed until all supported-locale document pages build successfully.
