/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
export function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy1mbGFncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxTQUFTLG1CQUFtQjtJQUMxQixxQ0FBcUM7SUFDckMsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsV0FBVyxFQUFFLEVBQUU7UUFDZixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ1osYUFBYSxFQUFFLENBQUM7UUFDaEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsR0FBRyxFQUFFLEtBQUs7UUFDVixlQUFlLEVBQUUsRUFBRTtRQUNuQixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZUFBZSxFQUFFLEtBQUs7S0FDdkIsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUF5QjtJQUN2RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztLQUNwQztJQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcsIERhdGVQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk6IERhdGVQYXJzaW5nRmxhZ3Mge1xuICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gIHJldHVybiB7XG4gICAgZW1wdHk6IGZhbHNlLFxuICAgIHVudXNlZFRva2VuczogW10sXG4gICAgdW51c2VkSW5wdXQ6IFtdLFxuICAgIG92ZXJmbG93OiAtMixcbiAgICBjaGFyc0xlZnRPdmVyOiAwLFxuICAgIG51bGxJbnB1dDogZmFsc2UsXG4gICAgaW52YWxpZE1vbnRoOiBudWxsLFxuICAgIGludmFsaWRGb3JtYXQ6IGZhbHNlLFxuICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgaXNvOiBmYWxzZSxcbiAgICBwYXJzZWREYXRlUGFydHM6IFtdLFxuICAgIG1lcmlkaWVtOiBudWxsLFxuICAgIHJmYzI4MjI6IGZhbHNlLFxuICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdGbGFncyB7XG4gIGlmIChjb25maWcuX3BmID09IG51bGwpIHtcbiAgICBjb25maWcuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5fcGY7XG59XG4iXX0=