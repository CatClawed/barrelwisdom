import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Item, Demon, Mission, FragmentEffect, Skill } from '@app/views/games/BR1/_services/br1.interface';

@Injectable({ providedIn: 'root' })
export class BR1Service {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = {"en": "Blue Reflection"};
    public readonly gameURL = "bluereflection";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;
    
    getItemList(language: string): Observable<Item[]> {
      return this.http.get<Item[]>(`${environment.apiUrl}/BR1/item/${language}/`);
    }

    getItem(slug: string, language: string): Observable<Item> {
      return this.http.get<Item>(`${environment.apiUrl}/BR1/item/${slug}/${language}/`);
    }

    getDemonList(language: string): Observable<Demon[]> {
      return this.http.get<Demon[]>(`${environment.apiUrl}/BR1/demon/${language}/`);
    }
    
    getDemon(slug: string, language: string): Observable<Demon> {
      return this.http.get<Demon>(`${environment.apiUrl}/BR1/demon/${slug}/${language}/`);
    }

    getMissionList(language: string): Observable<Mission[]> {
      return this.http.get<Mission[]>(`${environment.apiUrl}/BR1/mission/${language}/`);
    }

    getFragmentEffectList(language: string): Observable<FragmentEffect[]> {
      return this.http.get<FragmentEffect[]>(`${environment.apiUrl}/BR1/fragment/${language}/`);
    }

    getSkillList(language: string): Observable<Skill[]> {
      return this.http.get<Skill[]>(`${environment.apiUrl}/BR1/skill/${language}/`);
    }
}