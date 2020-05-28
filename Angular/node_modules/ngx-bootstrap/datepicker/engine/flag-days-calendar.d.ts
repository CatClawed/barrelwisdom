import { DaysCalendarViewModel, DatepickerDateCustomClasses } from '../models';
export interface FlagDaysCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    daysDisabled: number[];
    datesDisabled: Date[];
    datesEnabled: Date[];
    hoveredDate: Date;
    selectedDate: Date;
    selectedRange: Date[];
    displayMonths: number;
    monthIndex: number;
    dateCustomClasses: DatepickerDateCustomClasses[];
}
export declare function flagDaysCalendar(formattedMonth: DaysCalendarViewModel, options: FlagDaysCalendarOptions): DaysCalendarViewModel;
