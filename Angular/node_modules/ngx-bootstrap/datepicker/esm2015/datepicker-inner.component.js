/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable: max-file-line-count */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateFormatter } from './date-formatter';
export class DatePickerInnerComponent {
    constructor() {
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    ngOnInit() {
        // todo: use date for unique value
        this.uniqueId = `datepicker--${Math.floor(Math.random() * 10000)}`;
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    }
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    }
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    checkIfActiveDateGotUpdated(activeDate) {
        if (activeDate && !activeDate.firstChange) {
            /** @type {?} */
            const previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setCompareHandler(handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    compare(date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setRefreshViewHandler(handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    dateFilter(date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    isActive(dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    createDateObject(date, format) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    split(arr, size) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    fixTimeZone(date) {
        /** @type {?} */
        const hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    }
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    select(date, isManual = true) {
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    move(direction) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        let expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            /** @type {?} */
            const year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            /** @type {?} */
            const month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    }
    /**
     * @param {?} _direction
     * @return {?}
     */
    toggleMode(_direction) {
        /** @type {?} */
        const direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    }
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    getCustomClassForDate(date) {
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        /** @type {?} */
        const customClassObject = this.customClass.find((/**
         * @param {?} customClass
         * @return {?}
         */
        (customClass) => {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === this.datepickerMode);
        }), this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    }
    /**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    compareDateDisabled(date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    }
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        /** @type {?} */
        let isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((/**
             * @param {?} disabledDate
             * @return {?}
             */
            (disabledDate) => {
                if (this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            }));
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    }
}
DatePickerInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-inner',
                template: `
    <!--&lt;!&ndash;ng-keydown="keydown($event)"&ndash;&gt;-->
    <div *ngIf="datepickerMode" class="well well-sm bg-faded p-a card" role="application" >
      <ng-content></ng-content>
    </div>
  `
            }] }
];
DatePickerInnerComponent.propDecorators = {
    locale: [{ type: Input }],
    datepickerMode: [{ type: Input }],
    startingDay: [{ type: Input }],
    yearRange: [{ type: Input }],
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
    onlyCurrentMonth: [{ type: Input }],
    shortcutPropagation: [{ type: Input }],
    customClass: [{ type: Input }],
    monthColLimit: [{ type: Input }],
    yearColLimit: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    dayDisabled: [{ type: Input }],
    initDate: [{ type: Input }],
    selectionDone: [{ type: Output }],
    update: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    activeDate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatePickerInnerComponent.prototype.locale;
    /** @type {?} */
    DatePickerInnerComponent.prototype.datepickerMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.startingDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearRange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.showWeeks;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayHeader;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonthTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.onlyCurrentMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.shortcutPropagation;
    /** @type {?} */
    DatePickerInnerComponent.prototype.customClass;
    /** @type {?} */
    DatePickerInnerComponent.prototype.monthColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dateDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.initDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.selectionDone;
    /** @type {?} */
    DatePickerInnerComponent.prototype.update;
    /** @type {?} */
    DatePickerInnerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.uniqueId;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.modes;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.dateFormatter;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype._activeDate;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.selectedDate;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.activeDateId;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.refreshViewHandlerDay;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.compareHandlerDay;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.refreshViewHandlerMonth;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.compareHandlerMonth;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.refreshViewHandlerYear;
    /**
     * @type {?}
     * @protected
     */
    DatePickerInnerComponent.prototype.compareHandlerYear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWWpELE1BQU0sT0FBTyx3QkFBd0I7SUFUckM7UUFtQ1ksa0JBQWEsR0FBdUIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDLENBQUM7UUFDdEUsV0FBTSxHQUF1QixJQUFJLFlBQVksQ0FBTyxLQUFLLENBQUMsQ0FBQztRQUMzRCxxQkFBZ0IsR0FBdUIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBR25GLFlBQU8sR0FBUSxFQUFFLENBQUM7O1FBRWxCLGNBQVMsR0FBUSxFQUFFLENBQUM7O1FBRXBCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFJVCxVQUFLLEdBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLGtCQUFhLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7SUFxVS9ELENBQUM7Ozs7SUF6VEMsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBVztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELFFBQVE7UUFDTixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBSSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7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RSxvREFBbUY7O0lBR25GLDJDQUFrQjs7SUFFbEIsNkNBQW9COztJQUVwQiw0Q0FBbUI7O0lBRW5CLDRDQUFpQjs7Ozs7SUFFakIseUNBQXFEOzs7OztJQUNyRCxpREFBNkQ7Ozs7O0lBQzdELCtDQUE0Qjs7Ozs7SUFDNUIsZ0RBQTZCOzs7OztJQUM3QixnREFBK0I7Ozs7O0lBRS9CLHlEQUEwQzs7Ozs7SUFDMUMscURBQXNDOzs7OztJQUN0QywyREFBNEM7Ozs7O0lBQzVDLHVEQUF3Qzs7Ozs7SUFDeEMsMERBQTJDOzs7OztJQUMzQyxzREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9kYXRlLWZvcm1hdHRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1pbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSZsdDshJm5kYXNoO25nLWtleWRvd249XCJrZXlkb3duKCRldmVudClcIiZuZGFzaDsmZ3Q7LS0+XG4gICAgPGRpdiAqbmdJZj1cImRhdGVwaWNrZXJNb2RlXCIgY2xhc3M9XCJ3ZWxsIHdlbGwtc20gYmctZmFkZWQgcC1hIGNhcmRcIiByb2xlPVwiYXBwbGljYXRpb25cIiA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcbiAgQElucHV0KCkgZGF0ZXBpY2tlck1vZGU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcbiAgQElucHV0KCkgeWVhclJhbmdlOiBudW1iZXI7XG5cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhNb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dXZWVrczogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwRGF5OiBhbnkgPSB7fTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBzdGVwTW9udGg6IGFueSA9IHt9O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHN0ZXBZZWFyOiBhbnkgPSB7fTtcblxuICB1bmlxdWVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBtb2Rlczogc3RyaW5nW10gPSBbJ2RheScsICdtb250aCcsICd5ZWFyJ107XG4gIHByb3RlY3RlZCBkYXRlRm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyID0gbmV3IERhdGVGb3JtYXR0ZXIoKTtcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xuICBwcm90ZWN0ZWQgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBwcm90ZWN0ZWQgYWN0aXZlRGF0ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlckRheTogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlckRheTogRnVuY3Rpb247XG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJNb250aDogRnVuY3Rpb247XG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlclllYXI6IEZ1bmN0aW9uO1xuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJZZWFyOiBGdW5jdGlvbjtcblxuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGZvcm1hdHRlciB2YWx1ZSB0byBEYXRlIG9iamVjdFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiB1c2UgZGF0ZSBmb3IgdW5pcXVlIHZhbHVlXG4gICAgdGhpcy51bmlxdWVJZCA9ICBgZGF0ZXBpY2tlci0tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCl9YDtcblxuICAgIGlmICh0aGlzLmluaXREYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmluaXREYXRlO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMucmVmcmVzaFZpZXcgc2hvdWxkIGJlIGNhbGxlZCBoZXJlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgb24gdGhlIGZseVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLXZhcmlhYmxlXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgdGhpcy5jaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoY2hhbmdlcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFjdGl2ZURhdGUgaGFzIGJlZW4gdXBkYXRlIGFuZCB0aGVuIGVtaXQgdGhlIGFjdGl2ZURhdGVDaGFuZ2Ugd2l0aCB0aGUgbmV3IGRhdGVcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGFjdGl2ZURhdGU6IGFueSk6IHZvaWQge1xuICAgIGlmIChhY3RpdmVEYXRlICYmICFhY3RpdmVEYXRlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlO1xuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c1ZhbHVlICYmXG4gICAgICAgIHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgICAgIHByZXZpb3VzVmFsdWUuZ2V0VGltZSgpICE9PSBhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZS5nZXRUaW1lKClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENvbXBhcmVIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyID0gaGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGRhdGUxID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTEsIGRhdGUyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG5cbiAgc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5ID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyID0gaGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkpIHtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIoKTtcbiAgICB9XG4gIH1cblxuICBkYXRlRmlsdGVyKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdChkYXRlLCBmb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgaXNBY3RpdmUoZGF0ZU9iamVjdDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29tcGFyZShkYXRlT2JqZWN0LmRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgPT09IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUlkID0gZGF0ZU9iamVjdC51aWQ7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgY3JlYXRlRGF0ZU9iamVjdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IGFueSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IGRhdGVPYmplY3Q6IGFueSA9IHt9O1xuICAgIGRhdGVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKClcbiAgICApO1xuICAgIGRhdGVPYmplY3QuZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZU9iamVjdC5kYXRlKTtcbiAgICBkYXRlT2JqZWN0LmxhYmVsID0gdGhpcy5kYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCk7XG4gICAgZGF0ZU9iamVjdC5zZWxlY3RlZCA9IHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkgPT09IDA7XG4gICAgZGF0ZU9iamVjdC5kaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZChkYXRlKTtcbiAgICBkYXRlT2JqZWN0LmN1cnJlbnQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDA7XG4gICAgZGF0ZU9iamVjdC5jdXN0b21DbGFzcyA9IHRoaXMuZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGVPYmplY3QuZGF0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZU9iamVjdDtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgc3BsaXQoYXJyOiBhbnlbXSwgc2l6ZTogbnVtYmVyKTogYW55W10ge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBhcnJheXM6IGFueVtdID0gW107XG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICBhcnJheXMucHVzaChhcnIuc3BsaWNlKDAsIHNpemUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlzO1xuICB9XG5cbiAgLy8gRml4IGEgaGFyZC1yZXByb2R1Y2libGUgYnVnIHdpdGggdGltZXpvbmVzXG4gIC8vIFRoZSBidWcgZGVwZW5kcyBvbiBPUywgYnJvd3NlciwgY3VycmVudCB0aW1lem9uZSBhbmQgY3VycmVudCBkYXRlXG4gIC8vIGkuZS5cbiAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgyMDE0LCAwLCAxKTtcbiAgLy8gY29uc29sZS5sb2coZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLFxuICAvLyBkYXRlLmdldEhvdXJzKCkpOyBjYW4gcmVzdWx0IGluIFwiMjAxMyAxMSAzMSAyM1wiIGJlY2F1c2Ugb2YgdGhlIGJ1Zy5cbiAgZml4VGltZVpvbmUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKCksXG4gICAgICBob3VycyA9PT0gMjMgPyBob3VycyArIDIgOiAwXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdChkYXRlOiBEYXRlLCBpc01hbnVhbCA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBkYXRlLmdldERhdGUoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGlmIChpc01hbnVhbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xuICAgICAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSAtIDFcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBtb3ZlKGRpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGxldCBleHBlY3RlZFN0ZXA6IGFueTtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScpIHtcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcERheTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwTW9udGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJykge1xuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwWWVhcjtcbiAgICB9XG5cbiAgICBpZiAoZXhwZWN0ZWRTdGVwKSB7XG4gICAgICBjb25zdCB5ZWFyID1cbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLnllYXJzIHx8IDApO1xuICAgICAgY29uc3QgbW9udGggPVxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAubW9udGhzIHx8IDApO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU1vZGUoX2RpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gX2RpcmVjdGlvbiB8fCAxO1xuXG4gICAgaWYgKFxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWF4TW9kZSAmJiBkaXJlY3Rpb24gPT09IDEpIHx8XG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlICYmIGRpcmVjdGlvbiA9PT0gLTEpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXG4gICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgKyBkaXJlY3Rpb25cbiAgICBdO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIC8vIHRvZG86IGJ1aWxkIGEgaGFzaCBvZiBjdXN0b20gY2xhc3NlcywgaXQgd2lsbCB3b3JrIGZhc3RlclxuICAgIGNvbnN0IGN1c3RvbUNsYXNzT2JqZWN0OiB7XG4gICAgICBkYXRlOiBEYXRlO1xuICAgICAgbW9kZTogc3RyaW5nO1xuICAgICAgY2xheno6IHN0cmluZztcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIH0gPSB0aGlzLmN1c3RvbUNsYXNzLmZpbmQoKGN1c3RvbUNsYXNzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGN1c3RvbUNsYXNzLmRhdGUudmFsdWVPZigpID09PSBkYXRlLnZhbHVlT2YoKSAmJlxuICAgICAgICBjdXN0b21DbGFzcy5tb2RlID09PSB0aGlzLmRhdGVwaWNrZXJNb2RlXG4gICAgICApO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUNsYXNzT2JqZWN0ID09PSB1bmRlZmluZWQgPyAnJyA6IGN1c3RvbUNsYXNzT2JqZWN0LmNsYXp6O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbXBhcmVEYXRlRGlzYWJsZWQoXG4gICAgZGF0ZTFEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSxcbiAgICBkYXRlMjogRGF0ZVxuICApOiBudW1iZXIge1xuICAgIGlmIChkYXRlMURpc2FibGVkID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0RhdGVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmRhdGVEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXRlRGlzYWJsZWQuZm9yRWFjaChcbiAgICAgICAgKGRpc2FibGVkRGF0ZTogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlRGlzYWJsZWQoZGlzYWJsZWREYXRlLCBkYXRlKSA9PT0gMCkge1xuICAgICAgICAgICAgaXNEYXRlRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXlEaXNhYmxlZCkge1xuICAgICAgaXNEYXRlRGlzYWJsZWQgPVxuICAgICAgICBpc0RhdGVEaXNhYmxlZCB8fFxuICAgICAgICB0aGlzLmRheURpc2FibGVkLmluZGV4T2YoZGF0ZS5nZXREYXkoKSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLm1pbkRhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPCAwKSB8fFxuICAgICAgKHRoaXMubWF4RGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA+IDApXG4gICAgKTtcbiAgfVxufVxuIl19