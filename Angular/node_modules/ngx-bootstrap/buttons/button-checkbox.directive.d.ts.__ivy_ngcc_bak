import { OnInit, Provider } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CHECKBOX_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * Add checkbox functionality to any element
 */
export declare class ButtonCheckboxDirective implements ControlValueAccessor, OnInit {
    /** Truthy value, will be set to ngModel */
    btnCheckboxTrue: boolean;
    /** Falsy value, will be set to ngModel */
    btnCheckboxFalse: boolean;
    state: boolean;
    protected value: boolean | string;
    protected isDisabled: boolean;
    protected onChange: Function;
    protected onTouched: Function;
    onClick(): void;
    ngOnInit(): void;
    protected readonly trueValue: boolean;
    protected readonly falseValue: boolean;
    toggle(state: boolean): void;
    writeValue(value: boolean | string | null): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
}
