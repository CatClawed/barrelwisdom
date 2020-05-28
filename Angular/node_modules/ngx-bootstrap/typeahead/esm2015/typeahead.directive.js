/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:max-file-line-count */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { from, isObservable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadMatch } from './typeahead-match.class';
import { TypeaheadConfig } from './typeahead.config';
import { getValueFromObject, latinize, tokenize } from './typeahead-utils';
import { TypeaheadOrder } from './typeahead-order.class';
export class TypeaheadDirective {
    /**
     * @param {?} cis
     * @param {?} config
     * @param {?} changeDetection
     * @param {?} element
     * @param {?} ngControl
     * @param {?} renderer
     * @param {?} viewContainerRef
     */
    constructor(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
        this.changeDetection = changeDetection;
        this.element = element;
        this.ngControl = ngControl;
        this.renderer = renderer;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * should be used only in case of typeahead attribute is Observable of array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /**
         * makes active first item in a list
         */
        this.typeaheadIsFirstItemActive = true;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurs. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isOpen = false;
        this.list = 'list';
        this.isActiveItemChanged = false;
        this.isFocused = false;
        this.cancelRequestOnFocusLost = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
        this.placement = 'bottom left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, {
            typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            typeaheadCancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadIsFirstItemActive: config.isFirstItemActive,
            typeaheadMinLength: config.minLength,
            adaptivePosition: config.adaptivePosition,
            isAnimated: config.isAnimated
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(isObservable(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (isObservable(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        /** @type {?} */
        const value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
            // enter
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
        // add setTimeout to fix issue #5251
        // to get and emit updated value if it's changed on focus
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.typeaheadMinLength === 0) {
                this.typeaheadLoading.emit(true);
                this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
        if (!this.container && this._matches.length === 0) {
            this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab') {
            this.onBlur();
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        /** @type {?} */
        const valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        }));
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        /** @type {?} */
        const normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
        this._container.activeChangeEvent.subscribe((/**
         * @param {?} activeId
         * @return {?}
         */
        (activeId) => {
            this.activeDescendant = activeId;
            this.changeDetection.markForCheck();
        }));
        this.isOpen = true;
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
            this.isOpen = false;
            this.changeDetection.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @protected
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap((/**
         * @return {?}
         */
        () => this.typeahead)))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this.finalizeAsyncCall(matches);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const normalizedQuery = this.normalizeQuery(value);
            return from(this.typeahead)
                .pipe(filter((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                return option && this.testMatch(this.normalizeOption(option), normalizedQuery);
            })), toArray());
        })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this.finalizeAsyncCall(matches);
        })));
    }
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        /** @type {?} */
        const optionValue = getValueFromObject(option, this.typeaheadOptionField);
        /** @type {?} */
        const normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each iteration
        /** @type {?} */
        let normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        /** @type {?} */
        let spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (!this.isFocused && this.cancelRequestOnFocusLost) {
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            /** @type {?} */
            const _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            const normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        /** @type {?} */
        const limited = options.slice(0, this.typeaheadOptionsLimit);
        /** @type {?} */
        const sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
        if (this.typeaheadGroupField) {
            /** @type {?} */
            let matches = [];
            // extract all group names
            /** @type {?} */
            const groups = sorted
                .map((/**
             * @param {?} option
             * @return {?}
             */
            (option) => getValueFromObject(option, this.typeaheadGroupField)))
                .filter((/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */
            (v, i, a) => a.indexOf(v) === i));
            groups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            (group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(sorted
                    .filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group))
                    .map((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)))));
            }));
            this._matches = matches;
        }
        else {
            this._matches = sorted.map((
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
        }
    }
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    orderMatches(options) {
        if (!options.length) {
            return options;
        }
        if (this.typeaheadOrderBy !== null
            && this.typeaheadOrderBy !== undefined
            && typeof this.typeaheadOrderBy === 'object'
            && Object.keys(this.typeaheadOrderBy).length === 0) {
            // tslint:disable-next-line:no-console
            console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
            return options;
        }
        const { field, direction } = this.typeaheadOrderBy;
        if (!direction || !(direction === 'asc' || direction === 'desc')) {
            // tslint:disable-next-line:no-console
            console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
            return options;
        }
        if (typeof options[0] === 'string') {
            return direction === 'asc' ? options.sort() : options.sort().reverse();
        }
        if (!field || typeof field !== 'string') {
            // tslint:disable-next-line:no-console
            console.error('typeaheadOrderBy field has to set according to the documentation.');
            return options;
        }
        return options.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const stringA = getValueFromObject(a, field);
            /** @type {?} */
            const stringB = getValueFromObject(b, field);
            if (stringA < stringB) {
                return direction === 'asc' ? -1 : 1;
            }
            if (stringA > stringB) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[typeahead]',
                exportAs: 'bs-typeahead',
                host: {
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-aria-owns]': 'isOpen ? this._container.popupId : null',
                    '[attr.aria-aria-expanded]': 'isOpen',
                    '[attr.aria-autocomplete]': 'list'
                }
            },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: ComponentLoaderFactory },
    { type: TypeaheadConfig },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgControl },
    { type: Renderer2 },
    { type: ViewContainerRef }
];
TypeaheadDirective.propDecorators = {
    typeahead: [{ type: Input }],
    typeaheadMinLength: [{ type: Input }],
    adaptivePosition: [{ type: Input }],
    isAnimated: [{ type: Input }],
    typeaheadWaitMs: [{ type: Input }],
    typeaheadOptionsLimit: [{ type: Input }],
    typeaheadOptionField: [{ type: Input }],
    typeaheadGroupField: [{ type: Input }],
    typeaheadOrderBy: [{ type: Input }],
    typeaheadAsync: [{ type: Input }],
    typeaheadLatinize: [{ type: Input }],
    typeaheadSingleWords: [{ type: Input }],
    typeaheadWordDelimiters: [{ type: Input }],
    typeaheadPhraseDelimiters: [{ type: Input }],
    typeaheadItemTemplate: [{ type: Input }],
    optionsListTemplate: [{ type: Input }],
    typeaheadScrollable: [{ type: Input }],
    typeaheadOptionsInScrollableView: [{ type: Input }],
    typeaheadHideResultsOnBlur: [{ type: Input }],
    typeaheadSelectFirstItem: [{ type: Input }],
    typeaheadIsFirstItemActive: [{ type: Input }],
    typeaheadLoading: [{ type: Output }],
    typeaheadNoResults: [{ type: Output }],
    typeaheadOnSelect: [{ type: Output }],
    typeaheadOnBlur: [{ type: Output }],
    container: [{ type: Input }],
    dropup: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onChange: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /**
     * options source, can be Array of strings, objects or
     * an Observable for external matching process
     * @type {?}
     */
    TypeaheadDirective.prototype.typeahead;
    /**
     * minimal no of characters that needs to be entered before
     * typeahead kicks-in. When set to 0, typeahead shows on focus with full
     * list of options (limited as normal by typeaheadOptionsLimit)
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMinLength;
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadDirective.prototype.adaptivePosition;
    /**
     * turn on/off animation
     * @type {?}
     */
    TypeaheadDirective.prototype.isAnimated;
    /**
     * minimal wait time after last character typed before typeahead kicks-in
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWaitMs;
    /**
     * maximum length of options items list. The default value is 20
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsLimit;
    /**
     * when options source is an array of objects, the name of field
     * that contains the options value, we use array item as option in case
     * of this field is missing. Supports nested properties and methods.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionField;
    /**
     * when options source is an array of objects, the name of field that
     * contains the group value, matches are grouped by this field when set.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadGroupField;
    /**
     * Used to specify a custom order of matches. When options source is an array of objects
     * a field for sorting has to be set up. In case of options source is an array of string,
     * a field for sorting is absent. The ordering direction could be changed to ascending or descending.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOrderBy;
    /**
     * should be used only in case of typeahead attribute is Observable of array.
     * If true - loading of options will be async, otherwise - sync.
     * true make sense if options array is large.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadAsync;
    /**
     * match latin symbols.
     * If true the word súper would match super and vice versa.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLatinize;
    /**
     * Can be use to search words by inserting a single white space between each characters
     *  for example 'C a l i f o r n i a' will match 'California'.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSingleWords;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to break words. Defaults to space.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWordDelimiters;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to match exact phrase.
     * Defaults to simple and double quotes.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadPhraseDelimiters;
    /**
     * used to specify a custom item template.
     * Template variables exposed are called item and index;
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadItemTemplate;
    /**
     * used to specify a custom options list template.
     * Template variables: matches, itemTemplate, query
     * @type {?}
     */
    TypeaheadDirective.prototype.optionsListTemplate;
    /**
     * specifies if typeahead is scrollable
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadScrollable;
    /**
     * specifies number of options to show in scroll view
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsInScrollableView;
    /**
     * used to hide result on blur
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadHideResultsOnBlur;
    /**
     * fired when an options list was opened and the user clicked Tab
     * If a value equal true, it will be chosen first or active item in the list
     * If value equal false, it will be chosen an active item in the list or nothing
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSelectFirstItem;
    /**
     * makes active first item in a list
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadIsFirstItemActive;
    /**
     * fired when 'busy' state of this component was changed,
     * fired on async mode only, returns boolean
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLoading;
    /**
     * fired on every key event and returns true
     * in case of matches are not detected
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadNoResults;
    /**
     * fired when option was selected, return object with data of this option
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnSelect;
    /**
     * fired when blur event occurs. returns the active item
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnBlur;
    /**
     * A selector specifying the element the typeahead should be appended to.
     * @type {?}
     */
    TypeaheadDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    TypeaheadDirective.prototype.dropup;
    /**
     * if false don't focus the input element the typeahead directive is associated with on selection
     * @type {?}
     */
    TypeaheadDirective.prototype.activeDescendant;
    /** @type {?} */
    TypeaheadDirective.prototype.isOpen;
    /** @type {?} */
    TypeaheadDirective.prototype.list;
    /** @type {?} */
    TypeaheadDirective.prototype._container;
    /** @type {?} */
    TypeaheadDirective.prototype.isActiveItemChanged;
    /** @type {?} */
    TypeaheadDirective.prototype.isFocused;
    /** @type {?} */
    TypeaheadDirective.prototype.cancelRequestOnFocusLost;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype.keyUpEventEmitter;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype._matches;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._typeahead;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._subscriptions;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._outsideClickListener;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.changeDetection;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQWdCLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBZ0J6RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7O0lBK0g3QixZQUNFLEdBQTJCLEVBQzNCLE1BQXVCLEVBQ2YsZUFBa0MsRUFDbEMsT0FBbUIsRUFDbkIsU0FBb0IsRUFDcEIsUUFBbUIsRUFDM0IsZ0JBQWtDO1FBSjFCLG9CQUFlLEdBQWYsZUFBZSxD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LG1EQUF3RTs7Ozs7O0lBSXhFLGlEQUFzRTs7Ozs7SUFFdEUsaURBQXFDOzs7OztJQUVyQyw4REFBOEM7Ozs7O0lBRTlDLHdEQUE2Qzs7Ozs7OztJQUs3QyxzREFBeUM7Ozs7O0lBRXpDLHdEQUEyQzs7Ozs7O0lBSTNDLDhDQUF5RDs7Ozs7O0lBSXpELGdEQUEyRDs7Ozs7SUFFM0QsK0NBQWlFOzs7OztJQUVqRSw2Q0FBK0Q7Ozs7O0lBSy9ELHVDQUEyQjs7Ozs7SUFHM0Isb0NBQXdCOzs7OztJQWdCeEIsOENBQXlCOztJQUN6QixvQ0FBZTs7SUFDZixrQ0FBYzs7SUFDZCx3Q0FBd0M7O0lBQ3hDLGlEQUE0Qjs7SUFDNUIsdUNBQWtCOztJQUNsQixzREFBaUM7Ozs7O0lBR2pDLCtDQUF1RTs7Ozs7SUFDdkUsc0NBQXFDOzs7OztJQUNyQyx1Q0FBb0M7Ozs7O0lBRXBDLHdDQUFpRTs7Ozs7SUFDakUsNENBQTRDOzs7OztJQUM1QyxtREFBd0M7Ozs7O0lBS3RDLDZDQUEwQzs7Ozs7SUFDMUMscUNBQTJCOzs7OztJQUMzQix1Q0FBNEI7Ozs7O0lBQzVCLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZnJvbSwgU3Vic2NyaXB0aW9uLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgdG9BcnJheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJy4vdHlwZWFoZWFkLW1hdGNoLmNsYXNzJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbmZpZyB9IGZyb20gJy4vdHlwZWFoZWFkLmNvbmZpZyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IFR5cGVhaGVhZE9yZGVyIH0gZnJvbSAnLi90eXBlYWhlYWQtb3JkZXIuY2xhc3MnO1xuaW1wb3J0IHsgVHlwZWFoZWFkT3B0aW9uSXRlbUNvbnRleHQsIFR5cGVhaGVhZE9wdGlvbkxpc3RDb250ZXh0IH0gZnJvbSAnLi9tb2RlbHMnO1xuXG50eXBlIFR5cGVhaGVhZE9wdGlvbiA9IHN0cmluZyB8IHtba2V5IGluIHN0cmluZyB8IG51bWJlcl06IGFueX07XG50eXBlIFR5cGVhaGVhZCA9IFR5cGVhaGVhZE9wdGlvbltdIHwgT2JzZXJ2YWJsZTxUeXBlYWhlYWRPcHRpb25bXT47XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0eXBlYWhlYWRdJyxcbiAgZXhwb3J0QXM6ICdicy10eXBlYWhlYWQnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF0nOiAnYWN0aXZlRGVzY2VuZGFudCcsXG4gICAgJ1thdHRyLmFyaWEtYXJpYS1vd25zXSc6ICdpc09wZW4gPyB0aGlzLl9jb250YWluZXIucG9wdXBJZCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWFyaWEtZXhwYW5kZWRdJzogJ2lzT3BlbicsXG4gICAgJ1thdHRyLmFyaWEtYXV0b2NvbXBsZXRlXSc6ICdsaXN0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIG9wdGlvbnMgc291cmNlLCBjYW4gYmUgQXJyYXkgb2Ygc3RyaW5ncywgb2JqZWN0cyBvclxuICAgKiBhbiBPYnNlcnZhYmxlIGZvciBleHRlcm5hbCBtYXRjaGluZyBwcm9jZXNzXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWQ6IFR5cGVhaGVhZDtcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgQElucHV0KCkgYWRhcHRpdmVQb3NpdGlvbjogYm9vbGVhbjtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIC8qKiBtaW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdhaXRNczogbnVtYmVyO1xuICAvKiogbWF4aW11bSBsZW5ndGggb2Ygb3B0aW9ucyBpdGVtcyBsaXN0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyMCAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zTGltaXQ6IG51bWJlcjtcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGRcbiAgICogdGhhdCBjb250YWlucyB0aGUgb3B0aW9ucyB2YWx1ZSwgd2UgdXNlIGFycmF5IGl0ZW0gYXMgb3B0aW9uIGluIGNhc2VcbiAgICogb2YgdGhpcyBmaWVsZCBpcyBtaXNzaW5nLiBTdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbkZpZWxkOiBzdHJpbmc7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkIHRoYXRcbiAgICogY29udGFpbnMgdGhlIGdyb3VwIHZhbHVlLCBtYXRjaGVzIGFyZSBncm91cGVkIGJ5IHRoaXMgZmllbGQgd2hlbiBzZXQuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRHcm91cEZpZWxkOiBzdHJpbmc7XG4gIC8qKiBVc2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3JkZXIgb2YgbWF0Y2hlcy4gV2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIGEgZmllbGQgZm9yIHNvcnRpbmcgaGFzIHRvIGJlIHNldCB1cC4gSW4gY2FzZSBvZiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBzdHJpbmcsXG4gICAqIGEgZmllbGQgZm9yIHNvcnRpbmcgaXMgYWJzZW50LiBUaGUgb3JkZXJpbmcgZGlyZWN0aW9uIGNvdWxkIGJlIGNoYW5nZWQgdG8gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcmRlckJ5OiBUeXBlYWhlYWRPcmRlcjtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSBvZiB0eXBlYWhlYWQgYXR0cmlidXRlIGlzIE9ic2VydmFibGUgb2YgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8O6cGVyIHdvdWxkIG1hdGNoIHN1cGVyIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xuICAvKiogQ2FuIGJlIHVzZSB0byBzZWFyY2ggd29yZHMgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJzXG4gICAqICBmb3IgZXhhbXBsZSAnQyBhIGwgaSBmIG8gciBuIGkgYScgd2lsbCBtYXRjaCAnQ2FsaWZvcm5pYScuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTaW5nbGVXb3JkcyA9IHRydWU7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzID0gJyAnO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXG4gICAqIERlZmF1bHRzIHRvIHNpbXBsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlcyBleHBvc2VkIGFyZSBjYWxsZWQgaXRlbSBhbmQgaW5kZXg7XG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0PjtcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBvcHRpb25zIGxpc3QgdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlczogbWF0Y2hlcywgaXRlbVRlbXBsYXRlLCBxdWVyeVxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uc0xpc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHlwZWFoZWFkT3B0aW9uTGlzdENvbnRleHQ+O1xuICAvKiogc3BlY2lmaWVzIGlmIHR5cGVhaGVhZCBpcyBzY3JvbGxhYmxlICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPSA1O1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdCBvbiBibHVyICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBib29sZWFuO1xuICAvKiogZmlyZWQgd2hlbiBhbiBvcHRpb25zIGxpc3Qgd2FzIG9wZW5lZCBhbmQgdGhlIHVzZXIgY2xpY2tlZCBUYWJcbiAgICogSWYgYSB2YWx1ZSBlcXVhbCB0cnVlLCBpdCB3aWxsIGJlIGNob3NlbiBmaXJzdCBvciBhY3RpdmUgaXRlbSBpbiB0aGUgbGlzdFxuICAgKiBJZiB2YWx1ZSBlcXVhbCBmYWxzZSwgaXQgd2lsbCBiZSBjaG9zZW4gYW4gYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3Qgb3Igbm90aGluZ1xuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcbiAgLyoqIG1ha2VzIGFjdGl2ZSBmaXJzdCBpdGVtIGluIGEgbGlzdCAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRJc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XG4gIC8qKiBmaXJlZCB3aGVuICdidXN5JyBzdGF0ZSBvZiB0aGlzIGNvbXBvbmVudCB3YXMgY2hhbmdlZCxcbiAgICogZmlyZWQgb24gYXN5bmMgbW9kZSBvbmx5LCByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgb24gZXZlcnkga2V5IGV2ZW50IGFuZCByZXR1cm5zIHRydWVcbiAgICogaW4gY2FzZSBvZiBtYXRjaGVzIGFyZSBub3QgZGV0ZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWROb1Jlc3VsdHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZWFoZWFkTWF0Y2g+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIGJsdXIgZXZlbnQgb2NjdXJzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0eXBlYWhlYWQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHMgKi9cbiAgQElucHV0KCkgZHJvcHVwID0gZmFsc2U7XG5cbiAgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxuICAvKiogaWYgZmFsc2UgcmVzdHJpY3QgbW9kZWwgdmFsdWVzIHRvIHRoZSBvbmVzIHNlbGVjdGVkIGZyb20gdGhlIHBvcHVwIG9ubHkgd2lsbCBiZSBwcm92aWRlZCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHRoZSBmaXJzdCBtYXRjaCBhdXRvbWF0aWNhbGx5IHdpbGwgbm90IGJlIGZvY3VzZWQgYXMgeW91IHR5cGUgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzRmlyc3Q6Ym9vbGVhbjtcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI6YW55O1xuICAvKiogaWYgdHJ1ZSBhdXRvbWF0aWNhbGx5IHNlbGVjdCBhbiBpdGVtIHdoZW4gdGhlcmUgaXMgb25lIG9wdGlvbiB0aGF0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgdXNlciBpbnB1dCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xuICAvKiogIGlmIHRydWUgc2VsZWN0IHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWF0Y2ggb24gYmx1ciAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25CbHVyOmJvb2xlYW47XG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xuICAgIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c09uU2VsZWN0OmJvb2xlYW47XG5cbiAgYWN0aXZlRGVzY2VuZGFudDogc3RyaW5nO1xuICBpc09wZW4gPSBmYWxzZTtcbiAgbGlzdCA9ICdsaXN0JztcbiAgX2NvbnRhaW5lcjogVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50O1xuICBpc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICBjYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3QgPSBmYWxzZTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBrZXlVcEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXTtcbiAgcHJvdGVjdGVkIHBsYWNlbWVudCA9ICdib3R0b20gbGVmdCc7XG5cbiAgcHJpdmF0ZSBfdHlwZWFoZWFkOiBDb21wb25lbnRMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBjb25maWc6IFR5cGVhaGVhZENvbmZpZyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG5cbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBlbGVtZW50LFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIHJlbmRlcmVyXG4gICAgKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBUeXBlYWhlYWRDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsXG4gICAgICB7XG4gICAgICAgIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBjb25maWcuaGlkZVJlc3VsdHNPbkJsdXIsXG4gICAgICAgIHR5cGVhaGVhZENhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdDogY29uZmlnLmNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCxcbiAgICAgICAgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtOiBjb25maWcuc2VsZWN0Rmlyc3RJdGVtLFxuICAgICAgICB0eXBlYWhlYWRJc0ZpcnN0SXRlbUFjdGl2ZTogY29uZmlnLmlzRmlyc3RJdGVtQWN0aXZlLFxuICAgICAgICB0eXBlYWhlYWRNaW5MZW5ndGg6IGNvbmZpZy5taW5MZW5ndGgsXG4gICAgICAgIGFkYXB0aXZlUG9zaXRpb246IGNvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uLFxuICAgICAgICBpc0FuaW1hdGVkOiBjb25maWcuaXNBbmltYXRlZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0IHx8IDIwO1xuXG4gICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPVxuICAgICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IHZvaWQgMCA/IDEgOiB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aDtcblxuICAgIHRoaXMudHlwZWFoZWFkV2FpdE1zID0gdGhpcy50eXBlYWhlYWRXYWl0TXMgfHwgMDtcblxuICAgIC8vIGFzeW5jIHNob3VsZCBiZSBmYWxzZSBpbiBjYXNlIG9mIGFycmF5XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkQXN5bmMgPT09IHVuZGVmaW5lZCAmJiAhKGlzT2JzZXJ2YWJsZSh0aGlzLnR5cGVhaGVhZCkpKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLnR5cGVhaGVhZCkpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEFzeW5jKSB7XG4gICAgICB0aGlzLmFzeW5jQWN0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN5bmNBY3Rpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSW5wdXQoZTogYW55KTogdm9pZCB7XG4gICAgLy8gRm9yIGA8aW5wdXQ+YHMsIHVzZSB0aGUgYHZhbHVlYCBwcm9wZXJ0eS4gRm9yIG90aGVycyB0aGF0IGRvbid0IGhhdmUgYVxuICAgIC8vIGB2YWx1ZWAgKHN1Y2ggYXMgYDxzcGFuIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5gKSwgdXNlIGVpdGhlclxuICAgIC8vIGB0ZXh0Q29udGVudGAgb3IgYGlubmVyVGV4dGAgKGRlcGVuZGluZyBvbiB3aGljaCBvbmUgaXMgc3VwcG9ydGVkLCBpLmUuXG4gICAgLy8gRmlyZWZveCBvciBJRSkuXG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogZS50YXJnZXQudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgIDogZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy50eXBlYWhlYWRNaW5MZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZXNjXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVwXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXZBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZG93blxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLm5leHRBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAvLyBhZGQgc2V0VGltZW91dCB0byBmaXggaXNzdWUgIzUyNTFcbiAgICAvLyB0byBnZXQgYW5kIGVtaXQgdXBkYXRlZCB2YWx1ZSBpZiBpdCdzIGNoYW5nZWQgb24gZm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KHRoaXMuX2NvbnRhaW5lci5hY3RpdmUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250YWluZXIgJiYgdGhpcy5fbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlLFxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUsXG4gICAgICBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2godGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGVsKG1hdGNoOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XG4gICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpLnNldFZhbHVlKHZhbHVlU3RyKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl90eXBlYWhlYWRcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiBgJHt0aGlzLmRyb3B1cCA/ICd0b3AnIDogJ2JvdHRvbSd9IGxlZnRgfSlcbiAgICAgIC5zaG93KHtcbiAgICAgICAgdHlwZWFoZWFkUmVmOiB0aGlzLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICBkcm9wdXA6IHRoaXMuZHJvcHVwXG4gICAgICB9KTtcblxuICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1ciB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PdXRzaWRlQ2xpY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX3R5cGVhaGVhZC5pbnN0YW5jZTtcbiAgICB0aGlzLl9jb250YWluZXIucGFyZW50ID0gdGhpcztcbiAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG5cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuXG4gICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICB0aGlzLl9jb250YWluZXIuYWN0aXZlQ2hhbmdlRXZlbnQuc3Vic2NyaWJlKChhY3RpdmVJZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZURlc2NlbmRhbnQgPSBhY3RpdmVJZDtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XG4gICAgICB0aGlzLl90eXBlYWhlYWQuaGlkZSgpO1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25PdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZTxzdHJpbmc+KHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50eXBlYWhlYWQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkT3B0aW9uW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWU8c3RyaW5nPih0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgbWVyZ2VNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplUXVlcnkodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnJvbSh0aGlzLnR5cGVhaGVhZClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChvcHRpb246IFR5cGVhaGVhZE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbiAmJiB0aGlzLnRlc3RNYXRjaCh0aGlzLm5vcm1hbGl6ZU9wdGlvbihvcHRpb24pLCBub3JtYWxpemVkUXVlcnkpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvQXJyYXkoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkT3B0aW9uW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplT3B0aW9uKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcHRpb25WYWx1ZTogc3RyaW5nID0gZ2V0VmFsdWVGcm9tT2JqZWN0KFxuICAgICAgb3B0aW9uLFxuICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZFxuICAgICk7XG4gICAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbiA9IHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUob3B0aW9uVmFsdWUpXG4gICAgICA6IG9wdGlvblZhbHVlO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRPcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3JtYWxpemVRdWVyeSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIC8vIElmIHNpbmdsZVdvcmRzLCBicmVhayBtb2RlbCBoZXJlIHRvIG5vdCBiZSBkb2luZyBleHRyYSB3b3JrIG9uIGVhY2ggaXRlcmF0aW9uXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh2YWx1ZSlcbiAgICAgIDogdmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgIClcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRRdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZXN0TWF0Y2gobWF0Y2g6IHN0cmluZywgdGVzdDogc3RyaW5nW10gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgc3BhY2VMZW5ndGg6IG51bWJlcjtcblxuICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNwYWNlTGVuZ3RoID0gdGVzdC5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYWNlTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRlc3RbaV0ubGVuZ3RoID4gMCAmJiBtYXRjaC5pbmRleE9mKHRlc3RbaV0pIDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guaW5kZXhPZih0ZXN0KSA+PSAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXM6IFR5cGVhaGVhZE9wdGlvbltdKTogdm9pZCB7XG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzIHx8IFtdKTtcblxuICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XG5cbiAgICBpZiAoIXRoaXMuaGFzTWF0Y2hlcygpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQgJiYgdGhpcy5jYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAvLyBmaXg6IHJlbW92ZSB1c2FnZSBvZiBuZ0NvbnRyb2wgaW50ZXJuYWxzXG4gICAgICBjb25zdCBfY29udHJvbFZhbHVlID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgICA6IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpIHx8ICcnO1xuXG4gICAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG4gICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBfY29udHJvbFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xuICAgICAgICA/IHRva2VuaXplKFxuICAgICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xuICAgICAgICApXG4gICAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkT3B0aW9uW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaW1pdGVkID0gb3B0aW9ucy5zbGljZSgwLCB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCk7XG4gICAgY29uc3Qgc29ydGVkID0gIXRoaXMudHlwZWFoZWFkT3JkZXJCeSA/IGxpbWl0ZWQgOiB0aGlzLm9yZGVyTWF0Y2hlcyhsaW1pdGVkKTtcblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpIHtcbiAgICAgIGxldCBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XG5cbiAgICAgIC8vIGV4dHJhY3QgYWxsIGdyb3VwIG5hbWVzXG4gICAgICBjb25zdCBncm91cHMgPSBzb3J0ZWRcbiAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT5cbiAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcigodjogc3RyaW5nLCBpOiBudW1iZXIsIGE6IHN0cmluZ1tdKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG4gICAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXA6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBhZGQgZ3JvdXAgaGVhZGVyIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcy5wdXNoKG5ldyBUeXBlYWhlYWRNYXRjaChncm91cCwgZ3JvdXAsIHRydWUpKTtcblxuICAgICAgICAvLyBhZGQgZWFjaCBpdGVtIG9mIGdyb3VwIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuY29uY2F0KFxuICAgICAgICAgIHNvcnRlZFxuICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+XG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkgPT09IGdyb3VwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE9wdGlvbikgPT5cbiAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBzb3J0ZWQubWFwKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXG4gICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9yZGVyTWF0Y2hlcyhvcHRpb25zOiBUeXBlYWhlYWRPcHRpb25bXSk6IFR5cGVhaGVhZE9wdGlvbltdIHtcbiAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRPcmRlckJ5ICE9PSBudWxsXG4gICAgICAmJiB0aGlzLnR5cGVhaGVhZE9yZGVyQnkgIT09IHVuZGVmaW5lZFxuICAgICAgJiYgdHlwZW9mIHRoaXMudHlwZWFoZWFkT3JkZXJCeSA9PT0gJ29iamVjdCdcbiAgICAgICYmIE9iamVjdC5rZXlzKHRoaXMudHlwZWFoZWFkT3JkZXJCeSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignRmllbGQgYW5kIGRpcmVjdGlvbiBwcm9wZXJ0aWVzIGZvciB0eXBlYWhlYWRPcmRlckJ5IGhhdmUgdG8gYmUgc2V0IGFjY29yZGluZyB0byBkb2N1bWVudGF0aW9uIScpO1xuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCB7IGZpZWxkLCBkaXJlY3Rpb24gfSA9IHRoaXMudHlwZWFoZWFkT3JkZXJCeTtcblxuICAgIGlmICghZGlyZWN0aW9uIHx8ICEoZGlyZWN0aW9uID09PSAnYXNjJyB8fCBkaXJlY3Rpb24gPT09ICdkZXNjJykpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCd0eXBlYWhlYWRPcmRlckJ5IGRpcmVjdGlvbiBoYXMgdG8gZXF1YWwgXCJhc2NcIiBvciBcImRlc2NcIi4gUGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbi4nKTtcblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyBvcHRpb25zLnNvcnQoKSA6IG9wdGlvbnMuc29ydCgpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkIHx8IHR5cGVvZiBmaWVsZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCd0eXBlYWhlYWRPcmRlckJ5IGZpZWxkIGhhcyB0byBzZXQgYWNjb3JkaW5nIHRvIHRoZSBkb2N1bWVudGF0aW9uLicpO1xuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zb3J0KChhOiBUeXBlYWhlYWRPcHRpb24sIGI6IFR5cGVhaGVhZE9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nQSA9IGdldFZhbHVlRnJvbU9iamVjdChhLCBmaWVsZCk7XG4gICAgICBjb25zdCBzdHJpbmdCID0gZ2V0VmFsdWVGcm9tT2JqZWN0KGIsIGZpZWxkKTtcblxuICAgICAgaWYgKHN0cmluZ0EgPCBzdHJpbmdCKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2MnID8gLTEgOiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaW5nQSA+IHN0cmluZ0IpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyAxIDogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc01hdGNoZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMDtcbiAgfVxufVxuIl19