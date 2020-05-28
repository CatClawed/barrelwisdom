/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DatepickerConfig } from './datepicker.config';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
export class DatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    }
}
DatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                exports: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                entryComponents: [DatePickerComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW9CN0QsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztnQkFDcEMsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RheXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRocGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZZWFyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFycGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUGlja2VySW5uZXJDb21wb25lbnQsXG4gICAgRGF5UGlja2VyQ29tcG9uZW50LFxuICAgIE1vbnRoUGlja2VyQ29tcG9uZW50LFxuICAgIFllYXJQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxuICAgIERheVBpY2tlckNvbXBvbmVudCxcbiAgICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RhdGVQaWNrZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGF0ZXBpY2tlck1vZHVsZSwgcHJvdmlkZXJzOiBbRGF0ZXBpY2tlckNvbmZpZ10gfTtcbiAgfVxufVxuIl19