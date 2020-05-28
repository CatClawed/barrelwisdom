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
let monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
let monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
let monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
let monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
export const esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse,
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
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7SUFNdkQsY0FBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQzNGLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUV4RSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDMUgsV0FBVyxHQUFHLGtMQUFrTDs7QUFFcE0sTUFBTSxPQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7Ozs7O0lBQzdHLFdBQVcsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsV0FBVztJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsOEZBQThGO0lBQ2pILHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXO0lBQ1gsZUFBZSxFQUFFLFdBQVc7SUFDNUIsZ0JBQWdCLEVBQUUsV0FBVztJQUM3QixRQUFRLEVBQUUsc0RBQXNELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQyxJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsUUFBUSxFQUFFOzs7OztRQUNSLE9BQU8sQ0FBQyxJQUFVO1lBQ2hCLE9BQU8sV0FBVyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BFLENBQUM7Ozs7O1FBQ0QsT0FBTyxDQUFDLElBQVU7WUFDaEIsT0FBTyxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDdkUsQ0FBQzs7Ozs7UUFDRCxRQUFRLENBQUMsSUFBVTtZQUNqQixPQUFPLFlBQVksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNyRSxDQUFDOzs7OztRQUNELE9BQU8sQ0FBQyxJQUFVO1lBQ2hCLE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3JFLENBQUM7Ozs7O1FBQ0QsUUFBUSxDQUFDLElBQVU7WUFDakIsT0FBTyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNqRixDQUFDO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3BhbmlzaCBbZXNdXG4vLyEgYXV0aG9yIDogSnVsaW8gTmFwdXLDrSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpb25jXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBlc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2VzJyxcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9XG5cbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuZXNfbWFydGVzX21pw6lyY29sZXNfanVldmVzX3ZpZXJuZXNfc8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw6kuX2p1ZS5fdmllLl9zw6FiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9taV9qdV92aV9zw6EnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1ttYcOxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdoYWNlICVzJyxcbiAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1biBkw61hJyxcbiAgICBkZDogJyVkIGTDrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcOxbycsXG4gICAgeXk6ICclZCBhw7FvcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICBvcmRpbmFsOiAnJWTCuicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19