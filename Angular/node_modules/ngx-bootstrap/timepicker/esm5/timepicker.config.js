/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
        /**
         * hours aria label
         */
        this.ariaLabelHours = 'hours';
        /**
         * minutes aria label
         */
        this.ariaLabelMinutes = 'minutes';
        /**
         * seconds aria label
         */
        this.ariaLabelSeconds = 'seconds';
    }
    TimepickerConfig.decorators = [
        { type: Injectable }
    ];
    return TimepickerConfig;
}());
export { TimepickerConfig };
if (false) {
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.minuteStep;
    /**
     * seconds changes step
     * @type {?}
     */
    TimepickerConfig.prototype.secondsStep;
    /**
     * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
     * @type {?}
     */
    TimepickerConfig.prototype.showMeridian;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerConfig.prototype.meridians;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerConfig.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerConfig.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerConfig.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerConfig.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerConfig.prototype.showSpinners;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showSeconds;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showMinutes;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.max;
    /**
     * placeholder for hours field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.hoursPlaceholder;
    /**
     * placeholder for minutes field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.minutesPlaceholder;
    /**
     * placeholder for seconds field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.secondsPlaceholder;
    /**
     * hours aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelHours;
    /**
     * minutes aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelMinutes;
    /**
     * seconds aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelSeconds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUczQztJQUFBOzs7O1FBR0UsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQUViLGVBQVUsR0FBRyxDQUFDLENBQUM7Ozs7UUFFZixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7OztRQUVqQixpQkFBWSxHQUFHLElBQUksQ0FBQzs7OztRQUVwQixjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7UUFFekIsa0JBQWEsR0FBRyxLQUFLLENBQUM7Ozs7UUFFdEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQUVqQixlQUFVLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWxCLGNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUM7Ozs7UUFFcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7UUFFcEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7Ozs7UUFNbkIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7O1FBRXhCLHVCQUFrQixHQUFHLElBQUksQ0FBQzs7OztRQUUxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7Ozs7UUFFMUIsbUJBQWMsR0FBRyxPQUFPLENBQUM7Ozs7UUFFekIscUJBQWdCLEdBQUcsU0FBUyxDQUFDOzs7O1FBRTdCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOztnQkExQ0EsVUFBVTs7SUEwQ1gsdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSxnQkFBZ0I7Ozs7OztJQUUzQixvQ0FBYTs7Ozs7SUFFYixzQ0FBZTs7Ozs7SUFFZix1Q0FBaUI7Ozs7O0lBRWpCLHdDQUFvQjs7Ozs7SUFFcEIscUNBQXlCOzs7OztJQUV6Qix5Q0FBc0I7Ozs7O0lBRXRCLG9DQUFpQjs7Ozs7SUFFakIsc0NBQWtCOzs7OztJQUVsQixxQ0FBaUI7Ozs7O0lBRWpCLHdDQUFvQjs7Ozs7SUFFcEIsdUNBQW9COzs7OztJQUVwQix1Q0FBbUI7Ozs7O0lBRW5CLCtCQUFVOzs7OztJQUVWLCtCQUFVOzs7OztJQUVWLDRDQUF3Qjs7Ozs7SUFFeEIsOENBQTBCOzs7OztJQUUxQiw4Q0FBMEI7Ozs7O0lBRTFCLDBDQUF5Qjs7Ozs7SUFFekIsNENBQTZCOzs7OztJQUU3Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBQcm92aWRlcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aW1lcGlja2VyICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBob3VyU3RlcCA9IDE7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBtaW51dGVTdGVwID0gNTtcbiAgLyoqIHNlY29uZHMgY2hhbmdlcyBzdGVwICovXG4gIHNlY29uZHNTdGVwID0gMTA7XG4gIC8qKiBpZiB0cnVlIHdvcmtzIGluIDEySCBtb2RlIGFuZCBkaXNwbGF5cyBBTS9QTS4gSWYgZmFsc2Ugd29ya3MgaW4gMjRIIG1vZGUgYW5kIGhpZGVzIEFNL1BNICovXG4gIHNob3dNZXJpZGlhbiA9IHRydWU7XG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXG4gIG1lcmlkaWFucyA9IFsnQU0nLCAnUE0nXTtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXG4gIG1vdXNld2hlZWwgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSB0aGUgdmFsdWVzIG9mIGhvdXJzIGFuZCBtaW51dGVzIGNhbiBiZSBjaGFuZ2VkIHVzaW5nIHRoZSB1cC9kb3duIGFycm93IGtleXMgb24gdGhlIGtleWJvYXJkICovXG4gIGFycm93a2V5cyA9IHRydWU7XG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cbiAgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXG4gIHNob3dTZWNvbmRzID0gZmFsc2U7XG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xuICBzaG93TWludXRlcyA9IHRydWU7XG4gIC8qKiBtaW5pbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIG1pbjogRGF0ZTtcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgbWF4OiBEYXRlO1xuICAvKiogcGxhY2Vob2xkZXIgZm9yIGhvdXJzIGZpZWxkIGluIHRpbWVwaWNrZXIgKi9cbiAgaG91cnNQbGFjZWhvbGRlciA9ICdISCc7XG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgbWludXRlcyBmaWVsZCBpbiB0aW1lcGlja2VyICovXG4gIG1pbnV0ZXNQbGFjZWhvbGRlciA9ICdNTSc7XG4gIC8qKiBwbGFjZWhvbGRlciBmb3Igc2Vjb25kcyBmaWVsZCBpbiB0aW1lcGlja2VyICovXG4gIHNlY29uZHNQbGFjZWhvbGRlciA9ICdTUyc7XG4gIC8qKiBob3VycyBhcmlhIGxhYmVsICovXG4gIGFyaWFMYWJlbEhvdXJzID0gJ2hvdXJzJztcbiAgLyoqIG1pbnV0ZXMgYXJpYSBsYWJlbCAqL1xuICBhcmlhTGFiZWxNaW51dGVzID0gJ21pbnV0ZXMnO1xuICAvKiogc2Vjb25kcyBhcmlhIGxhYmVsICovXG4gIGFyaWFMYWJlbFNlY29uZHMgPSAnc2Vjb25kcyc7XG59XG4iXX0=