import { BehaviorSubject, queueScheduler, Observable } from 'rxjs';
import { observeOn, scan, map, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MiniState extends BehaviorSubject {
    /**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        /** @type {?} */
        const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        /** @type {?} */
        const state$ = actionInQueue$.pipe(scan((/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        (state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }), _initialState));
        state$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.next(value)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MiniStore extends Observable {
    /**
     * @param {?} _dispatcher
     * @param {?} _reducer
     * @param {?} state$
     */
    constructor(_dispatcher, _reducer, 
    /* tslint:disable-next-line: no-any */
    state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        this.source = state$;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    select(pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        const mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    next(action) {
        this._dispatcher.next(action);
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) {
        this._dispatcher.error(err);
    }
    /**
     * @return {?}
     */
    complete() {
        /*noop*/
    }
}
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
