/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
// todo: number pipe
// todo: use query from progress?
export class BarComponent {
    /**
     * @param {?} el
     * @param {?} progress
     * @param {?} renderer
     */
    constructor(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set type(v) {
        this._type = v;
        this.applyTypeClasses();
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
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
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        const totalPercentage = this.progress.bars
            .reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
    /**
     * @private
     * @return {?}
     */
    applyTypeClasses() {
        if (this._prevType) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this._prevType}`;
            /** @type {?} */
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this._type) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this._type}`;
            /** @type {?} */
            const bgClass = `bg-${this._type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this._type;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"'
                }
            }] }
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ProgressbarComponent, decorators: [{ type: Host }] },
    { type: Renderer2 }
];
BarComponent.propDecorators = {
    type: [{ type: Input }],
    value: [{ type: Input }],
    setBarWidth: [{ type: HostBinding, args: ['style.width.%',] }],
    addClass: [{ type: HostBinding, args: ['class.progress-bar',] }]
};
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /** @type {?} */
    BarComponent.prototype.addClass;
    /** @type {?} */
    BarComponent.prototype.striped;
    /** @type {?} */
    BarComponent.prototype.animate;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._value;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype._prevType;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFtQjVDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFrRHZCLFlBQ1UsRUFBYyxFQUNkLFFBQThCLEVBQzlCLFFBQW1CO1FBRm5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFFZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbEJNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFRbkQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQVlWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBcERELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUdELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hC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VyxTQUFDLG9CQUFvQjs7OztJQWxDakMsMkJBQVk7O0lBa0NaLGdDQUFtRDs7SUFNbkQsK0JBQWlCOztJQUNqQiwrQkFBaUI7O0lBQ2pCLCtCQUFZOztJQUNaLGdDQUErQjs7Ozs7SUFFL0IsOEJBQXlCOzs7OztJQUN6Qiw2QkFBd0I7Ozs7O0lBQ3hCLGlDQUEwQjs7Ozs7SUFHeEIsMEJBQXNCOzs7OztJQUV0QixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG4vLyB0b2RvOiBudW1iZXIgcGlwZVxuLy8gdG9kbzogdXNlIHF1ZXJ5IGZyb20gcHJvZ3Jlc3M/XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdJzogJyFpc0JzMyAmJiBhbmltYXRlJyxcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxuICAgICdbc3R5bGUuaGVpZ2h0LiVdJzogJ1wiMTAwXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBtYXg6IG51bWJlcjtcblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHNldCB0eXBlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2O1xuICAgIHRoaXMuYXBwbHlUeXBlQ2xhc3NlcygpO1xuICB9XG5cbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICBpZiAoIXYgJiYgdiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGguJScpXG4gIGdldCBzZXRCYXJXaWR0aCgpIHtcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMucGVyY2VudDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MtYmFyJykgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIHN0cmlwZWQ6IGJvb2xlYW47XG4gIGFuaW1hdGU6IGJvb2xlYW47XG4gIHBlcmNlbnQgPSAwO1xuICBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQ7XG5cbiAgcHJvdGVjdGVkIF92YWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJldlR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzLmFkZEJhcih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZ3Jlc3MucmVtb3ZlQmFyKHRoaXMpO1xuICB9XG5cbiAgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGVyY2VudCA9ICsodGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4ICogMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xuICAgICAgfSwgMCk7XG5cbiAgICBpZiAodG90YWxQZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUeXBlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcHJldlR5cGUpIHtcbiAgICAgIGNvbnN0IGJhclR5cGVDbGFzcyA9IGBwcm9ncmVzcy1iYXItJHt0aGlzLl9wcmV2VHlwZX1gO1xuICAgICAgY29uc3QgYmdDbGFzcyA9IGBiZy0ke3RoaXMuX3ByZXZUeXBlfWA7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmFyVHlwZUNsYXNzKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcbiAgICAgIHRoaXMuX3ByZXZUeXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgY29uc3QgYmFyVHlwZUNsYXNzID0gYHByb2dyZXNzLWJhci0ke3RoaXMuX3R5cGV9YDtcbiAgICAgIGNvbnN0IGJnQ2xhc3MgPSBgYmctJHt0aGlzLl90eXBlfWA7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmFyVHlwZUNsYXNzKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcbiAgICAgIHRoaXMuX3ByZXZUeXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==