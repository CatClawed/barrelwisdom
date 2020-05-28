/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new BehaviorSubject(this.isOpen);
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the datepicker is currently being shown
         */
        get: /**
         * Returns whether or not the datepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isOpen$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isDestroy$ = new Subject();
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isOpen$.pipe(filter((/**
         * @param {?} isOpen
         * @return {?}
         */
        function (isOpen) { return isOpen !== _this.isOpen; })), takeUntil(this.isDestroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.toggle(); }));
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
            _this.hide();
        })));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _b = tslib_1.__values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
        this.isOpen$.next(false);
        if (this.isDestroy$) {
            this.isDestroy$.next();
            this.isDestroy$.complete();
        }
    };
    BsDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory }
    ]; };
    BsDatepickerDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        outsideClick: [{ type: Input }],
        container: [{ type: Input }],
        outsideEsc: [{ type: Input }],
        isOpen: [{ type: Input }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }],
        bsValue: [{ type: Input }],
        bsConfig: [{ type: Input }],
        isDisabled: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        minMode: [{ type: Input }],
        daysDisabled: [{ type: Input }],
        datesDisabled: [{ type: Input }],
        datesEnabled: [{ type: Input }],
        dateCustomClasses: [{ type: Input }],
        bsValueChange: [{ type: Output }]
    };
    return BsDatepickerDirective;
}());
export { BsDatepickerDirective };
if (false) {
    /**
     * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDatepickerDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDatepickerDirective.prototype.triggers;
    /**
     * Close datepicker on outside click
     * @type {?}
     */
    BsDatepickerDirective.prototype.outsideClick;
    /**
     * A selector specifying the element the datepicker should be appended to.
     * @type {?}
     */
    BsDatepickerDirective.prototype.container;
    /** @type {?} */
    BsDatepickerDirective.prototype.outsideEsc;
    /**
     * Emits an event when the datepicker is shown
     * @type {?}
     */
    BsDatepickerDirective.prototype.onShown;
    /**
     * Emits an event when the datepicker is hidden
     * @type {?}
     */
    BsDatepickerDirective.prototype.onHidden;
    /** @type {?} */
    BsDatepickerDirective.prototype._bsValue;
    /** @type {?} */
    BsDatepickerDirective.prototype.isOpen$;
    /** @type {?} */
    BsDatepickerDirective.prototype.isDestroy$;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker's content is enabled or not
     * @type {?}
     */
    BsDatepickerDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.maxDate;
    /**
     * Minimum view mode : day, month, or year
     * @type {?}
     */
    BsDatepickerDirective.prototype.minMode;
    /**
     * Disable Certain days in the week
     * @type {?}
     */
    BsDatepickerDirective.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerDirective.prototype.datesDisabled;
    /**
     * Enable specific dates
     * @type {?}
     */
    BsDatepickerDirective.prototype.datesEnabled;
    /**
     * Date custom classes
     * @type {?}
     */
    BsDatepickerDirective.prototype.dateCustomClasses;
    /**
     * Emits when datepicker value has been changed
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsValueChange;
    /**
     * @type {?}
     * @protected
     */
    BsDatepickerDirective.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDirective.prototype._datepicker;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDatepickerDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDUyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQ3JDLE1BQU0sRUFBRSxTQUFTLEVBQWlCLGdCQUFnQixFQUN0RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0YsT0FBTyxFQUFnQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQ7SUFnSEUsK0JBQW1CLE9BQTJCLEVBQ3pCLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQzdCLGlCQUFtQyxFQUNuQyxHQUEyQjtRQUpwQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7O1FBMUdoQyxjQUFTLEdBQXdDLFFBQVEsQ0FBQzs7Ozs7UUFLMUQsYUFBUSxHQUFHLE9BQU8sQ0FBQzs7OztRQUluQixpQkFBWSxHQUFHLElBQUksQ0FBQzs7OztRQUlwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7UUFrRmpCLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFVbkMscUNBQXFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQW5HRCxzQkFDSSx5Q0FBTTtRQUpWOztXQUVHOzs7OztRQUNIO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7OztRQUVELFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQXVCRCxzQkFDSSwwQ0FBTztRQUpYOztXQUVHOzs7Ozs7UUFDSCxVQUNZLEtBQVc7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDekUsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7SUFvRUQsd0NBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSTs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUE7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDekQsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQy9EO1FBRUQsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQy9EO1FBRUQsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNEO1FBRUQsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLEtBQUksQ0FBQyxNQUFNLEVBQXRCLENBQXNCLEVBQUMsRUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0I7YUFDQSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG9DQUFJOzs7OztJQUFKO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDbkMsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDOUQsTUFBTSxDQUFDLDhCQUE4QixDQUFDO2FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUM7YUFDdEMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBRXJDLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVc7WUFDdkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsOENBQThDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFXO1lBQzdELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxvQ0FBSTs7Ozs7SUFBSjs7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCOztZQUNELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF6QixJQUFNLEdBQUcsV0FBQTtnQkFDWixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkI7Ozs7Ozs7OztRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxzQ0FBTTs7Ozs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFTOzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1RCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCO1lBQzdGLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1lBQ2pGLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1NBQ2hFLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkE3UUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFOUSxrQkFBa0I7Z0JBUEEsVUFBVTtnQkFDUixTQUFTO2dCQUFpQixnQkFBZ0I7Z0JBRTdDLHNCQUFzQjs7OzRCQWU3QyxLQUFLOzJCQUtMLEtBQUs7K0JBSUwsS0FBSzs0QkFJTCxLQUFLOzZCQUVMLEtBQUs7eUJBS0wsS0FBSzswQkFhTCxNQUFNOzJCQUtOLE1BQU07MEJBUU4sS0FBSzsyQkFZTCxLQUFLOzZCQUlMLEtBQUs7MEJBSUwsS0FBSzswQkFJTCxLQUFLOzBCQUtMLEtBQUs7K0JBS0wsS0FBSztnQ0FLTCxLQUFLOytCQUlMLEtBQUs7b0NBSUwsS0FBSztnQ0FJTCxNQUFNOztJQXFLVCw0QkFBQztDQUFBLEFBOVFELElBOFFDO1NBMVFZLHFCQUFxQjs7Ozs7O0lBSWhDLDBDQUFtRTs7Ozs7O0lBS25FLHlDQUE0Qjs7Ozs7SUFJNUIsNkNBQTZCOzs7OztJQUk3QiwwQ0FBNEI7O0lBRTVCLDJDQUEyQjs7Ozs7SUFrQjNCLHdDQUFxQzs7Ozs7SUFLckMseUNBQXNDOztJQUV0Qyx5Q0FBZTs7SUFDZix3Q0FBa0M7O0lBQ2xDLDJDQUEwQjs7Ozs7SUFnQjFCLHlDQUErQzs7Ozs7SUFJL0MsMkNBQTZCOzs7OztJQUk3Qix3Q0FBdUI7Ozs7O0lBSXZCLHdDQUF1Qjs7Ozs7SUFLdkIsd0NBQXVDOzs7OztJQUt2Qyw2Q0FBZ0M7Ozs7O0lBS2hDLDhDQUErQjs7Ozs7SUFJL0IsNkNBQThCOzs7OztJQUk5QixrREFBMEQ7Ozs7O0lBSTFELDhDQUFpRTs7Ozs7SUFFakUsc0NBQXFDOzs7OztJQUVyQyw0Q0FBcUU7Ozs7O0lBQ3JFLCtDQUFxRTs7SUFFekQsd0NBQWtDOzs7OztJQUNsQyw0Q0FBZ0M7Ozs7O0lBQ2hDLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZiwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSwgRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyXScsXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIGRhdGVwaWNrZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzID0gJ2NsaWNrJztcbiAgLyoqXG4gICAqIENsb3NlIGRhdGVwaWNrZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXBpY2tlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XG5cbiAgQElucHV0KCkgb3V0c2lkZUVzYyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VyLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW4kLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgc2hvd25cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBfYnNWYWx1ZTogRGF0ZTtcbiAgaXNPcGVuJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICBpc0Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+O1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlICYmIHZhbHVlICYmIHRoaXMuX2JzVmFsdWUuZ2V0VGltZSgpID09PSB2YWx1ZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gdmlldyBtb2RlIDogZGF5LCBtb250aCwgb3IgeWVhclxuICAgKi9cbiAgQElucHV0KCkgbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgQ2VydGFpbiBkYXlzIGluIHRoZSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKSBkYXlzRGlzYWJsZWQ6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbmFibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGVzRW5hYmxlZDogRGF0ZVtdO1xuICAvKipcbiAgICogRGF0ZSBjdXN0b20gY2xhc3Nlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuICAvKipcbiAgICogRW1pdHMgd2hlbiBkYXRlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kYXRlcGlja2VyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2RhdGVwaWNrZXIub25IaWRkZW47XG4gICAgdGhpcy5pc09wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmlzT3Blbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRheXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXlzRGlzYWJsZWQgPSB0aGlzLmRheXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNFbmFibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRW5hYmxlZCA9IHRoaXMuZGF0ZXNFbmFibGVkO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlQ3VzdG9tQ2xhc3Nlcykge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlQ3VzdG9tQ2xhc3NlcyA9IHRoaXMuZGF0ZUN1c3RvbUNsYXNzZXM7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuJC5waXBlKFxuICAgICAgZmlsdGVyKGlzT3BlbiA9PiBpc09wZW4gIT09IHRoaXMuaXNPcGVuKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmlzRGVzdHJveSQpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJldHVybkZvY3VzVG9JbnB1dCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nXG4gICAqIG9mIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgZGF5c0Rpc2FibGVkOiB0aGlzLmRheXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF5c0Rpc2FibGVkLFxuICAgICAgZGF0ZUN1c3RvbUNsYXNzZXM6IHRoaXMuZGF0ZUN1c3RvbUNsYXNzZXMgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVDdXN0b21DbGFzc2VzLFxuICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkLFxuICAgICAgZGF0ZXNFbmFibGVkOiB0aGlzLmRhdGVzRW5hYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNFbmFibGVkLFxuICAgICAgbWluTW9kZTogdGhpcy5taW5Nb2RlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5Nb2RlXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmlzT3BlbiQubmV4dChmYWxzZSk7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95JCkge1xuICAgICAgdGhpcy5pc0Rlc3Ryb3kkLm5leHQoKTtcbiAgICAgIHRoaXMuaXNEZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19