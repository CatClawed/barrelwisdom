import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '@app/services/language.service';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class LanguageGuard implements CanActivate {
    constructor(
        private router: Router,
        private languageService: LanguageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const language = route.paramMap.get('language') ? route.paramMap.get('language').toLowerCase() : "";
        let segments = state.url.split('/');
        const section = segments[1];

        if(!language || language.length >= 3) {
            if(!this.languageService.languageValue) {
                this.languageService.setLanguage("en");
            }
            this.router.navigate([state.url + '/' + this.languageService.languageValue]);
            return true;
        }

        if(!this.languageService.languageValue) {
            this.languageService.setLanguage(language); // doesn't matter if this is a bad value, EN is default
        }
        
        if(section == "ryza2") {
            if(environment.ryza2_languages[language]) {
                return true;
            }
        }
        // go to the default EN page if all else fails
        segments.pop();
        let newUrl = "";
        for(let s of segments) {
            if(s) {
                newUrl += '/' + s;
            }
        }
        this.router.navigate([newUrl + "/en"]);
        return false;
    }
}