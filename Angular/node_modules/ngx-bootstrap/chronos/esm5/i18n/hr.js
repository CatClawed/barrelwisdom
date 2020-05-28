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
export var hrLocale = {
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
        var output = (~~(num % 100 / 10) === 1) ? '.' :
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsK0ZBQStGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsSCxXQUFXLEVBQUUsa0RBQWtELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUUsMkRBQTJELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRixhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGtCQUFrQjtRQUNyQixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFdBQVc7S0FDaEI7SUFDRCxzQkFBc0IsRUFBRSxzQkFBc0I7SUFDOUMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTs7WUFDWixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7WUFDbEIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFOztZQUNoQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDN0IsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDcm9hdGlhbiBbaHJdXG4vLyEgYXV0aG9yIDogRGFuaWplbCBHcm1lYyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jb2JhbHRzaXNcblxuZXhwb3J0IGNvbnN0IGhyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaHInLFxuICBtb250aHM6ICdTaWplxI1hbmpfVmVsamHEjWFfT8W+dWpha19UcmF2YW5qX1N2aWJhbmpfTGlwYW5qX1NycGFual9Lb2xvdm96X1J1amFuX0xpc3RvcGFkX1N0dWRlbmlfUHJvc2luYWMnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnU2lqX1ZlbGpfT8W+dV9UcmFfU3ZpX0xpcF9TcnBfS29sX1J1al9MaXNfU3R1X1Bybycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdOZWRqZWxqYV9Qb25lZGplbGpha19VdG9yYWtfU3JpamVkYV/EjGV0dnJ0YWtfUGV0YWtfU3Vib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnTmVkX1Bvbl9VdG9fU3JpX8SMZXRfUGV0X1N1Yicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdOZV9Qb19VdF9Tcl/EjGVfUGVfU3UnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbRGFuYXMgdV0gTFQnLFxuICAgIG5leHREYXk6ICdbU3V0cmEgdV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbdV0gTFQnLFxuICAgIGxhc3REYXk6ICdbSnXEjWVyIHVdIExUJyxcbiAgICBsYXN0V2VlazogJ1taYWRuamldIGRkZGQgW3VdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIGludmFsaWREYXRlOiAnTmVpc3ByYXZhbiBkYXR1bScsXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAnJXMgcHJpamUnLFxuICAgIHM6ICduZWtvbGlrbyBzZWt1bmRpJyxcbiAgICBzczogJyVkIHNla3VuZGknLFxuICAgIG06ICdtaW51dGEnLFxuICAgIG1tOiAnJWQgbWludXRhJyxcbiAgICBoOiAnc2F0JyxcbiAgICBoaDogJyVkIHNhdGknLFxuICAgIGQ6ICdkYW4nLFxuICAgIGRkOiAnJWQgZGFuYScsXG4gICAgTTogJ21qZXNlYycsXG4gICAgTU06ICclZCBtamVzZWNpJyxcbiAgICB5OiAnZ29kaW5hJyxcbiAgICB5eTogJyVkIGdvZGluYSdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0fG5kfHJkfHRoKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgY29uc3QgYiA9IG51bSAlIDEwLFxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnLicgOlxuICAgICAgICAoYiA9PT0gMSkgPyAnLicgOlxuICAgICAgICAgIChiID09PSAyKSA/ICcuJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAnLicgOiAnLic7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=