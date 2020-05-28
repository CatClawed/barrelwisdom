/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
// todo: number pipe
// todo: use query from progress?
var BarComponent = /** @class */ (function () {
    function BarComponent(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "type", {
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        get: /**
         * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._type = v;
            this.applyTypeClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        var totalPercentage = this.progress.bars
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
    };
    /**
     * @private
     * @return {?}
     */
    BarComponent.prototype.applyTypeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._prevType) {
            /** @type {?} */
            var barTypeClass = "progress-bar-" + this._prevType;
            /** @type {?} */
            var bgClass = "bg-" + this._prevType;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this._type) {
            /** @type {?} */
            var barTypeClass = "progress-bar-" + this._type;
            /** @type {?} */
            var bgClass = "bg-" + this._type;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this._type;
        }
    };
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
    BarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ProgressbarComponent, decorators: [{ type: Host }] },
        { type: Renderer2 }
    ]; };
    BarComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }],
        setBarWidth: [{ type: HostBinding, args: ['style.width.%',] }],
        addClass: [{ type: HostBinding, args: ['class.progress-bar',] }]
    };
    return BarComponent;
}());
export { BarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFJNUM7SUFpRUUsc0JBQ1UsRUFBYyxFQUNkLFFBQThCLEVBQzlCLFFBQW1CO1FBRm5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFFZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbEJNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFRbkQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQVlWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFwREQsc0JBQ0ksOEJBQUk7UUFGUixtR0FBbUc7Ozs7O1FBQ25HO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFBUyxDQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BTEE7SUFRRCxzQkFDSSwrQkFBSztRQUZULG9DQUFvQzs7Ozs7UUFDcEM7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQVM7WUFDakIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FB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Ozs7dUJBMkJSLEtBQUs7d0JBV0wsS0FBSzs4QkFhTCxXQUFXLFNBQUMsZUFBZTsyQkFPM0IsV0FBVyxTQUFDLG9CQUFvQjs7SUE2RG5DLG1CQUFDO0NBQUEsQUEvR0QsSUErR0M7U0FoR1ksWUFBWTs7O0lBQ3ZCLDJCQUFZOztJQWtDWixnQ0FBbUQ7O0lBTW5ELCtCQUFpQjs7SUFDakIsK0JBQWlCOztJQUNqQiwrQkFBWTs7SUFDWixnQ0FBK0I7Ozs7O0lBRS9CLDhCQUF5Qjs7Ozs7SUFDekIsNkJBQXdCOzs7OztJQUN4QixpQ0FBMEI7Ozs7O0lBR3hCLDBCQUFzQjs7Ozs7SUFFdEIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuLy8gdG9kbzogbnVtYmVyIHBpcGVcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItc3RyaXBlZF0nOiAnc3RyaXBlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQnMzICYmIGFuaW1hdGUnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdwZXJjZW50ID8gcGVyY2VudC50b0ZpeGVkKDApICsgXCIlXCIgOiBcIlwiJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbWF4OiBudW1iZXI7XG5cbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBzZXQgdHlwZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdjtcbiAgICB0aGlzLmFwcGx5VHlwZUNsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XG4gICAgaWYgKCF2ICYmIHYgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLiUnKVxuICBnZXQgc2V0QmFyV2lkdGgoKSB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcblxuICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByb2dyZXNzLWJhcicpIGFkZENsYXNzID0gdHJ1ZTtcblxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBzdHJpcGVkOiBib29sZWFuO1xuICBhbmltYXRlOiBib29sZWFuO1xuICBwZXJjZW50ID0gMDtcbiAgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByZXZUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIHByb2dyZXNzOiBQcm9ncmVzc2JhckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5hZGRCYXIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzLnJlbW92ZUJhcih0aGlzKTtcbiAgfVxuXG4gIHJlY2FsY3VsYXRlUGVyY2VudGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBlcmNlbnQgPSArKHRoaXMudmFsdWUgLyB0aGlzLnByb2dyZXNzLm1heCAqIDEwMCkudG9GaXhlZCgyKTtcblxuICAgIGNvbnN0IHRvdGFsUGVyY2VudGFnZSA9IHRoaXMucHJvZ3Jlc3MuYmFyc1xuICAgICAgLnJlZHVjZShmdW5jdGlvbiAodG90YWw6IG51bWJlciwgYmFyOiBCYXJDb21wb25lbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdG90YWwgKyBiYXIucGVyY2VudDtcbiAgICAgIH0sIDApO1xuXG4gICAgaWYgKHRvdGFsUGVyY2VudGFnZSA+IDEwMCkge1xuICAgICAgdGhpcy5wZXJjZW50IC09IHRvdGFsUGVyY2VudGFnZSAtIDEwMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5VHlwZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ByZXZUeXBlKSB7XG4gICAgICBjb25zdCBiYXJUeXBlQ2xhc3MgPSBgcHJvZ3Jlc3MtYmFyLSR7dGhpcy5fcHJldlR5cGV9YDtcbiAgICAgIGNvbnN0IGJnQ2xhc3MgPSBgYmctJHt0aGlzLl9wcmV2VHlwZX1gO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJhclR5cGVDbGFzcyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmdDbGFzcyk7XG4gICAgICB0aGlzLl9wcmV2VHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3R5cGUpIHtcbiAgICAgIGNvbnN0IGJhclR5cGVDbGFzcyA9IGBwcm9ncmVzcy1iYXItJHt0aGlzLl90eXBlfWA7XG4gICAgICBjb25zdCBiZ0NsYXNzID0gYGJnLSR7dGhpcy5fdHlwZX1gO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJhclR5cGVDbGFzcyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmdDbGFzcyk7XG4gICAgICB0aGlzLl9wcmV2VHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICB9XG59XG4iXX0=