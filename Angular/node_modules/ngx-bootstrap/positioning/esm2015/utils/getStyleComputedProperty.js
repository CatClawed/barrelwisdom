/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */
export function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    /** @type {?} */
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const css = window.getComputedStyle(element, null);
    return property ? css[(/** @type {?} */ (property))] : css;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE9BQW9CLEVBQUUsUUFBaUI7SUFDOUUsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLEVBQUUsQ0FBQztLQUNYOzs7VUFFSyxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXOztVQUMxQyxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFFbEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxRQUFRLEVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eT86IHN0cmluZyk6IGFueSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5IGFzIGFueV0gOiBjc3M7XG59XG4iXX0=