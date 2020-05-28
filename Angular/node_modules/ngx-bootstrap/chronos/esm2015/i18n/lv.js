/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Matiss Janis Aboltins : https://github.com/matissjanis
/** @type {?} */
export const lvLocale = {
    abbr: 'lv',
    months: 'Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena'.split('_'),
    weekdaysShort: 'Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd'.split('_'),
    weekdaysMin: 'Sv_Pi_Ot_Tr_Ce_Pk_Se'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'pēc %s',
        past: 'pirms %s',
        s: 'dažām sekundēm',
        ss: '%d sekundēm',
        m: 'minūtes',
        mm: '%d minūtēm',
        h: 'stundas',
        hh: '%d stundām',
        d: 'dienas',
        dd: '%d dienām',
        M: 'mēneša',
        MM: '%d mēnešiem',
        y: 'gada',
        yy: '%d gadiem'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    /**
     * @param {?} num
     * @return {?}
     */
    ordinal(num) {
        return num + '.';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsc0dBQXNHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxSCxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcseUVBQXlFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixhQUFhLEVBQUcsNkNBQTZDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RSxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHlCQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGNBQWM7UUFDekIsT0FBTyxFQUFHLG1CQUFtQjtRQUM3QixRQUFRLEVBQUcscUJBQXFCO1FBQ2hDLFFBQVEsRUFBRyxHQUFHO0tBQ2Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsUUFBUTtRQUNqQixJQUFJLEVBQUcsVUFBVTtRQUNqQixDQUFDLEVBQUcsZ0JBQWdCO1FBQ3BCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsWUFBWTtRQUNqQixDQUFDLEVBQUcsUUFBUTtRQUNaLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLGFBQWE7UUFDbEIsQ0FBQyxFQUFHLE1BQU07UUFDVixFQUFFLEVBQUcsV0FBVztLQUNqQjtJQUNELHNCQUFzQixFQUFFLFdBQVc7Ozs7O0lBQ25DLE9BQU8sQ0FBQyxHQUFHO1FBQ1AsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQyxDQUFFLGdFQUFnRTtLQUMxRTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMYXR2aWFuIFtsdl1cbi8vISBhdXRob3IgOiBNYXRpc3MgSmFuaXMgQWJvbHRpbnMgOiBodHRwczovL2dpdGh1Yi5jb20vbWF0aXNzamFuaXNcblxuZXhwb3J0IGNvbnN0IGx2TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbHYnLFxuICBtb250aHMgOiAnSmFudsSBcmlzX0ZlYnJ1xIFyaXNfTWFydHNfQXByxKtsaXNfTWFpanNfSsWrbmlqc19KxatsaWpzX0F1Z3VzdHNfU2VwdGVtYnJpc19Pa3RvYnJpc19Ob3ZlbWJyaXNfRGVjZW1icmlzJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWFpX0rFq25fSsWrbF9BdWdfU2VwX09rdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdTdsSTdGRpZW5hX1Bpcm1kaWVuYV9PdHJkaWVuYV9UcmXFoWRpZW5hX0NldHVydGRpZW5hX1BpZWt0ZGllbmFfU2VzdGRpZW5hJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ1N2xJN0ZF9QaXJtZF9PdHJkX1RyZcWhZF9DZXR1cnRkX1BpZWt0ZF9TZXN0ZCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU3ZfUGlfT3RfVHJfQ2VfUGtfU2UnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdwxJNjICVzJyxcbiAgICBwYXN0IDogJ3Bpcm1zICVzJyxcbiAgICBzIDogJ2Rhxb7EgW0gc2VrdW5kxJNtJyxcbiAgICBzcyA6ICclZCBzZWt1bmTEk20nLFxuICAgIG0gOiAnbWluxat0ZXMnLFxuICAgIG1tIDogJyVkIG1pbsWrdMSTbScsXG4gICAgaCA6ICdzdHVuZGFzJyxcbiAgICBoaCA6ICclZCBzdHVuZMSBbScsXG4gICAgZCA6ICdkaWVuYXMnLFxuICAgIGRkIDogJyVkIGRpZW7EgW0nLFxuICAgIE0gOiAnbcSTbmXFoWEnLFxuICAgIE1NIDogJyVkIG3Ek25lxaFpZW0nLFxuICAgIHkgOiAnZ2FkYScsXG4gICAgeXkgOiAnJWQgZ2FkaWVtJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsKG51bSkge1xuICAgICAgcmV0dXJuIG51bSArICcuJztcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=