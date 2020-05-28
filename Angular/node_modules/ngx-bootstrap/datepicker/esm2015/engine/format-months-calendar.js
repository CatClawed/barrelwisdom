/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
/** @type {?} */
const height = 4;
/** @type {?} */
const width = 3;
/** @type {?} */
const shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    /** @type {?} */
    const initialDate = startOf(viewDate, 'year');
    /** @type {?} */
    const matrixOptions = { width, height, initialDate, shift };
    /** @type {?} */
    const monthMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    })));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFL0MsTUFBTSxHQUFHLENBQUM7O01BQ1YsS0FBSyxHQUFHLENBQUM7O01BQ1QsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTs7Ozs7O0FBRTFCLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsUUFBYyxFQUNkLGFBQXNDOztVQUVoQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7O1VBQ3ZDLGFBQWEsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTs7VUFDckQsV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYTs7OztJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJO1FBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3hFLENBQUMsRUFBQztJQUVILE9BQU87UUFDTCxNQUFNLEVBQUUsV0FBVztRQUNuQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxVQUFVLENBQ25CLFFBQVEsRUFDUixhQUFhLENBQUMsU0FBUyxFQUN2QixhQUFhLENBQUMsTUFBTSxDQUNyQjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IHN0YXJ0T2YsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuY29uc3QgaGVpZ2h0ID0gNDtcbmNvbnN0IHdpZHRoID0gMztcbmNvbnN0IHNoaWZ0ID0geyBtb250aDogMSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXG4gIHZpZXdEYXRlOiBEYXRlLFxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBjb25zdCBpbml0aWFsRGF0ZSA9IHN0YXJ0T2Yodmlld0RhdGUsICd5ZWFyJyk7XG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xuICBjb25zdCBtb250aE1hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XG4gICAgZGF0ZSxcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLm1vbnRoTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtb250aHM6IG1vbnRoTWF0cml4LFxuICAgIG1vbnRoVGl0bGU6ICcnLFxuICAgIHllYXJUaXRsZTogZm9ybWF0RGF0ZShcbiAgICAgIHZpZXdEYXRlLFxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxuICAgIClcbiAgfTtcbn1cbiJdfQ==