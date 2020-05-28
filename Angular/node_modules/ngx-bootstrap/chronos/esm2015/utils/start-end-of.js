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
    const _date = cloneDate(date);
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
        setLocaleDayOfWeek(_date, 0, { isUTC });
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
    let _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    /** @type {?} */
    const start = startOf(date, _unit, isUTC);
    /** @type {?} */
    const _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    /** @type {?} */
    const res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtZW5kLW9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvc3RhcnQtZW5kLW9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsT0FBTyxFQUFlLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBRWxGLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQUV2RCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVUsRUFBRSxJQUFnQixFQUFFLEtBQWU7O1VBQzdELEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzdCLDBEQUEwRDtJQUMxRCx3Q0FBd0M7SUFDeEMsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLE1BQU07WUFDVCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixtQkFBbUI7UUFDbkIsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLE9BQU87WUFDVixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixtQkFBbUI7UUFDbkIsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNO1lBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsbUJBQW1CO1FBQ25CLEtBQUssT0FBTztZQUNWLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLG1CQUFtQjtRQUNuQixLQUFLLFNBQVM7WUFDWixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixtQkFBbUI7UUFDbkIsS0FBSyxTQUFTO1lBQ1osZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDcEM7SUFFRCwyQkFBMkI7SUFDM0IsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25CLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFFRCw0QkFBNEI7SUFDNUIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwRTtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBVSxFQUFFLElBQWdCLEVBQUUsS0FBZTs7UUFDN0QsS0FBSyxHQUFHLElBQUk7SUFDaEIsb0VBQW9FO0lBQ3BFLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2Y7O1VBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzs7VUFDbkMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzs7VUFDbEUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUM7SUFFckQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IHN3aXRjaC1kZWZhdWx0XG5pbXBvcnQgeyBUaW1lVW5pdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIHNldERhdGUsIHNldEZ1bGxEYXRlLCBzZXRIb3Vycywgc2V0TWlsbGlzZWNvbmRzLCBzZXRNaW51dGVzLCBzZXRNb250aCwgc2V0U2Vjb25kcyxcbiAgc2hpZnREYXRlXG59IGZyb20gJy4vZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzZXRJU09EYXlPZldlZWssIHNldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX2RhdGUgPSBjbG9uZURhdGUoZGF0ZSk7XG4gIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcbiAgLy8gdG8gdXRpbGl6ZSBmYWxsaW5nIHRocm91Z2ggdGhlIGNhc2VzLlxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHNldE1vbnRoKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHNldERhdGUoX2RhdGUsIDEsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHNldEhvdXJzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHNldE1pbnV0ZXMoX2RhdGUsIDAsIGlzVVRDKTtcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICBzZXRTZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgc2V0TWlsbGlzZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XG4gIH1cblxuICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcbiAgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xuICAgIHNldExvY2FsZURheU9mV2VlayhfZGF0ZSwgMCwge2lzVVRDfSk7XG4gIH1cbiAgaWYgKHVuaXQgPT09ICdpc29XZWVrJykge1xuICAgIHNldElTT0RheU9mV2VlayhfZGF0ZSwgMSk7XG4gIH1cblxuICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gIGlmICh1bml0ID09PSAncXVhcnRlcicpIHtcbiAgICBzZXRNb250aChfZGF0ZSwgTWF0aC5mbG9vcihnZXRNb250aChfZGF0ZSwgaXNVVEMpIC8gMykgKiAzLCBpc1VUQyk7XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgbGV0IF91bml0ID0gdW5pdDtcbiAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cbiAgaWYgKF91bml0ID09PSAnZGF0ZScpIHtcbiAgICBfdW5pdCA9ICdkYXknO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSBzdGFydE9mKGRhdGUsIF91bml0LCBpc1VUQyk7XG4gIGNvbnN0IF9zdGVwID0gYWRkKHN0YXJ0LCAxLCBfdW5pdCA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogX3VuaXQsIGlzVVRDKTtcbiAgY29uc3QgcmVzID0gc3VidHJhY3QoX3N0ZXAsIDEsICdtaWxsaXNlY29uZHMnLCBpc1VUQyk7XG5cbiAgcmV0dXJuIHJlcztcbn1cbiJdfQ==