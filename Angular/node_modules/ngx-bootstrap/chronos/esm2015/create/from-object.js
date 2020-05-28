/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';
import { isObject, isString } from '../utils/type-checks';
/**
 * @param {?} config
 * @return {?}
 */
export function configFromObject(config) {
    if (config._d) {
        return config;
    }
    /** @type {?} */
    const input = config._i;
    if (isObject(input)) {
        /** @type {?} */
        const i = normalizeObjectUnits((/** @type {?} */ (input)));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            // todo: obsolete -> remove it
            .map((/**
         * @param {?} obj
         * @return {?}
         */
        obj => isString(obj) ? parseInt(obj, 10) : obj));
    }
    return configFromArray(config);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1vYmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvZnJvbS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE1BQXlCO0lBQ3hELElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNiLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7O1VBRUssS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFO0lBQ3ZCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFOztjQUNiLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQztRQUM1QyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNuRiw4QkFBOEI7YUFDM0IsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKGNvbmZpZy5fZCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbnN0IGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dCBhcyBhbnkpO1xuICAgIGNvbmZpZy5fYSA9IFtpLnllYXIsIGkubW9udGgsIGkuZGF5LCBpLmhvdXJzLCBpLm1pbnV0ZXMsIGkuc2Vjb25kcywgaS5taWxsaXNlY29uZHNdXG4gICAgLy8gdG9kbzogb2Jzb2xldGUgLT4gcmVtb3ZlIGl0XG4gICAgICAubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xufVxuIl19