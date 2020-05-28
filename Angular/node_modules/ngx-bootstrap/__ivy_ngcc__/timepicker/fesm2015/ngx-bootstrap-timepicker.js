import { Injectable, forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "a", 1);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
    ɵngcc0.ɵɵelement(2, "span", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "a", 1);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
    ɵngcc0.ɵɵelement(2, "span", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0:\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵelementStart(1, "input", 5);
    ɵngcc0.ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.changeMinutes(0 - ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.updateMinutes($event.target.value); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("has-error", ctx_r7.invalidMinutes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("is-invalid", ctx_r7.invalidMinutes);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r7.labelMinutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0:\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵelementStart(1, "input", 5);
    ɵngcc0.ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.changeSeconds(0 - ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.updateSeconds($event.target.value); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("has-error", ctx_r9.invalidSeconds);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("is-invalid", ctx_r9.invalidSeconds);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r9.labelSeconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "button", 8);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.toggleMeridian(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r11.meridian, " ");
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "a", 1);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r35); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.changeMinutes(0 - ctx_r34.minuteStep); });
    ɵngcc0.ɵɵelement(2, "span", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵelementStart(1, "a", 1);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.changeSeconds(0 - ctx_r36.secondsStep); });
    ɵngcc0.ɵɵelement(2, "span", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td");
} }
class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.ɵfac = function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); };
TimepickerActions.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TimepickerActions, factory: TimepickerActions.ɵfac });
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerActions, [{
        type: Injectable
    }], null, null); })();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dex = 10;
/** @type {?} */
const hoursPerDay = 24;
/** @type {?} */
const hoursPerDayHalf = 12;
/** @type {?} */
const minutesPerHour = 60;
/** @type {?} */
const secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM = false) {
    /** @type {?} */
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    let hour = value.getHours();
    /** @type {?} */
    let minutes = value.getMinutes();
    /** @type {?} */
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    let hour = parseHours(opts.hour);
    /** @type {?} */
    const minute = parseMinutes(opts.minute);
    /** @type {?} */
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    /** @type {?} */
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    const newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
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
function canChangeHours(event, controls) {
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
function canChangeMinutes(event, controls) {
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
function canChangeSeconds(event, controls) {
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
function getControlsValue(state) {
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
function timepickerControls(value, state) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
        /**
         * hours aria label
         */
        this.ariaLabelHours = 'hours';
        /**
         * minutes aria label
         */
        this.ariaLabelMinutes = 'minutes';
        /**
         * seconds aria label
         */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
TimepickerConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TimepickerConfig, factory: TimepickerConfig.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
if (false) {
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.minuteStep;
    /**
     * seconds changes step
     * @type {?}
     */
    TimepickerConfig.prototype.secondsStep;
    /**
     * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
     * @type {?}
     */
    TimepickerConfig.prototype.showMeridian;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerConfig.prototype.meridians;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerConfig.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerConfig.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerConfig.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerConfig.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerConfig.prototype.showSpinners;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showSeconds;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showMinutes;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.max;
    /**
     * placeholder for hours field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.hoursPlaceholder;
    /**
     * placeholder for minutes field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.minutesPlaceholder;
    /**
     * placeholder for seconds field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.secondsPlaceholder;
    /**
     * hours aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelHours;
    /**
     * minutes aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelMinutes;
    /**
     * seconds aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelSeconds;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerState {
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
const initialState = {
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
function timepickerReducer(state = initialState, action) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerStore extends MiniStore {
    constructor() {
        /** @type {?} */
        const _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        const state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
TimepickerStore.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TimepickerStore, factory: TimepickerStore.ɵfac });
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerStore, [{
        type: Injectable
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => TimepickerComponent)),
    multi: true
};
class TimepickerComponent {
    /**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new EventEmitter();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.value))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        }));
        _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.controls))
            .subscribe((/**
         * @param {?} controlsState
         * @return {?}
         */
        (controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        }));
    }
    /**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    /**
     * @return {?}
     */
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    prevDef($event) {
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    wheelSign($event) {
        return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    updateHours(hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        const isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    updateMinutes(minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        const isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    updateSeconds(seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        const isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @return {?}
     */
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    /**
     * @return {?}
     */
    _updateTime() {
        /** @type {?} */
        const _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        const _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _renderTime(value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        const _value = parseTime(value);
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        /** @type {?} */
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(ɵngcc0.ɵɵdirectiveInject(TimepickerConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(TimepickerStore), ɵngcc0.ɵɵdirectiveInject(TimepickerActions)); };
TimepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { disabled: "disabled", hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid" }, features: [ɵngcc0.ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table");
        ɵngcc0.ɵɵelementStart(1, "tbody");
        ɵngcc0.ɵɵelementStart(2, "tr", 0);
        ɵngcc0.ɵɵelementStart(3, "td");
        ɵngcc0.ɵɵelementStart(4, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
        ɵngcc0.ɵɵelement(5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        ɵngcc0.ɵɵtemplate(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        ɵngcc0.ɵɵtemplate(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "tr");
        ɵngcc0.ɵɵelementStart(13, "td", 4);
        ɵngcc0.ɵɵelementStart(14, "input", 5);
        ɵngcc0.ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(0 - ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        ɵngcc0.ɵɵtemplate(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        ɵngcc0.ɵɵtemplate(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "tr", 0);
        ɵngcc0.ɵɵelementStart(22, "td");
        ɵngcc0.ɵɵelementStart(23, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(0 - ctx.hourStep); });
        ɵngcc0.ɵɵelement(24, "span", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        ɵngcc0.ɵɵtemplate(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        ɵngcc0.ɵɵtemplate(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        ɵngcc0.ɵɵtemplate(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.showSpinners);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("has-error", ctx.invalidHours);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalidHours);
        ɵngcc0.ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        ɵngcc0.ɵɵattribute("aria-label", ctx.labelHours);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", !ctx.showSpinners);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMinutes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSeconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
    } }, directives: [ɵngcc1.NgIf], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: TimepickerConfig },
    { type: ChangeDetectorRef },
    { type: TimepickerStore },
    { type: TimepickerActions }
];
TimepickerComponent.propDecorators = {
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    secondsStep: [{ type: Input }],
    readonlyInput: [{ type: Input }],
    disabled: [{ type: Input }],
    mousewheel: [{ type: Input }],
    arrowkeys: [{ type: Input }],
    showSpinners: [{ type: Input }],
    showMeridian: [{ type: Input }],
    showMinutes: [{ type: Input }],
    showSeconds: [{ type: Input }],
    meridians: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    hoursPlaceholder: [{ type: Input }],
    minutesPlaceholder: [{ type: Input }],
    secondsPlaceholder: [{ type: Input }],
    isValid: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'timepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
      padding: .375rem .55rem;
    }
  `]
            }]
    }], function () { return [{ type: TimepickerConfig }, { type: ɵngcc0.ChangeDetectorRef }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { isValid: [{
            type: Output
        }], disabled: [{
            type: Input
        }], hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondsStep: [{
            type: Input
        }], readonlyInput: [{
            type: Input
        }], mousewheel: [{
            type: Input
        }], arrowkeys: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], showMeridian: [{
            type: Input
        }], showMinutes: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], meridians: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], hoursPlaceholder: [{
            type: Input
        }], minutesPlaceholder: [{
            type: Input
        }], secondsPlaceholder: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * hours change step
     * @type {?}
     */
    TimepickerComponent.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerComponent.prototype.minuteStep;
    /**
     * seconds change step
     * @type {?}
     */
    TimepickerComponent.prototype.secondsStep;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerComponent.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerComponent.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerComponent.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerComponent.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerComponent.prototype.showSpinners;
    /**
     * if true meridian button will be shown
     * @type {?}
     */
    TimepickerComponent.prototype.showMeridian;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.showMinutes;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.showSeconds;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerComponent.prototype.meridians;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerComponent.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerComponent.prototype.max;
    /**
     * placeholder for hours field in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.hoursPlaceholder;
    /**
     * placeholder for minutes field in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.minutesPlaceholder;
    /**
     * placeholder for seconds field in timepicker
     * @type {?}
     */
    TimepickerComponent.prototype.secondsPlaceholder;
    /**
     * emits true if value is a valid date
     * @type {?}
     */
    TimepickerComponent.prototype.isValid;
    /** @type {?} */
    TimepickerComponent.prototype.hours;
    /** @type {?} */
    TimepickerComponent.prototype.minutes;
    /** @type {?} */
    TimepickerComponent.prototype.seconds;
    /** @type {?} */
    TimepickerComponent.prototype.meridian;
    /** @type {?} */
    TimepickerComponent.prototype.invalidHours;
    /** @type {?} */
    TimepickerComponent.prototype.invalidMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.invalidSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.labelHours;
    /** @type {?} */
    TimepickerComponent.prototype.labelMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.labelSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementHours;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.canIncrementSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementHours;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementMinutes;
    /** @type {?} */
    TimepickerComponent.prototype.canDecrementSeconds;
    /** @type {?} */
    TimepickerComponent.prototype.canToggleMeridian;
    /** @type {?} */
    TimepickerComponent.prototype.onChange;
    /** @type {?} */
    TimepickerComponent.prototype.onTouched;
    /** @type {?} */
    TimepickerComponent.prototype.timepickerSub;
    /**
     * @type {?}
     * @private
     */
    TimepickerComponent.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    TimepickerComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    TimepickerComponent.prototype._timepickerActions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: function () { return [TimepickerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TimepickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, TIMEPICKER_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=ngx-bootstrap-timepicker.js.map