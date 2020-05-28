/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getHours, getMinutes, getSeconds } from '../utils/date-getters';
import { addFormatToken } from '../format/format';
import { zeroFill } from '../utils/zero-fill';
import { addRegexToken, match1to2, match2, match3to4, match5to6 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { HOUR, MINUTE, SECOND } from './constants';
import { toInt } from '../utils/type-checks';
import { getParsingFlags } from '../create/parsing-flags';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
/**
 * @return {?}
 */
export function initHour() {
    // FORMATTING
    // FORMATTING
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
    }
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
    }
    addFormatToken('H', ['HH', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getHours(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('h', ['hh', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return hFormat(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('k', ['kk', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return kFormat(date, opts.isUTC)
            .toString(10);
    }));
    addFormatToken('hmm', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        const _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return `${_h}${_mm}`;
    }));
    addFormatToken('hmmss', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        const _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return `${_h}${_mm}${_ss}`;
    }));
    addFormatToken('Hmm', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        const _H = getHours(date, opts.isUTC);
        /** @type {?} */
        const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return `${_H}${_mm}`;
    }));
    addFormatToken('Hmmss', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        /** @type {?} */
        const _H = getHours(date, opts.isUTC);
        /** @type {?} */
        const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return `${_H}${_mm}${_ss}`;
    }));
    /**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */
    function meridiem(token, lowercase) {
        addFormatToken(token, null, null, (/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */
        function (date, opts) {
            return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        }));
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    /**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        const kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
    }));
    addParseToken(['a', 'A'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
    }));
    addParseToken(['h', 'hh'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('hmm', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        const pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('hmmss', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        const pos1 = input.length - 4;
        /** @type {?} */
        const pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    }));
    addParseToken('Hmm', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        const pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    }));
    addParseToken('Hmmss', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        /** @type {?} */
        const pos1 = input.length - 4;
        /** @type {?} */
        const pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2hvdXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBR3pDLE1BQU0sVUFBVSxRQUFRO0lBQ3hCLGFBQWE7Ozs7Ozs7SUFFWCxTQUFTLE9BQU8sQ0FBQyxJQUFVLEVBQUUsS0FBYztRQUN6QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxTQUFTLE9BQU8sQ0FBQyxJQUFVLEVBQUUsS0FBYztRQUN6QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFj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aW1wb3J0IHsgZ2V0SG91cnMsIGdldE1pbnV0ZXMsIGdldFNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIsIG1hdGNoM3RvNCwgbWF0Y2g1dG82IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhvdXIoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgZnVuY3Rpb24gaEZvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIGlzVVRDKSAlIDEyIHx8IDEyO1xuICB9XG5cbiAgZnVuY3Rpb24ga0Zvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIGlzVVRDKSB8fCAyNDtcbiAgfVxuXG4gIGFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBrRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdobW0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IF9oID0gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X2h9JHtfbW19YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcbiAgICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X2h9JHtfbW19JHtfc3N9YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0htbScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X0h9JHtfbW19YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfSCA9IGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG4gICAgICBjb25zdCBfc3MgPSB6ZXJvRmlsbChnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgICAgcmV0dXJuIGAke19IfSR7X21tfSR7X3NzfWA7XG4gICAgfVxuICApO1xuXG4gIGZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuOiBzdHJpbmcsIGxvd2VyY2FzZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLFxuICAgICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gb3B0cy5sb2NhbGUubWVyaWRpZW0oZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyksIGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIGxvd2VyY2FzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gIG1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuLy8gUFJJT1JJVFlcbiAgYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG5cbi8vIFBBUlNJTkdcblxuICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbiAgfVxuXG4gIGFkZFJlZ2V4VG9rZW4oJ2EnLCBtYXRjaE1lcmlkaWVtKTtcbiAgYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuICBhZGRSZWdleFRva2VuKCdIJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignaCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbiAgYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbiAgYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG4gIGFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuICBhZGRQYXJzZVRva2VuKFxuICAgIFsnaycsICdrayddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBjb25zdCBrSW5wdXQgPSB0b0ludChpbnB1dCk7XG4gICAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbiAgYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uc3QgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG59XG4iXX0=