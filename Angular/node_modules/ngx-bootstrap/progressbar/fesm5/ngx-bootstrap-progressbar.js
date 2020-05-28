import { Injectable, Component, Input, HostBinding, ElementRef, Host, Renderer2, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarConfig = /** @class */ (function () {
    function ProgressbarConfig() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: Injectable }
    ];
    return ProgressbarConfig;
}());
if (false) {
    /**
     * if `true` changing value of progress bar will be animated
     * @type {?}
     */
    ProgressbarConfig.prototype.animate;
    /**
     * maximum total value of progress element
     * @type {?}
     */
    ProgressbarConfig.prototype.max;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "animate", {
        /** if `true` changing value of progress bar will be animated */
        set: /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = value;
            this.bars.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                b.animate = value;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "striped", {
        /** If `true`, striped classes are applied */
        set: /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._striped = value;
            this.bars.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                b.striped = value;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach((/**
             * @param {?} bar
             * @return {?}
             */
            function (bar) {
                bar.recalculatePercentage();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        striped: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
    return ProgressbarComponent;
}());
if (false) {
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /** @type {?} */
    ProgressbarComponent.prototype.isStacked;
    /** @type {?} */
    ProgressbarComponent.prototype._striped;
    /** @type {?} */
    ProgressbarComponent.prototype._animate;
    /** @type {?} */
    ProgressbarComponent.prototype._value;
    /** @type {?} */
    ProgressbarComponent.prototype.addClass;
    /** @type {?} */
    ProgressbarComponent.prototype.bars;
    /**
     * @type {?}
     * @protected
     */
    ProgressbarComponent.prototype._max;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?
var BarComponent = /** @class */ (function () {
    function BarComponent(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "type", {
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        get: /**
         * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._type = v;
            this.applyTypeClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        var totalPercentage = this.progress.bars
            .reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BarComponent.prototype.applyTypeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._prevType) {
            /** @type {?} */
            var barTypeClass = "progress-bar-" + this._prevType;
            /** @type {?} */
            var bgClass = "bg-" + this._prevType;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this._type) {
            /** @type {?} */
            var barTypeClass = "progress-bar-" + this._type;
            /** @type {?} */
            var bgClass = "bg-" + this._type;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this._type;
        }
    };
    BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content>\n",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                }] }
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ProgressbarComponent, decorators: [{ type: Host }] },
        { type: Renderer2 }
    ]; };
    BarComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }],
        setBarWidth: [{ type: HostBinding, args: ['style.width.%',] }],
        addClass: [{ type: HostBinding, args: ['class.progress-bar',] }]
    };
    return BarComponent;
}());
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /** @type {?} */
    BarComponent.prototype.addClass;
    /** @type {?} */
    BarComponent.prototype.striped;
    /** @type {?} */
    BarComponent.prototype.animate;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._value;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype._prevType;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    };
    ProgressbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [BarComponent, ProgressbarComponent],
                    exports: [BarComponent, ProgressbarComponent]
                },] }
    ];
    return ProgressbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };
//# sourceMappingURL=ngx-bootstrap-progressbar.js.map
