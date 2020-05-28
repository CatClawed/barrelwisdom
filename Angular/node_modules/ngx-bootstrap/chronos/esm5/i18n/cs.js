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
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
/** @type {?} */
var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
/** @type {?} */
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
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
    var result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
        // break;
    }
}
var ɵ0 = /**
 * @param {?} months
 * @param {?} monthsShort
 * @return {?}
 */
function (months, monthsShort) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _monthsParse = [];
    for (i = 0; i < 12; i++) {
        // use custom parser to solve problem with July (červenec)
        _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
    }
    return _monthsParse;
}, ɵ1 = /**
 * @param {?} monthsShort
 * @return {?}
 */
function (monthsShort) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _shortMonthsParse = [];
    for (i = 0; i < 12; i++) {
        _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
    }
    return _shortMonthsParse;
}, ɵ2 = /**
 * @param {?} months
 * @return {?}
 */
function (months) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var _longMonthsParse = [];
    for (i = 0; i < 12; i++) {
        _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
    }
    return _longMonthsParse;
};
/** @type {?} */
export var csLocale = {
    abbr: 'cs',
    months: months,
    monthsShort: monthsShort,
    monthsParse: ((ɵ0)(months, monthsShort)),
    shortMonthsParse: ((ɵ1)(monthsShort)),
    longMonthsParse: ((ɵ2)(months)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
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
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQU05QyxNQUFNLEdBQWEsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFDakgsV0FBVyxHQUFhLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7O0FBRTFGLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjs7UUFDOUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBRXhCLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxHQUFHLEVBQUcsdURBQXVEO1lBQ2hFLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3RFLEtBQUssSUFBSSxFQUFFLDJDQUEyQztZQUNwRCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQzthQUM3QjtRQUNILFNBQVM7UUFDVCxLQUFLLEdBQUcsRUFB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UCxLQUFLLENBQUM7b0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO29CQUNKLE9BQU8sdUJBQXVCLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLHNCQUFzQixDQUFDO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osT0FBTyx1QkFBdUIsQ0FBQzthQUNsQztRQUNILENBQUM7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEN6ZWNoIFtjc11cbi8vISBhdXRob3IgOiBwZXRyYmVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRyYmVsYVxuXG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gJ2xlZGVuX8O6bm9yX2LFmWV6ZW5fZHViZW5fa3bEm3Rlbl/EjWVydmVuX8SNZXJ2ZW5lY19zcnBlbl96w6HFmcOtX8WZw61qZW5fbGlzdG9wYWRfcHJvc2luZWMnLnNwbGl0KCdfJyk7XG5jb25zdCBtb250aHNTaG9ydDogc3RyaW5nW10gPSAnbGVkX8O6bm9fYsWZZV9kdWJfa3bEm1/EjXZuX8SNdmNfc3JwX3rDocWZX8WZw61qX2xpc19wcm8nLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzogIC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncMOhciBzZWt1bmQnIDogJ3DDoXIgc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6IC8vIDkgc2Vjb25kcyAvIGluIDkgc2Vjb25kcyAvIDkgc2Vjb25kcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2VrdW5kJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Nla3VuZGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnbSc6ICAvLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogKGlzRnV0dXJlID8gJ21pbnV0dScgOiAnbWludXRvdScpO1xuICAgIGNhc2UgJ21tJzogLy8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbnV0YW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdoJzogIC8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XG4gICAgY2FzZSAnaGgnOiAvLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kaW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnaG9kaW5hbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ2QnOiAgLy8gYSBkYXkgLyBpbiBhIGRheSAvIGEgZGF5IGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdkZW4nIDogJ2RuZW0nO1xuICAgIGNhc2UgJ2RkJzogLy8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbnknIDogJ2Ruw60nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnZG55JztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdNJzogIC8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnbcSbc8OtYycgOiAnbcSbc8OtY2VtJztcbiAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbcSbc8OtY2UnIDogJ23Em3PDrWPFrycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtxJtzw61jaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAneSc6ICAvLyBhIHllYXIgLyBpbiBhIHllYXIgLyBhIHllYXIgYWdvXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3JvaycgOiAncm9rZW0nO1xuICAgIGNhc2UgJ3l5JzogLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdsZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbGV0eSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnY3MnLFxuICBtb250aHMsXG4gIG1vbnRoc1Nob3J0LFxuICBtb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHMsIG1vbnRoc1Nob3J0KSB7XG4gICAgbGV0IGksIF9tb250aHNQYXJzZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyB1c2UgY3VzdG9tIHBhcnNlciB0byBzb2x2ZSBwcm9ibGVtIHdpdGggSnVseSAoxI1lcnZlbmVjKVxuICAgICAgX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJHxeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX21vbnRoc1BhcnNlO1xuICB9KG1vbnRocywgbW9udGhzU2hvcnQpKSxcbiAgc2hvcnRNb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHNTaG9ydCkge1xuICAgIGxldCBpLCBfc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBfc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzU2hvcnRbaV0gKyAnJCcsICdpJyk7XG4gICAgfVxuICAgIHJldHVybiBfc2hvcnRNb250aHNQYXJzZTtcbiAgfShtb250aHNTaG9ydCkpLFxuICBsb25nTW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzKSB7XG4gICAgbGV0IGksIF9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX2xvbmdNb250aHNQYXJzZTtcbiAgfShtb250aHMpKSxcbiAgd2Vla2RheXM6ICduZWTEm2xlX3BvbmTEm2zDrV/DunRlcsO9X3N0xZllZGFfxI10dnJ0ZWtfcMOhdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lX3BvX8O6dF9zdF/EjXRfcMOhX3NvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX8O6dF9zdF/EjXRfcMOhX3NvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIGw6ICdELiBNLiBZWVlZJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbZG5lcyB2XSBMVCcsXG4gICAgbmV4dERheTogJ1t6w610cmEgdl0gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3YgbmVkxJtsaSB2XSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ZlIHN0xZllZHUgdl0gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuICdbdmUgxI10dnJ0ZWsgdl0gTFQnO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdiBww6F0ZWsgdl0gTFQnO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgdl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1t2xI1lcmEgdl0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3UgbmVkxJtsaSB2XSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw6ldIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc3TFmWVkdSB2XSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw71dIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc29ib3R1IHZdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnemEgJXMnLFxuICAgIHBhc3Q6ICdwxZllZCAlcycsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iXX0=