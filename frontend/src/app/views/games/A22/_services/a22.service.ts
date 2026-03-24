import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { CategoryItem, Effect, Item, ItemFull, Monster, MonsterFull, NameLink, Region, ShopDevelop, Trait } from '@app/views/games/A22/_services/a22.interface';
import { environment } from '@environments/environment';
import { category_translation, character_translation, effect_translation, filter_translation, ingredient_translation, item_translation, level_translation, location_translation, monster_translation, race_translation, recipebook_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A22Service {
  private apiUrl = getApiUrl();
  constructor(
    private http: HttpClient,
  ) { }

  public readonly item_translation = item_translation
  public readonly monster_translation = monster_translation
  public readonly effect_translation = effect_translation
  public readonly trait_translation = trait_translation
  public readonly category_translation = category_translation
  public readonly filter_translation = filter_translation
  public readonly race_translation = race_translation
  public readonly character_translation = character_translation
  public readonly location_translation = location_translation
  public readonly ingredient_translation = ingredient_translation
  public readonly recipebook_translation = recipebook_translation
  public readonly level_translation = level_translation

  public readonly eveffect_translation = {
    "en": "EV Effects",
    "ja": "EV効果",
    "sc": "EV效果",
    "tc": "EV效果",
    "ko": "EV효과",
    "fr": "Effets EV"
  }
  public readonly forgeeffect_translation = {
    "en": "Forge Effects",
    "ja": "効果 (Forge)",
    "sc": "效果 (Forge)",
    "tc": "效果 (Forge)",
    "fr": "Effets de forge",
    "ko": "효과 (Forge)",
  }
  public readonly develop_translation = {
    "en": "Shop Development",
    "ja": "開発",
    "sc": "开发",
    "tc": "開發",
    "fr": "Développement",
    "ko": "개발",
  }


  public readonly gameTitle ={"en": "Atelier Ryza 2", "fr":"Atelier Ryza 2", "ja":"ライザのアトリエ２", "ko":"라이자의 아틀리에2", "sc":"莱莎的炼金工房２", "tc":"萊莎的鍊金工房２"};
  public readonly gameURL = "ryza2";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${this.apiUrl}/A22/trait/${language}/`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${this.apiUrl}/A22/trait/${slug}/${language}/`);
  }

  getEffectList(language: string, ev: boolean, forge: boolean): Observable<Effect[]> {
    if (ev) {
      return this.http.get<Effect[]>(`${this.apiUrl}/A22/eveffect/${language}/`);
    }
    if (forge) {
      return this.http.get<Effect[]>(`${this.apiUrl}/A22/forgeeffect/${language}/`);
    }
    return this.http.get<Effect[]>(`${this.apiUrl}/A22/effect/${language}/`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${this.apiUrl}/A22/effect/${slug}/${language}/`);
  }

  getLocation(slug: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/A22/region/${slug}/${language}/`);
  }

  getMonster(slug: string, language: string): Observable<MonsterFull> {
    return this.http.get<MonsterFull>(`${this.apiUrl}/A22/monster/${slug}/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${this.apiUrl}/A22/monster/${language}/`);
  }

  getItem(slug: string, language: string): Observable<ItemFull> {
    return this.http.get<ItemFull>(`${this.apiUrl}/A22/item/${slug}/${language}/`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/A22/item/${language}/`);
  }

  getCategoryItem(slug: string, language: string): Observable<CategoryItem> {
    return this.http.get<CategoryItem>(`${this.apiUrl}/A22/category/${slug}/${language}/`);
  }

  getCategoryList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${this.apiUrl}/A22/category/${language}/`);
  }

  getShopDevList(language: string): Observable<ShopDevelop[]> {
    return this.http.get<ShopDevelop[]>(`${this.apiUrl}/A22/shopdevelop/${language}/`);
  }

}