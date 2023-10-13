import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { NameLink, Trait, Item, RecipeList, Character } from '@app/views/games/A25/_services/a25.interface'


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

  getMaterialList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A25/material/${language}/`);
  }

  getMaterial(slugname: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiUrl}/A25/material/${slugname}/${language}/`);
  }

  getSynthList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A25/synth/${language}/`);
  }

  getSynth(slugname: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiUrl}/A25/synth/${slugname}/${language}/`);
  }

  getRecipeList(language: string): Observable<RecipeList[]> {
    return this.http.get<RecipeList[]>(`${environment.apiUrl}/A25/recipe/${language}/`);
  }

  getCharaList(language: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}/A25/character/${language}/`);
  }

  getChara(slugname: string, language: string): Observable<Character> {
    return this.http.get<Character>(`${environment.apiUrl}/A25/character/${slugname}/${language}/`);
  }
}