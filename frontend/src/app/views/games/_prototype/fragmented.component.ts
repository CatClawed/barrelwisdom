import { Location, ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { FilterableComponent } from './filterable.component';

@Component({ template: '' })
// Fragments extending Filterables is a compromise of sorts.
export abstract class FragmentedComponent extends FilterableComponent implements AfterViewChecked {
    protected viewportScroller = inject(ViewportScroller)
    protected loc = inject(Location)

    isStarting: boolean = true;

    // relies on probably rendering the full component after the timeout
    // feels better than resolvers
    ngAfterViewChecked(): void {
        if (this.isStarting && this.data) {
            setTimeout(() => {
                this.route.fragment
                    .pipe(first())
                    .subscribe(fragment => {
                        if (fragment) {
                            this.loadAll = true;
                            this.viewportScroller.scrollToAnchor(fragment);
                        }
                    });
                this.isStarting = false
            }, 100)
        }
    }
    scroll(id: string, subsection?: string) {
        this.loadAll = true;
        this.viewportScroller.scrollToAnchor(id)
        if(subsection) {
            this.loc.replaceState(`${this.gameURL}/${this.section}/${subsection}/${this.language}#${id}`);
        }
        else {
            this.loc.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
        }
    }
}