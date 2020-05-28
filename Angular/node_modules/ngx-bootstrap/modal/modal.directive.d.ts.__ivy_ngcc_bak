import { ComponentRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalOptions } from './modal-options.class';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
/** Mark any code with directive to show it's content in modal */
export declare class ModalDirective implements OnDestroy, OnInit {
    private _element;
    private _renderer;
    /** allows to set modal configuration via element property */
    config: ModalOptions;
    /** This event fires immediately when the `show` instance method is called. */
    onShow: EventEmitter<ModalDirective>;
    /** This event is fired when the modal has been made visible to the user
     * (will wait for CSS transitions to complete)
     */
    onShown: EventEmitter<ModalDirective>;
    /** This event is fired immediately when
     * the hide instance method has been called.
     */
    onHide: EventEmitter<ModalDirective>;
    /** This event is fired when the modal has finished being
     * hidden from the user (will wait for CSS transitions to complete).
     */
    onHidden: EventEmitter<ModalDirective>;
    /** This field contains last dismiss reason.
     * Possible values: `backdrop-click`, `esc` and `null`
     * (if modal was closed by direct call of `.hide()`).
     */
    dismissReason: string;
    readonly isShown: boolean;
    protected _config: ModalOptions;
    protected _isShown: boolean;
    protected isBodyOverflowing: boolean;
    protected originalBodyPadding: number;
    protected scrollbarWidth: number;
    protected timerHideModal: number;
    protected timerRmBackDrop: number;
    protected backdrop: ComponentRef<ModalBackdropComponent>;
    private _backdrop;
    private isNested;
    private clickStartedInContent;
    constructor(_element: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer2, clf: ComponentLoaderFactory);
    onClickStarted(event: MouseEvent): void;
    onClickStop(event: MouseEvent): void;
    onEsc(event: KeyboardEvent): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    /** Allows to manually toggle modal visibility */
    toggle(): void;
    /** Allows to manually open modal */
    show(): void;
    /** Allows to manually close modal */
    hide(event?: Event): void;
    /** Private methods @internal */
    protected getConfig(config?: ModalOptions): ModalOptions;
    /**
     *  Show dialog
     *  @internal
     */
    protected showElement(): void;
    /** @internal */
    protected hideModal(): void;
    /** @internal */
    protected showBackdrop(callback?: Function): void;
    /** @internal */
    protected removeBackdrop(): void;
    /** Events tricks */
    protected focusOtherModal(): void;
    /** @internal */
    protected resetAdjustments(): void;
    /** Scroll bar tricks */
    /** @internal */
    protected checkScrollbar(): void;
    protected setScrollbar(): void;
    protected resetScrollbar(): void;
    protected getScrollbarWidth(): number;
}
