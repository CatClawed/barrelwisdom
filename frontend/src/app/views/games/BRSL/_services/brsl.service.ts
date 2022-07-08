import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Event, Unit, NameLink, NameOnly, SchoolLocation, DemonList, DemonFull, ItemList, ItemFull, FacilityFull, FacilityList, FacilitySet, Skill, Region } from '@app/views/games/BRSL/_services/brsl.interface';

@Injectable({ providedIn: 'root' })
export class BRSLService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = {"en": "Blue Reflection: Second Light", "ja":"BLUE REFLECTION TIE/帝", "sc":"BLUE REFLECTION: 帝", "tc":"BLUE REFLECTION: 帝"};
    public readonly gameURL = "second-light";
    public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

    getFragmentList(language: string): Observable<Event[]> {
      return this.http.get<Event[]>(`${environment.apiUrl}/BRSL/fragment/${language}/`);
    }

    getCharacterList(language: string): Observable<NameLink[]> {
      return this.http.get<NameLink[]>(`${environment.apiUrl}/BRSL/character/${language}/`);
    }

    getSchoolLocationList(language: string): Observable<SchoolLocation[]> {
      return this.http.get<SchoolLocation[]>(`${environment.apiUrl}/BRSL/schoollocation/${language}/`);
    }

    getDemonList(language: string): Observable<DemonList[]> {
      return this.http.get<DemonList[]>(`${environment.apiUrl}/BRSL/demon/${language}/`);
    }

    getDemon(slugname: string, language: string): Observable<DemonFull> {
      return this.http.get<DemonFull>(`${environment.apiUrl}/BRSL/demon/${slugname}/${language}/`);
    }

    getItemList(language: string): Observable<ItemList[]> {
      return this.http.get<ItemList[]>(`${environment.apiUrl}/BRSL/item/${language}/`);
    }

    getItem(slugname: string, language: string): Observable<ItemFull> {
      return this.http.get<ItemFull>(`${environment.apiUrl}/BRSL/item/${slugname}/${language}/`);
    }

    getCategoryList(language: string): Observable<NameOnly[]> {
      return this.http.get<NameOnly[]>(`${environment.apiUrl}/BRSL/category/${language}/`);
    }

    getUnit(language: string): Observable<Unit[]> {
      return this.http.get<Unit[]>(`${environment.apiUrl}/BRSL/unit/${language}/`);
    }

    getFacilityList(language: string): Observable<FacilityList[]> {
      return this.http.get<FacilityList[]>(`${environment.apiUrl}/BRSL/facility/${language}/`);
    }

    getFacility(slugname: string, language: string): Observable<FacilityFull> {
      return this.http.get<FacilityFull>(`${environment.apiUrl}/BRSL/facility/${slugname}/${language}/`);
    }

    getFacilitySetList(language: string): Observable<FacilitySet[]> {
      return this.http.get<FacilitySet[]>(`${environment.apiUrl}/BRSL/facilityset/${language}/`);
    }

    getSkillList(language: string): Observable<Skill[]> {
      return this.http.get<Skill[]>(`${environment.apiUrl}/BRSL/skill/${language}/`);
    }

    getRegion(slugname: string, language: string): Observable<Region> {
      return this.http.get<Region>(`${environment.apiUrl}/BRSL/region/${slugname}/${language}/`);
    }
    
}