/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
/** @type {?} */
const months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
/** @type {?} */
const monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    const result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekúnd');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minúty' : 'minút');
            }
            else {
                return result + 'minútami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodín');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dni' : 'dní');
            }
            else {
                return result + 'dňami';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'mesiace' : 'mesiacov');
            }
            else {
                return result + 'mesiacmi';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'rokov');
            }
            else {
                return result + 'rokmi';
            }
        // break;
    }
}
/** @type {?} */
export const skLocale = {
    abbr: 'sk',
    months,
    monthsShort,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'o %s',
        past: 'pred %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztNQU05QyxNQUFNLEdBQUcsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7TUFDdkcsV0FBVyxHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7O0FBRWhGLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjs7VUFDOUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBRXhCLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxHQUFHLEVBQUMsdURBQXVEO1lBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3RFLEtBQUssSUFBSSxFQUFDLDJDQUEyQztZQUNuRCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUNJO2dCQUNILE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQzthQUM3QjtRQUNILFNBQVM7UUFDVCxLQUFLLEdBQUcsRUFB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Q0FBQztvQkFDSixPQUFPLHNCQUFzQixDQUFDO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osT0FBTyxzQkFBc0IsQ0FBQzthQUNqQztRQUNILENBQUM7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNsb3ZhayBbc2tdXG4vLyEgYXV0aG9yIDogSm96ZWYgUGHFvmluIDogaHR0cHM6Ly9naXRodWIuY29tL2F0aXJpc1xuXG5jb25zdCBtb250aHMgPSAnamFudcOhcl9mZWJydcOhcl9tYXJlY19hcHLDrWxfbcOhal9qw7puX2rDumxfYXVndXN0X3NlcHRlbWJlcl9va3TDs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKTtcbmNvbnN0IG1vbnRoc1Nob3J0ID0gJ2phbl9mZWJfbWFyX2Fwcl9tw6FqX2rDum5fasO6bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gbnVtICsgJyAnO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6Ly8gYSBmZXcgc2Vjb25kcyAvIGluIGEgZmV3IHNlY29uZHMgLyBhIGZldyBzZWNvbmRzIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdww6FyIHNla8O6bmQnIDogJ3DDoXIgc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6Ly8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWvDum5kJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ20nOi8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbsO6dGEnIDogKGlzRnV0dXJlID8gJ21pbsO6dHUnIDogJ21pbsO6dG91Jyk7XG4gICAgY2FzZSAnbW0nOi8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWluw7p0eScgOiAnbWluw7p0Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW7DunRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2gnOi8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XG4gICAgY2FzZSAnaGgnOi8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2TDrW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdkJzovLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2RlxYgnIDogJ2TFiG9tJztcbiAgICBjYXNlICdkZCc6Ly8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbmknIDogJ2Ruw60nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2TFiGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnTSc6Ly8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdtZXNpYWMnIDogJ21lc2lhY29tJztcbiAgICBjYXNlICdNTSc6Ly8gOSBtb250aHMgLyBpbiA5IG1vbnRocyAvIDkgbW9udGhzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtZXNpYWNlJyA6ICdtZXNpYWNvdicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWVzaWFjbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ3knOi8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tvbSc7XG4gICAgY2FzZSAneXknOi8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAncm9reScgOiAncm9rb3YnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Jva21pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2tMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzaycsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQsXG4gIHdlZWtkYXlzOiAnbmVkZcS+YV9wb25kZWxva191dG9yb2tfc3RyZWRhX8WhdHZydG9rX3BpYXRva19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb191dF9zdF/FoXRfcGlfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fdXRfc3RfxaF0X3BpX3NvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIGw6ICdELiBNLiBZWVlZJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZG5lcyBvXSBMVCcsXG4gICAgbmV4dERheTogJ1t6YWp0cmEgb10gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3YgbmVkZcS+dSBvXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3Ygc3RyZWR1IG9dIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnW3ZvIMWhdHZydG9rIG9dIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3YgcGlhdG9rIG9dIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IG9dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsSNZXJhIG9dIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMO6IG5lZGXEvnUgb10gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMO6IHN0cmVkdSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw71dIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw7ogc29ib3R1IG9dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnbyAlcycsXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWw6ICclZC4nLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIl19