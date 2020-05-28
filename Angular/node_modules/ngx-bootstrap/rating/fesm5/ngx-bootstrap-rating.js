import { Injectable, forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for rating
 */
var RatingConfig = /** @class */ (function () {
    function RatingConfig() {
        /**
         * aria label for rating
         */
        this.ariaLabel = 'rating';
    }
    RatingConfig.decorators = [
        { type: Injectable }
    ];
    return RatingConfig;
}());
if (false) {
    /**
     * aria label for rating
     * @type {?}
     */
    RatingConfig.prototype.ariaLabel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return RatingComponent; })),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(changeDetection, config) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new EventEmitter();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RatingComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.writeValue = 
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.value = Math.round(this.preValue);
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.rate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    RatingComponent.prototype.buildTemplateObjects = /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    function (max) {
        /** @type {?} */
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: RatingConfig }
    ]; };
    RatingComponent.propDecorators = {
        max: [{ type: Input }],
        readonly: [{ type: Input }],
        titles: [{ type: Input }],
        customTemplate: [{ type: Input }],
        onHover: [{ type: Output }],
        onLeave: [{ type: Output }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return RatingComponent;
}());
if (false) {
    /**
     * number of icons
     * @type {?}
     */
    RatingComponent.prototype.max;
    /**
     * if true will not react on any user events
     * @type {?}
     */
    RatingComponent.prototype.readonly;
    /**
     * array of icons titles, default: (["one", "two", "three", "four", "five"])
     * @type {?}
     */
    RatingComponent.prototype.titles;
    /**
     * custom template for icons
     * @type {?}
     */
    RatingComponent.prototype.customTemplate;
    /**
     * fired when icon selected, $event:number equals to selected rating
     * @type {?}
     */
    RatingComponent.prototype.onHover;
    /**
     * fired when icon selected, $event:number equals to previous rating value
     * @type {?}
     */
    RatingComponent.prototype.onLeave;
    /** @type {?} */
    RatingComponent.prototype.onChange;
    /** @type {?} */
    RatingComponent.prototype.onTouched;
    /**
     * aria label for rating
     * @type {?}
     */
    RatingComponent.prototype.ariaLabel;
    /** @type {?} */
    RatingComponent.prototype.range;
    /** @type {?} */
    RatingComponent.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    RatingComponent.prototype.preValue;
    /**
     * @type {?}
     * @private
     */
    RatingComponent.prototype.changeDetection;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    /**
     * @return {?}
     */
    RatingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RatingModule,
            providers: [RatingConfig]
        };
    };
    RatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [RatingComponent],
                    exports: [RatingComponent]
                },] }
    ];
    return RatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { RatingComponent, RatingConfig, RatingModule, RATING_CONTROL_VALUE_ACCESSOR as ɵa };
//# sourceMappingURL=ngx-bootstrap-rating.js.map
