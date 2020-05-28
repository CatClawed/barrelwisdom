/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const Direction = {
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
export class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
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
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
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
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
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
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
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
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
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
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
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
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
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
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
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
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQzFELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7SUFJckQsVUFBTztJQUNQLE9BQUk7SUFDSixPQUFJOzs7Ozs7Ozs7QUFVTixNQUFNLE9BQU8saUJBQWlCOzs7OztJQWdGNUIsWUFBWSxNQUFzQixFQUFVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFROzs7UUFyRWpELHNCQUFpQixHQUFHLEtBQUssQ0FBQzs7UUFFMUIsa0JBQWEsR0FBRyxDQUFDLENBQUM7OztRQUdsQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7Ozs7UUFFMUIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUk1QixzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLENBQVMsS0FBSyxDQUFDLENBQUM7Ozs7UUFJMUUscUJBQWdCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7O1FBbUJ4RSxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQXdCVCxZQUFPLEdBQStCLElBQUksVUFBVSxFQUFrQixDQUFDO1FBR3ZFLCtCQUEwQixHQUFHLENBQUMsQ0FBQztRQUUvQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBOEg1QixjQUFTOzs7O1FBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxLQUFL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Y291bnRcbi8qKipcbiAqIHBhdXNlIChub3QgeWV0IHN1cHBvcnRlZCkgKD9zdHJpbmc9J2hvdmVyJykgLSBldmVudCBncm91cCBuYW1lIHdoaWNoIHBhdXNlc1xuICogdGhlIGN5Y2xpbmcgb2YgdGhlIGNhcm91c2VsLCBpZiBob3ZlciBwYXVzZXMgb24gbW91c2VlbnRlciBhbmQgcmVzdW1lcyBvblxuICogbW91c2VsZWF2ZSBrZXlib2FyZCAobm90IHlldCBzdXBwb3J0ZWQpICg/Ym9vbGVhbj10cnVlKSAtIGlmIGZhbHNlXG4gKiBjYXJvdXNlbCB3aWxsIG5vdCByZWFjdCB0byBrZXlib2FyZCBldmVudHNcbiAqIG5vdGU6IHN3aXBpbmcgbm90IHlldCBzdXBwb3J0ZWRcbiAqL1xuLyoqKipcbiAqIFByb2JsZW1zOlxuICogMSkgaWYgd2Ugc2V0IGFuIGFjdGl2ZSBzbGlkZSB2aWEgbW9kZWwgY2hhbmdlcywgLmFjdGl2ZSBjbGFzcyByZW1haW5zIG9uIGFcbiAqIGN1cnJlbnQgc2xpZGUuXG4gKiAyKSBpZiB3ZSBoYXZlIG9ubHkgb25lIHNsaWRlLCB3ZSBzaG91bGRuJ3Qgc2hvdyBwcmV2L25leHQgbmF2IGJ1dHRvbnNcbiAqIDMpIGlmIGZpcnN0IG9yIGxhc3Qgc2xpZGUgaXMgYWN0aXZlIGFuZCBub1dyYXAgaXMgdHJ1ZSwgdGhlcmUgc2hvdWxkIGJlXG4gKiBcImRpc2FibGVkXCIgY2xhc3Mgb24gdGhlIG5hdiBidXR0b25zLlxuICogNCkgZGVmYXVsdCBpbnRlcnZhbCBzaG91bGQgYmUgZXF1YWwgNTAwMFxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNCczMsIExpbmtlZExpc3QgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5pbXBvcnQgeyBmaW5kTGFzdEluZGV4LCBjaHVua0J5TnVtYmVyIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTbGlkZVdpdGhJbmRleCwgSW5kZXhlZFNsaWRlTGlzdCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgVU5LTk9XTixcbiAgTkVYVCxcbiAgUFJFVlxufVxuXG4vKipcbiAqIEJhc2UgZWxlbWVudCB0byBjcmVhdGUgY2Fyb3VzZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyogSWYgYHRydWVgIOKAlCBjYXJvdXNlbCB3aWxsIG5vdCBjeWNsZSBjb250aW51b3VzbHkgYW5kIHdpbGwgaGF2ZSBoYXJkIHN0b3BzIChwcmV2ZW50IGxvb3BpbmcpICovXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcbiAgLyogIElmIGB0cnVlYCDigJQgd2lsbCBkaXNhYmxlIHBhdXNpbmcgb24gY2Fyb3VzZWwgbW91c2UgaG92ZXIgKi9cbiAgQElucHV0KCkgbm9QYXVzZTogYm9vbGVhbjtcbiAgLyogIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwtaW5kaWNhdG9ycyBhcmUgdmlzaWJsZSAgKi9cbiAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW47XG4gIC8qICBJZiBgdHJ1ZWAgLSBhdXRvcGxheSB3aWxsIGJlIHN0b3BwZWQgb24gZm9jdXMgKi9cbiAgQElucHV0KCkgcGF1c2VPbkZvY3VzOiBib29sZWFuO1xuICAvKiBJZiBgdHJ1ZWAgLSBjYXJvdXNlbCBpbmRpY2F0b3JzIGluZGljYXRlIHNsaWRlcyBjaHVua3NcbiAgICAgd29ya3MgT05MWSBpZiBzaW5nbGVTbGlkZU9mZnNldCA9IEZBTFNFICovXG4gIEBJbnB1dCgpIGluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XG4gIC8qIElmIHZhbHVlIG1vcmUgdGhlbiAxIOKAlCBjYXJvdXNlbCB3b3JrcyBpbiBtdWx0aWxpc3QgbW9kZSAqL1xuICBASW5wdXQoKSBpdGVtc1BlclNsaWRlID0gMTtcbiAgLyogSWYgYHRydWVgIOKAlCBjYXJvdXNlbCBzaGlmdHMgYnkgb25lIGVsZW1lbnQuIEJ5IGRlZmF1bHQgY2Fyb3VzZWwgc2hpZnRzIGJ5IG51bWJlclxuICAgICBvZiB2aXNpYmxlIGVsZW1lbnRzIChpdGVtc1BlclNsaWRlIGZpZWxkKSAqL1xuICBASW5wdXQoKSBzaW5nbGVTbGlkZU9mZnNldCA9IGZhbHNlO1xuICAvKiogVHVybiBvbi9vZmYgYW5pbWF0aW9uLiBBbmltYXRpb24gZG9lc24ndCB3b3JrIGZvciBtdWx0aWxpc3QgY2Fyb3VzZWwgKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xuICBAT3V0cHV0KClcbiAgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KGZhbHNlKTtcblxuICAvKiogV2lsbCBiZSBlbWl0dGVkIHdoZW4gYWN0aXZlIHNsaWRlcyBoYXMgYmVlbiBjaGFuZ2VkIGluIG11bHRpbGlzdCBtb2RlICovXG4gIEBPdXRwdXQoKVxuICBzbGlkZVJhbmdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuICAvKiogSW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZShzdGFydGVkIGZvciAwKSAqL1xuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlU2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm11bHRpbGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhY3RpdmVTbGlkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGU7XG4gIH1cblxuICAvKiBJbmRleCB0byBzdGFydCBkaXNwbGF5IHNsaWRlcyBmcm9tIGl0ICovXG4gIEBJbnB1dCgpXG4gIHN0YXJ0RnJvbUluZGV4ID0gMDtcblxuICAvKipcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlXG4gICAqIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XG4gICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIGdldCBzbGlkZXMoKTogU2xpZGVDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy50b0FycmF5KCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcbiAgcHJvdGVjdGVkIF9jdXJyZW50QWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF9pbnRlcnZhbDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3NsaWRlczogTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4gPSBuZXcgTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4oKTtcbiAgcHJvdGVjdGVkIF9jaHVua2VkU2xpZGVzOiBTbGlkZVdpdGhJbmRleFtdW107XG4gIHByb3RlY3RlZCBfc2xpZGVzV2l0aEluZGV4ZXM6IFNsaWRlV2l0aEluZGV4W107XG4gIHByb3RlY3RlZCBfY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9IDA7XG4gIHByb3RlY3RlZCBpc1BsYXlpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYXJvdXNlbENvbmZpZywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNpbmdsZVNsaWRlT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yc0J5Q2h1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm11bHRpbGlzdCkge1xuICAgICAgICB0aGlzLl9jaHVua2VkU2xpZGVzID0gY2h1bmtCeU51bWJlcihcbiAgICAgICAgICB0aGlzLm1hcFNsaWRlc0FuZEluZGV4ZXMoKSxcbiAgICAgICAgICB0aGlzLml0ZW1zUGVyU2xpZGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZWxlY3RJbml0aWFsU2xpZGVzKCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgc2xpZGUuIElmIHRoaXMgc2xpZGUgaXMgZmlyc3QgaW4gY29sbGVjdGlvbiAtIHNldCBpdCBhcyBhY3RpdmVcbiAgICogYW5kIHN0YXJ0cyBhdXRvIGNoYW5naW5nXG4gICAqIEBwYXJhbSBzbGlkZVxuICAgKi9cbiAgYWRkU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2xpZGVzLmFkZChzbGlkZSk7XG5cbiAgICBpZiAodGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA8PSB0aGlzLml0ZW1zUGVyU2xpZGUpIHtcbiAgICAgIHNsaWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm11bHRpbGlzdCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHNsaWRlLmlzQW5pbWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA+IHRoaXMuaXRlbXNQZXJTbGlkZSkge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyXG4gICAqIHNsaWRlXG4gICAqIEBwYXJhbSBzbGlkZVxuICAgKi9cbiAgcmVtb3ZlU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVtSW5kZXggPSB0aGlzLl9zbGlkZXMuaW5kZXhPZihzbGlkZSk7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID09PSByZW1JbmRleCkge1xuICAgICAgLy8gcmVtb3Zpbmcgb2YgYWN0aXZlIHNsaWRlXG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlciA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBpZiB0aGlzIHNsaWRlIGxhc3QgLSB3aWxsIHJvbGwgdG8gZmlyc3Qgc2xpZGUsIGlmIG5vV3JhcCBmbGFnIGlzXG4gICAgICAgIC8vIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRSBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluXG4gICAgICAgIC8vIG1pZGRsZSBvZiBjb2xsZWN0aW9uLCBpbmRleCBvZiBuZXh0IHNsaWRlIGlzIHNhbWUgdG8gcmVtb3ZlZFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdChyZW1JbmRleClcbiAgICAgICAgICA/IHJlbUluZGV4XG4gICAgICAgICAgOiB0aGlzLm5vV3JhcCA/IHJlbUluZGV4IC0gMSA6IDA7XG4gICAgICB9XG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcblxuICAgICAgLy8gcHJldmVudHMgZXhjZXB0aW9uIHdpdGggY2hhbmdpbmcgc29tZSB2YWx1ZSBhZnRlciBjaGVja2luZ1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdChuZXh0U2xpZGVJbmRleCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBhZnRlciByZW1vdmluZywgbmVlZCB0byBhY3R1YWxpemUgaW5kZXggb2YgY3VycmVudCBhY3RpdmUgc2xpZGVcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gY3VycmVudFNsaWRlSW5kZXg7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dFNsaWRlRnJvbUludGVydmFsKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmUoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIG5leHQgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBuZXh0U2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlKERpcmVjdGlvbi5ORVhULCBmb3JjZSk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGluZyB0byBwcmV2aW91cyBzbGlkZVxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcbiAgICovXG4gIHByZXZpb3VzU2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlKERpcmVjdGlvbi5QUkVWLCBmb3JjZSk7XG4gIH1cblxuICBnZXRGaXJzdFZpc2libGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5maW5kSW5kZXgodGhpcy5nZXRBY3RpdmUpO1xuICB9XG5cbiAgZ2V0TGFzdFZpc2libGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiBmaW5kTGFzdEluZGV4KHRoaXMuc2xpZGVzLCB0aGlzLmdldEFjdGl2ZSk7XG4gIH1cblxuICBnZXRBY3RpdmUgPSAoc2xpZGU6IFNsaWRlQ29tcG9uZW50KSA9PiBzbGlkZS5hY3RpdmU7XG5cbiAgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0VmlzaWJsZUluZGV4ID0gdGhpcy5nZXRGaXJzdFZpc2libGVJbmRleCgpO1xuICAgIGNvbnN0IGxhc3RWaXNpYmxlSW5kZXggPSB0aGlzLmdldExhc3RWaXNpYmxlSW5kZXgoKTtcblxuICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUICYmXG4gICAgICAgIHRoaXMuaXNMYXN0KGxhc3RWaXNpYmxlSW5kZXgpIHx8XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYgJiZcbiAgICAgICAgZmlyc3RWaXNpYmxlSW5kZXggPT09IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm11bHRpbGlzdCkge1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbiwgZm9yY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVNdWx0aWxpc3QoZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGggc2xpZGVzIGJ5IGVudGVyLCBzcGFjZSBhbmQgYXJyb3dzIGtleXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBrZXlkb3duUHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IGV2ZW50LmtleSA9PT0gJ1NwYWNlJykge1xuICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5ID09PSAnTGVmdEFycm93Jykge1xuICAgICAgdGhpcy5wcmV2aW91c1NsaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5ID09PSAnUmlnaHRBcnJvdycpIHtcbiAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGxheSBvbiBtb3VzZSBsZWF2ZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGF1c2VPbkZvY3VzKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGxheSBvbiBtb3VzZSB1cFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTW91c2VVcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGF1c2VPbkZvY3VzKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBzbGlkZXMgb24gZm9jdXMgYXV0b3BsYXkgaXMgc3RvcHBlZChvcHRpb25hbClcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwYXVzZUZvY3VzSW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGF1c2VPbkZvY3VzKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gc2xpZGVzIG91dCBvZiBmb2N1cyBhdXRvcGxheSBpcyBzdGFydGVkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcGF1c2VGb2N1c091dCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIHNwZWNpZmllZCBzbGlkZVxuICAgKiBAcGFyYW0gaW5kZXg6IHtudW1iZXJ9IGluZGV4IG9mIHNsaWRlLCB3aGljaCBtdXN0IGJlIHNob3duXG4gICAqL1xuICBzZWxlY3RTbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QpIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmluZGljYXRvcnNCeUNodW5rID8gaW5kZXggKiB0aGlzLml0ZW1zUGVyU2xpZGUgOiBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RTbGlkZVJhbmdlKHRoaXMuaW5kaWNhdG9yc0J5Q2h1bmsgPyBpbmRleCAqIHRoaXMuaXRlbXNQZXJTbGlkZSA6IGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICovXG4gIHBsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcGF1c2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vUGF1c2UpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgaW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZVxuICAgKi9cbiAgZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLmZpbmRJbmRleCh0aGlzLmdldEFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcywgd2hldGhlciB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxhc3QgaW4gY29sbGVjdGlvblxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIGlzTGFzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ICsgMSA+PSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBmaXJzdCBpbiBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgaXNGaXJzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwO1xuICB9XG5cbiAgaW5kaWNhdG9yc1NsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuZmlsdGVyKFxuICAgICAgKHNsaWRlOiBTbGlkZUNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4gIXRoaXMuaW5kaWNhdG9yc0J5Q2h1bmsgfHwgaW5kZXggJSB0aGlzLml0ZW1zUGVyU2xpZGUgPT09IDBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RJbml0aWFsU2xpZGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLnN0YXJ0RnJvbUluZGV4IDw9IHRoaXMuX3NsaWRlcy5sZW5ndGhcbiAgICAgID8gdGhpcy5zdGFydEZyb21JbmRleFxuICAgICAgOiAwO1xuXG4gICAgdGhpcy5oaWRlU2xpZGVzKCk7XG5cbiAgICBpZiAodGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgPSB0aGlzLm1hcFNsaWRlc0FuZEluZGV4ZXMoKTtcblxuICAgICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggLSBzdGFydEluZGV4IDwgdGhpcy5pdGVtc1BlclNsaWRlKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlc1RvQXBwZW5kID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuc2xpY2UoMCwgc3RhcnRJbmRleCk7XG5cbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgID0gW1xuICAgICAgICAgIC4uLnRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLFxuICAgICAgICAgIC4uLnNsaWRlc1RvQXBwZW5kXG4gICAgICAgIF1cbiAgICAgICAgICAuc2xpY2Uoc2xpZGVzVG9BcHBlbmQubGVuZ3RoKVxuICAgICAgICAgIC5zbGljZSgwLCB0aGlzLml0ZW1zUGVyU2xpZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgPSB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5zbGljZShcbiAgICAgICAgICBzdGFydEluZGV4LFxuICAgICAgICAgIHN0YXJ0SW5kZXggKyB0aGlzLml0ZW1zUGVyU2xpZGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuZm9yRWFjaCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pdGVtLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgdGhpcy5tYWtlU2xpZGVzQ29uc2lzdGVudCh0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0UmFuZ2VCeU5lc3RlZEluZGV4KHN0YXJ0SW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVSYW5nZUNoYW5nZS5lbWl0KHRoaXMuZ2V0VmlzaWJsZUluZGV4ZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyBuZXh0IHNsaWRlIGluZGV4LCBkZXBlbmRpbmcgb2YgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSBkaXJlY3Rpb246IERpcmVjdGlvbihVTktOT1dOfFBSRVZ8TkVYVClcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgVFJVRSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnLCBlbHNlIHdpbGxcbiAgICogICByZXR1cm4gdW5kZWZpbmVkIGlmIG5leHQgc2xpZGUgcmVxdWlyZSB3cmFwcGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBmaW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSAwO1xuXG4gICAgaWYgKFxuICAgICAgIWZvcmNlICYmXG4gICAgICAodGhpcy5pc0xhc3QodGhpcy5hY3RpdmVTbGlkZSkgJiZcbiAgICAgICAgZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uUFJFViAmJlxuICAgICAgICB0aGlzLm5vV3JhcClcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLk5FWFQ6XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgbGFzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGZvcndhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSlcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSArIDFcbiAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcCA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA6IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEaXJlY3Rpb24uUFJFVjpcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBmaXJzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGJhY2t3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9XG4gICAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID4gMFxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgLSAxXG4gICAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcFxuICAgICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZVxuICAgICAgICAgICAgICA6IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNsaWRlSW5kZXg7XG4gIH1cblxuICBwcml2YXRlIG1hcFNsaWRlc0FuZEluZGV4ZXMoKTogU2xpZGVXaXRoSW5kZXhbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzXG4gICAgICAuc2xpY2UoKVxuICAgICAgLm1hcCgoc2xpZGU6IFNsaWRlQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaXRlbTogc2xpZGVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHNlbGVjdFNsaWRlUmFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5kZXhJblJhbmdlKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZVNsaWRlcygpO1xuXG4gICAgaWYgKCF0aGlzLnNpbmdsZVNsaWRlT2Zmc2V0KSB7XG4gICAgICB0aGlzLnNlbGVjdFJhbmdlQnlOZXN0ZWRJbmRleChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLmlzSW5kZXhPblRoZUVkZ2VzKGluZGV4KVxuICAgICAgICA/IGluZGV4XG4gICAgICAgIDogaW5kZXggLSB0aGlzLml0ZW1zUGVyU2xpZGUgKyAxO1xuXG4gICAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuaXNJbmRleE9uVGhlRWRnZXMoaW5kZXgpXG4gICAgICAgID8gaW5kZXggKyB0aGlzLml0ZW1zUGVyU2xpZGVcbiAgICAgICAgOiBpbmRleCArIDE7XG5cbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gdGhpcy5tYXBTbGlkZXNBbmRJbmRleGVzKCkuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgICAgdGhpcy5tYWtlU2xpZGVzQ29uc2lzdGVudCh0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyk7XG5cbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RSYW5nZUJ5TmVzdGVkSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSB0aGlzLl9jaHVua2VkU2xpZGVzXG4gICAgICAubWFwKChzbGlkZXNMaXN0LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBsaXN0OiBzbGlkZXNMaXN0XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbmQoXG4gICAgICAgIChzbGlkZXNMaXN0OiBJbmRleGVkU2xpZGVMaXN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNsaWRlc0xpc3QubGlzdC5maW5kKHNsaWRlID0+IHNsaWRlLmluZGV4ID09PSBpbmRleCkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSBzZWxlY3RlZFJhbmdlLmluZGV4O1xuXG4gICAgdGhpcy5fY2h1bmtlZFNsaWRlc1tzZWxlY3RlZFJhbmdlLmluZGV4XS5mb3JFYWNoKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHtcbiAgICAgIHNsaWRlLml0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNJbmRleE9uVGhlRWRnZXMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpbmRleCArIDEgLSB0aGlzLml0ZW1zUGVyU2xpZGUgPD0gMCB8fFxuICAgICAgaW5kZXggKyB0aGlzLml0ZW1zUGVyU2xpZGUgPD0gdGhpcy5fc2xpZGVzLmxlbmd0aFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzSW5kZXhJblJhbmdlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgY29uc3QgdmlzaWJsZUluZGV4ZXMgPSB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5tYXAoKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdmlzaWJsZUluZGV4ZXMuaW5kZXhPZihpbmRleCkgPj0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgaW5kZXggPD0gdGhpcy5nZXRMYXN0VmlzaWJsZUluZGV4KCkgJiZcbiAgICAgIGluZGV4ID49IHRoaXMuZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVTbGlkZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGU6IFNsaWRlQ29tcG9uZW50KSA9PiBzbGlkZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGlzVmlzaWJsZVNsaWRlTGlzdExhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPT09IHRoaXMuX2NodW5rZWRTbGlkZXMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHByaXZhdGUgaXNWaXNpYmxlU2xpZGVMaXN0Rmlyc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIG1vdmVTbGlkZXJCeU9uZUl0ZW0oZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZmlyc3RWaXNpYmxlSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgbGFzdFZpc2libGVJbmRleDogbnVtYmVyO1xuICAgIGxldCBpbmRleFRvSGlkZTogbnVtYmVyO1xuICAgIGxldCBpbmRleFRvU2hvdzogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICBmaXJzdFZpc2libGVJbmRleCA9IHRoaXMuZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKTtcbiAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSB0aGlzLmdldExhc3RWaXNpYmxlSW5kZXgoKTtcblxuICAgICAgaW5kZXhUb0hpZGUgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXG4gICAgICAgID8gZmlyc3RWaXNpYmxlSW5kZXhcbiAgICAgICAgOiBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICBpbmRleFRvU2hvdyA9IGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLk5FWFRcbiAgICAgICAgPyBmaXJzdFZpc2libGVJbmRleCAtIDFcbiAgICAgICAgOiAhdGhpcy5pc0xhc3QobGFzdFZpc2libGVJbmRleClcbiAgICAgICAgICA/IGxhc3RWaXNpYmxlSW5kZXggKyAxIDogMDtcblxuICAgICAgdGhpcy5fc2xpZGVzLmdldChpbmRleFRvSGlkZSkuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9zbGlkZXMuZ2V0KGluZGV4VG9TaG93KS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICBjb25zdCBzbGlkZXNUb1Jlb3JkZXIgPSB0aGlzLm1hcFNsaWRlc0FuZEluZGV4ZXMoKS5maWx0ZXIoXG4gICAgICAgIChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLml0ZW0uYWN0aXZlXG4gICAgICApO1xuXG4gICAgICB0aGlzLm1ha2VTbGlkZXNDb25zaXN0ZW50KHNsaWRlc1RvUmVvcmRlcik7XG5cbiAgICAgIHRoaXMuc2xpZGVSYW5nZUNoYW5nZS5lbWl0KHRoaXMuZ2V0VmlzaWJsZUluZGV4ZXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaXNwbGF5ZWRJbmRleDogbnVtYmVyO1xuXG4gICAgICBmaXJzdFZpc2libGVJbmRleCA9IHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzWzBdLmluZGV4O1xuICAgICAgbGFzdFZpc2libGVJbmRleCA9IHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzW3RoaXMuX3NsaWRlc1dpdGhJbmRleGVzLmxlbmd0aCAtIDFdLmluZGV4O1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5zaGlmdCgpO1xuXG4gICAgICAgIGRpc3BsYXllZEluZGV4ID0gdGhpcy5pc0xhc3QobGFzdFZpc2libGVJbmRleClcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IGxhc3RWaXNpYmxlSW5kZXggKyAxO1xuXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBkaXNwbGF5ZWRJbmRleCxcbiAgICAgICAgICBpdGVtOiB0aGlzLl9zbGlkZXMuZ2V0KGRpc3BsYXllZEluZGV4KVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLnBvcCgpO1xuICAgICAgICBkaXNwbGF5ZWRJbmRleCA9IHRoaXMuaXNGaXJzdChmaXJzdFZpc2libGVJbmRleClcbiAgICAgICAgICA/IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxXG4gICAgICAgICAgOiBmaXJzdFZpc2libGVJbmRleCAtIDE7XG5cbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgPSBbe1xuICAgICAgICAgIGluZGV4OiBkaXNwbGF5ZWRJbmRleCxcbiAgICAgICAgICBpdGVtOiB0aGlzLl9zbGlkZXMuZ2V0KGRpc3BsYXllZEluZGV4KVxuICAgICAgICB9LCAuLi50aGlzLl9zbGlkZXNXaXRoSW5kZXhlc107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZVNsaWRlcygpO1xuXG4gICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLml0ZW0uYWN0aXZlID0gdHJ1ZSk7XG5cbiAgICAgIHRoaXMubWFrZVNsaWRlc0NvbnNpc3RlbnQodGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMpO1xuXG4gICAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdChcbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VTbGlkZXNDb25zaXN0ZW50ID0gKHNsaWRlczogU2xpZGVXaXRoSW5kZXhbXSk6IHZvaWQgPT4ge1xuICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZTogU2xpZGVXaXRoSW5kZXgsIGluZGV4OiBudW1iZXIpID0+IHNsaWRlLml0ZW0ub3JkZXIgPSBpbmRleCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVNdWx0aWxpc3QoZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xuICAgICAgdGhpcy5tb3ZlU2xpZGVyQnlPbmVJdGVtKGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVNsaWRlcygpO1xuXG4gICAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFRcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggKyAxXG4gICAgICAgICAgOiB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9IHRoaXMuaXNWaXNpYmxlU2xpZGVMaXN0TGFzdCgpXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9IHRoaXMuaXNWaXNpYmxlU2xpZGVMaXN0Rmlyc3QoKVxuICAgICAgICAgICAgPyB0aGlzLl9jaHVua2VkU2xpZGVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIDogdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2h1bmtlZFNsaWRlc1t0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4XS5mb3JFYWNoKFxuICAgICAgICAoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pdGVtLmFjdGl2ZSA9IHRydWVcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc2xpZGVSYW5nZUNoYW5nZS5lbWl0KHRoaXMuZ2V0VmlzaWJsZUluZGV4ZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRWaXNpYmxlSW5kZXhlcygpOiBudW1iZXJbXSB7XG4gICAgaWYgKCF0aGlzLnNpbmdsZVNsaWRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2h1bmtlZFNsaWRlc1t0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4XVxuICAgICAgICAubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLm1hcCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzbGlkZSwgd2hpY2ggc3BlY2lmaWVkIHRocm91Z2ggaW5kZXgsIGFzIGFjdGl2ZVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX3NlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm11bHRpbGlzdCkge1xuICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgICAgaWYgKGN1cnJlbnRTbGlkZSkge1xuICAgICAgICBjdXJyZW50U2xpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldChpbmRleCk7XG4gICAgaWYgKG5leHRTbGlkZSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICBuZXh0U2xpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwcml2YXRlIHJlc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbkludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKHRoaXMuaW50ZXJ2YWwpICYmXG4gICAgICAgICAgICAgIG5JbnRlcnZhbCA+IDAgJiZcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZXMubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2xpZGVGcm9tSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG11bHRpbGlzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1BlclNsaWRlID4gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAqL1xuICBwcml2YXRlIHJlc2V0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudEludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY3VycmVudEludGVydmFsKTtcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuIl19