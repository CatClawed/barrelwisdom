
import { Inject, Injectable, DOCUMENT, RendererFactory2, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    private readonly document = inject(DOCUMENT);
    private readonly renderer = inject(RendererFactory2).createRenderer(null, null);;
    private readonly title = inject(Title);
    private readonly meta = inject(Meta);

    private readonly BASE_URL = 'https://barrelwisdom.com';
    private readonly DEFAULT_IMAGE = '/media/main/barrel.webp';

    updateSEOSettings(config: {
        url: string;
        title?: string;
        description?: string;
        image?: string;
        lang?: string;}) {
        const { url, title, description, image, lang = 'en' } = config;
        let language;

        if (lang == 'sc') language = 'zh-Hans';
        else if (lang == 'tc') language = 'zh-Hant';
        else language = lang

        this.renderer.setAttribute(this.document.documentElement, 'lang', language);
        this.createCanonicalURL(url);

        const fullTitle = title ? `${title} - Barrel Wisdom` : 'Barrel Wisdom';
        this.title.setTitle(fullTitle);
        this.meta.updateTag({ property: 'og:title', content: fullTitle }, 'property="og:title"');

        const desc = description || "The source for all things Atelier.";
        this.meta.updateTag({ name: 'description', content: desc }, 'name="description"');
        this.meta.updateTag({ property: 'og:description', content: desc }, 'property="og:description"');

        const imgUrl = `${this.BASE_URL}${image || this.DEFAULT_IMAGE}`;
        const twitterType = image ? 'summary_large_image' : 'summary';

        this.meta.updateTag({ property: 'og:image', content: imgUrl }, 'property="og:image"');
        this.meta.updateTag({ name: 'twitter:image', content: imgUrl }, 'name="twitter:image"');
        this.meta.updateTag({ name: 'twitter:card', content: twitterType }, 'name="twitter:card"');
    }

    createCanonicalURL(url?: string) {
        const head = this.document.getElementsByTagName('head')[0];
        let canURL = url == undefined ? this.document.URL : `${this.BASE_URL}${url}`;
        let element: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || null
        if (element == null) {
            element = this.document.createElement('link') as HTMLLinkElement;
            head.appendChild(element);
        }
        element.setAttribute('rel', 'canonical')
        element.setAttribute('href', canURL)
    }

    removeCanonicalURL() {
        let element: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || null
        if (element) {
            element.removeAttribute(`rel="canonical"`);
        }
    }
}