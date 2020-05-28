/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { canChangeHours, canChangeMinutes, canChangeSeconds, canChangeValue, timepickerControls } from '../timepicker-controls.util';
import { TimepickerConfig } from '../timepicker.config';
import { changeTime, setTime, isValidLimit } from '../timepicker.utils';
import { TimepickerActions } from './timepicker.actions';
export class TimepickerState {
}
if (false) {
    /** @type {?} */
    TimepickerState.prototype.value;
    /** @type {?} */
    TimepickerState.prototype.config;
    /** @type {?} */
    TimepickerState.prototype.controls;
}
/** @type {?} */
export const initialState = {
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
export function timepickerReducer(state = initialState, action) {
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
            const _newTime = changeTime(state.value, { hour: action.payload.step });
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
            const _newTime = changeTime(state.value, { minute: action.payload.step });
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
            const _newTime = changeTime(state.value, {
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
            const _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            const _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            const _newState = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ25CLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsTUFBTSxPQUFPLGVBQWU7Q0FJM0I7OztJQUhDLGdDQUFZOztJQUNaLGlDQUFpQzs7SUFDakMsbUNBQTZCOzs7QUFHL0IsTUFBTSxPQUFPLFlBQVksR0FBb0I7SUFDM0MsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUM5QixRQUFRLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0Y7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFjO0lBQ3BFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuQyxJQUNFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQy9DO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXZFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pGLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELEtBQUssaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckMsSUFDRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQ2pEO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXpFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ25GLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyQyxJQUNFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFDakQ7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDs7a0JBRUssUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUN2QyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2FBQzdCLENBQUM7WUFFRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNuRixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELEtBQUssaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRXJELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxLQUFLLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDOztrQkFDaEMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDOztrQkFDbkUsU0FBUyxHQUFvQjtnQkFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7WUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUMvRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pDO2FBQ0Y7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1QztRQUVEO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgY2FuQ2hhbmdlSG91cnMsXG4gIGNhbkNoYW5nZU1pbnV0ZXMsXG4gIGNhbkNoYW5nZVNlY29uZHMsXG4gIGNhbkNoYW5nZVZhbHVlLFxuICB0aW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuLi90aW1lcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBjaGFuZ2VUaW1lLCBzZXRUaW1lLCBpc1ZhbGlkTGltaXQgfSBmcm9tICcuLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi90aW1lcGlja2VyLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0YXRlIHtcbiAgdmFsdWU6IERhdGU7XG4gIGNvbmZpZzogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlO1xuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XG4gIHZhbHVlOiBudWxsLFxuICBjb25maWc6IG5ldyBUaW1lcGlja2VyQ29uZmlnKCksXG4gIGNvbnRyb2xzOiB7XG4gICAgY2FuSW5jcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcbiAgfVxufTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBhY3Rpb24ucGF5bG9hZCB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZUhvdXJzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwgeyBob3VyOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9NSU5VVEVTOiB7XG4gICAgICBpZiAoXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxuICAgICAgICAhY2FuQ2hhbmdlTWludXRlcyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgbWludXRlOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUzoge1xuICAgICAgaWYgKFxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcbiAgICAgICAgIWNhbkNoYW5nZVNlY29uZHMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7XG4gICAgICAgIHNlY29uZHM6IGFjdGlvbi5wYXlsb2FkLnN0ZXBcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XG4gICAgfVxuXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklUOiB7XG4gICAgICBpZiAoIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbmV3VGltZSA9IHNldFRpbWUoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcbiAgICB9XG5cbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUzoge1xuICAgICAgY29uc3QgX25ld0NvbnRyb2xzU3RhdGUgPSB0aW1lcGlja2VyQ29udHJvbHMoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IF9uZXdTdGF0ZTogVGltZXBpY2tlclN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGNvbnRyb2xzOiBfbmV3Q29udHJvbHNTdGF0ZVxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YXRlLmNvbmZpZy5zaG93TWVyaWRpYW4gIT09IF9uZXdTdGF0ZS5jb25maWcuc2hvd01lcmlkaWFuKSB7XG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgIF9uZXdTdGF0ZS52YWx1ZSA9IG5ldyBEYXRlKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIF9uZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19