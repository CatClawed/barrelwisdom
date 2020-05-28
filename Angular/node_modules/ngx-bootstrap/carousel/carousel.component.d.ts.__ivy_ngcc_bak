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
import { EventEmitter, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import { LinkedList } from 'ngx-bootstrap/utils';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';
import { SlideWithIndex } from './models';
export declare enum Direction {
    UNKNOWN = 0,
    NEXT = 1,
    PREV = 2
}
/**
 * Base element to create carousel
 */
export declare class CarouselComponent implements AfterViewInit, OnDestroy {
    private ngZone;
    noWrap: boolean;
    noPause: boolean;
    showIndicators: boolean;
    pauseOnFocus: boolean;
    indicatorsByChunk: boolean;
    itemsPerSlide: number;
    singleSlideOffset: boolean;
    /** Turn on/off animation. Animation doesn't work for multilist carousel */
    isAnimated: boolean;
    /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
    activeSlideChange: EventEmitter<number>;
    /** Will be emitted when active slides has been changed in multilist mode */
    slideRangeChange: EventEmitter<number[]>;
    /** Index of currently displayed slide(started for 0) */
    activeSlide: number;
    startFromIndex: number;
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     */
    interval: number;
    readonly slides: SlideComponent[];
    protected currentInterval: any;
    protected _currentActiveSlide: number;
    protected _interval: number;
    protected _slides: LinkedList<SlideComponent>;
    protected _chunkedSlides: SlideWithIndex[][];
    protected _slidesWithIndexes: SlideWithIndex[];
    protected _currentVisibleSlidesIndex: number;
    protected isPlaying: boolean;
    protected destroyed: boolean;
    readonly isBs4: boolean;
    constructor(config: CarouselConfig, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    addSlide(slide: SlideComponent): void;
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    removeSlide(slide: SlideComponent): void;
    nextSlideFromInterval(force?: boolean): void;
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    nextSlide(force?: boolean): void;
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    previousSlide(force?: boolean): void;
    getFirstVisibleIndex(): number;
    getLastVisibleIndex(): number;
    getActive: (slide: SlideComponent) => boolean;
    move(direction: Direction, force?: boolean): void;
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    keydownPress(event: KeyboardEvent): void;
    /**
     * Play on mouse leave
     * @internal
     */
    onMouseLeave(): void;
    /**
     * Play on mouse up
     * @internal
     */
    onMouseUp(): void;
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    pauseFocusIn(): void;
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    pauseFocusOut(): void;
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    selectSlide(index: number): void;
    /**
     * Starts a auto changing of slides
     */
    play(): void;
    /**
     * Stops a auto changing of slides
     */
    pause(): void;
    /**
     * Finds and returns index of currently displayed slide
     */
    getCurrentSlideIndex(): number;
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    isLast(index: number): boolean;
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    isFirst(index: number): boolean;
    indicatorsSlides(): SlideComponent[];
    private selectInitialSlides;
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    private findNextSlideIndex;
    private mapSlidesAndIndexes;
    private selectSlideRange;
    private selectRangeByNestedIndex;
    private isIndexOnTheEdges;
    private isIndexInRange;
    private hideSlides;
    private isVisibleSlideListLast;
    private isVisibleSlideListFirst;
    private moveSliderByOneItem;
    private makeSlidesConsistent;
    private moveMultilist;
    private getVisibleIndexes;
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    private _select;
    /**
     * Starts loop of auto changing of slides
     */
    private restartTimer;
    readonly multilist: boolean;
    /**
     * Stops loop of auto changing of slides
     */
    private resetTimer;
}
