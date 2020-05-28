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
var PositioningService = /** @class */ (function () {
    function PositioningService(ngZone, rendererFactory, platformId) {
        var _this = this;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (isPlatformBrowser(platformId)) {
            ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.triggerEvent$ = merge(fromEvent(window, 'scroll', { passive: true }), fromEvent(window, 'resize', { passive: true }), 
                /* tslint:disable-next-line: deprecation */
                of(0, animationFrameScheduler), _this.update$$);
                _this.triggerEvent$.subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (_this.isDisabled) {
                        return;
                    }
                    _this.positionElements
                        /* tslint:disable-next-line: no-any */
                        .forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    function (positionElement) {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.addPositionElement(options);
    };
    Object.defineProperty(PositioningService.prototype, "event$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.triggerEvent$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PositioningService.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.isDisabled = true;
    };
    /**
     * @return {?}
     */
    PositioningService.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.isDisabled = false;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.addPositionElement = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    /**
     * @return {?}
     */
    PositioningService.prototype.calcPosition = /**
     * @return {?}
     */
    function () {
        this.update$$.next();
    };
    /**
     * @param {?} elRef
     * @return {?}
     */
    PositioningService.prototype.deletePositionElement = /**
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = options;
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 },
        { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return PositioningService;
}());
export { PositioningService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJwb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTFGLHdDQStCQzs7Ozs7O0lBN0JDLHFDQUE0Qzs7Ozs7SUFHNUMsb0NBQTJDOzs7Ozs7Ozs7SUFTM0Msd0NBQW9COzs7Ozs7SUFLcEIsOENBQTBCOzs7Ozs7SUFLMUIsb0NBQWdCOzs7OztJQUdoQiwwQ0FBc0I7Ozs7O0lBR3RCLDBDQUF1Qjs7QUFJekI7SUFRRSw0QkFDRSxNQUFjLEVBQ2QsZUFBaUMsRUFDWixVQUFrQjtRQUh6QyxpQkFvQ0M7UUF6Q08sYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUXpCLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUN4QixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUM5QyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsMkNBQTJDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLEVBQzlCLEtBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztnQkFFRixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7OztnQkFBQztvQkFDM0IsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNuQixPQUFPO3FCQUNSO29CQUVELEtBQUksQ0FBQyxnQkFBZ0I7d0JBQ3JCLHNDQUFzQzt5QkFDbkMsT0FBTzs7OztvQkFBQyxVQUFDLGVBQW9CO3dCQUM1QixnQkFBZ0IsQ0FDZCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUN4QyxlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsWUFBWSxFQUM1QixLQUFJLENBQUMsT0FBTyxFQUNaLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUMzQyxDQUFDO29CQUNKLENBQUMsRUFBQyxDQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLE9BQTJCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksc0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxtQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixPQUEyQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELHlDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxrREFBcUI7Ozs7SUFBckIsVUFBc0IsS0FBaUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOztnQkE1RUYsVUFBVTs7OztnQkEzQzZELE1BQU07Z0JBQTdDLGdCQUFnQjs2Q0FzRDVDLE1BQU0sU0FBQyxXQUFXOztJQWtFdkIseUJBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQTVFWSxrQkFBa0I7Ozs7OztJQUM3QixxQ0FBeUI7Ozs7O0lBQ3pCLHNDQUF1Qzs7Ozs7SUFDdkMsOENBQXFDOzs7OztJQUNyQywyQ0FBZ0Q7Ozs7O0lBQ2hELHdDQUEyQjs7Ozs7O0FBeUU3QixTQUFTLGVBQWUsQ0FBQyxPQUEwQztJQUNqRSxrQ0FBa0M7SUFDbEMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDL0IsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxPQUFPLFlBQVksVUFBVSxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztLQUM5QjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBSZW5kZXJlckZhY3RvcnkyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgcG9zaXRpb25FbGVtZW50cyB9IGZyb20gJy4vbmctcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbmluZ09wdGlvbnMge1xuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgbW92ZWQgKi9cbiAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcblxuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gICovXG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xuICAgKiAtIHBsYWNlbWVudCBjYW4gYmUgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKiBub3QgeWV0IHN1cHBvcnRlZDpcbiAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXG4gICAqIC0gaG9yaXotYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCdcbiAgICovXG4gIGF0dGFjaG1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYGF0dGFjaG1lbnRgLiBUaGUgb25lIGRpZmZlcmVuY2UgaXMgdGhhdCwgaWYgaXQncyBub3QgcHJvdmlkZWQsXG4gICAqIGB0YXJnZXRBdHRhY2htZW50YCB3aWxsIGFzc3VtZSB0aGUgbWlycm9yIGltYWdlIG9mIGBhdHRhY2htZW50YC5cbiAgICovXG4gIHRhcmdldEF0dGFjaG1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LW9mZnNldCBob3Jpei1vZmZzZXQnXG4gICAqIC0gdmVydC1vZmZzZXQgYW5kIGhvcml6LW9mZnNldCBjYW4gYmUgb2YgdGhlIGZvcm0gXCIyMHB4XCIgb3IgXCI1NSVcIlxuICAgKi9cbiAgb2Zmc2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xuICB0YXJnZXRPZmZzZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xufVxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICBwcml2YXRlIG9wdGlvbnM6IE9wdGlvbnM7XG4gIHByaXZhdGUgdXBkYXRlJCQgPSBuZXcgU3ViamVjdDxudWxsPigpO1xuICBwcml2YXRlIHBvc2l0aW9uRWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgdHJpZ2dlckV2ZW50JDogT2JzZXJ2YWJsZTxudW1iZXJ8RXZlbnQ+O1xuICBwcml2YXRlIGlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogbnVtYmVyXG4gICkge1xuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCQgPSBtZXJnZShcbiAgICAgICAgICBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJywgeyBwYXNzaXZlOiB0cnVlIH0pLFxuICAgICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnLCB7IHBhc3NpdmU6IHRydWUgfSksXG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgICAgIG9mKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcbiAgICAgICAgICB0aGlzLnVwZGF0ZSQkXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50c1xuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgICAgICAuZm9yRWFjaCgocG9zaXRpb25FbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LnRhcmdldCksXG4gICAgICAgICAgICAgICAgX2dldEh0bWxFbGVtZW50KHBvc2l0aW9uRWxlbWVudC5lbGVtZW50KSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXR0YWNobWVudCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXBwZW5kVG9Cb2R5LFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IGV2ZW50JCgpOiBPYnNlcnZhYmxlPG51bWJlcnxFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXJFdmVudCQ7XG4gIH1cblxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBhZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLnNldChfZ2V0SHRtbEVsZW1lbnQob3B0aW9ucy5lbGVtZW50KSwgb3B0aW9ucyk7XG4gIH1cblxuICBjYWxjUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUkJC5uZXh0KCk7XG4gIH1cblxuICBkZWxldGVQb3NpdGlvbkVsZW1lbnQoZWxSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuZGVsZXRlKF9nZXRIdG1sRWxlbWVudChlbFJlZikpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0SHRtbEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAvLyBpdCBtZWFucyB0aGF0IHdlIGdvdCBhIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgIHJldHVybiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiJdfQ==