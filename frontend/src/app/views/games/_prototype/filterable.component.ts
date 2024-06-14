import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
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

export abstract class FilterableComponent extends DataComponent {
    pageForm: UntypedFormGroup;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected breadcrumbService: BreadcrumbService,
        protected seoService: SeoService) {
        super(destroy$, route, breadcrumbService, seoService)
    }

    paramWatch() {
        this.route.paramMap
            .pipe(
                switchMap(params => {
                    this.language = params.get('language');
                    this.slug = params.get('subject') ? params.get('subject') : '';
                    return this.changeData();
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
            });
    }

    get f() { return this.pageForm.controls; }

    identify(index, item) {
        return item.slug;
    }

    identify2(index, item) {
        return item.slugname;
    }
}