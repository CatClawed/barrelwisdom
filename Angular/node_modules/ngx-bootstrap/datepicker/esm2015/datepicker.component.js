/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
/** @type {?} */
export const DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => DatePickerComponent)),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
export class DatePickerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /**
     * currently active date
     * @return {?}
     */
    get activeDate() {
        return this._activeDate || this._now;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    configureOptions() {
        Object.assign(this, this.config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [
    { type: DatepickerConfig }
];
DatePickerComponent.propDecorators = {
    datepickerMode: [{ type: Input }],
    initDate: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    minMode: [{ type: Input }],
    maxMode: [{ type: Input }],
    showWeeks: [{ type: Input }],
    formatDay: [{ type: Input }],
    formatMonth: [{ type: Input }],
    formatYear: [{ type: Input }],
    formatDayHeader: [{ type: Input }],
    formatDayTitle: [{ type: Input }],
    formatMonthTitle: [{ type: Input }],
    startingDay: [{ type: Input }],
    yearRange: [{ type: Input }],
    onlyCurrentMonth: [{ type: Input }],
    shortcutPropagation: [{ type: Input }],
    monthColLimit: [{ type: Input }],
    yearColLimit: [{ type: Input }],
    customClass: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    dayDisabled: [{ type: Input }],
    activeDate: [{ type: Input }],
    selectionDone: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _datePicker: [{ type: ViewChild, args: [DatePickerInnerComponent, { static: true },] }]
};
if (false) {
    /**
     * sets datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.datepickerMode;
    /**
     * default date to show if `ng-model` value is not specified
     * @type {?}
     */
    DatePickerComponent.prototype.initDate;
    /**
     * oldest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.minDate;
    /**
     * latest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.maxDate;
    /**
     * set lower datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.minMode;
    /**
     * sets upper datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.maxMode;
    /**
     * if false week numbers will be hidden
     * @type {?}
     */
    DatePickerComponent.prototype.showWeeks;
    /**
     * format of day in month
     * @type {?}
     */
    DatePickerComponent.prototype.formatDay;
    /**
     * format of month in year
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonth;
    /**
     * format of year in year range
     * @type {?}
     */
    DatePickerComponent.prototype.formatYear;
    /**
     * format of day in week header
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayHeader;
    /**
     * format of title when selecting day
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayTitle;
    /**
     * format of title when selecting month
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonthTitle;
    /**
     * starting day of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.startingDay;
    /**
     * number of years displayed in year selection
     * @type {?}
     */
    DatePickerComponent.prototype.yearRange;
    /**
     * if true only dates from the currently displayed month will be shown
     * @type {?}
     */
    DatePickerComponent.prototype.onlyCurrentMonth;
    /**
     * if true shortcut`s event propagation will be disabled
     * @type {?}
     */
    DatePickerComponent.prototype.shortcutPropagation;
    /**
     * number of months displayed in a single row of month picker
     * @type {?}
     */
    DatePickerComponent.prototype.monthColLimit;
    /**
     * number of years displayed in a single row of year picker
     * @type {?}
     */
    DatePickerComponent.prototype.yearColLimit;
    /**
     * array of custom css classes to be applied to targeted dates
     * @type {?}
     */
    DatePickerComponent.prototype.customClass;
    /**
     * array of disabled dates
     * @type {?}
     */
    DatePickerComponent.prototype.dateDisabled;
    /**
     * disabled days of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerComponent.prototype.selectionDone;
    /**
     * callback to invoke when the activeDate is changed.
     * @type {?}
     */
    DatePickerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerComponent.prototype._datePicker;
    /** @type {?} */
    DatePickerComponent.prototype.onChange;
    /** @type {?} */
    DatePickerComponent.prototype.onTouched;
    /** @type {?} */
    DatePickerComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    DatePickerComponent.prototype._now;
    /**
     * @type {?}
     * @protected
     */
    DatePickerComponent.prototype._activeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGlDQUFpQyxHQUFhO0lBQ3pELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaOztBQXdDRCxtRUFBbUU7QUFDbkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQThFOUIsWUFBWSxNQUF3Qjs7OztRQTVFM0IsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFZdkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQTJDMUIsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDLENBQUM7Ozs7UUFJdEUscUJBQWdCLEdBQXVCLElBQUksWUFBWSxDQUNyRCxTQUFTLENBQ1YsQ0FBQzs7UUFNRixhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7UUFFbkMsY0FBUyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFJMUIsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFJaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGdC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Ozs7O0lBRWxDLDBDQUE2Qjs7Ozs7SUFFN0Isd0NBQTJCOzs7OztJQUUzQiwrQ0FBbUM7Ozs7O0lBRW5DLGtEQUFzQzs7Ozs7SUFFdEMsNENBQStCOzs7OztJQUUvQiwyQ0FBOEI7Ozs7O0lBRTlCLDBDQUFvRTs7Ozs7SUFFcEUsMkNBQXNEOzs7OztJQUV0RCwwQ0FBK0I7O0lBWS9CLDRDQUNzRTs7Ozs7SUFHdEUsK0NBR0U7O0lBRUYsMENBQ3NDOztJQUd0Qyx1Q0FBbUM7O0lBRW5DLHdDQUFvQzs7SUFFcEMscUNBQXlCOzs7OztJQUV6QixtQ0FBa0M7Ozs7O0lBQ2xDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBQcm92aWRlcixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3ItbmFtZSBjb21wb25lbnQtc2VsZWN0b3ItdHlwZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRhdGVwaWNrZXItaW5uZXIgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHVwZGF0ZSk9XCJvblVwZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImNvbmZpZy5sb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlcGlja2VyTW9kZV09XCJkYXRlcGlja2VyTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2luaXREYXRlXT1cImluaXREYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluTW9kZV09XCJtaW5Nb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4TW9kZV09XCJtYXhNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvd1dlZWtzXT1cInNob3dXZWVrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheV09XCJmb3JtYXREYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aF09XCJmb3JtYXRNb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdFllYXJdPVwiZm9ybWF0WWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheUhlYWRlcl09XCJmb3JtYXREYXlIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlUaXRsZV09XCJmb3JtYXREYXlUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoVGl0bGVdPVwiZm9ybWF0TW9udGhUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3N0YXJ0aW5nRGF5XT1cInN0YXJ0aW5nRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhclJhbmdlXT1cInllYXJSYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2N1c3RvbUNsYXNzXT1cImN1c3RvbUNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZURpc2FibGVkXT1cImRhdGVEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RheURpc2FibGVkXT1cImRheURpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbb25seUN1cnJlbnRNb250aF09XCJvbmx5Q3VycmVudE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvcnRjdXRQcm9wYWdhdGlvbl09XCJzaG9ydGN1dFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbW9udGhDb2xMaW1pdF09XCJtb250aENvbExpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhckNvbExpbWl0XT1cInllYXJDb2xMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkRvbmUpPVwib25TZWxlY3Rpb25Eb25lKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmVEYXRlQ2hhbmdlKT1cIm9uQWN0aXZlRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8ZGF5cGlja2VyIHRhYmluZGV4PVwiMFwiPjwvZGF5cGlja2VyPlxuICAgICAgPG1vbnRocGlja2VyIHRhYmluZGV4PVwiMFwiPjwvbW9udGhwaWNrZXI+XG4gICAgICA8eWVhcnBpY2tlciB0YWJpbmRleD1cIjBcIj48L3llYXJwaWNrZXI+XG4gICAgPC9kYXRlcGlja2VyLWlubmVyPlxuICAgIGAsXG4gIHByb3ZpZGVyczogW0RBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG4vKiB0c2xpbnQ6ZW5hYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIHNldHMgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZSA9ICdkYXknO1xuICAvKiogZGVmYXVsdCBkYXRlIHRvIHNob3cgaWYgYG5nLW1vZGVsYCB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkICovXG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xuICAvKiogIG9sZGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgLyoqIHNldCBsb3dlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcbiAgLyoqIHNldHMgdXBwZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBtYXhNb2RlOiBzdHJpbmc7XG4gIC8qKiBpZiBmYWxzZSB3ZWVrIG51bWJlcnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgc2hvd1dlZWtzID0gdHJ1ZTtcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gbW9udGggKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgbW9udGggaW4geWVhciAqL1xuICBASW5wdXQoKSBmb3JtYXRNb250aDogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHllYXIgaW4geWVhciByYW5nZSAqL1xuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIHdlZWsgaGVhZGVyICovXG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIGRheSAqL1xuICBASW5wdXQoKSBmb3JtYXREYXlUaXRsZTogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIG1vbnRoICovXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcbiAgLyoqIHN0YXJ0aW5nIGRheSBvZiB0aGUgd2VlayBmcm9tIDAtNiAoMD1TdW5kYXksIC4uLiwgNj1TYXR1cmRheSkgKi9cbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4geWVhciBzZWxlY3Rpb24gKi9cbiAgQElucHV0KCkgeWVhclJhbmdlOiBudW1iZXI7XG4gIC8qKiBpZiB0cnVlIG9ubHkgZGF0ZXMgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aCB3aWxsIGJlIHNob3duICovXG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHNob3J0Y3V0YHMgZXZlbnQgcHJvcGFnYXRpb24gd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xuICAvKiogbnVtYmVyIG9mIG1vbnRocyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIG1vbnRoIHBpY2tlciAqL1xuICBASW5wdXQoKSBtb250aENvbExpbWl0OiBudW1iZXI7XG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiB5ZWFyIHBpY2tlciAqL1xuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcbiAgLyoqIGFycmF5IG9mIGN1c3RvbSBjc3MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIHRvIHRhcmdldGVkIGRhdGVzICovXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XG4gIC8qKiBhcnJheSBvZiBkaXNhYmxlZCBkYXRlcyAqL1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH1bXTtcbiAgLyoqIGRpc2FibGVkIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcblxuICAvKiogY3VycmVudGx5IGFjdGl2ZSBkYXRlICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlIHx8IHRoaXMuX25vdztcbiAgfVxuXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcblxuICAvKiogY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIGFjdGl2ZURhdGUgaXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpXG4gIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbiAgQFZpZXdDaGlsZChEYXRlUGlja2VySW5uZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIF9kYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZztcblxuICBwcm90ZWN0ZWQgX25vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IERhdGVwaWNrZXJDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBvblVwZGF0ZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50O1xuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuICB9XG5cbiAgb25TZWxlY3Rpb25Eb25lKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25BY3RpdmVEYXRlQ2hhbmdlKGV2ZW50OiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG4gIC8vIHRvZG86IHN1cHBvcnQgbnVsbCB2YWx1ZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlUGlja2VyLmNvbXBhcmUodmFsdWUsIHRoaXMuX2FjdGl2ZURhdGUpID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fZGF0ZVBpY2tlci5zZWxlY3QodmFsdWUsIGZhbHNlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogdm9pZCAwO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19