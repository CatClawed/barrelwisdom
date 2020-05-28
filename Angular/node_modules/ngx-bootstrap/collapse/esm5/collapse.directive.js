/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer, _builder) {
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
    Object.defineProperty(CollapseDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.collapseNewValue = value;
            if (!this._player || this._isAnimationDone) {
                this.isExpanded = value;
                this.toggle();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    };
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        function () {
            _this._isAnimationDone = true;
            if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
                _this.show();
                return;
            }
            _this.collapsed.emit(_this);
            _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
        }));
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () {
            _this._isAnimationDone = true;
            if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
                _this.hide();
                return;
            }
            _this.expanded.emit(_this);
            _this._renderer.removeStyle(_this._el.nativeElement, 'overflow');
        }));
    };
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    CollapseDirective.prototype.animationRun = /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    function (isAnimated, action) {
        var _this = this;
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            function (callback) { return callback(); });
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        var factoryAnimation = (action === this._EXPAND_ACTION_NAME)
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
        function (callback) { return _this._player.onDone(callback); });
    };
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
    CollapseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: AnimationBuilder }
    ]; };
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
    return CollapseDirective;
}());
export { CollapseDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUdqQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2hCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7SUF5RUUsMkJBQ1UsR0FBZSxFQUNmLFNBQW9CLEVBQzVCLFFBQTBCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXOzs7O1FBbEVwQixjQUFTLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFaEUsY0FBUyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRWhFLGFBQVEsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUvRCxZQUFPLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7O1FBS3hFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOztRQUVTLGdCQUFXLEdBQUcsS0FBSyxDQUFDOztRQUV0QixlQUFVLEdBQUcsSUFBSSxDQUFDOztRQUVoQixpQkFBWSxHQUFHLEtBQUssQ0FBQzs7OztRQXFCN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWVwQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBS25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLDBCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUNuQyx3QkFBbUIsR0FBRyxRQUFRLENBQUM7UUFPckMsSUFBSSxD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QUFNOzJCQUVOLE1BQU07MEJBRU4sTUFBTTs2QkFFTixXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsWUFBWSxjQUN4QixXQUFXLFNBQUMsb0JBQW9COzhCQUloQyxXQUFXLFNBQUMsa0JBQWtCOzZCQUU5QixXQUFXLFNBQUMsZ0JBQWdCOytCQUU1QixXQUFXLFNBQUMsa0JBQWtCOzBCQUU5QixLQUFLOzZCQW1CTCxLQUFLOzJCQUVMLEtBQUs7O0lBdUhSLHdCQUFDO0NBQUEsQUF6S0QsSUF5S0M7U0FsS1ksaUJBQWlCOzs7Ozs7SUFFNUIsc0NBQTBFOzs7OztJQUUxRSxzQ0FBMEU7Ozs7O0lBRTFFLHFDQUF5RTs7Ozs7SUFFekUsb0NBQXdFOztJQUV4RSx1Q0FHa0I7O0lBQ2xCLDZDQUF3Qjs7SUFFeEIsd0NBQXFEOztJQUVyRCx1Q0FBaUQ7O0lBRWpELHlDQUFzRDs7Ozs7SUFxQnRELHVDQUE0Qjs7Ozs7SUFlNUIscUNBQTJCOzs7OztJQUMzQixzREFBb0Q7Ozs7O0lBQ3BELG9EQUFrRDs7Ozs7SUFDbEQsNkNBQWtDOzs7OztJQUNsQyxvQ0FBaUM7Ozs7O0lBQ2pDLDBDQUE4Qjs7Ozs7SUFFOUIsa0RBQTJDOzs7OztJQUMzQyxnREFBdUM7Ozs7O0lBR3JDLGdDQUF1Qjs7Ozs7SUFDdkIsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW5pbWF0aW9uQnVpbGRlcixcbiAgQW5pbWF0aW9uRmFjdG9yeSxcbiAgQW5pbWF0aW9uUGxheWVyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY29sbGFwc2VBbmltYXRpb24sXG4gIGV4cGFuZEFuaW1hdGlvblxufSBmcm9tICcuL2NvbGxhcHNlLWFuaW1hdGlvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBjb2xsYXBzZXMgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBjb2xsYXBzaW5nIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlczogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gZXhwYW5zaW9uIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGV4cGFuZHM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHNob3duXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGlzRXhwYW5kZWQgPSB0cnVlO1xuICBjb2xsYXBzZU5ld1ZhbHVlID0gdHJ1ZTtcbiAgLy8gaGlkZGVuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhpZGRlbicpIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIC8vIHN0YWxlIHN0YXRlXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2UnKSBpc0NvbGxhcHNlID0gdHJ1ZTtcbiAgLy8gYW5pbWF0aW9uIHN0YXRlXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2luZycpIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNwbGF5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwbGF5ID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgPT09ICdub25lJykge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIEBJbnB1dCgpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgLyoqIEEgZmxhZyBpbmRpY2F0aW5nIHZpc2liaWxpdHkgb2YgY29udGVudCAoc2hvd24gb3IgaGlkZGVuKSAqL1xuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbGxhcHNlTmV3VmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuX3BsYXllciB8fCB0aGlzLl9pc0FuaW1hdGlvbkRvbmUpIHtcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BsYXkgPSAnYmxvY2snO1xuICBwcml2YXRlIF9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgX2ZhY3RvcnlFeHBhbmRBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uRG9uZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgX3N0eWxlc0xvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX0NPTExBUFNFX0FDVElPTl9OQU1FID0gJ2NvbGxhcHNlJztcbiAgcHJpdmF0ZSBfRVhQQU5EX0FDVElPTl9OQU1FID0gJ2V4cGFuZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHtcbiAgICB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChjb2xsYXBzZUFuaW1hdGlvbik7XG4gICAgdGhpcy5fZmFjdG9yeUV4cGFuZEFuaW1hdGlvbiA9IF9idWlsZGVyLmJ1aWxkKGV4cGFuZEFuaW1hdGlvbik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3R5bGVzTG9hZGVkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5fcGxheWVyIHx8ICF0aGlzLl9pc0FuaW1hdGlvbkRvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wbGF5ZXIucmVzZXQoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJyonKTtcbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbGxhcHNlcy5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy5faXNBbmltYXRpb25Eb25lID0gZmFsc2U7XG5cbiAgICB0aGlzLmFuaW1hdGlvblJ1bih0aGlzLmlzQW5pbWF0ZWQsIHRoaXMuX0NPTExBUFNFX0FDVElPTl9OQU1FKSgoKSA9PiB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2VOZXdWYWx1ZSAhPT0gdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9KTtcbiAgfVxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHNob3cgY29sbGFwc2VkIGNvbnRlbnQgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXkpO1xuXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmV4cGFuZHMuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMuX2lzQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uUnVuKHRoaXMuaXNBbmltYXRlZCwgdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKSgoKSA9PiB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2VOZXdWYWx1ZSAhPT0gdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgfSk7XG4gIH1cblxuICBhbmltYXRpb25SdW4oaXNBbmltYXRlZDogYm9vbGVhbiwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQgfHwgIXRoaXMuX3N0eWxlc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlJyk7XG5cbiAgICBjb25zdCBmYWN0b3J5QW5pbWF0aW9uID0gKGFjdGlvbiA9PT0gdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKVxuICAgICAgPyB0aGlzLl9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uXG4gICAgICA6IHRoaXMuX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjtcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGxheWVyID0gZmFjdG9yeUFuaW1hdGlvbi5jcmVhdGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcblxuICAgIHJldHVybiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHRoaXMuX3BsYXllci5vbkRvbmUoY2FsbGJhY2spO1xuICB9XG59XG4iXX0=