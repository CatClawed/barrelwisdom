/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { canChangeHours, canChangeMinutes, canChangeSeconds, canChangeValue, timepickerControls } from '../timepicker-controls.util';
import { TimepickerConfig } from '../timepicker.config';
import { changeTime, setTime, isValidLimit } from '../timepicker.utils';
import { TimepickerActions } from './timepicker.actions';
var TimepickerState = /** @class */ (function () {
    function TimepickerState() {
    }
    return TimepickerState;
}());
export { TimepickerState };
if (false) {
    /** @type {?} */
    TimepickerState.prototype.value;
    /** @type {?} */
    TimepickerState.prototype.config;
    /** @type {?} */
    TimepickerState.prototype.controls;
}
/** @type {?} */
export var initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function timepickerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            var _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            var _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            var _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ25CLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQ7SUFBQTtJQUlBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsZ0NBQVk7O0lBQ1osaUNBQWlDOztJQUNqQyxtQ0FBNkI7OztBQUcvQixNQUFNLEtBQU8sWUFBWSxHQUFvQjtJQUMzQyxLQUFLLEVBQUUsSUFBSTtJQUNYLE1BQU0sRUFBRSxJQUFJLGdCQUFnQixFQUFFO0lBQzlCLFFBQVEsRUFBRTtRQUNSLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixtQkFBbUIsRUFBRSxJQUFJO1FBRXpCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixtQkFBbUIsRUFBRSxJQUFJO1FBRXpCLGlCQUFpQixFQUFFLElBQUk7S0FDeEI7Q0FDRjs7Ozs7OztBQUdELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDcEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssaUJBQWlCLENBQUMsV0FBVyxD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Y0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDakMsT0FBTyxLQUFLLENBQUM7YUFDZDs7Z0JBRUssUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFckQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELEtBQUssaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7O2dCQUNoQyxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7O2dCQUNuRSxTQUFTLEdBQW9CO2dCQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUVELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQy9ELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtvQkFDZixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekM7YUFDRjtZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQ7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQge1xuICBjYW5DaGFuZ2VIb3VycyxcbiAgY2FuQ2hhbmdlTWludXRlcyxcbiAgY2FuQ2hhbmdlU2Vjb25kcyxcbiAgY2FuQ2hhbmdlVmFsdWUsXG4gIHRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuLi90aW1lcGlja2VyLWNvbnRyb2xzLnV0aWwnO1xuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL3RpbWVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7XG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4uL3RpbWVwaWNrZXIubW9kZWxzJztcbmltcG9ydCB7IGNoYW5nZVRpbWUsIHNldFRpbWUsIGlzVmFsaWRMaW1pdCB9IGZyb20gJy4uL3RpbWVwaWNrZXIudXRpbHMnO1xuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3RpbWVwaWNrZXIuYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RhdGUge1xuICB2YWx1ZTogRGF0ZTtcbiAgY29uZmlnOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGU7XG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFRpbWVwaWNrZXJTdGF0ZSA9IHtcbiAgdmFsdWU6IG51bGwsXG4gIGNvbmZpZzogbmV3IFRpbWVwaWNrZXJDb25maWcoKSxcbiAgY29udHJvbHM6IHtcbiAgICBjYW5JbmNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5EZWNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5Ub2dnbGVNZXJpZGlhbjogdHJ1ZVxuICB9XG59O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5leHBvcnQgZnVuY3Rpb24gdGltZXBpY2tlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IGFjdGlvbi5wYXlsb2FkIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX0hPVVJTOiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxuICAgICAgICAhY2FuQ2hhbmdlSG91cnMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7IGhvdXI6IGFjdGlvbi5wYXlsb2FkLnN0ZXAgfSk7XG5cbiAgICAgIGlmICgoc3RhdGUuY29uZmlnLm1heCB8fCBzdGF0ZS5jb25maWcubWluKSAmJiAhaXNWYWxpZExpbWl0KHN0YXRlLmNvbmZpZywgX25ld1RpbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVM6IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XG4gICAgICAgICFjYW5DaGFuZ2VNaW51dGVzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwgeyBtaW51dGU6IGFjdGlvbi5wYXlsb2FkLnN0ZXAgfSk7XG5cbiAgICAgIGlmICgoc3RhdGUuY29uZmlnLm1heCB8fCBzdGF0ZS5jb25maWcubWluKSAmJiAhaXNWYWxpZExpbWl0KHN0YXRlLmNvbmZpZywgX25ld1RpbWUpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9TRUNPTkRTOiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxuICAgICAgICAhY2FuQ2hhbmdlU2Vjb25kcyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHtcbiAgICAgICAgc2Vjb25kczogYWN0aW9uLnBheWxvYWQuc3RlcFxuICAgICAgfSk7XG5cbiAgICAgIGlmICgoc3RhdGUuY29uZmlnLm1heCB8fCBzdGF0ZS5jb25maWcubWluKSAmJiAhaXNWYWxpZExpbWl0KHN0YXRlLmNvbmZpZywgX25ld1RpbWUpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlNFVF9USU1FX1VOSVQ6IHtcbiAgICAgIGlmICghY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gc2V0VGltZShzdGF0ZS52YWx1ZSwgYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xuICAgIH1cblxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuVVBEQVRFX0NPTlRST0xTOiB7XG4gICAgICBjb25zdCBfbmV3Q29udHJvbHNTdGF0ZSA9IHRpbWVwaWNrZXJDb250cm9scyhzdGF0ZS52YWx1ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgY29uc3QgX25ld1N0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSxcbiAgICAgICAgY29uZmlnOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgY29udHJvbHM6IF9uZXdDb250cm9sc1N0YXRlXG4gICAgICB9O1xuXG4gICAgICBpZiAoc3RhdGUuY29uZmlnLnNob3dNZXJpZGlhbiAhPT0gX25ld1N0YXRlLmNvbmZpZy5zaG93TWVyaWRpYW4pIHtcbiAgICAgICAgaWYgKHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgX25ld1N0YXRlLnZhbHVlID0gbmV3IERhdGUoc3RhdGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgX25ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=