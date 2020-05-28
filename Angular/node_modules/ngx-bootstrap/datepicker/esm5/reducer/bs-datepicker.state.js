/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defaultMonthOptions } from './_defaults';
import { BsDatepickerConfig } from '../bs-datepicker.config';
/**
 * @record
 */
export function BsDatepickerViewState() { }
if (false) {
    /** @type {?} */
    BsDatepickerViewState.prototype.date;
    /** @type {?} */
    BsDatepickerViewState.prototype.mode;
}
var BsDatepickerState = /** @class */ (function () {
    function BsDatepickerState() {
    }
    return BsDatepickerState;
}());
export { BsDatepickerState };
if (false) {
    /** @type {?} */
    BsDatepickerState.prototype.selectedDate;
    /** @type {?} */
    BsDatepickerState.prototype.selectedRange;
    /** @type {?} */
    BsDatepickerState.prototype.view;
    /** @type {?} */
    BsDatepickerState.prototype.isDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.minDate;
    /** @type {?} */
    BsDatepickerState.prototype.maxDate;
    /** @type {?} */
    BsDatepickerState.prototype.daysDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.datesDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.datesEnabled;
    /** @type {?} */
    BsDatepickerState.prototype.minMode;
    /** @type {?} */
    BsDatepickerState.prototype.dateCustomClasses;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredDate;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredMonth;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredYear;
    /** @type {?} */
    BsDatepickerState.prototype.monthsModel;
    /** @type {?} */
    BsDatepickerState.prototype.formattedMonths;
    /** @type {?} */
    BsDatepickerState.prototype.flaggedMonths;
    /** @type {?} */
    BsDatepickerState.prototype.selectFromOtherMonth;
    /** @type {?} */
    BsDatepickerState.prototype.showPreviousMonth;
    /** @type {?} */
    BsDatepickerState.prototype.displayOneMonthRange;
    /** @type {?} */
    BsDatepickerState.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerState.prototype.flaggedMonthsCalendar;
    /** @type {?} */
    BsDatepickerState.prototype.yearsCalendarModel;
    /** @type {?} */
    BsDatepickerState.prototype.yearsCalendarFlagged;
    /** @type {?} */
    BsDatepickerState.prototype.monthViewOptions;
    /** @type {?} */
    BsDatepickerState.prototype.showWeekNumbers;
    /** @type {?} */
    BsDatepickerState.prototype.displayMonths;
    /** @type {?} */
    BsDatepickerState.prototype.locale;
    /** @type {?} */
    BsDatepickerState.prototype.monthTitle;
    /** @type {?} */
    BsDatepickerState.prototype.yearTitle;
    /** @type {?} */
    BsDatepickerState.prototype.dayLabel;
    /** @type {?} */
    BsDatepickerState.prototype.monthLabel;
    /** @type {?} */
    BsDatepickerState.prototype.yearLabel;
    /** @type {?} */
    BsDatepickerState.prototype.weekNumbers;
}
/** @type {?} */
var _initialView = { date: new Date(), mode: 'day' };
/** @type {?} */
export var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBV0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTdELDJDQUdDOzs7SUFGQyxxQ0FBVzs7SUFDWCxxQ0FBMkI7O0FBRzdCO0lBQUE7SUEwREEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQzs7OztJQXZEQyx5Q0FBb0I7O0lBRXBCLDBDQUF1Qjs7SUFHdkIsaUNBQTRCOztJQUU1Qix1Q0FBcUI7O0lBRXJCLG9DQUFlOztJQUNmLG9DQUFlOztJQUNmLHlDQUF3Qjs7SUFDeEIsMENBQXVCOztJQUN2Qix5Q0FBc0I7O0lBQ3RCLG9DQUErQjs7SUFDL0IsOENBQWtEOztJQUVsRCx3Q0FBbUI7O0lBQ25CLHlDQUFvQjs7SUFDcEIsd0NBQW1COztJQUduQix3Q0FBa0M7O0lBQ2xDLDRDQUEwQzs7SUFDMUMsMENBQXdDOztJQUN4QyxpREFBK0I7O0lBQy9CLDhDQUE0Qjs7SUFDNUIsaURBQStCOztJQUcvQiwyQ0FBMkM7O0lBQzNDLGtEQUFrRDs7SUFHbEQsK0NBQThDOztJQUM5QyxpREFBZ0Q7O0lBR2hELDZDQUFtQzs7SUFHbkMsNENBQTBCOztJQUMxQiwwQ0FBdUI7O0lBR3ZCLG1DQUFlOztJQUVmLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUVsQixxQ0FBaUI7O0lBQ2pCLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUVsQix3Q0FBb0I7OztJQUdoQixZQUFZLEdBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7QUFFN0UsTUFBTSxLQUFPLHNCQUFzQixHQUFzQixNQUFNLENBQUMsTUFBTSxDQUNwRSxJQUFJLGtCQUFrQixFQUFFLEVBQ3hCO0lBQ0UsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUUsWUFBWTtJQUNsQixhQUFhLEVBQUUsRUFBRTtJQUNqQixnQkFBZ0IsRUFBRSxtQkFBbUI7Q0FDdEMsQ0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIE1vbnRoVmlld09wdGlvbnMsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb250aE9wdGlvbnMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnNEYXRlcGlja2VyVmlld1N0YXRlIHtcbiAgZGF0ZTogRGF0ZTtcbiAgbW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG59XG5cbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJTdGF0ZVxuICBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIC8vIGRhdGUgcGlja2VyXG4gIHNlbGVjdGVkRGF0ZT86IERhdGU7XG4gIC8vIGRhdGVyYW5nZSBwaWNrZXJcbiAgc2VsZWN0ZWRSYW5nZT86IERhdGVbXTtcblxuICAvLyBpbml0aWFsIGRhdGUgb2YgY2FsZW5kYXIsIHRvZGF5IGJ5IGRlZmF1bHRcbiAgdmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlO1xuXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICAvLyBib3VuZHNcbiAgbWluRGF0ZT86IERhdGU7XG4gIG1heERhdGU/OiBEYXRlO1xuICBkYXlzRGlzYWJsZWQ/OiBudW1iZXJbXTtcbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcbiAgZGF0ZXNFbmFibGVkPzogRGF0ZVtdO1xuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XG4gIGRhdGVDdXN0b21DbGFzc2VzPzogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW107XG5cbiAgaG92ZXJlZERhdGU/OiBEYXRlO1xuICBob3ZlcmVkTW9udGg/OiBEYXRlO1xuICBob3ZlcmVkWWVhcj86IERhdGU7XG5cbiAgLy8gZGF5cyBjYWxlbmRhclxuICBtb250aHNNb2RlbD86IERheXNDYWxlbmRhck1vZGVsW107XG4gIGZvcm1hdHRlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcbiAgc2hvd1ByZXZpb3VzTW9udGg/OiBib29sZWFuOyAvLyBkYXRlUmFuZ2VQaWNrZXIgb25seTtcbiAgZGlzcGxheU9uZU1vbnRoUmFuZ2U/OiBib29sZWFuOyAvLyBkYXRlUmFuZ2VQaWNrZXIgb25seTtcblxuICAvLyBtb250aHMgY2FsZW5kYXJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBmbGFnZ2VkTW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIHllYXJzIGNhbGVuZGFyXG4gIHllYXJzQ2FsZW5kYXJNb2RlbD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgeWVhcnNDYWxlbmRhckZsYWdnZWQ/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG5cbiAgLy8gb3B0aW9uc1xuICBtb250aFZpZXdPcHRpb25zOiBNb250aFZpZXdPcHRpb25zO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbG9jYWxlOiBzdHJpbmc7XG5cbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcblxuICBkYXlMYWJlbDogc3RyaW5nO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG4gIHllYXJMYWJlbDogc3RyaW5nO1xuXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XG59XG5cbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXG4gIHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxuICAgIHNlbGVjdGVkUmFuZ2U6IFtdLFxuICAgIG1vbnRoVmlld09wdGlvbnM6IGRlZmF1bHRNb250aE9wdGlvbnNcbiAgfVxuKTtcbiJdfQ==