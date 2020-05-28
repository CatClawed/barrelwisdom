import { __extends } from 'tslib';
import { queueScheduler, BehaviorSubject, Observable } from 'rxjs';
import { observeOn, scan, map, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    __extends(MiniState, _super);
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    __extends(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, 
    /* tslint:disable-next-line: no-any */
    state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        _this.source = state$;
        return _this;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    MiniStore.prototype.select = /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    function (pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    MiniStore.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.next = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    MiniStore.prototype.error = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._dispatcher.error(err);
    };
    /**
     * @return {?}
     */
    MiniStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        /*noop*/
    };
    return MiniStore;
}(Observable));
if (false) {
    /**
     * @type {?}
     * @private
     */
    MiniStore.prototype._dispatcher;
    /**
     * @type {?}
     * @private
     */
    MiniStore.prototype._reducer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Action() { }
if (false) {
    /** @type {?} */
    Action.prototype.type;
    /** @type {?|undefined} */
    Action.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MiniState, MiniStore };
//# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map
