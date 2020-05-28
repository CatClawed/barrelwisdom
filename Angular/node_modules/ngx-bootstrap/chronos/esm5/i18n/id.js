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
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
/** @type {?} */
export var idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyx3RkFBd0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVHLFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRyw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xFLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGFBQWE7UUFDbEIsR0FBRyxFQUFHLDJCQUEyQjtRQUNqQyxJQUFJLEVBQUcsaUNBQWlDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxZQUFZOzs7OztjQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDdEQsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUNELFFBQVE7Ozs7OztjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTztRQUM5QixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDZCxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxxQkFBcUI7UUFDL0IsT0FBTyxFQUFHLGtCQUFrQjtRQUM1QixRQUFRLEVBQUcsaUJBQWlCO1FBQzVCLE9BQU8sRUFBRyxvQkFBb0I7UUFDOUIsUUFBUSxFQUFHLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLGNBQWM7UUFDckIsQ0FBQyxFQUFHLGdCQUFnQjtRQUNwQixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsT0FBTztRQUNYLEVBQUUsRUFBRyxRQUFRO1FBQ2IsQ0FBQyxFQUFHLFFBQVE7UUFDWixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO0tBQ2hCO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUMsQ0FBRSxnRUFBZ0U7S0FDMUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBJbmRvbmVzaWEgW2lkXVxuLy8hIGF1dGhvciA6IFJvbXkgS3VzdW1hIDogaHR0cHM6Ly9naXRodWIuY29tL3JrdXN1bWFcbi8vISByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvaWQuanNcblxuZXhwb3J0IGNvbnN0IGlkTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaWQnLFxuICBtb250aHMgOiAnSmFudWFyaV9GZWJydWFyaV9NYXJldF9BcHJpbF9NZWlfSnVuaV9KdWxpX0FndXN0dXNfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVzZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NZWlfSnVuX0p1bF9BZ3NfU2VwX09rdF9Ob3ZfRGVzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdNaW5nZ3VfU2VuaW5fU2VsYXNhX1JhYnVfS2FtaXNfSnVtYXRfU2FidHUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnTWluX1Nlbl9TZWxfUmFiX0thbV9KdW1fU2FiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TYicuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEgubW0nLFxuICAgIExUUyA6ICdISC5tbS5zcycsXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL3BhZ2l8c2lhbmd8c29yZXxtYWxhbS8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ3BhZ2knKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc2lhbmcnKSB7XG4gICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NvcmUnIHx8IG1lcmlkaWVtID09PSAnbWFsYW0nKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMSkge1xuICAgICAgcmV0dXJuICdwYWdpJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcbiAgICAgIHJldHVybiAnc2lhbmcnO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxOSkge1xuICAgICAgcmV0dXJuICdzb3JlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdtYWxhbSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1tIYXJpIGluaSBwdWt1bF0gTFQnLFxuICAgIG5leHREYXkgOiAnW0Jlc29rIHB1a3VsXSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tLZW1hcmluIHB1a3VsXSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnZGRkZCBbbGFsdSBwdWt1bF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnZGFsYW0gJXMnLFxuICAgIHBhc3QgOiAnJXMgeWFuZyBsYWx1JyxcbiAgICBzIDogJ2JlYmVyYXBhIGRldGlrJyxcbiAgICBzcyA6ICclZCBkZXRpaycsXG4gICAgbSA6ICdzZW1lbml0JyxcbiAgICBtbSA6ICclZCBtZW5pdCcsXG4gICAgaCA6ICdzZWphbScsXG4gICAgaGggOiAnJWQgamFtJyxcbiAgICBkIDogJ3NlaGFyaScsXG4gICAgZGQgOiAnJWQgaGFyaScsXG4gICAgTSA6ICdzZWJ1bGFuJyxcbiAgICBNTSA6ICclZCBidWxhbicsXG4gICAgeSA6ICdzZXRhaHVuJyxcbiAgICB5eSA6ICclZCB0YWh1bidcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiJdfQ==