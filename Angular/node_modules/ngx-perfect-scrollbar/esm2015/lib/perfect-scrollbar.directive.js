import { __decorate, __param } from "tslib";
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';
import { Subject, fromEvent } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Optional, ElementRef, Directive, OnInit, DoCheck, OnChanges, OnDestroy, Input, Output, EventEmitter, SimpleChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { Geometry, Position } from './perfect-scrollbar.interfaces';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
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
export { PerfectScrollbarDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyLyIsInNvdXJjZXMiOlsibGliL3BlcmZlY3Qtc2Nyb2xsYmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxnQkFBZ0IsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ3RELE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDbEUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQ2hDLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNeEYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUE2QnBDLFlBQW9CLElBQVksRUFBVSxPQUF3QixFQUN6RCxVQUFzQixFQUErQixVQUFrQixFQUN4QixRQUF5QztRQUY3RSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDekQsZUFBVSxHQUFW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O0lBQVQsTUFBTSxFQUFFOzhEQUEwRDtBQUN6RDtJQUFULE1BQU0sRUFBRTtnRUFBNEQ7QUFDM0Q7SUFBVCxNQUFNLEVBQUU7OERBQTBEO0FBQ3pEO0lBQVQsTUFBTSxFQUFFO2dFQUE0RDtBQTNCMUQseUJBQXlCO0lBSnJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDO0lBK0JrQyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsRCxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtHQS9CcEMseUJBQXlCLENBK1NyQztTQS9TWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab25lLCBJbmplY3QsIE9wdGlvbmFsLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsXG4gIE9uSW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgU2ltcGxlQ2hhbmdlcywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9zaXRpb24gfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcsIFBlcmZlY3RTY3JvbGxiYXJDb25maWcsIFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UsXG4gIFBlcmZlY3RTY3JvbGxiYXJFdmVudCwgUGVyZmVjdFNjcm9sbGJhckV2ZW50cyB9IGZyb20gJy4vcGVyZmVjdC1zY3JvbGxiYXIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twZXJmZWN0U2Nyb2xsYmFyXScsXG4gIGV4cG9ydEFzOiAnbmd4UGVyZmVjdFNjcm9sbGJhcidcbn0pXG5leHBvcnQgY2xhc3MgUGVyZmVjdFNjcm9sbGJhckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGluc3RhbmNlOiBQZXJmZWN0U2Nyb2xsYmFyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBybzogUmVzaXplT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGFuaW1hdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBjb25maWdEaWZmOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT4gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlYWRvbmx5IG5nRGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ3BlcmZlY3RTY3JvbGxiYXInKSBjb25maWc/OiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlO1xuXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbFg6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsVXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbERvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbExlZnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbFJpZ2h0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBwc1lSZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWVJlYWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1hSZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFBFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRykgcHJpdmF0ZSBkZWZhdWx0czogUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgY29uc3QgY29uZmlnID0gbmV3IFBlcmZlY3RTY3JvbGxiYXJDb25maWcodGhpcy5kZWZhdWx0cyk7XG5cbiAgICAgIGNvbmZpZy5hc3NpZ24odGhpcy5jb25maWcpOyAvLyBDdXN0b20gY29uZmlndXJhdGlvblxuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLmNvbmZpZ0RpZmYpIHtcbiAgICAgICAgdGhpcy5jb25maWdEaWZmID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcgfHwge30pLmNyZWF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnRGlmZi5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5ybyA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm8ub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgUGVyZmVjdFNjcm9sbGJhckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFBlcmZlY3RTY3JvbGxiYXJFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50TmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIChjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xuXG4gICAgICAgICAgZnJvbUV2ZW50PEV2ZW50Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZXZlbnRUeXBlKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIGF1ZGl0VGltZSgyMCksXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzW2V2ZW50TmFtZV0uZW1pdChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5uZ0Rlc3Ryb3kubmV4dCgpO1xuICAgICAgdGhpcy5uZ0Rlc3Ryb3kuY29tcGxldGUoKTtcblxuICAgICAgaWYgKHRoaXMucm8pIHtcbiAgICAgICAgdGhpcy5yby5kaXNjb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNvbmZpZ0RpZmYgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuY29uZmlnRGlmZi5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcblxuICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10gJiYgIWNoYW5nZXNbJ2Rpc2FibGVkJ10uaXNGaXJzdENoYW5nZSgpICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlc1snZGlzYWJsZWQnXS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcygpOiBQZXJmZWN0U2Nyb2xsYmFyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuY29uZmlnRGlmZikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FuIGJlIGZpbmlzaGVkIGFmdGVyIGRlc3Ryb3kgc28gY2F0Y2ggZXJyb3JzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2VvbWV0cnkocHJlZml4OiBzdHJpbmcgPSAnc2Nyb2xsJyk6IEdlb21ldHJ5IHtcbiAgICByZXR1cm4gbmV3IEdlb21ldHJ5KFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ0xlZnQnXSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3ByZWZpeCArICdUb3AnXSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3ByZWZpeCArICdXaWR0aCddLFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ0hlaWdodCddXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBwb3NpdGlvbihhYnNvbHV0ZTogYm9vbGVhbiA9IGZhbHNlKTogUG9zaXRpb24ge1xuICAgIGlmICghYWJzb2x1dGUgJiYgdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5yZWFjaC54IHx8IDAsXG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVhY2gueSB8fCAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjcm9sbGFibGUoZGlyZWN0aW9uOiBzdHJpbmcgPSAnYW55Jyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhbnknKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteCcpIHx8XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JvdGgnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteCcpICYmXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLScgKyBkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUbyh4OiBudW1iZXIsIHk/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoeSA9PSBudWxsICYmIHNwZWVkID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB4LCBzcGVlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgeCwgc3BlZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgeSwgc3BlZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvWCh4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgeCwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvWSh5OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB5LCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9Ub3Aob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvTGVmdChvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvUmlnaHQob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAtXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIGxlZnQgLSAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9Cb3R0b20ob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCAtXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHRvcCAtIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0VsZW1lbnQocXM6IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHFzKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBlbGVtZW50UG9zID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgY29uc3Qgc2Nyb2xsZXJQb3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50WydzY3JvbGxMZWZ0J107XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlbGVtZW50UG9zLmxlZnQgLSBzY3JvbGxlclBvcy5sZWZ0ICsgY3VycmVudFBvcztcblxuICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCBwb3NpdGlvbiArIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS15JykpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50WydzY3JvbGxUb3AnXTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGVsZW1lbnRQb3MudG9wIC0gc2Nyb2xsZXJQb3MudG9wICsgY3VycmVudFBvcztcblxuICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHBvc2l0aW9uICsgKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZVNjcm9sbGluZyh0YXJnZXQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbik7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXNwZWVkIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSkge1xuICAgICAgbGV0IG5ld1ZhbHVlID0gMDtcbiAgICAgIGxldCBzY3JvbGxDb3VudCA9IDA7XG5cbiAgICAgIGxldCBvbGRUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF07XG5cbiAgICAgIGNvbnN0IGNvc1BhcmFtZXRlciA9IChvbGRWYWx1ZSAtIHZhbHVlKSAvIDI7XG5cbiAgICAgIGNvbnN0IHN0ZXAgPSAobmV3VGltZXN0YW1wOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzcGVlZCAvIChuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXApKTtcblxuICAgICAgICBuZXdWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xuXG4gICAgICAgIC8vIE9ubHkgY29udGludWUgYW5pbWF0aW9uIGlmIHNjcm9sbCBwb3NpdGlvbiBoYXMgbm90IGNoYW5nZWRcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0gPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNjcm9sbENvdW50ID49IE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZyh0YXJnZXQsIHZhbHVlLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAvLyBPbiBhIHpvb21lZCBvdXQgcGFnZSB0aGUgcmVzdWx0aW5nIG9mZnNldCBtYXkgZGlmZmVyXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF07XG5cbiAgICAgICAgICAgIG9sZFRpbWVzdGFtcCA9IG5ld1RpbWVzdGFtcDtcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==