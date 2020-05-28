/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var moment = ((/** @type {?} */ (_moment)));
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
        var _date = input.clone();
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
function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true);
});
moment.parseZone = (/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @return {?}
 */
function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true).parseZone();
});
moment.locale = getSetGlobalLocale;
moment.localeData = (/**
 * @param {?=} key
 * @return {?}
 */
function (key) {
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
function (inp) { return new Khronos(inp * 1000); });
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
function (input, unit) {
    /** @type {?} */
    var _unit = mapUnitOfTime(unit);
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
function _min() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    /** @type {?} */
    var _firstArg = dates[0];
    /** @type {?} */
    var _dates = (isArray(_firstArg) ? _firstArg : dates)
        // tslint:disable-next-line
        .map((/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return _moment(date); }))
        .map((/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return date.toDate(); }));
    /** @type {?} */
    var _date = min.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
});
moment.max = (/**
 * @param {...?} dates
 * @return {?}
 */
function _max() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    /** @type {?} */
    var _firstArg = dates[0];
    /** @type {?} */
    var _dates = (isArray(_firstArg) ? _firstArg : dates)
        // tslint:disable-next-line
        .map((/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return _moment(date); }))
        .map((/**
     * @param {?} date
     * @return {?}
     */
    function (date) { return date.toDate(); }));
    /** @type {?} */
    var _date = max.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
});
moment.locales = (/**
 * @return {?}
 */
function () {
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
var _unitsPriority = {
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
var _timeHashMap = {
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
    var _res = {};
    return Object.keys(obj)
        .reduce((/**
     * @param {?} res
     * @param {?} key
     * @return {?}
     */
    function (res, key) {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }), _res);
}
var Khronos = /** @class */ (function () {
    function Khronos(input, format, localeKey, strict, isUTC, offset) {
        if (strict === void 0) { strict = false; }
        if (isUTC === void 0) { isUTC = false; }
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
        var config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
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
    Khronos.prototype._toConfig = /**
     * @return {?}
     */
    function () {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Khronos.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (isUndefined(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        /** @type {?} */
        var newLocaleData = getLocale(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    // Basic
    // Basic
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.add = 
    // Basic
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = add(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (isNumber(val)) {
            this._date = add(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            /** @type {?} */
            var _mapped_1 = mapMomentInputObject(val);
            Object.keys(_mapped_1)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return add(_this._date, _mapped_1[key], key); }));
        }
        return this;
    };
    // fixme: for some reason here 'null' for time is fine
    // fixme: for some reason here 'null' for time is fine
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    Khronos.prototype.calendar = 
    // fixme: for some reason here 'null' for time is fine
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    function (time, formats) {
        /** @type {?} */
        var _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        /** @type {?} */
        var _offset = (this._offset || 0) - (_time._offset || 0);
        /** @type {?} */
        var _config = Object.assign(this._toConfig(), { _offset: _offset });
        return calendar(this._date, _time._date, formats, this._locale, _config);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    };
    /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    Khronos.prototype.diff = /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    function (b, unitOfTime, precise) {
        /** @type {?} */
        var unit = mapUnitOfTime(unitOfTime);
        /** @type {?} */
        var _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return diff(this._date, _b.toDate(), unit, precise, this._toConfig());
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.endOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        /** @type {?} */
        var _per = mapUnitOfTime(period);
        this._date = endOf(this._date, _per, this._isUTC);
        return this;
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    Khronos.prototype.format = /**
     * @param {?=} format
     * @return {?}
     */
    function (format) {
        return formatDate(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    };
    // todo: implement
    // todo: implement
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.from = 
    // todo: implement
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (time, withoutSuffix) {
        /** @type {?} */
        var _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return createDuration({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    };
    /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.fromNow = /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    };
    /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    Khronos.prototype.to = /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    function (inp, suffix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    Khronos.prototype.toNow = /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    function (withoutPrefix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.subtract = /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = subtract(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (isNumber(val)) {
            this._date = subtract(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            /** @type {?} */
            var _mapped_2 = mapMomentInputObject(val);
            Object.keys(_mapped_2)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return subtract(_this._date, _mapped_2[key], key); }));
        }
        return this;
    };
    /**
     * @param {?} period
     * @return {?}
     */
    Khronos.prototype.get = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        /** @type {?} */
        var unit = mapUnitOfTime(period);
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
                throw new Error("Unknown moment.get('" + period + "')");
        }
    };
    /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.set = /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    function (period, input) {
        var _this = this;
        if (isString(period)) {
            /** @type {?} */
            var unit = mapUnitOfTime(period);
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
                    throw new Error("Unknown moment.get('" + period + "')");
            }
        }
        if (isObject(period)) {
            /** @type {?} */
            var _mapped_3 = mapMomentInputObject(period);
            Object.keys(_mapped_3)
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
            function (key) { return _this.set(key, _mapped_3[key]); }));
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toISOString = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Khronos.prototype.inspect = /**
     * @return {?}
     */
    function () {
        throw new Error('TODO: implement');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this.toISOString();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toDate = /**
     * @return {?}
     */
    function () {
        return new Date(this.valueOf());
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toObject = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    };
    // Dates boolean algebra
    // Dates boolean algebra
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isAfter = 
    // Dates boolean algebra
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBefore(this.toDate(), date.toDate(), _unit);
    };
    /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    Khronos.prototype.isBetween = /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    function (from, to, unit, inclusivity) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBetween(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSame = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSame(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrAfter = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        /** @type {?} */
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrBefore(this._date, date.toDate(), _unit);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isDateValid(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.unix = /**
     * @return {?}
     */
    function () {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    };
    /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utcOffset = /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (b, keepLocalTime) {
        /** @type {?} */
        var _config = this._toConfig();
        if (!b && b !== 0) {
            return getUTCOffset(this._date, _config);
        }
        this._date = setUTCOffset(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utc = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.local = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this._date), 'm');
            }
        }
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.parseZone = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var _config = this._toConfig();
        this._date = setOffsetToParsedOffset(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.hasAlignedHourOffset = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return hasAlignedHourOffset(this._date, input ? input._date : void 0);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isDST = /**
     * @return {?}
     */
    function () {
        return isDaylightSavingTime(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLocal = /**
     * @return {?}
     */
    function () {
        return !this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtcOffset = /**
     * @return {?}
     */
    function () {
        return this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUTC = /**
     * @return {?}
     */
    function () {
        return this.isUtc();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtc = /**
     * @return {?}
     */
    function () {
        return this._isUTC && this._offset === 0;
    };
    // Timezone
    // Timezone
    /**
     * @return {?}
     */
    Khronos.prototype.zoneAbbr = 
    // Timezone
    /**
     * @return {?}
     */
    function () {
        return getZoneAbbr(this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.zoneName = /**
     * @return {?}
     */
    function () {
        return getZoneName(this._isUTC);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    Khronos.prototype.year = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        if (!year && year !== 0) {
            return getFullYear(this._date, this._isUTC);
        }
        this._date = cloneDate(setFullYear(this._date, year));
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getWeekYear(this._date, this._locale, this.isUTC());
        }
        /** @type {?} */
        var date = getSetWeekYear(this._date, val, this._locale, this.isUTC());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeekYear(this._date, this.isUTC());
        }
        /** @type {?} */
        var date = getSetISOWeekYear(this._date, val, this.isUtc());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLeapYear = /**
     * @return {?}
     */
    function () {
        return isLeapYear(getFullYear(this.toDate(), this.isUTC()));
    };
    /**
     * @param {?=} month
     * @return {?}
     */
    Khronos.prototype.month = /**
     * @param {?=} month
     * @return {?}
     */
    function (month) {
        if (!month && month !== 0) {
            return getMonth(this._date, this._isUTC);
        }
        /** @type {?} */
        var _month = month;
        if (isString(month)) {
            /** @type {?} */
            var locale = this._locale || getLocale();
            _month = locale.monthsParse(month);
        }
        if (isNumber(_month)) {
            this._date = cloneDate(setMonth(this._date, _month, this._isUTC));
        }
        return this;
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hour = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        return this.hours(hours);
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hours = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        if (!hours && hours !== 0) {
            return getHours(this._date, this._isUTC);
        }
        this._date = cloneDate(setHours(this._date, hours, this._isUTC));
        return this;
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minute = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        return this.minutes(minutes);
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minutes = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        if (!minutes && minutes !== 0) {
            return getMinutes(this._date, this._isUTC);
        }
        this._date = cloneDate(setMinutes(this._date, minutes, this._isUTC));
        return this;
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.second = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        return this.seconds(seconds);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.seconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getSeconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setSeconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} ms
     * @return {?}
     */
    Khronos.prototype.millisecond = /**
     * @param {?=} ms
     * @return {?}
     */
    function (ms) {
        return this.milliseconds(ms);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.milliseconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getMilliseconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setMilliseconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    Khronos.prototype.date = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (!date && date !== 0) {
            return getDate(this._date, this._isUTC);
        }
        this._date = cloneDate(setDate(this._date, date, this._isUTC));
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.day = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getDayOfWeek(this._date, this._isUTC);
        }
        /** @type {?} */
        var _input = input;
        if (isString(input)) {
            _input = parseWeekday(input, this._locale);
        }
        if (isNumber(_input)) {
            this._date = setDayOfWeek(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getLocaleDayOfWeek(this._date, this._locale, this._isUTC);
        }
        this._date = setLocaleDayOfWeek(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISODayOfWeek(this._date);
        }
        this._date = setISODayOfWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.dayOfYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getDayOfYear(this._date);
        }
        this._date = setDayOfYear(this._date, val);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.week = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getWeek(this._date, this._locale);
        }
        this._date = setWeek(this._date, input, this._locale);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.weeks = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return this.week(input);
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeek = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeek(this._date);
        }
        this._date = setISOWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeeks = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.isoWeek(val);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.weeksInYear = /**
     * @return {?}
     */
    function () {
        return getWeeksInYear(this._date, this._isUTC, this._locale);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isoWeeksInYear = /**
     * @return {?}
     */
    function () {
        return getISOWeeksInYear(this._date, this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.daysInMonth = /**
     * @return {?}
     */
    function () {
        return daysInMonth(getFullYear(this._date, this._isUTC), getMonth(this._date, this._isUTC));
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarter = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getQuarter(this._date, this._isUTC);
        }
        this._date = setQuarter(this._date, val, this._isUTC);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarters = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.quarter(val);
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.startOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        /** @type {?} */
        var _per = mapUnitOfTime(period);
        this._date = startOf(this._date, _per, this._isUTC);
        return this;
    };
    return Khronos;
}());
export { Khronos };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ0ZXN0L2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxHQUFHLEVBQWEsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBELE9BQU8sRUFDTCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBRWxGLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUNMLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUNyRSxVQUFVLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQ3hFLFdBQVcsRUFDWixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFDakYsWUFBWSxFQUNiLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1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SyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUtELDBCQUFROzs7O0lBQVIsVUFBUyxHQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHlCQUFPOzs7O0lBQVAsVUFBUSxNQUF5Qjs7WUFDekIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVILGNBQUM7QUFBRCxDQUFDLEFBM3dCRCxJQTJ3QkM7Ozs7SUExd0JDLHdCQUF5Qjs7SUFDekIseUJBQWU7O0lBQ2YsNEJBQW1COztJQUNuQiwwQkFBZ0I7O0lBQ2hCLDBCQUEyQjs7SUFDM0IsMEJBQWdCOztJQUNoQix1QkFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCBtYXgtZmlsZS1saW5lLWNvdW50XG5pbXBvcnQgeyBhZGQsIHBhcnNlRGF0ZSwgc3VidHJhY3QgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVPYmplY3QsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0SG91cnMsIGdldE1pbGxpc2Vjb25kcywgZ2V0TWludXRlcywgZ2V0TW9udGgsIGdldFNlY29uZHMsXG4gIGdldFVuaXhUaW1lXG59IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQge1xuICBzZXREYXRlLCBzZXRGdWxsWWVhciwgc2V0SG91cnMsIHNldE1pbGxpc2Vjb25kcywgc2V0TWludXRlcywgc2V0TW9udGgsXG4gIHNldFNlY29uZHNcbn0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc0Jvb2xlYW4sIGlzRGF0ZSwgaXNEYXRlVmFsaWQsIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcsXG4gIGlzVW5kZWZpbmVkXG59IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi9mb3JtYXQnO1xuaW1wb3J0IHsgSVNPXzg2MDEsIFJGQ18yODIyIH0gZnJvbSAnLi4vY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQge1xuICBnZXREYXRlT2Zmc2V0LFxuICBnZXRVVENPZmZzZXQsIGhhc0FsaWduZWRIb3VyT2Zmc2V0LCBpc0RheWxpZ2h0U2F2aW5nVGltZSwgc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQsXG4gIHNldFVUQ09mZnNldFxufSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgaXNMZWFwWWVhciwgcGFyc2VUd29EaWdpdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0JldHdlZW4sIGlzU2FtZSwgaXNTYW1lT3JBZnRlciwgaXNTYW1lT3JCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQge1xuICBnZXREYXlPZldlZWssIGdldElTT0RheU9mV2VlaywgZ2V0TG9jYWxlRGF5T2ZXZWVrLCBwYXJzZVdlZWtkYXksIHNldERheU9mV2Vlaywgc2V0SVNPRGF5T2ZXZWVrLFxuICBzZXRMb2NhbGVEYXlPZldlZWtcbn0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0SVNPV2VlaywgZ2V0V2Vlaywgc2V0SVNPV2Vlaywgc2V0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuaW1wb3J0IHtcbiAgZ2V0SVNPV2Vla3NJblllYXIsIGdldElTT1dlZWtZZWFyLCBnZXRTZXRJU09XZWVrWWVhciwgZ2V0U2V0V2Vla1llYXIsIGdldFdlZWtzSW5ZZWFyLFxuICBnZXRXZWVrWWVhclxufSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xuaW1wb3J0IHsgZW5kT2YsIHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgZ2V0UXVhcnRlciwgc2V0UXVhcnRlciB9IGZyb20gJy4uL3VuaXRzL3F1YXJ0ZXInO1xuaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyLCBzZXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XG5pbXBvcnQgeyBnZXRab25lQWJiciwgZ2V0Wm9uZU5hbWUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi4vbW9tZW50L2RpZmYnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjYWxlbmRhciwgQ2FsZW5kYXJTcGVjIH0gZnJvbSAnLi4vbW9tZW50L2NhbGVuZGFyJztcbmltcG9ydCB7IGRlZmluZUxvY2FsZSwgZ2V0TG9jYWxlLCBnZXRTZXRHbG9iYWxMb2NhbGUsIGxpc3RMb2NhbGVzIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tICcuLi9tb21lbnQvbWluLW1heCc7XG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGNyZWF0ZUxvY2FsT3JVVEMgfSBmcm9tICcuLi9jcmVhdGUvZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XG5cbmV4cG9ydCB0eXBlIERhdGVJbnB1dCA9IHN0cmluZyB8IG51bWJlciB8IERhdGUgfCBzdHJpbmdbXSB8IERhdGVBcnJheSB8IE1vbWVudElucHV0T2JqZWN0O1xuXG5leHBvcnQgY29uc3QgbW9tZW50OiBNb21lbnRGbiA9IChfbW9tZW50IGFzIE1vbWVudEZuKTtcblxuZXhwb3J0IGludGVyZmFjZSBNb21lbnRGbiB7XG4gIChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBLaHJvbm9zO1xuXG4gIElTT184NjAxOiBzdHJpbmc7XG4gIFJGQ18yODIyOiBzdHJpbmc7XG5cbiAgdXRjKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zO1xuXG4gIHBhcnNlWm9uZShpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcztcblxuICB1bml4KG51bTogbnVtYmVyKTogS2hyb25vcztcblxuICBsb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmc7XG5cbiAgZHVyYXRpb24oaW5wPzogRHVyYXRpb24gfCBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IER1cmF0aW9uO1xuXG4gIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGU7XG5cbiAgcGFyc2VUd29EaWdpdFllYXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlcjtcblxuICBpc0RhdGUoaW5wdXQ/OiBhbnkpOiBpbnB1dCBpcyBEYXRlO1xuXG4gIG1vbnRocygpOiBzdHJpbmdbXTtcblxuICBtb250aHMoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICBtb250aHMoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICBtb250aHMoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgbW9udGhzU2hvcnQoKTogc3RyaW5nW107XG5cbiAgbW9udGhzU2hvcnQoaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICBtb250aHNTaG9ydChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIG1vbnRoc1Nob3J0KGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzKCk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXMoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5cyhmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4pOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNTaG9ydCgpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c1Nob3J0KGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNTaG9ydChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzU2hvcnQoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4pOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgd2Vla2RheXNNaW4oKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNNaW4oaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c01pbihmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzTWluKGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xuXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XG5cbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcblxuICByZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkOiBzdHJpbmcpOiBudW1iZXIgfCBib29sZWFuO1xuXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZywgbGltaXQ6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgbWluKC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zO1xuXG4gIG1heCguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcztcblxuICBsb2NhbGVEYXRhKGtleT86IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IExvY2FsZTtcblxuICB1cGRhdGVMb2NhbGUobGFuZ3VhZ2U6IHN0cmluZywgbG9jYWxlU3BlYz86IExvY2FsZURhdGEpOiBMb2NhbGU7XG5cbiAgY2FsZW5kYXJGb3JtYXQobTogRGF0ZSwgbm93OiBEYXRlKTogc3RyaW5nO1xuXG4gIC8vIHRvZG86IHJlbW92ZSB0aGlzXG4gIGNhbGVuZGFyRm9ybWF0KG06IEtocm9ub3MsIG5vdzogS2hyb25vcyk6IHN0cmluZztcblxuICAvLyB0b2RvOiBpbXBsZW1lbnRcbiAgaW52YWxpZCgpOiBLaHJvbm9zO1xuXG4gIGxvY2FsZXMoKTogc3RyaW5nW107XG5cbiAgLy8gdG9kbzogaW1wbGVtZW50XG4gIHVwZGF0ZU9mZnNldChtOiBLaHJvbm9zLCBrZWVwVGltZT86IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBfbW9tZW50KGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IEtocm9ub3Mge1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBLaHJvbm9zKSB7XG4gICAgY29uc3QgX2RhdGUgPSBpbnB1dC5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGlzVVRDID8gX2RhdGUudXRjKCkgOiBfZGF0ZTtcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4obG9jYWxlS2V5KSkge1xuICAgIHJldHVybiBuZXcgS2hyb25vcyhpbnB1dCwgZm9ybWF0LCBudWxsLCBsb2NhbGVLZXksIGlzVVRDKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgS2hyb25vcyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xufVxuXG5tb21lbnQudXRjID0gKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcyA9PiB7XG4gIHJldHVybiBfbW9tZW50KGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCB0cnVlKTtcbn07XG5cbm1vbWVudC5wYXJzZVpvbmUgPSAoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zID0+IHtcbiAgcmV0dXJuIF9tb21lbnQoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIHRydWUpLnBhcnNlWm9uZSgpO1xufTtcblxubW9tZW50LmxvY2FsZSA9IGdldFNldEdsb2JhbExvY2FsZTtcbm1vbWVudC5sb2NhbGVEYXRhID0gKGtleT86IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IExvY2FsZSA9PiB7XG4gIGlmIChrZXkgaW5zdGFuY2VvZiBLaHJvbm9zKSB7XG4gICAgcmV0dXJuIGtleS5sb2NhbGVEYXRhKCk7XG4gIH1cblxuICByZXR1cm4gZ2V0TG9jYWxlKGtleSk7XG59O1xuXG4vLyBtb21lbnQudXRjID0gY3JlYXRlVVRDO1xubW9tZW50LnVuaXggPSAoaW5wOiBudW1iZXIpID0+IG5ldyBLaHJvbm9zKGlucCAqIDEwMDApO1xubW9tZW50LklTT184NjAxID0gSVNPXzg2MDE7XG5tb21lbnQuUkZDXzI4MjIgPSBSRkNfMjgyMjtcbm1vbWVudC5kZWZpbmVMb2NhbGUgPSBkZWZpbmVMb2NhbGU7XG5tb21lbnQucGFyc2VUd29EaWdpdFllYXIgPSBwYXJzZVR3b0RpZ2l0WWVhcjtcbm1vbWVudC5pc0RhdGUgPSBpc0RhdGU7XG5tb21lbnQuaW52YWxpZCA9IGZ1bmN0aW9uIF9pbnZhbGlkKCk6IEtocm9ub3Mge1xuICByZXR1cm4gbmV3IEtocm9ub3MobmV3IERhdGUoTmFOKSk7XG59O1xuXG4vLyBkdXJhdGlvbihpbnA/OiBEdXJhdGlvbiB8IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogRHVyYXRpb247XG5tb21lbnQuZHVyYXRpb24gPSAoaW5wdXQ/OiBEdXJhdGlvbiB8IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogRHVyYXRpb24gPT4ge1xuICBjb25zdCBfdW5pdCA9IG1hcFVuaXRPZlRpbWUodW5pdCk7XG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0b2RvIGltcGxlbWVudCcpO1xuICB9XG5cbiAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oKTtcbiAgfVxuXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihpbnB1dCwgX3VuaXQsIHsgX2xvY2FsZTogaW5wdXQuX2xvY2FsZSB9KTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkgfHwgaXNOdW1iZXIoaW5wdXQpIHx8IGlzRHVyYXRpb24oaW5wdXQpIHx8IGlzT2JqZWN0PERhdGVPYmplY3Q+KGlucHV0KSkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihpbnB1dCwgX3VuaXQpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCd0b2RvIGltcGxlbWVudCcpO1xufTtcblxubW9tZW50Lm1pbiA9IGZ1bmN0aW9uIF9taW4oLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3Mge1xuICBjb25zdCBfZmlyc3RBcmcgPSBkYXRlc1swXTtcbiAgY29uc3QgX2RhdGVzID0gKGlzQXJyYXkoX2ZpcnN0QXJnKSA/IF9maXJzdEFyZyA6IGRhdGVzKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAubWFwKChkYXRlOiBLaHJvbm9zKSA9PiBfbW9tZW50KGRhdGUpKVxuICAgIC5tYXAoZGF0ZSA9PiBkYXRlLnRvRGF0ZSgpKTtcblxuICBjb25zdCBfZGF0ZSA9IG1pbiguLi5fZGF0ZXMpO1xuXG4gIHJldHVybiBuZXcgS2hyb25vcyhfZGF0ZSk7XG59O1xuXG5tb21lbnQubWF4ID0gZnVuY3Rpb24gX21heCguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcyB7XG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xuICBjb25zdCBfZGF0ZXMgPSAoaXNBcnJheShfZmlyc3RBcmcpID8gX2ZpcnN0QXJnIDogZGF0ZXMpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIC5tYXAoKGRhdGU6IEtocm9ub3MpID0+IF9tb21lbnQoZGF0ZSkpXG4gICAgLm1hcChkYXRlID0+IGRhdGUudG9EYXRlKCkpO1xuXG4gIGNvbnN0IF9kYXRlID0gbWF4KC4uLl9kYXRlcyk7XG5cbiAgcmV0dXJuIG5ldyBLaHJvbm9zKF9kYXRlKTtcbn07XG5cbm1vbWVudC5sb2NhbGVzID0gKCk6IHN0cmluZ1tdID0+IHtcbiAgcmV0dXJuIGxpc3RMb2NhbGVzKCk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vbWVudElucHV0T2JqZWN0IHtcbiAgeWVhcnM/OiBudW1iZXI7XG4gIHllYXI/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG5cbiAgbW9udGhzPzogbnVtYmVyO1xuICBtb250aD86IG51bWJlcjtcbiAgTT86IG51bWJlcjtcblxuICBkYXlzPzogbnVtYmVyO1xuICBkYXk/OiBudW1iZXI7XG4gIGQ/OiBudW1iZXI7XG5cbiAgZGF0ZXM/OiBudW1iZXI7XG4gIGRhdGU/OiBudW1iZXI7XG4gIEQ/OiBudW1iZXI7XG5cbiAgaG91cnM/OiBudW1iZXI7XG4gIGhvdXI/OiBudW1iZXI7XG4gIGg/OiBudW1iZXI7XG5cbiAgbWludXRlcz86IG51bWJlcjtcbiAgbWludXRlPzogbnVtYmVyO1xuICBtPzogbnVtYmVyO1xuXG4gIHNlY29uZHM/OiBudW1iZXI7XG4gIHNlY29uZD86IG51bWJlcjtcbiAgcz86IG51bWJlcjtcblxuICBtaWxsaXNlY29uZHM/OiBudW1iZXI7XG4gIG1pbGxpc2Vjb25kPzogbnVtYmVyO1xuICBtcz86IG51bWJlcjtcblxuICB3PzogbnVtYmVyO1xuICB3ZWVrPzogbnVtYmVyO1xuICB3ZWVrcz86IG51bWJlcjtcblxuICBRPzogbnVtYmVyO1xuICBxdWFydGVyPzogbnVtYmVyO1xuICBxdWFydGVycz86IG51bWJlcjtcblxuICB3ZWVrWWVhcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgTW9tZW50VW5pdE9mVGltZSA9IChcbiAgJ3llYXInIHwgJ3llYXJzJyB8ICd5JyB8XG4gICdtb250aCcgfCAnbW9udGhzJyB8ICdNJyB8XG4gICd3ZWVrJyB8ICd3ZWVrcycgfCAndycgfFxuICAnZGF5JyB8ICdkYXlzJyB8ICdkJyB8XG4gICdob3VyJyB8ICdob3VycycgfCAnaCcgfFxuICAnbWludXRlJyB8ICdtaW51dGVzJyB8ICdtJyB8XG4gICdzZWNvbmQnIHwgJ3NlY29uZHMnIHwgJ3MnIHxcbiAgJ21pbGxpc2Vjb25kJyB8ICdtaWxsaXNlY29uZHMnIHwgJ21zJyB8XG4gICdxJyB8ICdxdWFydGVyJyB8ICdxdWFydGVycycgfCAnUScgfFxuICAnaXNvV2VlaycgfCAnaXNvV2Vla3MnIHwgJ1cnIHxcbiAgJ2RhdGUnIHwgJ2RhdGVzJyB8ICdEJ1xuICApO1xuXG5leHBvcnQgdHlwZSBNb21lbnRBbGwgPSBNb21lbnRVbml0T2ZUaW1lIHxcbiAgJ3dlZWtZZWFyJyB8ICd3ZWVrWWVhcnMnIHwgJ2dnJyB8XG4gICdpc29XZWVrWWVhcicgfCAnaXNvV2Vla1llYXJzJyB8ICdHRycgfFxuICAnZGF5T2ZZZWFyJyB8ICdkYXlPZlllYXJzJyB8ICdEREQnIHxcbiAgJ3dlZWtkYXknIHwgJ3dlZWtkYXlzJyB8ICdlJyB8XG4gICdpc29XZWVrZGF5JyB8ICdpc29XZWVrZGF5cycgfCAnRSc7XG5cbmNvbnN0IF91bml0c1ByaW9yaXR5OiB7W2tleSBpbiBVbml0T2ZUaW1lXTogbnVtYmVyfSA9IHtcbiAgeWVhcjogMSxcbiAgbW9udGg6IDgsXG4gIHdlZWs6IDUsXG4gIGlzb1dlZWs6IDUsXG4gIGRheTogMTEsXG4gIHdlZWtkYXk6IDExLFxuICBpc29XZWVrZGF5OiAxMSxcbiAgaG91cnM6IDEzLFxuICB3ZWVrWWVhcjogMSxcbiAgaXNvV2Vla1llYXI6IDEsXG4gIHF1YXJ0ZXI6IDcsXG4gIGRhdGU6IDksXG4gIGRheU9mWWVhcjogNCxcbiAgbWludXRlczogMTQsXG4gIHNlY29uZHM6IDE1LFxuICBtaWxsaXNlY29uZHM6IDE2XG59O1xuXG4vLyB0b2RvOiBkbyBJIG5lZWQgMiBtYXBwZXJzP1xuY29uc3QgX3RpbWVIYXNoTWFwOiB7IFtrZXkgaW4gTW9tZW50QWxsXTogVW5pdE9mVGltZSB8IHN0cmluZyB9ID0ge1xuICB5OiAneWVhcicsXG4gIHllYXJzOiAneWVhcicsXG4gIHllYXI6ICd5ZWFyJyxcbiAgTTogJ21vbnRoJyxcbiAgbW9udGhzOiAnbW9udGgnLFxuICBtb250aDogJ21vbnRoJyxcbiAgdzogJ3dlZWsnLFxuICB3ZWVrczogJ3dlZWsnLFxuICB3ZWVrOiAnd2VlaycsXG5cbiAgZDogJ2RheScsXG4gIGRheXM6ICdkYXknLFxuICBkYXk6ICdkYXknLFxuXG4gIGRhdGU6ICdkYXRlJyxcbiAgZGF0ZXM6ICdkYXRlJyxcbiAgRDogJ2RhdGUnLFxuXG4gIGg6ICdob3VycycsXG4gIGhvdXI6ICdob3VycycsXG4gIGhvdXJzOiAnaG91cnMnLFxuICBtOiAnbWludXRlcycsXG4gIG1pbnV0ZTogJ21pbnV0ZXMnLFxuICBtaW51dGVzOiAnbWludXRlcycsXG4gIHM6ICdzZWNvbmRzJyxcbiAgc2Vjb25kOiAnc2Vjb25kcycsXG4gIHNlY29uZHM6ICdzZWNvbmRzJyxcbiAgbXM6ICdtaWxsaXNlY29uZHMnLFxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcycsXG4gIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kcycsXG4gIHF1YXJ0ZXI6ICdxdWFydGVyJyxcbiAgcXVhcnRlcnM6ICdxdWFydGVyJyxcbiAgcTogJ3F1YXJ0ZXInLFxuICBROiAncXVhcnRlcicsXG4gIGlzb1dlZWs6ICdpc29XZWVrJyxcbiAgaXNvV2Vla3M6ICdpc29XZWVrJyxcbiAgVzogJ2lzb1dlZWsnLFxuICB3ZWVrWWVhcjogJ3dlZWtZZWFyJyxcbiAgd2Vla1llYXJzOiAnd2Vla1llYXInLFxuICBnZzogJ3dlZWtZZWFycycsXG4gIGlzb1dlZWtZZWFyOiAnaXNvV2Vla1llYXInLFxuICBpc29XZWVrWWVhcnM6ICdpc29XZWVrWWVhcicsXG4gIEdHOiAnaXNvV2Vla1llYXInLFxuICBkYXlPZlllYXI6ICdkYXlPZlllYXInLFxuICBkYXlPZlllYXJzOiAnZGF5T2ZZZWFyJyxcbiAgREREOiAnZGF5T2ZZZWFyJyxcbiAgd2Vla2RheTogJ3dlZWtkYXknLFxuICB3ZWVrZGF5czogJ3dlZWtkYXknLFxuICBlOiAnd2Vla2RheScsXG4gIGlzb1dlZWtkYXk6ICdpc29XZWVrZGF5JyxcbiAgaXNvV2Vla2RheXM6ICdpc29XZWVrZGF5JyxcbiAgRTogJ2lzb1dlZWtkYXknXG59O1xuXG5mdW5jdGlvbiBtYXBVbml0T2ZUaW1lKHBlcmlvZDogTW9tZW50QWxsKTogVW5pdE9mVGltZSB7XG4gIHJldHVybiBfdGltZUhhc2hNYXBbcGVyaW9kXSBhcyBVbml0T2ZUaW1lO1xufVxuXG5mdW5jdGlvbiBtYXBNb21lbnRJbnB1dE9iamVjdChvYmo6IE1vbWVudElucHV0T2JqZWN0KToge1trZXkgaW4gVW5pdE9mVGltZV0/OiBudW1iZXJ9IHtcbiAgY29uc3QgX3Jlczoge1trZXkgaW4gVW5pdE9mVGltZV0/OiBudW1iZXJ9ID0ge307XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcbiAgICAucmVkdWNlKChyZXMsIGtleToga2V5b2YgTW9tZW50SW5wdXRPYmplY3QpID0+IHtcbiAgICAgIHJlc1ttYXBVbml0T2ZUaW1lKGtleSldID0gb2JqW2tleV07XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwgX3Jlcyk7XG59XG5cbmV4cG9ydCBjbGFzcyBLaHJvbm9zIHtcbiAgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBfaXNVVEMgPSBmYWxzZTtcbiAgX2lzU3RyaWN0OiBib29sZWFuO1xuICBfbG9jYWxlOiBMb2NhbGU7XG4gIF9mb3JtYXQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBfb2Zmc2V0OiBudW1iZXI7XG4gIF90em06IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihpbnB1dD86IERhdGVJbnB1dCxcbiAgICAgICAgICAgICAgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAgICAgICAgIGxvY2FsZUtleT86IHN0cmluZyxcbiAgICAgICAgICAgICAgc3RyaWN0ID0gZmFsc2UsXG4gICAgICAgICAgICAgIGlzVVRDID0gZmFsc2UsXG4gICAgICAgICAgICAgIG9mZnNldD86IG51bWJlcikge1xuICAgIC8vIGxvY2FsZSB3aWxsIGJlIG5lZWRlZCB0byBmb3JtYXQgaW52YWxpZCBkYXRlIG1lc3NhZ2VcbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KTtcbiAgICAvLyBwYXJzZSBpbnZhbGlkIGlucHV0XG4gICAgaWYgKGlucHV0ID09PSAnJyB8fCBpbnB1dCA9PT0gbnVsbCB8fCAoaXNOdW1iZXIoaW5wdXQpICYmIGlzTmFOKGlucHV0KSkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZShOYU4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9pc1VUQyA9IGlzVVRDO1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgdGhpcy5fb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldCB8fCBvZmZzZXQgPT09IDApIHtcbiAgICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcbiAgICB9XG4gICAgdGhpcy5faXNTdHJpY3QgPSBzdHJpY3Q7XG4gICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuXG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCAmJiAhZm9ybWF0KSB7XG4gICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyB0aGlzLl9kYXRlID0gcGFyc2VEYXRlKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xuICAgIHRoaXMuX2RhdGUgPSBjb25maWcuX2Q7XG4gICAgdGhpcy5fb2Zmc2V0ID0gaXNOdW1iZXIoY29uZmlnLl9vZmZzZXQpID8gY29uZmlnLl9vZmZzZXQgOiB0aGlzLl9vZmZzZXQ7XG4gICAgdGhpcy5faXNVVEMgPSBjb25maWcuX2lzVVRDO1xuICAgIHRoaXMuX2lzU3RyaWN0ID0gY29uZmlnLl9zdHJpY3Q7XG4gICAgdGhpcy5fZm9ybWF0ID0gY29uZmlnLl9mO1xuICAgIHRoaXMuX3R6bSA9IGNvbmZpZy5fdHptO1xuICB9XG5cbiAgX3RvQ29uZmlnKCk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICByZXR1cm4geyBfaXNVVEM6IHRoaXMuX2lzVVRDLCBfbG9jYWxlOiB0aGlzLl9sb2NhbGUsIF9vZmZzZXQ6IHRoaXMuX29mZnNldCwgX3R6bTogdGhpcy5fdHptIH07XG4gIH1cblxuICAvLyBMb2NhbGVcbiAgbG9jYWxlKCk6IHN0cmluZztcbiAgbG9jYWxlKGxvY2FsZUtleTogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogS2hyb25vcztcbiAgbG9jYWxlKGxvY2FsZUtleT86IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IEtocm9ub3MgfCBzdHJpbmcge1xuICAgIGlmIChpc1VuZGVmaW5lZChsb2NhbGVLZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH1cblxuICAgIGlmIChsb2NhbGVLZXkgaW5zdGFuY2VvZiBLaHJvbm9zKSB7XG4gICAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGVLZXkuX2xvY2FsZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShsb2NhbGVLZXkpO1xuICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2NhbGVEYXRhKCk6IExvY2FsZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIC8vIEJhc2ljXG5cbiAgYWRkKHZhbDogbnVtYmVyIHwgc3RyaW5nIHwgTW9tZW50SW5wdXRPYmplY3QsIHBlcmlvZD86IFVuaXRPZlRpbWUgfCBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XG4gICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBhZGQodGhpcy5fZGF0ZSwgcGFyc2VJbnQodmFsLCAxMCksIG1hcFVuaXRPZlRpbWUocGVyaW9kKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBhZGQodGhpcy5fZGF0ZSwgdmFsLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdDxNb21lbnRJbnB1dE9iamVjdD4odmFsKSkge1xuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHZhbCk7XG4gICAgICBPYmplY3Qua2V5cyhfbWFwcGVkKVxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiBhZGQodGhpcy5fZGF0ZSwgX21hcHBlZFtrZXldLCBrZXkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZpeG1lOiBmb3Igc29tZSByZWFzb24gaGVyZSAnbnVsbCcgZm9yIHRpbWUgaXMgZmluZVxuICBjYWxlbmRhcih0aW1lPzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0cz86IENhbGVuZGFyU3BlYyk6IHN0cmluZyB7XG4gICAgY29uc3QgX3RpbWUgPSB0aW1lIGluc3RhbmNlb2YgS2hyb25vcyA/IHRpbWUgOiBuZXcgS2hyb25vcyh0aW1lIHx8IG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IF9vZmZzZXQgPSAodGhpcy5fb2Zmc2V0IHx8IDApIC0gKF90aW1lLl9vZmZzZXQgfHwgMCk7XG4gICAgY29uc3QgX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fdG9Db25maWcoKSwgeyBfb2Zmc2V0IH0pO1xuXG4gICAgcmV0dXJuIGNhbGVuZGFyKHRoaXMuX2RhdGUsIF90aW1lLl9kYXRlLFxuICAgICAgZm9ybWF0cywgdGhpcy5fbG9jYWxlLCBfY29uZmlnKTtcbiAgfVxuXG4gIGNsb25lKCk6IEtocm9ub3Mge1xuICAgIGNvbnN0IGxvY2FsZUtleSA9IHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuX2FiYnIgfHwgJ2VuJztcblxuICAgIC8vIHJldHVybiBuZXcgS2hyb25vcyhjbG9uZURhdGUodGhpcy5fZGF0ZSksIHRoaXMuX2Zvcm1hdCwgbG9jYWxlS2V5LCB0aGlzLl9pc1N0cmljdCwgdGhpcy5faXNVVEMpO1xuICAgIC8vIGZhaWxzIGlmIGlzVVRDIGFuZCBvZmZzZXRcbiAgICAvLyByZXR1cm4gbmV3IEtocm9ub3MobmV3IERhdGUodGhpcy52YWx1ZU9mKCkpLFxuICAgIHJldHVybiBuZXcgS2hyb25vcyh0aGlzLl9kYXRlLFxuICAgICAgdGhpcy5fZm9ybWF0LFxuICAgICAgbG9jYWxlS2V5LFxuICAgICAgdGhpcy5faXNTdHJpY3QsXG4gICAgICB0aGlzLl9pc1VUQyxcbiAgICAgIHRoaXMuX29mZnNldCk7XG4gIH1cblxuICBkaWZmKGI6IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXRPZlRpbWU/OiBNb21lbnRVbml0T2ZUaW1lLCBwcmVjaXNlPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgY29uc3QgdW5pdCA9IG1hcFVuaXRPZlRpbWUodW5pdE9mVGltZSk7XG4gICAgY29uc3QgX2IgPSBiIGluc3RhbmNlb2YgS2hyb25vcyA/IGIgOiBuZXcgS2hyb25vcyhiKTtcbiAgICAvLyBjb25zdCB6b25lRGVsdGEgPSAoX2IudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKTtcbiAgICAvLyBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuX3RvQ29uZmlnKCksIHtcbiAgICAvLyAgIF9vZmZzZXQ6IDAsXG4gICAgLy8gICBfaXNVVEM6IHRydWUsXG4gICAgLy8gICBfem9uZURlbHRhOiB6b25lRGVsdGFcbiAgICAvLyB9KTtcbiAgICAvLyByZXR1cm4gZGlmZihuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSksIG5ldyBEYXRlKF9iLnZhbHVlT2YoKSksIHVuaXQsIHByZWNpc2UsIGNvbmZpZyk7XG5cbiAgICByZXR1cm4gZGlmZih0aGlzLl9kYXRlLCBfYi50b0RhdGUoKSwgdW5pdCwgcHJlY2lzZSwgdGhpcy5fdG9Db25maWcoKSk7XG4gIH1cblxuICBlbmRPZihwZXJpb2Q/OiBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XG4gICAgY29uc3QgX3BlciA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcbiAgICB0aGlzLl9kYXRlID0gZW5kT2YodGhpcy5fZGF0ZSwgX3BlciwgdGhpcy5faXNVVEMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb3JtYXQoZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZSh0aGlzLl9kYXRlLCBmb3JtYXQsIHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuX2FiYnIsIHRoaXMuX2lzVVRDLCB0aGlzLl9vZmZzZXQpO1xuICB9XG5cbiAgLy8gdG9kbzogaW1wbGVtZW50XG4gIGZyb20odGltZT86IERhdGVJbnB1dCB8IEtocm9ub3MsIHdpdGhvdXRTdWZmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBfdGltZSA9IF9tb21lbnQodGltZSk7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIF90aW1lLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgdG86IHRoaXMudG9EYXRlKCksIGZyb206IF90aW1lLnRvRGF0ZSgpIH0pXG4gICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGU7XG4gIH1cblxuICBmcm9tTm93KHdpdGhvdXRTdWZmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tKG5ldyBEYXRlKCksIHdpdGhvdXRTdWZmaXgpO1xuICB9XG5cbiAgdG8oaW5wOiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBzdWZmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IEltcGxlbWVudGApO1xuICB9XG5cbiAgdG9Ob3cod2l0aG91dFByZWZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihgVE9ETzogSW1wbGVtZW50YCk7XG4gIH1cblxuICBzdWJ0cmFjdCh2YWw6IG51bWJlciB8IHN0cmluZyB8IE1vbWVudElucHV0T2JqZWN0LCBwZXJpb2Q/OiBVbml0T2ZUaW1lIHwgTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xuICAgIGlmIChpc1N0cmluZyh2YWwpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gc3VidHJhY3QodGhpcy5fZGF0ZSwgcGFyc2VJbnQodmFsLCAxMCksIG1hcFVuaXRPZlRpbWUocGVyaW9kKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcih2YWwpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gc3VidHJhY3QodGhpcy5fZGF0ZSwgdmFsLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdDxNb21lbnRJbnB1dE9iamVjdD4odmFsKSkge1xuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHZhbCk7XG4gICAgICBPYmplY3Qua2V5cyhfbWFwcGVkKVxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiBzdWJ0cmFjdCh0aGlzLl9kYXRlLCBfbWFwcGVkW2tleV0sIGtleSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHBlcmlvZDogTW9tZW50QWxsKTogbnVtYmVyIHtcbiAgICBpZiAocGVyaW9kID09PSAnZGF5T2ZZZWFyJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF5T2ZZZWFyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pdCA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCk7XG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCk7XG4gICAgICAvLyB8ICd3ZWVrJ1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUoKTtcbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIHJldHVybiB0aGlzLmRheSgpO1xuICAgICAgY2FzZSAnaG91cnMnOlxuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpO1xuICAgICAgY2FzZSAnbWludXRlcyc6XG4gICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZXMoKTtcbiAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKCk7XG4gICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZHMoKTtcbiAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrKCk7XG4gICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2VlaygpO1xuICAgICAgY2FzZSAnd2Vla1llYXInOlxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrWWVhcigpO1xuICAgICAgY2FzZSAnaXNvV2Vla1llYXInOlxuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpO1xuICAgICAgY2FzZSAnd2Vla2RheSc6XG4gICAgICAgIHJldHVybiB0aGlzLndlZWtkYXkoKTtcbiAgICAgIGNhc2UgJ2lzb1dlZWtkYXknOlxuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrZGF5KCk7XG4gICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhcnRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vbWVudC5nZXQoJyR7cGVyaW9kfScpYCk7XG4gICAgfVxuICB9XG5cbiAgc2V0KHBlcmlvZDogTW9tZW50QWxsIHwgTW9tZW50SW5wdXRPYmplY3QsIGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB7XG5cbiAgICBpZiAoaXNTdHJpbmcocGVyaW9kKSkge1xuICAgICAgY29uc3QgdW5pdCA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcbiAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy55ZWFyKGlucHV0KTtcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoKGlucHV0KTtcbiAgICAgICAgLy8gfCAnd2VlaydcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXkoaW5wdXQpO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlKGlucHV0KTtcbiAgICAgICAgY2FzZSAnaG91cnMnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzKGlucHV0KTtcbiAgICAgICAgY2FzZSAnbWludXRlcyc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWludXRlcyhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlY29uZHMoaW5wdXQpO1xuICAgICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcyhpbnB1dCk7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWsoaW5wdXQpO1xuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrKGlucHV0KTtcbiAgICAgICAgY2FzZSAnd2Vla1llYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKGlucHV0KTtcbiAgICAgICAgY2FzZSAnaXNvV2Vla1llYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKGlucHV0KTtcbiAgICAgICAgY2FzZSAnd2Vla2RheSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMud2Vla2RheShpbnB1dCk7XG4gICAgICAgIGNhc2UgJ2lzb1dlZWtkYXknOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtkYXkoaW5wdXQpO1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5xdWFydGVyKGlucHV0KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9tZW50LmdldCgnJHtwZXJpb2R9JylgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHBlcmlvZCkpIHtcbiAgICAgIGNvbnN0IF9tYXBwZWQgPSBtYXBNb21lbnRJbnB1dE9iamVjdChwZXJpb2QpO1xuICAgICAgT2JqZWN0LmtleXMoX21hcHBlZClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24oYTogVW5pdE9mVGltZSwgYjogVW5pdE9mVGltZSk6IG51bWJlciB7XG4gICAgICAgICAgcmV0dXJuIF91bml0c1ByaW9yaXR5W2FdIC0gX3VuaXRzUHJpb3JpdHlbYl07XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKChrZXk6IFVuaXRPZlRpbWUpID0+IHRoaXMuc2V0KGtleSwgX21hcHBlZFtrZXldKSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xuICB9XG5cbiAgdG9JU09TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdHJ1ZSkgPCAwIHx8IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRydWUpID4gOTk5OSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KCdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcbiAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICB9XG5cbiAgaW5zcGVjdCgpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcignVE9ETzogaW1wbGVtZW50Jyk7XG4gIH1cblxuICB0b0pTT04oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xuICB9XG5cbiAgdG9EYXRlKCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG4gIH1cblxuICB0b09iamVjdCgpOiB7W2tleSBpbiBNb21lbnRVbml0T2ZUaW1lXT86IG51bWJlcn0ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyB5ZWFyczogZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgLy8gbW9udGhzOiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG5cbiAgICAgIHllYXI6IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIG1vbnRoOiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBkYXRlOiBnZXREYXRlKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIGhvdXJzOiBnZXRIb3Vycyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXG4gICAgICBtaW51dGVzOiBnZXRNaW51dGVzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcbiAgICAgIHNlY29uZHM6IGdldFNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxuICAgICAgbWlsbGlzZWNvbmRzOiBnZXRNaWxsaXNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpXG4gICAgfTtcbiAgfVxuXG4gIHRvQXJyYXkoKTogRGF0ZUFycmF5IHtcbiAgICByZXR1cm4gW3RoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpLCB0aGlzLmhvdXIoKSwgdGhpcy5taW51dGUoKSwgdGhpcy5zZWNvbmQoKSwgdGhpcy5taWxsaXNlY29uZCgpXTtcbiAgfVxuXG5cbiAgLy8gRGF0ZXMgYm9vbGVhbiBhbGdlYnJhXG5cbiAgaXNBZnRlcihkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNBZnRlcih0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XG4gIH1cblxuICBpc0JlZm9yZShkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNCZWZvcmUodGhpcy50b0RhdGUoKSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xuICB9XG5cbiAgaXNCZXR3ZWVuKGZyb206IEtocm9ub3MsIHRvOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSwgaW5jbHVzaXZpdHk/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzQmV0d2Vlbih0aGlzLnRvRGF0ZSgpLCBmcm9tLnRvRGF0ZSgpLCB0by50b0RhdGUoKSwgX3VuaXQsIGluY2x1c2l2aXR5KTtcbiAgfVxuXG4gIGlzU2FtZShkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gaXNTYW1lKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcbiAgfVxuXG4gIGlzU2FtZU9yQWZ0ZXIoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzU2FtZU9yQWZ0ZXIodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xuICB9XG5cbiAgaXNTYW1lT3JCZWZvcmUoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGlzU2FtZU9yQmVmb3JlKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcbiAgfVxuXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRGF0ZVZhbGlkKHRoaXMuX2RhdGUpO1xuICB9XG5cbiAgdmFsdWVPZigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRlLnZhbHVlT2YoKSAtICgodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDApO1xuICB9XG5cbiAgdW5peCgpOiBudW1iZXIge1xuICAgIC8vIHJldHVybiBnZXRVbml4VGltZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xuICB9XG5cblxuICAvLyBPZmZzZXRcblxuICB1dGNPZmZzZXQoKTogbnVtYmVyO1xuICB1dGNPZmZzZXQoYjogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IEtocm9ub3M7XG4gIHV0Y09mZnNldChiPzogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IG51bWJlciB8IEtocm9ub3Mge1xuICAgIGNvbnN0IF9jb25maWcgPSB0aGlzLl90b0NvbmZpZygpO1xuXG4gICAgaWYgKCFiICYmIGIgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRVVENPZmZzZXQodGhpcy5fZGF0ZSwgX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldFVUQ09mZnNldCh0aGlzLl9kYXRlLCBiLCBrZWVwTG9jYWxUaW1lLCBmYWxzZSwgX2NvbmZpZyk7XG5cbiAgICB0aGlzLl9vZmZzZXQgPSBfY29uZmlnLl9vZmZzZXQ7XG4gICAgdGhpcy5faXNVVEMgPSBfY29uZmlnLl9pc1VUQztcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXRjKGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogS2hyb25vcyB7XG4gICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICB9XG5cbiAgbG9jYWwoa2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBLaHJvbm9zIHtcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMuX2RhdGUpLCAnbScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGFyc2Vab25lKGlucHV0Pzogc3RyaW5nKTogS2hyb25vcyB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHRoaXMuX3RvQ29uZmlnKCk7XG4gICAgdGhpcy5fZGF0ZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KHRoaXMuX2RhdGUsIGlucHV0LCBfY29uZmlnKTtcblxuICAgIHRoaXMuX29mZnNldCA9IF9jb25maWcuX29mZnNldDtcbiAgICB0aGlzLl9pc1VUQyA9IF9jb25maWcuX2lzVVRDO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYXNBbGlnbmVkSG91ck9mZnNldChpbnB1dD86IEtocm9ub3MpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzQWxpZ25lZEhvdXJPZmZzZXQodGhpcy5fZGF0ZSwgaW5wdXQgPyBpbnB1dC5fZGF0ZSA6IHZvaWQgMCk7XG4gIH1cblxuICBpc0RTVCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNEYXlsaWdodFNhdmluZ1RpbWUodGhpcy5fZGF0ZSk7XG4gIH1cblxuICBpc0xvY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5faXNVVEM7XG4gIH1cblxuICBpc1V0Y09mZnNldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEM7XG4gIH1cblxuICBpc1VUQygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1V0YygpO1xuICB9XG5cbiAgaXNVdGMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMDtcbiAgfVxuXG4gIC8vIFRpbWV6b25lXG5cbiAgem9uZUFiYnIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Wm9uZUFiYnIodGhpcy5faXNVVEMpO1xuICB9XG5cbiAgem9uZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Wm9uZU5hbWUodGhpcy5faXNVVEMpO1xuICB9XG5cbiAgLy8gWWVhclxuXG4gIHllYXIoKTogbnVtYmVyO1xuICB5ZWFyKHllYXI6IG51bWJlcik6IEtocm9ub3M7XG4gIHllYXIoeWVhcj86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICgheWVhciAmJiB5ZWFyICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgeWVhcikpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWVrWWVhcigpOiBudW1iZXI7XG4gIHdlZWtZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcztcbiAgd2Vla1llYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0V2Vla1llYXIodGhpcy5fZGF0ZSwgdGhpcy5fbG9jYWxlLCB0aGlzLmlzVVRDKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSBnZXRTZXRXZWVrWWVhcih0aGlzLl9kYXRlLCB2YWwsIHRoaXMuX2xvY2FsZSwgdGhpcy5pc1VUQygpKTtcbiAgICBpZiAoaXNEYXRlKGRhdGUpKSB7XG4gICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzb1dlZWtZZWFyKCk6IG51bWJlciA7XG4gIGlzb1dlZWtZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XG4gIGlzb1dlZWtZZWFyKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldElTT1dlZWtZZWFyKHRoaXMuX2RhdGUsIHRoaXMuaXNVVEMoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZSA9IGdldFNldElTT1dlZWtZZWFyKHRoaXMuX2RhdGUsIHZhbCwgdGhpcy5pc1V0YygpKTtcblxuICAgIGlmIChpc0RhdGUoZGF0ZSkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNMZWFwWWVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcihnZXRGdWxsWWVhcih0aGlzLnRvRGF0ZSgpLCB0aGlzLmlzVVRDKCkpKTtcbiAgfVxuXG4gIC8vIE1vbnRoXG5cbiAgbW9udGgoKTogbnVtYmVyO1xuICBtb250aChtb250aDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcztcbiAgbW9udGgobW9udGg/OiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIW1vbnRoICYmIG1vbnRoICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0TW9udGgodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIGxldCBfbW9udGggPSBtb250aDtcblxuICAgIGlmIChpc1N0cmluZyhtb250aCkpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuX2xvY2FsZSB8fCBnZXRMb2NhbGUoKTtcbiAgICAgIF9tb250aCA9IGxvY2FsZS5tb250aHNQYXJzZShtb250aCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKF9tb250aCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0TW9udGgodGhpcy5fZGF0ZSwgX21vbnRoLCB0aGlzLl9pc1VUQykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIGhvdXIoKTogbnVtYmVyO1xuICBob3VyKGhvdXJzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBob3VyKGhvdXJzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoaG91cnMpO1xuICB9XG5cbiAgaG91cnMoKTogbnVtYmVyO1xuICBob3Vycyhob3VyczogbnVtYmVyKTogS2hyb25vcztcbiAgaG91cnMoaG91cnM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIWhvdXJzICYmIGhvdXJzICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0SG91cnModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0SG91cnModGhpcy5fZGF0ZSwgaG91cnMsIHRoaXMuX2lzVVRDKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBtaW51dGUoKTogbnVtYmVyO1xuICBtaW51dGUobWludXRlczogbnVtYmVyKTogS2hyb25vcztcbiAgbWludXRlKG1pbnV0ZXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5taW51dGVzKG1pbnV0ZXMpO1xuICB9XG5cbiAgbWludXRlcygpOiBudW1iZXI7XG4gIG1pbnV0ZXMobWludXRlczogbnVtYmVyKTogS2hyb25vcztcbiAgbWludXRlcyhtaW51dGVzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFtaW51dGVzICYmIG1pbnV0ZXMgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRNaW51dGVzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1pbnV0ZXModGhpcy5fZGF0ZSwgbWludXRlcywgdGhpcy5faXNVVEMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHNlY29uZCgpOiBudW1iZXI7XG4gIHNlY29uZChzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBzZWNvbmQoc2Vjb25kcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNlY29uZHMoc2Vjb25kcyk7XG4gIH1cblxuICBzZWNvbmRzKCk6IG51bWJlcjtcbiAgc2Vjb25kcyhzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xuICBzZWNvbmRzKHNlY29uZHM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXNlY29uZHMgJiYgc2Vjb25kcyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldFNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0U2Vjb25kcyh0aGlzLl9kYXRlLCBzZWNvbmRzLCB0aGlzLl9pc1VUQykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgbWlsbGlzZWNvbmQoKTogbnVtYmVyO1xuICBtaWxsaXNlY29uZChtczogbnVtYmVyKTogS2hyb25vcztcbiAgbWlsbGlzZWNvbmQobXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZHMobXMpO1xuICB9XG5cbiAgbWlsbGlzZWNvbmRzKCk6IG51bWJlcjtcbiAgbWlsbGlzZWNvbmRzKHNlY29uZHM6IG51bWJlcik6IEtocm9ub3M7XG4gIG1pbGxpc2Vjb25kcyhzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFzZWNvbmRzICYmIHNlY29uZHMgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRNaWxsaXNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0TWlsbGlzZWNvbmRzKHRoaXMuX2RhdGUsIHNlY29uZHMsIHRoaXMuX2lzVVRDKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIERheVxuXG4gIGRhdGUoKTogbnVtYmVyO1xuICBkYXRlKGRhdGU6IG51bWJlcik6IEtocm9ub3M7XG4gIGRhdGUoZGF0ZT86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghZGF0ZSAmJiBkYXRlICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0RGF0ZSh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXREYXRlKHRoaXMuX2RhdGUsIGRhdGUsIHRoaXMuX2lzVVRDKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRheSgpOiBudW1iZXIgO1xuICBkYXkoaW5wdXQ6IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgO1xuICBkYXkoaW5wdXQ/OiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIWlucHV0ICYmIGlucHV0ICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICBsZXQgX2lucHV0ID0gaW5wdXQ7XG5cbiAgICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgICBfaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMuX2xvY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKF9pbnB1dCkpIHtcbiAgICAgIHRoaXMuX2RhdGUgPSBzZXREYXlPZldlZWsodGhpcy5fZGF0ZSwgX2lucHV0LCB0aGlzLl9sb2NhbGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlZWtkYXkoKTogbnVtYmVyIDtcbiAgd2Vla2RheSh2YWw6IG51bWJlcik6IEtocm9ub3MgO1xuICB3ZWVrZGF5KHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldExvY2FsZURheU9mV2Vlayh0aGlzLl9kYXRlLCB0aGlzLl9sb2NhbGUsIHRoaXMuX2lzVVRDKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0TG9jYWxlRGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHZhbCwgeyBsb2NhbGU6IHRoaXMuX2xvY2FsZSwgaXNVVEM6IHRoaXMuX2lzVVRDIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc29XZWVrZGF5KCk6IG51bWJlciA7XG4gIGlzb1dlZWtkYXkodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIDtcbiAgaXNvV2Vla2RheSh2YWw/OiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRJU09EYXlPZldlZWsodGhpcy5fZGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldElTT0RheU9mV2Vlayh0aGlzLl9kYXRlLCB2YWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkYXlPZlllYXIoKTogbnVtYmVyO1xuICBkYXlPZlllYXIodmFsOiBudW1iZXIpOiBLaHJvbm9zO1xuICBkYXlPZlllYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKHRoaXMuX2RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXREYXlPZlllYXIodGhpcy5fZGF0ZSwgdmFsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gV2Vla1xuXG4gIHdlZWsoKTogbnVtYmVyO1xuICB3ZWVrKGlucHV0OiBudW1iZXIpOiBLaHJvbm9zO1xuICB3ZWVrKGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGdldFdlZWsodGhpcy5fZGF0ZSwgdGhpcy5fbG9jYWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRlID0gc2V0V2Vlayh0aGlzLl9kYXRlLCBpbnB1dCwgdGhpcy5fbG9jYWxlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHdlZWtzKCk6IG51bWJlcjtcbiAgd2Vla3MoaW5wdXQ6IG51bWJlcik6IEtocm9ub3M7XG4gIHdlZWtzKGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2VlayhpbnB1dCk7XG4gIH1cblxuICBpc29XZWVrKCk6IG51bWJlciA7XG4gIGlzb1dlZWsodmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcbiAgaXNvV2Vlayh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgIHJldHVybiBnZXRJU09XZWVrKHRoaXMuX2RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGUgPSBzZXRJU09XZWVrKHRoaXMuX2RhdGUsIHZhbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBpc29XZWVrcygpOiBudW1iZXIgO1xuICBpc29XZWVrcyh2YWw6IG51bWJlcik6IEtocm9ub3MgO1xuICBpc29XZWVrcyh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrKHZhbCk7XG4gIH1cblxuICB3ZWVrc0luWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRXZWVrc0luWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQywgdGhpcy5fbG9jYWxlKTtcbiAgfVxuXG4gIGlzb1dlZWtzSW5ZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldElTT1dlZWtzSW5ZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcbiAgfVxuXG5cbiAgZGF5c0luTW9udGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgoZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLCBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQykpO1xuICB9XG5cblxuICBxdWFydGVyKCk6IG51bWJlcjtcbiAgcXVhcnRlcih2YWw6IG51bWJlcik6IEtocm9ub3M7XG4gIHF1YXJ0ZXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gZ2V0UXVhcnRlcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0ZSA9IHNldFF1YXJ0ZXIodGhpcy5fZGF0ZSwgdmFsLCB0aGlzLl9pc1VUQyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBxdWFydGVycygpOiBudW1iZXI7XG4gIHF1YXJ0ZXJzKHZhbDogbnVtYmVyKTogS2hyb25vcztcbiAgcXVhcnRlcnModmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucXVhcnRlcih2YWwpO1xuICB9XG5cbiAgc3RhcnRPZihwZXJpb2Q/OiBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XG4gICAgY29uc3QgX3BlciA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcbiAgICB0aGlzLl9kYXRlID0gc3RhcnRPZih0aGlzLl9kYXRlLCBfcGVyLCB0aGlzLl9pc1VUQyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iXX0=