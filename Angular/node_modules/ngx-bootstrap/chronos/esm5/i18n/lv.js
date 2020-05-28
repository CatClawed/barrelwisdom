/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Matiss Janis Aboltins : https://github.com/matissjanis
/** @type {?} */
export var lvLocale = {
    abbr: 'lv',
    months: 'Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena'.split('_'),
    weekdaysShort: 'Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd'.split('_'),
    weekdaysMin: 'Sv_Pi_Ot_Tr_Ce_Pk_Se'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'pēc %s',
        past: 'pirms %s',
        s: 'dažām sekundēm',
        ss: '%d sekundēm',
        m: 'minūtes',
        mm: '%d minūtēm',
        h: 'stundas',
        hh: '%d stundām',
        d: 'dienas',
        dd: '%d dienām',
        M: 'mēneša',
        MM: '%d mēnešiem',
        y: 'gada',
        yy: '%d gadiem'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '.';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsc0dBQXNHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxSCxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcseUVBQXlFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixhQUFhLEVBQUcsNkNBQTZDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RSxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHlCQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGNBQWM7UUFDekIsT0FBTyxFQUFHLG1CQUFtQjtRQUM3QixRQUFRLEVBQUcscUJBQXFCO1FBQ2hDLFFBQVEsRUFBRyxHQUFHO0tBQ2Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsUUFBUTtRQUNqQixJQUFJLEVBQUcsVUFBVTtRQUNqQixDQUFDLEVBQUcsZ0JBQWdCO1FBQ3BCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsWUFBWTtRQUNqQixDQUFDLEVBQUcsUUFBUTtRQUNaLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLGFBQWE7UUFDbEIsQ0FBQyxFQUFHLE1BQU07UUFDVixFQUFFLEVBQUcsV0FBVztLQUNqQjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTzs7OztjQUFDLEdBQUc7UUFDUCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsZ0VBQWdFO0tBQzFFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IExhdHZpYW4gW2x2XVxuLy8hIGF1dGhvciA6IE1hdGlzcyBKYW5pcyBBYm9sdGlucyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRpc3NqYW5pc1xuXG5leHBvcnQgY29uc3QgbHZMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdsdicsXG4gIG1vbnRocyA6ICdKYW52xIFyaXNfRmVicnXEgXJpc19NYXJ0c19BcHLEq2xpc19NYWlqc19KxatuaWpzX0rFq2xpanNfQXVndXN0c19TZXB0ZW1icmlzX09rdG9icmlzX05vdmVtYnJpc19EZWNlbWJyaXMnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYWlfSsWrbl9KxatsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ1N2xJN0ZGllbmFfUGlybWRpZW5hX090cmRpZW5hX1RyZcWhZGllbmFfQ2V0dXJ0ZGllbmFfUGlla3RkaWVuYV9TZXN0ZGllbmEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnU3bEk3RkX1Bpcm1kX090cmRfVHJlxaFkX0NldHVydGRfUGlla3RkX1Nlc3RkJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdTdl9QaV9PdF9Ucl9DZV9Qa19TZScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxuICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ3DEk2MgJXMnLFxuICAgIHBhc3QgOiAncGlybXMgJXMnLFxuICAgIHMgOiAnZGHFvsSBbSBzZWt1bmTEk20nLFxuICAgIHNzIDogJyVkIHNla3VuZMSTbScsXG4gICAgbSA6ICdtaW7Fq3RlcycsXG4gICAgbW0gOiAnJWQgbWluxat0xJNtJyxcbiAgICBoIDogJ3N0dW5kYXMnLFxuICAgIGhoIDogJyVkIHN0dW5kxIFtJyxcbiAgICBkIDogJ2RpZW5hcycsXG4gICAgZGQgOiAnJWQgZGllbsSBbScsXG4gICAgTSA6ICdtxJNuZcWhYScsXG4gICAgTU0gOiAnJWQgbcSTbmXFoWllbScsXG4gICAgeSA6ICdnYWRhJyxcbiAgICB5eSA6ICclZCBnYWRpZW0nXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwobnVtKSB7XG4gICAgICByZXR1cm4gbnVtICsgJy4nO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==