/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getHours, getMonth } from '../utils/date-getters';
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
/** @type {?} */
var monthsShortDot = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_');
/** @type {?} */
var monthsShort = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
/** @type {?} */
var monthsParse = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
/** @type {?} */
export var glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2dsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7SUFNdkQsY0FBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQzNGLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUV4RSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDMUgsV0FBVyxHQUFHLGdMQUFnTDs7QUFFbE0sTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx3RkFBd0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNHLFdBQVc7Ozs7OztJQUFYLFVBQVksSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFdBQVcsYUFBQTtJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsNEZBQTRGO0lBQy9HLHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXLGFBQUE7SUFDWCxlQUFlLEVBQUUsV0FBVztJQUM1QixnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLFFBQVEsRUFBRSxrREFBa0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLElBQUksRUFBRSxrQ0FBa0M7S0FDekM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLENBQUM7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25FLENBQUM7UUFDRCxRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLENBQUM7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLENBQUM7UUFDRCxRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDN0UsQ0FBQztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsQ0FBQyxFQUFFLGNBQWM7UUFDakIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cbi8vISBhdXRob3IgOiBEYXLDrW8gQmVpcsOzIDogaHR0cHM6Ly9naXRodWIuY29tL3F1aW5vYnJhdm9cblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ3hhbi5fZmViLl9tYXIuX2Fici5fbWFpLl94dcOxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAneGFuX2ZlYl9tYXJfYWJyX21haV94dcOxX3h1bF9hZ29fc2V0X291dF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL154YW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL154dcOxL2ksIC9eeHVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb3V0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w7FvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvfHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcOxXFwuP3x4dWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvdXRcXC4/fG5vdlxcLj98ZGVjXFwuPykvaTtcblxuZXhwb3J0IGNvbnN0IGdsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZ2wnLFxuICBtb250aHM6ICd4YW5laXJvX2ZlYnJlaXJvX21hcnpvX2FicmlsX21haW9feHXDsW9feHVsbG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGVjZW1icm8nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfVxuXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w7FvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXih4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bnNfbWFydGVzX23DqXJjb3Jlc194b3Zlc192ZW5yZXNfc8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX23DqXIuX3hvdi5fdmVuLl9zw6FiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tw6lfeG9fdmVfc8OhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tob3hlIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1ttYcOxYW4gw6EnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW8OhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tvbnRlIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbb10gZGRkZCBbcGFzYWRvIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2ZhaSAlcycsXG4gICAgczogJ3VucyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5oYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMOtYScsXG4gICAgZGQ6ICclZCBkw61hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGFubycsXG4gICAgeXk6ICclZCBhbm9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3Cui8sXG4gIG9yZGluYWw6ICclZMK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=