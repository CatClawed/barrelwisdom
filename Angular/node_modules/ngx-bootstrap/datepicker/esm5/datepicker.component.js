/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
/** @type {?} */
export var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return DatePickerComponent; })),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
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
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: /**
         * currently active date
         * @return {?}
         */
        function () {
            return this._activeDate || this._now;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.configureOptions = /**
     * @return {?}
     */
    function () {
        Object.assign(this, this.config);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onUpdate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onSelectionDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDone.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onActiveDateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = 
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig }
    ]; };
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
    return DatePickerComponent;
}());
export { DatePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLGlDQUFpQyxHQUFhO0lBQ3pELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7QUFHRDtJQW9IRSw2QkFBWSxNQUF3Qjs7OztRQTVFM0IsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFZdkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQTJDMUIsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDLENBQUM7Ozs7UUFJdEUscUJBQWdCLEdBQXVCLElBQUksWUFBWSxDQUNyRCxTQUFTLENBQ1YsQ0FBQzs7UUFNRixhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7UUFFbkMsY0FBUyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFJMUIsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFJaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJ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OztJQUUxQix3Q0FBMkI7Ozs7O0lBRTNCLDBDQUE2Qjs7Ozs7SUFFN0IseUNBQTRCOzs7OztJQUU1Qiw4Q0FBaUM7Ozs7O0lBRWpDLDZDQUFnQzs7Ozs7SUFFaEMsK0NBQWtDOzs7OztJQUVsQywwQ0FBNkI7Ozs7O0lBRTdCLHdDQUEyQjs7Ozs7SUFFM0IsK0NBQW1DOzs7OztJQUVuQyxrREFBc0M7Ozs7O0lBRXRDLDRDQUErQjs7Ozs7SUFFL0IsMkNBQThCOzs7OztJQUU5QiwwQ0FBb0U7Ozs7O0lBRXBFLDJDQUFzRDs7Ozs7SUFFdEQsMENBQStCOztJQVkvQiw0Q0FDc0U7Ozs7O0lBR3RFLCtDQUdFOztJQUVGLDBDQUNzQzs7SUFHdEMsdUNBQW1DOztJQUVuQyx3Q0FBb0M7O0lBRXBDLHFDQUF5Qjs7Ozs7SUFFekIsbUNBQWtDOzs7OztJQUNsQywwQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUHJvdmlkZXIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkYXRlcGlja2VyLWlubmVyIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICh1cGRhdGUpPVwib25VcGRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2xvY2FsZV09XCJjb25maWcubG9jYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZXBpY2tlck1vZGVdPVwiZGF0ZXBpY2tlck1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpbml0RGF0ZV09XCJpbml0RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21pbk1vZGVdPVwibWluTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21heE1vZGVdPVwibWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3Nob3dXZWVrc109XCJzaG93V2Vla3NcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXldPVwiZm9ybWF0RGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhdPVwiZm9ybWF0TW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRZZWFyXT1cImZvcm1hdFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXREYXlIZWFkZXJdPVwiZm9ybWF0RGF5SGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5VGl0bGVdPVwiZm9ybWF0RGF5VGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aFRpdGxlXT1cImZvcm1hdE1vbnRoVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzdGFydGluZ0RheV09XCJzdGFydGluZ0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJ5ZWFyUmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjdXN0b21DbGFzc109XCJjdXN0b21DbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGVEaXNhYmxlZF09XCJkYXRlRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkYXlEaXNhYmxlZF09XCJkYXlEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW29ubHlDdXJyZW50TW9udGhdPVwib25seUN1cnJlbnRNb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3Nob3J0Y3V0UHJvcGFnYXRpb25dPVwic2hvcnRjdXRQcm9wYWdhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgW21vbnRoQ29sTGltaXRdPVwibW9udGhDb2xMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJDb2xMaW1pdF09XCJ5ZWFyQ29sTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25Eb25lKT1cIm9uU2VsZWN0aW9uRG9uZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJvbkFjdGl2ZURhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPGRheXBpY2tlciB0YWJpbmRleD1cIjBcIj48L2RheXBpY2tlcj5cbiAgICAgIDxtb250aHBpY2tlciB0YWJpbmRleD1cIjBcIj48L21vbnRocGlja2VyPlxuICAgICAgPHllYXJwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC95ZWFycGlja2VyPlxuICAgIDwvZGF0ZXBpY2tlci1pbm5lcj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuLyogdHNsaW50OmVuYWJsZTpjb21wb25lbnQtc2VsZWN0b3ItbmFtZSBjb21wb25lbnQtc2VsZWN0b3ItdHlwZSAqL1xuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKiBzZXRzIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgZGF0ZXBpY2tlck1vZGUgPSAnZGF5JztcbiAgLyoqIGRlZmF1bHQgZGF0ZSB0byBzaG93IGlmIGBuZy1tb2RlbGAgdmFsdWUgaXMgbm90IHNwZWNpZmllZCAqL1xuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcbiAgLyoqICBvbGRlc3Qgc2VsZWN0YWJsZSBkYXRlICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKiBsYXRlc3Qgc2VsZWN0YWJsZSBkYXRlICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIC8qKiBzZXQgbG93ZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XG4gIC8qKiBzZXRzIHVwcGVyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xuICAvKiogaWYgZmFsc2Ugd2VlayBudW1iZXJzIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIHNob3dXZWVrcyA9IHRydWU7XG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIG1vbnRoICovXG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIG1vbnRoIGluIHllYXIgKi9cbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB5ZWFyIGluIHllYXIgcmFuZ2UgKi9cbiAgQElucHV0KCkgZm9ybWF0WWVhcjogc3RyaW5nO1xuICAvKiogZm9ybWF0IG9mIGRheSBpbiB3ZWVrIGhlYWRlciAqL1xuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB0aXRsZSB3aGVuIHNlbGVjdGluZyBkYXkgKi9cbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcbiAgLyoqIGZvcm1hdCBvZiB0aXRsZSB3aGVuIHNlbGVjdGluZyBtb250aCAqL1xuICBASW5wdXQoKSBmb3JtYXRNb250aFRpdGxlOiBzdHJpbmc7XG4gIC8qKiBzdGFydGluZyBkYXkgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIHllYXIgc2VsZWN0aW9uICovXG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xuICAvKiogaWYgdHJ1ZSBvbmx5IGRhdGVzIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGggd2lsbCBiZSBzaG93biAqL1xuICBASW5wdXQoKSBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzaG9ydGN1dGBzIGV2ZW50IHByb3BhZ2F0aW9uIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcbiAgLyoqIG51bWJlciBvZiBtb250aHMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiBtb250aCBwaWNrZXIgKi9cbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgeWVhciBwaWNrZXIgKi9cbiAgQElucHV0KCkgeWVhckNvbExpbWl0OiBudW1iZXI7XG4gIC8qKiBhcnJheSBvZiBjdXN0b20gY3NzIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byB0YXJnZXRlZCBkYXRlcyAqL1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xuICAvKiogYXJyYXkgb2YgZGlzYWJsZWQgZGF0ZXMgKi9cbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XG4gIC8qKiBkaXNhYmxlZCBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xuICBASW5wdXQoKSBkYXlEaXNhYmxlZDogbnVtYmVyW107XG5cbiAgLyoqIGN1cnJlbnRseSBhY3RpdmUgZGF0ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9ub3c7XG4gIH1cblxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG5cbiAgLyoqIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBhY3RpdmVEYXRlIGlzIGNoYW5nZWQuICovXG4gIEBPdXRwdXQoKVxuICBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIEBWaWV3Q2hpbGQoRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBfZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjb25maWc6IERhdGVwaWNrZXJDb25maWc7XG5cbiAgcHJvdGVjdGVkIF9ub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5jb25maWd1cmVPcHRpb25zKCk7XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKCk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgb25VcGRhdGUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBldmVudDtcbiAgICB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uRG9uZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZShldmVudDogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuICAvLyB0b2RvOiBzdXBwb3J0IG51bGwgdmFsdWVcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci5jb21wYXJlKHZhbHVlLCB0aGlzLl9hY3RpdmVEYXRlKSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2RhdGVQaWNrZXIuc2VsZWN0KHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==