/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { BsLocaleService } from '../bs-locale.service';
var BsDatepickerEffects = /** @class */ (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    BsDatepickerEffects.prototype.init = /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setValue = /**
     * setters
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMinDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMaxDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDaysDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDatesDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDatesEnabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.datesEnabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDateCustomClasses = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.setDateCustomClasses(value));
        return this;
    };
    /* Set rendering options */
    /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    BsDatepickerEffects.prototype.setOptions = /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    function (_config) {
        /** @type {?} */
        var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setBindings = /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    function (container) {
        container.daysCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.flaggedMonths; }))
            .pipe(filter((/**
         * @param {?} months
         * @return {?}
         */
        function (months) { return !!months; })));
        // month calendar
        container.monthsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.flaggedMonthsCalendar; }))
            .pipe(filter((/**
         * @param {?} months
         * @return {?}
         */
        function (months) { return !!months; })));
        // year calendar
        container.yearsCalendar = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.yearsCalendarFlagged; }))
            .pipe(filter((/**
         * @param {?} years
         * @return {?}
         */
        function (years) { return !!years; })));
        container.viewMode = this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.view.mode; }));
        container.options = this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.showWeekNumbers; }))
            .pipe(map((/**
         * @param {?} showWeekNumbers
         * @return {?}
         */
        function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); })));
        return this;
    };
    /** event handlers */
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setEventHandlers = /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    function (container) {
        var _this = this;
        container.setViewMode = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        });
        container.navigateTo = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        });
        container.dayHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var _cell = (/** @type {?} */ (event.cell));
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        });
        container.monthHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.cell.isHovered = event.isHovered;
        });
        container.yearHoverHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.cell.isHovered = event.isHovered;
        });
        container.monthSelectHandler = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
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
        function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        });
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subs.push(this._store.select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.view; })).subscribe((/**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            _this._store.dispatch(_this._actions.calculate());
        })));
        // format calendar values on month model change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.monthsModel; }))
            .pipe(filter((/**
         * @param {?} monthModel
         * @return {?}
         */
        function (monthModel) { return !!monthModel; })))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return _this._store.dispatch(_this._actions.format()); })));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.formattedMonths; }))
            .pipe(filter((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return !!month; })))
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return _this._store.dispatch(_this._actions.flag()); })));
        // flag day values
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedDate; }))
            .pipe(filter((/**
         * @param {?} selectedDate
         * @return {?}
         */
        function (selectedDate) { return !!selectedDate; })))
            .subscribe((/**
         * @param {?} selectedDate
         * @return {?}
         */
        function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); })));
        // flag for date range picker
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedRange; }))
            .pipe(filter((/**
         * @param {?} selectedRange
         * @return {?}
         */
        function (selectedRange) { return !!selectedRange; })))
            .subscribe((/**
         * @param {?} selectedRange
         * @return {?}
         */
        function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); })));
        // monthsCalendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.monthsCalendar; }))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._store.dispatch(_this._actions.flag()); })));
        // years calendar
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.yearsCalendarModel; }))
            .pipe(filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return !!state; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._store.dispatch(_this._actions.flag()); })));
        // on hover
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.hoveredDate; }))
            .pipe(filter((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        function (hoveredDate) { return !!hoveredDate; })))
            .subscribe((/**
         * @param {?} hoveredDate
         * @return {?}
         */
        function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); })));
        // date custom classes
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.dateCustomClasses; }))
            .pipe(filter((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        function (dateCustomClasses) { return !!dateCustomClasses; })))
            .subscribe((/**
         * @param {?} dateCustomClasses
         * @return {?}
         */
        function (dateCustomClasses) { return _this._store.dispatch(_this._actions.flag()); })));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe((/**
         * @param {?} locale
         * @return {?}
         */
        function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); })));
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.destroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDatepickerEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions },
        { type: BsLocaleService }
    ]; };
    return BsDatepickerEffects;
}());
export { BsDatepickerEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFnQnZEO0lBV0UsNkJBQW9CLFFBQTZCLEVBQzdCLGNBQStCO1FBRC9CLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUgzQyxVQUFLLEdBQW1CLEVBQUUsQ0FBQztJQUdtQixDQUFDOzs7OztJQUV2RCxrQ0FBSTs7OztJQUFKLFVBQUssa0JBQXFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsY0FBYzs7Ozs7O0lBRWQsc0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lB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S0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXpCLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Z0JBOVFGLFVBQVU7Ozs7Z0JBbkJGLG1CQUFtQjtnQkFHbkIsZUFBZTs7SUErUnhCLDBCQUFDO0NBQUEsQUEvUUQsSUErUUM7U0E5UVksbUJBQW1COzs7SUFDOUIsdUNBQTJDOztJQUMzQywyQ0FBa0Q7O0lBQ2xELDZDQUFzRDs7SUFDdEQsNENBQW9EOztJQUNwRCxzQ0FBNkM7Ozs7O0lBRTdDLHFDQUFrQzs7Ozs7SUFDbEMsb0NBQW1DOzs7OztJQUV2Qix1Q0FBcUM7Ozs7O0lBQ3JDLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuLi9icy1sb2NhbGUuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xuXG4gIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZTtcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UpIHt9XG5cbiAgaW5pdChfYnNEYXRlcGlja2VyU3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUgPSBfYnNEYXRlcGlja2VyU3RvcmU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBzZXR0ZXJzICovXG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdCh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0UmFuZ2VWYWx1ZSh2YWx1ZTogRGF0ZVtdKTogdm9pZCB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0TWluRGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWluRGF0ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYXhEYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5tYXhEYXRlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pOiBCc0RhdGVwaWNrZXJFZmZlY3RzICB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5kYXlzRGlzYWJsZWQodmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKTogQnNEYXRlcGlja2VyRWZmZWN0cyAge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF0ZXNEaXNhYmxlZCh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXREYXRlc0VuYWJsZWQodmFsdWU6IERhdGVbXSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF0ZXNFbmFibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERpc2FibGVkKHZhbHVlOiBib29sZWFuKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5pc0Rpc2FibGVkKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldERhdGVDdXN0b21DbGFzc2VzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0RGF0ZUN1c3RvbUNsYXNzZXModmFsdWUpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogU2V0IHJlbmRlcmluZyBvcHRpb25zICovXG4gIHNldE9wdGlvbnMoX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29uc3QgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtsb2NhbGU6IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZX0sIF9jb25maWcpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0T3B0aW9ucyhfb3B0aW9ucykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogdmlldyB0byBtb2RlIGJpbmRpbmdzICovXG4gIHNldEJpbmRpbmdzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcbiAgICBjb250YWluZXIuZGF5c0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRocylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxuICAgICAgKTtcblxuICAgIC8vIG1vbnRoIGNhbGVuZGFyXG4gICAgY29udGFpbmVyLm1vbnRoc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRoc0NhbGVuZGFyKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXG4gICAgICApO1xuXG4gICAgLy8geWVhciBjYWxlbmRhclxuICAgIGNvbnRhaW5lci55ZWFyc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhckZsYWdnZWQpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHllYXJzID0+ICEheWVhcnMpXG4gICAgICApO1xuXG4gICAgY29udGFpbmVyLnZpZXdNb2RlID0gdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcubW9kZSk7XG5cbiAgICBjb250YWluZXIub3B0aW9ucyA9IHRoaXMuX3N0b3JlXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNob3dXZWVrTnVtYmVycylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2hvd1dlZWtOdW1iZXJzID0+ICh7c2hvd1dlZWtOdW1iZXJzfSkpXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogZXZlbnQgaGFuZGxlcnMgKi9cbiAgc2V0RXZlbnRIYW5kbGVycyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgY29udGFpbmVyLnNldFZpZXdNb2RlID0gKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jaGFuZ2VWaWV3TW9kZShldmVudCkpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubmF2aWdhdGVUbyA9IChldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubmF2aWdhdGVTdGVwKGV2ZW50LnN0ZXApKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLmRheUhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IF9jZWxsID0gZXZlbnQuY2VsbCBhcyBEYXlWaWV3TW9kZWw7XG4gICAgICBpZiAoX2NlbGwuaXNPdGhlck1vbnRoIHx8IF9jZWxsLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmhvdmVyRGF5KGV2ZW50KSk7XG4gICAgICBfY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5tb250aEhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIueWVhckhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xuICAgIH07XG5cbiAgICBjb250YWluZXIubW9udGhTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIG1vbnRoOiBnZXRNb250aChldmVudC5kYXRlKSxcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3TW9kZTogJ2RheSdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci55ZWFyU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlld01vZGU6ICdtb250aCdcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcpLnN1YnNjcmliZSh2aWV3ID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jYWxjdWxhdGUoKSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBmb3JtYXQgY2FsZW5kYXIgdmFsdWVzIG9uIG1vbnRoIG1vZGVsIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzTW9kZWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihtb250aE1vZGVsID0+ICEhbW9udGhNb2RlbClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZm9ybWF0KCkpKVxuICAgICk7XG5cbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm1hdHRlZE1vbnRocylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKG1vbnRoID0+ICEhbW9udGgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXG4gICAgKTtcblxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWREYXRlID0+ICEhc2VsZWN0ZWREYXRlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZmxhZyBmb3IgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZFJhbmdlID0+ICEhc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkUmFuZ2UgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBtb250aHNDYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzQ2FsZW5kYXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyB5ZWFycyBjYWxlbmRhclxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoc3RhdGUgPT4gISFzdGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gb24gaG92ZXJcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmhvdmVyZWREYXRlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoaG92ZXJlZERhdGUgPT4gISFob3ZlcmVkRGF0ZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGhvdmVyZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcbiAgICApO1xuXG4gICAgLy8gZGF0ZSBjdXN0b20gY2xhc3Nlc1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZGF0ZUN1c3RvbUNsYXNzZXMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihkYXRlQ3VzdG9tQ2xhc3NlcyA9PiAhIWRhdGVDdXN0b21DbGFzc2VzKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0ZUN1c3RvbUNsYXNzZXMgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxuICAgICk7XG5cbiAgICAvLyBvbiBsb2NhbGUgY2hhbmdlXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2VcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRMb2NhbGUobG9jYWxlKSkpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==