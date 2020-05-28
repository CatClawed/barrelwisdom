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
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPZmZzZXRDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvaXNPZmZzZXRDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFcEQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQVk7SUFDcEMsSUFBQSwyQkFBUTtJQUNoQixJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sQ0FDTCxRQUFRLEtBQUssTUFBTSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxPQUFPLENBQzlFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0T2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudDogYW55KSB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudFxuICApO1xufVxuIl19