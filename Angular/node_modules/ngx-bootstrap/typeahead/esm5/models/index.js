/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A context for the `optionsListTemplate`
 * input template in case you want to override default one
 * @record
 */
export function TypeaheadOptionListContext() { }
if (false) {
    /**
     * All matches
     * @type {?}
     */
    TypeaheadOptionListContext.prototype.matches;
    /**
     * Item template
     * @type {?}
     */
    TypeaheadOptionListContext.prototype.itemTemplate;
    /**
     * Search query
     * @type {?}
     */
    TypeaheadOptionListContext.prototype.query;
    /**
     * Typeahead template methods
     * @type {?}
     */
    TypeaheadOptionListContext.prototype.$implicit;
}
/**
 * A context for the `typeaheadItemTemplate`
 * input template in case you want to override default one
 * @record
 */
export function TypeaheadOptionItemContext() { }
if (false) {
    /**
     * Item
     * @type {?}
     */
    TypeaheadOptionItemContext.prototype.item;
    /**
     * Item index
     * @type {?}
     */
    TypeaheadOptionItemContext.prototype.index;
    /**
     * Typeahead match
     * @type {?}
     */
    TypeaheadOptionItemContext.prototype.match;
    /**
     * Search query
     * @type {?}
     */
    TypeaheadOptionItemContext.prototype.query;
}
/**
 * Methods for `optionsListTemplate` context
 * @record
 */
export function TypeaheadTemplateMethods() { }
if (false) {
    /**
     * Function to select an option by click event
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    TypeaheadTemplateMethods.prototype.selectMatch = function (value, e) { };
    /**
     * Function to select an option by mouseenter event
     * @param {?} value
     * @return {?}
     */
    TypeaheadTemplateMethods.prototype.selectActive = function (value) { };
    /**
     * Function to check if an option is active
     * @param {?} value
     * @return {?}
     */
    TypeaheadTemplateMethods.prototype.isActive = function (value) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbIm1vZGVscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFRQSxnREFTQzs7Ozs7O0lBUEMsNkNBQTBCOzs7OztJQUUxQixrREFBc0Q7Ozs7O0lBRXRELDJDQUF5Qjs7Ozs7SUFFekIsK0NBQW9DOzs7Ozs7O0FBT3RDLGdEQVNDOzs7Ozs7SUFQQywwQ0FBVTs7Ozs7SUFFViwyQ0FBYzs7Ozs7SUFFZCwyQ0FBc0I7Ozs7O0lBRXRCLDJDQUF5Qjs7Ozs7O0FBTTNCLDhDQU9DOzs7Ozs7OztJQUxDLHlFQUFvRDs7Ozs7O0lBRXBELHVFQUEwQzs7Ozs7O0lBRTFDLG1FQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi4vdHlwZWFoZWFkLW1hdGNoLmNsYXNzJztcblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZSBgb3B0aW9uc0xpc3RUZW1wbGF0ZWBcbiAqIGlucHV0IHRlbXBsYXRlIGluIGNhc2UgeW91IHdhbnQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBvbmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRPcHRpb25MaXN0Q29udGV4dCB7XG4gIC8qKiBBbGwgbWF0Y2hlcyAqL1xuICBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdO1xuICAvKiogSXRlbSB0ZW1wbGF0ZSAqL1xuICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0PjtcbiAgLyoqIFNlYXJjaCBxdWVyeSAqL1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG4gIC8qKiBUeXBlYWhlYWQgdGVtcGxhdGUgbWV0aG9kcyAqL1xuICAkaW1wbGljaXQ6IFR5cGVhaGVhZFRlbXBsYXRlTWV0aG9kcztcbn1cblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZSBgdHlwZWFoZWFkSXRlbVRlbXBsYXRlYFxuICogaW5wdXQgdGVtcGxhdGUgaW4gY2FzZSB5b3Ugd2FudCB0byBvdmVycmlkZSBkZWZhdWx0IG9uZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0IHtcbiAgLyoqIEl0ZW0gKi9cbiAgaXRlbTogYW55O1xuICAvKiogSXRlbSBpbmRleCAqL1xuICBpbmRleDogbnVtYmVyO1xuICAvKiogVHlwZWFoZWFkIG1hdGNoICovXG4gIG1hdGNoOiBUeXBlYWhlYWRNYXRjaDtcbiAgLyoqIFNlYXJjaCBxdWVyeSAqL1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG59XG5cbi8qKlxuICogTWV0aG9kcyBmb3IgYG9wdGlvbnNMaXN0VGVtcGxhdGVgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRUZW1wbGF0ZU1ldGhvZHMge1xuICAvKiogRnVuY3Rpb24gdG8gc2VsZWN0IGFuIG9wdGlvbiBieSBjbGljayBldmVudCAqL1xuICBzZWxlY3RNYXRjaCh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gsIGU/OiBFdmVudCk6IHZvaWQ7XG4gIC8qKiBGdW5jdGlvbiB0byBzZWxlY3QgYW4gb3B0aW9uIGJ5IG1vdXNlZW50ZXIgZXZlbnQgKi9cbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQ7XG4gIC8qKiBGdW5jdGlvbiB0byBjaGVjayBpZiBhbiBvcHRpb24gaXMgYWN0aXZlICovXG4gIGlzQWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IGJvb2xlYW47XG59XG4iXX0=