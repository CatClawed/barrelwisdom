import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Book, Category, Effect, Item, MajorGather, Monster, RecipeIdea, Region, Seed, Trait } from '@app/views/games/A23/_services/a23.interface';
import { environment } from '@environments/environment';
import { category_translation, character_translation, details_translation, effect_translation, filter_translation, ingredient_translation, item_translation, level_translation, location_translation, monster_translation, race_translation, recipebook_translation, shop_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A23Service {
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
  public readonly details_translation = details_translation
  public readonly level_translation = level_translation
  public readonly shop_translation = shop_translation

  public readonly component_translation = {
    "en": "Components",
    "ja": "錬金成分",
    "sc": "炼金成分",
    "tc": "鍊金成分",
    "ko": "연금성분",
  }

  public readonly recipeidea_translation = {
    "en": "Recipe Idea",
    "ja": "レシピ発想",
    "sc": "构思配方",
    "tc": "構思配方",
    "ko": "레시피 발상",
  }

  public readonly seed_translation = {
    "en": "Seed",
    "ja": "種",
    "sc": "种子",
    "tc": "種子",
    "ko": "씨앗",
  }

  public readonly majorgathering_translation = {
    "en": "Major Gathering Spots",
    "ja": "大採取",
    "sc": "大采集",
    "tc": "大採集",
    "ko": "대채집",
  }

  public readonly gameTitle = { "en": "Atelier Sophie 2", "ja": "ソフィーのアトリエ２", "ko": "소피의 아틀리에2", "sc": "苏菲的炼金工房２", "tc": "蘇菲的鍊金工房２" };
  public readonly gameURL = "sophie2";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.apiUrl}/A23/trait/${language}/`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${this.apiUrl}/A23/trait/${slug}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${this.apiUrl}/A23/effect/${language}/`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${this.apiUrl}/A23/effect/${slug}/${language}/`);
  }

  getLocation(slug: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/A23/region/${slug}/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${this.apiUrl}/A23/monster/${language}/`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${this.apiUrl}/A23/monster/${slug}/${language}/`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/A23/item/${language}/`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/A23/item/${slug}/${language}/`);
  }

  getBook(slug: string, language: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/A23/book/${slug}/${language}/`);
  }

  getCategoryList(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/A23/category/${language}/`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/A23/category/${slug}/${language}/`);
  }

  getRecipeList(language: string): Observable<RecipeIdea[]> {
    return this.http.get<RecipeIdea[]>(`${this.apiUrl}/A23/recipe/${language}/`);
  }

  getMajorGather(language: string): Observable<MajorGather> {
    return this.http.get<MajorGather>(`${this.apiUrl}/A23/majorgather/${language}/`);
  }

  getSeeds(language: string): Observable<Seed[]> {
    return this.http.get<Seed[]>(`${this.apiUrl}/A23/seed/${language}/`);
  }

}