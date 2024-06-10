import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { of } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';
import { DataComponent } from './data.component';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class SingleComponent extends DataComponent {
    colset: string;

    @Input()
    inputSlug: string = "";

    @Input()
    showNav: boolean = true
    
    @Input()
    inputLang?: string;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService) {
        super(destroy$, route, seoService)
        this.slug = this.inputSlug ? this.inputSlug : this.route.snapshot.params.subject;
        if (this.showNav) this.colset = "col-md-9 mx-auto ";
    }

    paramWatch(): void {
        this.route.paramMap
            .pipe(
                switchMap(params => {
                    this.language = this.inputLang ? this.inputLang : params.get('language');
                    this.slug = this.inputSlug ? this.inputSlug : params.get('subject');
                    return this.changeData()
                }),
                catchError(error => {
                    this.error = `${error.status}`;
                    return of(undefined);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe(data => {
                this.data = data;
                if (this.data) {
                    this.error = ``;
                    this.afterAssignment();
                }
            })
    }
}