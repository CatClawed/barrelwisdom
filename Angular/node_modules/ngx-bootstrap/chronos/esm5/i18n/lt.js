/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
/** @type {?} */
var units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return ((/** @type {?} */ (units)))[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
/** @type {?} */
export var ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate,
        m: translateSingular,
        mm: translate,
        h: translateSingular,
        hh: translate,
        d: translateSingular,
        dd: translate,
        M: translateSingular,
        MM: translate,
        y: translateSingular,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdNLEtBQUssR0FBRztJQUNaLEVBQUUsRUFBRyw0QkFBNEI7SUFDakMsQ0FBQyxFQUFHLHVCQUF1QjtJQUMzQixFQUFFLEVBQUUseUJBQXlCO0lBQzdCLENBQUMsRUFBRywwQkFBMEI7SUFDOUIsRUFBRSxFQUFFLDJCQUEyQjtJQUMvQixDQUFDLEVBQUcsb0JBQW9CO0lBQ3hCLEVBQUUsRUFBRSxxQkFBcUI7SUFDekIsQ0FBQyxFQUFHLHNCQUFzQjtJQUMxQixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxrQkFBa0I7SUFDdEIsRUFBRSxFQUFFLGtCQUFrQjtDQUN2Qjs7Ozs7Ozs7QUFDRCxTQUFTLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixJQUFJLGFBQWEsRUFBRTtRQUNmLE9BQU8saUJBQWlCLENBQUM7S0FDNUI7U0FBTTtRQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7S0FDM0Q7QUFDSCxDQUFDOzs7Ozs7OztBQUNELFNBQVMsaUJBQWlCLENBQUMsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQzVGLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7O0FBQ0QsU0FBUyxPQUFP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QVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztLQUNqQjtJQUNELHNCQUFzQixFQUFFLGFBQWE7SUFDckMsT0FBTzs7OztjQUFDLEdBQUc7UUFDUCxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksRUFBRztRQUNILEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDLENBQUUsZ0VBQWdFO0tBQzVFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IExpdGh1YW5pYW4gW2x0XVxuLy8hIGF1dGhvciA6IFN0YW5pc2xhdmFzIEd1ayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9peG9zdGVyXG5cbmNvbnN0IHVuaXRzID0ge1xuICBzcyA6ICdzZWt1bmTEl19zZWt1bmTFvmnFs19zZWt1bmRlcycsXG4gIG0gOiAnbWludXTEl19taW51dMSXc19taW51dMSZJyxcbiAgbW06ICdtaW51dMSXc19taW51xI1pxbNfbWludXRlcycsXG4gIGggOiAndmFsYW5kYV92YWxhbmRvc192YWxhbmTEhScsXG4gIGhoOiAndmFsYW5kb3NfdmFsYW5kxbNfdmFsYW5kYXMnLFxuICBkIDogJ2RpZW5hX2RpZW5vc19kaWVuxIUnLFxuICBkZDogJ2RpZW5vc19kaWVuxbNfZGllbmFzJyxcbiAgTSA6ICdtxJdudW9fbcSXbmVzaW9fbcSXbmVzxK8nLFxuICBNTTogJ23El25lc2lhaV9txJduZXNpxbNfbcSXbmVzaXVzJyxcbiAgeSA6ICdtZXRhaV9tZXTFs19tZXR1cycsXG4gIHl5OiAnbWV0YWlfbWV0xbNfbWV0dXMnXG59O1xuZnVuY3Rpb24gdHJhbnNsYXRlU2Vjb25kcyhudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICByZXR1cm4gJ2tlbGlvcyBzZWt1bmTEl3MnO1xuICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ2tlbGnFsyBzZWt1bmTFvmnFsycgOiAna2VsaWFzIHNla3VuZGVzJztcbiAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlU2luZ3VsYXIobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1zKGtleSlbMF0gOiAoaXNGdXR1cmUgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XG59XG5mdW5jdGlvbiBzcGVjaWFsKG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMCB8fCAobnVtID4gMTAgJiYgbnVtIDwgMjApO1xufVxuZnVuY3Rpb24gZm9ybXMoa2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuICh1bml0cyBhcyBhbnkpW2tleV0uc3BsaXQoJ18nKTtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XG4gIGlmIChudW0gPT09IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyB0cmFuc2xhdGVTaW5ndWxhcihudW0sIHdpdGhvdXRTdWZmaXgsIGtleVswXSwgaXNGdXR1cmUpO1xuICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMF0pO1xuICB9IGVsc2Uge1xuICAgICAgaWYgKGlzRnV0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIGZvcm1zKGtleSlbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsdExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2x0JyxcbiAgbW9udGhzIDoge1xuICAgIGZvcm1hdDogJ3NhdXNpb192YXNhcmlvX2tvdm9fYmFsYW5kxb5pb19nZWd1xb7El3NfYmlyxb5lbGlvX2xpZXBvc19ydWdwasWrxI1pb19ydWdzxJdqb19zcGFsaW9fbGFwa3JpxI1pb19ncnVvZMW+aW8nLnNwbGl0KCdfJyksXG4gICAgc3RhbmRhbG9uZTogJ3NhdXNpc192YXNhcmlzX2tvdmFzX2JhbGFuZGlzX2dlZ3XFvsSXX2JpcsW+ZWxpc19saWVwYV9ydWdwasWrdGlzX3J1Z3PEl2ppc19zcGFsaXNfbGFwa3JpdGlzX2dydW9kaXMnLnNwbGl0KCdfJyksXG4gICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/fE1NTU0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStEW29EXT8vXG4gIH0sXG4gIG1vbnRoc1Nob3J0IDogJ3NhdV92YXNfa292X2JhbF9nZWdfYmlyX2xpZV9yZ3BfcmdzX3NwYV9sYXBfZ3JkJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6IHtcbiAgICAgIGZvcm1hdDogJ3Nla21hZGllbsSvX3Bpcm1hZGllbsSvX2FudHJhZGllbsSvX3RyZcSNaWFkaWVuxK9fa2V0dmlydGFkaWVuxK9fcGVua3RhZGllbsSvX8WhZcWhdGFkaWVuxK8nLnNwbGl0KCdfJyksXG4gICAgICBzdGFuZGFsb25lOiAnc2VrbWFkaWVuaXNfcGlybWFkaWVuaXNfYW50cmFkaWVuaXNfdHJlxI1pYWRpZW5pc19rZXR2aXJ0YWRpZW5pc19wZW5rdGFkaWVuaXNfxaFlxaF0YWRpZW5pcycuc3BsaXQoJ18nKSxcbiAgICAgIGlzRm9ybWF0OiAvZGRkZCBISDptbS9cbiAgfSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTZWtfUGlyX0FudF9UcmVfS2V0X1Blbl/FoGXFoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU19QX0FfVF9LX1BuX8WgJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICBMIDogJ1lZWVktTU0tREQnLFxuICAgICAgTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgIExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICBMTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkZCwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIGwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICBsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxuICAgICAgbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIGxsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGQsIEhIOm1tIFt2YWwuXSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgICBzYW1lRGF5IDogJ1vFoGlhbmRpZW5dIExUJyxcbiAgICAgIG5leHREYXkgOiAnW1J5dG9qXSBMVCcsXG4gICAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcbiAgICAgIGxhc3REYXkgOiAnW1Zha2FyXSBMVCcsXG4gICAgICBsYXN0V2VlayA6ICdbUHJhxJdqdXPEr10gZGRkZCBMVCcsXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICBmdXR1cmUgOiAncG8gJXMnLFxuICAgICAgcGFzdCA6ICdwcmllxaEgJXMnLFxuICAgICAgcyA6IHRyYW5zbGF0ZVNlY29uZHMsXG4gICAgICBzcyA6IHRyYW5zbGF0ZSxcbiAgICAgIG0gOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgaCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgaGggOiB0cmFuc2xhdGUsXG4gICAgICBkIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBkZCA6IHRyYW5zbGF0ZSxcbiAgICAgIE0gOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIE1NIDogdHJhbnNsYXRlLFxuICAgICAgeSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgeXkgOiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LW9qaS8sXG4gIG9yZGluYWwobnVtKSB7XG4gICAgICByZXR1cm4gbnVtICsgJy1vamknO1xuICB9LFxuICB3ZWVrIDoge1xuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=