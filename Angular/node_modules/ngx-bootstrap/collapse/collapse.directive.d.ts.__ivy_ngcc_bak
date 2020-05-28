import { AnimationBuilder } from '@angular/animations';
import { AfterViewChecked, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class CollapseDirective implements AfterViewChecked {
    private _el;
    private _renderer;
    /** This event fires as soon as content collapses */
    collapsed: EventEmitter<CollapseDirective>;
    /** This event fires when collapsing is started */
    collapses: EventEmitter<CollapseDirective>;
    /** This event fires as soon as content becomes visible */
    expanded: EventEmitter<CollapseDirective>;
    /** This event fires when expansion is started */
    expands: EventEmitter<CollapseDirective>;
    isExpanded: boolean;
    collapseNewValue: boolean;
    isCollapsed: boolean;
    isCollapse: boolean;
    isCollapsing: boolean;
    display: string;
    /** turn on/off animation */
    isAnimated: boolean;
    /** A flag indicating visibility of content (shown or hidden) */
    collapse: boolean;
    private _display;
    private _factoryCollapseAnimation;
    private _factoryExpandAnimation;
    private _isAnimationDone;
    private _player;
    private _stylesLoaded;
    private _COLLAPSE_ACTION_NAME;
    private _EXPAND_ACTION_NAME;
    constructor(_el: ElementRef, _renderer: Renderer2, _builder: AnimationBuilder);
    ngAfterViewChecked(): void;
    /** allows to manually toggle content visibility */
    toggle(): void;
    /** allows to manually hide content */
    hide(): void;
    /** allows to manually show collapsed content */
    show(): void;
    animationRun(isAnimated: boolean, action: string): (callback: () => void) => void;
}
