import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Category, Effect, Item, Monster, NameLink, Trait } from '@app/views/games/A26/_services/a26.interface';


@Injectable({ providedIn: 'root' })
export class A26Service {
  private readonly version = '1';

  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle = {
    "en": "Atelier Yumia",
    "de": "Atelier Yumia",
    "fr": "Atelier Yumia",
    "es": "Atelier Yumia",
    "ja": "ユミアのアトリエ",
    "sc": "优米雅的炼金工房",
    "tc": "優米雅的鍊金工房",
    "ru": "Ателье Юмия",
    "ko": "유미아의 아틀리에",
  };
  // other stats also have localizations, this is a pain so maybe later
  public readonly gameURL = "yumia";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  public readonly elements = {
    'air':  '#3b853d',
    'fire': '#b23e36',
    'ice':  '#2089bc',
    'bolt': '#9e8a1a',
  }

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${environment.apiUrl}/A26/trait/${language}/?v=${this.version}`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A26/trait/${slug}/${language}/?v=${this.version}`);
  }

  getRaceList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/race/${language}/?v=${this.version}`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A26/monster/${language}/?v=${this.version}`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${environment.apiUrl}/A26/monster/${slug}/${language}/?v=${this.version}`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A26/effect/${language}/?v=${this.version}`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${environment.apiUrl}/A26/effect/${slug}/${language}/?v=${this.version}`);
  }

  getCategoryList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/category/${language}/?v=${this.version}`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/A26/category/${slug}/${language}/?v=${this.version}`);
  }

  getMaterialList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${environment.apiUrl}/A26/material/${language}/?v=${this.version}`);
  }

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/A26/item/${language}/?v=${this.version}`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiUrl}/A26/item/${slug}/${language}/?v=${this.version}`);
  }
}
