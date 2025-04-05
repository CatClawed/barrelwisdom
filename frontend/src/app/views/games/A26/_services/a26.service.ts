import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Category, Coord, Effect, Item, Monster, NameLink, Trait } from '@app/views/games/A26/_services/a26.interface';


@Injectable({ providedIn: 'root' })
export class A26Service {
  private readonly version = '04-05-25';

  constructor(
    private http: HttpClient,
  ) { }

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
  public readonly itemString = {
    "en": "Items",
    "de": "Gegenstände",
    "fr": "Objets",
    "es": "Objetos",
    "ja": "アイテム",
    "sc": "道具",
    "tc": "道具",
    "ru": "Предметы",
    "ko": "아이템",
  };
  public readonly treasureString = {
    "en": "Treasure Trove",
    "ja": "宝物庫",
    "sc": "宝物库",
    "tc": "寶物庫",
    "de": "Schatzkammer",
    "fr": "Salle aux trésors",
    "ko": "보물고",
    "ru": "Сокровищница",
    "es": "Tesoro oculto"
  };
  public readonly manaGeysterString = {
    "en": "Mana Geyser",
    "ja": "マナ間欠泉",
    "sc": "玛那间歇泉",
    "tc": "瑪那間歇泉",
    "de": "Mana-Geysir",
    "fr": "Geyser de mana",
    "ko": "마나 간헐천",
    "ru": "Гейзер маны",
    "es": "Géiser de maná"
  };
  public readonly particleString = {
    "en": "Particles",
    "ja": "残響片",
    "sc": "余音断片",
    "tc": "餘音斷片",
    "de": "Partikel",
    "fr": "Particules",
    "ko": "잔향입자",
    "ru": "Частицы",
    "es": "Partículas"
  };
  public readonly memoryVialString = {
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
  public readonly monsterString = {
    "en": "Monsters",
    "ja": "魔物",
    "sc": "魔物",
    "tc": "魔物",
    "de": "Monster",
    "fr": "Monstres",
    "ko": "몬스터",
    "ru": "Чудовища",
    "es": "Monstruos"
  }
  public readonly statStrings = {
    "hp": {
      "en": "HP",
      "ja": "体力",
      "sc": "体力",
      "tc": "體力",
      "de": "LP",
      "fr": "PV",
      "ko": "체력",
      "ru": "ОЗ",
      "es": "PS"
    },
    "atk": {
      "en": "ATK",
      "ja": "攻撃力",
      "sc": "攻击力",
      "tc": "攻擊力",
      "de": "ANG",
      "fr": "ATQ",
      "ko": "공격력",
      "ru": "АТК",
      "es": "ATQ"
    },
    "dfn": {
      "en": "DEF",
      "ja": "防御力",
      "sc": "防御力",
      "tc": "防禦力",
      "de": "VRT",
      "fr": "DÉF",
      "ko": "방어력",
      "ru": "ЗЩТ",
      "es": "DEF"
    },
    "spd": {
      "en": "SPD",
      "ja": "素早さ",
      "sc": "敏捷",
      "tc": "敏捷",
      "de": "TMP",
      "fr": "VIT",
      "ko": "민첩성",
      "ru": "СКР",
      "es": "VEL"
    }
  }

  public readonly effectString = {
    "en": "Effects",
    "ja": "効果",
    "sc": "效果",
    "tc": "效果",
    "de": "Effekte",
    "fr": "Effets",
    "ko": "효과",
    "ru": "Эффекты",
    "es": "Efectos"
  }
  public readonly traitString = {
    "en": "Traits",
    "ja": "特性",
    "sc": "特性",
    "tc": "特性",
    "de": "Eigenschaften",
    "fr": "Caract.",
    "ko": "특성",
    "ru": "Черты",
    "es": "Atributos"
  }
  public readonly qualityString = {
    "en": "Quality",
    "ja": "品質",
    "sc": "品质",
    "tc": "品質",
    "de": "Qualität",
    "fr": "Qualité",
    "ko": "품질",
    "ru": "Качество",
    "es": "Calidad"
  }

  public readonly comfortString = {
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

  // other stats also have localizations, this is a pain so maybe later
  public readonly gameURL = "yumia";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  public readonly elements = {
    'air':  '#75ff76',
    'fire': '#fcbc72',
    'ice':  '#7dfffa',
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
