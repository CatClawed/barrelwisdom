/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { getMinutes } from '../utils/date-getters';
import { addRegexToken, match1to2, match2 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MINUTE } from './constants';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
/**
 * @return {?}
 */
export function initMinute() {
    // FORMATTING
    addFormatToken('m', ['mm', 2, false], null, (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getMinutes(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvbWludXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUl6QyxNQUFNLFVBQVUsVUFBVTtJQUMxQixhQUFhO0lBRVgsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSTs7Ozs7SUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUosVUFBVTtJQUVSLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFOUIsV0FBVztJQUVULGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFaEMsVUFBVTtJQUVSLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUIsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0TWludXRlcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNSU5VVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWludXRlKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnbWludXRlJywgJ20nKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ21pbnV0ZScsIDE0KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ20nLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcbn1cbiJdfQ==