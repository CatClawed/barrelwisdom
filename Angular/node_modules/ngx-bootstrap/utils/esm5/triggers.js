/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Trigger } from './trigger.class';
/**
 * @record
 */
export function ListenOptions() { }
if (false) {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.targets;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideClick;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideEsc;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) { return trigger.split(':'); }))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        return triggerPair.isManual();
    }));
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
export function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    function () {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    // lazy listeners registration
    /** @type {?} */
    var _registerHide = [];
    /** @type {?} */
    var registerHide = (/**
     * @return {?}
     */
    function () {
        // add hide listeners to unregister array
        _registerHide.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        function (fn) { return listeners.push(fn()); }));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push((/**
             * @return {?}
             */
            function () {
                return renderer.listen(target, trigger.close, options.hide);
            }));
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        function () { return showFn(registerHide); })));
    }));
    return (/**
     * @return {?}
     */
    function () {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUsxQyxtQ0FTQzs7O0lBUkMsK0JBQXFCOztJQUNyQixnQ0FBd0I7O0lBQ3hCLGlDQUFrQjs7SUFDbEIscUNBQXVCOztJQUN2QixtQ0FBcUI7O0lBQ3JCLDZCQUF1Qjs7SUFDdkIsNkJBQXVCOztJQUN2QiwrQkFBeUI7OztJQUdyQixlQUFlLEdBQUc7SUFDdEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztJQUNoQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0NBQy9COzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxRQUFnQixFQUFFLE9BQThCO0lBQTlCLHdCQUFBLEVBQUEseUJBQThCOztRQUN0RSxlQUFlLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO0lBRS9DLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxFQUFFLENBQUM7S0FDWDs7UUFFSyxjQUFjLEdBQUcsZUFBZTtTQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ1osR0FBRzs7OztJQUFDLFVBQUMsT0FBZSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztTQUM1QyxHQUFHOzs7O0lBQUMsVUFBQyxXQUFxQjs7WUFDbkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXO1FBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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QyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUM3RDtZQUNBLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFFBQW1CLEVBQ25CLE9BQXNCO0lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztLQUMzQjtJQUVELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVzs7OztJQUFFLFVBQUMsS0FBVTtRQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsSUFDRSxPQUFPLENBQUMsT0FBTztZQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQTdCLENBQTZCLEVBQUMsRUFDN0Q7WUFDQSxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXIuY2xhc3MnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IHR5cGUgQnNFdmVudENhbGxiYWNrID0gKGV2ZW50PzogYW55KSA9PiBib29sZWFuIHwgdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5PcHRpb25zIHtcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQ7XG4gIHRhcmdldHM/OiBIVE1MRWxlbWVudFtdO1xuICB0cmlnZ2Vycz86IHN0cmluZztcbiAgb3V0c2lkZUNsaWNrPzogYm9vbGVhbjtcbiAgb3V0c2lkZUVzYz86IGJvb2xlYW47XG4gIHNob3c/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIGhpZGU/OiBCc0V2ZW50Q2FsbGJhY2s7XG4gIHRvZ2dsZT86IEJzRXZlbnRDYWxsYmFjaztcbn1cblxuY29uc3QgREVGQVVMVF9BTElBU0VTID0ge1xuICBob3ZlcjogWydtb3VzZW92ZXInLCAnbW91c2VvdXQnXSxcbiAgZm9jdXM6IFsnZm9jdXNpbicsICdmb2N1c291dCddXG59O1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlczogYW55ID0gREVGQVVMVF9BTElBU0VTKTogVHJpZ2dlcltdIHtcbiAgY29uc3QgdHJpbW1lZFRyaWdnZXJzID0gKHRyaWdnZXJzIHx8ICcnKS50cmltKCk7XG5cbiAgaWYgKHRyaW1tZWRUcmlnZ2Vycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHRyaW1tZWRUcmlnZ2Vyc1xuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLm1hcCgodHJpZ2dlcjogc3RyaW5nKSA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpXG4gICAgLm1hcCgodHJpZ2dlclBhaXI6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBhbGlhcyA9IGFsaWFzZXNbdHJpZ2dlclBhaXJbMF1dIHx8IHRyaWdnZXJQYWlyO1xuXG4gICAgICByZXR1cm4gbmV3IFRyaWdnZXIoYWxpYXNbMF0sIGFsaWFzWzFdKTtcbiAgICB9KTtcblxuICBjb25zdCBtYW51YWxUcmlnZ2VycyA9IHBhcnNlZFRyaWdnZXJzLmZpbHRlcigodHJpZ2dlclBhaXI6IFRyaWdnZXIpID0+XG4gICAgdHJpZ2dlclBhaXIuaXNNYW51YWwoKVxuICApO1xuXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogb25seSBvbmUgbWFudWFsIHRyaWdnZXIgaXMgYWxsb3dlZCcpO1xuICB9XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogbWFudWFsIHRyaWdnZXIgY2FuXFwndCBiZSBtaXhlZCB3aXRoIG90aGVyIHRyaWdnZXJzJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVHJpZ2dlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vyczogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZuOiBCc0V2ZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZuOiBCc0V2ZW50Q2FsbGJhY2spOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcblxuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGlmICh0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2UpIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgdG9nZ2xlRm4pKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCBzaG93Rm4pLFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgaGlkZUZuKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2Vyc1YyKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpOiBGdW5jdGlvbiB7XG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2VycyhvcHRpb25zLnRyaWdnZXJzKTtcbiAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gIC8vIGRvIG5vdGhpbmdcbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8vIGFsbCBsaXN0ZW5lcnNcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIGxhenkgbGlzdGVuZXJzIHJlZ2lzdHJhdGlvblxuICBjb25zdCBfcmVnaXN0ZXJIaWRlOiBGdW5jdGlvbltdID0gW107XG4gIGNvbnN0IHJlZ2lzdGVySGlkZSA9ICgpID0+IHtcbiAgICAvLyBhZGQgaGlkZSBsaXN0ZW5lcnMgdG8gdW5yZWdpc3RlciBhcnJheVxuICAgIF9yZWdpc3RlckhpZGUuZm9yRWFjaCgoZm46IEZ1bmN0aW9uKSA9PiBsaXN0ZW5lcnMucHVzaChmbigpKSk7XG4gICAgLy8gcmVnaXN0ZXIgaGlkZSBldmVudHMgb25seSBvbmNlXG4gICAgX3JlZ2lzdGVySGlkZS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8vIHJlZ2lzdGVyIG9wZW5cXGNsb3NlXFx0b2dnbGUgbGlzdGVuZXJzXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICBjb25zdCB1c2VUb2dnbGUgPSB0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2U7XG4gICAgY29uc3Qgc2hvd0ZuID0gdXNlVG9nZ2xlID8gb3B0aW9ucy50b2dnbGUgOiBvcHRpb25zLnNob3c7XG5cbiAgICBpZiAoIXVzZVRvZ2dsZSkge1xuICAgICAgX3JlZ2lzdGVySGlkZS5wdXNoKCgpID0+XG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIG9wdGlvbnMuaGlkZSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sICgpID0+IHNob3dGbihyZWdpc3RlckhpZGUpKVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJPdXRzaWRlQ2xpY2socmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlQ2xpY2spIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIHJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnRhcmdldCAmJiBvcHRpb25zLnRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5oaWRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFc2NDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub3V0c2lkZUVzYykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdrZXl1cC5lc2MnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnRhcmdldCAmJiBvcHRpb25zLnRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5oaWRlKCk7XG4gIH0pO1xufVxuIl19