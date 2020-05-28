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
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
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
    PerfectScrollbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            var config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new ResizeObserver(function () {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    var eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                    fromEvent(_this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        _this[eventName].emit(event);
                    });
                });
            });
        }
    };
    PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            });
            this.instance = null;
        }
    };
    PerfectScrollbarDirective.prototype.ngDoCheck = function () {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    PerfectScrollbarDirective.prototype.ngOnChanges = function (changes) {
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
    };
    PerfectScrollbarDirective.prototype.ps = function () {
        return this.instance;
    };
    PerfectScrollbarDirective.prototype.update = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular(function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    };
    PerfectScrollbarDirective.prototype.geometry = function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    PerfectScrollbarDirective.prototype.position = function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    PerfectScrollbarDirective.prototype.scrollable = function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var element = this.elementRef.nativeElement;
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
    };
    PerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
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
    };
    PerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToElement = function (qs, offset, speed) {
        var element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var elementPos = element.getBoundingClientRect();
            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var currentPos = this.elementRef.nativeElement['scrollTop'];
                var position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    PerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.elementRef.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
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
    return PerfectScrollbarDirective;
}());
export { PerfectScrollbarDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyLyIsInNvdXJjZXMiOlsibGliL3BlcmZlY3Qtc2Nyb2xsYmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxnQkFBZ0IsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ3RELE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDbEUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQ2hDLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNeEY7SUE2QkUsbUNBQW9CLElBQVksRUFBVSxPQUF3QixFQUN6RCxVQUFzQixFQUErQixVQUFrQixFQUN4QixRQUF5QztRQUY3RSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDekQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWlDO1FBOUJ6RixhQUFRLEdBQTRCLElBQUksQ0FBQztRQUV6QyxPQUFFLEdBQTBCLElBQUksQ0FBQztRQUVqQyxZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixjQUFTLEdBQWtCLElBQUksQ0FBQztRQUVoQyxlQUFVLEdBQXVDLElBQUksQ0FBQztRQUU3QyxjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFakQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUl6QixjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0QsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSStCLENBQUM7SUFFckcsNENBQVEsR0FBUjtRQUFBLGlCQTJDQztRQTFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEQsSUFBTSxRQUFNLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFekQsUUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFFbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQU0sQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN6QztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxjQUFjLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1RDtnQkFFRCxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUIsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBZ0M7b0JBQzlELElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsTUFBSSxDQUFDLENBQUMsV0FBVyxFQUFJLEVBQXJCLENBQXFCLENBQUMsQ0FBQztvQkFFOUUsU0FBUyxDQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzt5QkFDdkQsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUMxQjt5QkFDQSxTQUFTLENBQUMsVUFBQyxLQUFZO3dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFMUIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEI7WUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFCLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDekI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELDZDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMzRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXhELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRTtnQkFDMUUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtvQkFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO29CQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTSxzQ0FBRSxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQ0FBTSxHQUFiO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3JDLElBQUk7d0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDMUIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dDQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzZCQUN4Qjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDZCx1REFBdUQ7cUJBQ3hEO2lCQUNGO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRU0sNENBQVEsR0FBZixVQUFnQixNQUF5QjtRQUF6Qix1QkFBQSxFQUFBLGlCQUF5QjtRQUN2QyxPQUFPLElBQUksUUFBUSxDQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0lBRU0sNENBQVEsR0FBZixVQUFnQixRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLFFBQVEsQ0FDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDM0IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksUUFBUSxDQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVNLDhDQUFVLEdBQWpCLFVBQWtCLFNBQXlCO1FBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO1FBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRTlDLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtZQUN2QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFTSw0Q0FBUSxHQUFmLFVBQWdCLENBQVMsRUFBRSxDQUFVLEVBQUUsS0FBYztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMvQztnQkFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTSw2Q0FBUyxHQUFoQixVQUFpQixDQUFTLEVBQUUsS0FBYztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sNkNBQVMsR0FBaEIsVUFBaUIsQ0FBUyxFQUFFLEtBQWM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLCtDQUFXLEdBQWxCLFVBQW1CLE1BQWUsRUFBRSxLQUFjO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLGdEQUFZLEdBQW5CLFVBQW9CLE1BQWUsRUFBRSxLQUFjO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLGlEQUFhLEdBQXBCLFVBQXFCLE1BQWUsRUFBRSxLQUFjO1FBQ2xELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRTVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSxrREFBYyxHQUFyQixVQUFzQixNQUFlLEVBQUUsS0FBYztRQUNuRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sbURBQWUsR0FBdEIsVUFBdUIsRUFBVSxFQUFFLE1BQWUsRUFBRSxLQUFjO1FBQ2hFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRSxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBRW5ELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFMUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNwRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFL0QsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFFakUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEU7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3BFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUU5RCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO2dCQUUvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFFBQVEsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRTtTQUNGO0lBQ0gsQ0FBQztJQUVPLG9EQUFnQixHQUF4QixVQUF5QixNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQWM7UUFBdEUsaUJBMENDO1FBekNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxVQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksYUFBVyxHQUFHLENBQUMsQ0FBQztZQUVwQixJQUFJLGNBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckMsSUFBSSxVQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBTSxjQUFZLEdBQUcsQ0FBQyxVQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLElBQU0sTUFBSSxHQUFHLFVBQUMsWUFBb0I7Z0JBQ2hDLGFBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsWUFBWSxHQUFHLGNBQVksQ0FBQyxDQUFDLENBQUM7Z0JBRWpFLFVBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxjQUFZLEdBQUcsY0FBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBVyxDQUFDLENBQUMsQ0FBQztnQkFFbkYsNkRBQTZEO2dCQUM3RCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVEsRUFBRTtvQkFDdEQsSUFBSSxhQUFXLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTt3QkFDMUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3pDO3lCQUFNO3dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQVEsQ0FBQzt3QkFFakQsdURBQXVEO3dCQUN2RCxVQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRWpELGNBQVksR0FBRyxZQUFZLENBQUM7d0JBRTVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQUksQ0FBQyxDQUFDO3FCQUNyRDtpQkFDRjtZQUNILENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQWpSeUIsTUFBTTtnQkFBbUIsZUFBZTtnQkFDN0MsVUFBVTtnQkFBMkMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0RBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsd0JBQXdCOztJQW5CckM7UUFBUixLQUFLLEVBQUU7K0RBQTJCO0lBRVI7UUFBMUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzZEQUEwQztJQUUxRDtRQUFULE1BQU0sRUFBRTtnRUFBd0Q7SUFDdkQ7UUFBVCxNQUFNLEVBQUU7Z0VBQXdEO0lBRXZEO1FBQVQsTUFBTSxFQUFFO2lFQUF5RDtJQUN4RDtRQUFULE1BQU0sRUFBRTttRUFBMkQ7SUFDMUQ7UUFBVCxNQUFNLEVBQUU7bUVBQTJEO0lBQzFEO1FBQVQsTUFBTSxFQUFFO29FQUE0RDtJQUUzRDtRQUFULE1BQU0sRUFBRTtrRUFBMEQ7SUFDekQ7UUFBVCxNQUFNLEVBQUU7b0VBQTREO0lBQzNEO1FBQVQsTUFBTSxFQUFFO2tFQUEwRDtJQUN6RDtRQUFULE1BQU0sRUFBRTtvRUFBNEQ7SUEzQjFELHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQStCa0MsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDbEQsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUE7T0EvQnBDLHlCQUF5QixDQStTckM7SUFBRCxnQ0FBQztDQUFBLEFBL1NELElBK1NDO1NBL1NZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJztcblxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvbmUsIEluamVjdCwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSxcbiAgT25Jbml0LCBEb0NoZWNrLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb3NpdGlvbiB9IGZyb20gJy4vcGVyZmVjdC1zY3JvbGxiYXIuaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IFBFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRywgUGVyZmVjdFNjcm9sbGJhckNvbmZpZywgUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSxcbiAgUGVyZmVjdFNjcm9sbGJhckV2ZW50LCBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BlcmZlY3RTY3JvbGxiYXJdJyxcbiAgZXhwb3J0QXM6ICduZ3hQZXJmZWN0U2Nyb2xsYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgaW5zdGFuY2U6IFBlcmZlY3RTY3JvbGxiYXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJvOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvbmZpZ0RpZmY6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdEZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgncGVyZmVjdFNjcm9sbGJhcicpIGNvbmZpZz86IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2U7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsWTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsWDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxVcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsTGVmdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsUmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzWVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNZUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHKSBwcml2YXRlIGRlZmF1bHRzOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBuZXcgUGVyZmVjdFNjcm9sbGJhckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblxuICAgICAgY29uZmlnLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnRGlmZikge1xuICAgICAgICB0aGlzLmNvbmZpZ0RpZmYgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZyB8fCB7fSkuY3JlYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jb25maWdEaWZmLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICB0aGlzLnJvLm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogUGVyZmVjdFNjcm9sbGJhckV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnROYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgKGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgICBmcm9tRXZlbnQ8RXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudFR5cGUpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXNbZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm5nRGVzdHJveS5uZXh0KCk7XG4gICAgICB0aGlzLm5nRGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5ybykge1xuICAgICAgICB0aGlzLnJvLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuY29uZmlnRGlmZiAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5jb25maWdEaWZmLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuXG4gICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXSAmJiAhY2hhbmdlc1snZGlzYWJsZWQnXS5pc0ZpcnN0Q2hhbmdlKCkgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydkaXNhYmxlZCddLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHBzKCk6IFBlcmZlY3RTY3JvbGxiYXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jb25maWdEaWZmKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYW4gYmUgZmluaXNoZWQgYWZ0ZXIgZGVzdHJveSBzbyBjYXRjaCBlcnJvcnNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZW9tZXRyeShwcmVmaXg6IHN0cmluZyA9ICdzY3JvbGwnKTogR2VvbWV0cnkge1xuICAgIHJldHVybiBuZXcgR2VvbWV0cnkoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnTGVmdCddLFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ1RvcCddLFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ1dpZHRoJ10sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnSGVpZ2h0J11cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBvc2l0aW9uKGFic29sdXRlOiBib29sZWFuID0gZmFsc2UpOiBQb3NpdGlvbiB7XG4gICAgaWYgKCFhYnNvbHV0ZSAmJiB0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKFxuICAgICAgICB0aGlzLmluc3RhbmNlLnJlYWNoLnggfHwgMCxcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5yZWFjaC55IHx8IDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsYWJsZShkaXJlY3Rpb246IHN0cmluZyA9ICdhbnknKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FueScpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykgfHxcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYm90aCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykgJiZcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUtJyArIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvKHg6IG51bWJlciwgeT86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh5ID09IG51bGwgJiYgc3BlZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHgsIHNwZWVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCB4LCBzcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB5LCBzcGVlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9YKHg6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCB4LCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9ZKHk6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1RvcChvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9MZWZ0KG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9SaWdodChvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoIC1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgbGVmdCAtIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0JvdHRvbShvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgdG9wIC0gKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvRWxlbWVudChxczogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IocXMpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRQb3MgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBzY3JvbGxlclBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbExlZnQnXTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGVsZW1lbnRQb3MubGVmdCAtIHNjcm9sbGVyUG9zLmxlZnQgKyBjdXJyZW50UG9zO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIHBvc2l0aW9uICsgKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbFRvcCddO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWxlbWVudFBvcy50b3AgLSBzY3JvbGxlclBvcy50b3AgKyBjdXJyZW50UG9zO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgcG9zaXRpb24gKyAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlU2Nyb2xsaW5nKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKTtcblxuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghc3BlZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdKSB7XG4gICAgICBsZXQgbmV3VmFsdWUgPSAwO1xuICAgICAgbGV0IHNjcm9sbENvdW50ID0gMDtcblxuICAgICAgbGV0IG9sZFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgbGV0IG9sZFZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XTtcblxuICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKG9sZFZhbHVlIC0gdmFsdWUpIC8gMjtcblxuICAgICAgY29uc3Qgc3RlcCA9IChuZXdUaW1lc3RhbXA6IG51bWJlcikgPT4ge1xuICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNwZWVkIC8gKG5ld1RpbWVzdGFtcCAtIG9sZFRpbWVzdGFtcCkpO1xuXG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSArIGNvc1BhcmFtZXRlciArIGNvc1BhcmFtZXRlciAqIE1hdGguY29zKHNjcm9sbENvdW50KSk7XG5cbiAgICAgICAgLy8gT25seSBjb250aW51ZSBhbmltYXRpb24gaWYgc2Nyb2xsIHBvc2l0aW9uIGhhcyBub3QgY2hhbmdlZFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKHRhcmdldCwgdmFsdWUsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE9uIGEgem9vbWVkIG91dCBwYWdlIHRoZSByZXN1bHRpbmcgb2Zmc2V0IG1heSBkaWZmZXJcbiAgICAgICAgICAgIG9sZFZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XTtcblxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxufVxuIl19