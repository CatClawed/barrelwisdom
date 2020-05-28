/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Host, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { parseDate, formatDate, getLocale, isAfter, isBefore, isArray, isDateValid, utcAsLocal } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsLocaleService } from './bs-locale.service';
/** @type {?} */
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return BsDaterangepickerInputDirective; })),
    multi: true
};
/** @type {?} */
var BS_DATERANGEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return BsDaterangepickerInputDirective; })),
    multi: true
};
var BsDaterangepickerInputDirective = /** @class */ (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._localeService.localeChange.subscribe((/**
         * @return {?}
         */
        function () {
            _this._setInputValue(_this._value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onKeydownEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype._setInputValue = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var range = '';
        if (date) {
            /** @type {?} */
            var start = !date[0] ? ''
                : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            /** @type {?} */
            var end = !date[1] ? ''
                : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value);
        this._onChange(this._value);
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var _value = c.value;
        /** @type {?} */
        var errors = [];
        if (_value === null || _value === undefined || !isArray(_value)) {
            return null;
        }
        // @ts-ignore
        _value.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a - b; }));
        /** @type {?} */
        var _isFirstDateValid = isDateValid(_value[0]);
        /** @type {?} */
        var _isSecondDateValid = isDateValid(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, 'date')) {
            _value[0] = this._picker.minDate;
            errors.push({ bsDate: { minDate: this._picker.minDate } });
        }
        if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, 'date')) {
            _value[1] = this._picker.maxDate;
            errors.push({ bsDate: { maxDate: this._picker.maxDate } });
        }
        if (errors.length > 0) {
            this.writeValue(_value);
            return errors;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            var _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            /** @type {?} */
            var _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = ((/** @type {?} */ (_input)))
                .map((/**
             * @param {?} _val
             * @return {?}
             */
            function (_val) {
                if (_this._picker._config.useUtc) {
                    return utcAsLocal(parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale));
                }
                return parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            }))
                .map((/**
             * @param {?} date
             * @return {?}
             */
            function (date) { return (isNaN(date.valueOf()) ? null : date); }));
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnChange = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnTouched = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(keydown)': 'onKeydownEvent($event)',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerDirective, decorators: [{ type: Host }] },
        { type: BsLocaleService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    return BsDaterangepickerInputDirective;
}());
export { BsDaterangepickerInputDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._validatorChange;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._picker;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._localeService;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInputDirective.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImJzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUVKLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGlCQUFpQixFQUdsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUVoRCxpQ0FBaUMsR0FBYTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLCtCQUErQixFQUEvQixDQUErQixFQUFDO0lBQzlELEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUssNEJBQTRCLEdBQWE7SUFDN0MsT0FBTyxFQUFFLGFBQWE7O0lBRXRCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsK0JBQStCLEVBQS9CLENBQStCLEVBQUM7SUFDOUQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUdEO0lBa0JFLHlDQUE0QixPQUFtQyxFQUMzQyxjQUErQixFQUMvQixTQUFvQixFQUNwQixNQUFrQixFQUNsQixlQUFrQztRQUp0RCxpQkFvQkM7UUFwQjJCLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBVjlDLGNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDOztRQUVoQyxxQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBUTVDLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ2pELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtZQUNELEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUM7WUFDekMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdEQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7OztJQUVELHdEQUFjOzs7O0lBQWQsVUFBZSxJQUFZOztZQUNyQixLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUksSUFBSSxFQUFFOztnQkFDRixLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQ2xDOztnQkFDRyxHQUFHLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxVQUFVLENBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDbEM7WUFDSCxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDakY7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxrREFBUTs7OztJQUFSLFVBQVMsS0FBWTtRQUNuQixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsa0RBQVE7Ozs7SUFBUixVQUFTLENBQWtCOztZQUNuQixNQUFNLEdBQWlCLENBQUMsQ0FBQyxLQUFLOztZQUM5QixNQUFNLEdBQWEsRUFBRTtRQUUzQixJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsYUFBYTtRQUNiLE1BQU0sQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFDLENBQUM7O1lBRXZCLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQzFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RCLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtZQUM3RixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzVGLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELG1FQUF5Qjs7OztJQUF6QixVQUEwQixFQUFjO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsS0FBc0I7UUFBakMsaUJBb0NDO1FBbkNDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjthQUFNOztnQkFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhOztnQkFDOUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixNQUFNLElBQUksS0FBSyxDQUNiLGNBQVcsVUFBVSxnRUFBMEQsQ0FDaEYsQ0FBQzthQUNIOztnQkFFRyxNQUFNLEdBQXdCLEVBQUU7WUFDcEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzNEO1lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBWSxDQUFDO2lCQUMvQixHQUFHOzs7O1lBQUMsVUFBQyxJQUFZO2dCQUNkLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUMvQixPQUFPLFVBQVUsQ0FDZixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUN6RixDQUFDO2lCQUNIO2dCQUVELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRyxDQUFDLEVBQ0Y7aUJBQ0EsR0FBRzs7OztZQUFDLFVBQUMsSUFBVSxJQUFLLE9BQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwwREFBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRS9FLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxxQ0FBcUM7Ozs7OztJQUNyQywwREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLEVBQWM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFxQzs7Ozs7O0lBQ3JDLDJEQUFpQjs7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZ0RBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw4Q0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyRTtJQUNILENBQUM7O2dCQTFMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsSUFBSSxFQUFFO3dCQUNKLFVBQVUsRUFBRSxrQkFBa0I7d0JBQzlCLGFBQWEsRUFBRSxRQUFRO3dCQUN2QixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxRQUFRLEVBQUUsVUFBVTtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsNEJBQTRCLENBQUM7aUJBQzdFOzs7O2dCQTNCUSwwQkFBMEIsdUJBb0NwQixJQUFJO2dCQW5DVixlQUFlO2dCQXhCdEIsU0FBUztnQkFKVCxVQUFVO2dCQUZWLGlCQUFpQjs7SUEwT25CLHNDQUFDO0NBQUEsQUEzTEQsSUEyTEM7U0FqTFksK0JBQStCOzs7Ozs7SUFFMUMsb0RBQXVDOzs7OztJQUN2QyxxREFBd0M7Ozs7O0lBRXhDLDJEQUE4Qzs7Ozs7SUFDOUMsaURBQXVCOzs7OztJQUVYLGtEQUFtRDs7Ozs7SUFDbkQseURBQXVDOzs7OztJQUN2QyxvREFBNEI7Ozs7O0lBQzVCLGlEQUEwQjs7Ozs7SUFDMUIsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgUHJvdmlkZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gIHBhcnNlRGF0ZSxcbiAgZm9ybWF0RGF0ZSxcbiAgZ2V0TG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNBcnJheSxcbiAgaXNEYXRlVmFsaWQsXG4gIHV0Y0FzTG9jYWxcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XG5cbmNvbnN0IEJTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IEJTX0RBVEVSQU5HRVBJQ0tFUl9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW5wdXRbYnNEYXRlcmFuZ2VwaWNrZXJdYCxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bkV2ZW50KCRldmVudCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW0JTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC12YXJpYWJsZSAqL1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlW107XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9waWNrZXI6IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxuICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uS2V5ZG93bkV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRJbnB1dFZhbHVlKGRhdGU6IERhdGVbXSk6IHZvaWQge1xuICAgIGxldCByYW5nZSA9ICcnO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBzdGFydDogc3RyaW5nID0gIWRhdGVbMF0gPyAnJ1xuICAgICAgICA6IGZvcm1hdERhdGUoZGF0ZVswXSxcbiAgICAgICAgICB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZUlucHV0Rm9ybWF0LFxuICAgICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgICAgY29uc3QgZW5kOiBzdHJpbmcgPSAhZGF0ZVsxXSA/ICcnXG4gICAgICAgIDogZm9ybWF0RGF0ZShcbiAgICAgICAgICBkYXRlWzFdLFxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgICByYW5nZSA9IChzdGFydCAmJiBlbmQpID8gc3RhcnQgKyB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZVNlcGFyYXRvciArIGVuZCA6ICcnO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCByYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIGlmICh0aGlzLl9waWNrZXIuX2NvbmZpZy5yZXR1cm5Gb2N1c1RvSW5wdXQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IF92YWx1ZTogW0RhdGUsIERhdGVdID0gYy52YWx1ZTtcbiAgICBjb25zdCBlcnJvcnM6IG9iamVjdFtdID0gW107XG5cbiAgICBpZiAoX3ZhbHVlID09PSBudWxsIHx8IF92YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICFpc0FycmF5KF92YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBfdmFsdWUuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gICAgY29uc3QgX2lzRmlyc3REYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWVbMF0pO1xuICAgIGNvbnN0IF9pc1NlY29uZERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVsxXSk7XG5cbiAgICBpZiAoIV9pc0ZpcnN0RGF0ZVZhbGlkKSB7XG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzBdIH0gfTtcbiAgICB9XG5cbiAgICBpZiAoIV9pc1NlY29uZERhdGVWYWxpZCkge1xuICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZVsxXSB9IH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWVbMF0sIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XG4gICAgICBfdmFsdWVbMF0gPSB0aGlzLl9waWNrZXIubWluRGF0ZTtcbiAgICAgIGVycm9ycy5wdXNoKHsgYnNEYXRlOiB7IG1pbkRhdGU6IHRoaXMuX3BpY2tlci5taW5EYXRlIH0gfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZVsxXSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcbiAgICAgIF92YWx1ZVsxXSA9IHRoaXMuX3BpY2tlci5tYXhEYXRlO1xuICAgICAgZXJyb3JzLnB1c2goeyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9KTtcbiAgICB9XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUoX3ZhbHVlKTtcblxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsaWRhdG9yQ2hhbmdlID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlW10gfCBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IF9sb2NhbGVLZXkgPSB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGU7XG4gICAgICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKF9sb2NhbGVLZXkpO1xuICAgICAgaWYgKCFfbG9jYWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTG9jYWxlIFwiJHtfbG9jYWxlS2V5fVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBsZXQgX2lucHV0OiAoc3RyaW5nW10gfCBEYXRlW10pID0gW107XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBfaW5wdXQgPSB2YWx1ZS5zcGxpdCh0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZVNlcGFyYXRvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBfaW5wdXQgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9waWNrZXIuX2NvbmZpZy51c2VVdGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHV0Y0FzTG9jYWwoXG4gICAgICAgICAgICAgICAgcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VEYXRlKF92YWwsIHRoaXMuX3BpY2tlci5fY29uZmlnLmRhdGVJbnB1dEZvcm1hdCwgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuXG4gICAgaWYgKHRoaXMuX3BpY2tlci5fY29uZmlnLnJldHVybkZvY3VzVG9JbnB1dCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==