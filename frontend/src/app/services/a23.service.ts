import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Trait, Effect, Region, Monster, Category, Item, Book } from '@app/interfaces/a23';


@Injectable({ providedIn: 'root' })
export class A23Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle ={"en": "Atelier Sophie 2", "ja":"ソフィーのアトリエ２", "ko":"소피의 아틀리에2", "sc":"苏菲的炼金工房２", "tc":"蘇菲的鍊金工房２"};
  public readonly gameURL = "sophie2"; 
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${environment.apiUrl}/A23/trait/${language}/`);
  }

  getTrait(slugname: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A23/trait/${slugname}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A23/effect/${language}/`);
  }

  getEffect(slugname: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${environment.apiUrl}/A23/effect/${slugname}/${language}/`);
  }

  getLocation(slugname: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${environment.apiUrl}/A23/region/${slugname}/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A23/monster/${language}/`);
  }
  
  getMonster(slugname: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${environment.apiUrl}/A23/monster/${slugname}/${language}/`);
}

getItemList(language: string): Observable<Item[]> {
  return this.http.get<Item[]>(`${environment.apiUrl}/A23/item/${language}/`);
}

getItem(slugname: string, language: string): Observable<Item> {
  return this.http.get<Item>(`${environment.apiUrl}/A23/item/${slugname}/${language}/`);
}

getBook(slugname: string, language: string): Observable<Book> {
  return this.http.get<Book>(`${environment.apiUrl}/A23/book/${slugname}/${language}/`);
}

getCategoryList(language: string): Observable<Category[]> {
  return this.http.get<Category[]>(`${environment.apiUrl}/A23/category/${language}/`);
}

getCategory(slugname: string, language: string): Observable<Category> {
  return this.http.get<Category>(`${environment.apiUrl}/A23/category/${slugname}/${language}/`);
}

}