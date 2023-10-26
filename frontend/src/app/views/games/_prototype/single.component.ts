import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { takeUntil } from 'rxjs/operators';
import { DataComponent } from './data.component';

@Component({
    template: '',
    providers: [DestroyService]
})

export abstract class SingleComponent extends DataComponent implements OnInit {
    colset: string;

    @Input()
    inputSlug: string = "";

    @Input()
    showNav: boolean = true;

    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService) {
        super(destroy$, route, seoService)
        this.slug = this.inputSlug ? this.inputSlug : this.route.snapshot.params.subject;
        if (this.showNav) this.colset = "col-md-9 mx-auto ";
    }

    ngOnInit(): void {
        this.paramWatch();
    }

    paramWatch(): void {
        this.route.paramMap.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.language = params.get('language');
                this.slug = this.inputSlug ? this.inputSlug : params.get('subject');
                this.changeData()
            });
    }
}