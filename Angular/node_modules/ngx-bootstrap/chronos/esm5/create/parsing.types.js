/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DateParsingConfig() { }
if (false) {
    /**
     * date value
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._d;
    /**
     * DateArray [year, month, date, .....]
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._a;
    /**
     * date meridiem
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._meridiem;
    /**
     * is PM
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isPm;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._isUTC;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._useUTC;
    /**
     * input to parse: could be string, number[], number, Date, object
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._i;
    /**
     * locale key, 'en' by default
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._l;
    /**
     * date locale obj
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._locale;
    /**
     * date format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._f;
    /**
     * use strict parse format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._strict;
    /**
     * add one day to result at the end of parsing
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._nextDay;
    /**
     * utc time offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._offset;
    /**
     * time zone
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._tzm;
    /**
     * is valid
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isValid;
    /**
     * date parsing flags
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._pf;
    /**
     * week
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._w;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._dayOfYear;
    /**
     * used in set offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._changeInProgress;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._zoneDelta;
}
/**
 * @record
 */
export function DateParsingFlags() { }
if (false) {
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowDayOfYear;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeeks;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeekday;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.score;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.bigHour;
    /** @type {?} */
    DateParsingFlags.prototype.empty;
    /** @type {?} */
    DateParsingFlags.prototype.unusedTokens;
    /** @type {?} */
    DateParsingFlags.prototype.unusedInput;
    /** @type {?} */
    DateParsingFlags.prototype.overflow;
    /** @type {?} */
    DateParsingFlags.prototype.charsLeftOver;
    /** @type {?} */
    DateParsingFlags.prototype.nullInput;
    /** @type {?} */
    DateParsingFlags.prototype.invalidMonth;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.invalidWeekday;
    /** @type {?} */
    DateParsingFlags.prototype.invalidFormat;
    /** @type {?} */
    DateParsingFlags.prototype.userInvalidated;
    /** @type {?} */
    DateParsingFlags.prototype.iso;
    /** @type {?} */
    DateParsingFlags.prototype.parsedDateParts;
    /** @type {?} */
    DateParsingFlags.prototype.meridiem;
    /** @type {?} */
    DateParsingFlags.prototype.rfc2822;
    /** @type {?} */
    DateParsingFlags.prototype.weekdayMismatch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSx1Q0EwQ0M7Ozs7OztJQXhDQywrQkFBVTs7Ozs7SUFFViwrQkFBZTs7Ozs7SUFFZixzQ0FBbUI7Ozs7O0lBRW5CLGtDQUFnQjs7SUFFaEIsbUNBQWlCOztJQUNqQixvQ0FBa0I7Ozs7O0lBRWxCLCtCQUFlOzs7OztJQUVmLCtCQUFZOzs7OztJQUVaLG9DQUFpQjs7Ozs7SUFFakIsK0JBQXVCOzs7OztJQUV2QixvQ0FBa0I7Ozs7O0lBRWxCLHFDQUFtQjs7Ozs7SUFFbkIsb0NBQWlCOzs7OztJQUVqQixpQ0FBYzs7Ozs7SUFFZCxxQ0FBbUI7Ozs7O0lBRW5CLGdDQUF1Qjs7Ozs7SUFLdkIsK0JBQWlCOztJQUNqQix1Q0FBb0I7Ozs7O0lBRXBCLDhDQUE0Qjs7SUFFNUIsdUNBQW9COzs7OztBQUd0QixzQ0FxQkM7OztJQXBCQyw4Q0FBNkI7O0lBQzdCLDBDQUF5Qjs7SUFDekIsNENBQTJCOztJQUMzQixpQ0FBZTs7SUFDZixtQ0FBa0I7O0lBQ2xCLGlDQUFlOztJQUNmLHdDQUF1Qjs7SUFDdkIsdUNBQXNCOztJQUN0QixvQ0FBaUI7O0lBQ2pCLHlDQUFzQjs7SUFDdEIscUNBQW1COztJQUNuQix3Q0FBc0I7O0lBQ3RCLDBDQUF5Qjs7SUFDekIseUNBQXVCOztJQUN2QiwyQ0FBeUI7O0lBQ3pCLCtCQUFhOztJQUNiLDJDQUEyQjs7SUFDM0Isb0NBQWlCOztJQUNqQixtQ0FBaUI7O0lBQ2pCLDJDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0LCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgLyoqIGRhdGUgdmFsdWUgKi9cbiAgX2Q/OiBEYXRlO1xuICAvKiogRGF0ZUFycmF5IFt5ZWFyLCBtb250aCwgZGF0ZSwgLi4uLi5dICovXG4gIF9hPzogRGF0ZUFycmF5O1xuICAvKiogZGF0ZSBtZXJpZGllbSAqL1xuICBfbWVyaWRpZW0/OiBzdHJpbmc7XG4gIC8qKiBpcyBQTSAqL1xuICBfaXNQbT86IGJvb2xlYW47XG4gIC8vIGR1cGxpY2F0ZSBwYXJhbT9cbiAgX2lzVVRDPzogYm9vbGVhbjtcbiAgX3VzZVVUQz86IGJvb2xlYW47XG4gIC8qKiBpbnB1dCB0byBwYXJzZTogY291bGQgYmUgc3RyaW5nLCBudW1iZXJbXSwgbnVtYmVyLCBEYXRlLCBvYmplY3QgKi9cbiAgX2k/OiBEYXRlSW5wdXQ7XG4gIC8qKiBsb2NhbGUga2V5LCAnZW4nIGJ5IGRlZmF1bHQgKi9cbiAgX2w/OiBzdHJpbmc7XG4gIC8qKiBkYXRlIGxvY2FsZSBvYmogKi9cbiAgX2xvY2FsZT86IExvY2FsZTtcbiAgLyoqIGRhdGUgZm9ybWF0ICovXG4gIF9mPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKiB1c2Ugc3RyaWN0IHBhcnNlIGZvcm1hdCAqL1xuICBfc3RyaWN0PzogYm9vbGVhbjtcbiAgLyoqIGFkZCBvbmUgZGF5IHRvIHJlc3VsdCBhdCB0aGUgZW5kIG9mIHBhcnNpbmcgKi9cbiAgX25leHREYXk/OiBib29sZWFuO1xuICAvKiogdXRjIHRpbWUgb2Zmc2V0ICovXG4gIF9vZmZzZXQ/OiBudW1iZXI7XG4gIC8qKiB0aW1lIHpvbmUgKi9cbiAgX3R6bT86IG51bWJlcjtcbiAgLyoqIGlzIHZhbGlkICovXG4gIF9pc1ZhbGlkPzogYm9vbGVhbjtcbiAgLyoqIGRhdGUgcGFyc2luZyBmbGFncyAqL1xuICBfcGY/OiBEYXRlUGFyc2luZ0ZsYWdzO1xuXG4gIC8qKiBkYXRlIHNwZWNpZmljIGluZm8gKi9cblxuICAvKiogd2VlayAqL1xuICBfdz86IFdlZWtQYXJzaW5nO1xuICBfZGF5T2ZZZWFyPzogbnVtYmVyO1xuICAvKiogdXNlZCBpbiBzZXQgb2Zmc2V0ICovXG4gIF9jaGFuZ2VJblByb2dyZXNzPzogYm9vbGVhbjtcbiAgLyogdXNlZCBvbmx5IGluIGRpZmYgbWV0aG9kICovXG4gIF96b25lRGVsdGE/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBhcnNpbmdGbGFncyB7XG4gIF9vdmVyZmxvd0RheU9mWWVhcj86IGJvb2xlYW47XG4gIF9vdmVyZmxvd1dlZWtzPzogYm9vbGVhbjtcbiAgX292ZXJmbG93V2Vla2RheT86IGJvb2xlYW47XG4gIHNjb3JlPzogbnVtYmVyO1xuICBiaWdIb3VyPzogYm9vbGVhbjtcbiAgZW1wdHk6IGJvb2xlYW47XG4gIHVudXNlZFRva2Vuczogc3RyaW5nW107XG4gIHVudXNlZElucHV0OiBzdHJpbmdbXTtcbiAgb3ZlcmZsb3c6IG51bWJlcjtcbiAgY2hhcnNMZWZ0T3ZlcjogbnVtYmVyO1xuICBudWxsSW5wdXQ6IGJvb2xlYW47XG4gIGludmFsaWRNb250aDogYm9vbGVhbjtcbiAgaW52YWxpZFdlZWtkYXk/OiBib29sZWFuO1xuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuO1xuICB1c2VySW52YWxpZGF0ZWQ6IGJvb2xlYW47XG4gIGlzbzogYm9vbGVhbjtcbiAgcGFyc2VkRGF0ZVBhcnRzOiBEYXRlQXJyYXk7XG4gIG1lcmlkaWVtOiBzdHJpbmc7XG4gIHJmYzI4MjI6IGJvb2xlYW47XG4gIHdlZWtkYXlNaXNtYXRjaDogYm9vbGVhbjtcbn1cbiJdfQ==