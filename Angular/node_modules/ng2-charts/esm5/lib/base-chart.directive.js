/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef, } from '@angular/core';
import * as chartJs from 'chart.js';
import { getColors } from './get-colors';
import { ThemeService } from './theme.service';
import { cloneDeep } from 'lodash-es';
/**
 * @record
 */
function OldState() { }
if (false) {
    /** @type {?} */
    OldState.prototype.dataExists;
    /** @type {?} */
    OldState.prototype.dataLength;
    /** @type {?} */
    OldState.prototype.datasetsExists;
    /** @type {?} */
    OldState.prototype.datasetsLength;
    /** @type {?} */
    OldState.prototype.datasetsDataObjects;
    /** @type {?} */
    OldState.prototype.datasetsDataLengths;
    /** @type {?} */
    OldState.prototype.colorsExists;
    /** @type {?} */
    OldState.prototype.colors;
    /** @type {?} */
    OldState.prototype.labelsExist;
    /** @type {?} */
    OldState.prototype.labels;
    /** @type {?} */
    OldState.prototype.legendExists;
    /** @type {?} */
    OldState.prototype.legend;
}
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
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
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
        chartJs.Chart.plugins.register(plugin);
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
        chartJs.Chart.plugins.unregister(plugin);
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
            return tslib_1.__spread(a);
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
        return true
            && Array.isArray(a) === Array.isArray(b)
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
        return !a || true
            && (a.backgroundColor === b.backgroundColor)
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
                Object.assign(elm, getColors(_this.chartType, index, elm.data.length), tslib_1.__assign({}, elm));
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
        return new chartJs.Chart(ctx, chartConfig);
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
            options = cloneDeep(options);
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
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'canvas[baseChart]',
                    exportAs: 'base-chart'
                },] }
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ThemeService }
    ]; };
    BaseChartDirective.propDecorators = {
        data: [{ type: Input }],
        datasets: [{ type: Input }],
        labels: [{ type: Input }],
        options: [{ type: Input }],
        chartType: [{ type: Input }],
        colors: [{ type: Input }],
        legend: [{ type: Input }],
        plugins: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return BaseChartDirective;
}());
export { BaseChartDirective };
if (false) {
    /** @type {?} */
    BaseChartDirective.prototype.data;
    /** @type {?} */
    BaseChartDirective.prototype.datasets;
    /** @type {?} */
    BaseChartDirective.prototype.labels;
    /** @type {?} */
    BaseChartDirective.prototype.options;
    /** @type {?} */
    BaseChartDirective.prototype.chartType;
    /** @type {?} */
    BaseChartDirective.prototype.colors;
    /** @type {?} */
    BaseChartDirective.prototype.legend;
    /** @type {?} */
    BaseChartDirective.prototype.plugins;
    /** @type {?} */
    BaseChartDirective.prototype.chartClick;
    /** @type {?} */
    BaseChartDirective.prototype.chartHover;
    /** @type {?} */
    BaseChartDirective.prototype.ctx;
    /** @type {?} */
    BaseChartDirective.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    BaseChartDirective.prototype.old;
    /**
     * @type {?}
     * @private
     */
    BaseChartDirective.prototype.subs;
    /**
     * @type {?}
     * @private
     */
    BaseChartDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    BaseChartDirective.prototype.themeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2Jhc2UtY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEdBR1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQVd0Qyx1QkFlQzs7O0lBZEMsOEJBQW9COztJQUNwQiw4QkFBbUI7O0lBQ25CLGtDQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2Qix1Q0FBMkI7O0lBQzNCLHVDQUE4Qjs7SUFDOUIsZ0NBQXNCOztJQUN0QiwwQkFBZ0I7O0lBQ2hCLCtCQUFxQjs7SUFDckIsMEJBQWdCOztJQUNoQixnQ0FBc0I7O0lBQ3RCLDBCQUVFOzs7O0lBSUYsVUFBTztJQUNQLFNBQU07SUFDTixVQUFPOzs7OztBQUdUO0lBaURFLDRCQUNVLE9BQW1CLEVBQ25CLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUExQ3BCLFlBQU8sR0FBeUIsRUFBRSxDQUFDO1FBTWxDLGVBQVUsR0FBd0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRixlQUFVLEdBQXNELElBQUksWUFBWSxFQUFFLENBQUM7UUFLNUYsUUFBRyxHQUFhO1lBQ3RCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsY0FBYyxFQUFFLEtBQUs7WUFDckIsY0FBYyxFQUFFLENBQUM7WUFD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QUVELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCwwREFBMEQ7UUFDMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXJDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7OztRQUFDLFVB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QyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Z0JBaGVGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQS9DQyxVQUFVO2dCQU9ILFlBQVk7Ozt1QkEwQ2xCLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBaWRULHlCQUFDO0NBQUEsQUFqZUQsSUFpZUM7U0E1ZFksa0JBQWtCOzs7SUFDN0Isa0NBQTJDOztJQUMzQyxzQ0FBa0Q7O0lBQ2xELG9DQUFnQzs7SUFDaEMscUNBQW1EOztJQUNuRCx1Q0FBNkM7O0lBQzdDLG9DQUFnQzs7SUFDaEMsb0NBQWdDOztJQUNoQyxxQ0FBcUU7O0lBRXJFLHdDQUFzRzs7SUFDdEcsd0NBQW9HOztJQUVwRyxpQ0FBbUI7O0lBQ25CLG1DQUFvQjs7Ozs7SUFFcEIsaUNBYUU7Ozs7O0lBRUYsa0NBQWtDOzs7OztJQWNoQyxxQ0FBMkI7Ozs7O0lBQzNCLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIERvQ2hlY2ssXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGNoYXJ0SnMgZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tICcuL2dldC1jb2xvcnMnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFNpbmdsZURhdGFTZXQgPSAobnVtYmVyW10gfCBjaGFydEpzLkNoYXJ0UG9pbnRbXSk7XHJcbmV4cG9ydCB0eXBlIE11bHRpRGF0YVNldCA9IChudW1iZXJbXSB8IGNoYXJ0SnMuQ2hhcnRQb2ludFtdKVtdO1xyXG5leHBvcnQgdHlwZSBTaW5nbGVPck11bHRpRGF0YVNldCA9IFNpbmdsZURhdGFTZXQgfCBNdWx0aURhdGFTZXQ7XHJcblxyXG5leHBvcnQgdHlwZSBQbHVnaW5TZXJ2aWNlR2xvYmFsUmVnaXN0cmF0aW9uQW5kT3B0aW9ucyA9IGNoYXJ0SnMuUGx1Z2luU2VydmljZUdsb2JhbFJlZ2lzdHJhdGlvbiAmIGNoYXJ0SnMuUGx1Z2luU2VydmljZVJlZ2lzdHJhdGlvbk9wdGlvbnM7XHJcbmV4cG9ydCB0eXBlIFNpbmdsZUxpbmVMYWJlbCA9IHN0cmluZztcclxuZXhwb3J0IHR5cGUgTXVsdGlMaW5lTGFiZWwgPSBzdHJpbmdbXTtcclxuZXhwb3J0IHR5cGUgTGFiZWwgPSBTaW5nbGVMaW5lTGFiZWwgfCBNdWx0aUxpbmVMYWJlbDtcclxuXHJcbmludGVyZmFjZSBPbGRTdGF0ZSB7XHJcbiAgZGF0YUV4aXN0czogYm9vbGVhbjtcclxuICBkYXRhTGVuZ3RoOiBudW1iZXI7XHJcbiAgZGF0YXNldHNFeGlzdHM6IGJvb2xlYW47XHJcbiAgZGF0YXNldHNMZW5ndGg6IG51bWJlcjtcclxuICBkYXRhc2V0c0RhdGFPYmplY3RzOiBhbnlbXTtcclxuICBkYXRhc2V0c0RhdGFMZW5ndGhzOiBudW1iZXJbXTtcclxuICBjb2xvcnNFeGlzdHM6IGJvb2xlYW47XHJcbiAgY29sb3JzOiBDb2xvcltdO1xyXG4gIGxhYmVsc0V4aXN0OiBib29sZWFuO1xyXG4gIGxhYmVsczogTGFiZWxbXTtcclxuICBsZWdlbmRFeGlzdHM6IGJvb2xlYW47XHJcbiAgbGVnZW5kOiB7XHJcbiAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5lbnVtIFVwZGF0ZVR5cGUge1xyXG4gIERlZmF1bHQsXHJcbiAgVXBkYXRlLFxyXG4gIFJlZnJlc2hcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FudmFzW2Jhc2VDaGFydF0nLFxyXG4gIGV4cG9ydEFzOiAnYmFzZS1jaGFydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IFNpbmdsZU9yTXVsdGlEYXRhU2V0O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhc2V0czogY2hhcnRKcy5DaGFydERhdGFTZXRzW107XHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsczogTGFiZWxbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogY2hhcnRKcy5DaGFydE9wdGlvbnMgPSB7fTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUeXBlOiBjaGFydEpzLkNoYXJ0VHlwZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3JzOiBDb2xvcltdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIHBsdWdpbnM6IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zW107XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPHsgZXZlbnQ/OiBNb3VzZUV2ZW50LCBhY3RpdmU/OiB7fVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIGN0eDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGFydDogQ2hhcnQ7XHJcblxyXG4gIHByaXZhdGUgb2xkOiBPbGRTdGF0ZSA9IHtcclxuICAgIGRhdGFFeGlzdHM6IGZhbHNlLFxyXG4gICAgZGF0YUxlbmd0aDogMCxcclxuICAgIGRhdGFzZXRzRXhpc3RzOiBmYWxzZSxcclxuICAgIGRhdGFzZXRzTGVuZ3RoOiAwLFxyXG4gICAgZGF0YXNldHNEYXRhT2JqZWN0czogW10sXHJcbiAgICBkYXRhc2V0c0RhdGFMZW5ndGhzOiBbXSxcclxuICAgIGNvbG9yc0V4aXN0czogZmFsc2UsXHJcbiAgICBjb2xvcnM6IFtdLFxyXG4gICAgbGFiZWxzRXhpc3Q6IGZhbHNlLFxyXG4gICAgbGFiZWxzOiBbXSxcclxuICAgIGxlZ2VuZEV4aXN0czogZmFsc2UsXHJcbiAgICBsZWdlbmQ6IHt9LFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlclBsdWdpbihwbHVnaW46IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zKSB7XHJcbiAgICBjaGFydEpzLkNoYXJ0LnBsdWdpbnMucmVnaXN0ZXIocGx1Z2luKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlclBsdWdpbihwbHVnaW46IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zKSB7XHJcbiAgICBjaGFydEpzLkNoYXJ0LnBsdWdpbnMudW5yZWdpc3RlcihwbHVnaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMudGhlbWVTZXJ2aWNlLmNvbG9yc2NoZW1lc09wdGlvbnMuc3Vic2NyaWJlKHIgPT4gdGhpcy50aGVtZUNoYW5nZWQocikpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGhlbWVDaGFuZ2VkKG9wdGlvbnM6IHt9KSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jaGFydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgdXBkYXRlUmVxdWlyZWQgPSBVcGRhdGVUeXBlLkRlZmF1bHQ7XHJcbiAgICBjb25zdCB3YW50VXBkYXRlID0gKHg6IFVwZGF0ZVR5cGUpID0+IHtcclxuICAgICAgdXBkYXRlUmVxdWlyZWQgPSB4ID4gdXBkYXRlUmVxdWlyZWQgPyB4IDogdXBkYXRlUmVxdWlyZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghIXRoaXMuZGF0YSAhPT0gdGhpcy5vbGQuZGF0YUV4aXN0cykge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZURhdGFUb0RhdGFzZXRzKHRoaXMuZGF0YSk7XHJcblxyXG4gICAgICB0aGlzLm9sZC5kYXRhRXhpc3RzID0gISF0aGlzLmRhdGE7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggIT09IHRoaXMub2xkLmRhdGFMZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQuZGF0YUxlbmd0aCA9IHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISF0aGlzLmRhdGFzZXRzICE9PSB0aGlzLm9sZC5kYXRhc2V0c0V4aXN0cykge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0V4aXN0cyA9ICEhdGhpcy5kYXRhc2V0cztcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMubGVuZ3RoICE9PSB0aGlzLm9sZC5kYXRhc2V0c0xlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0xlbmd0aCA9IHRoaXMuZGF0YXNldHMgJiYgdGhpcy5kYXRhc2V0cy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMuZmlsdGVyKCh4LCBpKSA9PiB4LmRhdGEgIT09IHRoaXMub2xkLmRhdGFzZXRzRGF0YU9iamVjdHNbaV0pLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0RhdGFPYmplY3RzID0gdGhpcy5kYXRhc2V0cy5tYXAoeCA9PiB4LmRhdGEpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YXNldHMgJiYgdGhpcy5kYXRhc2V0cy5maWx0ZXIoKHgsIGkpID0+IHguZGF0YS5sZW5ndGggIT09IHRoaXMub2xkLmRhdGFzZXRzRGF0YUxlbmd0aHNbaV0pLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0RhdGFMZW5ndGhzID0gdGhpcy5kYXRhc2V0cy5tYXAoeCA9PiB4LmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIXRoaXMuY29sb3JzICE9PSB0aGlzLm9sZC5jb2xvcnNFeGlzdHMpIHtcclxuICAgICAgdGhpcy5vbGQuY29sb3JzRXhpc3RzID0gISF0aGlzLmNvbG9ycztcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JzKCk7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIHNtZWxscyBvZiBpbmVmZmljaWVuY3ksIG1pZ2h0IG5lZWQgdG8gcmV2aXNpdCB0aGlzXHJcbiAgICBpZiAodGhpcy5jb2xvcnMgJiYgdGhpcy5jb2xvcnMuZmlsdGVyKCh4LCBpKSA9PiAhdGhpcy5jb2xvcnNFcXVhbCh4LCB0aGlzLm9sZC5jb2xvcnNbaV0pKS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQuY29sb3JzID0gdGhpcy5jb2xvcnMubWFwKHggPT4gdGhpcy5jb3B5Q29sb3IoeCkpO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIXRoaXMubGFiZWxzICE9PSB0aGlzLm9sZC5sYWJlbHNFeGlzdCkge1xyXG4gICAgICB0aGlzLm9sZC5sYWJlbHNFeGlzdCA9ICEhdGhpcy5sYWJlbHM7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuZmlsdGVyKCh4LCBpKSA9PiAhdGhpcy5sYWJlbHNFcXVhbCh4LCB0aGlzLm9sZC5sYWJlbHNbaV0pKS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQubGFiZWxzID0gdGhpcy5sYWJlbHMubWFwKHggPT4gdGhpcy5jb3B5TGFiZWwoeCkpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhdGhpcy5vcHRpb25zLmxlZ2VuZCAhPT0gdGhpcy5vbGQubGVnZW5kRXhpc3RzKSB7XHJcbiAgICAgIHRoaXMub2xkLmxlZ2VuZEV4aXN0cyA9ICEhdGhpcy5vcHRpb25zLmxlZ2VuZDtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5SZWZyZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZCAmJiB0aGlzLm9wdGlvbnMubGVnZW5kLnBvc2l0aW9uICE9PSB0aGlzLm9sZC5sZWdlbmQucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5vbGQubGVnZW5kLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLmxlZ2VuZC5wb3NpdGlvbjtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5SZWZyZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHVwZGF0ZVJlcXVpcmVkIGFzIFVwZGF0ZVR5cGUpIHtcclxuICAgICAgY2FzZSBVcGRhdGVUeXBlLkRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVXBkYXRlVHlwZS5VcGRhdGU6XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVcGRhdGVUeXBlLlJlZnJlc2g6XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb3B5TGFiZWwoYTogTGFiZWwpOiBMYWJlbCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xyXG4gICAgICByZXR1cm4gWy4uLmFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuICBsYWJlbHNFcXVhbChhOiBMYWJlbCwgYjogTGFiZWwpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgICAgICYmIEFycmF5LmlzQXJyYXkoYSkgPT09IEFycmF5LmlzQXJyYXkoYilcclxuICAgICAgJiYgKEFycmF5LmlzQXJyYXkoYSkgfHwgYSA9PT0gYilcclxuICAgICAgJiYgKCFBcnJheS5pc0FycmF5KGEpIHx8IGEubGVuZ3RoID09PSBiLmxlbmd0aClcclxuICAgICAgJiYgKCFBcnJheS5pc0FycmF5KGEpIHx8IGEuZmlsdGVyKCh4LCBpKSA9PiB4ICE9PSBiW2ldKS5sZW5ndGggPT09IDApXHJcbiAgICAgIDtcclxuICB9XHJcblxyXG4gIGNvcHlDb2xvcihhOiBDb2xvcik6IENvbG9yIHtcclxuICAgIGNvbnN0IHJjOiBDb2xvciA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBhLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgYm9yZGVyV2lkdGg6IGEuYm9yZGVyV2lkdGgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBhLmJvcmRlckNvbG9yLFxyXG4gICAgICBib3JkZXJDYXBTdHlsZTogYS5ib3JkZXJDYXBTdHlsZSxcclxuICAgICAgYm9yZGVyRGFzaDogYS5ib3JkZXJEYXNoLFxyXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiBhLmJvcmRlckRhc2hPZmZzZXQsXHJcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogYS5ib3JkZXJKb2luU3R5bGUsXHJcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IGEucG9pbnRCb3JkZXJDb2xvcixcclxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGEucG9pbnRCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IGEucG9pbnRCb3JkZXJXaWR0aCxcclxuICAgICAgcG9pbnRSYWRpdXM6IGEucG9pbnRSYWRpdXMsXHJcbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IGEucG9pbnRIb3ZlclJhZGl1cyxcclxuICAgICAgcG9pbnRIaXRSYWRpdXM6IGEucG9pbnRIaXRSYWRpdXMsXHJcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBhLnBvaW50SG92ZXJCb3JkZXJDb2xvcixcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiBhLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxcclxuICAgICAgcG9pbnRTdHlsZTogYS5wb2ludFN0eWxlLFxyXG4gICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogYS5ob3ZlckJhY2tncm91bmRDb2xvcixcclxuICAgICAgaG92ZXJCb3JkZXJDb2xvcjogYS5ob3ZlckJvcmRlckNvbG9yLFxyXG4gICAgICBob3ZlckJvcmRlcldpZHRoOiBhLmhvdmVyQm9yZGVyV2lkdGgsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByYztcclxuICB9XHJcblxyXG4gIGNvbG9yc0VxdWFsKGE6IENvbG9yLCBiOiBDb2xvcikge1xyXG4gICAgaWYgKCFhICE9PSAhYikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIWEgfHwgdHJ1ZVxyXG4gICAgICAmJiAoYS5iYWNrZ3JvdW5kQ29sb3IgPT09IGIuYmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5ib3JkZXJXaWR0aCA9PT0gYi5ib3JkZXJXaWR0aClcclxuICAgICAgJiYgKGEuYm9yZGVyQ29sb3IgPT09IGIuYm9yZGVyQ29sb3IpXHJcbiAgICAgICYmIChhLmJvcmRlckNhcFN0eWxlID09PSBiLmJvcmRlckNhcFN0eWxlKVxyXG4gICAgICAmJiAoYS5ib3JkZXJEYXNoID09PSBiLmJvcmRlckRhc2gpXHJcbiAgICAgICYmIChhLmJvcmRlckRhc2hPZmZzZXQgPT09IGIuYm9yZGVyRGFzaE9mZnNldClcclxuICAgICAgJiYgKGEuYm9yZGVySm9pblN0eWxlID09PSBiLmJvcmRlckpvaW5TdHlsZSlcclxuICAgICAgJiYgKGEucG9pbnRCb3JkZXJDb2xvciA9PT0gYi5wb2ludEJvcmRlckNvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEJhY2tncm91bmRDb2xvciA9PT0gYi5wb2ludEJhY2tncm91bmRDb2xvcilcclxuICAgICAgJiYgKGEucG9pbnRCb3JkZXJXaWR0aCA9PT0gYi5wb2ludEJvcmRlcldpZHRoKVxyXG4gICAgICAmJiAoYS5wb2ludFJhZGl1cyA9PT0gYi5wb2ludFJhZGl1cylcclxuICAgICAgJiYgKGEucG9pbnRIb3ZlclJhZGl1cyA9PT0gYi5wb2ludEhvdmVyUmFkaXVzKVxyXG4gICAgICAmJiAoYS5wb2ludEhpdFJhZGl1cyA9PT0gYi5wb2ludEhpdFJhZGl1cylcclxuICAgICAgJiYgKGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciA9PT0gYi5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEhvdmVyQm9yZGVyQ29sb3IgPT09IGIucG9pbnRIb3ZlckJvcmRlckNvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEhvdmVyQm9yZGVyV2lkdGggPT09IGIucG9pbnRIb3ZlckJvcmRlcldpZHRoKVxyXG4gICAgICAmJiAoYS5wb2ludFN0eWxlID09PSBiLnBvaW50U3R5bGUpXHJcbiAgICAgICYmIChhLmhvdmVyQmFja2dyb3VuZENvbG9yID09PSBiLmhvdmVyQmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5ob3ZlckJvcmRlckNvbG9yID09PSBiLmhvdmVyQm9yZGVyQ29sb3IpXHJcbiAgICAgICYmIChhLmhvdmVyQm9yZGVyV2lkdGggPT09IGIuaG92ZXJCb3JkZXJXaWR0aClcclxuICAgICAgO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sb3JzKCkge1xyXG4gICAgdGhpcy5kYXRhc2V0cy5mb3JFYWNoKChlbG0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbG9ycyAmJiB0aGlzLmNvbG9yc1tpbmRleF0pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsbSwgdGhpcy5jb2xvcnNbaW5kZXhdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsbSwgZ2V0Q29sb3JzKHRoaXMuY2hhcnRUeXBlLCBpbmRleCwgZWxtLmRhdGEubGVuZ3RoKSwgeyAuLi5lbG0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGxldCB1cGRhdGVSZXF1aXJlZCA9IFVwZGF0ZVR5cGUuRGVmYXVsdDtcclxuICAgIGNvbnN0IHdhbnRVcGRhdGUgPSAoeDogVXBkYXRlVHlwZSkgPT4ge1xyXG4gICAgICB1cGRhdGVSZXF1aXJlZCA9IHggPiB1cGRhdGVSZXF1aXJlZCA/IHggOiB1cGRhdGVSZXF1aXJlZDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZXMgYXJlIGluIHRoZSBkYXRhIG9yIGRhdGFzZXRzIG9yIGxhYmVscyBvciBsZWdlbmRcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVEYXRhVG9EYXRhc2V0cyhjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhc2V0cycpICYmIGNoYW5nZXMuZGF0YXNldHMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlRGF0YXNldHNUb0RhdGEoY2hhbmdlcy5kYXRhc2V0cy5jdXJyZW50VmFsdWUpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xhYmVscycpKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFydC5kYXRhLmxhYmVscyA9IGNoYW5nZXMubGFiZWxzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xlZ2VuZCcpKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFydC5jb25maWcub3B0aW9ucy5sZWdlbmQuZGlzcGxheSA9IGNoYW5nZXMubGVnZW5kLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB0aGlzLmNoYXJ0LmdlbmVyYXRlTGVnZW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlJlZnJlc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodXBkYXRlUmVxdWlyZWQgYXMgVXBkYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFVwZGF0ZVR5cGUuVXBkYXRlOlxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVXBkYXRlVHlwZS5SZWZyZXNoOlxyXG4gICAgICBjYXNlIFVwZGF0ZVR5cGUuRGVmYXVsdDpcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJzLmZvckVhY2goeCA9PiB4LnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShkdXJhdGlvbj86IGFueSwgbGF6eT86IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hhcnQudXBkYXRlKGR1cmF0aW9uLCBsYXp5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlRGF0YXNldChpbmRleDogbnVtYmVyLCBoaWRkZW46IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEoaW5kZXgpLmhpZGRlbiA9IGhpZGRlbjtcclxuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEYXRhc2V0SGlkZGVuKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKGluZGV4KS5oaWRkZW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9CYXNlNjRJbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnQudG9CYXNlNjRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYXJ0Q29uZmlndXJhdGlvbigpOiBjaGFydEpzLkNoYXJ0Q29uZmlndXJhdGlvbiB7XHJcbiAgICBjb25zdCBkYXRhc2V0cyA9IHRoaXMuZ2V0RGF0YXNldHMoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB7IGRpc3BsYXk6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICAvLyBob29rIGZvciBvbkhvdmVyIGFuZCBvbkNsaWNrIGV2ZW50c1xyXG4gICAgb3B0aW9ucy5ob3ZlciA9IG9wdGlvbnMuaG92ZXIgfHwge307XHJcbiAgICBpZiAoIW9wdGlvbnMuaG92ZXIub25Ib3Zlcikge1xyXG4gICAgICBvcHRpb25zLmhvdmVyLm9uSG92ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUgJiYgIWFjdGl2ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5vbkNsaWNrKSB7XHJcbiAgICAgIG9wdGlvbnMub25DbGljayA9IChldmVudD86IE1vdXNlRXZlbnQsIGFjdGl2ZT86IHt9W10pID0+IHtcclxuICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHRoaXMuc21hcnRNZXJnZShvcHRpb25zLCB0aGlzLnRoZW1lU2VydmljZS5nZXRDb2xvcnNjaGVtZXNPcHRpb25zKCkpO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0Q29uZmlnOiBjaGFydEpzLkNoYXJ0Q29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgdHlwZTogdGhpcy5jaGFydFR5cGUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzIHx8IFtdLFxyXG4gICAgICAgIGRhdGFzZXRzXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcclxuICAgICAgb3B0aW9uczogbWVyZ2VkT3B0aW9ucyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNoYXJ0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYXJ0QnVpbGRlcihjdHg6IHN0cmluZy8qLCBkYXRhOmFueVtdLCBvcHRpb25zOmFueSovKTogQ2hhcnQge1xyXG4gICAgY29uc3QgY2hhcnRDb25maWcgPSB0aGlzLmdldENoYXJ0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgcmV0dXJuIG5ldyBjaGFydEpzLkNoYXJ0KGN0eCwgY2hhcnRDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgc21hcnRNZXJnZShvcHRpb25zOiBhbnksIG92ZXJyaWRlczogYW55LCBsZXZlbDogbnVtYmVyID0gMCk6IGFueSB7XHJcbiAgICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgICAgb3B0aW9ucyA9IGNsb25lRGVlcChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXNUb1VwZGF0ZSA9IE9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XHJcbiAgICBrZXlzVG9VcGRhdGUuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvdmVycmlkZXNba2V5XSkpIHtcclxuICAgICAgICBjb25zdCBhcnJheUVsZW1lbnRzID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIGlmIChhcnJheUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICBhcnJheUVsZW1lbnRzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc21hcnRNZXJnZShyLCBvdmVycmlkZXNba2V5XVswXSwgbGV2ZWwgKyAxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG92ZXJyaWRlc1trZXldKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICAgIG9wdGlvbnNba2V5XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNtYXJ0TWVyZ2Uob3B0aW9uc1trZXldLCBvdmVycmlkZXNba2V5XSwgbGV2ZWwgKyAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25zW2tleV0gPSBvdmVycmlkZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTXVsdGlMaW5lTGFiZWwobGFiZWw6IExhYmVsKTogbGFiZWwgaXMgTXVsdGlMaW5lTGFiZWwge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBqb2luTGFiZWwobGFiZWw6IExhYmVsKTogc3RyaW5nIHtcclxuICAgIGlmICghbGFiZWwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc011bHRpTGluZUxhYmVsKGxhYmVsKSkge1xyXG4gICAgICByZXR1cm4gbGFiZWwuam9pbignICcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9wYWdhdGVEYXRhc2V0c1RvRGF0YShkYXRhc2V0czogY2hhcnRKcy5DaGFydERhdGFTZXRzW10pIHtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YXNldHMubWFwKHIgPT4gci5kYXRhKTtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IGRhdGFzZXRzO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvcGFnYXRlRGF0YVRvRGF0YXNldHMobmV3RGF0YVZhbHVlczogU2luZ2xlT3JNdWx0aURhdGFTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlEYXRhU2V0KG5ld0RhdGFWYWx1ZXMpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIG5ld0RhdGFWYWx1ZXMubGVuZ3RoID09PSB0aGlzLmRhdGFzZXRzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldCwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBkYXRhc2V0LmRhdGEgPSBuZXdEYXRhVmFsdWVzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMgPSBuZXdEYXRhVmFsdWVzLm1hcCgoZGF0YTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxhYmVsOiB0aGlzLmpvaW5MYWJlbCh0aGlzLmxhYmVsc1tpbmRleF0pIHx8IGBMYWJlbCAke2luZGV4fWAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICAgICAgdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzID0gdGhpcy5kYXRhc2V0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhc2V0cykge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMgPSBbeyBkYXRhOiBuZXdEYXRhVmFsdWVzIH1dO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHMgPSB0aGlzLmRhdGFzZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFzZXRzWzBdLmRhdGEgPSBuZXdEYXRhVmFsdWVzO1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMuc3BsaWNlKDEpOyAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIGJ1dCB0aGUgZmlyc3RcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNdWx0aURhdGFTZXQoZGF0YTogU2luZ2xlT3JNdWx0aURhdGFTZXQpOiBkYXRhIGlzIE11bHRpRGF0YVNldCB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhWzBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YXNldHMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YXNldHMgJiYgIXRoaXMuZGF0YSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5nLWNoYXJ0cyBjb25maWd1cmF0aW9uIGVycm9yLCBkYXRhIG9yIGRhdGFzZXRzIGZpZWxkIGFyZSByZXF1aXJlZCB0byByZW5kZXIgY2hhcnQgJHt0aGlzLmNoYXJ0VHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBgZGF0YXNldHNgIGlzIGRlZmluZWQsIHVzZSBpdCBvdmVyIHRoZSBgZGF0YWAgcHJvcGVydHkuXHJcbiAgICBpZiAodGhpcy5kYXRhc2V0cykge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZURhdGFzZXRzVG9EYXRhKHRoaXMuZGF0YXNldHMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhc2V0cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlRGF0YVRvRGF0YXNldHModGhpcy5kYXRhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YXNldHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2goKSB7XHJcbiAgICAvLyBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5yZXNwb25zaXZlKSB7XHJcbiAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWZyZXNoKCksIDUwKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBsaW5lLCBpdCBpcyBwcm9kdWNpbmcgZmxpY2tlcmluZ1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY2hhcnQgPSB2b2lkIDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdHgpIHtcclxuICAgICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRCdWlsZGVyKHRoaXMuY3R4LyosIGRhdGEsIHRoaXMub3B0aW9ucyovKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19