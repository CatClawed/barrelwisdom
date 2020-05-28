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
export const heLocale = {
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
        /**
         * @param {?} num
         * @return {?}
         */
        hh(num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        /**
         * @param {?} num
         * @return {?}
         */
        dd(num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        /**
         * @param {?} num
         * @return {?}
         */
        MM(num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        /**
         * @param {?} num
         * @return {?}
         */
        yy(num) {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxPQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx5RUFBeUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVGLFdBQVcsRUFBRSwyREFBMkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25GLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsZ0JBQWdCO1FBQ3BCLEdBQUcsRUFBRSxzQkFBc0I7UUFDM0IsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLDhCQUE4QjtRQUN4QyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLOzs7OztRQUNSLEVBQUUsQ0FBQyxHQUFXO1lBQ1osSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNiLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxDQUFDLEVBQUUsS0FBSzs7Ozs7UUFDUixFQUFFLENBQUMsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUN2QixDQUFDO1FBQ0QsQ0FBQyxFQUFFLE1BQU07Ozs7O1FBQ1QsRUFBRSxDQUFDLEdBQVc7WUFDWixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQztRQUNELENBQUMsRUFBRSxLQUFLOzs7OztRQUNSLEVBQUUsQ0FBQyxHQUFXO1lBQ1osSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNiLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtnQkFDdkMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7S0FDRjtJQUNELGFBQWEsRUFBRSwrREFBK0Q7Ozs7O0lBQzlFLElBQUksQ0FBQyxLQUFLO1FBQ1IsT0FBTyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7OztJQUNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzVDO2FBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSGVicmV3IFtoZV1cbi8vISBhdXRob3IgOiBUb21lciBDb2hlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS90b21lclxuLy8hIGF1dGhvciA6IE1vc2hlIFNpbWFudG92IDogaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BtZW50SUxcbi8vISBhdXRob3IgOiBUYWwgQXRlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9UYWxBdGVyXG5cbmV4cG9ydCBjb25zdCBoZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2hlJyxcbiAgbW9udGhzOiAn15nXoNeV15DXqF/XpNeR16jXldeQ16hf157XqNelX9eQ16TXqNeZ15xf157XkNeZX9eZ15XXoNeZX9eZ15XXnNeZX9eQ15XXkteV16HXmF/Xodek15jXnteR16hf15DXlden15jXldeR16hf16DXldeR157XkdeoX9eT16bXnteR16gnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAn15nXoNeV17Nf16TXkdeo17Nf157XqNelX9eQ16TXqNezX9ee15DXmV/XmdeV16DXmV/XmdeV15zXmV/XkNeV15LXs1/Xodek15jXs1/XkNeV16fXs1/XoNeV15HXs1/Xk9em157Xsycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfXqNeQ16nXldefX9ep16DXmV/Xqdec15nXqdeZX9eo15HXmdei15lf15fXnteZ16nXmV/XqdeZ16nXmV/XqdeR16onLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfXkNezX9eR17Nf15LXs1/Xk9ezX9eU17Nf15XXs1/XqdezJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ9eQX9eRX9eSX9eTX9eUX9eVX9epJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFvXkV1NTU1NIFlZWVknLFxuICAgIExMTDogJ0QgW9eRXU1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW9eRXU1NTU0gWVlZWSBISDptbScsXG4gICAgbDogJ0QvTS9ZWVlZJyxcbiAgICBsbDogJ0QgTU1NIFlZWVknLFxuICAgIGxsbDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxuICAgIGxsbGw6ICdkZGQsIEQgTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vXlNeZ15XXnSDXkda+XUxUJyxcbiAgICBuZXh0RGF5OiAnW9ee15fXqCDXkda+XUxUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW9eR16nXoteUXSBMVCcsXG4gICAgbGFzdERheTogJ1vXkNeq157XldecINeR1r5dTFQnLFxuICAgIGxhc3RXZWVrOiAnW9eR15nXldedXSBkZGRkIFvXlNeQ15fXqNeV158g15HXqdei15RdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9eR16LXldeTICVzJyxcbiAgICBwYXN0OiAn15zXpNeg15kgJXMnLFxuICAgIHM6ICfXnteh16TXqCDXqdeg15nXldeqJyxcbiAgICBzczogJyVkINep16DXmdeV16onLFxuICAgIG06ICfXk9en15QnLFxuICAgIG1tOiAnJWQg15PXp9eV16onLFxuICAgIGg6ICfXqdei15QnLFxuICAgIGhoKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfXqdei16rXmdeZ150nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bSArICcg16nXoteV16onO1xuICAgIH0sXG4gICAgZDogJ9eZ15XXnScsXG4gICAgZGQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ9eZ15XXnteZ15nXnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDXmdee15nXnSc7XG4gICAgfSxcbiAgICBNOiAn15fXldeT16knLFxuICAgIE1NKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuICfXl9eV15PXqdeZ15nXnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDXl9eV15PXqdeZ150nO1xuICAgIH0sXG4gICAgeTogJ9ep16DXlCcsXG4gICAgeXkobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ9ep16DXqteZ15nXnSc7XG4gICAgICB9IGVsc2UgaWYgKG51bSAlIDEwID09PSAwICYmIG51bSAhPT0gMTApIHtcbiAgICAgICAgcmV0dXJuIG51bSArICcg16nXoNeUJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnINep16DXmdedJztcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/XkNeX15RcItemfNec16TXoNeUXCLXpnzXkNeX16jXmSDXlNem15TXqNeZ15nXnXzXnNek16DXmSDXlNem15TXqNeZ15nXnXzXnNek16DXldeqINeR15XXp9eofNeR15HXlden16h815HXoteo15EvaSxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiAvXijXkNeX15RcItemfNeQ15fXqNeZINeU16bXlNeo15nXmdedfNeR16LXqNeRKSQvLnRlc3QoaW5wdXQpO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDUpIHtcbiAgICAgIHJldHVybiAn15zXpNeg15XXqiDXkdeV16fXqCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgIHJldHVybiAn15HXkdeV16fXqCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ9ec16TXoNeUXCLXpicgOiAn15zXpNeg15kg15TXpteU16jXmdeZ150nO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE4KSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfXkNeX15RcItemJyA6ICfXkNeX16jXmSDXlNem15TXqNeZ15nXnSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn15HXoteo15EnO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==