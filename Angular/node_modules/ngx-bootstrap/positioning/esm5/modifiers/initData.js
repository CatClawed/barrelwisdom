/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils';
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
export function initData(targetElement, hostElement, position, options) {
    /** @type {?} */
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)
        && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
    }
    /** @type {?} */
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    var placement = position.match(/auto\s(left|right|top|bottom)/)
        ? position.split(' ')[1] || 'auto'
        : position;
    // Normalize placements that have identical main placement and variation ("right right" => "right").
    /** @type {?} */
    var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
    if (matches) {
        placement = matches[1] + (matches[2] ? " " + matches[2] : '');
    }
    // "left right", "top bottom" etc. placements also considered incorrect.
    if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
    }
    /** @type {?} */
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2luaXREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDakIsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBSWxCLE1BQU0sVUFBVSxRQUFRLENBQ3RCLGFBQTBCLEVBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLE9BQWdCOztRQUdsRixjQUFjLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztJQUV0RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztXQUN0RCxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsRUFBRTtRQUM1Rix5REFBeUQ7UUFDekQsUUFBUSxHQUFHLE1BQU0sQ0FBQztLQUNuQjs7UUFFRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7UUFHM0MsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUM7UUFDN0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtRQUNsQyxDQUFDLENBQUMsUUFBUTs7O1FBR04sT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUM7SUFDNUYsSUFBSSxPQUFPLEVBQUU7UUFDWCxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDL0Q7SUFFRCx3RUFBd0U7SUFDeEUsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN0RixTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQ3BCOztRQUVLLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQztJQUUvRSxTQUFTLEdBQUcsb0JBQW9CLENBQzlCLFNBQVMsRUFDVCxjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMvQyxDQUFDO0lBRUYsT0FBTztRQUNMLE9BQU8sU0FBQTtRQUNQLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUyxXQUFBO1FBQ1QsYUFBYSxlQUFBO0tBQ2QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcbiAgZ2V0UmVmZXJlbmNlT2Zmc2V0cyxcbiAgZ2V0VGFyZ2V0T2Zmc2V0c1xufSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7IERhdGEsIE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNcbik6IERhdGEge1xuXG4gIGNvbnN0IGhvc3RFbFBvc2l0aW9uID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG5cbiAgaWYgKCFwb3NpdGlvbi5tYXRjaCgvXihhdXRvKSpcXHMqKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkqJC8pXG4gICAgJiYgIXBvc2l0aW9uLm1hdGNoKC9eKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkqKD86IChsZWZ0fHJpZ2h0fHRvcHxib3R0b20pKT9cXHMqKHN0YXJ0fGVuZCkqJC8pKSB7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgKi9cbiAgICAgIHBvc2l0aW9uID0gJ2F1dG8nO1xuICAgIH1cblxuICBjb25zdCBwbGFjZW1lbnRBdXRvID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0by9nKTtcblxuICAvLyBzdXBwb3J0IG9sZCBwbGFjZW1lbnRzICdhdXRvIGxlZnR8cmlnaHR8dG9wfGJvdHRvbSdcbiAgbGV0IHBsYWNlbWVudCA9IHBvc2l0aW9uLm1hdGNoKC9hdXRvXFxzKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkvKVxuICAgID8gcG9zaXRpb24uc3BsaXQoJyAnKVsxXSB8fCAnYXV0bydcbiAgICA6IHBvc2l0aW9uO1xuXG4gIC8vIE5vcm1hbGl6ZSBwbGFjZW1lbnRzIHRoYXQgaGF2ZSBpZGVudGljYWwgbWFpbiBwbGFjZW1lbnQgYW5kIHZhcmlhdGlvbiAoXCJyaWdodCByaWdodFwiID0+IFwicmlnaHRcIikuXG4gIGNvbnN0IG1hdGNoZXMgPSBwbGFjZW1lbnQubWF0Y2goL14obGVmdHxyaWdodHx0b3B8Ym90dG9tKSogPyg/IVxcMSkobGVmdHxyaWdodHx0b3B8Ym90dG9tKT8vKTtcbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBwbGFjZW1lbnQgPSBtYXRjaGVzWzFdICsgKG1hdGNoZXNbMl0gPyBgICR7bWF0Y2hlc1syXX1gIDogJycpO1xuICB9XG5cbiAgLy8gXCJsZWZ0IHJpZ2h0XCIsIFwidG9wIGJvdHRvbVwiIGV0Yy4gcGxhY2VtZW50cyBhbHNvIGNvbnNpZGVyZWQgaW5jb3JyZWN0LlxuICBpZiAoWydsZWZ0IHJpZ2h0JywgJ3JpZ2h0IGxlZnQnLCAndG9wIGJvdHRvbScsICdib3R0b20gdG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSkge1xuICAgIHBsYWNlbWVudCA9ICdhdXRvJztcbiAgfVxuXG4gIGNvbnN0IHRhcmdldE9mZnNldCA9IGdldFRhcmdldE9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsUG9zaXRpb24sIHBsYWNlbWVudCk7XG5cbiAgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gICAgcGxhY2VtZW50LFxuICAgIGhvc3RFbFBvc2l0aW9uLFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgaG9zdEVsZW1lbnQsXG4gICAgb3B0aW9ucyA/IG9wdGlvbnMuYWxsb3dlZFBvc2l0aW9ucyA6IHVuZGVmaW5lZFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBpbnN0YW5jZToge1xuICAgICAgdGFyZ2V0OiB0YXJnZXRFbGVtZW50LFxuICAgICAgaG9zdDogaG9zdEVsZW1lbnQsXG4gICAgICBhcnJvdzogbnVsbFxuICAgIH0sXG4gICAgb2Zmc2V0czoge1xuICAgICAgdGFyZ2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgICBob3N0OiBob3N0RWxQb3NpdGlvbixcbiAgICAgIGFycm93OiBudWxsXG4gICAgfSxcbiAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhY2VtZW50QXV0b1xuICB9O1xufVxuIl19