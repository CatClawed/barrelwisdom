/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { yearsPerCalendar } from '../../engine/format-years-calendar';
import { BsNavigationDirection } from '../../models';
var BsYearsCalendarViewComponent = /** @class */ (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.viewYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.onSelect.emit(year);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.hoverYear = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    BsYearsCalendarViewComponent.propDecorators = {
        calendar: [{ type: Input }],
        onNavigate: [{ type: Output }],
        onViewMode: [{ type: Output }],
        onSelect: [{ type: Output }],
        onHover: [{ type: Output }]
    };
    return BsYearsCalendarViewComponent;
}());
export { BsYearsCalendarViewComponent };
if (false) {
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onHover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ0aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUVMLHFCQUFxQixFQUt0QixNQUFNLGNBQWMsQ0FBQztBQUV0QjtJQUFBO1FBOEJZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3JELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQWtCekQsQ0FBQzs7Ozs7SUFoQkMsaURBQVU7Ozs7SUFBVixVQUFXLEtBQTRCOztZQUMvQixJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsK0NBQVE7Ozs7SUFBUixVQUFTLElBQTJCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELGdEQUFTOzs7OztJQUFULFVBQVUsSUFBMkIsRUFBRSxTQUFrQjtRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELHFEQUFjOzs7O0lBQWQsVUFBZSxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSwrMEJBdUJUO2lCQUNGOzs7MkJBRUUsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07MkJBRU4sTUFBTTswQkFDTixNQUFNOztJQWtCVCxtQ0FBQztDQUFBLEFBcERELElBb0RDO1NBekJZLDRCQUE0Qjs7O0lBQ3ZDLGdEQUEwQzs7SUFFMUMsa0RBQTZEOztJQUM3RCxrREFBZ0U7O0lBRWhFLGdEQUErRDs7SUFDL0QsK0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHllYXJzUGVyQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cblxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGNhbGVuZGFyLnllYXJzXCI+XG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3WWVhcih5ZWFyKVwiXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyWWVhcih5ZWFyLCB0cnVlKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyWWVhcih5ZWFyLCBmYWxzZSlcIlxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwieWVhci5pc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cInllYXIuaXNIb3ZlcmVkXCI+XG4gICAgICAgICAgICA8c3BhbiBbY2xhc3Muc2VsZWN0ZWRdPVwieWVhci5pc1NlbGVjdGVkXCI+e3sgeWVhci5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyB5ZWFyOiBzdGVwICogeWVhcnNQZXJDYWxlbmRhciB9IH0pO1xuICB9XG5cbiAgdmlld1llYXIoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xuICB9XG5cbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cblxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==