import { DatepickerFormatOptions, DaysCalendarModel, DaysCalendarViewModel } from '../models';
export declare function formatDaysCalendar(daysCalendar: DaysCalendarModel, formatOptions: DatepickerFormatOptions, monthIndex: number): DaysCalendarViewModel;
export declare function getWeekNumbers(daysMatrix: Date[][], format: string, locale: string): string[];
export declare function getShiftedWeekdays(locale: string): string[];
