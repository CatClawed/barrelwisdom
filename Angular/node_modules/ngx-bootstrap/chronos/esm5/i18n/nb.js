/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
/** @type {?} */
export var nbLocale = {
    abbr: 'nb',
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'noen sekunder',
        ss: '%d sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL25iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVFBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsb0ZBQW9GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RyxXQUFXLEVBQUUsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxvREFBb0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsVUFBVTtRQUNoQixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxPQUFPO0tBQ1o7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBQyxnRUFBZ0U7S0FDeEU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0XG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBOb3J3ZWdpYW4gQm9rbcOlbCBbbmJdXG4vLyEgYXV0aG9ycyA6IEVzcGVuIEhvdmxhbmRzZGFsIDogaHR0cHM6Ly9naXRodWIuY29tL3JleHhhcnNcbi8vISAgICAgICAgICAgU2lndXJkIEdhcnRtYW5uIDogaHR0cHM6Ly9naXRodWIuY29tL3NpZ3VyZGdhXG5cbmV4cG9ydCBjb25zdCBuYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ25iJyxcbiAgbW9udGhzOiAnamFudWFyX2ZlYnJ1YXJfbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW4uX2ZlYi5fbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVzLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdzw7huZGFnX21hbmRhZ190aXJzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7hyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8O4Ll9tYS5fdGkuX29uLl90by5fZnIuX2zDuC4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc8O4X21hX3RpX29uX3RvX2ZyX2zDuCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbaSBkYWcga2wuXSBMVCcsXG4gICAgbmV4dERheTogJ1tpIG1vcmdlbiBrbC5dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsLl0gTFQnLFxuICAgIGxhc3REYXk6ICdbaSBnw6VyIGtsLl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2ZvcnJpZ2VdIGRkZGQgW2tsLl0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnb20gJXMnLFxuICAgIHBhc3Q6ICclcyBzaWRlbicsXG4gICAgczogJ25vZW4gc2VrdW5kZXInLFxuICAgIHNzOiAnJWQgc2VrdW5kZXInLFxuICAgIG06ICdldHQgbWludXR0JyxcbiAgICBtbTogJyVkIG1pbnV0dGVyJyxcbiAgICBoOiAnZW4gdGltZScsXG4gICAgaGg6ICclZCB0aW1lcicsXG4gICAgZDogJ2VuIGRhZycsXG4gICAgZGQ6ICclZCBkYWdlcicsXG4gICAgTTogJ2VuIG3DpW5lZCcsXG4gICAgTU06ICclZCBtw6VuZWRlcicsXG4gICAgeTogJ2V0dCDDpXInLFxuICAgIHl5OiAnJWQgw6VyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==