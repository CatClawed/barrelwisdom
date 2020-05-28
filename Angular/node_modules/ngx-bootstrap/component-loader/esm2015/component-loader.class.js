/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggersV2, registerEscClick, registerOutsideClick } from 'ngx-bootstrap/utils';
import { ContentRef } from './content-ref.class';
/**
 * @template T
 */
export class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    // tslint:disable-next-line
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */
        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    /**
     * @return {?}
     */
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        /* tslint:disable-next-line: no-unnecessary-type-assertion */
        this._elementRef = ((/** @type {?} */ (opts.target))) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */
            const injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                const selectedElement = document.querySelector(this.container) ||
                    document.querySelector(this.containerDefaultSelector);
                selectedElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        const componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        /** @type {?} */
        const hide = (this._listenOpts.hide = (/**
         * @return {?}
         */
        () => listenOpts.hide ? listenOpts.hide() : void this.hide()));
        /** @type {?} */
        const show = (this._listenOpts.show = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        }));
        /** @type {?} */
        const toggle = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        });
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    /**
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    }
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    attachInline(vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    /**
     * @return {?}
     */
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._globalListener = registerOutsideClick(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: (/**
                     * @return {?}
                     */
                    () => this._listenOpts.hide())
                });
            }));
        }
        if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: (/**
                 * @return {?}
                 */
                () => this._listenOpts.hide())
            });
        }
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this.onShown.subscribe((/**
         * @return {?}
         */
        () => {
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        }));
        this._zoneSubscription = this._ngZone.onStable.subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._componentRef) {
                return;
            }
            this._posService.calcPosition();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    _getContentRef(
    /* tslint:disable-next-line: no-any*/
    content, 
    /* tslint:disable-next-line: no-any*/
    context, 
    /* tslint:disable-next-line: no-any*/
    initialState) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                const _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            const modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            /** @type {?} */
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
if (false) {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /** @type {?} */
    ComponentLoader.prototype._inlineViewRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._providers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactory;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._zoneSubscription;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._innerComponent;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._unregisterListenersFn;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._isHiding;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.container;
    /**
     * A selector used if container element was not found
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.containerDefaultSelector;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.triggers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._listenOpts;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._globalListener;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._posService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBS0wsVUFBVSxFQUVWLFlBQVksRUFDWixRQUFRLEVBSVIsV0FBVyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUlqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0lBNkQxQixZQUNVLGlCQUFtQyxFQUNuQyxTQUFvQixFQUNwQixXQUF1QixFQUN2QixTQUFtQixFQUNuQix5QkFBbUQsRUFDbkQsT0FBZSxFQUNmLGVBQStCLEVBQy9CLFdBQStCO1FBUC9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFwRXpDLGlCQUFZLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXRELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFaEQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNN0MsZUFBVSxHQUFxQixFQUFFLENBQUM7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SUFsWUMsdUNBQXNEOztJQUV0RCxrQ0FBZ0Q7O0lBRWhELHVDQUFxRDs7SUFDckQsbUNBQXFEOztJQUVyRCxtQ0FBWTs7SUFDWix3Q0FBK0I7O0lBQy9CLHlDQUFtQzs7Ozs7SUFFbkMscUNBQTBDOzs7OztJQUMxQyw0Q0FBK0M7Ozs7O0lBQy9DLDRDQUF3Qzs7Ozs7SUFDeEMsc0NBQWdDOzs7OztJQUNoQywwQ0FBeUM7Ozs7O0lBRXpDLGlEQUF5Qzs7Ozs7SUFVekMsb0NBQTBCOzs7Ozs7SUFLMUIscUNBQTJCOzs7Ozs7SUFNM0Isb0NBQTZDOzs7Ozs7SUFLN0MsbURBQTBDOzs7Ozs7O0lBTTFDLG1DQUF5Qjs7Ozs7SUFFekIsc0NBQXdDOzs7OztJQUN4QywwQ0FBNkM7Ozs7O0lBUzNDLDRDQUEyQzs7Ozs7SUFDM0Msb0NBQTRCOzs7OztJQUM1QixzQ0FBK0I7Ozs7O0lBQy9CLG9DQUEyQjs7Ozs7SUFDM0Isb0RBQTJEOzs7OztJQUMzRCxrQ0FBdUI7Ozs7O0lBQ3ZCLDBDQUF1Qzs7Ozs7SUFDdkMsc0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxuLy8gdG9kbzogYWRkIGRlbGF5IHN1cHBvcnRcbi8vIHRvZG86IG1lcmdlIGV2ZW50cyBvblNob3csIG9uU2hvd24sIGV0Yy4uLlxuLy8gdG9kbzogYWRkIGdsb2JhbCBwb3NpdGlvbmluZyBjb25maWd1cmF0aW9uP1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0b3IsXG4gIE5nWm9uZSxcbiAgUmVuZGVyZXIyLFxuICBTdGF0aWNQcm92aWRlcixcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7XG4gIGxpc3RlblRvVHJpZ2dlcnNWMixcbiAgcmVnaXN0ZXJFc2NDbGljayxcbiAgcmVnaXN0ZXJPdXRzaWRlQ2xpY2tcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbmltcG9ydCB7IENvbnRlbnRSZWYgfSBmcm9tICcuL2NvbnRlbnQtcmVmLmNsYXNzJztcbmltcG9ydCB7IExpc3Rlbk9wdGlvbnMgfSBmcm9tICcuL2xpc3Rlbi1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgb25CZWZvcmVTaG93OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgb25CZWZvcmVIaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpbnN0YW5jZTogVDtcbiAgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xuICBfaW5saW5lVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPFQ+O1xuXG4gIHByaXZhdGUgX3Byb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdO1xuICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFQ+O1xuICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWY7XG4gIHByaXZhdGUgX2lubmVyQ29tcG9uZW50OiBDb21wb25lbnRSZWY8VD47XG5cbiAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuOiBGdW5jdGlvbjtcblxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5faXNIaWRpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLl9jb21wb25lbnRSZWY7XG4gIH1cblxuICBwcml2YXRlIF9pc0hpZGluZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBjb21wb25lbnQuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIHByaXZhdGUgYXR0YWNobWVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciB1c2VkIGlmIGNvbnRhaW5lciBlbGVtZW50IHdhcyBub3QgZm91bmRcbiAgICovXG4gIHByaXZhdGUgY29udGFpbmVyRGVmYXVsdFNlbGVjdG9yID0gJ2JvZHknO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBwcml2YXRlIHRyaWdnZXJzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lciA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogRG8gbm90IHVzZSB0aGlzIGRpcmVjdGx5LCBpdCBzaG91bGQgYmUgaW5zdGFuY2VkIHZpYVxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBUeXBlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGJlaGF2aW91cjogdG8gdGFyZ2V0IGVsZW1lbnQsIGBib2R5YCwgY3VzdG9tIGVsZW1lbnRcbiAgdG8oY29udGFpbmVyPzogc3RyaW5nIHwgRWxlbWVudFJlZik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBvc2l0aW9uKG9wdHM/OiBQb3NpdGlvbmluZ09wdGlvbnMpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvbiAqL1xuICAgIHRoaXMuX2VsZW1lbnRSZWYgPSAob3B0cy50YXJnZXQgYXMgRWxlbWVudFJlZikgfHwgdGhpcy5fZWxlbWVudFJlZjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdmlkZShwcm92aWRlcjogU3RhdGljUHJvdmlkZXIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX3Byb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYXBwZW5kQ2hpbGQgdG8gZWxlbWVudCBvciBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKVxuXG4gIHNob3cob3B0czoge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGV4dD86IGFueTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgaW5pdGlhbFN0YXRlPzogYW55O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fVxuICApOiBDb21wb25lbnRSZWY8VD4ge1xuXG4gICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcbiAgICB0aGlzLl9pbm5lckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5vbkJlZm9yZVNob3cuZW1pdCgpO1xuICAgICAgdGhpcy5fY29udGVudFJlZiA9IHRoaXMuX2dldENvbnRlbnRSZWYob3B0cy5jb250ZW50LCBvcHRzLmNvbnRleHQsIG9wdHMuaW5pdGlhbFN0YXRlKTtcblxuICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycyxcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcblxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgLy8gdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICAgLy8gICAuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEZhY3RvcnksIDAsIGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLCBvcHRzKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250YWluZXIgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lckRlZmF1bHRTZWxlY3Rvcik7XG5cbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jb250YWluZXIgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gbWFudWFsbHkgaW52b2tlIGNoYW5nZSBkZXRlY3Rpb24gc2luY2UgZXZlbnRzIHJlZ2lzdGVyZWRcbiAgICAgIC8vIHZpYVxuICAgICAgLy8gUmVuZGVyZXI6Omxpc3RlbigpIGFyZSBub3QgcGlja2VkIHVwIGJ5IGNoYW5nZSBkZXRlY3Rpb24gd2l0aCB0aGVcbiAgICAgIC8vIE9uUHVzaCBzdHJhdGVneVxuICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3Rlck91dHNpZGVDbGljaygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcbiAgfVxuXG4gIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9zU2VydmljZS5kZWxldGVQb3NpdGlvbkVsZW1lbnQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uKTtcblxuICAgIHRoaXMub25CZWZvcmVIaWRlLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29tcG9uZW50RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb21wb25lbnRFbCk7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZShcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29udGVudFJlZiA9IG51bGw7XG4gICAgdGhpcy5fY29tcG9uZW50UmVmID0gbnVsbDtcbiAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcigpO1xuXG4gICAgdGhpcy5vbkhpZGRlbi5lbWl0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XG5cbiAgICBpZiAodGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKSB7XG4gICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcbiAgICB9XG4gIH1cblxuICBsaXN0ZW4obGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy50cmlnZ2VycyA9IGxpc3Rlbk9wdHMudHJpZ2dlcnMgfHwgdGhpcy50cmlnZ2VycztcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayA9IGxpc3Rlbk9wdHMub3V0c2lkZUNsaWNrO1xuICAgIHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYyA9IGxpc3Rlbk9wdHMub3V0c2lkZUVzYztcbiAgICBsaXN0ZW5PcHRzLnRhcmdldCA9IGxpc3Rlbk9wdHMudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGhpZGUgPSAodGhpcy5fbGlzdGVuT3B0cy5oaWRlID0gKCkgPT5cbiAgICAgIGxpc3Rlbk9wdHMuaGlkZSA/IGxpc3Rlbk9wdHMuaGlkZSgpIDogdm9pZCB0aGlzLmhpZGUoKSk7XG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgbGlzdGVuT3B0cy5zaG93ID8gbGlzdGVuT3B0cy5zaG93KHJlZ2lzdGVySGlkZSkgOiB0aGlzLnNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICAgIHJlZ2lzdGVySGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKHJlZ2lzdGVySGlkZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XG4gICAgICB0YXJnZXQ6IGxpc3Rlbk9wdHMudGFyZ2V0LFxuICAgICAgdHJpZ2dlcnM6IGxpc3Rlbk9wdHMudHJpZ2dlcnMsXG4gICAgICBzaG93LFxuICAgICAgaGlkZSxcbiAgICAgIHRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaElubGluZShcbiAgICB2UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxuICApOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX2lubGluZVZpZXdSZWYgPSB2UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWdpc3Rlck91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAhdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHdoeTogc2hvdWxkIHJ1biBhZnRlciBmaXJzdCBldmVudCBidWJibGVcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICAgIG91dHNpZGVDbGljazogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2ssXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgdGFyZ2V0czogW3RhcmdldCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XSxcbiAgICAgICAgb3V0c2lkZUVzYzogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjLFxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5uZXJDb21wb25lbnQoKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fem9uZVN1YnNjcmlwdGlvbiB8fCAhdGhpcy5hdHRhY2htZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vblNob3duLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9zU2VydmljZS5jYWxjUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29udGVudFJlZihcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGV4dD86IGFueSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgaW5pdGlhbFN0YXRlPzogYW55XG4gICk6IENvbnRlbnRSZWYge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtdKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBjb25zdCBfdmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICAgICAgICAuY3JlYXRlRW1iZWRkZWRWaWV3PFRlbXBsYXRlUmVmPFQ+Pihjb250ZW50LCBjb250ZXh0KTtcbiAgICAgICAgX3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtfdmlld1JlZi5yb290Tm9kZXNdLCBfdmlld1JlZik7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWV3UmVmID0gY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcoe30pO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFt2aWV3UmVmLnJvb3ROb2Rlc10sIHZpZXdSZWYpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY29udGVudENtcHRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb250ZW50XG4gICAgICApO1xuXG4gICAgICBjb25zdCBtb2RhbENvbnRlbnRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHByb3ZpZGVyczogdGhpcy5fcHJvdmlkZXJzLFxuICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gY29udGVudENtcHRGYWN0b3J5LmNyZWF0ZShtb2RhbENvbnRlbnRJbmplY3Rvcik7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgaW5pdGlhbFN0YXRlKTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFxuICAgICAgICBbW2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XV0sXG4gICAgICAgIGNvbXBvbmVudFJlZi5ob3N0VmlldyxcbiAgICAgICAgY29tcG9uZW50UmVmXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbW3RoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoYCR7Y29udGVudH1gKV1dKTtcbiAgfVxufVxuIl19