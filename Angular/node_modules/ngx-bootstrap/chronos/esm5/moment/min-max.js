/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
import { isArray, isDateValid } from '../utils/type-checks';
import { isAfter, isBefore } from '../utils/date-compare';
/**
 * @param {?} fn
 * @param {?} dates
 * @return {?}
 */
function pickBy(fn, dates) {
    /** @type {?} */
    var _dates;
    /** @type {?} */
    var _firstArg = dates[0];
    if (isArray(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (isArray(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    /** @type {?} */
    var res = _dates[0];
    for (var i = 1; i < _dates.length; ++i) {
        // if (!moments[i].isValid() || moments[i][fn](res)) {
        if (!isDateValid(_dates[i]) || fn.call(null, _dates[i], res)) {
            res = _dates[i];
        }
    }
    return res;
}
// TODO: Use [].sort instead?
/**
 * @param {...?} args
 * @return {?}
 */
export function min() {
    // const args = [].slice.call(arguments, 0);
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return pickBy(isBefore, args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function max() {
    // const args = [].slice.call(arguments, 0);
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return pickBy(isAfter, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLW1heC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9taW4tbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRTFELFNBQVMsTUFBTSxDQUFDLEVBQVksRUFBRSxLQUF3Qjs7UUFDaEQsTUFBYzs7UUFDWixTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLE9BQU8sQ0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsRCxNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQ3BCO1NBQU0sSUFBSSxPQUFPLENBQU8sS0FBSyxDQUFDLEVBQUU7UUFDL0IsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztLQUNuQjs7UUFDRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDNUQsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsR0FBRztJQUNqQiw0Q0FBNEM7SUFEMUIsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZix5QkFBZTs7SUFHakMsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEdBQUc7SUFDakIsNENBQTRDO0lBRDFCLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYseUJBQWU7O0lBR2pDLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbi8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbi8vXG4vLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4vLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuaW1wb3J0IHsgaXNBcnJheSwgaXNEYXRlVmFsaWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5cbmZ1bmN0aW9uIHBpY2tCeShmbjogRnVuY3Rpb24sIGRhdGVzOiBEYXRlW10gfCBEYXRlW11bXSk6IERhdGUge1xuICBsZXQgX2RhdGVzOiBEYXRlW107XG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xuICBpZiAoaXNBcnJheTxEYXRlPihfZmlyc3RBcmcpICYmIGRhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIF9kYXRlcyA9IF9maXJzdEFyZztcbiAgfSBlbHNlIGlmIChpc0FycmF5PERhdGU+KGRhdGVzKSkge1xuICAgIF9kYXRlcyA9IGRhdGVzO1xuICB9XG5cbiAgaWYgKCFfZGF0ZXMgfHwgIV9kYXRlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfVxuICBsZXQgcmVzID0gX2RhdGVzWzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IF9kYXRlcy5sZW5ndGg7ICsraSkge1xuICAgIC8vIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgIGlmICghaXNEYXRlVmFsaWQoX2RhdGVzW2ldKSB8fCBmbi5jYWxsKG51bGwsIF9kYXRlc1tpXSwgcmVzKSkge1xuICAgICAgcmVzID0gX2RhdGVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5leHBvcnQgZnVuY3Rpb24gbWluKC4uLmFyZ3M6IERhdGVbXSk6IERhdGUge1xuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gIHJldHVybiBwaWNrQnkoaXNCZWZvcmUsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4KC4uLmFyZ3M6IERhdGVbXSk6IERhdGUge1xuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gIHJldHVybiBwaWNrQnkoaXNBZnRlciwgYXJncyk7XG59XG4iXX0=