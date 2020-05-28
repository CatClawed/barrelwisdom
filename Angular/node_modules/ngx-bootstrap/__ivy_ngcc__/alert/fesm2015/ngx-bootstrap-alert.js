import { __decorate, __metadata } from 'tslib';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { OnChange } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(2); return ctx_r2.close(); });
    ɵngcc0.ɵɵelementStart(1, "span", 3);
    ɵngcc0.ɵɵtext(2, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 4);
    ɵngcc0.ɵɵtext(4, "Close");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap("alert alert-" + ctx_r0.type);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.classes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.dismissible);
} }
const _c0 = ["*"];
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
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
AlertConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AlertConfig, factory: AlertConfig.ɵfac });
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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(ɵngcc0.ɵɵdirectiveInject(AlertConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", isOpen: "isOpen", dismissOnTimeout: "dismissOnTimeout" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: ɵngcc0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }], dismissOnTimeout: [{
            type: Input
        }] }); })();
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
AlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AlertComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
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

export { AlertComponent, AlertConfig, AlertModule };

//# sourceMappingURL=ngx-bootstrap-alert.js.map