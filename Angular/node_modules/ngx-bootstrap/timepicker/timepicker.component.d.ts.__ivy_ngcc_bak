import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { TimepickerConfig } from './timepicker.config';
import { TimeChangeSource, TimepickerComponentState, TimepickerControls } from './timepicker.models';
import { Subscription } from 'rxjs';
import { ControlValueAccessorModel } from './models';
export declare const TIMEPICKER_CONTROL_VALUE_ACCESSOR: ControlValueAccessorModel;
export declare class TimepickerComponent implements ControlValueAccessor, TimepickerComponentState, TimepickerControls, OnChanges, OnDestroy {
    private _cd;
    private _store;
    private _timepickerActions;
    /** hours change step */
    hourStep: number;
    /** hours change step */
    minuteStep: number;
    /** seconds change step */
    secondsStep: number;
    /** if true hours and minutes fields will be readonly */
    readonlyInput: boolean;
    /** if true hours and minutes fields will be disabled */
    disabled: boolean;
    /** if true scroll inside hours and minutes inputs will change time */
    mousewheel: boolean;
    /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
    arrowkeys: boolean;
    /** if true spinner arrows above and below the inputs will be shown */
    showSpinners: boolean;
    /** if true meridian button will be shown */
    showMeridian: boolean;
    /** show minutes in timepicker */
    showMinutes: boolean;
    /** show seconds in timepicker */
    showSeconds: boolean;
    /** meridian labels based on locale */
    meridians: string[];
    /** minimum time user can select */
    min: Date;
    /** maximum time user can select */
    max: Date;
    /** placeholder for hours field in timepicker */
    hoursPlaceholder: string;
    /** placeholder for minutes field in timepicker */
    minutesPlaceholder: string;
    /** placeholder for seconds field in timepicker */
    secondsPlaceholder: string;
    /** emits true if value is a valid date */
    isValid: EventEmitter<boolean>;
    hours: string;
    minutes: string;
    seconds: string;
    meridian: string;
    /** @deprecated - please use `isEditable` instead */
    readonly isSpinnersVisible: boolean;
    readonly isEditable: boolean;
    invalidHours: boolean;
    invalidMinutes: boolean;
    invalidSeconds: boolean;
    labelHours: string;
    labelMinutes: string;
    labelSeconds: string;
    canIncrementHours: boolean;
    canIncrementMinutes: boolean;
    canIncrementSeconds: boolean;
    canDecrementHours: boolean;
    canDecrementMinutes: boolean;
    canDecrementSeconds: boolean;
    canToggleMeridian: boolean;
    onChange: Function;
    onTouched: Function;
    timepickerSub: Subscription;
    constructor(_config: TimepickerConfig, _cd: ChangeDetectorRef, _store: TimepickerStore, _timepickerActions: TimepickerActions);
    resetValidation(): void;
    isPM(): boolean;
    prevDef($event: Event): void;
    wheelSign($event: WheelEventInit): number;
    ngOnChanges(changes: SimpleChanges): void;
    changeHours(step: number, source?: TimeChangeSource): void;
    changeMinutes(step: number, source?: TimeChangeSource): void;
    changeSeconds(step: number, source?: TimeChangeSource): void;
    updateHours(hours: string): void;
    updateMinutes(minutes: string): void;
    updateSeconds(seconds: string): void;
    isValidLimit(): boolean;
    _updateTime(): void;
    toggleMeridian(): void;
    /**
     * Write a new value to the element.
     */
    writeValue(obj: string | null | undefined | Date): void;
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: (_: any) => {}): void;
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: () => {}): void;
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
    private _renderTime;
}
