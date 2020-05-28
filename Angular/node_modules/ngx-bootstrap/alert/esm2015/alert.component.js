/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
export class AlertComponent {
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
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxjQUFjOzs7OztJQXlCekIsWUFBWSxPQUFvQixFQUFVLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjs7Ozs7O1FBcEJuRSxTQUFJLEdBQUcsU0FBUyxDQUFDOzs7O1FBRUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7UUFLcEMsV0FBTSxHQUFHLElBQUksQ0FBQzs7Ozs7UUFLYixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7Ozs7UUFFN0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBR3hELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQixFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLHdFQUF3RTtZQUN4RSxVQUFVOzs7WUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQ2xCLFFBQVEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsZ0JBQWdCLEVBQVUsRUFBRSxFQUFFLENBQUMsQ0FDOUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7OztJQU9ELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsK2JBQXFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLFdBQVc7WUFQbEIsaUJBQWlCOzs7bUJBb0JoQixLQUFLOzBCQUVTLEtBQUs7K0JBRW5CLEtBQUs7cUJBR0wsS0FBSztzQkFLTCxNQUFNO3VCQUVOLE1BQU07O0FBWmtCO0lBQXhCLFFBQVEsRUFBRTs7bURBQWtDOzs7Ozs7OztJQUY3Qyw4QkFBMEI7Ozs7O0lBRTFCLHFDQUE2Qzs7Ozs7SUFFN0MsMENBQTJDOzs7OztJQUczQyxnQ0FBdUI7Ozs7OztJQUt2QixpQ0FBdUQ7Ozs7O0lBRXZELGtDQUF3RDs7SUFHeEQsaUNBQWE7O0lBQ2IsMkNBQWdEOzs7OztJQUVkLHlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29uZmlnIH0gZnJvbSAnLi9hbGVydC5jb25maWcnO1xuaW1wb3J0IHsgT25DaGFuZ2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWxlcnQsYnMtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBBbGVydCB0eXBlLlxuICAgKiBQcm92aWRlcyBvbmUgb2YgZm91ciBib290c3RyYXAgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczpcbiAgICogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCBhbmQgYGRhbmdlcmBcbiAgICovXG4gIEBJbnB1dCgpIHR5cGUgPSAnd2FybmluZyc7XG4gIC8qKiBJZiBzZXQsIGRpc3BsYXlzIGFuIGlubGluZSBcIkNsb3NlXCIgYnV0dG9uICovXG4gIEBPbkNoYW5nZSgpICAgQElucHV0KCkgICBkaXNtaXNzaWJsZSA9IGZhbHNlO1xuICAvKiogTnVtYmVyIGluIG1pbGxpc2Vjb25kcywgYWZ0ZXIgd2hpY2ggYWxlcnQgd2lsbCBiZSBjbG9zZWQgKi9cbiAgQElucHV0KCkgZGlzbWlzc09uVGltZW91dDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBJcyBhbGVydCB2aXNpYmxlICovXG4gIEBJbnB1dCgpIGlzT3BlbiA9IHRydWU7XG5cbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgY2xvc2UgaW5zdGFuY2UgbWV0aG9kIGlzIGNhbGxlZCxcbiAgICogJGV2ZW50IGlzIGFuIGluc3RhbmNlIG9mIEFsZXJ0IGNvbXBvbmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBhbGVydCBjbG9zZWQsICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oKTtcblxuXG4gIGNsYXNzZXMgPSAnJztcbiAgZGlzbWlzc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NvbmZpZzogQWxlcnRDb25maWcsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XG4gICAgdGhpcy5kaXNtaXNzaWJsZUNoYW5nZS5zdWJzY3JpYmUoKGRpc21pc3NpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLmRpc21pc3NpYmxlID8gJ2FsZXJ0LWRpc21pc3NpYmxlJyA6ICcnO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNtaXNzT25UaW1lb3V0KSB7XG4gICAgICAvLyBpZiBkaXNtaXNzT25UaW1lb3V0IHVzZWQgYXMgYXR0ciB3aXRob3V0IGJpbmRpbmcsIGl0IHdpbGwgYmUgYSBzdHJpbmdcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHRoaXMuY2xvc2UoKSxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5kaXNtaXNzT25UaW1lb3V0IGFzIHN0cmluZywgMTApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRvZG86IGFuaW1hdGlvbiBgIElmIHRoZSAuZmFkZSBhbmQgLmluIGNsYXNzZXMgYXJlIHByZXNlbnQgb24gdGhlIGVsZW1lbnQsXG4gIC8vIHRoZSBhbGVydCB3aWxsIGZhZGUgb3V0IGJlZm9yZSBpdCBpcyByZW1vdmVkYFxuICAvKipcbiAgICogQ2xvc2VzIGFuIGFsZXJ0IGJ5IHJlbW92aW5nIGl0IGZyb20gdGhlIERPTS5cbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xvc2UuZW1pdCh0aGlzKTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25DbG9zZWQuZW1pdCh0aGlzKTtcbiAgfVxufVxuIl19