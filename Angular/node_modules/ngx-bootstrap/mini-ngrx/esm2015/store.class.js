/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright ngrx
 */
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniStore extends Observable {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0b3JlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0QsTUFBTSxPQUFPLFNBQWEsU0FBUSxVQUFhOzs7Ozs7SUFDN0MsWUFDVSxXQUE2QixFQUU3QixRQUE0QjtJQUNwQyxzQ0FBc0M7SUFDdEMsTUFBdUI7UUFFdkIsS0FBSyxFQUFFLENBQUM7UUFOQSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFFN0IsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFNcEMsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBSSxXQUE0Qjs7O2NBRTlCLE9BQU8sR0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN4QixLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztRQUNyRSwyQ0FBMkM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQWM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQVE7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFFBQVE7SUFDVixDQUFDO0NBQ0Y7Ozs7OztJQTNDRyxnQ0FBcUM7Ozs7O0lBRXJDLDZCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBuZ3J4XG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTWluaVN0b3JlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPEFjdGlvbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgcHJpdmF0ZSBfcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcbiAgfVxuXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGNvbnN0IG1hcHBlZCQ6IE9ic2VydmFibGU8Uj4gPSB0aGlzLnNvdXJjZS5waXBlKG1hcChwYXRoT3JNYXBGbikpO1xuXG4gICAgcmV0dXJuIG1hcHBlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogTWluaVN0b3JlPFI+IHtcbiAgICBjb25zdCBzdG9yZSA9IG5ldyBNaW5pU3RvcmU8Uj4odGhpcy5fZGlzcGF0Y2hlciwgdGhpcy5fcmVkdWNlciwgdGhpcyk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIHN0b3JlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgbmV4dChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLmVycm9yKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvKm5vb3AqL1xuICB9XG59XG4iXX0=