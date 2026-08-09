import { banzhurenLegal } from "./banzhuren";
import { appstorylineLegal } from "./appstoryline";
import { jiajiaIdPhotoLegal } from "./jiajia-id-photo";
import { meowtalkDiaryLegal } from "./meowtalk-diary";
import { myBookmarksLegal } from "./my-bookmarks";
import { partyGamesLegal } from "./party-games";
import { perfectlistLegal } from "./perfectlist";
import type { AppLegalDocuments } from "./types";

export type { AppLegalDocuments, LegalDocument, LegalKind, LegalSection } from "./types";

export const legalDocumentsBySlug: Record<string, AppLegalDocuments> = {
  perfectlist: perfectlistLegal,
  "meowtalk-diary": meowtalkDiaryLegal,
  "my-bookmarks": myBookmarksLegal,
  "jiajia-id-photo": jiajiaIdPhotoLegal,
  "party-games": partyGamesLegal,
  banzhuren: banzhurenLegal,
  appstoryline: appstorylineLegal
};
