/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class BsDatepickerActions {
    /**
     * @return {?}
     */
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    /**
     * @return {?}
     */
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    /**
     * @return {?}
     */
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    /**
     * @param {?} step
     * @return {?}
     */
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    /**
     * @param {?} days
     * @return {?}
     */
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesEnabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESENABLED,
            payload: dates
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDateCustomClasses(value) {
        return {
            type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
            payload: value
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    BsDatepickerActions.CALCULATE;
    /** @type {?} */
    BsDatepickerActions.FORMAT;
    /** @type {?} */
    BsDatepickerActions.FLAG;
    /** @type {?} */
    BsDatepickerActions.SELECT;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_OFFSET;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_TO;
    /** @type {?} */
    BsDatepickerActions.SET_OPTIONS;
    /** @type {?} */
    BsDatepickerActions.HOVER;
    /** @type {?} */
    BsDatepickerActions.CHANGE_VIEWMODE;
    /** @type {?} */
    BsDatepickerActions.SET_MIN_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_MAX_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_DAYSDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATESDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATESENABLED;
    /** @type {?} */
    BsDatepickerActions.SET_IS_DISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES;
    /** @type {?} */
    BsDatepickerActions.SET_LOCALE;
    /** @type {?} */
    BsDatepickerActions.SELECT_RANGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZM0MsTUFBTSxPQUFPLG1CQUFtQjs7OztJQXVCOUIsU0FBUztRQUNQLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1lBQ2hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQTJCO1FBQ3hDLE9BQU87WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtZQUN6QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUE0QjtRQUNyQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFdBQVc7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFF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dkUsVUFBVTs7OztJQUVULDhCQUFrRTs7SUFDbEUsMkJBQWlFOztJQUNqRSx5QkFBZ0Q7O0lBQ2hELDJCQUFvRDs7SUFDcEQsb0NBQWlFOztJQUNqRSxnQ0FBOEQ7O0lBQzlELGdDQUFtRTs7SUFDbkUsMEJBQWtEOztJQUNsRCxvQ0FBa0U7O0lBRWxFLGlDQUEyRDs7SUFDM0QsaUNBQTJEOztJQUMzRCxxQ0FBb0U7O0lBQ3BFLHNDQUFzRTs7SUFDdEUscUNBQW9FOztJQUNwRSxvQ0FBaUU7O0lBQ2pFLDRDQUFpRjs7SUFFakYsK0JBQWtFOztJQUVsRSxpQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1xufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQWN0aW9ucyB7XG4gIHN0YXRpYyByZWFkb25seSBDQUxDVUxBVEUgPSAnW2RhdGVwaWNrZXJdIGNhbGN1bGF0ZSBkYXRlcyBtYXRyaXgnO1xuICBzdGF0aWMgcmVhZG9ubHkgRk9STUFUID0gJ1tkYXRlcGlja2VyXSBmb3JtYXQgZGF0ZXBpY2tlciB2YWx1ZXMnO1xuICBzdGF0aWMgcmVhZG9ubHkgRkxBRyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGZsYWdzJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdbZGF0ZXBpY2tlcl0gc2VsZWN0IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfT0ZGU0VUID0gJ1tkYXRlcGlja2VyXSBzaGlmdCB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfVE8gPSAnW2RhdGVwaWNrZXJdIGNoYW5nZSB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX09QVElPTlMgPSAnW2RhdGVwaWNrZXJdIHVwZGF0ZSByZW5kZXIgb3B0aW9ucyc7XG4gIHN0YXRpYyByZWFkb25seSBIT1ZFUiA9ICdbZGF0ZXBpY2tlcl0gaG92ZXIgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfVklFV01PREUgPSAnW2RhdGVwaWNrZXJdIHN3aXRjaCB2aWV3IG1vZGUnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUlOX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtaW4gZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUFYX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtYXggZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFZU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF5cyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFURVNESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRhdGVzIGRpc2FibGVkJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVRFU0VOQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcyBlbmFibGVkJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9JU19ESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGlzIGRpc2FibGVkJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVRFX0NVU1RPTV9DTEFTU0VTID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZSBjdXN0b20gY2xhc3Nlcyc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVF9SQU5HRSA9ICdbZGF0ZXJhbmdlcGlja2VyXSBzZWxlY3QgZGF0ZXMgcmFuZ2UnO1xuXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFIH07XG4gIH1cblxuICBmb3JtYXQoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xuICB9XG5cbiAgZmxhZygpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXG4gICAgICBwYXlsb2FkOiBzdGVwXG4gICAgfTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBob3ZlckRheShldmVudDogQ2VsbEhvdmVyRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxuICAgICAgcGF5bG9hZDogZXZlbnQuaXNIb3ZlcmVkID8gZXZlbnQuY2VsbC5kYXRlIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGRheXNEaXNhYmxlZChkYXlzOiBudW1iZXJbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRheXNcbiAgICB9O1xuICB9XG5cbiAgZGF0ZXNEaXNhYmxlZChkYXRlczogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFURVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRhdGVzXG4gICAgfTtcbiAgfVxuXG4gIGRhdGVzRW5hYmxlZChkYXRlczogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFURVNFTkFCTEVELFxuICAgICAgcGF5bG9hZDogZGF0ZXNcbiAgICB9O1xuICB9XG5cbiAgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0lTX0RJU0FCTEVELFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgc2V0RGF0ZUN1c3RvbUNsYXNzZXModmFsdWU6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFURV9DVVNUT01fQ0xBU1NFUyxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcbiAgICAgIHBheWxvYWQ6IGxvY2FsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==