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
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
export var nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
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
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
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
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL25sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7SUFPN0MsbUJBQW1CLEdBQUcsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFDL0Ysc0JBQXNCLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFFbkYsV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDaEosV0FBVyxHQUFHLDBLQUEwSzs7QUFFNUwsTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyx5RkFBeUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdHLFdBQVc7Ozs7OztJQUFYLFVBQWEsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLG1CQUFtQixDQUFDO1NBQzVCO2FBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxPQUFPLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCxXQUFXLGFBQUE7SUFDWCxnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLGlCQUFpQixFQUFFLDJGQUEyRjtJQUM5RyxzQkFBc0IsRUFBRSxrRkFBa0Y7SUFFMUcsV0FBVyxhQUFBO0lBQ1gsZUFBZSxFQUFHLFdBQVc7SUFDN0IsZ0JBQWdCLEVBQUcsV0FBVztJQUU5QixRQUFRLEVBQUcsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsRixhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxrQkFBa0IsRUFBRyxJQUFJO0lBQ3pCLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGFBQWE7UUFDbEIsR0FBRyxFQUFHLG1CQUFtQjtRQUN6QixJQUFJLEVBQUcsd0JBQXdCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFNBQVM7UUFDbEIsSUFBSSxFQUFHLFlBQVk7UUFDbkIsQ0FBQyxFQUFHLG1CQUFtQjtRQUN2QixFQUFFLEVBQUcsYUFBYTtRQUNsQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsWUFBWTtRQUNqQixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxRQUFRO1FBQ2IsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxXQUFXO1FBQ2YsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFVBQVU7UUFDZCxFQUFFLEVBQUcsU0FBUztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUUsaUJBQWlCO0lBQ3pDLE9BQU87Ozs7SUFBUCxVQUFTLElBQVk7O1lBQ2IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsZ0VBQWdFO0tBQzFFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IER1dGNoIFtubF1cbi8vISBhdXRob3IgOiBKb3JpcyBSw7ZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXG4vLyEgYXV0aG9yIDogSmFjb2IgTWlkZGFnIDogaHR0cHM6Ly9naXRodWIuY29tL21pZGRhZ2pcblxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnRXaXRob3V0RG90cyA9ICdqYW5fZmViX21ydF9hcHJfbWVpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8YXByaWx8bWVpfGFwcmlsfGp1W25sXWl8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXJ8amFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IG5sTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbmwnLFxuICBtb250aHMgOiAnamFudWFyaV9mZWJydWFyaV9tYWFydF9hcHJpbF9tZWlfanVuaV9qdWxpX2F1Z3VzdHVzX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCAoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhvdXREb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuICB9LFxuXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98bWVpfGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxuXG4gIHdlZWtkYXlzIDogJ3pvbmRhZ19tYWFuZGFnX2RpbnNkYWdfd29lbnNkYWdfZG9uZGVyZGFnX3ZyaWpkYWdfemF0ZXJkYWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC1NTS1ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXk6ICdbdmFuZGFhZyBvbV0gTFQnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtvbV0gTFQnLFxuICAgIGxhc3REYXk6ICdbZ2lzdGVyZW4gb21dIExUJyxcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJ292ZXIgJXMnLFxuICAgIHBhc3QgOiAnJXMgZ2VsZWRlbicsXG4gICAgcyA6ICdlZW4gcGFhciBzZWNvbmRlbicsXG4gICAgc3MgOiAnJWQgc2Vjb25kZW4nLFxuICAgIG0gOiAnw6nDqW4gbWludXV0JyxcbiAgICBtbSA6ICclZCBtaW51dGVuJyxcbiAgICBoIDogJ8Opw6luIHV1cicsXG4gICAgaGggOiAnJWQgdXVyJyxcbiAgICBkIDogJ8Opw6luIGRhZycsXG4gICAgZGQgOiAnJWQgZGFnZW4nLFxuICAgIE0gOiAnw6nDqW4gbWFhbmQnLFxuICAgIE1NIDogJyVkIG1hYW5kZW4nLFxuICAgIHkgOiAnw6nDqW4gamFhcicsXG4gICAgeXkgOiAnJWQgamFhcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxuICBvcmRpbmFsIChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==