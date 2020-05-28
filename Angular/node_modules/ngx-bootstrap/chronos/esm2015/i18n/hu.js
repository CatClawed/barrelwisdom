/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
/** @type {?} */
let weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
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
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
/** @type {?} */
export const huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
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
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQU1oRCxXQUFXLEdBQUcsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFDNUYsU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQ3BGLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxHQUFHO1lBQ04sT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsS0FBSyxHQUFHO1lBQ04sT0FBTyxLQUFLLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixPQUFPLEtBQUssR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFD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SUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsT0FBTyxFQUFHLG1CQUFtQjs7Ozs7UUFDN0IsUUFBUSxDQUFFLElBQVU7WUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLElBQUk7UUFDWCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7S0FDZjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFHLEtBQUs7SUFDZixJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQyxDQUFFLGdFQUFnRTtLQUMxRTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIdW5nYXJpYW4gW2h1XVxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxuXG5sZXQgd2Vla0VuZGluZ3MgPSAndmFzw6FybmFwIGjDqXRmxZFuIGtlZGRlbiBzemVyZMOhbiBjc8O8dMO2cnTDtmvDtm4gcMOpbnRla2VuIHN6b21iYXRvbicuc3BsaXQoJyAnKTtcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnbsOpaMOhbnkgbcOhc29kcGVyYycgOiAnbsOpaMOhbnkgbcOhc29kcGVyY2UnO1xuICAgIGNhc2UgJ3NzJzpcbiAgICAgIHJldHVybiBudW0gKyAoKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJyBtw6Fzb2RwZXJjJyA6ICcgbcOhc29kcGVyY2UnKTtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOzcmEnIDogJyDDs3LDoWphJyk7XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDs25hcCcgOiAnIGjDs25hcGphJyk7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow7NuYXAnIDogJyBow7NuYXBqYScpO1xuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOpdicgOiAnIMOpdmUnKTtcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOpdicgOiAnIMOpdmUnKTtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5mdW5jdGlvbiB3ZWVrKGRhdGU6IERhdGUsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiAoaXNGdXR1cmUgPyAnJyA6ICdbbcO6bHRdICcpICsgJ1snICsgd2Vla0VuZGluZ3NbZ2V0RGF5T2ZXZWVrKGRhdGUpXSArICddIExUWy1rb3JdJztcbn1cblxuZXhwb3J0IGNvbnN0IGh1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaHUnLFxuICBtb250aHMgOiAnamFudcOhcl9mZWJydcOhcl9tw6FyY2l1c1/DoXByaWxpc19tw6FqdXNfasO6bml1c19qw7psaXVzX2F1Z3VzenR1c19zemVwdGVtYmVyX29rdMOzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdqYW5fZmViX23DoXJjX8OhcHJfbcOhal9qw7puX2rDumxfYXVnX3N6ZXB0X29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICd2YXPDoXJuYXBfaMOpdGbFkV9rZWRkX3N6ZXJkYV9jc8O8dMO2cnTDtmtfcMOpbnRla19zem9tYmF0Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ3Zhc19ow6l0X2tlZGRfc3plX2Nzw7x0X3DDqW5fc3pvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICd2X2hfa19zemVfY3NfcF9zem8nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0g6bW0nLFxuICAgIExUUyA6ICdIOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkuTU0uREQuJyxcbiAgICBMTCA6ICdZWVlZLiBNTU1NIEQuJyxcbiAgICBMTEwgOiAnWVlZWS4gTU1NTSBELiBIOm1tJyxcbiAgICBMTExMIDogJ1lZWVkuIE1NTU0gRC4sIGRkZGQgSDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL2RlfGR1L2ksXG4gIGlzUE0gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAndSc7XG4gIH0sXG4gIG1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkdScgOiAnRFUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbbWFdIExUWy1rb3JdJyxcbiAgICBuZXh0RGF5IDogJ1tob2xuYXBdIExUWy1rb3JdJyxcbiAgICBuZXh0V2VlayAoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBsYXN0RGF5IDogJ1t0ZWduYXBdIExUWy1rb3JdJyxcbiAgICBsYXN0V2VlayAoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgZmFsc2UpO1xuICAgIH0sXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclcyBtw7psdmEnLFxuICAgIHBhc3QgOiAnJXMnLFxuICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgc3MgOiB0cmFuc2xhdGUsXG4gICAgbSA6IHRyYW5zbGF0ZSxcbiAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICBoIDogdHJhbnNsYXRlLFxuICAgIGhoIDogdHJhbnNsYXRlLFxuICAgIGQgOiB0cmFuc2xhdGUsXG4gICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgTSA6IHRyYW5zbGF0ZSxcbiAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICB5IDogdHJhbnNsYXRlLFxuICAgIHl5IDogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=