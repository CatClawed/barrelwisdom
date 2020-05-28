/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
/** @type {?} */
var processRelativeTime = (/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function (num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        ss: [num + 'sekundi', num + 'sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: [num + ' minuti', num + ' minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: [num + ' tunni', num + ' tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: [num + ' kuu', num + ' kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: [num + ' aasta', num + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
});
var ɵ0 = processRelativeTime;
/** @type {?} */
export var etLocale = {
    abbr: 'et',
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: '%d päeva',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdNLG1CQUFtQjs7Ozs7OztBQUFHLFVBQVUsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCOztRQUNqRyxNQUFNLEdBQUc7UUFDWCxDQUFDLEVBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztRQUMvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDMUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDN0IsQ0FBQyxFQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFDdEMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3ZDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUN4QztJQUNELElBQUksYUFBYSxFQUFFO1FBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQTs7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSw0RkFBNEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9HLFdBQVcsRUFBRSw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BGLFFBQVEsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JGLGFBQWEsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxXQUFXLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFJLE1BQU07UUFDWixHQUFHLEVBQUcsU0FBUztRQUNmLENBQUMsRUFBSyxZQUFZO1FBQ2xCLEVBQUUsRUFBSSxjQUFjO1FBQ3BCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFFLHlCQUF5QjtLQUNoQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRyxZQUFZO1FBQ3RCLE9BQU8sRUFBRyxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFdBQVc7UUFDcEIsSUFBSSxFQUFLLFdBQVc7UUFDcEIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sbUJBQW1CO1FBQzVCLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLG1CQUFtQjtRQUM1QixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxtQkFBbUI7UUFDNUIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sVUFBVTtRQUNuQixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxtQkFBbUI7UUFDNUIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sbUJBQW1CO0tBQzdCO0lBQ0Qsc0JBQXNCLEVBQUcsVUFBVTtJQUNuQyxPQUFPLEVBQUcsS0FBSztJQUNmLElBQUksRUFBRztRQUNILEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsZ0VBQWdFO0tBQzVFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEVzdG9uaWFuIFtldF1cbi8vISBhdXRob3IgOiBDaHJpcyBHZWRyaW0gOiBodHRwczovL2dpdGh1Yi5jb20vYTkwbWFjaGFkb1xuXG5jb25zdCBwcm9jZXNzUmVsYXRpdmVUaW1lID0gZnVuY3Rpb24gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgY29uc3QgZm9ybWF0ID0ge1xuICAgICAgcyA6IFsnbcO1bmUgc2VrdW5kaScsICdtw7VuaSBzZWt1bmQnLCAncGFhciBzZWt1bmRpdCddLFxuICAgICAgc3M6IFtudW0gKyAnc2VrdW5kaScsIG51bSArICdzZWt1bmRpdCddLFxuICAgICAgbSA6IFsnw7xoZSBtaW51dGknLCAnw7xrcyBtaW51dCddLFxuICAgICAgbW06IFtudW0gKyAnIG1pbnV0aScsIG51bSArICcgbWludXRpdCddLFxuICAgICAgaCA6IFsnw7xoZSB0dW5uaScsICd0dW5kIGFlZ2EnLCAnw7xrcyB0dW5kJ10sXG4gICAgICBoaDogW251bSArICcgdHVubmknLCBudW0gKyAnIHR1bmRpJ10sXG4gICAgICBkIDogWyfDvGhlIHDDpGV2YScsICfDvGtzIHDDpGV2J10sXG4gICAgICBNIDogWydrdXUgYWphJywgJ2t1dSBhZWdhJywgJ8O8a3Mga3V1J10sXG4gICAgICBNTTogW251bSArICcga3V1JywgbnVtICsgJyBrdXVkJ10sXG4gICAgICB5IDogWyfDvGhlIGFhc3RhJywgJ2Fhc3RhJywgJ8O8a3MgYWFzdGEnXSxcbiAgICAgIHl5OiBbbnVtICsgJyBhYXN0YScsIG51bSArICcgYWFzdGF0J11cbiAgfTtcbiAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgIHJldHVybiBmb3JtYXRba2V5XVsyXSA/IGZvcm1hdFtrZXldWzJdIDogZm9ybWF0W2tleV1bMV07XG4gIH1cbiAgcmV0dXJuIGlzRnV0dXJlID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcbn07XG5cbmV4cG9ydCBjb25zdCBldExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2V0JyxcbiAgbW9udGhzOiAnamFhbnVhcl92ZWVicnVhcl9tw6RydHNfYXByaWxsX21haV9qdXVuaV9qdXVsaV9hdWd1c3Rfc2VwdGVtYmVyX29rdG9vYmVyX25vdmVtYmVyX2RldHNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYWFuX3ZlZWJyX23DpHJ0c19hcHJfbWFpX2p1dW5pX2p1dWxpX2F1Z19zZXB0X29rdF9ub3ZfZGV0cycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdww7xoYXDDpGV2X2VzbWFzcMOkZXZfdGVpc2lww6Rldl9rb2xtYXDDpGV2X25lbGphcMOkZXZfcmVlZGVfbGF1cMOkZXYnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdQX0VfVF9LX05fUl9MJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ1BfRV9UX0tfTl9SX0wnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICAgJ0g6bW0nLFxuICAgIExUUzogICdIOm1tOnNzJyxcbiAgICBMOiAgICAnREQuTU0uWVlZWScsXG4gICAgTEw6ICAgJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAgJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogICdbVMOkbmEsXSBMVCcsXG4gICAgbmV4dERheTogICdbSG9tbWUsXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdbSsOkcmdtaW5lXSBkZGRkIExUJyxcbiAgICBsYXN0RGF5OiAgJ1tFaWxlLF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW0VlbG1pbmVdIGRkZGQgTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclcyBww6RyYXN0JyxcbiAgICBwYXN0ICAgOiAnJXMgdGFnYXNpJyxcbiAgICBzICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHNzICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbSAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtbSAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGggICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaGggICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkICAgICA6ICclZCBww6RldmEnLFxuICAgIE0gICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU0gICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5ICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHl5ICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfS4vLFxuICBvcmRpbmFsIDogJyVkLicsXG4gIHdlZWsgOiB7XG4gICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==