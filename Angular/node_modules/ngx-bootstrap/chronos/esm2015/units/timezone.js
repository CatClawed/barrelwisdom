/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
// todo: add support for timezones
/**
 * @return {?}
 */
export function initTimezone() {
    // FORMATTING
    addFormatToken('z', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
    }));
    addFormatToken('zz', null, null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
    }));
}
// MOMENTS
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneAbbr(isUTC) {
    return isUTC ? 'UTC' : '';
}
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneName(isUTC) {
    return isUTC ? 'Coordinated Universal Time' : '';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy90aW1lem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUtsRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixhQUFhO0lBQ2IsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqQyxDQUFDLEVBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7Ozs7O0lBQzdCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYztJQUN4QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWM7SUFDeEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gdG9kbzogYWRkIHN1cHBvcnQgZm9yIHRpbWV6b25lc1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWV6b25lKCkge1xuICAvLyBGT1JNQVRUSU5HXG4gIGFkZEZvcm1hdFRva2VuKCd6JywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdVVEMnIDogJyc7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignenonLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmlzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xuICAgIH1cbiAgKTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoaXNVVEM6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGlzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVOYW1lKGlzVVRDOiBib29sZWFuKSB7XG4gIHJldHVybiBpc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbn1cbiJdfQ==