/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: Injectable }
    ];
    return DraggableItemService;
}());
export { DraggableItemService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DraggableItemService.prototype.draggableItem;
    /**
     * @type {?}
     * @private
     */
    DraggableItemService.prototype.onCapture;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0I7SUFBQTtRQUlVLGNBQVMsR0FBMkIsSUFBSSxPQUFPLEVBQWlCLENBQUM7SUEyQjNFLENBQUM7Ozs7O0lBekJDLHdDQUFTOzs7O0lBQVQsVUFBVSxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsc0NBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELDBDQUFXOzs7OztJQUFYLFVBQVksYUFBcUIsRUFBRSxRQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekQsYUFBYSxlQUFBO2dCQUNiLENBQUMsRUFBRSxRQUFRO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOztnQkE5QkYsVUFBVTs7SUErQlgsMkJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxvQkFBb0I7Ozs7OztJQUMvQiw2Q0FBcUM7Ozs7O0lBRXJDLHlDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUl0ZW1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkcmFnZ2FibGVJdGVtOiBEcmFnZ2FibGVJdGVtO1xuXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcblxuICBkcmFnU3RhcnQoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XG4gIH1cblxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBjYXB0dXJlSXRlbShvdmVyWm9uZUluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpOiBEcmFnZ2FibGVJdGVtIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXggIT09IG92ZXJab25lSW5kZXgpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5sYXN0Wm9uZUluZGV4ID0gdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCA9IG92ZXJab25lSW5kZXg7XG4gICAgICB0aGlzLm9uQ2FwdHVyZS5uZXh0KHRoaXMuZHJhZ2dhYmxlSXRlbSk7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRyYWdnYWJsZUl0ZW0sIHtcbiAgICAgICAgb3ZlclpvbmVJbmRleCxcbiAgICAgICAgaTogbmV3SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XG4gIH1cblxuICBvbkNhcHR1cmVJdGVtKCk6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLm9uQ2FwdHVyZTtcbiAgfVxufVxuIl19