/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
        this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    },
                    styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        itemWidth: [{ type: HostBinding, args: ['style.width',] }],
        order: [{ type: HostBinding, args: ['style.order',] }],
        isAnimated: [{ type: HostBinding, args: ['class.carousel-animation',] }],
        addClass: [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());
export { SlideComponent };
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.itemWidth;
    /** @type {?} */
    SlideComponent.prototype.order;
    /** @type {?} */
    SlideComponent.prototype.isAnimated;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     * @protected
     */
    SlideComponent.prototype.carousel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpEO0lBNkNFLHdCQUFZLFFBQTJCO1FBWlgsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixVQUFLLEdBQUcsQ0FBQyxDQUFDOzs7O1FBTXRDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFNZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsOEVBQThFOzs7OztJQUM5RSxpQ0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLE1BQUcsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0ZBQWtGOzs7OztJQUNsRixvQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLHVHQUlUO29CQUNELElBQUksRUFBRTt3QkFDSixvQkFBb0IsRUFBRSxTQUFTO3FCQUNoQzs2QkFDUSxnWEFlUjtpQkFDRjs7OztnQkE1QlEsaUJBQWlCOzs7eUJBK0J2QixXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLOzRCQUdMLFdBQVcsU0FBQyxhQUFhO3dCQUN6QixXQUFXLFNBQUMsYUFBYTs2QkFDekIsV0FBVyxTQUFDLDBCQUEwQjsyQkFHdEMsV0FBVyxTQUFDLFlBQVksY0FDeEIsV0FBVyxTQUFDLHFCQUFxQjs7SUFvQnBDLHFCQUFDO0NBQUEsQUEzREQsSUEyREM7U0FoQ1ksY0FBYzs7Ozs7O0lBRXpCLGdDQUVnQjs7SUFFaEIsbUNBQStDOztJQUMvQywrQkFBc0M7O0lBQ3RDLG9DQUE2RDs7Ozs7SUFHN0Qsa0NBRWdCOzs7Ozs7SUFHaEIsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZSdcbiAgfSxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0LmNhcm91c2VsLWFuaW1hdGlvbiB7XG4gICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHZpc2liaWxpdHkgMC42cyBlYXNlO1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICA6aG9zdC5jYXJvdXNlbC1hbmltYXRpb24uYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICA6aG9zdC5jYXJvdXNlbC1hbmltYXRpb246bm90KC5hY3RpdmUpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogSXMgY3VycmVudCBzbGlkZSBhY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGl0ZW1XaWR0aCA9ICcxMDAlJztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpIG9yZGVyID0gMDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1hbmltYXRpb24nKSBpc0FuaW1hdGVkOiBib29sZWFuO1xuXG4gIC8qKiBXcmFwcyBlbGVtZW50IGJ5IGFwcHJvcHJpYXRlIENTUyBjbGFzc2VzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXG4gIGFkZENsYXNzID0gdHJ1ZTtcblxuICAvKiogTGluayB0byBQYXJlbnQoY29udGFpbmVyLWNvbGxlY3Rpb24pIGNvbXBvbmVudCAqL1xuICBwcm90ZWN0ZWQgY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIHRoaXMuY2Fyb3VzZWwgPSBjYXJvdXNlbDtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLmFkZFNsaWRlKHRoaXMpO1xuICAgIHRoaXMuaXRlbVdpZHRoID0gYCR7MTAwIC8gdGhpcy5jYXJvdXNlbC5pdGVtc1BlclNsaWRlfSVgO1xuICB9XG5cbiAgLyoqIEZpcmVzIGNoYW5nZXMgaW4gY29udGFpbmVyIGNvbGxlY3Rpb24gYWZ0ZXIgcmVtb3Zpbmcgb2YgdGhpcyBzbGlkZSBpbnN0YW5jZSAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLnJlbW92ZVNsaWRlKHRoaXMpO1xuICB9XG59XG4iXX0=