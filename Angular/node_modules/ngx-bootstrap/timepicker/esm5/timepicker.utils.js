/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var dex = 10;
/** @type {?} */
var hoursPerDay = 24;
/** @type {?} */
var hoursPerDayHalf = 12;
/** @type {?} */
var minutesPerHour = 60;
/** @type {?} */
var secondsPerMinute = 60;
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
export function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    /** @type {?} */
    var hour = toNumber(value);
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
    var minute = toNumber(value);
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
    var seconds = toNumber(value);
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
    var hour = value.getHours();
    /** @type {?} */
    var minutes = value.getMinutes();
    /** @type {?} */
    var seconds = value.getSeconds();
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
    var hour = parseHours(opts.hour);
    /** @type {?} */
    var minute = parseMinutes(opts.minute);
    /** @type {?} */
    var seconds = parseSeconds(opts.seconds) || 0;
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
    var newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
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
    var _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
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
    var newDate = setTime(new Date(), diff);
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
export function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFFTSxHQUFHLEdBQUcsRUFBRTs7SUFDUixXQUFXLEdBQUcsRUFBRTs7SUFDaEIsZUFBZSxHQUFHLEVBQUU7O0lBQ3BCLGNBQWMsR0FBRyxFQUFFOztJQUNuQixnQkFBZ0IsR0FBRyxFQUFFOzs7OztBQUUzQixNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQXFCO0lBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUNwRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxRQUFrQyxFQUFFLE9BQWE7SUFDNUUsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDMUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXNCO0lBQzdDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8s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LEVBQ2IsSUFBYTtJQUZiLHdCQUFBLEVBQUEsYUFBYTtJQUNiLHdCQUFBLEVBQUEsYUFBYTtJQUdiLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztXQUMvQixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7V0FDM0Isa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWUsIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB9IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5jb25zdCBkZXggPSAxMDtcbmNvbnN0IGhvdXJzUGVyRGF5ID0gMjQ7XG5jb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbmNvbnN0IG1pbnV0ZXNQZXJIb3VyID0gNjA7XG5jb25zdCBzZWNvbmRzUGVyTWludXRlID0gNjA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZSh2YWx1ZT86IHN0cmluZyB8IERhdGUpOiBib29sZWFuIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4odmFsdWUuZ2V0SG91cnMoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpc1ZhbGlkRGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTGltaXQoY29udHJvbHM6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSwgbmV3RGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoY29udHJvbHMubWluICYmIG5ld0RhdGUgPCBjb250cm9scy5taW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29udHJvbHMubWF4ICYmIG5ld0RhdGUgPiBjb250cm9scy5tYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSwgZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gIWlzTmFOKHRvTnVtYmVyKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhvdXJzKFxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuICBpc1BNID0gZmFsc2Vcbik6IG51bWJlciB7XG4gIGNvbnN0IGhvdXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChcbiAgICBpc05hTihob3VyKSB8fFxuICAgIGhvdXIgPCAwIHx8XG4gICAgaG91ciA+IChpc1BNID8gaG91cnNQZXJEYXlIYWxmIDogaG91cnNQZXJEYXkpXG4gICkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWludXRlcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWludXRlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAoaXNOYU4obWludXRlKSB8fCBtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IG1pbnV0ZXNQZXJIb3VyKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBtaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlY29uZHModmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHNlY29uZHMgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzIDwgMCB8fCBzZWNvbmRzID4gc2Vjb25kc1Blck1pbnV0ZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaW1lKHZhbHVlOiBEYXRlLCBkaWZmOiBUaW1lKTogRGF0ZSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gY2hhbmdlVGltZShjcmVhdGVEYXRlKG5ldyBEYXRlKCksIDAsIDAsIDApLCBkaWZmKTtcbiAgfVxuXG4gIGxldCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgbGV0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG4gIGxldCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xuXG4gIGlmIChkaWZmLmhvdXIpIHtcbiAgICBob3VyID0gaG91ciArIHRvTnVtYmVyKGRpZmYuaG91cik7XG4gIH1cblxuICBpZiAoZGlmZi5taW51dGUpIHtcbiAgICBtaW51dGVzID0gbWludXRlcyArIHRvTnVtYmVyKGRpZmYubWludXRlKTtcbiAgfVxuXG4gIGlmIChkaWZmLnNlY29uZHMpIHtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyArIHRvTnVtYmVyKGRpZmYuc2Vjb25kcyk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlcywgc2Vjb25kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaW1lKHZhbHVlOiBEYXRlLCBvcHRzOiBUaW1lKTogRGF0ZSB7XG4gIGxldCBob3VyID0gcGFyc2VIb3VycyhvcHRzLmhvdXIpO1xuICBjb25zdCBtaW51dGUgPSBwYXJzZU1pbnV0ZXMob3B0cy5taW51dGUpO1xuICBjb25zdCBzZWNvbmRzID0gcGFyc2VTZWNvbmRzKG9wdHMuc2Vjb25kcykgfHwgMDtcblxuICBpZiAob3B0cy5pc1BNICYmIGhvdXIgIT09IDEyKSB7XG4gICAgaG91ciArPSBob3Vyc1BlckRheUhhbGY7XG4gIH1cblxuICBpZiAoIXZhbHVlKSB7XG4gICAgaWYgKCFpc05hTihob3VyKSAmJiAhaXNOYU4obWludXRlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURhdGUobmV3IERhdGUoKSwgaG91ciwgbWludXRlLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoaXNOYU4oaG91cikgfHwgaXNOYU4obWludXRlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZShcbiAgdmFsdWU6IERhdGUsXG4gIGhvdXJzOiBudW1iZXIsXG4gIG1pbnV0ZXM6IG51bWJlcixcbiAgc2Vjb25kczogbnVtYmVyXG4pOiBEYXRlIHtcbiAgY29uc3QgbmV3VmFsdWUgPSBuZXcgRGF0ZShcbiAgICB2YWx1ZS5nZXRGdWxsWWVhcigpLFxuICAgIHZhbHVlLmdldE1vbnRoKCksXG4gICAgdmFsdWUuZ2V0RGF0ZSgpLFxuICAgIGhvdXJzLFxuICAgIG1pbnV0ZXMsXG4gICAgc2Vjb25kcyxcbiAgICB2YWx1ZS5nZXRNaWxsaXNlY29uZHMoKVxuICApO1xuICAvLyAjMzEzOSBlbnN1cmUgZGF0ZSBwYXJ0IHJlbWFpbnMgdW5jaGFuZ2VkXG4gIG5ld1ZhbHVlLnNldEZ1bGxZZWFyKHZhbHVlLmdldEZ1bGxZZWFyKCkpO1xuICBuZXdWYWx1ZS5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKTtcbiAgbmV3VmFsdWUuc2V0RGF0ZSh2YWx1ZS5nZXREYXRlKCkpO1xuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgX3ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKF92YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBgMCR7X3ZhbHVlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzOiBzdHJpbmcsIGlzUE06IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUhvdXJzKGhvdXJzLCBpc1BNKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VNaW51dGVzKG1pbnV0ZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZVNlY29uZHMoc2Vjb25kcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dExpbWl0VmFsaWQoZGlmZjogVGltZSwgbWF4OiBEYXRlLCBtaW46IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbmV3RGF0ZSA9IHNldFRpbWUobmV3IERhdGUoKSwgZGlmZik7XG5cbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1pbiAmJiBuZXdEYXRlIDwgbWluKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0VmFsaWQoXG4gIGhvdXJzOiBzdHJpbmcsXG4gIG1pbnV0ZXMgPSAnMCcsXG4gIHNlY29uZHMgPSAnMCcsXG4gIGlzUE06IGJvb2xlYW5cbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNIb3VySW5wdXRWYWxpZChob3VycywgaXNQTSlcbiAgICAmJiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlcylcbiAgICAmJiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kcyk7XG59XG4iXX0=