/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
/** @type {?} */
export const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => PagerComponent)),
    multi: true
};
export class PagerComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: PaginationConfig },
    { type: ChangeDetectorRef }
];
PagerComponent.propDecorators = {
    align: [{ type: Input }],
    maxSize: [{ type: Input }],
    boundaryLinks: [{ type: Input }],
    directionLinks: [{ type: Input }],
    firstText: [{ type: Input }],
    previousText: [{ type: Input }],
    nextText: [{ type: Input }],
    lastText: [{ type: Input }],
    rotate: [{ type: Input }],
    pageBtnClass: [{ type: Input }],
    disabled: [{ type: Input }],
    numPages: [{ type: Output }],
    pageChanged: [{ type: Output }],
    itemsPerPage: [{ type: Input }],
    totalItems: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PagerComponent.prototype.config;
    /**
     * if `true` aligns each link to the sides of pager
     * @type {?}
     */
    PagerComponent.prototype.align;
    /**
     * limit number for page links in pager
     * @type {?}
     */
    PagerComponent.prototype.maxSize;
    /**
     * if false first and last buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.boundaryLinks;
    /**
     * if false previous and next buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.directionLinks;
    /**
     * first button text
     * @type {?}
     */
    PagerComponent.prototype.firstText;
    /**
     * previous button text
     * @type {?}
     */
    PagerComponent.prototype.previousText;
    /**
     * next button text
     * @type {?}
     */
    PagerComponent.prototype.nextText;
    /**
     * last button text
     * @type {?}
     */
    PagerComponent.prototype.lastText;
    /**
     * if true current page will in the middle of pages list
     * @type {?}
     */
    PagerComponent.prototype.rotate;
    /**
     * add class to <code><li\></code>
     * @type {?}
     */
    PagerComponent.prototype.pageBtnClass;
    /**
     * if true pagination component will be disabled
     * @type {?}
     */
    PagerComponent.prototype.disabled;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     * @type {?}
     */
    PagerComponent.prototype.numPages;
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     * @type {?}
     */
    PagerComponent.prototype.pageChanged;
    /** @type {?} */
    PagerComponent.prototype.onChange;
    /** @type {?} */
    PagerComponent.prototype.onTouched;
    /** @type {?} */
    PagerComponent.prototype.classMap;
    /** @type {?} */
    PagerComponent.prototype.pages;
    /**
     * @type {?}
     * @protected
     */
    PagerComponent.prototype._itemsPerPage;
    /**
     * @type {?}
     * @protected
     */
    PagerComponent.prototype._totalItems;
    /**
     * @type {?}
     * @protected
     */
    PagerComponent.prototype._totalPages;
    /**
     * @type {?}
     * @protected
     */
    PagerComponent.prototype.inited;
    /**
     * @type {?}
     * @protected
     */
    PagerComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    PagerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PagerComponent.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsicGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFJdkQsTUFBTSxPQUFPLDRCQUE0QixHQUFhO0lBQ3BELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUM7SUFDN0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQU9ELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFxR3pCLFlBQW9CLFVBQXNCLEVBQzlCLGdCQUFrQyxFQUMxQixlQUFrQztRQUZsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjs7OztRQTFFNUMsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOzs7OztRQUt0RSxnQkFBVyxHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQXVEbkYsYUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFRckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxDQUFDLENBQUM7UUFLbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixD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Ozs7WUExQkMsVUFBVTtZQVdILGdCQUFnQjtZQWJ2QixpQkFBaUI7OztvQkFnQ2hCLEtBQUs7c0JBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLEtBQUs7d0JBR0wsS0FBSzsyQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLOzJCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxNQUFNOzBCQUlOLE1BQU07MkJBSU4sS0FBSzt5QkFXTCxLQUFLOzs7O0lBL0NOLGdDQUFvQjs7Ozs7SUFFcEIsK0JBQXdCOzs7OztJQUV4QixpQ0FBeUI7Ozs7O0lBRXpCLHVDQUFnQzs7Ozs7SUFFaEMsd0NBQWlDOzs7OztJQUdqQyxtQ0FBMkI7Ozs7O0lBRTNCLHNDQUE4Qjs7Ozs7SUFFOUIsa0NBQTBCOzs7OztJQUUxQixrQ0FBMEI7Ozs7O0lBRTFCLGdDQUF5Qjs7Ozs7SUFHekIsc0NBQThCOzs7OztJQUc5QixrQ0FBMkI7Ozs7O0lBRzNCLGtDQUFzRTs7Ozs7O0lBSXRFLHFDQUNtRjs7SUF1RG5GLGtDQUE4Qjs7SUFDOUIsbUNBQStCOztJQUUvQixrQ0FBaUI7O0lBQ2pCLCtCQUFvQjs7Ozs7SUFFcEIsdUNBQWdDOzs7OztJQUNoQyxxQ0FBOEI7Ozs7O0lBQzlCLHFDQUE4Qjs7Ozs7SUFDOUIsZ0NBQXlCOzs7OztJQUN6QiwrQkFBb0I7Ozs7O0lBRVIsb0NBQThCOzs7OztJQUU5Qix5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBhZ2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgY29uZmlnOiBDb25maWdNb2RlbDtcbiAgLyoqIGlmIGB0cnVlYCBhbGlnbnMgZWFjaCBsaW5rIHRvIHRoZSBzaWRlcyBvZiBwYWdlciAqL1xuICBASW5wdXQoKSBhbGlnbjogYm9vbGVhbjtcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XG4gIC8qKiBpZiBmYWxzZSBmaXJzdCBhbmQgbGFzdCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XG4gIC8qKiBpZiBmYWxzZSBwcmV2aW91cyBhbmQgbmV4dCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuICAvLyBsYWJlbHNcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIGZpcnN0VGV4dDogc3RyaW5nO1xuICAvKiogcHJldmlvdXMgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgcHJldmlvdXNUZXh0OiBzdHJpbmc7XG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIG5leHRUZXh0OiBzdHJpbmc7XG4gIC8qKiBsYXN0IGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIGxhc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIGN1cnJlbnQgcGFnZSB3aWxsIGluIHRoZSBtaWRkbGUgb2YgcGFnZXMgbGlzdCAqL1xuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XG4gIC8vIGNzc1xuICAvKiogYWRkIGNsYXNzIHRvIDxjb2RlPjxsaVxcPjwvY29kZT4gKi9cbiAgQElucHV0KCkgcGFnZUJ0bkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIGlmIHRydWUgcGFnaW5hdGlvbiBjb21wb25lbnQgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xuICBAT3V0cHV0KCkgbnVtUGFnZXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG9cbiAgICogb2JqZWN0IHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XG4gIH1cblxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XG4gIH1cblxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY2xhc3NNYXA6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcblxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYWdpbmF0aW9uQ29uZmlnLm1haW4sIHBhZ2luYXRpb25Db25maWcucGFnZXIpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpZ3VyZU9wdGlvbnMoY29uZmlnOiBDb25maWdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jbGFzc01hcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcbiAgICB9XG4gICAgLy8gd2F0Y2ggZm9yIG1heFNpemVcbiAgICB0aGlzLm1heFNpemUgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heFNpemUgOiB0aGlzLmNvbmZpZy5tYXhTaXplO1xuICAgIHRoaXMucm90YXRlID1cbiAgICAgIHR5cGVvZiB0aGlzLnJvdGF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnJvdGF0ZSA6IHRoaXMuY29uZmlnLnJvdGF0ZTtcbiAgICB0aGlzLmJvdW5kYXJ5TGlua3MgPVxuICAgICAgdHlwZW9mIHRoaXMuYm91bmRhcnlMaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmJvdW5kYXJ5TGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5ib3VuZGFyeUxpbmtzO1xuICAgIHRoaXMuZGlyZWN0aW9uTGlua3MgPVxuICAgICAgdHlwZW9mIHRoaXMuZGlyZWN0aW9uTGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5kaXJlY3Rpb25MaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmRpcmVjdGlvbkxpbmtzO1xuICAgIHRoaXMucGFnZUJ0bkNsYXNzID1cbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLnBhZ2VCdG5DbGFzc1xuICAgICAgICA6IHRoaXMuY29uZmlnLnBhZ2VCdG5DbGFzcztcblxuICAgIC8vIGJhc2UgY2xhc3NcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9XG4gICAgICB0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5pdGVtc1BlclBhZ2VcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgLy8gdGhpcyBjbGFzc1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cblxuICBnZXRUZXh0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbYCR7a2V5fVRleHRgXSB8fCAodGhpcyBhcyBhbnkpLmNvbmZpZ1tgJHtrZXl9VGV4dGBdO1xuICB9XG5cbiAgbm9QcmV2aW91cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbm9OZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyLCBldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB0YXJnZXQuYmx1cigpO1xuICAgICAgfVxuICAgICAgdGhpcy53cml0ZVZhbHVlKHBhZ2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXG4gIHByb3RlY3RlZCBtYWtlUGFnZShudW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogYm9vbGVhbik6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7dGV4dCwgbnVtYmVyOiBudW0sIGFjdGl2ZX07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XG5cbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcblxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcbiAgICAgICAgc3RhcnRQYWdlID1cbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcblxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cblxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLy8gYmFzZSBjbGFzc1xuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXG4gICAgICAgID8gMVxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIl19