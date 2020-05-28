/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { absFloor } from '../utils';
/**
 * @param {?} str
 * @return {?}
 */
export function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isBoolean(value) {
    return value === true || value === false;
}
/**
 * @param {?} date
 * @return {?}
 */
export function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
export function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
export function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
export function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
export function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    /** @type {?} */
    let k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} input
 * @return {?}
 */
export function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
export function toInt(argumentForCoercion) {
    /** @type {?} */
    const coercedNumber = +argumentForCoercion;
    /** @type {?} */
    let value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1dGlscy90eXBlLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFFcEMsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFVO0lBQy9CLE9BQU8sS0FBSyxZQUFZLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZUFBZSxDQUFDO0FBQzVGLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVO0lBQ2xDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQzNDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFVO0lBQ3BDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEVBQU87SUFDaEMsT0FBTyxDQUNMLEVBQUUsWUFBWSxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxtQkFBbUIsQ0FDM0QsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFXO0lBQ2xDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztBQUNsRyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFJLEtBQVc7SUFDcEMsT0FBTyxDQUNMLEtBQUssWUFBWSxLQUFLO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FDM0QsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFJLENBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBUztJQUN0RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBSSxLQUFVLENBQUMsVUFBVTtJQUMvQywrREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLE9BQU8sQ0FDTCxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FDN0UsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxHQUFRO0lBQ3BDLElBQUksTUFBTSxDQUFDLG1CQUFtQixFQUFFO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEOztRQUNHLENBQUM7SUFDTCxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUdELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVTtJQUNwQyxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFJLG1CQUF3Qzs7VUFDekQsYUFBYSxHQUFHLENBQUMsbUJBQW1COztRQUN0QyxLQUFLLEdBQUcsQ0FBQztJQUViLElBQUksYUFBYSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbEQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNqQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyOiBhbnkpOiBzdHIgaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBEYXRlIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gZGF0ZSAmJiBkYXRlLmdldFRpbWUgJiYgIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZm46IGFueSk6IGZuIGlzIEZ1bmN0aW9uIHtcbiAgcmV0dXJuIChcbiAgICBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXk8VD4oaW5wdXQ/OiBhbnkpOiBpbnB1dCBpcyBUW10ge1xuICByZXR1cm4gKFxuICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wPFQ+KGE6IFQgLypvYmplY3QqLywgYjogc3RyaW5nKTogYiBpcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Q8VD4oaW5wdXQ6IGFueSAvKm9iamVjdCovKTogaW5wdXQgaXMgVCB7XG4gIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAvLyBpbnB1dCAhPSBudWxsXG4gIHJldHVybiAoXG4gICAgaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICByZXR1cm4gKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwKTtcbiAgfVxuICBsZXQgaztcbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50PFQ+KGFyZ3VtZW50Rm9yQ29lcmNpb246IHN0cmluZyB8IG51bWJlciB8IFQpOiBudW1iZXIge1xuICBjb25zdCBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb247XG4gIGxldCB2YWx1ZSA9IDA7XG5cbiAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl19