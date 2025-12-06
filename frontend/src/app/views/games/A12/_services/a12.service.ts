import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { AreaData, Book, Category, CategoryData, Effect, ItemFull, ItemList, MonsterFull, MonsterList, Trait } from '@app/views/games/A12/_services/a12.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class A12Service {
  private apiUrl = getApiUrl()
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = {"en": "Atelier Totori", "ja":"トトリのアトリエ"};
    public readonly gameURL = "totori";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

    getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${this.apiUrl}/A12/trait/${language}/`);
    }

    getTrait(slug: string, language: string): Observable<Trait> {
      return this.http.get<Trait>(`${this.apiUrl}/A12/trait/${slug}/${language}/`);
    }

    getEffectList(language: string): Observable<Effect[]> {
      return this.http.get<Effect[]>(`${this.apiUrl}/A12/effect/${language}/`);
    }

    getEffect(slug: string, language: string): Observable<Effect> {
      return this.http.get<Effect>(`${this.apiUrl}/A12/effect/${slug}/${language}/`);
    }

    getMonsterList(language: string): Observable<MonsterList[]> {
      return this.http.get<MonsterList[]>(`${this.apiUrl}/A12/monster/${language}/`);
    }

    getMonster(slug: string, language: string): Observable<MonsterFull> {
      return this.http.get<MonsterFull>(`${this.apiUrl}/A12/monster/${slug}/${language}/`);
    }

    getBookList(language: string): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.apiUrl}/A12/book/${language}/`);
    }

    getBook(slug: string, language: string): Observable<Book> {
      return this.http.get<Book>(`${this.apiUrl}/A12/book/${slug}/${language}/`);
    }

    getItemList(language: string): Observable<ItemList[]> {
      return this.http.get<ItemList[]>(`${this.apiUrl}/A12/item/${language}/`);
    }

    getItem(slug: string, language: string): Observable<ItemFull> {
      return this.http.get<ItemFull>(`${this.apiUrl}/A12/item/${slug}/${language}/`);
    }

    getCategories(language: string): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.apiUrl}/A12/category/${language}/`);
    }

    getCategory(slug: string, language: string): Observable<CategoryData> {
      return this.http.get<CategoryData>(`${this.apiUrl}/A12/category/${slug}/${language}/`);
    }

    getRegion(slug: string, language: string): Observable<AreaData> {
      return this.http.get<AreaData>(`${this.apiUrl}/A12/area/${slug}/${language}/`);
    }

}