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
var symbolMap = {
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
var numberMap = {
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
var pluralForm = (/**
 * @param {?} num
 * @return {?}
 */
function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
});
var ɵ0 = pluralForm;
/** @type {?} */
var plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
/** @type {?} */
var pluralize = (/**
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
        var f = pluralForm(num);
        /** @type {?} */
        var str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return ((/** @type {?} */ (str))).replace(/%d/i, num.toString());
    });
});
var ɵ1 = pluralize;
/** @type {?} */
var months = [
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
export var arLocale = {
    abbr: 'ar',
    months: months,
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
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return 'م' === input;
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
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
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return numberMap[match];
        })).replace(/،/g, ',');
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBVU0sU0FBUyxHQUE0QjtJQUN6QyxDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNQOztJQUNLLFNBQVMsR0FBNEI7SUFDekMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVDs7SUFDSyxVQUFVOzs7O0FBQUcsVUFBVSxHQUFXO0lBQ3RDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMs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VyxHQUFXO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLOzs7O1FBQUUsVUFBVSxLQUFLO1lBQ3ZDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxFQUFFLENBQUUsZ0VBQWdFO0tBQzFFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQXJhYmljIFthcl1cbi8vISBhdXRob3IgOiBBYmRlbCBTYWlkOiBodHRwczovL2dpdGh1Yi5jb20vYWJkZWxzYWlkXG4vLyEgYXV0aG9yIDogQWhtZWQgRWxraGF0aWJcbi8vISBhdXRob3IgOiBmb3JhYmkgaHR0cHM6Ly9naXRodWIuY29tL2ZvcmFiaVxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmNvbnN0IHN5bWJvbE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gIDE6ICfZoScsXG4gIDI6ICfZoicsXG4gIDM6ICfZoycsXG4gIDQ6ICfZpCcsXG4gIDU6ICfZpScsXG4gIDY6ICfZpicsXG4gIDc6ICfZpycsXG4gIDg6ICfZqCcsXG4gIDk6ICfZqScsXG4gIDA6ICfZoCdcbn07XG5jb25zdCBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAn2aEnOiAnMScsXG4gICfZoic6ICcyJyxcbiAgJ9mjJzogJzMnLFxuICAn2aQnOiAnNCcsXG4gICfZpSc6ICc1JyxcbiAgJ9mmJzogJzYnLFxuICAn2acnOiAnNycsXG4gICfZqCc6ICc4JyxcbiAgJ9mpJzogJzknLFxuICAn2aAnOiAnMCdcbn07XG5jb25zdCBwbHVyYWxGb3JtID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG51bSA9PT0gMCA/IDAgOiBudW0gPT09IDEgPyAxIDogbnVtID09PSAyID8gMiA6IG51bSAlIDEwMCA+PSAzICYmIG51bSAlIDEwMCA8PSAxMCA/IDMgOiBudW0gJSAxMDAgPj0gMTEgPyA0IDogNTtcbn07XG5jb25zdCBwbHVyYWxzOiB7W2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gPSB7XG4gIHM6IFsn2KPZgtmEINmF2YYg2KvYp9mG2YrYqScsICfYq9in2YbZitipINmI2KfYrdiv2KknLCBbJ9ir2KfZhtmK2KrYp9mGJywgJ9ir2KfZhtmK2KrZitmGJ10sICclZCDYq9mI2KfZhicsICclZCDYq9in2YbZitipJywgJyVkINir2KfZhtmK2KknXSxcbiAgbTogWyfYo9mC2YQg2YXZhiDYr9mC2YrZgtipJywgJ9iv2YLZitmC2Kkg2YjYp9it2K/YqScsIFsn2K/ZgtmK2YLYqtin2YYnLCAn2K/ZgtmK2YLYqtmK2YYnXSwgJyVkINiv2YLYp9im2YInLCAnJWQg2K/ZgtmK2YLYqScsICclZCDYr9mC2YrZgtipJ10sXG4gIGg6IFsn2KPZgtmEINmF2YYg2LPYp9i52KknLCAn2LPYp9i52Kkg2YjYp9it2K/YqScsIFsn2LPYp9i52KrYp9mGJywgJ9iz2KfYudiq2YrZhiddLCAnJWQg2LPYp9i52KfYqicsICclZCDYs9in2LnYqScsICclZCDYs9in2LnYqSddLFxuICBkOiBbJ9ij2YLZhCDZhdmGINmK2YjZhScsICfZitmI2YUg2YjYp9it2K8nLCBbJ9mK2YjZhdin2YYnLCAn2YrZiNmF2YrZhiddLCAnJWQg2KPZitin2YUnLCAnJWQg2YrZiNmF2YvYpycsICclZCDZitmI2YUnXSxcbiAgTTogWyfYo9mC2YQg2YXZhiDYtNmH2LEnLCAn2LTZh9ixINmI2KfYrdivJywgWyfYtNmH2LHYp9mGJywgJ9i02YfYsdmK2YYnXSwgJyVkINij2LTZh9ixJywgJyVkINi02YfYsdinJywgJyVkINi02YfYsSddLFxuICB5OiBbJ9ij2YLZhCDZhdmGINi52KfZhScsICfYudin2YUg2YjYp9it2K8nLCBbJ9i52KfZhdin2YYnLCAn2LnYp9mF2YrZhiddLCAnJWQg2KPYudmI2KfZhScsICclZCDYudin2YXZi9inJywgJyVkINi52KfZhSddXG59O1xuY29uc3QgcGx1cmFsaXplID0gZnVuY3Rpb24gKHU6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBmID0gcGx1cmFsRm9ybShudW0pO1xuICAgIGxldCBzdHIgPSBwbHVyYWxzW3VdW3BsdXJhbEZvcm0obnVtKV07XG4gICAgaWYgKGYgPT09IDIpIHtcbiAgICAgIHN0ciA9IHN0clt3aXRob3V0U3VmZml4ID8gMCA6IDFdO1xuICAgIH1cblxuICAgIHJldHVybiAoc3RyIGFzIHN0cmluZykucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKCkpO1xuICB9O1xufTtcbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSBbXG4gICfZitmG2KfZitixJyxcbiAgJ9mB2KjYsdin2YrYsScsXG4gICfZhdin2LHYsycsXG4gICfYo9io2LHZitmEJyxcbiAgJ9mF2KfZitmIJyxcbiAgJ9mK2YjZhtmK2YgnLFxuICAn2YrZiNmE2YrZiCcsXG4gICfYo9i62LPYt9izJyxcbiAgJ9iz2KjYqtmF2KjYsScsXG4gICfYo9mD2KrZiNio2LEnLFxuICAn2YbZiNmB2YXYqNixJyxcbiAgJ9iv2YrYs9mF2KjYsSdcbl07XG5cbmV4cG9ydCBjb25zdCBhckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2FyJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydDogbW9udGhzLFxuICB3ZWVrZGF5czogJ9in2YTYo9it2K9f2KfZhNil2KvZhtmK2YZf2KfZhNir2YTYp9ir2KfYoV/Yp9mE2KPYsdio2LnYp9ihX9in2YTYrtmF2YrYs1/Yp9mE2KzZhdi52Klf2KfZhNiz2KjYqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ9ij2K3Yr1/Ypdir2YbZitmGX9ir2YTYp9ir2KfYoV/Yo9ix2KjYudin2KFf2K7ZhdmK2LNf2KzZhdi52Klf2LPYqNiqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ9itX9mGX9irX9ixX9iuX9isX9izJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdEL1xcdTIwMEZNL1xcdTIwMEZZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/YtXzZhS8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gJ9mFJyA9PT0gaW5wdXQ7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn2LUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9mFJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vYp9mE2YrZiNmFINi52YbYryDYp9mE2LPYp9i52KldIExUJyxcbiAgICBuZXh0RGF5OiAnW9i62K/Zi9inINi52YbYryDYp9mE2LPYp9i52KldIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW9i52YbYryDYp9mE2LPYp9i52KldIExUJyxcbiAgICBsYXN0RGF5OiAnW9ij2YXYsyDYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdkZGRkIFvYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfYqNi52K8gJXMnLFxuICAgIHBhc3Q6ICfZhdmG2LAgJXMnLFxuICAgIHM6IHBsdXJhbGl6ZSgncycpLFxuICAgIHNzOiBwbHVyYWxpemUoJ3MnKSxcbiAgICBtOiBwbHVyYWxpemUoJ20nKSxcbiAgICBtbTogcGx1cmFsaXplKCdtJyksXG4gICAgaDogcGx1cmFsaXplKCdoJyksXG4gICAgaGg6IHBsdXJhbGl6ZSgnaCcpLFxuICAgIGQ6IHBsdXJhbGl6ZSgnZCcpLFxuICAgIGRkOiBwbHVyYWxpemUoJ2QnKSxcbiAgICBNOiBwbHVyYWxpemUoJ00nKSxcbiAgICBNTTogcGx1cmFsaXplKCdNJyksXG4gICAgeTogcGx1cmFsaXplKCd5JyksXG4gICAgeXk6IHBsdXJhbGl6ZSgneScpXG4gIH0sXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vZodmi2aPZpNml2abZp9mo2anZoF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICB9KS5yZXBsYWNlKC/YjC9nLCAnLCcpO1xuICB9LFxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICB9KS5yZXBsYWNlKC8sL2csICfYjCcpO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogMTIgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==