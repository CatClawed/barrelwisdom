/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
/** @type {?} */
var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
/** @type {?} */
export var trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        if (num === 0) { // special case for zero
            return num + '\'ıncı';
        }
        /** @type {?} */
        var a = num % 10;
        /** @type {?} */
        var b = num % 100 - a;
        /** @type {?} */
        var c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFZSSxRQUFRLEdBQThCO0lBQ3hDLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxPQUFPO0lBQ1YsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsT0FBTztJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxHQUFHLEVBQUUsUUFBUTtJQUNiLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLFFBQVE7SUFDWCxFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtDQUNiOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsdURBQXVELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxlQUFlO1FBQ2xCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELHNCQUFzQixFQUFFLHVDQUF1QztJQUMvRCxPQUFPOzs7O0lBQVAsVUFBUSxJQUFZOztZQUNaLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFHLHdCQUF3QjtZQUN4QyxPQUFPLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDdkI7O1lBQ0csQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFOztZQUNkLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7O1lBQ2pCLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBUdXJraXNoIFt0cl1cbi8vISBhdXRob3JzIDogRXJoYW4gR3VuZG9nYW4gOiBodHRwczovL2dpdGh1Yi5jb20vZXJoYW5ndW5kb2dhbixcbi8vISAgICAgICAgICAgQnVyYWsgWWnEn2l0IEtheWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9CWUtcblxubGV0IHN1ZmZpeGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAxOiAnXFwnaW5jaScsXG4gIDU6ICdcXCdpbmNpJyxcbiAgODogJ1xcJ2luY2knLFxuICA3MDogJ1xcJ2luY2knLFxuICA4MDogJ1xcJ2luY2knLFxuICAyOiAnXFwnbmNpJyxcbiAgNzogJ1xcJ25jaScsXG4gIDIwOiAnXFwnbmNpJyxcbiAgNTA6ICdcXCduY2knLFxuICAzOiAnXFwnw7xuY8O8JyxcbiAgNDogJ1xcJ8O8bmPDvCcsXG4gIDEwMDogJ1xcJ8O8bmPDvCcsXG4gIDY6ICdcXCduY8SxJyxcbiAgOTogJ1xcJ3VuY3UnLFxuICAxMDogJ1xcJ3VuY3UnLFxuICAzMDogJ1xcJ3VuY3UnLFxuICA2MDogJ1xcJ8SxbmPEsScsXG4gIDkwOiAnXFwnxLFuY8SxJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndHInLFxuICBtb250aHM6ICdPY2FrX8WedWJhdF9NYXJ0X05pc2FuX01hecSxc19IYXppcmFuX1RlbW11el9BxJ91c3Rvc19FeWzDvGxfRWtpbV9LYXPEsW1fQXJhbMSxaycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdPY2FfxZ51Yl9NYXJfTmlzX01heV9IYXpfVGVtX0HEn3VfRXlsX0VraV9LYXNfQXJhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ1BhemFyX1BhemFydGVzaV9TYWzEsV/Dh2FyxZ9hbWJhX1BlcsWfZW1iZV9DdW1hX0N1bWFydGVzaScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1Bhel9QdHNfU2FsX8OHYXJfUGVyX0N1bV9DdHMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnUHpfUHRfU2Ffw4dhX1BlX0N1X0N0Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2J1Z8O8biBzYWF0XSBMVCcsXG4gICAgbmV4dERheTogJ1t5YXLEsW4gc2FhdF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW2dlbGVjZWtdIGRkZGQgW3NhYXRdIExUJyxcbiAgICBsYXN0RGF5OiAnW2TDvG5dIExUJyxcbiAgICBsYXN0V2VlazogJ1tnZcOnZW5dIGRkZGQgW3NhYXRdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHNvbnJhJyxcbiAgICBwYXN0OiAnJXMgw7ZuY2UnLFxuICAgIHM6ICdiaXJrYcOnIHNhbml5ZScsXG4gICAgc3M6ICclZCBzYW5peWUnLFxuICAgIG06ICdiaXIgZGFraWthJyxcbiAgICBtbTogJyVkIGRha2lrYScsXG4gICAgaDogJ2JpciBzYWF0JyxcbiAgICBoaDogJyVkIHNhYXQnLFxuICAgIGQ6ICdiaXIgZ8O8bicsXG4gICAgZGQ6ICclZCBnw7xuJyxcbiAgICBNOiAnYmlyIGF5JyxcbiAgICBNTTogJyVkIGF5JyxcbiAgICB5OiAnYmlyIHnEsWwnLFxuICAgIHl5OiAnJWQgecSxbCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9JyhpbmNpfG5jaXzDvG5jw7x8bmPEsXx1bmN1fMSxbmPEsSkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGlmIChudW0gPT09IDApIHsgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xuICAgICAgcmV0dXJuIG51bSArICdcXCfEsW5jxLEnO1xuICAgIH1cbiAgICBsZXQgYSA9IG51bSAlIDEwLFxuICAgICAgYiA9IG51bSAlIDEwMCAtIGEsXG4gICAgICBjID0gbnVtID49IDEwMCA/IDEwMCA6IG51bGw7XG4gICAgcmV0dXJuIG51bSArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19