import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import {AppComponent} from '@app/app.component';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(
      @Inject(DOCUMENT) private dom,
      private metaService: Meta,
      private titleService: Title) { }

    SEOSettings(url: string, title: string, description: string, image:string) {
        this.createCanonicalURL(url);

        if(title) {
            this.titleService.setTitle(`${title} - Barrel Wisdom`);
            this.metaService.updateTag({ property: `og:title`, content: `${title}` }, `property="og:title"`);
        }
        else {
            this.titleService.setTitle('Barrel Wisdom');
            this.metaService.updateTag({ property: `og:title`, content: `Barrel Wisdom` },`property="og:title"`);

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
            this.metaService.updateTag({ property: `twitter:card`, content: `summary_large_image` }, `property="twitter:card"`);
            this.metaService.updateTag({ property: `twitter:image`, content: image }, `property="twitter:image"`);
            this.metaService.updateTag({ property: `og:image`, content: image }, `property="og:image"`);
        }
        else {
            this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
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