/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the offset parent of the given element
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    /** @type {?} */
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    let offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    let sibling;
    while (offsetParent === noOffsetParent
        && element.nextElementSibling
        && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T2Zmc2V0UGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldE9mZnNldFBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFFOUIsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFZO0lBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUM7S0FDakM7O1VBRUssY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTs7O1FBR2xELFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7OztRQUczQyxPQUEyQjtJQUUvQixPQUFPLFlBQVksS0FBSyxjQUFjO1dBQzVCLE9BQU8sQ0FBQyxrQkFBa0I7V0FDMUIsT0FBTyxLQUFLLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtRQUU5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3JDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0tBQ3JDOztVQUVHLFFBQVEsR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVE7SUFFdEQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDM0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0tBQ25GO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQ0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELHdCQUF3QixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsS0FBSyxRQUFRLEVBQy9EO1FBQ0EsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEM7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKi9cbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG5cbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgbGV0IHNpYmxpbmc6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudFxuICAgICAgICAgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICYmIHNpYmxpbmcgIT09IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG5cbiAgICAgIHNpYmxpbmcgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIG9mZnNldFBhcmVudCA9IHNpYmxpbmcub2Zmc2V0UGFyZW50O1xuICAgIH1cblxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gc2libGluZyA/IHNpYmxpbmcub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIGlmIChcbiAgICBbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJlxuICAgIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJ1xuICApIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuIl19