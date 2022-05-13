import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalstorageService } from '@app/_helpers/local-storage';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private languageSubject: BehaviorSubject<string>;
    public l: string = "";

    constructor(private LocalStorage: LocalstorageService) {
        this.l = this.LocalStorage.getItem('language');
        if(this.LocalStorage.getItem('language')) {
            this.l = LocalStorage.getItem('language');
        }
        this.languageSubject = new BehaviorSubject<string>(this.l)
    }

    public get languageValue(): string {
        return this.languageSubject.value;
    }

    setLanguage(language: string) {
        this.LocalStorage.setItem('language', language);
        this.l = language;
        this.languageSubject.next(this.l);
    }
}