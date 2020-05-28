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
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
/** @type {?} */
export const itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        /**
         * @param {?} num
         * @return {?}
         */
        future(num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFPcEQsTUFBTSxPQUFPLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSwrRkFBK0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xILFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSwwREFBMEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9FLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE9BQU8sRUFBRSxnQkFBZ0I7Ozs7O1FBQ3pCLFFBQVEsQ0FBQyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQixLQUFLLENBQUM7b0JBQ0osT0FBTyw0QkFBNEIsQ0FBQztnQkFDdEM7b0JBQ0UsT0FBTyw0QkFBNEIsQ0FBQzthQUN2QztRQUNILENBQUM7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFOzs7OztRQUNaLE1BQU0sQ0FBQyxHQUFXO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsSUFBSSxFQUFFLE9BQU87UUFDYixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSXRhbGlhbiBbaXRdXG4vLyEgYXV0aG9yIDogTG9yZW56byA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGllbVxuLy8hIGF1dGhvcjogTWF0dGlhIExhcmVudGlzOiBodHRwczovL2dpdGh1Yi5jb20vbm9zdGFsZ2lhelxuXG5leHBvcnQgY29uc3QgaXRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdpdCcsXG4gIG1vbnRoczogJ2dlbm5haW9fZmViYnJhaW9fbWFyem9fYXByaWxlX21hZ2dpb19naXVnbm9fbHVnbGlvX2Fnb3N0b19zZXR0ZW1icmVfb3R0b2JyZV9ub3ZlbWJyZV9kaWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdnZW5fZmViX21hcl9hcHJfbWFnX2dpdV9sdWdfYWdvX3NldF9vdHRfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdkb21lbmljYV9sdW5lZMOsX21hcnRlZMOsX21lcmNvbGVkw6xfZ2lvdmVkw6xfdmVuZXJkw6xfc2FiYXRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tX2x1bl9tYXJfbWVyX2dpb192ZW5fc2FiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21lX2dpX3ZlX3NhJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbT2dnaSBhbGxlXSBMVCcsXG4gICAgbmV4dERheTogJ1tEb21hbmkgYWxsZV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbYWxsZV0gTFQnLFxuICAgIGxhc3REYXk6ICdbSWVyaSBhbGxlXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW2xhIHNjb3JzYV0gZGRkZCBbYWxsZV0gTFQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnW2xvIHNjb3Jzb10gZGRkZCBbYWxsZV0gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmUobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICgoL15bMC05XS4rJC8pLnRlc3QobnVtLnRvU3RyaW5nKDEwKSkgPyAndHJhJyA6ICdpbicpICsgJyAnICsgbnVtO1xuICAgIH0sXG4gICAgcGFzdDogJyVzIGZhJyxcbiAgICBzOiAnYWxjdW5pIHNlY29uZGknLFxuICAgIHNzOiAnJWQgc2Vjb25kaScsXG4gICAgbTogJ3VuIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dGknLFxuICAgIGg6ICd1blxcJ29yYScsXG4gICAgaGg6ICclZCBvcmUnLFxuICAgIGQ6ICd1biBnaW9ybm8nLFxuICAgIGRkOiAnJWQgZ2lvcm5pJyxcbiAgICBNOiAndW4gbWVzZScsXG4gICAgTU06ICclZCBtZXNpJyxcbiAgICB5OiAndW4gYW5ubycsXG4gICAgeXk6ICclZCBhbm5pJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3Cui8sXG4gIG9yZGluYWw6ICclZMK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=