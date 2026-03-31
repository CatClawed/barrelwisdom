import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { DataComponent } from './data.component';

@Component({ template: '' })
export abstract class FilterableComponent extends DataComponent {
    protected formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder)
    pageForm: UntypedFormGroup;
    hide: boolean = false;
    loadAll: boolean = false;

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
                takeUntilDestroyed(this.destroyRef)
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

    // things implies that only one thing is allowed to be active at a time
    // to a list to toggle off is provided
    toggle(thing, things?) {
        if (things) {
            let og = thing.value
            for (let t of things) {
                t.setValue(false)
            }
            if (og == thing.value) {
                thing.setValue(!thing.value)
            }
        }
        else {
            thing.setValue(!thing.value)
        }
    }
}