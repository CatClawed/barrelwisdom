import { __spread } from 'tslib';
import { Injectable, EventEmitter, Component, NgZone, Input, Output, HostBinding, NgModule } from '@angular/core';
import { LinkedList, isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
    CarouselConfig.decorators = [
        { type: Injectable }
    ];
    return CarouselConfig;
}());
if (false) {
    /** @type {?} */
    CarouselConfig.prototype.interval;
    /** @type {?} */
    CarouselConfig.prototype.noPause;
    /** @type {?} */
    CarouselConfig.prototype.noWrap;
    /** @type {?} */
    CarouselConfig.prototype.showIndicators;
    /** @type {?} */
    CarouselConfig.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselConfig.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselConfig.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselConfig.prototype.singleSlideOffset;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    var l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    var out = [];
    /** @type {?} */
    var n = Math.ceil((array.length) / size);
    /** @type {?} */
    var i = 0;
    while (i < n) {
        /** @type {?} */
        var chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new EventEmitter();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new LinkedList();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active; });
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        function (slides) {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            function (slide, index) { return slide.item.order = index; }));
        });
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.multilist) {
                return;
            }
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.singleSlideOffset) {
                _this.indicatorsByChunk = false;
            }
            if (_this.multilist) {
                _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                _this.selectInitialSlides();
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(nextSlideIndex_1);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }), 0);
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlideFromInterval = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.move(Direction.NEXT, force);
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getFirstVisibleIndex = /**
     * @return {?}
     */
    function () {
        return this.slides.findIndex(this.getActive);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getLastVisibleIndex = /**
     * @return {?}
     */
    function () {
        return findLastIndex(this.slides, this.getActive);
    };
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.move = /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    function (direction, force) {
        if (force === void 0) { force = false; }
        /** @type {?} */
        var firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        var lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    };
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keydownPress = /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    };
    /**
     * Play on mouse leave
     * @internal
     */
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseLeave = /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.pauseOnFocus) {
            this.play();
        }
    };
    /**
     * Play on mouse up
     * @internal
     */
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseUp = /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.pauseOnFocus) {
            this.play();
        }
    };
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusIn = /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    function () {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusOut = /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    function () {
        this.play();
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    function () {
        return this._slides.findIndex(this.getActive);
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isFirst = /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index === 0;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.indicatorsSlides = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        function (slide, index) { return !_this.indicatorsByChunk || index % _this.itemsPerSlide === 0; }));
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.selectInitialSlides = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = __spread(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.mapSlidesAndIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        function (slide, index) {
            return {
                index: index,
                item: slide
            };
        }));
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlideRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            var startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            var endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectRangeByNestedIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        function (slidesList, i) {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        function (slidesList) {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index === index; })) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) {
            slide.item.active = true;
        }));
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexOnTheEdges = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexInRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            var visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.hideSlides = /**
     * @private
     * @return {?}
     */
    function () {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active = false; }));
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListLast = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListFirst = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === 0;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveSliderByOneItem = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var firstVisibleIndex;
        /** @type {?} */
        var lastVisibleIndex;
        /** @type {?} */
        var indexToHide;
        /** @type {?} */
        var indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            var slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active; }));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            var displayedIndex = void 0;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = __spread([{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }], this._slidesWithIndexes);
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; })));
        }
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveMultilist = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getVisibleIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
        }
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            var currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        /** @type {?} */
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return setInterval((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlideFromInterval();
                        }
                        else {
                            _this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    };
    Object.defineProperty(CarouselComponent.prototype, "multilist", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsPerSlide > 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Stops loop of auto changing of slides
     */
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: NgZone }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: Input }],
        noPause: [{ type: Input }],
        showIndicators: [{ type: Input }],
        pauseOnFocus: [{ type: Input }],
        indicatorsByChunk: [{ type: Input }],
        itemsPerSlide: [{ type: Input }],
        singleSlideOffset: [{ type: Input }],
        isAnimated: [{ type: Input }],
        activeSlideChange: [{ type: Output }],
        slideRangeChange: [{ type: Output }],
        activeSlide: [{ type: Input }],
        startFromIndex: [{ type: Input }],
        interval: [{ type: Input }]
    };
    return CarouselComponent;
}());
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.noWrap;
    /** @type {?} */
    CarouselComponent.prototype.noPause;
    /** @type {?} */
    CarouselComponent.prototype.showIndicators;
    /** @type {?} */
    CarouselComponent.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselComponent.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselComponent.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselComponent.prototype.singleSlideOffset;
    /**
     * Turn on/off animation. Animation doesn't work for multilist carousel
     * @type {?}
     */
    CarouselComponent.prototype.isAnimated;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     * @type {?}
     */
    CarouselComponent.prototype.activeSlideChange;
    /**
     * Will be emitted when active slides has been changed in multilist mode
     * @type {?}
     */
    CarouselComponent.prototype.slideRangeChange;
    /** @type {?} */
    CarouselComponent.prototype.startFromIndex;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.currentInterval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentActiveSlide;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slides;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._chunkedSlides;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slidesWithIndexes;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentVisibleSlidesIndex;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.isPlaying;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.destroyed;
    /** @type {?} */
    CarouselComponent.prototype.getActive;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.makeSlidesConsistent;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
        this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    },
                    styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        itemWidth: [{ type: HostBinding, args: ['style.width',] }],
        order: [{ type: HostBinding, args: ['style.order',] }],
        isAnimated: [{ type: HostBinding, args: ['class.carousel-animation',] }],
        addClass: [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.itemWidth;
    /** @type {?} */
    SlideComponent.prototype.order;
    /** @type {?} */
    SlideComponent.prototype.isAnimated;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     * @protected
     */
    SlideComponent.prototype.carousel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent],
                    providers: [CarouselConfig]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CarouselComponent, CarouselConfig, CarouselModule, SlideComponent };
//# sourceMappingURL=ngx-bootstrap-carousel.js.map
