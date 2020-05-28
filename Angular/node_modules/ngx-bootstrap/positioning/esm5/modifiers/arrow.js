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
    var _a;
    /** @type {?} */
    var targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    var arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    /** @type {?} */
    var len = isVertical ? 'height' : 'width';
    /** @type {?} */
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    var side = sideCapitalized.toLowerCase();
    /** @type {?} */
    var altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    var opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    /** @type {?} */
    var placementVariation = data.placement.split(' ')[1];
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
    var css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    var targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
    /** @type {?} */
    var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
    // compute center of the target
    /** @type {?} */
    var center;
    if (!placementVariation) {
        center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        /** @type {?} */
        var targetBorderRadius = parseFloat(css.borderRadius);
        /** @type {?} */
        var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number(((/** @type {?} */ (data))).offsets.host[side]) + targetSideArrowOffset :
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    /** @type {?} */
    var sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = (_a = {},
        _a[side] = Math.round(sideValue),
        _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
    ,
        _a);
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFHbEYsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFVOzs7UUFDMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7O1FBRWpDLFlBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUVyRix1REFBdUQ7SUFDdkQsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztLQUNiOztRQUVLLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRTNFLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7UUFDckMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQUM3QyxJQUFJLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRTs7UUFDcEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztRQUNyQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU87O1FBQ3hDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUM7O1FBQ25ELGtCQUFrQixHQUFH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LEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1FBQ2hCLEdBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzdCLEdBQUMsT0FBTyxJQUFHLEVBQUUsQ0FBQyxrRUFBa0U7O1dBQ2pGLENBQUM7SUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7SUFFbkMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCwgZ2V0T3V0ZXJTaXplcywgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJvdyhkYXRhOiBEYXRhKSB7XG4gIGxldCB0YXJnZXRPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnRhcmdldDtcbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgY29uc3QgYXJyb3dFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdKSAhPT0gLTE7XG5cbiAgY29uc3QgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcbiAgY29uc3QgcGxhY2VtZW50VmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8ICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0pIHtcbiAgICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NpZGVdIC09XG4gICAgICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NpZGVdIC0gKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAoTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSA+ICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbb3BTaWRlXSkge1xuICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gKz1cbiAgICAgIE51bWJlcigoZGF0YSBhcyBhbnkpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgLSBOdW1iZXIoKHRhcmdldE9mZnNldHMgYXMgYW55KVtvcFNpZGVdKTtcbiAgfVxuICB0YXJnZXRPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh0YXJnZXRPZmZzZXRzKTtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgdGFyZ2V0IG9mZnNldHNcbiAgLy8gdGFrZSB0YXJnZXQgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UudGFyZ2V0KTtcbiAgY29uc3QgdGFyZ2V0TWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSk7XG4gIGNvbnN0IHRhcmdldEJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgYm9yZGVyJHtzaWRlQ2FwaXRhbGl6ZWR9V2lkdGhgXSk7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHRhcmdldFxuICBsZXQgY2VudGVyOiBudW1iZXI7XG4gIGlmICghcGxhY2VtZW50VmFyaWF0aW9uKSB7XG4gICAgY2VudGVyID0gTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0YXJnZXRCb3JkZXJSYWRpdXMgPSBwYXJzZUZsb2F0KGNzcy5ib3JkZXJSYWRpdXMpO1xuICAgIGNvbnN0IHRhcmdldFNpZGVBcnJvd09mZnNldCA9IE51bWJlcih0YXJnZXRNYXJnaW5TaWRlICsgdGFyZ2V0Qm9yZGVyU2lkZSArIHRhcmdldEJvcmRlclJhZGl1cyk7XG4gICAgY2VudGVyID0gc2lkZSA9PT0gcGxhY2VtZW50VmFyaWF0aW9uID9cbiAgICAgIE51bWJlcigoZGF0YSBhcyBhbnkpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyB0YXJnZXRTaWRlQXJyb3dPZmZzZXQgOlxuICAgICAgTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC0gdGFyZ2V0U2lkZUFycm93T2Zmc2V0KTtcbiAgfVxuXG4gIGxldCBzaWRlVmFsdWUgPVxuICAgIGNlbnRlciAtICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLSB0YXJnZXRNYXJnaW5TaWRlIC0gdGFyZ2V0Qm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGFyZ2V0T2Zmc2V0c1tsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxuICAgIFthbHRTaWRlXTogJycgLy8gbWFrZSBzdXJlIHRvIHVuc2V0IGFueSBldmVudHVhbCBhbHRTaWRlIHZhbHVlIGZyb20gdGhlIERPTSBub2RlXG4gIH07XG5cbiAgZGF0YS5pbnN0YW5jZS5hcnJvdyA9IGFycm93RWxlbWVudDtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==