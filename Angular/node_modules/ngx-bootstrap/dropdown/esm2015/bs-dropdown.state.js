/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
export class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.resolveDropdownMenu = resolve;
        }));
    }
}
BsDropdownState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    BsDropdownState.prototype.direction;
    /** @type {?} */
    BsDropdownState.prototype.autoClose;
    /** @type {?} */
    BsDropdownState.prototype.insideClick;
    /** @type {?} */
    BsDropdownState.prototype.isAnimated;
    /** @type {?} */
    BsDropdownState.prototype.isOpenChange;
    /** @type {?} */
    BsDropdownState.prototype.isDisabledChange;
    /** @type {?} */
    BsDropdownState.prototype.toggleClick;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    BsDropdownState.prototype.dropdownMenu;
    /** @type {?} */
    BsDropdownState.prototype.resolveDropdownMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpELE1BQU0sT0FBTyxlQUFlO0lBZ0IxQjtRQWZBLGNBQVMsR0FBa0IsTUFBTSxDQUFDO1FBSWxDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVV4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyQkYsVUFBVTs7Ozs7O0lBRVQsb0NBQWtDOztJQUNsQyxvQ0FBbUI7O0lBQ25CLHNDQUFxQjs7SUFDckIscUNBQW9COztJQUNwQix1Q0FBMkM7O0lBQzNDLDJDQUErQzs7SUFDL0Msc0NBQTBDOzs7OztJQU0xQyx1Q0FBMkM7O0lBQzNDLDhDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blN0YXRlIHtcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xuICBhdXRvQ2xvc2U6IGJvb2xlYW47XG4gIGluc2lkZUNsaWNrOiBib29sZWFuO1xuICBpc0FuaW1hdGVkOiBib29sZWFuO1xuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHRvZ2dsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGRyb3Bkb3duTWVudTogUHJvbWlzZTxCc0NvbXBvbmVudFJlZjxhbnk+PjtcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19