/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const transformProp = 'transform';
    /** @type {?} */
    const targetStyles = data.instance.target.style;
    // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    const order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    const check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            /** @type {?} */
            let value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            /** @type {?} */
            const mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            let value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    /** @type {?} */
    let side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target, ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbIm1vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7O0FBRzVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVTtJQUV4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1FBQ3ZELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O1VBS0ssYUFBYSxHQUFHLFdBQVc7O1VBQzNCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLOztVQUN6QyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxZQUFZO0lBQzlELFlBQVksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7O1VBRTNCLFVBQVUsR0FBRyxhQUFhLENBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbEIsQ0FBQyxFQUFFLFVBQVU7SUFDYixjQUFjLEVBQ2QsS0FBSyxDQUFDLGdCQUFnQjtLQUN2QjtJQUVELHdCQUF3QjtJQUN4Qiw4RUFBOEU7SUFDOUUsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7VUFFbEMsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDOztVQUUxQyxLQUFLLEdBQUc7Ozs7O1FBQ1osT0FBTyxDQUFDLFNBQWlCOztnQkFDbkIsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUNFLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQy9ELENBQUMsS0FBSyxDQUFDLDhCQUE4QjtjQUNyQztnQkFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUVELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsU0FBUyxDQUFDLFNBQWlCOztrQkFDbkIsUUFBUSxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7Z0JBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFDRSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7Y0FDN0I7Z0JBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQzdCLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDakYsQ0FBQzthQUNIO1lBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUNGOztRQUVHLElBQVk7SUFFaEIsS0FBSyxDQUFDLE9BQU87Ozs7SUFBQyxTQUFTLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxxQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFDO0lBRUosQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCb3VuZGFyaWVzLCBpc01vZGlmaWVyRW5hYmxlZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGE6IERhdGEpIHtcblxuICBpZiAoIWlzTW9kaWZpZXJFbmFibGVkKGRhdGEub3B0aW9ucywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSB0YXJnZXRPZmZzZXRzJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHRhcmdldE9mZnNldHMgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuICBjb25zdCB0YXJnZXRTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHRhcmdldFN0eWxlcztcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9ICcnO1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgICdzY3JvbGxQYXJlbnQnLFxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHRhcmdldFN0eWxlcy50b3AgPSB0b3A7XG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgdGFyZ2V0U3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIGNvbnN0IG9yZGVyID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcblxuICBjb25zdCBjaGVjayA9IHtcbiAgICBwcmltYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgICBsZXQgdmFsdWUgPSAoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF07XG4gICAgICBpZiAoXG4gICAgICAgIChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhZmFsc2UgLy8gb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heCgoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgbGV0IHZhbHVlID0gZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV07XG4gICAgICBpZiAoXG4gICAgICAgIChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhZmFsc2UgLy8gZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV0sXG4gICAgICAgICAgYm91bmRhcmllc1twbGFjZW1lbnRdIC1cbiAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gZGF0YS5vZmZzZXRzLnRhcmdldC53aWR0aCA6IGRhdGEub2Zmc2V0cy50YXJnZXQuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBbbWFpblNpZGVdOiB2YWx1ZSB9O1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2lkZTogc3RyaW5nO1xuXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcbiAgICBzaWRlID0gWydsZWZ0JywgJ3RvcCddXG4gICAgICAuaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMVxuICAgICAgPyAncHJpbWFyeSdcbiAgICAgIDogJ3NlY29uZGFyeSc7XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgIC4uLihjaGVjayBhcyBhbnkpW3NpZGVdKHBsYWNlbWVudClcbiAgICB9O1xuXG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIl19