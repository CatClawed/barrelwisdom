/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
/* tslint:disable */
/* tslint:enable */
export class SortableComponent {
    /**
     * @param {?} transfer
     */
    constructor(transfer) {
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        /* tslint:disable-next-line: no-any */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.onDrop(item)));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._items = value;
        /** @type {?} */
        const out = this.items.map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.initData));
        this.onChanged(out);
        this.onChange.emit(out);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        const dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        /** @type {?} */
        let newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            (x, i) => i !== item.i));
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            (x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            })));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    /**
     * @return {?}
     */
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>  
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SortableComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
SortableComponent.ctorParameters = () => [
    { type: DraggableItemService }
];
SortableComponent.propDecorators = {
    fieldName: [{ type: Input }],
    wrapperClass: [{ type: Input }],
    wrapperStyle: [{ type: Input }],
    itemClass: [{ type: Input }],
    itemStyle: [{ type: Input }],
    itemActiveClass: [{ type: Input }],
    itemActiveStyle: [{ type: Input }],
    placeholderClass: [{ type: Input }],
    placeholderStyle: [{ type: Input }],
    placeholderItem: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortableComponent.globalZoneIndex;
    /**
     * field name if input array consists of objects
     * @type {?}
     */
    SortableComponent.prototype.fieldName;
    /**
     * class name for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperClass;
    /**
     * style object for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperStyle;
    /**
     * class name for item
     * @type {?}
     */
    SortableComponent.prototype.itemClass;
    /**
     * style object for item
     * @type {?}
     */
    SortableComponent.prototype.itemStyle;
    /**
     * class name for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveClass;
    /**
     * style object for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveStyle;
    /**
     * class name for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderClass;
    /**
     * style object for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderStyle;
    /**
     * placeholder item which will be shown if collection is empty
     * @type {?}
     */
    SortableComponent.prototype.placeholderItem;
    /**
     * used to specify a custom item template. Template variables: item and index;
     * @type {?}
     */
    SortableComponent.prototype.itemTemplate;
    /**
     * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
     *  Returns new items collection as a payload.
     * @type {?}
     */
    SortableComponent.prototype.onChange;
    /** @type {?} */
    SortableComponent.prototype.showPlaceholder;
    /** @type {?} */
    SortableComponent.prototype.activeItem;
    /** @type {?} */
    SortableComponent.prototype.onTouched;
    /** @type {?} */
    SortableComponent.prototype.onChanged;
    /**
     * @type {?}
     * @private
     */
    SortableComponent.prototype.transfer;
    /**
     * @type {?}
     * @private
     */
    SortableComponent.prototype.currentZoneIndex;
    /**
     * @type {?}
     * @private
     */
    SortableComponent.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS8iLCJzb3VyY2VzIjpbInNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUE4Q2hFLG1CQUFtQjtBQUNuQixNQUFNLE9BQU8saUJBQWlCOzs7O0lBaUU1QixZQUFZLFFBQThCOzs7O1FBM0RqQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQzs7OztRQUdsQixpQkFBWSxHQUE4QixFQUFFLENBQUM7Ozs7UUFHN0MsY0FBUyxHQUFHLEVBQUUsQ0FBQzs7OztRQUdmLGNBQVMsR0FBOEIsRUFBRSxDQUFDOzs7O1FBRzFDLG9CQUFlLEdBQUcsRUFBRSxDQUFDOzs7O1FBR3JCLG9CQUFlLEdBQThCLEVBQUUsQ0FBQzs7OztRQUdoRCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7UUFHdEIscUJBQWdCLEdBQThCLEVBQUUsQ0FBQzs7OztRQUdqRCxvQkFBZSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1FBVXBCLGFBQVEsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUVwRSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBY2hCLGNBQVMsR0FBUSxRQUFRLENBQUMsU0FBUyxDQUFDOztRQUVwQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQU9sQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdB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UyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUE3Q1Esb0JBQW9COzs7d0JBa0QxQixLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSzs4QkFHTCxLQUFLOytCQUdMLEtBQUs7K0JBR0wsS0FBSzs4QkFHTCxLQUFLOzJCQUlMLEtBQUs7dUJBTUwsTUFBTTs7Ozs7OztJQXZDUCxrQ0FBbUM7Ozs7O0lBRW5DLHNDQUEyQjs7Ozs7SUFHM0IseUNBQTJCOzs7OztJQUczQix5Q0FBc0Q7Ozs7O0lBR3RELHNDQUF3Qjs7Ozs7SUFHeEIsc0NBQW1EOzs7OztJQUduRCw0Q0FBOEI7Ozs7O0lBRzlCLDRDQUF5RDs7Ozs7SUFHekQsNkNBQStCOzs7OztJQUcvQiw2Q0FBMEQ7Ozs7O0lBRzFELDRDQUE4Qjs7Ozs7SUFJOUIseUNBQXdDOzs7Ozs7SUFNeEMscUNBQW9FOztJQUVwRSw0Q0FBd0I7O0lBQ3hCLHVDQUFnQjs7SUFjaEIsc0NBQW9DOztJQUVwQyxzQ0FBb0M7Ozs7O0lBRXBDLHFDQUF1Qzs7Ozs7SUFDdkMsNkNBQWlDOzs7OztJQUNqQyxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuPGRpdlxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICAoZHJhZ292ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJvcCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgKG1vdXNlbGVhdmUpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIj5cbiAgPGRpdlxuICAgICAgICAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NcIlxuICAgICAgICBbbmdTdHlsZV09XCJwbGFjZWhvbGRlclN0eWxlXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgMClcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgID57e3BsYWNlaG9sZGVySXRlbX19PC9kaXY+XG4gICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiWyBpdGVtQ2xhc3MsIGkgPT09IGFjdGl2ZUl0ZW0gPyBpdGVtQWN0aXZlQ2xhc3MgOiAnJyBdXCJcbiAgICAgICAgW25nU3R5bGVdPVwiZ2V0SXRlbVN0eWxlKGkgPT09IGFjdGl2ZUl0ZW0pXCJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgIChkcmFnc3RhcnQpPVwib25JdGVtRHJhZ3N0YXJ0KCRldmVudCwgaXRlbSwgaSlcIlxuICAgICAgICAoZHJhZ2VuZCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIGkpXCJcbiAgICAgICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgYXJpYS1kcm9wZWZmZWN0PVwibW92ZVwiXG4gICAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJpID09PSBhY3RpdmVJdGVtXCJcbiAgICA+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZSB8fCBkZWZJdGVtVGVtcGxhdGVcIlxuICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgaW5kZXg6IGl9XCI+PC9uZy10ZW1wbGF0ZT48L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2RlZkl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj57e2l0ZW0udmFsdWV9fTwvbmctdGVtcGxhdGU+ICBcbmAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU29ydGFibGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFpvbmVJbmRleCA9IDA7XG4gIC8qKiBmaWVsZCBuYW1lIGlmIGlucHV0IGFycmF5IGNvbnNpc3RzIG9mIG9iamVjdHMgKi9cbiAgQElucHV0KCkgZmllbGROYW1lOiBzdHJpbmc7XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGl0ZW1zIHdyYXBwZXIgKi9cbiAgQElucHV0KCkgd3JhcHBlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBhY3RpdmUgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQWN0aXZlQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBhY3RpdmUgaXRlbSAqL1xuICBASW5wdXQoKSBpdGVtQWN0aXZlU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAvKiogcGxhY2Vob2xkZXIgaXRlbSB3aGljaCB3aWxsIGJlIHNob3duIGlmIGNvbGxlY3Rpb24gaXMgZW1wdHkgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJJdGVtID0gJyc7XG5cbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLiBUZW1wbGF0ZSB2YXJpYWJsZXM6IGl0ZW0gYW5kIGluZGV4OyAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIGZpcmVkIG9uIGFycmF5IGNoYW5nZSAocmVvcmRlcmluZywgaW5zZXJ0LCByZW1vdmUpLCBzYW1lIGFzIDxjb2RlPm5nTW9kZWxDaGFuZ2U8L2NvZGU+LlxuICAgKiAgUmV0dXJucyBuZXcgaXRlbXMgY29sbGVjdGlvbiBhcyBhIHBheWxvYWQuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIHNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xuICBhY3RpdmVJdGVtID0gLTE7XG5cbiAgZ2V0IGl0ZW1zKCk6IFNvcnRhYmxlSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXModmFsdWU6IFNvcnRhYmxlSXRlbVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICBjb25zdCBvdXQgPSB0aGlzLml0ZW1zLm1hcCgoeDogU29ydGFibGVJdGVtKSA9PiB4LmluaXREYXRhKTtcbiAgICB0aGlzLm9uQ2hhbmdlZChvdXQpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChvdXQpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIG9uQ2hhbmdlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIHByaXZhdGUgdHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlO1xuICBwcml2YXRlIGN1cnJlbnRab25lSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXRlbXM6IFNvcnRhYmxlSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zZmVyOiBEcmFnZ2FibGVJdGVtU2VydmljZSkge1xuICAgIHRoaXMudHJhbnNmZXIgPSB0cmFuc2ZlcjtcbiAgICB0aGlzLmN1cnJlbnRab25lSW5kZXggPSBTb3J0YWJsZUNvbXBvbmVudC5nbG9iYWxab25lSW5kZXgrKztcbiAgICB0aGlzLnRyYW5zZmVyXG4gICAgICAub25DYXB0dXJlSXRlbSgpXG4gICAgICAuc3Vic2NyaWJlKChpdGVtOiBEcmFnZ2FibGVJdGVtKSA9PiB0aGlzLm9uRHJvcChpdGVtKSk7XG4gIH1cblxuICBvbkl0ZW1EcmFnc3RhcnQoXG4gICAgZXZlbnQ6IERyYWdFdmVudCxcbiAgICBpdGVtOiBTb3J0YWJsZUl0ZW0sXG4gICAgaTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMudHJhbnNmZXIuZHJhZ1N0YXJ0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbSxcbiAgICAgIGksXG4gICAgICBpbml0aWFsSW5kZXg6IGksXG4gICAgICBsYXN0Wm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXgsXG4gICAgICBvdmVyWm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIG9uSXRlbURyYWdvdmVyKGV2ZW50OiBEcmFnRXZlbnQsIGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkcmFnSXRlbSA9IHRoaXMudHJhbnNmZXIuY2FwdHVyZUl0ZW0oXG4gICAgICB0aGlzLmN1cnJlbnRab25lSW5kZXgsXG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aFxuICAgICk7XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIGxldCBuZXdBcnJheTogYW55W10gPSBbXTtcblxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIG5ld0FycmF5ID0gW2RyYWdJdGVtLml0ZW1dO1xuICAgIH0gZWxzZSBpZiAoZHJhZ0l0ZW0uaSA+IGkpIHtcbiAgICAgIG5ld0FycmF5ID0gW1xuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIGkpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGRyYWdJdGVtLmkgKyAxKVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5kcmFnZ2VkSXRlbS5pIDwgaVxuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEsIGkgKyAxKSxcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcbiAgICBkcmFnSXRlbS5pID0gaTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpO1xuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgY2FuY2VsRXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkgfHwgIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkRyb3AoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGl0ZW0gJiZcbiAgICAgIGl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4ICYmXG4gICAgICBpdGVtLmxhc3Rab25lSW5kZXggPT09IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgICkge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKFxuICAgICAgICAoeDogU29ydGFibGVJdGVtLCBpOiBudW1iZXIpID0+IGkgIT09IGl0ZW0uaVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSh1bmRlZmluZWQpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAtMTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICB0aGlzLml0ZW1zID0gdmFsdWUubWFwKCh4OiBhbnksIGk6IG51bWJlcikgPT4gKHtcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIGluaXREYXRhOiB4LFxuICAgICAgICB2YWx1ZTogdGhpcy5maWVsZE5hbWUgPyB4W3RoaXMuZmllbGROYW1lXSA6IHhcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSAhdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0SXRlbVN0eWxlKGlzQWN0aXZlOiBib29sZWFuKToge30ge1xuICAgIHJldHVybiBpc0FjdGl2ZVxuICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW1TdHlsZSwgdGhpcy5pdGVtQWN0aXZlU3R5bGUpXG4gICAgICA6IHRoaXMuaXRlbVN0eWxlO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHByaXZhdGUgaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBpdCBpcyBuZWNlc3NhcnkgZm9yIG1vemlsbGFcbiAgICAvLyBkYXRhIHR5cGUgc2hvdWxkIGJlICdUZXh0JyBpbnN0ZWFkIG9mICd0ZXh0L3BsYWluJyB0byBrZWVwIGNvbXBhdGliaWxpdHlcbiAgICAvLyB3aXRoIElFXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCAncGxhY2Vob2xkZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU29ydGFibGVJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgaW5pdERhdGE6IGFueTtcbn1cbiJdfQ==