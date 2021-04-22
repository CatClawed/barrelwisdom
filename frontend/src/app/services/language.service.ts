import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private languageSubject: BehaviorSubject<string>;
    public language: Observable<string>;
    public l: string = "";


    constructor(private http: HttpClient) {
        this.l = localStorage.getItem('language');
        if(localStorage.getItem('language')) {
            this.l = localStorage.getItem('language');
        }
        this.languageSubject = new BehaviorSubject<string>(this.l)
        this.language = this.languageSubject.asObservable();
    }

    public get languageValue(): string {
        return this.languageSubject.value;
    }

    setLanguage(language: string) {
        localStorage.setItem('language', language);
        this.l = language;
        this.languageSubject.next(this.l);
    }
}