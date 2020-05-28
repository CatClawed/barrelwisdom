/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
/**
 * @record
 */
export function PositioningOptions() { }
if (false) {
    /**
     * The DOM element, ElementRef, or a selector string of an element which will be moved
     * @type {?|undefined}
     */
    PositioningOptions.prototype.element;
    /**
     * The DOM element, ElementRef, or a selector string of an element which the element will be attached to
     * @type {?|undefined}
     */
    PositioningOptions.prototype.target;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     * @type {?|undefined}
     */
    PositioningOptions.prototype.attachment;
    /**
     * A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetAttachment;
    /**
     * A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     * @type {?|undefined}
     */
    PositioningOptions.prototype.offset;
    /**
     * A string similar to `offset`, but referring to the offset of the target
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetOffset;
    /**
     * If true component will be attached to body
     * @type {?|undefined}
     */
    PositioningOptions.prototype.appendToBody;
}
export class PositioningService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory
     * @param {?} platformId
     */
    constructor(ngZone, rendererFactory, platformId) {
        this.update$$ = new Subject();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (isPlatformBrowser(platformId)) {
            ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.triggerEvent$ = merge(fromEvent(window, 'scroll', { passive: true }), fromEvent(window, 'resize', { passive: true }), 
                /* tslint:disable-next-line: deprecation */
                of(0, animationFrameScheduler), this.update$$);
                this.triggerEvent$.subscribe((/**
                 * @return {?}
                 */
                () => {
                    if (this.isDisabled) {
                        return;
                    }
                    this.positionElements
                        /* tslint:disable-next-line: no-any */
                        .forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    (positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
    }
    /**
     * @return {?}
     */
    get event$() {
        return this.triggerEvent$;
    }
    /**
     * @return {?}
     */
    disable() {
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    enable() {
        this.isDisabled = false;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @return {?}
     */
    calcPosition() {
        this.update$$.next();
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 },
    { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.update$$;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.positionElements;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.triggerEvent$;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.isDisabled;
}
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJwb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTFGLHdDQStCQzs7Ozs7O0lBN0JDLHFDQUE0Qzs7Ozs7SUFHNUMsb0NBQTJDOzs7Ozs7Ozs7SUFTM0Msd0NBQW9COzs7Ozs7SUFLcEIsOENBQTBCOzs7Ozs7SUFLMUIsb0NBQWdCOzs7OztJQUdoQiwwQ0FBc0I7Ozs7O0lBR3RCLDBDQUF1Qjs7QUFLekIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBTzdCLFlBQ0UsTUFBYyxFQUNkLGVBQWlDLEVBQ1osVUFBa0I7UUFSakMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUXpCLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFO2dCQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FDeEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLDJDQUEyQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7Z0JBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLE9BQU87cUJBQ1I7b0JBRUQsSUFBSSxDQUFDLGdCQUFnQjt3QkFDckIsc0NBQXNDO3lCQUNuQyxPQUFPOzs7O29CQUFDLENBQUMsZUFBb0IsRUFBRSxFQUFFO3dCQUNoQyxnQkFBZ0IsQ0FDZCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUN4QyxlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsWUFBWSxFQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUMzQyxDQUFDO29CQUNKLENBQUMsRUFBQyxDQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQTJCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQTJCO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFpQjtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7OztZQTVFRixVQUFVOzs7O1lBM0M2RCxNQUFNO1lBQTdDLGdCQUFnQjt5Q0FzRDVDLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBVHJCLHFDQUF5Qjs7Ozs7SUFDekIsc0NBQXVDOzs7OztJQUN2Qyw4Q0FBcUM7Ozs7O0lBQ3JDLDJDQUFnRDs7Ozs7SUFDaEQsd0NBQTJCOzs7Ozs7QUF5RTdCLFNBQVMsZUFBZSxDQUFDLE9BQTBDO0lBQ2pFLGtDQUFrQztJQUNsQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUMvQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEM7SUFFRCxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7UUFDakMsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDO0tBQzlCO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyRmFjdG9yeTIsIEluamVjdCwgUExBVEZPUk1fSUQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIG9mLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciwgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBtb3ZlZCAqL1xuICBlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byAgKi9cbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1hdHRhY2htZW50IGhvcml6LWF0dGFjaG1lbnQnIG9yICdwbGFjZW1lbnQnXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqIG5vdCB5ZXQgc3VwcG9ydGVkOlxuICAgKiAtIHZlcnQtYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbSdcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xuICAgKi9cbiAgYXR0YWNobWVudD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgYXR0YWNobWVudGAuIFRoZSBvbmUgZGlmZmVyZW5jZSBpcyB0aGF0LCBpZiBpdCdzIG5vdCBwcm92aWRlZCxcbiAgICogYHRhcmdldEF0dGFjaG1lbnRgIHdpbGwgYXNzdW1lIHRoZSBtaXJyb3IgaW1hZ2Ugb2YgYGF0dGFjaG1lbnRgLlxuICAgKi9cbiAgdGFyZ2V0QXR0YWNobWVudD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcbiAgICogLSB2ZXJ0LW9mZnNldCBhbmQgaG9yaXotb2Zmc2V0IGNhbiBiZSBvZiB0aGUgZm9ybSBcIjIwcHhcIiBvciBcIjU1JVwiXG4gICAqL1xuICBvZmZzZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYG9mZnNldGAsIGJ1dCByZWZlcnJpbmcgdG8gdGhlIG9mZnNldCBvZiB0aGUgdGFyZ2V0ICovXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcblxuICAvKiogSWYgdHJ1ZSBjb21wb25lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byBib2R5ICovXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gIHByaXZhdGUgb3B0aW9uczogT3B0aW9ucztcbiAgcHJpdmF0ZSB1cGRhdGUkJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XG4gIHByaXZhdGUgcG9zaXRpb25FbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQkOiBPYnNlcnZhYmxlPG51bWJlcnxFdmVudD47XG4gIHByaXZhdGUgaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBudW1iZXJcbiAgKSB7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50JCA9IG1lcmdlKFxuICAgICAgICAgIGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnLCB7IHBhc3NpdmU6IHRydWUgfSksXG4gICAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHsgcGFzc2l2ZTogdHJ1ZSB9KSxcbiAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgICAgb2YoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgICAgICAgIHRoaXMudXBkYXRlJCRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzXG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgICAgIC5mb3JFYWNoKChwb3NpdGlvbkVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICAgICAgICAgIF9nZXRIdG1sRWxlbWVudChwb3NpdGlvbkVsZW1lbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LmVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hdHRhY2htZW50LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hcHBlbmRUb0JvZHksXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9zaXRpb24ob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9ucyk7XG4gIH1cblxuICBnZXQgZXZlbnQkKCk6IE9ic2VydmFibGU8bnVtYmVyfEV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlckV2ZW50JDtcbiAgfVxuXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGVuYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZFBvc2l0aW9uRWxlbWVudChvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuc2V0KF9nZXRIdG1sRWxlbWVudChvcHRpb25zLmVsZW1lbnQpLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNhbGNQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSQkLm5leHQoKTtcbiAgfVxuXG4gIGRlbGV0ZVBvc2l0aW9uRWxlbWVudChlbFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5kZWxldGUoX2dldEh0bWxFbGVtZW50KGVsUmVmKSk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gIC8vIGl0IG1lYW5zIHRoYXQgd2UgZ290IGEgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl19