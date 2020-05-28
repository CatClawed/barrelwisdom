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
export class PopoverConfig {
    constructor() {
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
}
PopoverConfig.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVMzQyxNQUFNLE9BQU8sYUFBYTtJQUQxQjs7OztRQUdFLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7OztRQUl4QixjQUFTLEdBQUcsS0FBSyxDQUFDOzs7OztRQUtsQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBRW5CLGlCQUFZLEdBQUcsS0FBSyxDQUFDOzs7O1FBTXJCLFVBQUssR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDOzs7WUFyQkEsVUFBVTs7Ozs7OztJQUdULHlDQUF3Qjs7Ozs7SUFJeEIsa0NBQWtCOzs7Ozs7SUFLbEIsaUNBQW1COztJQUVuQixxQ0FBcUI7Ozs7O0lBSXJCLGtDQUFrQjs7Ozs7SUFFbEIsOEJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgUG9wb3ZlciBkaXJlY3RpdmUuXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplXG4gKiB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGVcbiAqIHBvcG92ZXJzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbmZpZyB7XG4gIC8qKiBzZXRzIGRpc2FibGUgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgYWRhcHRpdmVQb3NpdGlvbiA9IHRydWU7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImF1dG9cIlxuICAgKi9cbiAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICB0cmlnZ2VycyA9ICdjbGljayc7XG5cbiAgb3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKi9cbiAgY29udGFpbmVyOiBzdHJpbmc7XG4gIC8qKiBkZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcCAqL1xuICBkZWxheSA9IDA7XG59XG4iXX0=