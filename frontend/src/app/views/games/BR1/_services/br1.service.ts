import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Demon, FragmentEffect, Item, Mission, Skill } from '@app/views/games/BR1/_services/br1.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BR1Service {
  private apiUrl = getApiUrl()
  constructor(
    private http: HttpClient,
  ) { }

  public readonly gameTitle = { "en": "Blue Reflection" };
  public readonly gameURL = "bluereflection";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getItemList(language: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/BR1/item/${language}/`);
  }

  getItem(slug: string, language: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/BR1/item/${slug}/${language}/`);
  }

  getDemonList(language: string): Observable<Demon[]> {
    return this.http.get<Demon[]>(`${this.apiUrl}/BR1/demon/${language}/`);
  }

  getDemon(slug: string, language: string): Observable<Demon> {
    return this.http.get<Demon>(`${this.apiUrl}/BR1/demon/${slug}/${language}/`);
  }

  getMissionList(language: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/BR1/mission/${language}/`);
  }

  getFragmentEffectList(language: string): Observable<FragmentEffect[]> {
    return this.http.get<FragmentEffect[]>(`${this.apiUrl}/BR1/fragment/${language}/`);
  }

  getSkillList(language: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/BR1/skill/${language}/`);
  }
}