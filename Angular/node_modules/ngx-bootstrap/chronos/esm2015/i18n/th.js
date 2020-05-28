/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai [th]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */
export const thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === 'หลังเที่ยง';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUNsRCxXQUFXLEVBQUUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsSUFBSSxFQUFFLGtDQUFrQztLQUN6QztJQUNELGFBQWEsRUFBRSx1QkFBdUI7Ozs7O0lBQ3RDLElBQUksQ0FBQyxLQUFLO1FBQ1IsT0FBTyxLQUFLLEtBQUssWUFBWSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLFlBQVksQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBsb2NhbGUgOiBUaGFpIFt0aF1cbi8vIGF1dGhvciA6IFdhdGNoYXJhcG9sIFNhbml0d29uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS90dW1pdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCB0aExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RoJyxcbiAgbW9udGhzOiAn4Lih4LiB4Lij4Liy4LiE4LihX+C4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jF/guKHguLXguJnguLLguITguKFf4LmA4Lih4Lip4Liy4Lii4LiZX+C4nuC4pOC4qeC4oOC4suC4hOC4oV/guKHguLTguJbguLjguJnguLLguKLguJlf4LiB4Lij4LiB4LiO4Liy4LiE4LihX+C4quC4tOC4h+C4q+C4suC4hOC4oV/guIHguLHguJnguKLguLLguKLguJlf4LiV4Li44Lil4Liy4LiE4LihX+C4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mV/guJjguLHguJnguKfguLLguITguKEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAn4LihLuC4hC5f4LiBLuC4ni5f4Lih4Li1LuC4hC5f4LmA4LihLuC4oi5f4LieLuC4hC5f4Lih4Li0LuC4oi5f4LiBLuC4hC5f4LiqLuC4hC5f4LiBLuC4oi5f4LiVLuC4hC5f4LieLuC4oi5f4LiYLuC4hC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAn4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4quC4muC4lOC4tV/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn4Lit4LiyLl/guIguX+C4rS5f4LieLl/guJ7guKQuX+C4qC5f4LiqLicuc3BsaXQoJ18nKSwgLy8geWVzLCB0aHJlZSBjaGFyYWN0ZXJzIGRpZmZlcmVuY2VcbiAgd2Vla2RheXNNaW46ICfguK3guLIuX+C4iC5f4LitLl/guJ4uX+C4nuC4pC5f4LioLl/guKouJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nLFxuICAgIExMTEw6ICfguKfguLHguJlkZGRk4LiX4Li14LmIIEQgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHfOC4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hy8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4hyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vguKfguLHguJnguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbmV4dERheTogJ1vguJ7guKPguLjguYjguIfguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkW+C4q+C4meC5ieC4siDguYDguKfguKXguLJdIExUJyxcbiAgICBsYXN0RGF5OiAnW+C5gOC4oeC4t+C5iOC4reC4p+C4suC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBsYXN0V2VlazogJ1vguKfguLHguJldZGRkZFvguJfguLXguYjguYHguKXguYnguKcg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfguK3guLXguIEgJXMnLFxuICAgIHBhc3Q6ICclc+C4l+C4teC5iOC5geC4peC5ieC4pycsXG4gICAgczogJ+C5hOC4oeC5iOC4geC4teC5iOC4p+C4tOC4meC4suC4l+C4tScsXG4gICAgc3M6ICclZCDguKfguLTguJnguLLguJfguLUnLFxuICAgIG06ICcxIOC4meC4suC4l+C4tScsXG4gICAgbW06ICclZCDguJnguLLguJfguLUnLFxuICAgIGg6ICcxIOC4iuC4seC5iOC4p+C5guC4oeC4hycsXG4gICAgaGg6ICclZCDguIrguLHguYjguKfguYLguKHguIcnLFxuICAgIGQ6ICcxIOC4p+C4seC4mScsXG4gICAgZGQ6ICclZCDguKfguLHguJknLFxuICAgIE06ICcxIOC5gOC4lOC4t+C4reC4mScsXG4gICAgTU06ICclZCDguYDguJTguLfguK3guJknLFxuICAgIHk6ICcxIOC4m+C4tScsXG4gICAgeXk6ICclZCDguJvguLUnXG4gIH1cbn07XG4iXX0=