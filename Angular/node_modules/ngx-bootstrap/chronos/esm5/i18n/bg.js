/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
var ɵ0 = /**
 * @param {?} d
 * @return {?}
 */
function (d) {
    switch (d) {
        case 0:
        case 3:
        case 6:
            return '[В изминалата] dddd [в] LT';
        case 1:
        case 2:
        case 4:
        case 5:
            return '[В изминалия] dddd [в] LT';
    }
};
/** @type {?} */
export var bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: (ɵ0),
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: (/**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var number = Number(_num);
        /** @type {?} */
        var lastDigit = number % 10;
        /** @type {?} */
        var last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    }),
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ2MsVUFBVSxDQUFNO0lBRXhCLFFBQVEsQ0FBQyxFQUFFO1FBQ1QsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQztZQUNKLE9BQU8sNEJBQTRCLENBQUM7UUFDdEMsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxDQUFDO1lBQ0osT0FBTywyQkFBMkIsQ0FBQztLQUN0QztBQUNILENBQUM7O0FBakNMLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0RyxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsd0RBQXdELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsTUFBTTtRQUNWLEdBQUcsRUFBRSxTQUFTO1FBQ2QsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsa0JBQWtCO1FBQ3ZCLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsYUFBYTtRQUN0QixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLE1BYVA7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGlCQUFpQjtRQUNwQixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsV0FBVztLQUNoQjtJQUNELHNCQUFzQixFQUFFLDZCQUE2QjtJQUNyRCxPQUFPOzs7O0lBQUUsVUFBVSxJQUFZOztZQUV2QixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7WUFFdkIsU0FBUyxHQUFHLE1BQU0sR0FBRyxFQUFFOztZQUN6QixXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUc7UUFFNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTSxJQUFJLFdBQVcsR0FBRyxFQUFFLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUMvQyxPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNLElBQUksU0FBUyxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNO1lBQ0wsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQyxDQUFBO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgS2hyb25vcyB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQnVsZ2FyaWFuIFtiZ11cbi8vISBhdXRob3IgOiBJc2tyZW4gSXZvdiBDaGVybmV2IDogaHR0cHM6Ly9naXRodWIuY29tL2ljaGVybmV2XG4vLyEgYXV0aG9yIDogS3VuYWwgTWFyd2FoYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ3YWhhaGFcbi8vISBhdXRob3IgOiBNYXR0IEdyYW5kZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Z3JhbmRlXG4vLyEgYXV0aG9yIDogSXNhYWMgQ2FtYnJvbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2FtYnJvblxuLy8hIGF1dGhvciA6IFZlbmVsaW4gTWFuY2hldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS92bWFuY2hldlxuXG5leHBvcnQgY29uc3QgYmdMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdiZycsXG4gIG1vbnRoczogJ9GP0L3Rg9Cw0YDQuF/RhNC10LLRgNGD0LDRgNC4X9C80LDRgNGCX9Cw0L/RgNC40Ltf0LzQsNC5X9GO0L3QuF/RjtC70Lhf0LDQstCz0YPRgdGCX9GB0LXQv9GC0LXQvNCy0YDQuF/QvtC60YLQvtC80LLRgNC4X9C90L7QtdC80LLRgNC4X9C00LXQutC10LzQstGA0LgnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAn0Y/QvdGAX9GE0LXQsl/QvNCw0YBf0LDQv9GAX9C80LDQuV/RjtC90Lhf0Y7Qu9C4X9Cw0LLQs1/RgdC10L9f0L7QutGCX9C90L7QtV/QtNC10LonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAn0L3QtdC00LXQu9GPX9C/0L7QvdC10LTQtdC70L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDRj9C00LBf0YfQtdGC0LLRitGA0YLRitC6X9C/0LXRgtGK0Lpf0YHRitCx0L7RgtCwJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn0L3QtdC0X9C/0L7QvV/QstGC0L5f0YHRgNGPX9GH0LXRgl/Qv9C10YJf0YHRitCxJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ9C90LRf0L/QvV/QstGCX9GB0YBf0YfRgl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnRC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW9CU0L3QtdGBINCyXSBMVCcsXG4gICAgbmV4dERheTogJ1vQo9GC0YDQtSDQsl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBb0LJdIExUJyxcbiAgICBsYXN0RGF5OiAnW9CS0YfQtdGA0LAg0LJdIExUJyxcbiAgICBsYXN0V2VlazogZnVuY3Rpb24gKGQ6IGFueSkge1xuXG4gICAgICBzd2l0Y2ggKGQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1vQkiDQuNC30LzQuNC90LDQu9Cw0YLQsF0gZGRkZCBb0LJdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW9CSINC40LfQvNC40L3QsNC70LjRj10gZGRkZCBb0LJdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn0YHQu9C10LQgJXMnLFxuICAgIHBhc3Q6ICfQv9GA0LXQtNC4ICVzJyxcbiAgICBzOiAn0L3Rj9C60L7Qu9C60L4g0YHQtdC60YPQvdC00LgnLFxuICAgIHNzOiAnJWQg0YHQtdC60YPQvdC00LgnLFxuICAgIG06ICfQvNC40L3Rg9GC0LAnLFxuICAgIG1tOiAnJWQg0LzQuNC90YPRgtC4JyxcbiAgICBoOiAn0YfQsNGBJyxcbiAgICBoaDogJyVkINGH0LDRgdCwJyxcbiAgICBkOiAn0LTQtdC9JyxcbiAgICBkZDogJyVkINC00L3QuCcsXG4gICAgTTogJ9C80LXRgdC10YYnLFxuICAgIE1NOiAnJWQg0LzQtdGB0LXRhtCwJyxcbiAgICB5OiAn0LPQvtC00LjQvdCwJyxcbiAgICB5eTogJyVkINCz0L7QtNC40L3QuCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQtdCyfNC10L180YLQuHzQstC4fNGA0Lh80LzQuCkvLFxuICBvcmRpbmFsOiBmdW5jdGlvbiAoX251bTogbnVtYmVyKTogc3RyaW5nIHtcblxuICAgIGNvbnN0IG51bWJlciA9IE51bWJlcihfbnVtKTtcblxuICAgIGxldCBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcbiAgICAgIGxhc3QyRGlnaXRzID0gbnVtYmVyICUgMTAwO1xuXG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0LXQsic7XG4gICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0LXQvSc7XG4gICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA+IDEwICYmIGxhc3QyRGlnaXRzIDwgMjApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdGC0LgnO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAxKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3QstC4JztcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0YDQuCc7XG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDcgfHwgbGFzdERpZ2l0ID09PSA4KSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3QvNC4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bWJlciArICct0YLQuCc7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==