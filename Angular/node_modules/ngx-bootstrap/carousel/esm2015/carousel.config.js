/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class CarouselConfig {
    constructor() {
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
}
CarouselConfig.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sY0FBYztJQUQzQjs7UUFHRSxhQUFRLEdBQUcsSUFBSSxDQUFDOztRQUdoQixZQUFPLEdBQUcsS0FBSyxDQUFDOztRQUdoQixXQUFNLEdBQUcsS0FBSyxDQUFDOztRQUdmLG1CQUFjLEdBQUcsSUFBSSxDQUFDOztRQUd0QixpQkFBWSxHQUFHLEtBQUssQ0FBQzs7UUFHckIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDOztRQUcxQixrQkFBYSxHQUFHLENBQUMsQ0FBQzs7O1FBSWxCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7WUExQkEsVUFBVTs7OztJQUdULGtDQUFnQjs7SUFHaEIsaUNBQWdCOztJQUdoQixnQ0FBZTs7SUFHZix3Q0FBc0I7O0lBR3RCLHNDQUFxQjs7SUFHckIsMkNBQTBCOztJQUcxQix1Q0FBa0I7O0lBSWxCLDJDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29uZmlnIHtcbiAgLyogRGVmYXVsdCBpbnRlcnZhbCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyAqL1xuICBpbnRlcnZhbCA9IDUwMDA7XG5cbiAgLyogSXMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyBjYW4gYmUgcGF1c2VkICovXG4gIG5vUGF1c2UgPSBmYWxzZTtcblxuICAvKiBJcyBzbGlkZXMgY2FuIHdyYXAgZnJvbSB0aGUgbGFzdCB0byB0aGUgZmlyc3Qgc2xpZGUgKi9cbiAgbm9XcmFwID0gZmFsc2U7XG5cbiAgLyogU2hvdyBjYXJvdXNlbC1pbmRpY2F0b3JzICovXG4gIHNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcblxuICAvKiBTbGlkZXMgY2FuIGJlIHBhdXNlZCBvbiBmb2N1cyAqL1xuICBwYXVzZU9uRm9jdXMgPSBmYWxzZTtcblxuICAvKiBJZiBgdHJ1ZWAgLSBjYXJvdXNlbCBpbmRpY2F0b3JzIGluZGljYXRlIHNsaWRlcyBjaHVua3Mgd29ya3MgT05MWSBpZiBzaW5nbGVTbGlkZU9mZnNldCA9IEZBTFNFICovXG4gIGluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XG5cbiAgLyogSWYgdmFsdWUgbW9yZSB0aGVuIDEg4oCUIGNhcm91c2VsIHdvcmtzIGluIG11bHRpbGlzdCBtb2RlICovXG4gIGl0ZW1zUGVyU2xpZGUgPSAxO1xuXG4gIC8qIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwgc2hpZnRzIGJ5IG9uZSBlbGVtZW50LiBCeSBkZWZhdWx0IGNhcm91c2VsIHNoaWZ0cyBieSBudW1iZXJcbiAgICBvZiB2aXNpYmxlIGVsZW1lbnRzIChpdGVtc1BlclNsaWRlIGZpZWxkKSAqL1xuICBzaW5nbGVTbGlkZU9mZnNldCA9IGZhbHNlO1xufVxuIl19