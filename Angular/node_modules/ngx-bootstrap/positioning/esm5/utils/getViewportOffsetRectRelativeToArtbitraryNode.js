/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getClientRect } from './getClientRect';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getScroll } from './getScroll';
/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */
export function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
    if (excludeScroll === void 0) { excludeScroll = false; }
    /** @type {?} */
    var html = element.ownerDocument.documentElement;
    /** @type {?} */
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    /** @type {?} */
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    /** @type {?} */
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    /** @type {?} */
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    /** @type {?} */
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    /** @type {?} */
    var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
    };
    return getClientRect(offset);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQUd4QyxNQUFNLFVBQVUsNkNBQTZDLENBQUMsT0FBb0IsRUFBRSxhQUFxQjtJQUFyQiw4QkFBQSxFQUFBLHFCQUFxQjs7UUFDakcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZTs7UUFDNUMsY0FBYyxHQUFHLG9DQUFvQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7O1FBQ3BFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7O1FBQzFELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7O1FBRTdELFNBQVMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNoRCxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRXpELE1BQU0sR0FBRztRQUNiLEdBQUcsRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxJQUFJLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDbEYsS0FBSyxPQUFBO1FBQ0wsTUFBTSxRQUFBO0tBQ1A7SUFFRCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgeyBnZXRTY3JvbGwgfSBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCwgZXhjbHVkZVNjcm9sbCA9IGZhbHNlKTogT2Zmc2V0cyB7XG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICBjb25zdCBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICBjb25zdCBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQudG9wKSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3ApLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQubGVmdCkgKyBOdW1iZXIocmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCksXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cbiJdfQ==