import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { DemonFull, DemonList, Event, FacilityFull, FacilityList, FacilitySet, ItemFull, ItemList, NameLink, NameOnly, Region, SchoolLocation, Skill, Unit } from '@app/views/games/BRSL/_services/brsl.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BRSLService {
  private apiUrl = getApiUrl()
  constructor(
    private http: HttpClient,
  ) { }

  public readonly fragments_translation = {
    "en": "Fragments",
    "ja": "フラグメント",
    "sc": "意念碎片",
    "tc": "意念碎片"
  };

  public readonly dates_translation = {
    "en": "Dates",
    "ja": "デート",
    "sc": "约会",
    "tc": "約會"
  };

  public readonly fragments_dates_translation = {
    "en": "Fragments & Dates",
    "ja": "フラグメント & デート",
    "sc": "意念碎片 & 约会",
    "tc": "意念碎片 & 約會"
  };

  public readonly demons_translation = {
    "en": "Demons",
    "ja": "モンスター",
    "sc": "魔物",
    "tc": "魔物"
  };

  public readonly facilities_translation = {
    "en": "School Facilities",
    "ja": "学校開発",
    "sc": "关于学校开发",
    "tc": "關於學校開發"
  };

  public readonly facility_sets_translation = {
    "en": "Facility Sets",
    "ja": "セット",
    "sc": "套组",
    "tc": "套組"
  };

  public readonly units_translation = {
    "en": "Units",
    "ja": "ユニット",
    "sc": "团队",
    "tc": "團隊"
  };

  public readonly skills_translation = {
    "en": "Skills",
    "ja": "スキル",
    "sc": "技能",
    "tc": "技能"
  };

  public readonly gameTitle = { "en": "Blue Reflection: Second Light", "ja": "BLUE REFLECTION TIE/帝", "sc": "BLUE REFLECTION: 帝", "tc": "BLUE REFLECTION: 帝" };
  public readonly gameURL = "second-light";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  getFragmentList(language: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/BRSL/fragment/${language}/`);
  }

  getCharacterList(language: string): Observable<NameLink[]> {
    return this.http.get<NameLink[]>(`${this.apiUrl}/BRSL/character/${language}/`);
  }

  getSchoolLocationList(language: string): Observable<SchoolLocation[]> {
    return this.http.get<SchoolLocation[]>(`${this.apiUrl}/BRSL/schoollocation/${language}/`);
  }

  getDemonList(language: string): Observable<DemonList[]> {
    return this.http.get<DemonList[]>(`${this.apiUrl}/BRSL/demon/${language}/`);
  }

  getDemon(slug: string, language: string): Observable<DemonFull> {
    return this.http.get<DemonFull>(`${this.apiUrl}/BRSL/demon/${slug}/${language}/`);
  }

  getItemList(language: string): Observable<ItemList[]> {
    return this.http.get<ItemList[]>(`${this.apiUrl}/BRSL/item/${language}/`);
  }

  getItem(slug: string, language: string): Observable<ItemFull> {
    return this.http.get<ItemFull>(`${this.apiUrl}/BRSL/item/${slug}/${language}/`);
  }

  getCategoryList(language: string): Observable<NameOnly[]> {
    return this.http.get<NameOnly[]>(`${this.apiUrl}/BRSL/category/${language}/`);
  }

  getUnit(language: string): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.apiUrl}/BRSL/unit/${language}/`);
  }

  getFacilityList(language: string): Observable<FacilityList[]> {
    return this.http.get<FacilityList[]>(`${this.apiUrl}/BRSL/facility/${language}/`);
  }

  getFacility(slug: string, language: string): Observable<FacilityFull> {
    return this.http.get<FacilityFull>(`${this.apiUrl}/BRSL/facility/${slug}/${language}/`);
  }

  getFacilitySetList(language: string): Observable<FacilitySet[]> {
    return this.http.get<FacilitySet[]>(`${this.apiUrl}/BRSL/facilityset/${language}/`);
  }

  getSkillList(language: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/BRSL/skill/${language}/`);
  }

  getRegion(slug: string, language: string): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/BRSL/region/${slug}/${language}/`);
  }

}