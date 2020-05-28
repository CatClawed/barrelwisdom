/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
const win = (typeof window !== 'undefined' && window) || (/** @type {?} */ ({}));
export { win as window };
/** @type {?} */
export const document = win.document;
/** @type {?} */
export const location = win.location;
/** @type {?} */
export const gc = win.gc ? (/**
 * @return {?}
 */
() => win.gc()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
export const performance = win.performance ? win.performance : null;
/** @type {?} */
export const Event = win.Event;
/** @type {?} */
export const MouseEvent = win.MouseEvent;
/** @type {?} */
export const KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
export const EventTarget = win.EventTarget;
/** @type {?} */
export const History = win.History;
/** @type {?} */
export const Location = win.Location;
/** @type {?} */
export const EventListener = win.EventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFXTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksbUJBQUEsRUFBRSxFQUFPO0FBRWxFLE9BQU8sRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBQ3pCLE1BQU0sT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O0FBQ3BDLE1BQU0sT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O0FBQ3BDLE1BQU0sT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7QUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQzs7O0FBQUMsR0FBUSxFQUFFLENBQUMsSUFBSSxDQUFBOztBQUMzRCxNQUFNLE9BQU8sV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7O0FBQ25FLE1BQU0sT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUs7O0FBQzlCLE1BQU0sT0FBTyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVU7O0FBQ3hDLE1BQU0sT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWE7O0FBQzlDLE1BQU0sT0FBTyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVc7O0FBQzFDLE1BQU0sT0FBTyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU87O0FBQ2xDLE1BQU0sT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O0FBQ3BDLE1BQU0sT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbmNvbnN0IHdpbiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8IHt9IGFzIGFueTtcblxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IGdjID0gd2luLmdjID8gKCkgPT4gd2luLmdjKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgY29uc3QgcGVyZm9ybWFuY2UgPSB3aW4ucGVyZm9ybWFuY2UgPyB3aW4ucGVyZm9ybWFuY2UgOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luLkV2ZW50O1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW4uTW91c2VFdmVudDtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luLktleWJvYXJkRXZlbnQ7XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW4uRXZlbnRUYXJnZXQ7XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpbi5IaXN0b3J5O1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luLkxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW4uRXZlbnRMaXN0ZW5lcjtcbiJdfQ==