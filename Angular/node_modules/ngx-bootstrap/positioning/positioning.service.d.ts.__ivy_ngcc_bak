import { ElementRef, RendererFactory2, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from './models';
export interface PositioningOptions {
    /** The DOM element, ElementRef, or a selector string of an element which will be moved */
    element?: HTMLElement | ElementRef | string;
    /** The DOM element, ElementRef, or a selector string of an element which the element will be attached to  */
    target?: HTMLElement | ElementRef | string;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     */
    attachment?: string;
    /** A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     */
    targetAttachment?: string;
    /** A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     */
    offset?: string;
    /** A string similar to `offset`, but referring to the offset of the target */
    targetOffset?: string;
    /** If true component will be attached to body */
    appendToBody?: boolean;
}
export declare class PositioningService {
    private options;
    private update$$;
    private positionElements;
    private triggerEvent$;
    private isDisabled;
    constructor(ngZone: NgZone, rendererFactory: RendererFactory2, platformId: number);
    position(options: PositioningOptions): void;
    readonly event$: Observable<number | Event>;
    disable(): void;
    enable(): void;
    addPositionElement(options: PositioningOptions): void;
    calcPosition(): void;
    deletePositionElement(elRef: ElementRef): void;
    setOptions(options: Options): void;
}
