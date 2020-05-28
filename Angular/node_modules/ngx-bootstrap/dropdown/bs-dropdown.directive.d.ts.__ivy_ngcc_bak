import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownState } from './bs-dropdown.state';
import { AnimationBuilder } from '@angular/animations';
export declare class BsDropdownDirective implements OnInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _viewContainerRef;
    private _cis;
    private _state;
    private _config;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     */
    placement: string;
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
     * This attribute indicates that the dropdown should be opened upwards
     */
    dropup: boolean;
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     */
    autoClose: boolean;
    /**
     * Indicates that dropdown will be animated
     */
    isAnimated: boolean;
    /**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     */
    insideClick: boolean;
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     */
    isDisabled: boolean;
    /**
     * Returns whether or not the popover is currently being shown
     */
    isOpen: boolean;
    /**
     * Emits an event when isOpen change
     */
    isOpenChange: EventEmitter<boolean>;
    /**
     * Emits an event when the popover is shown
     */
    onShown: EventEmitter<boolean>;
    /**
     * Emits an event when the popover is hidden
     */
    onHidden: EventEmitter<boolean>;
    readonly isBs4: boolean;
    private _dropdown;
    private readonly _showInline;
    private _isInlineOpen;
    private _inlinedMenu;
    private _isDisabled;
    private _subscriptions;
    private _isInited;
    private _factoryDropDownAnimation;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, _cis: ComponentLoaderFactory, _state: BsDropdownState, _config: BsDropdownConfig, _builder: AnimationBuilder);
    ngOnInit(): void;
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
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    toggle(value?: boolean): void;
    /** @internal */
    _contains(event: any): boolean;
    ngOnDestroy(): void;
    private addBs4Polyfills;
    private playAnimation;
    private addShowClass;
    private removeShowClass;
    private checkRightAlignment;
    private addDropupStyles;
    private removeDropupStyles;
}
