import { ChangeDetectorRef, Provider, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
export declare const RADIO_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioGroupDirective implements ControlValueAccessor {
    private cdr;
    onChange: Function;
    onTouched: Function;
    radioButtons: QueryList<ButtonRadioDirective>;
    value: string | null;
    private _value;
    constructor(cdr: ChangeDetectorRef);
    writeValue(value: string | null): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(disabled: boolean): void;
}
