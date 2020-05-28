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
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
/** @type {?} */
export var ptBrLocale = {
    abbr: 'pt-br',
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYnIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3B0LWJyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU1wRCxNQUFNLEtBQU8sVUFBVSxHQUFlO0lBQ3BDLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0csV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLGdGQUFnRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckcsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEdBQUcsRUFBRSxrQ0FBa0M7UUFDdkMsSUFBSSxFQUFFLHdDQUF3QztLQUMvQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUTs7OztRQUFSLFVBQVMsSUFBVTtZQUNqQixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDOUMsdUJBQXVCLENBQUMsQ0FBQyxrQkFBa0I7UUFDL0MsQ0FBQztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxVQUFVO1FBQ2hCLENBQUMsRUFBRSxpQkFBaUI7UUFDcEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFBvcnR1Z3Vlc2UgKEJyYXppbCkgW3B0LWJyXVxuLy8hIGF1dGhvciA6IENhaW8gUmliZWlybyBQZXJlaXJhIDogaHR0cHM6Ly9naXRodWIuY29tL2NhaW8tcmliZWlyby1wZXJlaXJhXG5cbmV4cG9ydCBjb25zdCBwdEJyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncHQtYnInLFxuICBtb250aHM6ICdKYW5laXJvX0ZldmVyZWlyb19NYXLDp29fQWJyaWxfTWFpb19KdW5ob19KdWxob19BZ29zdG9fU2V0ZW1icm9fT3V0dWJyb19Ob3ZlbWJyb19EZXplbWJybycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdKYW5fRmV2X01hcl9BYnJfTWFpX0p1bl9KdWxfQWdvX1NldF9PdXRfTm92X0Rleicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdEb21pbmdvX1NlZ3VuZGEtZmVpcmFfVGVyw6dhLWZlaXJhX1F1YXJ0YS1mZWlyYV9RdWludGEtZmVpcmFfU2V4dGEtZmVpcmFfU8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0RvbV9TZWdfVGVyX1F1YV9RdWlfU2V4X1PDoWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnRG9fMsKqXzPCql80wqpfNcKqXzbCql9Tw6EnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8Ogc10gSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8Ogc10gSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tIb2plIMOgc10gTFQnLFxuICAgIG5leHREYXk6ICdbQW1hbmjDoyDDoHNdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8Ogc10gTFQnLFxuICAgIGxhc3REYXk6ICdbT250ZW0gw6BzXSBMVCcsXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDAgfHwgZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSA2KSA/XG4gICAgICAgICdbw5psdGltb10gZGRkZCBbw6BzXSBMVCcgOiAvLyBTYXR1cmRheSArIFN1bmRheVxuICAgICAgICAnW8OabHRpbWFdIGRkZGQgW8Ogc10gTFQnOyAvLyBNb25kYXkgLSBGcmlkYXlcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW0gJXMnLFxuICAgIHBhc3Q6ICclcyBhdHLDoXMnLFxuICAgIHM6ICdwb3Vjb3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1bSBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VtYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW0gZGlhJyxcbiAgICBkZDogJyVkIGRpYXMnLFxuICAgIE06ICd1bSBtw6pzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW0gYW5vJyxcbiAgICB5eTogJyVkIGFub3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcbiAgb3JkaW5hbDogJyVkwronXG59O1xuIl19