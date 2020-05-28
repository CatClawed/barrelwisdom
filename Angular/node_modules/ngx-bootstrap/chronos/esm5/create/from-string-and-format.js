/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { configFromISO, configFromRFC2822 } from './from-string';
import { expandFormat } from '../format';
import { formattingTokens, formatTokenFunctions } from '../format/format';
import { isArray } from '../utils/type-checks';
import { getParseRegexForToken } from '../parse/regex';
import { addTimeToArrayFromToken } from '../parse/token';
import { HOUR } from '../units/constants';
import { configFromArray } from './from-array';
import { getParsingFlags } from './parsing-flags';
import { checkOverflow } from './check-overflow';
// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
/** @type {?} */
export var ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
/** @type {?} */
export var RFC_2822 = 'RFC_2822';
// date from string and format string
/**
 * @param {?} config
 * @return {?}
 */
export function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return configFromISO(config);
    }
    if (config._f === RFC_2822) {
        return configFromRFC2822(config);
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    if (isArray(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    /** @type {?} */
    var input = config._i.toString();
    /** @type {?} */
    var totalParsedInputLength = 0;
    /** @type {?} */
    var inputLength = input.length;
    /** @type {?} */
    var tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    /** @type {?} */
    var i;
    /** @type {?} */
    var token;
    /** @type {?} */
    var parsedInput;
    /** @type {?} */
    var skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        getParsingFlags(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    return checkOverflow(config);
}
/**
 * @param {?} locale
 * @param {?} _hour
 * @param {?} meridiem
 * @return {?}
 */
function meridiemFixWrap(locale, _hour, meridiem) {
    /** @type {?} */
    var hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    /** @type {?} */
    var isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1zdHJpbmctYW5kLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFLakQsTUFBTSxLQUFPLFFBQVEsR0FBRyxVQUFVOzs7O0FBSWxDLE1BQU0sS0FBTyxRQUFRLEdBQUcsVUFBVTs7Ozs7O0FBR2xDLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxNQUF5QjtJQUNqRSxnRkFBZ0Y7SUFDaEYsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtRQUMxQixPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztL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SUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUlTTywgY29uZmlnRnJvbVJGQzI4MjIgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGV4cGFuZEZvcm1hdCB9IGZyb20gJy4uL2Zvcm1hdCc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nVG9rZW5zLCBmb3JtYXRUb2tlbkZ1bmN0aW9ucyB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuLy8gaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcbmV4cG9ydCBjb25zdCBJU09fODYwMSA9ICdJU09fODYwMSc7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG4vLyBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0IGNvbnN0IFJGQ18yODIyID0gJ1JGQ18yODIyJztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgaWYgKGNvbmZpZy5fZiA9PT0gSVNPXzg2MDEpIHtcbiAgICByZXR1cm4gY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICB9XG4gIGlmIChjb25maWcuX2YgPT09IFJGQ18yODIyKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gIH1cbiAgY29uZmlnLl9hID0gW107XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICBpZiAoaXNBcnJheShjb25maWcuX2YpIHx8ICghY29uZmlnLl9pICYmIGNvbmZpZy5faSAhPT0gMCkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcblxuICBsZXQgaW5wdXQgPSBjb25maWcuX2kudG9TdHJpbmcoKTtcbiAgbGV0IHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xuICBjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gIGxldCBpO1xuICBsZXQgdG9rZW47XG4gIGxldCBwYXJzZWRJbnB1dDtcbiAgbGV0IHNraXBwZWQ7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBwYXJzZWRJbnB1dCA9IChpbnB1dC5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZy5fbG9jYWxlKSkgfHwgW10pWzBdO1xuICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgc2tpcHBlZCA9IGlucHV0LnN1YnN0cigwLCBpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICB9XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKGlucHV0LmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICB9XG5cbiAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IGlucHV0TGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgfVxuXG4gIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB2b2lkIDA7XG4gIH1cblxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcblxuICByZXR1cm4gY2hlY2tPdmVyZmxvdyhjb25maWcpO1xufVxuXG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGU6IExvY2FsZSwgX2hvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBob3VyID0gX2hvdXI7XG5cbiAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cblxuICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICB9XG5cbiAgaWYgKGxvY2FsZS5pc1BNID09IG51bGwpIHtcbiAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICAvLyBGYWxsYmFja1xuICBjb25zdCBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICBob3VyICs9IDEyO1xuICB9XG5cbiAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgaG91ciA9IDA7XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cbiJdfQ==