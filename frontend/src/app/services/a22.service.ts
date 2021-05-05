import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Trait, Effect, EffectFull, Region, Monster, MonsterFull } from '@app/interfaces/a22';


@Injectable({ providedIn: 'root' })
export class A22Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getTraitList(language: string): Observable<Trait[]> {
      return this.http.get<Trait[]>(`${environment.apiUrl}/A22/trait/${language}/`);
  }

  getTrait(slugname: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A22/trait/${slugname}/${language}/`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A22/effect/${language}/`);
  }

  getEffect(slugname: string, language: string): Observable<EffectFull> {
    return this.http.get<EffectFull>(`${environment.apiUrl}/A22/effect/${slugname}/${language}/`);
  }

  getLocation(slugname: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${environment.apiUrl}/A22/region/${slugname}/${language}/`);
  }

  getMonster(slugname: string, language: string): Observable<MonsterFull> {
    return this.http.get<MonsterFull>(`${environment.apiUrl}/A22/monster/${slugname}/${language}/`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A22/monster/${language}/`);
  }

}