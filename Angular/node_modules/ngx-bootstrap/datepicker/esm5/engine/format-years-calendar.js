/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
/** @type {?} */
var height = 4;
/** @type {?} */
var width = 4;
/** @type {?} */
export var yearsPerCalendar = height * width;
/** @type {?} */
export var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
/** @type {?} */
var shift = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @param {?=} previousInitialDate
 * @return {?}
 */
export function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
    /** @type {?} */
    var initialDate = calculateInitialDate(viewDate, previousInitialDate);
    /** @type {?} */
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    /** @type {?} */
    var yearsMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return ({
        date: date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    }); }));
    /** @type {?} */
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} viewDate
 * @param {?=} previousInitialDate
 * @return {?}
 */
function calculateInitialDate(viewDate, previousInitialDate) {
    if (previousInitialDate
        && viewDate.getFullYear() >= previousInitialDate.getFullYear()
        && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
        return previousInitialDate;
    }
    return shiftDate(viewDate, { year: initialYearShift });
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    /** @type {?} */
    var from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    /** @type {?} */
    var to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXllYXJzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRS9DLE1BQU0sR0FBRyxDQUFDOztJQUNWLEtBQUssR0FBRyxDQUFDOztBQUNmLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsS0FBSzs7QUFDOUMsTUFBTSxLQUFPLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBQ3JFLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7Ozs7Ozs7QUFFekIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxRQUFjLEVBQ2QsYUFBc0MsRUFDdEMsbUJBQTBCOztRQUVwQixXQUFXLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDOztRQUNqRSxhQUFhLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTs7UUFDckQsV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYTs7OztJQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQztRQUN4QixJQUFJLE1BQUE7UUFDSixLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7S0FDdkUsQ0FBQyxFQUh1QixDQUd2QixFQUFDOztRQUNHLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO0lBRWxFLE9BQU87UUFDTCxLQUFLLEVBQUUsV0FBVztRQUNsQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsV0FBQTtLQUNWLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFFBQWMsRUFBRSxtQkFBMEI7SUFDdEUsSUFBSSxtQkFBbUI7V0FDbEIsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtXQUMzRCxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEdBQUcsZ0JBQWdCLEVBQUU7UUFDbEYsT0FBTyxtQkFBbUIsQ0FBQztLQUM1QjtJQUVELE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsV0FBc0MsRUFDdEMsYUFBc0M7O1FBRWhDLElBQUksR0FBRyxVQUFVLENBQ3JCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3RCLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCOztRQUNLLEVBQUUsR0FBRyxVQUFVLENBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdkMsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7SUFFRCxPQUFVLElBQUksV0FBTSxFQUFJLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IHNoaWZ0RGF0ZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xuXG5jb25zdCBoZWlnaHQgPSA0O1xuY29uc3Qgd2lkdGggPSA0O1xuZXhwb3J0IGNvbnN0IHllYXJzUGVyQ2FsZW5kYXIgPSBoZWlnaHQgKiB3aWR0aDtcbmV4cG9ydCBjb25zdCBpbml0aWFsWWVhclNoaWZ0ID0gKE1hdGguZmxvb3IoeWVhcnNQZXJDYWxlbmRhciAvIDIpIC0gMSkgKiAtMTtcbmNvbnN0IHNoaWZ0ID0geyB5ZWFyOiAxIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIHByZXZpb3VzSW5pdGlhbERhdGU/OiBEYXRlXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBjYWxjdWxhdGVJbml0aWFsRGF0ZSh2aWV3RGF0ZSwgcHJldmlvdXNJbml0aWFsRGF0ZSk7XG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xuICBjb25zdCB5ZWFyc01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XG4gICAgZGF0ZSxcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLnllYXJMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXG4gIH0pKTtcbiAgY29uc3QgeWVhclRpdGxlID0gZm9ybWF0WWVhclJhbmdlVGl0bGUoeWVhcnNNYXRyaXgsIGZvcm1hdE9wdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcnM6IHllYXJzTWF0cml4LFxuICAgIG1vbnRoVGl0bGU6ICcnLFxuICAgIHllYXJUaXRsZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbml0aWFsRGF0ZSh2aWV3RGF0ZTogRGF0ZSwgcHJldmlvdXNJbml0aWFsRGF0ZT86IERhdGUpOiBEYXRlIHtcbiAgaWYgKHByZXZpb3VzSW5pdGlhbERhdGVcbiAgICAmJiB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpID49IHByZXZpb3VzSW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICYmIHZpZXdEYXRlLmdldEZ1bGxZZWFyKCkgPCBwcmV2aW91c0luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCkgKyB5ZWFyc1BlckNhbGVuZGFyKSB7XG4gICAgcmV0dXJuIHByZXZpb3VzSW5pdGlhbERhdGU7XG4gIH1cblxuICByZXR1cm4gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IGluaXRpYWxZZWFyU2hpZnQgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXJSYW5nZVRpdGxlKFxuICB5ZWFyc01hdHJpeDogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGNvbnN0IGZyb20gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4WzBdWzBdLmRhdGUsXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgKTtcbiAgY29uc3QgdG8gPSBmb3JtYXREYXRlKFxuICAgIHllYXJzTWF0cml4W2hlaWdodCAtIDFdW3dpZHRoIC0gMV0uZGF0ZSxcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICApO1xuXG4gIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcbn1cbiJdfQ==