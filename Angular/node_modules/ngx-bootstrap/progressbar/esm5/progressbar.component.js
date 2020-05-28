/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "animate", {
        /** if `true` changing value of progress bar will be animated */
        set: /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = value;
            this.bars.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                b.animate = value;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "striped", {
        /** If `true`, striped classes are applied */
        set: /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._striped = value;
            this.bars.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                b.striped = value;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach((/**
             * @param {?} bar
             * @return {?}
             */
            function (bar) {
                bar.recalculatePercentage();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        striped: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
if (false) {
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /** @type {?} */
    ProgressbarComponent.prototype.isStacked;
    /** @type {?} */
    ProgressbarComponent.prototype._striped;
    /** @type {?} */
    ProgressbarComponent.prototype._animate;
    /** @type {?} */
    ProgressbarComponent.prototype._value;
    /** @type {?} */
    ProgressbarComponent.prototype.addClass;
    /** @type {?} */
    ProgressbarComponent.prototype.bars;
    /**
     * @type {?}
     * @protected
     */
    ProgressbarComponent.prototype._max;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc1QztJQXVFRSw4QkFBWSxNQUF5QjtRQTlCckMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQXVCYSxhQUFRLEdBQUcsSUFBSSxDQUFDOztRQUcvQyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUVoQixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBR25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUEzREQsc0JBQ0kseUNBQU87UUFGWCxnRUFBZ0U7Ozs7OztRQUNoRSxVQUNZLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFlO2dCQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNwQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQ0kseUNBQU87UUFGWCw2Q0FBNkM7Ozs7OztRQUM3QyxVQUNZLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFlO2dCQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNwQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBT0Qsc0JBRUksdUNBQUs7UUFMVDs7V0FFRzs7Ozs7OztRQUNILFVBRVUsS0FBcUI7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFHRCxzQkFFSSxxQ0FBRztRQUhQLDhDQUE4Qzs7Ozs7UUFDOUM7WUFHRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFFRCxVQUFRLENBQVM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBaUI7Z0JBQ2xDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7Ozs7O0lBbUJELHFDQUFNOzs7O0lBQU4sVUFBTyxHQUFpQjtRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEdBQWlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQW5GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDZRQUEyQzs2QkFFekMsb0VBS0Q7aUJBRUY7Ozs7Z0JBaEJRLGlCQUFpQjs7OzBCQW1CdkIsS0FBSzswQkFRTCxLQUFLO3VCQVNMLEtBQUs7d0JBSUwsS0FBSztzQkFnQkwsV0FBVyxTQUFDLFVBQVUsY0FDdEIsS0FBSzsyQkFZTCxXQUFXLFNBQUMsZ0JBQWdCOztJQW9CL0IsMkJBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQXhFWSxvQkFBb0I7Ozs7OztJQW1CL0Isb0NBQStCOztJQVUvQix5Q0FBa0I7O0lBQ2xCLHdDQUFrQjs7SUFDbEIsd0NBQWtCOztJQUVsQixzQ0FBdUI7O0lBbUJ2Qix3Q0FBK0M7O0lBRy9DLG9DQUEwQjs7Ozs7SUFFMUIsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJUeXBlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci10eXBlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvZ3Jlc3NiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcbiAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAqL1xuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGUgPSB2YWx1ZTtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiLmFuaW1hdGUgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICAvKiogSWYgYHRydWVgLCBzdHJpcGVkIGNsYXNzZXMgYXJlIGFwcGxpZWQgKi9cbiAgQElucHV0KClcbiAgc2V0IHN0cmlwZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdHJpcGVkID0gdmFsdWU7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYi5zdHJpcGVkID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgdHlwZTogUHJvZ3Jlc3NiYXJUeXBlO1xuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIuIENvdWxkIGJlIGEgbnVtYmVyIG9yIGFycmF5IG9mIG9iamVjdHNcbiAgICogbGlrZSB7XCJ2YWx1ZVwiOjE1LFwidHlwZVwiOlwiaW5mb1wiLFwibGFiZWxcIjpcIjE1ICVcIn1cbiAgICovXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCBhbnlbXSkge1xuICAgIHRoaXMuaXNTdGFja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBpc1N0YWNrZWQgPSBmYWxzZTtcbiAgX3N0cmlwZWQ6IGJvb2xlYW47XG4gIF9hbmltYXRlOiBib29sZWFuO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIF92YWx1ZTogbnVtYmVyIHwgYW55W107XG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heCcpXG4gIEBJbnB1dCgpXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2O1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcm9ncmVzcycpIGFkZENsYXNzID0gdHJ1ZTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGJhcnM6IEJhckNvbXBvbmVudFtdID0gW107XG5cbiAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBQcm9ncmVzc2JhckNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuICBhZGRCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICBiYXIuYW5pbWF0ZSA9IHRoaXMuX2FuaW1hdGU7XG4gICAgYmFyLnN0cmlwZWQgPSB0aGlzLl9zdHJpcGVkO1xuXG4gICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcbiAgfVxuXG4gIHJlbW92ZUJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XG4gIH1cbn1cbiJdfQ==