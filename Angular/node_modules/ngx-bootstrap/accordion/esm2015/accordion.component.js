/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
export class AccordionComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
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
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: Input }],
    closeOthers: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBYXJELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFRN0IsWUFBWSxNQUF1Qjs7OztRQU4xQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSWxCLFdBQU0sR0FBOEIsRUFBRSxDQUFDO1FBRy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsU0FBa0M7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFDckQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBOEI7UUFDckMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCOztjQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSxhQUFhO29CQUM1QyxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7YUFDRjs7OztZQVpRLGVBQWU7Ozt5QkFlckIsS0FBSzswQkFFTCxLQUFLOzs7Ozs7O0lBRk4sd0NBQTRCOzs7OztJQUU1Qix5Q0FBOEI7Ozs7O0lBRTlCLG9DQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XG5cbi8qKiBEaXNwbGF5cyBjb2xsYXBzaWJsZSBjb250ZW50IHBhbmVscyBmb3IgcHJlc2VudGluZyBpbmZvcm1hdGlvbiBpbiBhIGxpbWl0ZWQgYW1vdW50IG9mIHNwYWNlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZV0nOiAnY2xvc2VPdGhlcnMnLFxuICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICBjbGFzczogJ3BhbmVsLWdyb3VwJyxcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogaWYgYHRydWVgIGV4cGFuZGluZyBvbmUgaXRlbSB3aWxsIGNsb3NlIGFsbCBvdGhlcnMgKi9cbiAgQElucHV0KCkgY2xvc2VPdGhlcnM6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIGdyb3VwczogQWNjb3JkaW9uUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQWNjb3JkaW9uQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgY2xvc2VPdGhlclBhbmVscyhvcGVuR3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3NlT3RoZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAoZ3JvdXAgIT09IG9wZW5Hcm91cCkge1xuICAgICAgICBncm91cC5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZEdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGdyb3VwLmlzQW5pbWF0ZWQgPSB0aGlzLmlzQW5pbWF0ZWQ7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gIH1cblxuICByZW1vdmVHcm91cChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=