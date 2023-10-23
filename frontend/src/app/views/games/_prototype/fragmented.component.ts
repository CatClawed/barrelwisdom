import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { first, takeUntil } from 'rxjs/operators';
import { FilterableComponent } from './filterable.component';

@Component({
    template: '',
    providers: [DestroyService]
})

// Fragments extending Filterables is a compromise of sorts.
// It's the reason reset needs to be explicitly called.
export abstract class FragmentedComponent extends FilterableComponent implements AfterViewInit {
    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService,
        protected viewportScroller: ViewportScroller,
        protected loc: Location,
    ) {
        super(destroy$, route, seoService)
    }
    ngAfterViewInit(): void {
        this.route.fragment.pipe(
            first(), takeUntil(this.destroy$)
        ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
    }
    scroll(id: string, section: string) {
        this.loc.replaceState(`${this.gameURL}/${section}/${this.language}#${id}`);
        this.viewportScroller.scrollToAnchor(id);
    }
}