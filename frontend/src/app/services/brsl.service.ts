import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Event, NameLink, SchoolLocation } from '@app/interfaces/brsl';

@Injectable({ providedIn: 'root' })
export class BRSLService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
    constructor(
      private http: HttpClient,
    ) { }

    public readonly gameTitle = "Blue Reflection: Second Light";
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
}