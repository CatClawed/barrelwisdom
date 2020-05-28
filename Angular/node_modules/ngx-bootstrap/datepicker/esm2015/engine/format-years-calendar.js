/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
/** @type {?} */
const height = 4;
/** @type {?} */
const width = 4;
/** @type {?} */
export const yearsPerCalendar = height * width;
/** @type {?} */
export const initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
/** @type {?} */
const shift = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @param {?=} previousInitialDate
 * @return {?}
 */
export function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
    /** @type {?} */
    const initialDate = calculateInitialDate(viewDate, previousInitialDate);
    /** @type {?} */
    const matrixOptions = { width, height, initialDate, shift };
    /** @type {?} */
    const yearsMatrix = createMatrix(matrixOptions, (/**
     * @param {?} date
     * @return {?}
     */
    date => ({
        date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    })));
    /** @type {?} */
    const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle
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
    const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    /** @type {?} */
    const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXllYXJzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O01BRS9DLE1BQU0sR0FBRyxDQUFDOztNQUNWLEtBQUssR0FBRyxDQUFDOztBQUNmLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsS0FBSzs7QUFDOUMsTUFBTSxPQUFPLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O01BQ3JFLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7Ozs7Ozs7QUFFekIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxRQUFjLEVBQ2QsYUFBc0MsRUFDdEMsbUJBQTBCOztVQUVwQixXQUFXLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDOztVQUNqRSxhQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7O1VBQ3JELFdBQVcsR0FBRyxZQUFZLENBRTlCLGFBQWE7Ozs7SUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSTtRQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUN2RSxDQUFDLEVBQUM7O1VBQ0csU0FBUyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7SUFFbEUsT0FBTztRQUNMLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUztLQUNWLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFFBQWMsRUFBRSxtQkFBMEI7SUFDdEUsSUFBSSxtQkFBbUI7V0FDbEIsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtXQUMzRCxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEdBQUcsZ0JBQWdCLEVBQUU7UUFDbEYsT0FBTyxtQkFBbUIsQ0FBQztLQUM1QjtJQUVELE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsV0FBc0MsRUFDdEMsYUFBc0M7O1VBRWhDLElBQUksR0FBRyxVQUFVLENBQ3JCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3RCLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCOztVQUNLLEVBQUUsR0FBRyxVQUFVLENBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdkMsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7SUFFRCxPQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBzaGlmdERhdGUsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcblxuY29uc3QgaGVpZ2h0ID0gNDtcbmNvbnN0IHdpZHRoID0gNDtcbmV4cG9ydCBjb25zdCB5ZWFyc1BlckNhbGVuZGFyID0gaGVpZ2h0ICogd2lkdGg7XG5leHBvcnQgY29uc3QgaW5pdGlhbFllYXJTaGlmdCA9IChNYXRoLmZsb29yKHllYXJzUGVyQ2FsZW5kYXIgLyAyKSAtIDEpICogLTE7XG5jb25zdCBzaGlmdCA9IHsgeWVhcjogMSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNDYWxlbmRhcihcbiAgdmlld0RhdGU6IERhdGUsXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxuICBwcmV2aW91c0luaXRpYWxEYXRlPzogRGF0ZVxuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGNvbnN0IGluaXRpYWxEYXRlID0gY2FsY3VsYXRlSW5pdGlhbERhdGUodmlld0RhdGUsIHByZXZpb3VzSW5pdGlhbERhdGUpO1xuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcbiAgY29uc3QgeWVhcnNNYXRyaXggPSBjcmVhdGVNYXRyaXg8XG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xuICAgIGRhdGUsXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy55ZWFyTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxuICB9KSk7XG4gIGNvbnN0IHllYXJUaXRsZSA9IGZvcm1hdFllYXJSYW5nZVRpdGxlKHllYXJzTWF0cml4LCBmb3JtYXRPcHRpb25zKTtcblxuICByZXR1cm4ge1xuICAgIHllYXJzOiB5ZWFyc01hdHJpeCxcbiAgICBtb250aFRpdGxlOiAnJyxcbiAgICB5ZWFyVGl0bGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW5pdGlhbERhdGUodmlld0RhdGU6IERhdGUsIHByZXZpb3VzSW5pdGlhbERhdGU/OiBEYXRlKTogRGF0ZSB7XG4gIGlmIChwcmV2aW91c0luaXRpYWxEYXRlXG4gICAgJiYgdmlld0RhdGUuZ2V0RnVsbFllYXIoKSA+PSBwcmV2aW91c0luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKClcbiAgICAmJiB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpIDwgcHJldmlvdXNJbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpICsgeWVhcnNQZXJDYWxlbmRhcikge1xuICAgIHJldHVybiBwcmV2aW91c0luaXRpYWxEYXRlO1xuICB9XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiBpbml0aWFsWWVhclNoaWZ0IH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRZZWFyUmFuZ2VUaXRsZShcbiAgeWVhcnNNYXRyaXg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW10sXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBjb25zdCBmcm9tID0gZm9ybWF0RGF0ZShcbiAgICB5ZWFyc01hdHJpeFswXVswXS5kYXRlLFxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXG4gICk7XG4gIGNvbnN0IHRvID0gZm9ybWF0RGF0ZShcbiAgICB5ZWFyc01hdHJpeFtoZWlnaHQgLSAxXVt3aWR0aCAtIDFdLmRhdGUsXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgKTtcblxuICByZXR1cm4gYCR7ZnJvbX0gLSAke3RvfWA7XG59XG4iXX0=