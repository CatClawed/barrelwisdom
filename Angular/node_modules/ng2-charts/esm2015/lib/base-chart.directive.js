/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const UpdateType = {
    Default: 0,
    Update: 1,
    Refresh: 2,
};
UpdateType[UpdateType.Default] = 'Default';
UpdateType[UpdateType.Update] = 'Update';
UpdateType[UpdateType.Refresh] = 'Refresh';
export class BaseChartDirective {
    /**
     * @param {?} element
     * @param {?} themeService
     */
    constructor(element, themeService) {
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
     * @param {?} plugin
     * @return {?}
     */
    static registerPlugin(plugin) {
        chartJs.Chart.plugins.register(plugin);
    }
    /**
     * @param {?} plugin
     * @return {?}
     */
    static unregisterPlugin(plugin) {
        chartJs.Chart.plugins.unregister(plugin);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.refresh();
        this.subs.push(this.themeService.colorschemesOptions.subscribe((/**
         * @param {?} r
         * @return {?}
         */
        r => this.themeChanged(r))));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    themeChanged(options) {
        this.refresh();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this.chart) {
            return;
        }
        /** @type {?} */
        let updateRequired = UpdateType.Default;
        /** @type {?} */
        const wantUpdate = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
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
        (x, i) => x.data !== this.old.datasetsDataObjects[i])).length) {
            this.old.datasetsDataObjects = this.datasets.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.data));
            wantUpdate(UpdateType.Update);
        }
        if (this.datasets && this.datasets.filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => x.data.length !== this.old.datasetsDataLengths[i])).length) {
            this.old.datasetsDataLengths = this.datasets.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.data.length));
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
        (x, i) => !this.colorsEqual(x, this.old.colors[i]))).length) {
            this.old.colors = this.colors.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.copyColor(x)));
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
        (x, i) => !this.labelsEqual(x, this.old.labels[i]))).length) {
            this.old.labels = this.labels.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.copyLabel(x)));
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
    }
    /**
     * @param {?} a
     * @return {?}
     */
    copyLabel(a) {
        if (Array.isArray(a)) {
            return [...a];
        }
        return a;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    labelsEqual(a, b) {
        return true
            && Array.isArray(a) === Array.isArray(b)
            && (Array.isArray(a) || a === b)
            && (!Array.isArray(a) || a.length === b.length)
            && (!Array.isArray(a) || a.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            (x, i) => x !== b[i])).length === 0);
    }
    /**
     * @param {?} a
     * @return {?}
     */
    copyColor(a) {
        /** @type {?} */
        const rc = {
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
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    colorsEqual(a, b) {
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
    }
    /**
     * @return {?}
     */
    updateColors() {
        this.datasets.forEach((/**
         * @param {?} elm
         * @param {?} index
         * @return {?}
         */
        (elm, index) => {
            if (this.colors && this.colors[index]) {
                Object.assign(elm, this.colors[index]);
            }
            else {
                Object.assign(elm, getColors(this.chartType, index, elm.data.length), Object.assign({}, elm));
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let updateRequired = UpdateType.Default;
        /** @type {?} */
        const wantUpdate = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
        this.subs.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => x.unsubscribe()));
    }
    /**
     * @param {?=} duration
     * @param {?=} lazy
     * @return {?}
     */
    update(duration, lazy) {
        if (this.chart) {
            return this.chart.update(duration, lazy);
        }
    }
    /**
     * @param {?} index
     * @param {?} hidden
     * @return {?}
     */
    hideDataset(index, hidden) {
        this.chart.getDatasetMeta(index).hidden = hidden;
        this.chart.update();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isDatasetHidden(index) {
        return this.chart.getDatasetMeta(index).hidden;
    }
    /**
     * @return {?}
     */
    toBase64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    getChartConfiguration() {
        /** @type {?} */
        const datasets = this.getDatasets();
        /** @type {?} */
        const options = Object.assign({}, this.options);
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
            (event, active) => {
                if (active && !active.length) {
                    return;
                }
                this.chartHover.emit({ event, active });
            });
        }
        if (!options.onClick) {
            options.onClick = (/**
             * @param {?=} event
             * @param {?=} active
             * @return {?}
             */
            (event, active) => {
                this.chartClick.emit({ event, active });
            });
        }
        /** @type {?} */
        const mergedOptions = this.smartMerge(options, this.themeService.getColorschemesOptions());
        /** @type {?} */
        const chartConfig = {
            type: this.chartType,
            data: {
                labels: this.labels || [],
                datasets
            },
            plugins: this.plugins,
            options: mergedOptions,
        };
        return chartConfig;
    }
    /**
     * @param {?} ctx
     * @return {?}
     */
    getChartBuilder(ctx /*, data:any[], options:any*/) {
        /** @type {?} */
        const chartConfig = this.getChartConfiguration();
        return new chartJs.Chart(ctx, chartConfig);
    }
    /**
     * @param {?} options
     * @param {?} overrides
     * @param {?=} level
     * @return {?}
     */
    smartMerge(options, overrides, level = 0) {
        if (level === 0) {
            options = cloneDeep(options);
        }
        /** @type {?} */
        const keysToUpdate = Object.keys(overrides);
        keysToUpdate.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (Array.isArray(overrides[key])) {
                /** @type {?} */
                const arrayElements = options[key];
                if (arrayElements) {
                    arrayElements.forEach((/**
                     * @param {?} r
                     * @return {?}
                     */
                    r => {
                        this.smartMerge(r, overrides[key][0], level + 1);
                    }));
                }
            }
            else if (typeof (overrides[key]) === 'object') {
                if (!(key in options)) {
                    options[key] = {};
                }
                this.smartMerge(options[key], overrides[key], level + 1);
            }
            else {
                options[key] = overrides[key];
            }
        }));
        if (level === 0) {
            return options;
        }
    }
    /**
     * @private
     * @param {?} label
     * @return {?}
     */
    isMultiLineLabel(label) {
        return Array.isArray(label);
    }
    /**
     * @private
     * @param {?} label
     * @return {?}
     */
    joinLabel(label) {
        if (!label) {
            return null;
        }
        if (this.isMultiLineLabel(label)) {
            return label.join(' ');
        }
        else {
            return label;
        }
    }
    /**
     * @private
     * @param {?} datasets
     * @return {?}
     */
    propagateDatasetsToData(datasets) {
        this.data = this.datasets.map((/**
         * @param {?} r
         * @return {?}
         */
        r => r.data));
        if (this.chart) {
            this.chart.data.datasets = datasets;
        }
        this.updateColors();
    }
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    propagateDataToDatasets(newDataValues) {
        if (this.isMultiDataSet(newDataValues)) {
            if (this.datasets && newDataValues.length === this.datasets.length) {
                this.datasets.forEach((/**
                 * @param {?} dataset
                 * @param {?} i
                 * @return {?}
                 */
                (dataset, i) => {
                    dataset.data = newDataValues[i];
                }));
            }
            else {
                this.datasets = newDataValues.map((/**
                 * @param {?} data
                 * @param {?} index
                 * @return {?}
                 */
                (data, index) => {
                    return { data, label: this.joinLabel(this.labels[index]) || `Label ${index}` };
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
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    isMultiDataSet(data) {
        return Array.isArray(data[0]);
    }
    /**
     * @private
     * @return {?}
     */
    getDatasets() {
        if (!this.datasets && !this.data) {
            throw new Error(`ng-charts configuration error, data or datasets field are required to render chart ${this.chartType}`);
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
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
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
    }
}
BaseChartDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'canvas[baseChart]',
                exportAs: 'base-chart'
            },] }
];
/** @nocollapse */
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ThemeService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2Jhc2UtY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBV3RDLHVCQWVDOzs7SUFkQyw4QkFBb0I7O0lBQ3BCLDhCQUFtQjs7SUFDbkIsa0NBQXdCOztJQUN4QixrQ0FBdUI7O0lBQ3ZCLHVDQUEyQjs7SUFDM0IsdUNBQThCOztJQUM5QixnQ0FBc0I7O0lBQ3RCLDBCQUFnQjs7SUFDaEIsK0JBQXFCOztJQUNyQiwwQkFBZ0I7O0lBQ2hCLGdDQUFzQjs7SUFDdEIsMEJBRUU7Ozs7SUFJRixVQUFPO0lBQ1AsU0FBTTtJQUNOLFVBQU87Ozs7O0FBUVQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUE0QzdCLFlBQ1UsT0FBbUIsRUFDbkIsWUFBMEI7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTFDcEIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFNbEMsZUFBVSxHQUF3RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JGLGVBQVUsR0FBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUs1RixRQUFHLEdBQWE7WUFDdEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsVUFBVSxFQUFFLENBQUM7WUFDYixjQUFjLEVBQUUsS0FBSztZQUNy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QUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFFckUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUU5RCxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDN0csSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUM7WUFFckUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCwwREFBMEQ7UUFDMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBRTtZQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUUxRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFckMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENB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SUFDdEcsd0NBQW9HOztJQUVwRyxpQ0FBbUI7O0lBQ25CLG1DQUFvQjs7Ozs7SUFFcEIsaUNBYUU7Ozs7O0lBRUYsa0NBQWtDOzs7OztJQWNoQyxxQ0FBMkI7Ozs7O0lBQzNCLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIERvQ2hlY2ssXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGNoYXJ0SnMgZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tICcuL2dldC1jb2xvcnMnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFNpbmdsZURhdGFTZXQgPSAobnVtYmVyW10gfCBjaGFydEpzLkNoYXJ0UG9pbnRbXSk7XHJcbmV4cG9ydCB0eXBlIE11bHRpRGF0YVNldCA9IChudW1iZXJbXSB8IGNoYXJ0SnMuQ2hhcnRQb2ludFtdKVtdO1xyXG5leHBvcnQgdHlwZSBTaW5nbGVPck11bHRpRGF0YVNldCA9IFNpbmdsZURhdGFTZXQgfCBNdWx0aURhdGFTZXQ7XHJcblxyXG5leHBvcnQgdHlwZSBQbHVnaW5TZXJ2aWNlR2xvYmFsUmVnaXN0cmF0aW9uQW5kT3B0aW9ucyA9IGNoYXJ0SnMuUGx1Z2luU2VydmljZUdsb2JhbFJlZ2lzdHJhdGlvbiAmIGNoYXJ0SnMuUGx1Z2luU2VydmljZVJlZ2lzdHJhdGlvbk9wdGlvbnM7XHJcbmV4cG9ydCB0eXBlIFNpbmdsZUxpbmVMYWJlbCA9IHN0cmluZztcclxuZXhwb3J0IHR5cGUgTXVsdGlMaW5lTGFiZWwgPSBzdHJpbmdbXTtcclxuZXhwb3J0IHR5cGUgTGFiZWwgPSBTaW5nbGVMaW5lTGFiZWwgfCBNdWx0aUxpbmVMYWJlbDtcclxuXHJcbmludGVyZmFjZSBPbGRTdGF0ZSB7XHJcbiAgZGF0YUV4aXN0czogYm9vbGVhbjtcclxuICBkYXRhTGVuZ3RoOiBudW1iZXI7XHJcbiAgZGF0YXNldHNFeGlzdHM6IGJvb2xlYW47XHJcbiAgZGF0YXNldHNMZW5ndGg6IG51bWJlcjtcclxuICBkYXRhc2V0c0RhdGFPYmplY3RzOiBhbnlbXTtcclxuICBkYXRhc2V0c0RhdGFMZW5ndGhzOiBudW1iZXJbXTtcclxuICBjb2xvcnNFeGlzdHM6IGJvb2xlYW47XHJcbiAgY29sb3JzOiBDb2xvcltdO1xyXG4gIGxhYmVsc0V4aXN0OiBib29sZWFuO1xyXG4gIGxhYmVsczogTGFiZWxbXTtcclxuICBsZWdlbmRFeGlzdHM6IGJvb2xlYW47XHJcbiAgbGVnZW5kOiB7XHJcbiAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5lbnVtIFVwZGF0ZVR5cGUge1xyXG4gIERlZmF1bHQsXHJcbiAgVXBkYXRlLFxyXG4gIFJlZnJlc2hcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FudmFzW2Jhc2VDaGFydF0nLFxyXG4gIGV4cG9ydEFzOiAnYmFzZS1jaGFydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IFNpbmdsZU9yTXVsdGlEYXRhU2V0O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhc2V0czogY2hhcnRKcy5DaGFydERhdGFTZXRzW107XHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsczogTGFiZWxbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogY2hhcnRKcy5DaGFydE9wdGlvbnMgPSB7fTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUeXBlOiBjaGFydEpzLkNoYXJ0VHlwZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3JzOiBDb2xvcltdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIHBsdWdpbnM6IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zW107XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPHsgZXZlbnQ/OiBNb3VzZUV2ZW50LCBhY3RpdmU/OiB7fVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIGN0eDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGFydDogQ2hhcnQ7XHJcblxyXG4gIHByaXZhdGUgb2xkOiBPbGRTdGF0ZSA9IHtcclxuICAgIGRhdGFFeGlzdHM6IGZhbHNlLFxyXG4gICAgZGF0YUxlbmd0aDogMCxcclxuICAgIGRhdGFzZXRzRXhpc3RzOiBmYWxzZSxcclxuICAgIGRhdGFzZXRzTGVuZ3RoOiAwLFxyXG4gICAgZGF0YXNldHNEYXRhT2JqZWN0czogW10sXHJcbiAgICBkYXRhc2V0c0RhdGFMZW5ndGhzOiBbXSxcclxuICAgIGNvbG9yc0V4aXN0czogZmFsc2UsXHJcbiAgICBjb2xvcnM6IFtdLFxyXG4gICAgbGFiZWxzRXhpc3Q6IGZhbHNlLFxyXG4gICAgbGFiZWxzOiBbXSxcclxuICAgIGxlZ2VuZEV4aXN0czogZmFsc2UsXHJcbiAgICBsZWdlbmQ6IHt9LFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlclBsdWdpbihwbHVnaW46IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zKSB7XHJcbiAgICBjaGFydEpzLkNoYXJ0LnBsdWdpbnMucmVnaXN0ZXIocGx1Z2luKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlclBsdWdpbihwbHVnaW46IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zKSB7XHJcbiAgICBjaGFydEpzLkNoYXJ0LnBsdWdpbnMudW5yZWdpc3RlcihwbHVnaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMudGhlbWVTZXJ2aWNlLmNvbG9yc2NoZW1lc09wdGlvbnMuc3Vic2NyaWJlKHIgPT4gdGhpcy50aGVtZUNoYW5nZWQocikpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGhlbWVDaGFuZ2VkKG9wdGlvbnM6IHt9KSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jaGFydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgdXBkYXRlUmVxdWlyZWQgPSBVcGRhdGVUeXBlLkRlZmF1bHQ7XHJcbiAgICBjb25zdCB3YW50VXBkYXRlID0gKHg6IFVwZGF0ZVR5cGUpID0+IHtcclxuICAgICAgdXBkYXRlUmVxdWlyZWQgPSB4ID4gdXBkYXRlUmVxdWlyZWQgPyB4IDogdXBkYXRlUmVxdWlyZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghIXRoaXMuZGF0YSAhPT0gdGhpcy5vbGQuZGF0YUV4aXN0cykge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZURhdGFUb0RhdGFzZXRzKHRoaXMuZGF0YSk7XHJcblxyXG4gICAgICB0aGlzLm9sZC5kYXRhRXhpc3RzID0gISF0aGlzLmRhdGE7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggIT09IHRoaXMub2xkLmRhdGFMZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQuZGF0YUxlbmd0aCA9IHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIHx8IDA7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISF0aGlzLmRhdGFzZXRzICE9PSB0aGlzLm9sZC5kYXRhc2V0c0V4aXN0cykge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0V4aXN0cyA9ICEhdGhpcy5kYXRhc2V0cztcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMubGVuZ3RoICE9PSB0aGlzLm9sZC5kYXRhc2V0c0xlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0xlbmd0aCA9IHRoaXMuZGF0YXNldHMgJiYgdGhpcy5kYXRhc2V0cy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMuZmlsdGVyKCh4LCBpKSA9PiB4LmRhdGEgIT09IHRoaXMub2xkLmRhdGFzZXRzRGF0YU9iamVjdHNbaV0pLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0RhdGFPYmplY3RzID0gdGhpcy5kYXRhc2V0cy5tYXAoeCA9PiB4LmRhdGEpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YXNldHMgJiYgdGhpcy5kYXRhc2V0cy5maWx0ZXIoKHgsIGkpID0+IHguZGF0YS5sZW5ndGggIT09IHRoaXMub2xkLmRhdGFzZXRzRGF0YUxlbmd0aHNbaV0pLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9sZC5kYXRhc2V0c0RhdGFMZW5ndGhzID0gdGhpcy5kYXRhc2V0cy5tYXAoeCA9PiB4LmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIXRoaXMuY29sb3JzICE9PSB0aGlzLm9sZC5jb2xvcnNFeGlzdHMpIHtcclxuICAgICAgdGhpcy5vbGQuY29sb3JzRXhpc3RzID0gISF0aGlzLmNvbG9ycztcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JzKCk7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIHNtZWxscyBvZiBpbmVmZmljaWVuY3ksIG1pZ2h0IG5lZWQgdG8gcmV2aXNpdCB0aGlzXHJcbiAgICBpZiAodGhpcy5jb2xvcnMgJiYgdGhpcy5jb2xvcnMuZmlsdGVyKCh4LCBpKSA9PiAhdGhpcy5jb2xvcnNFcXVhbCh4LCB0aGlzLm9sZC5jb2xvcnNbaV0pKS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQuY29sb3JzID0gdGhpcy5jb2xvcnMubWFwKHggPT4gdGhpcy5jb3B5Q29sb3IoeCkpO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghIXRoaXMubGFiZWxzICE9PSB0aGlzLm9sZC5sYWJlbHNFeGlzdCkge1xyXG4gICAgICB0aGlzLm9sZC5sYWJlbHNFeGlzdCA9ICEhdGhpcy5sYWJlbHM7XHJcblxyXG4gICAgICB3YW50VXBkYXRlKFVwZGF0ZVR5cGUuVXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYWJlbHMgJiYgdGhpcy5sYWJlbHMuZmlsdGVyKCh4LCBpKSA9PiAhdGhpcy5sYWJlbHNFcXVhbCh4LCB0aGlzLm9sZC5sYWJlbHNbaV0pKS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbGQubGFiZWxzID0gdGhpcy5sYWJlbHMubWFwKHggPT4gdGhpcy5jb3B5TGFiZWwoeCkpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhdGhpcy5vcHRpb25zLmxlZ2VuZCAhPT0gdGhpcy5vbGQubGVnZW5kRXhpc3RzKSB7XHJcbiAgICAgIHRoaXMub2xkLmxlZ2VuZEV4aXN0cyA9ICEhdGhpcy5vcHRpb25zLmxlZ2VuZDtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5SZWZyZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZCAmJiB0aGlzLm9wdGlvbnMubGVnZW5kLnBvc2l0aW9uICE9PSB0aGlzLm9sZC5sZWdlbmQucG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5vbGQubGVnZW5kLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLmxlZ2VuZC5wb3NpdGlvbjtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5SZWZyZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHVwZGF0ZVJlcXVpcmVkIGFzIFVwZGF0ZVR5cGUpIHtcclxuICAgICAgY2FzZSBVcGRhdGVUeXBlLkRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVXBkYXRlVHlwZS5VcGRhdGU6XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVcGRhdGVUeXBlLlJlZnJlc2g6XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb3B5TGFiZWwoYTogTGFiZWwpOiBMYWJlbCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xyXG4gICAgICByZXR1cm4gWy4uLmFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuICBsYWJlbHNFcXVhbChhOiBMYWJlbCwgYjogTGFiZWwpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgICAgICYmIEFycmF5LmlzQXJyYXkoYSkgPT09IEFycmF5LmlzQXJyYXkoYilcclxuICAgICAgJiYgKEFycmF5LmlzQXJyYXkoYSkgfHwgYSA9PT0gYilcclxuICAgICAgJiYgKCFBcnJheS5pc0FycmF5KGEpIHx8IGEubGVuZ3RoID09PSBiLmxlbmd0aClcclxuICAgICAgJiYgKCFBcnJheS5pc0FycmF5KGEpIHx8IGEuZmlsdGVyKCh4LCBpKSA9PiB4ICE9PSBiW2ldKS5sZW5ndGggPT09IDApXHJcbiAgICAgIDtcclxuICB9XHJcblxyXG4gIGNvcHlDb2xvcihhOiBDb2xvcik6IENvbG9yIHtcclxuICAgIGNvbnN0IHJjOiBDb2xvciA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBhLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgYm9yZGVyV2lkdGg6IGEuYm9yZGVyV2lkdGgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBhLmJvcmRlckNvbG9yLFxyXG4gICAgICBib3JkZXJDYXBTdHlsZTogYS5ib3JkZXJDYXBTdHlsZSxcclxuICAgICAgYm9yZGVyRGFzaDogYS5ib3JkZXJEYXNoLFxyXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiBhLmJvcmRlckRhc2hPZmZzZXQsXHJcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogYS5ib3JkZXJKb2luU3R5bGUsXHJcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IGEucG9pbnRCb3JkZXJDb2xvcixcclxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGEucG9pbnRCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IGEucG9pbnRCb3JkZXJXaWR0aCxcclxuICAgICAgcG9pbnRSYWRpdXM6IGEucG9pbnRSYWRpdXMsXHJcbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IGEucG9pbnRIb3ZlclJhZGl1cyxcclxuICAgICAgcG9pbnRIaXRSYWRpdXM6IGEucG9pbnRIaXRSYWRpdXMsXHJcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBhLnBvaW50SG92ZXJCb3JkZXJDb2xvcixcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiBhLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxcclxuICAgICAgcG9pbnRTdHlsZTogYS5wb2ludFN0eWxlLFxyXG4gICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogYS5ob3ZlckJhY2tncm91bmRDb2xvcixcclxuICAgICAgaG92ZXJCb3JkZXJDb2xvcjogYS5ob3ZlckJvcmRlckNvbG9yLFxyXG4gICAgICBob3ZlckJvcmRlcldpZHRoOiBhLmhvdmVyQm9yZGVyV2lkdGgsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByYztcclxuICB9XHJcblxyXG4gIGNvbG9yc0VxdWFsKGE6IENvbG9yLCBiOiBDb2xvcikge1xyXG4gICAgaWYgKCFhICE9PSAhYikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIWEgfHwgdHJ1ZVxyXG4gICAgICAmJiAoYS5iYWNrZ3JvdW5kQ29sb3IgPT09IGIuYmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5ib3JkZXJXaWR0aCA9PT0gYi5ib3JkZXJXaWR0aClcclxuICAgICAgJiYgKGEuYm9yZGVyQ29sb3IgPT09IGIuYm9yZGVyQ29sb3IpXHJcbiAgICAgICYmIChhLmJvcmRlckNhcFN0eWxlID09PSBiLmJvcmRlckNhcFN0eWxlKVxyXG4gICAgICAmJiAoYS5ib3JkZXJEYXNoID09PSBiLmJvcmRlckRhc2gpXHJcbiAgICAgICYmIChhLmJvcmRlckRhc2hPZmZzZXQgPT09IGIuYm9yZGVyRGFzaE9mZnNldClcclxuICAgICAgJiYgKGEuYm9yZGVySm9pblN0eWxlID09PSBiLmJvcmRlckpvaW5TdHlsZSlcclxuICAgICAgJiYgKGEucG9pbnRCb3JkZXJDb2xvciA9PT0gYi5wb2ludEJvcmRlckNvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEJhY2tncm91bmRDb2xvciA9PT0gYi5wb2ludEJhY2tncm91bmRDb2xvcilcclxuICAgICAgJiYgKGEucG9pbnRCb3JkZXJXaWR0aCA9PT0gYi5wb2ludEJvcmRlcldpZHRoKVxyXG4gICAgICAmJiAoYS5wb2ludFJhZGl1cyA9PT0gYi5wb2ludFJhZGl1cylcclxuICAgICAgJiYgKGEucG9pbnRIb3ZlclJhZGl1cyA9PT0gYi5wb2ludEhvdmVyUmFkaXVzKVxyXG4gICAgICAmJiAoYS5wb2ludEhpdFJhZGl1cyA9PT0gYi5wb2ludEhpdFJhZGl1cylcclxuICAgICAgJiYgKGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciA9PT0gYi5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEhvdmVyQm9yZGVyQ29sb3IgPT09IGIucG9pbnRIb3ZlckJvcmRlckNvbG9yKVxyXG4gICAgICAmJiAoYS5wb2ludEhvdmVyQm9yZGVyV2lkdGggPT09IGIucG9pbnRIb3ZlckJvcmRlcldpZHRoKVxyXG4gICAgICAmJiAoYS5wb2ludFN0eWxlID09PSBiLnBvaW50U3R5bGUpXHJcbiAgICAgICYmIChhLmhvdmVyQmFja2dyb3VuZENvbG9yID09PSBiLmhvdmVyQmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAmJiAoYS5ob3ZlckJvcmRlckNvbG9yID09PSBiLmhvdmVyQm9yZGVyQ29sb3IpXHJcbiAgICAgICYmIChhLmhvdmVyQm9yZGVyV2lkdGggPT09IGIuaG92ZXJCb3JkZXJXaWR0aClcclxuICAgICAgO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sb3JzKCkge1xyXG4gICAgdGhpcy5kYXRhc2V0cy5mb3JFYWNoKChlbG0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbG9ycyAmJiB0aGlzLmNvbG9yc1tpbmRleF0pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsbSwgdGhpcy5jb2xvcnNbaW5kZXhdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsbSwgZ2V0Q29sb3JzKHRoaXMuY2hhcnRUeXBlLCBpbmRleCwgZWxtLmRhdGEubGVuZ3RoKSwgeyAuLi5lbG0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGxldCB1cGRhdGVSZXF1aXJlZCA9IFVwZGF0ZVR5cGUuRGVmYXVsdDtcclxuICAgIGNvbnN0IHdhbnRVcGRhdGUgPSAoeDogVXBkYXRlVHlwZSkgPT4ge1xyXG4gICAgICB1cGRhdGVSZXF1aXJlZCA9IHggPiB1cGRhdGVSZXF1aXJlZCA/IHggOiB1cGRhdGVSZXF1aXJlZDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZXMgYXJlIGluIHRoZSBkYXRhIG9yIGRhdGFzZXRzIG9yIGxhYmVscyBvciBsZWdlbmRcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVEYXRhVG9EYXRhc2V0cyhjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKTtcclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhc2V0cycpICYmIGNoYW5nZXMuZGF0YXNldHMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlRGF0YXNldHNUb0RhdGEoY2hhbmdlcy5kYXRhc2V0cy5jdXJyZW50VmFsdWUpO1xyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xhYmVscycpKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFydC5kYXRhLmxhYmVscyA9IGNoYW5nZXMubGFiZWxzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xlZ2VuZCcpKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5jaGFydC5jb25maWcub3B0aW9ucy5sZWdlbmQuZGlzcGxheSA9IGNoYW5nZXMubGVnZW5kLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB0aGlzLmNoYXJ0LmdlbmVyYXRlTGVnZW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhbnRVcGRhdGUoVXBkYXRlVHlwZS5VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcclxuICAgICAgd2FudFVwZGF0ZShVcGRhdGVUeXBlLlJlZnJlc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodXBkYXRlUmVxdWlyZWQgYXMgVXBkYXRlVHlwZSkge1xyXG4gICAgICBjYXNlIFVwZGF0ZVR5cGUuVXBkYXRlOlxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVXBkYXRlVHlwZS5SZWZyZXNoOlxyXG4gICAgICBjYXNlIFVwZGF0ZVR5cGUuRGVmYXVsdDpcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJzLmZvckVhY2goeCA9PiB4LnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShkdXJhdGlvbj86IGFueSwgbGF6eT86IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hhcnQudXBkYXRlKGR1cmF0aW9uLCBsYXp5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlRGF0YXNldChpbmRleDogbnVtYmVyLCBoaWRkZW46IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEoaW5kZXgpLmhpZGRlbiA9IGhpZGRlbjtcclxuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEYXRhc2V0SGlkZGVuKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKGluZGV4KS5oaWRkZW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9CYXNlNjRJbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnQudG9CYXNlNjRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYXJ0Q29uZmlndXJhdGlvbigpOiBjaGFydEpzLkNoYXJ0Q29uZmlndXJhdGlvbiB7XHJcbiAgICBjb25zdCBkYXRhc2V0cyA9IHRoaXMuZ2V0RGF0YXNldHMoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB7IGRpc3BsYXk6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICAvLyBob29rIGZvciBvbkhvdmVyIGFuZCBvbkNsaWNrIGV2ZW50c1xyXG4gICAgb3B0aW9ucy5ob3ZlciA9IG9wdGlvbnMuaG92ZXIgfHwge307XHJcbiAgICBpZiAoIW9wdGlvbnMuaG92ZXIub25Ib3Zlcikge1xyXG4gICAgICBvcHRpb25zLmhvdmVyLm9uSG92ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUgJiYgIWFjdGl2ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5vbkNsaWNrKSB7XHJcbiAgICAgIG9wdGlvbnMub25DbGljayA9IChldmVudD86IE1vdXNlRXZlbnQsIGFjdGl2ZT86IHt9W10pID0+IHtcclxuICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHRoaXMuc21hcnRNZXJnZShvcHRpb25zLCB0aGlzLnRoZW1lU2VydmljZS5nZXRDb2xvcnNjaGVtZXNPcHRpb25zKCkpO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0Q29uZmlnOiBjaGFydEpzLkNoYXJ0Q29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgdHlwZTogdGhpcy5jaGFydFR5cGUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzIHx8IFtdLFxyXG4gICAgICAgIGRhdGFzZXRzXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcclxuICAgICAgb3B0aW9uczogbWVyZ2VkT3B0aW9ucyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNoYXJ0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoYXJ0QnVpbGRlcihjdHg6IHN0cmluZy8qLCBkYXRhOmFueVtdLCBvcHRpb25zOmFueSovKTogQ2hhcnQge1xyXG4gICAgY29uc3QgY2hhcnRDb25maWcgPSB0aGlzLmdldENoYXJ0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgcmV0dXJuIG5ldyBjaGFydEpzLkNoYXJ0KGN0eCwgY2hhcnRDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgc21hcnRNZXJnZShvcHRpb25zOiBhbnksIG92ZXJyaWRlczogYW55LCBsZXZlbDogbnVtYmVyID0gMCk6IGFueSB7XHJcbiAgICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgICAgb3B0aW9ucyA9IGNsb25lRGVlcChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXNUb1VwZGF0ZSA9IE9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XHJcbiAgICBrZXlzVG9VcGRhdGUuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvdmVycmlkZXNba2V5XSkpIHtcclxuICAgICAgICBjb25zdCBhcnJheUVsZW1lbnRzID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIGlmIChhcnJheUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICBhcnJheUVsZW1lbnRzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc21hcnRNZXJnZShyLCBvdmVycmlkZXNba2V5XVswXSwgbGV2ZWwgKyAxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG92ZXJyaWRlc1trZXldKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICAgIG9wdGlvbnNba2V5XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNtYXJ0TWVyZ2Uob3B0aW9uc1trZXldLCBvdmVycmlkZXNba2V5XSwgbGV2ZWwgKyAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25zW2tleV0gPSBvdmVycmlkZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTXVsdGlMaW5lTGFiZWwobGFiZWw6IExhYmVsKTogbGFiZWwgaXMgTXVsdGlMaW5lTGFiZWwge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBqb2luTGFiZWwobGFiZWw6IExhYmVsKTogc3RyaW5nIHtcclxuICAgIGlmICghbGFiZWwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc011bHRpTGluZUxhYmVsKGxhYmVsKSkge1xyXG4gICAgICByZXR1cm4gbGFiZWwuam9pbignICcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9wYWdhdGVEYXRhc2V0c1RvRGF0YShkYXRhc2V0czogY2hhcnRKcy5DaGFydERhdGFTZXRzW10pIHtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YXNldHMubWFwKHIgPT4gci5kYXRhKTtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IGRhdGFzZXRzO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvcGFnYXRlRGF0YVRvRGF0YXNldHMobmV3RGF0YVZhbHVlczogU2luZ2xlT3JNdWx0aURhdGFTZXQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlEYXRhU2V0KG5ld0RhdGFWYWx1ZXMpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIG5ld0RhdGFWYWx1ZXMubGVuZ3RoID09PSB0aGlzLmRhdGFzZXRzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldCwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBkYXRhc2V0LmRhdGEgPSBuZXdEYXRhVmFsdWVzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMgPSBuZXdEYXRhVmFsdWVzLm1hcCgoZGF0YTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxhYmVsOiB0aGlzLmpvaW5MYWJlbCh0aGlzLmxhYmVsc1tpbmRleF0pIHx8IGBMYWJlbCAke2luZGV4fWAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICAgICAgdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzID0gdGhpcy5kYXRhc2V0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhc2V0cykge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMgPSBbeyBkYXRhOiBuZXdEYXRhVmFsdWVzIH1dO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHMgPSB0aGlzLmRhdGFzZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFzZXRzWzBdLmRhdGEgPSBuZXdEYXRhVmFsdWVzO1xyXG4gICAgICAgIHRoaXMuZGF0YXNldHMuc3BsaWNlKDEpOyAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIGJ1dCB0aGUgZmlyc3RcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDb2xvcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNdWx0aURhdGFTZXQoZGF0YTogU2luZ2xlT3JNdWx0aURhdGFTZXQpOiBkYXRhIGlzIE11bHRpRGF0YVNldCB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhWzBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YXNldHMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YXNldHMgJiYgIXRoaXMuZGF0YSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5nLWNoYXJ0cyBjb25maWd1cmF0aW9uIGVycm9yLCBkYXRhIG9yIGRhdGFzZXRzIGZpZWxkIGFyZSByZXF1aXJlZCB0byByZW5kZXIgY2hhcnQgJHt0aGlzLmNoYXJ0VHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBgZGF0YXNldHNgIGlzIGRlZmluZWQsIHVzZSBpdCBvdmVyIHRoZSBgZGF0YWAgcHJvcGVydHkuXHJcbiAgICBpZiAodGhpcy5kYXRhc2V0cykge1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZURhdGFzZXRzVG9EYXRhKHRoaXMuZGF0YXNldHMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhc2V0cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlRGF0YVRvRGF0YXNldHModGhpcy5kYXRhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YXNldHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2goKSB7XHJcbiAgICAvLyBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5yZXNwb25zaXZlKSB7XHJcbiAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWZyZXNoKCksIDUwKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBsaW5lLCBpdCBpcyBwcm9kdWNpbmcgZmxpY2tlcmluZ1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY2hhcnQgPSB2b2lkIDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdHgpIHtcclxuICAgICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRCdWlsZGVyKHRoaXMuY3R4LyosIGRhdGEsIHRoaXMub3B0aW9ucyovKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19