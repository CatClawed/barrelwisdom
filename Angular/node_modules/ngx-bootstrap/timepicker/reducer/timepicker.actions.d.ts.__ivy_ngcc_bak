import { Action } from 'ngx-bootstrap/mini-ngrx';
import { TimeChangeEvent, TimepickerComponentState, Time } from '../timepicker.models';
export declare class TimepickerActions {
    static readonly WRITE_VALUE = "[timepicker] write value from ng model";
    static readonly CHANGE_HOURS = "[timepicker] change hours";
    static readonly CHANGE_MINUTES = "[timepicker] change minutes";
    static readonly CHANGE_SECONDS = "[timepicker] change seconds";
    static readonly SET_TIME_UNIT = "[timepicker] set time unit";
    static readonly UPDATE_CONTROLS = "[timepicker] update controls";
    writeValue(value: Date | string): {
        type: string;
        payload: string | Date;
    };
    changeHours(event: TimeChangeEvent): {
        type: string;
        payload: TimeChangeEvent;
    };
    changeMinutes(event: TimeChangeEvent): {
        type: string;
        payload: TimeChangeEvent;
    };
    changeSeconds(event: TimeChangeEvent): Action;
    setTime(value: Time): Action;
    updateControls(value: TimepickerComponentState): Action;
}
