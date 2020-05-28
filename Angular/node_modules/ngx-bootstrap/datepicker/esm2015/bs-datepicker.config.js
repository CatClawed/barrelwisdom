/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export class BsDatepickerConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * sets use UTC date time format
         */
        this.useUtc = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * If true, returns focus to the datepicker / daterangepicker input after date selection
         */
        this.returnFocusToInput = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
}
BsDatepickerConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    BsDatepickerConfig.prototype.adaptivePosition;
    /**
     * sets use UTC date time format
     * @type {?}
     */
    BsDatepickerConfig.prototype.useUtc;
    /**
     * turn on/off animation
     * @type {?}
     */
    BsDatepickerConfig.prototype.isAnimated;
    /** @type {?} */
    BsDatepickerConfig.prototype.value;
    /** @type {?} */
    BsDatepickerConfig.prototype.isDisabled;
    /**
     * Default min date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minDate;
    /**
     * Default max date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.maxDate;
    /**
     * Default date custom classes for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.dateCustomClasses;
    /**
     * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
     * @type {?}
     */
    BsDatepickerConfig.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerConfig.prototype.datesDisabled;
    /**
     * Show one months for special cases (only for dateRangePicker)
     * 1. maxDate is equal to today's date
     * 2. minDate's month is equal to maxDate's month
     * @type {?}
     */
    BsDatepickerConfig.prototype.displayOneMonthRange;
    /**
     * Enable specific dates
     * @type {?}
     */
    BsDatepickerConfig.prototype.datesEnabled;
    /**
     * Makes dates from other months active
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectFromOtherMonth;
    /**
     * Allows select first date of the week by click on week number
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectWeek;
    /**
     * Allows select daterange as first and last day of week by click on week number (dateRangePicker only)
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectWeekDateRange;
    /**
     * Shows previous and current month, instead of current and next (dateRangePicker only)
     * @type {?}
     */
    BsDatepickerConfig.prototype.showPreviousMonth;
    /**
     * Add class to current day
     * @type {?}
     */
    BsDatepickerConfig.prototype.customTodayClass;
    /**
     * Default mode for all date pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minMode;
    /**
     * If true, returns focus to the datepicker / daterangepicker input after date selection
     * @type {?}
     */
    BsDatepickerConfig.prototype.returnFocusToInput;
    /**
     * CSS class which will be applied to datepicker container,
     * usually used to set color theme
     * @type {?}
     */
    BsDatepickerConfig.prototype.containerClass;
    /** @type {?} */
    BsDatepickerConfig.prototype.displayMonths;
    /**
     * Allows to hide week numbers in datepicker
     * @type {?}
     */
    BsDatepickerConfig.prototype.showWeekNumbers;
    /** @type {?} */
    BsDatepickerConfig.prototype.dateInputFormat;
    /** @type {?} */
    BsDatepickerConfig.prototype.rangeSeparator;
    /**
     * Date format for date range input field
     * @type {?}
     */
    BsDatepickerConfig.prototype.rangeInputFormat;
    /**
     * Predefined ranges
     * @type {?}
     */
    BsDatepickerConfig.prototype.ranges;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.dayLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.weekNumbers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFjM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQWtFbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDOzs7OztRQUszQixtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7UUFHL0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7Ozs7UUFJbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7O1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSXZCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQzs7UUFRdkIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7O1lBM0dBLFVBQVU7Ozs7Ozs7SUFHVCw4Q0FBeUI7Ozs7O0lBRXpCLG9DQUFlOzs7OztJQUVmLHdDQUFtQjs7SUFDbkIsbUNBQXNCOztJQUN0Qix3Q0FBcUI7Ozs7O0lBSXJCLHFDQUFlOzs7OztJQUlmLHFDQUFlOzs7OztJQUlmLCtDQUFpRDs7Ozs7SUFJakQsMENBQXdCOzs7OztJQUl4QiwyQ0FBdUI7Ozs7Ozs7SUFNdkIsa0RBQStCOzs7OztJQUkvQiwwQ0FBc0I7Ozs7O0lBSXRCLGtEQUErQjs7Ozs7SUFLL0Isd0NBQXFCOzs7OztJQUtyQixpREFBOEI7Ozs7O0lBSzlCLCtDQUE0Qjs7Ozs7SUFLNUIsOENBQTBCOzs7OztJQUsxQixxQ0FBK0I7Ozs7O0lBSy9CLGdEQUEyQjs7Ozs7O0lBSzNCLDRDQUErQjs7SUFHL0IsMkNBQWtCOzs7OztJQUlsQiw2Q0FBdUI7O0lBRXZCLDZDQUFzQjs7SUFFdEIsNENBQXVCOzs7OztJQUl2Qiw4Q0FBdUI7Ozs7O0lBS3ZCLG9DQUF5Qjs7SUFHekIsd0NBQW9COztJQUNwQix1Q0FBbUI7O0lBQ25CLHNDQUFlOztJQUNmLHdDQUFvQjs7SUFDcEIsdUNBQW1COztJQUNuQix5Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1xufSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcblxuXG4vKipcbiAqIEZvciBkYXRlIHJhbmdlIHBpY2tlciB0aGVyZSBhcmUgYEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnYCB3aGljaCBpbmhlcml0cyBhbGwgcHJvcGVydGllcyxcbiAqIGV4Y2VwdCBgZGlzcGxheU1vbnRoc2AsIGZvciByYW5nZSBwaWNrZXIgaXQgZGVmYXVsdCB0byBgMmBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbmZpZyBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIGFkYXB0aXZlUG9zaXRpb24gPSBmYWxzZTtcbiAgLyoqIHNldHMgdXNlIFVUQyBkYXRlIHRpbWUgZm9ybWF0ICovXG4gIHVzZVV0YyA9IGZhbHNlO1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlO1xuICAvKipcbiAgICogRGVmYXVsdCBtYXggZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGRhdGUgY3VzdG9tIGNsYXNzZXMgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIGRhdGVDdXN0b21DbGFzc2VzOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXTtcbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF5cywgZS5nLiBbMCw2XSB3aWxsIGRpc2FibGUgYWxsIFNhdHVyZGF5cyBhbmQgU3VuZGF5c1xuICAgKi9cbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICAvKipcbiAgICogU2hvdyBvbmUgbW9udGhzIGZvciBzcGVjaWFsIGNhc2VzIChvbmx5IGZvciBkYXRlUmFuZ2VQaWNrZXIpXG4gICAqIDEuIG1heERhdGUgaXMgZXF1YWwgdG8gdG9kYXkncyBkYXRlXG4gICAqIDIuIG1pbkRhdGUncyBtb250aCBpcyBlcXVhbCB0byBtYXhEYXRlJ3MgbW9udGhcbiAgICovXG4gIGRpc3BsYXlPbmVNb250aFJhbmdlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgZGF0ZXNFbmFibGVkPzogRGF0ZVtdO1xuICAvKipcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXG4gICAqL1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyBzZWxlY3QgZmlyc3QgZGF0ZSBvZiB0aGUgd2VlayBieSBjbGljayBvbiB3ZWVrIG51bWJlclxuICAgKi9cbiAgc2VsZWN0V2Vlaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyBzZWxlY3QgZGF0ZXJhbmdlIGFzIGZpcnN0IGFuZCBsYXN0IGRheSBvZiB3ZWVrIGJ5IGNsaWNrIG9uIHdlZWsgbnVtYmVyIChkYXRlUmFuZ2VQaWNrZXIgb25seSlcbiAgICovXG4gIHNlbGVjdFdlZWtEYXRlUmFuZ2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93cyBwcmV2aW91cyBhbmQgY3VycmVudCBtb250aCwgaW5zdGVhZCBvZiBjdXJyZW50IGFuZCBuZXh0IChkYXRlUmFuZ2VQaWNrZXIgb25seSlcbiAgICovXG4gIHNob3dQcmV2aW91c01vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XG4gICAqL1xuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcbiAgICovXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgcmV0dXJucyBmb2N1cyB0byB0aGUgZGF0ZXBpY2tlciAvIGRhdGVyYW5nZXBpY2tlciBpbnB1dCBhZnRlciBkYXRlIHNlbGVjdGlvblxuICAgKi9cbiAgcmV0dXJuRm9jdXNUb0lucHV0ID0gZmFsc2U7XG5cbiAgLyoqIENTUyBjbGFzcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gZGF0ZXBpY2tlciBjb250YWluZXIsXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcbiAgICovXG4gIGNvbnRhaW5lckNsYXNzID0gJ3RoZW1lLWdyZWVuJztcblxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgLyoqXG4gICAqIEFsbG93cyB0byBoaWRlIHdlZWsgbnVtYmVycyBpbiBkYXRlcGlja2VyXG4gICAqL1xuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xuXG4gIGRhdGVJbnB1dEZvcm1hdCA9ICdMJztcbiAgLy8gcmFuZ2UgcGlja2VyXG4gIHJhbmdlU2VwYXJhdG9yID0gJyAtICc7XG4gIC8qKlxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxuICAgKi9cbiAgcmFuZ2VJbnB1dEZvcm1hdCA9ICdMJztcblxuICAvKipcbiAgICogUHJlZGVmaW5lZCByYW5nZXNcbiAgICovXG4gIHJhbmdlcz86IEJzQ3VzdG9tRGF0ZXNbXTtcblxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuICBtb250aFRpdGxlID0gJ01NTU0nO1xuICB5ZWFyVGl0bGUgPSAnWVlZWSc7XG4gIGRheUxhYmVsID0gJ0QnO1xuICBtb250aExhYmVsID0gJ01NTU0nO1xuICB5ZWFyTGFiZWwgPSAnWVlZWSc7XG4gIHdlZWtOdW1iZXJzID0gJ3cnO1xufVxuIl19