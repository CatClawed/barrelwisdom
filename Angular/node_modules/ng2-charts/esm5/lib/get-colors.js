/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defaultColors } from './default-colors';
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
export function getColors(chartType, index, count) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvbG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvZ2V0LWNvbG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7OztBQUtqRCxNQUFNLFVBQVUsU0FBUyxDQUFDLFNBQWlCLEVBQUUsS0FBYSxFQUFFLEtBQWE7SUFDdkUsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxVQUFVLEVBQUU7UUFDbkQsT0FBTyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFJLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDN0IsT0FBTyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFO1FBQ2pELE9BQU8sZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBRUQsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxlQUFlLEVBQUU7UUFDeEQsT0FBTyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0M7SUFFRCxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDM0IsT0FBTyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDL0M7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUFzQyxTQUFXLENBQUMsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7QUFFRCxTQUFTLElBQUksQ0FBQyxNQUFx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QUM7UUFDdkUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWUsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxFQUFDO0tBQ2xFLENBQUM7QUFDSixDQUFDOzs7O0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUM7Ozs7OztBQUtELFNBQVMsYUFBYSxDQUFDLEtBQWE7SUFDbEMsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksY0FBYyxFQUFFLENBQUM7QUFDbEQsQ0FBQzs7Ozs7O0FBS0QsU0FBUyxjQUFjLENBQUMsS0FBYTs7UUFDN0IsU0FBUyxHQUFvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4vY29sb3JzJztcclxuaW1wb3J0IHsgZGVmYXVsdENvbG9ycyB9IGZyb20gJy4vZGVmYXVsdC1jb2xvcnMnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGNvbG9ycyBieSBjaGFydCB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JzKGNoYXJ0VHlwZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogQ29sb3Ige1xyXG4gIGlmIChjaGFydFR5cGUgPT09ICdwaWUnIHx8IGNoYXJ0VHlwZSA9PT0gJ2RvdWdobnV0Jykge1xyXG4gICAgcmV0dXJuIGZvcm1hdFBpZUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BvbGFyQXJlYScpIHtcclxuICAgIHJldHVybiBmb3JtYXRQb2xhckFyZWFDb2xvcnMoZ2VuZXJhdGVDb2xvcnMoY291bnQpKTtcclxuICB9XHJcblxyXG4gIGlmIChjaGFydFR5cGUgPT09ICdsaW5lJyB8fCBjaGFydFR5cGUgPT09ICdyYWRhcicpIHtcclxuICAgIHJldHVybiBmb3JtYXRMaW5lQ29sb3IoZ2VuZXJhdGVDb2xvcihpbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ2JhcicgfHwgY2hhcnRUeXBlID09PSAnaG9yaXpvbnRhbEJhcicpIHtcclxuICAgIHJldHVybiBmb3JtYXRCYXJDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2hhcnRUeXBlID09PSAnYnViYmxlJykge1xyXG4gICAgcmV0dXJuIGZvcm1hdFBpZUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3NjYXR0ZXInKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0UGllQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoYGdldENvbG9ycyAtIFVuc3VwcG9ydGVkIGNoYXJ0IHR5cGUgJHtjaGFydFR5cGV9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJnYmEoY29sb3VyOiBBcnJheTxudW1iZXI+LCBhbHBoYTogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gJ3JnYmEoJyArIGNvbG91ci5jb25jYXQoYWxwaGEpLmpvaW4oJywnKSArICcpJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdExpbmVDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuNCksXHJcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxyXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcclxuICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDAuOClcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRCYXJDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuNiksXHJcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxyXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjgpLFxyXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0UGllQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogQ29sb3JzIHtcclxuICByZXR1cm4ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcclxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcclxuICAgIHBvaW50Qm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcclxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxyXG4gICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFBvbGFyQXJlYUNvbG9ycyhjb2xvcnM6IEFycmF5PG51bWJlcltdPik6IENvbG9yIHtcclxuICByZXR1cm4ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxyXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC44KSksXHJcbiAgICBob3ZlckJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IG51bWJlcltdIHtcclxuICByZXR1cm4gW2dldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KSwgZ2V0UmFuZG9tSW50KDAsIDI1NSldO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgY29sb3JzIGZvciBsaW5lfGJhciBjaGFydHNcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3IoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcclxuICByZXR1cm4gZGVmYXVsdENvbG9yc1tpbmRleF0gfHwgZ2V0UmFuZG9tQ29sb3IoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgcGllfGRvdWdobnV0IGNoYXJ0c1xyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvcnMoY291bnQ6IG51bWJlcik6IEFycmF5PG51bWJlcltdPiB7XHJcbiAgY29uc3QgY29sb3JzQXJyOiBBcnJheTxudW1iZXJbXT4gPSBuZXcgQXJyYXkoY291bnQpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29sb3JzQXJyW2ldID0gZGVmYXVsdENvbG9yc1tpXSB8fCBnZXRSYW5kb21Db2xvcigpO1xyXG4gIH1cclxuICByZXR1cm4gY29sb3JzQXJyO1xyXG59XHJcbiJdfQ==