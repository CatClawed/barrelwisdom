import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { Subscription } from 'rxjs';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { DatepickerDateCustomClasses } from './models';
export declare class BsDatepickerInlineDirective implements OnInit, OnDestroy, OnChanges {
    _config: BsDatepickerInlineConfig;
    private _elementRef;
    _bsValue: Date;
    /**
     * Initial value of datepicker
     */
    bsValue: Date;
    /**
     * Config object for datepicker
     */
    bsConfig: Partial<BsDatepickerInlineConfig>;
    /**
     * Indicates whether datepicker is enabled or not
     */
    isDisabled: boolean;
    /**
     * Minimum date which is available for selection
     */
    minDate: Date;
    /**
     * Maximum date which is available for selection
     */
    maxDate: Date;
    /**
     * Date custom classes
     */
    dateCustomClasses: DatepickerDateCustomClasses[];
    /**
     * Disable specific dates
     */
    datesEnabled: Date[];
    /**
     * Enable specific dates
     */
    datesDisabled: Date[];
    /**
     * Emits when datepicker value has been changed
     */
    bsValueChange: EventEmitter<Date>;
    protected _subs: Subscription[];
    private _datepicker;
    private _datepickerRef;
    constructor(_config: BsDatepickerInlineConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Set config for datepicker
     */
    setConfig(): void;
    ngOnDestroy(): any;
}
