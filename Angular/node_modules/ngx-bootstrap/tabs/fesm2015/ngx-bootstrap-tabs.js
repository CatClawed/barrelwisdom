import { Directive, ViewContainerRef, Input, Injectable, Component, Renderer2, ElementRef, HostBinding, EventEmitter, Output, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgTranscludeDirective {
    /**
     * @param {?} viewRef
     */
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    /* tslint:disable-next-line:no-any */
    /**
     * @return {?}
     */
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTransclude]'
            },] }
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NgTranscludeDirective.propDecorators = {
    ngTransclude: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgTranscludeDirective.prototype.viewRef;
    /**
     * @type {?}
     * @protected
     */
    NgTranscludeDirective.prototype._viewRef;
    /**
     * @type {?}
     * @protected
     */
    NgTranscludeDirective.prototype._ngTransclude;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsetConfig {
    constructor() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
        /**
         * aria label for tab list
         */
        this.ariaLabel = 'Tabs';
    }
}
TabsetConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * provides default navigation context class: 'tabs' or 'pills'
     * @type {?}
     */
    TabsetConfig.prototype.type;
    /**
     * aria label for tab list
     * @type {?}
     */
    TabsetConfig.prototype.ariaLabel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
class TabsetComponent {
    /**
     * @param {?} config
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    /**
     * if true tabs will be placed vertically
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    }
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    removeTab(tab, options = { reselect: true, emit: true }) {
        /** @type {?} */
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    }
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    keyNavActions(event, index) {
        /** @type {?} */
        const list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */
            const currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            let nextTab;
            /** @type {?} */
            let shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            /** @type {?} */
            let previousTab;
            /** @type {?} */
            let shift = 1;
            /** @type {?} */
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            /** @type {?} */
            let firstTab;
            /** @type {?} */
            let shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            /** @type {?} */
            let lastTab;
            /** @type {?} */
            let shift = 1;
            /** @type {?} */
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            const prevIndex = index - step;
            /** @type {?} */
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @protected
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified,
            [`nav-${this.type}`]: true
        };
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
            }] }
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: TabsetConfig },
    { type: Renderer2 },
    { type: ElementRef }
];
TabsetComponent.propDecorators = {
    vertical: [{ type: Input }],
    justified: [{ type: Input }],
    type: [{ type: Input }],
    clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
};
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /**
     * aria label for tab list
     * @type {?}
     */
    TabsetComponent.prototype.ariaLabel;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype.isDestroyed;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._vertical;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._justified;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabDirective {
    /**
     * @param {?} tabset
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.selectTab = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /**
     * if set, will be added to the tab's class attribute. Multiple classes are supported.
     * @return {?}
     */
    get customClass() {
        return this._customClass;
    }
    /**
     * @param {?} customClass
     * @return {?}
     */
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            (cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            }));
        }
        this._customClass = customClass ? customClass.trim() : null;
        if (this.customClass) {
            this.customClass.split(' ').forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            (cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            }));
        }
    }
    /**
     * tab active state toggle
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
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'tab, [tab]' },] }
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
TabDirective.propDecorators = {
    heading: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    disabled: [{ type: Input }],
    removable: [{ type: Input }],
    customClass: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    selectTab: [{ type: Output }],
    deselect: [{ type: Output }],
    removed: [{ type: Output }],
    addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }]
};
if (false) {
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element
     * @type {?}
     */
    TabDirective.prototype.id;
    /**
     * if true tab can not be activated
     * @type {?}
     */
    TabDirective.prototype.disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.selectTab;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed, $event:Tab equals to instance of removed tab
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.role;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._active;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._customClass;
    /** @type {?} */
    TabDirective.prototype.elementRef;
    /** @type {?} */
    TabDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
class TabHeadingDirective {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[tabHeading]' },] }
];
/** @nocollapse */
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: TabDirective }
];
if (false) {
    /** @type {?} */
    TabHeadingDirective.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    }
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig };
//# sourceMappingURL=ngx-bootstrap-tabs.js.map
