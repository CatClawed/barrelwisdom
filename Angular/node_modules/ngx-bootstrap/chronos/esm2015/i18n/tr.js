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
let suffixes = {
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
export const trLocale = {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        /** @type {?} */
        const num = Number(_num);
        if (num === 0) { // special case for zero
            return num + '\'ıncı';
        }
        /** @type {?} */
        let a = num % 10;
        /** @type {?} */
        let b = num % 100 - a;
        /** @type {?} */
        let c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFZSSxRQUFRLEdBQThCO0lBQ3hDLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxPQUFPO0lBQ1YsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsT0FBTztJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxHQUFHLEVBQUUsUUFBUTtJQUNiLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLFFBQVE7SUFDWCxFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtDQUNiOztBQUVELE1BQU0sT0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsdURBQXVELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxlQUFlO1FBQ2xCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELHNCQUFzQixFQUFFLHVDQUF1Qzs7Ozs7SUFDL0QsT0FBTyxDQUFDLElBQVk7O2NBQ1osR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUcsd0JBQXdCO1lBQ3hDLE9BQU8sR0FBRyxHQUFHLFFBQVEsQ0FBQztTQUN2Qjs7WUFDRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7O1lBQ2QsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7WUFDakIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUM3QixPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFR1cmtpc2ggW3RyXVxuLy8hIGF1dGhvcnMgOiBFcmhhbiBHdW5kb2dhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9lcmhhbmd1bmRvZ2FuLFxuLy8hICAgICAgICAgICBCdXJhayBZacSfaXQgS2F5YTogaHR0cHM6Ly9naXRodWIuY29tL0JZS1xuXG5sZXQgc3VmZml4ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdcXCdpbmNpJyxcbiAgNTogJ1xcJ2luY2knLFxuICA4OiAnXFwnaW5jaScsXG4gIDcwOiAnXFwnaW5jaScsXG4gIDgwOiAnXFwnaW5jaScsXG4gIDI6ICdcXCduY2knLFxuICA3OiAnXFwnbmNpJyxcbiAgMjA6ICdcXCduY2knLFxuICA1MDogJ1xcJ25jaScsXG4gIDM6ICdcXCfDvG5jw7wnLFxuICA0OiAnXFwnw7xuY8O8JyxcbiAgMTAwOiAnXFwnw7xuY8O8JyxcbiAgNjogJ1xcJ25jxLEnLFxuICA5OiAnXFwndW5jdScsXG4gIDEwOiAnXFwndW5jdScsXG4gIDMwOiAnXFwndW5jdScsXG4gIDYwOiAnXFwnxLFuY8SxJyxcbiAgOTA6ICdcXCfEsW5jxLEnXG59O1xuXG5leHBvcnQgY29uc3QgdHJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd0cicsXG4gIG1vbnRoczogJ09jYWtfxZ51YmF0X01hcnRfTmlzYW5fTWF5xLFzX0hhemlyYW5fVGVtbXV6X0HEn3VzdG9zX0V5bMO8bF9Fa2ltX0thc8SxbV9BcmFsxLFrJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ09jYV/FnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcSfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMSxX8OHYXLFn2FtYmFfUGVyxZ9lbWJlX0N1bWFfQ3VtYXJ0ZXNpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnUGF6X1B0c19TYWxfw4dhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdQel9QdF9TYV/Dh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbYnVnw7xuIHNhYXRdIExUJyxcbiAgICBuZXh0RGF5OiAnW3lhcsSxbiBzYWF0XSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbZ2VsZWNla10gZGRkZCBbc2FhdF0gTFQnLFxuICAgIGxhc3REYXk6ICdbZMO8bl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2dlw6dlbl0gZGRkZCBbc2FhdF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgc29ucmEnLFxuICAgIHBhc3Q6ICclcyDDtm5jZScsXG4gICAgczogJ2Jpcmthw6cgc2FuaXllJyxcbiAgICBzczogJyVkIHNhbml5ZScsXG4gICAgbTogJ2JpciBkYWtpa2EnLFxuICAgIG1tOiAnJWQgZGFraWthJyxcbiAgICBoOiAnYmlyIHNhYXQnLFxuICAgIGhoOiAnJWQgc2FhdCcsXG4gICAgZDogJ2JpciBnw7xuJyxcbiAgICBkZDogJyVkIGfDvG4nLFxuICAgIE06ICdiaXIgYXknLFxuICAgIE1NOiAnJWQgYXknLFxuICAgIHk6ICdiaXIgecSxbCcsXG4gICAgeXk6ICclZCB5xLFsJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0nKGluY2l8bmNpfMO8bmPDvHxuY8SxfHVuY3V8xLFuY8SxKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgaWYgKG51bSA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXG4gICAgICByZXR1cm4gbnVtICsgJ1xcJ8SxbmPEsSc7XG4gICAgfVxuICAgIGxldCBhID0gbnVtICUgMTAsXG4gICAgICBiID0gbnVtICUgMTAwIC0gYSxcbiAgICAgIGMgPSBudW0gPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICByZXR1cm4gbnVtICsgKHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=