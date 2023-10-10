import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { NameLink, Trait } from '@app/views/games/A25/_services/a25.interface'


@Injectable({ providedIn: 'root' })
export class A25Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle = { "en": "Atelier Resleriana", "ja": "レスレリアーナのアトリエ"};
  public readonly gameURL = "resleri";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getFilter(slugname: string, language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A25/filterable/${slugname}/${language}/`);
  }

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${environment.apiUrl}/A25/trait/${language}/`);
  }

  getTrait(slugname: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A25/trait/${slugname}/${language}/`);
  }
}