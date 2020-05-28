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
    const weekDay = getDay(date);
    /** @type {?} */
    const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
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
    const offset = weekday - startingDayOffset % 7;
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
    const minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    /** @type {?} */
    const maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
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
    const minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    /** @type {?} */
    const maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
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
    (dateDisabled) => isSame(date, dateDisabled, 'date')));
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
    (enabledDate) => isSame(date, enabledDate, 'date')));
}
/**
 * @param {?} state
 * @param {?=} calendarIndex
 * @return {?}
 */
export function getYearsCalendarInitialDate(state, calendarIndex = 0) {
    /** @type {?} */
    const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return model && model.years && model.years[0] && model.years[0][0] && model.years[0][0].date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ1dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNQLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUcvQixNQUFNLFVBQVUsd0JBQXdCLENBQUMsSUFBVSxFQUNWLE9BQW9DO0lBQzNFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNsRCxPQUFPLElBQUksQ0FBQztLQUNiOztVQUVLLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOztVQUN0QixNQUFNLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFFbkUsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsT0FBZSxFQUFFLGlCQUF5QjtJQUM1RSxJQUFJLGlCQUFpQixLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7VUFFSyxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUM7SUFFOUMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTOztVQUN4RCxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7O1VBQzVELFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUVuRSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFDOUIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTOztVQUN2RCxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7O1VBQzNELFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUVsRSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFDOUIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFVLEVBQUUsYUFBcUI7SUFDOUQsSUFBSSxDQUFDLGFBQWEsSUFBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDdkUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sYUFBYSxDQUFDLElBQUk7Ozs7SUFBQyxDQUFDLFlBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUFDLENBQUM7QUFDeEYsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFVLEVBQUUsWUFBb0I7SUFDNUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7UUFDbkUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSTs7OztJQUFDLENBQUMsV0FBaUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUMsQ0FBQztBQUN0RixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsS0FBd0IsRUFBRSxhQUFhLEdBQUcsQ0FBQzs7VUFDL0UsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztJQUUxRixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMvRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0RGF5LFxuICBpc0ZpcnN0RGF5T2ZXZWVrLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgc2hpZnREYXRlLFxuICBlbmRPZixcbiAgc3RhcnRPZixcbiAgaXNBcnJheSxcbiAgaXNTYW1lXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZGF0ZTogRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBmaXJzdERheU9mV2Vlaz86IG51bWJlciB9KTogRGF0ZSB7XG4gIGlmIChpc0ZpcnN0RGF5T2ZXZWVrKGRhdGUsIG9wdGlvbnMuZmlyc3REYXlPZldlZWspKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBjb25zdCB3ZWVrRGF5ID0gZ2V0RGF5KGRhdGUpO1xuICBjb25zdCBvZmZzZXQgPSBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtEYXksIG9wdGlvbnMuZmlyc3REYXlPZldlZWspO1xuXG4gIHJldHVybiBzaGlmdERhdGUoZGF0ZSwge2RheTogLW9mZnNldH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrZGF5OiBudW1iZXIsIHN0YXJ0aW5nRGF5T2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoc3RhcnRpbmdEYXlPZmZzZXQgPT09IDApIHtcbiAgICByZXR1cm4gd2Vla2RheTtcbiAgfVxuXG4gIGNvbnN0IG9mZnNldCA9IHdlZWtkYXkgLSBzdGFydGluZ0RheU9mZnNldCAlIDc7XG5cbiAgcmV0dXJuIG9mZnNldCA8IDAgPyBvZmZzZXQgKyA3IDogb2Zmc2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb250aERpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICdtb250aCcpLCBtaW4sICdkYXknKTtcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICdtb250aCcpLCBtYXgsICdkYXknKTtcblxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW46IERhdGUsIG1heDogRGF0ZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAneWVhcicpLCBtaW4sICdkYXknKTtcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICd5ZWFyJyksIG1heCwgJ2RheScpO1xuXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlzYWJsZWREYXRlKGRhdGU6IERhdGUsIGRhdGVzRGlzYWJsZWQ6IERhdGVbXSk6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGVzRGlzYWJsZWQgIHx8ICFpc0FycmF5KGRhdGVzRGlzYWJsZWQpIHx8ICFkYXRlc0Rpc2FibGVkLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlc0Rpc2FibGVkLnNvbWUoKGRhdGVEaXNhYmxlZDogRGF0ZSkgPT4gaXNTYW1lKGRhdGUsIGRhdGVEaXNhYmxlZCwgJ2RhdGUnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VuYWJsZWREYXRlKGRhdGU6IERhdGUsIGRhdGVzRW5hYmxlZDogRGF0ZVtdKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZXNFbmFibGVkIHx8ICFpc0FycmF5KGRhdGVzRW5hYmxlZCkgfHwgIWRhdGVzRW5hYmxlZC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gIWRhdGVzRW5hYmxlZC5zb21lKChlbmFibGVkRGF0ZTogRGF0ZSkgPT4gaXNTYW1lKGRhdGUsIGVuYWJsZWREYXRlLCAnZGF0ZScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJzQ2FsZW5kYXJJbml0aWFsRGF0ZShzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsIGNhbGVuZGFySW5kZXggPSAwKTogRGF0ZSB7XG4gIGNvbnN0IG1vZGVsID0gc3RhdGUgJiYgc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsICYmIHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XTtcblxuICByZXR1cm4gbW9kZWwgJiYgbW9kZWwueWVhcnMgJiYgbW9kZWwueWVhcnNbMF0gJiYgbW9kZWwueWVhcnNbMF1bMF0gJiYgbW9kZWwueWVhcnNbMF1bMF0uZGF0ZTtcbn1cbiJdfQ==