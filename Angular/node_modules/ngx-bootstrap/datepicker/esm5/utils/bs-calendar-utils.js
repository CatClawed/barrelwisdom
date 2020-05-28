/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isArray, isSame } from 'ngx-bootstrap/chronos';
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    /** @type {?} */
    var weekDay = getDay(date);
    /** @type {?} */
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
export function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    /** @type {?} */
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isMonthDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    /** @type {?} */
    var maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isYearDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    /** @type {?} */
    var maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
export function isDisabledDate(date, datesDisabled) {
    if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((/**
     * @param {?} dateDisabled
     * @return {?}
     */
    function (dateDisabled) { return isSame(date, dateDisabled, 'date'); }));
}
/**
 * @param {?} date
 * @param {?} datesEnabled
 * @return {?}
 */
export function isEnabledDate(date, datesEnabled) {
    if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
        return false;
    }
    return !datesEnabled.some((/**
     * @param {?} enabledDate
     * @return {?}
     */
    function (enabledDate) { return isSame(date, enabledDate, 'date'); }));
}
/**
 * @param {?} state
 * @param {?=} calendarIndex
 * @return {?}
 */
export function getYearsCalendarInitialDate(state, calendarIndex) {
    if (calendarIndex === void 0) { calendarIndex = 0; }
    /** @type {?} */
    var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return model && model.years && model.years[0] && model.years[0][0] && model.years[0][0].date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ1dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNQLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUcvQixNQUFNLFVBQVUsd0JBQXdCLENBQUMsSUFBVSxFQUNWLE9BQW9DO0lBQzNFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNsRCxPQUFPLElBQUksQ0FBQztLQUNiOztRQUVLLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOztRQUN0QixNQUFNLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFFbkUsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsT0FBZSxFQUFFLGlCQUF5QjtJQUM1RSxJQUFJLGlCQUFpQixLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7UUFFSyxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUM7SUFFOUMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTOztRQUN4RCxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7O1FBQzVELFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUVuRSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFDOUIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTOztRQUN2RCxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7O1FBQzNELFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUVsRSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFDOUIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFVLEVBQUUsYUFBcUI7SUFDOUQsSUFBSSxDQUFDLGFBQWEsSUFBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDdkUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sYUFBYSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFDLFlBQWtCLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO0FBQ3hGLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBVSxFQUFFLFlBQW9CO0lBQzVELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1FBQ25FLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFDLFdBQWlCLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUFDO0FBQ3RGLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxLQUF3QixFQUFFLGFBQWlCO0lBQWpCLDhCQUFBLEVBQUEsaUJBQWlCOztRQUMvRSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO0lBRTFGLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQy9GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXREYXksXG4gIGlzRmlyc3REYXlPZldlZWssXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBzaGlmdERhdGUsXG4gIGVuZE9mLFxuICBzdGFydE9mLFxuICBpc0FycmF5LFxuICBpc1NhbWVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcbiAgaWYgKGlzRmlyc3REYXlPZldlZWsoZGF0ZSwgb3B0aW9ucy5maXJzdERheU9mV2VlaykpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHdlZWtEYXkgPSBnZXREYXkoZGF0ZSk7XG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZShkYXRlLCB7ZGF5OiAtb2Zmc2V0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtkYXk6IG51bWJlciwgc3RhcnRpbmdEYXlPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xuICAgIHJldHVybiB3ZWVrZGF5O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0ID0gd2Vla2RheSAtIHN0YXJ0aW5nRGF5T2Zmc2V0ICUgNztcblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ21vbnRoJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ21vbnRoJyksIG1heCwgJ2RheScpO1xuXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhckRpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XG5cbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERhdGUoZGF0ZTogRGF0ZSwgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZXNEaXNhYmxlZCAgfHwgIWlzQXJyYXkoZGF0ZXNEaXNhYmxlZCkgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVzRGlzYWJsZWQuc29tZSgoZGF0ZURpc2FibGVkOiBEYXRlKSA9PiBpc1NhbWUoZGF0ZSwgZGF0ZURpc2FibGVkLCAnZGF0ZScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW5hYmxlZERhdGUoZGF0ZTogRGF0ZSwgZGF0ZXNFbmFibGVkOiBEYXRlW10pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlc0VuYWJsZWQgfHwgIWlzQXJyYXkoZGF0ZXNFbmFibGVkKSB8fCAhZGF0ZXNFbmFibGVkLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhZGF0ZXNFbmFibGVkLnNvbWUoKGVuYWJsZWREYXRlOiBEYXRlKSA9PiBpc1NhbWUoZGF0ZSwgZW5hYmxlZERhdGUsICdkYXRlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WWVhcnNDYWxlbmRhckluaXRpYWxEYXRlKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSwgY2FsZW5kYXJJbmRleCA9IDApOiBEYXRlIHtcbiAgY29uc3QgbW9kZWwgPSBzdGF0ZSAmJiBzdGF0ZS55ZWFyc0NhbGVuZGFyTW9kZWwgJiYgc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdO1xuXG4gIHJldHVybiBtb2RlbCAmJiBtb2RlbC55ZWFycyAmJiBtb2RlbC55ZWFyc1swXSAmJiBtb2RlbC55ZWFyc1swXVswXSAmJiBtb2RlbC55ZWFyc1swXVswXS5kYXRlO1xufVxuIl19