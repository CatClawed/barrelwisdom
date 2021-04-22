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
        const language = route.paramMap.get('language').toLowerCase();
        let segments = state.url.split('/');
        const section = segments[1];

        // To ensure I can link from blog entries and direct to the correct version
        if(route.queryParamMap.get('forward')) {
            if(this.languageService.languageValue) {
                segments.pop();
                let newUrl = "";
                for(let s of segments) {
                    if(s) {
                        newUrl += '/' + s;
                    }
                }
                this.router.navigate([newUrl + "/" + this.languageService.languageValue]);
                return false;
            }
            else {
                this.languageService.setLanguage('en');
            }
        }

        if(!language) {
            if(!this.languageService.languageValue) {
                this.languageService.setLanguage("en");
            }
            this.router.navigate([state.url + '/' + this.languageService.languageValue]);
            return false;
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