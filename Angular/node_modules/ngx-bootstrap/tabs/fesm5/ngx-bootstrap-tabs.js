import { Directive, ViewContainerRef, Input, Injectable, Component, Renderer2, ElementRef, HostBinding, EventEmitter, Output, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /* tslint:disable-next-line:no-any */
        /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());
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
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
        /**
         * aria label for tab list
         */
        this.ariaLabel = 'Tabs';
    }
    TabsetConfig.decorators = [
        { type: Injectable }
    ];
    return TabsetConfig;
}());
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
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /* tslint:disable-next-line: cyclomatic-complexity */
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.keyNavActions = /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */
            var currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            var nextTab = void 0;
            /** @type {?} */
            var shift = 1;
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
            var previousTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
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
            var firstTab = void 0;
            /** @type {?} */
            var shift = 0;
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
            var lastTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
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
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: Input }],
        justified: [{ type: Input }],
        type: [{ type: Input }],
        clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
    };
    return TabsetComponent;
}());
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
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
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
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
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
            function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "ariaLabelledby", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id ? this.id + "-link" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'tab, [tab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return TabDirective;
}());
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
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[tabHeading]' },] }
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: TabDirective }
    ]; };
    return TabHeadingDirective;
}());
if (false) {
    /** @type {?} */
    TabHeadingDirective.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
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
    return TabsModule;
}());

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
