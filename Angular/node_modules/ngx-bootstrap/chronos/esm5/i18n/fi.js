/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
/** @type {?} */
var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
/** @type {?} */
var numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
/** @type {?} */
export var fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2ZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBVUksV0FBVyxHQUFHLHVFQUF1RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQ2xHLGFBQWEsR0FBRztJQUNkLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7SUFDbEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0NBQy9DOzs7Ozs7OztBQUVILFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjs7UUFDaEYsTUFBTSxHQUFHLEVBQUU7SUFDZixRQUFRLEdBQUcsRUFBRTtRQUNYLEtBQUssR0FBRztZQUNOLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDNUQsS0FBSyxJQUFJO1lBQ1AsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssR0FBRztZQUNOLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxLQUFLLElBQUk7WUFDUCxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM3QyxNQUFNO1FBQ1IsS0FBSyxHQUFHO1lBQ04sT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssSUFBSTtZQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFD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LFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9maS5qc1xuXG52YXIgbnVtYmVyc1Bhc3QgPSAnbm9sbGEgeWtzaSBrYWtzaSBrb2xtZSBuZWxqw6Qgdmlpc2kga3V1c2kgc2VpdHNlbcOkbiBrYWhkZWtzYW4geWhkZWtzw6RuJy5zcGxpdCgnICcpLFxuICBudW1iZXJzRnV0dXJlID0gW1xuICAgICdub2xsYScsICd5aGRlbicsICdrYWhkZW4nLCAna29sbWVuJywgJ25lbGrDpG4nLCAndmlpZGVuJywgJ2t1dWRlbicsXG4gICAgbnVtYmVyc1Bhc3RbN10sIG51bWJlcnNQYXN0WzhdLCBudW1iZXJzUGFzdFs5XVxuICBdO1xuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtdXV0YW1hbiBzZWt1bm5pbicgOiAnbXV1dGFtYSBzZWt1bnRpJztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAnc2VrdW5uaW4nIDogJ3Nla3VudGlhJztcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGknO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aWEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aSc7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aWEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAncMOkaXbDpG4nIDogJ3DDpGl2w6QnO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3DDpGl2w6RuJyA6ICdww6RpdsOkw6QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTSc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXVzaSc7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXV0dGEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW9zaSc7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW90dGEnO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmVzdWx0ID0gdmVyYmFsTnVtYmVyKG51bSwgaXNGdXR1cmUpICsgJyAnICsgcmVzdWx0O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB2ZXJiYWxOdW1iZXIobnVtOiBudW1iZXIsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiBudW0gPCAxMCA/IChpc0Z1dHVyZSA/IG51bWJlcnNGdXR1cmVbbnVtXSA6IG51bWJlcnNQYXN0W251bV0pIDogbnVtO1xufVxuXG5leHBvcnQgY29uc3QgZmlMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdmaScsXG4gIG1vbnRoczogJ3RhbW1pa3V1X2hlbG1pa3V1X21hYWxpc2t1dV9odWh0aWt1dV90b3Vrb2t1dV9rZXPDpGt1dV9oZWluw6RrdXVfZWxva3V1X3N5eXNrdXVfbG9rYWt1dV9tYXJyYXNrdXVfam91bHVrdXUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAndGFtbWlfaGVsbWlfbWFhbGlzX2h1aHRpX3RvdWtvX2tlc8OkX2hlaW7DpF9lbG9fc3l5c19sb2thX21hcnJhc19qb3VsdScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdzdW5udW50YWlfbWFhbmFudGFpX3RpaXN0YWlfa2Vza2l2aWlra29fdG9yc3RhaV9wZXJqYW50YWlfbGF1YW50YWknLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hILm1tJyxcbiAgICBMVFM6ICdISC5tbS5zcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRG8gTU1NTVt0YV0gWVlZWScsXG4gICAgTExMOiAnRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIExMTEw6ICdkZGRkLCBEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgbDogJ0QuTS5ZWVlZJyxcbiAgICBsbDogJ0RvIE1NTSBZWVlZJyxcbiAgICBsbGw6ICdEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIGxsbGw6ICdkZGQsIERvIE1NTSBZWVlZLCBba2xvXSBISC5tbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW3TDpG7DpMOkbl0gW2tsb10gTFQnLFxuICAgIG5leHREYXk6ICdbaHVvbWVubmFdIFtrbG9dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsb10gTFQnLFxuICAgIGxhc3REYXk6ICdbZWlsZW5dIFtrbG9dIExUJyxcbiAgICBsYXN0V2VlazogJ1t2aWltZV0gZGRkZFtuYV0gW2tsb10gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgcMOkw6RzdMOkJyxcbiAgICBwYXN0OiAnJXMgc2l0dGVuJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=