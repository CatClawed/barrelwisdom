/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length max-file-line-count
import { add, subtract } from '../index';
import { getDate, getFullYear, getHours, getMilliseconds, getMinutes, getMonth, getSeconds } from '../utils/date-getters';
import { setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds } from '../utils/date-setters';
import { cloneDate } from '../create/clone';
import { isArray, isBoolean, isDate, isDateValid, isFunction, isNumber, isObject, isString, isUndefined } from '../utils/type-checks';
import { formatDate } from '../format';
import { ISO_8601, RFC_2822 } from '../create/from-string-and-format';
import { getDateOffset, getUTCOffset, hasAlignedHourOffset, isDaylightSavingTime, setOffsetToParsedOffset, setUTCOffset } from '../units/offset';
import { isLeapYear, parseTwoDigitYear } from '../units/year';
import { isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore } from '../utils/date-compare';
import { daysInMonth } from '../units/month';
import { getDayOfWeek, getISODayOfWeek, getLocaleDayOfWeek, parseWeekday, setDayOfWeek, setISODayOfWeek, setLocaleDayOfWeek } from '../units/day-of-week';
import { getISOWeek, getWeek, setISOWeek, setWeek } from '../units/week';
import { getISOWeeksInYear, getISOWeekYear, getSetISOWeekYear, getSetWeekYear, getWeeksInYear, getWeekYear } from '../units/week-year';
import { endOf, startOf } from '../utils/start-end-of';
import { getQuarter, setQuarter } from '../units/quarter';
import { getDayOfYear, setDayOfYear } from '../units/day-of-year';
import { getZoneAbbr, getZoneName } from '../units/timezone';
import { diff } from '../moment/diff';
import { calendar } from '../moment/calendar';
import { defineLocale, getLocale, getSetGlobalLocale, listLocales } from '../locale/locales';
import { max, min } from '../moment/min-max';
import { isDuration } from '../duration/constructor';
import { createLocalOrUTC } from '../create/from-anything';
import { createDuration } from '../duration/create';
/** @type {?} */
export const moment = ((/** @type {?} */ (_moment)));
/**
 * @record
 */
export function MomentFn() { }
if (false) {
    /** @type {?} */
    MomentFn.prototype.ISO_8601;
    /** @type {?} */
    MomentFn.prototype.RFC_2822;
    /* Skipping unhandled member: (input?: DateInput | Khronos, format?: string | string[], localeKey?: string | boolean, strict?: boolean, isUTC?: boolean): Khronos;*/
    /**
     * @param {?=} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @return {?}
     */
    MomentFn.prototype.utc = function (input, format, localeKey, strict) { };
    /**
     * @param {?=} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @return {?}
     */
    MomentFn.prototype.parseZone = function (input, format, localeKey, strict) { };
    /**
     * @param {?} num
     * @return {?}
     */
    MomentFn.prototype.unix = function (num) { };
    /**
     * @param {?=} key
     * @param {?=} values
     * @return {?}
     */
    MomentFn.prototype.locale = function (key, values) { };
    /**
     * @param {?=} inp
     * @param {?=} unit
     * @return {?}
     */
    MomentFn.prototype.duration = function (inp, unit) { };
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    MomentFn.prototype.defineLocale = function (name, config) { };
    /**
     * @param {?} input
     * @return {?}
     */
    MomentFn.prototype.parseTwoDigitYear = function (input) { };
    /**
     * @param {?=} input
     * @return {?}
     */
    MomentFn.prototype.isDate = function (input) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.months = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.months = function (index) { };
    /**
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.months = function (format) { };
    /**
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.months = function (format, index) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.monthsShort = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.monthsShort = function (index) { };
    /**
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.monthsShort = function (format) { };
    /**
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.monthsShort = function (format, index) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.weekdays = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (index) { };
    /**
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (format) { };
    /**
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (format, index) { };
    /**
     * @param {?} localeSorted
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (localeSorted) { };
    /**
     * @param {?} localeSorted
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (localeSorted, index) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (localeSorted, format) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdays = function (localeSorted, format, index) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (index) { };
    /**
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (format) { };
    /**
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (format, index) { };
    /**
     * @param {?} localeSorted
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (localeSorted) { };
    /**
     * @param {?} localeSorted
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (localeSorted, index) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (localeSorted, format) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysShort = function (localeSorted, format, index) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (index) { };
    /**
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (format) { };
    /**
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (format, index) { };
    /**
     * @param {?} localeSorted
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (localeSorted) { };
    /**
     * @param {?} localeSorted
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (localeSorted, index) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (localeSorted, format) { };
    /**
     * @param {?} localeSorted
     * @param {?} format
     * @param {?} index
     * @return {?}
     */
    MomentFn.prototype.weekdaysMin = function (localeSorted, format, index) { };
    /**
     * @param {?} threshold
     * @return {?}
     */
    MomentFn.prototype.relativeTimeThreshold = function (threshold) { };
    /**
     * @param {?} threshold
     * @param {?} limit
     * @return {?}
     */
    MomentFn.prototype.relativeTimeThreshold = function (threshold, limit) { };
    /**
     * @param {...?} dates
     * @return {?}
     */
    MomentFn.prototype.min = function (dates) { };
    /**
     * @param {...?} dates
     * @return {?}
     */
    MomentFn.prototype.max = function (dates) { };
    /**
     * @param {?=} key
     * @return {?}
     */
    MomentFn.prototype.localeData = function (key) { };
    /**
     * @param {?} language
     * @param {?=} localeSpec
     * @return {?}
     */
    MomentFn.prototype.updateLocale = function (language, localeSpec) { };
    /**
     * @param {?} m
     * @param {?} now
     * @return {?}
     */
    MomentFn.prototype.calendarFormat = function (m, now) { };
    /**
     * @param {?} m
     * @param {?} now
     * @return {?}
     */
    MomentFn.prototype.calendarFormat = function (m, now) { };
    /**
     * @return {?}
     */
    MomentFn.prototype.invalid = function () { };
    /**
     * @return {?}
     */
    MomentFn.prototype.locales = function () { };
    /**
     * @param {?} m
     * @param {?=} keepTime
     * @return {?}
     */
    MomentFn.prototype.updateOffset = function (m, keepTime) { };
}
/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function _moment(input, format, localeKey, strict, isUTC) {
    if (input instanceof Khronos) {
        /** @type {?} */
        const _date = input.clone();
        return isUTC ? _date.utc() : _date;
    }
    if (isBoolean(localeKey)) {
        return new Khronos(input, format, null, localeKey, isUTC);
    }
    return new Khronos(input, format, localeKey, strict, isUTC);
}
moment.utc = (/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @return {?}
 */
(input, format, localeKey, strict) => {
    return _moment(input, format, localeKey, strict, true);
});
moment.parseZone = (/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @return {?}
 */
(input, format, localeKey, strict) => {
    return _moment(input, format, localeKey, strict, true).parseZone();
});
moment.locale = getSetGlobalLocale;
moment.localeData = (/**
 * @param {?=} key
 * @return {?}
 */
(key) => {
    if (key instanceof Khronos) {
        return key.localeData();
    }
    return getLocale(key);
});
// moment.utc = createUTC;
moment.unix = (/**
 * @param {?} inp
 * @return {?}
 */
(inp) => new Khronos(inp * 1000));
moment.ISO_8601 = ISO_8601;
moment.RFC_2822 = RFC_2822;
moment.defineLocale = defineLocale;
moment.parseTwoDigitYear = parseTwoDigitYear;
moment.isDate = isDate;
moment.invalid = (/**
 * @return {?}
 */
function _invalid() {
    return new Khronos(new Date(NaN));
});
// duration(inp?: Duration | DateInput | Khronos, unit?: MomentUnitOfTime): Duration;
moment.duration = (/**
 * @param {?=} input
 * @param {?=} unit
 * @return {?}
 */
(input, unit) => {
    /** @type {?} */
    const _unit = mapUnitOfTime(unit);
    if (isDate(input)) {
        throw new Error('todo implement');
    }
    if (input == null) {
        return createDuration();
    }
    if (isDuration(input)) {
        return createDuration(input, _unit, { _locale: input._locale });
    }
    if (isString(input) || isNumber(input) || isDuration(input) || isObject(input)) {
        return createDuration(input, _unit);
    }
    throw new Error('todo implement');
});
moment.min = (/**
 * @param {...?} dates
 * @return {?}
 */
function _min(...dates) {
    /** @type {?} */
    const _firstArg = dates[0];
    /** @type {?} */
    const _dates = (isArray(_firstArg) ? _firstArg : dates)
        // tslint:disable-next-line
        .map((/**
     * @param {?} date
     * @return {?}
     */
    (date) => _moment(date)))
        .map((/**
     * @param {?} date
     * @return {?}
     */
    date => date.toDate()));
    /** @type {?} */
    const _date = min(..._dates);
    return new Khronos(_date);
});
moment.max = (/**
 * @param {...?} dates
 * @return {?}
 */
function _max(...dates) {
    /** @type {?} */
    const _firstArg = dates[0];
    /** @type {?} */
    const _dates = (isArray(_firstArg) ? _firstArg : dates)
        // tslint:disable-next-line
        .map((/**
     * @param {?} date
     * @return {?}
     */
    (date) => _moment(date)))
        .map((/**
     * @param {?} date
     * @return {?}
     */
    date => date.toDate()));
    /** @type {?} */
    const _date = max(..._dates);
    return new Khronos(_date);
});
moment.locales = (/**
 * @return {?}
 */
() => {
    return listLocales();
});
/**
 * @record
 */
export function MomentInputObject() { }
if (false) {
    /** @type {?|undefined} */
    MomentInputObject.prototype.years;
    /** @type {?|undefined} */
    MomentInputObject.prototype.year;
    /** @type {?|undefined} */
    MomentInputObject.prototype.y;
    /** @type {?|undefined} */
    MomentInputObject.prototype.months;
    /** @type {?|undefined} */
    MomentInputObject.prototype.month;
    /** @type {?|undefined} */
    MomentInputObject.prototype.M;
    /** @type {?|undefined} */
    MomentInputObject.prototype.days;
    /** @type {?|undefined} */
    MomentInputObject.prototype.day;
    /** @type {?|undefined} */
    MomentInputObject.prototype.d;
    /** @type {?|undefined} */
    MomentInputObject.prototype.dates;
    /** @type {?|undefined} */
    MomentInputObject.prototype.date;
    /** @type {?|undefined} */
    MomentInputObject.prototype.D;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hours;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hour;
    /** @type {?|undefined} */
    MomentInputObject.prototype.h;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minutes;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minute;
    /** @type {?|undefined} */
    MomentInputObject.prototype.m;
    /** @type {?|undefined} */
    MomentInputObject.prototype.seconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.second;
    /** @type {?|undefined} */
    MomentInputObject.prototype.s;
    /** @type {?|undefined} */
    MomentInputObject.prototype.milliseconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.millisecond;
    /** @type {?|undefined} */
    MomentInputObject.prototype.ms;
    /** @type {?|undefined} */
    MomentInputObject.prototype.w;
    /** @type {?|undefined} */
    MomentInputObject.prototype.week;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weeks;
    /** @type {?|undefined} */
    MomentInputObject.prototype.Q;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarter;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarters;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weekYear;
}
/** @type {?} */
const _unitsPriority = {
    year: 1,
    month: 8,
    week: 5,
    isoWeek: 5,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    hours: 13,
    weekYear: 1,
    isoWeekYear: 1,
    quarter: 7,
    date: 9,
    dayOfYear: 4,
    minutes: 14,
    seconds: 15,
    milliseconds: 16
};
// todo: do I need 2 mappers?
/** @type {?} */
const _timeHashMap = {
    y: 'year',
    years: 'year',
    year: 'year',
    M: 'month',
    months: 'month',
    month: 'month',
    w: 'week',
    weeks: 'week',
    week: 'week',
    d: 'day',
    days: 'day',
    day: 'day',
    date: 'date',
    dates: 'date',
    D: 'date',
    h: 'hours',
    hour: 'hours',
    hours: 'hours',
    m: 'minutes',
    minute: 'minutes',
    minutes: 'minutes',
    s: 'seconds',
    second: 'seconds',
    seconds: 'seconds',
    ms: 'milliseconds',
    millisecond: 'milliseconds',
    milliseconds: 'milliseconds',
    quarter: 'quarter',
    quarters: 'quarter',
    q: 'quarter',
    Q: 'quarter',
    isoWeek: 'isoWeek',
    isoWeeks: 'isoWeek',
    W: 'isoWeek',
    weekYear: 'weekYear',
    weekYears: 'weekYear',
    gg: 'weekYears',
    isoWeekYear: 'isoWeekYear',
    isoWeekYears: 'isoWeekYear',
    GG: 'isoWeekYear',
    dayOfYear: 'dayOfYear',
    dayOfYears: 'dayOfYear',
    DDD: 'dayOfYear',
    weekday: 'weekday',
    weekdays: 'weekday',
    e: 'weekday',
    isoWeekday: 'isoWeekday',
    isoWeekdays: 'isoWeekday',
    E: 'isoWeekday'
};
/**
 * @param {?} period
 * @return {?}
 */
function mapUnitOfTime(period) {
    return (/** @type {?} */ (_timeHashMap[period]));
}
/**
 * @param {?} obj
 * @return {?}
 */
function mapMomentInputObject(obj) {
    /** @type {?} */
    const _res = {};
    return Object.keys(obj)
        .reduce((/**
     * @param {?} res
     * @param {?} key
     * @return {?}
     */
    (res, key) => {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }), _res);
}
export class Khronos {
    /**
     * @param {?=} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @param {?=} offset
     */
    constructor(input, format, localeKey, strict = false, isUTC = false, offset) {
        this._date = new Date();
        this._isUTC = false;
        // locale will be needed to format invalid date message
        this._locale = getLocale(localeKey);
        // parse invalid input
        if (input === '' || input === null || (isNumber(input) && isNaN(input))) {
            this._date = new Date(NaN);
            return this;
        }
        this._isUTC = isUTC;
        if (this._isUTC) {
            this._offset = 0;
        }
        if (offset || offset === 0) {
            this._offset = offset;
        }
        this._isStrict = strict;
        this._format = format;
        if (!input && input !== 0 && !format) {
            this._date = new Date();
            return this;
        }
        if (isDate(input)) {
            this._date = cloneDate(input);
            return this;
        }
        // this._date = parseDate(input, format, localeKey, strict, isUTC);
        /** @type {?} */
        const config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        this._date = config._d;
        this._offset = isNumber(config._offset) ? config._offset : this._offset;
        this._isUTC = config._isUTC;
        this._isStrict = config._strict;
        this._format = config._f;
        this._tzm = config._tzm;
    }
    /**
     * @return {?}
     */
    _toConfig() {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    }
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    locale(localeKey) {
        if (isUndefined(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        /** @type {?} */
        const newLocaleData = getLocale(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
    /**
     * @return {?}
     */
    localeData() {
        return this._locale;
    }
    // Basic
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    add(val, period) {
        if (isString(val)) {
            this._date = add(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (isNumber(val)) {
            this._date = add(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            /** @type {?} */
            const _mapped = mapMomentInputObject(val);
            Object.keys(_mapped)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => add(this._date, _mapped[key], key)));
        }
        return this;
    }
    // fixme: for some reason here 'null' for time is fine
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    calendar(time, formats) {
        /** @type {?} */
        const _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        /** @type {?} */
        const _offset = (this._offset || 0) - (_time._offset || 0);
        /** @type {?} */
        const _config = Object.assign(this._toConfig(), { _offset });
        return calendar(this._date, _time._date, formats, this._locale, _config);
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    }
    /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    diff(b, unitOfTime, precise) {
        /** @type {?} */
        const unit = mapUnitOfTime(unitOfTime);
        /** @type {?} */
        const _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return diff(this._date, _b.toDate(), unit, precise, this._toConfig());
    }
    /**
     * @param {?=} period
     * @return {?}
     */
    endOf(period) {
        /** @type {?} */
        const _per = mapUnitOfTime(period);
        this._date = endOf(this._date, _per, this._isUTC);
        return this;
    }
    /**
     * @param {?=} format
     * @return {?}
     */
    format(format) {
        return formatDate(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    }
    // todo: implement
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    from(time, withoutSuffix) {
        /** @type {?} */
        const _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return createDuration({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    }
    /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    fromNow(withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    }
    /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    to(inp, suffix) {
        throw new Error(`TODO: Implement`);
    }
    /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    toNow(withoutPrefix) {
        throw new Error(`TODO: Implement`);
    }
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    subtract(val, period) {
        if (isString(val)) {
            this._date = subtract(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (isNumber(val)) {
            this._date = subtract(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            /** @type {?} */
            const _mapped = mapMomentInputObject(val);
            Object.keys(_mapped)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => subtract(this._date, _mapped[key], key)));
        }
        return this;
    }
    /**
     * @param {?} period
     * @return {?}
     */
    get(period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        /** @type {?} */
        const unit = mapUnitOfTime(period);
        switch (unit) {
            case 'year':
                return this.year();
            case 'month':
                return this.month();
            // | 'week'
            case 'date':
                return this.date();
            case 'day':
                return this.day();
            case 'hours':
                return this.hours();
            case 'minutes':
                return this.minutes();
            case 'seconds':
                return this.seconds();
            case 'milliseconds':
                return this.milliseconds();
            case 'week':
                return this.week();
            case 'isoWeek':
                return this.isoWeek();
            case 'weekYear':
                return this.weekYear();
            case 'isoWeekYear':
                return this.isoWeekYear();
            case 'weekday':
                return this.weekday();
            case 'isoWeekday':
                return this.isoWeekday();
            case 'quarter':
                return this.quarter();
            default:
                throw new Error(`Unknown moment.get('${period}')`);
        }
    }
    /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    set(period, input) {
        if (isString(period)) {
            /** @type {?} */
            const unit = mapUnitOfTime(period);
            switch (unit) {
                case 'year':
                    return this.year(input);
                case 'month':
                    return this.month(input);
                // | 'week'
                case 'day':
                    return this.day(input);
                case 'date':
                    return this.date(input);
                case 'hours':
                    return this.hours(input);
                case 'minutes':
                    return this.minutes(input);
                case 'seconds':
                    return this.seconds(input);
                case 'milliseconds':
                    return this.milliseconds(input);
                case 'week':
                    return this.week(input);
                case 'isoWeek':
                    return this.isoWeek(input);
                case 'weekYear':
                    return this.weekYear(input);
                case 'isoWeekYear':
                    return this.isoWeekYear(input);
                case 'weekday':
                    return this.weekday(input);
                case 'isoWeekday':
                    return this.isoWeekday(input);
                case 'quarter':
                    return this.quarter(input);
                default:
                    throw new Error(`Unknown moment.get('${period}')`);
            }
        }
        if (isObject(period)) {
            /** @type {?} */
            const _mapped = mapMomentInputObject(period);
            Object.keys(_mapped)
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return _unitsPriority[a] - _unitsPriority[b];
            }))
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.set(key, _mapped[key])));
        }
        return this;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    /**
     * @return {?}
     */
    toISOString() {
        if (!this.isValid()) {
            return null;
        }
        if (getFullYear(this._date, true) < 0 || getFullYear(this._date, true) > 9999) {
            return this.format('YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        }
        return this.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    /**
     * @return {?}
     */
    inspect() {
        throw new Error('TODO: implement');
    }
    /**
     * @return {?}
     */
    toJSON() {
        return this.toISOString();
    }
    /**
     * @return {?}
     */
    toDate() {
        return new Date(this.valueOf());
    }
    /**
     * @return {?}
     */
    toObject() {
        return {
            // years: getFullYear(this._date, this._isUTC),
            // months: getMonth(this._date, this._isUTC),
            year: getFullYear(this._date, this._isUTC),
            month: getMonth(this._date, this._isUTC),
            date: getDate(this._date, this._isUTC),
            hours: getHours(this._date, this._isUTC),
            minutes: getMinutes(this._date, this._isUTC),
            seconds: getSeconds(this._date, this._isUTC),
            milliseconds: getMilliseconds(this._date, this._isUTC)
        };
    }
    /**
     * @return {?}
     */
    toArray() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    }
    // Dates boolean algebra
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isAfter(date, unit) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isAfter(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isBefore(date, unit) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBefore(this.toDate(), date.toDate(), _unit);
    }
    /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    isBetween(from, to, unit, inclusivity) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBetween(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSame(date, unit) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSame(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSameOrAfter(date, unit) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrAfter(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSameOrBefore(date, unit) {
        /** @type {?} */
        const _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrBefore(this._date, date.toDate(), _unit);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isDateValid(this._date);
    }
    /**
     * @return {?}
     */
    valueOf() {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    }
    /**
     * @return {?}
     */
    unix() {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    }
    /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    utcOffset(b, keepLocalTime) {
        /** @type {?} */
        const _config = this._toConfig();
        if (!b && b !== 0) {
            return getUTCOffset(this._date, _config);
        }
        this._date = setUTCOffset(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    }
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    utc(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    local(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this._date), 'm');
            }
        }
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    parseZone(input) {
        /** @type {?} */
        const _config = this._toConfig();
        this._date = setOffsetToParsedOffset(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    hasAlignedHourOffset(input) {
        return hasAlignedHourOffset(this._date, input ? input._date : void 0);
    }
    /**
     * @return {?}
     */
    isDST() {
        return isDaylightSavingTime(this._date);
    }
    /**
     * @return {?}
     */
    isLocal() {
        return !this._isUTC;
    }
    /**
     * @return {?}
     */
    isUtcOffset() {
        return this._isUTC;
    }
    /**
     * @return {?}
     */
    isUTC() {
        return this.isUtc();
    }
    /**
     * @return {?}
     */
    isUtc() {
        return this._isUTC && this._offset === 0;
    }
    // Timezone
    /**
     * @return {?}
     */
    zoneAbbr() {
        return getZoneAbbr(this._isUTC);
    }
    /**
     * @return {?}
     */
    zoneName() {
        return getZoneName(this._isUTC);
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    year(year) {
        if (!year && year !== 0) {
            return getFullYear(this._date, this._isUTC);
        }
        this._date = cloneDate(setFullYear(this._date, year));
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    weekYear(val) {
        if (!val && val !== 0) {
            return getWeekYear(this._date, this._locale, this.isUTC());
        }
        /** @type {?} */
        const date = getSetWeekYear(this._date, val, this._locale, this.isUTC());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeekYear(val) {
        if (!val && val !== 0) {
            return getISOWeekYear(this._date, this.isUTC());
        }
        /** @type {?} */
        const date = getSetISOWeekYear(this._date, val, this.isUtc());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    }
    /**
     * @return {?}
     */
    isLeapYear() {
        return isLeapYear(getFullYear(this.toDate(), this.isUTC()));
    }
    /**
     * @param {?=} month
     * @return {?}
     */
    month(month) {
        if (!month && month !== 0) {
            return getMonth(this._date, this._isUTC);
        }
        /** @type {?} */
        let _month = month;
        if (isString(month)) {
            /** @type {?} */
            const locale = this._locale || getLocale();
            _month = locale.monthsParse(month);
        }
        if (isNumber(_month)) {
            this._date = cloneDate(setMonth(this._date, _month, this._isUTC));
        }
        return this;
    }
    /**
     * @param {?=} hours
     * @return {?}
     */
    hour(hours) {
        return this.hours(hours);
    }
    /**
     * @param {?=} hours
     * @return {?}
     */
    hours(hours) {
        if (!hours && hours !== 0) {
            return getHours(this._date, this._isUTC);
        }
        this._date = cloneDate(setHours(this._date, hours, this._isUTC));
        return this;
    }
    /**
     * @param {?=} minutes
     * @return {?}
     */
    minute(minutes) {
        return this.minutes(minutes);
    }
    /**
     * @param {?=} minutes
     * @return {?}
     */
    minutes(minutes) {
        if (!minutes && minutes !== 0) {
            return getMinutes(this._date, this._isUTC);
        }
        this._date = cloneDate(setMinutes(this._date, minutes, this._isUTC));
        return this;
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    second(seconds) {
        return this.seconds(seconds);
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    seconds(seconds) {
        if (!seconds && seconds !== 0) {
            return getSeconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setSeconds(this._date, seconds, this._isUTC));
        return this;
    }
    /**
     * @param {?=} ms
     * @return {?}
     */
    millisecond(ms) {
        return this.milliseconds(ms);
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    milliseconds(seconds) {
        if (!seconds && seconds !== 0) {
            return getMilliseconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setMilliseconds(this._date, seconds, this._isUTC));
        return this;
    }
    /**
     * @param {?=} date
     * @return {?}
     */
    date(date) {
        if (!date && date !== 0) {
            return getDate(this._date, this._isUTC);
        }
        this._date = cloneDate(setDate(this._date, date, this._isUTC));
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    day(input) {
        if (!input && input !== 0) {
            return getDayOfWeek(this._date, this._isUTC);
        }
        /** @type {?} */
        let _input = input;
        if (isString(input)) {
            _input = parseWeekday(input, this._locale);
        }
        if (isNumber(_input)) {
            this._date = setDayOfWeek(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    weekday(val) {
        if (!val && val !== 0) {
            return getLocaleDayOfWeek(this._date, this._locale, this._isUTC);
        }
        this._date = setLocaleDayOfWeek(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeekday(val) {
        if (!val && val !== 0) {
            return getISODayOfWeek(this._date);
        }
        this._date = setISODayOfWeek(this._date, val);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    dayOfYear(val) {
        if (!val && val !== 0) {
            return getDayOfYear(this._date);
        }
        this._date = setDayOfYear(this._date, val);
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    week(input) {
        if (!input && input !== 0) {
            return getWeek(this._date, this._locale);
        }
        this._date = setWeek(this._date, input, this._locale);
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    weeks(input) {
        return this.week(input);
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeek(val) {
        if (!val && val !== 0) {
            return getISOWeek(this._date);
        }
        this._date = setISOWeek(this._date, val);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeeks(val) {
        return this.isoWeek(val);
    }
    /**
     * @return {?}
     */
    weeksInYear() {
        return getWeeksInYear(this._date, this._isUTC, this._locale);
    }
    /**
     * @return {?}
     */
    isoWeeksInYear() {
        return getISOWeeksInYear(this._date, this._isUTC);
    }
    /**
     * @return {?}
     */
    daysInMonth() {
        return daysInMonth(getFullYear(this._date, this._isUTC), getMonth(this._date, this._isUTC));
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    quarter(val) {
        if (!val && val !== 0) {
            return getQuarter(this._date, this._isUTC);
        }
        this._date = setQuarter(this._date, val, this._isUTC);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    quarters(val) {
        return this.quarter(val);
    }
    /**
     * @param {?=} period
     * @return {?}
     */
    startOf(period) {
        /** @type {?} */
        const _per = mapUnitOfTime(period);
        this._date = startOf(this._date, _per, this._isUTC);
        return this;
    }
}
if (false) {
    /** @type {?} */
    Khronos.prototype._date;
    /** @type {?} */
    Khronos.prototype._isUTC;
    /** @type {?} */
    Khronos.prototype._isStrict;
    /** @type {?} */
    Khronos.prototype._locale;
    /** @type {?} */
    Khronos.prototype._format;
    /** @type {?} */
    Khronos.prototype._offset;
    /** @type {?} */
    Khronos.prototype._tzm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ0ZXN0L2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBYSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUNMLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFFbEYsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQ3JFLFVBQVUsRUFDWCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFDeEUsV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFLE9BQU8sRUFDTCxhQUFhLEVBQ2IsWUFBWSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUNqRixZQUFZLEVBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVH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QUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBS0QsUUFBUSxDQUFDLEdBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQXlCOztjQUN6QixJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBRUY7OztJQTF3QkMsd0JBQXlCOztJQUN6Qix5QkFBZTs7SUFDZiw0QkFBbUI7O0lBQ25CLDBCQUFnQjs7SUFDaEIsMEJBQTJCOztJQUMzQiwwQkFBZ0I7O0lBQ2hCLHVCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoIG1heC1maWxlLWxpbmUtY291bnRcbmltcG9ydCB7IGFkZCwgcGFyc2VEYXRlLCBzdWJ0cmFjdCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRIb3VycywgZ2V0TWlsbGlzZWNvbmRzLCBnZXRNaW51dGVzLCBnZXRNb250aCwgZ2V0U2Vjb25kcyxcbiAgZ2V0VW5peFRpbWVcbn0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7XG4gIHNldERhdGUsIHNldEZ1bGxZZWFyLCBzZXRIb3Vycywgc2V0TWlsbGlzZWNvbmRzLCBzZXRNaW51dGVzLCBzZXRNb250aCxcbiAgc2V0U2Vjb25kc1xufSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzQm9vbGVhbiwgaXNEYXRlLCBpc0RhdGVWYWxpZCwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZyxcbiAgaXNVbmRlZmluZWRcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2Zvcm1hdCc7XG5pbXBvcnQgeyBJU09fODYwMSwgUkZDXzI4MjIgfSBmcm9tICcuLi9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7XG4gIGdldERhdGVPZmZzZXQsXG4gIGdldFVUQ09mZnNldCwgaGFzQWxpZ25lZEhvdXJPZmZzZXQsIGlzRGF5bGlnaHRTYXZpbmdUaW1lLCBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCxcbiAgc2V0VVRDT2Zmc2V0XG59IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpc0xlYXBZZWFyLCBwYXJzZVR3b0RpZ2l0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUsIGlzQmV0d2VlbiwgaXNTYW1lLCBpc1NhbWVPckFmdGVyLCBpc1NhbWVPckJlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5pbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7XG4gIGdldERheU9mV2VlaywgZ2V0SVNPRGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXlPZldlZWssIHBhcnNlV2Vla2RheSwgc2V0RGF5T2ZXZWVrLCBzZXRJU09EYXlPZldlZWssXG4gIHNldExvY2FsZURheU9mV2Vla1xufSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBnZXRJU09XZWVrLCBnZXRXZWVrLCBzZXRJU09XZWVrLCBzZXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5pbXBvcnQge1xuICBnZXRJU09XZWVrc0luWWVhciwgZ2V0SVNPV2Vla1llYXIsIGdldFNldElTT1dlZWtZZWFyLCBnZXRTZXRXZWVrWWVhciwgZ2V0V2Vla3NJblllYXIsXG4gIGdldFdlZWtZZWFyXG59IGZyb20gJy4uL3VuaXRzL3dlZWsteWVhcic7XG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XG5pbXBvcnQgeyBnZXRRdWFydGVyLCBzZXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XG5pbXBvcnQgeyBnZXREYXlPZlllYXIsIHNldERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcbmltcG9ydCB7IGdldFpvbmVBYmJyLCBnZXRab25lTmFtZSB9IGZyb20gJy4uL3VuaXRzL3RpbWV6b25lJztcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuLi9tb21lbnQvZGlmZic7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNhbGVuZGFyLCBDYWxlbmRhclNwZWMgfSBmcm9tICcuLi9tb21lbnQvY2FsZW5kYXInO1xuaW1wb3J0IHsgZGVmaW5lTG9jYWxlLCBnZXRMb2NhbGUsIGdldFNldEdsb2JhbExvY2FsZSwgbGlzdExvY2FsZXMgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gJy4uL21vbWVudC9taW4tbWF4JztcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4uL2NyZWF0ZS9mcm9tLWFueXRoaW5nJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY3JlYXRlJztcblxuZXhwb3J0IHR5cGUgRGF0ZUlucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSB8IHN0cmluZ1tdIHwgRGF0ZUFycmF5IHwgTW9tZW50SW5wdXRPYmplY3Q7XG5cbmV4cG9ydCBjb25zdCBtb21lbnQ6IE1vbWVudEZuID0gKF9tb21lbnQgYXMgTW9tZW50Rm4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vbWVudEZuIHtcbiAgKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IEtocm9ub3M7XG5cbiAgSVNPXzg2MDE6IHN0cmluZztcbiAgUkZDXzI4MjI6IHN0cmluZztcblxuICB1dGMoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3M7XG5cbiAgcGFyc2Vab25lKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zO1xuXG4gIHVuaXgobnVtOiBudW1iZXIpOiBLaHJvbm9zO1xuXG4gIGxvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZztcblxuICBkdXJhdGlvbihpbnA/OiBEdXJhdGlvbiB8IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogRHVyYXRpb247XG5cbiAgZGVmaW5lTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZTtcblxuICBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dDogc3RyaW5nKTogbnVtYmVyO1xuXG4gIGlzRGF0ZShpbnB1dD86IGFueSk6IGlucHV0IGlzIERhdGU7XG5cbiAgbW9udGhzKCk6IHN0cmluZ1tdO1xuXG4gIG1vbnRocyhpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1vbnRocyhmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIG1vbnRocyhmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICBtb250aHNTaG9ydCgpOiBzdHJpbmdbXTtcblxuICBtb250aHNTaG9ydChpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIG1vbnRoc1Nob3J0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgbW9udGhzU2hvcnQoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXMoKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXMoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5cyhmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzKGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c1Nob3J0KCk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzU2hvcnQoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c1Nob3J0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNTaG9ydChmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c01pbihpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzTWluKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNNaW4oZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZyk6IG51bWJlciB8IGJvb2xlYW47XG5cbiAgcmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogYm9vbGVhbjtcblxuICBtaW4oLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3M7XG5cbiAgbWF4KC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zO1xuXG4gIGxvY2FsZURhdGEoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogTG9jYWxlO1xuXG4gIHVwZGF0ZUxvY2FsZShsYW5ndWFnZTogc3RyaW5nLCBsb2NhbGVTcGVjPzogTG9jYWxlRGF0YSk6IExvY2FsZTtcblxuICBjYWxlbmRhckZvcm1hdChtOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmc7XG5cbiAgLy8gdG9kbzogcmVtb3ZlIHRoaXNcbiAgY2FsZW5kYXJGb3JtYXQobTogS2hyb25vcywgbm93OiBLaHJvbm9zKTogc3RyaW5nO1xuXG4gIC8vIHRvZG86IGltcGxlbWVudFxuICBpbnZhbGlkKCk6IEtocm9ub3M7XG5cbiAgbG9jYWxlcygpOiBzdHJpbmdbXTtcblxuICAvLyB0b2RvOiBpbXBsZW1lbnRcbiAgdXBkYXRlT2Zmc2V0KG06IEtocm9ub3MsIGtlZXBUaW1lPzogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIF9tb21lbnQoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogS2hyb25vcyB7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIEtocm9ub3MpIHtcbiAgICBjb25zdCBfZGF0ZSA9IGlucHV0LmNsb25lKCk7XG5cbiAgICByZXR1cm4gaXNVVEMgPyBfZGF0ZS51dGMoKSA6IF9kYXRlO1xuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihsb2NhbGVLZXkpKSB7XG4gICAgcmV0dXJuIG5ldyBLaHJvbm9zKGlucHV0LCBmb3JtYXQsIG51bGwsIGxvY2FsZUtleSwgaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBLaHJvbm9zKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG59XG5cbm1vbWVudC51dGMgPSAoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zID0+IHtcbiAgcmV0dXJuIF9tb21lbnQoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIHRydWUpO1xufTtcblxubW9tZW50LnBhcnNlWm9uZSA9IChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3MgPT4ge1xuICByZXR1cm4gX21vbWVudChpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgdHJ1ZSkucGFyc2Vab25lKCk7XG59O1xuXG5tb21lbnQubG9jYWxlID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xubW9tZW50LmxvY2FsZURhdGEgPSAoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogTG9jYWxlID0+IHtcbiAgaWYgKGtleSBpbnN0YW5jZW9mIEtocm9ub3MpIHtcbiAgICByZXR1cm4ga2V5LmxvY2FsZURhdGEoKTtcbiAgfVxuXG4gIHJldHVybiBnZXRMb2NhbGUoa2V5KTtcbn07XG5cbi8vIG1vbWVudC51dGMgPSBjcmVhdGVVVEM7XG5tb21lbnQudW5peCA9IChpbnA6IG51bWJlcikgPT4gbmV3IEtocm9ub3MoaW5wICogMTAwMCk7XG5tb21lbnQuSVNPXzg2MDEgPSBJU09fODYwMTtcbm1vbWVudC5SRkNfMjgyMiA9IFJGQ18yODIyO1xubW9tZW50LmRlZmluZUxvY2FsZSA9IGRlZmluZUxvY2FsZTtcbm1vbWVudC5wYXJzZVR3b0RpZ2l0WWVhciA9IHBhcnNlVHdvRGlnaXRZZWFyO1xubW9tZW50LmlzRGF0ZSA9IGlzRGF0ZTtcbm1vbWVudC5pbnZhbGlkID0gZnVuY3Rpb24gX2ludmFsaWQoKTogS2hyb25vcyB7XG4gIHJldHVybiBuZXcgS2hyb25vcyhuZXcgRGF0ZShOYU4pKTtcbn07XG5cbi8vIGR1cmF0aW9uKGlucD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbjtcbm1vbWVudC5kdXJhdGlvbiA9IChpbnB1dD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbiA9PiB7XG4gIGNvbnN0IF91bml0ID0gbWFwVW5pdE9mVGltZSh1bml0KTtcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvZG8gaW1wbGVtZW50Jyk7XG4gIH1cblxuICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbigpO1xuICB9XG5cbiAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBfdW5pdCwgeyBfbG9jYWxlOiBpbnB1dC5fbG9jYWxlIH0pO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSB8fCBpc051bWJlcihpbnB1dCkgfHwgaXNEdXJhdGlvbihpbnB1dCkgfHwgaXNPYmplY3Q8RGF0ZU9iamVjdD4oaW5wdXQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBfdW5pdCk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3RvZG8gaW1wbGVtZW50Jyk7XG59O1xuXG5tb21lbnQubWluID0gZnVuY3Rpb24gX21pbiguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcyB7XG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xuICBjb25zdCBfZGF0ZXMgPSAoaXNBcnJheShfZmlyc3RBcmcpID8gX2ZpcnN0QXJnIDogZGF0ZXMpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIC5tYXAoKGRhdGU6IEtocm9ub3MpID0+IF9tb21lbnQoZGF0ZSkpXG4gICAgLm1hcChkYXRlID0+IGRhdGUudG9EYXRlKCkpO1xuXG4gIGNvbnN0IF9kYXRlID0gbWluKC4uLl9kYXRlcyk7XG5cbiAgcmV0dXJuIG5ldyBLaHJvbm9zKF9kYXRlKTtcbn07XG5cbm1vbWVudC5tYXggPSBmdW5jdGlvbiBfbWF4KC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zIHtcbiAgY29uc3QgX2ZpcnN0QXJnID0gZGF0ZXNbMF07XG4gIGNvbnN0IF9kYXRlcyA9IChpc0FycmF5KF9maXJzdEFyZykgPyBfZmlyc3RBcmcgOiBkYXRlcylcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgLm1hcCgoZGF0ZTogS2hyb25vcykgPT4gX21vbWVudChkYXRlKSlcbiAgICAubWFwKGRhdGUgPT4gZGF0ZS50b0RhdGUoKSk7XG5cbiAgY29uc3QgX2RhdGUgPSBtYXgoLi4uX2RhdGVzKTtcblxuICByZXR1cm4gbmV3IEtocm9ub3MoX2RhdGUpO1xufTtcblxubW9tZW50LmxvY2FsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuICByZXR1cm4gbGlzdExvY2FsZXMoKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9tZW50SW5wdXRPYmplY3Qge1xuICB5ZWFycz86IG51bWJlcjtcbiAgeWVhcj86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcblxuICBtb250aHM/OiBudW1iZXI7XG4gIG1vbnRoPzogbnVtYmVyO1xuICBNPzogbnVtYmVyO1xuXG4gIGRheXM/OiBudW1iZXI7XG4gIGRheT86IG51bWJlcjtcbiAgZD86IG51bWJlcjtcblxuICBkYXRlcz86IG51bWJlcjtcbiAgZGF0ZT86IG51bWJlcjtcbiAgRD86IG51bWJlcjtcblxuICBob3Vycz86IG51bWJlcjtcbiAgaG91cj86IG51bWJlcjtcbiAgaD86IG51bWJlcjtcblxuICBtaW51dGVzPzogbnVtYmVyO1xuICBtaW51dGU/OiBudW1iZXI7XG4gIG0/OiBudW1iZXI7XG5cbiAgc2Vjb25kcz86IG51bWJlcjtcbiAgc2Vjb25kPzogbnVtYmVyO1xuICBzPzogbnVtYmVyO1xuXG4gIG1pbGxpc2Vjb25kcz86IG51bWJlcjtcbiAgbWlsbGlzZWNvbmQ/OiBudW1iZXI7XG4gIG1zPzogbnVtYmVyO1xuXG4gIHc/OiBudW1iZXI7XG4gIHdlZWs/OiBudW1iZXI7XG4gIHdlZWtzPzogbnVtYmVyO1xuXG4gIFE/OiBudW1iZXI7XG4gIHF1YXJ0ZXI/OiBudW1iZXI7XG4gIHF1YXJ0ZXJzPzogbnVtYmVyO1xuXG4gIHdlZWtZZWFyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBNb21lbnRVbml0T2ZUaW1lID0gKFxuICAneWVhcicgfCAneWVhcnMnIHwgJ3knIHxcbiAgJ21vbnRoJyB8ICdtb250aHMnIHwgJ00nIHxcbiAgJ3dlZWsnIHwgJ3dlZWtzJyB8ICd3JyB8XG4gICdkYXknIHwgJ2RheXMnIHwgJ2QnIHxcbiAgJ2hvdXInIHwgJ2hvdXJzJyB8ICdoJyB8XG4gICdtaW51dGUnIHwgJ21pbnV0ZXMnIHwgJ20nIHxcbiAgJ3NlY29uZCcgfCAnc2Vjb25kcycgfCAncycgfFxuICAnbWlsbGlzZWNvbmQnIHwgJ21pbGxpc2Vjb25kcycgfCAnbXMnIHxcbiAgJ3EnIHwgJ3F1YXJ0ZXInIHwgJ3F1YXJ0ZXJzJyB8ICdRJyB8XG4gICdpc29XZWVrJyB8ICdpc29XZWVrcycgfCAnVycgfFxuICAnZGF0ZScgfCAnZGF0ZXMnIHwgJ0QnXG4gICk7XG5cbmV4cG9ydCB0eXBlIE1vbWVudEFsbCA9IE1vbWVudFVuaXRPZlRpbWUgfFxuICAnd2Vla1llYXInIHwgJ3dlZWtZZWFycycgfCAnZ2cnIHxcbiAgJ2lzb1dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcnMnIHwgJ0dHJyB8XG4gICdkYXlPZlllYXInIHwgJ2RheU9mWWVhcnMnIHwgJ0RERCcgfFxuICAnd2Vla2RheScgfCAnd2Vla2RheXMnIHwgJ2UnIHxcbiAgJ2lzb1dlZWtkYXknIHwgJ2lzb1dlZWtkYXlzJyB8ICdFJztcblxuY29uc3QgX3VuaXRzUHJpb3JpdHk6IHtba2V5IGluIFVuaXRPZlRpbWVdOiBudW1iZXJ9ID0ge1xuICB5ZWFyOiAxLFxuICBtb250aDogOCxcbiAgd2VlazogNSxcbiAgaXNvV2VlazogNSxcbiAgZGF5OiAxMSxcbiAgd2Vla2RheTogMTEsXG4gIGlzb1dlZWtkYXk6IDExLFxuICBob3VyczogMTMsXG4gIHdlZWtZZWFyOiAxLFxuICBpc29XZWVrWWVhcjogMSxcbiAgcXVhcnRlcjogNyxcbiAgZGF0ZTogOSxcbiAgZGF5T2ZZZWFyOiA0LFxuICBtaW51dGVzOiAxNCxcbiAgc2Vjb25kczogMTUsXG4gIG1pbGxpc2Vjb25kczogMTZcbn07XG5cbi8vIHRvZG86IGRvIEkgbmVlZCAyIG1hcHBlcnM/XG5jb25zdCBfdGltZUhhc2hNYXA6IHsgW2tleSBpbiBNb21lbnRBbGxdOiBVbml0T2ZUaW1lIHwgc3RyaW5nIH0gPSB7XG4gIHk6ICd5ZWFyJyxcbiAgeWVhcnM6ICd5ZWFyJyxcbiAgeWVhcjogJ3llYXInLFxuICBNOiAnbW9udGgnLFxuICBtb250aHM6ICdtb250aCcsXG4gIG1vbnRoOiAnbW9udGgnLFxuICB3OiAnd2VlaycsXG4gIHdlZWtzOiAnd2VlaycsXG4gIHdlZWs6ICd3ZWVrJyxcblxuICBkOiAnZGF5JyxcbiAgZGF5czogJ2RheScsXG4gIGRheTogJ2RheScsXG5cbiAgZGF0ZTogJ2RhdGUnLFxuICBkYXRlczogJ2RhdGUnLFxuICBEOiAnZGF0ZScsXG5cbiAgaDogJ2hvdXJzJyxcbiAgaG91cjogJ2hvdXJzJyxcbiAgaG91cnM6ICdob3VycycsXG4gIG06ICdtaW51dGVzJyxcbiAgbWludXRlOiAnbWludXRlcycsXG4gIG1pbnV0ZXM6ICdtaW51dGVzJyxcbiAgczogJ3NlY29uZHMnLFxuICBzZWNvbmQ6ICdzZWNvbmRzJyxcbiAgc2Vjb25kczogJ3NlY29uZHMnLFxuICBtczogJ21pbGxpc2Vjb25kcycsXG4gIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJyxcbiAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmRzJyxcbiAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxuICBxdWFydGVyczogJ3F1YXJ0ZXInLFxuICBxOiAncXVhcnRlcicsXG4gIFE6ICdxdWFydGVyJyxcbiAgaXNvV2VlazogJ2lzb1dlZWsnLFxuICBpc29XZWVrczogJ2lzb1dlZWsnLFxuICBXOiAnaXNvV2VlaycsXG4gIHdlZWtZZWFyOiAnd2Vla1llYXInLFxuICB3ZWVrWWVhcnM6ICd3ZWVrWWVhcicsXG4gIGdnOiAnd2Vla1llYXJzJyxcbiAgaXNvV2Vla1llYXI6ICdpc29XZWVrWWVhcicsXG4gIGlzb1dlZWtZZWFyczogJ2lzb1dlZWtZZWFyJyxcbiAgR0c6ICdpc29XZWVrWWVhcicsXG4gIGRheU9mWWVhcjogJ2RheU9mWWVhcicsXG4gIGRheU9mWWVhcnM6ICdkYXlPZlllYXInLFxuICBEREQ6ICdkYXlPZlllYXInLFxuICB3ZWVrZGF5OiAnd2Vla2RheScsXG4gIHdlZWtkYXlzOiAnd2Vla2RheScsXG4gIGU6ICd3ZWVrZGF5JyxcbiAgaXNvV2Vla2RheTogJ2lzb1dlZWtkYXknLFxuICBpc29XZWVrZGF5czogJ2lzb1dlZWtkYXknLFxuICBFOiAnaXNvV2Vla2RheSdcbn07XG5cbmZ1bmN0aW9uIG1hcFVuaXRPZlRpbWUocGVyaW9kOiBNb21lbnRBbGwpOiBVbml0T2ZUaW1lIHtcbiAgcmV0dXJuIF90aW1lSGFzaE1hcFtwZXJpb2RdIGFzIFVuaXRPZlRpbWU7XG59XG5cbmZ1bmN0aW9uIG1hcE1vbWVudElucHV0T2JqZWN0KG9iajogTW9tZW50SW5wdXRPYmplY3QpOiB7W2tleSBpbiBVbml0T2ZUaW1lXT86IG51bWJlcn0ge1xuICBjb25zdCBfcmVzOiB7W2tleSBpbiBVbml0T2ZUaW1lXT86IG51bWJlcn0gPSB7fTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgIC5yZWR1Y2UoKHJlcywga2V5OiBrZXlvZiBNb21lbnRJbnB1dE9iamVjdCkgPT4ge1xuICAgICAgcmVzW21hcFVuaXRPZlRpbWUoa2V5KV0gPSBvYmpba2V5XTtcblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBfcmVzKTtcbn1cblxuZXhwb3J0IGNsYXNzIEtocm9ub3Mge1xuICBfZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIF9pc1VUQyA9IGZhbHNlO1xuICBfaXNTdHJpY3Q6IGJvb2xlYW47XG4gIF9sb2NhbGU6IExvY2FsZTtcbiAgX2Zvcm1hdDogc3RyaW5nIHwgc3RyaW5nW107XG4gIF9vZmZzZXQ6IG51bWJlcjtcbiAgX3R6bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0PzogRGF0ZUlucHV0LFxuICAgICAgICAgICAgICBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLFxuICAgICAgICAgICAgICBzdHJpY3QgPSBmYWxzZSxcbiAgICAgICAgICAgICAgaXNVVEMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgb2Zmc2V0PzogbnVtYmVyKSB7XG4gICAgLy8gbG9jYWxlIHdpbGwgYmUgbmVlZGVkIHRvIGZvcm1hdCBpbnZhbGlkIGRhdGUgbWVzc2FnZVxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGVLZXkpO1xuICAgIC8vIHBhcnNlIGludmFsaWQgaW5wdXRcbiAgICBpZiAoaW5wdXQgPT09ICcnIHx8IGlucHV0ID09PSBudWxsIHx8IChpc051bWJlcihpbnB1dCkgJiYgaXNOYU4oaW5wdXQpKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKE5hTik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2lzVVRDID0gaXNVVEM7XG4gICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICB0aGlzLl9vZmZzZXQgPSAwO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0IHx8IG9mZnNldCA9PT0gMCkge1xuICAgICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbiAgICB0aGlzLl9pc1N0cmljdCA9IHN0cmljdDtcbiAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XG5cbiAgICBpZiAoIWlucHV0ICYmIGlucHV0ICE9PSAwICYmICFmb3JtYXQpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShpbnB1dCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIHRoaXMuX2RhdGUgPSBwYXJzZURhdGUoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcbiAgICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG4gICAgdGhpcy5fZGF0ZSA9IGNvbmZpZy5fZDtcbiAgICB0aGlzLl9vZmZzZXQgPSBpc051bWJlcihjb25maWcuX29mZnNldCkgPyBjb25maWcuX29mZnNldCA6IHRoaXMuX29mZnNldDtcbiAgICB0aGlzLl9pc1VUQyA9IGNvbmZpZy5faXNVVEM7XG4gICAgdGhpcy5faXNTdHJpY3QgPSBjb25maWcuX3N0cmljdDtcbiAgICB0aGlzLl9mb3JtYXQgPSBjb25maWcuX2Y7XG4gICAgdGhpcy5fdHptID0gY29uZmlnLl90em07XG4gIH1cblxuICBfdG9Db25maWcoKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIHJldHVybiB7IF9pc1VUQzogdGhpcy5faXNVVEMsIF9sb2NhbGU6IHRoaXMuX2xvY2FsZSwgX29mZnNldDogdGhpcy5fb2Zmc2V0LCBfdHptOiB0aGlzLl90em0gfTtcbiAgfVxuXG4gIC8vIExvY2FsZVxuICBsb2NhbGUoKTogc3RyaW5nO1xuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBLaHJvbm9zO1xuICBsb2NhbGUobG9jYWxlS2V5Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogS2hyb25vcyB8IHN0cmluZyB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGxvY2FsZUtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsZUtleSBpbnN0YW5jZW9mIEtocm9ub3MpIHtcbiAgICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZUtleS5fbG9jYWxlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGxvY2FsZUtleSk7XG4gICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvY2FsZURhdGEoKTogTG9jYWxlIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgLy8gQmFzaWNcblxuICBhZGQodmFsOiBudW1iZXIgfCBzdHJpbmcgfCBNb21lbnRJbnB1dE9iamVjdCwgcGVyaW9kPzogVW5pdE9mVGltZSB8IE1vbWVudFVuaXRPZlRpbWUpOiBLaHJvbm9zIHtcbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGFkZCh0aGlzLl9kYXRlLCBwYXJzZUludCh2YWwsIDEwKSwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIodmFsKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGFkZCh0aGlzLl9kYXRlLCB2YWwsIG1hcFVuaXRPZlRpbWUocGVyaW9kKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0PE1vbWVudElucHV0T2JqZWN0Pih2YWwpKSB7XG4gICAgICBjb25zdCBfbWFwcGVkID0gbWFwTW9tZW50SW5wdXRPYmplY3QodmFsKTtcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXG4gICAgICAgIC5mb3JFYWNoKChrZXk6IFVuaXRPZlRpbWUpID0+IGFkZCh0aGlzLl9kYXRlLCBfbWFwcGVkW2tleV0sIGtleSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZml4bWU6IGZvciBzb21lIHJlYXNvbiBoZXJlICdudWxsJyBmb3IgdGltZSBpcyBmaW5lXG4gIGNhbGVuZGFyKHRpbWU/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXRzPzogQ2FsZW5kYXJTcGVjKTogc3RyaW5nIHtcbiAgICBjb25zdCBfdGltZSA9IHRpbWUgaW5zdGFuY2VvZiBLaHJvbm9zID8gdGltZSA6IG5ldyBLaHJvbm9zKHRpbWUgfHwgbmV3IERhdGUoKSk7XG4gICAgY29uc3QgX29mZnNldCA9ICh0aGlzLl9vZmZzZXQgfHwgMCkgLSAoX3RpbWUuX29mZnNldCB8fCAwKTtcbiAgICBjb25zdCBfY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLl90b0NvbmZpZygpLCB7IF9vZmZzZXQgfSk7XG5cbiAgICByZXR1cm4gY2FsZW5kYXIodGhpcy5fZGF0ZSwgX3RpbWUuX2RhdGUsXG4gICAgICBmb3JtYXRzLCB0aGlzLl9sb2NhbGUsIF9jb25maWcpO1xuICB9XG5cbiAgY2xvbmUoKTogS2hyb25vcyB7XG4gICAgY29uc3QgbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5fYWJiciB8fCAnZW4nO1xuXG4gICAgLy8gcmV0dXJuIG5ldyBLaHJvbm9zKGNsb25lRGF0ZSh0aGlzLl9kYXRlKSwgdGhpcy5fZm9ybWF0LCBsb2NhbGVLZXksIHRoaXMuX2lzU3RyaWN0LCB0aGlzLl9pc1VUQyk7XG4gICAgLy8gZmFpbHMgaWYgaXNVVEMgYW5kIG9mZnNldFxuICAgIC8vIHJldHVybiBuZXcgS2hyb25vcyhuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSksXG4gICAgcmV0dXJuIG5ldyBLaHJvbm9zKHRoaXMuX2RhdGUsXG4gICAgICB0aGlzLl9mb3JtYXQsXG4gICAgICBsb2NhbGVLZXksXG4gICAgICB0aGlzLl9pc1N0cmljdCxcbiAgICAgIHRoaXMuX2lzVVRDLFxuICAgICAgdGhpcy5fb2Zmc2V0KTtcbiAgfVxuXG4gIGRpZmYoYjogRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdE9mVGltZT86IE1vbWVudFVuaXRPZlRpbWUsIHByZWNpc2U/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZSh1bml0T2ZUaW1lKTtcbiAgICBjb25zdCBfYiA9IGIgaW5zdGFuY2VvZiBLaHJvbm9zID8gYiA6IG5ldyBLaHJvbm9zKGIpO1xuICAgIC8vIGNvbnN0IHpvbmVEZWx0YSA9IChfYi51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpO1xuICAgIC8vIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fdG9Db25maWcoKSwge1xuICAgIC8vICAgX29mZnNldDogMCxcbiAgICAvLyAgIF9pc1VUQzogdHJ1ZSxcbiAgICAvLyAgIF96b25lRGVsdGE6IHpvbmVEZWx0YVxuICAgIC8vIH0pO1xuICAgIC8vIHJldHVybiBkaWZmKG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKSwgbmV3IERhdGUoX2IudmFsdWVPZigpKSwgdW5pdCwgcHJlY2lzZSwgY29uZmlnKTtcblxuICAgIHJldHVybiBkaWZmKHRoaXMuX2RhdGUsIF9iLnRvRGF0ZSgpLCB1bml0LCBwcmVjaXNlLCB0aGlzLl90b0NvbmZpZygpKTtcbiAgfVxuXG4gIGVuZE9mKHBlcmlvZD86IE1vbWVudFVuaXRPZlRpbWUpOiBLaHJvbm9zIHtcbiAgICBjb25zdCBfcGVyID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xuICAgIHRoaXMuX2RhdGUgPSBlbmRPZih0aGlzLl9kYXRlLCBfcGVyLCB0aGlzLl9pc1VUQyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZvcm1hdChmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlKHRoaXMuX2RhdGUsIGZvcm1hdCwgdGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5fYWJiciwgdGhpcy5faXNVVEMsIHRoaXMuX29mZnNldCk7XG4gIH1cblxuICAvLyB0b2RvOiBpbXBsZW1lbnRcbiAgZnJvbSh0aW1lPzogRGF0ZUlucHV0IHwgS2hyb25vcywgd2l0aG91dFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IF90aW1lID0gX21vbWVudCh0aW1lKTtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgX3RpbWUuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcy50b0RhdGUoKSwgZnJvbTogX3RpbWUudG9EYXRlKCkgfSlcbiAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxuICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcbiAgfVxuXG4gIGZyb21Ob3cod2l0aG91dFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZyb20obmV3IERhdGUoKSwgd2l0aG91dFN1ZmZpeCk7XG4gIH1cblxuICB0byhpbnA6IERhdGVJbnB1dCB8IEtocm9ub3MsIHN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihgVE9ETzogSW1wbGVtZW50YCk7XG4gIH1cblxuICB0b05vdyh3aXRob3V0UHJlZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBJbXBsZW1lbnRgKTtcbiAgfVxuXG4gIHN1YnRyYWN0KHZhbDogbnVtYmVyIHwgc3RyaW5nIHwgTW9tZW50SW5wdXRPYmplY3QsIHBlcmlvZD86IFVuaXRPZlRpbWUgfCBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XG4gICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBzdWJ0cmFjdCh0aGlzLl9kYXRlLCBwYXJzZUludCh2YWwsIDEwKSwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBzdWJ0cmFjdCh0aGlzLl9kYXRlLCB2YWwsIG1hcFVuaXRPZlRpbWUocGVyaW9kKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0PE1vbWVudElucHV0T2JqZWN0Pih2YWwpKSB7XG4gICAgICBjb25zdCBfbWFwcGVkID0gbWFwTW9tZW50SW5wdXRPYmplY3QodmFsKTtcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXG4gICAgICAgIC5mb3JFYWNoKChrZXk6IFVuaXRPZlRpbWUpID0+IHN1YnRyYWN0KHRoaXMuX2RhdGUsIF9tYXBwZWRba2V5XSwga2V5KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocGVyaW9kOiBNb21lbnRBbGwpOiBudW1iZXIge1xuICAgIGlmIChwZXJpb2QgPT09ICdkYXlPZlllYXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXlPZlllYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIHJldHVybiB0aGlzLnllYXIoKTtcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKTtcbiAgICAgIC8vIHwgJ3dlZWsnXG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZSgpO1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCk7XG4gICAgICBjYXNlICdob3Vycyc6XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCk7XG4gICAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubWludXRlcygpO1xuICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgIHJldHVybiB0aGlzLnNlY29uZHMoKTtcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcygpO1xuICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIHJldHVybiB0aGlzLndlZWsoKTtcbiAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrKCk7XG4gICAgICBjYXNlICd3ZWVrWWVhcic6XG4gICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCk7XG4gICAgICBjYXNlICdpc29XZWVrWWVhcic6XG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCk7XG4gICAgICBjYXNlICd3ZWVrZGF5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla2RheSgpO1xuICAgICAgY2FzZSAnaXNvV2Vla2RheSc6XG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtkYXkoKTtcbiAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5xdWFydGVyKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9tZW50LmdldCgnJHtwZXJpb2R9JylgKTtcbiAgICB9XG4gIH1cblxuICBzZXQocGVyaW9kOiBNb21lbnRBbGwgfCBNb21lbnRJbnB1dE9iamVjdCwgaW5wdXQ/OiBudW1iZXIpOiBLaHJvbm9zIHtcblxuICAgIGlmIChpc1N0cmluZyhwZXJpb2QpKSB7XG4gICAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xuICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnllYXIoaW5wdXQpO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoaW5wdXQpO1xuICAgICAgICAvLyB8ICd3ZWVrJ1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRheShpbnB1dCk7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGUoaW5wdXQpO1xuICAgICAgICBjYXNlICdob3Vycyc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoaW5wdXQpO1xuICAgICAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5taW51dGVzKGlucHV0KTtcbiAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kcyhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmRzKGlucHV0KTtcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMud2VlayhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWsoaW5wdXQpO1xuICAgICAgICBjYXNlICd3ZWVrWWVhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoaW5wdXQpO1xuICAgICAgICBjYXNlICdpc29XZWVrWWVhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoaW5wdXQpO1xuICAgICAgICBjYXNlICd3ZWVrZGF5JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrZGF5KGlucHV0KTtcbiAgICAgICAgY2FzZSAnaXNvV2Vla2RheSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheShpbnB1dCk7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnF1YXJ0ZXIoaW5wdXQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb21lbnQuZ2V0KCcke3BlcmlvZH0nKWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdDxNb21lbnRJbnB1dE9iamVjdD4ocGVyaW9kKSkge1xuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHBlcmlvZCk7XG4gICAgICBPYmplY3Qua2V5cyhfbWFwcGVkKVxuICAgICAgICAuc29ydChmdW5jdGlvbihhOiBVbml0T2ZUaW1lLCBiOiBVbml0T2ZUaW1lKTogbnVtYmVyIHtcbiAgICAgICAgICByZXR1cm4gX3VuaXRzUHJpb3JpdHlbYV0gLSBfdW5pdHNQcmlvcml0eVtiXTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKGtleTogVW5pdE9mVGltZSkgPT4gdGhpcy5zZXQoa2V5LCBfbWFwcGVkW2tleV0pKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG4gIH1cblxuICB0b0lTT1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0cnVlKSA8IDAgfHwgZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdHJ1ZSkgPiA5OTk5KSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KCdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gIH1cblxuICBpbnNwZWN0KCk6IHN0cmluZyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiBpbXBsZW1lbnQnKTtcbiAgfVxuXG4gIHRvSlNPTigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICB0b0RhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCk6IHtba2V5IGluIE1vbWVudFVuaXRPZlRpbWVdPzogbnVtYmVyfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHllYXJzOiBnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICAvLyBtb250aHM6IGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcblxuICAgICAgeWVhcjogZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgbW9udGg6IGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIGRhdGU6IGdldERhdGUodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgaG91cnM6IGdldEhvdXJzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIG1pbnV0ZXM6IGdldE1pbnV0ZXModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgc2Vjb25kczogZ2V0U2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBtaWxsaXNlY29uZHM6IGdldE1pbGxpc2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQylcbiAgICB9O1xuICB9XG5cbiAgdG9BcnJheSgpOiBEYXRlQXJyYXkge1xuICAgIHJldHVybiBbdGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCksIHRoaXMuaG91cigpLCB0aGlzLm1pbnV0ZSgpLCB0aGlzLnNlY29uZCgpLCB0aGlzLm1pbGxpc2Vjb25kKCldO1xuICB9XG5cblxuICAvLyBEYXRlcyBib29sZWFuIGFsZ2VicmFcblxuICBpc0FmdGVyKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc0FmdGVyKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcbiAgfVxuXG4gIGlzQmVmb3JlKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc0JlZm9yZSh0aGlzLnRvRGF0ZSgpLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XG4gIH1cblxuICBpc0JldHdlZW4oZnJvbTogS2hyb25vcywgdG86IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lLCBpbmNsdXNpdml0eT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNCZXR3ZWVuKHRoaXMudG9EYXRlKCksIGZyb20udG9EYXRlKCksIHRvLnRvRGF0ZSgpLCBfdW5pdCwgaW5jbHVzaXZpdHkpO1xuICB9XG5cbiAgaXNTYW1lKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcblxuICAgIHJldHVybiBpc1NhbWUodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xuICB9XG5cbiAgaXNTYW1lT3JBZnRlcihkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNTYW1lT3JBZnRlcih0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XG4gIH1cblxuICBpc1NhbWVPckJlZm9yZShkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNTYW1lT3JCZWZvcmUodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNEYXRlVmFsaWQodGhpcy5fZGF0ZSk7XG4gIH1cblxuICB2YWx1ZU9mKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUudmFsdWVPZigpIC0gKCh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMCk7XG4gIH1cblxuICB1bml4KCk6IG51bWJlciB7XG4gICAgLy8gcmV0dXJuIGdldFVuaXhUaW1lKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpIC8gMTAwMCk7XG4gIH1cblxuXG4gIC8vIE9mZnNldFxuXG4gIHV0Y09mZnNldCgpOiBudW1iZXI7XG4gIHV0Y09mZnNldChiOiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogS2hyb25vcztcbiAgdXRjT2Zmc2V0KGI/OiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogbnVtYmVyIHwgS2hyb25vcyB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHRoaXMuX3RvQ29uZmlnKCk7XG5cbiAgICBpZiAoIWIgJiYgYiAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldFVUQ09mZnNldCh0aGlzLl9kYXRlLCBfY29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0VVRDT2Zmc2V0KHRoaXMuX2RhdGUsIGIsIGtlZXBMb2NhbFRpbWUsIGZhbHNlLCBfY29uZmlnKTtcblxuICAgIHRoaXMuX29mZnNldCA9IF9jb25maWcuX29mZnNldDtcbiAgICB0aGlzLl9pc1VUQyA9IF9jb25maWcuX2lzVVRDO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1dGMoa2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBLaHJvbm9zIHtcbiAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gIH1cblxuICBsb2NhbChrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IEtocm9ub3Mge1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcy5fZGF0ZSksICdtJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwYXJzZVpvbmUoaW5wdXQ/OiBzdHJpbmcpOiBLaHJvbm9zIHtcbiAgICBjb25zdCBfY29uZmlnID0gdGhpcy5fdG9Db25maWcoKTtcbiAgICB0aGlzLl9kYXRlID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQodGhpcy5fZGF0ZSwgaW5wdXQsIF9jb25maWcpO1xuXG4gICAgdGhpcy5fb2Zmc2V0ID0gX2NvbmZpZy5fb2Zmc2V0O1xuICAgIHRoaXMuX2lzVVRDID0gX2NvbmZpZy5faXNVVEM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGlucHV0PzogS2hyb25vcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNBbGlnbmVkSG91ck9mZnNldCh0aGlzLl9kYXRlLCBpbnB1dCA/IGlucHV0Ll9kYXRlIDogdm9pZCAwKTtcbiAgfVxuXG4gIGlzRFNUKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0RheWxpZ2h0U2F2aW5nVGltZSh0aGlzLl9kYXRlKTtcbiAgfVxuXG4gIGlzTG9jYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLl9pc1VUQztcbiAgfVxuXG4gIGlzVXRjT2Zmc2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQztcbiAgfVxuXG4gIGlzVVRDKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVXRjKCk7XG4gIH1cblxuICBpc1V0YygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwO1xuICB9XG5cbiAgLy8gVGltZXpvbmVcblxuICB6b25lQWJicigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRab25lQWJicih0aGlzLl9pc1VUQyk7XG4gIH1cblxuICB6b25lTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRab25lTmFtZSh0aGlzLl9pc1VUQyk7XG4gIH1cblxuICAvLyBZZWFyXG5cbiAgeWVhcigpOiBudW1iZXI7XG4gIHllYXIoeWVhcjogbnVtYmVyKTogS2hyb25vcztcbiAgeWVhcih5ZWFyPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF5ZWFyICYmIHllYXIgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB5ZWFyKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlZWtZZWFyKCk6IG51bWJlcjtcbiAgd2Vla1llYXIodmFsOiBudW1iZXIpOiBLaHJvbm9zO1xuICB3ZWVrWWVhcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRXZWVrWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9sb2NhbGUsIHRoaXMuaXNVVEMoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZSA9IGdldFNldFdlZWtZZWFyKHRoaXMuX2RhdGUsIHZhbCwgdGhpcy5fbG9jYWxlLCB0aGlzLmlzVVRDKCkpO1xuICAgIGlmIChpc0RhdGUoZGF0ZSkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNvV2Vla1llYXIoKTogbnVtYmVyIDtcbiAgaXNvV2Vla1llYXIodmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcbiAgaXNvV2Vla1llYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0SVNPV2Vla1llYXIodGhpcy5fZGF0ZSwgdGhpcy5pc1VUQygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlID0gZ2V0U2V0SVNPV2Vla1llYXIodGhpcy5fZGF0ZSwgdmFsLCB0aGlzLmlzVXRjKCkpO1xuXG4gICAgaWYgKGlzRGF0ZShkYXRlKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0xlYXBZZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKGdldEZ1bGxZZWFyKHRoaXMudG9EYXRlKCksIHRoaXMuaXNVVEMoKSkpO1xuICB9XG5cbiAgLy8gTW9udGhcblxuICBtb250aCgpOiBudW1iZXI7XG4gIG1vbnRoKG1vbnRoOiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zO1xuICBtb250aChtb250aD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghbW9udGggJiYgbW9udGggIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgbGV0IF9tb250aCA9IG1vbnRoO1xuXG4gICAgaWYgKGlzU3RyaW5nKG1vbnRoKSkge1xuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5fbG9jYWxlIHx8IGdldExvY2FsZSgpO1xuICAgICAgX21vbnRoID0gbG9jYWxlLm1vbnRoc1BhcnNlKG1vbnRoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIoX21vbnRoKSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRNb250aCh0aGlzLl9kYXRlLCBfbW9udGgsIHRoaXMuX2lzVVRDKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgaG91cigpOiBudW1iZXI7XG4gIGhvdXIoaG91cnM6IG51bWJlcik6IEtocm9ub3M7XG4gIGhvdXIoaG91cnM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ob3Vycyhob3Vycyk7XG4gIH1cblxuICBob3VycygpOiBudW1iZXI7XG4gIGhvdXJzKGhvdXJzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBob3Vycyhob3Vycz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghaG91cnMgJiYgaG91cnMgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRIb3Vycyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRIb3Vycyh0aGlzLl9kYXRlLCBob3VycywgdGhpcy5faXNVVEMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIG1pbnV0ZSgpOiBudW1iZXI7XG4gIG1pbnV0ZShtaW51dGVzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBtaW51dGUobWludXRlcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1pbnV0ZXMobWludXRlcyk7XG4gIH1cblxuICBtaW51dGVzKCk6IG51bWJlcjtcbiAgbWludXRlcyhtaW51dGVzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBtaW51dGVzKG1pbnV0ZXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIW1pbnV0ZXMgJiYgbWludXRlcyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldE1pbnV0ZXModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0TWludXRlcyh0aGlzLl9kYXRlLCBtaW51dGVzLCB0aGlzLl9pc1VUQykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgc2Vjb25kKCk6IG51bWJlcjtcbiAgc2Vjb25kKHNlY29uZHM6IG51bWJlcik6IEtocm9ub3M7XG4gIHNlY29uZChzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2Vjb25kcyhzZWNvbmRzKTtcbiAgfVxuXG4gIHNlY29uZHMoKTogbnVtYmVyO1xuICBzZWNvbmRzKHNlY29uZHM6IG51bWJlcik6IEtocm9ub3M7XG4gIHNlY29uZHMoc2Vjb25kcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghc2Vjb25kcyAmJiBzZWNvbmRzICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0U2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRTZWNvbmRzKHRoaXMuX2RhdGUsIHNlY29uZHMsIHRoaXMuX2lzVVRDKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBtaWxsaXNlY29uZCgpOiBudW1iZXI7XG4gIG1pbGxpc2Vjb25kKG1zOiBudW1iZXIpOiBLaHJvbm9zO1xuICBtaWxsaXNlY29uZChtcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcyhtcyk7XG4gIH1cblxuICBtaWxsaXNlY29uZHMoKTogbnVtYmVyO1xuICBtaWxsaXNlY29uZHMoc2Vjb25kczogbnVtYmVyKTogS2hyb25vcztcbiAgbWlsbGlzZWNvbmRzKHNlY29uZHM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXNlY29uZHMgJiYgc2Vjb25kcyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldE1pbGxpc2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRNaWxsaXNlY29uZHModGhpcy5fZGF0ZSwgc2Vjb25kcywgdGhpcy5faXNVVEMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRGF5XG5cbiAgZGF0ZSgpOiBudW1iZXI7XG4gIGRhdGUoZGF0ZTogbnVtYmVyKTogS2hyb25vcztcbiAgZGF0ZShkYXRlPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFkYXRlICYmIGRhdGUgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXREYXRlKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldERhdGUodGhpcy5fZGF0ZSwgZGF0ZSwgdGhpcy5faXNVVEMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGF5KCk6IG51bWJlciA7XG4gIGRheShpbnB1dDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyA7XG4gIGRheShpbnB1dD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghaW5wdXQgJiYgaW5wdXQgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXREYXlPZldlZWsodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIGxldCBfaW5wdXQgPSBpbnB1dDtcblxuICAgIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICAgIF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5fbG9jYWxlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIoX2lucHV0KSkge1xuICAgICAgdGhpcy5fZGF0ZSA9IHNldERheU9mV2Vlayh0aGlzLl9kYXRlLCBfaW5wdXQsIHRoaXMuX2xvY2FsZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2Vla2RheSgpOiBudW1iZXIgO1xuICB3ZWVrZGF5KHZhbDogbnVtYmVyKTogS2hyb25vcyA7XG4gIHdlZWtkYXkodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHRoaXMuX2xvY2FsZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRMb2NhbGVEYXlPZldlZWsodGhpcy5fZGF0ZSwgdmFsLCB7IGxvY2FsZTogdGhpcy5fbG9jYWxlLCBpc1VUQzogdGhpcy5faXNVVEMgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzb1dlZWtkYXkoKTogbnVtYmVyIDtcbiAgaXNvV2Vla2RheSh2YWw6IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgO1xuICBpc29XZWVrZGF5KHZhbD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldElTT0RheU9mV2Vlayh0aGlzLl9kYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0SVNPRGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHZhbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRheU9mWWVhcigpOiBudW1iZXI7XG4gIGRheU9mWWVhcih2YWw6IG51bWJlcik6IEtocm9ub3M7XG4gIGRheU9mWWVhcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXREYXlPZlllYXIodGhpcy5fZGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldERheU9mWWVhcih0aGlzLl9kYXRlLCB2YWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBXZWVrXG5cbiAgd2VlaygpOiBudW1iZXI7XG4gIHdlZWsoaW5wdXQ6IG51bWJlcik6IEtocm9ub3M7XG4gIHdlZWsoaW5wdXQ/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIWlucHV0ICYmIGlucHV0ICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0V2Vlayh0aGlzLl9kYXRlLCB0aGlzLl9sb2NhbGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRXZWVrKHRoaXMuX2RhdGUsIGlucHV0LCB0aGlzLl9sb2NhbGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgd2Vla3MoKTogbnVtYmVyO1xuICB3ZWVrcyhpbnB1dDogbnVtYmVyKTogS2hyb25vcztcbiAgd2Vla3MoaW5wdXQ/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrKGlucHV0KTtcbiAgfVxuXG4gIGlzb1dlZWsoKTogbnVtYmVyIDtcbiAgaXNvV2Vlayh2YWw6IG51bWJlcik6IEtocm9ub3MgO1xuICBpc29XZWVrKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldElTT1dlZWsodGhpcy5fZGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldElTT1dlZWsodGhpcy5fZGF0ZSwgdmFsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIGlzb1dlZWtzKCk6IG51bWJlciA7XG4gIGlzb1dlZWtzKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XG4gIGlzb1dlZWtzKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlzb1dlZWsodmFsKTtcbiAgfVxuXG4gIHdlZWtzSW5ZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFdlZWtzSW5ZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDLCB0aGlzLl9sb2NhbGUpO1xuICB9XG5cbiAgaXNvV2Vla3NJblllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0SVNPV2Vla3NJblllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICB9XG5cblxuICBkYXlzSW5Nb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXlzSW5Nb250aChnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksIGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSk7XG4gIH1cblxuXG4gIHF1YXJ0ZXIoKTogbnVtYmVyO1xuICBxdWFydGVyKHZhbDogbnVtYmVyKTogS2hyb25vcztcbiAgcXVhcnRlcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRRdWFydGVyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0UXVhcnRlcih0aGlzLl9kYXRlLCB2YWwsIHRoaXMuX2lzVVRDKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHF1YXJ0ZXJzKCk6IG51bWJlcjtcbiAgcXVhcnRlcnModmFsOiBudW1iZXIpOiBLaHJvbm9zO1xuICBxdWFydGVycyh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5xdWFydGVyKHZhbCk7XG4gIH1cblxuICBzdGFydE9mKHBlcmlvZD86IE1vbWVudFVuaXRPZlRpbWUpOiBLaHJvbm9zIHtcbiAgICBjb25zdCBfcGVyID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xuICAgIHRoaXMuX2RhdGUgPSBzdGFydE9mKHRoaXMuX2RhdGUsIF9wZXIsIHRoaXMuX2lzVVRDKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==