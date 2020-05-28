/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var TypeaheadDirective = /** @class */ (function () {
    function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
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
    TypeaheadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    TypeaheadDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        /** @type {?} */
        var value = e.target.value !== undefined
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isFocused = true;
        // add setTimeout to fix issue #5251
        // to get and emit updated value if it's changed on focus
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.typeaheadMinLength === 0) {
                _this.typeaheadLoading.emit(true);
                _this.keyUpEventEmitter.emit(_this.element.nativeElement.value || '');
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
        if (!this.container && this._matches.length === 0) {
            this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} match
     * @return {?}
     */
    TypeaheadDirective.prototype.changeModel = /**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
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
        function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            _this.onOutsideClick();
        }));
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
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
        function (activeId) {
            _this.activeDescendant = activeId;
            _this.changeDetection.markForCheck();
        }));
        this.isOpen = true;
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
            this.isOpen = false;
            this.changeDetection.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onOutsideClick = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions
            for (var _b = tslib_1.__values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._typeahead.dispose();
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.asyncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap((/**
         * @return {?}
         */
        function () { return _this.typeahead; })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.syncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var normalizedQuery = _this.normalizeQuery(value);
            return from(_this.typeahead)
                .pipe(filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            })), toArray());
        })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeOption = /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var optionValue = getValueFromObject(option, this.typeaheadOptionField);
        /** @type {?} */
        var normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeQuery = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // If singleWords, break model here to not be doing extra work on each iteration
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    TypeaheadDirective.prototype.testMatch = /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    function (match, test) {
        /** @type {?} */
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    TypeaheadDirective.prototype.finalizeAsyncCall = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
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
            var _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            var normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.prepareMatches = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        /** @type {?} */
        var sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
        if (this.typeaheadGroupField) {
            /** @type {?} */
            var matches_1 = [];
            // extract all group names
            /** @type {?} */
            var groups = sorted
                .map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return getValueFromObject(option, _this.typeaheadGroupField);
            }))
                .filter((/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */
            function (v, i, a) { return a.indexOf(v) === i; }));
            groups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                // add group header to array of matches
                matches_1.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(sorted
                    .filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField) === group;
                }))
                    .map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                })));
            }));
            this._matches = matches_1;
        }
        else {
            this._matches = sorted.map((
            // tslint:disable-next-line:no-any
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
            }));
        }
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.orderMatches = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
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
        var _a = this.typeaheadOrderBy, field = _a.field, direction = _a.direction;
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
        function (a, b) {
            /** @type {?} */
            var stringA = getValueFromObject(a, field);
            /** @type {?} */
            var stringB = getValueFromObject(b, field);
            if (stringA < stringB) {
                return direction === 'asc' ? -1 : 1;
            }
            if (stringA > stringB) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.hasMatches = /**
     * @protected
     * @return {?}
     */
    function () {
        return this._matches.length > 0;
    };
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
    TypeaheadDirective.ctorParameters = function () { return [
        { type: ComponentLoaderFactory },
        { type: TypeaheadConfig },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgControl },
        { type: Renderer2 },
        { type: ViewContainerRef }
    ]; };
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
    return TypeaheadDirective;
}());
export { TypeaheadDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFnQixZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDcEUsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU16RDtJQXlJRSw0QkFDRSxHQUEyQixFQUMzQixNQUF1QixFQUNmLGVBQWtDLEVBQ2xDLE9BQW1CLEVBQ25CLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQzNCLGdCQUFrQztRQUoxQixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFDbEMsWUFBTyxHQUFQLE9BQU8s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QUExbUJELElBMG1CQztTQWhtQlksa0JBQWtCOzs7Ozs7O0lBSTdCLHVDQUE4Qjs7Ozs7OztJQUs5QixnREFBNkM7Ozs7O0lBRTdDLDhDQUFtQzs7Ozs7SUFFbkMsd0NBQTRCOzs7OztJQUU1Qiw2Q0FBaUM7Ozs7O0lBRWpDLG1EQUF1Qzs7Ozs7OztJQUt2QyxrREFBc0M7Ozs7OztJQUl0QyxpREFBcUM7Ozs7Ozs7SUFLckMsOENBQTBDOzs7Ozs7O0lBSzFDLDRDQUEwQzs7Ozs7O0lBSTFDLCtDQUFrQzs7Ozs7O0lBSWxDLGtEQUFxQzs7Ozs7O0lBSXJDLHFEQUF1Qzs7Ozs7OztJQUt2Qyx1REFBMkM7Ozs7OztJQUkzQyxtREFBd0U7Ozs7OztJQUl4RSxpREFBc0U7Ozs7O0lBRXRFLGlEQUFxQzs7Ozs7SUFFckMsOERBQThDOzs7OztJQUU5Qyx3REFBNkM7Ozs7Ozs7SUFLN0Msc0RBQXlDOzs7OztJQUV6Qyx3REFBMkM7Ozs7OztJQUkzQyw4Q0FBeUQ7Ozs7OztJQUl6RCxnREFBMkQ7Ozs7O0lBRTNELCtDQUFpRTs7Ozs7SUFFakUsNkNBQStEOzs7OztJQUsvRCx1Q0FBMkI7Ozs7O0lBRzNCLG9DQUF3Qjs7Ozs7SUFnQnhCLDhDQUF5Qjs7SUFDekIsb0NBQWU7O0lBQ2Ysa0NBQWM7O0lBQ2Qsd0NBQXdDOztJQUN4QyxpREFBNEI7O0lBQzVCLHVDQUFrQjs7SUFDbEIsc0RBQWlDOzs7OztJQUdqQywrQ0FBdUU7Ozs7O0lBQ3ZFLHNDQUFxQzs7Ozs7SUFDckMsdUNBQW9DOzs7OztJQUVwQyx3Q0FBaUU7Ozs7O0lBQ2pFLDRDQUE0Qzs7Ozs7SUFDNUMsbURBQXdDOzs7OztJQUt0Qyw2Q0FBMEM7Ozs7O0lBQzFDLHFDQUEyQjs7Ozs7SUFDM0IsdUNBQTRCOzs7OztJQUM1QixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZyb20sIFN1YnNjcmlwdGlvbiwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIHRvQXJyYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC5jb25maWcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tT2JqZWN0LCBsYXRpbml6ZSwgdG9rZW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRPcmRlciB9IGZyb20gJy4vdHlwZWFoZWFkLW9yZGVyLmNsYXNzJztcbmltcG9ydCB7IFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0LCBUeXBlYWhlYWRPcHRpb25MaXN0Q29udGV4dCB9IGZyb20gJy4vbW9kZWxzJztcblxudHlwZSBUeXBlYWhlYWRPcHRpb24gPSBzdHJpbmcgfCB7W2tleSBpbiBzdHJpbmcgfCBudW1iZXJdOiBhbnl9O1xudHlwZSBUeXBlYWhlYWQgPSBUeXBlYWhlYWRPcHRpb25bXSB8IE9ic2VydmFibGU8VHlwZWFoZWFkT3B0aW9uW10+O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsXG4gIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWFjdGl2ZWRlc2NlbmRhbnRdJzogJ2FjdGl2ZURlc2NlbmRhbnQnLFxuICAgICdbYXR0ci5hcmlhLWFyaWEtb3duc10nOiAnaXNPcGVuID8gdGhpcy5fY29udGFpbmVyLnBvcHVwSWQgOiBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1hcmlhLWV4cGFuZGVkXSc6ICdpc09wZW4nLFxuICAgICdbYXR0ci5hcmlhLWF1dG9jb21wbGV0ZV0nOiAnbGlzdCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBvcHRpb25zIHNvdXJjZSwgY2FuIGJlIEFycmF5IG9mIHN0cmluZ3MsIG9iamVjdHMgb3JcbiAgICogYW4gT2JzZXJ2YWJsZSBmb3IgZXh0ZXJuYWwgbWF0Y2hpbmcgcHJvY2Vzc1xuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkOiBUeXBlYWhlYWQ7XG4gIC8qKiBtaW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0byBiZSBlbnRlcmVkIGJlZm9yZVxuICAgKiB0eXBlYWhlYWQga2lja3MtaW4uIFdoZW4gc2V0IHRvIDAsIHR5cGVhaGVhZCBzaG93cyBvbiBmb2N1cyB3aXRoIGZ1bGxcbiAgICogbGlzdCBvZiBvcHRpb25zIChsaW1pdGVkIGFzIG5vcm1hbCBieSB0eXBlYWhlYWRPcHRpb25zTGltaXQpXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRNaW5MZW5ndGg6IG51bWJlciA9IHZvaWQgMDtcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIEBJbnB1dCgpIGFkYXB0aXZlUG9zaXRpb246IGJvb2xlYW47XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogbWluaW1hbCB3YWl0IHRpbWUgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXIgdHlwZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pbiAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXYWl0TXM6IG51bWJlcjtcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0OiBudW1iZXI7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZCB0aGF0XG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkR3JvdXBGaWVsZDogc3RyaW5nO1xuICAvKiogVXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIG9yZGVyIG9mIG1hdGNoZXMuIFdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBhIGZpZWxkIGZvciBzb3J0aW5nIGhhcyB0byBiZSBzZXQgdXAuIEluIGNhc2Ugb2Ygb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nLFxuICAgKiBhIGZpZWxkIGZvciBzb3J0aW5nIGlzIGFic2VudC4gVGhlIG9yZGVyaW5nIGRpcmVjdGlvbiBjb3VsZCBiZSBjaGFuZ2VkIHRvIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3JkZXJCeTogVHlwZWFoZWFkT3JkZXI7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2Ugb2YgdHlwZWFoZWFkIGF0dHJpYnV0ZSBpcyBPYnNlcnZhYmxlIG9mIGFycmF5LlxuICAgKiBJZiB0cnVlIC0gbG9hZGluZyBvZiBvcHRpb25zIHdpbGwgYmUgYXN5bmMsIG90aGVyd2lzZSAtIHN5bmMuXG4gICAqIHRydWUgbWFrZSBzZW5zZSBpZiBvcHRpb25zIGFycmF5IGlzIGxhcmdlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkQXN5bmM6IGJvb2xlYW4gPSB2b2lkIDA7XG4gIC8qKiBtYXRjaCBsYXRpbiBzeW1ib2xzLlxuICAgKiBJZiB0cnVlIHRoZSB3b3JkIHPDunBlciB3b3VsZCBtYXRjaCBzdXBlciBhbmQgdmljZSB2ZXJzYS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZExhdGluaXplID0gdHJ1ZTtcbiAgLyoqIENhbiBiZSB1c2UgdG8gc2VhcmNoIHdvcmRzIGJ5IGluc2VydGluZyBhIHNpbmdsZSB3aGl0ZSBzcGFjZSBiZXR3ZWVuIGVhY2ggY2hhcmFjdGVyc1xuICAgKiAgZm9yIGV4YW1wbGUgJ0MgYSBsIGkgZiBvIHIgbiBpIGEnIHdpbGwgbWF0Y2ggJ0NhbGlmb3JuaWEnLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2luZ2xlV29yZHMgPSB0cnVlO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBicmVhayB3b3Jkcy4gRGVmYXVsdHMgdG8gc3BhY2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyA9ICcgJztcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgd29yZCBkZWxpbWl0ZXIgdG8gbWF0Y2ggZXhhY3QgcGhyYXNlLlxuICAgKiBEZWZhdWx0cyB0byBzaW1wbGUgYW5kIGRvdWJsZSBxdW90ZXMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzID0gJ1xcJ1wiJztcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXMgZXhwb3NlZCBhcmUgY2FsbGVkIGl0ZW0gYW5kIGluZGV4O1xuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUeXBlYWhlYWRPcHRpb25JdGVtQ29udGV4dD47XG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3B0aW9ucyBsaXN0IHRlbXBsYXRlLlxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcbiAgICovXG4gIEBJbnB1dCgpIG9wdGlvbnNMaXN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPFR5cGVhaGVhZE9wdGlvbkxpc3RDb250ZXh0PjtcbiAgLyoqIHNwZWNpZmllcyBpZiB0eXBlYWhlYWQgaXMgc2Nyb2xsYWJsZSAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAvKiogc3BlY2lmaWVzIG51bWJlciBvZiBvcHRpb25zIHRvIHNob3cgaW4gc2Nyb2xsIHZpZXcgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ID0gNTtcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHQgb24gYmx1ciAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogYm9vbGVhbjtcbiAgLyoqIGZpcmVkIHdoZW4gYW4gb3B0aW9ucyBsaXN0IHdhcyBvcGVuZWQgYW5kIHRoZSB1c2VyIGNsaWNrZWQgVGFiXG4gICAqIElmIGEgdmFsdWUgZXF1YWwgdHJ1ZSwgaXQgd2lsbCBiZSBjaG9zZW4gZmlyc3Qgb3IgYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICogSWYgdmFsdWUgZXF1YWwgZmFsc2UsIGl0IHdpbGwgYmUgY2hvc2VuIGFuIGFjdGl2ZSBpdGVtIGluIHRoZSBsaXN0IG9yIG5vdGhpbmdcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSA9IHRydWU7XG4gIC8qKiBtYWtlcyBhY3RpdmUgZmlyc3QgaXRlbSBpbiBhIGxpc3QgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkSXNGaXJzdEl0ZW1BY3RpdmUgPSB0cnVlO1xuICAvKiogZmlyZWQgd2hlbiAnYnVzeScgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgd2FzIGNoYW5nZWQsXG4gICAqIGZpcmVkIG9uIGFzeW5jIG1vZGUgb25seSwgcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIG9uIGV2ZXJ5IGtleSBldmVudCBhbmQgcmV0dXJucyB0cnVlXG4gICAqIGluIGNhc2Ugb2YgbWF0Y2hlcyBhcmUgbm90IGRldGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkTm9SZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgd2hlbiBvcHRpb24gd2FzIHNlbGVjdGVkLCByZXR1cm4gb2JqZWN0IHdpdGggZGF0YSBvZiB0aGlzIG9wdGlvbiAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xuICAvKiogZmlyZWQgd2hlbiBibHVyIGV2ZW50IG9jY3Vycy4gcmV0dXJucyB0aGUgYWN0aXZlIGl0ZW0gKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZWFoZWFkTWF0Y2g+KCk7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzICovXG4gIEBJbnB1dCgpIGRyb3B1cCA9IGZhbHNlO1xuXG4gIC8vIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgLyoqIGlmIGZhbHNlIHJlc3RyaWN0IG1vZGVsIHZhbHVlcyB0byB0aGUgb25lcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cCBvbmx5IHdpbGwgYmUgcHJvdmlkZWQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEVkaXRhYmxlOmJvb2xlYW47XG4gIC8qKiBpZiBmYWxzZSB0aGUgZmlyc3QgbWF0Y2ggYXV0b21hdGljYWxseSB3aWxsIG5vdCBiZSBmb2N1c2VkIGFzIHlvdSB0eXBlICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c0ZpcnN0OmJvb2xlYW47XG4gIC8qKiBmb3JtYXQgdGhlIG5nLW1vZGVsIHJlc3VsdCBhZnRlciBzZWxlY3Rpb24gKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZElucHV0Rm9ybWF0dGVyOmFueTtcbiAgLyoqIGlmIHRydWUgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gaXRlbSB3aGVuIHRoZXJlIGlzIG9uZSBvcHRpb24gdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHVzZXIgaW5wdXQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uRXhhY3Q6Ym9vbGVhbjtcbiAgLyoqICBpZiB0cnVlIHNlbGVjdCB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIG1hdGNoIG9uIGJsdXIgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uQmx1cjpib29sZWFuO1xuICAvKiogIGlmIGZhbHNlIGRvbid0IGZvY3VzIHRoZSBpbnB1dCBlbGVtZW50IHRoZSB0eXBlYWhlYWQgZGlyZWN0aXZlIGlzIGFzc29jaWF0ZWQgd2l0aCBvbiBzZWxlY3Rpb24gKi9cbiAgICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNPblNlbGVjdDpib29sZWFuO1xuXG4gIGFjdGl2ZURlc2NlbmRhbnQ6IHN0cmluZztcbiAgaXNPcGVuID0gZmFsc2U7XG4gIGxpc3QgPSAnbGlzdCc7XG4gIF9jb250YWluZXI6IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudDtcbiAgaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IGZhbHNlO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgY2FuY2VsUmVxdWVzdE9uRm9jdXNMb3N0ID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcm90ZWN0ZWQga2V5VXBFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW107XG4gIHByb3RlY3RlZCBwbGFjZW1lbnQgPSAnYm90dG9tIGxlZnQnO1xuXG4gIHByaXZhdGUgX3R5cGVhaGVhZDogQ29tcG9uZW50TG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX291dHNpZGVDbGlja0xpc3RlbmVyOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgY29uZmlnOiBUeXBlYWhlYWRDb25maWcsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuXG4gICAgdGhpcy5fdHlwZWFoZWFkID0gY2lzLmNyZWF0ZUxvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgZWxlbWVudCxcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICByZW5kZXJlclxuICAgIClcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogVHlwZWFoZWFkQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLFxuICAgICAge1xuICAgICAgICB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogY29uZmlnLmhpZGVSZXN1bHRzT25CbHVyLFxuICAgICAgICB0eXBlYWhlYWRDYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3Q6IGNvbmZpZy5jYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3QsXG4gICAgICAgIHR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbTogY29uZmlnLnNlbGVjdEZpcnN0SXRlbSxcbiAgICAgICAgdHlwZWFoZWFkSXNGaXJzdEl0ZW1BY3RpdmU6IGNvbmZpZy5pc0ZpcnN0SXRlbUFjdGl2ZSxcbiAgICAgICAgdHlwZWFoZWFkTWluTGVuZ3RoOiBjb25maWcubWluTGVuZ3RoLFxuICAgICAgICBhZGFwdGl2ZVBvc2l0aW9uOiBjb25maWcuYWRhcHRpdmVQb3NpdGlvbixcbiAgICAgICAgaXNBbmltYXRlZDogY29uZmlnLmlzQW5pbWF0ZWRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCB8fCAyMDtcblxuICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID1cbiAgICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSB2b2lkIDAgPyAxIDogdGhpcy50eXBlYWhlYWRNaW5MZW5ndGg7XG5cbiAgICB0aGlzLnR5cGVhaGVhZFdhaXRNcyA9IHRoaXMudHlwZWFoZWFkV2FpdE1zIHx8IDA7XG5cbiAgICAvLyBhc3luYyBzaG91bGQgYmUgZmFsc2UgaW4gY2FzZSBvZiBhcnJheVxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEFzeW5jID09PSB1bmRlZmluZWQgJiYgIShpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKSkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYykge1xuICAgICAgdGhpcy5hc3luY0FjdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW5jQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbklucHV0KGU6IGFueSk6IHZvaWQge1xuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcbiAgICAvLyBgdmFsdWVgIChzdWNoIGFzIGA8c3BhbiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+YCksIHVzZSBlaXRoZXJcbiAgICAvLyBgdGV4dENvbnRlbnRgIG9yIGBpbm5lclRleHRgIChkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHN1cHBvcnRlZCwgaS5lLlxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxuICAgICAgICA6IGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGVzY1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1cFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmV2QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvd25cbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5uZXh0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGVudGVyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgLy8gYWRkIHNldFRpbWVvdXQgdG8gZml4IGlzc3VlICM1MjUxXG4gICAgLy8gdG8gZ2V0IGFuZCBlbWl0IHVwZGF0ZWQgdmFsdWUgaWYgaXQncyBjaGFuZ2VkIG9uIGZvY3VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRPbkJsdXIuZW1pdCh0aGlzLl9jb250YWluZXIuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29udGFpbmVyICYmIHRoaXMuX21hdGNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy50eXBlYWhlYWRPbkJsdXIuZW1pdChuZXcgVHlwZWFoZWFkTWF0Y2goXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSxcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlLFxuICAgICAgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgLy8gbm8gY29udGFpbmVyIC0gbm8gcHJvYmxlbXNcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSB8fCBldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICB0aGlzLm9uQmx1cigpO1xuICAgIH1cblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSB8fCBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlbChtYXRjaDogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XG4gICAgdGhpcy5uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodmFsdWVTdHIpO1xuICAgICh0aGlzLm5nQ29udHJvbC5jb250cm9sKS5zZXRWYWx1ZSh2YWx1ZVN0cik7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBnZXQgbWF0Y2hlcygpOiBUeXBlYWhlYWRNYXRjaFtdIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fdHlwZWFoZWFkXG4gICAgICAuYXR0YWNoKFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogYCR7dGhpcy5kcm9wdXAgPyAndG9wJyA6ICdib3R0b20nfSBsZWZ0YH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIHR5cGVhaGVhZFJlZjogdGhpcyxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgZHJvcHVwOiB0aGlzLmRyb3B1cFxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDAgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXIgfHwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3V0c2lkZUNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLl90eXBlYWhlYWQuaW5zdGFuY2U7XG4gICAgdGhpcy5fY29udGFpbmVyLnBhcmVudCA9IHRoaXM7XG4gICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmFjdGl2ZUNoYW5nZUV2ZW50LnN1YnNjcmliZSgoYWN0aXZlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVEZXNjZW5kYW50ID0gYWN0aXZlSWQ7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90eXBlYWhlYWQuaXNTaG93bikge1xuICAgICAgdGhpcy5fdHlwZWFoZWFkLmhpZGUoKTtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnNcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fdHlwZWFoZWFkLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWU8c3RyaW5nPih0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudHlwZWFoZWFkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE9wdGlvbltdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bmNBY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lPHN0cmluZz4odGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIG1lcmdlTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy50eXBlYWhlYWQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24gJiYgdGhpcy50ZXN0TWF0Y2godGhpcy5ub3JtYWxpemVPcHRpb24ob3B0aW9uKSwgbm9ybWFsaXplZFF1ZXJ5KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE9wdGlvbltdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZU9wdGlvbihvcHRpb246IFR5cGVhaGVhZE9wdGlvbik6IHN0cmluZyB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWU6IHN0cmluZyA9IGdldFZhbHVlRnJvbU9iamVjdChcbiAgICAgIG9wdGlvbixcbiAgICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGRcbiAgICApO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb24gPSB0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICA/IGxhdGluaXplKG9wdGlvblZhbHVlKVxuICAgICAgOiBvcHRpb25WYWx1ZTtcblxuICAgIHJldHVybiBub3JtYWxpemVkT3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm9ybWFsaXplUXVlcnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAvLyBJZiBzaW5nbGVXb3JkcywgYnJlYWsgbW9kZWwgaGVyZSB0byBub3QgYmUgZG9pbmcgZXh0cmEgd29yayBvbiBlYWNoIGl0ZXJhdGlvblxuICAgIGxldCBub3JtYWxpemVkUXVlcnk6IHN0cmluZyB8IHN0cmluZ1tdID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodmFsdWUpXG4gICAgICA6IHZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcblxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFjZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmluZGV4T2YodGVzdCkgPj0gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzOiBUeXBlYWhlYWRPcHRpb25bXSk6IHZvaWQge1xuICAgIHRoaXMucHJlcGFyZU1hdGNoZXMobWF0Y2hlcyB8fCBbXSk7XG5cbiAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XG4gICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdCghdGhpcy5oYXNNYXRjaGVzKCkpO1xuXG4gICAgaWYgKCF0aGlzLmhhc01hdGNoZXMoKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkICYmIHRoaXMuY2FuY2VsUmVxdWVzdE9uRm9jdXNMb3N0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZml4OiByZW1vdmUgdXNhZ2Ugb2YgbmdDb250cm9sIGludGVybmFsc1xuICAgICAgY29uc3QgX2NvbnRyb2xWYWx1ZSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAnJztcblxuICAgICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gX2NvbnRyb2xWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgICAgKVxuICAgICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVNYXRjaGVzKG9wdGlvbnM6IFR5cGVhaGVhZE9wdGlvbltdKTogdm9pZCB7XG4gICAgY29uc3QgbGltaXRlZCA9IG9wdGlvbnMuc2xpY2UoMCwgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQpO1xuICAgIGNvbnN0IHNvcnRlZCA9ICF0aGlzLnR5cGVhaGVhZE9yZGVyQnkgPyBsaW1pdGVkIDogdGhpcy5vcmRlck1hdGNoZXMobGltaXRlZCk7XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSB7XG4gICAgICBsZXQgbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gICAgICAvLyBleHRyYWN0IGFsbCBncm91cCBuYW1lc1xuICAgICAgY29uc3QgZ3JvdXBzID0gc29ydGVkXG4gICAgICAgIC5tYXAoKG9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpID0+XG4gICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKVxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoKHY6IHN0cmluZywgaTogbnVtYmVyLCBhOiBzdHJpbmdbXSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcblxuICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gYWRkIGdyb3VwIGhlYWRlciB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMucHVzaChuZXcgVHlwZWFoZWFkTWF0Y2goZ3JvdXAsIGdyb3VwLCB0cnVlKSk7XG5cbiAgICAgICAgLy8gYWRkIGVhY2ggaXRlbSBvZiBncm91cCB0byBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmNvbmNhdChcbiAgICAgICAgICBzb3J0ZWRcbiAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKSA9PlxuICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpID09PSBncm91cFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+XG4gICAgICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXRjaGVzID0gc29ydGVkLm1hcChcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcbiAgICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvcmRlck1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkT3B0aW9uW10pOiBUeXBlYWhlYWRPcHRpb25bXSB7XG4gICAgaWYgKCFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkT3JkZXJCeSAhPT0gbnVsbFxuICAgICAgJiYgdGhpcy50eXBlYWhlYWRPcmRlckJ5ICE9PSB1bmRlZmluZWRcbiAgICAgICYmIHR5cGVvZiB0aGlzLnR5cGVhaGVhZE9yZGVyQnkgPT09ICdvYmplY3QnXG4gICAgICAmJiBPYmplY3Qua2V5cyh0aGlzLnR5cGVhaGVhZE9yZGVyQnkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZpZWxkIGFuZCBkaXJlY3Rpb24gcHJvcGVydGllcyBmb3IgdHlwZWFoZWFkT3JkZXJCeSBoYXZlIHRvIGJlIHNldCBhY2NvcmRpbmcgdG8gZG9jdW1lbnRhdGlvbiEnKTtcblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgY29uc3QgeyBmaWVsZCwgZGlyZWN0aW9uIH0gPSB0aGlzLnR5cGVhaGVhZE9yZGVyQnk7XG5cbiAgICBpZiAoIWRpcmVjdGlvbiB8fCAhKGRpcmVjdGlvbiA9PT0gJ2FzYycgfHwgZGlyZWN0aW9uID09PSAnZGVzYycpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcigndHlwZWFoZWFkT3JkZXJCeSBkaXJlY3Rpb24gaGFzIHRvIGVxdWFsIFwiYXNjXCIgb3IgXCJkZXNjXCIuIFBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24uJyk7XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2MnID8gb3B0aW9ucy5zb3J0KCkgOiBvcHRpb25zLnNvcnQoKS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZCB8fCB0eXBlb2YgZmllbGQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcigndHlwZWFoZWFkT3JkZXJCeSBmaWVsZCBoYXMgdG8gc2V0IGFjY29yZGluZyB0byB0aGUgZG9jdW1lbnRhdGlvbi4nKTtcblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc29ydCgoYTogVHlwZWFoZWFkT3B0aW9uLCBiOiBUeXBlYWhlYWRPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZ0EgPSBnZXRWYWx1ZUZyb21PYmplY3QoYSwgZmllbGQpO1xuICAgICAgY29uc3Qgc3RyaW5nQiA9IGdldFZhbHVlRnJvbU9iamVjdChiLCBmaWVsZCk7XG5cbiAgICAgIGlmIChzdHJpbmdBIDwgc3RyaW5nQikge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnYXNjJyA/IC0xIDogMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmluZ0EgPiBzdHJpbmdCKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2MnID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNNYXRjaGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiJdfQ==