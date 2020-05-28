(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/sortable', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs'], factory) :
    (global = global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].sortable = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs));
}(this, (function (exports, core, common, forms, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DraggableItemService = /** @class */ (function () {
        function DraggableItemService() {
            this.onCapture = new rxjs.Subject();
        }
        /**
         * @param {?} item
         * @return {?}
         */
        DraggableItemService.prototype.dragStart = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.draggableItem = item;
        };
        /**
         * @return {?}
         */
        DraggableItemService.prototype.getItem = /**
         * @return {?}
         */
        function () {
            return this.draggableItem;
        };
        /**
         * @param {?} overZoneIndex
         * @param {?} newIndex
         * @return {?}
         */
        DraggableItemService.prototype.captureItem = /**
         * @param {?} overZoneIndex
         * @param {?} newIndex
         * @return {?}
         */
        function (overZoneIndex, newIndex) {
            if (this.draggableItem.overZoneIndex !== overZoneIndex) {
                this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
                this.draggableItem.overZoneIndex = overZoneIndex;
                this.onCapture.next(this.draggableItem);
                this.draggableItem = Object.assign({}, this.draggableItem, {
                    overZoneIndex: overZoneIndex,
                    i: newIndex
                });
            }
            return this.draggableItem;
        };
        /**
         * @return {?}
         */
        DraggableItemService.prototype.onCaptureItem = /**
         * @return {?}
         */
        function () {
            return this.onCapture;
        };
        DraggableItemService.decorators = [
            { type: core.Injectable }
        ];
        return DraggableItemService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DraggableItemService.prototype.draggableItem;
        /**
         * @type {?}
         * @private
         */
        DraggableItemService.prototype.onCapture;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var SortableComponent = /** @class */ (function () {
        function SortableComponent(transfer) {
            var _this = this;
            /**
             * class name for items wrapper
             */
            this.wrapperClass = '';
            /**
             * style object for items wrapper
             */
            this.wrapperStyle = {};
            /**
             * class name for item
             */
            this.itemClass = '';
            /**
             * style object for item
             */
            this.itemStyle = {};
            /**
             * class name for active item
             */
            this.itemActiveClass = '';
            /**
             * style object for active item
             */
            this.itemActiveStyle = {};
            /**
             * class name for placeholder
             */
            this.placeholderClass = '';
            /**
             * style object for placeholder
             */
            this.placeholderStyle = {};
            /**
             * placeholder item which will be shown if collection is empty
             */
            this.placeholderItem = '';
            /**
             * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
             *  Returns new items collection as a payload.
             */
            /* tslint:disable-next-line: no-any */
            this.onChange = new core.EventEmitter();
            this.showPlaceholder = false;
            this.activeItem = -1;
            /* tslint:disable-next-line: no-any */
            this.onTouched = Function.prototype;
            /* tslint:disable-next-line: no-any */
            this.onChanged = Function.prototype;
            this.transfer = transfer;
            this.currentZoneIndex = SortableComponent.globalZoneIndex++;
            this.transfer
                .onCaptureItem()
                .subscribe((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.onDrop(item); }));
        }
        Object.defineProperty(SortableComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._items = value;
                /** @type {?} */
                var out = this.items.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.initData; }));
                this.onChanged(out);
                this.onChange.emit(out);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        SortableComponent.prototype.onItemDragstart = /**
         * @param {?} event
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        function (event, item, i) {
            this.initDragstartEvent(event);
            this.onTouched();
            this.transfer.dragStart({
                event: event,
                item: item,
                i: i,
                initialIndex: i,
                lastZoneIndex: this.currentZoneIndex,
                overZoneIndex: this.currentZoneIndex
            });
        };
        /**
         * @param {?} event
         * @param {?} i
         * @return {?}
         */
        SortableComponent.prototype.onItemDragover = /**
         * @param {?} event
         * @param {?} i
         * @return {?}
         */
        function (event, i) {
            if (!this.transfer.getItem()) {
                return;
            }
            event.preventDefault();
            /** @type {?} */
            var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
            /* tslint:disable-next-line: no-any */
            /** @type {?} */
            var newArray = [];
            if (!this.items.length) {
                newArray = [dragItem.item];
            }
            else if (dragItem.i > i) {
                newArray = __spread(this.items.slice(0, i), [
                    dragItem.item
                ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
            }
            else {
                // this.draggedItem.i < i
                newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                    dragItem.item
                ], this.items.slice(i + 1));
            }
            this.items = newArray;
            dragItem.i = i;
            this.activeItem = i;
            this.updatePlaceholderState();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype.cancelEvent = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.transfer.getItem() || !event) {
                return;
            }
            event.preventDefault();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SortableComponent.prototype.onDrop = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item &&
                item.overZoneIndex !== this.currentZoneIndex &&
                item.lastZoneIndex === this.currentZoneIndex) {
                this.items = this.items.filter((/**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */
                function (x, i) { return i !== item.i; }));
                this.updatePlaceholderState();
            }
            this.resetActiveItem(undefined);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype.resetActiveItem = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.cancelEvent(event);
            this.activeItem = -1;
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        SortableComponent.prototype.registerOnChange = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            this.onChanged = callback;
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        SortableComponent.prototype.registerOnTouched = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            this.onTouched = callback;
        };
        /* tslint:disable-next-line: no-any */
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} value
         * @return {?}
         */
        SortableComponent.prototype.writeValue = /* tslint:disable-next-line: no-any */
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value) {
                /* tslint:disable-next-line: no-any */
                this.items = value.map((/**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */
                function (x, i) { return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                }); }));
            }
            else {
                this.items = [];
            }
            this.updatePlaceholderState();
        };
        /**
         * @return {?}
         */
        SortableComponent.prototype.updatePlaceholderState = /**
         * @return {?}
         */
        function () {
            this.showPlaceholder = !this._items.length;
        };
        /**
         * @param {?} isActive
         * @return {?}
         */
        SortableComponent.prototype.getItemStyle = /**
         * @param {?} isActive
         * @return {?}
         */
        function (isActive) {
            return isActive
                ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
                : this.itemStyle;
        };
        // tslint:disable-next-line
        // tslint:disable-next-line
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype.initDragstartEvent = 
        // tslint:disable-next-line
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // it is necessary for mozilla
            // data type should be 'Text' instead of 'text/plain' to keep compatibility
            // with IE
            event.dataTransfer.setData('Text', 'placeholder');
        };
        SortableComponent.globalZoneIndex = 0;
        SortableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-sortable',
                        exportAs: 'bs-sortable',
                        template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return SortableComponent; })),
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        SortableComponent.ctorParameters = function () { return [
            { type: DraggableItemService }
        ]; };
        SortableComponent.propDecorators = {
            fieldName: [{ type: core.Input }],
            wrapperClass: [{ type: core.Input }],
            wrapperStyle: [{ type: core.Input }],
            itemClass: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            itemActiveClass: [{ type: core.Input }],
            itemActiveStyle: [{ type: core.Input }],
            placeholderClass: [{ type: core.Input }],
            placeholderStyle: [{ type: core.Input }],
            placeholderItem: [{ type: core.Input }],
            itemTemplate: [{ type: core.Input }],
            onChange: [{ type: core.Output }]
        };
        return SortableComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SortableComponent.globalZoneIndex;
        /**
         * field name if input array consists of objects
         * @type {?}
         */
        SortableComponent.prototype.fieldName;
        /**
         * class name for items wrapper
         * @type {?}
         */
        SortableComponent.prototype.wrapperClass;
        /**
         * style object for items wrapper
         * @type {?}
         */
        SortableComponent.prototype.wrapperStyle;
        /**
         * class name for item
         * @type {?}
         */
        SortableComponent.prototype.itemClass;
        /**
         * style object for item
         * @type {?}
         */
        SortableComponent.prototype.itemStyle;
        /**
         * class name for active item
         * @type {?}
         */
        SortableComponent.prototype.itemActiveClass;
        /**
         * style object for active item
         * @type {?}
         */
        SortableComponent.prototype.itemActiveStyle;
        /**
         * class name for placeholder
         * @type {?}
         */
        SortableComponent.prototype.placeholderClass;
        /**
         * style object for placeholder
         * @type {?}
         */
        SortableComponent.prototype.placeholderStyle;
        /**
         * placeholder item which will be shown if collection is empty
         * @type {?}
         */
        SortableComponent.prototype.placeholderItem;
        /**
         * used to specify a custom item template. Template variables: item and index;
         * @type {?}
         */
        SortableComponent.prototype.itemTemplate;
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         * @type {?}
         */
        SortableComponent.prototype.onChange;
        /** @type {?} */
        SortableComponent.prototype.showPlaceholder;
        /** @type {?} */
        SortableComponent.prototype.activeItem;
        /** @type {?} */
        SortableComponent.prototype.onTouched;
        /** @type {?} */
        SortableComponent.prototype.onChanged;
        /**
         * @type {?}
         * @private
         */
        SortableComponent.prototype.transfer;
        /**
         * @type {?}
         * @private
         */
        SortableComponent.prototype.currentZoneIndex;
        /**
         * @type {?}
         * @private
         */
        SortableComponent.prototype._items;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SortableModule = /** @class */ (function () {
        function SortableModule() {
        }
        /**
         * @return {?}
         */
        SortableModule.forRoot = /**
         * @return {?}
         */
        function () {
            return { ngModule: SortableModule, providers: [DraggableItemService] };
        };
        SortableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SortableComponent],
                        imports: [common.CommonModule],
                        exports: [SortableComponent]
                    },] }
        ];
        return SortableModule;
    }());

    exports.DraggableItemService = DraggableItemService;
    exports.SortableComponent = SortableComponent;
    exports.SortableModule = SortableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-sortable.umd.js.map
