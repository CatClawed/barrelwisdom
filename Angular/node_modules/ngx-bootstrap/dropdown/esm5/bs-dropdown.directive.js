/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:max-file-line-count
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownState } from './bs-dropdown.state';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AnimationBuilder } from '@angular/animations';
import { dropdownAnimation } from './dropdown-animations';
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._state = _state;
        this._config = _config;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        this._state.isAnimated = this._config.isAnimated;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.isAnimated;
        },
        /**
         * Indicates that dropdown will be animated
         */
        set: /**
         * Indicates that dropdown will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         */
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toggle(value); })));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.hide(); })));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then((/**
                 * @param {?} dropdownMenu
                 * @return {?}
                 */
                function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                    _this._renderer.addClass(_this._inlinedMenu.rootNodes[0].parentNode, 'open');
                    _this.playAnimation();
                }))
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            this.playAnimation();
            return;
        }
        this._state.dropdownMenu.then((/**
         * @param {?} dropdownMenu
         * @return {?}
         */
        function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement || (_dropup ? 'top start' : 'bottom start');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        }))
            // swallow error
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    BsDropdownDirective.prototype._contains = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions and destroy dropdown
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
        this._dropdown.dispose();
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addBs4Polyfills = /**
     * @private
     * @return {?}
     */
    function () {
        if (!isBs3()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.playAnimation = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._state.isAnimated && this._inlinedMenu) {
            this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0])
                .play();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addShowClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.removeShowClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.checkRightAlignment = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            /** @type {?} */
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addDropupStyles = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.removeDropupStyles = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    };
    BsDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: BsDropdownState },
        { type: BsDropdownConfig },
        { type: AnimationBuilder }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        dropup: [{ type: Input }],
        autoClose: [{ type: Input }],
        isAnimated: [{ type: Input }],
        insideClick: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }]
    };
    return BsDropdownDirective;
}());
export { BsDropdownDirective };
if (false) {
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDropdownDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDropdownDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     */
    BsDropdownDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    BsDropdownDirective.prototype.dropup;
    /**
     * Emits an event when isOpen change
     * @type {?}
     */
    BsDropdownDirective.prototype.isOpenChange;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    BsDropdownDirective.prototype.onShown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    BsDropdownDirective.prototype.onHidden;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._dropdown;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._isInlineOpen;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._inlinedMenu;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._subscriptions;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._isInited;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._factoryDropDownAnimation;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._cis;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._state;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImJzLWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQW1CLHNCQUFzQixFQUFrQixNQUFNLGdDQUFnQyxDQUFDO0FBRXpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBeUlFLDZCQUNVLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGlCQUFtQyxFQUNuQyxJQUE0QixFQUM1QixNQUF1QixFQUN2QixPQUF5QixFQUNqQyxRQUEwQjtRQU5sQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7O1FBZDNCLGtCQUFhLEdBQUcs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QXlDOzs7OztJQUt6Qyx1Q0FBMEM7Ozs7O0lBTTFDLHdDQUFpRTs7Ozs7SUFPakUsNENBQThCOzs7OztJQUU5QiwyQ0FBK0Q7Ozs7O0lBQy9ELDBDQUE2Qjs7Ozs7SUFDN0IsNkNBQTRDOzs7OztJQUM1Qyx3Q0FBMEI7Ozs7O0lBQzFCLHdEQUFvRDs7Ozs7SUFHbEQsMENBQStCOzs7OztJQUMvQix3Q0FBNEI7Ozs7O0lBQzVCLGdEQUEyQzs7Ozs7SUFDM0MsbUNBQW9DOzs7OztJQUNwQyxxQ0FBK0I7Ozs7O0lBQy9CLHNDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQnNDb21wb25lbnRSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9icy1kcm9wZG93bi5jb25maWcnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZHJvcGRvd25BbmltYXRpb24gfSBmcm9tICcuL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXG4gICAgJ1tjbGFzcy5vcGVuXSc6ICdpc09wZW4nLFxuICAgICdbY2xhc3Muc2hvd10nOiAnaXNPcGVuICYmIGlzQnM0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHNcbiAgICovXG4gIEBJbnB1dCgpIGRyb3B1cDogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgZHJvcGRvd24gd2lsbCBiZSBjbG9zZWQgb24gaXRlbSBvciBkb2N1bWVudCBjbGljayxcbiAgICogYW5kIGFmdGVyIHByZXNzaW5nIEVTQ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGF1dG9DbG9zZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGF1dG9DbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuYXV0b0Nsb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgYW5pbWF0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpc0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGUuaXNBbmltYXRlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzQW5pbWF0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZG4ndCBjbG9zZSBvbiBpbnNpZGUgY2xpY2sgd2hlbiBhdXRvQ2xvc2UgaXMgc2V0IHRvIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpbnNpZGVDbGljayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaW5zaWRlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGRyb3Bkb3duIHRvZ2dsZSBhbmQgaGlkZXMgZHJvcGRvd24gbWVudSBpZiBvcGVuZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzSW5saW5lT3BlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd24uaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBpc09wZW4gY2hhbmdlXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZHJvcGRvd246IENvbXBvbmVudExvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwcml2YXRlIGdldCBfc2hvd0lubGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgLy8gdG9kbzogbW92ZSB0byBjb21wb25lbnQgbG9hZGVyXG4gIHByaXZhdGUgX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2lubGluZWRNZW51OiBFbWJlZGRlZFZpZXdSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+O1xuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9pc0luaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9mYWN0b3J5RHJvcERvd25BbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgIF9idWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge1xuICAgIC8vIHNldCBpbml0aWFsIGRyb3Bkb3duIHN0YXRlIGZyb20gY29uZmlnXG4gICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlID0gdGhpcy5fY29uZmlnLmF1dG9DbG9zZTtcbiAgICB0aGlzLl9zdGF0ZS5pbnNpZGVDbGljayA9IHRoaXMuX2NvbmZpZy5pbnNpZGVDbGljaztcbiAgICB0aGlzLl9zdGF0ZS5pc0FuaW1hdGVkID0gdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQ7XG5cbiAgICB0aGlzLl9mYWN0b3J5RHJvcERvd25BbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChkcm9wZG93bkFuaW1hdGlvbik7XG5cbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxuICAgIHRoaXMuX2Ryb3Bkb3duID0gdGhpcy5fY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlfSk7XG5cbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5vbkhpZGRlbjtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcbiAgICB0aGlzLl9kcm9wZG93bi5saXN0ZW4oe1xuICAgICAgLy8gYmVjYXVzZSBvZiBkcm9wZG93biBpbmxpbmUgbW9kZVxuICAgICAgb3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKVxuICAgICk7XG5cbiAgICAvLyBoaWRlIGRyb3Bkb3duIGlmIHNldCBkaXNhYmxlZCB3aGlsZSBvcGVuZWRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigodmFsdWU6IGJvb2xlYW4pID0+IHZhbHVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLmhpZGUoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIGlmICghdGhpcy5faW5saW5lZE1lbnUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oXG4gICAgICAgICAgKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kcm9wZG93bi5hdHRhY2hJbmxpbmUoXG4gICAgICAgICAgICAgIGRyb3Bkb3duTWVudS52aWV3Q29udGFpbmVyLFxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9pbmxpbmVkTWVudSA9IHRoaXMuX2Ryb3Bkb3duLl9pbmxpbmVWaWV3UmVmO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEJzNFBvbHlmaWxscygpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLnBhcmVudE5vZGUsICdvcGVuJyk7XG5cbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAvLyBzd2FsbG93IGVycm9yc1xuICAgICAgICAgIC5jYXRjaCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRCczRQb2x5ZmlsbHMoKTtcblxuICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG5cbiAgICAgIHRoaXMucGxheUFuaW1hdGlvbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudS50aGVuKGRyb3Bkb3duTWVudSA9PiB7XG4gICAgICAvLyBjaGVjayBkaXJlY3Rpb24gaW4gd2hpY2ggZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZFxuICAgICAgY29uc3QgX2Ryb3B1cCA9XG4gICAgICAgIHRoaXMuZHJvcHVwIHx8XG4gICAgICAgICh0eXBlb2YgdGhpcy5kcm9wdXAgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZHJvcHVwKTtcbiAgICAgIHRoaXMuX3N0YXRlLmRpcmVjdGlvbiA9IF9kcm9wdXAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgY29uc3QgX3BsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50IHx8IChfZHJvcHVwID8gJ3RvcCBzdGFydCcgOiAnYm90dG9tIHN0YXJ0Jyk7XG5cbiAgICAgIC8vIHNob3cgZHJvcGRvd25cbiAgICAgIHRoaXMuX2Ryb3Bkb3duXG4gICAgICAgIC5hdHRhY2goQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IF9wbGFjZW1lbnR9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLFxuICAgICAgICAgIHBsYWNlbWVudDogX3BsYWNlbWVudFxuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfSlcbiAgICAvLyBzd2FsbG93IGVycm9yXG4gICAgICAuY2F0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5yZW1vdmVTaG93Q2xhc3MoKTtcbiAgICAgIHRoaXMucmVtb3ZlRHJvcHVwU3R5bGVzKCk7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZHJvcGRvd24uaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLiBXaXRoIHBhcmFtZXRlciA8Y29kZT50cnVlPC9jb2RlPiBhbGxvd3MgdG9nZ2xpbmcsIHdpdGggcGFyYW1ldGVyIDxjb2RlPmZhbHNlPC9jb2RlPlxuICAgKiBvbmx5IGhpZGVzIG9wZW5lZCBkcm9wZG93bi4gUGFyYW1ldGVyIHVzYWdlIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZ3gtYm9vdHN0cmFwIHYzXG4gICAqL1xuICB0b2dnbGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbnRhaW5zKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICh0aGlzLl9kcm9wZG93bi5pbnN0YW5jZSAmJiB0aGlzLl9kcm9wZG93bi5pbnN0YW5jZS5fY29udGFpbnMoZXZlbnQudGFyZ2V0KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBkZXN0cm95IGRyb3Bkb3duXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX2Ryb3Bkb3duLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQnM0UG9seWZpbGxzKCk6IHZvaWQge1xuICAgIGlmICghaXNCczMoKSkge1xuICAgICAgdGhpcy5hZGRTaG93Q2xhc3MoKTtcbiAgICAgIHRoaXMuY2hlY2tSaWdodEFsaWdubWVudCgpO1xuICAgICAgdGhpcy5hZGREcm9wdXBTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYXlBbmltYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLmlzQW5pbWF0ZWQgJiYgdGhpcy5faW5saW5lZE1lbnUpIHtcbiAgICAgIHRoaXMuX2ZhY3RvcnlEcm9wRG93bkFuaW1hdGlvbi5jcmVhdGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKVxuICAgICAgICAucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU2hvd0NsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNob3dDbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0QWxpZ25tZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIGNvbnN0IGlzUmlnaHRBbGlnbmVkID0gdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICdhdXRvJyA6ICcwJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgIGlzUmlnaHRBbGlnbmVkID8gJzAnIDogJ2F1dG8nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcbiAgICAgIC8vIGEgbGl0dGxlIGhhY2sgdG8gbm90IGJyZWFrIHN1cHBvcnQgb2YgYm9vdHN0cmFwIDQgYmV0YVxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ2F1dG8nIDogJzEwMCUnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ3RyYW5zbGF0ZVkoLTEwMSUpJyA6ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXG4gICAgICAgICdib3R0b20nLFxuICAgICAgICAnYXV0bydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEcm9wdXBTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAndG9wJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICd0cmFuc2Zvcm0nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ2JvdHRvbScpO1xuICAgIH1cbiAgfVxufVxuIl19