import { Injectable, Component, ChangeDetectionStrategy, Input, Directive, ElementRef, Renderer2, ViewContainerRef, Output, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { isBs3, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
PopoverConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * sets disable adaptive position
     * @type {?}
     */
    PopoverConfig.prototype.adaptivePosition;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     * @type {?}
     */
    PopoverConfig.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverConfig.prototype.triggers;
    /** @type {?} */
    PopoverConfig.prototype.outsideClick;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     */
    PopoverConfig.prototype.container;
    /**
     * delay before showing the tooltip
     * @type {?}
     */
    PopoverConfig.prototype.delay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule };
//# sourceMappingURL=ngx-bootstrap-popover.js.map
