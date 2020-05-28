import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export declare class PopoverDirective implements OnInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _positionService;
    /** sets disable adaptive position */
    adaptivePosition: boolean;
    /**
     * Content to be displayed as popover.
     */
    popover: string | TemplateRef<any>;
    /**
     * Context to be used if popover is a template.
     */
    popoverContext: any;
    /**
     * Title of a popover.
     */
    popoverTitle: string;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     */
    placement: 'top' | 'bottom' | 'left' | 'right' | 'auto' | 'top left' | 'top right' | 'right top' | 'right bottom' | 'bottom right' | 'bottom left' | 'left bottom' | 'left top';
    /**
     * Close popover on outside click
     */
    outsideClick: boolean;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    triggers: string;
    /**
     * A selector specifying the element the popover should be appended to.
     */
    container: string;
    /**
     * Css class for popover container
     */
    containerClass: string;
    /**
     * Returns whether or not the popover is currently being shown
     */
    isOpen: boolean;
    /**
     * Delay before showing the tooltip
     */
    delay: number;
    /**
     * Emits an event when the popover is shown
     */
    onShown: EventEmitter<any>;
    /**
     * Emits an event when the popover is hidden
     */
    onHidden: EventEmitter<any>;
    protected _popoverCancelShowFn: Function;
    protected _delayTimeoutId: number | any;
    private _popover;
    private _isInited;
    constructor(_config: PopoverConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory, _positionService: PositioningService);
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show(): void;
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide(): void;
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
