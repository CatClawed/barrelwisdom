import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Property, RegionData, Effect, MonsterList, MonsterFull, Book, ItemList, ItemFull, Category, CategoryData } from '@app/views/games/A15/_services/a15.interface';

@Injectable({ providedIn: 'root' })
export class A15Service {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = {"en": "Atelier Escha & Logy", "ja":"エスカ＆ロジーのアトリエ"};
    public readonly gameURL = "escha";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;
    
    getPropertyList(language: string): Observable<Property[]> {
      return this.http.get<Property[]>(`${environment.apiUrl}/A15/property/${language}/`);
    }

    getProperty(slug: string, language: string): Observable<Property> {
      return this.http.get<Property>(`${environment.apiUrl}/A15/property/${slug}/${language}/`);
    }

    getEffectList(language: string): Observable<Effect[]> {
      return this.http.get<Effect[]>(`${environment.apiUrl}/A15/effect/${language}/`);
    }

    getEffect(slug: string, language: string): Observable<Effect> {
      return this.http.get<Effect>(`${environment.apiUrl}/A15/effect/${slug}/${language}/`);
    }

    getMonsterList(language: string): Observable<MonsterList[]> {
      return this.http.get<MonsterList[]>(`${environment.apiUrl}/A15/monster/${language}/`);
    }

    getMonster(slug: string, language: string): Observable<MonsterFull> {
      return this.http.get<MonsterFull>(`${environment.apiUrl}/A15/monster/${slug}/${language}/`);
    }

    getBookList(language: string): Observable<Book[]> {
      return this.http.get<Book[]>(`${environment.apiUrl}/A15/book/${language}/`);
    }

    getBook(slug: string, language: string): Observable<Book> {
      return this.http.get<Book>(`${environment.apiUrl}/A15/book/${slug}/${language}/`);
    }

    getItemList(language: string): Observable<ItemList[]> {
      return this.http.get<ItemList[]>(`${environment.apiUrl}/A15/item/${language}/`);
    }

    getItem(slug: string, language: string): Observable<ItemFull> {
      return this.http.get<ItemFull>(`${environment.apiUrl}/A15/item/${slug}/${language}/`);
    }

    getCategories(language: string): Observable<Category[]> {
      return this.http.get<Category[]>(`${environment.apiUrl}/A15/category/${language}/`);
    }

    getCategory(slug: string, language: string): Observable<CategoryData> {
      return this.http.get<CategoryData>(`${environment.apiUrl}/A15/category/${slug}/${language}/`);
    }

    getRegion(slug: string, language: string): Observable<RegionData> {
      return this.http.get<RegionData>(`${environment.apiUrl}/A15/regiondata/${slug}/${language}/`);
    }
    
}