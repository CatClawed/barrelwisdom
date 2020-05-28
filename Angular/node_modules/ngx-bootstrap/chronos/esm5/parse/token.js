/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
/** @type {?} */
var tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
    /** @type {?} */
    var _token = isString(token) ? [token] : token;
    /** @type {?} */
    var func = callback;
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
        var i = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUk1RixNQUFNLEdBQXNDLEVBQUU7Ozs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXdCLEVBQUUsUUFBbUM7O1FBQ25GLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1FBQzVDLElBQUksR0FBRyxRQUFRO0lBRW5CLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLElBQUk7Ozs7OztRQUFHLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUEsQ0FBQztLQUNIO0lBRUQsSUFBSSxPQUFPLENBQVMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUMzQyxDQUFDLFNBQUE7UUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEtBQWUsRUFBRSxRQUEwQjtJQUMzRSxhQUFhLENBQUMsS0FBSzs7Ozs7OztJQUFFLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUIsRUFBRSxNQUFjO1FBQ3ZHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFNUIsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztBQUdELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLE1BQXlCO0lBQzdGLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVQYXJzZVRva2VuRm4gfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHRva2Vuczoge1trZXk6IHN0cmluZ106IERhdGVQYXJzZVRva2VuRm59ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZVRva2VuKHRva2VuOiBzdHJpbmcgfCBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4gfCBudW1iZXIpIHtcbiAgY29uc3QgX3Rva2VuID0gaXNTdHJpbmcodG9rZW4pID8gW3Rva2VuXSA6IHRva2VuO1xuICBsZXQgZnVuYyA9IGNhbGxiYWNrO1xuXG4gIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc0FycmF5PHN0cmluZz4oX3Rva2VuKSAmJiBpc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IF90b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdG9rZW5zW190b2tlbltpXV0gPSBmdW5jO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4odG9rZW46IHN0cmluZ1tdLCBjYWxsYmFjazogRGF0ZVBhcnNlVG9rZW5Gbik6IHZvaWQge1xuICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgX3Rva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgX3Rva2VuKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuOiBzdHJpbmcsIGlucHV0OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiJdfQ==