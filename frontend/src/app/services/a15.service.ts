import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Property, RegionData, Effect, MonsterList, MonsterFull, Book, ItemList, ItemFull, Category, CategoryData } from '@app/interfaces/a15';

@Injectable({ providedIn: 'root' })
export class A15Service {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = "Atelier Escha & Logy";
    public readonly gameURL = "escha";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;
    
    getPropertyList(language: string): Observable<Property[]> {
      return this.http.get<Property[]>(`${environment.apiUrl}/A15/property/${language}/`);
    }

    getProperty(slugname: string, language: string): Observable<Property> {
      return this.http.get<Property>(`${environment.apiUrl}/A15/property/${slugname}/${language}/`);
    }

    getEffectList(language: string): Observable<Effect[]> {
      return this.http.get<Effect[]>(`${environment.apiUrl}/A15/effect/${language}/`);
    }

    getEffect(slugname: string, language: string): Observable<Effect> {
      return this.http.get<Effect>(`${environment.apiUrl}/A15/effect/${slugname}/${language}/`);
    }

    getMonsterList(language: string): Observable<MonsterList[]> {
      return this.http.get<MonsterList[]>(`${environment.apiUrl}/A15/monster/${language}/`);
    }

    getMonster(slugname: string, language: string): Observable<MonsterFull> {
      return this.http.get<MonsterFull>(`${environment.apiUrl}/A15/monster/${slugname}/${language}/`);
    }

    getBookList(language: string): Observable<Book[]> {
      return this.http.get<Book[]>(`${environment.apiUrl}/A15/book/${language}/`);
    }

    getBook(slugname: string, language: string): Observable<Book> {
      return this.http.get<Book>(`${environment.apiUrl}/A15/book/${slugname}/${language}/`);
    }

    getItemList(language: string): Observable<ItemList[]> {
      return this.http.get<ItemList[]>(`${environment.apiUrl}/A15/item/${language}/`);
    }

    getItem(slugname: string, language: string): Observable<ItemFull> {
      return this.http.get<ItemFull>(`${environment.apiUrl}/A15/item/${slugname}/${language}/`);
    }

    getCategories(language: string): Observable<Category[]> {
      return this.http.get<Category[]>(`${environment.apiUrl}/A15/category/${language}/`);
    }

    getCategory(slugname: string, language: string): Observable<CategoryData> {
      return this.http.get<CategoryData>(`${environment.apiUrl}/A15/category/${slugname}/${language}/`);
    }

    getRegion(slugname: string, language: string): Observable<RegionData> {
      return this.http.get<RegionData>(`${environment.apiUrl}/A15/regiondata/${slugname}/${language}/`);
    }
    
}