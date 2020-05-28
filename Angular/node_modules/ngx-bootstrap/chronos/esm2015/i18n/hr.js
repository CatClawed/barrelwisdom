/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Danijel Grmec : https://github.com/cobaltsis
/** @type {?} */
export const hrLocale = {
    abbr: 'hr',
    months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
    monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
    weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
    weekdaysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
    weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Danas u] LT',
        nextDay: '[Sutra u] LT',
        nextWeek: 'dddd [u] LT',
        lastDay: '[Jučer u] LT',
        lastWeek: '[Zadnji] dddd [u] LT',
        sameElse: 'L'
    },
    invalidDate: 'Neispravan datum',
    relativeTime: {
        future: 'za %s',
        past: '%s prije',
        s: 'nekoliko sekundi',
        ss: '%d sekundi',
        m: 'minuta',
        mm: '%d minuta',
        h: 'sat',
        hh: '%d sati',
        d: 'dan',
        dd: '%d dana',
        M: 'mjesec',
        MM: '%d mjeseci',
        y: 'godina',
        yy: '%d godina'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        /** @type {?} */
        const num = Number(_num);
        /** @type {?} */
        const b = num % 10;
        /** @type {?} */
        const output = (~~(num % 100 / 10) === 1) ? '.' :
            (b === 1) ? '.' :
                (b === 2) ? '.' :
                    (b === 3) ? '.' : '.';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsK0ZBQStGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsSCxXQUFXLEVBQUUsa0RBQWtELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUUsMkRBQTJELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRixhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGtCQUFrQjtRQUNyQixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFdBQVc7S0FDaEI7SUFDRCxzQkFBc0IsRUFBRSxzQkFBc0I7Ozs7O0lBQzlDLE9BQU8sQ0FBQyxJQUFZOztjQUNaLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOztjQUNsQixDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7O2NBQ2hCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUM3QixPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENyb2F0aWFuIFtocl1cbi8vISBhdXRob3IgOiBEYW5pamVsIEdybWVjIDogaHR0cHM6Ly9naXRodWIuY29tL2NvYmFsdHNpc1xuXG5leHBvcnQgY29uc3QgaHJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdocicsXG4gIG1vbnRoczogJ1NpamXEjWFual9WZWxqYcSNYV9Pxb51amFrX1RyYXZhbmpfU3ZpYmFual9MaXBhbmpfU3JwYW5qX0tvbG92b3pfUnVqYW5fTGlzdG9wYWRfU3R1ZGVuaV9Qcm9zaW5hYycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdTaWpfVmVsal9Pxb51X1RyYV9TdmlfTGlwX1NycF9Lb2xfUnVqX0xpc19TdHVfUHJvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ05lZGplbGphX1BvbmVkamVsamFrX1V0b3Jha19TcmlqZWRhX8SMZXR2cnRha19QZXRha19TdWJvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdOZWRfUG9uX1V0b19TcmlfxIxldF9QZXRfU3ViJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ05lX1BvX1V0X1NyX8SMZV9QZV9TdScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tEYW5hcyB1XSBMVCcsXG4gICAgbmV4dERheTogJ1tTdXRyYSB1XSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt1XSBMVCcsXG4gICAgbGFzdERheTogJ1tKdcSNZXIgdV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW1phZG5qaV0gZGRkZCBbdV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgaW52YWxpZERhdGU6ICdOZWlzcHJhdmFuIGRhdHVtJyxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnemEgJXMnLFxuICAgIHBhc3Q6ICclcyBwcmlqZScsXG4gICAgczogJ25la29saWtvIHNla3VuZGknLFxuICAgIHNzOiAnJWQgc2VrdW5kaScsXG4gICAgbTogJ21pbnV0YScsXG4gICAgbW06ICclZCBtaW51dGEnLFxuICAgIGg6ICdzYXQnLFxuICAgIGhoOiAnJWQgc2F0aScsXG4gICAgZDogJ2RhbicsXG4gICAgZGQ6ICclZCBkYW5hJyxcbiAgICBNOiAnbWplc2VjJyxcbiAgICBNTTogJyVkIG1qZXNlY2knLFxuICAgIHk6ICdnb2RpbmEnLFxuICAgIHl5OiAnJWQgZ29kaW5hJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3R8bmR8cmR8dGgpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBjb25zdCBiID0gbnVtICUgMTAsXG4gICAgICBvdXRwdXQgPSAofn4obnVtICUgMTAwIC8gMTApID09PSAxKSA/ICcuJyA6XG4gICAgICAgIChiID09PSAxKSA/ICcuJyA6XG4gICAgICAgICAgKGIgPT09IDIpID8gJy4nIDpcbiAgICAgICAgICAgIChiID09PSAzKSA/ICcuJyA6ICcuJztcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==