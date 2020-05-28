/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOffsetParent } from './getOffsetParent';
/**
 * @param {?} element
 * @return {?}
 */
export function isOffsetContainer(element) {
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPZmZzZXRDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvaXNPZmZzZXRDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFcEQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQVk7VUFDdEMsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPO0lBQzVCLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUN2QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUNMLFFBQVEsS0FBSyxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLE9BQU8sQ0FDOUUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50OiBhbnkpIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWxlbWVudDtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50XG4gICk7XG59XG4iXX0=