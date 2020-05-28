/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    let placement = data.placement.split(' ')[0];
    /** @type {?} */
    let variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    const offsetsHost = data.offsets.host;
    /** @type {?} */
    const target = data.instance.target;
    /** @type {?} */
    const host = data.instance.host;
    /** @type {?} */
    const adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    /** @type {?} */
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    (step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJtb2RpZmllcnMvZmxpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sVUFBVSxDQUFDOzs7OztBQUlsQixNQUFNLFVBQVUsSUFBSSxDQUFDLElBQVU7SUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHFCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUNuQixnQkFBZ0IsQ0FDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQixJQUFJLENBQUMsU0FBUyxDQUNmLENBQ0YsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O1VBRUssVUFBVSxHQUFHLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUNsQixDQUFDLEVBQUUsVUFBVTtJQUNiLFVBQVUsRUFDVixLQUFLLENBQUMsZ0JBQWdCO0tBQ3ZCOztRQUVHLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3hDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXG4gIGdldEJvdW5kYXJpZXMsXG4gIGdldENsaWVudFJlY3QsXG4gIGdldE9wcG9zaXRlVmFyaWF0aW9uLFxuICBnZXRUYXJnZXRPZmZzZXRzLFxuICBpc01vZGlmaWVyRW5hYmxlZFxufSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxpcChkYXRhOiBEYXRhKTogRGF0YSB7XG4gIGRhdGEub2Zmc2V0cy50YXJnZXQgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy50YXJnZXQpO1xuXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAnZmxpcCcpKSB7XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgIC4uLmdldFRhcmdldE9mZnNldHMoXG4gICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgZGF0YS5wbGFjZW1lbnRcbiAgICAgIClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgICd2aWV3cG9ydCcsXG4gICAgZmFsc2UgLy8gcG9zaXRpb25GaXhlZFxuICApO1xuXG4gIGxldCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnJztcblxuICBjb25zdCBvZmZzZXRzSG9zdCA9IGRhdGEub2Zmc2V0cy5ob3N0O1xuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcbiAgY29uc3QgaG9zdCA9IGRhdGEuaW5zdGFuY2UuaG9zdDtcblxuICBjb25zdCBhZGFwdGl2ZVBvc2l0aW9uID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoJ2F1dG8nLCBvZmZzZXRzSG9zdCwgdGFyZ2V0LCBob3N0LCBkYXRhLm9wdGlvbnMuYWxsb3dlZFBvc2l0aW9ucyk7XG4gIGNvbnN0IGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIGFkYXB0aXZlUG9zaXRpb25dO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgaG9zdCBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIGNvbnN0IG92ZXJsYXBzUmVmID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5yaWdodCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QudG9wKSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQubGVmdCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NUb3AgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQudG9wKSA8IE1hdGguZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID1cbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzQm90dG9tKSk7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYCAke3ZhcmlhdGlvbn1gIDogJycpO1xuXG4gICAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxuICAgICAgICAuLi5nZXRUYXJnZXRPZmZzZXRzKFxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==