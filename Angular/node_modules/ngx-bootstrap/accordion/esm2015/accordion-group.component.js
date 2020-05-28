/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then((/**
             * @return {?}
             */
            () => {
                this.isOpenChange.emit(value);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                /* tslint:disable: no-console */
                console.log(error);
            }));
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                },
                styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
            }] }
];
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: Input }],
    panelClass: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isOpenChange: [{ type: Output }],
    isOpen: [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input }]
};
if (false) {
    /**
     * turn on/off animation
     * @type {?}
     */
    AccordionPanelComponent.prototype.isAnimated;
    /**
     * Clickable text in accordion's group header, check `accordion heading` below for using html in header
     * @type {?}
     */
    AccordionPanelComponent.prototype.heading;
    /**
     * Provides an ability to use Bootstrap's contextual panel classes
     * (`panel-primary`, `panel-success`, `panel-info`, etc...).
     * List of all available classes [available here]
     * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
     * @type {?}
     */
    AccordionPanelComponent.prototype.panelClass;
    /**
     * if <code>true</code> — disables accordion group
     * @type {?}
     */
    AccordionPanelComponent.prototype.isDisabled;
    /**
     * Emits when the opened state changes
     * @type {?}
     */
    AccordionPanelComponent.prototype.isOpenChange;
    /**
     * @type {?}
     * @protected
     */
    AccordionPanelComponent.prototype._isOpen;
    /**
     * @type {?}
     * @protected
     */
    AccordionPanelComponent.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFDL0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBaUIzRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBK0NsQyxZQUF3QyxTQUE2Qjs7OztRQTdDckUsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQVlULGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUE4QnpELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBL0JELElBRUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQztpQkFDQyxLQUFLOzs7O1lBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtnQkFDdEIsZ0NBQWdDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QywrMEJBQStDO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7O2FBRUY7Ozs7WUFoQlEsa0JBQWtCLHVCQWdFWixNQUFNLFNBQUMsa0JBQWtCOzs7c0JBM0NyQyxLQUFLO3lCQU1MLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxNQUFNO3FCQUlOLFdBQVcsU0FBQyxrQkFBa0IsY0FDOUIsS0FBSzs7Ozs7OztJQWpCTiw2Q0FBbUI7Ozs7O0lBRW5CLDBDQUF5Qjs7Ozs7Ozs7SUFNekIsNkNBQTRCOzs7OztJQUU1Qiw2Q0FBNkI7Ozs7O0lBRTdCLCtDQUFtRTs7Ozs7SUE4Qm5FLDBDQUEwQjs7Ozs7SUFDMUIsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogIyMjIEFjY29yZGlvbiBoZWFkaW5nXG4gKiBJbnN0ZWFkIG9mIHVzaW5nIGBoZWFkaW5nYCBhdHRyaWJ1dGUgb24gdGhlIGBhY2NvcmRpb24tZ3JvdXBgLCB5b3UgY2FuIHVzZVxuICogYW4gYGFjY29yZGlvbi1oZWFkaW5nYCBhdHRyaWJ1dGUgb24gYGFueWAgZWxlbWVudCBpbnNpZGUgb2YgYSBncm91cCB0aGF0XG4gKiB3aWxsIGJlIHVzZWQgYXMgZ3JvdXAncyBoZWFkZXIgdGVtcGxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FjY29yZGlvbi1ncm91cCwgYWNjb3JkaW9uLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3BhbmVsJyxcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrJ1xuICB9LFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgLyoqIENsaWNrYWJsZSB0ZXh0IGluIGFjY29yZGlvbidzIGdyb3VwIGhlYWRlciwgY2hlY2sgYGFjY29yZGlvbiBoZWFkaW5nYCBiZWxvdyBmb3IgdXNpbmcgaHRtbCBpbiBoZWFkZXIgKi9cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICAvKiogUHJvdmlkZXMgYW4gYWJpbGl0eSB0byB1c2UgQm9vdHN0cmFwJ3MgY29udGV4dHVhbCBwYW5lbCBjbGFzc2VzXG4gICAqIChgcGFuZWwtcHJpbWFyeWAsIGBwYW5lbC1zdWNjZXNzYCwgYHBhbmVsLWluZm9gLCBldGMuLi4pLlxuICAgKiBMaXN0IG9mIGFsbCBhdmFpbGFibGUgY2xhc3NlcyBbYXZhaWxhYmxlIGhlcmVdXG4gICAqIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy8zLjMvY29tcG9uZW50cy8jcGFuZWxzLWFsdGVybmF0aXZlcylcbiAgICovXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZztcbiAgLyoqIGlmIDxjb2RlPnRydWU8L2NvZGU+IOKAlCBkaXNhYmxlcyBhY2NvcmRpb24gZ3JvdXAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG9wZW5lZCBzdGF0ZSBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBRdWVzdGlvbmFibGUsIG1heWJlIC5wYW5lbC1vcGVuIHNob3VsZCBiZSBvbiBjaGlsZCBkaXYucGFuZWwgZWxlbWVudD9cbiAgLyoqIElzIGFjY29yZGlvbiBncm91cCBvcGVuIG9yIGNsb3NlZC4gVGhpcyBwcm9wZXJ0eSBzdXBwb3J0cyB0d28td2F5IGJpbmRpbmcgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYW5lbC1vcGVuJylcbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pc09wZW4pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVyUGFuZWxzKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pc09wZW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uQ29tcG9uZW50KSBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbENsYXNzID0gdGhpcy5wYW5lbENsYXNzIHx8ICdwYW5lbC1kZWZhdWx0JztcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgfVxuICB9XG59XG4iXX0=