import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Catalyst, Category, Effect, Item, Monster, Race, RecipeIdeaList, Shop, Trait } from '@app/views/games/A18/_services/a18.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A18Service {
  private apiUrl = getApiUrl();
  constructor(
    private http: HttpClient,
  ) { }

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