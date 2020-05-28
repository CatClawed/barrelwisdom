/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
/**
 * @param {?} __0
 * @return {?}
 */
function getArea(_a) {
    var width = _a.width, height = _a.height;
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
    if (allowedPositions === void 0) { allowedPositions = ['top', 'bottom', 'right', 'left']; }
    if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
    if (padding === void 0) { padding = 0; }
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    var boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    var sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (tslib_1.__assign({ key: key }, rects[key], { area: getArea(rects[key]) })); }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return b.area - a.area; }));
    /** @type {?} */
    var filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        return width >= target.clientWidth
            && height >= target.clientHeight;
    }));
    filteredAreas = filteredAreas.filter((/**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return allowedPositions
            .some((/**
         * @param {?} allowedPosition
         * @return {?}
         */
        function (allowedPosition) {
            return allowedPosition === position.key;
        }));
    }));
    /** @type {?} */
    var computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    var variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + computedPlacement);
    return computedPlacement + (variation ? "-" + variation : '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUdoRCxTQUFTLE9BQU8sQ0FBQyxFQUE0QztRQUExQyxnQkFBSyxFQUFFLGtCQUFNO0lBQzlCLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsU0FBaUIsRUFDakIsT0FBZ0IsRUFDaEIsTUFBbUIsRUFDbkIsSUFBaUIsRUFDakIsZ0JBQTRELEVBQzVELGlCQUE4QixFQUM5QixPQUFXO0lBRlgsaUNBQUEsRUFBQSxvQkFBMkIsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzVELGtDQUFBLEVBQUEsOEJBQThCO0lBQzlCLHdCQUFBLEVBQUEsV0FBVztJQUVYLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNwQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjs7UUFFSyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDOztRQUVwRSxLQUFLLEdBQVE7UUFDakIsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHO1NBQ3JDO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7WUFDdkMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNO1NBQzNDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO0tBQ0Y7O1FBRUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25DLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLG9CQUNWLEdBQUcsS0FBQSxJQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUN6QixFQUpVLENBSVYsRUFBQztTQUNGLElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsRUFBQzs7UUFFOUIsYUFBYSxHQUFVLFdBQVcsQ0FBQyxNQUFNOzs7O0lBQzNDLFVBQUMsRUFBaUI7WUFBZixnQkFBSyxFQUFFLGtCQUFNO1FBQ2QsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDLFdBQVc7ZUFDN0IsTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQyxFQUNGO0lBRUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQyxRQUFhO1FBQ2pELE9BQU8sZ0JBQWdCO2FBQ3BCLElBQUk7Ozs7UUFBQyxVQUFDLGVBQXVCO1lBQzVCLE9BQU8sZUFBZSxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDLEVBQUMsQ0FBQzs7UUFFRyxpQkFBaUIsR0FBVyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7UUFFaEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGdCQUFjLGlCQUFtQixDQUFDLENBQUM7SUFFbkcsT0FBTyxpQkFBaUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqL1xuaW1wb3J0IHsgZ2V0Qm91bmRhcmllcyB9IGZyb20gJy4vZ2V0Qm91bmRhcmllcyc7XG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIHJlZlJlY3Q6IE9mZnNldHMsXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxuICBhbGxvd2VkUG9zaXRpb25zOiBhbnlbXSA9IFsndG9wJywgJ2JvdHRvbScsICdyaWdodCcsICdsZWZ0J10sXG4gIGJvdW5kYXJpZXNFbGVtZW50ID0gJ3ZpZXdwb3J0JyxcbiAgcGFkZGluZyA9IDBcbikge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgY29uc3QgcmVjdHM6IGFueSA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcbiAgICAubWFwKGtleSA9PiAoe1xuICAgICAga2V5LFxuICAgICAgLi4ucmVjdHNba2V5XSxcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBsZXQgZmlsdGVyZWRBcmVhczogYW55W10gPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgICByZXR1cm4gd2lkdGggPj0gdGFyZ2V0LmNsaWVudFdpZHRoXG4gICAgICAgICYmIGhlaWdodCA+PSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgKTtcblxuICBmaWx0ZXJlZEFyZWFzID0gZmlsdGVyZWRBcmVhcy5maWx0ZXIoKHBvc2l0aW9uOiBhbnkpID0+IHtcbiAgICByZXR1cm4gYWxsb3dlZFBvc2l0aW9uc1xuICAgICAgLnNvbWUoKGFsbG93ZWRQb3NpdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxvd2VkUG9zaXRpb24gPT09IHBvc2l0aW9uLmtleTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudDogc3RyaW5nID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXG4gICAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleVxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIC8vIGZvciB0b29sdGlwIG9uIGF1dG8gcG9zaXRpb25cbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtdG9vbHRpcC1hdXRvL2csIGBicy10b29sdGlwLSR7Y29tcHV0ZWRQbGFjZW1lbnR9YCk7XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiJdfQ==