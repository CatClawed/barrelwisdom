import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';

@Component({
    template: '',
})

export abstract class SingleComponent {
    error: string = '';
    section: string = "things";
    language = "";
    colset: string;

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;

    @Input()
    slug: string = "";

    @Input()
    showNav: boolean = true;

    constructor(
        protected route: ActivatedRoute,
        protected seoService: SeoService
    ) {
        this.language = this.route.snapshot.params.language;
        this.slug = this.route.snapshot.params.subject ? this.route.snapshot.params.subject : '';
    }

    gameService(service: any) {
        this.gameTitle = service.gameTitle[this.language];
        this.gameURL = service.gameURL;
        this.imgURL = service.imgURL;
    }

    genericSEO(name: string, desc: string): void {
        this.seoURL = `${this.gameURL}/${this.section}}/${this.slug}/${this.language}`;
        this.seoTitle = `${name} - ${this.gameTitle}`;
        this.seoDesc = `${desc}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }
}