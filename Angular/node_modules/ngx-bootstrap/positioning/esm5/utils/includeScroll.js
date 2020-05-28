/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sum or subtract the element scroll values (left and top) from a given rect object
 */
import { getScroll } from './getScroll';
/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */
export function includeScroll(rect, element, subtract) {
    if (subtract === void 0) { subtract = false; }
    /** @type {?} */
    var scrollTop = getScroll(element, 'top');
    /** @type {?} */
    var scrollLeft = getScroll(element, 'left');
    /** @type {?} */
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZVNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9pbmNsdWRlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0FBR3hDLE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBYSxFQUFFLE9BQW9CLEVBQUUsUUFBZ0I7SUFBaEIseUJBQUEsRUFBQSxnQkFBZ0I7O1FBQzNFLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs7UUFDckMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDOztRQUN2QyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDakMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUNuQyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFFcEMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqL1xuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3Q6IE9mZnNldHMsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcblxuICByZXR1cm4gcmVjdDtcbn1cbiJdfQ==