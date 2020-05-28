/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
/** @type {?} */
export var frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2ZyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsc0ZBQXNGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RyxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxxREFBcUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsYUFBYTtRQUN0QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsV0FBVztRQUNqQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0Qsc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxPQUFPOzs7OztJQUFQLFVBQVEsSUFBWSxFQUFFLE1BQWM7O1lBQzVCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLFFBQVEsTUFBTSxFQUFFO1lBQ2QsZ0VBQWdFO1lBQ2hFLG1DQUFtQztZQUNuQyxtREFBbUQ7WUFDbkQsS0FBSyxHQUFHO2dCQUNOLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV2QyxpRUFBaUU7WUFDakUsUUFBUTtZQUNSLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEMsa0RBQWtEO1lBQ2xELEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFFLGdFQUFnRTtLQUN6RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBGcmVuY2ggW2ZyXVxuLy8hIGF1dGhvciA6IEpvaG4gRmlzY2hlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qZnJvZmZpY2VcblxuZXhwb3J0IGNvbnN0IGZyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZnInLFxuICBtb250aHM6ICdqYW52aWVyX2bDqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8O7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw6ljZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFudi5fZsOpdnIuX21hcnNfYXZyLl9tYWlfanVpbl9qdWlsLl9hb8O7dF9zZXB0Ll9vY3QuX25vdi5fZMOpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkaV9sdV9tYV9tZV9qZV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbQXVqb3VyZOKAmWh1aSDDoF0gTFQnLFxuICAgIG5leHREYXk6ICdbRGVtYWluIMOgXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDoF0gTFQnLFxuICAgIGxhc3REYXk6ICdbSGllciDDoF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnZGRkZCBbZGVybmllciDDoF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZGFucyAlcycsXG4gICAgcGFzdDogJ2lsIHkgYSAlcycsXG4gICAgczogJ3F1ZWxxdWVzIHNlY29uZGVzJyxcbiAgICBzczogJyVkIHNlY29uZGVzJyxcbiAgICBtOiAndW5lIG1pbnV0ZScsXG4gICAgbW06ICclZCBtaW51dGVzJyxcbiAgICBoOiAndW5lIGhldXJlJyxcbiAgICBoaDogJyVkIGhldXJlcycsXG4gICAgZDogJ3VuIGpvdXInLFxuICAgIGRkOiAnJWQgam91cnMnLFxuICAgIE06ICd1biBtb2lzJyxcbiAgICBNTTogJyVkIG1vaXMnLFxuICAgIHk6ICd1biBhbicsXG4gICAgeXk6ICclZCBhbnMnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlcnwpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIC8vIFRPRE86IFJldHVybiAnZScgd2hlbiBkYXkgb2YgbW9udGggPiAxLiBNb3ZlIHRoaXMgY2FzZSBpbnNpZGVcbiAgICAgIC8vIGJsb2NrIGZvciBtYXNjdWxpbmUgd29yZHMgYmVsb3cuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzMzNzVcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdlcicgOiAnJyk7XG5cbiAgICAgIC8vIFdvcmRzIHdpdGggbWFzY3VsaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogbW9pcywgdHJpbWVzdHJlLCBqb3VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdRJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJ2UnKTtcblxuICAgICAgLy8gV29yZHMgd2l0aCBmZW1pbmluZSBncmFtbWF0aWNhbCBnZW5kZXI6IHNlbWFpbmVcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ3JlJyA6ICdlJyk7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIl19