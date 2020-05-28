/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelect.emit(event);
    };
    /**
     * @param {?} week
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectWeek = /**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        var _this = this;
        if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        if (this._config.selectWeek && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        /** @type {?} */
        var selectedDay = week.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        this.onSelect.emit(selectedDay);
        if (this._config.selectWeekDateRange) {
            /** @type {?} */
            var days = week.days.slice(0);
            /** @type {?} */
            var lastDayOfRange = days.reverse().find((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            }));
            this.onSelect.emit(lastDayOfRange);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        var _this = this;
        if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
        }
        /** @type {?} */
        var hasActiveDays = cell.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.hoverDay = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig }
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        calendar: [{ type: Input }],
        options: [{ type: Input }],
        onNavigate: [{ type: Output }],
        onViewMode: [{ type: Output }],
        onSelect: [{ type: Output }],
        onHover: [{ type: Output }],
        onHoverWeek: [{ type: Output }]
    };
    return BsDaysCalendarViewComponent;
}());
export { BsDaysCalendarViewComponent };
if (false) {
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.options;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHover;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHoverWeek;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.isWeekHovered;
    /**
     * @type {?}
     * @private
     */
    BsDaysCalendarViewComponent.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxxQkFBcUIsRUFNdEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEU7SUF5REUscUNBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBVHJDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQzVDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBSVAsQ0FBQzs7Ozs7SUFFcEQsZ0RBQVU7Ozs7SUFBVixVQUFXLEtBQTRCOztZQUMvQixJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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LFVBQVMsSUFBa0IsRUFBRSxTQUFrQjtRQUM3QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBdElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCOztvQkFFakMsUUFBUSxFQUFFLDI3Q0F1Q1Q7aUJBQ0Y7Ozs7Z0JBN0NRLGtCQUFrQjs7OzJCQStDeEIsS0FBSzswQkFDTCxLQUFLOzZCQUVMLE1BQU07NkJBQ04sTUFBTTsyQkFFTixNQUFNOzBCQUNOLE1BQU07OEJBQ04sTUFBTTs7SUFrRlQsa0NBQUM7Q0FBQSxBQXZJRCxJQXVJQztTQTNGWSwyQkFBMkI7OztJQUN0QywrQ0FBeUM7O0lBQ3pDLDhDQUEwQzs7SUFFMUMsaURBQTZEOztJQUM3RCxpREFBZ0U7O0lBRWhFLCtDQUFzRDs7SUFDdEQsOENBQXVEOztJQUN2RCxrREFBMEQ7O0lBRTFELG9EQUF1Qjs7Ozs7SUFFWCw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXlzLWNhbGVuZGFyLXZpZXcnLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDwhLS1kYXlzIG1hdHJpeC0tPlxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJkYXlzIHdlZWtzXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDwhLS1pZiBzaG93IHdlZWtzLS0+XG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiBjYWxlbmRhci53ZWVrZGF5czsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCI+e3sgY2FsZW5kYXIud2Vla2RheXNbaV0gfX1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgd2VlayBvZiBjYWxlbmRhci53ZWVrczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cIndlZWtcIiBbY2xhc3MuYWN0aXZlLXdlZWtdPVwiaXNXZWVrSG92ZXJlZFwiICAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RXZWVrKHdlZWspXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIGZhbHNlKVwiPnt7IGNhbGVuZGFyLndlZWtOdW1iZXJzW2ldIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgcm9sZT1cImdyaWRjZWxsXCI+XG4gICAgICAgICAgPHNwYW4gYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXG4gICAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3REYXkoZGF5KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJEYXkoZGF5LCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJEYXkoZGF5LCBmYWxzZSlcIj57eyBkYXkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgIHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcbiAgQElucHV0KCkgb3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXJXZWVrID0gbmV3IEV2ZW50RW1pdHRlcjxXZWVrVmlld01vZGVsPigpO1xuXG4gIGlzV2Vla0hvdmVyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpIHsgfVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IG1vbnRoOiBzdGVwIH0gfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3REYXkoZXZlbnQ6IERheVZpZXdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChldmVudCk7XG4gIH1cblxuICBzZWxlY3RXZWVrKHdlZWs6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrICYmICF0aGlzLl9jb25maWcuc2VsZWN0V2Vla0RhdGVSYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrICYmIHdlZWsuZGF5c1swXVxuICAgICAgICAmJiAhd2Vlay5kYXlzWzBdLmlzRGlzYWJsZWRcbiAgICAgICAgJiYgdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoKSB7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHdlZWsuZGF5c1swXSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gd2Vlay5kYXlzLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHNlbGVjdGVkRGF5KTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0V2Vla0RhdGVSYW5nZSkge1xuICAgICAgY29uc3QgZGF5cyA9IHdlZWsuZGF5cy5zbGljZSgwKTtcbiAgICAgIGNvbnN0IGxhc3REYXlPZlJhbmdlID0gZGF5cy5yZXZlcnNlKCkuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxuICAgICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KGxhc3REYXlPZlJhbmdlKTtcbiAgICB9XG4gIH1cblxuICB3ZWVrSG92ZXJIYW5kbGVyKGNlbGw6IFdlZWtWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdFdlZWsgJiYgIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrRGF0ZVJhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzQWN0aXZlRGF5cyA9IGNlbGwuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxuICAgICAgICA/ICFkYXkuaXNEaXNhYmxlZFxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcbiAgICB9KTtcblxuICAgIGlmIChoYXNBY3RpdmVEYXlzKSB7XG4gICAgICBjZWxsLmlzSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMuaXNXZWVrSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICAgIHRoaXMub25Ib3ZlcldlZWsuZW1pdChjZWxsKTtcbiAgICB9XG4gIH1cblxuICBob3ZlckRheShjZWxsOiBEYXlWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGggJiYgY2VsbC5pc090aGVyTW9udGgpIHtcbiAgICAgIGNlbGwuaXNPdGhlck1vbnRoSG92ZXJlZCA9IGlzSG92ZXJlZDtcbiAgICB9XG5cbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcbiAgfVxufVxuIl19