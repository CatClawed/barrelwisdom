/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyLyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBc0M1QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBU3BDLFlBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQU5ELElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQ1AsOEdBQThHO29CQUNoSCxjQUFjLEVBQUUsUUFBUTtvQkFDeEIsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCO2dCQXVCRCx1TkFBaUQ7eUJBckIvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CQzthQUdKOzs7O1lBdENRLGFBQWE7Ozt3QkF3Q25CLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLDhDQUEyQjs7SUFDM0IsMENBQXVCOztJQUN2QixtREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6XG4gICAgICAnXCJwb3BvdmVyIGluIHBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxuICAgICdbY2xhc3MuYnMzXSc6ICdpc0JzMycsXG4gICAgcm9sZTogJ3Rvb2x0aXAnLFxuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jazsnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC5iczMucG9wb3Zlci10b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wPi5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIDpob3N0LnBvcG92ZXIuYm90dG9tPi5hcnJvdyB7XG4gICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICB9XG4gICAgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3csIDpob3N0LmJzMy5icy1wb3BvdmVyLWxlZnQgLmFycm93e1xuICAgICAgbWFyZ2luOiAuM3JlbSAwO1xuICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxufVxuIl19