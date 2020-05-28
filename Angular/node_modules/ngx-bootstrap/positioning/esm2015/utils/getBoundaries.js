/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Computed the boundaries limits and return them
 */
import { getScrollParent } from './getScrollParent';
import { getParentNode } from './getParentNode';
import { findCommonOffsetParent } from './findCommonOffsetParent';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getViewportOffsetRectRelativeToArtbitraryNode } from './getViewportOffsetRectRelativeToArtbitraryNode';
import { getWindowSizes } from './getWindowSizes';
import { isFixed } from './isFixed';
import { getFixedPositionOffsetParent } from './getFixedPositionOffsetParent';
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */
export function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    // NOTE: 1 DOM access here
    /** @type {?} */
    let boundaries = { top: 0, left: 0 };
    /** @type {?} */
    const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        /** @type {?} */
        let boundariesNode;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        /** @type {?} */
        const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm91bmRhcmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRCb3VuZGFyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFFOUUsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsTUFBbUIsRUFDbkIsSUFBaUIsRUFDakIsT0FBTyxHQUFHLENBQUMsRUFDWCxpQkFBeUIsRUFDekIsYUFBYSxHQUFHLEtBQUs7SUFFckIsMEJBQTBCOzs7UUFFdEIsVUFBVSxHQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOztVQUNuQyxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUVoSCx1QkFBdUI7SUFDdkIsSUFBSSxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7UUFDcEMsVUFBVSxHQUFHLDZDQUE2QyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN6RjtTQUFNOzs7WUFFRCxjQUFjO1FBQ2xCLElBQUksaUJBQWlCLEtBQUssY0FBYyxFQUFFO1lBQ3hDLGNBQWMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxjQUFjLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFDdEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO2FBQ3ZEO1NBQ0Y7YUFBTSxJQUFJLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtZQUN6QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7U0FDdkQ7YUFBTTtZQUNMLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztTQUNwQzs7Y0FFSyxPQUFPLEdBQUcsb0NBQW9DLENBQ2xELGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxDQUNkO1FBRUQsbURBQW1EO1FBQ25ELElBQUksY0FBYyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7a0JBQzFELEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQzlELFVBQVUsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xELFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsVUFBVSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsbURBQW1EO1lBQ25ELFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDdEI7S0FDRjtJQUVELGVBQWU7SUFDZixVQUFVLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQztJQUMzQixVQUFVLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMxQixVQUFVLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztJQUM1QixVQUFVLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQztJQUU3QixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKi9cbmltcG9ydCB7IGdldFNjcm9sbFBhcmVudCB9IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcbmltcG9ydCB7IGdldFBhcmVudE5vZGUgfSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgeyBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUgfSBmcm9tICcuL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgeyBnZXRXaW5kb3dTaXplcyB9IGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IHsgaXNGaXhlZCB9IGZyb20gJy4vaXNGaXhlZCc7XG5pbXBvcnQgeyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxuICBwYWRkaW5nID0gMCxcbiAgYm91bmRhcmllc0VsZW1lbnQ6IHN0cmluZyxcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXG4pIHtcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICBsZXQgYm91bmRhcmllczogYW55ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQodGFyZ2V0KSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQodGFyZ2V0LCBob3N0KTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIGxldCBib3VuZGFyaWVzTm9kZTtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGhvc3QpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHRhcmdldC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxuICAgICAgYm91bmRhcmllc05vZGUsXG4gICAgICBvZmZzZXRQYXJlbnQsXG4gICAgICBmaXhlZFBvc2l0aW9uXG4gICAgKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0V2luZG93U2l6ZXModGFyZ2V0Lm93bmVyRG9jdW1lbnQpO1xuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gTnVtYmVyKGhlaWdodCkgKyBOdW1iZXIob2Zmc2V0cy50b3ApO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSBOdW1iZXIod2lkdGgpICsgTnVtYmVyKG9mZnNldHMubGVmdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIGJvdW5kYXJpZXMubGVmdCArPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLnRvcCArPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLnJpZ2h0IC09IHBhZGRpbmc7XG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IHBhZGRpbmc7XG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG4iXX0=