/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { weekOfYear } from './week-calendar-utils';
import { addRegexToken, match1to2, match2 } from '../parse/regex';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { addWeekParseToken } from '../parse/token';
import { toInt } from '../utils/type-checks';
import { getLocale } from '../locale/locales';
import { add } from '../moment/add-subtract';
// FORMATTING
/**
 * @return {?}
 */
export function initWeek() {
    addFormatToken('w', ['ww', 2, false], 'wo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getWeek(date, opts.locale)
            .toString(10);
    }));
    addFormatToken('W', ['WW', 2, false], 'Wo', (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getISOWeek(date)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
    }));
    // export function getSetWeek (input) {
    //   var week = this.localeData().week(this);
    //   return input == null ? week : this.add((input - week) * 7, 'd');
    // }
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
export function setWeek(date, input, locale = getLocale()) {
    /** @type {?} */
    const week = getWeek(date, locale);
    return add(date, (input - week) * 7, 'day');
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function getWeek(date, locale = getLocale(), isUTC) {
    return locale.week(date, isUTC);
}
// export function getSetISOWeek (input) {
//   var week = weekOfYear(this, 1, 4).week;
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
/**
 * @param {?} date
 * @param {?} input
 * @return {?}
 */
export function setISOWeek(date, input) {
    /** @type {?} */
    const week = getISOWeek(date);
    return add(date, (input - week) * 7, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getISOWeek(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).week;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL3dlZWsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUk3QyxNQUFNLFVBQVUsUUFBUTtJQUN0QixjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJOzs7OztJQUN4QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM5QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUNGLENBQUM7SUFFRixjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJOzs7O0lBQ3hDLFVBQVMsSUFBVTtRQUNqQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUosVUFBVTtJQUVSLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUIsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUvQixhQUFhO0lBRVgsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWhDLFVBQVU7SUFFUixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUIsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdkMsaUJBQWlCLENBQ2YsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Ozs7Ozs7SUFDdEIsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQWE7UUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFDRixDQUFDO0lBRUosdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QyxxRUFBcUU7SUFDckUsSUFBSTtBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVUsRUFBRSxLQUFhLEVBQUUsTUFBTSxHQUFHLFNBQVMsRUFBRTs7VUFDL0QsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0lBRWxDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBVSxFQUFFLE1BQU0sR0FBRyxTQUFTLEVBQUUsRUFBRSxLQUFlO0lBQ3ZFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7Ozs7OztBQU9ELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVSxFQUFFLEtBQWE7O1VBQzVDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBRTdCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFVLEVBQUUsS0FBZTtJQUNwRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2VlaygpIHtcbiAgYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMiwgZmFsc2VdLCAnd28nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRXZWVrKGRhdGUsIG9wdHMubG9jYWxlKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyLCBmYWxzZV0sICdXbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SVNPV2VlayhkYXRlKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG4gIGFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrJywgNSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1cnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ3cnLCAnd3cnLCAnVycsICdXVyddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWsgKGlucHV0KSB7XG4vLyAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuLy8gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0V2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSk6IERhdGUge1xuICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBsb2NhbGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gd2VlaykgKiA3LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gbG9jYWxlLndlZWsoZGF0ZSwgaXNVVEMpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayAoaW5wdXQpIHtcbi8vICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4vLyAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElTT1dlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlcik6IERhdGUge1xuICBjb25zdCB3ZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIHdlZWspICogNywgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCAxLCA0LCBpc1VUQykud2Vlaztcbn1cblxuIl19