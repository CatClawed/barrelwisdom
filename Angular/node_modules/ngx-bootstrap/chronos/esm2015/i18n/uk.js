/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getHours } from '../utils/date-getters';
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural(word, num) {
    /** @type {?} */
    let forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    /** @type {?} */
    let format = {
        ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
        mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        dd: 'день_дні_днів',
        MM: 'місяць_місяці_місяців',
        yy: 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    return num + ' ' + plural(format[key], +num);
}
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} isUTC
 * @return {?}
 */
function weekdaysCaseReplace(date, format, isUTC) {
    /** @type {?} */
    let weekdays = {
        nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    };
    if (!date) {
        return weekdays.nominative;
    }
    /** @type {?} */
    let nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][getDayOfWeek(date, isUTC)];
}
/**
 * @param {?} str
 * @return {?}
 */
function processHoursFunction(str) {
    return (/**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return str + 'о' + (getHours(date) === 11 ? 'б' : '') + '] LT';
    });
}
/** @type {?} */
export const ukLocale = {
    abbr: 'uk',
    months: {
        format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY р.',
        LLL: 'D MMMM YYYY р., HH:mm',
        LLLL: 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar: {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [')(date);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [')(date);
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'за %s',
        past: '%s тому',
        s: 'декілька секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'годину',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'місяць',
        MM: relativeTimeWithPlural,
        y: 'рік',
        yy: relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(дня|вечора)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 4) {
            return 'ночі';
        }
        else if (hour < 12) {
            return 'ранку';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечора';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        /** @type {?} */
        const num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return num + '-й';
            case 'D':
                return num + '-го';
            default:
                return num.toString();
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3VrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7OztBQU9wRCxTQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRzs7UUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNCLE9BQU8sR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkosQ0FBQzs7Ozs7OztBQUVELFNBQVMsc0JBQXNCLENBQUMsR0FBVyxFQUFFLGFBQWEsRUFBRSxHQUFHOztRQUN6RCxNQUFNLEdBQThCO1FBQ3RDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDdkUsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUN2RSxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMs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QU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFDRCxzQkFBc0IsRUFBRSxnQkFBZ0I7Ozs7OztJQUN4QyxPQUFPLENBQUMsSUFBWSxFQUFFLE1BQWM7O2NBQzVCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDckI7Z0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVWtyYWluaWFuIFt1a11cbi8vISBhdXRob3IgOiB6ZW1sYW5pbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW1sYW5pblxuLy8hIEF1dGhvciA6IE1lbmVsaW9uIEVsZW5zw7psZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG5cbmZ1bmN0aW9uIHBsdXJhbCh3b3JkLCBudW0pIHtcbiAgbGV0IGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xuICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMSA/IGZvcm1zWzBdIDogKG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl0pO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ9GB0LXQutGD0L3QtNCwX9GB0LXQutGD0L3QtNC4X9GB0LXQutGD0L3QtCcgOiAn0YHQtdC60YPQvdC00YNf0YHQtdC60YPQvdC00Lhf0YHQtdC60YPQvdC0JyxcbiAgICBtbTogd2l0aG91dFN1ZmZpeCA/ICfRhdCy0LjQu9C40L3QsF/RhdCy0LjQu9C40L3QuF/RhdCy0LjQu9C40L0nIDogJ9GF0LLQuNC70LjQvdGDX9GF0LLQuNC70LjQvdC4X9GF0LLQuNC70LjQvScsXG4gICAgaGg6IHdpdGhvdXRTdWZmaXggPyAn0LPQvtC00LjQvdCwX9Cz0L7QtNC40L3QuF/Qs9C+0LTQuNC9JyA6ICfQs9C+0LTQuNC90YNf0LPQvtC00LjQvdC4X9Cz0L7QtNC40L0nLFxuICAgIGRkOiAn0LTQtdC90Yxf0LTQvdGWX9C00L3RltCyJyxcbiAgICBNTTogJ9C80ZbRgdGP0YbRjF/QvNGW0YHRj9GG0ZZf0LzRltGB0Y/RhtGW0LInLFxuICAgIHl5OiAn0YDRltC6X9GA0L7QutC4X9GA0L7QutGW0LInXG4gIH07XG5cbiAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAn0YXQstC40LvQuNC90LAnIDogJ9GF0LLQuNC70LjQvdGDJztcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdoJykge1xuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9Cz0L7QtNC40L3QsCcgOiAn0LPQvtC00LjQvdGDJztcbiAgfVxuICByZXR1cm4gbnVtICsgJyAnICsgcGx1cmFsKGZvcm1hdFtrZXldLCArbnVtKTtcbn1cblxuZnVuY3Rpb24gd2Vla2RheXNDYXNlUmVwbGFjZShkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBsZXQgd2Vla2RheXMgPSB7XG4gICAgbm9taW5hdGl2ZTogJ9C90LXQtNGW0LvRj1/Qv9C+0L3QtdC00ZbQu9C+0Lpf0LLRltCy0YLQvtGA0L7Qul/RgdC10YDQtdC00LBf0YfQtdGC0LLQtdGAX9C/4oCZ0Y/RgtC90LjRhtGPX9GB0YPQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgICBhY2N1c2F0aXZlOiAn0L3QtdC00ZbQu9GOX9C/0L7QvdC10LTRltC70L7Qul/QstGW0LLRgtC+0YDQvtC6X9GB0LXRgNC10LTRg1/Rh9C10YLQstC10YBf0L/igJnRj9GC0L3QuNGG0Y5f0YHRg9Cx0L7RgtGDJy5zcGxpdCgnXycpLFxuICAgIGdlbml0aXZlOiAn0L3QtdC00ZbQu9GWX9C/0L7QvdC10LTRltC70LrQsF/QstGW0LLRgtC+0YDQutCwX9GB0LXRgNC10LTQuF/Rh9C10YLQstC10YDQs9CwX9C/4oCZ0Y/RgtC90LjRhtGWX9GB0YPQsdC+0YLQuCcuc3BsaXQoJ18nKVxuICB9O1xuXG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiB3ZWVrZGF5cy5ub21pbmF0aXZlO1xuICB9XG5cbiAgbGV0IG5vdW5DYXNlID0gKC8oXFxbW9CS0LLQo9GDXVxcXSkgP2RkZGQvKS50ZXN0KGZvcm1hdCkgP1xuICAgICdhY2N1c2F0aXZlJyA6XG4gICAgKCgvXFxbPyg/OtC80LjQvdGD0LvQvtGXfNC90LDRgdGC0YPQv9C90L7Rlyk/ID9cXF0gP2RkZGQvKS50ZXN0KGZvcm1hdCkgP1xuICAgICAgJ2dlbml0aXZlJyA6XG4gICAgICAnbm9taW5hdGl2ZScpO1xuICByZXR1cm4gd2Vla2RheXNbbm91bkNhc2VdW2dldERheU9mV2VlayhkYXRlLCBpc1VUQyldO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSG91cnNGdW5jdGlvbihzdHI6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIgKyAn0L4nICsgKGdldEhvdXJzKGRhdGUpID09PSAxMSA/ICfQsScgOiAnJykgKyAnXSBMVCc7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCB1a0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3VrJyxcbiAgbW9udGhzOiB7XG4gICAgZm9ybWF0OiAn0YHRltGH0L3Rj1/Qu9GO0YLQvtCz0L5f0LHQtdGA0LXQt9C90Y9f0LrQstGW0YLQvdGPX9GC0YDQsNCy0L3Rj1/Rh9C10YDQstC90Y9f0LvQuNC/0L3Rj1/RgdC10YDQv9C90Y9f0LLQtdGA0LXRgdC90Y9f0LbQvtCy0YLQvdGPX9C70LjRgdGC0L7Qv9Cw0LTQsF/Qs9GA0YPQtNC90Y8nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ9GB0ZbRh9C10L3RjF/Qu9GO0YLQuNC5X9Cx0LXRgNC10LfQtdC90Yxf0LrQstGW0YLQtdC90Yxf0YLRgNCw0LLQtdC90Yxf0YfQtdGA0LLQtdC90Yxf0LvQuNC/0LXQvdGMX9GB0LXRgNC/0LXQvdGMX9Cy0LXRgNC10YHQtdC90Yxf0LbQvtCy0YLQtdC90Yxf0LvQuNGB0YLQvtC/0LDQtF/Qs9GA0YPQtNC10L3RjCcuc3BsaXQoJ18nKVxuICB9LFxuICBtb250aHNTaG9ydDogJ9GB0ZbRh1/Qu9GO0YJf0LHQtdGAX9C60LLRltGCX9GC0YDQsNCyX9GH0LXRgNCyX9C70LjQv1/RgdC10YDQv1/QstC10YBf0LbQvtCy0YJf0LvQuNGB0YJf0LPRgNGD0LQnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiB3ZWVrZGF5c0Nhc2VSZXBsYWNlLFxuICB3ZWVrZGF5c1Nob3J0OiAn0L3QtF/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfQvdC0X9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWSDRgC4nLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZINGALiwgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSDRgC4sIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6IHByb2Nlc3NIb3Vyc0Z1bmN0aW9uKCdb0KHRjNC+0LPQvtC00L3RliAnKSxcbiAgICBuZXh0RGF5OiBwcm9jZXNzSG91cnNGdW5jdGlvbignW9CX0LDQstGC0YDQsCAnKSxcbiAgICBsYXN0RGF5OiBwcm9jZXNzSG91cnNGdW5jdGlvbignW9CS0YfQvtGA0LAgJyksXG4gICAgbmV4dFdlZWs6IHByb2Nlc3NIb3Vyc0Z1bmN0aW9uKCdb0KNdIGRkZGQgWycpLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc0hvdXJzRnVuY3Rpb24oJ1vQnNC40L3Rg9C70L7Rl10gZGRkZCBbJykoZGF0ZSk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3NIb3Vyc0Z1bmN0aW9uKCdb0JzQuNC90YPQu9C+0LPQvl0gZGRkZCBbJykoZGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9C30LAgJXMnLFxuICAgIHBhc3Q6ICclcyDRgtC+0LzRgycsXG4gICAgczogJ9C00LXQutGW0LvRjNC60LAg0YHQtdC60YPQvdC0JyxcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGg6ICfQs9C+0LTQuNC90YMnLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICfQtNC10L3RjCcsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ9C80ZbRgdGP0YbRjCcsXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgeTogJ9GA0ZbQuicsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgLy8gTS4gRS46IHRob3NlIHR3byBhcmUgdmlydHVhbGx5IHVudXNlZCBidXQgYSB1c2VyIG1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IHRoZW0gZm9yIGhpcy9oZXIgd2Vic2l0ZSBmb3Igc29tZSByZWFzb25cbiAgbWVyaWRpZW1QYXJzZTogL9C90L7Rh9GWfNGA0LDQvdC60YN80LTQvdGPfNCy0LXRh9C+0YDQsC8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14o0LTQvdGPfNCy0LXRh9C+0YDQsCkkLy50ZXN0KGlucHV0KTtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICByZXR1cm4gJ9C90L7Rh9GWJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfRgNCw0L3QutGDJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgcmV0dXJuICfQtNC90Y8nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9Cy0LXRh9C+0YDQsCc7XG4gICAgfVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKNC5fNCz0L4pLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICct0LknO1xuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLdCz0L4nO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=