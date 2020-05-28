/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class ProgressbarComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    /**
     * if `true` changing value of progress bar will be animated
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            b.animate = value;
        }));
    }
    /**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            b.striped = value;
        }));
    }
    /**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        this._value = value;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((/**
         * @param {?} bar
         * @return {?}
         */
        (bar) => {
            bar.recalculatePercentage();
        }));
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'progressbar',
                template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                styles: [`
    :host {
      width: 100%;
      display: flex;
    }
  `]
            }] }
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig }
];
ProgressbarComponent.propDecorators = {
    animate: [{ type: Input }],
    striped: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
    addClass: [{ type: HostBinding, args: ['class.progress',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWU1QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBMkQvQixZQUFZLE1BQXlCO1FBOUJyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBdUJhLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBRy9DLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRWhCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFHbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBM0RELElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFPRCxJQUVJLEtBQUssQ0FBQyxLQUFxQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQU1ELElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFHRCxJQUVJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEdBQUcsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBWUQsTUFBTSxDQUFDLEdBQWlCO1FBQ3RCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBaUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNlFBQTJDO3lCQUV6Qzs7Ozs7R0FLRDthQUVGOzs7O1lBaEJRLGlCQUFpQjs7O3NCQW1CdkIsS0FBSztzQkFRTCxLQUFLO21CQVNMLEtBQUs7b0JBSUwsS0FBSztrQkFnQkwsV0FBVyxTQUFDLFVBQVUsY0FDdEIsS0FBSzt1QkFZTCxXQUFXLFNBQUMsZ0JBQWdCOzs7Ozs7O0lBakM3QixvQ0FBK0I7O0lBVS9CLHlDQUFrQjs7SUFDbEIsd0NBQWtCOztJQUNsQix3Q0FBa0I7O0lBRWxCLHNDQUF1Qjs7SUFtQnZCLHdDQUErQzs7SUFHL0Msb0NBQTBCOzs7OztJQUUxQixvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhclR5cGUgfSBmcm9tICcuL3Byb2dyZXNzYmFyLXR5cGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzc2JhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZSA9IHZhbHVlO1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcbiAgICAgIGIuYW5pbWF0ZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIC8qKiBJZiBgdHJ1ZWAsIHN0cmlwZWQgY2xhc3NlcyBhcmUgYXBwbGllZCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3RyaXBlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0cmlwZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiLnN0cmlwZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xuICBASW5wdXQoKSB0eXBlOiBQcm9ncmVzc2JhclR5cGU7XG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhci4gQ291bGQgYmUgYSBudW1iZXIgb3IgYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBsaWtlIHtcInZhbHVlXCI6MTUsXCJ0eXBlXCI6XCJpbmZvXCIsXCJsYWJlbFwiOlwiMTUgJVwifVxuICAgKi9cbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IGFueVtdKSB7XG4gICAgdGhpcy5pc1N0YWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGlzU3RhY2tlZCA9IGZhbHNlO1xuICBfc3RyaXBlZDogYm9vbGVhbjtcbiAgX2FuaW1hdGU6IGJvb2xlYW47XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgX3ZhbHVlOiBudW1iZXIgfCBhbnlbXTtcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgLyoqIG1heGltdW0gdG90YWwgdmFsdWUgb2YgcHJvZ3Jlc3MgZWxlbWVudCAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcbiAgQElucHV0KClcbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBzZXQgbWF4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IHY7XG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGJhcjogQmFyQ29tcG9uZW50KSA9PiB7XG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByb2dyZXNzJykgYWRkQ2xhc3MgPSB0cnVlO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgYmFyczogQmFyQ29tcG9uZW50W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFByb2dyZXNzYmFyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG4gIGFkZEJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGJhci5hbmltYXRlID0gdGhpcy5fYW5pbWF0ZTtcbiAgICBiYXIuc3RyaXBlZCA9IHRoaXMuX3N0cmlwZWQ7XG5cbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xuICB9XG5cbiAgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihiYXIpLCAxKTtcbiAgfVxufVxuIl19