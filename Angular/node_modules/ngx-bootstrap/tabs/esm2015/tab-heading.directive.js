/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
export class TabHeadingDirective {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[tabHeading]' },] }
];
/** @nocollapse */
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: TabDirective }
];
if (false) {
    /** @type {?} */
    TabHeadingDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90YWJzLyIsInNvdXJjZXMiOlsidGFiLWhlYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFJL0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSzlCLFlBQVksV0FBNkIsRUFBRSxHQUFpQjtRQUMxRCxHQUFHLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUMvQixDQUFDOzs7WUFSRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O1lBTG5CLFdBQVc7WUFFdEIsWUFBWTs7OztJQU1uQiwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5cbi8qKiBTaG91bGQgYmUgdXNlZCB0byBtYXJrIDxuZy10ZW1wbGF0ZT4gZWxlbWVudCBhcyBhIHRlbXBsYXRlIGZvciB0YWIgaGVhZGluZyAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3RhYkhlYWRpbmddJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkhlYWRpbmdEaXJlY3RpdmUge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHRhYjogVGFiRGlyZWN0aXZlKSB7XG4gICAgdGFiLmhlYWRpbmdSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19