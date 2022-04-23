import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(
      @Inject(DOCUMENT) private dom,
      private metaService: Meta,
      private titleService: Title) { }

    SEOSettings(url: string, title: string, description: string, image:string, snippet?:boolean) {
        this.createCanonicalURL(url);

        if(title) {
            this.titleService.setTitle(`${title} - Barrel Wisdom`);
            this.metaService.updateTag({ property: `og:title`, content: `${title}` }, `property="og:title"`);
        }
        else {
            this.titleService.setTitle('Barrel Wisdom');
            this.metaService.updateTag({ name: `og:title`, content: `Barrel Wisdom` },`property="og:title"`);

        }
        if(description) {
            this.metaService.updateTag({ name: `description`, content: description }, `name="description"`);
            this.metaService.updateTag({ property: `og:description`, content: description },`property="og:description"`);
        }
        else {
            this.metaService.updateTag({ name: `description`, content: "The source for all things Atelier." }, `name="description"`);
            this.metaService.updateTag({ property: `og:description`, content: "The source for all things Atelier." },`property="og:description"`);
        }
        if(image) {
            this.metaService.updateTag({ name: `twitter:card`, content: `summary_large_image` }, `name="twitter:card"`);
            this.metaService.updateTag({ name: `twitter:image`, content: `https://barrelwisdom.com${image}` }, `name="twitter:image"`);
            this.metaService.updateTag({ property: `og:image`, content: `https://barrelwisdom.com${image}` }, `property="og:image"`);
        }
        else {
            this.metaService.updateTag({ property: `og:image`, content: `https://barrelwisdom.com/media/main/barrel.webp` }, `property="og:image"`);
            this.metaService.updateTag({ name: `twitter:card`, content: `summary` }, `name="twitter:card"`);
            this.metaService.updateTag({ name: `twitter:image`, content: `https://barrelwisdom.com/media/main/barrel.webp` }, `name="twitter:image"`);
        }
        if (snippet === true) { // heck google
            this.metaService.updateTag({ name: `robots`, content: `index, follow, archive, max-snippet=-1` }, `name="robots"`);
        }
        if (snippet === undefined || snippet === false) {
            this.metaService.updateTag({ name: `robots`, content: `index, follow, archive` }, `name="robots"`);
        }
    }

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