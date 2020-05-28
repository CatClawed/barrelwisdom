/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
export function zeroFill(num, targetLength, forceSign) {
    /** @type {?} */
    var absNumber = "" + Math.abs(num);
    /** @type {?} */
    var zerosToFill = targetLength - absNumber.length;
    /** @type {?} */
    var sign = num >= 0;
    /** @type {?} */
    var _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    /** @type {?} */
    var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVcsRUFDWCxZQUFvQixFQUNwQixTQUFtQjs7UUFDcEMsU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUc7O1FBQzlCLFdBQVcsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU07O1FBQzdDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQzs7UUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7O1FBRTNDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFMUUsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB6ZXJvRmlsbChudW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNpZ24/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgYWJzTnVtYmVyID0gYCR7TWF0aC5hYnMobnVtKX1gO1xuICBjb25zdCB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGg7XG4gIGNvbnN0IHNpZ24gPSBudW0gPj0gMDtcbiAgY29uc3QgX3NpZ24gPSBzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJztcbiAgLy8gdG9kbzogdGhpcyBpcyBjcmF6eSBzbG93XG4gIGNvbnN0IF96ZXJvcyA9IE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiAoX3NpZ24gKyBfemVyb3MgKyBhYnNOdW1iZXIpO1xufVxuIl19