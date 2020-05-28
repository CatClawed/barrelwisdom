/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOffsets, getReferenceOffsets, updateContainerClass, setStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return this.offset(hostElement, targetElement, false);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        function (modifiedData, modifier) { return modifier(modifiedData); }), initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
/** @type {?} */
var positionService = new Positioning();
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
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    /** @type {?} */
    var offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTNGLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTVFO0lBQUE7SUF1QkEsQ0FBQzs7Ozs7OztJQXRCQyw4QkFBUTs7Ozs7O0lBQVIsVUFBUyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUN6RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsNEJBQU07Ozs7OztJQUFOLFVBQU8sV0FBd0IsRUFBRSxhQUEwQixFQUFFLEtBQVk7UUFBWixzQkFBQSxFQUFBLFlBQVk7UUFDdkUsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7O0lBRUQsc0NBQWdCOzs7Ozs7OztJQUFoQixVQUNFLFdBQXdCLEVBQ3hCLGFBQTBCLEVBQzFCLFFBQWdCLEVBQ2hCLFlBQXNCLEVBQ3RCLE9BQWlCOztZQUVYLGdCQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1FBRTlELE9BQU8sZ0JBQWdCLENBQUMsTUFBTTs7Ozs7UUFDNUIsVUFBQyxZQUFZLEVBQUUsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUF0QixDQUFzQixHQUNsRCxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOzs7SUFFSyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7Ozs7Ozs7QUFFekMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQixFQUN0QixPQUFpQixFQUNqQixRQUFvQjs7UUFHZCxJQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMzQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUNSOztRQUVLLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7UUFDdkIsYUFBYSxFQUFFLFdBQVc7UUFDMUIsR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxpQkFBZSxPQUFPLENBQUMsSUFBSSxZQUFPLE9BQU8sQ0FBQyxHQUFHLGFBQVU7S0FDbkUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUViLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqL1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldE9mZnNldHMsIGdldFJlZmVyZW5jZU9mZnNldHMsIHVwZGF0ZUNvbnRhaW5lckNsYXNzLCBzZXRTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXJyb3csIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgc2hpZnQsIGluaXREYXRhIH0gZnJvbSAnLi9tb2RpZmllcnMnO1xuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQoaG9zdEVsZW1lbnQsIHRhcmdldEVsZW1lbnQsIGZhbHNlKTtcbiAgfVxuXG4gIG9mZnNldChob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG4gIH1cblxuICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gICAgb3B0aW9ucz86IE9wdGlvbnNcbiAgKTogRGF0YSB7XG4gICAgY29uc3QgY2hhaW5PZk1vZGlmaWVycyA9IFtmbGlwLCBzaGlmdCwgcHJldmVudE92ZXJmbG93LCBhcnJvd107XG5cbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXG4gICAgICAobW9kaWZpZWREYXRhLCBtb2RpZmllcikgPT4gbW9kaWZpZXIobW9kaWZpZWREYXRhKSxcbiAgICAgIGluaXREYXRhKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50LCBwb3NpdGlvbiwgb3B0aW9ucylcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gIG9wdGlvbnM/OiBPcHRpb25zLFxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxuKTogdm9pZCB7XG5cbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgcGxhY2VtZW50LFxuICAgIGFwcGVuZFRvQm9keSxcbiAgICBvcHRpb25zXG4gICk7XG5cbiAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldHMoZGF0YSk7XG5cbiAgc2V0U3R5bGVzKHRhcmdldEVsZW1lbnQsIHtcbiAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7b2Zmc2V0cy5sZWZ0fXB4LCAke29mZnNldHMudG9wfXB4LCAwcHgpYFxuICB9LCByZW5kZXJlcik7XG5cbiAgaWYgKGRhdGEuaW5zdGFuY2UuYXJyb3cpIHtcbiAgICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5hcnJvdywgZGF0YS5vZmZzZXRzLmFycm93LCByZW5kZXJlcik7XG4gIH1cblxuICB1cGRhdGVDb250YWluZXJDbGFzcyhkYXRhLCByZW5kZXJlcik7XG59XG4iXX0=