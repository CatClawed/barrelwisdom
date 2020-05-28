/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.resolveDropdownMenu = resolve;
        }));
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
export { BsDropdownState };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBaUJFO1FBQUEsaUJBSUM7UUFuQkQsY0FBUyxHQUFrQixNQUFNLENBQUM7UUFJbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBVXhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3JDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyQkYsVUFBVTs7OztJQXNCWCxzQkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGVBQWU7OztJQUMxQixvQ0FBa0M7O0lBQ2xDLG9DQUFtQjs7SUFDbkIsc0NBQXFCOztJQUNyQixxQ0FBb0I7O0lBQ3BCLHVDQUEyQzs7SUFDM0MsMkNBQStDOztJQUMvQyxzQ0FBMEM7Ozs7O0lBTTFDLHVDQUEyQzs7SUFDM0MsOENBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duU3RhdGUge1xuICBkaXJlY3Rpb246ICdkb3duJyB8ICd1cCcgPSAnZG93bic7XG4gIGF1dG9DbG9zZTogYm9vbGVhbjtcbiAgaW5zaWRlQ2xpY2s6IGJvb2xlYW47XG4gIGlzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gIGlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgaXNEaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgdG9nZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbiAgZHJvcGRvd25NZW51OiBQcm9taXNlPEJzQ29tcG9uZW50UmVmPGFueT4+O1xuICByZXNvbHZlRHJvcGRvd25NZW51OiAoY29tcG9uZW50UmVmOiBCc0NvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJvcGRvd25NZW51ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVEcm9wZG93bk1lbnUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=