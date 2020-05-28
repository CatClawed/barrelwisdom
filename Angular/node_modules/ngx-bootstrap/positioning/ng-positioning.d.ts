/**
 * @copyright Valor Software
 * @copyright Federico Zivolo and contributors
 */
import { Renderer2 } from '@angular/core';
import { Data, Offsets, Options } from './models';
export declare class Positioning {
    position(hostElement: HTMLElement, targetElement: HTMLElement, round?: boolean): Offsets;
    offset(hostElement: HTMLElement, targetElement: HTMLElement, round?: boolean): Offsets;
    positionElements(hostElement: HTMLElement, targetElement: HTMLElement, position: string, appendToBody?: boolean, options?: Options): Data;
}
export declare function positionElements(hostElement: HTMLElement, targetElement: HTMLElement, placement: string, appendToBody?: boolean, options?: Options, renderer?: Renderer2): void;
