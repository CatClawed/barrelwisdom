/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai-Buddhist Era [th-be]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */
export const thBeLocale = {
    abbr: 'th-be',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
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
    },
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    getFullYear(date, isUTC = false) {
        return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBTyxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1Qjs7Ozs7SUFDdEMsSUFBSSxDQUFDLEtBQUs7UUFDUixPQUFPLEtBQUssS0FBSyxZQUFZLENBQUM7SUFDaEMsQ0FBQzs7Ozs7OztJQUNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTTtZQUNMLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsQ0FBQyxFQUFFLGNBQWM7UUFDakIsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRSxFQUFFLE9BQU87S0FDWjs7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVUsRUFBRSxLQUFLLEdBQUcsS0FBSztRQUNuQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbi8vIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gbG9jYWxlIDogVGhhaS1CdWRkaGlzdCBFcmEgW3RoLWJlXVxuLy8gYXV0aG9yIDogV2F0Y2hhcmFwb2wgU2FuaXR3b25nIDogaHR0cHM6Ly9naXRodWIuY29tL3R1bWl0XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IHRoQmVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICd0aC1iZScsXG4gIG1vbnRoczogJ+C4oeC4geC4o+C4suC4hOC4oV/guIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxf4Lih4Li14LiZ4Liy4LiE4LihX+C5gOC4oeC4qeC4suC4ouC4mV/guJ7guKTguKnguKDguLLguITguKFf4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZX+C4geC4o+C4geC4juC4suC4hOC4oV/guKrguLTguIfguKvguLLguITguKFf4LiB4Lix4LiZ4Lii4Liy4Lii4LiZX+C4leC4uOC4peC4suC4hOC4oV/guJ7guKTguKjguIjguLTguIHguLLguKLguJlf4LiY4Lix4LiZ4Lin4Liy4LiE4LihJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ+C4oS7guIQuX+C4gS7guJ4uX+C4oeC4tS7guIQuX+C5gOC4oS7guKIuX+C4ni7guIQuX+C4oeC4tC7guKIuX+C4gS7guIQuX+C4qi7guIQuX+C4gS7guKIuX+C4lS7guIQuX+C4ni7guKIuX+C4mC7guIQuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ+C4reC4suC4l+C4tOC4leC4ouC5jF/guIjguLHguJnguJfguKPguYxf4Lit4Lix4LiH4LiE4Liy4LijX+C4nuC4uOC4mF/guJ7guKTguKvguLHguKrguJrguJTguLVf4Lio4Li44LiB4Lij4LmMX+C5gOC4quC4suC4o+C5jCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ+C4reC4si5f4LiILl/guK0uX+C4ni5f4Lie4LikLl/guKguX+C4qi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn4Lit4LiyLl/guIguX+C4rS5f4LieLl/guJ7guKQuX+C4qC5f4LiqLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJyxcbiAgICBMTExMOiAn4Lin4Lix4LiZZGRkZOC4l+C4teC5iCBEIE1NTU0gWVlZWSDguYDguKfguKXguLIgSDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4h3zguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcvLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAn4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfguIHguYjguK3guJnguYDguJfguLXguYjguKLguIcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ+C4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hyc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdb4Lin4Lix4LiZ4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIG5leHREYXk6ICdb4Lie4Lij4Li44LmI4LiH4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZFvguKvguJnguYnguLIg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbGFzdERheTogJ1vguYDguKHguLfguYjguK3guKfguLLguJnguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdb4Lin4Lix4LiZXWRkZGRb4LiX4Li14LmI4LmB4Lil4LmJ4LinIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn4Lit4Li14LiBICVzJyxcbiAgICBwYXN0OiAnJXPguJfguLXguYjguYHguKXguYnguKcnLFxuICAgIHM6ICfguYTguKHguYjguIHguLXguYjguKfguLTguJnguLLguJfguLUnLFxuICAgIHNzOiAnJWQg4Lin4Li04LiZ4Liy4LiX4Li1JyxcbiAgICBtOiAnMSDguJnguLLguJfguLUnLFxuICAgIG1tOiAnJWQg4LiZ4Liy4LiX4Li1JyxcbiAgICBoOiAnMSDguIrguLHguYjguKfguYLguKHguIcnLFxuICAgIGhoOiAnJWQg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcbiAgICBkOiAnMSDguKfguLHguJknLFxuICAgIGRkOiAnJWQg4Lin4Lix4LiZJyxcbiAgICBNOiAnMSDguYDguJTguLfguK3guJknLFxuICAgIE1NOiAnJWQg4LmA4LiU4Li34Lit4LiZJyxcbiAgICB5OiAnMSDguJvguLUnLFxuICAgIHl5OiAnJWQg4Lib4Li1J1xuICB9LFxuXG4gIGdldEZ1bGxZZWFyKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICAgIHJldHVybiA1NDMgKyAoaXNVVEMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICB9XG59O1xuIl19