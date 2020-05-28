/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * @param {number} year
 * @param {number} dow - start-of-first-week
 * @param {number} doy - start-of-year
 * @returns {number}
 */
import { createUTCDate } from '../create/date-from-array';
import { daysInYear } from './year';
import { getDayOfYear } from './day-of-year';
import { getFullYear } from '../utils/date-getters';
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    /** @type {?} */
    const fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    /** @type {?} */
    const fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
/**
 * @param {?} year
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
export function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    /** @type {?} */
    const localWeekday = (7 + weekday - dow) % 7;
    /** @type {?} */
    const weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    const dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    /** @type {?} */
    let resYear;
    /** @type {?} */
    let resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    }
    else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
/**
 * @param {?} date
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */
export function weekOfYear(date, dow, doy, isUTC) {
    /** @type {?} */
    const weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    /** @type {?} */
    const week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    /** @type {?} */
    let resWeek;
    /** @type {?} */
    let resYear;
    if (week < 1) {
        resYear = getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
        resYear = getFullYear(date, isUTC) + 1;
    }
    else {
        resYear = getFullYear(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
export function weeksInYear(year, dow, doy) {
    /** @type {?} */
    const weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1jYWxlbmRhci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQUVwRCxTQUFTLGVBQWUsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVc7OztVQUV2RCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDOzs7VUFFbkIsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFckUsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLElBQVksRUFDWixJQUFZLEVBQ1osT0FBZSxFQUNmLEdBQVcsRUFDWCxHQUFXOztVQUVMLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7VUFDdEMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7VUFDNUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLFVBQVU7O1FBQzVELE9BQWU7O1FBQ2YsWUFBb0I7SUFFeEIsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ2hEO1NBQU0sSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFlBQVksR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdDO1NBQU07UUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsWUFBWSxHQUFHLFNBQVMsQ0FBQztLQUMxQjtJQUVELE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUM7QUFDSixDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBZTs7VUFDeEUsVUFBVSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7O1VBQ2hFLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7UUFDekUsT0FBZTs7UUFDZixPQUFlO0lBRW5CLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNaLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO1NBQU0sSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ2pFLE9BQU8sR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0wsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNoQjtJQUVELE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxPQUFPO0tBQ2QsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBVzs7VUFDMUQsVUFBVSxHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7VUFDNUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFMUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geWVhclxuICogQHBhcmFtIHtudW1iZXJ9IGRvdyAtIHN0YXJ0LW9mLWZpcnN0LXdlZWtcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3kgLSBzdGFydC1vZi15ZWFyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gJy4vZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG5mdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhcjogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgY29uc3QgZndkID0gZG93IC0gZG95ICsgNztcbiAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICBjb25zdCBmd2RsdyA9IChjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cgKyA3KSAlIDc7XG5cbiAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKFxuICB5ZWFyOiBudW1iZXIsXG4gIHdlZWs6IG51bWJlcixcbiAgd2Vla2RheTogbnVtYmVyLFxuICBkb3c6IG51bWJlcixcbiAgZG95OiBudW1iZXJcbik6IHsgeWVhcjogbnVtYmVyOyBkYXlPZlllYXI6IG51bWJlciB9IHtcbiAgY29uc3QgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDc7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0O1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuICBsZXQgcmVzRGF5T2ZZZWFyOiBudW1iZXI7XG5cbiAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2Uge1xuICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogcmVzWWVhcixcbiAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla09mWWVhcihkYXRlOiBEYXRlLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IHsgd2VlazogbnVtYmVyOyB5ZWFyOiBudW1iZXIgfSB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gIGNvbnN0IHdlZWsgPSBNYXRoLmZsb29yKChnZXREYXlPZlllYXIoZGF0ZSwgaXNVVEMpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxO1xuICBsZXQgcmVzV2VlazogbnVtYmVyO1xuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xuXG4gIGlmICh3ZWVrIDwgMSkge1xuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgLSAxO1xuICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KSkge1xuICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSArIDE7XG4gIH0gZWxzZSB7XG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgICByZXNXZWVrID0gd2VlaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2VlazogcmVzV2VlayxcbiAgICB5ZWFyOiByZXNZZWFyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyOiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xuICBjb25zdCB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuXG4gIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuIl19