import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class DataComponent implements OnInit {
    data: any
    error: string = '';
    section: string;
    language = "";
    slug: string = '';

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService) {
        this.language = this.route.snapshot.params.language;
    }

    ngOnInit(): void {
        this.paramWatch();
    }

    gameService(service: any, section: string) {
        this.gameTitle = service.gameTitle[this.language];
        this.gameURL = service.gameURL;
        this.imgURL = service.imgURL;
        this.section = section;
    }
    genericSEO(name: string, desc: string): void {
        this.seoURL = this.slug ? `${this.gameURL}/${this.section}/${this.slug}/${this.language}` : `${this.gameURL}/${this.section}/${this.language}`;
        this.seoTitle = `${name} - ${this.gameTitle}`;
        this.seoDesc = `${desc}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }

    abstract changeData();
    abstract paramWatch()
    // intentionall blank, may be overridden
    afterAssignment(): void { }
}