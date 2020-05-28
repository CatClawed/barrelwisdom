import { ChangeDetectorRef, ElementRef, OnInit, Provider, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
export declare const RADIO_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioDirective implements ControlValueAccessor, OnInit {
    private el;
    private cdr;
    private group;
    private renderer;
    onChange: Function;
    onTouched: Function;
    /** Radio button value, will be set to `ngModel` */
    btnRadio: string;
    /** If `true` — radio button can be unchecked */
    uncheckable: boolean;
    /** Current value of radio component or group */
    value: null | string;
    /** If `true` — radio button is disabled */
    disabled: boolean;
    readonly isActive: boolean;
    private _value;
    private _disabled;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, group: ButtonRadioGroupDirective, renderer: Renderer2);
    onClick(): void;
    ngOnInit(): void;
    onBlur(): void;
    _onChange(value: string): void;
    writeValue(value: string): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(disabled: boolean): void;
}
