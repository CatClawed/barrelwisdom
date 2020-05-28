(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('chart.js'), require('rxjs'), require('lodash-es')) :
    typeof define === 'function' && define.amd ? define('ng2-charts', ['exports', '@angular/core', 'chart.js', 'rxjs', 'lodash-es'], factory) :
    (global = global || self, factory(global['ng2-charts'] = {}, global.ng.core, global.chart_js, global.rxjs, global._));
}(this, function (exports, core, chart_js, rxjs, lodashEs) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Generate colors by chart type
     * @param {?} chartType
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    function getColors(chartType, index, count) {
        if (chartType === 'pie' || chartType === 'doughnut') {
            return formatPieColors(generateColors(count));
        }
        if (chartType === 'polarArea') {
            return formatPolarAreaColors(generateColors(count));
        }
        if (chartType === 'line' || chartType === 'radar') {
            return formatLineColor(generateColor(index));
        }
        if (chartType === 'bar' || chartType === 'horizontalBar') {
            return formatBarColor(generateColor(index));
        }
        if (chartType === 'bubble') {
            return formatPieColors(generateColors(count));
        }
        if (chartType === 'scatter') {
            return formatPieColors(generateColors(count));
        }
        throw new Error("getColors - Unsupported chart type " + chartType);
    }
    /**
     * @param {?} colour
     * @param {?} alpha
     * @return {?}
     */
    function rgba(colour, alpha) {
        return 'rgba(' + colour.concat(alpha).join(',') + ')';
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatLineColor(colors) {
        return {
            backgroundColor: rgba(colors, 0.4),
            borderColor: rgba(colors, 1),
            pointBackgroundColor: rgba(colors, 1),
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: rgba(colors, 0.8)
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatBarColor(colors) {
        return {
            backgroundColor: rgba(colors, 0.6),
            borderColor: rgba(colors, 1),
            hoverBackgroundColor: rgba(colors, 0.8),
            hoverBorderColor: rgba(colors, 1)
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatPieColors(colors) {
        return {
            backgroundColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 0.6); })),
            borderColor: colors.map((/**
             * @return {?}
             */
            function () { return '#fff'; })),
            pointBackgroundColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 1); })),
            pointBorderColor: colors.map((/**
             * @return {?}
             */
            function () { return '#fff'; })),
            pointHoverBackgroundColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 1); })),
            pointHoverBorderColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 1); }))
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatPolarAreaColors(colors) {
        return {
            backgroundColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 0.6); })),
            borderColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 1); })),
            hoverBackgroundColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 0.8); })),
            hoverBorderColor: colors.map((/**
             * @param {?} color
             * @return {?}
             */
            function (color) { return rgba(color, 1); }))
        };
    }
    /**
     * @return {?}
     */
    function getRandomColor() {
        return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
    }
    /**
     * Generate colors for line|bar charts
     * @param {?} index
     * @return {?}
     */
    function generateColor(index) {
        return defaultColors[index] || getRandomColor();
    }
    /**
     * Generate colors for pie|doughnut charts
     * @param {?} count
     * @return {?}
     */
    function generateColors(count) {
        /** @type {?} */
        var colorsArr = new Array(count);
        for (var i = 0; i < count; i++) {
            colorsArr[i] = defaultColors[i] || getRandomColor();
        }
        return colorsArr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemeService = /** @class */ (function () {
        function ThemeService() {
            this.pColorschemesOptions = {};
            this.colorschemesOptions = new rxjs.BehaviorSubject({});
        }
        /**
         * @param {?} options
         * @return {?}
         */
        ThemeService.prototype.setColorschemesOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.pColorschemesOptions = options;
            this.colorschemesOptions.next(options);
        };
        /**
         * @return {?}
         */
        ThemeService.prototype.getColorschemesOptions = /**
         * @return {?}
         */
        function () {
            return this.pColorschemesOptions;
        };
        ThemeService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ThemeService.ctorParameters = function () { return []; };
        /** @nocollapse */ ThemeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(); }, token: ThemeService, providedIn: "root" });
        return ThemeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var UpdateType = {
        Default: 0,
        Update: 1,
        Refresh: 2,
    };
    UpdateType[UpdateType.Default] = 'Default';
    UpdateType[UpdateType.Update] = 'Update';
    UpdateType[UpdateType.Refresh] = 'Refresh';
    var BaseChartDirective = /** @class */ (function () {
        function BaseChartDirective(element, themeService) {
            this.element = element;
            this.themeService = themeService;
            this.options = {};
            this.chartClick = new core.EventEmitter();
            this.chartHover = new core.EventEmitter();
            this.old = {
                dataExists: false,
                dataLength: 0,
                datasetsExists: false,
                datasetsLength: 0,
                datasetsDataObjects: [],
                datasetsDataLengths: [],
                colorsExists: false,
                colors: [],
                labelsExist: false,
                labels: [],
                legendExists: false,
                legend: {},
            };
            this.subs = [];
        }
        /**
         * Register a plugin.
         */
        /**
         * Register a plugin.
         * @param {?} plugin
         * @return {?}
         */
        BaseChartDirective.registerPlugin = /**
         * Register a plugin.
         * @param {?} plugin
         * @return {?}
         */
        function (plugin) {
            chart_js.Chart.plugins.register(plugin);
        };
        /**
         * @param {?} plugin
         * @return {?}
         */
        BaseChartDirective.unregisterPlugin = /**
         * @param {?} plugin
         * @return {?}
         */
        function (plugin) {
            chart_js.Chart.plugins.unregister(plugin);
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ctx = this.element.nativeElement.getContext('2d');
            this.refresh();
            this.subs.push(this.themeService.colorschemesOptions.subscribe((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return _this.themeChanged(r); })));
        };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        BaseChartDirective.prototype.themeChanged = /**
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.refresh();
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.chart) {
                return;
            }
            /** @type {?} */
            var updateRequired = UpdateType.Default;
            /** @type {?} */
            var wantUpdate = (/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                updateRequired = x > updateRequired ? x : updateRequired;
            });
            if (!!this.data !== this.old.dataExists) {
                this.propagateDataToDatasets(this.data);
                this.old.dataExists = !!this.data;
                wantUpdate(UpdateType.Update);
            }
            if (this.data && this.data.length !== this.old.dataLength) {
                this.old.dataLength = this.data && this.data.length || 0;
                wantUpdate(UpdateType.Update);
            }
            if (!!this.datasets !== this.old.datasetsExists) {
                this.old.datasetsExists = !!this.datasets;
                wantUpdate(UpdateType.Update);
            }
            if (this.datasets && this.datasets.length !== this.old.datasetsLength) {
                this.old.datasetsLength = this.datasets && this.datasets.length || 0;
                wantUpdate(UpdateType.Update);
            }
            if (this.datasets && this.datasets.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return x.data !== _this.old.datasetsDataObjects[i]; })).length) {
                this.old.datasetsDataObjects = this.datasets.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.data; }));
                wantUpdate(UpdateType.Update);
            }
            if (this.datasets && this.datasets.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return x.data.length !== _this.old.datasetsDataLengths[i]; })).length) {
                this.old.datasetsDataLengths = this.datasets.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.data.length; }));
                wantUpdate(UpdateType.Update);
            }
            if (!!this.colors !== this.old.colorsExists) {
                this.old.colorsExists = !!this.colors;
                this.updateColors();
                wantUpdate(UpdateType.Update);
            }
            // This smells of inefficiency, might need to revisit this
            if (this.colors && this.colors.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return !_this.colorsEqual(x, _this.old.colors[i]); })).length) {
                this.old.colors = this.colors.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.copyColor(x); }));
                this.updateColors();
                wantUpdate(UpdateType.Update);
            }
            if (!!this.labels !== this.old.labelsExist) {
                this.old.labelsExist = !!this.labels;
                wantUpdate(UpdateType.Update);
            }
            if (this.labels && this.labels.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            function (x, i) { return !_this.labelsEqual(x, _this.old.labels[i]); })).length) {
                this.old.labels = this.labels.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.copyLabel(x); }));
                wantUpdate(UpdateType.Update);
            }
            if (!!this.options.legend !== this.old.legendExists) {
                this.old.legendExists = !!this.options.legend;
                wantUpdate(UpdateType.Refresh);
            }
            if (this.options.legend && this.options.legend.position !== this.old.legend.position) {
                this.old.legend.position = this.options.legend.position;
                wantUpdate(UpdateType.Refresh);
            }
            switch ((/** @type {?} */ (updateRequired))) {
                case UpdateType.Default:
                    break;
                case UpdateType.Update:
                    this.update();
                    break;
                case UpdateType.Refresh:
                    this.refresh();
                    break;
            }
        };
        /**
         * @param {?} a
         * @return {?}
         */
        BaseChartDirective.prototype.copyLabel = /**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            if (Array.isArray(a)) {
                return __spread(a);
            }
            return a;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        BaseChartDirective.prototype.labelsEqual = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return Array.isArray(a) === Array.isArray(b)
                && (Array.isArray(a) || a === b)
                && (!Array.isArray(a) || a.length === b.length)
                && (!Array.isArray(a) || a.filter((/**
                 * @param {?} x
                 * @param {?} i
                 * @return {?}
                 */
                function (x, i) { return x !== b[i]; })).length === 0);
        };
        /**
         * @param {?} a
         * @return {?}
         */
        BaseChartDirective.prototype.copyColor = /**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            /** @type {?} */
            var rc = {
                backgroundColor: a.backgroundColor,
                borderWidth: a.borderWidth,
                borderColor: a.borderColor,
                borderCapStyle: a.borderCapStyle,
                borderDash: a.borderDash,
                borderDashOffset: a.borderDashOffset,
                borderJoinStyle: a.borderJoinStyle,
                pointBorderColor: a.pointBorderColor,
                pointBackgroundColor: a.pointBackgroundColor,
                pointBorderWidth: a.pointBorderWidth,
                pointRadius: a.pointRadius,
                pointHoverRadius: a.pointHoverRadius,
                pointHitRadius: a.pointHitRadius,
                pointHoverBackgroundColor: a.pointHoverBackgroundColor,
                pointHoverBorderColor: a.pointHoverBorderColor,
                pointHoverBorderWidth: a.pointHoverBorderWidth,
                pointStyle: a.pointStyle,
                hoverBackgroundColor: a.hoverBackgroundColor,
                hoverBorderColor: a.hoverBorderColor,
                hoverBorderWidth: a.hoverBorderWidth,
            };
            return rc;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        BaseChartDirective.prototype.colorsEqual = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (!a !== !b) {
                return false;
            }
            return !a || a.backgroundColor === b.backgroundColor
                && (a.borderWidth === b.borderWidth)
                && (a.borderColor === b.borderColor)
                && (a.borderCapStyle === b.borderCapStyle)
                && (a.borderDash === b.borderDash)
                && (a.borderDashOffset === b.borderDashOffset)
                && (a.borderJoinStyle === b.borderJoinStyle)
                && (a.pointBorderColor === b.pointBorderColor)
                && (a.pointBackgroundColor === b.pointBackgroundColor)
                && (a.pointBorderWidth === b.pointBorderWidth)
                && (a.pointRadius === b.pointRadius)
                && (a.pointHoverRadius === b.pointHoverRadius)
                && (a.pointHitRadius === b.pointHitRadius)
                && (a.pointHoverBackgroundColor === b.pointHoverBackgroundColor)
                && (a.pointHoverBorderColor === b.pointHoverBorderColor)
                && (a.pointHoverBorderWidth === b.pointHoverBorderWidth)
                && (a.pointStyle === b.pointStyle)
                && (a.hoverBackgroundColor === b.hoverBackgroundColor)
                && (a.hoverBorderColor === b.hoverBorderColor)
                && (a.hoverBorderWidth === b.hoverBorderWidth);
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.updateColors = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.datasets.forEach((/**
             * @param {?} elm
             * @param {?} index
             * @return {?}
             */
            function (elm, index) {
                if (_this.colors && _this.colors[index]) {
                    Object.assign(elm, _this.colors[index]);
                }
                else {
                    Object.assign(elm, getColors(_this.chartType, index, elm.data.length), __assign({}, elm));
                }
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            /** @type {?} */
            var updateRequired = UpdateType.Default;
            /** @type {?} */
            var wantUpdate = (/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                updateRequired = x > updateRequired ? x : updateRequired;
            });
            // Check if the changes are in the data or datasets or labels or legend
            if (changes.hasOwnProperty('data') && changes.data.currentValue) {
                this.propagateDataToDatasets(changes.data.currentValue);
                wantUpdate(UpdateType.Update);
            }
            if (changes.hasOwnProperty('datasets') && changes.datasets.currentValue) {
                this.propagateDatasetsToData(changes.datasets.currentValue);
                wantUpdate(UpdateType.Update);
            }
            if (changes.hasOwnProperty('labels')) {
                if (this.chart) {
                    this.chart.data.labels = changes.labels.currentValue;
                }
                wantUpdate(UpdateType.Update);
            }
            if (changes.hasOwnProperty('legend')) {
                if (this.chart) {
                    this.chart.config.options.legend.display = changes.legend.currentValue;
                    this.chart.generateLegend();
                }
                wantUpdate(UpdateType.Update);
            }
            if (changes.hasOwnProperty('options')) {
                wantUpdate(UpdateType.Refresh);
            }
            switch ((/** @type {?} */ (updateRequired))) {
                case UpdateType.Update:
                    this.update();
                    break;
                case UpdateType.Refresh:
                case UpdateType.Default:
                    this.refresh();
                    break;
            }
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                this.chart.destroy();
                this.chart = void 0;
            }
            this.subs.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.unsubscribe(); }));
        };
        /**
         * @param {?=} duration
         * @param {?=} lazy
         * @return {?}
         */
        BaseChartDirective.prototype.update = /**
         * @param {?=} duration
         * @param {?=} lazy
         * @return {?}
         */
        function (duration, lazy) {
            if (this.chart) {
                return this.chart.update(duration, lazy);
            }
        };
        /**
         * @param {?} index
         * @param {?} hidden
         * @return {?}
         */
        BaseChartDirective.prototype.hideDataset = /**
         * @param {?} index
         * @param {?} hidden
         * @return {?}
         */
        function (index, hidden) {
            this.chart.getDatasetMeta(index).hidden = hidden;
            this.chart.update();
        };
        /**
         * @param {?} index
         * @return {?}
         */
        BaseChartDirective.prototype.isDatasetHidden = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            return this.chart.getDatasetMeta(index).hidden;
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.toBase64Image = /**
         * @return {?}
         */
        function () {
            return this.chart.toBase64Image();
        };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.getChartConfiguration = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var datasets = this.getDatasets();
            /** @type {?} */
            var options = Object.assign({}, this.options);
            if (this.legend === false) {
                options.legend = { display: false };
            }
            // hook for onHover and onClick events
            options.hover = options.hover || {};
            if (!options.hover.onHover) {
                options.hover.onHover = (/**
                 * @param {?} event
                 * @param {?} active
                 * @return {?}
                 */
                function (event, active) {
                    if (active && !active.length) {
                        return;
                    }
                    _this.chartHover.emit({ event: event, active: active });
                });
            }
            if (!options.onClick) {
                options.onClick = (/**
                 * @param {?=} event
                 * @param {?=} active
                 * @return {?}
                 */
                function (event, active) {
                    _this.chartClick.emit({ event: event, active: active });
                });
            }
            /** @type {?} */
            var mergedOptions = this.smartMerge(options, this.themeService.getColorschemesOptions());
            /** @type {?} */
            var chartConfig = {
                type: this.chartType,
                data: {
                    labels: this.labels || [],
                    datasets: datasets
                },
                plugins: this.plugins,
                options: mergedOptions,
            };
            return chartConfig;
        };
        /**
         * @param {?} ctx
         * @return {?}
         */
        BaseChartDirective.prototype.getChartBuilder = /**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx /*, data:any[], options:any*/) {
            /** @type {?} */
            var chartConfig = this.getChartConfiguration();
            return new chart_js.Chart(ctx, chartConfig);
        };
        /**
         * @param {?} options
         * @param {?} overrides
         * @param {?=} level
         * @return {?}
         */
        BaseChartDirective.prototype.smartMerge = /**
         * @param {?} options
         * @param {?} overrides
         * @param {?=} level
         * @return {?}
         */
        function (options, overrides, level) {
            var _this = this;
            if (level === void 0) { level = 0; }
            if (level === 0) {
                options = lodashEs.cloneDeep(options);
            }
            /** @type {?} */
            var keysToUpdate = Object.keys(overrides);
            keysToUpdate.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (Array.isArray(overrides[key])) {
                    /** @type {?} */
                    var arrayElements = options[key];
                    if (arrayElements) {
                        arrayElements.forEach((/**
                         * @param {?} r
                         * @return {?}
                         */
                        function (r) {
                            _this.smartMerge(r, overrides[key][0], level + 1);
                        }));
                    }
                }
                else if (typeof (overrides[key]) === 'object') {
                    if (!(key in options)) {
                        options[key] = {};
                    }
                    _this.smartMerge(options[key], overrides[key], level + 1);
                }
                else {
                    options[key] = overrides[key];
                }
            }));
            if (level === 0) {
                return options;
            }
        };
        /**
         * @private
         * @param {?} label
         * @return {?}
         */
        BaseChartDirective.prototype.isMultiLineLabel = /**
         * @private
         * @param {?} label
         * @return {?}
         */
        function (label) {
            return Array.isArray(label);
        };
        /**
         * @private
         * @param {?} label
         * @return {?}
         */
        BaseChartDirective.prototype.joinLabel = /**
         * @private
         * @param {?} label
         * @return {?}
         */
        function (label) {
            if (!label) {
                return null;
            }
            if (this.isMultiLineLabel(label)) {
                return label.join(' ');
            }
            else {
                return label;
            }
        };
        /**
         * @private
         * @param {?} datasets
         * @return {?}
         */
        BaseChartDirective.prototype.propagateDatasetsToData = /**
         * @private
         * @param {?} datasets
         * @return {?}
         */
        function (datasets) {
            this.data = this.datasets.map((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r.data; }));
            if (this.chart) {
                this.chart.data.datasets = datasets;
            }
            this.updateColors();
        };
        /**
         * @private
         * @param {?} newDataValues
         * @return {?}
         */
        BaseChartDirective.prototype.propagateDataToDatasets = /**
         * @private
         * @param {?} newDataValues
         * @return {?}
         */
        function (newDataValues) {
            var _this = this;
            if (this.isMultiDataSet(newDataValues)) {
                if (this.datasets && newDataValues.length === this.datasets.length) {
                    this.datasets.forEach((/**
                     * @param {?} dataset
                     * @param {?} i
                     * @return {?}
                     */
                    function (dataset, i) {
                        dataset.data = newDataValues[i];
                    }));
                }
                else {
                    this.datasets = newDataValues.map((/**
                     * @param {?} data
                     * @param {?} index
                     * @return {?}
                     */
                    function (data, index) {
                        return { data: data, label: _this.joinLabel(_this.labels[index]) || "Label " + index };
                    }));
                    if (this.chart) {
                        this.chart.data.datasets = this.datasets;
                    }
                }
            }
            else {
                if (!this.datasets) {
                    this.datasets = [{ data: newDataValues }];
                    if (this.chart) {
                        this.chart.data.datasets = this.datasets;
                    }
                }
                else {
                    this.datasets[0].data = newDataValues;
                    this.datasets.splice(1); // Remove all elements but the first
                }
            }
            this.updateColors();
        };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        BaseChartDirective.prototype.isMultiDataSet = /**
         * @private
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return Array.isArray(data[0]);
        };
        /**
         * @private
         * @return {?}
         */
        BaseChartDirective.prototype.getDatasets = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.datasets && !this.data) {
                throw new Error("ng-charts configuration error, data or datasets field are required to render chart " + this.chartType);
            }
            // If `datasets` is defined, use it over the `data` property.
            if (this.datasets) {
                this.propagateDatasetsToData(this.datasets);
                return this.datasets;
            }
            if (this.data) {
                this.propagateDataToDatasets(this.data);
                return this.datasets;
            }
        };
        /**
         * @private
         * @return {?}
         */
        BaseChartDirective.prototype.refresh = /**
         * @private
         * @return {?}
         */
        function () {
            // if (this.options && this.options.responsive) {
            //   setTimeout(() => this.refresh(), 50);
            // }
            // todo: remove this line, it is producing flickering
            if (this.chart) {
                this.chart.destroy();
                this.chart = void 0;
            }
            if (this.ctx) {
                this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
            }
        };
        BaseChartDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'canvas[baseChart]',
                        exportAs: 'base-chart'
                    },] }
        ];
        /** @nocollapse */
        BaseChartDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ThemeService }
        ]; };
        BaseChartDirective.propDecorators = {
            data: [{ type: core.Input }],
            datasets: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            options: [{ type: core.Input }],
            chartType: [{ type: core.Input }],
            colors: [{ type: core.Input }],
            legend: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            chartClick: [{ type: core.Output }],
            chartHover: [{ type: core.Output }]
        };
        return BaseChartDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartsModule = /** @class */ (function () {
        function ChartsModule() {
        }
        ChartsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BaseChartDirective
                        ],
                        imports: [],
                        exports: [
                            BaseChartDirective
                        ]
                    },] }
        ];
        return ChartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:variable-name
    // tslint:disable:no-var-keyword
    // tslint:disable:prefer-const
    // tslint:disable:only-arrow-functions
    // tslint:disable:one-variable-per-declaration
    // tslint:disable:object-literal-shorthand
    // tslint:disable:space-before-function-paren
    /**
     * @return {?}
     */
    function monkeyPatchChartJsLegend() {
        if (typeof Chart === 'undefined') {
            console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
            return;
        }
        /** @type {?} */
        var plugins = Chart.plugins.getAll();
        /** @type {?} */
        var legend = plugins.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.id === 'legend'; }))[0];
        legend._element.prototype.fit = fit;
        legend._element.prototype.draw = draw;
        /** @type {?} */
        var helpers = Chart.helpers;
        /** @type {?} */
        var defaults = Chart.defaults;
        /** @type {?} */
        var valueOrDefault = helpers.valueOrDefault;
        /**
         * @param {?} labelOpts
         * @param {?} fontSize
         * @return {?}
         */
        function getBoxWidth(labelOpts, fontSize) {
            return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
                fontSize :
                labelOpts.boxWidth;
        }
        /**
         * @return {?}
         */
        function fit() {
            /** @type {?} */
            var me = this;
            /** @type {?} */
            var opts = me.options;
            /** @type {?} */
            var labelOpts = opts.labels;
            /** @type {?} */
            var display = opts.display;
            /** @type {?} */
            var ctx = me.ctx;
            /** @type {?} */
            var labelFont = helpers.options._parseFont(labelOpts);
            /** @type {?} */
            var fontSize = labelFont.size;
            // Reset hit boxes
            /** @type {?} */
            var hitboxes = me.legendHitBoxes = [];
            /** @type {?} */
            var minSize = me.minSize;
            /** @type {?} */
            var isHorizontal = me.isHorizontal();
            if (isHorizontal) {
                minSize.width = me.maxWidth; // fill all the width
                minSize.height = display ? 10 : 0;
            }
            else {
                minSize.width = display ? 10 : 0;
                minSize.height = me.maxHeight; // fill all the height
            }
            /** @type {?} */
            var getMaxLineWidth = (/**
             * @param {?} textLines
             * @return {?}
             */
            function (textLines) {
                return textLines.map((/**
                 * @param {?} textLine
                 * @return {?}
                 */
                function (textLine) {
                    return ctx.measureText(textLine).width;
                })).reduce((/**
                 * @param {?} acc
                 * @param {?} v
                 * @return {?}
                 */
                function (acc, v) {
                    return v > acc ? v : acc;
                }), 0);
            });
            // Increase sizes here
            if (display) {
                ctx.font = labelFont.string;
                if (isHorizontal) {
                    // Labels
                    // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
                    /** @type {?} */
                    var lineWidths = me.lineWidths = [0];
                    /** @type {?} */
                    var lineHeights = me.lineHeights = [];
                    /** @type {?} */
                    var currentLineHeight = 0;
                    /** @type {?} */
                    var lineIndex = 0;
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';
                    helpers.each(me.legendItems, (/**
                     * @param {?} legendItem
                     * @param {?} i
                     * @return {?}
                     */
                    function (legendItem, i) {
                        /** @type {?} */
                        var width;
                        /** @type {?} */
                        var height;
                        if (helpers.isArray(legendItem.text)) {
                            width = getMaxLineWidth(legendItem.text);
                            height = fontSize * legendItem.text.length + labelOpts.padding;
                        }
                        else {
                            width = ctx.measureText(legendItem.text).width;
                            height = fontSize + labelOpts.padding;
                        }
                        width += getBoxWidth(labelOpts, fontSize) + (fontSize / 2);
                        if (lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
                            lineHeights.push(currentLineHeight);
                            currentLineHeight = 0;
                            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                            lineIndex++;
                        }
                        legendItem.lineOrColumnIndex = lineIndex;
                        if (height > currentLineHeight) {
                            currentLineHeight = height;
                        }
                        // Store the hitbox width and height here. Final position will be updated in `draw`
                        hitboxes[i] = {
                            left: 0,
                            top: 0,
                            width: width,
                            height: height,
                        };
                        lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
                    }));
                    lineHeights.push(currentLineHeight);
                    minSize.height += lineHeights.reduce((/**
                     * @param {?} acc
                     * @param {?} v
                     * @return {?}
                     */
                    function (acc, v) {
                        return acc + v;
                    }), 0);
                }
                else {
                    /** @type {?} */
                    var vPadding = labelOpts.padding;
                    /** @type {?} */
                    var columnWidths = me.columnWidths = [];
                    /** @type {?} */
                    var columnHeights = me.columnHeights = [];
                    /** @type {?} */
                    var totalWidth = labelOpts.padding;
                    /** @type {?} */
                    var currentColWidth = 0;
                    /** @type {?} */
                    var currentColHeight = 0;
                    /** @type {?} */
                    var columnIndex = 0;
                    helpers.each(me.legendItems, (/**
                     * @param {?} legendItem
                     * @param {?} i
                     * @return {?}
                     */
                    function (legendItem, i) {
                        /** @type {?} */
                        var itemWidth;
                        /** @type {?} */
                        var height;
                        if (helpers.isArray(legendItem.text)) {
                            itemWidth = getMaxLineWidth(legendItem.text);
                            height = fontSize * legendItem.text.length;
                        }
                        else {
                            itemWidth = ctx.measureText(legendItem.text).width;
                            height = fontSize;
                        }
                        itemWidth += getBoxWidth(labelOpts, fontSize) + (fontSize / 2);
                        // If too tall, go to new column
                        if (currentColHeight + fontSize + 2 * vPadding > minSize.height) {
                            totalWidth += currentColWidth + labelOpts.padding;
                            columnWidths.push(currentColWidth); // previous column width
                            columnHeights.push(currentColHeight);
                            currentColWidth = 0;
                            currentColHeight = 0;
                            columnIndex++;
                        }
                        legendItem.lineOrColumnIndex = columnIndex;
                        // Get max width
                        currentColWidth = Math.max(currentColWidth, itemWidth);
                        currentColHeight += height + vPadding;
                        // Store the hitbox width and height here. Final position will be updated in `draw`
                        hitboxes[i] = {
                            left: 0,
                            top: 0,
                            width: itemWidth,
                            height: height
                        };
                    }));
                    totalWidth += currentColWidth;
                    columnWidths.push(currentColWidth);
                    columnHeights.push(currentColHeight);
                    minSize.width += totalWidth;
                }
            }
            me.width = minSize.width;
            me.height = minSize.height;
        }
        /**
         * @return {?}
         */
        function draw() {
            /** @type {?} */
            var me = this;
            /** @type {?} */
            var opts = me.options;
            /** @type {?} */
            var labelOpts = opts.labels;
            /** @type {?} */
            var globalDefaults = defaults.global;
            /** @type {?} */
            var defaultColor = globalDefaults.defaultColor;
            /** @type {?} */
            var lineDefault = globalDefaults.elements.line;
            /** @type {?} */
            var legendHeight = me.height;
            /** @type {?} */
            var columnHeights = me.columnHeights;
            /** @type {?} */
            var columnWidths = me.columnWidths;
            /** @type {?} */
            var legendWidth = me.width;
            /** @type {?} */
            var lineWidths = me.lineWidths;
            /** @type {?} */
            var lineHeights = me.lineHeights;
            if (opts.display) {
                /** @type {?} */
                var ctx = me.ctx;
                /** @type {?} */
                var fontColor = valueOrDefault(labelOpts.fontColor, globalDefaults.defaultFontColor);
                /** @type {?} */
                var labelFont = helpers.options._parseFont(labelOpts);
                /** @type {?} */
                var fontSize = labelFont.size;
                /** @type {?} */
                var cursor;
                // Canvas setup
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = fontColor; // for strikethrough effect
                ctx.fillStyle = fontColor; // render in correct colour
                ctx.font = labelFont.string;
                /** @type {?} */
                var boxWidth = getBoxWidth(labelOpts, fontSize);
                /** @type {?} */
                var hitboxes = me.legendHitBoxes;
                // current position
                /** @type {?} */
                var drawLegendBox = (/**
                 * @param {?} x
                 * @param {?} y
                 * @param {?} legendItem
                 * @return {?}
                 */
                function (x, y, legendItem) {
                    if (isNaN(boxWidth) || boxWidth <= 0) {
                        return;
                    }
                    // Set the ctx for the box
                    ctx.save();
                    /** @type {?} */
                    var lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
                    ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
                    ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
                    ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
                    ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
                    ctx.lineWidth = lineWidth;
                    ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
                    if (ctx.setLineDash) {
                        // IE 9 and 10 do not support line dash
                        ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
                    }
                    if (opts.labels && opts.labels.usePointStyle) {
                        // Recalculate x and y for drawPoint() because its expecting
                        // x and y to be center of figure (instead of top left)
                        /** @type {?} */
                        var radius = boxWidth * Math.SQRT2 / 2;
                        /** @type {?} */
                        var centerX = x + boxWidth / 2;
                        /** @type {?} */
                        var centerY = y + fontSize / 2;
                        // Draw pointStyle as legend symbol
                        helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
                    }
                    else {
                        // Draw box as legend symbol
                        if (lineWidth !== 0) {
                            ctx.strokeRect(x, y, boxWidth, fontSize);
                        }
                        ctx.fillRect(x, y, boxWidth, fontSize);
                    }
                    ctx.restore();
                });
                /** @type {?} */
                var drawStrikeThrough = (/**
                 * @param {?} x
                 * @param {?} y
                 * @param {?} w
                 * @return {?}
                 */
                function (x, y, w) {
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + w, y);
                    ctx.stroke();
                });
                /** @type {?} */
                var drawCrossOver = (/**
                 * @param {?} x
                 * @param {?} y
                 * @param {?} w
                 * @param {?} h
                 * @return {?}
                 */
                function (x, y, w, h) {
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + w, y + h);
                    ctx.moveTo(x, y + h);
                    ctx.lineTo(x + w, y);
                    ctx.stroke();
                });
                /** @type {?} */
                var fillText = (/**
                 * @param {?} x
                 * @param {?} y
                 * @param {?} legendItem
                 * @param {?} textWidth
                 * @return {?}
                 */
                function (x, y, legendItem, textWidth) {
                    /** @type {?} */
                    var halfFontSize = fontSize / 2;
                    /** @type {?} */
                    var xLeft = boxWidth + halfFontSize + x;
                    /** @type {?} */
                    var yMiddle = y + halfFontSize;
                    if (helpers.isArray(legendItem.text)) {
                        helpers.each(legendItem.text, (/**
                         * @param {?} textLine
                         * @param {?} index
                         * @return {?}
                         */
                        function (textLine, index) {
                            /** @type {?} */
                            var lineOffset = index * fontSize;
                            ctx.fillText(textLine, xLeft, yMiddle + lineOffset);
                        }));
                    }
                    else {
                        ctx.fillText(legendItem.text, xLeft, yMiddle);
                    }
                    if (legendItem.hidden) {
                        if (helpers.isArray(legendItem.text)) {
                            drawCrossOver(xLeft, yMiddle, textWidth, (legendItem.text.length - 1) * (fontSize - 1));
                        }
                        else {
                            drawStrikeThrough(xLeft, yMiddle, textWidth);
                        }
                    }
                });
                /** @type {?} */
                var alignmentOffset = (/**
                 * @param {?} dimension
                 * @param {?} blockSize
                 * @return {?}
                 */
                function (dimension, blockSize) {
                    switch (opts.align) {
                        case 'start':
                            return labelOpts.padding;
                        case 'end':
                            return dimension - blockSize;
                        default: // center
                            return (dimension - blockSize + labelOpts.padding) / 2;
                    }
                });
                // Horizontal
                /** @type {?} */
                var isHorizontal = me.isHorizontal();
                if (isHorizontal) {
                    cursor = {
                        x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
                        y: me.top + labelOpts.padding,
                        line: 0
                    };
                }
                else {
                    cursor = {
                        x: me.left + labelOpts.padding,
                        y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
                        line: 0
                    };
                }
                helpers.each(me.legendItems, (/**
                 * @param {?} legendItem
                 * @param {?} i
                 * @return {?}
                 */
                function (legendItem, i) {
                    /** @type {?} */
                    var textWidth;
                    /** @type {?} */
                    var height;
                    /** @type {?} */
                    var boxTopOffset;
                    if (legendItem.lineOrColumnIndex > cursor.line) {
                        if (isHorizontal) {
                            cursor.y += lineHeights[cursor.line];
                            cursor.line = legendItem.lineOrColumnIndex;
                            cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
                        }
                        else {
                            cursor.x += columnWidths[cursor.line] + labelOpts.padding;
                            cursor.line = legendItem.lineOrColumnIndex;
                            cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
                        }
                    }
                    if (helpers.isArray(legendItem.text)) {
                        textWidth = legendItem.text.map((/**
                         * @param {?} textLine
                         * @return {?}
                         */
                        function (textLine) {
                            return ctx.measureText(textLine).width;
                        })).reduce((/**
                         * @param {?} acc
                         * @param {?} v
                         * @return {?}
                         */
                        function (acc, v) {
                            return v > acc ? v : acc;
                        }), 0);
                        boxTopOffset = fontSize / 2 * (legendItem.text.length - 1);
                        height = fontSize * legendItem.text.length;
                    }
                    else {
                        textWidth = ctx.measureText(legendItem.text).width;
                        boxTopOffset = 0;
                        height = fontSize;
                    }
                    /** @type {?} */
                    var width = boxWidth + (fontSize / 2) + textWidth;
                    /** @type {?} */
                    var x = cursor.x;
                    /** @type {?} */
                    var y = cursor.y;
                    /** @type {?} */
                    var topOffset = isHorizontal ? Math.trunc((lineHeights[cursor.line] - hitboxes[i].height) / 2) : 0;
                    drawLegendBox(x, y + boxTopOffset + topOffset, legendItem);
                    hitboxes[i].left = x;
                    hitboxes[i].top = y;
                    // Fill the actual label
                    fillText(x, y + topOffset, legendItem, textWidth);
                    if (isHorizontal) {
                        cursor.x += width + labelOpts.padding;
                    }
                    else {
                        cursor.y += height + labelOpts.padding;
                    }
                }));
            }
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:variable-name
    // tslint:disable:no-var-keyword
    // tslint:disable:prefer-const
    // tslint:disable:only-arrow-functions
    // tslint:disable:one-variable-per-declaration
    // tslint:disable:object-literal-shorthand
    // tslint:disable:space-before-function-paren
    /**
     * @return {?}
     */
    function monkeyPatchChartJsTooltip() {
        if (typeof Chart === 'undefined') {
            console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
            return;
        }
        Chart.Tooltip.prototype.drawBody = drawBody;
        /** @type {?} */
        var helpers = Chart.helpers;
        /**
         * @param {?} vm
         * @param {?} align
         * @return {?}
         */
        function getAlignedX(vm, align) {
            return align === 'center'
                ? vm.x + vm.width / 2
                : align === 'right'
                    ? vm.x + vm.width - vm.xPadding
                    : vm.x + vm.xPadding;
        }
        /**
         * @param {?} pt
         * @param {?} vm
         * @param {?} ctx
         * @return {?}
         */
        function drawBody(pt, vm, ctx) {
            /** @type {?} */
            var bodyFontSize = vm.bodyFontSize;
            /** @type {?} */
            var bodySpacing = vm.bodySpacing;
            /** @type {?} */
            var bodyAlign = vm._bodyAlign;
            /** @type {?} */
            var body = vm.body;
            /** @type {?} */
            var drawColorBoxes = vm.displayColors;
            /** @type {?} */
            var labelColors = vm.labelColors;
            /** @type {?} */
            var xLinePadding = 0;
            /** @type {?} */
            var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
            /** @type {?} */
            var textColor;
            ctx.textAlign = bodyAlign;
            ctx.textBaseline = 'top';
            ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
            pt.x = getAlignedX(vm, bodyAlign);
            // Before Body
            /** @type {?} */
            var fillLineOfText = (/**
             * @param {?} line
             * @return {?}
             */
            function (line) {
                ctx.fillText(line, pt.x + xLinePadding, pt.y);
                pt.y += bodyFontSize + bodySpacing;
            });
            // Before body lines
            ctx.fillStyle = vm.bodyFontColor;
            helpers.each(vm.beforeBody, fillLineOfText);
            xLinePadding = drawColorBoxes && bodyAlign !== 'right'
                ? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
                : 0;
            // Draw body lines now
            helpers.each(body, (/**
             * @param {?} bodyItem
             * @param {?} i
             * @return {?}
             */
            function (bodyItem, i) {
                textColor = vm.labelTextColors[i];
                ctx.fillStyle = textColor;
                helpers.each(bodyItem.before, fillLineOfText);
                // Draw Legend-like boxes if needed
                if (drawColorBoxes) {
                    // Fill a white rect so that colours merge nicely if the opacity is < 1
                    ctx.fillStyle = vm.legendColorBackground;
                    ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize);
                    // Border
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = labelColors[i].borderColor;
                    ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize);
                    // Inner square
                    ctx.fillStyle = labelColors[i].backgroundColor;
                    ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
                    ctx.fillStyle = textColor;
                }
                helpers.each(bodyItem.lines, fillLineOfText);
                helpers.each(bodyItem.after, fillLineOfText);
            }));
            // Reset back to 0 for after body
            xLinePadding = 0;
            // After body lines
            helpers.each(vm.afterBody, fillLineOfText);
            pt.y -= bodySpacing; // Remove last body spacing
        }
    }

    exports.BaseChartDirective = BaseChartDirective;
    exports.ChartsModule = ChartsModule;
    exports.ThemeService = ThemeService;
    exports.defaultColors = defaultColors;
    exports.monkeyPatchChartJsLegend = monkeyPatchChartJsLegend;
    exports.monkeyPatchChartJsTooltip = monkeyPatchChartJsTooltip;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng2-charts.umd.js.map
