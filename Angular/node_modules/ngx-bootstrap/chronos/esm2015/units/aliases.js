/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
/** @type {?} */
const aliases = {};
/** @type {?} */
const _mapUnits = {
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
    const lowerCase = unit.toLowerCase();
    /** @type {?} */
    let _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
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
    const normalizedInput = {};
    /** @type {?} */
    let normalizedProp;
    /** @type {?} */
    let prop;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O01BR3RELE9BQU8sR0FBOEIsRUFBRTs7TUFLdkMsU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUI7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBd0IsRUFBRSxTQUFpQjs7VUFDaEUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7O1FBQ2hDLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtRQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM3RSxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBd0I7SUFDckQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUN0RixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxXQUFzQzs7VUFDbkUsZUFBZSxHQUE4QixFQUFFOztRQUNqRCxjQUFjOztRQUNkLElBQUk7SUFFUixLQUFLLElBQUksSUFBSSxXQUFXLEVBQUU7UUFDeEIsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pDLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FDRjtLQUNGO0lBRUQsT0FBTyxtQkFBQSxlQUFlLEVBQU8sQ0FBQztBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbmV4cG9ydCB0eXBlIEV4dGVuZGVkVW5pdE9mVGltZSA9IFVuaXRPZlRpbWUgfCAnZGF0ZScgfCAnd2VlaycgfCAnaXNvV2VlaycgfCAnZGF5T2ZZZWFyJyB8XG4gICd3ZWVrZGF5JyB8ICdpc29XZWVrZGF5JyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJyB8ICdtaW51dGUnIHwgJ2hvdXInIHwgJ3F1YXJ0ZXInIHwgJ3dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcic7XG5cbmNvbnN0IF9tYXBVbml0czogeyBba2V5OiBzdHJpbmddOiBVbml0T2ZUaW1lIH0gPSB7XG4gIGRhdGU6ICdkYXknLFxuICBob3VyOiAnaG91cnMnLFxuICBtaW51dGU6ICdtaW51dGVzJyxcbiAgc2Vjb25kOiAnc2Vjb25kcycsXG4gIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyh1bml0OiBFeHRlbmRlZFVuaXRPZlRpbWUsIHNob3J0aGFuZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgbGV0IF91bml0ID0gdW5pdDtcbiAgaWYgKGxvd2VyQ2FzZSBpbiBfbWFwVW5pdHMpIHtcbiAgICBfdW5pdCA9IF9tYXBVbml0c1tsb3dlckNhc2VdO1xuICB9XG4gIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbYCR7bG93ZXJDYXNlfXNgXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IF91bml0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHM6IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHVuaXRzKSA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IERhdGVPYmplY3Qge1xuICBjb25zdCBub3JtYWxpemVkSW5wdXQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgbGV0IG5vcm1hbGl6ZWRQcm9wO1xuICBsZXQgcHJvcDtcblxuICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkSW5wdXQgYXMgYW55O1xufVxuIl19