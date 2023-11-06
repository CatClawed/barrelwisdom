import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '@app/services/language.service';
import { LanguageData } from '@environments/language-data';

export const LanguageGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const languageService = inject(LanguageService);
    const router = inject(Router);
    const language = route.paramMap.get('language') ? route.paramMap.get('language').toLowerCase() : "";
    let segments = state.url.split('/');
    const section = segments[1];

    if(!language || language.length >= 3) {
        if(!languageService.languageValue) {
            languageService.setLanguage("en");
        }
        router.navigateByUrl(state.url + `/` + languageService.languageValue);
        return true;
    }

    if(!languageService.languageValue) {
        languageService.setLanguage(language);
        // doesn't matter if this is a bad value, EN is default
    }

    if (LanguageData.languages[section].includes(language)) return true;
    
    // go to the default EN page if all else fails
    segments.pop();
    let newUrl = "";
    for(let s of segments) {
        if(s) {
            newUrl += '/' + s;
        }
    }
    router.navigateByUrl(newUrl + "/en");
    return false;
}