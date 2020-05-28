/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { Component } from '@angular/core';
export class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }] }
];
if (false) {
    /** @type {?} */
    BsTimepickerViewComponent.prototype.ampm;
    /** @type {?} */
    BsTimepickerViewComponent.prototype.hours;
    /** @type {?} */
    BsTimepickerViewComponent.prototype.minutes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdCMUMsTUFBTSxPQUFPLHlCQUF5QjtJQXRCdEM7UUF1QkUsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQzs7O1lBMUJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7YUFDRjs7OztJQUVDLHlDQUFZOztJQUNaLDBDQUFVOztJQUNWLDRDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIiB0eXBlPVwiYnV0dG9uXCI+LTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwiaG91cnNcIiBwbGFjZWhvbGRlcj1cIjAwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiIHR5cGU9XCJidXR0b25cIj4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiIHR5cGU9XCJidXR0b25cIj4tPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJtaW51dGVzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIiB0eXBlPVwiYnV0dG9uXCI+KzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3dpdGNoLXRpbWUtZm9ybWF0XCIgdHlwZT1cImJ1dHRvblwiPnt7IGFtcG0gfX1cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBS0NBWUFBQUJpOEtTREFBQUJTRWxFUVZRWVYzWFFQVXZEVUJRRzRITnVhZ3RWcWM2S2dvdUN2NkdJdUludFlCTEI5aGNJUXBMU3RDQUlWN0RZbXBUY1JXY1hxWmlvM1Z3Yy9VQ2MvUUVxZmd5S0dicjBJN25TMUVpSGVxWXpQTy9oNVNEMGpheFVaam1TTENCK09GYitVRklORndBU0FFQWRwdTlnYUdYVnlBSEhGUUJrSHBLSGM2YTlkekVDdkFEeVk5c3FsQU1zSzlXMGp6eERYcWV5dHIzbWhRY2t4U2ppMjdUSko1L3JQbUlwd0pKcTNIcnRkdXJpWU91cnYxYTRpMXA1SG5oa0c5T0Z5bWkwUmVvTzA1Y0d3YitheXY0ZHlzVnlnamVGbXNQMDVmOHdwWlE4ZnNkdmZtdVk5empXU05xVXRnWUZWbk9WUmVJTFlvQkZ6ZFFJNS9HR0Z6TkhoR2JlWm5vcERHVTI5c1pic2NnbGRtQzk5dzM1Vk9BVFR5Y0lNTWNCWElmcFNWR3paaEE2QzhoaDAwY29ubG42VlE5VEdnVjMyT0VBS1FDNERyQnE3Q0p3ZDBnZ1I3VnEvclByZmdCK0Mzc0d5cFk1REFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgICAgIGFsdD1cIlwiPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB7XG4gIGFtcG0gPSAnb2snO1xuICBob3VycyA9IDA7XG4gIG1pbnV0ZXMgPSAwO1xufVxuIl19