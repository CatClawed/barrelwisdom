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
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
export function timepickerControls(value, state) {
    /** @type {?} */
    var hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    /** @type {?} */
    var res = {
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
        var _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jb250cm9scy51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQU9oRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUErQixFQUMvQixLQUF1QjtJQUV2QixJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN6QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUFzQixFQUN0QixRQUE0QjtJQUU1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNmLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7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QUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzdFO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFuZ2VUaW1lIH0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcbmltcG9ydCB7XG4gIFRpbWVDaGFuZ2VFdmVudCxcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBUaW1lcGlja2VyQ29udHJvbHNcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcbiAgZXZlbnQ/OiBUaW1lQ2hhbmdlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBpZiAoc3RhdGUucmVhZG9ubHlJbnB1dCB8fCBzdGF0ZS5kaXNhYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudCkge1xuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICd3aGVlbCcgJiYgIXN0YXRlLm1vdXNld2hlZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAna2V5JyAmJiAhc3RhdGUuYXJyb3drZXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VIb3VycyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudEhvdXJzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VNaW51dGVzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVNlY29uZHMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRTZWNvbmRzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50U2Vjb25kcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNWYWx1ZShcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxuKTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIHtcbiAgY29uc3Qge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH0gPSBzdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIGhvdXJTdGVwLFxuICAgIG1pbnV0ZVN0ZXAsXG4gICAgc2Vjb25kc1N0ZXAsXG4gICAgcmVhZG9ubHlJbnB1dCxcbiAgICBkaXNhYmxlZCxcbiAgICBtb3VzZXdoZWVsLFxuICAgIGFycm93a2V5cyxcbiAgICBzaG93U3Bpbm5lcnMsXG4gICAgc2hvd01lcmlkaWFuLFxuICAgIHNob3dTZWNvbmRzLFxuICAgIG1lcmlkaWFucyxcbiAgICBtaW4sXG4gICAgbWF4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyQ29udHJvbHMoXG4gIHZhbHVlOiBEYXRlLFxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXG4pOiBUaW1lcGlja2VyQ29udHJvbHMge1xuICBjb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgY29uc3QgeyBtaW4sIG1heCwgaG91clN0ZXAsIG1pbnV0ZVN0ZXAsIHNlY29uZHNTdGVwLCBzaG93U2Vjb25kcyB9ID0gc3RhdGU7XG4gIGNvbnN0IHJlczogVGltZXBpY2tlckNvbnRyb2xzID0ge1xuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxuICAgIGNhbkRlY3JlbWVudE1pbnV0ZXM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcblxuICAgIGNhblRvZ2dsZU1lcmlkaWFuOiB0cnVlXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBjb21wYXJlIGRhdGVzXG4gIGlmIChtYXgpIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkluY3JlbWVudEhvdXJzID0gbWF4ID4gX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogbWludXRlU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5JbmNyZW1lbnRNaW51dGVzID0gc2hvd1NlY29uZHNcbiAgICAgICAgPyBtYXggPiBfbmV3TWludXRlc1xuICAgICAgICA6IG1heCA+PSBfbmV3TWludXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XG4gICAgICBjb25zdCBfbmV3U2Vjb25kcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgc2Vjb25kczogc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50U2Vjb25kcyA9IG1heCA+PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA8IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3Vyc1BlckRheUhhbGYgfSkgPCBtYXg7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pbikge1xuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91clN0ZXAgfSk7XG4gICAgcmVzLmNhbkRlY3JlbWVudEhvdXJzID0gbWluIDwgX25ld0hvdXI7XG5cbiAgICBpZiAoIXJlcy5jYW5EZWNyZW1lbnRIb3Vycykge1xuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogLW1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWluIDwgX25ld01pbnV0ZXNcbiAgICAgICAgOiBtaW4gPD0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IC1zZWNvbmRzU3RlcCB9KTtcbiAgICAgIHJlcy5jYW5EZWNyZW1lbnRTZWNvbmRzID0gbWluIDw9IF9uZXdTZWNvbmRzO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID49IGhvdXJzUGVyRGF5SGFsZikge1xuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91cnNQZXJEYXlIYWxmIH0pID4gbWluO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG4iXX0=