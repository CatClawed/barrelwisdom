/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Default values provider for typeahead
 */
export class TypeaheadConfig {
    constructor() {
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
}
TypeaheadConfig.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUQ1Qjs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixlQUFVLEdBQUcsS0FBSyxDQUFDOzs7O1FBRW5CLHNCQUFpQixHQUFHLElBQUksQ0FBQzs7OztRQUV6Qiw2QkFBd0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFFakMsb0JBQWUsR0FBRyxJQUFJLENBQUM7Ozs7UUFFdkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDOzs7OztRQUl6QixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OztZQWxCQSxVQUFVOzs7Ozs7O0lBR1QsMkNBQXlCOzs7OztJQUV6QixxQ0FBbUI7Ozs7O0lBRW5CLDRDQUF5Qjs7Ozs7SUFFekIsbURBQWlDOzs7OztJQUVqQywwQ0FBdUI7Ozs7O0lBRXZCLDRDQUF5Qjs7Ozs7O0lBSXpCLG9DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCB2YWx1ZXMgcHJvdmlkZXIgZm9yIHR5cGVhaGVhZCAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbmZpZyB7XG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdHMgb24gYmx1ciAqL1xuICBoaWRlUmVzdWx0c09uQmx1ciA9IHRydWU7XG4gIC8qKiBpZiB0cnVlLCB0eXBlYWhlYWQgd2lsbCBjYW5jZWwgYXN5bmMgcmVxdWVzdCBvbiBibHVyICovXG4gIGNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCA9IGZhbHNlO1xuICAvKiogdXNlZCB0byBjaG9vc2UgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBzZWxlY3RGaXJzdEl0ZW0gPSB0cnVlO1xuICAvKiogdXNlZCB0byBhY3RpdmUvaW5hY3RpdmUgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBpc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSBzZXQgbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG9cbiAgICogYmUgZW50ZXJlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXG4gICAqL1xuICBtaW5MZW5ndGggPSAxO1xufVxuIl19