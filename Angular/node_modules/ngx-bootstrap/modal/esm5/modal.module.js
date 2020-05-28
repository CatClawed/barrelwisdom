/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    };
    /**
     * @return {?}
     */
    ModalModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    };
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQUFBO0lBc0JBLENBQUM7Ozs7SUFaUSxtQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsY0FBYyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDO1NBQ3hFLENBQUM7SUFDSixDQUFDOzs7O0lBQ00sb0JBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQztTQUN4RSxDQUFDO0lBQ0osQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QixjQUFjO3dCQUNkLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDO29CQUNqRCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx1QkFBdUIsQ0FBQztpQkFDbkU7O0lBY0Qsa0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2JzLW1vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNb2RhbEJhY2tkcm9wQ29tcG9uZW50LFxuICAgIE1vZGFsRGlyZWN0aXZlLFxuICAgIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtCc01vZGFsU2VydmljZSwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtCc01vZGFsU2VydmljZSwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==