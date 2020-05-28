/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
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
                    styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: Input }],
        title: [{ type: Input }]
    };
    return PopoverContainerComponent;
}());
export { PopoverContainerComponent };
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyLyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTVDO0lBNkNFLG1DQUFZLE1BQXFCO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFORCxzQkFBSSw0Q0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQ1AsOEdBQThHO3dCQUNoSCxjQUFjLEVBQUUsUUFBUTt3QkFDeEIsYUFBYSxFQUFFLE9BQU87d0JBQ3RCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7cUJBQ3hCO29CQXVCRCx1TkFBaUQ7NkJBckIvQyw4YkFtQkM7aUJBR0o7Ozs7Z0JBdENRLGFBQWE7Ozs0QkF3Q25CLEtBQUs7d0JBQ0wsS0FBSzs7SUFVUixnQ0FBQztDQUFBLEFBaERELElBZ0RDO1NBWlkseUJBQXlCOzs7SUFDcEMsOENBQTJCOztJQUMzQiwwQ0FBdUI7O0lBQ3ZCLG1EQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzpcbiAgICAgICdcInBvcG92ZXIgaW4gcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy1wb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXG4gICAgJ1tjbGFzcy5iczNdJzogJ2lzQnMzJyxcbiAgICByb2xlOiAndG9vbHRpcCcsXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrOydcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0LmJzMy5wb3BvdmVyLXRvcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3A+LmFycm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgOmhvc3QucG9wb3Zlci5ib3R0b20+LmFycm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCAuYXJyb3d7XG4gICAgICBtYXJnaW46IC4zcmVtIDA7XG4gICAgfVxuICAgIGBcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBQb3BvdmVyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG59XG4iXX0=