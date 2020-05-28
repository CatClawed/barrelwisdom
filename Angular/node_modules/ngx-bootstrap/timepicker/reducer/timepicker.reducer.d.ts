import { Action } from 'ngx-bootstrap/mini-ngrx';
import { TimepickerComponentState, TimepickerControls } from '../timepicker.models';
export declare class TimepickerState {
    value: Date;
    config: TimepickerComponentState;
    controls: TimepickerControls;
}
export declare const initialState: TimepickerState;
export declare function timepickerReducer(state: TimepickerState, action: Action): TimepickerState;
