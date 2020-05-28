/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, ContentChildren, Directive, forwardRef, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
/** @type {?} */
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ButtonRadioGroupDirective)),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            buttons => {
                buttons.setDisabledState(disabled);
            }));
        }
    }
}
ButtonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ButtonRadioGroupDirective.propDecorators = {
    radioButtons: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => ButtonRadioDirective)),] }]
};
if (false) {
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.onChange;
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.onTouched;
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.radioButtons;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioGroupDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioGroupDirective.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFaEUsTUFBTSxPQUFPLDRCQUE0QixHQUFhO0lBQ3BELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7OztBQVVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFlcEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFkMUMsYUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFhYyxDQUFDOzs7O0lBVDlDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBTUQsVUFBVSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDOzs7O1lBekJDLGlCQUFpQjs7OzJCQThCaEIsZUFBZSxTQUFDLFVBQVU7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzs7OztJQUh2RCw2Q0FBOEI7O0lBQzlCLDhDQUErQjs7SUFFL0IsaURBQXVHOzs7OztJQVN2RywyQ0FBOEI7Ozs7O0lBRWxCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgZm9yd2FyZFJlZixcbiAgUHJvdmlkZXIsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQSBncm91cCBvZiByYWRpbyBidXR0b25zLlxuICogQSB2YWx1ZSBvZiBhIHNlbGVjdGVkIGJ1dHRvbiBpcyBib3VuZCB0byBhIHZhcmlhYmxlIHNwZWNpZmllZCB2aWEgbmdNb2RlbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2J0blJhZGlvR3JvdXBdJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpKSByYWRpb0J1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25SYWRpb0RpcmVjdGl2ZT47XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaChidXR0b25zID0+IHtcbiAgICAgICAgYnV0dG9ucy5zZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19