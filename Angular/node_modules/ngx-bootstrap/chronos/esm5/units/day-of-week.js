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
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
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
    var _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    /** @type {?} */
    var _weekDay = locale.weekdaysParse(input);
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
export function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = getLocale(); }
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
export function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    /** @type {?} */
    var day = getDay(date, isUTC);
    /** @type {?} */
    var _input = parseWeekday(input, locale);
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
export function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
export function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    /** @type {?} */
    var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
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
export function setISODayOfWeek(date, input, opts) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    if (opts === void 0) { opts = {}; }
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    /** @type {?} */
    var weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLXdlZWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9kYXktb2Ytd2Vlay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUc5QyxNQUFNLFVBQVUsYUFBYTtJQUM3QixhQUFhO0lBRVgsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDNUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDN0IsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMs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QyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakUsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLElBQStDO0lBQS9DLHFCQUFBLEVBQUEsU0FBK0M7O1FBQ3JHLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRWpFLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVUsRUFBRSxLQUFlO0lBQ3pELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVSxFQUFFLEtBQXNCLEVBQUUsSUFBOEI7SUFDaEcsd0NBQXdDO0lBQ3hDLGlFQUFpRTtJQUNqRSwwREFBMEQ7SUFIUSxxQkFBQSxFQUFBLFNBQThCOzs7OztRQUsxRixPQUFPLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRW5ELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mV2VlaygpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignZCcsIG51bGwsICdkbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c01pbihkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5cyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdlJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgICAgLy8gcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignRScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldElTT0RheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbiAgYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbiAgYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuLy8gUFJJT1JJVFlcbiAgYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG4gIGFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignZCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcblxuICBhZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG5cbiAgYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuICBhZGRSZWdleFRva2VuKCdkZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ2RkJywgJ2RkZCcsICdkZGRkJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuKSB7XG4gICAgICBjb25zdCB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSAhIWlucHV0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcblxuICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ2QnLCAnZScsICdFJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICB3ZWVrW3Rva2VuXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG5cbi8vIEhFTFBFUlNcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSk6IG51bWJlciB7XG4gIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgX251bSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gIGlmICghaXNOYU4oX251bSkpIHtcbiAgICByZXR1cm4gX251bTtcbiAgfVxuXG4gIGNvbnN0IF93ZWVrRGF5ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICBpZiAoaXNOdW1iZXIoX3dlZWtEYXkpKSB7XG4gICAgcmV0dXJuIF93ZWVrRGF5O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQ6IHN0cmluZyB8IG51bWJlciwgbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKSk6IG51bWJlciB7XG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICB9XG5cbiAgcmV0dXJuIGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGlzVVRDPzogYm9vbGVhbjsgbG9jYWxlOiBMb2NhbGUgfSk6IERhdGUgfCBudW1iZXIge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGdldERheU9mV2VlayhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBzZXREYXlPZldlZWsoZGF0ZSwgaW5wdXQsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IGRheSA9IGdldERheShkYXRlLCBpc1VUQyk7XG4gIGNvbnN0IF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIF9pbnB1dCAtIGRheSwgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHRvZG86IHV0Y1xuLy8gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gKGdldERheShkYXRlLCBpc1VUQykgKyA3IC0gbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCkpICUgNztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZTsgaXNVVEM/OiBib29sZWFuIH0gPSB7fSk6IERhdGUge1xuICBjb25zdCB3ZWVrZGF5ID0gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIGlucHV0IC0gd2Vla2RheSwgJ2RheScpO1xufVxuXG5cbi8vIGdldFNldElTT0RheU9mV2Vla1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT0RheU9mV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0RGF5KGRhdGUsIGlzVVRDKSB8fCA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlIH0gPSB7fSk6IERhdGUge1xuICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICBjb25zdCB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBvcHRzLmxvY2FsZSk7XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBnZXREYXlPZldlZWsoZGF0ZSkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbn1cbiJdfQ==