/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOffsets, getReferenceOffsets, updateContainerClass, setStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
export class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        (modifiedData, modifier) => modifier(modifiedData)), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    /** @type {?} */
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTVFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBQ3RCLFFBQVEsQ0FBQyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBSyxHQUFHLElBQUk7UUFDekUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBSyxHQUFHLElBQUk7UUFDdkUsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7O0lBRUQsZ0JBQWdCLENBQ2QsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsWUFBc0IsRUFDdEIsT0FBaUI7O2NBRVgsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFFOUQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNOzs7OztRQUM1QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztDQUNGOztNQUVLLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRTs7Ozs7Ozs7OztBQUV6QyxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFdBQXdCLEVBQ3hCLGFBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFlBQXNCLEVBQ3RCLE9BQWlCLEVBQ2pCLFFBQW9COztVQUdkLElBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQzNDLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNULFlBQVksRUFDWixPQUFPLENBQ1I7O1VBRUssT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEMsU0FBUyxDQUFDLGFBQWEsRUFBRTtRQUN2QixhQUFhLEVBQUUsV0FBVztRQUMxQixHQUFHLEVBQUUsS0FBSztRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsU0FBUyxFQUFFLGVBQWUsT0FBTyxDQUFDLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxVQUFVO0tBQ25FLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RDtJQUVELG9CQUFvQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBnZXRPZmZzZXRzLCBnZXRSZWZlcmVuY2VPZmZzZXRzLCB1cGRhdGVDb250YWluZXJDbGFzcywgc2V0U3R5bGVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzJztcbmltcG9ydCB7IERhdGEsIE9mZnNldHMsIE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcG9zaXRpb24oaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBmYWxzZSk7XG4gIH1cblxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IHN0cmluZyxcbiAgICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiBPcHRpb25zXG4gICk6IERhdGEge1xuICAgIGNvbnN0IGNoYWluT2ZNb2RpZmllcnMgPSBbZmxpcCwgc2hpZnQsIHByZXZlbnRPdmVyZmxvdywgYXJyb3ddO1xuXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxuICAgICAgKG1vZGlmaWVkRGF0YSwgbW9kaWZpZXIpID0+IG1vZGlmaWVyKG1vZGlmaWVkRGF0YSksXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICBvcHRpb25zPzogT3B0aW9ucyxcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcbik6IHZvaWQge1xuXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50LFxuICAgIHBsYWNlbWVudCxcbiAgICBhcHBlbmRUb0JvZHksXG4gICAgb3B0aW9uc1xuICApO1xuXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRzKGRhdGEpO1xuXG4gIHNldFN0eWxlcyh0YXJnZXRFbGVtZW50LCB7XG4gICAgJ3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke29mZnNldHMubGVmdH1weCwgJHtvZmZzZXRzLnRvcH1weCwgMHB4KWBcbiAgfSwgcmVuZGVyZXIpO1xuXG4gIGlmIChkYXRhLmluc3RhbmNlLmFycm93KSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UuYXJyb3csIGRhdGEub2Zmc2V0cy5hcnJvdywgcmVuZGVyZXIpO1xuICB9XG5cbiAgdXBkYXRlQ29udGFpbmVyQ2xhc3MoZGF0YSwgcmVuZGVyZXIpO1xufVxuIl19