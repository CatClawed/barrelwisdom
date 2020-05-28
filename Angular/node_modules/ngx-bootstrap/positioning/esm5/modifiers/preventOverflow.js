/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getBoundaries, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    var transformProp = 'transform';
    /** @type {?} */
    var targetStyles = data.instance.target.style;
    // assignment to help minification
    var top = targetStyles.top, left = targetStyles.left, _a = transformProp, transform = targetStyles[_a];
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    var order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    var check = {
        primary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return _a = {}, _a[placement] = value, _a;
        },
        secondary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            var value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return _a = {}, _a[mainSide] = value, _a;
        }
    };
    /** @type {?} */
    var side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = tslib_1.__assign({}, data.offsets.target, ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbIm1vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztBQUc1RCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFFeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtRQUN2RCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztRQUtLLGFBQWEsR0FBRyxXQUFXOztRQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSzs7SUFDdkMsSUFBQSxzQkFBRyxFQUFFLHdCQUFJLEVBQUUsa0JBQWUsRUFBZiw0QkFBMEI7SUFDN0MsWUFBWSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDdEIsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7UUFFM0IsVUFBVSxHQUFHLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUNsQixDQUFDLEVBQUUsVUFBVTtJQUNiLGNBQWMsRUFDZCxLQUFLLENBQUMsZ0JBQWdCO0tBQ3ZCO0lBRUQsd0JBQXdCO0lBQ3hCLDhFQUE4RTtJQUM5RSxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2QixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN6QixZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDOztRQUVsQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7O1FBRTFDLEtBQUssR0FBRztRQUNaLE9BQU87Ozs7UUFBUCxVQUFRLFNBQWlCOzs7Z0JBQ25CLEtBQUssR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkQsSUFDRSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssQ0FBQyw4QkFBOEI7Y0FDckM7Z0JBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDbEY7WUFFRCxnQkFBUyxHQUFDLFNBQVMsSUFBRyxLQUFLLEtBQUc7UUFDaEMsQ0FBQztRQUNELFNBQVM7Ozs7UUFBVCxVQUFVLFNBQWlCOzs7Z0JBQ25CLFFBQVEsR0FBRyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O2dCQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3pDLElBQ0UsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQkFDL0QsQ0FBQyxLQUFLLENBQUMsc0JBQXNCO2NBQzdCO2dCQUNBLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUM3QixVQUFVLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ2pGLENBQUM7YUFDSDtZQUVELGdCQUFTLEdBQUMsUUFBUSxJQUFHLEtBQUssS0FBRztRQUMvQixDQUFDO0tBQ0Y7O1FBRUcsSUFBWTtJQUVoQixLQUFLLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsU0FBUztRQUNyQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSx3QkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFDO0lBRUosQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCb3VuZGFyaWVzLCBpc01vZGlmaWVyRW5hYmxlZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGE6IERhdGEpIHtcblxuICBpZiAoIWlzTW9kaWZpZXJFbmFibGVkKGRhdGEub3B0aW9ucywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSB0YXJnZXRPZmZzZXRzJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHRhcmdldE9mZnNldHMgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuICBjb25zdCB0YXJnZXRTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHRhcmdldFN0eWxlcztcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9ICcnO1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgICdzY3JvbGxQYXJlbnQnLFxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHRhcmdldFN0eWxlcy50b3AgPSB0b3A7XG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgdGFyZ2V0U3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIGNvbnN0IG9yZGVyID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcblxuICBjb25zdCBjaGVjayA9IHtcbiAgICBwcmltYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgICBsZXQgdmFsdWUgPSAoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF07XG4gICAgICBpZiAoXG4gICAgICAgIChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhZmFsc2UgLy8gb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heCgoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgbGV0IHZhbHVlID0gZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV07XG4gICAgICBpZiAoXG4gICAgICAgIChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhZmFsc2UgLy8gZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV0sXG4gICAgICAgICAgYm91bmRhcmllc1twbGFjZW1lbnRdIC1cbiAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gZGF0YS5vZmZzZXRzLnRhcmdldC53aWR0aCA6IGRhdGEub2Zmc2V0cy50YXJnZXQuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBbbWFpblNpZGVdOiB2YWx1ZSB9O1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2lkZTogc3RyaW5nO1xuXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcbiAgICBzaWRlID0gWydsZWZ0JywgJ3RvcCddXG4gICAgICAuaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMVxuICAgICAgPyAncHJpbWFyeSdcbiAgICAgIDogJ3NlY29uZGFyeSc7XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgIC4uLihjaGVjayBhcyBhbnkpW3NpZGVdKHBsYWNlbWVudClcbiAgICB9O1xuXG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIl19