/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
export class TimepickerStore extends MiniStore {
    constructor() {
        /** @type {?} */
        const _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        const state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFlBQVksRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUEwQjtJQUM3RDs7Y0FDUSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQVM7WUFDOUMsSUFBSSxFQUFFLDZCQUE2QjtTQUNwQyxDQUFDOztjQUNJLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FDekIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsQ0FDbEI7UUFDRCxLQUFLLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0aW1lcGlja2VyUmVkdWNlcixcbiAgVGltZXBpY2tlclN0YXRlLFxuICBpbml0aWFsU3RhdGVcbn0gZnJvbSAnLi90aW1lcGlja2VyLnJlZHVjZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvbiwgTWluaVN0b3JlLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8VGltZXBpY2tlclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcbiAgICAgIHR5cGU6ICdbbWluaS1uZ3J4XSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPFRpbWVwaWNrZXJTdGF0ZT4oXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIHRpbWVwaWNrZXJSZWR1Y2VyXG4gICAgKTtcbiAgICBzdXBlcihfZGlzcGF0Y2hlciwgdGltZXBpY2tlclJlZHVjZXIsIHN0YXRlKTtcbiAgfVxufVxuIl19