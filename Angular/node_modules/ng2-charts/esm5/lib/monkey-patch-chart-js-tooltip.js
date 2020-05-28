/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:variable-name
// tslint:disable:no-var-keyword
// tslint:disable:prefer-const
// tslint:disable:only-arrow-functions
// tslint:disable:one-variable-per-declaration
// tslint:disable:object-literal-shorthand
// tslint:disable:space-before-function-paren
/**
 * @return {?}
 */
export function monkeyPatchChartJsTooltip() {
    if (typeof Chart === 'undefined') {
        console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
        return;
    }
    Chart.Tooltip.prototype.drawBody = drawBody;
    /** @type {?} */
    var helpers = Chart.helpers;
    /**
     * @param {?} vm
     * @param {?} align
     * @return {?}
     */
    function getAlignedX(vm, align) {
        return align === 'center'
            ? vm.x + vm.width / 2
            : align === 'right'
                ? vm.x + vm.width - vm.xPadding
                : vm.x + vm.xPadding;
    }
    /**
     * @param {?} pt
     * @param {?} vm
     * @param {?} ctx
     * @return {?}
     */
    function drawBody(pt, vm, ctx) {
        /** @type {?} */
        var bodyFontSize = vm.bodyFontSize;
        /** @type {?} */
        var bodySpacing = vm.bodySpacing;
        /** @type {?} */
        var bodyAlign = vm._bodyAlign;
        /** @type {?} */
        var body = vm.body;
        /** @type {?} */
        var drawColorBoxes = vm.displayColors;
        /** @type {?} */
        var labelColors = vm.labelColors;
        /** @type {?} */
        var xLinePadding = 0;
        /** @type {?} */
        var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
        /** @type {?} */
        var textColor;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'top';
        ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
        pt.x = getAlignedX(vm, bodyAlign);
        // Before Body
        /** @type {?} */
        var fillLineOfText = (/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            ctx.fillText(line, pt.x + xLinePadding, pt.y);
            pt.y += bodyFontSize + bodySpacing;
        });
        // Before body lines
        ctx.fillStyle = vm.bodyFontColor;
        helpers.each(vm.beforeBody, fillLineOfText);
        xLinePadding = drawColorBoxes && bodyAlign !== 'right'
            ? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
            : 0;
        // Draw body lines now
        helpers.each(body, (/**
         * @param {?} bodyItem
         * @param {?} i
         * @return {?}
         */
        function (bodyItem, i) {
            textColor = vm.labelTextColors[i];
            ctx.fillStyle = textColor;
            helpers.each(bodyItem.before, fillLineOfText);
            // Draw Legend-like boxes if needed
            if (drawColorBoxes) {
                // Fill a white rect so that colours merge nicely if the opacity is < 1
                ctx.fillStyle = vm.legendColorBackground;
                ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize);
                // Border
                ctx.lineWidth = 1;
                ctx.strokeStyle = labelColors[i].borderColor;
                ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize);
                // Inner square
                ctx.fillStyle = labelColors[i].backgroundColor;
                ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
                ctx.fillStyle = textColor;
            }
            helpers.each(bodyItem.lines, fillLineOfText);
            helpers.each(bodyItem.after, fillLineOfText);
        }));
        // Reset back to 0 for after body
        xLinePadding = 0;
        // After body lines
        helpers.each(vm.afterBody, fillLineOfText);
        pt.y -= bodySpacing; // Remove last body spacing
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ua2V5LXBhdGNoLWNoYXJ0LWpzLXRvb2x0aXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vbmtleS1wYXRjaC1jaGFydC1qcy10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDO1FBQ25ILE9BQU87S0FDUjtJQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O1FBQ3RDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTzs7Ozs7O0lBRTdCLFNBQVMsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLO1FBQzVCLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTztnQkFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUTtnQkFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRUQsU0FBUyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHOztZQUN2QixZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVk7O1lBQzlCLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVzs7WUFDNUIsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVOztZQUN6QixJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUk7O1lBQ2QsY0FBYyxHQUFHLEVBQUUsQ0FBQyxhQUFhOztZQUNqQyxXQUFX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LGNBQWMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO1FBRUgsaUNBQWlDO1FBQ2pDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLDJCQUEyQjtJQUNsRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOnZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tdmFyLWtleXdvcmRcclxuLy8gdHNsaW50OmRpc2FibGU6cHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9ubHktYXJyb3ctZnVuY3Rpb25zXHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXHJcbi8vIHRzbGludDpkaXNhYmxlOnNwYWNlLWJlZm9yZS1mdW5jdGlvbi1wYXJlblxyXG5cclxuZGVjbGFyZSBjbGFzcyBDaGFydCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENoYXJ0OiB0eXBlb2YgQ2hhcnQ7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFRvb2x0aXA6IGFueTtcclxuICBzdGF0aWMgcmVhZG9ubHkgaGVscGVyczogYW55O1xyXG4gIHN0YXRpYyByZWFkb25seSBkZWZhdWx0czogYW55O1xyXG4gIHN0YXRpYyByZWFkb25seSBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25rZXlQYXRjaENoYXJ0SnNUb29sdGlwKCkge1xyXG4gIGlmICh0eXBlb2YgQ2hhcnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgbm90IGRlZmluZWQgKGd1ZXNzaW5nIHRoaXMgaXMgYSB1bml2ZXJzYWwgYnVpbGQsIGFuZCBJIGRvblxcJ3Qga25vdyB3aHkgdGhpcyBoYXBwZW5zIC0tIEF2aWFkKScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBDaGFydC5Ub29sdGlwLnByb3RvdHlwZS5kcmF3Qm9keSA9IGRyYXdCb2R5O1xyXG4gIGNvbnN0IGhlbHBlcnMgPSBDaGFydC5oZWxwZXJzO1xyXG5cclxuICBmdW5jdGlvbiBnZXRBbGlnbmVkWCh2bSwgYWxpZ24pIHtcclxuICAgIHJldHVybiBhbGlnbiA9PT0gJ2NlbnRlcidcclxuICAgICAgPyB2bS54ICsgdm0ud2lkdGggLyAyXHJcbiAgICAgIDogYWxpZ24gPT09ICdyaWdodCdcclxuICAgICAgICA/IHZtLnggKyB2bS53aWR0aCAtIHZtLnhQYWRkaW5nXHJcbiAgICAgICAgOiB2bS54ICsgdm0ueFBhZGRpbmc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3Qm9keShwdCwgdm0sIGN0eCkge1xyXG4gICAgdmFyIGJvZHlGb250U2l6ZSA9IHZtLmJvZHlGb250U2l6ZTtcclxuICAgIHZhciBib2R5U3BhY2luZyA9IHZtLmJvZHlTcGFjaW5nO1xyXG4gICAgdmFyIGJvZHlBbGlnbiA9IHZtLl9ib2R5QWxpZ247XHJcbiAgICB2YXIgYm9keSA9IHZtLmJvZHk7XHJcbiAgICB2YXIgZHJhd0NvbG9yQm94ZXMgPSB2bS5kaXNwbGF5Q29sb3JzO1xyXG4gICAgdmFyIGxhYmVsQ29sb3JzID0gdm0ubGFiZWxDb2xvcnM7XHJcbiAgICB2YXIgeExpbmVQYWRkaW5nID0gMDtcclxuICAgIHZhciBjb2xvclggPSBkcmF3Q29sb3JCb3hlcyA/IGdldEFsaWduZWRYKHZtLCAnbGVmdCcpIDogMDtcclxuICAgIHZhciB0ZXh0Q29sb3I7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IGJvZHlBbGlnbjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcclxuICAgIGN0eC5mb250ID0gaGVscGVycy5mb250U3RyaW5nKGJvZHlGb250U2l6ZSwgdm0uX2JvZHlGb250U3R5bGUsIHZtLl9ib2R5Rm9udEZhbWlseSk7XHJcblxyXG4gICAgcHQueCA9IGdldEFsaWduZWRYKHZtLCBib2R5QWxpZ24pO1xyXG5cclxuICAgIC8vIEJlZm9yZSBCb2R5XHJcbiAgICB2YXIgZmlsbExpbmVPZlRleHQgPSBmdW5jdGlvbiAobGluZSkge1xyXG4gICAgICBjdHguZmlsbFRleHQobGluZSwgcHQueCArIHhMaW5lUGFkZGluZywgcHQueSk7XHJcbiAgICAgIHB0LnkgKz0gYm9keUZvbnRTaXplICsgYm9keVNwYWNpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEJlZm9yZSBib2R5IGxpbmVzXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdm0uYm9keUZvbnRDb2xvcjtcclxuICAgIGhlbHBlcnMuZWFjaCh2bS5iZWZvcmVCb2R5LCBmaWxsTGluZU9mVGV4dCk7XHJcblxyXG4gICAgeExpbmVQYWRkaW5nID0gZHJhd0NvbG9yQm94ZXMgJiYgYm9keUFsaWduICE9PSAncmlnaHQnXHJcbiAgICAgID8gYm9keUFsaWduID09PSAnY2VudGVyJyA/IChib2R5Rm9udFNpemUgLyAyICsgMSkgOiAoYm9keUZvbnRTaXplICsgMilcclxuICAgICAgOiAwO1xyXG5cclxuICAgIC8vIERyYXcgYm9keSBsaW5lcyBub3dcclxuICAgIGhlbHBlcnMuZWFjaChib2R5LCBmdW5jdGlvbiAoYm9keUl0ZW0sIGkpIHtcclxuICAgICAgdGV4dENvbG9yID0gdm0ubGFiZWxUZXh0Q29sb3JzW2ldO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGV4dENvbG9yO1xyXG4gICAgICBoZWxwZXJzLmVhY2goYm9keUl0ZW0uYmVmb3JlLCBmaWxsTGluZU9mVGV4dCk7XHJcblxyXG4gICAgICAvLyBEcmF3IExlZ2VuZC1saWtlIGJveGVzIGlmIG5lZWRlZFxyXG4gICAgICBpZiAoZHJhd0NvbG9yQm94ZXMpIHtcclxuICAgICAgICAvLyBGaWxsIGEgd2hpdGUgcmVjdCBzbyB0aGF0IGNvbG91cnMgbWVyZ2UgbmljZWx5IGlmIHRoZSBvcGFjaXR5IGlzIDwgMVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB2bS5sZWdlbmRDb2xvckJhY2tncm91bmQ7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGNvbG9yWCwgcHQueSwgYm9keUZvbnRTaXplLCBib2R5Rm9udFNpemUpO1xyXG5cclxuICAgICAgICAvLyBCb3JkZXJcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsYWJlbENvbG9yc1tpXS5ib3JkZXJDb2xvcjtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChjb2xvclgsIHB0LnksIGJvZHlGb250U2l6ZSwgYm9keUZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgLy8gSW5uZXIgc3F1YXJlXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGxhYmVsQ29sb3JzW2ldLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QoY29sb3JYICsgMSwgcHQueSArIDEsIGJvZHlGb250U2l6ZSAtIDIsIGJvZHlGb250U2l6ZSAtIDIpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Q29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhlbHBlcnMuZWFjaChib2R5SXRlbS5saW5lcywgZmlsbExpbmVPZlRleHQpO1xyXG5cclxuICAgICAgaGVscGVycy5lYWNoKGJvZHlJdGVtLmFmdGVyLCBmaWxsTGluZU9mVGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZXNldCBiYWNrIHRvIDAgZm9yIGFmdGVyIGJvZHlcclxuICAgIHhMaW5lUGFkZGluZyA9IDA7XHJcblxyXG4gICAgLy8gQWZ0ZXIgYm9keSBsaW5lc1xyXG4gICAgaGVscGVycy5lYWNoKHZtLmFmdGVyQm9keSwgZmlsbExpbmVPZlRleHQpO1xyXG4gICAgcHQueSAtPSBib2R5U3BhY2luZzsgLy8gUmVtb3ZlIGxhc3QgYm9keSBzcGFjaW5nXHJcbiAgfVxyXG59XHJcbiJdfQ==