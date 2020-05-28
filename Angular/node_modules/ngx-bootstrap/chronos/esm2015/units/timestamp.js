/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { unix } from '../utils/date-getters';
import { addRegexToken, matchSigned, matchTimestamp } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { toInt } from '../utils/type-checks';
/**
 * @return {?}
 */
export function initTimestamp() {
    // FORMATTING
    addFormatToken('X', null, null, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return unix(date)
            .toString(10);
    }));
    addFormatToken('x', null, null, (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.valueOf()
            .toString(10);
    }));
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    }));
    addParseToken('x', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvdGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLN0MsTUFBTSxVQUFVLGFBQWE7SUFDN0IsYUFBYTtJQUVYLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7Ozs7SUFBRSxVQUFTLElBQVU7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0gsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7OztJQUFFLFVBQVMsSUFBVTtRQUNqRCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBQyxDQUFDO0lBRUwsVUFBVTtJQUVSLGFBQWEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuQyxhQUFhLENBQUMsR0FBRzs7Ozs7O0lBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUNwRixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUUvQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNILGFBQWEsQ0FBQyxHQUFHOzs7Ozs7SUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ3BGLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHVuaXggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hTaWduZWQsIG1hdGNoVGltZXN0YW1wIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbn0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWVzdGFtcCgpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignWCcsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB1bml4KGRhdGUpXG4gICAgICAudG9TdHJpbmcoMTApO1xuICB9KTtcbiAgYWRkRm9ybWF0VG9rZW4oJ3gnLCBudWxsLCBudWxsLCBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKClcbiAgICAgIC50b1N0cmluZygxMCk7XG4gIH0pO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbiAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcblxuICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0KSAqIDEwMDApO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cbiJdfQ==