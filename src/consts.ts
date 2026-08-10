import { totoriData } from '@app/_content/schemas/totori_schema';
import { reslerianaRWData } from '@app/_content/schemas/resleriana-red-white_schema';
import { yumiaData } from '@app/_content/schemas/yumia_schema';

export const SITE_TITLE = 'Barrel Wisdom';
export const SITE_DESCRIPTION = 'The source for all things Atelier.';
export const POSTS_PER_PAGE = 10;

export const gameData = [
  ...totoriData,
  ...yumiaData,
  ...reslerianaRWData,
]

export interface PathConfig {
  game: string;
  section: string;
  fragment: boolean;
  listPath?: boolean;
  detailPath?: boolean;
  mainClass?: string;
}

export const pathData: PathConfig[] = [
  { game: 'totori', section: 'locations',   fragment: false, listPath: false, },
  { game: 'totori', section: 'recipe-books',   fragment: false },
  { game: 'totori', section: 'items',    fragment: true },
  { game: 'totori', section: 'traits',   fragment: false },
  { game: 'totori', section: 'monsters', fragment: true },
  { game: 'totori', section: 'effects',  fragment: false },
  //
  // { game: 'escha', section: 'items',      fragment: true },
  // { game: 'escha', section: 'properties', fragment: false },
  // { game: 'escha', section: 'monsters',   fragment: true },
  // { game: 'escha', section: 'effects',    fragment: false },
  //
  // { game: 'shallie', section: 'items',      fragment: true },
  // { game: 'shallie', section: 'properties', fragment: false },
  // { game: 'shallie', section: 'monsters',   fragment: true },
  // { game: 'shallie', section: 'effects',    fragment: false },
  //
  // { game: 'firis', section: 'items',    fragment: true },
  // { game: 'firis', section: 'traits',   fragment: false },
  // { game: 'firis', section: 'monsters', fragment: true },
  // { game: 'firis', section: 'effects',  fragment: false },
  //
  // { game: 'ryza2', section: 'items',    fragment: true },
  // { game: 'ryza2', section: 'traits',   fragment: false },
  // { game: 'ryza2', section: 'monsters', fragment: true },
  // { game: 'ryza2', section: 'effects',  fragment: false },
  //
  // { game: 'sophie2', section: 'items',    fragment: true },
  // { game: 'sophie2', section: 'traits',   fragment: false },
  // { game: 'sophie2', section: 'monsters', fragment: true },
  // { game: 'sophie2', section: 'effects',  fragment: false },
  //
  { game: 'resleriana-red-white', section: 'items',    fragment: true },
  { game: 'resleriana-red-white', section: 'traits',   fragment: false },
  { game: 'resleriana-red-white', section: 'monsters', fragment: true },
  { game: 'resleriana-red-white', section: 'effects', fragment: false },
  { game: 'resleriana-red-white', section: 'recipe-trees', fragment: false, detailPath: false, mainClass: "medium-page" },
  { game: 'resleriana-red-white', section: 'shops', fragment: false, detailPath: false, mainClass: "medium-page" },

  { game: 'yumia', section: 'items',    fragment: true },
  { game: 'yumia', section: 'traits',   fragment: true },
  { game: 'yumia', section: 'monsters', fragment: true },
  { game: 'yumia', section: 'effects',  fragment: false },
]


export const generateCategories: string[] = [
  'totori',
  //'escha',
  //'shallie',
  //'firis',
  //'ryza2',
  //'sophie2',
  'resleriana-red-white',
  'yumia',
];
