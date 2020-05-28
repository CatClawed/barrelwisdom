/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
/** @type {?} */
export var zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        /** @type {?} */
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemgtY24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3poLWNuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxLQUFPLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxXQUFXO1FBQ2YsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixJQUFJLEVBQUUscUJBQXFCO0tBQzVCO0lBQ0QsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQyxZQUFZOzs7OztjQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSTtZQUN4QyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNqRCxPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU87WUFDUCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7SUFDRCxRQUFROzs7Ozs7Y0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87O1lBQ3hCLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU07UUFDNUIsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksRUFBRSxHQUFHLElBQUksRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxnQkFBZ0I7SUFDeEMsT0FBTzs7Ozs7SUFBUCxVQUFRLElBQVksRUFBRSxNQUFNOztZQUNwQixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CO2dCQUNFLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLEtBQUs7UUFDWCxDQUFDLEVBQUUsSUFBSTtRQUNQLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLE1BQU07S0FDWDtJQUNELElBQUksRUFBRTs7UUFFSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENoaW5lc2UgKENoaW5hKSBbemgtY25dXG4vLyEgYXV0aG9yIDogc3V1cGljIDogaHR0cHM6Ly9naXRodWIuY29tL3N1dXBpY1xuLy8hIGF1dGhvciA6IFplbm8gWmVuZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vemVuZ1xuXG5leHBvcnQgY29uc3QgemhDbkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3poLWNuJyxcbiAgbW9udGhzOiAn5LiA5pyIX+S6jOaciF/kuInmnIhf5Zub5pyIX+S6lOaciF/lha3mnIhf5LiD5pyIX+WFq+aciF/kuZ3mnIhf5Y2B5pyIX+WNgeS4gOaciF/ljYHkuozmnIgnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAn5pif5pyf5pelX+aYn+acn+S4gF/mmJ/mnJ/kuoxf5pif5pyf5LiJX+aYn+acn+Wbm1/mmJ/mnJ/kupRf5pif5pyf5YWtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn5ZGo5pelX+WRqOS4gF/lkajkuoxf5ZGo5LiJX+WRqOWbm1/lkajkupRf5ZGo5YWtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ+aXpV/kuIBf5LqMX+S4iV/lm5tf5LqUX+WFrScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVkvTU0vREQnLFxuICAgIExMOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICBMTEw6ICdZWVlZ5bm0TeaciETml6VBaOeCuW1t5YiGJyxcbiAgICBMTExMOiAnWVlZWeW5tE3mnIhE5pelZGRkZEFo54K5bW3liIYnLFxuICAgIGw6ICdZWVlZL00vRCcsXG4gICAgbGw6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgIGxsbDogJ1lZWVnlubRN5pyIROaXpSBISDptbScsXG4gICAgbGxsbDogJ1lZWVnlubRN5pyIROaXpWRkZGQgSEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/lh4zmmah85pep5LiKfOS4iuWNiHzkuK3ljYh85LiL5Y2IfOaZmuS4ii8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ+WHjOaZqCcgfHwgbWVyaWRpZW0gPT09ICfml6nkuIonIHx8XG4gICAgICBtZXJpZGllbSA9PT0gJ+S4iuWNiCcpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfkuIvljYgnIHx8IG1lcmlkaWVtID09PSAn5pma5LiKJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJ+S4reWNiCdcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGxldCBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XG4gICAgaWYgKGhtIDwgNjAwKSB7XG4gICAgICByZXR1cm4gJ+WHjOaZqCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xuICAgICAgcmV0dXJuICfml6nkuIonO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XG4gICAgICByZXR1cm4gJ+S4iuWNiCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDEyMzApIHtcbiAgICAgIHJldHVybiAn5Lit5Y2IJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xuICAgICAgcmV0dXJuICfkuIvljYgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ+aZmuS4iic7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdb5LuK5aSpXUxUJyxcbiAgICBuZXh0RGF5OiAnW+aYjuWkqV1MVCcsXG4gICAgbmV4dFdlZWs6ICdb5LiLXWRkZGRMVCcsXG4gICAgbGFzdERheTogJ1vmmKjlpKldTFQnLFxuICAgIGxhc3RXZWVrOiAnW+S4il1kZGRkTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KOaXpXzmnIh85ZGoKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2QpIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ+aXpSc7XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfmnIgnO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICflkagnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXPlhoUnLFxuICAgIHBhc3Q6ICclc+WJjScsXG4gICAgczogJ+WHoOenkicsXG4gICAgc3M6ICclZCDnp5InLFxuICAgIG06ICcxIOWIhumSnycsXG4gICAgbW06ICclZCDliIbpkp8nLFxuICAgIGg6ICcxIOWwj+aXticsXG4gICAgaGg6ICclZCDlsI/ml7YnLFxuICAgIGQ6ICcxIOWkqScsXG4gICAgZGQ6ICclZCDlpKknLFxuICAgIE06ICcxIOS4quaciCcsXG4gICAgTU06ICclZCDkuKrmnIgnLFxuICAgIHk6ICcxIOW5tCcsXG4gICAgeXk6ICclZCDlubQnXG4gIH0sXG4gIHdlZWs6IHtcbiAgICAvLyBHQi9UIDc0MDgtMTk5NOOAiuaVsOaNruWFg+WSjOS6pOaNouagvOW8j8K35L+h5oGv5Lqk5o2iwrfml6XmnJ/lkozml7bpl7TooajnpLrms5XjgIvkuI5JU08gODYwMToxOTg4562J5pWIXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==