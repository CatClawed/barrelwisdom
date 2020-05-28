import { OnDestroy, OnChanges, OnInit, EventEmitter, ElementRef, SimpleChanges, DoCheck } from '@angular/core';
import * as chartJs from 'chart.js';
import { Color } from './color';
import { ThemeService } from './theme.service';
export declare type SingleDataSet = (number[] | chartJs.ChartPoint[]);
export declare type MultiDataSet = (number[] | chartJs.ChartPoint[])[];
export declare type SingleOrMultiDataSet = SingleDataSet | MultiDataSet;
export declare type PluginServiceGlobalRegistrationAndOptions = chartJs.PluginServiceGlobalRegistration & chartJs.PluginServiceRegistrationOptions;
export declare type SingleLineLabel = string;
export declare type MultiLineLabel = string[];
export declare type Label = SingleLineLabel | MultiLineLabel;
export declare class BaseChartDirective implements OnDestroy, OnChanges, OnInit, OnDestroy, DoCheck {
    private element;
    private themeService;
    data: SingleOrMultiDataSet;
    datasets: chartJs.ChartDataSets[];
    labels: Label[];
    options: chartJs.ChartOptions;
    chartType: chartJs.ChartType;
    colors: Color[];
    legend: boolean;
    plugins: PluginServiceGlobalRegistrationAndOptions[];
    chartClick: EventEmitter<{
        event?: MouseEvent;
        active?: {}[];
    }>;
    chartHover: EventEmitter<{
        event: MouseEvent;
        active: {}[];
    }>;
    ctx: string;
    chart: Chart;
    private old;
    private subs;
    /**
     * Register a plugin.
     */
    static registerPlugin(plugin: PluginServiceGlobalRegistrationAndOptions): void;
    static unregisterPlugin(plugin: PluginServiceGlobalRegistrationAndOptions): void;
    constructor(element: ElementRef, themeService: ThemeService);
    ngOnInit(): void;
    private themeChanged;
    ngDoCheck(): void;
    copyLabel(a: Label): Label;
    labelsEqual(a: Label, b: Label): boolean;
    copyColor(a: Color): Color;
    colorsEqual(a: Color, b: Color): boolean;
    updateColors(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    update(duration?: any, lazy?: any): {};
    hideDataset(index: number, hidden: boolean): void;
    isDatasetHidden(index: number): boolean;
    toBase64Image(): string;
    getChartConfiguration(): chartJs.ChartConfiguration;
    getChartBuilder(ctx: string): Chart;
    smartMerge(options: any, overrides: any, level?: number): any;
    private isMultiLineLabel;
    private joinLabel;
    private propagateDatasetsToData;
    private propagateDataToDatasets;
    private isMultiDataSet;
    private getDatasets;
    private refresh;
}
