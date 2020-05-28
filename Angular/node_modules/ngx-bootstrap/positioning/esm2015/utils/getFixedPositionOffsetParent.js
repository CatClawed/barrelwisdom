/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Finds the first parent of an element that has a transformed property defined
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    /** @type {?} */
    let el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUU5QixNQUFNLFVBQVUsNEJBQTRCLENBQUMsT0FBb0I7SUFDL0QsZ0dBQWdHO0lBQ2hHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ2pELE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQztLQUNoQzs7UUFFRyxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWE7SUFFOUIsT0FBTyxFQUFFLElBQUksd0JBQXdCLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUNqRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUN2QjtJQUVELE9BQU8sRUFBRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICovXG5cbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG4iXX0=