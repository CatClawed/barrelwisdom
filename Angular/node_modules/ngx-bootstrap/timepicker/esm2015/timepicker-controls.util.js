/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { changeTime } from './timepicker.utils';
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
export function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
export function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
export function timepickerControls(value, state) {
    /** @type {?} */
    const hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    /** @type {?} */
    const res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jb250cm9scy51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQU9oRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUErQixFQUMvQixLQUF1QjtJQUV2QixJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN6QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUFzQixFQUN0QixRQUE0QjtJQUU1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNmLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsS0FBc0IsRUFDdEIsUUFBNEI7SUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEtBQXNCLEVBQ3RCLFFBQTRCO0lBRTVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDbkQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDbkQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEtBQStCO1VBRXpCLEVBQ0osUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxHQUFHLEVBQ0gsR0FBRyxFQUNKLEdBQUcsS0FBSztJQUVULE9BQU87UUFDTCxRQUFRO1FBQ1IsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2IsUUFBUTtRQUNSLFVBQVU7UUFDVixTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsU0FBUztRQUNULEdBQUc7UUFDSCxHQUFHO0tBQ0osQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsS0FBVyxFQUNYLEtBQStCOztVQUV6QixlQUFlLEdBQUcsRUFBRTtVQUNwQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsS0FBSzs7VUFDcEUsR0FBRyxHQUF1QjtRQUM5QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0lBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxnQkFBZ0I7SUFDaEIsSUFBSSxHQUFHLEVBQUU7O2NBQ0QsUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDdEQsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTs7a0JBQ3BCLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQzdELEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXO2dCQUNuQyxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVc7Z0JBQ25CLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTs7a0JBQ3RCLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsZUFBZSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzVFO0tBQ0Y7SUFFRCxJQUFJLEdBQUcsRUFBRTs7Y0FDRCxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUU7O2tCQUNwQixXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlELEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXO2dCQUNuQyxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVc7Z0JBQ25CLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTs7a0JBQ3RCLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEUsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUM7U0FDOUM7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxlQUFlLEVBQUU7WUFDdkMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RTtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlVGltZSB9IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XG5pbXBvcnQge1xuICBUaW1lQ2hhbmdlRXZlbnQsXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgVGltZXBpY2tlckNvbnRyb2xzXG59IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlVmFsdWUoXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIGV2ZW50PzogVGltZUNoYW5nZUV2ZW50XG4pOiBib29sZWFuIHtcbiAgaWYgKHN0YXRlLnJlYWRvbmx5SW5wdXQgfHwgc3RhdGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAnd2hlZWwnICYmICFzdGF0ZS5tb3VzZXdoZWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ2tleScgJiYgIXN0YXRlLmFycm93a2V5cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlSG91cnMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudEhvdXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRIb3Vycykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlTWludXRlcyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudE1pbnV0ZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRNaW51dGVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VTZWNvbmRzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50U2Vjb25kcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudFNlY29uZHMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xzVmFsdWUoXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGVcbik6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB7XG4gIGNvbnN0IHtcbiAgICBob3VyU3RlcCxcbiAgICBtaW51dGVTdGVwLFxuICAgIHNlY29uZHNTdGVwLFxuICAgIHJlYWRvbmx5SW5wdXQsXG4gICAgZGlzYWJsZWQsXG4gICAgbW91c2V3aGVlbCxcbiAgICBhcnJvd2tleXMsXG4gICAgc2hvd1NwaW5uZXJzLFxuICAgIHNob3dNZXJpZGlhbixcbiAgICBzaG93U2Vjb25kcyxcbiAgICBtZXJpZGlhbnMsXG4gICAgbWluLFxuICAgIG1heFxuICB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICBob3VyU3RlcCxcbiAgICBtaW51dGVTdGVwLFxuICAgIHNlY29uZHNTdGVwLFxuICAgIHJlYWRvbmx5SW5wdXQsXG4gICAgZGlzYWJsZWQsXG4gICAgbW91c2V3aGVlbCxcbiAgICBhcnJvd2tleXMsXG4gICAgc2hvd1NwaW5uZXJzLFxuICAgIHNob3dNZXJpZGlhbixcbiAgICBzaG93U2Vjb25kcyxcbiAgICBtZXJpZGlhbnMsXG4gICAgbWluLFxuICAgIG1heFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXBpY2tlckNvbnRyb2xzKFxuICB2YWx1ZTogRGF0ZSxcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxuKTogVGltZXBpY2tlckNvbnRyb2xzIHtcbiAgY29uc3QgaG91cnNQZXJEYXlIYWxmID0gMTI7XG4gIGNvbnN0IHsgbWluLCBtYXgsIGhvdXJTdGVwLCBtaW51dGVTdGVwLCBzZWNvbmRzU3RlcCwgc2hvd1NlY29uZHMgfSA9IHN0YXRlO1xuICBjb25zdCByZXM6IFRpbWVwaWNrZXJDb250cm9scyA9IHtcbiAgICBjYW5JbmNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5EZWNyZW1lbnRIb3VyczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRNaW51dGVzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudFNlY29uZHM6IHRydWUsXG5cbiAgICBjYW5Ub2dnbGVNZXJpZGlhbjogdHJ1ZVxuICB9O1xuXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gY29tcGFyZSBkYXRlc1xuICBpZiAobWF4KSB7XG4gICAgY29uc3QgX25ld0hvdXIgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IGhvdXJTdGVwIH0pO1xuICAgIHJlcy5jYW5JbmNyZW1lbnRIb3VycyA9IG1heCA+IF9uZXdIb3VyO1xuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IG1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWF4ID4gX25ld01pbnV0ZXNcbiAgICAgICAgOiBtYXggPj0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IHNlY29uZHNTdGVwIH0pO1xuICAgICAgcmVzLmNhbkluY3JlbWVudFNlY29uZHMgPSBtYXggPj0gX25ld1NlY29uZHM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPCBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91cnNQZXJEYXlIYWxmIH0pIDwgbWF4O1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW4pIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJTdGVwIH0pO1xuICAgIHJlcy5jYW5EZWNyZW1lbnRIb3VycyA9IG1pbiA8IF9uZXdIb3VyO1xuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IC1taW51dGVTdGVwIH0pO1xuICAgICAgcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMgPSBzaG93U2Vjb25kc1xuICAgICAgICA/IG1pbiA8IF9uZXdNaW51dGVzXG4gICAgICAgIDogbWluIDw9IF9uZXdNaW51dGVzO1xuICAgIH1cblxuICAgIGlmICghcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICAgIGNvbnN0IF9uZXdTZWNvbmRzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBzZWNvbmRzOiAtc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50U2Vjb25kcyA9IG1pbiA8PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA+PSBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJzUGVyRGF5SGFsZiB9KSA+IG1pbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIl19