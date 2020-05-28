/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
/**
 * @record
 */
export function PageChangedEvent() { }
if (false) {
    /** @type {?} */
    PageChangedEvent.prototype.itemsPerPage;
    /** @type {?} */
    PageChangedEvent.prototype.page;
}
/** @type {?} */
export const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => PaginationComponent)),
    multi: true
};
export class PaginationComponent {
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
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
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
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: PaginationConfig },
    { type: ChangeDetectorRef }
];
PaginationComponent.propDecorators = {
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
    customPageTemplate: [{ type: Input }],
    customNextTemplate: [{ type: Input }],
    customPreviousTemplate: [{ type: Input }],
    customFirstTemplate: [{ type: Input }],
    customLastTemplate: [{ type: Input }],
    numPages: [{ type: Output }],
    pageChanged: [{ type: Output }],
    itemsPerPage: [{ type: Input }],
    totalItems: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.config;
    /**
     * if `true` aligns each link to the sides of pager
     * @type {?}
     */
    PaginationComponent.prototype.align;
    /**
     * limit number for page links in pager
     * @type {?}
     */
    PaginationComponent.prototype.maxSize;
    /**
     * if false first and last buttons will be hidden
     * @type {?}
     */
    PaginationComponent.prototype.boundaryLinks;
    /**
     * if false previous and next buttons will be hidden
     * @type {?}
     */
    PaginationComponent.prototype.directionLinks;
    /**
     * first button text
     * @type {?}
     */
    PaginationComponent.prototype.firstText;
    /**
     * previous button text
     * @type {?}
     */
    PaginationComponent.prototype.previousText;
    /**
     * next button text
     * @type {?}
     */
    PaginationComponent.prototype.nextText;
    /**
     * last button text
     * @type {?}
     */
    PaginationComponent.prototype.lastText;
    /**
     * if true current page will in the middle of pages list
     * @type {?}
     */
    PaginationComponent.prototype.rotate;
    /**
     * add class to <code><li\></code>
     * @type {?}
     */
    PaginationComponent.prototype.pageBtnClass;
    /**
     * if true pagination component will be disabled
     * @type {?}
     */
    PaginationComponent.prototype.disabled;
    /**
     * custom template for page link
     * @type {?}
     */
    PaginationComponent.prototype.customPageTemplate;
    /**
     * custom template for next link
     * @type {?}
     */
    PaginationComponent.prototype.customNextTemplate;
    /**
     * custom template for previous link
     * @type {?}
     */
    PaginationComponent.prototype.customPreviousTemplate;
    /**
     * custom template for first link
     * @type {?}
     */
    PaginationComponent.prototype.customFirstTemplate;
    /**
     * custom template for last link
     * @type {?}
     */
    PaginationComponent.prototype.customLastTemplate;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     * @type {?}
     */
    PaginationComponent.prototype.numPages;
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to object
     * with current page index and number of items per page
     * @type {?}
     */
    PaginationComponent.prototype.pageChanged;
    /** @type {?} */
    PaginationComponent.prototype.onChange;
    /** @type {?} */
    PaginationComponent.prototype.onTouched;
    /** @type {?} */
    PaginationComponent.prototype.classMap;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @protected
     */
    PaginationComponent.prototype._itemsPerPage;
    /**
     * @type {?}
     * @protected
     */
    PaginationComponent.prototype._totalItems;
    /**
     * @type {?}
     * @protected
     */
    PaginationComponent.prototype._totalPages;
    /**
     * @type {?}
     * @protected
     */
    PaginationComponent.prototype.inited;
    /**
     * @type {?}
     * @protected
     */
    PaginationComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDSSxXQUFXLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd2RCxzQ0FHQzs7O0lBRkMsd0NBQXFCOztJQUNyQixnQ0FBYTs7O0FBR2YsTUFBTSxPQUFPLGlDQUFpQyxHQUFhO0lBQ3pELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBT0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBOEc5QixZQUNVLFVBQXNCLEVBQzlCLGdCQUFrQyxFQUMxQixlQUFrQztRQUZsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjs7OztRQTNFbEMsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOzs7OztRQUt0RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBdURuRCxhQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQVFyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQU9sQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUs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O2FBQy9DOzs7O1lBN0JDLFVBQVU7WUFVSCxnQkFBZ0I7WUFadkIsaUJBQWlCOzs7b0JBbUNoQixLQUFLO3NCQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUdMLEtBQUs7MkJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSzsyQkFHTCxLQUFLO3VCQUVMLEtBQUs7aUNBRUwsS0FBSztpQ0FFTCxLQUFLO3FDQUVMLEtBQUs7a0NBRUwsS0FBSztpQ0FFTCxLQUFLO3VCQUdMLE1BQU07MEJBSU4sTUFBTTsyQkFJTixLQUFLO3lCQVdMLEtBQUs7Ozs7SUF4RE4scUNBQW9COzs7OztJQUVwQixvQ0FBd0I7Ozs7O0lBRXhCLHNDQUF5Qjs7Ozs7SUFFekIsNENBQWdDOzs7OztJQUVoQyw2Q0FBaUM7Ozs7O0lBR2pDLHdDQUEyQjs7Ozs7SUFFM0IsMkNBQThCOzs7OztJQUU5Qix1Q0FBMEI7Ozs7O0lBRTFCLHVDQUEwQjs7Ozs7SUFFMUIscUNBQXlCOzs7OztJQUd6QiwyQ0FBOEI7Ozs7O0lBRTlCLHVDQUEyQjs7Ozs7SUFFM0IsaURBQXNFOzs7OztJQUV0RSxpREFBZ0U7Ozs7O0lBRWhFLHFEQUFvRTs7Ozs7SUFFcEUsa0RBQWlFOzs7OztJQUVqRSxpREFBZ0U7Ozs7O0lBR2hFLHVDQUFzRTs7Ozs7O0lBSXRFLDBDQUNtRDs7SUF1RG5ELHVDQUE4Qjs7SUFDOUIsd0NBQStCOztJQUUvQix1Q0FBaUI7O0lBQ2pCLG9DQUFvQjs7Ozs7SUFFcEIsNENBQWdDOzs7OztJQUNoQywwQ0FBOEI7Ozs7O0lBQzlCLDBDQUE4Qjs7Ozs7SUFDOUIscUNBQXlCOzs7OztJQUN6QixvQ0FBb0I7Ozs7O0lBR2xCLHlDQUE4Qjs7Ozs7SUFFOUIsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyLCBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwsIFBhZ2luYXRpb25MaW5rQ29udGV4dCwgUGFnaW5hdGlvbk51bWJlckxpbmtDb250ZXh0IH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VDaGFuZ2VkRXZlbnQge1xuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBhZ2luYXRpb25Db21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcbiAgLy8gbGFiZWxzXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICAvLyBjc3NcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBwYWdlIGxpbmsgKi9cbiAgQElucHV0KCkgY3VzdG9tUGFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyTGlua0NvbnRleHQ+O1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBuZXh0IGxpbmsgKi9cbiAgQElucHV0KCkgY3VzdG9tTmV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBwcmV2aW91cyBsaW5rICovXG4gIEBJbnB1dCgpIGN1c3RvbVByZXZpb3VzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25MaW5rQ29udGV4dD47XG4gIC8qKiBjdXN0b20gdGVtcGxhdGUgZm9yIGZpcnN0IGxpbmsgKi9cbiAgQElucHV0KCkgY3VzdG9tRmlyc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgbGFzdCBsaW5rICovXG4gIEBJbnB1dCgpIGN1c3RvbUxhc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcblxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xuICBAT3V0cHV0KCkgbnVtUGFnZXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG8gb2JqZWN0XG4gICAqIHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcblxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xuICBASW5wdXQoKVxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xuICB9XG5cbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xuICB9XG5cbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNsYXNzTWFwOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XG5cbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKHBhZ2luYXRpb25Db25maWcubWFpbik7XG4gICAgfVxuICB9XG5cbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgIH1cbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxuICAgIHRoaXMubWF4U2l6ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5yb3RhdGUgPVxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xuXG4gICAgLy8gYmFzZSBjbGFzc1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICAvLyB0aGlzIGNsYXNzXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8ICh0aGlzIGFzIGFueSkuY29uZmlnW2Ake2tleX1UZXh0YF07XG4gIH1cblxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKFxuICAgIG51bTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBhY3RpdmU6IGJvb2xlYW5cbiAgKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHsgdGV4dCwgbnVtYmVyOiBudW0sIGFjdGl2ZSB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9XG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8vIGJhc2UgY2xhc3NcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxuICAgICAgICA/IDFcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtZmlsZS1saW5lLWNvdW50XG59XG4iXX0=