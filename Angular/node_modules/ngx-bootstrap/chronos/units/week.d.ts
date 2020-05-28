import { Locale } from '../locale/locale.class';
export declare function initWeek(): void;
export declare function setWeek(date: Date, input: number, locale?: Locale): Date;
export declare function getWeek(date: Date, locale?: Locale, isUTC?: boolean): number;
export declare function setISOWeek(date: Date, input: number): Date;
export declare function getISOWeek(date: Date, isUTC?: boolean): number;
