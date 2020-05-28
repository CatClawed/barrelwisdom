/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
/** @type {?} */
const tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
    /** @type {?} */
    const _token = isString(token) ? [token] : token;
    /** @type {?} */
    let func = callback;
    if (isNumber(callback)) {
        func = (/**
         * @param {?} input
         * @param {?} array
         * @param {?} config
         * @return {?}
         */
        function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        });
    }
    if (isArray(_token) && isFunction(func)) {
        /** @type {?} */
        let i;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addWeekParseToken(token, callback) {
    addParseToken(token, (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} _token
     * @return {?}
     */
    function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    }));
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
export function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztNQUk1RixNQUFNLEdBQXNDLEVBQUU7Ozs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXdCLEVBQUUsUUFBbUM7O1VBQ25GLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1FBQzVDLElBQUksR0FBRyxRQUFRO0lBRW5CLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLElBQUk7Ozs7OztRQUFHLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUEsQ0FBQztLQUNIO0lBRUQsSUFBSSxPQUFPLENBQVMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUMzQyxDQUFDO1FBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDRjtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFlLEVBQUUsUUFBMEI7SUFDM0UsYUFBYSxDQUFDLEtBQUs7Ozs7Ozs7SUFBRSxVQUFVLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCLEVBQUUsTUFBYztRQUN2RyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTVCLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxNQUF5QjtJQUM3RixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCB0b2tlbnM6IHtba2V5OiBzdHJpbmddOiBEYXRlUGFyc2VUb2tlbkZufSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XG4gIGNvbnN0IF90b2tlbiA9IGlzU3RyaW5nKHRva2VuKSA/IFt0b2tlbl0gOiB0b2tlbjtcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcblxuICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcblxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iXX0=