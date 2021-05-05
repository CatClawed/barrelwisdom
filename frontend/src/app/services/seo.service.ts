import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(@Inject(DOCUMENT) private dom) { }

    createCanonicalURL(url?:string) {
        const head = this.dom.getElementsByTagName('head')[0];
        let canURL = url == undefined ? this.dom.URL : `https://barrelwisdom.com/${url}`;
        var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
        if (element==null) {
            element= this.dom.createElement('link') as HTMLLinkElement;
             head.appendChild(element);
        }
        element.setAttribute('rel','canonical')
        element.setAttribute('href',canURL)
    }

    removeCanonicalURL() {
        var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
        if (element) {
            element.removeAttribute(`rel="canonical"`);
        }
    }
}