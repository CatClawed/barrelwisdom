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
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
/** @type {?} */
var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
export var esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
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
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
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
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7SUFNdkQsY0FBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQzNGLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUV4RSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDMUgsV0FBVyxHQUFHLGtMQUFrTDs7QUFFcE0sTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdHLFdBQVc7Ozs7OztJQUFYLFVBQVksSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFdBQVcsYUFBQTtJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsOEZBQThGO0lBQ2pILHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXLGFBQUE7SUFDWCxlQUFlLEVBQUUsV0FBVztJQUM1QixnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLFFBQVEsRUFBRSxzREFBc0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLElBQUksRUFBRSxrQ0FBa0M7S0FDekM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sV0FBVyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BFLENBQUM7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3ZFLENBQUM7UUFDRCxRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3JFLENBQUM7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3JFLENBQUM7UUFDRCxRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLE9BQU8sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDakYsQ0FBQztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLGVBQWU7UUFDbEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggW2VzXVxuLy8hIGF1dGhvciA6IEp1bGlvIE5hcHVyw60gOiBodHRwczovL2dpdGh1Yi5jb20vanVsaW9uY1xuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15lbmUvaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXAvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kaWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlfGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgZXNMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdlcycsXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfVxuXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSkvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacOpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDoWJhZG8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacOpLl9qdWUuX3ZpZS5fc8OhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8OhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbbWHDsWFuYSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbcGFzYWRvIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnaGFjZSAlcycsXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMOtYScsXG4gICAgZGQ6ICclZCBkw61hcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VuIGHDsW8nLFxuICAgIHl5OiAnJWQgYcOxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcbiAgb3JkaW5hbDogJyVkwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==