/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
/** @type {?} */
var aliases = {};
/** @type {?} */
var _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */
export function addUnitAlias(unit, shorthand) {
    /** @type {?} */
    var lowerCase = unit.toLowerCase();
    /** @type {?} */
    var _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
export function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
export function normalizeObjectUnits(inputObject) {
    /** @type {?} */
    var normalizedInput = {};
    /** @type {?} */
    var normalizedProp;
    /** @type {?} */
    var prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return (/** @type {?} */ (normalizedInput));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBR3RELE9BQU8sR0FBOEIsRUFBRTs7SUFLdkMsU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUI7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBd0IsRUFBRSxTQUFpQjs7UUFDaEUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7O1FBQ2hDLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtRQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBSSxTQUFTLE1BQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDN0UsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXdCO0lBQ3JELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDdEYsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsV0FBc0M7O1FBQ25FLGVBQWUsR0FBOEIsRUFBRTs7UUFDakQsY0FBYzs7UUFDZCxJQUFJO0lBRVIsS0FBSyxJQUFJLElBQUksV0FBVyxFQUFFO1FBQ3hCLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksY0FBYyxFQUFFO2dCQUNsQixlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7S0FDRjtJQUVELE9BQU8sbUJBQUEsZUFBZSxFQUFPLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc093blByb3AsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG5leHBvcnQgdHlwZSBFeHRlbmRlZFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lIHwgJ2RhdGUnIHwgJ3dlZWsnIHwgJ2lzb1dlZWsnIHwgJ2RheU9mWWVhcicgfFxuICAnd2Vla2RheScgfCAnaXNvV2Vla2RheScgfCAnc2Vjb25kJyB8ICdtaWxsaXNlY29uZCcgfCAnbWludXRlJyB8ICdob3VyJyB8ICdxdWFydGVyJyB8ICd3ZWVrWWVhcicgfCAnaXNvV2Vla1llYXInO1xuXG5jb25zdCBfbWFwVW5pdHM6IHsgW2tleTogc3RyaW5nXTogVW5pdE9mVGltZSB9ID0ge1xuICBkYXRlOiAnZGF5JyxcbiAgaG91cjogJ2hvdXJzJyxcbiAgbWludXRlOiAnbWludXRlcycsXG4gIHNlY29uZDogJ3NlY29uZHMnLFxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0QWxpYXModW5pdDogRXh0ZW5kZWRVbml0T2ZUaW1lLCBzaG9ydGhhbmQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gIGxldCBfdW5pdCA9IHVuaXQ7XG4gIGlmIChsb3dlckNhc2UgaW4gX21hcFVuaXRzKSB7XG4gICAgX3VuaXQgPSBfbWFwVW5pdHNbbG93ZXJDYXNlXTtcbiAgfVxuICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2Ake2xvd2VyQ2FzZX1zYF0gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSBfdW5pdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XG4gIHJldHVybiBpc1N0cmluZyh1bml0cykgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBEYXRlT2JqZWN0IHtcbiAgY29uc3Qgbm9ybWFsaXplZElucHV0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGxldCBub3JtYWxpemVkUHJvcDtcbiAgbGV0IHByb3A7XG5cbiAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZElucHV0IGFzIGFueTtcbn1cbiJdfQ==