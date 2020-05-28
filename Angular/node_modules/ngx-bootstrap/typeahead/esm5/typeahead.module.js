/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TypeaheadConfig } from './typeahead.config';
var TypeaheadModule = /** @class */ (function () {
    function TypeaheadModule() {
    }
    /**
     * @return {?}
     */
    TypeaheadModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TypeaheadModule,
            providers: [ComponentLoaderFactory, PositioningService, TypeaheadConfig]
        };
    };
    TypeaheadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                    exports: [TypeaheadContainerComponent, TypeaheadDirective],
                    entryComponents: [TypeaheadContainerComponent]
                },] }
    ];
    return TypeaheadModule;
}());
export { TypeaheadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUFBO0lBYUEsQ0FBQzs7OztJQU5RLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUM7U0FDekUsQ0FBQztJQUNKLENBQUM7O2dCQVpGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixDQUFDO29CQUMvRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxrQkFBa0IsQ0FBQztvQkFDMUQsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQy9DOztJQVFELHNCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFR5cGVhaGVhZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0NvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZSwgVHlwZWFoZWFkQ29uZmlnXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==