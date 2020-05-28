/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.pColorschemesOptions = {};
        this.colorschemesOptions = new BehaviorSubject({});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    ThemeService.prototype.setColorschemesOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    };
    /**
     * @return {?}
     */
    ThemeService.prototype.getColorschemesOptions = /**
     * @return {?}
     */
    function () {
        return this.pColorschemesOptions;
    };
    ThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return []; };
    /** @nocollapse */ ThemeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(); }, token: ThemeService, providedIn: "root" });
    return ThemeService;
}());
export { ThemeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.pColorschemesOptions;
    /** @type {?} */
    ThemeService.prototype.colorschemesOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd2QztJQU9FO1FBSFEseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQUVuRCxDQUFDOzs7OztJQUVqQiw2Q0FBc0I7Ozs7SUFBdEIsVUFBdUIsT0FBcUI7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCw2Q0FBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFORDtDQXFCQyxBQWpCRCxJQWlCQztTQWRZLFlBQVk7Ozs7OztJQUN2Qiw0Q0FBZ0Q7O0lBQ2hELDJDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBwQ29sb3JzY2hlbWVzT3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XHJcbiAgcHVibGljIGNvbG9yc2NoZW1lc09wdGlvbnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENoYXJ0T3B0aW9ucz4oe30pO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBzZXRDb2xvcnNjaGVtZXNPcHRpb25zKG9wdGlvbnM6IENoYXJ0T3B0aW9ucykge1xyXG4gICAgdGhpcy5wQ29sb3JzY2hlbWVzT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmNvbG9yc2NoZW1lc09wdGlvbnMubmV4dChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldENvbG9yc2NoZW1lc09wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wQ29sb3JzY2hlbWVzT3B0aW9ucztcclxuICB9XHJcbn1cclxuIl19