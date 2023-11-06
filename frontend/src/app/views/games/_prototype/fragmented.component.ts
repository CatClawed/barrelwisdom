import { Location, ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { first } from 'rxjs/operators';
import { FilterableComponent } from './filterable.component';

@Component({
    template: '',
    providers: [DestroyService]
})

// Fragments extending Filterables is a compromise of sorts.
// It's the reason reset needs to be explicitly called.
export abstract class FragmentedComponent extends FilterableComponent implements AfterViewChecked {
    isStarting: boolean = true;
    hasData: boolean = false;
    constructor(
        protected readonly destroy$: DestroyService,
        protected route: ActivatedRoute,
        protected seoService: SeoService,
        protected viewportScroller: ViewportScroller,
        protected loc: Location
    ) {
        super(destroy$, route, seoService)
    }
    // relies on probably rendering the full component after the timeout
    // feels better than resolvers
    ngAfterViewChecked(): void {
        if (this.isStarting && this.hasData) {
            setTimeout(() => {
                this.route.fragment
                    .pipe(first())
                    .subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
                this.isStarting = false
            }, 100)
        }
    }
    scroll(id: string, subsection?: string) {
        this.viewportScroller.scrollToAnchor(id)
        if(subsection) {
            this.loc.replaceState(`${this.gameURL}/${this.section}/${subsection}/${this.language}#${id}`);
        }
        else {
            this.loc.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
        }
    }
}