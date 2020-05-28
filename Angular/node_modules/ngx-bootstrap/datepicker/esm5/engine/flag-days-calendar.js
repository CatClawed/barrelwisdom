/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isAfter, isBefore, isDisabledDay, isSameDay, isSameMonth, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled, isDisabledDate, isEnabledDate } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagDaysCalendarOptions() { }
if (false) {
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.daysDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.datesDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.datesEnabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.hoveredDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedRange;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.monthIndex;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.dateCustomClasses;
}
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
export function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((/**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach((/**
         * @param {?} day
         * @param {?} dayIndex
         * @return {?}
         */
        function (day, dayIndex) {
            // datepicker
            /** @type {?} */
            var isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            /** @type {?} */
            var isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            /** @type {?} */
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            /** @type {?} */
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            /** @type {?} */
            var isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            /** @type {?} */
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled) ||
                isEnabledDate(day.date, options.datesEnabled);
            /** @type {?} */
            var currentDate = new Date();
            /** @type {?} */
            var isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            /** @type {?} */
            var customClasses = options.dateCustomClasses && options.dateCustomClasses
                .map((/**
             * @param {?} dcc
             * @return {?}
             */
            function (dcc) { return isSameDay(day.date, dcc.date) ? dcc.classes : []; }))
                .reduce((/**
             * @param {?} previousValue
             * @param {?} currentValue
             * @return {?}
             */
            function (previousValue, currentValue) { return previousValue.concat(currentValue); }), [])
                .join(' ')
                || '';
            // decide update or not
            /** @type {?} */
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled,
                isToday: isToday,
                customClasses: customClasses
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange ||
                day.customClasses !== newDay.customClasses) {
                week.days[dayIndex] = newDay;
            }
        }));
    }));
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsYUFBYSxFQUNiLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFNUYsNkNBYUM7OztJQVpDLDZDQUFvQjs7SUFDcEIsMENBQWM7O0lBQ2QsMENBQWM7O0lBQ2QsK0NBQXVCOztJQUN2QixnREFBc0I7O0lBQ3RCLCtDQUFxQjs7SUFDckIsOENBQWtCOztJQUNsQiwrQ0FBbUI7O0lBQ25CLGdEQUFzQjs7SUFDdEIsZ0RBQXNCOztJQUN0Qiw2Q0FBbUI7O0lBQ25CLG9EQUFpRDs7Ozs7OztBQUduRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLGNBQXFDLEVBQ3JDLE9BQWdDO0lBRWhDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztJQUFDLFVBQUMsSUFBbUI7UUFDL0MscURBQXFEO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEdBQWlCLEVBQUUsUUFBZ0I7OztnQkFFOUMsWUFBWSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQzs7Z0JBRTNELFNBQVMsR0FDYixDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDOzs7Z0JBRXJELGdCQUFnQixHQUNwQixDQUFDLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLGFBQWE7Z0JBQ3JCLFNBQVMsQ0FBQyxH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QUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1RDtJQUVELElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUM7S0FDdkQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbCxcbiAgRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmltcG9ydCB7XG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlLFxuICBpc0Rpc2FibGVkRGF5LFxuICBpc1NhbWVEYXksXG4gIGlzU2FtZU1vbnRoLFxuICBzaGlmdERhdGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuaW1wb3J0IHsgaXNNb250aERpc2FibGVkLCBpc0Rpc2FibGVkRGF0ZSwgaXNFbmFibGVkRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFnRGF5c0NhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGRheXNEaXNhYmxlZDogbnVtYmVyW107XG4gIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcbiAgZGF0ZXNFbmFibGVkOiBEYXRlW107XG4gIGhvdmVyZWREYXRlOiBEYXRlO1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICBtb250aEluZGV4OiBudW1iZXI7XG4gIGRhdGVDdXN0b21DbGFzc2VzOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdEYXlzQ2FsZW5kYXIoXG4gIGZvcm1hdHRlZE1vbnRoOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIG9wdGlvbnM6IEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zXG4pOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICBmb3JtYXR0ZWRNb250aC53ZWVrcy5mb3JFYWNoKCh3ZWVrOiBXZWVrVmlld01vZGVsKSA9PiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cbiAgICB3ZWVrLmRheXMuZm9yRWFjaCgoZGF5OiBEYXlWaWV3TW9kZWwsIGRheUluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIGRhdGVwaWNrZXJcbiAgICAgIGNvbnN0IGlzT3RoZXJNb250aCA9ICFpc1NhbWVNb250aChkYXkuZGF0ZSwgZm9ybWF0dGVkTW9udGgubW9udGgpO1xuXG4gICAgICBjb25zdCBpc0hvdmVyZWQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG4gICAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25TdGFydCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzBdKTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uRW5kID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMV0pO1xuXG4gICAgICBjb25zdCBpc1NlbGVjdGVkID1cbiAgICAgICAgKCFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSkpIHx8XG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQ7XG5cbiAgICAgIGNvbnN0IGlzSW5SYW5nZSA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzRGF0ZUluUmFuZ2UoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XG5cbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxuICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgaXNCZWZvcmUoZGF5LmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgJ2RheScpIHx8XG4gICAgICAgIGlzQWZ0ZXIoZGF5LmRhdGUsIG9wdGlvbnMubWF4RGF0ZSwgJ2RheScpIHx8XG4gICAgICAgIGlzRGlzYWJsZWREYXkoZGF5LmRhdGUsIG9wdGlvbnMuZGF5c0Rpc2FibGVkKSB8fFxuICAgICAgICBpc0Rpc2FibGVkRGF0ZShkYXkuZGF0ZSwgb3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB8fFxuICAgICAgICBpc0VuYWJsZWREYXRlKGRheS5kYXRlLCBvcHRpb25zLmRhdGVzRW5hYmxlZCk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgY3VycmVudERhdGUpO1xuXG4gICAgICBjb25zdCBjdXN0b21DbGFzc2VzID0gb3B0aW9ucy5kYXRlQ3VzdG9tQ2xhc3NlcyAmJiBvcHRpb25zLmRhdGVDdXN0b21DbGFzc2VzXG4gICAgICAgIC5tYXAoZGNjID0+IGlzU2FtZURheShkYXkuZGF0ZSwgZGNjLmRhdGUpID8gZGNjLmNsYXNzZXMgOiBbXSlcbiAgICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2aW91c1ZhbHVlLmNvbmNhdChjdXJyZW50VmFsdWUpLCBbXSlcbiAgICAgICAgLmpvaW4oJyAnKVxuICAgICAgICB8fCAnJztcblxuXG4gICAgICAvLyBkZWNpZGUgdXBkYXRlIG9yIG5vdFxuICAgICAgY29uc3QgbmV3RGF5ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG4gICAgICAgIGlzT3RoZXJNb250aCxcbiAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0LFxuICAgICAgICBpc1NlbGVjdGlvbkVuZCxcbiAgICAgICAgaXNJblJhbmdlLFxuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICBpc1RvZGF5LFxuICAgICAgICBjdXN0b21DbGFzc2VzXG4gICAgICB9KTtcblxuICAgICAgaWYgKFxuICAgICAgICBkYXkuaXNPdGhlck1vbnRoICE9PSBuZXdEYXkuaXNPdGhlck1vbnRoIHx8XG4gICAgICAgIGRheS5pc0hvdmVyZWQgIT09IG5ld0RheS5pc0hvdmVyZWQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0ZWQgIT09IG5ld0RheS5pc1NlbGVjdGVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGlvblN0YXJ0ICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25FbmQgIT09IG5ld0RheS5pc1NlbGVjdGlvbkVuZCB8fFxuICAgICAgICBkYXkuaXNEaXNhYmxlZCAhPT0gbmV3RGF5LmlzRGlzYWJsZWQgfHxcbiAgICAgICAgZGF5LmlzSW5SYW5nZSAhPT0gbmV3RGF5LmlzSW5SYW5nZSB8fFxuICAgICAgICBkYXkuY3VzdG9tQ2xhc3NlcyAhPT0gbmV3RGF5LmN1c3RvbUNsYXNzZXNcbiAgICAgICkge1xuICAgICAgICB3ZWVrLmRheXNbZGF5SW5kZXhdID0gbmV3RGF5O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcbiAgZm9ybWF0dGVkTW9udGguaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xuICBmb3JtYXR0ZWRNb250aC5oaWRlUmlnaHRBcnJvdyA9XG4gICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxuICAgICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcblxuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlTGVmdEFycm93ID0gaXNNb250aERpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogLTEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiBmb3JtYXR0ZWRNb250aDtcbn1cblxuZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShcbiAgZGF0ZTogRGF0ZSxcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdLFxuICBob3ZlcmVkRGF0ZTogRGF0ZVxuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZSB8fCAhc2VsZWN0ZWRSYW5nZVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZFJhbmdlWzFdKSB7XG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gc2VsZWN0ZWRSYW5nZVsxXTtcbiAgfVxuXG4gIGlmIChob3ZlcmVkRGF0ZSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IGhvdmVyZWREYXRlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19