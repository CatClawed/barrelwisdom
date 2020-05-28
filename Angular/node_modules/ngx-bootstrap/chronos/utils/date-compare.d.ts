import { UnitOfTime } from '../types';
export declare function isAfter(date1: Date, date2: Date, units?: UnitOfTime): boolean;
export declare function isBefore(date1: Date, date2: Date, units?: UnitOfTime): boolean;
export declare function isDisabledDay(date: Date, daysDisabled: number[]): boolean;
export declare function isBetween(date: Date, from: Date, to: Date, units: UnitOfTime, inclusivity?: string): boolean;
export declare function isSame(date1: Date, date2: Date, units?: UnitOfTime): boolean;
export declare function isSameDay(date1: Date, date2: Date): boolean;
export declare function isSameOrAfter(date1: Date, date2: Date, units?: UnitOfTime): boolean;
export declare function isSameOrBefore(date1: Date, date2: Date, units?: UnitOfTime): boolean;
