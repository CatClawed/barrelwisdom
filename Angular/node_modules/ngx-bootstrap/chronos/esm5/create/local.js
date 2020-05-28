/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createLocalOrUTC } from './from-anything';
import { isDate } from '../utils/type-checks';
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    /** @type {?} */
    var config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}
/**
 * @param {?} date
 * @return {?}
 */
export function utcAsLocal(date) {
    if (!(date instanceof Date)) {
        return null;
    }
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvbG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0FBRTlDLE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBZ0IsRUFBRSxNQUEwQixFQUM1QyxTQUFrQixFQUFFLE1BQWdCLEVBQUUsS0FBZTtJQUM3RSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNqQixPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBRXhFLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNuQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBSTtJQUM3QixJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFDcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQzFCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG5cbiAgcmV0dXJuIGNvbmZpZy5fZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHV0Y0FzTG9jYWwoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgZGF0ZS5nZXRVVENNb250aCgpLFxuICAgIGRhdGUuZ2V0VVRDRGF0ZSgpLFxuICAgIGRhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICBkYXRlLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBkYXRlLmdldFVUQ1NlY29uZHMoKSxcbiAgICBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICk7XG59XG4iXX0=