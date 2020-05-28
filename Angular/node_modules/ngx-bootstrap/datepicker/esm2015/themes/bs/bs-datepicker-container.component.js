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
export class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
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
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setValue(value);
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
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            // intial state options
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            /* tslint:disable-next-line: no-any */
            .select((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.selectedDate))
            /* tslint:disable-next-line: no-any */
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        (date) => this.valueChange.emit(date))));
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
        this._store.dispatch(this._actions.select(day.date));
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
}
BsDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-container',
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
BsDatepickerContainerComponent.ctorParameters = () => [
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
    BsDatepickerContainerComponent.prototype.valueChange;
    /** @type {?} */
    BsDatepickerContainerComponent.prototype.animationState;
    /** @type {?} */
    BsDatepickerContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3RDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSw2QkFBNkI7Ozs7Ozs7Ozs7SUFXL0UsWUFDRSxTQUFvQixFQUNaLE9BQTJCLEVBQzNCLE1BQXlCLEVBQ3pCLFFBQW9CLEVBQ3BCLFFBQTZCLEVBQ3JDLFFBQTZCLEVBQ3JCLGdCQUFvQztRQUU1QyxLQUFLLEVBQUUsQ0FBQztRQVBBLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFFN0IscUJBQWdCLEdBQWhC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ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGF0ZXBpY2tlckFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYm90dG9tJyxcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xuICB9LFxuICBhbmltYXRpb25zOiBbZGF0ZXBpY2tlckFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICBhbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcblxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcblxuICAgIF9yZW5kZXJlci5zZXRTdHlsZShfZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdibG9jaycpO1xuICAgIF9yZW5kZXJlci5zZXRTdHlsZShfZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcbiAgICAgIG1vZGlmaWVyczogeyBmbGlwOiB7IGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uIH0gfSxcbiAgICAgIGFsbG93ZWRQb3NpdGlvbnM6IFsndG9wJywgJ2JvdHRvbSddXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZXZlbnQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5kaXNhYmxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuaXNUb3BQb3NpdGlvbiA/ICdhbmltYXRlZC11cCcgOiAnYW5pbWF0ZWQtZG93bic7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ3VuYW5pbWF0ZWQnO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICB0aGlzLl9lZmZlY3RzXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcbiAgICAgIC8vIGludGlhbCBzdGF0ZSBvcHRpb25zXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XG5cbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9zdG9yZVxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAuc2VsZWN0KChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IGFueSkgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxuICAgICk7XG4gIH1cblxuICBnZXQgaXNUb3BQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9wJyk7XG4gIH1cblxuICBwb3NpdGlvblNlcnZpY2VFbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIGlmICghZGF5KSB7XG4gICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KGRheS5kYXRlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==