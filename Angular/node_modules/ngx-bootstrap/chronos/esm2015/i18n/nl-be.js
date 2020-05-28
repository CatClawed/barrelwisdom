/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getMonth } from '../utils/date-getters';
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
let monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
let monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
let monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
let monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
export const nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots[getMonth(date, isUTC)];
        }
    },
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        /** @type {?} */
        const num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmwtYmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL25sLWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7SUFPN0MsbUJBQW1CLEdBQUcsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFDN0Ysc0JBQXNCLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFFckYsV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDaEosV0FBVyxHQUFHLDBLQUEwSzs7QUFFNUwsTUFBTSxPQUFPLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSx5RkFBeUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7Ozs7O0lBQzVHLFdBQVcsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7YUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE9BQU8sbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVELFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLGlCQUFpQixFQUFFLDJGQUEyRjtJQUM5RyxzQkFBc0IsRUFBRSxrRkFBa0Y7SUFFMUcsV0FBVztJQUNYLGVBQWUsRUFBRSxXQUFXO0lBQzVCLGdCQUFnQixFQUFFLFdBQVc7SUFFN0IsUUFBUSxFQUFFLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakYsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsWUFBWTtRQUNsQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLGlCQUFpQjs7Ozs7SUFDekMsT0FBTyxDQUFDLElBQVk7O2NBQ1osR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IER1dGNoIChCZWxnaXVtKSBbbmwtYmVdXG4vLyEgYXV0aG9yIDogSm9yaXMgUsO2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXG5cbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyk7XG5sZXQgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sQmVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdubC1iZScsXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcblxuICB3ZWVrZGF5czogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICd6by5fbWEuX2RpLl93by5fZG8uX3ZyLl96YS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb3ZlciAlcycsXG4gICAgcGFzdDogJyVzIGdlbGVkZW4nLFxuICAgIHM6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3M6ICclZCBzZWNvbmRlbicsXG4gICAgbTogJ8Opw6luIG1pbnV1dCcsXG4gICAgbW06ICclZCBtaW51dGVuJyxcbiAgICBoOiAnw6nDqW4gdXVyJyxcbiAgICBoaDogJyVkIHV1cicsXG4gICAgZDogJ8Opw6luIGRhZycsXG4gICAgZGQ6ICclZCBkYWdlbicsXG4gICAgTTogJ8Opw6luIG1hYW5kJyxcbiAgICBNTTogJyVkIG1hYW5kZW4nLFxuICAgIHk6ICfDqcOpbiBqYWFyJyxcbiAgICB5eTogJyVkIGphYXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==