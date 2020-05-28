/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:no-bitwise max-line-length
// FORMATTING
import { addFormatToken } from '../format/format';
import { zeroFill } from '../utils/zero-fill';
import { isNumber, isString, toInt } from '../utils/type-checks';
import { addRegexToken, matchOffset, matchShortOffset } from '../parse/regex';
import { add } from '../moment/add-subtract';
import { addParseToken } from '../parse/token';
import { cloneDate } from '../create/clone';
import { setMonth } from '../utils/date-setters';
/**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */
function addOffsetFormatToken(token, separator) {
    addFormatToken(token, null, null, (/**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */
    function (date, config) {
        /** @type {?} */
        let offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        /** @type {?} */
        let sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    }));
}
/**
 * @return {?}
 */
export function initOffset() {
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    }));
}
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
/** @type {?} */
const chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    /** @type {?} */
    const matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    /** @type {?} */
    const chunk = matches[matches.length - 1];
    /** @type {?} */
    const parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    /** @type {?} */
    const minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    /** @type {?} */
    const _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
// Return a moment from input, that is local/utc/zone equivalent to model.
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
export function cloneWithOffset(input, date, config = {}) {
    if (!config._isUTC) {
        return input;
    }
    /** @type {?} */
    const res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    /** @type {?} */
    const offsetDiff = (config._offset || 0) * 60000;
    /** @type {?} */
    const diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
/**
 * @param {?} date
 * @return {?}
 */
export function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
export function getUTCOffset(date, config = {}) {
    /** @type {?} */
    const _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} keepLocalTime
 * @param {?=} keepMinutes
 * @param {?=} config
 * @return {?}
 */
export function setUTCOffset(date, input, keepLocalTime, keepMinutes, config = {}) {
    /** @type {?} */
    const offset = config._offset || 0;
    /** @type {?} */
    let localAdjust;
    /** @type {?} */
    let _input = input;
    /** @type {?} */
    let _date = date;
    if (isString(_input)) {
        _input = offsetFromString(matchShortOffset, _input);
        if (_input === null) {
            return _date;
        }
    }
    else if (isNumber(_input) && Math.abs(_input) < 16 && !keepMinutes) {
        _input = _input * 60;
    }
    if (!config._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(_date);
    }
    config._offset = _input;
    config._isUTC = true;
    if (localAdjust != null) {
        _date = add(_date, localAdjust, 'minutes');
    }
    if (offset !== _input) {
        if (!keepLocalTime || config._changeInProgress) {
            _date = add(_date, _input - offset, 'minutes', config._isUTC);
            // addSubtract(this, createDuration(_input - offset, 'm'), 1, false);
        }
        else if (!config._changeInProgress) {
            config._changeInProgress = true;
            // todo: add timezone handling
            // hooks.updateOffset(this, true);
            config._changeInProgress = null;
        }
    }
    return _date;
}
/*
export function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== 'string') {
      input = -input;
    }

    this.utcOffset(input, keepLocalTime);

    return this;
  } else {
    return -this.utcOffset();
  }
}
*/
/**
 * @param {?} date
 * @param {?=} keepLocalTime
 * @return {?}
 */
export function setOffsetToUTC(date, keepLocalTime) {
    return setUTCOffset(date, 0, keepLocalTime);
}
/**
 * @param {?} date
 * @return {?}
 */
export function isDaylightSavingTime(date) {
    return (getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 0))
        || getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 5)));
}
/*export function setOffsetToLocal(date: Date, isUTC?: boolean, keepLocalTime?: boolean) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;

    if (keepLocalTime) {
      this.subtract(getDateOffset(this), 'm');
    }
  }
  return this;
}*/
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} config
 * @return {?}
 */
export function setOffsetToParsedOffset(date, input, config = {}) {
    if (config._tzm != null) {
        return setUTCOffset(date, config._tzm, false, true, config);
    }
    if (isString(input)) {
        /** @type {?} */
        const tZone = offsetFromString(matchOffset, input);
        if (tZone != null) {
            return setUTCOffset(date, tZone, false, false, config);
        }
        return setUTCOffset(date, 0, true, false, config);
    }
    return date;
}
/**
 * @param {?} date
 * @param {?=} input
 * @return {?}
 */
export function hasAlignedHourOffset(date, input) {
    /** @type {?} */
    const _input = input ? getUTCOffset(input, { _isUTC: false }) : 0;
    return (getUTCOffset(date) - _input) % 60 === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvb2Zmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUVqRCxTQUFTLG9CQUFvQixDQUFDLEtBQWEsRUFBRSxTQUFpQjtJQUM1RCxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJOzs7OztJQUFFLFVBQVUsSUFBVSxFQUFFLE1BQU07O1lBQ3hELE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQzs7WUFDM0UsSUFBSSxHQUFHLEdBQUc7UUFDZCxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDZCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1B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QUFFO1FBQ3ZCLE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0Q7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7Y0FDYixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUNsRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ25EO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsSUFBVSxFQUFFLEtBQVk7O1VBQ3JELE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgbWF4LWxpbmUtbGVuZ3RoXG4vLyBGT1JNQVRUSU5HXG5cbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaE9mZnNldCwgbWF0Y2hTaG9ydE9mZnNldCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5cbmZ1bmN0aW9uIGFkZE9mZnNldEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgY29uZmlnKTogc3RyaW5nIHtcbiAgICBsZXQgb2Zmc2V0ID0gZ2V0VVRDT2Zmc2V0KGRhdGUsIHtfaXNVVEM6IGNvbmZpZy5pc1VUQywgX29mZnNldDogY29uZmlnLm9mZnNldH0pO1xuICAgIGxldCBzaWduID0gJysnO1xuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgc2lnbiA9ICctJztcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbiArIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgKyBzZXBhcmF0b3IgKyB6ZXJvRmlsbCh+fihvZmZzZXQpICUgNjAsIDIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPZmZzZXQoKSB7XG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaJywgJzonKTtcbiAgYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICBhZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcbiAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbi8vIEhFTFBFUlNcblxuLy8gdGltZXpvbmUgY2h1bmtlclxuLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4vLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cbmNvbnN0IGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXI6IFJlZ0V4cCwgc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtYXRjaGVzID0gKHN0ciB8fCAnJykubWF0Y2gobWF0Y2hlcik7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwYXJ0cyA9IGNodW5rLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAnMCcsICcwJ107XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApICogNjAgKyB0b0ludChwYXJ0c1syXSk7XG4gIGNvbnN0IF9taW4gPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuXG4gIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IF9taW47XG59XG5cbi8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0OiBEYXRlLCBkYXRlOiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcbiAgaWYgKCFjb25maWcuX2lzVVRDKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgcmVzID0gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0b2RvOiBpbnB1dC5fZCAtIHJlcy5fZCArICgocmVzLl9vZmZzZXQgfHwgMCkgLSAoaW5wdXQuX29mZnNldCB8fCAwKSkqNjAwMDBcbiAgY29uc3Qgb2Zmc2V0RGlmZiA9IChjb25maWcuX29mZnNldCB8fCAwKSAqIDYwMDAwO1xuICBjb25zdCBkaWZmID0gaW5wdXQudmFsdWVPZigpIC0gcmVzLnZhbHVlT2YoKSArIG9mZnNldERpZmY7XG4gIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgcmVzLnNldFRpbWUocmVzLnZhbHVlT2YoKSArIGRpZmYpO1xuICAvLyB0b2RvOiBhZGQgdGltZXpvbmUgaGFuZGxpbmdcbiAgLy8gaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgcmV0dXJuIC1NYXRoLnJvdW5kKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xufVxuXG4vLyBIT09LU1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbi8vIHRvZG86IGl0J3MgZnJvbSBtb21lbnQgdGltZXpvbmVzXG4vLyBob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4vLyB9O1xuXG4vLyBNT01FTlRTXG5cbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbi8vXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFVUQ09mZnNldChkYXRlOiBEYXRlLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBudW1iZXIge1xuICBjb25zdCBfb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcblxuICByZXR1cm4gY29uZmlnLl9pc1VUQyA/IF9vZmZzZXQgOiBnZXREYXRlT2Zmc2V0KGRhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VVRDT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuLCBrZWVwTWludXRlcz86IGJvb2xlYW4sIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xuICBjb25zdCBvZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xuICBsZXQgbG9jYWxBZGp1c3Q7XG4gIGxldCBfaW5wdXQgPSBpbnB1dDtcbiAgbGV0IF9kYXRlID0gZGF0ZTtcblxuICBpZiAoaXNTdHJpbmcoX2lucHV0KSkge1xuICAgIF9pbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgX2lucHV0KTtcbiAgICBpZiAoX2lucHV0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gX2RhdGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzTnVtYmVyKF9pbnB1dCkgJiYgTWF0aC5hYnMoX2lucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xuICAgIF9pbnB1dCA9IF9pbnB1dCAqIDYwO1xuICB9XG5cbiAgaWYgKCFjb25maWcuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQoX2RhdGUpO1xuICB9XG4gIGNvbmZpZy5fb2Zmc2V0ID0gX2lucHV0O1xuICBjb25maWcuX2lzVVRDID0gdHJ1ZTtcbiAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICBfZGF0ZSA9IGFkZChfZGF0ZSwgbG9jYWxBZGp1c3QsICdtaW51dGVzJyk7XG4gIH1cbiAgaWYgKG9mZnNldCAhPT0gX2lucHV0KSB7XG4gICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgX2RhdGUgPSBhZGQoX2RhdGUsIF9pbnB1dCAtIG9mZnNldCwgJ21pbnV0ZXMnLCBjb25maWcuX2lzVVRDKTtcbiAgICAgIC8vIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKF9pbnB1dCAtIG9mZnNldCwgJ20nKSwgMSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIC8vIHRvZG86IGFkZCB0aW1lem9uZSBoYW5kbGluZ1xuICAgICAgLy8gaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2RhdGU7XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0Wm9uZShpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICB9XG5cbiAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gIH1cbn1cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyhkYXRlOiBEYXRlLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IERhdGUge1xuICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIGtlZXBMb2NhbFRpbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuXG4gIHJldHVybiAoZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgMCkpXG4gICAgfHwgZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgNSkpKTtcbn1cblxuLypleHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKSB7XG4gIGlmICh0aGlzLl9pc1VUQykge1xuICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn0qL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XG4gIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCBjb25maWcuX3R6bSwgZmFsc2UsIHRydWUsIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uc3QgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCBpbnB1dCk7XG4gICAgaWYgKHRab25lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgdFpvbmUsIGZhbHNlLCBmYWxzZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIHRydWUsIGZhbHNlLCBjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldChkYXRlOiBEYXRlLCBpbnB1dD86IERhdGUpIHtcbiAgY29uc3QgX2lucHV0ID0gaW5wdXQgPyBnZXRVVENPZmZzZXQoaW5wdXQsIHsgX2lzVVRDOiBmYWxzZSB9KSA6IDA7XG5cbiAgcmV0dXJuIChnZXRVVENPZmZzZXQoZGF0ZSkgLSBfaW5wdXQpICUgNjAgPT09IDA7XG59XG5cblxuLy8gREVQUkVDQVRFRFxuLypleHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xuICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICB9XG5cbiAgY29uc3QgYyA9IHt9O1xuXG4gIGNvcHlDb25maWcoYywgdGhpcyk7XG4gIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gIGlmIChjLl9hKSB7XG4gICAgY29uc3Qgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn0qL1xuXG4vLyBpbiBLaHJvbm9zXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsKCkge1xuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGMoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xufSovXG4iXX0=