/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createDuration } from '../duration/create';
import { absRound } from '../utils/abs-round';
import { getDate, getMonth, getTime } from '../utils/date-getters';
import { setDate, setMonth, setTime } from '../utils/date-setters';
import { cloneDate } from '../create/clone';
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
export function add(date, val, period, isUTC) {
    /** @type {?} */
    const dur = createDuration(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
export function subtract(date, val, period, isUTC) {
    /** @type {?} */
    const dur = createDuration(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */
export function addSubtract(date, duration, isAdding, isUTC) {
    /** @type {?} */
    const milliseconds = duration._milliseconds;
    /** @type {?} */
    const days = absRound(duration._days);
    /** @type {?} */
    const months = absRound(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
    }
    return cloneDate(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXN1YnRyYWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibW9tZW50L2FkZC1zdWJ0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBRzVDLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxNQUFrQixFQUFFLEtBQWU7O1VBQ3hFLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUV2QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxNQUFrQixFQUFFLEtBQWU7O1VBQzdFLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUV2QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFVLEVBQUUsUUFBa0IsRUFBRSxRQUFnQixFQUFFLEtBQWU7O1VBQ3JGLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYTs7VUFDckMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOztVQUMvQixNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFFekMsOEJBQThCO0lBQzlCLG9FQUFvRTtJQUVwRSxJQUFJLE1BQU0sRUFBRTtRQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2xFO0lBQ0QsSUFBSSxJQUFJLEVBQUU7UUFDUixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM5RDtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsOENBQThDO0lBQzlDLElBQUk7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRNb250aCwgc2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIDEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGRhdGU6IERhdGUsIHZhbDogbnVtYmVyLCBwZXJpb2Q6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG5cbiAgcmV0dXJuIGFkZFN1YnRyYWN0KGRhdGUsIGR1ciwgLTEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1YnRyYWN0KGRhdGU6IERhdGUsIGR1cmF0aW9uOiBEdXJhdGlvbiwgaXNBZGRpbmc6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHM7XG4gIGNvbnN0IGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyk7XG4gIGNvbnN0IG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZXMgc3VwcG9ydFxuICAvLyBjb25zdCBfdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gIGlmIChtb250aHMpIHtcbiAgICBzZXRNb250aChkYXRlLCBnZXRNb250aChkYXRlLCBpc1VUQykgKyBtb250aHMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChkYXlzKSB7XG4gICAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKGRhdGUsIGlzVVRDKSArIGRheXMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICBzZXRUaW1lKGRhdGUsIGdldFRpbWUoZGF0ZSkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gIH1cblxuICByZXR1cm4gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcbiAgLy8gaWYgKF91cGRhdGVPZmZzZXQpIHtcbiAgLy8gICBob29rcy51cGRhdGVPZmZzZXQoZGF0ZSwgZGF5cyB8fCBtb250aHMpO1xuICAvLyB9XG59XG4iXX0=