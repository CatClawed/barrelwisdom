/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */
export function updateContainerClass(data, renderer) {
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var containerClass = target.className;
    if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
        containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
        containerClass = containerClass.replace(/\sauto/g, " " + data.placement);
        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
        }
        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
        }
    }
    containerClass = containerClass.replace(/left|right|top|bottom/g, "" + data.placement.split(' ')[0]);
    if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
    }
    target.className = containerClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQ29udGFpbmVyQ2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvdXBkYXRlQ29udGFpbmVyQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsTUFBTSxVQUFVLG9CQUFvQixDQUFDLElBQVUsRUFBRSxRQUFvQjs7UUFDN0QsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7UUFFL0IsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTO0lBRXJDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUN0QixjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7UUFDNUYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1FBQzVGLGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFJLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FBQztRQUV6RSxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3RixjQUFjLElBQUksZUFBZSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUYsY0FBYyxJQUFJLGVBQWUsQ0FBQztTQUNuQztLQUNGO0lBRUQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBRXJHLElBQUksUUFBUSxFQUFFO1FBQ1osUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXZELE9BQU87S0FDUjtJQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVwZGF0ZSBjbGFzcyBmb3IgdGhlIGdpdmVuIHBvcHBlclxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyQ2xhc3MoZGF0YTogRGF0YSwgcmVuZGVyZXI/OiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XG5cbiAgbGV0IGNvbnRhaW5lckNsYXNzID0gdGFyZ2V0LmNsYXNzTmFtZTtcblxuICBpZiAoZGF0YS5wbGFjZW1lbnRBdXRvKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSBjb250YWluZXJDbGFzcy5yZXBsYWNlKC9icy1wb3BvdmVyLWF1dG8vZywgYGJzLXBvcG92ZXItJHtkYXRhLnBsYWNlbWVudH1gKTtcbiAgICBjb250YWluZXJDbGFzcyA9IGNvbnRhaW5lckNsYXNzLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApO1xuICAgIGNvbnRhaW5lckNsYXNzID0gY29udGFpbmVyQ2xhc3MucmVwbGFjZSgvXFxzYXV0by9nLCBgICR7ZGF0YS5wbGFjZW1lbnR9YCk7XG5cbiAgICBpZiAoY29udGFpbmVyQ2xhc3MuaW5kZXhPZigncG9wb3ZlcicpICE9PSAtMSAmJiBjb250YWluZXJDbGFzcy5pbmRleE9mKCdwb3BvdmVyLWF1dG8nKSA9PT0gLTEpIHtcbiAgICAgIGNvbnRhaW5lckNsYXNzICs9ICcgcG9wb3Zlci1hdXRvJztcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyQ2xhc3MuaW5kZXhPZigndG9vbHRpcCcpICE9PSAtMSAgJiYgY29udGFpbmVyQ2xhc3MuaW5kZXhPZigndG9vbHRpcC1hdXRvJykgPT09IC0xKSB7XG4gICAgICBjb250YWluZXJDbGFzcyArPSAnIHRvb2x0aXAtYXV0byc7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyQ2xhc3MgPSBjb250YWluZXJDbGFzcy5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXX1gKTtcblxuICBpZiAocmVuZGVyZXIpIHtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLCBjb250YWluZXJDbGFzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXJnZXQuY2xhc3NOYW1lID0gY29udGFpbmVyQ2xhc3M7XG59XG4iXX0=