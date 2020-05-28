/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    var placement = data.placement.split(' ')[0];
    /** @type {?} */
    var variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    var offsetsHost = data.offsets.host;
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var host = data.instance.host;
    /** @type {?} */
    var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    /** @type {?} */
    var flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        var overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        var overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        var flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
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
            data.placement = placement + (variation ? " " + variation : '');
            data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJtb2RpZmllcnMvZmxpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFJbEIsTUFBTSxVQUFVLElBQUksQ0FBQyxJQUFVO0lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSx3QkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsZ0JBQWdCLENBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUNGLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztLQUNiOztRQUVLLFVBQVUsR0FBRyxhQUFhLENBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbEIsQ0FBQyxFQUFFLFVBQVU7SUFDYixVQUFVLEVBQ1YsS0FBSyxDQUFDLGdCQUFnQjtLQUN2Qjs7UUFFRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUN4QyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFD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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxuICBnZXRCb3VuZGFyaWVzLFxuICBnZXRDbGllbnRSZWN0LFxuICBnZXRPcHBvc2l0ZVZhcmlhdGlvbixcbiAgZ2V0VGFyZ2V0T2Zmc2V0cyxcbiAgaXNNb2RpZmllckVuYWJsZWRcbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsaXAoZGF0YTogRGF0YSk6IERhdGEge1xuICBkYXRhLm9mZnNldHMudGFyZ2V0ID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMudGFyZ2V0KTtcblxuICBpZiAoIWlzTW9kaWZpZXJFbmFibGVkKGRhdGEub3B0aW9ucywgJ2ZsaXAnKSkge1xuXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgIC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsXG4gICAgICAuLi5nZXRUYXJnZXRPZmZzZXRzKFxuICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICAgICAgZGF0YS5vZmZzZXRzLmhvc3QsXG4gICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICApXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS50YXJnZXQsXG4gICAgZGF0YS5pbnN0YW5jZS5ob3N0LFxuICAgIDAsIC8vIHBhZGRpbmdcbiAgICAndmlld3BvcnQnLFxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMV0gfHwgJyc7XG5cbiAgY29uc3Qgb2Zmc2V0c0hvc3QgPSBkYXRhLm9mZnNldHMuaG9zdDtcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XG4gIGNvbnN0IGhvc3QgPSBkYXRhLmluc3RhbmNlLmhvc3Q7XG5cbiAgY29uc3QgYWRhcHRpdmVQb3NpdGlvbiA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCwgZGF0YS5vcHRpb25zLmFsbG93ZWRQb3NpdGlvbnMpO1xuICBjb25zdCBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBhZGFwdGl2ZVBvc2l0aW9uXTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIGhvc3Qgb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QubGVmdCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmJvdHRvbSkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LnRvcCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQudG9wKSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QuYm90dG9tKSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1JpZ2h0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9XG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAgJHt2YXJpYXRpb259YCA6ICcnKTtcblxuICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgICApXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=