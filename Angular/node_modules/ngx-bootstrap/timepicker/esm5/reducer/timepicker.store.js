/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
var TimepickerStore = /** @class */ (function (_super) {
    tslib_1.__extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        /** @type {?} */
        var _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        var state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(MiniStore));
export { TimepickerStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixZQUFZLEVBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkU7SUFDcUMsMkNBQTBCO0lBQzdEO1FBQUEsaUJBVUM7O1lBVE8sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFTO1lBQzlDLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQzs7WUFDSSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLENBQ2xCO1FBQ0QsUUFBQSxrQkFBTSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQUM7O0lBQy9DLENBQUM7O2dCQVpGLFVBQVU7Ozs7SUFhWCxzQkFBQztDQUFBLEFBYkQsQ0FDcUMsU0FBUyxHQVk3QztTQVpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0aW1lcGlja2VyUmVkdWNlcixcbiAgVGltZXBpY2tlclN0YXRlLFxuICBpbml0aWFsU3RhdGVcbn0gZnJvbSAnLi90aW1lcGlja2VyLnJlZHVjZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvbiwgTWluaVN0b3JlLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8VGltZXBpY2tlclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcbiAgICAgIHR5cGU6ICdbbWluaS1uZ3J4XSBkaXNwYXRjaGVyIGluaXQnXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPFRpbWVwaWNrZXJTdGF0ZT4oXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgICBfZGlzcGF0Y2hlcixcbiAgICAgIHRpbWVwaWNrZXJSZWR1Y2VyXG4gICAgKTtcbiAgICBzdXBlcihfZGlzcGF0Y2hlciwgdGltZXBpY2tlclJlZHVjZXIsIHN0YXRlKTtcbiAgfVxufVxuIl19