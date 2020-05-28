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
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)
        && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
    }
    /** @type {?} */
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    let placement = position.match(/auto\s(left|right|top|bottom)/)
        ? position.split(' ')[1] || 'auto'
        : position;
    // Normalize placements that have identical main placement and variation ("right right" => "right").
    /** @type {?} */
    const matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
    if (matches) {
        placement = matches[1] + (matches[2] ? ` ${matches[2]}` : '');
    }
    // "left right", "top bottom" etc. placements also considered incorrect.
    if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
    }
    /** @type {?} */
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
    return {
        options,
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
        placement,
        placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2luaXREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDakIsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBSWxCLE1BQU0sVUFBVSxRQUFRLENBQ3RCLGFBQTBCLEVBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLE9BQWdCOztVQUdsRixjQUFjLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztJQUV0RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztXQUN0RCxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsRUFBRTtRQUM1Rix5REFBeUQ7UUFDekQsUUFBUSxHQUFHLE1BQU0sQ0FBQztLQUNuQjs7VUFFRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7UUFHM0MsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUM7UUFDN0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtRQUNsQyxDQUFDLENBQUMsUUFBUTs7O1VBR04sT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUM7SUFDNUYsSUFBSSxPQUFPLEVBQUU7UUFDWCxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvRDtJQUVELHdFQUF3RTtJQUN4RSxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3RGLFNBQVMsR0FBRyxNQUFNLENBQUM7S0FDcEI7O1VBRUssWUFBWSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDO0lBRS9FLFNBQVMsR0FBRyxvQkFBb0IsQ0FDOUIsU0FBUyxFQUNULGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQy9DLENBQUM7SUFFRixPQUFPO1FBQ0wsT0FBTztRQUNQLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUztRQUNULGFBQWE7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxuICBnZXRSZWZlcmVuY2VPZmZzZXRzLFxuICBnZXRUYXJnZXRPZmZzZXRzXG59IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHsgRGF0YSwgT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YShcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgcG9zaXRpb246IHN0cmluZywgb3B0aW9uczogT3B0aW9uc1xuKTogRGF0YSB7XG5cbiAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcblxuICBpZiAoIXBvc2l0aW9uLm1hdGNoKC9eKGF1dG8pKlxccyoobGVmdHxyaWdodHx0b3B8Ym90dG9tKSokLylcbiAgICAmJiAhcG9zaXRpb24ubWF0Y2goL14obGVmdHxyaWdodHx0b3B8Ym90dG9tKSooPzogKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkpP1xccyooc3RhcnR8ZW5kKSokLykpIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCAqL1xuICAgICAgcG9zaXRpb24gPSAnYXV0byc7XG4gICAgfVxuXG4gIGNvbnN0IHBsYWNlbWVudEF1dG8gPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvL2cpO1xuXG4gIC8vIHN1cHBvcnQgb2xkIHBsYWNlbWVudHMgJ2F1dG8gbGVmdHxyaWdodHx0b3B8Ym90dG9tJ1xuICBsZXQgcGxhY2VtZW50ID0gcG9zaXRpb24ubWF0Y2goL2F1dG9cXHMobGVmdHxyaWdodHx0b3B8Ym90dG9tKS8pXG4gICAgPyBwb3NpdGlvbi5zcGxpdCgnICcpWzFdIHx8ICdhdXRvJ1xuICAgIDogcG9zaXRpb247XG5cbiAgLy8gTm9ybWFsaXplIHBsYWNlbWVudHMgdGhhdCBoYXZlIGlkZW50aWNhbCBtYWluIHBsYWNlbWVudCBhbmQgdmFyaWF0aW9uIChcInJpZ2h0IHJpZ2h0XCIgPT4gXCJyaWdodFwiKS5cbiAgY29uc3QgbWF0Y2hlcyA9IHBsYWNlbWVudC5tYXRjaCgvXihsZWZ0fHJpZ2h0fHRvcHxib3R0b20pKiA/KD8hXFwxKShsZWZ0fHJpZ2h0fHRvcHxib3R0b20pPy8pO1xuICBpZiAobWF0Y2hlcykge1xuICAgIHBsYWNlbWVudCA9IG1hdGNoZXNbMV0gKyAobWF0Y2hlc1syXSA/IGAgJHttYXRjaGVzWzJdfWAgOiAnJyk7XG4gIH1cblxuICAvLyBcImxlZnQgcmlnaHRcIiwgXCJ0b3AgYm90dG9tXCIgZXRjLiBwbGFjZW1lbnRzIGFsc28gY29uc2lkZXJlZCBpbmNvcnJlY3QuXG4gIGlmIChbJ2xlZnQgcmlnaHQnLCAncmlnaHQgbGVmdCcsICd0b3AgYm90dG9tJywgJ2JvdHRvbSB0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xKSB7XG4gICAgcGxhY2VtZW50ID0gJ2F1dG8nO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0T2Zmc2V0ID0gZ2V0VGFyZ2V0T2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxQb3NpdGlvbiwgcGxhY2VtZW50KTtcblxuICBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgICBwbGFjZW1lbnQsXG4gICAgaG9zdEVsUG9zaXRpb24sXG4gICAgdGFyZ2V0RWxlbWVudCxcbiAgICBob3N0RWxlbWVudCxcbiAgICBvcHRpb25zID8gb3B0aW9ucy5hbGxvd2VkUG9zaXRpb25zIDogdW5kZWZpbmVkXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIGluc3RhbmNlOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldEVsZW1lbnQsXG4gICAgICBob3N0OiBob3N0RWxlbWVudCxcbiAgICAgIGFycm93OiBudWxsXG4gICAgfSxcbiAgICBvZmZzZXRzOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldE9mZnNldCxcbiAgICAgIGhvc3Q6IGhvc3RFbFBvc2l0aW9uLFxuICAgICAgYXJyb3c6IG51bGxcbiAgICB9LFxuICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudCxcbiAgICBwbGFjZW1lbnRBdXRvXG4gIH07XG59XG4iXX0=