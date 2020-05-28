import { OnDestroy, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
export declare class BarComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    readonly setBarWidth: number;
    addClass: boolean;
    readonly isBs3: boolean;
    striped: boolean;
    animate: boolean;
    percent: number;
    progress: ProgressbarComponent;
    protected _value: number;
    protected _type: string;
    private _prevType;
    constructor(el: ElementRef, progress: ProgressbarComponent, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    recalculatePercentage(): void;
    private applyTypeClasses;
}
