/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { endOf, startOf } from './start-end-of';
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
export function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < startOf(date1, units).valueOf();
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
export function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return endOf(date1, units).valueOf() < date2.valueOf();
}
/**
 * @param {?} date
 * @param {?} daysDisabled
 * @return {?}
 */
export function isDisabledDay(date, daysDisabled) {
    if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
        return false;
    }
    return daysDisabled.some((/**
     * @param {?} day
     * @return {?}
     */
    function (day) { return day === date.getDay(); }));
}
/**
 * @param {?} date
 * @param {?} from
 * @param {?} to
 * @param {?} units
 * @param {?=} inclusivity
 * @return {?}
 */
export function isBetween(date, from, to, units, inclusivity) {
    if (inclusivity === void 0) { inclusivity = '()'; }
    /** @type {?} */
    var leftBound = inclusivity[0] === '('
        ? isAfter(date, from, units)
        : !isBefore(date, from, units);
    /** @type {?} */
    var rightBound = inclusivity[1] === ')'
        ? isBefore(date, to, units)
        : !isAfter(date, to, units);
    return leftBound && rightBound;
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
export function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    /** @type {?} */
    var inputMs = date2.valueOf();
    return (startOf(date1, units).valueOf() <= inputMs &&
        inputMs <= endOf(date1, units).valueOf());
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
export function isSameDay(date1, date2) {
    return (date1.getDay() == date2.getDay());
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
export function isSameOrAfter(date1, date2, units) {
    return isSame(date1, date2, units) || isAfter(date1, date2, units);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
export function isSameOrBefore(date1, date2, units) {
    return isSame(date1, date2, units) || isBefore(date1, date2, units);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb21wYXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvZGF0ZS1jb21wYXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRWhELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQVcsRUFDWCxLQUFXLEVBQ1gsS0FBa0M7SUFBbEMsc0JBQUEsRUFBQSxzQkFBa0M7SUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQztJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDM0QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQ3RCLEtBQVcsRUFDWCxLQUFXLEVBQ1gsS0FBa0M7SUFBbEMsc0JBQUEsRUFBQSxzQkFBa0M7SUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQztJQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFVLEVBQUUsWUFBc0I7SUFDOUQsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtRQUN2RSxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxZQUFZLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0FBQ25FLENBQUM7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQ3ZCLElBQVUsRUFDVixJQUFVLEVBQ1YsRUFBUSxFQUNSLEtBQWlCLEVBQ2pCLFdBQWtCO0lBQWxCLDRCQUFBLEVBQUEsa0JBQWtCOztRQUVaLFNBQVMsR0FDYixXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs7UUFDNUIsVUFBVSxHQUNkLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQ3BCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBRS9CLE9BQU8sU0FBUyxJQUFJLFVBQVUsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsS0FBVyxFQUNYLEtBQVcsRUFDWCxLQUFrQztJQUFsQyxzQkFBQSxFQUFBLHNCQUFrQztJQUVsQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssS0FBSyxjQUFjLEVBQUU7UUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVDOztRQUVLLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFO0lBRS9CLE9BQU8sQ0FDTCxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU87UUFDMUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQ3pDLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQVcsRUFBRSxLQUFXO0lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQzNCLEtBQVcsRUFDWCxLQUFXLEVBQ1gsS0FBa0I7SUFFbEIsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsS0FBVyxFQUNYLEtBQVcsRUFDWCxLQUFrQjtJQUVsQixPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZW5kT2YsIHN0YXJ0T2YgfSBmcm9tICcuL3N0YXJ0LWVuZC1vZic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FmdGVyKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID4gZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGUyLnZhbHVlT2YoKSA8IHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JlZm9yZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA8IGRhdGUyLnZhbHVlT2YoKTtcbiAgfVxuXG4gIHJldHVybiBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKSA8IGRhdGUyLnZhbHVlT2YoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlzYWJsZWREYXkoZGF0ZTogRGF0ZSwgZGF5c0Rpc2FibGVkOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICBpZiAoZGF5c0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRheXNEaXNhYmxlZCB8fCAhZGF5c0Rpc2FibGVkLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXlzRGlzYWJsZWQuc29tZSgoZGF5OiBudW1iZXIpID0+IGRheSA9PT0gZGF0ZS5nZXREYXkoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4oXG4gIGRhdGU6IERhdGUsXG4gIGZyb206IERhdGUsXG4gIHRvOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSxcbiAgaW5jbHVzaXZpdHkgPSAnKCknXG4pOiBib29sZWFuIHtcbiAgY29uc3QgbGVmdEJvdW5kID1cbiAgICBpbmNsdXNpdml0eVswXSA9PT0gJygnXG4gICAgICA/IGlzQWZ0ZXIoZGF0ZSwgZnJvbSwgdW5pdHMpXG4gICAgICA6ICFpc0JlZm9yZShkYXRlLCBmcm9tLCB1bml0cyk7XG4gIGNvbnN0IHJpZ2h0Qm91bmQgPVxuICAgIGluY2x1c2l2aXR5WzFdID09PSAnKSdcbiAgICAgID8gaXNCZWZvcmUoZGF0ZSwgdG8sIHVuaXRzKVxuICAgICAgOiAhaXNBZnRlcihkYXRlLCB0bywgdW5pdHMpO1xuXG4gIHJldHVybiBsZWZ0Qm91bmQgJiYgcmlnaHRCb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA9PT0gZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRNcyA9IGRhdGUyLnZhbHVlT2YoKTtcblxuICByZXR1cm4gKFxuICAgIHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJlxuICAgIGlucHV0TXMgPD0gZW5kT2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOmJvb2xlYW57XG4gIHJldHVybiAoZGF0ZTEuZ2V0RGF5KCkgPT0gZGF0ZTIuZ2V0RGF5KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JBZnRlcihcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0cz86IFVuaXRPZlRpbWVcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNTYW1lKGRhdGUxLCBkYXRlMiwgdW5pdHMpIHx8IGlzQWZ0ZXIoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckJlZm9yZShcbiAgZGF0ZTE6IERhdGUsXG4gIGRhdGUyOiBEYXRlLFxuICB1bml0cz86IFVuaXRPZlRpbWVcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNTYW1lKGRhdGUxLCBkYXRlMiwgdW5pdHMpIHx8IGlzQmVmb3JlKGRhdGUxLCBkYXRlMiwgdW5pdHMpO1xufVxuIl19