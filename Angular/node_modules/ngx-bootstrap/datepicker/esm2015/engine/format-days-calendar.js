/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { formatDate, getLocale } from 'ngx-bootstrap/chronos';
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
export function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map((/**
         * @param {?} week
         * @param {?} weekIndex
         * @return {?}
         */
        (week, weekIndex) => ({
            days: week.map((/**
             * @param {?} date
             * @param {?} dayIndex
             * @return {?}
             */
            (date, dayIndex) => ({
                date,
                label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex,
                weekIndex,
                dayIndex
            })))
        })))
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
export function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map((/**
     * @param {?} days
     * @return {?}
     */
    (days) => (days[0] ? formatDate(days[0], format, locale) : '')));
}
/**
 * @param {?} locale
 * @return {?}
 */
export function getShiftedWeekdays(locale) {
    /** @type {?} */
    const _locale = getLocale(locale);
    /** @type {?} */
    const weekdays = (/** @type {?} */ (_locale.weekdaysShort()));
    /** @type {?} */
    const firstDayOfWeek = _locale.firstDayOfWeek();
    return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRheXMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFFOUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFlBQStCLEVBQy9CLGFBQXNDLEVBQ3RDLFVBQWtCO0lBQ25ELE9BQU87UUFDTCxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7UUFDekIsVUFBVSxFQUFFLFVBQVUsQ0FDcEIsWUFBWSxDQUFDLEtBQUssRUFDbEIsYUFBYSxDQUFDLFVBQVUsRUFDeEIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7UUFDRCxTQUFTLEVBQUUsVUFBVSxDQUNuQixZQUFZLENBQUMsS0FBSyxFQUNsQixhQUFhLENBQUMsU0FBUyxFQUN2QixhQUFhLENBQUMsTUFBTSxDQUNyQjtRQUNELFdBQVcsRUFBRSxjQUFjLENBQ3pCLFlBQVksQ0FBQyxVQUFVLEVBQ3ZCLGFBQWEsQ0FBQyxXQUFXLEVBQ3pCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO1FBQ0QsUUFBUSxFQUFFLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEQsS0FBSyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRzs7Ozs7WUFBQyxDQUFDLElBQVUsRUFBRSxRQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJO2dCQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDckUsVUFBVTtnQkFDVixTQUFTO2dCQUNULFFBQVE7YUFDVCxDQUFDLEVBQUM7U0FDSixDQUFDLEVBQUM7S0FDSixDQUFDO0FBQ0osQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsVUFBb0IsRUFDcEIsTUFBYyxFQUNkLE1BQWM7SUFDM0MsT0FBTyxVQUFVLENBQUMsR0FBRzs7OztJQUNuQixDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdkUsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE1BQWM7O1VBQ3pDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDOztVQUMzQixRQUFRLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFZOztVQUM5QyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTtJQUUvQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNuRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIERheXNDYWxlbmRhck1vZGVsLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldExvY2FsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXlzQ2FsZW5kYXIoZGF5c0NhbGVuZGFyOiBEYXlzQ2FsZW5kYXJNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoSW5kZXg6IG51bWJlcik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIHJldHVybiB7XG4gICAgbW9udGg6IGRheXNDYWxlbmRhci5tb250aCxcbiAgICBtb250aFRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy5tb250aFRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHllYXJUaXRsZTogZm9ybWF0RGF0ZShcbiAgICAgIGRheXNDYWxlbmRhci5tb250aCxcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtOdW1iZXJzOiBnZXRXZWVrTnVtYmVycyhcbiAgICAgIGRheXNDYWxlbmRhci5kYXlzTWF0cml4LFxuICAgICAgZm9ybWF0T3B0aW9ucy53ZWVrTnVtYmVycyxcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICAgKSxcbiAgICB3ZWVrZGF5czogZ2V0U2hpZnRlZFdlZWtkYXlzKGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcbiAgICB3ZWVrczogZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgubWFwKCh3ZWVrOiBEYXRlW10sIHdlZWtJbmRleDogbnVtYmVyKSA9PiAoe1xuICAgICAgZGF5czogd2Vlay5tYXAoKGRhdGU6IERhdGUsIGRheUluZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICAgIGRhdGUsXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMuZGF5TGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcbiAgICAgICAgbW9udGhJbmRleCxcbiAgICAgICAgd2Vla0luZGV4LFxuICAgICAgICBkYXlJbmRleFxuICAgICAgfSkpXG4gICAgfSkpXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrTnVtYmVycyhkYXlzTWF0cml4OiBEYXRlW11bXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGRheXNNYXRyaXgubWFwKFxuICAgIChkYXlzOiBEYXRlW10pID0+IChkYXlzWzBdID8gZm9ybWF0RGF0ZShkYXlzWzBdLCBmb3JtYXQsIGxvY2FsZSkgOiAnJylcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoaWZ0ZWRXZWVrZGF5cyhsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUpO1xuICBjb25zdCB3ZWVrZGF5cyA9IF9sb2NhbGUud2Vla2RheXNTaG9ydCgpIGFzIHN0cmluZ1tdO1xuICBjb25zdCBmaXJzdERheU9mV2VlayA9IF9sb2NhbGUuZmlyc3REYXlPZldlZWsoKTtcblxuICByZXR1cm4gWy4uLndlZWtkYXlzLnNsaWNlKGZpcnN0RGF5T2ZXZWVrKSwgLi4ud2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspXTtcbn1cbiJdfQ==