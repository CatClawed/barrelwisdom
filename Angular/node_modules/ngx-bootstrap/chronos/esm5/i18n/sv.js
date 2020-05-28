/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
/** @type {?} */
export var svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
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
        var output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3N2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRyxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsbURBQW1ELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFdBQVc7UUFDcEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsY0FBYztRQUNwQixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLE9BQU87S0FDWjtJQUNELHNCQUFzQixFQUFFLGNBQWM7SUFDdEMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTs7WUFDWixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7WUFDcEIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFOztZQUNkLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUM3QixPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFN3ZWRpc2ggW3N2XVxuLy8hIGF1dGhvciA6IEplbnMgQWxtIDogaHR0cHM6Ly9naXRodWIuY29tL3VsbXVzXG5cbmV4cG9ydCBjb25zdCBzdkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3N2JyxcbiAgbW9udGhzOiAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdzw7ZuZGFnX23DpW5kYWdfdGlzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7ZyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8O2bl9tw6VuX3Rpc19vbnNfdG9yX2ZyZV9sw7ZyJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3PDtl9tw6VfdGlfb25fdG9fZnJfbMO2Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsOiAnZGRkIEQgTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tJZGFnXSBMVCcsXG4gICAgbmV4dERheTogJ1tJbW9yZ29uXSBMVCcsXG4gICAgbGFzdERheTogJ1tJZ8Olcl0gTFQnLFxuICAgIG5leHRXZWVrOiAnW1DDpV0gZGRkZCBMVCcsXG4gICAgbGFzdFdlZWs6ICdbSV0gZGRkZFtzXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvbSAlcycsXG4gICAgcGFzdDogJ2bDtnIgJXMgc2VkYW4nLFxuICAgIHM6ICduw6VncmEgc2VrdW5kZXInLFxuICAgIHNzOiAnJWQgc2VrdW5kZXInLFxuICAgIG06ICdlbiBtaW51dCcsXG4gICAgbW06ICclZCBtaW51dGVyJyxcbiAgICBoOiAnZW4gdGltbWUnLFxuICAgIGhoOiAnJWQgdGltbWFyJyxcbiAgICBkOiAnZW4gZGFnJyxcbiAgICBkZDogJyVkIGRhZ2FyJyxcbiAgICBNOiAnZW4gbcOlbmFkJyxcbiAgICBNTTogJyVkIG3DpW5hZGVyJyxcbiAgICB5OiAnZXR0IMOlcicsXG4gICAgeXk6ICclZCDDpXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlfGEpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBsZXQgYiA9IG51bSAlIDEwLFxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnZScgOlxuICAgICAgICAoYiA9PT0gMSkgPyAnYScgOlxuICAgICAgICAgIChiID09PSAyKSA/ICdhJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAnZScgOiAnZSc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=