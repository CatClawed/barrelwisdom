/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var TimepickerActions = /** @class */ (function () {
    function TimepickerActions() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeHours = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeMinutes = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeSeconds = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.setTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.updateControls = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: Injectable }
    ];
    return TimepickerActions;
}());
export { TimepickerActions };
if (false) {
    /** @type {?} */
    TimepickerActions.WRITE_VALUE;
    /** @type {?} */
    TimepickerActions.CHANGE_HOURS;
    /** @type {?} */
    TimepickerActions.CHANGE_MINUTES;
    /** @type {?} */
    TimepickerActions.CHANGE_SECONDS;
    /** @type {?} */
    TimepickerActions.SET_TIME_UNIT;
    /** @type {?} */
    TimepickerActions.UPDATE_CONTROLS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0M7SUFBQTtJQWtEQSxDQUFDOzs7OztJQXpDQyxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBb0I7UUFDN0IsT0FBTztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLEtBQXNCO1FBQ2hDLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsWUFBWTtZQUNwQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxLQUFzQjtRQUNsQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsS0FBc0I7UUFDbEMsT0FBTztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxjQUFjO1lBQ3RDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQVc7UUFDakIsT0FBTztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxhQUFhO1lBQ3JDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLEtBQStCO1FBQzVDLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZUFBZTtZQUN2QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDO0lBL0NlLDZCQUFXLEdBQUcsd0NBQXdDLENBQUM7SUFDdkQsOEJBQVksR0FBRywyQkFBMkIsQ0FBQztJQUMzQyxnQ0FBYyxHQUFHLDZCQUE2QixDQUFDO0lBQy9DLGdDQUFjLEdBQUcsNkJBQTZCLENBQUM7SUFDL0MsK0JBQWEsR0FBRyw0QkFBNEIsQ0FBQztJQUM3QyxpQ0FBZSxHQUFHLDhCQUE4QixDQUFDOztnQkFQbEUsVUFBVTs7SUFrRFgsd0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWpEWSxpQkFBaUI7OztJQUM1Qiw4QkFBdUU7O0lBQ3ZFLCtCQUEyRDs7SUFDM0QsaUNBQStEOztJQUMvRCxpQ0FBK0Q7O0lBQy9ELGdDQUE2RDs7SUFDN0Qsa0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgVGltZUNoYW5nZUV2ZW50LFxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgV1JJVEVfVkFMVUUgPSAnW3RpbWVwaWNrZXJdIHdyaXRlIHZhbHVlIGZyb20gbmcgbW9kZWwnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0hPVVJTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgaG91cnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX01JTlVURVMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBtaW51dGVzJztcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9TRUNPTkRTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2Ugc2Vjb25kcyc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfVElNRV9VTklUID0gJ1t0aW1lcGlja2VyXSBzZXQgdGltZSB1bml0JztcbiAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9DT05UUk9MUyA9ICdbdGltZXBpY2tlcl0gdXBkYXRlIGNvbnRyb2xzJztcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlSG91cnMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VNaW51dGVzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVMsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VTZWNvbmRzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIHNldFRpbWUodmFsdWU6IFRpbWUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklULFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ29udHJvbHModmFsdWU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUyxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxufVxuIl19