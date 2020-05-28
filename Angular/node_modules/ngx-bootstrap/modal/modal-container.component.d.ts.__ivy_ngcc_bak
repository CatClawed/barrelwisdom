import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal-options.class';
import { BsModalService } from './bs-modal.service';
export declare class ModalContainerComponent implements OnInit, OnDestroy {
    protected _element: ElementRef;
    private _renderer;
    config: ModalOptions;
    isShown: boolean;
    level: number;
    isAnimated: boolean;
    bsModalService: BsModalService;
    private isModalHiding;
    private clickStartedInContent;
    constructor(options: ModalOptions, _element: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    onClickStarted(event: MouseEvent): void;
    onClickStop(event: MouseEvent): void;
    onEsc(event: KeyboardEvent): void;
    ngOnDestroy(): void;
    hide(): void;
}
