import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '@app/services/language.service';
import { environment } from '@environments/environment';

export const LanguageGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const languageService = inject(LanguageService);
    const router = inject(Router);
    const language = route.paramMap.get('language') ? route.paramMap.get('language').toLowerCase() : "";
    let segments = state.url.split('/');
    const section = segments[1];

    const envs = {
        "totori": environment.totori_languages,
        "escha": environment.escha_languages,
        "shallie": environment.shallie_languages,
        "firis": environment.firis_languages,
        "ryza2": environment.ryza2_languages,
        "sophie2": environment.sophie2_languages,
        "resleri": environment.resleri_languages,
        "bluereflection": environment.bluereflection_languages,
        "second-light": environment.secondlight_languages,
    }

    if(!language || language.length >= 3) {
        if(!languageService.languageValue) {
            languageService.setLanguage("en");
        }
        router.navigateByUrl(state.url + `/` + languageService.languageValue);
        return true;
    }

    if(!languageService.languageValue) {
        languageService.setLanguage(language); // doesn't matter if this is a bad value, EN is default
    }

    if (envs[section][language]) return true;
    
    // go to the default EN page if all else fails
    segments.pop();
    let newUrl = "";
    for(let s of segments) {
        if(s) {
            newUrl += '/' + s;
        }
    }
    router.navigateByUrl(newUrl + "/en", { replaceUrl: true });
    return false;
}