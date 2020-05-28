import { BsDatepickerViewMode, DatepickerFormatOptions, DatepickerRenderOptions, DatepickerDateCustomClasses, DaysCalendarModel, DaysCalendarViewModel, MonthsCalendarViewModel, MonthViewOptions, YearsCalendarViewModel } from '../models';
export interface BsDatepickerViewState {
    date: Date;
    mode: BsDatepickerViewMode;
}
export declare class BsDatepickerState implements DatepickerRenderOptions, DatepickerFormatOptions {
    selectedDate?: Date;
    selectedRange?: Date[];
    view: BsDatepickerViewState;
    isDisabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    daysDisabled?: number[];
    datesDisabled?: Date[];
    datesEnabled?: Date[];
    minMode?: BsDatepickerViewMode;
    dateCustomClasses?: DatepickerDateCustomClasses[];
    hoveredDate?: Date;
    hoveredMonth?: Date;
    hoveredYear?: Date;
    monthsModel?: DaysCalendarModel[];
    formattedMonths?: DaysCalendarViewModel[];
    flaggedMonths?: DaysCalendarViewModel[];
    selectFromOtherMonth?: boolean;
    showPreviousMonth?: boolean;
    displayOneMonthRange?: boolean;
    monthsCalendar?: MonthsCalendarViewModel[];
    flaggedMonthsCalendar?: MonthsCalendarViewModel[];
    yearsCalendarModel?: YearsCalendarViewModel[];
    yearsCalendarFlagged?: YearsCalendarViewModel[];
    monthViewOptions: MonthViewOptions;
    showWeekNumbers?: boolean;
    displayMonths?: number;
    locale: string;
    monthTitle: string;
    yearTitle: string;
    dayLabel: string;
    monthLabel: string;
    yearLabel: string;
    weekNumbers: string;
}
export declare const initialDatepickerState: BsDatepickerState;
