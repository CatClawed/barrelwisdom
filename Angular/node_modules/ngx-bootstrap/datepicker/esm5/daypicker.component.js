/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @deprecated
// tslint:disable
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    DayPickerComponent.prototype.ngOnInit = /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */
            var month = this.activeDate.getMonth();
            /** @type {?} */
            var firstDayOfMonth = new Date(year, month, 1);
            /** @type {?} */
            var difference = this.startingDay - firstDayOfMonth.getDay();
            /** @type {?} */
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            /** @type {?} */
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            /** @type {?} */
            var _days = self.getDates(firstDate, 42);
            /** @type {?} */
            var days = [];
            for (var i = 0; i < 42; i++) {
                /** @type {?} */
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                /** @type {?} */
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                /** @type {?} */
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }), 'day');
        this.datePicker.setCompareHandler((/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            /** @type {?} */
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }), 'day');
        this.datePicker.refreshView();
    };
    /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    DayPickerComponent.prototype.getDates = /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    function (startDate, n) {
        /** @type {?} */
        var dates = new Array(n);
        /** @type {?} */
        var current = new Date(startDate.getTime());
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DayPickerComponent.prototype.getISO8601WeekNumber = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        /** @type {?} */
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    DayPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return DayPickerComponent;
}());
export { DayPickerComponent };
if (false) {
    /** @type {?} */
    DayPickerComponent.prototype.labels;
    /** @type {?} */
    DayPickerComponent.prototype.title;
    /** @type {?} */
    DayPickerComponent.prototype.rows;
    /** @type {?} */
    DayPickerComponent.prototype.weekNumbers;
    /** @type {?} */
    DayPickerComponent.prototype.datePicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImRheXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEU7SUF3RkUsNEJBQVksVUFBb0M7UUFOaEQsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUVuQixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBSXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSxxQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQ7OztRQUdJOzs7Ozs7OztJQUNKLHFDQUFROzs7Ozs7O0lBQVI7O1lBQ1EsSUFBSSxHQUFHLElBQUk7UUFFakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUI7OztRQUFDOztnQkFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFOztnQkFDcEMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFOztnQkFDbEMsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztnQkFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ3hE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QUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxXQUFXO1FBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ2pFLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFO1FBQ2hDLHFCQUFxQjtRQUNyQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDOztnQkFsTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsbXBHQWlFVDs2QkFFQyxzTUFTRDtpQkFFRjs7OztnQkFsRlEsd0JBQXdCOztJQXVNakMseUJBQUM7Q0FBQSxBQXJNRCxJQXFNQztTQXBIWSxrQkFBa0I7OztJQUM3QixvQ0FBbUI7O0lBQ25CLG1DQUFjOztJQUNkLGtDQUFpQjs7SUFDakIseUNBQTJCOztJQUMzQix3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZGVwcmVjYXRlZFxuLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RheXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5J1wiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cImFjdGl2ZURhdGVJZFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7igLk8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mbHQ7PC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiNSArIChkYXRlUGlja2VyLnNob3dXZWVrcyA/IDEgOiAwKVwiPlxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPuKAujwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj4mZ3Q7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0aCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCI+PC90aD5cbiAgICAgIDx0aCAqbmdGb3I9XCJsZXQgbGFiZWx6IG9mIGxhYmVsc1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHNtYWxsIGFyaWEtbGFiZWw9XCJsYWJlbHouZnVsbFwiPjxiPnt7IGxhYmVsei5hYmJyIH19PC9iPjwvc21hbGw+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwicm93c1wiIGxldC1yb3d6PVwiJGltcGxpY2l0XCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgIDx0ciAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIHJvd3pbMF0uc2Vjb25kYXJ5ICYmIHJvd3pbNl0uc2Vjb25kYXJ5KVwiPlxuICAgICAgICA8dGQgKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiIGNsYXNzPVwiaDZcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGVtPnt7IHdlZWtOdW1iZXJzW2luZGV4XSB9fTwvZW0+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2lkXT1cImR0ei51aWRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSB7e2R0ei5jdXN0b21DbGFzc319XCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgZHR6LnNlY29uZGFyeSlcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tc2Vjb25kYXJ5JzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQsIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1kZWZhdWx0JzogIWlzQnM0fVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtbXV0ZWQnOiBkdHouc2Vjb25kYXJ5IHx8IGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCAuYnRuLXNlY29uZGFyeSB7XG4gICAgICBjb2xvcjogIzI5MmIyYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1tdXRlZCB7XG4gICAgICBjb2xvcjogIzI5MmIyYyAhaW1wb3J0YW50O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERheVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxhYmVsczogYW55W10gPSBbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgcm93czogYW55W10gPSBbXTtcbiAgd2Vla051bWJlcnM6IG51bWJlcltdID0gW107XG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xuICB9XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIC8qcHJvdGVjdGVkIGdldERheXNJbk1vbnRoKHllYXI6bnVtYmVyLCBtb250aDpudW1iZXIpIHtcbiAgIHJldHVybiAoKG1vbnRoID09PSAxKSAmJiAoeWVhciAlIDQgPT09IDApICYmXG4gICAoKHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKSkpID8gMjkgOiBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgIH0qL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwRGF5ID0geyBtb250aHM6IDEgfTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCB5ZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMuc3RhcnRpbmdEYXkgLSBmaXJzdERheU9mTW9udGguZ2V0RGF5KCk7XG4gICAgICBjb25zdCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA9XG4gICAgICAgIGRpZmZlcmVuY2UgPiAwID8gNyAtIGRpZmZlcmVuY2UgOiAtZGlmZmVyZW5jZTtcbiAgICAgIGNvbnN0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aC5nZXRUaW1lKCkpO1xuXG4gICAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XG4gICAgICAgIGZpcnN0RGF0ZS5zZXREYXRlKC1udW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCArIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyA0MiBpcyB0aGUgbnVtYmVyIG9mIGRheXMgb24gYSBzaXgtd2VlayBjYWxlbmRhclxuICAgICAgY29uc3QgX2RheXM6IERhdGVbXSA9IHNlbGYuZ2V0RGF0ZXMoZmlyc3REYXRlLCA0Mik7XG4gICAgICBjb25zdCBkYXlzOiBhbnlbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IF9kYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KF9kYXlzW2ldLCB0aGlzLmZvcm1hdERheSk7XG4gICAgICAgIF9kYXRlT2JqZWN0LnNlY29uZGFyeSA9IF9kYXlzW2ldLmdldE1vbnRoKCkgIT09IG1vbnRoO1xuICAgICAgICBfZGF0ZU9iamVjdC51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcbiAgICAgICAgZGF5c1tpXSA9IF9kYXRlT2JqZWN0O1xuICAgICAgfVxuXG4gICAgICBzZWxmLmxhYmVscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0gPSB7fTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uYWJiciA9IHRoaXMuZGF0ZUZpbHRlcihcbiAgICAgICAgICBkYXlzW2pdLmRhdGUsXG4gICAgICAgICAgdGhpcy5mb3JtYXREYXlIZWFkZXJcbiAgICAgICAgKTtcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uZnVsbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsICdFRUVFJyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudGl0bGUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdERheVRpdGxlKTtcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoZGF5cywgNyk7XG5cbiAgICAgIGlmICh0aGlzLnNob3dXZWVrcykge1xuICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gW107XG4gICAgICAgIGNvbnN0IHRodXJzZGF5SW5kZXggPSAoNCArIDcgLSB0aGlzLnN0YXJ0aW5nRGF5KSAlIDc7XG4gICAgICAgIGNvbnN0IG51bVdlZWtzID0gc2VsZi5yb3dzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgY3VyV2VlayA9IDA7IGN1cldlZWsgPCBudW1XZWVrczsgY3VyV2VlaysrKSB7XG4gICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5wdXNoKFxuICAgICAgICAgICAgc2VsZi5nZXRJU084NjAxV2Vla051bWJlcihzZWxmLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgJ2RheScpO1xuXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxuICAgICAgZGF0ZTE6IERhdGUsXG4gICAgICBkYXRlMjogRGF0ZVxuICAgICk6IG51bWJlciB7XG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSk7XG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSk7XG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xuICAgIH0sICdkYXknKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERhdGVzKHN0YXJ0RGF0ZTogRGF0ZSwgbjogbnVtYmVyKTogRGF0ZVtdIHtcbiAgICBjb25zdCBkYXRlczogRGF0ZVtdID0gbmV3IEFycmF5KG4pO1xuICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQuZ2V0VGltZSgpKTtcbiAgICAgIGRhdGUgPSB0aGlzLmRhdGVQaWNrZXIuZml4VGltZVpvbmUoZGF0ZSk7XG4gICAgICBkYXRlc1tpKytdID0gZGF0ZTtcbiAgICAgIGN1cnJlbnQgPSBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpICsgMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAvLyBUaHVyc2RheVxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgKyA0IC0gKGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3KSk7XG4gICAgY29uc3QgdGltZSA9IGNoZWNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgLy8gQ29tcGFyZSB3aXRoIEphbiAxXG4gICAgY2hlY2tEYXRlLnNldE1vbnRoKDApO1xuICAgIGNoZWNrRGF0ZS5zZXREYXRlKDEpO1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucm91bmQoKHRpbWUgLSBjaGVja0RhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMVxuICAgICk7XG4gIH1cblxuICAvLyB0b2RvOiBrZXkgZXZlbnRzIGltcGxlbWVudGF0aW9uXG59XG4iXX0=