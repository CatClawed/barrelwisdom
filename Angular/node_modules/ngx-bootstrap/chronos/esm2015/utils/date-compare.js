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
export function isAfter(date1, date2, units = 'milliseconds') {
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
export function isBefore(date1, date2, units = 'milliseconds') {
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
    (day) => day === date.getDay()));
}
/**
 * @param {?} date
 * @param {?} from
 * @param {?} to
 * @param {?} units
 * @param {?=} inclusivity
 * @return {?}
 */
export function isBetween(date, from, to, units, inclusivity = '()') {
    /** @type {?} */
    const leftBound = inclusivity[0] === '('
        ? isAfter(date, from, units)
        : !isBefore(date, from, units);
    /** @type {?} */
    const rightBound = inclusivity[1] === ')'
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
export function isSame(date1, date2, units = 'milliseconds') {
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    /** @type {?} */
    const inputMs = date2.valueOf();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb21wYXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvZGF0ZS1jb21wYXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRWhELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQVcsRUFDWCxLQUFXLEVBQ1gsUUFBb0IsY0FBYztJQUVsQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssS0FBSyxjQUFjLEVBQUU7UUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzFDO0lBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FDdEIsS0FBVyxFQUNYLEtBQVcsRUFDWCxRQUFvQixjQUFjO0lBRWxDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxLQUFLLGNBQWMsRUFBRTtRQUM1QixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDMUM7SUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBVSxFQUFFLFlBQXNCO0lBQzlELElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7UUFDdkUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sWUFBWSxDQUFDLElBQUk7Ozs7SUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0FBQ25FLENBQUM7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQ3ZCLElBQVUsRUFDVixJQUFVLEVBQ1YsRUFBUSxFQUNSLEtBQWlCLEVBQ2pCLFdBQVcsR0FBRyxJQUFJOztVQUVaLFNBQVMsR0FDYixXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs7VUFDNUIsVUFBVSxHQUNkLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQ3BCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBRS9CLE9BQU8sU0FBUyxJQUFJLFVBQVUsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsS0FBVyxFQUNYLEtBQVcsRUFDWCxRQUFvQixjQUFjO0lBRWxDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxLQUFLLGNBQWMsRUFBRTtRQUM1QixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDNUM7O1VBRUssT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUU7SUFFL0IsT0FBTyxDQUNMLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTztRQUMxQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDekMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBVyxFQUFFLEtBQVc7SUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsS0FBVyxFQUNYLEtBQVcsRUFDWCxLQUFrQjtJQUVsQixPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUFXLEVBQ1gsS0FBVyxFQUNYLEtBQWtCO0lBRWxCLE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4vc3RhcnQtZW5kLW9mJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPiBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTIudmFsdWVPZigpIDwgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGVuZE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERheShkYXRlOiBEYXRlLCBkYXlzRGlzYWJsZWQ6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmIChkYXlzRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhZGF5c0Rpc2FibGVkIHx8ICFkYXlzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRheXNEaXNhYmxlZC5zb21lKChkYXk6IG51bWJlcikgPT4gZGF5ID09PSBkYXRlLmdldERheSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbihcbiAgZGF0ZTogRGF0ZSxcbiAgZnJvbTogRGF0ZSxcbiAgdG86IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lLFxuICBpbmNsdXNpdml0eSA9ICcoKSdcbik6IGJvb2xlYW4ge1xuICBjb25zdCBsZWZ0Qm91bmQgPVxuICAgIGluY2x1c2l2aXR5WzBdID09PSAnKCdcbiAgICAgID8gaXNBZnRlcihkYXRlLCBmcm9tLCB1bml0cylcbiAgICAgIDogIWlzQmVmb3JlKGRhdGUsIGZyb20sIHVuaXRzKTtcbiAgY29uc3QgcmlnaHRCb3VuZCA9XG4gICAgaW5jbHVzaXZpdHlbMV0gPT09ICcpJ1xuICAgICAgPyBpc0JlZm9yZShkYXRlLCB0bywgdW5pdHMpXG4gICAgICA6ICFpc0FmdGVyKGRhdGUsIHRvLCB1bml0cyk7XG5cbiAgcmV0dXJuIGxlZnRCb3VuZCAmJiByaWdodEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID09PSBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dE1zID0gZGF0ZTIudmFsdWVPZigpO1xuXG4gIHJldHVybiAoXG4gICAgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmXG4gICAgaW5wdXRNcyA8PSBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6Ym9vbGVhbntcbiAgcmV0dXJuIChkYXRlMS5nZXREYXkoKSA9PSBkYXRlMi5nZXREYXkoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNBZnRlcihkYXRlMSwgZGF0ZTIsIHVuaXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNCZWZvcmUoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XG59XG4iXX0=