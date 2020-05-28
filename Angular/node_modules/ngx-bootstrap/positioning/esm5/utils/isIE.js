/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Determines if the browser is Internet Explorer
 */
import { isBrowser } from './isBrowser';
/** @type {?} */
var isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
var isIE10 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && /MSIE 10/.test(((/** @type {?} */ (navigator))).userAgent));
/**
 * @param {?=} version
 * @return {?}
 */
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJRS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9pc0lFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQUVsQyxNQUFNLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLG1CQUFBLFFBQVEsRUFBTyxDQUFDLENBQUMsWUFBWSxDQUFDOztJQUNoRyxNQUFNLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0IsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7QUFFcEgsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUFnQjtJQUNuQyxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqL1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIChkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSk7XG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIC9NU0lFIDEwLy50ZXN0KChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnQpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbj86IG51bWJlcikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cblxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cbiJdfQ==