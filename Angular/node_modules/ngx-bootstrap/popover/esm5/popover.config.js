/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
    PopoverConfig.decorators = [
        { type: Injectable }
    ];
    return PopoverConfig;
}());
export { PopoverConfig };
if (false) {
    /**
     * sets disable adaptive position
     * @type {?}
     */
    PopoverConfig.prototype.adaptivePosition;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     * @type {?}
     */
    PopoverConfig.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverConfig.prototype.triggers;
    /** @type {?} */
    PopoverConfig.prototype.outsideClick;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     */
    PopoverConfig.prototype.container;
    /**
     * delay before showing the tooltip
     * @type {?}
     */
    PopoverConfig.prototype.delay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVEzQztJQUFBOzs7O1FBR0UscUJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7O1FBSXhCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7O1FBS2xCLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFFbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7Ozs7UUFNckIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7O2dCQXJCQSxVQUFVOztJQXFCWCxvQkFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLGFBQWE7Ozs7OztJQUV4Qix5Q0FBd0I7Ozs7O0lBSXhCLGtDQUFrQjs7Ozs7O0lBS2xCLGlDQUFtQjs7SUFFbkIscUNBQXFCOzs7OztJQUlyQixrQ0FBa0I7Ozs7O0lBRWxCLDhCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFBvcG92ZXIgZGlyZWN0aXZlLlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZVxuICogdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpbiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlXG4gKiBwb3BvdmVycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb25maWcge1xuICAvKiogc2V0cyBkaXNhYmxlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIGFkYXB0aXZlUG9zaXRpb24gPSB0cnVlO1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJhdXRvXCJcbiAgICovXG4gIHBsYWNlbWVudCA9ICd0b3AnO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgdHJpZ2dlcnMgPSAnY2xpY2snO1xuXG4gIG91dHNpZGVDbGljayA9IGZhbHNlO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIGNvbnRhaW5lcjogc3RyaW5nO1xuICAvKiogZGVsYXkgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXAgKi9cbiAgZGVsYXkgPSAwO1xufVxuIl19