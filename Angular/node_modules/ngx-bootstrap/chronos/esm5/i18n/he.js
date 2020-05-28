/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
/** @type {?} */
export var heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx5RUFBeUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVGLFdBQVcsRUFBRSwyREFBMkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25GLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsZ0JBQWdCO1FBQ3BCLEdBQUcsRUFBRSxzQkFBc0I7UUFDM0IsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLDhCQUE4QjtRQUN4QyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUN2QixDQUFDO1FBQ0QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFOzs7O1FBQUYsVUFBRyxHQUFXO1lBQ1osSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNiLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUU7Ozs7UUFBRixVQUFHLEdBQVc7WUFDWixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQztRQUNELENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZDLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNyQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUN2QixDQUFDO0tBQ0Y7SUFDRCxhQUFhLEVBQUUsK0RBQStEO0lBQzlFLElBQUk7Ozs7Y0FBQyxLQUFLO1FBQ1IsT0FBTyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFFBQVE7Ozs7OztjQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFlBQVksQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNwQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNwQixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDNUM7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIZWJyZXcgW2hlXVxuLy8hIGF1dGhvciA6IFRvbWVyIENvaGVuIDogaHR0cHM6Ly9naXRodWIuY29tL3RvbWVyXG4vLyEgYXV0aG9yIDogTW9zaGUgU2ltYW50b3YgOiBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcG1lbnRJTFxuLy8hIGF1dGhvciA6IFRhbCBBdGVyIDogaHR0cHM6Ly9naXRodWIuY29tL1RhbEF0ZXJcblxuZXhwb3J0IGNvbnN0IGhlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaGUnLFxuICBtb250aHM6ICfXmdeg15XXkNeoX9ek15HXqNeV15DXqF/Xnteo16Vf15DXpNeo15nXnF/XnteQ15lf15nXldeg15lf15nXldec15lf15DXldeS15XXodeYX9eh16TXmNee15HXqF/XkNeV16fXmNeV15HXqF/XoNeV15HXnteR16hf15PXptee15HXqCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfXmdeg15XXs1/XpNeR16jXs1/Xnteo16Vf15DXpNeo17Nf157XkNeZX9eZ15XXoNeZX9eZ15XXnNeZX9eQ15XXktezX9eh16TXmNezX9eQ15XXp9ezX9eg15XXkdezX9eT16bXntezJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ9eo15DXqdeV159f16nXoNeZX9ep15zXmdep15lf16jXkdeZ16LXmV/Xl9ee15nXqdeZX9ep15nXqdeZX9ep15HXqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ9eQ17Nf15HXs1/XktezX9eT17Nf15TXs1/XldezX9ep17MnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn15Bf15Ff15Jf15Nf15Rf15Vf16knLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW9eRXU1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBb15FdTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBb15FdTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBsOiAnRC9NL1lZWVknLFxuICAgIGxsOiAnRCBNTU0gWVlZWScsXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXG4gICAgbGxsbDogJ2RkZCwgRCBNTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW9eU15nXldedINeR1r5dTFQnLFxuICAgIG5leHREYXk6ICdb157Xl9eoINeR1r5dTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBb15HXqdei15RdIExUJyxcbiAgICBsYXN0RGF5OiAnW9eQ16rXnteV15wg15HWvl1MVCcsXG4gICAgbGFzdFdlZWs6ICdb15HXmdeV151dIGRkZGQgW9eU15DXl9eo15XXnyDXkdep16LXlF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn15HXoteV15MgJXMnLFxuICAgIHBhc3Q6ICfXnNek16DXmSAlcycsXG4gICAgczogJ9ee16HXpNeoINep16DXmdeV16onLFxuICAgIHNzOiAnJWQg16nXoNeZ15XXqicsXG4gICAgbTogJ9eT16fXlCcsXG4gICAgbW06ICclZCDXk9en15XXqicsXG4gICAgaDogJ9ep16LXlCcsXG4gICAgaGgobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ9ep16LXqteZ15nXnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDXqdei15XXqic7XG4gICAgfSxcbiAgICBkOiAn15nXldedJyxcbiAgICBkZChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAn15nXldee15nXmdedJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnINeZ157XmdedJztcbiAgICB9LFxuICAgIE06ICfXl9eV15PXqScsXG4gICAgTU0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ9eX15XXk9ep15nXmdedJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnINeX15XXk9ep15nXnSc7XG4gICAgfSxcbiAgICB5OiAn16nXoNeUJyxcbiAgICB5eShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAn16nXoNeq15nXmdedJztcbiAgICAgIH0gZWxzZSBpZiAobnVtICUgMTAgPT09IDAgJiYgbnVtICE9PSAxMCkge1xuICAgICAgICByZXR1cm4gbnVtICsgJyDXqdeg15QnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcg16nXoNeZ150nO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL9eQ15fXlFwi16Z815zXpNeg15RcItemfNeQ15fXqNeZINeU16bXlNeo15nXmdedfNec16TXoNeZINeU16bXlNeo15nXmdedfNec16TXoNeV16og15HXlden16h815HXkdeV16fXqHzXkdei16jXkS9pLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eKNeQ15fXlFwi16Z815DXl9eo15kg15TXpteU16jXmdeZ151815HXoteo15EpJC8udGVzdChpbnB1dCk7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNSkge1xuICAgICAgcmV0dXJuICfXnNek16DXldeqINeR15XXp9eoJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgcmV0dXJuICfXkdeR15XXp9eoJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAn15zXpNeg15RcItemJyA6ICfXnNek16DXmSDXlNem15TXqNeZ15nXnSc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTgpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ9eQ15fXlFwi16YnIDogJ9eQ15fXqNeZINeU16bXlNeo15nXmdedJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfXkdei16jXkSc7XG4gICAgfVxuICB9XG59O1xuIl19