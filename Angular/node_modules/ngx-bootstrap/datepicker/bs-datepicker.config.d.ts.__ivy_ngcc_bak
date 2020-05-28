import { DatepickerRenderOptions, BsDatepickerViewMode, DatepickerDateCustomClasses } from './models';
import { BsCustomDates } from './themes/bs/bs-custom-dates-view.component';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export declare class BsDatepickerConfig implements DatepickerRenderOptions {
    /** sets use adaptive position */
    adaptivePosition: boolean;
    /** sets use UTC date time format */
    useUtc: boolean;
    /** turn on/off animation */
    isAnimated: boolean;
    value?: Date | Date[];
    isDisabled?: boolean;
    /**
     * Default min date for all date/range pickers
     */
    minDate?: Date;
    /**
     * Default max date for all date/range pickers
     */
    maxDate?: Date;
    /**
     * Default date custom classes for all date/range pickers
     */
    dateCustomClasses: DatepickerDateCustomClasses[];
    /**
     * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
     */
    daysDisabled?: number[];
    /**
     * Disable specific dates
     */
    datesDisabled?: Date[];
    /**
     * Show one months for special cases (only for dateRangePicker)
     * 1. maxDate is equal to today's date
     * 2. minDate's month is equal to maxDate's month
     */
    displayOneMonthRange?: boolean;
    /**
     * Enable specific dates
     */
    datesEnabled?: Date[];
    /**
     * Makes dates from other months active
     */
    selectFromOtherMonth?: boolean;
    /**
     * Allows select first date of the week by click on week number
     */
    selectWeek?: boolean;
    /**
     * Allows select daterange as first and last day of week by click on week number (dateRangePicker only)
     */
    selectWeekDateRange?: boolean;
    /**
     * Shows previous and current month, instead of current and next (dateRangePicker only)
     */
    showPreviousMonth?: boolean;
    /**
     * Add class to current day
     */
    customTodayClass?: string;
    /**
     * Default mode for all date pickers
     */
    minMode?: BsDatepickerViewMode;
    /**
     * If true, returns focus to the datepicker / daterangepicker input after date selection
     */
    returnFocusToInput: boolean;
    /** CSS class which will be applied to datepicker container,
     * usually used to set color theme
     */
    containerClass: string;
    displayMonths: number;
    /**
     * Allows to hide week numbers in datepicker
     */
    showWeekNumbers: boolean;
    dateInputFormat: string;
    rangeSeparator: string;
    /**
     * Date format for date range input field
     */
    rangeInputFormat: string;
    /**
     * Predefined ranges
     */
    ranges?: BsCustomDates[];
    monthTitle: string;
    yearTitle: string;
    dayLabel: string;
    monthLabel: string;
    yearLabel: string;
    weekNumbers: string;
}
