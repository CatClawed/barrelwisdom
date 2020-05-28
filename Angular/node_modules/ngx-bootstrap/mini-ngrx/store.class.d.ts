/**
 * @copyright ngrx
 */
import { Observable, Observer, Operator } from 'rxjs';
import { Action, ActionReducer } from './index';
export declare class MiniStore<T> extends Observable<T> implements Observer<Action> {
    private _dispatcher;
    private _reducer;
    constructor(_dispatcher: Observer<Action>, _reducer: ActionReducer<any>, state$: Observable<any>);
    select<R>(pathOrMapFn: (state: T) => R): Observable<R>;
    lift<R>(operator: Operator<T, R>): MiniStore<R>;
    dispatch(action: Action): void;
    next(action: Action): void;
    error(err: any): void;
    complete(): void;
}
