/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
if (false) {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
if (false) {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isSelected;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
if (false) {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonthHovered;
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isToday;
    /** @type {?|undefined} */
    DayViewModel.prototype.customClasses;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
if (false) {
    /** @type {?} */
    WeekViewModel.prototype.days;
    /** @type {?|undefined} */
    WeekViewModel.prototype.isHovered;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
if (false) {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
if (false) {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
if (false) {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
if (false) {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
if (false) {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
if (false) {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
if (false) {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/**
 * @record
 */
export function DatepickerDateCustomClasses() { }
if (false) {
    /** @type {?} */
    DatepickerDateCustomClasses.prototype.date;
    /** @type {?} */
    DatepickerDateCustomClasses.prototype.classes;
}
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';
/**
 * @record
 */
export function BsNavigationEvent() { }
if (false) {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
if (false) {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
if (false) {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSx5Q0FPQzs7O0lBTkMseUNBQW1COztJQUNuQix3Q0FBa0I7O0lBQ2xCLDRDQUF3Qjs7SUFDeEIsNkNBQXlCOztJQUN6QiwrQ0FBMkI7O0lBQzNCLGdEQUE0Qjs7Ozs7QUFHOUIsMkNBTUM7OztJQUxDLHFDQUFXOztJQUNYLHNDQUFjOztJQUNkLDJDQUFxQjs7SUFDckIsMENBQW9COztJQUNwQiwyQ0FBcUI7Ozs7OztBQUt2QixrQ0FZQzs7O0lBWEMsMkNBQThCOztJQUM5QixvQ0FBdUI7O0lBQ3ZCLGlDQUFvQjs7SUFDcEIsd0NBQTJCOztJQUMzQixzQ0FBeUI7O0lBQ3pCLCtCQUFrQjs7SUFDbEIscUNBQXVCOztJQUV2QixrQ0FBb0I7O0lBQ3BCLGlDQUFtQjs7SUFDbkIsZ0NBQWtCOzs7OztBQUdwQixtQ0FHQzs7O0lBRkMsNkJBQXFCOztJQUNyQixrQ0FBb0I7Ozs7O0FBSXRCLDJDQU1DOzs7SUFMQyxzQ0FBdUI7O0lBRXZCLHNDQUFZOztJQUNaLDRDQUFzQjs7SUFDdEIseUNBQW1COzs7Ozs7QUFLckIsNkNBRUM7OztJQURDLHlDQUFrQzs7Ozs7O0FBS3BDLDRDQUVDOzs7SUFEQyx1Q0FBaUM7Ozs7OztBQVNuQyx1Q0FHQzs7O0lBRkMsdUNBQXFCOztJQUNyQixrQ0FBWTs7Ozs7O0FBS2Qsc0NBSUM7OztJQUhDLGlDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsMENBQXdCOzs7Ozs7QUFLMUIsNkNBV0M7OztJQVZDLHlDQUFlOztJQUVmLDZDQUFtQjs7SUFDbkIsNENBQWtCOztJQUVsQiwyQ0FBaUI7O0lBQ2pCLDZDQUFtQjs7SUFDbkIsNENBQWtCOztJQUVsQiw4Q0FBb0I7Ozs7O0FBR3RCLDZDQUdDOzs7SUFGQyxrREFBMEI7O0lBQzFCLGdEQUF1Qjs7Ozs7QUFHekIsaURBR0M7OztJQUZDLDJDQUFXOztJQUNYLDhDQUFrQjs7OztJQU9sQixLQUFFO0lBQ0YsT0FBSTs7Ozs7Ozs7QUFJTix1Q0FHQzs7O0lBRkMsc0NBQWtDOztJQUNsQyxpQ0FBZ0I7Ozs7O0FBR2xCLDJDQUdDOzs7SUFGQyxxQ0FBZ0I7O0lBQ2hCLHlDQUErQjs7Ozs7QUFHakMsb0NBR0M7OztJQUZDLDhCQUE0Qjs7SUFDNUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgdHlwZSBCc0RhdGVwaWNrZXJWaWV3TW9kZSA9ICdkYXknIHwgJ21vbnRoJyB8ICd5ZWFyJztcblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gbmF2aWdhdGlvbiBiYXIgc2V0dGluZ3NcbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvblZpZXdNb2RlbCB7XG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG4gIGhpZGVMZWZ0QXJyb3c/OiBib29sZWFuO1xuICBoaWRlUmlnaHRBcnJvdz86IGJvb2xlYW47XG4gIGRpc2FibGVMZWZ0QXJyb3c/OiBib29sZWFuO1xuICBkaXNhYmxlUmlnaHRBcnJvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJDZWxsVmlld01vZGVsIHtcbiAgZGF0ZTogRGF0ZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIGlzSG92ZXJlZD86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBkYXlzIG1hdHJpeDogZGF5IGNlbGwgdmlldyBtb2RlbFxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3TW9kZWwgZXh0ZW5kcyBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xuICBpc090aGVyTW9udGhIb3ZlcmVkPzogYm9vbGVhbjtcbiAgaXNPdGhlck1vbnRoPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgaXNTZWxlY3Rpb25TdGFydD86IGJvb2xlYW47XG4gIGlzU2VsZWN0aW9uRW5kPzogYm9vbGVhbjtcbiAgaXNUb2RheT86IGJvb2xlYW47XG4gIGN1c3RvbUNsYXNzZXM/OiBzdHJpbmc7XG4gIC8vIGRheSBpbmRleFxuICBtb250aEluZGV4PzogbnVtYmVyO1xuICB3ZWVrSW5kZXg/OiBudW1iZXI7XG4gIGRheUluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3TW9kZWwge1xuICBkYXlzOiBEYXlWaWV3TW9kZWxbXTtcbiAgaXNIb3ZlcmVkPzogYm9vbGVhbjtcbn1cblxuLy8gdG9kbzogc3BsaXQgbmF2aWdhdGlvbiBzZXR0aW5nc1xuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgd2Vla3M6IFdlZWtWaWV3TW9kZWxbXTtcbiAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICBtb250aDogRGF0ZTtcbiAgd2Vla051bWJlcnM6IHN0cmluZ1tdO1xuICB3ZWVrZGF5czogc3RyaW5nW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG1vbnRocyBjYWxlbmRhclxuZXhwb3J0IGludGVyZmFjZSBNb250aHNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIHllYXJzIGNhbGVuZGFyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cblxuLy8gbWF0aCBtb2RlbFxuLyoqICoqKioqKioqKioqKioqKiAqL1xuXG4vLyBkYXlzIERhdGUncyBhcnJheVxuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJNb2RlbCB7XG4gIGRheXNNYXRyaXg6IERhdGVbXVtdO1xuICBtb250aDogRGF0ZTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gc29tZSBmdW5jIG9wdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3T3B0aW9ucyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyByZW5kZXJpbmcgb3B0aW9uc1xuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG5cbiAgZGF5TGFiZWw6IHN0cmluZztcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB5ZWFyTGFiZWw6IHN0cmluZztcblxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgc2hvd1dlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgZGlzcGxheU1vbnRocz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMge1xuICBkYXRlOiBEYXRlO1xuICBjbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gZXZlbnRzXG4vKiogKioqKioqKioqKioqKioqICovXG5leHBvcnQgZW51bSBCc05hdmlnYXRpb25EaXJlY3Rpb24ge1xuICBVUCxcbiAgRE9XTlxufVxuXG4vLyB1c2VkIGZvciBuYXZpZ2F0aW9uIGV2ZW50cywgdG8gY2hhbmdlIHZpZXcgZGF0ZSBpbiBzdGF0ZVxuZXhwb3J0IGludGVyZmFjZSBCc05hdmlnYXRpb25FdmVudCB7XG4gIGRpcmVjdGlvbj86IEJzTmF2aWdhdGlvbkRpcmVjdGlvbjtcbiAgc3RlcD86IFRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJzVmlld05hdmlnYXRpb25FdmVudCB7XG4gIHVuaXQ/OiBUaW1lVW5pdDtcbiAgdmlld01vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGxIb3ZlckV2ZW50IHtcbiAgY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsO1xuICBpc0hvdmVyZWQ6IGJvb2xlYW47XG59XG4iXX0=