import { style, animate, AnimationBuilder } from '@angular/animations';
import { EventEmitter, Directive, ElementRef, Renderer2, Output, HostBinding, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
const expandAnimation = [
    style({ height: 0, visibility: 'hidden' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
const collapseAnimation = [
    style({ height: '*', visibility: 'visible' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        /**
         * This event fires when expansion is started
         */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        }));
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        }));
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => callback());
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => this._player.onDone(callback));
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: AnimationBuilder }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: Output }],
    collapses: [{ type: Output }],
    expanded: [{ type: Output }],
    expands: [{ type: Output }],
    isExpanded: [{ type: HostBinding, args: ['class.in',] }, { type: HostBinding, args: ['class.show',] }, { type: HostBinding, args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: HostBinding, args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: HostBinding, args: ['class.collapse',] }],
    isCollapsing: [{ type: HostBinding, args: ['class.collapsing',] }],
    display: [{ type: Input }],
    isAnimated: [{ type: Input }],
    collapse: [{ type: Input }]
};
if (false) {
    /**
     * This event fires as soon as content collapses
     * @type {?}
     */
    CollapseDirective.prototype.collapsed;
    /**
     * This event fires when collapsing is started
     * @type {?}
     */
    CollapseDirective.prototype.collapses;
    /**
     * This event fires as soon as content becomes visible
     * @type {?}
     */
    CollapseDirective.prototype.expanded;
    /**
     * This event fires when expansion is started
     * @type {?}
     */
    CollapseDirective.prototype.expands;
    /** @type {?} */
    CollapseDirective.prototype.isExpanded;
    /** @type {?} */
    CollapseDirective.prototype.collapseNewValue;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsed;
    /** @type {?} */
    CollapseDirective.prototype.isCollapse;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsing;
    /**
     * turn on/off animation
     * @type {?}
     */
    CollapseDirective.prototype.isAnimated;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._display;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._factoryCollapseAnimation;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._factoryExpandAnimation;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._isAnimationDone;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._player;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._stylesLoaded;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._COLLAPSE_ACTION_NAME;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._EXPAND_ACTION_NAME;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype._renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
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

export { CollapseDirective, CollapseModule };
//# sourceMappingURL=ngx-bootstrap-collapse.js.map
