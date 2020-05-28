/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { setDate, setHours, setMilliseconds, setMinutes, setMonth, setSeconds } from './date-setters';
import { cloneDate } from '../create/clone';
import { setISODayOfWeek, setLocaleDayOfWeek } from '../units/day-of-week';
import { getMonth } from './date-getters';
import { add, subtract } from '../moment/add-subtract';
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
export function startOf(date, unit, isUTC) {
    /** @type {?} */
    var _date = cloneDate(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            setMonth(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            setDate(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            setHours(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            setMinutes(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            setSeconds(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            setMilliseconds(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
export function endOf(date, unit, isUTC) {
    /** @type {?} */
    var _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    /** @type {?} */
    var start = startOf(date, _unit, isUTC);
    /** @type {?} */
    var _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    /** @type {?} */
    var res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtZW5kLW9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvc3RhcnQtZW5kLW9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsT0FBTyxFQUFlLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBRWxGLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQUV2RCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVUsRUFBRSxJQUFnQixFQUFFLEtBQWU7O1FBQzdELEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzdCLDBEQUEwRDtJQUMxRCx3Q0FBd0M7SUFDeEMsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLE1BQU07WUFDVCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixtQkFBbUI7UUFDbkIsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLE9BQU87WUFDVixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixtQkFBbUI7UUFDbkIsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNO1lBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsbUJBQW1CO1FBQ25CLEtBQUssT0FBTztZQUNWLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLG1CQUFtQjtRQUNuQixLQUFLLFNBQVM7WUFDWixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixtQkFBbUI7UUFDbkIsS0FBSyxTQUFTO1lBQ1osZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDcEM7SUFFRCwyQkFBMkI7SUFDM0IsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25CLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUVELDRCQUE0QjtJQUM1QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3BFO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlOztRQUM3RCxLQUFLLEdBQUcsSUFBSTtJQUNoQixvRUFBb0U7SUFDcEUsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDZjs7UUFFSyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDOztRQUNuQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDOztRQUNsRSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQztJQUVyRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogc3dpdGNoLWRlZmF1bHRcbmltcG9ydCB7IFRpbWVVbml0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgc2V0RGF0ZSwgc2V0RnVsbERhdGUsIHNldEhvdXJzLCBzZXRNaWxsaXNlY29uZHMsIHNldE1pbnV0ZXMsIHNldE1vbnRoLCBzZXRTZWNvbmRzLFxuICBzaGlmdERhdGVcbn0gZnJvbSAnLi9kYXRlLXNldHRlcnMnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7IHNldElTT0RheU9mV2Vlaywgc2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0IH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBfZGF0ZSA9IGNsb25lRGF0ZShkYXRlKTtcbiAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xuICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgc2V0TW9udGgoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAncXVhcnRlcic6XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgc2V0RGF0ZShfZGF0ZSwgMSwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICdpc29XZWVrJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgc2V0SG91cnMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgc2V0TWludXRlcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHNldFNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICBzZXRNaWxsaXNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgfVxuXG4gIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxuICBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XG4gICAgc2V0TG9jYWxlRGF5T2ZXZWVrKF9kYXRlLCAwLCB7aXNVVEN9KTtcbiAgfVxuICBpZiAodW5pdCA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgc2V0SVNPRGF5T2ZXZWVrKF9kYXRlLCAxKTtcbiAgfVxuXG4gIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcbiAgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xuICAgIHNldE1vbnRoKF9kYXRlLCBNYXRoLmZsb29yKGdldE1vbnRoKF9kYXRlLCBpc1VUQykgLyAzKSAqIDMsIGlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBfZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBsZXQgX3VuaXQgPSB1bml0O1xuICAvLyAnZGF0ZScgaXMgYW4gYWxpYXMgZm9yICdkYXknLCBzbyBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBzdWNoLlxuICBpZiAoX3VuaXQgPT09ICdkYXRlJykge1xuICAgIF91bml0ID0gJ2RheSc7XG4gIH1cblxuICBjb25zdCBzdGFydCA9IHN0YXJ0T2YoZGF0ZSwgX3VuaXQsIGlzVVRDKTtcbiAgY29uc3QgX3N0ZXAgPSBhZGQoc3RhcnQsIDEsIF91bml0ID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiBfdW5pdCwgaXNVVEMpO1xuICBjb25zdCByZXMgPSBzdWJ0cmFjdChfc3RlcCwgMSwgJ21pbGxpc2Vjb25kcycsIGlzVVRDKTtcblxuICByZXR1cm4gcmVzO1xufVxuIl19