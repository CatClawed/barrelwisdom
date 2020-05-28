/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.selectTab = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.selectTab.emit(this);
            this.tabset.tabs.forEach((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "ariaLabelledby", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id ? this.id + "-link" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'tab, [tab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        heading: [{ type: Input }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        selectTab: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }]
    };
    return TabDirective;
}());
export { TabDirective };
if (false) {
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element
     * @type {?}
     */
    TabDirective.prototype.id;
    /**
     * if true tab can not be activated
     * @type {?}
     */
    TabDirective.prototype.disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.selectTab;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed, $event:Tab equals to instance of removed tab
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.role;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._active;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._customClass;
    /** @type {?} */
    TabDirective.prototype.elementRef;
    /** @type {?} */
    TabDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBaUZFLHNCQUNFLE1BQXVCLEVBQ2hCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQXJCbEIsY0FBUyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRTNELGFBQVEsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUxRCxZQUFPLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBZ0IxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBNUVELHNCQUNJLHFDQUFXO1FBRmYsMEZBQTBGOzs7OztRQUMxRjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUVELFVBQWdCLFdBQW1CO1lBQW5DLGlCQWNDO1lBYkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsUUFBZ0I7b0JBQ25ELEtBQUksQ0FBQyxRQUFRLENBQUMs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QixpQ0FBNEI7Ozs7O0lBcUQ1QixpQ0FBcUU7Ozs7O0lBRXJFLGdDQUFvRTs7Ozs7SUFFcEUsK0JBQW1FOztJQUVuRSxnQ0FBK0M7O0lBQy9DLDRCQUE0Qzs7SUFNNUMsa0NBQTZCOztJQUM3Qiw4QkFBd0I7Ozs7O0lBQ3hCLCtCQUEyQjs7Ozs7SUFDM0Isb0NBQStCOztJQUk3QixrQ0FBNkI7O0lBQzdCLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0YWIsIFt0YWJdJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiB0YWIgaWQuIFRoZSBzYW1lIGlkIHdpdGggc3VmZml4ICctbGluaycgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyAmbHQ7bGkmZ3Q7IGVsZW1lbnQgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcbiAgfVxuXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3MgPyBjdXN0b21DbGFzcy50cmltKCkgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLnNlbGVjdFRhYi5lbWl0KHRoaXMpO1xuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcbiAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIHNlbGVjdFRhYjogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQsICRldmVudDpUYWIgZXF1YWxzIHRvIGluc3RhbmNlIG9mIHJlbW92ZWQgdGFiICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgYWRkQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAndGFicGFuZWwnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgZ2V0IGFyaWFMYWJlbGxlZGJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWQgPyBgJHt0aGlzLmlkfS1saW5rYCA6ICcnO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcbiAgfVxufVxuIl19