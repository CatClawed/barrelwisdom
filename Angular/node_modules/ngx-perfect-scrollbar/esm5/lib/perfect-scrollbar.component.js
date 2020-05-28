import { __decorate, __param } from "tslib";
import { Subject, merge, fromEvent } from 'rxjs';
import { mapTo, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Component, OnInit, OnDestroy, DoCheck, Input, Output, EventEmitter, HostBinding, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
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
    PerfectScrollbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.stateUpdate
                .pipe(takeUntil(this.ngDestroy), distinctUntilChanged(function (a, b) { return (a === b && !_this.stateTimeout); }))
                .subscribe(function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout(function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
                if (_this.directiveRef) {
                    var element = _this.directiveRef.elementRef.nativeElement;
                    fromEvent(element, 'wheel')
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var scrollDeltaX = event.deltaX;
                            var scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    fromEvent(element, 'touchmove')
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var scrollPositionX = event.touches[0].clientX;
                            var scrollPositionY = event.touches[0].clientY;
                            var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    });
                    merge(fromEvent(element, 'ps-scroll-x')
                        .pipe(mapTo('x')), fromEvent(element, 'ps-scroll-y')
                        .pipe(mapTo('y')), fromEvent(element, 'ps-x-reach-end')
                        .pipe(mapTo('right')), fromEvent(element, 'ps-y-reach-end')
                        .pipe(mapTo('bottom')), fromEvent(element, 'ps-x-reach-start')
                        .pipe(mapTo('left')), fromEvent(element, 'ps-y-reach-start')
                        .pipe(mapTo('top')))
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (state) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                });
            }, 0);
        }
    };
    PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    PerfectScrollbarComponent.prototype.ngDoCheck = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    PerfectScrollbarComponent.prototype.checkPropagation = function (event, deltaX, deltaY) {
        this.interaction = true;
        var scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var scrollDirectionY = (deltaY < 0) ? -1 : 1;
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
    };
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return PerfectScrollbarComponent;
}());
export { PerfectScrollbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyLyIsInNvdXJjZXMiOlsibGliL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQ2hDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDcEUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBeUIsc0JBQXNCLEVBQ25CLE1BQU0sZ0NBQWdDLENBQUM7QUFZMUU7SUFxREUsbUNBQW9CLElBQVksRUFBVSxLQUF3QixFQUNuQyxVQUFrQjtRQUQ3QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQXJEMUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFD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RUFBMEQ7SUFDekQ7UUFBVCxNQUFNLEVBQUU7b0VBQTREO0lBQzNEO1FBQVQsTUFBTSxFQUFFO2tFQUEwRDtJQUN6RDtRQUFULE1BQU0sRUFBRTtvRUFBNEQ7SUFFYjtRQUF2RCxTQUFTLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7bUVBQTBDO0lBbkR0Rix5QkFBeUI7UUFWckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLHl6QkFBaUQ7WUFLakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7UUF1REcsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0F0RFgseUJBQXlCLENBbVFyQztJQUFELGdDQUFDO0NBQUEsQUFuUUQsSUFtUUM7U0FuUVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8sIHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvbmUsIEluamVjdCwgQ29tcG9uZW50LFxuICBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhckRpcmVjdGl2ZSB9IGZyb20gJy4vcGVyZmVjdC1zY3JvbGxiYXIuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhckV2ZW50LCBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLFxuICBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGVyZmVjdC1zY3JvbGxiYXInLFxuICBleHBvcnRBczogJ25neFBlcmZlY3RTY3JvbGxiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuY3NzJyxcbiAgICAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGVyZmVjdFNjcm9sbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgcHVibGljIHN0YXRlczogYW55ID0ge307XG5cbiAgcHVibGljIGluZGljYXRvclg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGluZGljYXRvclk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgaW50ZXJhY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblk6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBzY3JvbGxEaXJlY3Rpb25YOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNjcm9sbERpcmVjdGlvblk6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSB1c2VQcm9wYWdhdGlvblg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB1c2VQcm9wYWdhdGlvblk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGFsbG93UHJvcGFnYXRpb25YOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYWxsb3dQcm9wYWdhdGlvblk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHN0YXRlVGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBuZ0Rlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhdGVVcGRhdGU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB1c2VQU0NsYXNzOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBzLXNob3ctbGltaXRzJylcbiAgQElucHV0KCkgYXV0b1Byb3BhZ2F0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcy1zaG93LWFjdGl2ZScpXG4gIEBJbnB1dCgpIHNjcm9sbEluZGljYXRvcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjb25maWc/OiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlO1xuXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbFg6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsVXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbERvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbExlZnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1Njcm9sbFJpZ2h0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBwc1lSZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWVJlYWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1hSZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZChQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBkaXJlY3RpdmVSZWY/OiBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zdGF0ZVVwZGF0ZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5uZ0Rlc3Ryb3kpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiAoYSA9PT0gYiAmJiAhdGhpcy5zdGF0ZVRpbWVvdXQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZVRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zdGF0ZVRpbWVvdXQpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAneCcgfHwgc3RhdGUgPT09ICd5Jykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICd4Jykge1xuICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclggPSBmYWxzZTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25YKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAneScpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JZID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMudG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmJvdHRvbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dQcm9wYWdhdGlvblkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH3CoGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnbGVmdCcgfHwgc3RhdGUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzW3N0YXRlXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25YKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JYID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ3RvcCcgfHwgc3RhdGUgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnRvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5ib3R0b20gPSBmYWxzZTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YXRlc1tzdGF0ZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb24gJiYgKHRoaXMuc3RhdGVzLmxlZnQgfHwgdGhpcy5zdGF0ZXMucmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbG93UHJvcGFnYXRpb25YID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbiAmJiAodGhpcy5zdGF0ZXMudG9wIHx8IHRoaXMuc3RhdGVzLmJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dQcm9wYWdhdGlvblkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRpcmVjdGl2ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBmcm9tRXZlbnQ8V2hlZWxFdmVudD4oZWxlbWVudCwgJ3doZWVsJylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5uZ0Rlc3Ryb3kpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5hdXRvUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxEZWx0YVggPSBldmVudC5kZWx0YVg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGFZID0gZXZlbnQuZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Byb3BhZ2F0aW9uKGV2ZW50LCBzY3JvbGxEZWx0YVgsIHNjcm9sbERlbHRhWSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KGVsZW1lbnQsICd0b3VjaG1vdmUnKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmF1dG9Qcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvblkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxEZWx0YVggPSBzY3JvbGxQb3NpdGlvblggLSB0aGlzLnNjcm9sbFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxEZWx0YVkgPSBzY3JvbGxQb3NpdGlvblkgLSB0aGlzLnNjcm9sbFBvc2l0aW9uWTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9wYWdhdGlvbihldmVudCwgc2Nyb2xsRGVsdGFYLCBzY3JvbGxEZWx0YVkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvblggPSBzY3JvbGxQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvblkgPSBzY3JvbGxQb3NpdGlvblk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy1zY3JvbGwteCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ3gnKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMtc2Nyb2xsLXknKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCd5JykpLFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXgtcmVhY2gtZW5kJylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygncmlnaHQnKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMteS1yZWFjaC1lbmQnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCdib3R0b20nKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMteC1yZWFjaC1zdGFydCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ2xlZnQnKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMteS1yZWFjaC1zdGFydCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ3RvcCcpKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5uZ0Rlc3Ryb3kpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzdGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAodGhpcy5hdXRvUHJvcGFnYXRpb24gfHwgdGhpcy5zY3JvbGxJbmRpY2F0b3JzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVVcGRhdGUubmV4dChzdGF0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogUGVyZmVjdFNjcm9sbGJhckV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlUmVmKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZVJlZltldmVudE5hbWVdID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5uZ0Rlc3Ryb3kubmV4dCgpO1xuICAgICAgdGhpcy5uZ0Rlc3Ryb3kudW5zdWJzY3JpYmUoKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGVUaW1lb3V0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zdGF0ZVRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMuZGlyZWN0aXZlUmVmKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRpcmVjdGl2ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy51c2VQcm9wYWdhdGlvblggPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14Jyk7XG5cbiAgICAgICAgdGhpcy51c2VQcm9wYWdhdGlvblkgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS15Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1Byb3BhZ2F0aW9uKGV2ZW50OiBhbnksIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcik6IHZvaWTCoHtcbiAgICB0aGlzLmludGVyYWN0aW9uID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNjcm9sbERpcmVjdGlvblggPSAoZGVsdGFYIDwgMCkgPyAtMSA6IDE7XG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uWSA9IChkZWx0YVkgPCAwKSA/IC0xIDogMTtcblxuICAgIGlmICgodGhpcy51c2VQcm9wYWdhdGlvblggJiYgdGhpcy51c2VQcm9wYWdhdGlvblkpIHx8XG4gICAgICAgICh0aGlzLnVzZVByb3BhZ2F0aW9uWCAmJiAoIXRoaXMuYWxsb3dQcm9wYWdhdGlvblggfHxcbiAgICAgICAgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uWCAhPT0gc2Nyb2xsRGlyZWN0aW9uWCkpKSB8fFxuICAgICAgICAodGhpcy51c2VQcm9wYWdhdGlvblkgJiYgKCF0aGlzLmFsbG93UHJvcGFnYXRpb25ZIHx8XG4gICAgICAgICh0aGlzLnNjcm9sbERpcmVjdGlvblkgIT09IHNjcm9sbERpcmVjdGlvblkpKSkpXG4gICAge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghIWRlbHRhWCkge1xuICAgICAgdGhpcy5zY3JvbGxEaXJlY3Rpb25YID0gc2Nyb2xsRGlyZWN0aW9uWDtcbiAgICB9XG5cbiAgICBpZiAoISFkZWx0YVkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlyZWN0aW9uWSA9IHNjcm9sbERpcmVjdGlvblk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZVVwZGF0ZS5uZXh0KCdpbnRlcmFjdGlvbicpO1xuXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==