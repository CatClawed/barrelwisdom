import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class DataComponent implements OnInit {
    data: any
    error: any = '';
    section: string;
    language = "";
    slug: string;

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;

    @Input()
    inputData?: any;

    @Input()
    hideContents: boolean = false;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected breadcrumbService: BreadcrumbService,
        protected seoService: SeoService) {
        this.language = this.route.snapshot.params.language;
    }

    ngOnInit(): void {
        if (this.inputData !== undefined) {
            this.data = this.inputData;
        }
        else {
            this.paramWatch();
        }
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

    genericSettings(name: string, desc: string, sectionName?: string, ignoreSection?: boolean, updateBreadcrumb?: boolean): void {
        this.genericSEO(name, desc);

        if (updateBreadcrumb !== false) {
            if (this.slug === null || this.slug === '' || ignoreSection === true) {
                this.breadcrumbService.setBreadcrumbs(
                    [[this.gameTitle, `/${this.gameURL}`]],
                    name);
            }
            else {
                this.breadcrumbService.setBreadcrumbs(
                    [[this.gameTitle, `/${this.gameURL}`],
                        [sectionName, `/${this.gameURL}/${this.section}/${this.language}`],
                    ],
                    name);
            }
        }
    }

    abstract changeData();
    abstract paramWatch()
    // intentionally blank, may be overridden
    afterAssignment(): void { }
}
