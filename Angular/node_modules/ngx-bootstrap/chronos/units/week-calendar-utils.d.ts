export declare function dayOfYearFromWeeks(year: number, week: number, weekday: number, dow: number, doy: number): {
    year: number;
    dayOfYear: number;
};
export declare function weekOfYear(date: Date, dow: number, doy: number, isUTC?: boolean): {
    week: number;
    year: number;
};
export declare function weeksInYear(year: number, dow: number, doy: number): number;
