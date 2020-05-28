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
export var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return PaginationComponent; })),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
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
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[key + "Text"] || ((/** @type {?} */ (this))).config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = 
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
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
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    /**
     * @protected
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = 
    // base class
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PaginationConfig },
        { type: ChangeDetectorRef }
    ]; };
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
    return PaginationComponent;
}());
export { PaginationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDSSxXQUFXLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd2RCxzQ0FHQzs7O0lBRkMsd0NBQXFCOztJQUNyQixnQ0FBYTs7O0FBR2YsTUFBTSxLQUFPLGlDQUFpQyxHQUFhO0lBQ3pELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBbUhFLDZCQUNVLFVBQXNCLEVBQzlCLGdCQUFrQyxFQUMxQixlQUFrQztRQUZsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjs7OztRQTNFbEMsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOzs7OztRQUt0RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBdURuRCxhQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQVFyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQU9sQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJ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MENBQThCOzs7OztJQUM5QiwwQ0FBOEI7Ozs7O0lBQzlCLHFDQUF5Qjs7Ozs7SUFDekIsb0NBQW9COzs7OztJQUdsQix5Q0FBOEI7Ozs7O0lBRTlCLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlciwgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsLCBQYWdpbmF0aW9uTGlua0NvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJMaW5rQ29udGV4dCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgcGFnaW5hdGlvbiBjb21wb25lbnQgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcGFnZSBsaW5rICovXG4gIEBJbnB1dCgpIGN1c3RvbVBhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbk51bWJlckxpbmtDb250ZXh0PjtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgbmV4dCBsaW5rICovXG4gIEBJbnB1dCgpIGN1c3RvbU5leHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcHJldmlvdXMgbGluayAqL1xuICBASW5wdXQoKSBjdXN0b21QcmV2aW91c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBmaXJzdCBsaW5rICovXG4gIEBJbnB1dCgpIGN1c3RvbUZpcnN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25MaW5rQ29udGV4dD47XG4gIC8qKiBjdXN0b20gdGVtcGxhdGUgZm9yIGxhc3QgbGluayAqL1xuICBASW5wdXQoKSBjdXN0b21MYXN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25MaW5rQ29udGV4dD47XG5cbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvIG9iamVjdFxuICAgKiB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+KCk7XG5cbiAgLyoqIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLiBJZiB2YWx1ZSBsZXNzIHRoYW4gMSB3aWxsIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIG9uZSBwYWdlICovXG4gIEBJbnB1dCgpXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXNQZXJQYWdlO1xuICB9XG5cbiAgc2V0IGl0ZW1zUGVyUGFnZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcbiAgfVxuXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsSXRlbXMgPSB2O1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICB9XG5cbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcbiAgfVxuXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2O1xuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IHZhbHVlIHx8IDE7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG5cbiAgICBpZiAoX3ByZXZpb3VzID09PSB0aGlzLl9wYWdlIHx8IHR5cGVvZiBfcHJldmlvdXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjbGFzc01hcDogc3RyaW5nO1xuICBwYWdlczogUGFnZXNNb2RlbFtdO1xuXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxJdGVtczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhwYWdpbmF0aW9uQ29uZmlnLm1haW4pO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpZ3VyZU9wdGlvbnMoY29uZmlnOiBDb25maWdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jbGFzc01hcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcbiAgICB9XG4gICAgLy8gd2F0Y2ggZm9yIG1heFNpemVcbiAgICB0aGlzLm1heFNpemUgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heFNpemUgOiB0aGlzLmNvbmZpZy5tYXhTaXplO1xuICAgIHRoaXMucm90YXRlID1cbiAgICAgIHR5cGVvZiB0aGlzLnJvdGF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnJvdGF0ZSA6IHRoaXMuY29uZmlnLnJvdGF0ZTtcbiAgICB0aGlzLmJvdW5kYXJ5TGlua3MgPVxuICAgICAgdHlwZW9mIHRoaXMuYm91bmRhcnlMaW5rcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmJvdW5kYXJ5TGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5ib3VuZGFyeUxpbmtzO1xuICAgIHRoaXMuZGlyZWN0aW9uTGlua3MgPVxuICAgICAgdHlwZW9mIHRoaXMuZGlyZWN0aW9uTGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5kaXJlY3Rpb25MaW5rc1xuICAgICAgICA6IHRoaXMuY29uZmlnLmRpcmVjdGlvbkxpbmtzO1xuICAgIHRoaXMucGFnZUJ0bkNsYXNzID1cbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLnBhZ2VCdG5DbGFzc1xuICAgICAgICA6IHRoaXMuY29uZmlnLnBhZ2VCdG5DbGFzcztcblxuICAgIC8vIGJhc2UgY2xhc3NcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9XG4gICAgICB0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5pdGVtc1BlclBhZ2VcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgLy8gdGhpcyBjbGFzc1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cblxuICBnZXRUZXh0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbYCR7a2V5fVRleHRgXSB8fCAodGhpcyBhcyBhbnkpLmNvbmZpZ1tgJHtrZXl9VGV4dGBdO1xuICB9XG5cbiAgbm9QcmV2aW91cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbm9OZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyLCBldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB0YXJnZXQuYmx1cigpO1xuICAgICAgfVxuICAgICAgdGhpcy53cml0ZVZhbHVlKHBhZ2UpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXG4gIHByb3RlY3RlZCBtYWtlUGFnZShcbiAgICBudW06IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgYWN0aXZlOiBib29sZWFuXG4gICk6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7IHRleHQsIG51bWJlcjogbnVtLCBhY3RpdmUgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9XG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKSwgMSk7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhTaXplICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVmlzaWJsZSBwYWdlcyBhcmUgcGFnaW5hdGVkIHdpdGggbWF4U2l6ZVxuICAgICAgICBzdGFydFBhZ2UgPVxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xuXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGxpbmtzIHRvIG1vdmUgYmV0d2VlbiBwYWdlIHNldHNcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZVNldCA9IHRoaXMubWFrZVBhZ2Uoc3RhcnRQYWdlIC0gMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlU2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvLyBiYXNlIGNsYXNzXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9XG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcbiAgICAgICAgPyAxXG4gICAgICAgIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcblxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICB9XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWZpbGUtbGluZS1jb3VudFxufVxuIl19