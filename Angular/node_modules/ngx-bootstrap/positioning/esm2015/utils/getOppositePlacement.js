/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the opposite placement of the given one
 * @param {?} placement
 * @return {?}
 */
export function getOppositePlacement(placement) {
    /** @type {?} */
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, (/**
     * @param {?} matched
     * @return {?}
     */
    matched => ((/** @type {?} */ (hash)))[matched]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFNBQWlCOztVQUM5QyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBRTNFLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0I7Ozs7SUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO0FBQ3hGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudDogc3RyaW5nKSB7XG4gIGNvbnN0IGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcblxuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IChoYXNoIGFzIGFueSlbbWF0Y2hlZF0pO1xufVxuIl19