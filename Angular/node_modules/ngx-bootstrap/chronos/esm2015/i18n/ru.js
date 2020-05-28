/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getWeek } from '../units/week';
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
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
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural(format[key], +num);
}
/** @type {?} */
let monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
/** @type {?} */
export const ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        nextWeek(date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        lastWeek(date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(дня|вечера)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
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
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3J1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7O0FBUXBELFNBQVMsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFXOztRQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2SixDQUFDOzs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXOztRQUMxRSxNQUFNLEdBQTRCO1FBQ3BDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDdkUsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNqRSxFQUFFLEVBQUUsZ0JBQWdCO1FBQ3BCLEVBQUUsRUFBRSxlQUFlO1FBQ25CLEVBQUUsRUFB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O0lBQ0QsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBQ0Qsc0JBQXNCLEVBQUUsa0JBQWtCOzs7Ozs7SUFDMUMsT0FBTyxDQUFDLElBQVksRUFBRSxNQUFjOztjQUM1QixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBSdXNzaWFuIFtydV1cbi8vISBhdXRob3IgOiBWaWt0b3JtaW5hdG9yIDogaHR0cHM6Ly9naXRodWIuY29tL1Zpa3Rvcm1pbmF0b3Jcbi8vISBBdXRob3IgOiBNZW5lbGlvbiBFbGVuc8O6bGUgOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuLy8hIGF1dGhvciA6INCa0L7RgNC10L3QsdC10YDQsyDQnNCw0YDQuiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRwYWlyXG5cbmZ1bmN0aW9uIHBsdXJhbCh3b3JkOiBzdHJpbmcsIG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xuICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMSA/IGZvcm1zWzBdIDogKG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl0pO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ9GB0LXQutGD0L3QtNCwX9GB0LXQutGD0L3QtNGLX9GB0LXQutGD0L3QtCcgOiAn0YHQtdC60YPQvdC00YNf0YHQtdC60YPQvdC00Ytf0YHQtdC60YPQvdC0JyxcbiAgICBtbTogd2l0aG91dFN1ZmZpeCA/ICfQvNC40L3Rg9GC0LBf0LzQuNC90YPRgtGLX9C80LjQvdGD0YInIDogJ9C80LjQvdGD0YLRg1/QvNC40L3Rg9GC0Ytf0LzQuNC90YPRgicsXG4gICAgaGg6ICfRh9Cw0YFf0YfQsNGB0LBf0YfQsNGB0L7QsicsXG4gICAgZGQ6ICfQtNC10L3RjF/QtNC90Y9f0LTQvdC10LknLFxuICAgIE1NOiAn0LzQtdGB0Y/Rhl/QvNC10YHRj9GG0LBf0LzQtdGB0Y/RhtC10LInLFxuICAgIHl5OiAn0LPQvtC0X9Cz0L7QtNCwX9C70LXRgidcbiAgfTtcbiAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAn0LzQuNC90YPRgtCwJyA6ICfQvNC40L3Rg9GC0YMnO1xuICB9XG4gIHJldHVybiBudW0gKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW0pO1xufVxuXG5sZXQgbW9udGhzUGFyc2UgPSBbL17Rj9C90LIvaSwgL17RhNC10LIvaSwgL17QvNCw0YAvaSwgL17QsNC/0YAvaSwgL17QvNCwW9C50Y9dL2ksIC9e0LjRjtC9L2ksIC9e0LjRjtC7L2ksIC9e0LDQstCzL2ksIC9e0YHQtdC9L2ksIC9e0L7QutGCL2ksIC9e0L3QvtGPL2ksIC9e0LTQtdC6L2ldO1xuXG4vLyBodHRwOi8vbmV3LmdyYW1vdGEucnUvc3ByYXZrYS9ydWxlcy8xMzktcHJvcCA6IMKnIDEwM1xuLy8g0KHQvtC60YDQsNGJ0LXQvdC40Y8g0LzQtdGB0Y/RhtC10LI6IGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL2J1cm8vc2VhcmNoLWFuc3dlcj9zPTI0MjYzN1xuLy8gQ0xEUiBkYXRhOiAgICAgICAgICBodHRwOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzI4L3N1bW1hcnkvcnUuaHRtbCMxNzUzXG5leHBvcnQgY29uc3QgcnVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdydScsXG4gIG1vbnRoczoge1xuICAgIGZvcm1hdDogJ9GP0L3QstCw0YDRj1/RhNC10LLRgNCw0LvRj1/QvNCw0YDRgtCwX9Cw0L/RgNC10LvRj1/QvNCw0Y9f0LjRjtC90Y9f0LjRjtC70Y9f0LDQstCz0YPRgdGC0LBf0YHQtdC90YLRj9Cx0YDRj1/QvtC60YLRj9Cx0YDRj1/QvdC+0Y/QsdGA0Y9f0LTQtdC60LDQsdGA0Y8nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ9GP0L3QstCw0YDRjF/RhNC10LLRgNCw0LvRjF/QvNCw0YDRgl/QsNC/0YDQtdC70Yxf0LzQsNC5X9C40Y7QvdGMX9C40Y7Qu9GMX9Cw0LLQs9GD0YHRgl/RgdC10L3RgtGP0LHRgNGMX9C+0LrRgtGP0LHRgNGMX9C90L7Rj9Cx0YDRjF/QtNC10LrQsNCx0YDRjCcuc3BsaXQoJ18nKVxuICB9LFxuICBtb250aHNTaG9ydDoge1xuICAgIC8vINC/0L4gQ0xEUiDQuNC80LXQvdC90L4gXCLQuNGO0LsuXCIg0LggXCLQuNGO0L0uXCIsINC90L4g0LrQsNC60L7QuSDRgdC80YvRgdC7INC80LXQvdGP0YLRjCDQsdGD0LrQstGDINC90LAg0YLQvtGH0LrRgyA/XG4gICAgZm9ybWF0OiAn0Y/QvdCyLl/RhNC10LLRgC5f0LzQsNGALl/QsNC/0YAuX9C80LDRj1/QuNGO0L3Rj1/QuNGO0LvRj1/QsNCy0LMuX9GB0LXQvdGCLl/QvtC60YIuX9C90L7Rj9CxLl/QtNC10LouJy5zcGxpdCgnXycpLFxuICAgIHN0YW5kYWxvbmU6ICfRj9C90LIuX9GE0LXQstGALl/QvNCw0YDRgl/QsNC/0YAuX9C80LDQuV/QuNGO0L3RjF/QuNGO0LvRjF/QsNCy0LMuX9GB0LXQvdGCLl/QvtC60YIuX9C90L7Rj9CxLl/QtNC10LouJy5zcGxpdCgnXycpXG4gIH0sXG4gIHdlZWtkYXlzOiB7XG4gICAgc3RhbmRhbG9uZTogJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LVf0L/QvtC90LXQtNC10LvRjNC90LjQul/QstGC0L7RgNC90LjQul/RgdGA0LXQtNCwX9GH0LXRgtCy0LXRgNCzX9C/0Y/RgtC90LjRhtCwX9GB0YPQsdCx0L7RgtCwJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdDogJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LVf0L/QvtC90LXQtNC10LvRjNC90LjQul/QstGC0L7RgNC90LjQul/RgdGA0LXQtNGDX9GH0LXRgtCy0LXRgNCzX9C/0Y/RgtC90LjRhtGDX9GB0YPQsdCx0L7RgtGDJy5zcGxpdCgnXycpLFxuICAgIGlzRm9ybWF0OiAvXFxbID9b0JLQsl0gPyg/OtC/0YDQvtGI0LvRg9GOfNGB0LvQtdC00YPRjtGJ0YPRjnzRjdGC0YMpPyA/XFxdID9kZGRkL1xuICB9LFxuICB3ZWVrZGF5c1Nob3J0OiAn0LLRgV/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfQstGBX9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG5cbiAgLy8g0L/QvtC70L3Ri9C1INC90LDQt9Cy0LDQvdC40Y8g0YEg0L/QsNC00LXQttCw0LzQuCwg0L/QviDRgtGA0Lgg0LHRg9C60LLRiywg0LTQu9GPINC90LXQutC+0YLQvtGA0YvRhSwg0L/QviA0INCx0YPQutCy0YssINGB0L7QutGA0LDRidC10L3QuNGPINGBINGC0L7Rh9C60L7QuSDQuCDQsdC10Lcg0YLQvtGH0LrQuFxuICBtb250aHNSZWdleDogL14o0Y/QvdCy0LDRgFvRjNGPXXzRj9C90LJcXC4/fNGE0LXQstGA0LDQu1vRjNGPXXzRhNC10LLRgD9cXC4/fNC80LDRgNGC0LA/fNC80LDRgFxcLj980LDQv9GA0LXQu1vRjNGPXXzQsNC/0YBcXC4/fNC80LBb0LnRj1180LjRjtC9W9GM0Y9dfNC40Y7QvVxcLj980LjRjtC7W9GM0Y9dfNC40Y7Qu1xcLj980LDQstCz0YPRgdGC0LA/fNCw0LLQs1xcLj980YHQtdC90YLRj9Cx0YBb0YzRj1180YHQtdC90YI/XFwuP3zQvtC60YLRj9Cx0YBb0YzRj1180L7QutGCXFwuP3zQvdC+0Y/QsdGAW9GM0Y9dfNC90L7Rj9CxP1xcLj980LTQtdC60LDQsdGAW9GM0Y9dfNC00LXQulxcLj8pL2ksXG5cbiAgLy8g0LrQvtC/0LjRjyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+XG4gIG1vbnRoc1Nob3J0UmVnZXg6IC9eKNGP0L3QstCw0YBb0YzRj1180Y/QvdCyXFwuP3zRhNC10LLRgNCw0Ltb0YzRj1180YTQtdCy0YA/XFwuP3zQvNCw0YDRgtCwP3zQvNCw0YBcXC4/fNCw0L/RgNC10Ltb0YzRj1180LDQv9GAXFwuP3zQvNCwW9C50Y9dfNC40Y7QvVvRjNGPXXzQuNGO0L1cXC4/fNC40Y7Qu1vRjNGPXXzQuNGO0LtcXC4/fNCw0LLQs9GD0YHRgtCwP3zQsNCy0LNcXC4/fNGB0LXQvdGC0Y/QsdGAW9GM0Y9dfNGB0LXQvdGCP1xcLj980L7QutGC0Y/QsdGAW9GM0Y9dfNC+0LrRglxcLj980L3QvtGP0LHRgFvRjNGPXXzQvdC+0Y/QsT9cXC4/fNC00LXQutCw0LHRgFvRjNGPXXzQtNC10LpcXC4/KS9pLFxuXG4gIC8vINC/0L7Qu9C90YvQtSDQvdCw0LfQstCw0L3QuNGPINGBINC/0LDQtNC10LbQsNC80LhcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKNGP0L3QstCw0YBb0Y/RjF180YTQtdCy0YDQsNC7W9GP0YxdfNC80LDRgNGC0LA/fNCw0L/RgNC10Ltb0Y/RjF180LzQsFvRj9C5XXzQuNGO0L1b0Y/RjF180LjRjtC7W9GP0YxdfNCw0LLQs9GD0YHRgtCwP3zRgdC10L3RgtGP0LHRgFvRj9GMXXzQvtC60YLRj9Cx0YBb0Y/RjF180L3QvtGP0LHRgFvRj9GMXXzQtNC10LrQsNCx0YBb0Y/RjF0pL2ksXG5cbiAgLy8g0JLRi9GA0LDQttC10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDRgdC+0L7RgtCy0LXRgdGC0LLRg9C10YIg0YLQvtC70YzQutC+INGB0L7QutGA0LDRidGR0L3QvdGL0Lwg0YTQvtGA0LzQsNC8XG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKNGP0L3QslxcLnzRhNC10LLRgD9cXC580LzQsNGAW9GCLl180LDQv9GAXFwufNC80LBb0Y/QuV180LjRjtC9W9GM0Y8uXXzQuNGO0Ltb0YzRjy5dfNCw0LLQs1xcLnzRgdC10L3Rgj9cXC580L7QutGCXFwufNC90L7Rj9CxP1xcLnzQtNC10LpcXC4pL2ksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWSDQsy4nLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZINCzLiwgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZINCzLiwgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW9Ch0LXQs9C+0LTQvdGPINCyXSBMVCcsXG4gICAgbmV4dERheTogJ1vQl9Cw0LLRgtGA0LAg0LJdIExUJyxcbiAgICBsYXN0RGF5OiAnW9CS0YfQtdGA0LAg0LJdIExUJyxcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDRgdC70LXQtNGD0Y7RidC10LVdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDRgdC70LXQtNGD0Y7RidC40LldIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDRgdC70LXQtNGD0Y7RidGD0Y5dIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJ1vQktC+XSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnW9CSXSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDQv9GA0L7RiNC70L7QtV0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnW9CSINC/0YDQvtGI0LvRi9C5XSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuICdb0JIg0L/RgNC+0YjQu9GD0Y5dIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gJ1vQktC+XSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnW9CSXSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9GH0LXRgNC10LcgJXMnLFxuICAgIHBhc3Q6ICclcyDQvdCw0LfQsNC0JyxcbiAgICBzOiAn0L3QtdGB0LrQvtC70YzQutC+INGB0LXQutGD0L3QtCcsXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAn0YfQsNGBJyxcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBkOiAn0LTQtdC90YwnLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIE06ICfQvNC10YHRj9GGJyxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICB5OiAn0LPQvtC0JyxcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv0L3QvtGH0Lh80YPRgtGA0LB80LTQvdGPfNCy0LXRh9C10YDQsC9pLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eKNC00L3Rj3zQstC10YfQtdGA0LApJC8udGVzdChpbnB1dCk7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgcmV0dXJuICfQvdC+0YfQuCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn0YPRgtGA0LAnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICByZXR1cm4gJ9C00L3Rjyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn0LLQtdGH0LXRgNCwJztcbiAgICB9XG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0o0Ll80LPQvnzRjykvLFxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLdC5JztcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICByZXR1cm4gbnVtICsgJy3Qs9C+JztcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLdGPJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=