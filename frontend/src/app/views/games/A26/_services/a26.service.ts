import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Coord, Effect, Item, Monster, NameLink, Trait } from '@app/views/games/A26/_services/a26.interface';
import { environment } from '@environments/environment';
import { category_translation, effect_translation, filter_translation, item_translation, monster_translation, quality_translation, race_translation, stat_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A26Service {
  private readonly version = '04-10-25';

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
  public readonly quality_translation = quality_translation

  public readonly gameTitle = {
    "en": "Atelier Yumia",
    "de": "Atelier Yumia",
    "fr": "Atelier Yumia",
    "es": "Atelier Yumia",
    "ja": "ユミアのアトリエ",
    "sc": "优米雅的炼金工房",
    "tc": "優米雅的鍊金工房",
    "ru": "Ателье Юмия",
    "ko": "유미아의 아틀리에",
  };

  public readonly memoryvial_translation = {
    "en": "Memory Vial Map",
    "ja": "伝想器",
    "sc": "传忆器",
    "tc": "傳憶器",
    "de": "Erinnerungsphiole",
    "fr": "Fiole de mémoire",
    "ko": "전상기",
    "ru": "Сосуд памяти",
    "es": "Vial de recuerdos"
  }

  public readonly sp_translation = {
    "en": "SP",
    "ja": "SP",
    "sc": "SP",
    "tc": "SP",
    "de": "FP",
    "fr": "PC",
    "ko": "SP",
    "ru": "ОН",
    "es": "PH"
  }

  public readonly comfort_translation = {
    "en": "Comfort Level:",
    "ja": "快適度：",
    "sc": "舒适度：",
    "tc": "舒適度：",
    "de": "Komfortstufe:",
    "fr": "Niveau de confort:",
    "ko": "쾌적도：",
    "ru": "Уровень удобства:",
    "es": "Nivel de comodidad:"
  }

  public readonly material_translation = {
    "en": "Materials",
    "ja": "資材",
    "sc": "原材料",
    "tc": "原材料",
    "de": "Materialien",
    "fr": "Matériaux",
    "ko": "자재",
    "ru": "Материалы",
    "es": "Materiales"
  }

  public readonly blending_translation = {
    "en": "Trait Blending",
    "ja": "特性合成",
    "sc": "特性合成",
    "tc": "特性合成",
    "de": "Eigenschaftenverschmelzung",
    "fr": "Mélange de caractéristiques",
    "ko": "특성합성",
    "ru": "Смешение",
    "es": "Mezcla de atributos"
  }

  public readonly inner_translation = {
    "en": "Inner Range",
    "ja": "インレンジ",
    "sc": "近距离",
    "tc": "近距離",
    "de": "Innere Reichweite",
    "fr": "À courte portée",
    "ko": "근거리",
    "ru": "Ближнее расстояние",
    "es": "Alcance cercano"
  }

  public readonly outer_translation = {
    "en": "Outer Range",
    "ja": "アウトレンジ",
    "sc": "远距离",
    "tc": "遠距離",
    "de": "Äußere Reichweite",
    "fr": "À longue portée",
    "ko": "원거리",
    "ru": "Дальнее расстояние",
    "es": "Alcance exterior"
  }

  // other stats also have localizations, this is a pain so maybe later
  public readonly gameURL = "yumia";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  public readonly elements = {
    'air': '#75ff76',
    'fire': '#fcbc72',
    'ice': '#7dfffa',
    'bolt': '#ffff7b',
    'none': '#969696'
  }

  getMemoryVials(): Observable<Coord[]> {
    return this.http.get<Coord[]>(`${environment.apiUrl}/A26/memory-vials/?v=${this.version}`);
  }

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${environment.apiUrl}/A26/trait/${language}/?v=${this.version}`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A26/trait/${slug}/${language}/?v=${this.version}`);
  }

  getRaceList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/race/${language}/?v=${this.version}`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A26/monster/${language}/?v=${this.version}`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${environment.apiUrl}/A26/monster/${slug}/${language}/?v=${this.version}`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A26/effect/${language}/?v=${this.version}`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${environment.apiUrl}/A26/effect/${slug}/${language}/?v=${this.version}`);
  }

  getCategoryList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/category/${language}/?v=${this.version}`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/A26/category/${slug}/${language}/?v=${this.version}`);
  }

  getMaterialList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/material/${language}/?v=${this.version}`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A26/item/${language}/?v=${this.version}`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiUrl}/A26/item/${slug}/${language}/?v=${this.version}`);
  }
}
