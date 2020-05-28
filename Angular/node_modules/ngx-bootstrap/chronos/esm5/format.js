/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
import './units/index';
import { formatFunctions, makeFormatFunction } from './format/format';
import { getLocale } from './locale/locales';
import { isDateValid } from './utils/type-checks';
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    /** @type {?} */
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    /** @type {?} */
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    /** @type {?} */
    var format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
export function expandFormat(_format, locale) {
    /** @type {?} */
    var format = _format;
    /** @type {?} */
    var i = 5;
    /** @type {?} */
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    /** @type {?} */
    var replaceLongDateFormatTokens = (/**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return locale.formatLongDate(input) || input;
    });
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRSxLQUFlLEVBQUUsTUFBVTtJQUFWLHVCQUFBLEVBQUEsVUFBVTs7UUFDM0YsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUNiLGNBQVcsTUFBTSxnRUFBMEQsQ0FDNUUsQ0FBQztLQUNIOztRQUVLLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQzs7UUFFaEYsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBRWxFLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLEtBQWUsRUFBRSxNQUFVO0lBQVYsdUJBQUEsRUFBQSxVQUFVO0lBQ25HLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO0tBQzNCOztRQUVLLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhGLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFFLE1BQWM7O1FBQ3RELE1BQU0sR0FBRyxPQUFPOztRQUNoQixDQUFDLEdBQUcsQ0FBQzs7UUFDSCxxQkFBcUIsR0FBRyw0Q0FBNEM7O1FBRXBFLDJCQUEyQjs7OztJQUFHLFVBQUMsS0FBVTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQy9DLENBQUMsQ0FBQTtJQUVELHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNuRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzVFLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNSO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vbWVudC5qc1xuLy8gdmVyc2lvbiA6IDIuMTguMVxuLy8gYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8gbGljZW5zZSA6IE1JVFxuLy8gbW9tZW50anMuY29tXG5cbmltcG9ydCAnLi91bml0cy9pbmRleCc7XG5pbXBvcnQgeyBmb3JtYXRGdW5jdGlvbnMsIG1ha2VGb3JtYXRGdW5jdGlvbiB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCB9IGZyb20gJy4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSB8fCAnZW4nKTtcbiAgaWYgKCFfbG9jYWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYExvY2FsZSBcIiR7bG9jYWxlfVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxuICAgICk7XG4gIH1cblxuICBjb25zdCBfZm9ybWF0ID0gZm9ybWF0IHx8IChpc1VUQyA/ICAnWVlZWS1NTS1ERFRISDptbTpzc1taXScgOiAnWVlZWS1NTS1ERFRISDptbTpzc1onKTtcblxuICBjb25zdCBvdXRwdXQgPSBmb3JtYXRNb21lbnQoZGF0ZSwgX2Zvcm1hdCwgX2xvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG5cbiAgaWYgKCFvdXRwdXQpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIF9sb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQoZGF0ZTogRGF0ZSwgX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgaWYgKCFpc0RhdGVWYWxpZChkYXRlKSkge1xuICAgIHJldHVybiBsb2NhbGUuaW52YWxpZERhdGU7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBleHBhbmRGb3JtYXQoX2Zvcm1hdCwgbG9jYWxlKTtcbiAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0oZGF0ZSwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdCA9IF9mb3JtYXQ7XG4gIGxldCBpID0gNTtcbiAgY29uc3QgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxuICBjb25zdCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMgPSAoaW5wdXQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZ0RhdGUoaW5wdXQpIHx8IGlucHV0O1xuICB9O1xuXG4gIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgaSAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdDtcbn1cbiJdfQ==