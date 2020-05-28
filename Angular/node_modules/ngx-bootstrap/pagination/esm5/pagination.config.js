/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: split
import { Injectable } from '@angular/core';
/**
 * Provides default values for Pagination and pager components
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
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
    PaginationConfig.decorators = [
        { type: Injectable }
    ];
    return PaginationConfig;
}());
export { PaginationConfig };
if (false) {
    /** @type {?} */
    PaginationConfig.prototype.main;
    /** @type {?} */
    PaginationConfig.prototype.pager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLM0M7SUFBQTtRQUVFLFNBQUksR0FBZ0I7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLFVBQUssR0FBZTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsWUFBWTtZQUMxQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7SUFDSixDQUFDOztnQkFyQkEsVUFBVTs7SUFxQlgsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxnQkFBZ0I7OztJQUMzQixnQ0FXRTs7SUFDRixpQ0FNRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIFBhZ2luYXRpb24gYW5kIHBhZ2VyIGNvbXBvbmVudHMgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgbWFpbjogQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4U2l6ZTogdm9pZCAwLFxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxuICAgIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICByb3RhdGU6IHRydWVcbiAgfTtcbiAgcGFnZXI6IFBhZ2VyTW9kZWwgPSB7XG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcbiAgICBwcmV2aW91c1RleHQ6ICfCqyBQcmV2aW91cycsXG4gICAgbmV4dFRleHQ6ICdOZXh0IMK7JyxcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxuICAgIGFsaWduOiB0cnVlXG4gIH07XG59XG4iXX0=