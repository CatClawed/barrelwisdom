/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, forwardRef, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingConfig } from './rating.config';
/** @type {?} */
export const RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => RatingComponent)),
    multi: true
};
export class RatingComponent {
    /**
     * @param {?} changeDetection
     * @param {?} config
     */
    constructor(changeDetection, config) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new EventEmitter();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.value = Math.round(this.preValue);
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    rate(value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    buildTemplateObjects(max) {
        /** @type {?} */
        const result = [];
        for (let i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'rating',
                template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                providers: [RATING_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: RatingConfig }
];
RatingComponent.propDecorators = {
    max: [{ type: Input }],
    readonly: [{ type: Input }],
    titles: [{ type: Input }],
    customTemplate: [{ type: Input }],
    onHover: [{ type: Output }],
    onLeave: [{ type: Output }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /**
     * number of icons
     * @type {?}
     */
    RatingComponent.prototype.max;
    /**
     * if true will not react on any user events
     * @type {?}
     */
    RatingComponent.prototype.readonly;
    /**
     * array of icons titles, default: (["one", "two", "three", "four", "five"])
     * @type {?}
     */
    RatingComponent.prototype.titles;
    /**
     * custom template for icons
     * @type {?}
     */
    RatingComponent.prototype.customTemplate;
    /**
     * fired when icon selected, $event:number equals to selected rating
     * @type {?}
     */
    RatingComponent.prototype.onHover;
    /**
     * fired when icon selected, $event:number equals to previous rating value
     * @type {?}
     */
    RatingComponent.prototype.onLeave;
    /** @type {?} */
    RatingComponent.prototype.onChange;
    /** @type {?} */
    RatingComponent.prototype.onTouched;
    /**
     * aria label for rating
     * @type {?}
     */
    RatingComponent.prototype.ariaLabel;
    /** @type {?} */
    RatingComponent.prototype.range;
    /** @type {?} */
    RatingComponent.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    RatingComponent.prototype.preValue;
    /**
     * @type {?}
     * @private
     */
    RatingComponent.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcmF0aW5nLyIsInNvdXJjZXMiOlsicmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sVUFBVSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDcEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsTUFBTSxPQUFPLDZCQUE2QixHQUFvQjtJQUM1RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFRRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUF5QjFCLFlBQW9CLGVBQWtDLEVBQzFDLE1BQW9CO1FBRFosb0JBQWUsR0FBZixlQUFlLENBQW1COzs7O1FBdkI3QyxRQUFHLEdBQUcsQ0FBQyxDQUFDOzs7O1FBU1AsWUFBTyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRW5ELFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFHN0QsYUFBUSxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7O1FBRW5DLGNBQVMsR0FBUSxRQUFRLENBQUMsU0FBUyxDQUFDO1FBU2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVB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QUM7Ozs7OztJQUVTLG9CQUFvQixDQUFDLEdBQVc7O2NBQ2xDLE1BQU0sR0FBb0IsRUFBRTtRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFqSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQix1OUJBQXNDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFsQm1ELGlCQUFpQjtZQUk1RCxZQUFZOzs7a0JBaUJsQixLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSzs2QkFHTCxLQUFLO3NCQUVMLE1BQU07c0JBRU4sTUFBTTt3QkFpQk4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTVCbkMsOEJBQWlCOzs7OztJQUVqQixtQ0FBMkI7Ozs7O0lBRTNCLGlDQUEwQjs7Ozs7SUFHMUIseUNBQTBDOzs7OztJQUUxQyxrQ0FBNkQ7Ozs7O0lBRTdELGtDQUE2RDs7SUFHN0QsbUNBQW1DOztJQUVuQyxvQ0FBb0M7Ozs7O0lBRXBDLG9DQUFrQjs7SUFDbEIsZ0NBQXVCOztJQUN2QixnQ0FBYzs7Ozs7SUFDZCxtQ0FBMkI7Ozs7O0lBRWYsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBmb3J3YXJkUmVmLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWNjZXNzb3JDb250ZW50LCBSYXRpbmdSZXN1bHRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgUmF0aW5nQ29uZmlnIH0gZnJvbSAnLi9yYXRpbmcuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFJBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBBY2Nlc3NvckNvbnRlbnQgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1JBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBudW1iZXIgb2YgaWNvbnMgKi9cbiAgQElucHV0KCkgbWF4ID0gNTtcbiAgLyoqIGlmIHRydWUgd2lsbCBub3QgcmVhY3Qgb24gYW55IHVzZXIgZXZlbnRzICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuICAvKiogYXJyYXkgb2YgaWNvbnMgdGl0bGVzLCBkZWZhdWx0OiAoW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXSkgKi9cbiAgQElucHV0KCkgdGl0bGVzOiBzdHJpbmdbXTtcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgaWNvbnMgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gc2VsZWN0ZWQgcmF0aW5nICovXG4gIEBPdXRwdXQoKSBvbkhvdmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gcHJldmlvdXMgcmF0aW5nIHZhbHVlICovXG4gIEBPdXRwdXQoKSBvbkxlYXZlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qKiBhcmlhIGxhYmVsIGZvciByYXRpbmcgKi9cbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIHJhbmdlOiBSYXRpbmdSZXN1bHRzW107XG4gIHZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBwcmVWYWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgY29uZmlnOiBSYXRpbmdDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChbMzcsIDM4LCAzOSwgNDBdLmluZGV4T2YoZXZlbnQud2hpY2gpID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGNvbnN0IHNpZ24gPSBldmVudC53aGljaCA9PT0gMzggfHwgZXZlbnQud2hpY2ggPT09IDM5ID8gMSA6IC0xO1xuICAgIHRoaXMucmF0ZSh0aGlzLnZhbHVlICsgc2lnbik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1heCA9IHR5cGVvZiB0aGlzLm1heCAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heCA6IDU7XG4gICAgdGhpcy50aXRsZXMgPVxuICAgICAgdHlwZW9mIHRoaXMudGl0bGVzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnRpdGxlcy5sZW5ndGggPiAwXG4gICAgICAgID8gdGhpcy50aXRsZXNcbiAgICAgICAgOiBbXTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyh0aGlzLm1heCk7XG4gIH1cblxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAlIDEgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJlVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlbnRlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMub25Ib3Zlci5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnByZVZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uTGVhdmUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHJhdGUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFkb25seSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IHRoaXMucmFuZ2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkVGVtcGxhdGVPYmplY3RzKG1heDogbnVtYmVyKTogUmF0aW5nUmVzdWx0c1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IFJhdGluZ1Jlc3VsdHNbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZXNbaV0gfHwgaSArIDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19