/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: split
import { Injectable } from '@angular/core';
/**
 * Provides default values for Pagination and pager components
 */
export class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    PaginationConfig.prototype.main;
    /** @type {?} */
    PaginationConfig.prototype.pager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVFLFNBQUksR0FBZ0I7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLFVBQUssR0FBZTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsWUFBWTtZQUMxQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7SUFDSixDQUFDOzs7WUFyQkEsVUFBVTs7OztJQUVULGdDQVdFOztJQUNGLGlDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdG9kbzogc3BsaXRcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VyTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XG5cbi8qKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyBmb3IgUGFnaW5hdGlvbiBhbmQgcGFnZXIgY29tcG9uZW50cyAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db25maWcge1xuICBtYWluOiBDb25maWdNb2RlbCA9IHtcbiAgICBtYXhTaXplOiB2b2lkIDAsXG4gICAgaXRlbXNQZXJQYWdlOiAxMCxcbiAgICBib3VuZGFyeUxpbmtzOiBmYWxzZSxcbiAgICBkaXJlY3Rpb25MaW5rczogdHJ1ZSxcbiAgICBmaXJzdFRleHQ6ICdGaXJzdCcsXG4gICAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxuICAgIG5leHRUZXh0OiAnTmV4dCcsXG4gICAgbGFzdFRleHQ6ICdMYXN0JyxcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxuICAgIHJvdGF0ZTogdHJ1ZVxuICB9O1xuICBwYWdlcjogUGFnZXJNb2RlbCA9IHtcbiAgICBpdGVtc1BlclBhZ2U6IDE1LFxuICAgIHByZXZpb3VzVGV4dDogJ8KrIFByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQgwrsnLFxuICAgIHBhZ2VCdG5DbGFzczogJycsXG4gICAgYWxpZ246IHRydWVcbiAgfTtcbn1cbiJdfQ==