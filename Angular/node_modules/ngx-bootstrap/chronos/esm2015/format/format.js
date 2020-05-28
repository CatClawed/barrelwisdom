/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { zeroFill } from '../utils/zero-fill';
import { isFunction } from '../utils/type-checks';
/** @type {?} */
export let formatFunctions = {};
/** @type {?} */
export let formatTokenFunctions = {};
// tslint:disable-next-line
/** @type {?} */
export const formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
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
    const array = format.match(formattingTokens);
    /** @type {?} */
    const length = array.length;
    /** @type {?} */
    const formatArr = new Array(length);
    for (let i = 0; i < length; i++) {
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
    function (date, locale, isUTC, offset = 0) {
        /** @type {?} */
        let output = '';
        for (let j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? ((/** @type {?} */ (formatArr[j]))).call(null, date, { format, locale, isUTC, offset })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0L2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFLLGVBQWUsR0FFdEIsRUFBRTs7QUFDTixNQUFNLEtBQUssb0JBQW9CLEdBQXVDLEVBQUU7OztBQUd4RSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsc0xBQXNMOzs7Ozs7Ozs7Ozs7QUFNdE4sTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQ2IsTUFBaUMsRUFDakMsT0FBZSxFQUNmLFFBQXlCO0lBRXRELElBQUksS0FBSyxFQUFFO1FBQ1Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDVixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQUFHO1lBQ2hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUEsQ0FBQztLQUNIO0lBRUQsSUFBSSxPQUFPLEVBQUU7UUFDWCxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7Ozs7O1FBQUcsVUFBVSxJQUFVLEVBQUUsSUFBMEI7WUFDOUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUEsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYzs7VUFHekMsS0FBSyxHQUFhLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O1VBQ2hELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7VUFFckIsU0FBUyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQ7Ozs7Ozs7SUFBTyxVQUFVLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBYyxFQUFFLE1BQU0sR0FBRyxDQUFDOztZQUVqRSxNQUFNLEdBQUcsRUFBRTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsc0JBQXNCLENBQUMsS0FBYTtJQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBEYXRlRm9ybWF0dGVyRm4gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBsZXQgZm9ybWF0RnVuY3Rpb25zOiB7XG4gIFtrZXk6IHN0cmluZ106IChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZztcbn0gPSB7fTtcbmV4cG9ydCBsZXQgZm9ybWF0VG9rZW5GdW5jdGlvbnM6IHsgW2tleTogc3RyaW5nXTogRGF0ZUZvcm1hdHRlckZuIH0gPSB7fTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgY29uc3QgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRlZDogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xuXG4gIGlmICh0b2tlbikge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaWYgKHBhZGRlZCkge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB6ZXJvRmlsbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChvcmRpbmFsKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm9yZGluYWwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQ6IHN0cmluZyk6XG4gIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZyB7XG5cbiAgY29uc3QgYXJyYXk6IHN0cmluZ1tdID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZm9ybWF0QXJyOiBzdHJpbmdbXSB8IERhdGVGb3JtYXR0ZXJGbltdID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZvcm1hdEFycltpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxuICAgICAgPyBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cbiAgICAgIDogcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG5cbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oZm9ybWF0QXJyW2pdKVxuICAgICAgICA/IChmb3JtYXRBcnJbal0gYXMgRGF0ZUZvcm1hdHRlckZuKS5jYWxsKG51bGwsIGRhdGUsIHtmb3JtYXQsIGxvY2FsZSwgaXNVVEMsIG9mZnNldH0pXG4gICAgICAgIDogZm9ybWF0QXJyW2pdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICB9XG5cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuIl19