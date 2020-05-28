/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get offsets to the target
 */
import { getOppositePlacement } from './getOppositePlacement';
import { getOuterSizes } from './getOuterSizes';
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
export function getTargetOffsets(target, hostOffsets, position) {
    /** @type {?} */
    const placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    const mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    const secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    const measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
    return targetOffsets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VGFyZ2V0T2Zmc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRUYXJnZXRPZmZzZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFHaEQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixNQUFtQixFQUNuQixXQUFvQixFQUNwQixRQUFnQjs7VUFFVixTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7OztVQUdsQyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7O1VBR2xDLGFBQWEsR0FBRztRQUNwQixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7UUFDdkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO0tBQzFCOzs7VUFHSyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7VUFDckQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNOztVQUNuQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1VBQ3hDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7VUFDMUMsb0JBQW9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTztJQUUxRCxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDckIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QixDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxLQUFLLGFBQWE7UUFDakUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUMsbUJBQUEsV0FBVyxFQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBRTlELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSB0YXJnZXRcbiAqL1xuaW1wb3J0IHsgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgfSBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcbmltcG9ydCB7IGdldE91dGVyU2l6ZXMgfSBmcm9tICcuL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRPZmZzZXRzKFxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxuICBob3N0T2Zmc2V0czogT2Zmc2V0cyxcbiAgcG9zaXRpb246IHN0cmluZ1xuKTogT2Zmc2V0cyB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IHBvc2l0aW9uLnNwbGl0KCcgJylbMF07XG5cbiAgLy8gR2V0IHRhcmdldCBub2RlIHNpemVzXG4gIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRPdXRlclNpemVzKHRhcmdldCk7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICBjb25zdCB0YXJnZXRPZmZzZXRzID0ge1xuICAgIHdpZHRoOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgIGhlaWdodDogdGFyZ2V0UmVjdC5oZWlnaHRcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHRhcmdldCBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgY29uc3Qgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbbWFpblNpZGVdID1cbiAgICBob3N0T2Zmc2V0c1ttYWluU2lkZV0gK1xuICAgIGhvc3RPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLVxuICAgIHRhcmdldFJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcblxuICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NlY29uZGFyeVNpZGVdID0gcGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlXG4gICAgPyBob3N0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHRhcmdldFJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdXG4gICAgOiAoaG9zdE9mZnNldHMgYXMgYW55KVtnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG5cbiAgcmV0dXJuIHRhcmdldE9mZnNldHM7XG59XG4iXX0=