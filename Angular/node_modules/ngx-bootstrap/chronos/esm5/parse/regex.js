/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hasOwnProp, isFunction } from '../utils/type-checks';
/** @type {?} */
export var match1 = /\d/;
//       0 - 9
/** @type {?} */
export var match2 = /\d\d/;
//      00 - 99
/** @type {?} */
export var match3 = /\d{3}/;
//     000 - 999
/** @type {?} */
export var match4 = /\d{4}/;
//    0000 - 9999
/** @type {?} */
export var match6 = /[+-]?\d{6}/;
// -999999 - 999999
/** @type {?} */
export var match1to2 = /\d\d?/;
//       0 - 99
/** @type {?} */
export var match3to4 = /\d\d\d\d?/;
//     999 - 9999
/** @type {?} */
export var match5to6 = /\d\d\d\d\d\d?/;
//   99999 - 999999
/** @type {?} */
export var match1to3 = /\d{1,3}/;
//       0 - 999
/** @type {?} */
export var match1to4 = /\d{1,4}/;
//       0 - 9999
/** @type {?} */
export var match1to6 = /[+-]?\d{1,6}/;
// -999999 - 999999
/** @type {?} */
export var matchUnsigned = /\d+/;
//       0 - inf
/** @type {?} */
export var matchSigned = /[+-]?\d+/;
//    -inf - inf
/** @type {?} */
export var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
// +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
export var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
// +00 -00 +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
export var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
// 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
/** @type {?} */
export var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
/** @type {?} */
var regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
export function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    });
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
export function getParseRegexForToken(token, locale) {
    /** @type {?} */
    var _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (/**
     * @param {?} matched
     * @param {?} p1
     * @param {?} p2
     * @param {?} p3
     * @param {?} p4
     * @return {?}
     */
    function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; })));
}
/**
 * @param {?} str
 * @return {?}
 */
export function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHOUQsTUFBTSxLQUFPLE1BQU0sR0FBRyxJQUFJOzs7QUFDMUIsTUFBTSxLQUFPLE1BQU0sR0FBRyxNQUFNOzs7QUFDNUIsTUFBTSxLQUFPLE1BQU0sR0FBRyxPQUFPOzs7QUFDN0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxPQUFPOzs7QUFDN0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxZQUFZOzs7QUFDbEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxPQUFPOzs7QUFDaEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxXQUFXOzs7QUFDcEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxlQUFlOzs7QUFDeEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxTQUFTOzs7QUFDbEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxTQUFTOzs7QUFDbEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxjQUFjOzs7QUFFdkMsTUFBTSxLQUFPLGFBQWEsR0FBRyxLQUFLOzs7QUFDbEMsTUFBTSxLQUFPLFdBQVcsR0FBRyxVQUFVOzs7QUFFckMsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7OztBQUMvQyxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOzs7QUFFekQsTUFBTSxLQUFPLGNBQWMsR0FBRyxzQkFBc0I7Ozs7OztBQUtwRCxNQUFNLEtBQU8sU0FBUyxHQUFHLDBJQUEwSTs7SUFHN0osT0FBTyxHQUFtQyxFQUFFOzs7Ozs7O0FBR2xELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7SUFDOUYsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUV2QixPQUFPO0tBQ1I7SUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDOzs7OztJQUFHLFVBQVUsUUFBaUIsRUFBRSxNQUFjO1FBQzFELE9BQU8sQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELENBQUMsQ0FBQSxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxNQUFjOztRQUMzRCxPQUFPLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMvQixPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7OztBQUdELFNBQVMsY0FBYyxDQUFDLEdBQVc7SUFDakMsMkJBQTJCO0lBQzNCLE9BQU8sV0FBVyxDQUFDLEdBQUc7U0FDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakIsT0FBTyxDQUFDLHFDQUFxQzs7Ozs7Ozs7SUFBRSxVQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUssT0FBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQXBCLENBQW9CLEVBQUMsQ0FDbkcsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUFXO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5leHBvcnQgY29uc3QgbWF0Y2gxID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcbmV4cG9ydCBjb25zdCBtYXRjaDIgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XG5leHBvcnQgY29uc3QgbWF0Y2gzID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNCA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2g2ID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcbmV4cG9ydCBjb25zdCBtYXRjaDN0bzQgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNXRvNiA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMyA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzQgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNiA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcblxuZXhwb3J0IGNvbnN0IG1hdGNoVW5zaWduZWQgPSAvXFxkKy87ICAgICAgICAgICAvLyAgICAgICAwIC0gaW5mXG5leHBvcnQgY29uc3QgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXG5cbmV4cG9ydCBjb25zdCBtYXRjaE9mZnNldCA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5leHBvcnQgY29uc3QgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpOyAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuXG5leHBvcnQgY29uc3QgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbi8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGNvbnN0IG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pO1xuXG5leHBvcnQgdHlwZSBSZWdFeHBUb2tlbkZuID0gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkgPT4gUmVnRXhwO1xuY29uc3QgcmVnZXhlczoge1trZXk6IHN0cmluZ106IFJlZ0V4cFRva2VuRm59ID0ge307XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW46IHN0cmluZywgcmVnZXg6IFJlZ0V4cCB8IFJlZ0V4cFRva2VuRm4sIHN0cmljdFJlZ2V4PzogUmVnRXhwKTogdm9pZCB7XG4gIGlmIChpc0Z1bmN0aW9uKHJlZ2V4KSkge1xuICAgIHJlZ2V4ZXNbdG9rZW5dID0gcmVnZXg7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICByZWdleGVzW3Rva2VuXSA9IGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpIHtcbiAgICByZXR1cm4gKGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4KSA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW46IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICBjb25zdCBfc3RyaWN0ID0gZmFsc2U7XG4gIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKF9zdHJpY3QsIGxvY2FsZSk7XG59XG5cbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiByZWdleEVzY2FwZShzdHJcbiAgICAucmVwbGFjZSgnXFxcXCcsICcnKVxuICAgIC5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkgPT4gcDEgfHwgcDIgfHwgcDMgfHwgcDQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdleEVzY2FwZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59XG4iXX0=