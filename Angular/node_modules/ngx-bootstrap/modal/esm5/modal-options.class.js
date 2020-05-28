/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
if (false) {
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.animated;
    /**
     * Modal data
     * @type {?}
     */
    ModalOptions.prototype.initialState;
    /**
     * Modal providers
     * @type {?}
     */
    ModalOptions.prototype.providers;
    /**
     * aria-labelledby attribute value to set on the modal window
     * @type {?}
     */
    ModalOptions.prototype.ariaLabelledBy;
    /**
     * aria-describedby attribute value to set on the modal window
     * @type {?}
     */
    ModalOptions.prototype.ariaDescribedby;
}
/** @type {?} */
export var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
export var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
export var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
export var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUczRDtJQUFBO0lBNkNBLENBQUM7O2dCQTdDQSxVQUFVOztJQTZDWCxtQkFBQztDQUFBLEFBN0NELElBNkNDO1NBNUNZLFlBQVk7Ozs7Ozs7SUFLdkIsZ0NBQThCOzs7OztJQUk5QixnQ0FBbUI7O0lBRW5CLDZCQUFnQjs7Ozs7SUFJaEIsNEJBQWU7Ozs7O0lBSWYsMkNBQThCOzs7OztJQUk5Qiw2QkFBZTs7Ozs7SUFJZixnQ0FBbUI7Ozs7O0lBSW5CLG9DQUFzQjs7Ozs7SUFJdEIsaUNBQTZCOzs7OztJQUk3QixzQ0FBd0I7Ozs7O0lBSXhCLHVDQUF5Qjs7O0FBSTNCLE1BQU0sS0FBTyxtQkFBbUIsR0FBaUI7SUFDL0MsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLElBQUk7SUFDZCxZQUFZLEVBQUUsRUFBRTtDQUNqQjs7QUFFRCxNQUFNLEtBQU8sVUFBVSxHQUFjO0lBQ25DLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO0NBQ3BCOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWE7SUFDaEMsTUFBTSxFQUFFLGVBQWU7SUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLGFBQWEsRUFBRSxvREFBb0Q7Q0FDcEU7O0FBRUQsTUFBTSxLQUFPLG9CQUFvQixHQUF3QjtJQUN2RCxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O0FBRUQsTUFBTSxLQUFPLGVBQWUsR0FBbUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixHQUFHLEVBQUUsS0FBSztDQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXNzTmFtZSwgRGlzbWlzc1JlYXNvbnMsIFNlbGVjdG9yLCBUcmFuc2l0aW9uRHVyYXRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksXG4gICAqICBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNb2RhbCBkYXRhXG4gICAqL1xuICBpbml0aWFsU3RhdGU/OiBPYmplY3Q7XG4gIC8qKlxuICAgKiBNb2RhbCBwcm92aWRlcnNcbiAgICovXG4gIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG4gIC8qKlxuICAgKiBhcmlhLWxhYmVsbGVkYnkgYXR0cmlidXRlIHZhbHVlIHRvIHNldCBvbiB0aGUgbW9kYWwgd2luZG93XG4gICAqL1xuICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcbiAgLyoqXG4gICAqIGFyaWEtZGVzY3JpYmVkYnkgYXR0cmlidXRlIHZhbHVlIHRvIHNldCBvbiB0aGUgbW9kYWwgd2luZG93XG4gICAqL1xuICBhcmlhRGVzY3JpYmVkYnk/OiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogZmFsc2UsXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBjbGFzczogJycsXG4gIGFuaW1hdGVkOiB0cnVlLFxuICBpbml0aWFsU3RhdGU6IHt9XG59O1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsIC8vIGJzM1xuICBTSE9XOiAnc2hvdycgLy8gYnM0XG59O1xuXG5leHBvcnQgY29uc3QgU0VMRUNUT1I6IFNlbGVjdG9yID0ge1xuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OUzogVHJhbnNpdGlvbkR1cmF0aW9ucyA9IHtcbiAgTU9EQUw6IDMwMCxcbiAgQkFDS0RST1A6IDE1MFxufTtcblxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUzogRGlzbWlzc1JlYXNvbnMgPSB7XG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICBFU0M6ICdlc2MnXG59O1xuIl19