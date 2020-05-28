import { InjectionToken } from '@angular/core';
export declare const PERFECT_SCROLLBAR_CONFIG: InjectionToken<unknown>;
export declare class Geometry {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number);
}
export declare class Position {
    x: number | 'start' | 'end';
    y: number | 'start' | 'end';
    constructor(x: number | 'start' | 'end', y: number | 'start' | 'end');
}
export declare type PerfectScrollbarEvent = 'psScrollY' | 'psScrollX' | 'psScrollUp' | 'psScrollDown' | 'psScrollLeft' | 'psScrollRight' | 'psYReachEnd' | 'psYReachStart' | 'psXReachEnd' | 'psXReachStart';
export declare const PerfectScrollbarEvents: PerfectScrollbarEvent[];
export interface PerfectScrollbarConfigInterface {
    handlers?: string[];
    wheelSpeed?: number;
    swipeEasing?: boolean;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    wheelPropagation?: boolean;
    useBothWheelAxes?: boolean;
    scrollingThreshold?: number;
    minScrollbarLength?: number;
    maxScrollbarLength?: number;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
}
export declare class PerfectScrollbarConfig implements PerfectScrollbarConfigInterface {
    handlers?: string[];
    wheelSpeed?: number;
    swipeEasing?: boolean;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    wheelPropagation?: boolean;
    useBothWheelAxes?: boolean;
    scrollingThreshold?: number;
    minScrollbarLength?: number;
    maxScrollbarLength?: number;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    constructor(config?: PerfectScrollbarConfigInterface);
    assign(config?: PerfectScrollbarConfigInterface): void;
}
