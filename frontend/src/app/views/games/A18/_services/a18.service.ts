import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Race, Trait, Effect, Monster, Category, Item, Shop, RecipeIdeaList, Catalyst } from '@app/views/games/A18/_services/a18.interface'


@Injectable({ providedIn: 'root' })
export class A18Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle = { "en": "Atelier Firis", "ja": "フィリスのアトリエ", "sc": "菲利丝的炼金工房", "tc": "菲莉絲的鍊金工房" };
  public readonly gameURL = "firis";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${environment.apiUrl}/A18/trait/${language}/`);
  }

  getTrait(slugname: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A18/trait/${slugname}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A18/effect/${language}/`);
  }

  getEffect(slugname: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${environment.apiUrl}/A18/effect/${slugname}/${language}/`);
  }

  getRaceList(language: string): Observable<Race[]> {
    return this.http.get<Race[]>(`${environment.apiUrl}/A18/race/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A18/monster/${language}/`);
  }

  getMonster(slugname: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${environment.apiUrl}/A18/monster/${slugname}/${language}/`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A18/item/${language}/`);
  }

  getItem(slugname: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiUrl}/A18/item/${slugname}/${language}/`);
  }

  getCatalystList(language: string): Observable<Catalyst[]> {
    return this.http.get<Catalyst[]>(`${environment.apiUrl}/A18/catalyst/${language}/`);
  }

  getCategoryList(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/A18/category/${language}/`);
  }

  getCategory(slugname: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/A18/category/${slugname}/${language}/`);
  }

  getRecipeList(language: string): Observable<RecipeIdeaList[]> {
    return this.http.get<RecipeIdeaList[]>(`${environment.apiUrl}/A18/recipe/${language}/`);
  }

  getShopList(language: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${environment.apiUrl}/A18/shop/${language}/`);
  }
}