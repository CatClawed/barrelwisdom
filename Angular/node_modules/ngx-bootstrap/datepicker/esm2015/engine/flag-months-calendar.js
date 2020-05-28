/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isSameMonth, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled, isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagMonthCalendarOptions() { }
if (false) {
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.hoveredMonth;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.monthIndex;
}
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
export function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((/**
     * @param {?} months
     * @param {?} rowIndex
     * @return {?}
     */
    (months, rowIndex) => {
        months.forEach((/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */
        (month, monthIndex) => {
            /** @type {?} */
            const isHovered = isSameMonth(month.date, options.hoveredMonth);
            /** @type {?} */
            const isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            /** @type {?} */
            const isSelected = isSameMonth(month.date, options.selectedDate);
            /** @type {?} */
            const newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled,
                isSelected
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled ||
                month.isSelected !== newMonth.isSelected) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        }));
    }));
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1tb250aHMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUU3RSw4Q0FRQzs7O0lBUEMsOENBQW9COztJQUNwQiwyQ0FBYzs7SUFDZCwyQ0FBYzs7SUFDZCxnREFBbUI7O0lBQ25CLGdEQUFtQjs7SUFDbkIsaURBQXNCOztJQUN0Qiw4Q0FBbUI7Ozs7Ozs7QUFHckIsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxhQUFzQyxFQUN0QyxPQUFpQztJQUVqQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7O0lBQzFCLENBQUMsTUFBK0IsRUFBRSxRQUFnQixFQUFFLEVBQUU7UUFDcEQsTUFBTSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxLQUE0QixFQUFFLFVBQWtCLEVBQUUsRUFBRTs7a0JBQzVELFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDOztrQkFDekQsVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7O2tCQUN6RCxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQzs7a0JBQzFELFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixVQUFVO2FBQ1gsQ0FBQztZQUNGLElBQ0UsS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsU0FBUztnQkFDdEMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFBVTtnQkFDeEMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFBVSxFQUN4QztnQkFDQSxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUN2RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUNGLENBQUM7SUFFRix1Q0FBdUM7SUFDdkMsYUFBYSxDQUFDLGFBQWE7UUFDekIsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3pFLGFBQWEsQ0FBQyxjQUFjO1FBQzFCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWE7WUFDMUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVuRCxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUM3QyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN4RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFDRixhQUFhLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUM5QyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdkQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBRUYsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2FtZU1vbnRoLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHtcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgaXNNb250aERpc2FibGVkLCBpc1llYXJEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnMge1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBtaW5EYXRlOiBEYXRlO1xuICBtYXhEYXRlOiBEYXRlO1xuICBob3ZlcmVkTW9udGg6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICBtb250aEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnTW9udGhzQ2FsZW5kYXIoXG4gIG1vbnRoQ2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgbW9udGhDYWxlbmRhci5tb250aHMuZm9yRWFjaChcbiAgICAobW9udGhzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIG1vbnRoSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLmhvdmVyZWRNb250aCk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzTW9udGhEaXNhYmxlZChtb250aC5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIG1vbnRoLCB7XG4gICAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vbnRoLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XG4gICAgICAgICAgbW9udGguaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIG1vbnRoLmlzU2VsZWN0ZWQgIT09IG5ld01vbnRoLmlzU2VsZWN0ZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9udGhDYWxlbmRhci5tb250aHNbcm93SW5kZXhdW21vbnRoSW5kZXhdID0gbmV3TW9udGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgbW9udGhDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xuICBtb250aENhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgbW9udGhDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBtb250aENhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIG1vbnRoQ2FsZW5kYXI7XG59XG4iXX0=