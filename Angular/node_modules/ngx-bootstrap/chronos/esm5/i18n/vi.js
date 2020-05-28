/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */
export var viLocale = {
    abbr: 'vi',
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^ch$/i.test(input);
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        }
        else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY HH:mm',
        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần trước lúc] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        return '' + _num;
    },
    week: {
        dow: 1,
        // Thứ Hai là ngày đầu tuần.
        doy: 4 // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3ZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsb0dBQW9HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4SCxXQUFXLEVBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRyx3REFBd0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlFLGFBQWEsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGtCQUFrQixFQUFHLElBQUk7SUFDekIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsSUFBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELFFBQVE7Ozs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFnQjtRQUN2RCxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDZCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM5QjtJQUNILENBQUM7SUFDRCxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxtQkFBbUI7UUFDeEIsR0FBRyxFQUFHLHlCQUF5QjtRQUMvQixJQUFJLEVBQUcsK0JBQStCO1FBQ3RDLENBQUMsRUFBRyxXQUFXO1FBQ2YsRUFBRSxFQUFHLFlBQVk7UUFDakIsR0FBRyxFQUFHLGtCQUFrQjtRQUN4QixJQUFJLEVBQUcsdUJBQXVCO0tBQy9CO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsUUFBUTtRQUNqQixJQUFJLEVBQUcsVUFBVTtRQUNqQixDQUFDLEVBQUcsVUFBVTtRQUNkLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFVBQVU7UUFDZCxFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFFBQVE7UUFDYixDQUFDLEVBQUcsVUFBVTtRQUNkLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFdBQVc7UUFDZixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFFBQVE7S0FDZDtJQUNELHNCQUFzQixFQUFFLFNBQVM7SUFDakMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsdURBQXVEO0tBQ2pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFZp4buHdCBOYW0gW3ZpXVxuLy8hIGF1dGhvciA6IENocmlzIEdlZHJpbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2dlZHJpbVxuXG5leHBvcnQgY29uc3QgdmlMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd2aScsXG4gIG1vbnRocyA6ICd0aMOhbmcgMV90aMOhbmcgMl90aMOhbmcgM190aMOhbmcgNF90aMOhbmcgNV90aMOhbmcgNl90aMOhbmcgN190aMOhbmcgOF90aMOhbmcgOV90aMOhbmcgMTBfdGjDoW5nIDExX3Row6FuZyAxMicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnVGgwMV9UaDAyX1RoMDNfVGgwNF9UaDA1X1RoMDZfVGgwN19UaDA4X1RoMDlfVGgxMF9UaDExX1RoMTInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzIDogJ2No4bunIG5o4bqtdF90aOG7qSBoYWlfdGjhu6kgYmFfdGjhu6kgdMawX3Ro4bupIG7Eg21fdGjhu6kgc8OhdV90aOG7qSBi4bqjeScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdDTl9UMl9UM19UNF9UNV9UNl9UNycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnQ05fVDJfVDNfVDRfVDVfVDZfVDcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gIG1lcmlkaWVtUGFyc2U6IC9zYXxjaC9pLFxuICBpc1BNKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL15jaCQvaS50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyLCBpc0xvd2VyOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnc2EnIDogJ1NBJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnY2gnIDogJ0NIJztcbiAgICB9XG4gIH0sXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFtuxINtXSBZWVlZJyxcbiAgICBMTEwgOiAnRCBNTU1NIFtuxINtXSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBbbsSDbV0gWVlZWSBISDptbScsXG4gICAgbCA6ICdERC9NL1lZWVknLFxuICAgIGxsIDogJ0QgTU1NIFlZWVknLFxuICAgIGxsbCA6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICBsbGxsIDogJ2RkZCwgRCBNTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheTogJ1tIw7RtIG5heSBsw7pjXSBMVCcsXG4gICAgbmV4dERheTogJ1tOZ8OgeSBtYWkgbMO6Y10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbdHXhuqduIHThu5tpIGzDumNdIExUJyxcbiAgICBsYXN0RGF5OiAnW0jDtG0gcXVhIGzDumNdIExUJyxcbiAgICBsYXN0V2VlazogJ2RkZGQgW3R14bqnbiB0csaw4bubYyBsw7pjXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIHThu5tpJyxcbiAgICBwYXN0IDogJyVzIHRyxrDhu5tjJyxcbiAgICBzIDogJ3bDoGkgZ2nDonknLFxuICAgIHNzIDogJyVkIGdpw6J5JyAsXG4gICAgbSA6ICdt4buZdCBwaMO6dCcsXG4gICAgbW0gOiAnJWQgcGjDunQnLFxuICAgIGggOiAnbeG7mXQgZ2nhu50nLFxuICAgIGhoIDogJyVkIGdp4budJyxcbiAgICBkIDogJ23hu5l0IG5nw6B5JyxcbiAgICBkZCA6ICclZCBuZ8OgeScsXG4gICAgTSA6ICdt4buZdCB0aMOhbmcnLFxuICAgIE1NIDogJyVkIHRow6FuZycsXG4gICAgeSA6ICdt4buZdCBuxINtJyxcbiAgICB5eSA6ICclZCBuxINtJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0vLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnICsgX251bTtcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBUaOG7qSBIYWkgbMOgIG5nw6B5IMSR4bqndSB0deG6p24uXG4gICAgZG95IDogNCAgLy8gVHXhuqduIGNo4bupYSBuZ8OgeSA0IHRow6FuZyAxIGzDoCB0deG6p24gxJHhuqd1IHRpw6puIHRyb25nIG7Eg20uXG4gIH1cbn07XG5cbiJdfQ==