/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// ASP.NET json date format regex
import { Duration, isDuration } from './constructor';
import { isDateValid, isNumber, isObject, isString, toInt } from '../utils/type-checks';
import { DATE, HOUR, MILLISECOND, MINUTE, SECOND } from '../units/constants';
import { parseDate } from '../create/local';
import { absRound } from '../utils/abs-round';
import { cloneWithOffset } from '../units/offset';
import { isAfter, isBefore } from '../utils/date-compare';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from '../moment/add-subtract';
import { cloneDate } from '../create/clone';
/** @type {?} */
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
/** @type {?} */
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
export function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    /** @type {?} */
    var duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new Duration(duration, config);
}
/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */
function convertDuration(input, key) {
    var _a;
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (isDuration(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (isNumber(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (isString(input)) {
        /** @type {?} */
        var match = aspNetRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: toInt(match[DATE]) * sign,
                hours: toInt(match[HOUR]) * sign,
                minutes: toInt(match[MINUTE]) * sign,
                seconds: toInt(match[SECOND]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (isObject(input) && ('from' in input || 'to' in input)) {
        /** @type {?} */
        var diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
}
// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
/**
 * @param {?} inp
 * @param {?} sign
 * @return {?}
 */
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    /** @type {?} */
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function positiveMomentsDifference(base, other) {
    /** @type {?} */
    var res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    /** @type {?} */
    var _basePlus = add(cloneDate(base), res.months, 'month');
    if (isAfter(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
    return res;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function momentsDifference(base, other) {
    if (!(isDateValid(base) && isDateValid(other))) {
        return { milliseconds: 0, months: 0 };
    }
    /** @type {?} */
    var res;
    /** @type {?} */
    var _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
    if (isBefore(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUV0QyxXQUFXLEdBQUcsMERBQTBEOzs7Ozs7SUFNeEUsUUFBUSxHQUFHLHFLQUFxSzs7Ozs7OztBQUl0TCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXFCLEVBQUUsR0FBWSxFQUFFLE1BQThCO0lBQTlCLHVCQUFBLEVBQUEsV0FBOEI7O1FBQzFGLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUM1Qyx3REFBd0Q7SUFFeEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVB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QUFHLENBQUMsTUFBTSxDQUFDO0tBQ2Q7SUFFRCxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV6RSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBVSxFQUFFLEtBQVc7SUFDaEQsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUN2Qzs7UUFFRyxHQUFHOztRQUNELE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxDQUFDO0lBQ2hGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtRQUMxQixHQUFHLEdBQUcseUJBQXlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQy9DO1NBQU07UUFDTCxHQUFHLEdBQUcseUJBQXlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQzFCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XG5pbXBvcnQgeyBhYnNSb3VuZCB9IGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcblxuY29uc3QgYXNwTmV0UmVnZXggPSAvXihcXC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKylcXDooXFxkKykoPzpcXDooXFxkKykoXFwuXFxkKik/KT8kLztcblxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbi8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbi8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgaXNvUmVnZXggPSAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvO1xuXG5leHBvcnQgdHlwZSBEdXJhdGlvbklucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRHVyYXRpb24gfCBQYXJ0aWFsPERhdGVPYmplY3Q+IHwgeyBmcm9tOiBEYXRlOyB0bzogRGF0ZSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQ/OiBEdXJhdGlvbklucHV0LCBrZXk/OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSkge1xuICBjb25zdCBkdXJhdGlvbiA9IGNvbnZlcnREdXJhdGlvbihpbnB1dCwga2V5KTtcbiAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcblxuICByZXR1cm4gbmV3IER1cmF0aW9uKGR1cmF0aW9uLCBjb25maWcpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24oaW5wdXQ6IGFueSwga2V5OiBzdHJpbmcpOiBQYXJ0aWFsPERhdGVPYmplY3Q+IHtcbiAgLy8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgIHJldHVybiB7XG4gICAgICBtaWxsaXNlY29uZHM6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICBkYXk6IGlucHV0Ll9kYXlzLFxuICAgICAgbW9udGg6IGlucHV0Ll9tb250aHNcbiAgICB9O1xuICB9XG4gIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBkdXJhdGlvbiA9IHt9O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiBpbnB1dCB9IDogeyBtaWxsaXNlY29uZHM6IGlucHV0IH07XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgbGV0IG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IDAsXG4gICAgICAgIGRheTogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgaG91cnM6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXG4gICAgICAgIG1pbnV0ZXM6IHRvSW50KG1hdGNoW01JTlVURV0pICogc2lnbixcbiAgICAgICAgc2Vjb25kczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxuICAgICAgICAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcbiAgICAgICAgbWlsbGlzZWNvbmRzOiB0b0ludChhYnNSb3VuZCh0b0ludChtYXRjaFtNSUxMSVNFQ09ORF0pICogMTAwMCkpICogc2lnblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogKG1hdGNoWzFdID09PSAnKycpID8gMSA6IDE7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgbW9udGg6IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgd2VlazogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICBkYXk6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgaG91cnM6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgbWludXRlczogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICBzZWNvbmRzOiBwYXJzZUlzbyhtYXRjaFs4XSwgc2lnbilcbiAgICAgIH07XG4gICAgfVxuXG4gIH1cblxuICBpZiAoaXNPYmplY3Q8e2Zyb206IGFueTsgdG86IGFueX0+KGlucHV0KSAmJiAoJ2Zyb20nIGluIGlucHV0IHx8ICd0bycgaW4gaW5wdXQpKSB7XG4gICAgY29uc3QgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKHBhcnNlRGF0ZShpbnB1dC5mcm9tKSwgcGFyc2VEYXRlKGlucHV0LnRvKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWlsbGlzZWNvbmRzOiBkaWZmUmVzLm1pbGxpc2Vjb25kcyxcbiAgICAgIG1vbnRoOiBkaWZmUmVzLm1vbnRoc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaW5wdXQ7XG59XG5cbi8vIGNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuLy8gY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGludmFsaWQ7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvKGlucDogc3RyaW5nLCBzaWduOiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICBjb25zdCByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG5cbiAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xufVxuXG5mdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XG4gIGNvbnN0IHJlcyA9IHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcblxuICByZXMubW9udGhzID0gZ2V0TW9udGgob3RoZXIpIC0gZ2V0TW9udGgoYmFzZSkgK1xuICAgIChnZXRGdWxsWWVhcihvdGhlcikgLSBnZXRGdWxsWWVhcihiYXNlKSkgKiAxMjtcbiAgY29uc3QgX2Jhc2VQbHVzID0gYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJyk7XG4gIGlmIChpc0FmdGVyKF9iYXNlUGx1cywgb3RoZXIpKSB7XG4gICAgLS1yZXMubW9udGhzO1xuICB9XG5cbiAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJykpO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XG4gIGlmICghKGlzRGF0ZVZhbGlkKGJhc2UpICYmIGlzRGF0ZVZhbGlkKG90aGVyKSkpIHtcbiAgICByZXR1cm4geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuICB9XG5cbiAgbGV0IHJlcztcbiAgY29uc3QgX290aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlLCB7X29mZnNldDogYmFzZS5nZXRUaW1lem9uZU9mZnNldCgpfSk7XG4gIGlmIChpc0JlZm9yZShiYXNlLCBfb3RoZXIpKSB7XG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBfb3RoZXIpO1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoX290aGVyLCBiYXNlKTtcbiAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbiJdfQ==