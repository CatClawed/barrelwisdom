/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
/** @type {?} */
var height = 4;
/** @type {?} */
var width = 3;
/** @type {?} */
var shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    /** @type {?} */
    var initialDate = startOf(viewDate, 'year');
    /** @type {?} */
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    /** @type {?} */
    var monthMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return ({
        date: date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }); }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFL0MsTUFBTSxHQUFHLENBQUM7O0lBQ1YsS0FBSyxHQUFHLENBQUM7O0lBQ1QsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTs7Ozs7O0FBRTFCLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsUUFBYyxFQUNkLGFBQXNDOztRQUVoQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7O1FBQ3ZDLGFBQWEsR0FBRyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFOztRQUNyRCxXQUFXLEdBQUcsWUFBWSxDQUU5QixhQUFhOzs7O0lBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDO1FBQ3hCLElBQUksTUFBQTtRQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUN4RSxDQUFDLEVBSHVCLENBR3ZCLEVBQUM7SUFFSCxPQUFPO1FBQ0wsTUFBTSxFQUFFLFdBQVc7UUFDbkIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsVUFBVSxDQUNuQixRQUFRLEVBQ1IsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzdGFydE9mLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XG5cbmNvbnN0IGhlaWdodCA9IDQ7XG5jb25zdCB3aWR0aCA9IDM7XG5jb25zdCBzaGlmdCA9IHsgbW9udGg6IDEgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICB2aWV3RGF0ZTogRGF0ZSxcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzdGFydE9mKHZpZXdEYXRlLCAneWVhcicpO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgbW9udGhNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5tb250aExhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgbW9udGhzOiBtb250aE1hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXG4gICAgICB2aWV3RGF0ZSxcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICApXG4gIH07XG59XG4iXX0=