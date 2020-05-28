/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:cyclomatic-complexity
import { createDuration } from './create';
/** @type {?} */
let round = Math.round;
/** @type {?} */
const thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
export function relativeTime(posNegDuration, withoutSuffix, locale) {
    /** @type {?} */
    const duration = createDuration(posNegDuration).abs();
    /** @type {?} */
    const seconds = round(duration.as('s'));
    /** @type {?} */
    const minutes = round(duration.as('m'));
    /** @type {?} */
    const hours = round(duration.as('h'));
    /** @type {?} */
    const days = round(duration.as('d'));
    /** @type {?} */
    const months = round(duration.as('M'));
    /** @type {?} */
    const years = round(duration.as('y'));
    /** @type {?} */
    const a = seconds <= thresholds.ss && ['s', seconds] ||
        seconds < thresholds.s && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds.m && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds.h && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds.d && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds.M && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    /** @type {?} */
    const b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
// This function allows you to set the rounding function for relative time strings
/**
 * @param {?} roundingFunction
 * @return {?}
 */
export function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof (roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}
// This function allows you to set a threshold for relative time strings
/**
 * @param {?} threshold
 * @param {?} limit
 * @return {?}
 */
export function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW5pemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9odW1hbml6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7O0lBSXRDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7TUFDaEIsVUFBVSxHQUE4QjtJQUM1QyxFQUFFLEVBQUUsRUFBRTs7SUFDTixDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFVLGlCQUFpQjtDQUNqQzs7Ozs7Ozs7OztBQUdELFNBQVMsaUJBQWlCLENBQUMsR0FBc0IsRUFBRSxHQUFXLEVBQ25DLGFBQXNCLEVBQUUsUUFBaUIsRUFDekMsTUFBYztJQUN2QyxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RSxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxjQUF3QixFQUFFLGFBQXNCLEVBQUUsTUFBYzs7VUFDckYsUUFBUSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUU7O1VBQy9DLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7VUFDakMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztVQUNqQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7O1VBQy9CLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7VUFDOUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztVQUNoQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7O1VBRS9CLENBQUMsR0FDTCxPQUFPLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDMUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7O1VBRWhDLENBQUMsR0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUM7SUFDMUQsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFFakIsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxnQkFBcUI7SUFDOUQsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7UUFDbEMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksT0FBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssVUFBVSxFQUFFO1FBQzNDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFNBQWlCLEVBQUUsS0FBYTtJQUMxRSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDdkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN2QixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUIsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO1FBQ3JCLFVBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmxldCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCB0aHJlc2hvbGRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICBzczogNDQsICAgICAgICAgLy8gYSBmZXcgc2Vjb25kcyB0byBzZWNvbmRzXG4gIHM6IDQ1LCAgICAgICAgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gIG06IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxuICBoOiAyMiwgICAgICAgICAvLyBob3VycyB0byBkYXlcbiAgZDogMjYsICAgICAgICAgLy8gZGF5cyB0byBtb250aFxuICBNOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxufTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgaXNGdXR1cmU6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bSB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKHBvc05lZ0R1cmF0aW9uOiBEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xuICBjb25zdCBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xuICBjb25zdCBtaW51dGVzID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gIGNvbnN0IGhvdXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSk7XG4gIGNvbnN0IGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgY29uc3QgbW9udGhzID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gIGNvbnN0IHllYXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSk7XG5cbiAgY29uc3QgYTogW3N0cmluZ10gfCBbc3RyaW5nLCBudW1iZXJdID1cbiAgICBzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10gfHxcbiAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxuICAgIG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSB8fFxuICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgaG91cnMgPD0gMSAmJiBbJ2gnXSB8fFxuICAgIGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gfHxcbiAgICBkYXlzIDw9IDEgJiYgWydkJ10gfHxcbiAgICBkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxuICAgIG1vbnRocyA8PSAxICYmIFsnTSddIHx8XG4gICAgbW9udGhzIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdIHx8XG4gICAgeWVhcnMgPD0gMSAmJiBbJ3knXSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gIGNvbnN0IGI6IFtzdHJpbmcsIG51bWJlciB8IHN0cmluZywgYm9vbGVhbiwgYm9vbGVhbiwgTG9jYWxlXSA9XG4gICAgW2FbMF0sIGFbMV0sIHdpdGhvdXRTdWZmaXgsICtwb3NOZWdEdXJhdGlvbiA+IDAsIGxvY2FsZV07XG4gIC8vIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAvLyBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgLy8gYVs0XSA9IGxvY2FsZTtcblxuICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYik7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uOiBhbnkpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xuICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJvdW5kO1xuICB9XG4gIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gIH1cbiAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xuICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplKHdpdGhTdWZmaXgpIHtcbi8vICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuLy8gICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuLy8gICB9XG4vL1xuLy8gICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbi8vICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcbi8vXG4vLyAgIGlmICh3aXRoU3VmZml4KSB7XG4vLyAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuLy8gfVxuIl19