import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { AreaData, Book, Category, CategoryData, Effect, ItemFull, ItemList, MonsterFull, MonsterList, Property } from '@app/views/games/A16/_services/a16.interface';
import { environment } from '@environments/environment';
import { category_translation, character_translation, effect_translation, filter_translation, ingredient_translation, item_translation, level_translation, location_translation, monster_translation, properties_translation, recipebook_translation } from '@environments/localization';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class A16Service {
  private apiUrl = getApiUrl();
  constructor(
    private http: HttpClient,
  ) { }

  public readonly item_translation = item_translation
  public readonly monster_translation = monster_translation
  public readonly properties_translation = properties_translation
  public readonly category_translation = category_translation
  public readonly filter_translation = filter_translation
  public readonly location_translation = location_translation
  public readonly recipebook_translation = recipebook_translation
  public readonly ingredient_translation = ingredient_translation
  public readonly level_translation = level_translation
  public readonly character_translation = character_translation
  public readonly effect_translation = effect_translation

  public readonly gameTitle = { "en": "Atelier Shallie", "ja": "シャリーのアトリエ" };
  public readonly gameURL = "shallie";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getPropertyList(language: string): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}/A16/property/${language}/`);
  }

  getProperty(slug: string, language: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/A16/property/${slug}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${this.apiUrl}/A16/effect/${language}/`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${this.apiUrl}/A16/effect/${slug}/${language}/`);
  }

  getMonsterList(language: string): Observable<MonsterList[]> {
    return this.http.get<MonsterList[]>(`${this.apiUrl}/A16/monster/${language}/`);
  }

  getMonster(slug: string, language: string): Observable<MonsterFull> {
    return this.http.get<MonsterFull>(`${this.apiUrl}/A16/monster/${slug}/${language}/`);
  }

  getBookList(language: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/A16/book/${language}/`);
  }

  getBook(slug: string, language: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/A16/book/${slug}/${language}/`);
  }

  getItemList(language: string): Observable<ItemList[]> {
    return this.http.get<ItemList[]>(`${this.apiUrl}/A16/item/${language}/`);
  }

  getItem(slug: string, language: string): Observable<ItemFull> {
    return this.http.get<ItemFull>(`${this.apiUrl}/A16/item/${slug}/${language}/`);
  }

  getCategories(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/A16/category/${language}/`);
  }

  getCategory(slug: string, language: string): Observable<CategoryData> {
    return this.http.get<CategoryData>(`${this.apiUrl}/A16/category/${slug}/${language}/`);
  }

  getRegion(slug: string, language: string): Observable<AreaData> {
    return this.http.get<AreaData>(`${this.apiUrl}/A16/area/${slug}/${language}/`);
  }

}