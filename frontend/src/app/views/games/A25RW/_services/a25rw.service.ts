import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Effect, Monster, Trait } from '@app/views/games/A25RW/_services/a25rw.interface';
import { environment } from '@environments/environment';
import { category_translation, effect_translation, filter_translation, item_translation, monster_translation, race_translation, stat_translation, trait_translation } from '@environments/localization';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class A25RWService {
  private readonly version = '05-20-25';

  constructor(
    private http: HttpClient,
  ) { }

  public readonly item_translation = item_translation
  public readonly monster_translation = monster_translation
  public readonly stat_translation = stat_translation
  public readonly effect_translation = effect_translation
  public readonly trait_translation = trait_translation
  public readonly category_translation = category_translation
  public readonly filter_translation = filter_translation
  public readonly race_translation = race_translation

  public readonly gameTitle = {
    "en": "Atelier Resleriana: The Red Alchemist & the White Guardian",
    "ja": "レスレリアーナのアトリエ 紅の錬金術士と白の守護者",
    "sc": "蕾斯莱莉娅娜的炼金工房 紅色的鍊金術士和白色的守護者",
    "tc": "蕾斯萊莉婭娜的鍊金工房 红色的炼金术士和白色的守护者",
    "ko": "레슬레리아나의 아틀리에 진홍의 연금술사와 순백의 수호자"
  };
  public readonly gameURL = "resleriana-red-white";
  public readonly imgURL = `${environment.mediaURL}games/${this.gameURL}/`;

  public readonly colors = {
    'red':    '#b63c3c',
    'blue':   '#3883ad',
    'green':  '#3eb880',
    'yellow': '#c9af47',
    'purple': '#ac48b9'
  }

  public readonly colorList = {
    'red':    'rgba(182,60,60,.7);',
    'blue':   'rgba(56,131,173,0.7);',
    'green':  'rgba(62,184,128,0.7);',
    'yellow': 'rgba(201,175,71,0.7);',
    'purple': 'rgba(172,72,185,0.7);'
  }

  public readonly elements = {
    'air': '#4f7939',
    'fire': '#a64521',
    'ice': '#4d7acf',
    'bolt': '#9c8c18',
    'physical': '#735129',
    'magic': '#6d2ca3',
  }

  getTraitList(language: string): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${environment.apiUrl}/A25RW/trait/?lang=${language}&v=${this.version}`);
  }

  getTrait(slug: string, language: string): Observable<Trait> {
    return this.http.get<Trait>(`${environment.apiUrl}/A25RW/trait/${slug}/?lang=${language}&v=${this.version}`);
  }

  getEffectList(language: string): Observable<Effect[]> {
    return this.http.get<Effect[]>(`${environment.apiUrl}/A25RW/effect/?lang=${language}&v=${this.version}`);
  }

  getEffect(slug: string, language: string): Observable<Effect> {
    return this.http.get<Effect>(`${environment.apiUrl}/A25RW/effect/${slug}/?lang=${language}&v=${this.version}`);
  }

  getMonsterList(language: string): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/A25RW/enemy/?lang=${language}&v=${this.version}`);
  }

  getMonster(slug: string, language: string): Observable<Monster> {
    return this.http.get<Monster>(`${environment.apiUrl}/A25RW/enemy/${slug}/?lang=${language}&v=${this.version}`);
  }

  getCategoryList(language: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/A25RW/category/?lang=${language}&v=${this.version}`);
  }

  getCategory(slug: string, language: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/A25RW/category/${slug}/?lang=${language}&v=${this.version}`);
  }
}
