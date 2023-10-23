import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { takeUntil } from 'rxjs/operators';
import { DataComponent } from './data.component';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class FilterableComponent extends DataComponent implements OnInit {
    pageForm: UntypedFormGroup;
    formDefaults = {
        filtertext: ""
    }

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService
    ) {
        super(destroy$, route, seoService)
    }

    ngOnInit(): void {
        this.paramWatch();
    }

    paramWatch() {
        this.route.paramMap.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.language = params.get('language');
                this.slug = params.get('subject') ? params.get('subject') : '';
                this.changeData();
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