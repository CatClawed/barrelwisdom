/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { startOf } from '../utils/start-end-of';
import { addRegexToken, match1to3, match3 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
import { toInt } from '../utils/type-checks';
import { add } from '../moment/add-subtract';
/**
 * @return {?}
 */
export function initDayOfYear() {
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getDayOfYear(date)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
    }));
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDayOfYear(date, isUTC) {
    /** @type {?} */
    var date1 = +startOf(date, 'day', isUTC);
    /** @type {?} */
    var date2 = +startOf(date, 'year', isUTC);
    /** @type {?} */
    var someDate = date1 - date2;
    /** @type {?} */
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}
/**
 * @param {?} date
 * @param {?} input
 * @return {?}
 */
export function setDayOfYear(date, input) {
    /** @type {?} */
    var dayOfYear = getDayOfYear(date);
    return add(date, (input - dayOfYear), 'day');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLXllYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9kYXktb2YteWVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHN0MsTUFBTSxVQUFVLGFBQWE7SUFDN0IsYUFBYTtJQUVYLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU07Ozs7SUFDOUMsVUFBUyxJQUFVO1FBQ2pCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQzthQUN0QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUNGLENBQUM7SUFHSixVQUFVO0lBRVIsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVuQyxXQUFXO0lBRVQsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVoQyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsYUFBYSxDQUNYLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs7Ozs7O0lBQ2YsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUNqRSxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBVSxFQUFFLEtBQWU7O1FBQ2hELEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzs7UUFDcEMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDOztRQUNyQyxRQUFRLEdBQUcsS0FBSyxHQUFHLEtBQUs7O1FBQ3hCLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBRWxDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBVSxFQUFFLEtBQWE7O1FBQzlDLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBRXBDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8zLCBtYXRjaDMgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZZZWFyKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzLCBmYWxzZV0sICdERERvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbiAgYWRkUmVnZXhUb2tlbignREREJywgbWF0Y2gxdG8zKTtcbiAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gIGFkZFBhcnNlVG9rZW4oXG4gICAgWydEREQnLCAnRERERCddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgZGF0ZTEgPSArc3RhcnRPZihkYXRlLCAnZGF5JywgaXNVVEMpO1xuICBjb25zdCBkYXRlMiA9ICtzdGFydE9mKGRhdGUsICd5ZWFyJywgaXNVVEMpO1xuICBjb25zdCBzb21lRGF0ZSA9IGRhdGUxIC0gZGF0ZTI7XG4gIGNvbnN0IG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQoc29tZURhdGUgLyBvbmVEYXkpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheU9mWWVhcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIGRheU9mWWVhciksICdkYXknKTtcbn1cbiJdfQ==