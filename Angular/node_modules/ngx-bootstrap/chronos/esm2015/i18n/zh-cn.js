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
export const zhCnLocale = {
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
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
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
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        /** @type {?} */
        let hm = hour * 100 + minute;
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
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        /** @type {?} */
        const num = Number(_num);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemgtY24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3poLWNuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxPQUFPLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxXQUFXO1FBQ2YsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixJQUFJLEVBQUUscUJBQXFCO0tBQzVCO0lBQ0QsYUFBYSxFQUFFLG1CQUFtQjs7Ozs7O0lBQ2xDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUTtRQUN6QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDZixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUk7WUFDeEMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDakQsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPO1lBQ1AsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7Ozs7O0lBQ0QsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTzs7WUFDeEIsRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTTtRQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksRUFBRSxHQUFHLElBQUksRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELHNCQUFzQixFQUFFLGdCQUFnQjs7Ozs7O0lBQ3hDLE9BQU8sQ0FBQyxJQUFZLEVBQUUsTUFBTTs7Y0FDcEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxLQUFLO1FBQ1gsQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxNQUFNO0tBQ1g7SUFDRCxJQUFJLEVBQUU7O1FBRUosR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDaGluZXNlIChDaGluYSkgW3poLWNuXVxuLy8hIGF1dGhvciA6IHN1dXBpYyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdXVwaWNcbi8vISBhdXRob3IgOiBaZW5vIFplbmcgOiBodHRwczovL2dpdGh1Yi5jb20vemVub3plbmdcblxuZXhwb3J0IGNvbnN0IHpoQ25Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd6aC1jbicsXG4gIG1vbnRoczogJ+S4gOaciF/kuozmnIhf5LiJ5pyIX+Wbm+aciF/kupTmnIhf5YWt5pyIX+S4g+aciF/lhavmnIhf5Lmd5pyIX+WNgeaciF/ljYHkuIDmnIhf5Y2B5LqM5pyIJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ+aYn+acn+aXpV/mmJ/mnJ/kuIBf5pif5pyf5LqMX+aYn+acn+S4iV/mmJ/mnJ/lm5tf5pif5pyf5LqUX+aYn+acn+WFrScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ+WRqOaXpV/lkajkuIBf5ZGo5LqMX+WRqOS4iV/lkajlm5tf5ZGo5LqUX+WRqOWFrScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfml6Vf5LiAX+S6jF/kuIlf5ZubX+S6lF/lha0nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdZWVlZL01NL0REJyxcbiAgICBMTDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgTExMOiAnWVlZWeW5tE3mnIhE5pelQWjngrltbeWIhicsXG4gICAgTExMTDogJ1lZWVnlubRN5pyIROaXpWRkZGRBaOeCuW1t5YiGJyxcbiAgICBsOiAnWVlZWS9NL0QnLFxuICAgIGxsOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICBsbGw6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIGxsbGw6ICdZWVlZ5bm0TeaciETml6VkZGRkIEhIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv5YeM5pmofOaXqeS4inzkuIrljYh85Lit5Y2IfOS4i+WNiHzmmZrkuIovLFxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIGhvdXIgPSAwO1xuICAgIH1cbiAgICBpZiAobWVyaWRpZW0gPT09ICflh4zmmagnIHx8IG1lcmlkaWVtID09PSAn5pep5LiKJyB8fFxuICAgICAgbWVyaWRpZW0gPT09ICfkuIrljYgnKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn5LiL5Y2IJyB8fCBtZXJpZGllbSA9PT0gJ+aZmuS4iicpIHtcbiAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICfkuK3ljYgnXG4gICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfVxuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBsZXQgaG0gPSBob3VyICogMTAwICsgbWludXRlO1xuICAgIGlmIChobSA8IDYwMCkge1xuICAgICAgcmV0dXJuICflh4zmmagnO1xuICAgIH0gZWxzZSBpZiAoaG0gPCA5MDApIHtcbiAgICAgIHJldHVybiAn5pep5LiKJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTEzMCkge1xuICAgICAgcmV0dXJuICfkuIrljYgnO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxMjMwKSB7XG4gICAgICByZXR1cm4gJ+S4reWNiCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDE4MDApIHtcbiAgICAgIHJldHVybiAn5LiL5Y2IJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfmmZrkuIonO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW+S7iuWkqV1MVCcsXG4gICAgbmV4dERheTogJ1vmmI7lpKldTFQnLFxuICAgIG5leHRXZWVrOiAnW+S4i11kZGRkTFQnLFxuICAgIGxhc3REYXk6ICdb5pio5aSpXUxUJyxcbiAgICBsYXN0V2VlazogJ1vkuIpdZGRkZExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSjml6V85pyIfOWRqCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kKSB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfml6UnO1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIHJldHVybiBudW0gKyAn5pyIJztcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAn5ZGoJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICB9XG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVz5YaFJyxcbiAgICBwYXN0OiAnJXPliY0nLFxuICAgIHM6ICflh6Dnp5InLFxuICAgIHNzOiAnJWQg56eSJyxcbiAgICBtOiAnMSDliIbpkp8nLFxuICAgIG1tOiAnJWQg5YiG6ZKfJyxcbiAgICBoOiAnMSDlsI/ml7YnLFxuICAgIGhoOiAnJWQg5bCP5pe2JyxcbiAgICBkOiAnMSDlpKknLFxuICAgIGRkOiAnJWQg5aSpJyxcbiAgICBNOiAnMSDkuKrmnIgnLFxuICAgIE1NOiAnJWQg5Liq5pyIJyxcbiAgICB5OiAnMSDlubQnLFxuICAgIHl5OiAnJWQg5bm0J1xuICB9LFxuICB3ZWVrOiB7XG4gICAgLy8gR0IvVCA3NDA4LTE5OTTjgIrmlbDmja7lhYPlkozkuqTmjaLmoLzlvI/Ct+S/oeaBr+S6pOaNosK35pel5pyf5ZKM5pe26Ze06KGo56S65rOV44CL5LiOSVNPIDg2MDE6MTk4OOetieaViFxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=