/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { take } from 'rxjs/operators';
export class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positionService
     */
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._rangeStack = [];
        this.chosenRange = [];
        this._subs = [];
        this._effects = _effects;
        this.customRanges = this._config.ranges;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setRangeValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._positionService.event$
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        }));
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            // intial state options
            // todo: fix this, split configs
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.selectedRange))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        date => {
            this.valueChange.emit(date);
            this.chosenRange = date;
        })));
    }
    /**
     * @return {?}
     */
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    /**
     * @return {?}
     */
    positionServiceEnable() {
        this._positionService.enable();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        if (!day) {
            return;
        }
        /** @type {?} */
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    setRangeOnCalendar(dates) {
        this._rangeStack = (dates === null) ? [] : (dates.value instanceof Date ? [dates.value] : dates.value);
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
    }
}
BsDaterangepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-daterangepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges?.length > 0\">\n    <bs-custom-date-view \n      [selectedRange]=\"chosenRange\" \n      [ranges]=\"customRanges\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                },
                animations: [datepickerAnimation]
            }] }
];
/** @nocollapse */
BsDaterangepickerContainerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: BsDatepickerConfig },
    { type: BsDatepickerStore },
    { type: ElementRef },
    { type: BsDatepickerActions },
    { type: BsDatepickerEffects },
    { type: PositioningService }
];
if (false) {
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.valueChange;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.animationState;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._rangeStack;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.chosenRange;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ0aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWV0QyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsNkJBQTZCOzs7Ozs7Ozs7O0lBYXBGLFlBQ0UsU0FBb0IsRUFDWixPQUEyQixFQUMzQixNQUF5QixFQUN6QixRQUFvQixFQUNwQixRQUE2QixFQUNyQyxRQUE2QixFQUNyQixnQkFBb0M7UUFFNUMsS0FBSyxFQUFFLENBQUM7UUFQQSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBRTdCLHFC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ekIsc0RBQW1DOzs7OztJQUNuQyxxREFBaUM7Ozs7O0lBQ2pDLHVEQUE0Qjs7Ozs7SUFDNUIsdURBQXFDOzs7OztJQUVyQywrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGF0ZXBpY2tlckFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4vYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYm90dG9tJyxcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xuICB9LFxuICBhbmltYXRpb25zOiBbZGF0ZXBpY2tlckFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldFJhbmdlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcbiAgYW5pbWF0aW9uU3RhdGUgPSAndm9pZCc7XG5cbiAgX3JhbmdlU3RhY2s6IERhdGVbXSA9IFtdO1xuICBjaG9zZW5SYW5nZTogRGF0ZVtdID0gW107XG4gIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSxcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHMsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XG5cbiAgICB0aGlzLmN1c3RvbVJhbmdlcyA9IHRoaXMuX2NvbmZpZy5yYW5nZXM7XG5cbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XG4gICAgICBtb2RpZmllcnM6IHsgZmxpcDogeyBlbmFibGVkOiB0aGlzLl9jb25maWcuYWRhcHRpdmVQb3NpdGlvbiB9IH0sXG4gICAgICBhbGxvd2VkUG9zaXRpb25zOiBbJ3RvcCcsICdib3R0b20nXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmV2ZW50JFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZGlzYWJsZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmlzVG9wUG9zaXRpb24gPyAnYW5pbWF0ZWQtdXAnIDogJ2FuaW1hdGVkLWRvd24nO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICd1bmFuaW1hdGVkJztcbiAgICAgIH0pO1xuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC8vIHRvZG86IGZpeCB0aGlzLCBzcGxpdCBjb25maWdzXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0ZSA9PiB7XG4gICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgICAgICAgIHRoaXMuY2hvc2VuUmFuZ2UgPSBkYXRlO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgaXNUb3BQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9wJyk7XG4gIH1cblxuICBwb3NpdGlvblNlcnZpY2VFbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIGlmICghZGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgb25seSBvbmUgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkXG4gICAgLy8gYW5kIHVzZXIgY2xpY2tzIG9uIHByZXZpb3VzIGRhdGVcbiAgICAvLyBzdGFydCBzZWxlY3Rpb24gZnJvbSBuZXcgZGF0ZVxuICAgIC8vIGJ1dCBpZiBuZXcgZGF0ZSBpcyBhZnRlciBpbml0aWFsIG9uZVxuICAgIC8vIHRoYW4gZmluaXNoIHNlbGVjdGlvblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9XG4gICAgICAgIGRheS5kYXRlID49IHRoaXMuX3JhbmdlU3RhY2tbMF1cbiAgICAgICAgICA/IFt0aGlzLl9yYW5nZVN0YWNrWzBdLCBkYXkuZGF0ZV1cbiAgICAgICAgICA6IFtkYXkuZGF0ZV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID0gW2RheS5kYXRlXTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHRoaXMuX3JhbmdlU3RhY2spKTtcblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHNldFJhbmdlT25DYWxlbmRhcihkYXRlczogQnNDdXN0b21EYXRlcykge1xuICAgIHRoaXMuX3JhbmdlU3RhY2sgPSAoZGF0ZXMgPT09IG51bGwpID8gW10gOiAoZGF0ZXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gW2RhdGVzLnZhbHVlXSA6IGRhdGVzLnZhbHVlKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHRoaXMuX3JhbmdlU3RhY2spKTtcbiAgfVxuXG59XG4iXX0=