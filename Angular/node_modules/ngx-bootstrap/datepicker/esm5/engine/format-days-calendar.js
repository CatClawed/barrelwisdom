/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        function (week, weekIndex) { return ({
            days: week.map((/**
             * @param {?} date
             * @param {?} dayIndex
             * @return {?}
             */
            function (date, dayIndex) { return ({
                date: date,
                label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex: monthIndex,
                weekIndex: weekIndex,
                dayIndex: dayIndex
            }); }))
        }); }))
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
    function (days) { return (days[0] ? formatDate(days[0], format, locale) : ''); }));
}
/**
 * @param {?} locale
 * @return {?}
 */
export function getShiftedWeekdays(locale) {
    /** @type {?} */
    var _locale = getLocale(locale);
    /** @type {?} */
    var weekdays = (/** @type {?} */ (_locale.weekdaysShort()));
    /** @type {?} */
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return tslib_1.__spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRheXMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTlELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxZQUErQixFQUMvQixhQUFzQyxFQUN0QyxVQUFrQjtJQUNuRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO1FBQ3pCLFVBQVUsRUFBRSxVQUFVLENBQ3BCLFlBQVksQ0FBQyxLQUFLLEVBQ2xCLGFBQWEsQ0FBQyxVQUFVLEVBQ3hCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO1FBQ0QsU0FBUyxFQUFFLFVBQVUsQ0FDbkIsWUFBWSxDQUFDLEtBQUssRUFDbEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7UUFDRCxXQUFXLEVBQUUsY0FBYyxDQUN6QixZQUFZLENBQUMsVUFBVSxFQUN2QixhQUFhLENBQUMsV0FBVyxFQUN6QixhQUFhLENBQUMsTUFBTSxDQUNyQjtRQUNELFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2xELEtBQUssRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFZLEVBQUUsU0FBaUIsSUFBSyxPQUFBLENBQUM7WUFDdkUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHOzs7OztZQUFDLFVBQUMsSUFBVSxFQUFFLFFBQWdCLElBQUssT0FBQSxDQUFDO2dCQUNoRCxJQUFJLE1BQUE7Z0JBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyRSxVQUFVLFlBQUE7Z0JBQ1YsU0FBUyxXQUFBO2dCQUNULFFBQVEsVUFBQTthQUNULENBQUMsRUFOK0MsQ0FNL0MsRUFBQztTQUNKLENBQUMsRUFSc0UsQ0FRdEUsRUFBQztLQUNKLENBQUM7QUFDSixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxVQUFvQixFQUNwQixNQUFjLEVBQ2QsTUFBYztJQUMzQyxPQUFPLFVBQVUsQ0FBQyxHQUFHOzs7O0lBQ25CLFVBQUMsSUFBWSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBcEQsQ0FBb0QsRUFDdkUsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE1BQWM7O1FBQ3pDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDOztRQUMzQixRQUFRLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFZOztRQUM5QyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTtJQUUvQyx3QkFBVyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFO0FBQ25GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERheXNDYWxlbmRhcihkYXlzQ2FsZW5kYXI6IERheXNDYWxlbmRhck1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhJbmRleDogbnVtYmVyKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgIG1vbnRoVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXG4gICAgICBmb3JtYXRPcHRpb25zLm1vbnRoVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgICksXG4gICAgd2Vla051bWJlcnM6IGdldFdlZWtOdW1iZXJzKFxuICAgICAgZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgsXG4gICAgICBmb3JtYXRPcHRpb25zLndlZWtOdW1iZXJzLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApLFxuICAgIHdlZWtkYXlzOiBnZXRTaGlmdGVkV2Vla2RheXMoZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgIHdlZWtzOiBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeC5tYXAoKHdlZWs6IERhdGVbXSwgd2Vla0luZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICBkYXlzOiB3ZWVrLm1hcCgoZGF0ZTogRGF0ZSwgZGF5SW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5kYXlMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxuICAgICAgICBtb250aEluZGV4LFxuICAgICAgICB3ZWVrSW5kZXgsXG4gICAgICAgIGRheUluZGV4XG4gICAgICB9KSlcbiAgICB9KSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXJzKGRheXNNYXRyaXg6IERhdGVbXVtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gZGF5c01hdHJpeC5tYXAoXG4gICAgKGRheXM6IERhdGVbXSkgPT4gKGRheXNbMF0gPyBmb3JtYXREYXRlKGRheXNbMF0sIGZvcm1hdCwgbG9jYWxlKSA6ICcnKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hpZnRlZFdlZWtkYXlzKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSk7XG4gIGNvbnN0IHdlZWtkYXlzID0gX2xvY2FsZS53ZWVrZGF5c1Nob3J0KCkgYXMgc3RyaW5nW107XG4gIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gX2xvY2FsZS5maXJzdERheU9mV2VlaygpO1xuXG4gIHJldHVybiBbLi4ud2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLCAuLi53ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlayldO1xufVxuIl19