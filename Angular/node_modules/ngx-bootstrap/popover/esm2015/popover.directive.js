/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PopoverContainerComponent } from './popover-container.component';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import { parseTriggers } from 'ngx-bootstrap/utils';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export class PopoverDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', (/**
             * @return {?}
             */
            function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            }));
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        /** @type {?} */
        const showPopover = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._popover
                .attach(PopoverContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.popover,
                context: this.popoverContext,
                placement: this.placement,
                title: this.popoverTitle,
                containerClass: this.containerClass
            });
            if (!this.adaptivePosition) {
                this._positionService.calcPosition();
                this._positionService.deletePositionElement(this._popover._componentRef.location);
            }
            this.isOpen = true;
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._popoverCancelShowFn) {
                this._popoverCancelShowFn();
            }
        });
        if (this.delay) {
            /** @type {?} */
            const _timer = timer(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showPopover();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showPopover();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
];
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: PopoverConfig },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: PositioningService }
];
PopoverDirective.propDecorators = {
    adaptivePosition: [{ type: Input }],
    popover: [{ type: Input }],
    popoverContext: [{ type: Input }],
    popoverTitle: [{ type: Input }],
    placement: [{ type: Input }],
    outsideClick: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    containerClass: [{ type: Input }],
    isOpen: [{ type: Input }],
    delay: [{ type: Input }],
    onShown: [{ type: Output }],
    onHidden: [{ type: Output }]
};
if (false) {
    /**
     * sets disable adaptive position
     * @type {?}
     */
    PopoverDirective.prototype.adaptivePosition;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    PopoverDirective.prototype.popover;
    /**
     * Context to be used if popover is a template.
     * @type {?}
     */
    PopoverDirective.prototype.popoverContext;
    /**
     * Title of a popover.
     * @type {?}
     */
    PopoverDirective.prototype.popoverTitle;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    PopoverDirective.prototype.placement;
    /**
     * Close popover on outside click
     * @type {?}
     */
    PopoverDirective.prototype.outsideClick;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     */
    PopoverDirective.prototype.container;
    /**
     * Css class for popover container
     * @type {?}
     */
    PopoverDirective.prototype.containerClass;
    /**
     * Delay before showing the tooltip
     * @type {?}
     */
    PopoverDirective.prototype.delay;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    PopoverDirective.prototype.onShown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    PopoverDirective.prototype.onHidden;
    /**
     * @type {?}
     * @protected
     */
    PopoverDirective.prototype._popoverCancelShowFn;
    /**
     * @type {?}
     * @protected
     */
    PopoverDirective.prototype._delayTimeoutId;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._popover;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._isInited;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUNyRSxTQUFTLEVBQWUsZ0JBQWdCLEVBQ3pDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFXLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFNN0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7O0lBZ0YzQixZQUNFLE9BQXNCLEVBQ2QsV0FBdUIsRUFDdkIsU0FBb0IsRUFDNUIsaUJBQW1DLEVBQ25DLEdBQTJCLEVBQ25CLGdCQUFvQztRQUpwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBR3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7Ozs7UUE3RHJDLGlCQUFZLEdBQUcsS0FBSyxDQUFDOzs7O1FBY3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBdUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBVXhCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRzthQUNoQixZQUFZLENBQ1gsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1Y7YUFDQSxPQUFPLENBQUMsRUFB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eEIsdUNBQStCOzs7OztJQUMvQixxQ0FBNEI7Ozs7O0lBRzVCLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCxcbiAgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcGFyc2VUcmlnZ2VycywgVHJpZ2dlciB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG4vKipcbiAqIEEgbGlnaHR3ZWlnaHQsIGV4dGVuc2libGUgZGlyZWN0aXZlIGZvciBmYW5jeSBwb3BvdmVyIGNyZWF0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1twb3BvdmVyXScsIGV4cG9ydEFzOiAnYnMtcG9wb3Zlcid9KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBzZXRzIGRpc2FibGUgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgQElucHV0KCkgYWRhcHRpdmVQb3NpdGlvbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBASW5wdXQoKSBwb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ29udGV4dCB0byBiZSB1c2VkIGlmIHBvcG92ZXIgaXMgYSB0ZW1wbGF0ZS5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDb250ZXh0OiBhbnk7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyVGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYXV0bycgfCAndG9wIGxlZnQnIHwgJ3RvcCByaWdodCcgfFxuICAgICdyaWdodCB0b3AnIHwgJ3JpZ2h0IGJvdHRvbScgfCAnYm90dG9tIHJpZ2h0JyB8ICdib3R0b20gbGVmdCcgfCAnbGVmdCBib3R0b20nIHwgJ2xlZnQgdG9wJztcbiAgLyoqXG4gICAqIENsb3NlIHBvcG92ZXIgb24gb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIHBvcG92ZXIgY29udGFpbmVyXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wb3Zlci5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgcHJvdGVjdGVkIF9wb3BvdmVyQ2FuY2VsU2hvd0ZuOiBGdW5jdGlvbjtcblxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBudW1iZXIgfCBhbnk7XG5cbiAgcHJpdmF0ZSBfcG9wb3ZlcjogQ29tcG9uZW50TG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9pc0luaXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9jb25maWc6IFBvcG92ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHtcbiAgICB0aGlzLl9wb3BvdmVyID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICBfZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIF9yZW5kZXJlclxuICAgICAgKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFBvcG92ZXJDb25maWcsIHVzZVZhbHVlOiBfY29uZmlnfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fcG9wb3Zlci5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9wb3BvdmVyLm9uSGlkZGVuO1xuXG4gICAgLy8gZml4OiBubyBmb2N1cyBvbiBidXR0b24gb24gTWFjIE9TICMxNzk1XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wb3BvdmVyLmlzU2hvd24gfHwgIXRoaXMucG9wb3ZlciB8fCB0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5hZGFwdGl2ZVBvc2l0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuYWRhcHRpdmVQb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG93UG9wb3ZlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9wb3ZlclxuICAgICAgICAuYXR0YWNoKFBvcG92ZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnBvcG92ZXIsXG4gICAgICAgICAgY29udGV4dDogdGhpcy5wb3BvdmVyQ29udGV4dCxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnBvcG92ZXJUaXRsZSxcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLmFkYXB0aXZlUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmNhbGNQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX3BvcG92ZXIuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvcG92ZXJDYW5jZWxTaG93Rm4pIHtcbiAgICAgICAgdGhpcy5fcG9wb3ZlckNhbmNlbFNob3dGbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2hvd1BvcG92ZXIoKTtcbiAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudHJpZ2dlcnMpIHtcbiAgICAgICAgcGFyc2VUcmlnZ2Vycyh0aGlzLnRyaWdnZXJzKVxuICAgICAgICAgIC5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wb3BvdmVyQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgIHRyaWdnZXIuY2xvc2UsXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBfdGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1BvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX3BvcG92ZXIuaGlkZSgpO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGZpeDogc2VlbXMgdGhlcmUgYXJlIGFuIGlzc3VlIHdpdGggYHJvdXRlckxpbmtBY3RpdmVgXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcbiAgICAvLyByZWFkIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwL2lzc3Vlcy8xODg1XG4gICAgaWYgKHRoaXMuX2lzSW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzSW5pdGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuX3BvcG92ZXIubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3BvdmVyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19