import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
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
    inputSlug: string;

    @Input()
    showNav: boolean = true
    
    @Input()
    inputLang?: string;

    small: boolean = false;

    @Output()
    buttonClicked = new EventEmitter<string>();

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected breadcrumbService: BreadcrumbService,
        protected seoService: SeoService) {
        super(destroy$, route, breadcrumbService, seoService)
        this.slug = this.inputSlug ? this.inputSlug : this.route.snapshot.params.subject;
        this.data = this.inputData ? this.inputData : undefined;
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
                this.error = this.breadcrumbService.setStatus(error.status);
                return of(undefined);
            }),
            takeUntil(this.destroy$)
        )
        .subscribe(data => {
            this.data = data;                
            if (this.data) {
                this.error = this.breadcrumbService.setStatus(200);
                this.afterAssignment();
            }
        })
    }
}