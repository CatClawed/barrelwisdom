/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { filter } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
var BsDaterangepickerInlineDirective = /** @class */ (function () {
    function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
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
    BsDaterangepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range && range[0] && !!range[1]; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            this.setConfig();
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerInlineDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'bs-daterangepicker-inline',
                    exportAs: 'bsDaterangepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerInlineConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory }
    ]; };
    BsDaterangepickerInlineDirective.propDecorators = {
        bsValue: [{ type: Input }],
        bsConfig: [{ type: Input }],
        isDisabled: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        dateCustomClasses: [{ type: Input }],
        daysDisabled: [{ type: Input }],
        datesDisabled: [{ type: Input }],
        datesEnabled: [{ type: Input }],
        bsValueChange: [{ type: Output }]
    };
    return BsDaterangepickerInlineDirective;
}());
export { BsDaterangepickerInlineDirective };
if (false) {
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker is enabled or not
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.maxDate;
    /**
     * Date custom classes
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.dateCustomClasses;
    /**
     * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.datesDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.datesEnabled;
    /**
     * Emits when daterangepicker value has been changed
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsValueChange;
    /**
     * @type {?}
     * @protected
     */
    BsDaterangepickerInlineDirective.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepicker;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNTLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBaUIsZ0JBQWdCLEVBQ3RFLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd6RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHdEg7SUE0REksMENBQ1MsT0FBc0MsRUFDckMsV0FBdUIsRUFDL0IsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O1FBVHZCLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFZbkMscUNBQXFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7SUFDSixDQUFDO0lBakVELHNCQUNJLHFEQUFPO1FB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QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDOUQsTUFBTSxDQUFDLHlDQUF5QyxDQUFDO2FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BCLElBQUksRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBeEtKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUseUJBQXlCO2lCQUN0Qzs7OztnQkFQUSw2QkFBNkI7Z0JBVlgsVUFBVTtnQkFDUixTQUFTO2dCQUFpQixnQkFBZ0I7Z0JBRzdDLHNCQUFzQjs7OzBCQW1CM0MsS0FBSzsyQkFZTCxLQUFLOzZCQUlMLEtBQUs7MEJBSUwsS0FBSzswQkFJTCxLQUFLO29DQUlMLEtBQUs7K0JBSUwsS0FBSztnQ0FJTCxLQUFLOytCQUlMLEtBQUs7Z0NBSUwsTUFBTTs7SUFvSFgsdUNBQUM7Q0FBQSxBQXpLRCxJQXlLQztTQXJLWSxnQ0FBZ0M7OztJQUN6QyxvREFBaUI7Ozs7O0lBZ0JqQixvREFBMEQ7Ozs7O0lBSTFELHNEQUE2Qjs7Ozs7SUFJN0IsbURBQXVCOzs7OztJQUl2QixtREFBdUI7Ozs7O0lBSXZCLDZEQUEwRDs7Ozs7SUFJMUQsd0RBQWlDOzs7OztJQUlqQyx5REFBK0I7Ozs7O0lBSS9CLHdEQUE4Qjs7Ozs7SUFJOUIseURBQW1FOzs7OztJQUVuRSxpREFBcUM7Ozs7O0lBRXJDLHVEQUFnRjs7Ozs7SUFDaEYsMERBQWdGOztJQUc5RSxtREFBNkM7Ozs7O0lBQzdDLHVEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyB9IGZyb20gJy4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdicy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lJyxcbiAgICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VySW5saW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlcklubGluZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIF9ic1ZhbHVlOiBEYXRlW107XG4gICAgLyoqXG4gICAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbmZpZz47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlciBpcyBlbmFibGVkIG9yIG5vdFxuICAgICAqL1xuICAgIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAgICovXG4gICAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICAgIC8qKlxuICAgICAqIERhdGUgY3VzdG9tIGNsYXNzZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRlQ3VzdG9tQ2xhc3NlczogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW107XG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXlzLCBlLmcuIFswLDZdIHdpbGwgZGlzYWJsZSBhbGwgU2F0dXJkYXlzIGFuZCBTdW5kYXlzXG4gICAgICovXG4gICAgQElucHV0KCkgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAgICovXG4gICAgQElucHV0KCkgZGF0ZXNFbmFibGVkOiBEYXRlW107XG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiBkYXRlcmFuZ2VwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG4gICAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIF9jb25maWc6IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnlcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBfcmVuZGVyZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG5cbiAgICAgICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgICAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxuICAgICAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChyYW5nZTogRGF0ZVtdKSA9PiByYW5nZSAmJiByYW5nZVswXSAmJiAhIXJhbmdlWzFdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgICAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5kYXRlc0VuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRW5hYmxlZCA9IHRoaXMuZGF0ZXNFbmFibGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF5c0Rpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXlzRGlzYWJsZWQgPSB0aGlzLmRheXNEaXNhYmxlZDtcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0ZUN1c3RvbUNsYXNzZXMpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVDdXN0b21DbGFzc2VzID0gdGhpcy5kYXRlQ3VzdG9tQ2xhc3NlcztcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxuICAgICAqL1xuICAgIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLl9kYXRlcGlja2VyKSB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICAgIGRheXNEaXNhYmxlZDogdGhpcy5kYXlzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRheXNEaXNhYmxlZCxcbiAgICAgICAgZGF0ZUN1c3RvbUNsYXNzZXM6IHRoaXMuZGF0ZUN1c3RvbUNsYXNzZXMgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVDdXN0b21DbGFzc2VzLFxuICAgICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWQsXG4gICAgICAgIGRhdGVzRW5hYmxlZDogdGhpcy5kYXRlc0VuYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRW5hYmxlZCxcbiAgICAgICAgcmFuZ2VzOiB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcucmFuZ2VzXG4gICAgICB9KTtcblxuXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxuICAgICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgICAgLmF0dGFjaChCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuX2VsZW1lbnRSZWYpXG4gICAgICAgIC5zaG93KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbiJdfQ==