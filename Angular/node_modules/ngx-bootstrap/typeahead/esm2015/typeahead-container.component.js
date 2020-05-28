/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-file-line-count max-line-length
import { ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren, Output, EventEmitter } from '@angular/core';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { latinize } from './typeahead-utils';
import { typeaheadAnimation } from './typeahead-animations';
/** @type {?} */
let nextWindowId = 0;
export class TypeaheadContainerComponent {
    /**
     * @param {?} positionService
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetectorRef
     */
    constructor(positionService, renderer, element, changeDetectorRef) {
        this.positionService = positionService;
        this.renderer = renderer;
        this.element = element;
        this.changeDetectorRef = changeDetectorRef;
        // tslint:disable-next-line: no-output-rename
        this.activeChangeEvent = new EventEmitter();
        this.isFocused = false;
        this.height = 0;
        this.popupId = `ngb-typeahead-${nextWindowId++}`;
        this._matches = [];
        this.isScrolledIntoView = (/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            /** @type {?} */
            const containerViewTop = this.ulElement.nativeElement.scrollTop;
            /** @type {?} */
            const containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            /** @type {?} */
            const elemTop = elem.offsetTop;
            /** @type {?} */
            const elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        });
        this.renderer.setAttribute(this.element.nativeElement, 'id', this.popupId);
        this.positionServiceSubscription = this.positionService.event$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                this.changeDetectorRef.detectChanges();
                return;
            }
            this.animationState = 'unanimated';
            this.changeDetectorRef.detectChanges();
        }));
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
    get typeaheadTemplateMethods() {
        /* tslint:disable:no-this-assignment */
        /** @type {?} */
        const _that = this;
        return {
            selectMatch: this.selectMatch.bind(_that),
            selectActive: this.selectActive.bind(_that),
            isActive: this.isActive.bind(_that)
        };
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active = active;
        this.activeChanged();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matches(value) {
        this.positionService.setOptions({
            modifiers: { flip: { enabled: this.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._matches = value;
        this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
        if (this.typeaheadScrollable) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.setScrollableMode();
            }));
        }
        if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
            this.active = this._matches[0];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
        }
        if (this._active && !this.typeaheadIsFirstItemActive) {
            /** @type {?} */
            const concurrency = this._matches.find((/**
             * @param {?} match
             * @return {?}
             */
            match => match.value === this._active.value));
            if (concurrency) {
                this.selectActive(concurrency);
                return;
            }
            this.active = null;
        }
    }
    /**
     * @return {?}
     */
    get isTopPosition() {
        return this.element.nativeElement.classList.contains('top');
    }
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    get optionsListTemplate() {
        return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this.parent ? this.parent.isAnimated : false;
    }
    /**
     * @return {?}
     */
    get adaptivePosition() {
        return this.parent ? this.parent.adaptivePosition : false;
    }
    /**
     * @return {?}
     */
    get typeaheadScrollable() {
        return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */
    get typeaheadOptionsInScrollableView() {
        return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */
    get typeaheadIsFirstItemActive() {
        return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
    }
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    get itemTemplate() {
        return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    selectActiveMatch(isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    }
    /**
     * @return {?}
     */
    activeChanged() {
        /** @type {?} */
        const index = this.matches.indexOf(this._active);
        this.activeChangeEvent.emit(`${this.popupId}-${index}`);
    }
    /**
     * @return {?}
     */
    prevActiveMatch() {
        /** @type {?} */
        const index = this.matches.indexOf(this._active);
        this.active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    }
    /**
     * @return {?}
     */
    nextActiveMatch() {
        /** @type {?} */
        const index = this.matches.indexOf(this._active);
        this.active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectActive(value) {
        this.isFocused = true;
        this.active = value;
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        /** @type {?} */
        let itemStr = match.value;
        /** @type {?} */
        let itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        /** @type {?} */
        let startIdx;
        /** @type {?} */
        let tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            /** @type {?} */
            const queryLen = query.length;
            for (let i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                            `${itemStr.substring(startIdx + tokenLen)}`;
                    itemStrHelper =
                        `${itemStrHelper.substring(0, startIdx)}        ${' '.repeat(tokenLen)}         ` +
                            `${itemStrHelper.substring(startIdx + tokenLen)}`;
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                        `${itemStr.substring(startIdx + tokenLen)}`;
            }
        }
        return itemStr;
    }
    /**
     * @return {?}
     */
    focusLost() {
        this.isFocused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isActive(value) {
        return this.active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout((/**
         * @return {?}
         */
        () => this.parent.typeaheadOnSelect.emit(value)), 0);
        return false;
    }
    /**
     * @return {?}
     */
    setScrollableMode() {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            /** @type {?} */
            const ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            /** @type {?} */
            const liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            /** @type {?} */
            const ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            /** @type {?} */
            const ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            /** @type {?} */
            const optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            /** @type {?} */
            const height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollPrevious(index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            const liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollNext(index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            const liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.positionServiceSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    scrollToBottom() {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @private
     * @return {?}
     */
    scrollToTop() {
        this.ulElement.nativeElement.scrollTop = 0;
    }
}
TypeaheadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'typeahead-container',
                template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{\n               matches: matches,\n               itemTemplate: itemTemplate || bsItemTemplate,\n               query: query,\n               $implicit: typeaheadTemplateMethods\n             }\">\n</ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\">\n  <span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      role=\"listbox\"\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [id]=\"popupId + '-' + i\"\n          role=\"option\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n          </ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [id]=\"popupId + '-' + i\"\n              role=\"option\"\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n        </ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                host: {
                    class: 'dropdown open bottom',
                    '[class.dropdown-menu]': 'isBs4',
                    '[style.height]': `isBs4 && needScrollbar ? guiHeight: 'auto'`,
                    '[style.visibility]': `'inherit'`,
                    '[class.dropup]': 'dropup',
                    style: 'position: absolute;display: block;',
                    '[attr.role]': `isBs4 ? 'listbox' : null `
                },
                animations: [typeaheadAnimation],
                styles: [`
    :host.dropdown {
      z-index: 1000;
    }

    :host.dropdown-menu, .dropdown-menu {
      overflow-y: auto;
      height: 100px;
    }
  `]
            }] }
];
/** @nocollapse */
TypeaheadContainerComponent.ctorParameters = () => [
    { type: PositioningService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TypeaheadContainerComponent.propDecorators = {
    activeChangeEvent: [{ type: Output, args: ['activeChange',] }],
    ulElement: [{ type: ViewChild, args: ['ulElement', { static: false },] }],
    liElements: [{ type: ViewChildren, args: ['liElements',] }],
    focusLost: [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] }]
};
if (false) {
    /** @type {?} */
    TypeaheadContainerComponent.prototype.activeChangeEvent;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.parent;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.query;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.isFocused;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.top;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.left;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.display;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.placement;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.dropup;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.guiHeight;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.needScrollbar;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.animationState;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.positionServiceSubscription;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.height;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.popupId;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadContainerComponent.prototype._active;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadContainerComponent.prototype._matches;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.ulElement;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.liElements;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.isScrolledIntoView;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.positionService;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.renderer;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TypeaheadContainerComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbInR5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEVBQ1QsU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFHeEQsWUFBWSxHQUFHLENBQUM7QUE2QnBCLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUEyQ3RDLFlBQ1UsZUFBbUMsRUFDbkMsUUFBbUIsRUFDcEIsT0FBbUIsRUFDbEIsaUJBQW9DO1FBSHBDLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7UUE3Q3RCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJL0QsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVVsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsWUFBTyxHQUFHLGlCQUFpQixZQUFZLEVBQUUsRUFBRSxDQUFDO1FBa0JsQyxhQUFRLEdBQXFCLEVBQUUsQ0FBQztRQTBSbEMsdUJBQWtCOzs7O1FBQUcsVUFB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QUFFO3lCQUd4QyxZQUFZLFNBQUMsWUFBWTt3QkF1TXpCLFlBQVksU0FBQyxZQUFZLGNBQ3pCLFlBQVksU0FBQyxNQUFNOzs7O0lBOU9wQix3REFBK0Q7O0lBRS9ELDZDQUEyQjs7SUFDM0IsNENBQXlCOztJQUN6QixnREFBa0I7O0lBQ2xCLDBDQUFZOztJQUNaLDJDQUFhOztJQUNiLDhDQUFnQjs7SUFDaEIsZ0RBQWtCOztJQUNsQiw2Q0FBZ0I7O0lBQ2hCLGdEQUFrQjs7SUFDbEIsb0RBQXVCOztJQUN2QixxREFBdUI7O0lBQ3ZCLGtFQUEwQzs7SUFDMUMsNkNBQVc7O0lBQ1gsOENBQTRDOzs7OztJQWlCNUMsOENBQWtDOzs7OztJQUNsQywrQ0FBMEM7Ozs7O0lBRTFDLGdEQUM4Qjs7Ozs7SUFFOUIsaURBQzBDOzs7OztJQW9SMUMseURBT0U7Ozs7O0lBeFJBLHNEQUEyQzs7Ozs7SUFDM0MsK0NBQTJCOztJQUMzQiw4Q0FBMEI7Ozs7O0lBQzFCLHdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgbWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgbGF0aW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJy4vdHlwZWFoZWFkLW1hdGNoLmNsYXNzJztcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0eXBlYWhlYWRBbmltYXRpb24gfSBmcm9tICcuL3R5cGVhaGVhZC1hbmltYXRpb25zJztcbmltcG9ydCB7IFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0LCBUeXBlYWhlYWRPcHRpb25MaXN0Q29udGV4dCwgVHlwZWFoZWFkVGVtcGxhdGVNZXRob2RzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5sZXQgbmV4dFdpbmRvd0lkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHlwZWFoZWFkLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZHJvcGRvd24gb3BlbiBib3R0b20nLFxuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAnaXNCczQnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6IGBpc0JzNCAmJiBuZWVkU2Nyb2xsYmFyID8gZ3VpSGVpZ2h0OiAnYXV0bydgLFxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiBgJ2luaGVyaXQnYCxcbiAgICAnW2NsYXNzLmRyb3B1cF0nOiAnZHJvcHVwJyxcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTtkaXNwbGF5OiBibG9jazsnLFxuICAgICdbYXR0ci5yb2xlXSc6IGBpc0JzNCA/ICdsaXN0Ym94JyA6IG51bGwgYFxuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QuZHJvcGRvd24ge1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA6aG9zdC5kcm9wZG93bi1tZW51LCAuZHJvcGRvd24tbWVudSB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIGBcbiAgXSxcbiAgYW5pbWF0aW9uczogW3R5cGVhaGVhZEFuaW1hdGlvbl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtcmVuYW1lXG4gIEBPdXRwdXQoJ2FjdGl2ZUNoYW5nZScpIGFjdGl2ZUNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xuICBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmc7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICB0b3A6IHN0cmluZztcbiAgbGVmdDogc3RyaW5nO1xuICBkaXNwbGF5OiBzdHJpbmc7XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBkcm9wdXA6IGJvb2xlYW47XG4gIGd1aUhlaWdodDogc3RyaW5nO1xuICBuZWVkU2Nyb2xsYmFyOiBib29sZWFuO1xuICBhbmltYXRpb25TdGF0ZTogc3RyaW5nO1xuICBwb3NpdGlvblNlcnZpY2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgaGVpZ2h0ID0gMDtcbiAgcG9wdXBJZCA9IGBuZ2ItdHlwZWFoZWFkLSR7bmV4dFdpbmRvd0lkKyt9YDtcblxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0JzMygpO1xuICB9XG5cbiAgZ2V0IHR5cGVhaGVhZFRlbXBsYXRlTWV0aG9kcygpOiBUeXBlYWhlYWRUZW1wbGF0ZU1ldGhvZHMge1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudCAqL1xuICAgIGNvbnN0IF90aGF0ID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RNYXRjaDogdGhpcy5zZWxlY3RNYXRjaC5iaW5kKF90aGF0KSxcbiAgICAgIHNlbGVjdEFjdGl2ZTogdGhpcy5zZWxlY3RBY3RpdmUuYmluZChfdGhhdCksXG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZS5iaW5kKF90aGF0KVxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogVHlwZWFoZWFkTWF0Y2g7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdsaUVsZW1lbnRzJylcbiAgcHJpdmF0ZSBsaUVsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMucG9wdXBJZCk7XG4gICAgdGhpcy5wb3NpdGlvblNlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLnBvc2l0aW9uU2VydmljZS5ldmVudCQuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuaXNUb3BQb3NpdGlvbiA/ICdhbmltYXRlZC11cCcgOiAnYW5pbWF0ZWQtZG93bic7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ3VuYW5pbWF0ZWQnO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBUeXBlYWhlYWRNYXRjaCkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLmFjdGl2ZUNoYW5nZWQoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcbiAgICB0aGlzLnBvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcbiAgICAgIG1vZGlmaWVyczogeyBmbGlwOiB7IGVuYWJsZWQ6IHRoaXMuYWRhcHRpdmVQb3NpdGlvbiB9IH0sXG4gICAgICBhbGxvd2VkUG9zaXRpb25zOiBbJ3RvcCcsICdib3R0b20nXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWF0Y2hlcyA9IHZhbHVlO1xuXG4gICAgdGhpcy5uZWVkU2Nyb2xsYmFyID0gdGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlICYmIHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPCB0aGlzLm1hdGNoZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYWJsZU1vZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZElzRmlyc3RJdGVtQWN0aXZlICYmIHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlICYmICF0aGlzLnR5cGVhaGVhZElzRmlyc3RJdGVtQWN0aXZlKSB7XG4gICAgICBjb25zdCBjb25jdXJyZW5jeSA9IHRoaXMuX21hdGNoZXMuZmluZChtYXRjaCA9PiBtYXRjaC52YWx1ZSA9PT0gdGhpcy5fYWN0aXZlLnZhbHVlKTtcblxuICAgICAgaWYgKGNvbmN1cnJlbmN5KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWN0aXZlKGNvbmN1cnJlbmN5KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aXZlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNUb3BQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b3AnKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IG9wdGlvbnNMaXN0VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8VHlwZWFoZWFkT3B0aW9uTGlzdENvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vcHRpb25zTGlzdFRlbXBsYXRlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaXNBbmltYXRlZCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGFkYXB0aXZlUG9zaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuYWRhcHRpdmVQb3NpdGlvbiA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHR5cGVhaGVhZFNjcm9sbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkU2Nyb2xsYWJsZSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgOiA1O1xuICB9XG5cbiAgZ2V0IHR5cGVhaGVhZElzRmlyc3RJdGVtQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZElzRmlyc3RJdGVtQWN0aXZlIDogdHJ1ZTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBpdGVtVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8VHlwZWFoZWFkT3B0aW9uSXRlbUNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRJdGVtVGVtcGxhdGUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBzZWxlY3RBY3RpdmVNYXRjaChpc0FjdGl2ZUl0ZW1DaGFuZ2VkPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5wYXJlbnQudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnBhcmVudC50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0gJiYgaXNBY3RpdmVJdGVtQ2hhbmdlZCkge1xuICAgICAgdGhpcy5zZWxlY3RNYXRjaCh0aGlzLl9hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLl9hY3RpdmUpO1xuICAgIHRoaXMuYWN0aXZlQ2hhbmdlRXZlbnQuZW1pdChgJHt0aGlzLnBvcHVwSWR9LSR7aW5kZXh9YCk7XG4gIH1cblxuICBwcmV2QWN0aXZlTWF0Y2goKTogdm9pZCB7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMubWF0Y2hlc1tcbiAgICAgIGluZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMVxuICAgIF07XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcbiAgICAgIHRoaXMucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGxQcmV2aW91cyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5tYXRjaGVzW1xuICAgICAgaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxXG4gICAgXTtcblxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XG4gICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTmV4dChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlO1xuICB9XG5cbiAgaGlnaGxpZ2h0KG1hdGNoOiBUeXBlYWhlYWRNYXRjaCwgcXVlcnk6IHN0cmluZ1tdIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgaXRlbVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XG4gICAgbGV0IGl0ZW1TdHJIZWxwZXI6IHN0cmluZyA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZShpdGVtU3RyKVxuICAgICAgOiBpdGVtU3RyKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBzdGFydElkeDogbnVtYmVyO1xuICAgIGxldCB0b2tlbkxlbjogbnVtYmVyO1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBxdWVyeUxlbjogbnVtYmVyID0gcXVlcnkubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeUxlbjsgaSArPSAxKSB7XG4gICAgICAgIC8vIHF1ZXJ5W2ldIGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXG4gICAgICAgIHN0YXJ0SWR4ID0gaXRlbVN0ckhlbHBlci5pbmRleE9mKHF1ZXJ5W2ldKTtcbiAgICAgICAgdG9rZW5MZW4gPSBxdWVyeVtpXS5sZW5ndGg7XG4gICAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xuICAgICAgICAgIGl0ZW1TdHIgPVxuICAgICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXG4gICAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xuICAgICAgICAgIGl0ZW1TdHJIZWxwZXIgPVxuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfSAgICAgICAgJHsnICcucmVwZWF0KHRva2VuTGVuKX0gICAgICAgICBgICtcbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHF1ZXJ5KSB7XG4gICAgICAvLyBxdWVyeSBpcyBhbHJlYWR5IGxhdGluaXplZCBhbmQgbG93ZXIgY2FzZVxuICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnkpO1xuICAgICAgdG9rZW5MZW4gPSBxdWVyeS5sZW5ndGg7XG4gICAgICBpZiAoc3RhcnRJZHggPj0gMCAmJiB0b2tlbkxlbiA+IDApIHtcbiAgICAgICAgaXRlbVN0ciA9XG4gICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXG4gICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVN0cjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgZm9jdXNMb3N0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBpc0FjdGl2ZSh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgPT09IHZhbHVlO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2godmFsdWU6IFR5cGVhaGVhZE1hdGNoLCBlOiBFdmVudCA9IHZvaWQgMCk6IGJvb2xlYW4ge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5jaGFuZ2VNb2RlbCh2YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudC50eXBlYWhlYWRPblNlbGVjdC5lbWl0KHZhbHVlKSwgMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRTY3JvbGxhYmxlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudWxFbGVtZW50KSB7XG4gICAgICB0aGlzLnVsRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzLmZpcnN0KSB7XG4gICAgICBjb25zdCB1bFN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IGxpU3R5bGVzID0gVXRpbHMuZ2V0U3R5bGVzKHRoaXMubGlFbGVtZW50cy5maXJzdC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddID8gdWxTdHlsZXNbJ3BhZGRpbmctYm90dG9tJ10gOiAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgIGNvbnN0IHVsUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLXRvcCddID8gdWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBwYXJzZUZsb2F0KChsaVN0eWxlcy5oZWlnaHQgPyBsaVN0eWxlcy5oZWlnaHQgOiAnMCcpXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ICogb3B0aW9uSGVpZ2h0O1xuICAgICAgdGhpcy5ndWlIZWlnaHQgPSBgJHtoZWlnaHQgKyB1bFBhZGRpbmdUb3AgKyB1bFBhZGRpbmdCb3R0b219cHhgO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgfVxuXG4gIHNjcm9sbFByZXZpb3VzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5saUVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSB0aGlzLmxpRWxlbWVudHMudG9BcnJheSgpW2luZGV4IC0gMV07XG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsTmV4dChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlFbGVtZW50cykge1xuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCArIDFdO1xuICAgICAgaWYgKGxpRWxlbWVudCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID1cbiAgICAgICAgICBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLVxuICAgICAgICAgIE51bWJlcih0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCkgK1xuICAgICAgICAgIE51bWJlcihsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25TZXJ2aWNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyVmlld1RvcDogbnVtYmVyID0gdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgY29udGFpbmVyVmlld0JvdHRvbSA9IGNvbnRhaW5lclZpZXdUb3AgKyBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBjb250YWluZXJWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBjb250YWluZXJWaWV3VG9wKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cbiJdfQ==