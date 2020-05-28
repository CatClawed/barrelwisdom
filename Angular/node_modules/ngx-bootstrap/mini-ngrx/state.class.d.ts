/**
 * @copyright ngrx
 */
import { Action, ActionReducer } from './index';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class MiniState<T> extends BehaviorSubject<T> {
    constructor(_initialState: T, actionsDispatcher$: Observable<Action>, reducer: ActionReducer<T>);
}
