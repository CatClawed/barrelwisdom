/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOtherPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                }] }
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: Input }],
        closeOthers: [{ type: Input }]
    };
    return AccordionComponent;
}());
export { AccordionComponent };
if (false) {
    /**
     * turn on/off animation
     * @type {?}
     */
    AccordionComponent.prototype.isAnimated;
    /**
     * if `true` expanding one item will close all others
     * @type {?}
     */
    AccordionComponent.prototype.closeOthers;
    /**
     * @type {?}
     * @protected
     */
    AccordionComponent.prototype.groups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR3JEO0lBa0JFLDRCQUFZLE1BQXVCOzs7O1FBTjFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbEIsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFHL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBa0M7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUE4QjtZQUNqRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHFDQUFROzs7O0lBQVIsVUFBUyxLQUE4QjtRQUNyQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksS0FBOEI7O1lBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLDZCQUE2QixFQUFFLGFBQWE7d0JBQzVDLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxhQUFhO3dCQUNwQixLQUFLLEVBQUUsZ0JBQWdCO3FCQUN4QjtpQkFDRjs7OztnQkFaUSxlQUFlOzs7NkJBZXJCLEtBQUs7OEJBRUwsS0FBSzs7SUErQlIseUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQW5DWSxrQkFBa0I7Ozs7OztJQUU3Qix3Q0FBNEI7Ozs7O0lBRTVCLHlDQUE4Qjs7Ozs7SUFFOUIsb0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcblxuLyoqIERpc3BsYXlzIGNvbGxhcHNpYmxlIGNvbnRlbnQgcGFuZWxzIGZvciBwcmVzZW50aW5nIGluZm9ybWF0aW9uIGluIGEgbGltaXRlZCBhbW91bnQgb2Ygc3BhY2UuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2NvcmRpb24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdjbG9zZU90aGVycycsXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgIGNsYXNzOiAncGFuZWwtZ3JvdXAnLFxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIC8qKiBpZiBgdHJ1ZWAgZXhwYW5kaW5nIG9uZSBpdGVtIHdpbGwgY2xvc2UgYWxsIG90aGVycyAqL1xuICBASW5wdXQoKSBjbG9zZU90aGVyczogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgZ3JvdXBzOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBBY2NvcmRpb25Db25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBjbG9zZU90aGVyUGFuZWxzKG9wZW5Hcm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgZ3JvdXAuaXNBbmltYXRlZCA9IHRoaXMuaXNBbmltYXRlZDtcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgfVxuXG4gIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==