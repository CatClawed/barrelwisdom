/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dex = 10;
/** @type {?} */
const hoursPerDay = 24;
/** @type {?} */
const hoursPerDayHalf = 12;
/** @type {?} */
const minutesPerHour = 60;
/** @type {?} */
const secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
export function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
export function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNumber(value) {
    return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
export function parseHours(value, isPM = false) {
    /** @type {?} */
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseMinutes(value) {
    /** @type {?} */
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseSeconds(value) {
    /** @type {?} */
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
export function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    let hour = value.getHours();
    /** @type {?} */
    let minutes = value.getMinutes();
    /** @type {?} */
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
export function setTime(value, opts) {
    /** @type {?} */
    let hour = parseHours(opts.hour);
    /** @type {?} */
    const minute = parseMinutes(opts.minute);
    /** @type {?} */
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
export function createDate(value, hours, minutes, seconds) {
    /** @type {?} */
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
/**
 * @param {?} value
 * @return {?}
 */
export function padNumber(value) {
    /** @type {?} */
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
export function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
export function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
export function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
export function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    const newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
export function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFFTSxHQUFHLEdBQUcsRUFBRTs7TUFDUixXQUFXLEdBQUcsRUFBRTs7TUFDaEIsZUFBZSxHQUFHLEVBQUU7O01BQ3BCLGNBQWMsR0FBRyxFQUFFOztNQUNuQixnQkFBZ0IsR0FBRyxFQUFFOzs7OztBQUUzQixNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQXFCO0lBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNwRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFrQyxFQUFFLE9BQWE7SUFDNUUsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDMUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXNCO0lBQzdDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXNCO0lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsS0FBc0IsRUFDdEIsSUFBSSxHQUFHLEtBQUs7O1VBRU4sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDNUIsSUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ1gsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQzdDO1FBQ0EsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQXNCOztVQUMzQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxjQUFjLEVBQUU7UUFDMUQsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFzQjs7VUFDM0MsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLEVBQUU7UUFDL0QsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFvQjtJQUM1QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQVcsRUFBRSxJQUFVO0lBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzFEOztRQUVHLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztRQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7UUFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7SUFFaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2IsSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DO0lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2YsT0FBTyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QztJQUVELE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBVyxFQUFFLElBQVU7O1FBQ3pDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7VUFDMUIsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztVQUNsQyxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBRS9DLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1FBQzVCLElBQUksSUFBSSxlQUFlLENBQUM7S0FDekI7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQ3hCLEtBQVcsRUFDWCxLQUFhLEVBQ2IsT0FBZSxFQUNmLE9BQWU7O1VBRVQsUUFBUSxHQUFHLElBQUksSUFBSSxDQUN2QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDaEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNmLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FDeEI7SUFDRCwyQ0FBMkM7SUFDM0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMxQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFbEMsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWE7O1VBQy9CLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO0lBQy9CLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUN0QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLElBQWE7SUFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBZTtJQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE9BQWU7SUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUzs7VUFDMUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQztJQUV6QyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsS0FBYSxFQUNiLE9BQU8sR0FBRyxHQUFHLEVBQ2IsT0FBTyxHQUFHLEdBQUcsRUFDYixJQUFhO0lBRWIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1dBQy9CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztXQUMzQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZSwgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XG5cbmNvbnN0IGRleCA9IDEwO1xuY29uc3QgaG91cnNQZXJEYXkgPSAyNDtcbmNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xuY29uc3QgbWludXRlc1BlckhvdXIgPSA2MDtcbmNvbnN0IHNlY29uZHNQZXJNaW51dGUgPSA2MDtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlPzogc3RyaW5nIHwgRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTih2YWx1ZS5nZXRIb3VycygpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzVmFsaWREYXRlKG5ldyBEYXRlKHZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRMaW1pdChjb250cm9sczogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLCBuZXdEYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gIGlmIChjb250cm9scy5taW4gJiYgbmV3RGF0ZSA8IGNvbnRyb2xzLm1pbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb250cm9scy5tYXggJiYgbmV3RGF0ZSA+IGNvbnRyb2xzLm1heCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCBkZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZhbHVlIGlzIG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4odG9OdW1iZXIodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSG91cnMoXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXG4gIGlzUE0gPSBmYWxzZVxuKTogbnVtYmVyIHtcbiAgY29uc3QgaG91ciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKFxuICAgIGlzTmFOKGhvdXIpIHx8XG4gICAgaG91ciA8IDAgfHxcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcbiAgKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaW51dGVzKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBtaW51dGUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChpc05hTihtaW51dGUpIHx8IG1pbnV0ZSA8IDAgfHwgbWludXRlID4gbWludXRlc1BlckhvdXIpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIG1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2Vjb25kcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgc2Vjb25kcyA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPCAwIHx8IHNlY29uZHMgPiBzZWNvbmRzUGVyTWludXRlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogRGF0ZSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpbWUodmFsdWU6IERhdGUsIGRpZmY6IFRpbWUpOiBEYXRlIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBjaGFuZ2VUaW1lKGNyZWF0ZURhdGUobmV3IERhdGUoKSwgMCwgMCwgMCksIGRpZmYpO1xuICB9XG5cbiAgbGV0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICBsZXQgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgbGV0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYuaG91cikge1xuICAgIGhvdXIgPSBob3VyICsgdG9OdW1iZXIoZGlmZi5ob3VyKTtcbiAgfVxuXG4gIGlmIChkaWZmLm1pbnV0ZSkge1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzICsgdG9OdW1iZXIoZGlmZi5taW51dGUpO1xuICB9XG5cbiAgaWYgKGRpZmYuc2Vjb25kcykge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzICsgdG9OdW1iZXIoZGlmZi5zZWNvbmRzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGVzLCBzZWNvbmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUodmFsdWU6IERhdGUsIG9wdHM6IFRpbWUpOiBEYXRlIHtcbiAgbGV0IGhvdXIgPSBwYXJzZUhvdXJzKG9wdHMuaG91cik7XG4gIGNvbnN0IG1pbnV0ZSA9IHBhcnNlTWludXRlcyhvcHRzLm1pbnV0ZSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVNlY29uZHMob3B0cy5zZWNvbmRzKSB8fCAwO1xuXG4gIGlmIChvcHRzLmlzUE0gJiYgaG91ciAhPT0gMTIpIHtcbiAgICBob3VyICs9IGhvdXJzUGVyRGF5SGFsZjtcbiAgfVxuXG4gIGlmICghdmFsdWUpIHtcbiAgICBpZiAoIWlzTmFOKGhvdXIpICYmICFpc05hTihtaW51dGUpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc05hTihob3VyKSB8fCBpc05hTihtaW51dGUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlKFxuICB2YWx1ZTogRGF0ZSxcbiAgaG91cnM6IG51bWJlcixcbiAgbWludXRlczogbnVtYmVyLFxuICBzZWNvbmRzOiBudW1iZXJcbik6IERhdGUge1xuICBjb25zdCBuZXdWYWx1ZSA9IG5ldyBEYXRlKFxuICAgIHZhbHVlLmdldEZ1bGxZZWFyKCksXG4gICAgdmFsdWUuZ2V0TW9udGgoKSxcbiAgICB2YWx1ZS5nZXREYXRlKCksXG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICAgIHZhbHVlLmdldE1pbGxpc2Vjb25kcygpXG4gICk7XG4gIC8vICMzMTM5IGVuc3VyZSBkYXRlIHBhcnQgcmVtYWlucyB1bmNoYW5nZWRcbiAgbmV3VmFsdWUuc2V0RnVsbFllYXIodmFsdWUuZ2V0RnVsbFllYXIoKSk7XG4gIG5ld1ZhbHVlLnNldE1vbnRoKHZhbHVlLmdldE1vbnRoKCkpO1xuICBuZXdWYWx1ZS5zZXREYXRlKHZhbHVlLmdldERhdGUoKSk7XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkTnVtYmVyKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAoX3ZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGAwJHtfdmFsdWV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSG91cklucHV0VmFsaWQoaG91cnM6IHN0cmluZywgaXNQTTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlSG91cnMoaG91cnMsIGlzUE0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWludXRlSW5wdXRWYWxpZChtaW51dGVzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZU1pbnV0ZXMobWludXRlcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTZWNvbmRJbnB1dFZhbGlkKHNlY29uZHM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlU2Vjb25kcyhzZWNvbmRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0TGltaXRWYWxpZChkaWZmOiBUaW1lLCBtYXg6IERhdGUsIG1pbjogRGF0ZSk6IGJvb2xlYW4ge1xuICBjb25zdCBuZXdEYXRlID0gc2V0VGltZShuZXcgRGF0ZSgpLCBkaWZmKTtcblxuICBpZiAobWF4ICYmIG5ld0RhdGUgPiBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobWluICYmIG5ld0RhdGUgPCBtaW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5wdXRWYWxpZChcbiAgaG91cnM6IHN0cmluZyxcbiAgbWludXRlcyA9ICcwJyxcbiAgc2Vjb25kcyA9ICcwJyxcbiAgaXNQTTogYm9vbGVhblxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzLCBpc1BNKVxuICAgICYmIGlzTWludXRlSW5wdXRWYWxpZChtaW51dGVzKVxuICAgICYmIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzKTtcbn1cbiJdfQ==