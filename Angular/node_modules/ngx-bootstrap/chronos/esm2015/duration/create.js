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
const aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
/** @type {?} */
const isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
export function createDuration(input, key, config = {}) {
    /** @type {?} */
    const duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new Duration(duration, config);
}
/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */
function convertDuration(input, key) {
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
        return key ? { [key]: input } : { milliseconds: input };
    }
    if (isString(input)) {
        /** @type {?} */
        let match = aspNetRegex.exec(input);
        if (match) {
            /** @type {?} */
            const sign = (match[1] === '-') ? -1 : 1;
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
            const sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
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
        const diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
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
    const res = inp && parseFloat(inp.replace(',', '.'));
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
    const res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    /** @type {?} */
    const _basePlus = add(cloneDate(base), res.months, 'month');
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
    let res;
    /** @type {?} */
    const _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztNQUV0QyxXQUFXLEdBQUcsMERBQTBEOzs7Ozs7TUFNeEUsUUFBUSxHQUFHLHFLQUFxSzs7Ozs7OztBQUl0TCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXFCLEVBQUUsR0FBWSxFQUFFLFNBQTRCLEVBQUU7O1VBQzFGLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUM1Qyx3REFBd0Q7SUFFeEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7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Q0FBQyxNQUFNLENBQUM7S0FDZDtJQUVELEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXpFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFVLEVBQUUsS0FBVztJQUNoRCxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3ZDOztRQUVHLEdBQUc7O1VBQ0QsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQUM7SUFDaEYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0M7U0FBTTtRQUNMLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDckMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7S0FDMUI7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuXG5jb25zdCBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbmV4cG9ydCB0eXBlIER1cmF0aW9uSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEdXJhdGlvbiB8IFBhcnRpYWw8RGF0ZU9iamVjdD4gfCB7IGZyb206IERhdGU7IHRvOiBEYXRlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbihpbnB1dD86IER1cmF0aW9uSW5wdXQsIGtleT86IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY29udmVydER1cmF0aW9uKGlucHV0LCBrZXkpO1xuICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuXG4gIHJldHVybiBuZXcgRHVyYXRpb24oZHVyYXRpb24sIGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IFBhcnRpYWw8RGF0ZU9iamVjdD4ge1xuICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGxpc2Vjb25kczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgIGRheTogaW5wdXQuX2RheXMsXG4gICAgICBtb250aDogaW5wdXQuX21vbnRoc1xuICAgIH07XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIC8vIGR1cmF0aW9uID0ge307XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IGlucHV0IH0gOiB7IG1pbGxpc2Vjb25kczogaW5wdXQgfTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBsZXQgbWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogMCxcbiAgICAgICAgZGF5OiB0b0ludChtYXRjaFtEQVRFXSkgKiBzaWduLFxuICAgICAgICBob3VyczogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcbiAgICAgICAgbWludXRlczogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxuICAgICAgICBzZWNvbmRzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICBtaWxsaXNlY29uZHM6IHRvSW50KGFic1JvdW5kKHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiAxMDAwKSkgKiBzaWduXG4gICAgICB9O1xuICAgIH1cblxuICAgIG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICBtb250aDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICB3ZWVrOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgIGRheTogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICBob3VyczogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICBtaW51dGVzOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgIHNlY29uZHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG4gIGlmIChpc09iamVjdDx7ZnJvbTogYW55OyB0bzogYW55fT4oaW5wdXQpICYmICgnZnJvbScgaW4gaW5wdXQgfHwgJ3RvJyBpbiBpbnB1dCkpIHtcbiAgICBjb25zdCBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UocGFyc2VEYXRlKGlucHV0LmZyb20pLCBwYXJzZURhdGUoaW5wdXQudG8pKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaWxsaXNlY29uZHM6IGRpZmZSZXMubWlsbGlzZWNvbmRzLFxuICAgICAgbW9udGg6IGRpZmZSZXMubW9udGhzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuLy8gY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4vLyBjcmVhdGVEdXJhdGlvbi5pbnZhbGlkID0gaW52YWxpZDtcblxuZnVuY3Rpb24gcGFyc2VJc28oaW5wOiBzdHJpbmcsIHNpZ246IG51bWJlcik6IG51bWJlciB7XG4gIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gIGNvbnN0IHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcblxuICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgY29uc3QgcmVzID0geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuXG4gIHJlcy5tb250aHMgPSBnZXRNb250aChvdGhlcikgLSBnZXRNb250aChiYXNlKSArXG4gICAgKGdldEZ1bGxZZWFyKG90aGVyKSAtIGdldEZ1bGxZZWFyKGJhc2UpKSAqIDEyO1xuICBjb25zdCBfYmFzZVBsdXMgPSBhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKTtcbiAgaWYgKGlzQWZ0ZXIoX2Jhc2VQbHVzLCBvdGhlcikpIHtcbiAgICAtLXJlcy5tb250aHM7XG4gIH1cblxuICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgaWYgKCEoaXNEYXRlVmFsaWQoYmFzZSkgJiYgaXNEYXRlVmFsaWQob3RoZXIpKSkge1xuICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gIH1cblxuICBsZXQgcmVzO1xuICBjb25zdCBfb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UsIHtfb2Zmc2V0OiBiYXNlLmdldFRpbWV6b25lT2Zmc2V0KCl9KTtcbiAgaWYgKGlzQmVmb3JlKGJhc2UsIF9vdGhlcikpIHtcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIF9vdGhlcik7XG4gIH0gZWxzZSB7XG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShfb3RoZXIsIGJhc2UpO1xuICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIl19