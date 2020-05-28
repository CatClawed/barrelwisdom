/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getMonth } from '../utils/date-getters';
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
/** @type {?} */
let monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
/** @type {?} */
let monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function translate(num, withoutSuffix, key) {
    /** @type {?} */
    let result = num + ' ';
    switch (key) {
        case 'ss':
            return result + (plural(num) ? 'sekundy' : 'sekund');
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural(num) ? 'lata' : 'lat');
    }
}
/** @type {?} */
export const plLocale = {
    abbr: 'pl',
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    months(date, format, isUTC) {
        if (!date) {
            return monthsNominative;
        }
        else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
        }
        else if (/D MMMM/.test(format)) {
            return monthsSubjective[getMonth(date, isUTC)];
        }
        else {
            return monthsNominative[getMonth(date, isUTC)];
        }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 5:
                    return '[W piątek o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
            }
        },
        lastDay: '[Wczoraj o] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 4:
                    return '[W zeszłą czwartek o] LT';
                case 5:
                    return '[W zeszłą piątek o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate,
        y: 'rok',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3BsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUFNaEQsZ0JBQWdCLEdBQUcsa0dBQWtHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFDaEksZ0JBQWdCLEdBQUcsb0dBQW9HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7QUFFdEksU0FBUyxNQUFNLENBQUMsR0FBVztJQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVzs7UUFDN0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBQ3RCLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxJQUFJO1lBQ1AsT0FBTyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsS0FBSyxHQUFHO1lBQ04sT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzdDLEtBQUssSUFBSTtZQUNQLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFR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RUFBRTtnQkFDMUIsS0FBSyxDQUFDO29CQUNKLE9BQU8sMkJBQTJCLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztvQkFDSixPQUFPLHVCQUF1QixDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osT0FBTywwQkFBMEIsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO29CQUNKLE9BQU8sd0JBQXdCLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQztvQkFDSixPQUFPLHdCQUF3QixDQUFDO2dCQUNsQztvQkFDRSxPQUFPLHdCQUF3QixDQUFDO2FBQ25DO1FBQ0gsQ0FBQztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLGNBQWM7UUFDakIsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFBvbGlzaCBbcGxdXG4vLyEgYXV0aG9yIDogUmFmYWwgSGlyc3ogOiBodHRwczovL2dpdGh1Yi5jb20vZXZvTFxuXG5sZXQgbW9udGhzTm9taW5hdGl2ZSA9ICdzdHljemXFhF9sdXR5X21hcnplY19rd2llY2llxYRfbWFqX2N6ZXJ3aWVjX2xpcGllY19zaWVycGllxYRfd3J6ZXNpZcWEX3Bhxbpkemllcm5pa19saXN0b3BhZF9ncnVkemllxYQnLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU3ViamVjdGl2ZSA9ICdzdHljem5pYV9sdXRlZ29fbWFyY2Ffa3dpZXRuaWFfbWFqYV9jemVyd2NhX2xpcGNhX3NpZXJwbmlhX3dyemXFm25pYV9wYcW6ZHppZXJuaWthX2xpc3RvcGFkYV9ncnVkbmlhJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gJSAxMCA8IDUpICYmIChudW0gJSAxMCA+IDEpICYmICgofn4obnVtIC8gMTApICUgMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXTEmSc7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdnb2R6aW5hJyA6ICdnb2R6aW7EmSc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdnb2R6aW55JyA6ICdnb2R6aW4nKTtcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pZXNpxIVjZScgOiAnbWllc2nEmWN5Jyk7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdsYXRhJyA6ICdsYXQnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGxMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdwbCcsXG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICcnKSB7XG4gICAgICAvLyBIYWNrOiBpZiBmb3JtYXQgZW1wdHkgd2Uga25vdyB0aGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGVcbiAgICAgIC8vIFJlZ0V4cCBieSBtb21lbnQuIEdpdmUgdGhlbiBiYWNrIGJvdGggdmFsaWQgZm9ybXMgb2YgbW9udGhzXG4gICAgICAvLyBpbiBSZWdFeHAgcmVhZHkgZm9ybWF0LlxuICAgICAgcmV0dXJuICcoJyArIG1vbnRoc1N1YmplY3RpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICd8JyArIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICcpJztcbiAgICB9IGVsc2UgaWYgKC9EIE1NTU0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1N1YmplY3RpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1Nob3J0OiAnc3R5X2x1dF9tYXJfa3dpX21hal9jemVfbGlwX3NpZV93cnpfcGHFul9saXNfZ3J1Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ25pZWR6aWVsYV9wb25pZWR6aWHFgmVrX3d0b3Jla1/Fm3JvZGFfY3p3YXJ0ZWtfcGnEhXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZHpfcG9uX3d0X8Wbcl9jendfcHRfc29iJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ05kX1BuX1d0X8Wacl9Del9QdF9Tbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tEemnFmyBvXSBMVCcsXG4gICAgbmV4dERheTogJ1tKdXRybyBvXSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbVyBuaWVkemllbMSZIG9dIExUJztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbV2Ugd3RvcmVrIG9dIExUJztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbVyDFm3JvZMSZIG9dIExUJztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbVyBwacSFdGVrIG9dIExUJztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyBzb2JvdMSZIG9dIExUJztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnW1ddIGRkZGQgW29dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbV2N6b3JhaiBvXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6xYLEhSBuaWVkemllbMSZIG9dIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesWCxIUgxZtyb2TEmSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rFgsSFIGN6d2FydGVrIG9dIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesWCxIUgcGnEhXRlayBvXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rFgsSFIHNvYm90xJkgb10gTFQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesWCeV0gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJyVzIHRlbXUnLFxuICAgIHM6ICdraWxrYSBzZWt1bmQnLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogJzEgZHppZcWEJyxcbiAgICBkZDogJyVkIGRuaScsXG4gICAgTTogJ21pZXNpxIVjJyxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6ICdyb2snLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19