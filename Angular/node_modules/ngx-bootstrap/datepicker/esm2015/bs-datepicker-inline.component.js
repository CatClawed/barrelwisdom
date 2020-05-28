/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
export class BsDatepickerInlineDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setConfig();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.bsValue = value;
        })));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
        }
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerInlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'bs-datepicker-inline',
                exportAs: 'bsDatepickerInline'
            },] }
];
/** @nocollapse */
BsDatepickerInlineDirective.ctorParameters = () => [
    { type: BsDatepickerInlineConfig },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory }
];
BsDatepickerInlineDirective.propDecorators = {
    bsValue: [{ type: Input }],
    bsConfig: [{ type: Input }],
    isDisabled: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateCustomClasses: [{ type: Input }],
    datesEnabled: [{ type: Input }],
    datesDisabled: [{ type: Input }],
    bsValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker is enabled or not
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.maxDate;
    /**
     * Date custom classes
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.dateCustomClasses;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.datesEnabled;
    /**
     * Enable specific dates
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.datesDisabled;
    /**
     * Emits when datepicker value has been changed
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.bsValueChange;
    /**
     * @type {?}
     * @protected
     */
    BsDatepickerInlineDirective.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInlineDirective.prototype._datepicker;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInlineDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInlineDirective.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ1MsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFpQixnQkFBZ0IsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSXpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBTzVHLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7O0lBb0R0QyxZQUNTLE9BQWlDLEVBQ2hDLFdBQXVCLEVBQy9CLFNBQW9CLEVBQ3BCLGlCQUFtQyxFQUNuQyxHQUEyQjtRQUpwQixZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OztRQVR2QixrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBWW5DLHFDQUFxQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUNqQyxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBN0RELElBQ0ksT0FBTyxDQUFDLEtBQVc7UUFDckIsSUFBSSxJQUFJLENB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TUFBTTs7OztJQTVDUCwrQ0FBZTs7Ozs7SUFnQmYsK0NBQXFEOzs7OztJQUlyRCxpREFBNkI7Ozs7O0lBSTdCLDhDQUF1Qjs7Ozs7SUFJdkIsOENBQXVCOzs7OztJQUl2Qix3REFBMEQ7Ozs7O0lBSTFELG1EQUE4Qjs7Ozs7SUFJOUIsb0RBQStCOzs7OztJQUkvQixvREFBaUU7Ozs7O0lBRWpFLDRDQUFxQzs7Ozs7SUFFckMsa0RBQTJFOzs7OztJQUMzRSxxREFBMkU7O0lBR3pFLDhDQUF3Qzs7Ozs7SUFDeEMsa0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyB9IGZyb20gJy4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1pbmxpbmUnLFxuICBleHBvcnRBczogJ2JzRGF0ZXBpY2tlcklubGluZSdcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIF9ic1ZhbHVlOiBEYXRlO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcGlja2VyIGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICAvKipcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAvKipcbiAgICogRGF0ZSBjdXN0b20gY2xhc3Nlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZXNFbmFibGVkOiBEYXRlW107XG4gIC8qKlxuICAgKiBFbmFibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb25maWc6IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeVxuICApIHtcbiAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q29uZmlnKCk7XG5cbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0Rpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkO1xuICAgICAgdGhpcy5zZXRDb25maWcoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kYXRlc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNFbmFibGVkID0gdGhpcy5kYXRlc0VuYWJsZWQ7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdGhpcy5fYnNWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRhdGVDdXN0b21DbGFzc2VzKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVDdXN0b21DbGFzc2VzID0gdGhpcy5kYXRlQ3VzdG9tQ2xhc3NlcztcbiAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcikge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlci5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcbiAgICAgIGRhdGVDdXN0b21DbGFzc2VzOiB0aGlzLmRhdGVDdXN0b21DbGFzc2VzIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZCxcbiAgICAgIGRhdGVzRW5hYmxlZDogdGhpcy5kYXRlc0VuYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRW5hYmxlZFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXG4gICAgICAuYXR0YWNoKEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLl9lbGVtZW50UmVmKVxuICAgICAgLnNob3coKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==