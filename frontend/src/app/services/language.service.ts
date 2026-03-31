import { Injectable, signal } from '@angular/core';
import { LocalStorage } from '@app/_helpers/local-storage';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    public l: string = "";
    language = signal<string>('')

    constructor(private LocalStorage: LocalStorage) {
        this.l = this.LocalStorage.getItem('language');
        if(this.LocalStorage.getItem('language')) {
            this.l = LocalStorage.getItem('language');
        }
        this.language.set(this.l)
    }

    public get languageValue(): string {
        return this.language()
    }

    setLanguage(language: string) {
        this.LocalStorage.setItem('language', language);
        this.l = language;
        this.language.set(this.l)
    }
}