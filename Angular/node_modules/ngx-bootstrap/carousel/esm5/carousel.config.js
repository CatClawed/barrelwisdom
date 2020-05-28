/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
    CarouselConfig.decorators = [
        { type: Injectable }
    ];
    return CarouselConfig;
}());
export { CarouselConfig };
if (false) {
    /** @type {?} */
    CarouselConfig.prototype.interval;
    /** @type {?} */
    CarouselConfig.prototype.noPause;
    /** @type {?} */
    CarouselConfig.prototype.noWrap;
    /** @type {?} */
    CarouselConfig.prototype.showIndicators;
    /** @type {?} */
    CarouselConfig.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselConfig.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselConfig.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselConfig.prototype.singleSlideOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBOztRQUdFLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBR2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7O1FBR2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7O1FBR2YsbUJBQWMsR0FBRyxJQUFJLENBQUM7O1FBR3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDOztRQUdyQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7O1FBRzFCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDOzs7UUFJbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7O2dCQTFCQSxVQUFVOztJQTBCWCxxQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGNBQWM7OztJQUV6QixrQ0FBZ0I7O0lBR2hCLGlDQUFnQjs7SUFHaEIsZ0NBQWU7O0lBR2Ysd0NBQXNCOztJQUd0QixzQ0FBcUI7O0lBR3JCLDJDQUEwQjs7SUFHMUIsdUNBQWtCOztJQUlsQiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbmZpZyB7XG4gIC8qIERlZmF1bHQgaW50ZXJ2YWwgb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgKi9cbiAgaW50ZXJ2YWwgPSA1MDAwO1xuXG4gIC8qIElzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgY2FuIGJlIHBhdXNlZCAqL1xuICBub1BhdXNlID0gZmFsc2U7XG5cbiAgLyogSXMgc2xpZGVzIGNhbiB3cmFwIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IHNsaWRlICovXG4gIG5vV3JhcCA9IGZhbHNlO1xuXG4gIC8qIFNob3cgY2Fyb3VzZWwtaW5kaWNhdG9ycyAqL1xuICBzaG93SW5kaWNhdG9ycyA9IHRydWU7XG5cbiAgLyogU2xpZGVzIGNhbiBiZSBwYXVzZWQgb24gZm9jdXMgKi9cbiAgcGF1c2VPbkZvY3VzID0gZmFsc2U7XG5cbiAgLyogSWYgYHRydWVgIC0gY2Fyb3VzZWwgaW5kaWNhdG9ycyBpbmRpY2F0ZSBzbGlkZXMgY2h1bmtzIHdvcmtzIE9OTFkgaWYgc2luZ2xlU2xpZGVPZmZzZXQgPSBGQUxTRSAqL1xuICBpbmRpY2F0b3JzQnlDaHVuayA9IGZhbHNlO1xuXG4gIC8qIElmIHZhbHVlIG1vcmUgdGhlbiAxIOKAlCBjYXJvdXNlbCB3b3JrcyBpbiBtdWx0aWxpc3QgbW9kZSAqL1xuICBpdGVtc1BlclNsaWRlID0gMTtcblxuICAvKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHNoaWZ0cyBieSBvbmUgZWxlbWVudC4gQnkgZGVmYXVsdCBjYXJvdXNlbCBzaGlmdHMgYnkgbnVtYmVyXG4gICAgb2YgdmlzaWJsZSBlbGVtZW50cyAoaXRlbXNQZXJTbGlkZSBmaWVsZCkgKi9cbiAgc2luZ2xlU2xpZGVPZmZzZXQgPSBmYWxzZTtcbn1cbiJdfQ==