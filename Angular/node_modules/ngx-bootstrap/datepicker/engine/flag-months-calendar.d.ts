import { MonthsCalendarViewModel } from '../models';
export interface FlagMonthCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    hoveredMonth: Date;
    selectedDate: Date;
    displayMonths: number;
    monthIndex: number;
}
export declare function flagMonthsCalendar(monthCalendar: MonthsCalendarViewModel, options: FlagMonthCalendarOptions): MonthsCalendarViewModel;
