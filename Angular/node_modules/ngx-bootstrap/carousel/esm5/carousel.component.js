/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { isBs3, LinkedList } from 'ngx-bootstrap/utils';
import { CarouselConfig } from './carousel.config';
import { findLastIndex, chunkByNumber } from './utils';
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
export { Direction };
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
                this._slidesWithIndexes = tslib_1.__spread(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
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
                this._slidesWithIndexes = tslib_1.__spread([{
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
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7O0lBSXJELFVBQU87SUFDUCxPQUFJO0lBQ0osT0FBSTs7Ozs7Ozs7O0FBTU47SUFvRkUsMkJBQVksTUFBc0IsRUFBVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7O1FBckVqRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7O1FBRTFCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDOzs7UUFHbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDOzs7O1FBRTFCLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFJNUIsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxDQUFTLEtBQUssQ0FBQyxDQUFDOzs7O1FBSTFFLHFCQUFnQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDOztRQW1CeEUsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUF3QlQsWUFBTyxHQUErQixJQUFJLFVBQVUsRUFBa0IsQ0FBQztRQUd2RSwrQkFBMEIsR0FBRyxDQUFDLENBQUM7UUFFL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQThINUIsY0FBUzs7OztRQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUFD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Q0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBcnNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGkzQ0FBd0M7aUJBQ3pDOzs7O2dCQWhCUSxjQUFjO2dCQUxXLE1BQU07Ozt5QkF3QnJDLEtBQUs7MEJBRUwsS0FBSztpQ0FFTCxLQUFLOytCQUVMLEtBQUs7b0NBR0wsS0FBSztnQ0FFTCxLQUFLO29DQUdMLEtBQUs7NkJBRUwsS0FBSztvQ0FHTCxNQUFNO21DQUlOLE1BQU07OEJBSU4sS0FBSztpQ0FlTCxLQUFLOzJCQU9MLEtBQUs7O0lBK29CUix3QkFBQztDQUFBLEFBdHNCRCxJQXNzQkM7U0Fsc0JZLGlCQUFpQjs7O0lBRTVCLG1DQUF5Qjs7SUFFekIsb0NBQTBCOztJQUUxQiwyQ0FBaUM7O0lBRWpDLHlDQUErQjs7SUFHL0IsOENBQW1DOztJQUVuQywwQ0FBMkI7O0lBRzNCLDhDQUFtQzs7Ozs7SUFFbkMsdUNBQTRCOzs7OztJQUc1Qiw4Q0FDMEU7Ozs7O0lBRzFFLDZDQUN3RTs7SUFrQnhFLDJDQUNtQjs7Ozs7SUFxQm5CLDRDQUErQjs7Ozs7SUFDL0IsZ0RBQXNDOzs7OztJQUN0QyxzQ0FBNEI7Ozs7O0lBQzVCLG9DQUFpRjs7Ozs7SUFDakYsMkNBQTZDOzs7OztJQUM3QywrQ0FBK0M7Ozs7O0lBQy9DLHVEQUF5Qzs7Ozs7SUFDekMsc0NBQTZCOzs7OztJQUM3QixzQ0FBNEI7O0lBOEg1QixzQ0FBb0Q7Ozs7O0lBNFlwRCxpREFFQzs7Ozs7SUF0Z0JtQyxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vKioqXG4gKiBwYXVzZSAobm90IHlldCBzdXBwb3J0ZWQpICg/c3RyaW5nPSdob3ZlcicpIC0gZXZlbnQgZ3JvdXAgbmFtZSB3aGljaCBwYXVzZXNcbiAqIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCwgaWYgaG92ZXIgcGF1c2VzIG9uIG1vdXNlZW50ZXIgYW5kIHJlc3VtZXMgb25cbiAqIG1vdXNlbGVhdmUga2V5Ym9hcmQgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP2Jvb2xlYW49dHJ1ZSkgLSBpZiBmYWxzZVxuICogY2Fyb3VzZWwgd2lsbCBub3QgcmVhY3QgdG8ga2V5Ym9hcmQgZXZlbnRzXG4gKiBub3RlOiBzd2lwaW5nIG5vdCB5ZXQgc3VwcG9ydGVkXG4gKi9cbi8qKioqXG4gKiBQcm9ibGVtczpcbiAqIDEpIGlmIHdlIHNldCBhbiBhY3RpdmUgc2xpZGUgdmlhIG1vZGVsIGNoYW5nZXMsIC5hY3RpdmUgY2xhc3MgcmVtYWlucyBvbiBhXG4gKiBjdXJyZW50IHNsaWRlLlxuICogMikgaWYgd2UgaGF2ZSBvbmx5IG9uZSBzbGlkZSwgd2Ugc2hvdWxkbid0IHNob3cgcHJldi9uZXh0IG5hdiBidXR0b25zXG4gKiAzKSBpZiBmaXJzdCBvciBsYXN0IHNsaWRlIGlzIGFjdGl2ZSBhbmQgbm9XcmFwIGlzIHRydWUsIHRoZXJlIHNob3VsZCBiZVxuICogXCJkaXNhYmxlZFwiIGNsYXNzIG9uIHRoZSBuYXYgYnV0dG9ucy5cbiAqIDQpIGRlZmF1bHQgaW50ZXJ2YWwgc2hvdWxkIGJlIGVxdWFsIDUwMDBcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXQsIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzLCBMaW5rZWRMaXN0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xuaW1wb3J0IHsgZmluZExhc3RJbmRleCwgY2h1bmtCeU51bWJlciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2xpZGVXaXRoSW5kZXgsIEluZGV4ZWRTbGlkZUxpc3QgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIFVOS05PV04sXG4gIE5FWFQsXG4gIFBSRVZcbn1cblxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwgd2lsbCBub3QgY3ljbGUgY29udGludW91c2x5IGFuZCB3aWxsIGhhdmUgaGFyZCBzdG9wcyAocHJldmVudCBsb29waW5nKSAqL1xuICBASW5wdXQoKSBub1dyYXA6IGJvb2xlYW47XG4gIC8qICBJZiBgdHJ1ZWAg4oCUIHdpbGwgZGlzYWJsZSBwYXVzaW5nIG9uIGNhcm91c2VsIG1vdXNlIGhvdmVyICovXG4gIEBJbnB1dCgpIG5vUGF1c2U6IGJvb2xlYW47XG4gIC8qICBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsLWluZGljYXRvcnMgYXJlIHZpc2libGUgICovXG4gIEBJbnB1dCgpIHNob3dJbmRpY2F0b3JzOiBib29sZWFuO1xuICAvKiAgSWYgYHRydWVgIC0gYXV0b3BsYXkgd2lsbCBiZSBzdG9wcGVkIG9uIGZvY3VzICovXG4gIEBJbnB1dCgpIHBhdXNlT25Gb2N1czogYm9vbGVhbjtcbiAgLyogSWYgYHRydWVgIC0gY2Fyb3VzZWwgaW5kaWNhdG9ycyBpbmRpY2F0ZSBzbGlkZXMgY2h1bmtzXG4gICAgIHdvcmtzIE9OTFkgaWYgc2luZ2xlU2xpZGVPZmZzZXQgPSBGQUxTRSAqL1xuICBASW5wdXQoKSBpbmRpY2F0b3JzQnlDaHVuayA9IGZhbHNlO1xuICAvKiBJZiB2YWx1ZSBtb3JlIHRoZW4gMSDigJQgY2Fyb3VzZWwgd29ya3MgaW4gbXVsdGlsaXN0IG1vZGUgKi9cbiAgQElucHV0KCkgaXRlbXNQZXJTbGlkZSA9IDE7XG4gIC8qIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwgc2hpZnRzIGJ5IG9uZSBlbGVtZW50LiBCeSBkZWZhdWx0IGNhcm91c2VsIHNoaWZ0cyBieSBudW1iZXJcbiAgICAgb2YgdmlzaWJsZSBlbGVtZW50cyAoaXRlbXNQZXJTbGlkZSBmaWVsZCkgKi9cbiAgQElucHV0KCkgc2luZ2xlU2xpZGVPZmZzZXQgPSBmYWxzZTtcbiAgLyoqIFR1cm4gb24vb2ZmIGFuaW1hdGlvbi4gQW5pbWF0aW9uIGRvZXNuJ3Qgd29yayBmb3IgbXVsdGlsaXN0IGNhcm91c2VsICovXG4gIEBJbnB1dCgpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcblxuICAvKiogV2lsbCBiZSBlbWl0dGVkIHdoZW4gYWN0aXZlIHNsaWRlIGhhcyBiZWVuIGNoYW5nZWQuIFBhcnQgb2YgdHdvLXdheS1iaW5kYWJsZSBbKGFjdGl2ZVNsaWRlKV0gcHJvcGVydHkgKi9cbiAgQE91dHB1dCgpXG4gIGFjdGl2ZVNsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPihmYWxzZSk7XG5cbiAgLyoqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIGFjdGl2ZSBzbGlkZXMgaGFzIGJlZW4gY2hhbmdlZCBpbiBtdWx0aWxpc3QgbW9kZSAqL1xuICBAT3V0cHV0KClcbiAgc2xpZGVSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cbiAgLyoqIEluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGUoc3RhcnRlZCBmb3IgMCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5tdWx0aWxpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggJiYgaW5kZXggIT09IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkge1xuICAgICAgdGhpcy5fc2VsZWN0KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xuICB9XG5cbiAgLyogSW5kZXggdG8gc3RhcnQgZGlzcGxheSBzbGlkZXMgZnJvbSBpdCAqL1xuICBASW5wdXQoKVxuICBzdGFydEZyb21JbmRleCA9IDA7XG5cbiAgLyoqXG4gICAqIERlbGF5IG9mIGl0ZW0gY3ljbGluZyBpbiBtaWxsaXNlY29uZHMuIElmIGZhbHNlLCBjYXJvdXNlbCB3b24ndCBjeWNsZVxuICAgKiBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICB9XG5cbiAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gIH1cblxuICBnZXQgc2xpZGVzKCk6IFNsaWRlQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXMudG9BcnJheSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQgY3VycmVudEludGVydmFsOiBhbnk7XG4gIHByb3RlY3RlZCBfY3VycmVudEFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfaW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9zbGlkZXM6IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+ID0gbmV3IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+KCk7XG4gIHByb3RlY3RlZCBfY2h1bmtlZFNsaWRlczogU2xpZGVXaXRoSW5kZXhbXVtdO1xuICBwcm90ZWN0ZWQgX3NsaWRlc1dpdGhJbmRleGVzOiBTbGlkZVdpdGhJbmRleFtdO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSAwO1xuICBwcm90ZWN0ZWQgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2Fyb3VzZWxDb25maWcsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgICB0aGlzLmluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tdWx0aWxpc3QpIHtcbiAgICAgICAgdGhpcy5fY2h1bmtlZFNsaWRlcyA9IGNodW5rQnlOdW1iZXIoXG4gICAgICAgICAgdGhpcy5tYXBTbGlkZXNBbmRJbmRleGVzKCksXG4gICAgICAgICAgdGhpcy5pdGVtc1BlclNsaWRlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5pdGlhbFNsaWRlcygpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlXG4gICAqIGFuZCBzdGFydHMgYXV0byBjaGFuZ2luZ1xuICAgKiBAcGFyYW0gc2xpZGVcbiAgICovXG4gIGFkZFNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NsaWRlcy5hZGQoc2xpZGUpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlsaXN0ICYmIHRoaXMuX3NsaWRlcy5sZW5ndGggPD0gdGhpcy5pdGVtc1BlclNsaWRlKSB7XG4gICAgICBzbGlkZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICBzbGlkZS5pc0FuaW1hdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubXVsdGlsaXN0ICYmIHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSAwO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlsaXN0ICYmIHRoaXMuX3NsaWRlcy5sZW5ndGggPiB0aGlzLml0ZW1zUGVyU2xpZGUpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHNwZWNpZmllZCBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBhY3RpdmUgLSB3aWxsIHJvbGwgdG8gYW5vdGhlclxuICAgKiBzbGlkZVxuICAgKiBAcGFyYW0gc2xpZGVcbiAgICovXG4gIHJlbW92ZVNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gcmVtSW5kZXgpIHtcbiAgICAgIC8vIHJlbW92aW5nIG9mIGFjdGl2ZSBzbGlkZVxuICAgICAgbGV0IG5leHRTbGlkZUluZGV4OiBudW1iZXIgPSB2b2lkIDA7XG4gICAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBzbGlkZSBsYXN0IC0gd2lsbCByb2xsIHRvIGZpcnN0IHNsaWRlLCBpZiBub1dyYXAgZmxhZyBpc1xuICAgICAgICAvLyBGQUxTRSBvciB0byBwcmV2aW91cywgaWYgbm9XcmFwIGlzIFRSVUUgaW4gY2FzZSwgaWYgdGhpcyBzbGlkZSBpblxuICAgICAgICAvLyBtaWRkbGUgb2YgY29sbGVjdGlvbiwgaW5kZXggb2YgbmV4dCBzbGlkZSBpcyBzYW1lIHRvIHJlbW92ZWRcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpXG4gICAgICAgICAgPyByZW1JbmRleFxuICAgICAgICAgIDogdGhpcy5ub1dyYXAgPyByZW1JbmRleCAtIDEgOiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XG5cbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3QobmV4dFNsaWRlSW5kZXgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gYWZ0ZXIgcmVtb3ZpbmcsIG5lZWQgdG8gYWN0dWFsaXplIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIHNsaWRlXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIG5leHRTbGlkZUZyb21JbnRlcnZhbChmb3JjZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKERpcmVjdGlvbi5ORVhULCBmb3JjZSk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBuZXh0IHNsaWRlXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xuICAgKi9cbiAgbmV4dFNsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gICAgfVxuICAgIHRoaXMubW92ZShEaXJlY3Rpb24uTkVYVCwgZm9yY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gcHJldmlvdXMgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBwcmV2aW91c1NsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gICAgfVxuICAgIHRoaXMubW92ZShEaXJlY3Rpb24uUFJFViwgZm9yY2UpO1xuICB9XG5cbiAgZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuZmluZEluZGV4KHRoaXMuZ2V0QWN0aXZlKTtcbiAgfVxuXG4gIGdldExhc3RWaXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZmluZExhc3RJbmRleCh0aGlzLnNsaWRlcywgdGhpcy5nZXRBY3RpdmUpO1xuICB9XG5cbiAgZ2V0QWN0aXZlID0gKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlO1xuXG4gIG1vdmUoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBmaXJzdFZpc2libGVJbmRleCA9IHRoaXMuZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKTtcbiAgICBjb25zdCBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5nZXRMYXN0VmlzaWJsZUluZGV4KCk7XG5cbiAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgIGlmIChcbiAgICAgICAgZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCAmJlxuICAgICAgICB0aGlzLmlzTGFzdChsYXN0VmlzaWJsZUluZGV4KSB8fFxuICAgICAgICBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWICYmXG4gICAgICAgIGZpcnN0VmlzaWJsZUluZGV4ID09PSAwXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QpIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb24sIGZvcmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlTXVsdGlsaXN0KGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRoIHNsaWRlcyBieSBlbnRlciwgc3BhY2UgYW5kIGFycm93cyBrZXlzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAga2V5ZG93blByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXlDb2RlID09PSAzMiB8fCBldmVudC5rZXkgPT09ICdTcGFjZScpIHtcbiAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleSA9PT0gJ0xlZnRBcnJvdycpIHtcbiAgICAgIHRoaXMucHJldmlvdXNTbGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleSA9PT0gJ1JpZ2h0QXJyb3cnKSB7XG4gICAgICB0aGlzLm5leHRTbGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBsYXkgb24gbW91c2UgbGVhdmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBhdXNlT25Gb2N1cykge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBsYXkgb24gbW91c2UgdXBcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk1vdXNlVXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBhdXNlT25Gb2N1cykge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gc2xpZGVzIG9uIGZvY3VzIGF1dG9wbGF5IGlzIHN0b3BwZWQob3B0aW9uYWwpXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcGF1c2VGb2N1c0luKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdXNlT25Gb2N1cykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHNsaWRlcyBvdXQgb2YgZm9jdXMgYXV0b3BsYXkgaXMgc3RhcnRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHBhdXNlRm9jdXNPdXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBzcGVjaWZpZWQgc2xpZGVcbiAgICogQHBhcmFtIGluZGV4OiB7bnVtYmVyfSBpbmRleCBvZiBzbGlkZSwgd2hpY2ggbXVzdCBiZSBzaG93blxuICAgKi9cbiAgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubXVsdGlsaXN0KSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5pbmRpY2F0b3JzQnlDaHVuayA/IGluZGV4ICogdGhpcy5pdGVtc1BlclNsaWRlIDogaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0U2xpZGVSYW5nZSh0aGlzLmluZGljYXRvcnNCeUNodW5rID8gaW5kZXggKiB0aGlzLml0ZW1zUGVyU2xpZGUgOiBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwbGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHBhdXNlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcbiAgICovXG4gIGdldEN1cnJlbnRTbGlkZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy5maW5kSW5kZXgodGhpcy5nZXRBY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBsYXN0IGluIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtIGluZGV4XG4gICAqL1xuICBpc0xhc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCArIDEgPj0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzLCB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgZmlyc3QgaW4gY29sbGVjdGlvblxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIGlzRmlyc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCA9PT0gMDtcbiAgfVxuXG4gIGluZGljYXRvcnNTbGlkZXMoKTogU2xpZGVDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmZpbHRlcihcbiAgICAgIChzbGlkZTogU2xpZGVDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+ICF0aGlzLmluZGljYXRvcnNCeUNodW5rIHx8IGluZGV4ICUgdGhpcy5pdGVtc1BlclNsaWRlID09PSAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0SW5pdGlhbFNsaWRlcygpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5zdGFydEZyb21JbmRleCA8PSB0aGlzLl9zbGlkZXMubGVuZ3RoXG4gICAgICA/IHRoaXMuc3RhcnRGcm9tSW5kZXhcbiAgICAgIDogMDtcblxuICAgIHRoaXMuaGlkZVNsaWRlcygpO1xuXG4gICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gdGhpcy5tYXBTbGlkZXNBbmRJbmRleGVzKCk7XG5cbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoIC0gc3RhcnRJbmRleCA8IHRoaXMuaXRlbXNQZXJTbGlkZSkge1xuICAgICAgICBjb25zdCBzbGlkZXNUb0FwcGVuZCA9IHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLnNsaWNlKDAsIHN0YXJ0SW5kZXgpO1xuXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzICA9IFtcbiAgICAgICAgICAuLi50aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyxcbiAgICAgICAgICAuLi5zbGlkZXNUb0FwcGVuZFxuICAgICAgICBdXG4gICAgICAgICAgLnNsaWNlKHNsaWRlc1RvQXBwZW5kLmxlbmd0aClcbiAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5pdGVtc1BlclNsaWRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuc2xpY2UoXG4gICAgICAgICAgc3RhcnRJbmRleCxcbiAgICAgICAgICBzdGFydEluZGV4ICsgdGhpcy5pdGVtc1BlclNsaWRlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIHRoaXMubWFrZVNsaWRlc0NvbnNpc3RlbnQodGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdFJhbmdlQnlOZXN0ZWRJbmRleChzdGFydEluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgbmV4dCBzbGlkZSBpbmRleCwgZGVwZW5kaW5nIG9mIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gZGlyZWN0aW9uOiBEaXJlY3Rpb24oVU5LTk9XTnxQUkVWfE5FWFQpXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIFRSVUUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZywgZWxzZSB3aWxsXG4gICAqICAgcmV0dXJuIHVuZGVmaW5lZCBpZiBuZXh0IHNsaWRlIHJlcXVpcmUgd3JhcHBpbmdcbiAgICovXG4gIHByaXZhdGUgZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbjogRGlyZWN0aW9uLCBmb3JjZTogYm9vbGVhbik6IG51bWJlciB7XG4gICAgbGV0IG5leHRTbGlkZUluZGV4ID0gMDtcblxuICAgIGlmIChcbiAgICAgICFmb3JjZSAmJlxuICAgICAgKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmXG4gICAgICAgIGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlBSRVYgJiZcbiAgICAgICAgdGhpcy5ub1dyYXApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERpcmVjdGlvbi5ORVhUOlxuICAgICAgICAvLyBpZiB0aGlzIGlzIGxhc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBmb3J3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpXG4gICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgKyAxXG4gICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgZmlyc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBiYWNrd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDBcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIC0gMVxuICAgICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXBcbiAgICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGVcbiAgICAgICAgICAgICAgOiB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTbGlkZUluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBTbGlkZXNBbmRJbmRleGVzKCk6IFNsaWRlV2l0aEluZGV4W10ge1xuICAgIHJldHVybiB0aGlzLnNsaWRlc1xuICAgICAgLnNsaWNlKClcbiAgICAgIC5tYXAoKHNsaWRlOiBTbGlkZUNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGl0ZW06IHNsaWRlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzZWxlY3RTbGlkZVJhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luZGV4SW5SYW5nZShpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVTbGlkZXMoKTtcblxuICAgIGlmICghdGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgdGhpcy5zZWxlY3RSYW5nZUJ5TmVzdGVkSW5kZXgoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5pc0luZGV4T25UaGVFZGdlcyhpbmRleClcbiAgICAgICAgPyBpbmRleFxuICAgICAgICA6IGluZGV4IC0gdGhpcy5pdGVtc1BlclNsaWRlICsgMTtcblxuICAgICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLmlzSW5kZXhPblRoZUVkZ2VzKGluZGV4KVxuICAgICAgICA/IGluZGV4ICsgdGhpcy5pdGVtc1BlclNsaWRlXG4gICAgICAgIDogaW5kZXggKyAxO1xuXG4gICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyA9IHRoaXMubWFwU2xpZGVzQW5kSW5kZXhlcygpLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgIHRoaXMubWFrZVNsaWRlc0NvbnNpc3RlbnQodGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMpO1xuXG4gICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5mb3JFYWNoKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLml0ZW0uYWN0aXZlID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zbGlkZVJhbmdlQ2hhbmdlLmVtaXQodGhpcy5nZXRWaXNpYmxlSW5kZXhlcygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0UmFuZ2VCeU5lc3RlZEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlID0gdGhpcy5fY2h1bmtlZFNsaWRlc1xuICAgICAgLm1hcCgoc2xpZGVzTGlzdCwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgbGlzdDogc2xpZGVzTGlzdFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maW5kKFxuICAgICAgICAoc2xpZGVzTGlzdDogSW5kZXhlZFNsaWRlTGlzdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBzbGlkZXNMaXN0Lmxpc3QuZmluZChzbGlkZSA9PiBzbGlkZS5pbmRleCA9PT0gaW5kZXgpICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID0gc2VsZWN0ZWRSYW5nZS5pbmRleDtcblxuICAgIHRoaXMuX2NodW5rZWRTbGlkZXNbc2VsZWN0ZWRSYW5nZS5pbmRleF0uZm9yRWFjaCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiB7XG4gICAgICBzbGlkZS5pdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzSW5kZXhPblRoZUVkZ2VzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgaW5kZXggKyAxIC0gdGhpcy5pdGVtc1BlclNsaWRlIDw9IDAgfHxcbiAgICAgIGluZGV4ICsgdGhpcy5pdGVtc1BlclNsaWRlIDw9IHRoaXMuX3NsaWRlcy5sZW5ndGhcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0luZGV4SW5SYW5nZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcbiAgICAgIGNvbnN0IHZpc2libGVJbmRleGVzID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHZpc2libGVJbmRleGVzLmluZGV4T2YoaW5kZXgpID49IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGluZGV4IDw9IHRoaXMuZ2V0TGFzdFZpc2libGVJbmRleCgpICYmXG4gICAgICBpbmRleCA+PSB0aGlzLmdldEZpcnN0VmlzaWJsZUluZGV4KClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlU2xpZGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1Zpc2libGVTbGlkZUxpc3RMYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID09PSB0aGlzLl9jaHVua2VkU2xpZGVzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBwcml2YXRlIGlzVmlzaWJsZVNsaWRlTGlzdEZpcnN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlU2xpZGVyQnlPbmVJdGVtKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgbGV0IGZpcnN0VmlzaWJsZUluZGV4OiBudW1iZXI7XG4gICAgbGV0IGxhc3RWaXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgaW5kZXhUb0hpZGU6IG51bWJlcjtcbiAgICBsZXQgaW5kZXhUb1Nob3c6IG51bWJlcjtcblxuICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgZmlyc3RWaXNpYmxlSW5kZXggPSB0aGlzLmdldEZpcnN0VmlzaWJsZUluZGV4KCk7XG4gICAgICBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5nZXRMYXN0VmlzaWJsZUluZGV4KCk7XG5cbiAgICAgIGluZGV4VG9IaWRlID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVFxuICAgICAgICA/IGZpcnN0VmlzaWJsZUluZGV4XG4gICAgICAgIDogbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgaW5kZXhUb1Nob3cgPSBkaXJlY3Rpb24gIT09IERpcmVjdGlvbi5ORVhUXG4gICAgICAgID8gZmlyc3RWaXNpYmxlSW5kZXggLSAxXG4gICAgICAgIDogIXRoaXMuaXNMYXN0KGxhc3RWaXNpYmxlSW5kZXgpXG4gICAgICAgICAgPyBsYXN0VmlzaWJsZUluZGV4ICsgMSA6IDA7XG5cbiAgICAgIHRoaXMuX3NsaWRlcy5nZXQoaW5kZXhUb0hpZGUpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2xpZGVzLmdldChpbmRleFRvU2hvdykuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgc2xpZGVzVG9SZW9yZGVyID0gdGhpcy5tYXBTbGlkZXNBbmRJbmRleGVzKCkuZmlsdGVyKFxuICAgICAgICAoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pdGVtLmFjdGl2ZVxuICAgICAgKTtcblxuICAgICAgdGhpcy5tYWtlU2xpZGVzQ29uc2lzdGVudChzbGlkZXNUb1Jlb3JkZXIpO1xuXG4gICAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGlzcGxheWVkSW5kZXg6IG51bWJlcjtcblxuICAgICAgZmlyc3RWaXNpYmxlSW5kZXggPSB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlc1swXS5pbmRleDtcbiAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlc1t0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5sZW5ndGggLSAxXS5pbmRleDtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuc2hpZnQoKTtcblxuICAgICAgICBkaXNwbGF5ZWRJbmRleCA9IHRoaXMuaXNMYXN0KGxhc3RWaXNpYmxlSW5kZXgpXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBsYXN0VmlzaWJsZUluZGV4ICsgMTtcblxuICAgICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogZGlzcGxheWVkSW5kZXgsXG4gICAgICAgICAgaXRlbTogdGhpcy5fc2xpZGVzLmdldChkaXNwbGF5ZWRJbmRleClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5wb3AoKTtcbiAgICAgICAgZGlzcGxheWVkSW5kZXggPSB0aGlzLmlzRmlyc3QoZmlyc3RWaXNpYmxlSW5kZXgpXG4gICAgICAgICAgPyB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMVxuICAgICAgICAgIDogZmlyc3RWaXNpYmxlSW5kZXggLSAxO1xuXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gW3tcbiAgICAgICAgICBpbmRleDogZGlzcGxheWVkSW5kZXgsXG4gICAgICAgICAgaXRlbTogdGhpcy5fc2xpZGVzLmdldChkaXNwbGF5ZWRJbmRleClcbiAgICAgICAgfSwgLi4udGhpcy5fc2xpZGVzV2l0aEluZGV4ZXNdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGVTbGlkZXMoKTtcblxuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuZm9yRWFjaChzbGlkZSA9PiBzbGlkZS5pdGVtLmFjdGl2ZSA9IHRydWUpO1xuXG4gICAgICB0aGlzLm1ha2VTbGlkZXNDb25zaXN0ZW50KHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzKTtcblxuICAgICAgdGhpcy5zbGlkZVJhbmdlQ2hhbmdlLmVtaXQoXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLm1hcCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pbmRleClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlU2xpZGVzQ29uc2lzdGVudCA9IChzbGlkZXM6IFNsaWRlV2l0aEluZGV4W10pOiB2b2lkID0+IHtcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4LCBpbmRleDogbnVtYmVyKSA9PiBzbGlkZS5pdGVtLm9yZGVyID0gaW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlTXVsdGlsaXN0KGRpcmVjdGlvbjogRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcbiAgICAgIHRoaXMubW92ZVNsaWRlckJ5T25lSXRlbShkaXJlY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVTbGlkZXMoKTtcblxuICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXG4gICAgICAgICAgPyB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ICsgMVxuICAgICAgICAgIDogdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSB0aGlzLmlzVmlzaWJsZVNsaWRlTGlzdExhc3QoKVxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSB0aGlzLmlzVmlzaWJsZVNsaWRlTGlzdEZpcnN0KClcbiAgICAgICAgICAgID8gdGhpcy5fY2h1bmtlZFNsaWRlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICA6IHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NodW5rZWRTbGlkZXNbdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleF0uZm9yRWFjaChcbiAgICAgICAgKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlXG4gICAgICApO1xuXG4gICAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmlzaWJsZUluZGV4ZXMoKTogbnVtYmVyW10ge1xuICAgIGlmICghdGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NodW5rZWRTbGlkZXNbdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleF1cbiAgICAgICAgLm1hcCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5tYXAoKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc2xpZGUsIHdoaWNoIHNwZWNpZmllZCB0aHJvdWdoIGluZGV4LCBhcyBhY3RpdmVcbiAgICogQHBhcmFtIGluZGV4XG4gICAqL1xuICBwcml2YXRlIF9zZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpc05hTihpbmRleCkpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICAgIGlmIChjdXJyZW50U2xpZGUpIHtcbiAgICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xuICAgIGlmIChuZXh0U2xpZGUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGluZGV4O1xuICAgICAgbmV4dFNsaWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0VGltZXIoKSB7XG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcbiAgICBpZiAoIWlzTmFOKGludGVydmFsKSAmJiBpbnRlcnZhbCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5JbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nICYmXG4gICAgICAgICAgICAgICFpc05hTih0aGlzLmludGVydmFsKSAmJlxuICAgICAgICAgICAgICBuSW50ZXJ2YWwgPiAwICYmXG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVzLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlRnJvbUludGVydmFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtdWx0aWxpc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNQZXJTbGlkZSA+IDE7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==