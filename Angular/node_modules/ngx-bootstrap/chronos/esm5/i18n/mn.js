/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return num + (withoutSuffix ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return num + (withoutSuffix ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return num + (withoutSuffix ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return num + (withoutSuffix ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return num + (withoutSuffix ? ' жил' : ' жилийн');
        default:
            return num.toString(10);
    }
}
/** @type {?} */
export var mnLocale = {
    abbr: 'mn',
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: (/**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'ҮХ';
    }),
    meridiem: (/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ҮӨ';
        }
        else {
            return 'ҮХ';
        }
    }),
    calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: (/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + ' өдөр';
            default:
                return num.toString(10);
        }
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL21uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsUUFBUSxHQUFHLEVBQUU7UUFDWCxLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3RCxLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQ7WUFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0I7QUFDSCxDQUFDOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsOExBQThMLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqTixXQUFXLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLElBQUksRUFBRSwrQkFBK0I7S0FDdEM7SUFDRCxhQUFhLEVBQUUsUUFBUTtJQUN2QixJQUFJOzs7O0lBQUUsVUFBVSxLQUFLO1FBQ25CLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztJQUN4QixDQUFDLENBQUE7SUFDRCxRQUFROzs7Ozs7SUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQyxDQUFBO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxPQUFPOzs7OztJQUFFLFVBQVUsR0FBVyxFQUFFLE1BQWM7UUFDNUMsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUN2QjtnQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDLENBQUE7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBNb25nb2xpYW4gW21uXVxuLy8hIGF1dGhvciA6IEphdmtobGFudHVncyBOeWFtZG9yaiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXZraGFhbmo3XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfRhdGN0LTRhdGN0L0g0YHQtdC60YPQvdC0JyA6ICfRhdGN0LTRhdGN0L0g0YHQtdC60YPQvdC00YvQvSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDRgdC10LrRg9C90LQnIDogJyDRgdC10LrRg9C90LTRi9C9Jyk7XG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDQvNC40L3Rg9GCJyA6ICcg0LzQuNC90YPRgtGL0L0nKTtcbiAgICBjYXNlICdoJzpcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINGG0LDQsycgOiAnINGG0LDQs9C40LnQvScpO1xuICAgIGNhc2UgJ2QnOlxuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcg06nQtNOp0YAnIDogJyDTqdC00YDQuNC50L0nKTtcbiAgICBjYXNlICdNJzpcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINGB0LDRgCcgOiAnINGB0LDRgNGL0L0nKTtcbiAgICBjYXNlICd5JzpcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINC20LjQuycgOiAnINC20LjQu9C40LnQvScpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbW5Mb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdtbicsXG4gIG1vbnRoczogJ9Cd0Y3Qs9C00q/Qs9GN0Y3RgCDRgdCw0YBf0KXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAX9CT0YPRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAX9CU06nRgNOp0LLQtNKv0LPRjdGN0YAg0YHQsNGAX9Ci0LDQstC00YPQs9Cw0LDRgCDRgdCw0YBf0JfRg9GA0LPQsNC00YPQs9Cw0LDRgCDRgdCw0YBf0JTQvtC70LTRg9Cz0LDQsNGAINGB0LDRgF/QndCw0LnQvNC00YPQs9Cw0LDRgCDRgdCw0YBf0JXRgdC00q/Qs9GN0Y3RgCDRgdCw0YBf0JDRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAX9CQ0YDQstCw0L0g0L3RjdCz0LTSr9Cz0Y3RjdGAINGB0LDRgF/QkNGA0LLQsNC9INGF0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcxINGB0LDRgF8yINGB0LDRgF8zINGB0LDRgF80INGB0LDRgF81INGB0LDRgF82INGB0LDRgF83INGB0LDRgF84INGB0LDRgF85INGB0LDRgF8xMCDRgdCw0YBfMTEg0YHQsNGAXzEyINGB0LDRgCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfQndGP0Lxf0JTQsNCy0LDQsF/QnNGP0LPQvNCw0YBf0JvRhdCw0LPQstCwX9Cf0q/RgNGN0LJf0JHQsNCw0YHQsNC9X9CR0Y/QvNCx0LAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfQndGP0Lxf0JTQsNCyX9Cc0Y/Qs1/Qm9GF0LBf0J/Sr9GAX9CR0LDQsF/QkdGP0LwnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn0J3Rj1/QlNCwX9Cc0Y9f0JvRhV/Qn9KvX9CR0LBf0JHRjycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgTEw6ICdZWVlZINC+0L3RiyBNTU1N0YvQvSBEJyxcbiAgICBMTEw6ICdZWVlZINC+0L3RiyBNTU1N0YvQvSBEIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgWVlZWSDQvtC90YsgTU1NTdGL0L0gRCBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL9Ku06h80q7QpS9pLFxuICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfSrtClJztcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ9Ku06gnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9Ku0KUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW9Oo0L3TqdOp0LTTqdGAXSBMVCcsXG4gICAgbmV4dERheTogJ1vQnNCw0YDQs9Cw0LDRiF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW9CY0YDRjdGFXSBkZGRkIExUJyxcbiAgICBsYXN0RGF5OiAnW9Oo0YfQuNCz0LTTqdGAXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdb06jQvdCz06nRgNGB06nQvV0gZGRkZCBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyDQtNCw0YDQsNCwJyxcbiAgICBwYXN0OiAnJXMg06nQvNC906knLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSDTqdC006nRgC8sXG4gIG9yZGluYWw6IGZ1bmN0aW9uIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgcmV0dXJuIG51bSArICcg06nQtNOp0YAnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9XG59O1xuIl19