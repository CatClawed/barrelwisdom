/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';
import { TabsetConfig } from './tabset.config';
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
export class TabsetComponent {
    /**
     * @param {?} config
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    /**
     * if true tabs will be placed vertically
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    }
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    removeTab(tab, options = { reselect: true, emit: true }) {
        /** @type {?} */
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    }
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    keyNavActions(event, index) {
        /** @type {?} */
        const list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */
            const currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            let nextTab;
            /** @type {?} */
            let shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            /** @type {?} */
            let previousTab;
            /** @type {?} */
            let shift = 1;
            /** @type {?} */
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            /** @type {?} */
            let firstTab;
            /** @type {?} */
            let shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            /** @type {?} */
            let lastTab;
            /** @type {?} */
            let shift = 1;
            /** @type {?} */
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            const prevIndex = index - step;
            /** @type {?} */
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @protected
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified,
            [`nav-${this.type}`]: true
        };
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
            }] }
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: TabsetConfig },
    { type: Renderer2 },
    { type: ElementRef }
];
TabsetComponent.propDecorators = {
    vertical: [{ type: Input }],
    justified: [{ type: Input }],
    type: [{ type: Input }],
    clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
};
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /**
     * aria label for tab list
     * @type {?}
     */
    TabsetComponent.prototype.ariaLabel;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype.isDestroyed;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._vertical;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._justified;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBUS9DLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUE0QzFCLFlBQ0UsTUFBb0IsRUFDWixRQUFtQixFQUNuQixVQUFzQjtRQUR0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFoQkksVUFBSyxHQUFHLElBQUksQ0FBQztRQUVqRCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQStCLEVBQUUsQ0FBQztRQWV4QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQWhERCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUdELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBR0QsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENB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Q0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUN6QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzVCLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUM1QixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDM0IsQ0FBQztJQUNKLENBQUM7OztZQXZQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGkvQkFBc0M7O2FBRXZDOzs7O1lBUFEsWUFBWTtZQUg4QixTQUFTO1lBQUUsVUFBVTs7O3VCQWFyRSxLQUFLO3dCQVVMLEtBQUs7bUJBVUwsS0FBSztvQkFTTCxXQUFXLFNBQUMscUJBQXFCOzs7O0lBQWxDLGdDQUFpRDs7SUFFakQsK0JBQTBCOztJQUMxQixtQ0FBMEM7Ozs7O0lBRzFDLG9DQUFrQjs7Ozs7SUFFbEIsc0NBQStCOzs7OztJQUMvQixvQ0FBNkI7Ozs7O0lBQzdCLHFDQUE4Qjs7Ozs7SUFDOUIsZ0NBQXdCOzs7OztJQUl0QixtQ0FBMkI7Ozs7O0lBQzNCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcbi8vIHRvZG86IGFkZCBhY3RpdmUgZXZlbnQgdG8gdGFiXG4vLyB0b2RvOiBmaXg/IG1peGluZyBzdGF0aWMgYW5kIGR5bmFtaWMgdGFicyBwb3NpdGlvbiB0YWJzIGluIG9yZGVyIG9mIGNyZWF0aW9uXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJzZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFic2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xuICB9XG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qdXN0aWZpZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xuXG4gIHRhYnM6IFRhYkRpcmVjdGl2ZVtdID0gW107XG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gIC8qKiBhcmlhIGxhYmVsIGZvciB0YWIgbGlzdCAqL1xuICBhcmlhTGFiZWw6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfanVzdGlmaWVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IFRhYnNldENvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgYWRkVGFiKHRhYjogVGFiRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICB0YWIuYWN0aXZlID0gdGhpcy50YWJzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgdGFiLmFjdGl2ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICByZW1vdmVUYWIoXG4gICAgdGFiOiBUYWJEaXJlY3RpdmUsXG4gICAgb3B0aW9ucyA9IHsgcmVzZWxlY3Q6IHRydWUsIGVtaXQ6IHRydWUgfVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXG4gICAgaWYgKG9wdGlvbnMucmVzZWxlY3QgJiYgdGFiLmFjdGl2ZSAmJiB0aGlzLmhhc0F2YWlsYWJsZVRhYnMoaW5kZXgpKSB7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IHRoaXMuZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4KTtcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW1pdCkge1xuICAgICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xuICAgIH1cbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cbiAga2V5TmF2QWN0aW9ucyhldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3Q6IEhUTUxFbGVtZW50W10gPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpKTtcbiAgICAvLyBjb25zdCBhY3RpdmVFbExpc3QgPSBsaXN0LmZpbHRlcigoZWw6IEhUTUxFbGVtZW50KSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5ID09PSAnU3BhY2UnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudFRhYiA9IGxpc3RbKGluZGV4KSAlIGxpc3QubGVuZ3RoXTtcbiAgICAgIGN1cnJlbnRUYWIuY2xpY2soKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXkgPT09ICdSaWdodEFycm93Jykge1xuICAgICAgbGV0IG5leHRUYWI6IGFueTtcbiAgICAgIGxldCBzaGlmdCA9IDE7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgbmV4dFRhYiA9IGxpc3RbKGluZGV4ICsgc2hpZnQpICUgbGlzdC5sZW5ndGhdO1xuXG4gICAgICAgIHNoaWZ0Kys7XG4gICAgICB9IHdoaWxlIChuZXh0VGFiLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSk7XG5cbiAgICAgIG5leHRUYWIuZm9jdXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXkgPT09ICdMZWZ0QXJyb3cnKSB7XG4gICAgICBsZXQgcHJldmlvdXNUYWI6IGFueTtcbiAgICAgIGxldCBzaGlmdCA9IDE7XG4gICAgICBsZXQgaSA9IGluZGV4O1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmICgoaSAtIHNoaWZ0KSA8IDApIHtcbiAgICAgICAgICBpID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgIHByZXZpb3VzVGFiID0gbGlzdFtpXTtcbiAgICAgICAgICBzaGlmdCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNUYWIgPSBsaXN0W2kgLSBzaGlmdF07XG4gICAgICAgIH1cblxuICAgICAgICBzaGlmdCsrO1xuICAgICAgfSB3aGlsZSAocHJldmlvdXNUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcblxuICAgICAgcHJldmlvdXNUYWIuZm9jdXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNiB8fCBldmVudC5rZXkgPT09ICdIb21lJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGZpcnN0VGFiOiBhbnk7XG4gICAgICBsZXQgc2hpZnQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGZpcnN0VGFiID0gbGlzdFtzaGlmdCAlIGxpc3QubGVuZ3RoXTtcblxuICAgICAgICBzaGlmdCsrO1xuICAgICAgfSB3aGlsZSAoZmlyc3RUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcblxuICAgICAgZmlyc3RUYWIuZm9jdXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNSB8fCBldmVudC5rZXkgPT09ICdFbmQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgbGFzdFRhYjogYW55O1xuICAgICAgbGV0IHNoaWZ0ID0gMTtcbiAgICAgIGxldCBpID0gaW5kZXg7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKChpIC0gc2hpZnQpIDwgMCkge1xuICAgICAgICAgIGkgPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgbGFzdFRhYiA9IGxpc3RbaV07XG4gICAgICAgICAgc2hpZnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RUYWIgPSBsaXN0W2kgLSBzaGlmdF07XG4gICAgICAgIH1cblxuICAgICAgICBzaGlmdCsrO1xuICAgICAgfSB3aGlsZSAobGFzdFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpO1xuXG4gICAgICBsYXN0VGFiLmZvY3VzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDYgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgaWYgKHRoaXMudGFic1tpbmRleF0ucmVtb3ZhYmxlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVGFiKHRoaXMudGFic1tpbmRleF0pO1xuXG4gICAgICAgIGlmIChsaXN0W2luZGV4ICsgMV0pIHtcbiAgICAgICAgICBsaXN0WyhpbmRleCArIDEpICUgbGlzdC5sZW5ndGhdLmZvY3VzKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdFtsaXN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgbGlzdFswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3RUYWJJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8PSB0YWJzTGVuZ3RoOyBzdGVwICs9IDEpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgc3RlcDtcbiAgICAgIGlmICh0aGlzLnRhYnNbcHJldkluZGV4XSAmJiAhdGhpcy50YWJzW3ByZXZJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhYnNbbmV4dEluZGV4XSAmJiAhdGhpcy50YWJzW25leHRJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzQXZhaWxhYmxlVGFicyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICghdGhpcy50YWJzW2ldLmRpc2FibGVkICYmIGkgIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICdmbGV4LWNvbHVtbic6IHRoaXMudmVydGljYWwsXG4gICAgICAnbmF2LWp1c3RpZmllZCc6IHRoaXMuanVzdGlmaWVkLFxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcbiAgICB9O1xuICB9XG59XG4iXX0=