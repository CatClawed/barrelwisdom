/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
export class BsDatepickerDayDecoratorComponent {
    /**
     * @param {?} _config
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof this.day.customClasses === 'string') {
            this.day.customClasses.split(' ')
                .filter((/**
             * @param {?} className
             * @return {?}
             */
            (className) => className))
                .forEach((/**
             * @param {?} className
             * @return {?}
             */
            (className) => {
                this._renderer.addClass(this._elRef.nativeElement, className);
            }));
        }
    }
}
BsDatepickerDayDecoratorComponent.decorators = [
    { type: Component, args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day.label }}`
            }] }
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.ctorParameters = () => [
    { type: BsDatepickerConfig },
    { type: ElementRef },
    { type: Renderer2 }
];
BsDatepickerDayDecoratorComponent.propDecorators = {
    day: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype.day;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWtCaEUsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7O0lBRzVDLFlBQ1UsT0FBMkIsRUFDM0IsTUFBa0IsRUFDbEIsU0FBb0I7UUFGcEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUM5QixNQUFNOzs7O1lBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUM7aUJBQ3hDLE9BQU87Ozs7WUFBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxnQkFBZ0I7b0JBQ3BDLHdCQUF3QixFQUFFLGVBQWU7b0JBQ3pDLHdCQUF3QixFQUFFLGtCQUFrQjtvQkFDNUMsK0JBQStCLEVBQUUseUJBQXlCO29CQUMxRCxrQkFBa0IsRUFBRSxlQUFlO29CQUNuQyxzQkFBc0IsRUFBRSxzQkFBc0I7b0JBQzlDLG9CQUFvQixFQUFFLG9CQUFvQjtvQkFDMUMsa0JBQWtCLEVBQUUsZ0JBQWdCO2lCQUNyQztnQkFDRCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBakJRLGtCQUFrQjtZQU56QixVQUFVO1lBR1YsU0FBUzs7O2tCQXNCUixLQUFLOzs7O0lBQU4sZ0RBQTJCOzs7OztJQUd6QixvREFBbUM7Ozs7O0lBQ25DLG1EQUEwQjs7Ozs7SUFDMUIsc0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGF5LmlzRGlzYWJsZWQnLFxuICAgICdbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdJzogJ2RheS5pc0hvdmVyZWQnLFxuICAgICdbY2xhc3MuaXMtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGgnLFxuICAgICdbY2xhc3MuaXMtYWN0aXZlLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoSG92ZXJlZCcsXG4gICAgJ1tjbGFzcy5pbi1yYW5nZV0nOiAnZGF5LmlzSW5SYW5nZScsXG4gICAgJ1tjbGFzcy5zZWxlY3Qtc3RhcnRdJzogJ2RheS5pc1NlbGVjdGlvblN0YXJ0JyxcbiAgICAnW2NsYXNzLnNlbGVjdC1lbmRdJzogJ2RheS5pc1NlbGVjdGlvbkVuZCcsXG4gICAgJ1tjbGFzcy5zZWxlY3RlZF0nOiAnZGF5LmlzU2VsZWN0ZWQnXG4gIH0sXG4gIHRlbXBsYXRlOiBge3sgZGF5LmxhYmVsIH19YFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXk6IERheVZpZXdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF5LmlzVG9kYXkgJiYgdGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5jdXN0b21Ub2RheUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRheS5jdXN0b21DbGFzc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5kYXkuY3VzdG9tQ2xhc3Nlcy5zcGxpdCgnICcpXG4gICAgICAgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBjbGFzc05hbWUpXG4gICAgICAgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19