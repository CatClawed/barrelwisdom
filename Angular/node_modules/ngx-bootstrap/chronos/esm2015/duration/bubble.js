/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { absFloor } from '../utils';
import { absCeil } from '../utils/abs-ceil';
/**
 * @param {?} dur
 * @return {?}
 */
export function bubble(dur) {
    /** @type {?} */
    let milliseconds = dur._milliseconds;
    /** @type {?} */
    let days = dur._days;
    /** @type {?} */
    let months = dur._months;
    /** @type {?} */
    const data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    /** @type {?} */
    const seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    /** @type {?} */
    const minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    /** @type {?} */
    const hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    /** @type {?} */
    const monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    /** @type {?} */
    const years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
export function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
export function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vYnViYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFNUMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFhOztRQUM5QixZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWE7O1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSzs7UUFDaEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPOztVQUNsQixJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUs7SUFFdEIsc0VBQXNFO0lBQ3RFLHNEQUFzRDtJQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BELFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3RCxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNaO0lBRUQsMERBQTBEO0lBQzFELCtCQUErQjtJQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7O1VBRWxDLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7O1VBRXRCLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7O1VBRXRCLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFeEIsSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7OztVQUd2QixjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxNQUFNLElBQUksY0FBYyxDQUFDO0lBQ3pCLElBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztVQUd4QyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWxCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEdBQVc7SUFDdEMsbUVBQW1FO0lBQ25FLG9DQUFvQztJQUNwQyxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQzdCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhO0lBQ3hDLDhCQUE4QjtJQUM5QixPQUFPLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBhYnNDZWlsIH0gZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlKGR1cjogRHVyYXRpb24pOiBEdXJhdGlvbiB7XG4gIGxldCBtaWxsaXNlY29uZHMgPSBkdXIuX21pbGxpc2Vjb25kcztcbiAgbGV0IGRheXMgPSBkdXIuX2RheXM7XG4gIGxldCBtb250aHMgPSBkdXIuX21vbnRocztcbiAgY29uc3QgZGF0YSA9IGR1ci5fZGF0YTtcblxuICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XG4gICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgIGRheXMgPSAwO1xuICAgIG1vbnRocyA9IDA7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgY29uc3QgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgY29uc3QgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gIGNvbnN0IHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICBtb250aHMgJT0gMTI7XG5cbiAgZGF0YS5kYXkgPSBkYXlzO1xuICBkYXRhLm1vbnRoID0gbW9udGhzO1xuICBkYXRhLnllYXIgPSB5ZWFycztcblxuICByZXR1cm4gZHVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgcmV0dXJuIGRheSAqIDQ4MDAgLyAxNDYwOTc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICByZXR1cm4gbW9udGggKiAxNDYwOTcgLyA0ODAwO1xufVxuIl19