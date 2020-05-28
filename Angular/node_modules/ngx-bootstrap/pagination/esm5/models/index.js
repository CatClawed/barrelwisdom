/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ConfigModel() { }
if (false) {
    /** @type {?|undefined} */
    ConfigModel.prototype.align;
    /** @type {?} */
    ConfigModel.prototype.boundaryLinks;
    /** @type {?} */
    ConfigModel.prototype.directionLinks;
    /** @type {?} */
    ConfigModel.prototype.firstText;
    /** @type {?} */
    ConfigModel.prototype.itemsPerPage;
    /** @type {?} */
    ConfigModel.prototype.lastText;
    /** @type {?} */
    ConfigModel.prototype.maxSize;
    /** @type {?} */
    ConfigModel.prototype.nextText;
    /** @type {?} */
    ConfigModel.prototype.pageBtnClass;
    /** @type {?} */
    ConfigModel.prototype.previousText;
    /** @type {?} */
    ConfigModel.prototype.rotate;
}
/**
 * Contain information about the page
 * @record
 */
export function PagesModel() { }
if (false) {
    /**
     * Text, which is displayed in the link
     * @type {?}
     */
    PagesModel.prototype.text;
    /**
     * Page number
     * @type {?}
     */
    PagesModel.prototype.number;
    /**
     * If `true`, then this is the current page
     * @type {?}
     */
    PagesModel.prototype.active;
}
/**
 * @record
 */
export function PagerModel() { }
if (false) {
    /** @type {?} */
    PagerModel.prototype.itemsPerPage;
    /** @type {?} */
    PagerModel.prototype.previousText;
    /** @type {?} */
    PagerModel.prototype.nextText;
    /** @type {?} */
    PagerModel.prototype.pageBtnClass;
    /** @type {?} */
    PagerModel.prototype.align;
}
/**
 * A context for the
 * * `customPageTemplate`
 * * `customNextTemplate`
 * * `customPreviousTemplate`
 * * `customFirstTemplate`
 * * `customLastTemplate`
 * inputs for link templates in case you want to override one
 * @record
 */
export function PaginationLinkContext() { }
if (false) {
    /**
     * The currently selected page number
     * @type {?}
     */
    PaginationLinkContext.prototype.currentPage;
    /**
     * If `true`, the current link is disabled
     * @type {?}
     */
    PaginationLinkContext.prototype.disabled;
}
/**
 * A context for the `pageTemplate` inputs for link template
 * @record
 */
export function PaginationNumberLinkContext() { }
if (false) {
    /**
     * Contain the page information
     * @type {?}
     */
    PaginationNumberLinkContext.prototype.$implicit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlDQVlDOzs7SUFYQyw0QkFBZ0I7O0lBQ2hCLG9DQUF1Qjs7SUFDdkIscUNBQXdCOztJQUN4QixnQ0FBa0I7O0lBQ2xCLG1DQUFxQjs7SUFDckIsK0JBQWlCOztJQUNqQiw4QkFBZ0I7O0lBQ2hCLCtCQUFpQjs7SUFDakIsbUNBQXFCOztJQUNyQixtQ0FBcUI7O0lBQ3JCLDZCQUFnQjs7Ozs7O0FBS2xCLGdDQU9DOzs7Ozs7SUFMQywwQkFBYTs7Ozs7SUFFYiw0QkFBZTs7Ozs7SUFFZiw0QkFBZ0I7Ozs7O0FBR2xCLGdDQU1DOzs7SUFMQyxrQ0FBcUI7O0lBQ3JCLGtDQUFxQjs7SUFDckIsOEJBQWlCOztJQUNqQixrQ0FBcUI7O0lBQ3JCLDJCQUFlOzs7Ozs7Ozs7Ozs7QUFZakIsMkNBS0M7Ozs7OztJQUhDLDRDQUFvQjs7Ozs7SUFFcEIseUNBQWtCOzs7Ozs7QUFNcEIsaURBR0M7Ozs7OztJQURDLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnTW9kZWwge1xuICBhbGlnbj86IGJvb2xlYW47XG4gIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XG4gIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuICBmaXJzdFRleHQ6IHN0cmluZztcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIGxhc3RUZXh0OiBzdHJpbmc7XG4gIG1heFNpemU6IG51bWJlcjtcbiAgbmV4dFRleHQ6IHN0cmluZztcbiAgcGFnZUJ0bkNsYXNzOiBzdHJpbmc7XG4gIHByZXZpb3VzVGV4dDogc3RyaW5nO1xuICByb3RhdGU6IGJvb2xlYW47XG59XG4vKipcbiAqIENvbnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlc01vZGVsIHtcbiAgLyoqIFRleHQsIHdoaWNoIGlzIGRpc3BsYXllZCBpbiB0aGUgbGluayAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiBQYWdlIG51bWJlciAqL1xuICBudW1iZXI6IG51bWJlcjtcbiAgLyoqIElmIGB0cnVlYCwgdGhlbiB0aGlzIGlzIHRoZSBjdXJyZW50IHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VyTW9kZWwge1xuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJldmlvdXNUZXh0OiBzdHJpbmc7XG4gIG5leHRUZXh0OiBzdHJpbmc7XG4gIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xuICBhbGlnbjogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZVxuICogKiBgY3VzdG9tUGFnZVRlbXBsYXRlYFxuICogKiBgY3VzdG9tTmV4dFRlbXBsYXRlYFxuICogKiBgY3VzdG9tUHJldmlvdXNUZW1wbGF0ZWBcbiAqICogYGN1c3RvbUZpcnN0VGVtcGxhdGVgXG4gKiAqIGBjdXN0b21MYXN0VGVtcGxhdGVgXG4gKiBpbnB1dHMgZm9yIGxpbmsgdGVtcGxhdGVzIGluIGNhc2UgeW91IHdhbnQgdG8gb3ZlcnJpZGUgb25lXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkxpbmtDb250ZXh0IHtcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcGFnZSBudW1iZXIgKi9cbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgLyoqIElmIGB0cnVlYCwgdGhlIGN1cnJlbnQgbGluayBpcyBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZSBgcGFnZVRlbXBsYXRlYCBpbnB1dHMgZm9yIGxpbmsgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uTnVtYmVyTGlua0NvbnRleHQgZXh0ZW5kcyBQYWdpbmF0aW9uTGlua0NvbnRleHQge1xuICAvKiogQ29udGFpbiB0aGUgcGFnZSBpbmZvcm1hdGlvbiAqL1xuICAkaW1wbGljaXQ6IFBhZ2VzTW9kZWw7XG59XG4iXX0=