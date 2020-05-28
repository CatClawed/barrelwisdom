/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { toInt } from '../utils/type-checks';
/** @type {?} */
const ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
const ɵ0 = /**
 * @param {?} mem
 * @param {?} order
 * @return {?}
 */
(mem, order) => {
    mem[order] = true;
    return mem;
};
/** @type {?} */
const orderingHash = ordering.reduce((ɵ0), {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    /** @type {?} */
    const durationKeys = Object.keys(duration);
    if (durationKeys
        .some((/**
     * @param {?} key
     * @return {?}
     */
    (key) => {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    }))) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    /** @type {?} */
    let unitHasDecimal = false;
    for (let i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztNQUt2QyxRQUFRLEdBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7Ozs7OztBQUM1RixDQUFDLEdBQStCLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDOUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVsQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7O01BSkssWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLE9BSWpDLEVBQUUsQ0FBQzs7Ozs7QUFFTixNQUFNLFVBQVUsZUFBZSxDQUFDLFFBQTZCOztVQUNyRCxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsSUFBSSxZQUFZO1NBQ1gsSUFBSTs7OztJQUFDLENBQUMsR0FBcUIsRUFBRSxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDO2VBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJO2VBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDLEVBQUMsRUFBRTtRQUNOLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7Ozs7UUFPRyxjQUFjLEdBQUcsS0FBSztJQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN4QyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6Qiw0Q0FBNEM7WUFDNUMsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFELGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDdkI7U0FDRjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBvcmRlcmluZzogKGtleW9mIERhdGVPYmplY3QpW10gPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ107XG5jb25zdCBvcmRlcmluZ0hhc2ggPSBvcmRlcmluZy5yZWR1Y2UoKG1lbTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0sIG9yZGVyKSA9PiB7XG4gIG1lbVtvcmRlcl0gPSB0cnVlO1xuXG4gIHJldHVybiBtZW07XG59LCB7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQoZHVyYXRpb246IFBhcnRpYWw8RGF0ZU9iamVjdD4pOiBib29sZWFuIHtcbiAgY29uc3QgZHVyYXRpb25LZXlzID0gT2JqZWN0LmtleXMoZHVyYXRpb24pO1xuICBpZiAoZHVyYXRpb25LZXlzXG4gICAgICAuc29tZSgoa2V5OiBrZXlvZiBEYXRlT2JqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiAoa2V5IGluIG9yZGVyaW5nSGFzaClcbiAgICAgICAgICAmJiBkdXJhdGlvbltrZXldID09PSBudWxsXG4gICAgICAgICAgfHwgaXNOYU4oZHVyYXRpb25ba2V5XSk7XG4gICAgICB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBmb3IgKGxldCBrZXkgaW4gZHVyYXRpb24pIHtcbiAgLy8gICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChkdXJhdGlvbltrZXldID09IG51bGwgfHwgIWlzTmFOKGR1cmF0aW9uW2tleV0pKSkpIHtcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBsZXQgdW5pdEhhc0RlY2ltYWwgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcmluZy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0pIHtcbiAgICAgIC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSAhPT0gdG9JbnQoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKCkge1xuLy8gICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbi8vIH1cbi8vXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCgpOiBEdXJhdGlvbiB7XG4vLyAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xuLy8gfVxuIl19