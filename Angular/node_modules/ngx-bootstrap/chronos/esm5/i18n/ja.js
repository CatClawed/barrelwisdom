/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
/** @type {?} */
export var jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === '午後';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2phLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWdCO0lBQ25DLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUQsV0FBVyxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakUsUUFBUSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkQsYUFBYSxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFDLFdBQVcsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtRQUM3QixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsV0FBVztRQUNoQixHQUFHLEVBQUcsaUJBQWlCO1FBQ3ZCLElBQUksRUFBRyxzQkFBc0I7S0FDOUI7SUFDRCxhQUFhLEVBQUUsUUFBUTtJQUN2QixJQUFJOzs7O2NBQUUsS0FBSztRQUNULE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUTs7Ozs7O2NBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzdCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFHLFNBQVM7UUFDbkIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELHNCQUFzQixFQUFHLFVBQVU7SUFDbkMsT0FBTzs7Ozs7SUFBUCxVQUFTLEdBQVcsRUFBRSxNQUFjO1FBQ2xDLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSztnQkFDUixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxLQUFLO1FBQ2QsSUFBSSxFQUFHLEtBQUs7UUFDWixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLE1BQU07UUFDWCxDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7S0FDWDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBKYXBhbmVzZSBbamFdXG4vLyEgYXV0aG9yIDogTEkgTG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJ5b25cblxuZXhwb3J0IGNvbnN0IGphTG9jYWxlOiBMb2NhbGVEYXRhID0gIHtcbiAgYWJicjogJ2phJyxcbiAgbW9udGhzIDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAn5pel5puc5pelX+aciOabnOaXpV/ngavmm5zml6Vf5rC05puc5pelX+acqOabnOaXpV/ph5Hmm5zml6Vf5Zyf5puc5pelJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAn5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdISDptbScsXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkvTU0vREQnLFxuICAgIExMIDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgTExMIDogJ1lZWVnlubRN5pyIROaXpSBISDptbScsXG4gICAgTExMTCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0gZGRkZCcsXG4gICAgbCA6ICdZWVlZL01NL0REJyxcbiAgICBsbCA6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgIGxsbCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIGxsbGwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tIGRkZGQnXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/ljYjliY185Y2I5b6ML2ksXG4gIGlzUE0gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAn5Y2I5b6MJztcbiAgfSxcbiAgbWVyaWRpZW0gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn5Y2I5YmNJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfljYjlvownO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdb5LuK5pelXSBMVCcsXG4gICAgbmV4dERheSA6ICdb5piO5pelXSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnW+adpemAsV1kZGRkIExUJyxcbiAgICBsYXN0RGF5IDogJ1vmmKjml6VdIExUJyxcbiAgICBsYXN0V2VlayA6ICdb5YmN6YCxXWRkZGQgTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn3ml6UvLFxuICBvcmRpbmFsIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfml6UnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVz5b6MJyxcbiAgICBwYXN0IDogJyVz5YmNJyxcbiAgICBzIDogJ+aVsOenkicsXG4gICAgc3MgOiAnJWTnp5InLFxuICAgIG0gOiAnMeWIhicsXG4gICAgbW0gOiAnJWTliIYnLFxuICAgIGggOiAnMeaZgumWkycsXG4gICAgaGggOiAnJWTmmYLplpMnLFxuICAgIGQgOiAnMeaXpScsXG4gICAgZGQgOiAnJWTml6UnLFxuICAgIE0gOiAnMeODtuaciCcsXG4gICAgTU0gOiAnJWTjg7bmnIgnLFxuICAgIHkgOiAnMeW5tCcsXG4gICAgeXkgOiAnJWTlubQnXG4gIH1cbn07XG4iXX0=