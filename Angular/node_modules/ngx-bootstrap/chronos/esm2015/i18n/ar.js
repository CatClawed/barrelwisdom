/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
/** @type {?} */
const symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
/** @type {?} */
const numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
/** @type {?} */
const pluralForm = (/**
 * @param {?} num
 * @return {?}
 */
function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
});
const ɵ0 = pluralForm;
/** @type {?} */
const plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
/** @type {?} */
const pluralize = (/**
 * @param {?} u
 * @return {?}
 */
function (u) {
    return (/**
     * @param {?} num
     * @param {?} withoutSuffix
     * @return {?}
     */
    function (num, withoutSuffix) {
        /** @type {?} */
        const f = pluralForm(num);
        /** @type {?} */
        let str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return ((/** @type {?} */ (str))).replace(/%d/i, num.toString());
    });
});
const ɵ1 = pluralize;
/** @type {?} */
const months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
/** @type {?} */
export const arLocale = {
    abbr: 'ar',
    months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return 'م' === input;
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return numberMap[match];
        })).replace(/،/g, ',');
    },
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str.replace(/\d/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return symbolMap[match];
        })).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BVU0sU0FBUyxHQUE0QjtJQUN6QyxDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNQOztNQUNLLFNBQVMsR0FBNEI7SUFDekMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVDs7TUFDSyxVQUFVOzs7O0FBQUcsVUFBVSxHQUFXO0lBQ3RDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMs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QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSzs7OztRQUFFLFVBQVUsS0FBSztZQUN2QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsRUFBRSxDQUFFLGdFQUFnRTtLQUMxRTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFyYWJpYyBbYXJdXG4vLyEgYXV0aG9yIDogQWJkZWwgU2FpZDogaHR0cHM6Ly9naXRodWIuY29tL2FiZGVsc2FpZFxuLy8hIGF1dGhvciA6IEFobWVkIEVsa2hhdGliXG4vLyEgYXV0aG9yIDogZm9yYWJpIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JhYmlcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5jb25zdCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAxOiAn2aEnLFxuICAyOiAn2aInLFxuICAzOiAn2aMnLFxuICA0OiAn2aQnLFxuICA1OiAn2aUnLFxuICA2OiAn2aYnLFxuICA3OiAn2acnLFxuICA4OiAn2agnLFxuICA5OiAn2aknLFxuICAwOiAn2aAnXG59O1xuY29uc3QgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ9mhJzogJzEnLFxuICAn2aInOiAnMicsXG4gICfZoyc6ICczJyxcbiAgJ9mkJzogJzQnLFxuICAn2aUnOiAnNScsXG4gICfZpic6ICc2JyxcbiAgJ9mnJzogJzcnLFxuICAn2agnOiAnOCcsXG4gICfZqSc6ICc5JyxcbiAgJ9mgJzogJzAnXG59O1xuY29uc3QgcGx1cmFsRm9ybSA9IGZ1bmN0aW9uIChudW06IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW0gPT09IDAgPyAwIDogbnVtID09PSAxID8gMSA6IG51bSA9PT0gMiA/IDIgOiBudW0gJSAxMDAgPj0gMyAmJiBudW0gJSAxMDAgPD0gMTAgPyAzIDogbnVtICUgMTAwID49IDExID8gNCA6IDU7XG59O1xuY29uc3QgcGx1cmFsczoge1trZXk6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZywgW3N0cmluZywgc3RyaW5nXSwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ119ID0ge1xuICBzOiBbJ9ij2YLZhCDZhdmGINir2KfZhtmK2KknLCAn2KvYp9mG2YrYqSDZiNin2K3Yr9ipJywgWyfYq9in2YbZitiq2KfZhicsICfYq9in2YbZitiq2YrZhiddLCAnJWQg2KvZiNin2YYnLCAnJWQg2KvYp9mG2YrYqScsICclZCDYq9in2YbZitipJ10sXG4gIG06IFsn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqScsICfYr9mC2YrZgtipINmI2KfYrdiv2KknLCBbJ9iv2YLZitmC2KrYp9mGJywgJ9iv2YLZitmC2KrZitmGJ10sICclZCDYr9mC2KfYptmCJywgJyVkINiv2YLZitmC2KknLCAnJWQg2K/ZgtmK2YLYqSddLFxuICBoOiBbJ9ij2YLZhCDZhdmGINiz2KfYudipJywgJ9iz2KfYudipINmI2KfYrdiv2KknLCBbJ9iz2KfYudiq2KfZhicsICfYs9in2LnYqtmK2YYnXSwgJyVkINiz2KfYudin2KonLCAnJWQg2LPYp9i52KknLCAnJWQg2LPYp9i52KknXSxcbiAgZDogWyfYo9mC2YQg2YXZhiDZitmI2YUnLCAn2YrZiNmFINmI2KfYrdivJywgWyfZitmI2YXYp9mGJywgJ9mK2YjZhdmK2YYnXSwgJyVkINij2YrYp9mFJywgJyVkINmK2YjZhdmL2KcnLCAnJWQg2YrZiNmFJ10sXG4gIE06IFsn2KPZgtmEINmF2YYg2LTZh9ixJywgJ9i02YfYsSDZiNin2K3YrycsIFsn2LTZh9ix2KfZhicsICfYtNmH2LHZitmGJ10sICclZCDYo9i02YfYsScsICclZCDYtNmH2LHYpycsICclZCDYtNmH2LEnXSxcbiAgeTogWyfYo9mC2YQg2YXZhiDYudin2YUnLCAn2LnYp9mFINmI2KfYrdivJywgWyfYudin2YXYp9mGJywgJ9i52KfZhdmK2YYnXSwgJyVkINij2LnZiNin2YUnLCAnJWQg2LnYp9mF2YvYpycsICclZCDYudin2YUnXVxufTtcbmNvbnN0IHBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh1OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3QgZiA9IHBsdXJhbEZvcm0obnVtKTtcbiAgICBsZXQgc3RyID0gcGx1cmFsc1t1XVtwbHVyYWxGb3JtKG51bSldO1xuICAgIGlmIChmID09PSAyKSB7XG4gICAgICBzdHIgPSBzdHJbd2l0aG91dFN1ZmZpeCA/IDAgOiAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHN0ciBhcyBzdHJpbmcpLnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygpKTtcbiAgfTtcbn07XG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gW1xuICAn2YrZhtin2YrYsScsXG4gICfZgdio2LHYp9mK2LEnLFxuICAn2YXYp9ix2LMnLFxuICAn2KPYqNix2YrZhCcsXG4gICfZhdin2YrZiCcsXG4gICfZitmI2YbZitmIJyxcbiAgJ9mK2YjZhNmK2YgnLFxuICAn2KPYutiz2LfYsycsXG4gICfYs9io2KrZhdio2LEnLFxuICAn2KPZg9iq2YjYqNixJyxcbiAgJ9mG2YjZgdmF2KjYsScsXG4gICfYr9mK2LPZhdio2LEnXG5dO1xuXG5leHBvcnQgY29uc3QgYXJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdhcicsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQ6IG1vbnRocyxcbiAgd2Vla2RheXM6ICfYp9mE2KPYrdivX9in2YTYpdir2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfYo9it2K9f2KXYq9mG2YrZhl/Yq9mE2KfYq9in2KFf2KPYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfYrV/Zhl/Yq1/YsV/Yrl/YrF/Ysycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnRC9cXHUyMDBGTS9cXHUyMDBGWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv2LV82YUvLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuICfZhScgPT09IGlucHV0O1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ9i1JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfZhSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdb2KfZhNmK2YjZhSDYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXG4gICAgbmV4dERheTogJ1vYutiv2YvYpyDYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXG4gICAgbGFzdERheTogJ1vYo9mF2LMg2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnZGRkZCBb2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn2KjYudivICVzJyxcbiAgICBwYXN0OiAn2YXZhtiwICVzJyxcbiAgICBzOiBwbHVyYWxpemUoJ3MnKSxcbiAgICBzczogcGx1cmFsaXplKCdzJyksXG4gICAgbTogcGx1cmFsaXplKCdtJyksXG4gICAgbW06IHBsdXJhbGl6ZSgnbScpLFxuICAgIGg6IHBsdXJhbGl6ZSgnaCcpLFxuICAgIGhoOiBwbHVyYWxpemUoJ2gnKSxcbiAgICBkOiBwbHVyYWxpemUoJ2QnKSxcbiAgICBkZDogcGx1cmFsaXplKCdkJyksXG4gICAgTTogcGx1cmFsaXplKCdNJyksXG4gICAgTU06IHBsdXJhbGl6ZSgnTScpLFxuICAgIHk6IHBsdXJhbGl6ZSgneScpLFxuICAgIHl5OiBwbHVyYWxpemUoJ3knKVxuICB9LFxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgv2IwvZywgJywnKTtcbiAgfSxcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgvLC9nLCAn2IwnKTtcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogNiwgLy8gU2F0dXJkYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDEyICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=