/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { isBs3 } from 'ngx-bootstrap/utils';
import { dropdownAnimation } from './dropdown-animations';
import { AnimationBuilder } from '@angular/animations';
export class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _builder
     */
    constructor(_state, cd, _renderer, _element, _builder) {
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        this._subscription = _state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
            /** @type {?} */
            const dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
            this._renderer.addClass(this._element.nativeElement.querySelector('div'), 'open');
            if (dropdown && !isBs3()) {
                this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    this._renderer.setStyle(dropdown, 'left', 'auto');
                    this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (this.direction === 'up') {
                    this._renderer.setStyle(dropdown, 'top', 'auto');
                    this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            if (dropdown && this._state.isAnimated) {
                this._factoryDropDownAnimation.create(dropdown)
                    .play();
            }
            this.cd.markForCheck();
            this.cd.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    _contains(el) {
        return this._element.nativeElement.contains(el);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    style: 'display:block;position: absolute;z-index: 1040'
                },
                template: `
    <div [class.dropup]="direction === 'up'"
         [class.dropdown]="direction === 'down'"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: AnimationBuilder }
];
if (false) {
    /** @type {?} */
    BsDropdownContainerComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._factoryDropDownAnimation;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._state;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQWdCekUsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7SUFZdkMsWUFDVSxNQUF1QixFQUN2QixFQUFxQixFQUNyQixTQUFvQixFQUNwQixRQUFvQixFQUM1QixRQUEwQjtRQUpsQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFmOUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQWtCYixJQUFJLENBQUMseUJBQXlCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7a0JBRWQsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUU1RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFbEYsSUFBSSxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUUxQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixRQUFRLEVBQ1IsV0FBVyxFQUNYLG1CQUFtQixDQUNwQixDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQzVDLElBQUksRUFBRSxDQUFDO2FBQ1g7WUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBaERELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBaURELFNBQVMsQ0FBQyxFQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUE1RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGdEQUFnRDtpQkFDeEQ7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGOzs7O1lBbkJRLGVBQWU7WUFQdEIsaUJBQWlCO1lBSWpCLFNBQVM7WUFGVCxVQUFVO1lBU0gsZ0JBQWdCOzs7O0lBaUJ2Qiw4Q0FBZTs7Ozs7SUFFZixpRUFBb0Q7Ozs7O0lBT3BELHFEQUEyQjs7Ozs7SUFHekIsOENBQStCOzs7OztJQUMvQiwwQ0FBNkI7Ozs7O0lBQzdCLGlEQUE0Qjs7Ozs7SUFDNUIsZ0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbmltcG9ydCB7IGRyb3Bkb3duQW5pbWF0aW9uIH0gZnJvbSAnLi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvbkZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZHJvcGRvd24tY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246IGFic29sdXRlO3otaW5kZXg6IDEwNDAnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3MuZHJvcHVwXT1cImRpcmVjdGlvbiA9PT0gJ3VwJ1wiXG4gICAgICAgICBbY2xhc3MuZHJvcGRvd25dPVwiZGlyZWN0aW9uID09PSAnZG93bidcIlxuICAgICAgICAgW2NsYXNzLnNob3ddPVwiaXNPcGVuXCJcbiAgICAgICAgIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZmFjdG9yeURyb3BEb3duQW5pbWF0aW9uOiBBbmltYXRpb25GYWN0b3J5O1xuXG4gIGdldCBkaXJlY3Rpb24oKTogJ2Rvd24nIHwgJ3VwJyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcbiAgfVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIF9idWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXG4gICkge1xuICAgIHRoaXMuX2ZhY3RvcnlEcm9wRG93bkFuaW1hdGlvbiA9IF9idWlsZGVyLmJ1aWxkKGRyb3Bkb3duQW5pbWF0aW9uKTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcblxuICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcblxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLCAnb3BlbicpO1xuXG4gICAgICBpZiAoZHJvcGRvd24gJiYgIWlzQnMzKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XG5cbiAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVudS1yaWdodCcpKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdsZWZ0JywgJ2F1dG8nKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ3JpZ2h0JywgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ3RvcCcsICdhdXRvJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBkcm9wZG93bixcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVkoLTEwMSUpJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyb3Bkb3duICYmIHRoaXMuX3N0YXRlLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5fZmFjdG9yeURyb3BEb3duQW5pbWF0aW9uLmNyZWF0ZShkcm9wZG93bilcbiAgICAgICAgICAucGxheSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb250YWlucyhlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==