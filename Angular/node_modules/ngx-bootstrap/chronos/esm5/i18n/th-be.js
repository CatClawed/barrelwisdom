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
export var thBeLocale = {
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
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
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
    getFullYear: /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE9BQU8sS0FBSyxLQUFLLFlBQVksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLFlBQVksQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO0tBQ1o7SUFFRCxXQUFXOzs7OztJQUFYLFVBQVksSUFBVSxFQUFFLEtBQWE7UUFBYixzQkFBQSxFQUFBLGFBQWE7UUFDbkMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG4vLyBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIGxvY2FsZSA6IFRoYWktQnVkZGhpc3QgRXJhIFt0aC1iZV1cbi8vIGF1dGhvciA6IFdhdGNoYXJhcG9sIFNhbml0d29uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS90dW1pdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCB0aEJlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAndGgtYmUnLFxuICBtb250aHM6ICfguKHguIHguKPguLLguITguKFf4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMX+C4oeC4teC4meC4suC4hOC4oV/guYDguKHguKnguLLguKLguJlf4Lie4Lik4Lip4Lig4Liy4LiE4LihX+C4oeC4tOC4luC4uOC4meC4suC4ouC4mV/guIHguKPguIHguI7guLLguITguKFf4Liq4Li04LiH4Lir4Liy4LiE4LihX+C4geC4seC4meC4ouC4suC4ouC4mV/guJXguLjguKXguLLguITguKFf4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZX+C4mOC4seC4meC4p+C4suC4hOC4oScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICfguKEu4LiELl/guIEu4LieLl/guKHguLUu4LiELl/guYDguKEu4LiiLl/guJ4u4LiELl/guKHguLQu4LiiLl/guIEu4LiELl/guKou4LiELl/guIEu4LiiLl/guJUu4LiELl/guJ4u4LiiLl/guJgu4LiELicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfguK3guLLguJfguLTguJXguKLguYxf4LiI4Lix4LiZ4LiX4Lij4LmMX+C4reC4seC4h+C4hOC4suC4o1/guJ7guLjguJhf4Lie4Lik4Lir4Lix4Liq4Lia4LiU4Li1X+C4qOC4uOC4geC4o+C5jF/guYDguKrguLLguKPguYwnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfguK3guLIuX+C4iC5f4LitLl/guJ4uX+C4nuC4pC5f4LioLl/guKouJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ+C4reC4si5f4LiILl/guK0uX+C4ni5f4Lie4LikLl/guKguX+C4qi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDguYDguKfguKXguLIgSDptbScsXG4gICAgTExMTDogJ+C4p+C4seC4mWRkZGTguJfguLXguYggRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/guIHguYjguK3guJnguYDguJfguLXguYjguKLguId84Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHLyxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ+C4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hyc7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAn4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW+C4p+C4seC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBuZXh0RGF5OiAnW+C4nuC4o+C4uOC5iOC4h+C4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGRb4Lir4LiZ4LmJ4LiyIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIGxhc3REYXk6ICdb4LmA4Lih4Li34LmI4Lit4Lin4Liy4LiZ4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW+C4p+C4seC4mV1kZGRkW+C4l+C4teC5iOC5geC4peC5ieC4pyDguYDguKfguKXguLJdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ+C4reC4teC4gSAlcycsXG4gICAgcGFzdDogJyVz4LiX4Li14LmI4LmB4Lil4LmJ4LinJyxcbiAgICBzOiAn4LmE4Lih4LmI4LiB4Li14LmI4Lin4Li04LiZ4Liy4LiX4Li1JyxcbiAgICBzczogJyVkIOC4p+C4tOC4meC4suC4l+C4tScsXG4gICAgbTogJzEg4LiZ4Liy4LiX4Li1JyxcbiAgICBtbTogJyVkIOC4meC4suC4l+C4tScsXG4gICAgaDogJzEg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcbiAgICBoaDogJyVkIOC4iuC4seC5iOC4p+C5guC4oeC4hycsXG4gICAgZDogJzEg4Lin4Lix4LiZJyxcbiAgICBkZDogJyVkIOC4p+C4seC4mScsXG4gICAgTTogJzEg4LmA4LiU4Li34Lit4LiZJyxcbiAgICBNTTogJyVkIOC5gOC4lOC4t+C4reC4mScsXG4gICAgeTogJzEg4Lib4Li1JyxcbiAgICB5eTogJyVkIOC4m+C4tSdcbiAgfSxcblxuICBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gNTQzICsgKGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgfVxufTtcbiJdfQ==