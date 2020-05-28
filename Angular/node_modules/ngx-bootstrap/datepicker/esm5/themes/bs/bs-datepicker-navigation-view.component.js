/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.navTo = /**
     * @param {?} down
     * @return {?}
     */
    function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    /**
     * @param {?} viewMode
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.view = /**
     * @param {?} viewMode
     * @return {?}
     */
    function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    <ng-container *ngIf=\"calendar.monthTitle\">\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\"\n            type=\"button\"\n            (click)=\"view('month')\"\n      ><span>{{ calendar.monthTitle }}</span>\n      </button>\n    </ng-container>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                }] }
    ];
    BsDatepickerNavigationViewComponent.propDecorators = {
        calendar: [{ type: Input }],
        onNavigate: [{ type: Output }],
        onViewMode: [{ type: Output }]
    };
    return BsDatepickerNavigationViewComponent;
}());
export { BsDatepickerNavigationViewComponent };
if (false) {
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.calendar;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onViewMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLHFCQUFxQixFQUV0QixNQUFNLGNBQWMsQ0FBQztBQUV0QjtJQUFBO1FBNENZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUN2RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7SUFXbEUsQ0FBQzs7Ozs7SUFUQyxtREFBSzs7OztJQUFMLFVBQU0sSUFBYTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsa0RBQUk7Ozs7SUFBSixVQUFLLFFBQThCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxzekNBb0NUO2lCQUNGOzs7MkJBRUUsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBV1QsMENBQUM7Q0FBQSxBQXhERCxJQXdEQztTQWZZLG1DQUFtQzs7O0lBQzlDLHVEQUF5Qzs7SUFFekMseURBQWlFOztJQUNqRSx5REFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKHRydWUpXCI+XG4gICAgICA8c3Bhbj4mbHNhcXVvOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjYWxlbmRhci5tb250aFRpdGxlXCI+XG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwidmlldygnbW9udGgnKVwiXG4gICAgICA+PHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiIChjbGljayk9XCJ2aWV3KCd5ZWFyJylcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICA8c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgIDxidXR0b24gY2xhc3M9XCJuZXh0XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKGZhbHNlKVwiPjxzcGFuPiZyc2FxdW87PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRGlyZWN0aW9uPigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgbmF2VG8oZG93bjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KFxuICAgICAgZG93biA/IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOIDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLlVQXG4gICAgKTtcbiAgfVxuXG4gIHZpZXcodmlld01vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQodmlld01vZGUpO1xuICB9XG59XG4iXX0=