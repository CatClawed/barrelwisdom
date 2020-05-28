import { YearsCalendarViewModel } from '../models';
export interface FlagYearsCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    hoveredYear: Date;
    selectedDate: Date;
    displayMonths: number;
    yearIndex: number;
}
export declare function flagYearsCalendar(yearsCalendar: YearsCalendarViewModel, options: FlagYearsCalendarOptions): YearsCalendarViewModel;
