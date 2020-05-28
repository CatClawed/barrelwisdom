/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { getDay } from '../utils/date-getters';
import { addRegexToken, match1to2 } from '../parse/regex';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { addWeekParseToken } from '../parse/token';
import { getParsingFlags } from '../create/parsing-flags';
import { isNumber, isString, toInt } from '../utils/type-checks';
import { add } from '../moment/add-subtract';
import { getLocale } from '../locale/locales';
/**
 * @return {?}
 */
export function initDayOfWeek() {
    // FORMATTING
    addFormatToken('d', null, 'do', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getDay(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('dd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
    }));
    addFormatToken('ddd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
    }));
    addFormatToken('dddd', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
    }));
    addFormatToken('e', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
            .toString(10);
        // return getDay(date, opts.isUTC).toString(10);
    }));
    addFormatToken('E', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    }));
    addRegexToken('ddd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    }));
    addRegexToken('dddd', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    }));
    addWeekParseToken(['dd', 'ddd', 'dddd'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        /** @type {?} */
        const weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = !!input;
        }
        return config;
    }));
    addWeekParseToken(['d', 'e', 'E'], (/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
    }));
}
// HELPERS
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */
export function parseWeekday(input, locale) {
    if (!isString(input)) {
        return input;
    }
    /** @type {?} */
    const _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    /** @type {?} */
    const _weekDay = locale.weekdaysParse(input);
    if (isNumber(_weekDay)) {
        return _weekDay;
    }
    return null;
}
/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
export function parseIsoWeekday(input, locale = getLocale()) {
    if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNumber(input) && isNaN(input) ? null : input;
}
// MOMENTS
/**
 * @param {?} date
 * @param {?} input
 * @param {?} opts
 * @return {?}
 */
export function getSetDayOfWeek(date, input, opts) {
    if (!input) {
        return getDayOfWeek(date, opts.isUTC);
    }
    return setDayOfWeek(date, input, opts.locale, opts.isUTC);
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function setDayOfWeek(date, input, locale = getLocale(), isUTC) {
    /** @type {?} */
    const day = getDay(date, isUTC);
    /** @type {?} */
    const _input = parseWeekday(input, locale);
    return add(date, _input - day, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDayOfWeek(date, isUTC) {
    return getDay(date, isUTC);
}
/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
// todo: utc
// getSetLocaleDayOfWeek
export function getLocaleDayOfWeek(date, locale = getLocale(), isUTC) {
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
export function setLocaleDayOfWeek(date, input, opts = {}) {
    /** @type {?} */
    const weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return add(date, input - weekday, 'day');
}
// getSetISODayOfWeek
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getISODayOfWeek(date, isUTC) {
    return getDay(date, isUTC) || 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
export function setISODayOfWeek(date, input, opts = {}) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    /** @type {?} */
    const weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLXdlZWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9kYXktb2Ytd2Vlay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUc5QyxNQUFNLFVBQVUsYUFBYTtJQUM3QixhQUFhO0lBRVgsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDNUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDN0IsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMs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QWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxPQUE2QyxFQUFFOztVQUNyRyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUVqRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFVLEVBQUUsS0FBZTtJQUN6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVUsRUFBRSxLQUFzQixFQUFFLE9BQTRCLEVBQUU7SUFDaEcsd0NBQXdDO0lBQ3hDLGlFQUFpRTtJQUNqRSwwREFBMEQ7Ozs7O1VBRXBELE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFbkQsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXkgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZXZWVrKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkJywgbnVsbCwgJ2RvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzTWluKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZGRkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2UnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgICAvLyByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCdFJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuICBhZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4vLyBQUklPUklUWVxuICBhZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbiAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignZScsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZGQnLCAnZGRkJywgJ2RkZGQnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW4pIHtcbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9ICEhaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZCcsICdlJywgJ0UnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cblxuLy8gSEVMUEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlKTogbnVtYmVyIHtcbiAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBfbnVtID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgaWYgKCFpc05hTihfbnVtKSkge1xuICAgIHJldHVybiBfbnVtO1xuICB9XG5cbiAgY29uc3QgX3dlZWtEYXkgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gIGlmIChpc051bWJlcihfd2Vla0RheSkpIHtcbiAgICByZXR1cm4gX3dlZWtEYXk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gIH1cblxuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQpICYmIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgaXNVVEM/OiBib29sZWFuOyBsb2NhbGU6IExvY2FsZSB9KTogRGF0ZSB8IG51bWJlciB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBpbnB1dCwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZGF5ID0gZ2V0RGF5KGRhdGUsIGlzVVRDKTtcbiAgY29uc3QgX2lucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgX2lucHV0IC0gZGF5LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQyk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gdG9kbzogdXRjXG4vLyBnZXRTZXRMb2NhbGVEYXlPZldlZWtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiAoZ2V0RGF5KGRhdGUsIGlzVVRDKSArIDcgLSBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSkgJSA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlOyBpc1VUQz86IGJvb2xlYW4gfSA9IHt9KTogRGF0ZSB7XG4gIGNvbnN0IHdlZWtkYXkgPSBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgaW5wdXQgLSB3ZWVrZGF5LCAnZGF5Jyk7XG59XG5cblxuLy8gZ2V0U2V0SVNPRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpIHx8IDc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09EYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywgb3B0czogeyBsb2NhbGU/OiBMb2NhbGUgfSA9IHt9KTogRGF0ZSB7XG4gIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gIGNvbnN0IHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIG9wdHMubG9jYWxlKTtcblxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGdldERheU9mV2VlayhkYXRlKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xufVxuIl19