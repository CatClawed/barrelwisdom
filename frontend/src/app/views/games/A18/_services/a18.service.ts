import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Catalyst, Category, Effect, Item, Monster, Race, RecipeIdeaList, Shop, Trait } from '@app/views/games/A18/_services/a18.interface';
import { environment } from '@environments/environment';
import { catalyst_translation, category_translation, character_translation, details_translation, drop_translation, effect_translation, filter_translation, ingredient_translation, item_translation, level_translation, location_translation, monster_translation, race_translation, recipe_ideas_translation, recipebook_translation, shop_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A18Service {
  private apiUrl = getApiUrl();
  constructor(
    private http: HttpClient,
  ) { }

  public readonly details_translation = details_translation
  public readonly filter_translation = filter_translation
  public readonly recipe_ideas_translation = recipe_ideas_translation
  public readonly item_translation = item_translation
  public readonly effect_translation = effect_translation
  public readonly trait_translation = trait_translation
  public readonly monster_translation = monster_translation
  public readonly catalyst_translation = catalyst_translation
  public readonly shop_translation = shop_translation
  public readonly category_translation = category_translation
  public readonly ingredient_translation = ingredient_translation
  public readonly location_translation = location_translation
  public readonly recipebook_translation = recipebook_translation
  public readonly character_translation = character_translation
  public readonly drop_translation = drop_translation
  public readonly race_translation = race_translation
  public readonly level_translation = level_translation

  public readonly gameTitle = { "en": "Atelier Firis", "ja": "フィリスのアトリエ", "sc": "菲利丝的炼金工房", "tc": "菲莉絲的鍊金工房" };
  public readonly gameURL = "firis";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.apiUrl}/A18/trait/${language}/`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${this.apiUrl}/A18/trait/${slug}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${this.apiUrl}/A18/effect/${language}/`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${this.apiUrl}/A18/effect/${slug}/${language}/`);
  }

  getRaceList(language: string): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.apiUrl}/A18/race/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${this.apiUrl}/A18/monster/${language}/`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${this.apiUrl}/A18/monster/${slug}/${language}/`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/A18/item/${language}/`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/A18/item/${slug}/${language}/`);
  }

  getCatalystList(language: string): Observable<Catalyst[]> {
    return this.http.get<Catalyst[]>(`${this.apiUrl}/A18/catalyst/${language}/`);
  }

  getCategoryList(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/A18/category/${language}/`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/A18/category/${slug}/${language}/`);
  }

  getRecipeList(language: string): Observable<RecipeIdeaList[]> {
    return this.http.get<RecipeIdeaList[]>(`${this.apiUrl}/A18/recipe/${language}/`);
  }

  getShopList(language: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.apiUrl}/A18/shop/${language}/`);
  }
}