/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
export class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: Injector },
    { type: PositioningService },
    { type: ApplicationRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._posService;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._applicationRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUFFLHdCQUF3QixFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQzFFLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7SUFDakMsWUFBb0IseUJBQW1ELEVBQ25ELE9BQWUsRUFDZixTQUFtQixFQUNuQixXQUErQixFQUMvQixlQUErQjtRQUovQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFRdkQsWUFBWSxDQUFJLFdBQXVCLEVBQ3ZCLGlCQUFtQyxFQUNuQyxTQUFvQjtRQUNsQyxPQUFPLElBQUksZUFBZSxDQUN4QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFdBQVcsRUFDWCxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyx5QkFBeUIsRUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO0lBQ0osQ0FBQzs7O1lBM0JGLFVBQVU7Ozs7WUFOTyx3QkFBd0I7WUFDeEMsTUFBTTtZQUQ0RCxRQUFRO1lBSW5FLGtCQUFrQjtZQUp6QixjQUFjOzs7Ozs7O0lBUUYsMkRBQTJEOzs7OztJQUMzRCx5Q0FBdUI7Ozs7O0lBQ3ZCLDJDQUEyQjs7Ozs7SUFDM0IsNkNBQXVDOzs7OztJQUN2QyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvcixcbiAgTmdab25lLCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWZcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBfcmVuZGVyZXJcbiAgICovXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXIsXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIHRoaXMuX2luamVjdG9yLFxuICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgdGhpcy5fbmdab25lLFxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYsXG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlXG4gICAgKTtcbiAgfVxufVxuIl19