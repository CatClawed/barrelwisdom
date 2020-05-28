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
export const ptBrLocale = {
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
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYnIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3B0LWJyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU1wRCxNQUFNLE9BQU8sVUFBVSxHQUFlO0lBQ3BDLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0csV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLGdGQUFnRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckcsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEdBQUcsRUFBRSxrQ0FBa0M7UUFDdkMsSUFBSSxFQUFFLHdDQUF3QztLQUMvQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGVBQWU7Ozs7O1FBQ3hCLFFBQVEsQ0FBQyxJQUFVO1lBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2dCQUM5Qyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQjtRQUMvQyxDQUFDO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGlCQUFpQjtRQUNwQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUG9ydHVndWVzZSAoQnJhemlsKSBbcHQtYnJdXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcblxuZXhwb3J0IGNvbnN0IHB0QnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdwdC1icicsXG4gIG1vbnRoczogJ0phbmVpcm9fRmV2ZXJlaXJvX01hcsOnb19BYnJpbF9NYWlvX0p1bmhvX0p1bGhvX0Fnb3N0b19TZXRlbWJyb19PdXR1YnJvX05vdmVtYnJvX0RlemVtYnJvJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbl9GZXZfTWFyX0Ficl9NYWlfSnVuX0p1bF9BZ29fU2V0X091dF9Ob3ZfRGV6Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ0RvbWluZ29fU2VndW5kYS1mZWlyYV9UZXLDp2EtZmVpcmFfUXVhcnRhLWZlaXJhX1F1aW50YS1mZWlyYV9TZXh0YS1mZWlyYV9Tw6FiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnRG9tX1NlZ19UZXJfUXVhX1F1aV9TZXhfU8OhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEb18ywqpfM8KqXzTCql81wqpfNsKqX1PDoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw6BzXSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw6BzXSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0hvamUgw6BzXSBMVCcsXG4gICAgbmV4dERheTogJ1tBbWFuaMOjIMOgc10gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw6BzXSBMVCcsXG4gICAgbGFzdERheTogJ1tPbnRlbSDDoHNdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gKGdldERheU9mV2VlayhkYXRlKSA9PT0gMCB8fCBnZXREYXlPZldlZWsoZGF0ZSkgPT09IDYpID9cbiAgICAgICAgJ1vDmmx0aW1vXSBkZGRkIFvDoHNdIExUJyA6IC8vIFNhdHVyZGF5ICsgU3VuZGF5XG4gICAgICAgICdbw5psdGltYV0gZGRkZCBbw6BzXSBMVCc7IC8vIE1vbmRheSAtIEZyaWRheVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbSAlcycsXG4gICAgcGFzdDogJyVzIGF0csOhcycsXG4gICAgczogJ3BvdWNvcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VtIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW1hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1bSBkaWEnLFxuICAgIGRkOiAnJWQgZGlhcycsXG4gICAgTTogJ3VtIG3DqnMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1bSBhbm8nLFxuICAgIHl5OiAnJWQgYW5vcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICBvcmRpbmFsOiAnJWTCuidcbn07XG4iXX0=