/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { diff } from './diff';
import { cloneWithOffset } from '../units/offset';
import { isFunction, isString } from '../utils/type-checks';
import { cloneDate } from '../create/clone';
import { startOf } from '../utils/start-end-of';
import { formatDate } from '../format';
import { getLocale } from '../locale/locales';
/**
 * @record
 */
export function CalendarSpec() { }
if (false) {
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameElse;
    /* Skipping unhandled member: [x: string]: CalendarSpecVal | void;*/
}
/**
 * @param {?} date
 * @param {?} now
 * @param {?} config
 * @return {?}
 */
export function getCalendarFormat(date, now, config) {
    /** @type {?} */
    var _diff = diff(date, now, 'day', true, config);
    switch (true) {
        case _diff < -6: return 'sameElse';
        case _diff < -1: return 'lastWeek';
        case _diff < 0: return 'lastDay';
        case _diff < 1: return 'sameDay';
        case _diff < 2: return 'nextDay';
        case _diff < 7: return 'nextWeek';
        default: return 'sameElse';
    }
}
/**
 * @param {?} date
 * @param {?} time
 * @param {?} formats
 * @param {?=} locale
 * @param {?=} config
 * @return {?}
 */
export function calendar(date, time, formats, locale, config) {
    if (locale === void 0) { locale = getLocale(); }
    if (config === void 0) { config = {}; }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    /** @type {?} */
    var now = time;
    /** @type {?} */
    var sod = startOf(cloneWithOffset(now, date, config), 'day', config._isUTC);
    /** @type {?} */
    var format = getCalendarFormat(date, sod, { _isUTC: true, _offset: 0 }) || 'sameElse';
    /** @type {?} */
    var output;
    if (formats) {
        /** @type {?} */
        var _format = formats[format];
        if (isString(_format)) {
            output = _format;
        }
        if (isFunction(_format)) {
            output = _format.call(null, date, now);
        }
    }
    if (!output) {
        output = locale.calendar(format, date, cloneDate(now));
    }
    return formatDate(date, output, config._locale._abbr, config._isUTC, config._offset);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJtb21lbnQvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU05QyxrQ0FVQzs7O0lBVEMsK0JBQTBCOztJQUMxQiwrQkFBMEI7O0lBQzFCLCtCQUEwQjs7SUFDMUIsZ0NBQTJCOztJQUMzQixnQ0FBMkI7O0lBQzNCLGdDQUEyQjs7Ozs7Ozs7O0FBTTdCLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFVLEVBQUUsR0FBUyxFQUFFLE1BQXlCOztRQUMxRSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFFbEQsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDO1FBQ25DLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUM7UUFDbkMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUM7UUFDakMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUM7UUFDakMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUM7UUFDakMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUM7S0FDNUI7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVUsRUFDVixJQUFVLEVBQ1YsT0FBcUIsRUFDckIsTUFBNEIsRUFDNUIsTUFBOEI7SUFEOUIsdUJBQUEsRUFBQSxTQUFpQixTQUFTLEVBQUU7SUFDNUIsdUJBQUEsRUFBQSxXQUE4Qjs7OztRQUcvQyxHQUFHLEdBQUcsSUFBSTs7UUFDVixHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFHLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDOztRQUN4RSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLElBQUksVUFBVTs7UUFFakYsTUFBTTtJQUNWLElBQUksT0FBTyxFQUFFOztZQUNMLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDbEI7UUFDRCxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QixNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Y7SUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7IHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5cbmV4cG9ydCB0eXBlIENhbGVuZGFyU3BlY1ZhbCA9IHN0cmluZyB8ICgobT86IERhdGVJbnB1dCwgbm93PzogRGF0ZSkgPT4gc3RyaW5nKTtcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJTcGVjIHtcbiAgc2FtZURheT86IENhbGVuZGFyU3BlY1ZhbDtcbiAgbmV4dERheT86IENhbGVuZGFyU3BlY1ZhbDtcbiAgbGFzdERheT86IENhbGVuZGFyU3BlY1ZhbDtcbiAgbmV4dFdlZWs/OiBDYWxlbmRhclNwZWNWYWw7XG4gIGxhc3RXZWVrPzogQ2FsZW5kYXJTcGVjVmFsO1xuICBzYW1lRWxzZT86IENhbGVuZGFyU3BlY1ZhbDtcblxuICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIG1pZ2h0IGJlIHVzZWQgd2l0aCBtb21lbnQuY2FsZW5kYXJGb3JtYXRcbiAgW3g6IHN0cmluZ106IENhbGVuZGFyU3BlY1ZhbCB8IHZvaWQ7IC8vIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FsZW5kYXJGb3JtYXQoZGF0ZTogRGF0ZSwgbm93OiBEYXRlLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKSB7XG4gIGNvbnN0IF9kaWZmID0gZGlmZihkYXRlLCBub3csICdkYXknLCB0cnVlLCBjb25maWcpO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgX2RpZmYgPCAtNjogcmV0dXJuICdzYW1lRWxzZSc7XG4gICAgY2FzZSBfZGlmZiA8IC0xOiByZXR1cm4gJ2xhc3RXZWVrJztcbiAgICBjYXNlIF9kaWZmIDwgMDogcmV0dXJuICdsYXN0RGF5JztcbiAgICBjYXNlIF9kaWZmIDwgMTogcmV0dXJuICdzYW1lRGF5JztcbiAgICBjYXNlIF9kaWZmIDwgMjogcmV0dXJuICduZXh0RGF5JztcbiAgICBjYXNlIF9kaWZmIDwgNzogcmV0dXJuICduZXh0V2Vlayc7XG4gICAgZGVmYXVsdDogcmV0dXJuICdzYW1lRWxzZSc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyKGRhdGU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzOiBDYWxlbmRhclNwZWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBMb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBzdHJpbmcge1xuICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgY29uc3Qgbm93ID0gdGltZTtcbiAgY29uc3Qgc29kID0gc3RhcnRPZihjbG9uZVdpdGhPZmZzZXQobm93LCBkYXRlLCAgY29uZmlnKSwgJ2RheScsIGNvbmZpZy5faXNVVEMpO1xuICBjb25zdCBmb3JtYXQgPSBnZXRDYWxlbmRhckZvcm1hdChkYXRlLCBzb2QsIHtfaXNVVEM6IHRydWUsIF9vZmZzZXQ6IDB9KSB8fCAnc2FtZUVsc2UnO1xuXG4gIGxldCBvdXRwdXQ7XG4gIGlmIChmb3JtYXRzKSB7XG4gICAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdHNbZm9ybWF0XTtcbiAgICBpZiAoaXNTdHJpbmcoX2Zvcm1hdCkpIHtcbiAgICAgIG91dHB1dCA9IF9mb3JtYXQ7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKF9mb3JtYXQpKSB7XG4gICAgICBvdXRwdXQgPSBfZm9ybWF0LmNhbGwobnVsbCwgZGF0ZSwgbm93KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW91dHB1dCkge1xuICAgIG91dHB1dCA9IGxvY2FsZS5jYWxlbmRhcihmb3JtYXQsIGRhdGUsIGNsb25lRGF0ZShub3cpKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUsIG91dHB1dCwgY29uZmlnLl9sb2NhbGUuX2FiYnIsIGNvbmZpZy5faXNVVEMsIGNvbmZpZy5fb2Zmc2V0KTtcbn1cbiJdfQ==