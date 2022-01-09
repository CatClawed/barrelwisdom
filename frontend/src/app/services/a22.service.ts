import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Trait, Effect, EffectFull, Region, Monster, MonsterFull, Item, ItemFull, Name, CategoryItem, ShopDevelop } from '@app/interfaces/a22';


@Injectable({ providedIn: 'root' })
export class A22Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle = "Atelier Ryza 2";
  public readonly gameURL = "ryza2"; 
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${environment.apiUrl}/A22/trait/${language}/`);
  }

  getTrait(slugname: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A22/trait/${slugname}/${language}/`);
  }

  getEffectList(language: string, ev: boolean, forge: boolean): Observable<Effect[]> {
    if (ev) {
      return this.http.get<Effect[]>(`${environment.apiUrl}/A22/eveffect/${language}/`);
    }
    if (forge) {
      return this.http.get<Effect[]>(`${environment.apiUrl}/A22/forgeeffect/${language}/`);
    }
    return this.http.get<Effect[]>(`${environment.apiUrl}/A22/effect/${language}/`);
  }

  getEffect(slugname: string, language: string): Observable<EffectFull> {
    return this.http.get<EffectFull>(`${environment.apiUrl}/A22/effect/${slugname}/${language}/`);
  }

  getLocation(slugname: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${environment.apiUrl}/A22/region/${slugname}/${language}/`);
  }

  getMonster(slugname: string, language: string): Observable<MonsterFull> {
    return this.http.get<MonsterFull>(`${environment.apiUrl}/A22/monster/${slugname}/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A22/monster/${language}/`);
  }

  getItem(slugname: string, language: string): Observable<ItemFull> {
    return this.http.get<ItemFull>(`${environment.apiUrl}/A22/item/${slugname}/${language}/`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A22/item/${language}/`);
  }

  getCategoryItem(slugname: string, language: string): Observable<CategoryItem> {
    return this.http.get<CategoryItem>(`${environment.apiUrl}/A22/category/${slugname}/${language}/`);
  }

  getCategoryList(language: string): Observable<Name[]> {
    return this.http.get<Name[]>(`${environment.apiUrl}/A22/category/${language}/`);
  }

  getShopDevList(language: string): Observable<ShopDevelop[]> {
    return this.http.get<ShopDevelop[]>(`${environment.apiUrl}/A22/shopdevelop/${language}/`);
  }

}