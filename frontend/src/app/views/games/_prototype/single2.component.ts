import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class SingleComponent2 implements OnInit {
    error: string = '';
    section: string;
    language = "";
    colset: string;
    slug = "";

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;

    @Input()
    inputSlug: string = "";

    @Input()
    showNav: boolean = true;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService
    ) {
        this.language = this.route.snapshot.params.language;
        this.slug = this.inputSlug ? this.inputSlug : this.route.snapshot.params.subject;
    }

    ngOnInit(): void {
        if (this.showNav) this.colset = "col-md-9 mx-auto ";
        this.paramWatch();
      }

    paramWatch() {
        this.route.paramMap.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.language = params.get('language');
                this.slug = this.inputSlug ? this.inputSlug : params.get('subject');
                this.changeData()
            });
    }

    gameService(service: any, section: string) {
        this.gameTitle = service.gameTitle[this.language];
        this.gameURL = service.gameURL;
        this.imgURL = service.imgURL;
        this.section = section;
    }

    genericSEO(name: string, desc: string): void {
        this.seoURL = this.slug === '' ? `${this.gameURL}/${this.section}/${this.language}` : `${this.gameURL}/${this.section}/${this.slug}/${this.language}`;
        this.seoTitle = `${name} - ${this.gameTitle}`;
        this.seoDesc = `${desc}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }

    abstract changeData(): void;
}