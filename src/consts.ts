import { totoriData } from '@app/_content/schemas/totori_schema';
import { reslerianaRWData } from '@app/_content/schemas/resleriana-red-white_schema';
import { yumiaData } from '@app/_content/schemas/yumia_schema';
import { firisData } from './_content/schemas/firis_schema';

export const SITE_TITLE = 'Barrel Wisdom';
export const SITE_DESCRIPTION = 'The source for all things Atelier.';
export const POSTS_PER_PAGE = 10;

export const gameData = [
  ...totoriData,
  ...firisData,
  ...yumiaData,
  ...reslerianaRWData,
]

export interface PathConfig {
  game: string;
  section: string;
  listPath?: boolean;
  detailPath?: boolean;
  mainClass?: string;
  collection?: string;
}

export const pathData: PathConfig[] = [
  { game: 'totori', section: 'locations', listPath: false, },
  { game: 'totori', section: 'recipe-books' },
  { game: 'totori', section: 'items' },
  { game: 'totori', section: 'traits' },
  { game: 'totori', section: 'monsters' },
  { game: 'totori', section: 'effects' },
  //
  // { game: 'escha', section: 'items' },
  // { game: 'escha', section: 'properties' },
  // { game: 'escha', section: 'monsters' },
  // { game: 'escha', section: 'effects' },
  //
  // { game: 'shallie', section: 'items' },
  // { game: 'shallie', section: 'properties' },
  // { game: 'shallie', section: 'monsters' },
  // { game: 'shallie', section: 'effects' },
  //
  { game: 'firis', section: 'items' },
  { game: 'firis', section: 'traits' },
  { game: 'firis', section: 'monsters' },
  { game: 'firis', section: 'effects' },
  { game: 'firis', section: 'shops', detailPath: false, mainClass: "medium-page" },
  { game: 'firis', section: 'catalysts', detailPath: false, collection: 'items' },
  { game: 'firis', section: 'recipe-ideas', detailPath: false, collection: 'items' },
  //
  // { game: 'ryza2', section: 'items' },
  // { game: 'ryza2', section: 'traits' },
  // { game: 'ryza2', section: 'monsters' },
  // { game: 'ryza2', section: 'effects' },
  //
  // { game: 'sophie2', section: 'items' },
  // { game: 'sophie2', section: 'traits' },
  // { game: 'sophie2', section: 'monsters' },
  // { game: 'sophie2', section: 'effects' },
  //
  { game: 'resleriana-red-white', section: 'items' },
  { game: 'resleriana-red-white', section: 'traits' },
  { game: 'resleriana-red-white', section: 'monsters' },
  { game: 'resleriana-red-white', section: 'effects' },
  { game: 'resleriana-red-white', section: 'recipe-trees', detailPath: false, mainClass: "medium-page" },
  { game: 'resleriana-red-white', section: 'shops', detailPath: false, mainClass: "medium-page" },

  { game: 'yumia', section: 'items' },
  { game: 'yumia', section: 'traits' },
  { game: 'yumia', section: 'monsters' },
  { game: 'yumia', section: 'effects' },
]


export const generateCategories: string[] = [
  'totori',
  //'escha',
  //'shallie',
  'firis',
  //'ryza2',
  //'sophie2',
  'resleriana-red-white',
  'yumia',
];
