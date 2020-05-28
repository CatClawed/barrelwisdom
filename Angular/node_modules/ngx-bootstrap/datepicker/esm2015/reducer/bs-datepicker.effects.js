/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { BsLocaleService } from '../bs-locale.service';
export class BsDatepickerEffects {
    /**
     * @param {?} _actions
     * @param {?} _localeService
     */
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this._store.dispatch(this._actions.select(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRangeValue(value) {
        this._store.dispatch(this._actions.selectRange(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMinDate(value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxDate(value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDaysDisabled(value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDatesDisabled(value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDatesEnabled(value) {
        this._store.dispatch(this._actions.datesEnabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisabled(value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDateCustomClasses(value) {
        this._store.dispatch(this._actions.setDateCustomClasses(value));
        return this;
    }
    /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    setOptions(_config) {
        /** @type {?} */
        const _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    setBindings(container) {
        container.daysCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.flaggedMonths))
            .pipe(filter((/**
         * @param {?} months
         * @return {?}
         */
        months => !!months)));
        // month calendar
        container.monthsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.flaggedMonthsCalendar))
            .pipe(filter((/**
         * @param {?} months
         * @return {?}
         */
        months => !!months)));
        // year calendar
        container.yearsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.yearsCalendarFlagged))
            .pipe(filter((/**
         * @param {?} years
         * @return {?}
         */
        years => !!years)));
        container.viewMode = this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.view.mode));
        container.options = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.showWeekNumbers))
            .pipe(map((/**
         * @param {?} showWeekNumbers
         * @return {?}
         */
        showWeekNumbers => ({ showWeekNumbers }))));
        return this;
    }
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    setEventHandlers(container) {
        container.setViewMode = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._store.dispatch(this._actions.changeViewMode(event));
        });
        container.navigateTo = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._store.dispatch(this._actions.navigateStep(event.step));
        });
        container.dayHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const _cell = (/** @type {?} */ (event.cell));
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        });
        container.monthHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.cell.isHovered = event.isHovered;
        });
        container.yearHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.cell.isHovered = event.isHovered;
        });
        container.monthSelectHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: getMonth(event.date),
                    year: getFullYear(event.date)
                },
                viewMode: 'day'
            }));
        });
        container.yearSelectHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        });
        return this;
    }
    /**
     * @return {?}
     */
    registerDatepickerSideEffects() {
        this._subs.push(this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.view)).subscribe((/**
         * @param {?} view
         * @return {?}
         */
        view => {
            this._store.dispatch(this._actions.calculate());
        })));
        // format calendar values on month model change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.monthsModel))
            .pipe(filter((/**
         * @param {?} monthModel
         * @return {?}
         */
        monthModel => !!monthModel)))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        month => this._store.dispatch(this._actions.format()))));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.formattedMonths))
            .pipe(filter((/**
         * @param {?} month
         * @return {?}
         */
        month => !!month)))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        month => this._store.dispatch(this._actions.flag()))));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.selectedDate))
            .pipe(filter((/**
         * @param {?} selectedDate
         * @return {?}
         */
        selectedDate => !!selectedDate)))
            .subscribe((/**
         * @param {?} selectedDate
         * @return {?}
         */
        selectedDate => this._store.dispatch(this._actions.flag()))));
        // flag for date range picker
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.selectedRange))
            .pipe(filter((/**
         * @param {?} selectedRange
         * @return {?}
         */
        selectedRange => !!selectedRange)))
            .subscribe((/**
         * @param {?} selectedRange
         * @return {?}
         */
        selectedRange => this._store.dispatch(this._actions.flag()))));
        // monthsCalendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.monthsCalendar))
            .subscribe((/**
         * @return {?}
         */
        () => this._store.dispatch(this._actions.flag()))));
        // years calendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.yearsCalendarModel))
            .pipe(filter((/**
         * @param {?} state
         * @return {?}
         */
        state => !!state)))
            .subscribe((/**
         * @return {?}
         */
        () => this._store.dispatch(this._actions.flag()))));
        // on hover
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.hoveredDate))
            .pipe(filter((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        hoveredDate => !!hoveredDate)))
            .subscribe((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        hoveredDate => this._store.dispatch(this._actions.flag()))));
        // date custom classes
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.dateCustomClasses))
            .pipe(filter((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        dateCustomClasses => !!dateCustomClasses)))
            .subscribe((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        dateCustomClasses => this._store.dispatch(this._actions.flag()))));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe((/**
         * @param {?} locale
         * @return {?}
         */
        locale => this._store.dispatch(this._actions.setLocale(locale)))));
        return this;
    }
    /**
     * @return {?}
     */
    destroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerEffects.ctorParameters = () => [
    { type: BsDatepickerActions },
    { type: BsLocaleService }
];
if (false) {
    /** @type {?} */
    BsDatepickerEffects.prototype.viewMode;
    /** @type {?} */
    BsDatepickerEffects.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.options;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerEffects.prototype._store;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerEffects.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerEffects.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerEffects.prototype._localeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWlCdkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFVOUIsWUFBb0IsUUFBNkIsRUFDN0IsY0FBK0I7UUFEL0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBSDNDLFVBQUssR0FBbUIsRUFBRSxDQUFDO0lBR21CLENBQUM7Ozs7O0lBRXZELElBQUksQ0FBQyxrQkFBcUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUVqQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUlELFFBQVEsQ0FBQyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQs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Q0FBQyxpQkFBaUIsRUFBQyxDQUNqRDthQUNBLFNBQVM7Ozs7UUFBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQzlFLENBQUM7UUFFRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2FBQzdCLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FDOUUsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBOVFGLFVBQVU7Ozs7WUFuQkYsbUJBQW1CO1lBR25CLGVBQWU7Ozs7SUFrQnRCLHVDQUEyQzs7SUFDM0MsMkNBQWtEOztJQUNsRCw2Q0FBc0Q7O0lBQ3RELDRDQUFvRDs7SUFDcEQsc0NBQTZDOzs7OztJQUU3QyxxQ0FBa0M7Ozs7O0lBQ2xDLG9DQUFtQzs7Ozs7SUFFdkIsdUNBQXFDOzs7OztJQUNyQyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vYnMtbG9jYWxlLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmU7XG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIGluaXQoX2JzRGF0ZXBpY2tlclN0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlID0gX2JzRGF0ZXBpY2tlclN0b3JlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogc2V0dGVycyAqL1xuXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QodmFsdWUpKTtcbiAgfVxuXG4gIHNldFJhbmdlVmFsdWUodmFsdWU6IERhdGVbXSk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodmFsdWUpKTtcbiAgfVxuXG4gIHNldE1pbkRhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1pbkRhdGUodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TWF4RGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWF4RGF0ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKTogQnNEYXRlcGlja2VyRWZmZWN0cyAge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF5c0Rpc2FibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMgIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRhdGVzRGlzYWJsZWQodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RGF0ZXNFbmFibGVkKHZhbHVlOiBEYXRlW10pOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRhdGVzRW5hYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXRlQ3VzdG9tQ2xhc3Nlcyh2YWx1ZTogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW10pOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldERhdGVDdXN0b21DbGFzc2VzKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIFNldCByZW5kZXJpbmcgb3B0aW9ucyAqL1xuICBzZXRPcHRpb25zKF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnN0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7bG9jYWxlOiB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGV9LCBfY29uZmlnKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldE9wdGlvbnMoX29wdGlvbnMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIHZpZXcgdG8gbW9kZSBiaW5kaW5ncyAqL1xuICBzZXRCaW5kaW5ncyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29udGFpbmVyLmRheXNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHMpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcbiAgICAgICk7XG5cbiAgICAvLyBtb250aCBjYWxlbmRhclxuICAgIGNvbnRhaW5lci5tb250aHNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHNDYWxlbmRhcilcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxuICAgICAgKTtcblxuICAgIC8vIHllYXIgY2FsZW5kYXJcbiAgICBjb250YWluZXIueWVhcnNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJGbGFnZ2VkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcih5ZWFycyA9PiAhIXllYXJzKVxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lci52aWV3TW9kZSA9IHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3Lm1vZGUpO1xuXG4gICAgY29udGFpbmVyLm9wdGlvbnMgPSB0aGlzLl9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zaG93V2Vla051bWJlcnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHNob3dXZWVrTnVtYmVycyA9PiAoe3Nob3dXZWVrTnVtYmVyc30pKVxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIGV2ZW50IGhhbmRsZXJzICovXG4gIHNldEV2ZW50SGFuZGxlcnMoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIGNvbnRhaW5lci5zZXRWaWV3TW9kZSA9IChldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2hhbmdlVmlld01vZGUoZXZlbnQpKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm5hdmlnYXRlVG8gPSAoZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm5hdmlnYXRlU3RlcChldmVudC5zdGVwKSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5kYXlIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBfY2VsbCA9IGV2ZW50LmNlbGwgYXMgRGF5Vmlld01vZGVsO1xuICAgICAgaWYgKF9jZWxsLmlzT3RoZXJNb250aCB8fCBfY2VsbC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5ob3ZlckRheShldmVudCkpO1xuICAgICAgX2NlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubW9udGhIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnllYXJIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLm1vbnRoU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICBtb250aDogZ2V0TW9udGgoZXZlbnQuZGF0ZSksXG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlld01vZGU6ICdkYXknXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb250YWluZXIueWVhclNlbGVjdEhhbmRsZXIgPSAoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpZXdNb2RlOiAnbW9udGgnXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3KS5zdWJzY3JpYmUodmlldyA9PiB7XG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2FsY3VsYXRlKCkpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gZm9ybWF0IGNhbGVuZGFyIHZhbHVlcyBvbiBtb250aCBtb2RlbCBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc01vZGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIobW9udGhNb2RlbCA9PiAhIW1vbnRoTW9kZWwpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZvcm1hdCgpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtYXR0ZWRNb250aHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihtb250aCA9PiAhIW1vbnRoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkRGF0ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkRGF0ZSA9PiAhIXNlbGVjdGVkRGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZm9yIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZFJhbmdlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWRSYW5nZSA9PiAhIXNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZFJhbmdlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gbW9udGhzQ2FsZW5kYXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc0NhbGVuZGFyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8geWVhcnMgY2FsZW5kYXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHN0YXRlID0+ICEhc3RhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIG9uIGhvdmVyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmVcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ob3ZlcmVkRGF0ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGhvdmVyZWREYXRlID0+ICEhaG92ZXJlZERhdGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShob3ZlcmVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGRhdGUgY3VzdG9tIGNsYXNzZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmRhdGVDdXN0b21DbGFzc2VzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoZGF0ZUN1c3RvbUNsYXNzZXMgPT4gISFkYXRlQ3VzdG9tQ2xhc3NlcylcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGVDdXN0b21DbGFzc2VzID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlXG4gICAgICAgIC5zdWJzY3JpYmUobG9jYWxlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0TG9jYWxlKGxvY2FsZSkpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=