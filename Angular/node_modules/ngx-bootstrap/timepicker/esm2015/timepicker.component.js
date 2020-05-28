/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:no-forward-ref max-file-line-count */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { getControlsValue } from './timepicker-controls.util';
import { TimepickerConfig } from './timepicker.config';
import { isValidDate, padNumber, parseTime, isInputValid, isHourInputValid, isMinuteInputValid, isSecondInputValid, isInputLimitValid } from './timepicker.utils';
/** @type {?} */
export const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => TimepickerComponent)),
    multi: true
};
export class TimepickerComponent {
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
TimepickerComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBQ1MsaUJBQWlCLEVBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsT0FBTyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDbEIsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNNUIsTUFBTSxPQUFPLGlDQUFpQyxHQUE4QjtJQUMxRSxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQW9DRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBd0Y5QixZQUNFLE9BQXlCLEVBQ2pCLEdBQXNCLEVBQ3RCLE1BQXVCLEVBQ3ZCLGtCQUFxQztRQUZyQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtR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LEtBQUs7NEJBRUwsS0FBSzt1QkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzswQkFFTCxLQUFLO3dCQUVMLEtBQUs7a0JBRUwsS0FBSztrQkFFTCxLQUFLOytCQUVMLEtBQUs7aUNBRUwsS0FBSztpQ0FFTCxLQUFLO3NCQUdMLE1BQU07Ozs7Ozs7SUFuQ1AsdUNBQTBCOzs7OztJQUUxQix5Q0FBNEI7Ozs7O0lBRTVCLDBDQUE2Qjs7Ozs7SUFFN0IsNENBQWdDOzs7OztJQUVoQyx1Q0FBMkI7Ozs7O0lBRTNCLHlDQUE2Qjs7Ozs7SUFFN0Isd0NBQTRCOzs7OztJQUU1QiwyQ0FBK0I7Ozs7O0lBRS9CLDJDQUErQjs7Ozs7SUFFL0IsMENBQThCOzs7OztJQUU5QiwwQ0FBOEI7Ozs7O0lBRTlCLHdDQUE2Qjs7Ozs7SUFFN0Isa0NBQW1COzs7OztJQUVuQixrQ0FBbUI7Ozs7O0lBRW5CLCtDQUFrQzs7Ozs7SUFFbEMsaURBQW9DOzs7OztJQUVwQyxpREFBb0M7Ozs7O0lBR3BDLHNDQUFnRDs7SUFHaEQsb0NBQWM7O0lBQ2Qsc0NBQWdCOztJQUNoQixzQ0FBZ0I7O0lBQ2hCLHVDQUFpQjs7SUFZakIsMkNBQXFCOztJQUNyQiw2Q0FBdUI7O0lBQ3ZCLDZDQUF1Qjs7SUFHdkIseUNBQW1COztJQUNuQiwyQ0FBcUI7O0lBQ3JCLDJDQUFxQjs7SUFHckIsZ0RBQTJCOztJQUMzQixrREFBNkI7O0lBQzdCLGtEQUE2Qjs7SUFFN0IsZ0RBQTJCOztJQUMzQixrREFBNkI7O0lBQzdCLGtEQUE2Qjs7SUFFN0IsZ0RBQTJCOztJQUkzQix1Q0FBOEI7O0lBRTlCLHdDQUErQjs7SUFFL0IsNENBQTRCOzs7OztJQUkxQixrQ0FBOEI7Ozs7O0lBQzlCLHFDQUErQjs7Ozs7SUFDL0IsaURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tZm9yd2FyZC1yZWYgbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBUaW1lcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZSc7XG5pbXBvcnQgeyBnZXRDb250cm9sc1ZhbHVlIH0gZnJvbSAnLi90aW1lcGlja2VyLWNvbnRyb2xzLnV0aWwnO1xuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vdGltZXBpY2tlci5jb25maWcnO1xuXG5pbXBvcnQge1xuICBUaW1lQ2hhbmdlU291cmNlLFxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcblxuaW1wb3J0IHtcbiAgaXNWYWxpZERhdGUsXG4gIHBhZE51bWJlcixcbiAgcGFyc2VUaW1lLFxuICBpc0lucHV0VmFsaWQsXG4gIGlzSG91cklucHV0VmFsaWQsXG4gIGlzTWludXRlSW5wdXRWYWxpZCxcbiAgaXNTZWNvbmRJbnB1dFZhbGlkLFxuICBpc0lucHV0TGltaXRWYWxpZFxufSBmcm9tICcuL3RpbWVwaWNrZXIudXRpbHMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3JNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFRJTUVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogQ29udHJvbFZhbHVlQWNjZXNzb3JNb2RlbCA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVwaWNrZXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGltZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIFRpbWVwaWNrZXJTdG9yZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5icy1jaGV2cm9uIHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA5cHg7XG4gICAgICBoZWlnaHQ6IDlweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci13aWR0aDogM3B4IDBweCAwIDNweDtcbiAgICB9XG5cbiAgICAuYnMtY2hldnJvbi11cCB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRvcDogMnB4O1xuICAgIH1cblxuICAgIC5icy1jaGV2cm9uLWRvd24ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgdG9wOiAtMnB4O1xuICAgIH1cblxuICAgIC5icy10aW1lcGlja2VyLWZpZWxkIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgcGFkZGluZzogLjM3NXJlbSAuNTVyZW07XG4gICAgfVxuICBgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICAgIFRpbWVwaWNrZXJDb250cm9scyxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95IHtcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBudW1iZXI7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBASW5wdXQoKSBtaW51dGVTdGVwOiBudW1iZXI7XG4gIC8qKiBzZWNvbmRzIGNoYW5nZSBzdGVwICovXG4gIEBJbnB1dCgpIHNlY29uZHNTdGVwOiBudW1iZXI7XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5SW5wdXQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHRoZSB2YWx1ZXMgb2YgaG91cnMgYW5kIG1pbnV0ZXMgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyBvbiB0aGUga2V5Ym9hcmQgKi9cbiAgQElucHV0KCkgYXJyb3drZXlzOiBib29sZWFuO1xuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXG4gIEBJbnB1dCgpIHNob3dTcGlubmVyczogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgbWVyaWRpYW4gYnV0dG9uIHdpbGwgYmUgc2hvd24gKi9cbiAgQElucHV0KCkgc2hvd01lcmlkaWFuOiBib29sZWFuO1xuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cbiAgQElucHV0KCkgc2hvd01pbnV0ZXM6IGJvb2xlYW47XG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzaG93U2Vjb25kczogYm9vbGVhbjtcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cbiAgQElucHV0KCkgbWVyaWRpYW5zOiBzdHJpbmdbXTtcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgQElucHV0KCkgbWluOiBEYXRlO1xuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgaG91cnMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBob3Vyc1BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgbWludXRlcyBmaWVsZCBpbiB0aW1lcGlja2VyICovXG4gIEBJbnB1dCgpIG1pbnV0ZXNQbGFjZWhvbGRlcjogc3RyaW5nO1xuICAvKiogcGxhY2Vob2xkZXIgZm9yIHNlY29uZHMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xuICBASW5wdXQoKSBzZWNvbmRzUGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKiogZW1pdHMgdHJ1ZSBpZiB2YWx1ZSBpcyBhIHZhbGlkIGRhdGUgKi9cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gdWkgdmFyaWFibGVzXG4gIGhvdXJzOiBzdHJpbmc7XG4gIG1pbnV0ZXM6IHN0cmluZztcbiAgc2Vjb25kczogc3RyaW5nO1xuICBtZXJpZGlhbjogc3RyaW5nO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRWRpdGFibGVgIGluc3RlYWQgKi9cbiAgZ2V0IGlzU3Bpbm5lcnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dTcGlubmVycyAmJiAhdGhpcy5yZWFkb25seUlucHV0O1xuICB9XG5cbiAgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5yZWFkb25seUlucHV0IHx8IHRoaXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgLy8gbWluXFxtYXggdmFsaWRhdGlvbiBmb3IgaW5wdXQgZmllbGRzXG4gIGludmFsaWRIb3VycyA9IGZhbHNlO1xuICBpbnZhbGlkTWludXRlcyA9IGZhbHNlO1xuICBpbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xuXG4gIC8vIGFyaWEtbGFiZWwgdmFyaWFibGVzXG4gIGxhYmVsSG91cnM6IHN0cmluZztcbiAgbGFiZWxNaW51dGVzOiBzdHJpbmc7XG4gIGxhYmVsU2Vjb25kczogc3RyaW5nO1xuXG4gIC8vIHRpbWUgcGlja2VyIGNvbnRyb2xzIHN0YXRlXG4gIGNhbkluY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5JbmNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhbkRlY3JlbWVudEhvdXJzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xuICBjYW5EZWNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xuXG4gIGNhblRvZ2dsZU1lcmlkaWFuOiBib29sZWFuO1xuXG4gIC8vIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICB0aW1lcGlja2VyU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2NvbmZpZzogVGltZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRpbWVwaWNrZXJTdG9yZSxcbiAgICBwcml2YXRlIF90aW1lcGlja2VyQWN0aW9uczogVGltZXBpY2tlckFjdGlvbnNcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcblxuICAgIHRoaXMudGltZXBpY2tlclN1YiA9IF9zdG9yZVxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBVSSB2YWx1ZXMgaWYgZGF0ZSBjaGFuZ2VkXG4gICAgICAgIHRoaXMuX3JlbmRlclRpbWUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy51cGRhdGVDb250cm9scyhnZXRDb250cm9sc1ZhbHVlKHRoaXMpKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBfc3RvcmVcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuY29udHJvbHMpXG4gICAgICAuc3Vic2NyaWJlKChjb250cm9sc1N0YXRlOiBUaW1lcGlja2VyQ29udHJvbHMpID0+IHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMubWludXRlcywgdGhpcy5zZWNvbmRzLCB0aGlzLmlzUE0oKSkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyb2xzU3RhdGUpO1xuICAgICAgICBfY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmludmFsaWRIb3VycyA9IGZhbHNlO1xuICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcbiAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gZmFsc2U7XG4gIH1cblxuICBpc1BNKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dNZXJpZGlhbiAmJiB0aGlzLm1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1sxXTtcbiAgfVxuXG4gIHByZXZEZWYoJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgd2hlZWxTaWduKCRldmVudDogV2hlZWxFdmVudEluaXQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNpZ24oJGV2ZW50LmRlbHRhWSkgKiAtMTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZUhvdXJzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHsgc3RlcCwgc291cmNlIH0pKTtcbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZXMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VNaW51dGVzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZVNlY29uZHMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VTZWNvbmRzKHsgc3RlcCwgc291cmNlIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUhvdXJzKGhvdXJzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuaG91cnMgPSBob3VycztcblxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc0hvdXJJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMuaXNQTSgpKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRIb3VycyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlTWludXRlcyhtaW51dGVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNNaW51dGVJbnB1dFZhbGlkKHRoaXMubWludXRlcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgdXBkYXRlU2Vjb25kcyhzZWNvbmRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gaXNTZWNvbmRJbnB1dFZhbGlkKHRoaXMuc2Vjb25kcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IHRydWU7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xuICB9XG5cbiAgaXNWYWxpZExpbWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0lucHV0TGltaXRWYWxpZCh7XG4gICAgICBob3VyOiB0aGlzLmhvdXJzLFxuICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXG4gICAgICBpc1BNOiB0aGlzLmlzUE0oKVxuICAgIH0sIHRoaXMubWF4LCB0aGlzLm1pbik7XG4gIH1cblxuICBfdXBkYXRlVGltZSgpIHtcbiAgICBjb25zdCBfc2Vjb25kcyA9IHRoaXMuc2hvd1NlY29uZHMgPyB0aGlzLnNlY29uZHMgOiB2b2lkIDA7XG4gICAgY29uc3QgX21pbnV0ZXMgPSB0aGlzLnNob3dNaW51dGVzID8gdGhpcy5taW51dGVzIDogdm9pZCAwO1xuICAgIGlmICghaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIF9taW51dGVzLCBfc2Vjb25kcywgdGhpcy5pc1BNKCkpKSB7XG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5zZXRUaW1lKHtcbiAgICAgICAgaG91cjogdGhpcy5ob3VycyxcbiAgICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHM6IHRoaXMuc2Vjb25kcyxcbiAgICAgICAgaXNQTTogdGhpcy5pc1BNKClcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZU1lcmlkaWFuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93TWVyaWRpYW4gfHwgIXRoaXMuaXNFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHtcbiAgICAgICAgc3RlcDogX2hvdXJzUGVyRGF5SGFsZixcbiAgICAgICAgc291cmNlOiAnJ1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWREYXRlKG9iaikpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUocGFyc2VUaW1lKG9iaikpKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy53cml0ZVZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJkaXNhYmxlZFwiLlxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlLCBpdCB3aWxsIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhcHByb3ByaWF0ZSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50aW1lcGlja2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogdm9pZCB7XG4gICAgaWYgKCFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaG91cnMgPSAnJztcbiAgICAgIHRoaXMubWludXRlcyA9ICcnO1xuICAgICAgdGhpcy5zZWNvbmRzID0gJyc7XG4gICAgICB0aGlzLm1lcmlkaWFuID0gdGhpcy5tZXJpZGlhbnNbMF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfdmFsdWUgPSBwYXJzZVRpbWUodmFsdWUpO1xuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcbiAgICBsZXQgX2hvdXJzID0gX3ZhbHVlLmdldEhvdXJzKCk7XG5cbiAgICBpZiAodGhpcy5zaG93TWVyaWRpYW4pIHtcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1tfaG91cnMgPj0gX2hvdXJzUGVyRGF5SGFsZiA/IDEgOiAwXTtcbiAgICAgIF9ob3VycyA9IF9ob3VycyAlIF9ob3Vyc1BlckRheUhhbGY7XG4gICAgICAvLyBzaG91bGQgYmUgMTIgUE0sIG5vdCAwMCBQTVxuICAgICAgaWYgKF9ob3VycyA9PT0gMCkge1xuICAgICAgICBfaG91cnMgPSBfaG91cnNQZXJEYXlIYWxmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG91cnMgPSBwYWROdW1iZXIoX2hvdXJzKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gICAgdGhpcy5zZWNvbmRzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRVVENTZWNvbmRzKCkpO1xuICB9XG59XG4iXX0=