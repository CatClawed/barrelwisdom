import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, BsNavigationEvent, CellHoverEvent, DatepickerRenderOptions, DaysCalendarViewModel, DayViewModel, WeekViewModel } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
export declare class BsDaysCalendarViewComponent {
    private _config;
    calendar: DaysCalendarViewModel;
    options: DatepickerRenderOptions;
    onNavigate: EventEmitter<BsNavigationEvent>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    onSelect: EventEmitter<DayViewModel>;
    onHover: EventEmitter<CellHoverEvent>;
    onHoverWeek: EventEmitter<WeekViewModel>;
    isWeekHovered: boolean;
    constructor(_config: BsDatepickerConfig);
    navigateTo(event: BsNavigationDirection): void;
    changeViewMode(event: BsDatepickerViewMode): void;
    selectDay(event: DayViewModel): void;
    selectWeek(week: WeekViewModel): void;
    weekHoverHandler(cell: WeekViewModel, isHovered: boolean): void;
    hoverDay(cell: DayViewModel, isHovered: boolean): void;
}
