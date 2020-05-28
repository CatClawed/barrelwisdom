/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    tslib_1.__extends(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        /** @type {?} */
        var actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        /** @type {?} */
        var state$ = actionInQueue$.pipe(scan((/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }), _initialState));
        state$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.next(value); }));
        return _this;
    }
    return MiniState;
}(BehaviorSubject));
/**
 * @template T
 */
export { MiniState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdqRDs7OztJQUFrQyxxQ0FBa0I7SUFDbEQsbUJBQ0UsYUFBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLE9BQXlCO1FBSDNCLFlBS0Usa0JBQU0sYUFBYSxDQUFDLFNBaUJyQjs7WUFmTyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQzFCOztZQUNLLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUNoQyxJQUFJOzs7OztRQUFDLFVBQUMsS0FBUSxFQUFFLE1BQWM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsR0FDRCxhQUFhLENBQ2QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixFQUFDLENBQUM7O0lBQ25ELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBa0MsZUFBZSxHQXdCaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgbmdyeFxuICovXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcXVldWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9ic2VydmVPbiwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY2xhc3MgTWluaVN0YXRlPFQ+IGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgX2luaXRpYWxTdGF0ZTogVCxcbiAgICBhY3Rpb25zRGlzcGF0Y2hlciQ6IE9ic2VydmFibGU8QWN0aW9uPixcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XG4gICkge1xuICAgIHN1cGVyKF9pbml0aWFsU3RhdGUpO1xuXG4gICAgY29uc3QgYWN0aW9uSW5RdWV1ZSQgPSBhY3Rpb25zRGlzcGF0Y2hlciQucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlJCA9IGFjdGlvbkluUXVldWUkLnBpcGUoXG4gICAgICBzY2FuKChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBfaW5pdGlhbFN0YXRlXG4gICAgKSk7XG5cbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==