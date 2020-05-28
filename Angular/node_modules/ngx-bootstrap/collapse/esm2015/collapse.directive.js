/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
export class CollapseDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUdqQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2hCLE1BQU0sdUJBQXVCLENBQUM7QUFTL0IsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBa0U1QixZQUNVLEdBQWUsRUFDZixTQUFvQixFQUM1QixRQUEwQjtRQUZsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVzs7OztRQWxFcEIsY0FBUyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRWhFLGNBQVMsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUVoRSxhQUFRLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFL0QsWUFBTyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQUt4RSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7UUFFUyxnQkFBVyxHQUFHLEtBQUssQ0FBQzs7UUFFdEIsZUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7Ozs7UUFxQjdDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFlcEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUtuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QiwwQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcs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QkFBZ0I7MkJBRTVCLFdBQVcsU0FBQyxrQkFBa0I7c0JBRTlCLEtBQUs7eUJBbUJMLEtBQUs7dUJBRUwsS0FBSzs7Ozs7OztJQXpDTixzQ0FBMEU7Ozs7O0lBRTFFLHNDQUEwRTs7Ozs7SUFFMUUscUNBQXlFOzs7OztJQUV6RSxvQ0FBd0U7O0lBRXhFLHVDQUdrQjs7SUFDbEIsNkNBQXdCOztJQUV4Qix3Q0FBcUQ7O0lBRXJELHVDQUFpRDs7SUFFakQseUNBQXNEOzs7OztJQXFCdEQsdUNBQTRCOzs7OztJQWU1QixxQ0FBMkI7Ozs7O0lBQzNCLHNEQUFvRDs7Ozs7SUFDcEQsb0RBQWtEOzs7OztJQUNsRCw2Q0FBa0M7Ozs7O0lBQ2xDLG9DQUFpQzs7Ozs7SUFDakMsMENBQThCOzs7OztJQUU5QixrREFBMkM7Ozs7O0lBQzNDLGdEQUF1Qzs7Ozs7SUFHckMsZ0NBQXVCOzs7OztJQUN2QixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbmltYXRpb25CdWlsZGVyLFxuICBBbmltYXRpb25GYWN0b3J5LFxuICBBbmltYXRpb25QbGF5ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjb2xsYXBzZUFuaW1hdGlvbixcbiAgZXhwYW5kQW5pbWF0aW9uXG59IGZyb20gJy4vY29sbGFwc2UtYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nLFxuICBleHBvcnRBczogJ2JzLWNvbGxhcHNlJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuY29sbGFwc2VdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGNvbGxhcHNlcyAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8Q29sbGFwc2VEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGNvbGxhcHNpbmcgaXMgc3RhcnRlZCAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VzOiBFdmVudEVtaXR0ZXI8Q29sbGFwc2VEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgYmVjb21lcyB2aXNpYmxlICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBleHBhbnNpb24gaXMgc3RhcnRlZCAqL1xuICBAT3V0cHV0KCkgZXhwYW5kczogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gc2hvd25cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgaXNFeHBhbmRlZCA9IHRydWU7XG4gIGNvbGxhcHNlTmV3VmFsdWUgPSB0cnVlO1xuICAvLyBoaWRkZW5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJykgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgLy8gc3RhbGUgc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xuICAvLyBhbmltYXRpb24gc3RhdGVcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzaW5nJykgaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc3BsYXkodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3BsYXkgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29sbGFwc2VOZXdWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5fcGxheWVyIHx8IHRoaXMuX2lzQW5pbWF0aW9uRG9uZSkge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2xsYXBzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcGxheSA9ICdibG9jayc7XG4gIHByaXZhdGUgX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeTtcbiAgcHJpdmF0ZSBfZmFjdG9yeUV4cGFuZEFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeTtcbiAgcHJpdmF0ZSBfaXNBbmltYXRpb25Eb25lOiBib29sZWFuO1xuICBwcml2YXRlIF9wbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfQ09MTEFQU0VfQUNUSU9OX05BTUUgPSAnY29sbGFwc2UnO1xuICBwcml2YXRlIF9FWFBBTkRfQUNUSU9OX05BTUUgPSAnZXhwYW5kJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9idWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge1xuICAgIHRoaXMuX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbiA9IF9idWlsZGVyLmJ1aWxkKGNvbGxhcHNlQW5pbWF0aW9uKTtcbiAgICB0aGlzLl9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uID0gX2J1aWxkZXIuYnVpbGQoZXhwYW5kQW5pbWF0aW9uKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdHlsZXNMb2FkZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLl9wbGF5ZXIgfHwgIXRoaXMuX2lzQW5pbWF0aW9uRG9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYXllci5yZXNldCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnKicpO1xuICB9XG5cbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgY29udGVudCB2aXNpYmlsaXR5ICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBoaWRlIGNvbnRlbnQgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuY29sbGFwc2VzLmVtaXQodGhpcyk7XG5cbiAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSBmYWxzZTtcblxuICAgIHRoaXMuYW5pbWF0aW9uUnVuKHRoaXMuaXNBbmltYXRlZCwgdGhpcy5fQ09MTEFQU0VfQUNUSU9OX05BTUUpKCgpID0+IHtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uRG9uZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jb2xsYXBzZU5ld1ZhbHVlICE9PSB0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0pO1xuICB9XG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgc2hvdyBjb2xsYXBzZWQgY29udGVudCAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5fZGlzcGxheSk7XG5cbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZXhwYW5kcy5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy5faXNBbmltYXRpb25Eb25lID0gZmFsc2U7XG4gICAgdGhpcy5hbmltYXRpb25SdW4odGhpcy5pc0FuaW1hdGVkLCB0aGlzLl9FWFBBTkRfQUNUSU9OX05BTUUpKCgpID0+IHtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uRG9uZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jb2xsYXBzZU5ld1ZhbHVlICE9PSB0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuaXNBbmltYXRlZCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGlvblJ1bihpc0FuaW1hdGVkOiBib29sZWFuLCBhY3Rpb246IHN0cmluZykge1xuICAgIGlmICghaXNBbmltYXRlZCB8fCAhdGhpcy5fc3R5bGVzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY29sbGFwc2UnKTtcblxuICAgIGNvbnN0IGZhY3RvcnlBbmltYXRpb24gPSAoYWN0aW9uID09PSB0aGlzLl9FWFBBTkRfQUNUSU9OX05BTUUpXG4gICAgICA/IHRoaXMuX2ZhY3RvcnlFeHBhbmRBbmltYXRpb25cbiAgICAgIDogdGhpcy5fZmFjdG9yeUNvbGxhcHNlQW5pbWF0aW9uO1xuXG4gICAgaWYgKHRoaXMuX3BsYXllcikge1xuICAgICAgdGhpcy5fcGxheWVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wbGF5ZXIgPSBmYWN0b3J5QW5pbWF0aW9uLmNyZWF0ZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xuXG4gICAgcmV0dXJuIChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdGhpcy5fcGxheWVyLm9uRG9uZShjYWxsYmFjayk7XG4gIH1cbn1cbiJdfQ==