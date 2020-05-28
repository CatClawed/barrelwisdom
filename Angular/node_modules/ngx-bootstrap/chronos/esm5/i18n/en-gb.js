/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */
export var enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
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
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4tZ2IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2VuLWdiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUcsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRyxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcsMERBQTBELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRixhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHlCQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGNBQWM7UUFDekIsT0FBTyxFQUFHLG1CQUFtQjtRQUM3QixRQUFRLEVBQUcscUJBQXFCO1FBQ2hDLFFBQVEsRUFBRyxHQUFHO0tBQ2Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsT0FBTztRQUNoQixJQUFJLEVBQUcsUUFBUTtRQUNmLENBQUMsRUFBRyxlQUFlO1FBQ25CLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxPQUFPO1FBQ1gsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLFVBQVU7S0FDaEI7SUFDRCxzQkFBc0IsRUFBRSxzQkFBc0I7SUFDOUMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTs7WUFDWixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7WUFDbEIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFOztZQUNoQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMvQixPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsZ0VBQWdFO0tBQzFFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKSBbZW4tZ2JdXG4vLyEgYXV0aG9yIDogQ2hyaXMgR2VkcmltIDogaHR0cHM6Ly9naXRodWIuY29tL2NocmlzZ2VkcmltXG5cbmV4cG9ydCBjb25zdCBlbkdiTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZW4tZ2InLFxuICBtb250aHMgOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgcGFzdCA6ICclcyBhZ28nLFxuICAgIHMgOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgc3MgOiAnJWQgc2Vjb25kcycsXG4gICAgbSA6ICdhIG1pbnV0ZScsXG4gICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgaCA6ICdhbiBob3VyJyxcbiAgICBoaCA6ICclZCBob3VycycsXG4gICAgZCA6ICdhIGRheScsXG4gICAgZGQgOiAnJWQgZGF5cycsXG4gICAgTSA6ICdhIG1vbnRoJyxcbiAgICBNTSA6ICclZCBtb250aHMnLFxuICAgIHkgOiAnYSB5ZWFyJyxcbiAgICB5eSA6ICclZCB5ZWFycydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0fG5kfHJkfHRoKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgY29uc3QgYiA9IG51bSAlIDEwLFxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIl19