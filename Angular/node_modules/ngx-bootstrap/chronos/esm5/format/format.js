/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { zeroFill } from '../utils/zero-fill';
import { isFunction } from '../utils/type-checks';
/** @type {?} */
export var formatFunctions = {};
/** @type {?} */
export var formatTokenFunctions = {};
// tslint:disable-next-line
/** @type {?} */
export var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
export function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = (/**
         * @return {?}
         */
        function () {
            return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        });
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = (/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */
        function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        });
    }
}
/**
 * @param {?} format
 * @return {?}
 */
export function makeFormatFunction(format) {
    /** @type {?} */
    var array = format.match(formattingTokens);
    /** @type {?} */
    var length = array.length;
    /** @type {?} */
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return (/**
     * @param {?} date
     * @param {?} locale
     * @param {?} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var output = '';
        for (var j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? ((/** @type {?} */ (formatArr[j]))).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    });
}
/**
 * @param {?} input
 * @return {?}
 */
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0L2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFLLGVBQWUsR0FFdEIsRUFBRTs7QUFDTixNQUFNLEtBQUssb0JBQW9CLEdBQXVDLEVBQUU7OztBQUd4RSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsc0xBQXNMOzs7Ozs7Ozs7Ozs7QUFNdE4sTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQ2IsTUFBaUMsRUFDakMsT0FBZSxFQUNmLFFBQXlCO0lBRXRELElBQUksS0FBSyxFQUFFO1FBQ1Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDVixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQUFHO1lBQ2hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUEsQ0FBQztLQUNIO0lBRUQsSUFBSSxPQUFPLEVBQUU7UUFDWCxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7Ozs7O1FBQUcsVUFBVSxJQUFVLEVBQUUsSUFBMEI7WUFDOUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUEsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYzs7UUFHekMsS0FBSyxHQUFhLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O1FBQ2hELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7UUFFckIsU0FBUyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQ7Ozs7Ozs7SUFBTyxVQUFVLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBYyxFQUFFLE1BQVU7UUFBVix1QkFBQSxFQUFBLFVBQVU7O1lBRWpFLE1BQU0sR0FBRyxFQUFFO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLFFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDO2dCQUNyRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLEtBQWE7SUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgRGF0ZUZvcm1hdHRlckZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgbGV0IGZvcm1hdEZ1bmN0aW9uczoge1xuICBba2V5OiBzdHJpbmddOiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmc7XG59ID0ge307XG5leHBvcnQgbGV0IGZvcm1hdFRva2VuRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IERhdGVGb3JtYXR0ZXJGbiB9ID0ge307XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGNvbnN0IGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkZWQ6IFtzdHJpbmcsIG51bWJlciwgYm9vbGVhbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcblxuICBpZiAodG9rZW4pIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIGlmIChwYWRkZWQpIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gemVyb0ZpbGwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgIH07XG4gIH1cblxuICBpZiAob3JkaW5hbCkge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5vcmRpbmFsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0OiBzdHJpbmcpOlxuICAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmcge1xuXG4gIGNvbnN0IGFycmF5OiBzdHJpbmdbXSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGNvbnN0IGZvcm1hdEFycjogc3RyaW5nW10gfCBEYXRlRm9ybWF0dGVyRm5bXSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3JtYXRBcnJbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cbiAgICAgID8gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXG4gICAgICA6IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM6IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuXG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGZvcm1hdEFycltqXSlcbiAgICAgICAgPyAoZm9ybWF0QXJyW2pdIGFzIERhdGVGb3JtYXR0ZXJGbikuY2FsbChudWxsLCBkYXRlLCB7Zm9ybWF0LCBsb2NhbGUsIGlzVVRDLCBvZmZzZXR9KVxuICAgICAgICA6IGZvcm1hdEFycltqXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cbiJdfQ==