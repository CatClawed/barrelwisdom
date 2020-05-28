/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 */
/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
export function getBordersSize(styles, axis) {
    /** @type {?} */
    const sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ (`border${sideA}Width`))]) +
        parseFloat(styles[(/** @type {?} */ (`border${sideB}Width`))]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm9yZGVyc1NpemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvZ2V0Qm9yZGVyc1NpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUEyQixFQUFFLElBQVk7O1VBQ2hFLEtBQUssR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1VBQ3JDLEtBQUssR0FBRyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7SUFFbkQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQUEsU0FBUyxLQUFLLE9BQU8sRUFBTyxDQUFDLENBQUM7UUFDaEQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxTQUFTLEtBQUssT0FBTyxFQUFPLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24sIGF4aXM6IHN0cmluZykge1xuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIChcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGAgYXMgYW55XSkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYCBhcyBhbnldKVxuICApO1xufVxuIl19