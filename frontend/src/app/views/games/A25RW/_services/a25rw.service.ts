import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Category, Effect, Item, Monster, Shop, Trait, Trees } from '@app/views/games/A25RW/_services/a25rw.interface';
import { environment } from '@environments/environment';
import { category_translation, effect_translation, filter_translation, ingredient_translation, item_translation, level_translation, location_translation, monster_translation, permalink_translation, race_translation, recipebook_translation, shop_translation, stat_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A25RWService {
  private readonly version = '1.3.0';
  private apiUrl = getApiUrl();

  constructor(
    private http: HttpClient,
  ) { }

  public readonly item_translation = item_translation
  public readonly monster_translation = monster_translation
  public readonly stat_translation = stat_translation
  public readonly effect_translation = effect_translation
  public readonly trait_translation = trait_translation
  public readonly category_translation = category_translation
  public readonly filter_translation = filter_translation
  public readonly race_translation = race_translation
  public readonly location_translation = location_translation
  public readonly recipebook_translation = recipebook_translation
  public readonly ingredient_translation = ingredient_translation
  public readonly shop_translation = shop_translation
  public readonly permalink_translation = permalink_translation
  public readonly level_translation = level_translation

  public readonly gameTitle = {
    "en": "Atelier Resleriana: The Red Alchemist & the White Guardian",
    "ja": "レスレリアーナのアトリエ 紅の錬金術士と白の守護者",
    "sc": "蕾斯莱莉娅娜的炼金工房 紅色的鍊金術士和白色的守護者",
    "tc": "蕾斯萊莉婭娜的鍊金工房 红色的炼金术士和白色的守护者",
    "ko": "레슬레리아나의 아틀리에 진홍의 연금술사와 순백의 수호자"
  };
  public readonly gameURL = "resleriana-red-white";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  public readonly colors = {
    'red':    '#b63c3c',
    'blue':   '#3883ad',
    'green':  '#3eb880',
    'yellow': '#c9af47',
    'purple': '#ac48b9',
    '--': 'gray',
  }

  public readonly orders = {
    'en': 'Order',
    'ja': '依頼発注',
    'tc': '發送委託',
    'sc': '发起委托',
    'ko': '발주 의뢰',
  }

  public readonly synthesis_recipe = {
    'en': 'Synthesis Recipes',
    'ja': '調合レシピ',
    'tc': '調合配方',
    'sc': '调合配方',
    'ko': '조합 레시피',
  };

  public readonly required_ing = {
    'en': 'Required Ingredients',
    'ja': '必要素材',
    'tc': '所需素材',
    'sc': '所需素材',
    'ko': '필요 소재',
  };

  public readonly recipe_tree = {
    'en': 'Recipe Tree',
    'ja': 'レシピ派生図',
    'tc': '配方衍生圖',
    'sc': '配方衍生图',
    'ko': '레시피 파생도',
  };

  public readonly item_mix = {
    'en': 'Item Mix',
    'ja': 'アイテムミックス',
    'tc': '道具混搭',
    'sc': '道具混搭',
    'ko': '아이템 믹스',
  };

  public readonly colorNames = {
    'red':    {'en': 'Red',    'ja':'赤', 'tc':'紅', 'sc':'红', 'ko':'적'},
    'blue':   {'en': 'Blue',   'ja':'青', 'tc':'藍', 'sc':'蓝', 'ko':'청'},
    'green':  {'en': 'Green',  'ja':'緑', 'tc':'綠', 'sc':'绿', 'ko':'녹'},
    'yellow': {'en': 'Yellow', 'ja':'黄', 'tc':'黃', 'sc':'黄', 'ko':'황'},
    'purple': {'en': 'Purple', 'ja':'紫', 'tc':'紫', 'sc':'紫', 'ko':'자'},
  }

  public readonly colorList = {
    'red':    'rgba(182,60,60,.7);',
    'blue':   'rgba(56,131,173,0.7);',
    'green':  'rgba(62,184,128,0.7);',
    'yellow': 'rgba(201,175,71,0.7);',
    'purple': 'rgba(172,72,185,0.7);'
  }

  public readonly elements = {
    'air': '#4f7939',
    'fire': '#a64521',
    'ice': '#4d7acf',
    'bolt': '#9c8c18',
    'physical': '#735129',
    'magic': '#6d2ca3',
  }

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.apiUrl}/A25RW/trait/?lang=${language}&v=${this.version}`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${this.apiUrl}/A25RW/trait/${slug}/?lang=${language}&v=${this.version}`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${this.apiUrl}/A25RW/effect/?lang=${language}&v=${this.version}`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${this.apiUrl}/A25RW/effect/${slug}/?lang=${language}&v=${this.version}`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${this.apiUrl}/A25RW/enemy/?lang=${language}&v=${this.version}`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${this.apiUrl}/A25RW/enemy/${slug}/?lang=${language}&v=${this.version}`);
  }

  getCategoryList(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/A25RW/category/?lang=${language}&v=${this.version}`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/A25RW/category/${slug}/?lang=${language}&v=${this.version}`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/A25RW/item/?lang=${language}&v=${this.version}`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/A25RW/item/${slug}/?lang=${language}&v=${this.version}`);
  }

  getTreeList(language: string): Observable<Trees[]> {
    return this.http.get<Trees[]>(`${this.apiUrl}/A25RW/tree/?lang=${language}&v=${this.version}`);
  }

  getShopList(language: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.apiUrl}/A25RW/shop/?lang=${language}&v=${this.version}`);
  }
}
