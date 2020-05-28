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
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
/** @type {?} */
let monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_');
/** @type {?} */
let monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
/** @type {?} */
let monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
/** @type {?} */
let monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
/** @type {?} */
export const caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
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
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
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
            return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            return '[el] dddd [' + ('passada la ' + (getHours(date) !== 1) ? 'passades les' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        /** @type {?} */
        const num = Number(_num);
        /** @type {?} */
        const output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7SUFNdkQsY0FBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQzNGLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUV4RSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs7SUFDMUgsV0FBVyxHQUFHLDJLQUEySzs7QUFFN0wsTUFBTSxPQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7Ozs7O0lBQ3RHLFdBQVcsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsV0FBVztJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsdUZBQXVGO0lBQzFHLHNCQUFzQixFQUFFLHlG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QUFDLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUMvQixPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDLENBQUUsZ0VBQWdFO0tBQ3pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDYXRhbGFuIFtjYV1cbi8vISBhdXRob3IgOiBYYXZpZXIgQXJiYXQgOiBodHRwczovL2dpdGh1Yi5jb20vWGF2aXNhdXJ1c1JleFxuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZ2VuLl9mZWIuX21hci5fYWJyLl9tYWkuX2p1bi5fanVsLl9hZ28uX3NldC5fb2N0Ll9ub3YuX2Rlcy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYWlfanVuX2p1bF9hZ29fc2V0X29jdF9ub3ZfZGVzJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15nZW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXQvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kZXMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihnZW5lcnxmZWJyZXJ8bWFyw6d8YWJyaWx8bWFpZ3xqdW55fGp1bGlvbHxhZ29zdHxzZXRlbWJyZXxvY3R1YnJlfG5vdmVtYnJlfGRlc2VtYnJlfGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgY2FMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdjYScsXG4gIG1vbnRoczogJ2dlbmVyX2ZlYnJlcl9tYXLDp19hYnJpbF9tYWlnX2p1bnlfanVsaW9sX2Fnb3N0X3NldGVtYnJlX29jdHVicmVfbm92ZW1icmVfZGVzZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfVxuXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oZ2VuZXJ8ZmVicmVyfG1hcsOnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZSkvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oZ2VuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNldFxcLj98b2N0XFwuP3xub3ZcXC4/fGRlc1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkaXVtZW5nZV9kaWxsdW5zX2RpbWFydHNfZGltZWNyZXNfZGlqb3VzX2RpdmVuZHJlc19kaXNzYWJ0ZScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RpdS5fZGlsLl9kaW0uX2RpeC5fZGlqLl9kaXYuX2Rpcy4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZGdfZGxfZHRfZGNfZGpfZHZfZHMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2F2dWkgYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2RlbWEgYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1thaGlyIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgWycgKyAoJ3Bhc3NhZGEgbGEgJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncGFzc2FkZXMgbGVzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdmYSAlcycsXG4gICAgczogJ3VucyBzZWdvbnMnLFxuICAgIHNzOiAnJWQgc2Vnb25zJyxcbiAgICBtOiAndW4gbWludXQnLFxuICAgIG1tOiAnJWQgbWludXRzJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yZXMnLFxuICAgIGQ6ICd1biBkaWEnLFxuICAgIGRkOiAnJWQgZGllcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNvcycsXG4gICAgeTogJ3VuIGFueScsXG4gICAgeXk6ICclZCBhbnlzJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8b258ZXJ8cnR8w6kpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBjb25zdCBvdXRwdXQgPSAobnVtID4gNCkgPyAnw6knIDpcbiAgICAgICAgKG51bSA9PT0gMSB8fCBudW0gPT09IDMpID8gJ3InIDpcbiAgICAgICAgICAobnVtID09PSAyKSA/ICduJyA6XG4gICAgICAgICAgICAobnVtID09PSA0KSA/ICd0JyA6ICfDqSc7XG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=