/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : mihan : https://github.com/mihan
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(number, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
/** @type {?} */
export const slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3NsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFNcEQsU0FBUyxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7O1FBQzdGLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRztJQUN6QixRQUFRLEdBQUcsRUFBRTtRQUNYLEtBQUssR0FBRztZQUNOLE9BQU8sYUFBYSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxLQUFLLElBQUk7WUFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzlEO2lCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUMzRDtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLEtBQUssR0FBRztZQUNOLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFD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QUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLHlCQUF5QixDQUFDO2FBQ3BDO1FBQ0gsQ0FBQztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO0tBQ3hCO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNsb3ZlbmlhbiBbc2xdXG4vLyEgYXV0aG9yIDogbWloYW4gOiBodHRwczovL2dpdGh1Yi5jb20vbWloYW5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW1iZXI6IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ25la2FqIHNla3VuZCcgOiAnbmVrYWogc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3Nla3VuZG8nIDogJ3Nla3VuZGknO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kaScgOiAnc2VrdW5kYWgnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZGUnIDogJ3Nla3VuZGFoJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZCcgOiAnc2VrdW5kJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgbWludXRhJyA6ICdlbm8gbWludXRvJztcbiAgICBjYXNlICdtbSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXRvJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0aScgOiAnbWludXRhbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0ZScgOiAnbWludXRhbWknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXQnIDogJ21pbnV0YW1pJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgdXJhJyA6ICdlbm8gdXJvJztcbiAgICBjYXNlICdoaCc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3VyYScgOiAndXJvJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyaScgOiAndXJhbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyZScgOiAndXJhbWknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXInIDogJ3VyYW1pJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBkYW4nIDogJ2VuaW0gZG5lbSc7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkYW4nIDogJ2RuZW0nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2b21hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RuaScgOiAnZG5ldmknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIG1lc2VjJyA6ICdlbmltIG1lc2VjZW0nO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWMnIDogJ21lc2VjZW0nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNhJyA6ICdtZXNlY2VtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNlJyA6ICdtZXNlY2knO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNldicgOiAnbWVzZWNpJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbm8gbGV0bycgOiAnZW5pbSBsZXRvbSc7XG4gICAgY2FzZSAneXknOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRvJyA6ICdsZXRvbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRpJyA6ICdsZXRvbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGEnIDogJ2xldGknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0JyA6ICdsZXRpJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnc2wnLFxuICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJlY19hcHJpbF9tYWpfanVuaWpfanVsaWpfYXZndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqLl9qdW4uX2p1bC5fYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ25lZGVsamFfcG9uZWRlbGpla190b3Jla19zcmVkYV/EjWV0cnRla19wZXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZWQuX3Bvbi5fdG9yLl9zcmUuX8SNZXQuX3BldC5fc29iLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb190b19zcl/EjWVfcGVfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RhbmVzIG9iXSBMVCcsXG4gICAgbmV4dERheTogJ1tqdXRyaSBvYl0gTFQnLFxuXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtuZWRlbGpvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzcmVkb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbc29ib3RvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29iXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0RGF5OiAnW3bEjWVyYWogb2JdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasWhbmpvXSBbbmVkZWxqb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuam9dIFtzcmVkb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuam9dIFtzb2JvdG9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasWhbmppXSBkZGRkIFtvYl0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfEjWV6ICVzJyxcbiAgICBwYXN0OiAncHJlZCAlcycsXG4gICAgczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBzczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG1tOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19