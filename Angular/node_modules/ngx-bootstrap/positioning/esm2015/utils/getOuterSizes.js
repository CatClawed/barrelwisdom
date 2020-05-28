/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */
export function getOuterSizes(element) {
    /** @type {?} */
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const styles = window.getComputedStyle(element);
    /** @type {?} */
    const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    /** @type {?} */
    const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3V0ZXJTaXplcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRPdXRlclNpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxhQUFhLENBQUMsT0FBWTs7VUFDbEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVzs7VUFDMUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7O1VBQ3pDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7O1VBQzVFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7SUFFbEYsT0FBTztRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztLQUN6QyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50OiBhbnkpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBOdW1iZXIoZWxlbWVudC5vZmZzZXRXaWR0aCkgKyB5LFxuICAgIGhlaWdodDogTnVtYmVyKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHhcbiAgfTtcbn1cbiJdfQ==