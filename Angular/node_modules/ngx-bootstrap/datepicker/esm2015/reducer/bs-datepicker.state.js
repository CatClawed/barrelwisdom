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
export class BsDatepickerState {
}
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
const _initialView = { date: new Date(), mode: 'day' };
/** @type {?} */
export const initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBV0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTdELDJDQUdDOzs7SUFGQyxxQ0FBVzs7SUFDWCxxQ0FBMkI7O0FBRzdCLE1BQU0sT0FBTyxpQkFBaUI7Q0EwRDdCOzs7SUF2REMseUNBQW9COztJQUVwQiwwQ0FBdUI7O0lBR3ZCLGlDQUE0Qjs7SUFFNUIsdUNBQXFCOztJQUVyQixvQ0FBZTs7SUFDZixvQ0FBZTs7SUFDZix5Q0FBd0I7O0lBQ3hCLDBDQUF1Qjs7SUFDdkIseUNBQXNCOztJQUN0QixvQ0FBK0I7O0lBQy9CLDhDQUFrRDs7SUFFbEQsd0NBQW1COztJQUNuQix5Q0FBb0I7O0lBQ3BCLHdDQUFtQjs7SUFHbkIsd0NBQWtDOztJQUNsQyw0Q0FBMEM7O0lBQzFDLDBDQUF3Qzs7SUFDeEMsaURBQStCOztJQUMvQiw4Q0FBNEI7O0lBQzVCLGlEQUErQjs7SUFHL0IsMkNBQTJDOztJQUMzQyxrREFBa0Q7O0lBR2xELCtDQUE4Qzs7SUFDOUMsaURBQWdEOztJQUdoRCw2Q0FBbUM7O0lBR25DLDRDQUEwQjs7SUFDMUIsMENBQXVCOztJQUd2QixtQ0FBZTs7SUFFZix1Q0FBbUI7O0lBQ25CLHNDQUFrQjs7SUFFbEIscUNBQWlCOztJQUNqQix1Q0FBbUI7O0lBQ25CLHNDQUFrQjs7SUFFbEIsd0NBQW9COzs7TUFHaEIsWUFBWSxHQUEwQixFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O0FBRTdFLE1BQU0sT0FBTyxzQkFBc0IsR0FBc0IsTUFBTSxDQUFDLE1BQU0sQ0FDcEUsSUFBSSxrQkFBa0IsRUFBRSxFQUN4QjtJQUNFLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLFlBQVk7SUFDbEIsYUFBYSxFQUFFLEVBQUU7SUFDakIsZ0JBQWdCLEVBQUUsbUJBQW1CO0NBQ3RDLENBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERheXNDYWxlbmRhck1vZGVsLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBNb250aFZpZXdPcHRpb25zLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9udGhPcHRpb25zIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSB7XG4gIGRhdGU6IERhdGU7XG4gIG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xufVxuXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RhdGVcbiAgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucywgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMge1xuICAvLyBkYXRlIHBpY2tlclxuICBzZWxlY3RlZERhdGU/OiBEYXRlO1xuICAvLyBkYXRlcmFuZ2UgcGlja2VyXG4gIHNlbGVjdGVkUmFuZ2U/OiBEYXRlW107XG5cbiAgLy8gaW5pdGlhbCBkYXRlIG9mIGNhbGVuZGFyLCB0b2RheSBieSBkZWZhdWx0XG4gIHZpZXc6IEJzRGF0ZXBpY2tlclZpZXdTdGF0ZTtcblxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgLy8gYm91bmRzXG4gIG1pbkRhdGU/OiBEYXRlO1xuICBtYXhEYXRlPzogRGF0ZTtcbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XG4gIGRhdGVzRW5hYmxlZD86IERhdGVbXTtcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuICBkYXRlQ3VzdG9tQ2xhc3Nlcz86IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuXG4gIGhvdmVyZWREYXRlPzogRGF0ZTtcbiAgaG92ZXJlZE1vbnRoPzogRGF0ZTtcbiAgaG92ZXJlZFllYXI/OiBEYXRlO1xuXG4gIC8vIGRheXMgY2FsZW5kYXJcbiAgbW9udGhzTW9kZWw/OiBEYXlzQ2FsZW5kYXJNb2RlbFtdO1xuICBmb3JtYXR0ZWRNb250aHM/OiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgZmxhZ2dlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG4gIHNob3dQcmV2aW91c01vbnRoPzogYm9vbGVhbjsgLy8gZGF0ZVJhbmdlUGlja2VyIG9ubHk7XG4gIGRpc3BsYXlPbmVNb250aFJhbmdlPzogYm9vbGVhbjsgLy8gZGF0ZVJhbmdlUGlja2VyIG9ubHk7XG5cbiAgLy8gbW9udGhzIGNhbGVuZGFyXG4gIG1vbnRoc0NhbGVuZGFyPzogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcbiAgZmxhZ2dlZE1vbnRoc0NhbGVuZGFyPzogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcblxuICAvLyB5ZWFycyBjYWxlbmRhclxuICB5ZWFyc0NhbGVuZGFyTW9kZWw/OiBZZWFyc0NhbGVuZGFyVmlld01vZGVsW107XG4gIHllYXJzQ2FsZW5kYXJGbGFnZ2VkPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xuXG4gIC8vIG9wdGlvbnNcbiAgbW9udGhWaWV3T3B0aW9uczogTW9udGhWaWV3T3B0aW9ucztcblxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xuICBzaG93V2Vla051bWJlcnM/OiBib29sZWFuO1xuICBkaXNwbGF5TW9udGhzPzogbnVtYmVyO1xuXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG5cbiAgZGF5TGFiZWw6IHN0cmluZztcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB5ZWFyTGFiZWw6IHN0cmluZztcblxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xufVxuXG5jb25zdCBfaW5pdGlhbFZpZXc6IEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSA9IHsgZGF0ZTogbmV3IERhdGUoKSwgbW9kZTogJ2RheScgfTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRlcGlja2VyU3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgbmV3IEJzRGF0ZXBpY2tlckNvbmZpZygpLFxuICB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHZpZXc6IF9pbml0aWFsVmlldyxcbiAgICBzZWxlY3RlZFJhbmdlOiBbXSxcbiAgICBtb250aFZpZXdPcHRpb25zOiBkZWZhdWx0TW9udGhPcHRpb25zXG4gIH1cbik7XG4iXX0=