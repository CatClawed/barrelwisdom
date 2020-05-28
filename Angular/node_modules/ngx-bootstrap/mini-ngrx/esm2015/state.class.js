/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniState extends BehaviorSubject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR2pELE1BQU0sT0FBTyxTQUFhLFNBQVEsZUFBa0I7Ozs7OztJQUNsRCxZQUNFLGFBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxPQUF5QjtRQUV6QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7O2NBRWYsY0FBYyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQjs7Y0FDSyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FDaEMsSUFBSTs7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxHQUNELGFBQWEsQ0FDZCxDQUFDO1FBRUYsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBuZ3J4XG4gKi9cbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uLCBzY2FuIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmV4cG9ydCBjbGFzcyBNaW5pU3RhdGU8VD4gZXh0ZW5kcyBCZWhhdmlvclN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBfaW5pdGlhbFN0YXRlOiBULFxuICAgIGFjdGlvbnNEaXNwYXRjaGVyJDogT2JzZXJ2YWJsZTxBY3Rpb24+LFxuICAgIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VD5cbiAgKSB7XG4gICAgc3VwZXIoX2luaXRpYWxTdGF0ZSk7XG5cbiAgICBjb25zdCBhY3Rpb25JblF1ZXVlJCA9IGFjdGlvbnNEaXNwYXRjaGVyJC5waXBlKFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKVxuICAgICk7XG4gICAgY29uc3Qgc3RhdGUkID0gYWN0aW9uSW5RdWV1ZSQucGlwZShcbiAgICAgIHNjYW4oKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIF9pbml0aWFsU3RhdGVcbiAgICApKTtcblxuICAgIHN0YXRlJC5zdWJzY3JpYmUoKHZhbHVlOiBUKSA9PiB0aGlzLm5leHQodmFsdWUpKTtcbiAgfVxufVxuIl19