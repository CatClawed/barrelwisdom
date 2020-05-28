/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isSameYear, shiftDate } from 'ngx-bootstrap/chronos';
import { isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagYearsCalendarOptions() { }
if (false) {
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.hoveredYear;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.yearIndex;
}
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
export function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((/**
     * @param {?} years
     * @param {?} rowIndex
     * @return {?}
     */
    function (years, rowIndex) {
        years.forEach((/**
         * @param {?} year
         * @param {?} yearIndex
         * @return {?}
         */
        function (year, yearIndex) {
            /** @type {?} */
            var isHovered = isSameYear(year.date, options.hoveredYear);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            /** @type {?} */
            var isSelected = isSameYear(year.date, options.selectedDate);
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled ||
                year.isSelected !== newMonth.isSelected) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        }));
    }));
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    /** @type {?} */
    var i = yearsCalendar.years.length - 1;
    /** @type {?} */
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy15ZWFycy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUU1RCw4Q0FRQzs7O0lBUEMsOENBQW9COztJQUNwQiwyQ0FBYzs7SUFDZCwyQ0FBYzs7SUFDZCwrQ0FBa0I7O0lBQ2xCLGdEQUFtQjs7SUFDbkIsaURBQXNCOztJQUN0Qiw2Q0FBa0I7Ozs7Ozs7QUFHcEIsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixhQUFxQyxFQUNyQyxPQUFpQztJQUVqQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7O0lBQ3pCLFVBQUMsS0FBOEIsRUFBRSxRQUFnQjtRQUMvQyxLQUFLLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLElBQTJCLEVBQUUsU0FBaUI7O2dCQUNyRCxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Z0JBQ3RELFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtnQkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDOztnQkFDdkQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7O2dCQUV4RCxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQztZQUNuRixJQUNFLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLFVBQVU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLFVBQVUsRUFDdkM7Z0JBQ0EsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDckQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFDRixDQUFDO0lBRUYsdUNBQXVDO0lBQ3ZDLGFBQWEsQ0FBQyxhQUFhO1FBQ3pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2RSxhQUFhLENBQUMsY0FBYztRQUMxQixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhO1lBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbEQsYUFBYSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FDN0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdkQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDOztRQUNJLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDOztRQUNsQyxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUMzQyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUM5QyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdEQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBRUYsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2FtZVllYXIsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBZZWFyc0NhbGVuZGFyVmlld01vZGVsLCBDYWxlbmRhckNlbGxWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgaG92ZXJlZFllYXI6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICB5ZWFySW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxuICB5ZWFyc0NhbGVuZGFyOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnNcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICB5ZWFyc0NhbGVuZGFyLnllYXJzLmZvckVhY2goXG4gICAgKHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkWWVhcik7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICAgIGlzWWVhckRpc2FibGVkKHllYXIuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUpO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaXNTYW1lWWVhcih5ZWFyLmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKTtcblxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyB5ZWFyLCB7IGlzSG92ZXJlZCwgaXNEaXNhYmxlZCwgaXNTZWxlY3RlZCB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzU2VsZWN0ZWQgIT09IG5ld01vbnRoLmlzU2VsZWN0ZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIHllYXJzQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPiAwICYmIG9wdGlvbnMueWVhckluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMueWVhckluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgb3B0aW9ucy55ZWFySW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGogPSB5ZWFyc0NhbGVuZGFyLnllYXJzW2ldLmxlbmd0aCAtIDE7XG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiB5ZWFyc0NhbGVuZGFyO1xufVxuIl19