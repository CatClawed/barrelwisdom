import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '@app/services/language.service';
import { LanguageData } from '@environments/language-data';

export const LanguageGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    if (!isBrowser) return true;

    const languageService = inject(LanguageService);
    const router = inject(Router);
    const urlTree = router.parseUrl(state.url)
    const fragment = urlTree.fragment;
    const language = route.paramMap.get('language')?.toLowerCase() || "";
    const segments = state.url.split('/').filter(Boolean)
    const section = segments[0];

    if(!language || language.length >= 3) {
        if(!languageService.languageValue) {
            languageService.setLanguage("en");
        }
        router.navigate([...segments, languageService.languageValue || 'en'], { fragment })
        return true;
    }
    // doesn't matter if this is a bad value, EN is default
    if(!languageService.languageValue) {
        languageService.setLanguage(language);
    }

    if (LanguageData.languages[section].includes(language)) return true;

    // go to the default EN page if all else fails
    router.navigate([...segments.slice(0,-1), "en"], { fragment });
    return false;
}