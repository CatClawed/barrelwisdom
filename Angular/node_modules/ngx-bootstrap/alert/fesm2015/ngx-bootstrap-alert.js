import { __decorate, __metadata } from 'tslib';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { OnChange } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertConfig {
    constructor() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * default alert type
     * @type {?}
     */
    AlertConfig.prototype.type;
    /**
     * is alerts are dismissible by default
     * @type {?}
     */
    AlertConfig.prototype.dismissible;
    /**
     * default time before alert will dismiss
     * @type {?}
     */
    AlertConfig.prototype.dismissOnTimeout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    /**
     * @param {?} _config
     * @param {?} changeDetection
     */
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        (dismissible) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            () => this.close()), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: AlertConfig },
    { type: ChangeDetectorRef }
];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    dismissible: [{ type: Input }],
    dismissOnTimeout: [{ type: Input }],
    isOpen: [{ type: Input }],
    onClose: [{ type: Output }],
    onClosed: [{ type: Output }]
};
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
if (false) {
    /**
     * Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     * @type {?}
     */
    AlertComponent.prototype.type;
    /**
     * If set, displays an inline "Close" button
     * @type {?}
     */
    AlertComponent.prototype.dismissible;
    /**
     * Number in milliseconds, after which alert will be closed
     * @type {?}
     */
    AlertComponent.prototype.dismissOnTimeout;
    /**
     * Is alert visible
     * @type {?}
     */
    AlertComponent.prototype.isOpen;
    /**
     * This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     * @type {?}
     */
    AlertComponent.prototype.onClose;
    /**
     * This event fires when alert closed, $event is an instance of Alert component
     * @type {?}
     */
    AlertComponent.prototype.onClosed;
    /** @type {?} */
    AlertComponent.prototype.classes;
    /** @type {?} */
    AlertComponent.prototype.dismissibleChange;
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.changeDetection;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    }
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AlertComponent, AlertConfig, AlertModule };
//# sourceMappingURL=ngx-bootstrap-alert.js.map
