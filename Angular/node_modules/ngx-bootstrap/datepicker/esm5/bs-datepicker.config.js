/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
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
    BsDatepickerConfig.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerConfig;
}());
export { BsDatepickerConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFhM0M7SUFBQTs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQWtFbkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDOzs7OztRQUszQixtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7UUFHL0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7Ozs7UUFJbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7O1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSXZCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQzs7UUFRdkIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Z0JBM0dBLFVBQVU7O0lBMkdYLHlCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0ExR1ksa0JBQWtCOzs7Ozs7SUFFN0IsOENBQXlCOzs7OztJQUV6QixvQ0FBZTs7Ozs7SUFFZix3Q0FBbUI7O0lBQ25CLG1DQUFzQjs7SUFDdEIsd0NBQXFCOzs7OztJQUlyQixxQ0FBZTs7Ozs7SUFJZixxQ0FBZTs7Ozs7SUFJZiwrQ0FBaUQ7Ozs7O0lBSWpELDBDQUF3Qjs7Ozs7SUFJeEIsMkNBQXVCOzs7Ozs7O0lBTXZCLGtEQUErQjs7Ozs7SUFJL0IsMENBQXNCOzs7OztJQUl0QixrREFBK0I7Ozs7O0lBSy9CLHdDQUFxQjs7Ozs7SUFLckIsaURBQThCOzs7OztJQUs5QiwrQ0FBNEI7Ozs7O0lBSzVCLDhDQUEwQjs7Ozs7SUFLMUIscUNBQStCOzs7OztJQUsvQixnREFBMkI7Ozs7OztJQUszQiw0Q0FBK0I7O0lBRy9CLDJDQUFrQjs7Ozs7SUFJbEIsNkNBQXVCOztJQUV2Qiw2Q0FBc0I7O0lBRXRCLDRDQUF1Qjs7Ozs7SUFJdkIsOENBQXVCOzs7OztJQUt2QixvQ0FBeUI7O0lBR3pCLHdDQUFvQjs7SUFDcEIsdUNBQW1COztJQUNuQixzQ0FBZTs7SUFDZix3Q0FBb0I7O0lBQ3BCLHVDQUFtQjs7SUFDbkIseUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNcbn0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5cblxuLyoqXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XG4gIC8qKiBzZXRzIHVzZSBVVEMgZGF0ZSB0aW1lIGZvcm1hdCAqL1xuICB1c2VVdGMgPSBmYWxzZTtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1heERhdGU/OiBEYXRlO1xuICAvKipcbiAgICogRGVmYXVsdCBkYXRlIGN1c3RvbSBjbGFzc2VzIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBkYXRlQ3VzdG9tQ2xhc3NlczogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW107XG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRheXMsIGUuZy4gWzAsNl0gd2lsbCBkaXNhYmxlIGFsbCBTYXR1cmRheXMgYW5kIFN1bmRheXNcbiAgICovXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcbiAgLyoqXG4gICAqIFNob3cgb25lIG1vbnRocyBmb3Igc3BlY2lhbCBjYXNlcyAob25seSBmb3IgZGF0ZVJhbmdlUGlja2VyKVxuICAgKiAxLiBtYXhEYXRlIGlzIGVxdWFsIHRvIHRvZGF5J3MgZGF0ZVxuICAgKiAyLiBtaW5EYXRlJ3MgbW9udGggaXMgZXF1YWwgdG8gbWF4RGF0ZSdzIG1vbnRoXG4gICAqL1xuICBkaXNwbGF5T25lTW9udGhSYW5nZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBFbmFibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIGRhdGVzRW5hYmxlZD86IERhdGVbXTtcbiAgLyoqXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxuICAgKi9cbiAgc2VsZWN0RnJvbU90aGVyTW9udGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2VsZWN0IGZpcnN0IGRhdGUgb2YgdGhlIHdlZWsgYnkgY2xpY2sgb24gd2VlayBudW1iZXJcbiAgICovXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2VsZWN0IGRhdGVyYW5nZSBhcyBmaXJzdCBhbmQgbGFzdCBkYXkgb2Ygd2VlayBieSBjbGljayBvbiB3ZWVrIG51bWJlciAoZGF0ZVJhbmdlUGlja2VyIG9ubHkpXG4gICAqL1xuICBzZWxlY3RXZWVrRGF0ZVJhbmdlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvd3MgcHJldmlvdXMgYW5kIGN1cnJlbnQgbW9udGgsIGluc3RlYWQgb2YgY3VycmVudCBhbmQgbmV4dCAoZGF0ZVJhbmdlUGlja2VyIG9ubHkpXG4gICAqL1xuICBzaG93UHJldmlvdXNNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBjdXJyZW50IGRheVxuICAgKi9cbiAgY3VzdG9tVG9kYXlDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogRGVmYXVsdCBtb2RlIGZvciBhbGwgZGF0ZSBwaWNrZXJzXG4gICAqL1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHJldHVybnMgZm9jdXMgdG8gdGhlIGRhdGVwaWNrZXIgLyBkYXRlcmFuZ2VwaWNrZXIgaW5wdXQgYWZ0ZXIgZGF0ZSBzZWxlY3Rpb25cbiAgICovXG4gIHJldHVybkZvY3VzVG9JbnB1dCA9IGZhbHNlO1xuXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxuICAgKiB1c3VhbGx5IHVzZWQgdG8gc2V0IGNvbG9yIHRoZW1lXG4gICAqL1xuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XG5cbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbiAgZGlzcGxheU1vbnRocyA9IDE7XG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gaGlkZSB3ZWVrIG51bWJlcnMgaW4gZGF0ZXBpY2tlclxuICAgKi9cbiAgc2hvd1dlZWtOdW1iZXJzID0gdHJ1ZTtcblxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XG4gIC8vIHJhbmdlIHBpY2tlclxuICByYW5nZVNlcGFyYXRvciA9ICcgLSAnO1xuICAvKipcbiAgICogRGF0ZSBmb3JtYXQgZm9yIGRhdGUgcmFuZ2UgaW5wdXQgZmllbGRcbiAgICovXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XG5cbiAgLyoqXG4gICAqIFByZWRlZmluZWQgcmFuZ2VzXG4gICAqL1xuICByYW5nZXM/OiBCc0N1c3RvbURhdGVzW107XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbW9udGhUaXRsZSA9ICdNTU1NJztcbiAgeWVhclRpdGxlID0gJ1lZWVknO1xuICBkYXlMYWJlbCA9ICdEJztcbiAgbW9udGhMYWJlbCA9ICdNTU1NJztcbiAgeWVhckxhYmVsID0gJ1lZWVknO1xuICB3ZWVrTnVtYmVycyA9ICd3Jztcbn1cbiJdfQ==