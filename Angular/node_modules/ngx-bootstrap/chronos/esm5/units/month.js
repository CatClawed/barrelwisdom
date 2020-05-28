/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { isLeapYear } from './year';
import { mod } from '../utils';
import { getMonth } from '../utils/date-getters';
import { addRegexToken, match1to2, match2 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MONTH } from './constants';
import { toInt } from '../utils/type-checks';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
import { getParsingFlags } from '../create/parsing-flags';
// todo: this is duplicate, source in date-getters.ts
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
export function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    /** @type {?} */
    var modMonth = mod(month, 12);
    /** @type {?} */
    var _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? isLeapYear(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
/**
 * @return {?}
 */
export function initMonth() {
    // FORMATTING
    addFormatToken('M', ['MM', 2, false], 'Mo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
    }));
    addFormatToken('MMM', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
    }));
    addFormatToken('MMMM', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
    }));
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    }));
    addRegexToken('MMMM', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    }));
    addParseToken(['M', 'MM'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
    }));
    addParseToken(['MMM', 'MMMM'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} token
     * @return {?}
     */
    function (input, array, config, token) {
        /** @type {?} */
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = !!input;
        }
        return config;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9tb250aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFLMUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0IsT0FBTyxHQUFHLENBQUM7S0FDWjs7UUFDSyxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7O1FBQ3pCLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtJQUU1QyxPQUFPLFFBQVEsS0FBSyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxVQUFV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ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBpc0xlYXBZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gdG9kbzogdGhpcyBpcyBkdXBsaWNhdGUsIHNvdXJjZSBpbiBkYXRlLWdldHRlcnMudHNcbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICBjb25zdCBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICBjb25zdCBfeWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcblxuICByZXR1cm4gbW9kTW9udGggPT09IDFcbiAgICA/IGlzTGVhcFllYXIoX3llYXIpID8gMjkgOiAyOFxuICAgIDogKDMxIC0gbW9kTW9udGggJSA3ICUgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9udGgoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMiwgZmFsc2VdLCAnTW8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TW9udGgoZGF0ZSwgb3B0cy5pc1VUQykgKyAxKS50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdNTU0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tb250aHNTaG9ydChkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUubW9udGhzKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnbW9udGgnLCAnTScpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ00nLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuICBhZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFxuICAgIFsnTU1NJywgJ01NTU0nXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgY29uc3QgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gbW9udGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSAhIWlucHV0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cbiJdfQ==