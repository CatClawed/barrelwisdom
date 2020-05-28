import { __decorate, __param } from 'tslib';
import { Subject, fromEvent, merge } from 'rxjs';
import { auditTime, takeUntil, distinctUntilChanged, mapTo } from 'rxjs/operators';
import { InjectionToken, EventEmitter, NgZone, KeyValueDiffers, ElementRef, Inject, PLATFORM_ID, Optional, Input, Output, Directive, ChangeDetectorRef, HostBinding, ViewChild, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';

const PERFECT_SCROLLBAR_CONFIG = new InjectionToken('PERFECT_SCROLLBAR_CONFIG');
class Geometry {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
class PerfectScrollbarConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}) {
        for (const key in config) {
            this[key] = config[key];
        }
    }
}

let PerfectScrollbarDirective = class PerfectScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject();
        this.disabled = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new PerfectScrollbar(this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new ResizeObserver(() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    fromEvent(this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && isPlatformBrowser(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};
PerfectScrollbarDirective.ctorParameters = () => [
    { type: NgZone },
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
];
__decorate([
    Input()
], PerfectScrollbarDirective.prototype, "disabled", void 0);
__decorate([
    Input('perfectScrollbar')
], PerfectScrollbarDirective.prototype, "config", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
PerfectScrollbarDirective = __decorate([
    Directive({
        selector: '[perfectScrollbar]',
        exportAs: 'ngxPerfectScrollbar'
    }),
    __param(3, Inject(PLATFORM_ID)),
    __param(4, Optional()), __param(4, Inject(PERFECT_SCROLLBAR_CONFIG))
], PerfectScrollbarDirective);

let PerfectScrollbarComponent = class PerfectScrollbarComponent {
    constructor(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new Subject();
        this.stateUpdate = new Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.stateUpdate
                .pipe(takeUntil(this.ngDestroy), distinctUntilChanged((a, b) => (a === b && !this.stateTimeout)))
                .subscribe((state) => {
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                    this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    this.interaction = false;
                    if (state === 'x') {
                        this.indicatorX = false;
                        this.states.left = false;
                        this.states.right = false;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        this.indicatorY = false;
                        this.states.top = false;
                        this.states.bottom = false;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        this.states.left = false;
                        this.states.right = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        this.states.top = false;
                        this.states.bottom = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.indicatorY = true;
                        }
                    }
                    if (this.autoPropagation && typeof window !== 'undefined') {
                        this.stateTimeout = window.setTimeout(() => {
                            this.indicatorX = false;
                            this.indicatorY = false;
                            this.stateTimeout = null;
                            if (this.interaction && (this.states.left || this.states.right)) {
                                this.allowPropagationX = true;
                            }
                            if (this.interaction && (this.states.top || this.states.bottom)) {
                                this.allowPropagationY = true;
                            }
                            this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                this.cdRef.markForCheck();
                this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(() => {
                if (this.directiveRef) {
                    const element = this.directiveRef.elementRef.nativeElement;
                    fromEvent(element, 'wheel')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollDeltaX = event.deltaX;
                            const scrollDeltaY = event.deltaY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    fromEvent(element, 'touchmove')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollPositionX = event.touches[0].clientX;
                            const scrollPositionY = event.touches[0].clientY;
                            const scrollDeltaX = scrollPositionX - this.scrollPositionX;
                            const scrollDeltaY = scrollPositionY - this.scrollPositionY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            this.scrollPositionX = scrollPositionX;
                            this.scrollPositionY = scrollPositionY;
                        }
                    });
                    merge(fromEvent(element, 'ps-scroll-x')
                        .pipe(mapTo('x')), fromEvent(element, 'ps-scroll-y')
                        .pipe(mapTo('y')), fromEvent(element, 'ps-x-reach-end')
                        .pipe(mapTo('right')), fromEvent(element, 'ps-y-reach-end')
                        .pipe(mapTo('bottom')), fromEvent(element, 'ps-x-reach-start')
                        .pipe(mapTo('left')), fromEvent(element, 'ps-y-reach-start')
                        .pipe(mapTo('top')))
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((state) => {
                        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
                            this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        this.directiveRef[eventName] = this[eventName];
                    }
                });
            }, 0);
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    }
    ngDoCheck() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                const element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    }
    checkPropagation(event, deltaX, deltaY) {
        this.interaction = true;
        const scrollDirectionX = (deltaX < 0) ? -1 : 1;
        const scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    }
};
PerfectScrollbarComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
__decorate([
    HostBinding('class.ps-show-limits'),
    Input()
], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
__decorate([
    HostBinding('class.ps-show-active'),
    Input()
], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "config", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
__decorate([
    ViewChild(PerfectScrollbarDirective, { static: true })
], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
PerfectScrollbarComponent = __decorate([
    Component({
        selector: 'perfect-scrollbar',
        exportAs: 'ngxPerfectScrollbar',
        template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
    }),
    __param(2, Inject(PLATFORM_ID))
], PerfectScrollbarComponent);

let PerfectScrollbarModule = class PerfectScrollbarModule {
};
PerfectScrollbarModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
        exports: [CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]
    })
], PerfectScrollbarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position };
//# sourceMappingURL=ngx-perfect-scrollbar.js.map
