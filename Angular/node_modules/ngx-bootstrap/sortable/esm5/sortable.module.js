/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    SortableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SortableComponent],
                    imports: [CommonModule],
                    exports: [SortableComponent]
                },] }
    ];
    return SortableModule;
}());
export { SortableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS8iLCJzb3VyY2VzIjpbInNvcnRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBQUE7SUFTQSxDQUFDOzs7O0lBSFEsc0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0lBQ3pFLENBQUM7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7O0lBS0QscUJBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTb3J0YWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbU29ydGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNvcnRhYmxlTW9kdWxlLCBwcm92aWRlcnM6IFtEcmFnZ2FibGVJdGVtU2VydmljZV0gfTtcbiAgfVxufVxuIl19