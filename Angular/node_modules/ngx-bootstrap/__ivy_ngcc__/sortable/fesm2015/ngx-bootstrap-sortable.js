import { Injectable, EventEmitter, Component, forwardRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function SortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onItemDragover($event, 0); })("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.cancelEvent($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.placeholderClass)("ngStyle", ctx_r0.placeholderStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.placeholderItem);
} }
function SortableComponent_div_2_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return [a0, a1]; };
const _c1 = function (a0, a1) { return { item: a0, index: a1 }; };
function SortableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const item_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemDragstart($event, item_r7, i_r8); })("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.resetActiveItem($event); })("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const i_r8 = ctx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onItemDragover($event, i_r8); })("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.cancelEvent($event); });
    ɵngcc0.ɵɵtemplate(1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c0, ctx_r1.itemClass, i_r8 === ctx_r1.activeItem ? ctx_r1.itemActiveClass : ""))("ngStyle", ctx_r1.getItemStyle(i_r8 === ctx_r1.activeItem));
    ɵngcc0.ɵɵattribute("aria-grabbed", i_r8 === ctx_r1.activeItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(8, _c1, item_r7, i_r8));
} }
function SortableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const item_r15 = ctx.item;
    ɵngcc0.ɵɵtextInterpolate(item_r15.value);
} }
class DraggableItemService {
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
DraggableItemService.ɵfac = function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); };
DraggableItemService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DraggableItemService, factory: DraggableItemService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableItemService, [{
        type: Injectable
    }], function () { return []; }, null); })();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/* tslint:enable */
class SortableComponent {
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
SortableComponent.ɵfac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(ɵngcc0.ɵɵdirectiveInject(DraggableItemService)); };
SortableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SortableComponent, selectors: [["bs-sortable"]], inputs: { wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", fieldName: "fieldName", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, exportAs: ["bs-sortable"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */() => SortableComponent)),
                multi: true
            }
        ])], decls: 5, vars: 4, consts: [[3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"], [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"], ["defItemTemplate", ""], [3, "ngClass", "ngStyle", "dragover", "dragenter"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SortableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("dragover", function SortableComponent_Template_div_dragover_0_listener($event) { return ctx.cancelEvent($event); })("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) { return ctx.cancelEvent($event); })("drop", function SortableComponent_Template_div_drop_0_listener($event) { return ctx.resetActiveItem($event); })("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) { return ctx.resetActiveItem($event); });
        ɵngcc0.ɵɵtemplate(1, SortableComponent_div_1_Template, 2, 3, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SortableComponent_div_2_Template, 2, 11, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapperClass)("ngStyle", ctx.wrapperStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showPlaceholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
SortableComponent.globalZoneIndex = 0;
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableComponent, [{
        type: Component,
        args: [{
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
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */() => SortableComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: DraggableItemService }]; }, { wrapperClass: [{
            type: Input
        }], wrapperStyle: [{
            type: Input
        }], itemClass: [{
            type: Input
        }], itemStyle: [{
            type: Input
        }], itemActiveClass: [{
            type: Input
        }], itemActiveStyle: [{
            type: Input
        }], placeholderClass: [{
            type: Input
        }], placeholderStyle: [{
            type: Input
        }], placeholderItem: [{
            type: Input
        }], onChange: [{
            type: Output
        }], fieldName: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortableModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    }
}
SortableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SortableModule });
SortableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SortableModule_Factory(t) { return new (t || SortableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SortableModule, { declarations: function () { return [SortableComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SortableComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DraggableItemService, SortableComponent, SortableModule };

//# sourceMappingURL=ngx-bootstrap-sortable.js.map