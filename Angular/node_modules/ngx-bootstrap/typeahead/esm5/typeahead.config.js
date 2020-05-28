/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Default values provider for typeahead
 */
var TypeaheadConfig = /** @class */ (function () {
    function TypeaheadConfig() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * if true, typeahead will cancel async request on blur
         */
        this.cancelRequestOnFocusLost = false;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
    TypeaheadConfig.decorators = [
        { type: Injectable }
    ];
    return TypeaheadConfig;
}());
export { TypeaheadConfig };
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadConfig.prototype.adaptivePosition;
    /**
     * turn on/off animation
     * @type {?}
     */
    TypeaheadConfig.prototype.isAnimated;
    /**
     * used to hide results on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.hideResultsOnBlur;
    /**
     * if true, typeahead will cancel async request on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.cancelRequestOnFocusLost;
    /**
     * used to choose the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.selectFirstItem;
    /**
     * used to active/inactive the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.isFirstItemActive;
    /**
     * used to choose set minimal no of characters that needs to
     * be entered before typeahead kicks-in
     * @type {?}
     */
    TypeaheadConfig.prototype.minLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUczQztJQUFBOzs7O1FBR0UscUJBQWdCLEdBQUcsS0FBSyxDQUFDOzs7O1FBRXpCLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFFbkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDOzs7O1FBRXpCLDZCQUF3QixHQUFHLEtBQUssQ0FBQzs7OztRQUVqQyxvQkFBZSxHQUFHLElBQUksQ0FBQzs7OztRQUV2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7O1FBSXpCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Z0JBbEJBLFVBQVU7O0lBa0JYLHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksZUFBZTs7Ozs7O0lBRTFCLDJDQUF5Qjs7Ozs7SUFFekIscUNBQW1COzs7OztJQUVuQiw0Q0FBeUI7Ozs7O0lBRXpCLG1EQUFpQzs7Ozs7SUFFakMsMENBQXVCOzs7OztJQUV2Qiw0Q0FBeUI7Ozs7OztJQUl6QixvQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0eXBlYWhlYWQgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb25maWcge1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHRzIG9uIGJsdXIgKi9cbiAgaGlkZVJlc3VsdHNPbkJsdXIgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSwgdHlwZWFoZWFkIHdpbGwgY2FuY2VsIGFzeW5jIHJlcXVlc3Qgb24gYmx1ciAqL1xuICBjYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3QgPSBmYWxzZTtcbiAgLyoqIHVzZWQgdG8gY2hvb3NlIHRoZSBmaXJzdCBpdGVtIGluIHR5cGVhaGVhZCBjb250YWluZXIgKi9cbiAgc2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcbiAgLyoqIHVzZWQgdG8gYWN0aXZlL2luYWN0aXZlIHRoZSBmaXJzdCBpdGVtIGluIHR5cGVhaGVhZCBjb250YWluZXIgKi9cbiAgaXNGaXJzdEl0ZW1BY3RpdmUgPSB0cnVlO1xuICAvKiogdXNlZCB0byBjaG9vc2Ugc2V0IG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvXG4gICAqIGJlIGVudGVyZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pblxuICAgKi9cbiAgbWluTGVuZ3RoID0gMTtcbn1cbiJdfQ==