/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function arrow(data) {
    /** @type {?} */
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    const isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    /** @type {?} */
    const len = isVertical ? 'height' : 'width';
    /** @type {?} */
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    const side = sideCapitalized.toLowerCase();
    /** @type {?} */
    const altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    const opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    /** @type {?} */
    const placementVariation = data.placement.split(' ')[1];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < ((/** @type {?} */ (targetOffsets)))[side]) {
        ((/** @type {?} */ (targetOffsets)))[side] -=
            ((/** @type {?} */ (targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) > ((/** @type {?} */ (targetOffsets)))[opSide]) {
        ((/** @type {?} */ (targetOffsets)))[side] +=
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) - Number(((/** @type {?} */ (targetOffsets)))[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    /** @type {?} */
    const css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    /** @type {?} */
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    // compute center of the target
    /** @type {?} */
    let center;
    if (!placementVariation) {
        center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        /** @type {?} */
        const targetBorderRadius = parseFloat(css.borderRadius);
        /** @type {?} */
        const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number(((/** @type {?} */ (data))).offsets.host[side]) + targetSideArrowOffset :
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    /** @type {?} */
    let sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFHbEYsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFVOztRQUMxQixhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7VUFFakMsWUFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRXJGLHVEQUF1RDtJQUN2RCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O1VBRUssVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7VUFFM0UsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPOztVQUNyQyxlQUFlLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07O1VBQzdDLElBQUksR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFOztVQUNwQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1VBQ3JDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7VUFDeEMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7VUFDbkQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZELGdCQUFnQjtJQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixHQUFHLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvRSxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7S0FDakY7SUFDRCxvQkFBb0I7SUFDcEIsSUFBSSxNQUFNLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEcsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDaEg7SUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7O1VBSXZDLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7VUFDcEQsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLGVBQWUsRUFBRSxDQUFDLENBQUM7O1VBQzlELGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxlQUFlLE9BQU8sQ0FBQyxDQUFDOzs7UUFHckUsTUFBYztJQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDdkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0c7U0FBTTs7Y0FDQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzs7Y0FDakQscUJBQXFCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQzlGLE1BQU0sR0FBRyxJQUFJLEtBQUssa0JBQWtCLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3JHOztRQUVHLFNBQVMsR0FDWCxNQUFNLEdBQUcsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixHQUFHLGdCQUFnQjtJQUU3RSx3RUFBd0U7SUFDeEUsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDbkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrRUFBa0U7S0FDakYsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUVuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDbGllbnRSZWN0LCBnZXRPdXRlclNpemVzLCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93KGRhdGE6IERhdGEpIHtcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBjb25zdCBhcnJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF0pICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuICBjb25zdCBwbGFjZW1lbnRWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSkge1xuICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLT1cbiAgICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLSAoZGF0YS5vZmZzZXRzLmhvc3Rbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChOdW1iZXIoKGRhdGEgYXMgYW55KS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGFycm93RWxlbWVudFNpemUpID4gKHRhcmdldE9mZnNldHMgYXMgYW55KVtvcFNpZGVdKSB7XG4gICAgKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSArPVxuICAgICAgTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSAtIE51bWJlcigodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW29wU2lkZV0pO1xuICB9XG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCB0YXJnZXQgb2Zmc2V0c1xuICAvLyB0YWtlIHRhcmdldCBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS50YXJnZXQpO1xuICBjb25zdCB0YXJnZXRNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcbiAgY29uc3QgdGFyZ2V0Qm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgdGFyZ2V0XG4gIGxldCBjZW50ZXI6IG51bWJlcjtcbiAgaWYgKCFwbGFjZW1lbnRWYXJpYXRpb24pIHtcbiAgICBjZW50ZXIgPSBOdW1iZXIoKGRhdGEgYXMgYW55KS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldEJvcmRlclJhZGl1cyA9IHBhcnNlRmxvYXQoY3NzLmJvcmRlclJhZGl1cyk7XG4gICAgY29uc3QgdGFyZ2V0U2lkZUFycm93T2Zmc2V0ID0gTnVtYmVyKHRhcmdldE1hcmdpblNpZGUgKyB0YXJnZXRCb3JkZXJTaWRlICsgdGFyZ2V0Qm9yZGVyUmFkaXVzKTtcbiAgICBjZW50ZXIgPSBzaWRlID09PSBwbGFjZW1lbnRWYXJpYXRpb24gP1xuICAgICAgTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIHRhcmdldFNpZGVBcnJvd09mZnNldCA6XG4gICAgICBOdW1iZXIoKGRhdGEgYXMgYW55KS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W2xlbl0gLSB0YXJnZXRTaWRlQXJyb3dPZmZzZXQpO1xuICB9XG5cbiAgbGV0IHNpZGVWYWx1ZSA9XG4gICAgY2VudGVyIC0gKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSAtIHRhcmdldE1hcmdpblNpZGUgLSB0YXJnZXRCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHRhcmdldFxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0YXJnZXRPZmZzZXRzW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLm9mZnNldHMuYXJyb3cgPSB7XG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXG4gICAgW2FsdFNpZGVdOiAnJyAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICBkYXRhLmluc3RhbmNlLmFycm93ID0gYXJyb3dFbGVtZW50O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIl19