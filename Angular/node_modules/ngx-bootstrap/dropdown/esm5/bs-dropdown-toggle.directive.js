/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        var _this = this;
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.isOpen = value;
            if (value) {
                _this._documentClickListener = _this._renderer.listen('document', 'click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (_this._state.autoClose && event.button !== 2 &&
                        !_this._element.nativeElement.contains(event.target) &&
                        !(_this._state.insideClick && _this._dropdown._contains(event))) {
                        _this._state.toggleClick.emit(false);
                        _this._changeDetectorRef.detectChanges();
                    }
                }));
                _this._escKeyUpListener = _this._renderer.listen(_this._element.nativeElement, 'keyup.esc', (/**
                 * @return {?}
                 */
                function () {
                    if (_this._state.autoClose) {
                        _this._state.toggleClick.emit(false);
                        _this._changeDetectorRef.detectChanges();
                    }
                }));
            }
            else {
                _this._documentClickListener();
                _this._escKeyUpListener();
            }
        })));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (_this.isDisabled = value || null); })));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        try {
            for (var _b = tslib_1.__values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: BsDropdownDirective },
        { type: ElementRef },
        { type: Renderer2 },
        { type: BsDropdownState }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
        isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        onClick: [{ type: HostListener, args: ['click', [],] }]
    };
    return BsDropdownToggleDirective;
}());
export { BsDropdownToggleDirective };
if (false) {
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isDisabled;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._subscriptions;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._documentClickListener;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._escKeyUpListener;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._dropdown;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._element;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDropdownToggleDirective.prototype._state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBRVosU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQWVFLG1DQUNVLGtCQUFxQyxFQUNyQyxTQUE4QixFQUM5QixRQUFvQixFQUNwQixTQUFvQixFQUNwQixNQUF1QjtRQUxqQyxpQkE0Q0M7UUEzQ1MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFaSCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBR2pELG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQVcxQyxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFDaEMsVUFBQyxLQUFjO1lBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPOzs7O2dCQUFFLFVBQUMsS0FBVTtvQkFDbEYsSUFBSSxLQUFJLENB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QUN0Qyw2Q0FBNEI7Ozs7O0lBQzVCLDhDQUE0Qjs7Ozs7SUFDNUIsMkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhhc3BvcHVwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKSBpc09wZW46IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfZXNjS2V5VXBMaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2Ryb3Bkb3duOiBCc0Ryb3Bkb3duRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlXG4gICkge1xuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcblxuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiYgZXZlbnQuYnV0dG9uICE9PSAyICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgISh0aGlzLl9zdGF0ZS5pbnNpZGVDbGljayAmJiB0aGlzLl9kcm9wZG93bi5fY29udGFpbnMoZXZlbnQpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9lc2NLZXlVcExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleXVwLmVzYycsICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlLmF1dG9DbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5fZXNjS2V5VXBMaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBwb3B1bGF0ZSBkaXNhYmxlZCBzdGF0ZVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZSB8fCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFtdKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lc2NLZXlVcExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9lc2NLZXlVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=