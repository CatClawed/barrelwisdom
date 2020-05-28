/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNumeric } from './isNumeric';
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */
export function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, "" + String(styles[prop]) + unit);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0U3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL3NldFN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7OztBQUV4QyxNQUFNLFVBQVUsU0FBUyxDQUFDLE9BQW9CLEVBQUUsTUFBVyxFQUFFLFFBQW9CO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztJQUFDLFVBQUMsSUFBUzs7WUFDaEMsSUFBSSxHQUFHLEVBQUU7UUFDYiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1RSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBTSxDQUFDLENBQUM7WUFFbkUsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BELENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuL2lzTnVtZXJpYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlczogYW55LCByZW5kZXJlcj86IFJlbmRlcmVyMikge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHByb3A6IGFueSkgPT4ge1xuICAgIGxldCB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCBwcm9wLCBgJHtTdHJpbmcoc3R5bGVzW3Byb3BdKX0ke3VuaXR9YCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gU3RyaW5nKHN0eWxlc1twcm9wXSkgKyB1bml0O1xuICB9KTtcbn1cbiJdfQ==