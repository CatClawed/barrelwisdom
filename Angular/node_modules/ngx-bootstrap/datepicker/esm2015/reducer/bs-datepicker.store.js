/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
export class BsDatepickerStore extends MiniStore {
    constructor() {
        /** @type {?} */
        const _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        /** @type {?} */
        const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerStore.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBcUIsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUE0QjtJQUNqRTs7Y0FDUSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQVM7WUFDOUMsSUFBSSxFQUFFLDhCQUE4QjtTQUNyQyxDQUFDOztjQUNJLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FDekIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxtQkFBbUIsQ0FDcEI7UUFDRCxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQVpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPEJzRGF0ZXBpY2tlclN0YXRlPihcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIGJzRGF0ZXBpY2tlclJlZHVjZXJcbiAgICApO1xuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCBic0RhdGVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XG4gIH1cbn1cbiJdfQ==