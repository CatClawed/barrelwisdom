/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
/** @type {?} */
export var deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFNBQVMsbUJBQW1CLENBQUMsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCOztRQUN4RixNQUFNLEdBQXdDO1FBQ2xELEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDcEMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUNwQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNyQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO1FBQ2pDLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUN6QyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO1FBQy9CLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUN4QztJQUNELE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsb0ZBQW9GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RyxXQUFXLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QixJQUFJLEVBQUUsMEJBQTBCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7S0FDeEI7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR2VybWFuIFtkZV1cbi8vISBhdXRob3IgOiBsbHVjaHMgOiBodHRwczovL2dpdGh1Yi5jb20vbGx1Y2hzXG4vLyEgYXV0aG9yOiBNZW5lbGlvbiBFbGVuc8O6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDogTWlrb2xhaiBEYWRlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWlrMDFhalxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nXSB9ID0ge1xuICAgICdtJzogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgICAnaCc6IFsnZWluZSBTdHVuZGUnLCAnZWluZXIgU3R1bmRlJ10sXG4gICAgJ2QnOiBbJ2VpbiBUYWcnLCAnZWluZW0gVGFnJ10sXG4gICAgJ2RkJzogW251bSArICcgVGFnZScsIG51bSArICcgVGFnZW4nXSxcbiAgICAnTSc6IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gICAgJ01NJzogW251bSArICcgTW9uYXRlJywgbnVtICsgJyBNb25hdGVuJ10sXG4gICAgJ3knOiBbJ2VpbiBKYWhyJywgJ2VpbmVtIEphaHInXSxcbiAgICAneXknOiBbbnVtICsgJyBKYWhyZScsIG51bSArICcgSmFocmVuJ11cbiAgfTtcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xufVxuXG5leHBvcnQgY29uc3QgZGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdkZScsXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw6Ryel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXAuX09rdC5fTm92Ll9EZXouJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ1Nvbm50YWdfTW9udGFnX0RpZW5zdGFnX01pdHR3b2NoX0Rvbm5lcnN0YWdfRnJlaXRhZ19TYW1zdGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnU28uX01vLl9EaS5fTWkuX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ1NvX01vX0RpX01pX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbaGV1dGUgdW1dIExUIFtVaHJdJyxcbiAgICBzYW1lRWxzZTogJ0wnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIHVtXSBMVCBbVWhyXScsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt1bV0gTFQgW1Vocl0nLFxuICAgIGxhc3REYXk6ICdbZ2VzdGVybiB1bV0gTFQgW1Vocl0nLFxuICAgIGxhc3RXZWVrOiAnW2xldHp0ZW5dIGRkZGQgW3VtXSBMVCBbVWhyXSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgIHBhc3Q6ICd2b3IgJXMnLFxuICAgIHM6ICdlaW4gcGFhciBTZWt1bmRlbicsXG4gICAgc3M6ICclZCBTZWt1bmRlbicsXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtbTogJyVkIE1pbnV0ZW4nLFxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaGg6ICclZCBTdHVuZGVuJyxcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=