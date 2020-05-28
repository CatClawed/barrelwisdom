import { Locale } from '../locale/locale.class';
export declare function initWeekYear(): void;
export declare function getSetWeekYear(date: Date, input: number, locale?: Locale, isUTC?: boolean): number | Date;
export declare function getWeekYear(date: Date, locale?: Locale, isUTC?: boolean): number;
export declare function getSetISOWeekYear(date: Date, input: number, isUTC?: boolean): number | Date;
export declare function getISOWeekYear(date: Date, isUTC?: boolean): number;
export declare function getISOWeeksInYear(date: Date, isUTC?: boolean): number;
export declare function getWeeksInYear(date: Date, isUTC?: boolean, locale?: Locale): number;
