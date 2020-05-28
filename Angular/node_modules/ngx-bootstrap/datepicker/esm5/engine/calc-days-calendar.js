/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getFirstDayOfMonth } from 'ngx-bootstrap/chronos';
import { getStartingDayOfCalendar } from '../utils/bs-calendar-utils';
import { createMatrix } from '../utils/matrix-utils';
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
export function calcDaysCalendar(startingDate, options) {
    /** @type {?} */
    var firstDay = getFirstDayOfMonth(startingDate);
    /** @type {?} */
    var initialDate = getStartingDayOfCalendar(firstDay, options);
    /** @type {?} */
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    /** @type {?} */
    var daysMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return date; }));
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFckQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixZQUFrQixFQUNsQixPQUF5Qjs7UUFFbkIsUUFBUSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQzs7UUFDM0MsV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7O1FBRXpELGFBQWEsR0FBRztRQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1FBQ3RCLFdBQVcsYUFBQTtRQUNYLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7S0FDbEI7O1FBQ0ssVUFBVSxHQUFHLFlBQVksQ0FBTyxhQUFhOzs7O0lBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO0lBRWxFLE9BQU87UUFDTCxVQUFVLFlBQUE7UUFDVixLQUFLLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVzZXIgYW5kIG1vZGVsIGlucHV0IHNob3VsZCBoYW5kbGUgcGFyc2luZyBhbmQgdmFsaWRhdGluZyBpbnB1dCB2YWx1ZXNcbi8vIHNob3VsZCBhY2NlcHQgc29tZSBvcHRpb25zXG4vLyB0b2RvOiBzcGxpdCBvdXQgZm9ybWF0dGluZ1xuaW1wb3J0IHsgRGF5c0NhbGVuZGFyTW9kZWwsIE1vbnRoVmlld09wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Rmlyc3REYXlPZk1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhciB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRGF5c0NhbGVuZGFyKFxuICBzdGFydGluZ0RhdGU6IERhdGUsXG4gIG9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnNcbik6IERheXNDYWxlbmRhck1vZGVsIHtcbiAgY29uc3QgZmlyc3REYXkgPSBnZXRGaXJzdERheU9mTW9udGgoc3RhcnRpbmdEYXRlKTtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZmlyc3REYXksIG9wdGlvbnMpO1xuXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXG4gICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcbiAgICBpbml0aWFsRGF0ZSxcbiAgICBzaGlmdDogeyBkYXk6IDEgfVxuICB9O1xuICBjb25zdCBkYXlzTWF0cml4ID0gY3JlYXRlTWF0cml4PERhdGU+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gZGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXlzTWF0cml4LFxuICAgIG1vbnRoOiBmaXJzdERheVxuICB9O1xufVxuIl19