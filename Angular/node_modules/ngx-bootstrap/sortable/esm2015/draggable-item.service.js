/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DraggableItemService {
    constructor() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    dragStart(item) {
        this.draggableItem = item;
    }
    /**
     * @return {?}
     */
    getItem() {
        return this.draggableItem;
    }
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    /**
     * @return {?}
     */
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUlVLGNBQVMsR0FBMkIsSUFBSSxPQUFPLEVBQWlCLENBQUM7SUEyQjNFLENBQUM7Ozs7O0lBekJDLFNBQVMsQ0FBQyxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBcUIsRUFBRSxRQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekQsYUFBYTtnQkFDYixDQUFDLEVBQUUsUUFBUTthQUNaLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7OztZQTlCRixVQUFVOzs7Ozs7O0lBRVQsNkNBQXFDOzs7OztJQUVyQyx5Q0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVJdGVtU2VydmljZSB7XG4gIHByaXZhdGUgZHJhZ2dhYmxlSXRlbTogRHJhZ2dhYmxlSXRlbTtcblxuICBwcml2YXRlIG9uQ2FwdHVyZTogU3ViamVjdDxEcmFnZ2FibGVJdGVtPiA9IG5ldyBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+KCk7XG5cbiAgZHJhZ1N0YXJ0KGl0ZW06IERyYWdnYWJsZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgZ2V0SXRlbSgpOiBEcmFnZ2FibGVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVJdGVtO1xuICB9XG5cbiAgY2FwdHVyZUl0ZW0ob3ZlclpvbmVJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKTogRHJhZ2dhYmxlSXRlbSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ICE9PSBvdmVyWm9uZUluZGV4KSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ubGFzdFpvbmVJbmRleCA9IHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4O1xuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXggPSBvdmVyWm9uZUluZGV4O1xuICAgICAgdGhpcy5vbkNhcHR1cmUubmV4dCh0aGlzLmRyYWdnYWJsZUl0ZW0pO1xuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmFnZ2FibGVJdGVtLCB7XG4gICAgICAgIG92ZXJab25lSW5kZXgsXG4gICAgICAgIGk6IG5ld0luZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVJdGVtO1xuICB9XG5cbiAgb25DYXB0dXJlSXRlbSgpOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5vbkNhcHR1cmU7XG4gIH1cbn1cbiJdfQ==