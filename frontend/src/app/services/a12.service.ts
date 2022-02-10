import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Trait, AreaData, Effect, MonsterList, MonsterFull, Book, ItemList, ItemFull, Category, CategoryData } from '@app/interfaces/a12';
import {AppComponent} from '@app/app.component';

@Injectable({ providedIn: 'root' })
export class A12Service {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      absolute = ""
    
    constructor(
      private http: HttpClient,
    ) {
      AppComponent.isBrowser.subscribe(isBrowser => {
        if (!isBrowser) {
          this.absolute = 'http://localhost:8000'
        }
      });
    }

    public readonly gameTitle = {"en": "Atelier Totori", "ja":"トトリのアトリエ"};
    public readonly gameURL = "totori";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;
    
    getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${environment.apiUrl}/A12/trait/${language}/`);
    }

    getTrait(slugname: string, language: string): Observable<Trait> {
      return this.http.get<Trait>(`${environment.apiUrl}/A12/trait/${slugname}/${language}/`);
    }

    getEffectList(language: string): Observable<Effect[]> {
      return this.http.get<Effect[]>(`${environment.apiUrl}/A12/effect/${language}/`);
    }

    getEffect(slugname: string, language: string): Observable<Effect> {
      return this.http.get<Effect>(`${environment.apiUrl}/A12/effect/${slugname}/${language}/`);
    }

    getMonsterList(language: string): Observable<MonsterList[]> {
      return this.http.get<MonsterList[]>(`${environment.apiUrl}/A12/monster/${language}/`);
    }

    getMonster(slugname: string, language: string): Observable<MonsterFull> {
      return this.http.get<MonsterFull>(`${environment.apiUrl}/A12/monster/${slugname}/${language}/`);
    }

    getBookList(language: string): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.absolute}${environment.apiUrl}/A12/book/${language}/`);
    }

    getBook(slugname: string, language: string): Observable<Book> {
      return this.http.get<Book>(`${environment.apiUrl}/A12/book/${slugname}/${language}/`);
    }

    getItemList(language: string): Observable<ItemList[]> {
      return this.http.get<ItemList[]>(`${this.absolute}${environment.apiUrl}/A12/item/${language}/`);
    }

    getItem(slugname: string, language: string): Observable<ItemFull> {
      return this.http.get<ItemFull>(`${environment.apiUrl}/A12/item/${slugname}/${language}/`);
    }

    getCategories(language: string): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.absolute}${environment.apiUrl}/A12/category/${language}/`);
    }

    getCategory(slugname: string, language: string): Observable<CategoryData> {
      return this.http.get<CategoryData>(`${environment.apiUrl}/A12/category/${slugname}/${language}/`);
    }

    getRegion(slugname: string, language: string): Observable<AreaData> {
      return this.http.get<AreaData>(`${environment.apiUrl}/A12/area/${slugname}/${language}/`);
    }
    
}