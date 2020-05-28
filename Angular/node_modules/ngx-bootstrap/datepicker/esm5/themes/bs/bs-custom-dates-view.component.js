/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function BsCustomDates() { }
if (false) {
    /** @type {?} */
    BsCustomDates.prototype.label;
    /** @type {?} */
    BsCustomDates.prototype.value;
}
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
        this.onSelect = new EventEmitter();
        this.customRange = null;
    }
    /**
     * @param {?} range
     * @return {?}
     */
    BsCustomDatesViewComponent.prototype.selectFromRanges = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        this.onSelect.emit(range);
    };
    /**
     * @return {?}
     */
    BsCustomDatesViewComponent.prototype.checkRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.ranges ? this.ranges.filter((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range.value === _this.selectedRange; })).length > 0 : false;
    };
    BsCustomDatesViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\"\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(range)\"\n        [class.selected]=\"range.value === selectedRange\">\n        {{ range.label }}\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(customRange)\"\n        [class.selected]=\"!checkRange()\">\n        Custom Range\n      </button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        ranges: [{ type: Input }],
        selectedRange: [{ type: Input }],
        onSelect: [{ type: Output }]
    };
    return BsCustomDatesViewComponent;
}());
export { BsCustomDatesViewComponent };
if (false) {
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.ranges;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.selectedRange;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.onSelect;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.customRange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVoRyxtQ0FHQzs7O0lBRkMsOEJBQWM7O0lBQ2QsOEJBQXFCOztBQUd2QjtJQUFBO1FBeUJZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUV2RCxnQkFBVyxHQUFRLElBQUksQ0FBQztJQVUxQixDQUFDOzs7OztJQVJDLHFEQUFnQjs7OztJQUFoQixVQUFpQixLQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWO1FBQUEsaUJBRUM7UUFEQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFJLENBQUMsYUFBYSxFQUFsQyxDQUFrQyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFHLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLCtmQWlCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozt5QkFFRSxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsTUFBTTs7SUFZVCxpQ0FBQztDQUFBLEFBckNELElBcUNDO1NBZlksMEJBQTBCOzs7SUFDckMsNENBQWlDOztJQUNqQyxtREFBK0I7O0lBQy9CLDhDQUF1RDs7SUFFdkQsaURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnNDdXN0b21EYXRlcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBEYXRlIHwgRGF0ZVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1jdXN0b20tZGF0ZS12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnNcIj5cbiAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IHJhbmdlIG9mIHJhbmdlc1wiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImJ0blwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RGcm9tUmFuZ2VzKHJhbmdlKVwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJyYW5nZS52YWx1ZSA9PT0gc2VsZWN0ZWRSYW5nZVwiPlxuICAgICAgICB7eyByYW5nZS5sYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImJ0blwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RGcm9tUmFuZ2VzKGN1c3RvbVJhbmdlKVwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCIhY2hlY2tSYW5nZSgpXCI+XG4gICAgICAgIEN1c3RvbSBSYW5nZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmFuZ2VzOiBCc0N1c3RvbURhdGVzW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxCc0N1c3RvbURhdGVzPigpO1xuXG4gIGN1c3RvbVJhbmdlOiBhbnkgPSBudWxsO1xuXG4gIHNlbGVjdEZyb21SYW5nZXMocmFuZ2U6IEJzQ3VzdG9tRGF0ZXMpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQocmFuZ2UpO1xuICB9XG5cbiAgY2hlY2tSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZXMgPyB0aGlzLnJhbmdlcy5maWx0ZXIocmFuZ2UgPT4gcmFuZ2UudmFsdWUgPT09IHRoaXMuc2VsZWN0ZWRSYW5nZSkubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==