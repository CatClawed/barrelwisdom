/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { addRegexToken, match1 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MONTH } from './constants';
import { toInt } from '../utils/type-checks';
import { getMonth } from '../utils/date-getters';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
import { setMonth } from '../utils/date-setters';
/**
 * @return {?}
 */
export function initQuarter() {
    // FORMATTING
    addFormatToken('Q', null, 'Qo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getQuarter(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    }));
}
// MOMENTS
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}
/**
 * @param {?} date
 * @param {?} quarter
 * @param {?=} isUTC
 * @return {?}
 */
export function setQuarter(date, quarter, isUTC) {
    return setMonth(date, (quarter - 1) * 3 + getMonth(date, isUTC) % 3, isUTC);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL3F1YXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUdqRCxNQUFNLFVBQVUsV0FBVztJQUMzQixhQUFhO0lBRVgsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUosVUFBVTtJQUVSLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFL0IsV0FBVztJQUVULGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFaEMsVUFBVTtJQUVSLGFBQWEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDLEdBQUc7Ozs7OztJQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFhO0lBQWIsc0JBQUEsRUFBQSxhQUFhO0lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVSxFQUFFLE9BQWUsRUFBRSxLQUFlO0lBQ3JFLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0UXVhcnRlcigpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignUScsIG51bGwsICdRbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldFF1YXJ0ZXIoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgncXVhcnRlcicsIDcpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG4gIGFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhcnRlcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgoZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICsgMSkgLyAzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFF1YXJ0ZXIoZGF0ZTogRGF0ZSwgcXVhcnRlcjogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgcmV0dXJuIHNldE1vbnRoKGRhdGUsIChxdWFydGVyIC0gMSkgKiAzICsgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICUgMywgaXNVVEMpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbFxuLy8gICAgID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpXG4vLyAgICAgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xuLy8gfVxuIl19