/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { latinMap } from './latin-map';
/**
 * @param {?} str
 * @return {?}
 */
export function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return latinMap[a] || a;
    }));
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
export function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
export function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    /** @type {?} */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    /** @type {?} */
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    /** @type {?} */
    var result = [];
    /** @type {?} */
    var preTokenizedLength = preTokenized.length;
    /** @type {?} */
    var token;
    /** @type {?} */
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
export function getValueFromObject(object, option) {
    var e_1, _a;
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        /** @type {?} */
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    /** @type {?} */
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    /** @type {?} */
    var propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = tslib_1.__values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUV2QyxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVc7SUFDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQW9COzs7O0lBQUUsVUFBVSxDQUFTO1FBQzFELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxhQUFxQjtJQUNoRCx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1QixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakUsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVcsRUFDWCxtQkFBeUIsRUFDekIscUJBQTBCO0lBRDFCLG9DQUFBLEVBQUEseUJBQXlCO0lBQ3pCLHNDQUFBLEVBQUEsMEJBQTBCOzs7UUFFM0MsUUFBUSxHQUFHLFNBQU8scUJBQXFCLGFBQVEscUJBQXFCLFFBQUs7U0FDN0UsU0FBTyxxQkFBcUIsY0FBUyxtQkFBbUIsUUFBSyxDQUFBOztRQUN6RCxZQUFZLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBQzdELE1BQU0sR0FBYSxFQUFFOztRQUNyQixrQkFBa0IsR0FBVyxZQUFZLENBQUMsTUFBTTs7UUFDbEQsS0FBYTs7UUFDWCx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFJLHFCQUFxQixPQUFJLEVBQUUsR0FBRyxDQUFDO0lBRTlFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssbUJBQW1CLEVBQUU7WUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBVyxFQUFFLE1BQWM7O0lBQzVELElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFCO0lBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUNuQixZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFdkQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQzs7UUFFSyxVQUFVLEdBQVcsTUFBTTtTQUM5QixPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztTQUM1QixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7UUFDZixlQUFlLEdBQWEsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1FBRXZELEtBQXVCLElBQUEsb0JBQUEsaUJBQUEsZUFBZSxDQUFBLGdEQUFBLDZFQUFFO1lBQW5DLElBQU0sUUFBUSw0QkFBQTtZQUNqQixJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLDJCQUEyQjtnQkFDM0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQjtTQUNGOzs7Ozs7Ozs7SUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQUMsT0FBTyxFQUFFLENBQUM7S0FBRTtJQUUxQixPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF0aW5NYXAgfSBmcm9tICcuL2xhdGluLW1hcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXRpbml6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXkEtWmEtejAtOVxcW1xcXSBdL2csIGZ1bmN0aW9uIChhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBsYXRpbk1hcFthXSB8fCBhO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZWdleDogY2FwdHVyZSB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZ1xuICAvLyB0aGF0IHdpbGwgYmUgdXNlZCB0byBtYXRjaCB0aGUgcmVzdWx0cywgZm9yIGV4YW1wbGUgaWYgdGhlIGNhcHR1cmUgaXNcbiAgLy8gJ2EnIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbn1cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzdHI6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkUmVnZXhEZWxpbWl0ZXJzID0gJyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBocmFzZVJlZ2V4RGVsaW1pdGVycyA9ICcnKTogQXJyYXk8c3RyaW5nPiB7XG4gIC8qIHRzbGludDplbmFibGUgKi9cbiAgY29uc3QgcmVnZXhTdHIgPSBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pKFteJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSspYCArXG4gICAgYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKXwoW14ke3dvcmRSZWdleERlbGltaXRlcnN9XSspYDtcbiAgY29uc3QgcHJlVG9rZW5pemVkOiBzdHJpbmdbXSA9IHN0ci5zcGxpdChuZXcgUmVnRXhwKHJlZ2V4U3RyLCAnZycpKTtcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBwcmVUb2tlbml6ZWRMZW5ndGg6IG51bWJlciA9IHByZVRva2VuaXplZC5sZW5ndGg7XG4gIGxldCB0b2tlbjogc3RyaW5nO1xuICBjb25zdCByZXBsYWNlUGhyYXNlRGVsaW1pdGVycyA9IG5ldyBSZWdFeHAoYFske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dK2AsICdnJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVUb2tlbml6ZWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIHRva2VuID0gcHJlVG9rZW5pemVkW2ldO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggJiYgdG9rZW4gIT09IHdvcmRSZWdleERlbGltaXRlcnMpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHRva2VuLnJlcGxhY2UocmVwbGFjZVBocmFzZURlbGltaXRlcnMsICcnKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRnJvbU9iamVjdChvYmplY3Q6IGFueSwgb3B0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIW9wdGlvbiB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHRpb24uZW5kc1dpdGgoJygpJykpIHtcbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBvcHRpb24uc2xpY2UoMCwgb3B0aW9uLmxlbmd0aCAtIDIpO1xuXG4gICAgcmV0dXJuIG9iamVjdFtmdW5jdGlvbk5hbWVdKCkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGNvbnN0IHByb3BlcnRpZXM6IHN0cmluZyA9IG9wdGlvblxuICAgIC5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgJy4kMScpXG4gICAgLnJlcGxhY2UoL15cXC4vLCAnJyk7XG4gIGNvbnN0IHByb3BlcnRpZXNBcnJheTogc3RyaW5nW10gPSBwcm9wZXJ0aWVzLnNwbGl0KCcuJyk7XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzQXJyYXkpIHtcbiAgICBpZiAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG9iamVjdCA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIGlmICghb2JqZWN0KSB7cmV0dXJuICcnOyB9XG5cbiAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xufVxuIl19