/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { Component } from '@angular/core';
var BsTimepickerViewComponent = /** @class */ (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                }] }
    ];
    return BsTimepickerViewComponent;
}());
export { BsTimepickerViewComponent };
if (false) {
    /** @type {?} */
    BsTimepickerViewComponent.prototype.ampm;
    /** @type {?} */
    BsTimepickerViewComponent.prototype.hours;
    /** @type {?} */
    BsTimepickerViewComponent.prototype.minutes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO1FBdUJFLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7O2dCQTFCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxrdkNBa0JUO2lCQUNGOztJQUtELGdDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FKWSx5QkFBeUI7OztJQUNwQyx5Q0FBWTs7SUFDWiwwQ0FBVTs7SUFDViw0Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLXRpbWVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWRlY3JlYXNlXCIgdHlwZT1cImJ1dHRvblwiPi08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImhvdXJzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIiB0eXBlPVwiYnV0dG9uXCI+KzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIiB0eXBlPVwiYnV0dG9uXCI+LTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibWludXRlc1wiIHBsYWNlaG9sZGVyPVwiMDBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWluY3JlYXNlXCIgdHlwZT1cImJ1dHRvblwiPis8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN3aXRjaC10aW1lLWZvcm1hdFwiIHR5cGU9XCJidXR0b25cIj57eyBhbXBtIH19XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFzQUFBQUtDQVlBQUFCaThLU0RBQUFCU0VsRVFWUVlWM1hRUFV2RFVCUUc0SE51YWd0VnFjNktnb3VDdjZHSXVJbnRZQkxCOWhjSVFwTFN0Q0FJVjdEWW1wVGNSV2NYcVppbzNWd2MvVUNjL1FFcWZneUtHYnIwSTduUzFFaUhlcVl6UE8vaDVTRDBqYXhVWmptU0xDQitPRmIrVUZJTkZ3QVNBRUFkcHU5Z2FHWFZ5QUhIRlFCa0hwS0hjNmE5ZHpFQ3ZBRHlZOXNxbEFNc0s5VzBqenhEWHFleXRyM21oUWNreFNqaTI3VEpKNS9yUG1JcHdKSnEzSHJ0ZHVyaVlPdXJ2MWE0aTFwNUhuaGtHOU9GeW1pMFJlb08wNWNHd2IrYXl2NGR5c1Z5Z2plRm1zUDA1Zjh3cFpROGZzZHZmbXVZOXpqV1NOcVV0Z1lGVm5PVlJlSUxZb0JGemRRSTUvR0dGek5IaEdiZVpub3BER1UyOXNaYnNjZ2xkbUM5OXczNVZPQVRUeWNJTU1jQlhJZnBTVkd6WmhBNkM4aGgwMGNvbmxuNlZROVRHZ1YzMk9FQUtRQzREckJxN0NKd2QwZ2dSN1ZxL3JQcmZnQitDM3NHeXBZNURBQUFBQUJKUlU1RXJrSmdnZz09XCJcbiAgICAgICAgICBhbHQ9XCJcIj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQge1xuICBhbXBtID0gJ29rJztcbiAgaG91cnMgPSAwO1xuICBtaW51dGVzID0gMDtcbn1cbiJdfQ==