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
export function monkeyPatchChartJsLegend() {
    if (typeof Chart === 'undefined') {
        console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
        return;
    }
    /** @type {?} */
    var plugins = Chart.plugins.getAll();
    /** @type {?} */
    var legend = plugins.filter((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.id === 'legend'; }))[0];
    legend._element.prototype.fit = fit;
    legend._element.prototype.draw = draw;
    /** @type {?} */
    var helpers = Chart.helpers;
    /** @type {?} */
    var defaults = Chart.defaults;
    /** @type {?} */
    var valueOrDefault = helpers.valueOrDefault;
    /**
     * @param {?} labelOpts
     * @param {?} fontSize
     * @return {?}
     */
    function getBoxWidth(labelOpts, fontSize) {
        return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
            fontSize :
            labelOpts.boxWidth;
    }
    /**
     * @return {?}
     */
    function fit() {
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var opts = me.options;
        /** @type {?} */
        var labelOpts = opts.labels;
        /** @type {?} */
        var display = opts.display;
        /** @type {?} */
        var ctx = me.ctx;
        /** @type {?} */
        var labelFont = helpers.options._parseFont(labelOpts);
        /** @type {?} */
        var fontSize = labelFont.size;
        // Reset hit boxes
        /** @type {?} */
        var hitboxes = me.legendHitBoxes = [];
        /** @type {?} */
        var minSize = me.minSize;
        /** @type {?} */
        var isHorizontal = me.isHorizontal();
        if (isHorizontal) {
            minSize.width = me.maxWidth; // fill all the width
            minSize.height = display ? 10 : 0;
        }
        else {
            minSize.width = display ? 10 : 0;
            minSize.height = me.maxHeight; // fill all the height
        }
        /** @type {?} */
        var getMaxLineWidth = (/**
         * @param {?} textLines
         * @return {?}
         */
        function (textLines) {
            return textLines.map((/**
             * @param {?} textLine
             * @return {?}
             */
            function (textLine) {
                return ctx.measureText(textLine).width;
            })).reduce((/**
             * @param {?} acc
             * @param {?} v
             * @return {?}
             */
            function (acc, v) {
                return v > acc ? v : acc;
            }), 0);
        });
        // Increase sizes here
        if (display) {
            ctx.font = labelFont.string;
            if (isHorizontal) {
                // Labels
                // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
                /** @type {?} */
                var lineWidths = me.lineWidths = [0];
                /** @type {?} */
                var lineHeights = me.lineHeights = [];
                /** @type {?} */
                var currentLineHeight = 0;
                /** @type {?} */
                var lineIndex = 0;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                helpers.each(me.legendItems, (/**
                 * @param {?} legendItem
                 * @param {?} i
                 * @return {?}
                 */
                function (legendItem, i) {
                    /** @type {?} */
                    var width;
                    /** @type {?} */
                    var height;
                    if (helpers.isArray(legendItem.text)) {
                        width = getMaxLineWidth(legendItem.text);
                        height = fontSize * legendItem.text.length + labelOpts.padding;
                    }
                    else {
                        width = ctx.measureText(legendItem.text).width;
                        height = fontSize + labelOpts.padding;
                    }
                    width += getBoxWidth(labelOpts, fontSize) + (fontSize / 2);
                    if (lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
                        lineHeights.push(currentLineHeight);
                        currentLineHeight = 0;
                        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                        lineIndex++;
                    }
                    legendItem.lineOrColumnIndex = lineIndex;
                    if (height > currentLineHeight) {
                        currentLineHeight = height;
                    }
                    // Store the hitbox width and height here. Final position will be updated in `draw`
                    hitboxes[i] = {
                        left: 0,
                        top: 0,
                        width: width,
                        height: height,
                    };
                    lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
                }));
                lineHeights.push(currentLineHeight);
                minSize.height += lineHeights.reduce((/**
                 * @param {?} acc
                 * @param {?} v
                 * @return {?}
                 */
                function (acc, v) {
                    return acc + v;
                }), 0);
            }
            else {
                /** @type {?} */
                var vPadding = labelOpts.padding;
                /** @type {?} */
                var columnWidths = me.columnWidths = [];
                /** @type {?} */
                var columnHeights = me.columnHeights = [];
                /** @type {?} */
                var totalWidth = labelOpts.padding;
                /** @type {?} */
                var currentColWidth = 0;
                /** @type {?} */
                var currentColHeight = 0;
                /** @type {?} */
                var columnIndex = 0;
                helpers.each(me.legendItems, (/**
                 * @param {?} legendItem
                 * @param {?} i
                 * @return {?}
                 */
                function (legendItem, i) {
                    /** @type {?} */
                    var itemWidth;
                    /** @type {?} */
                    var height;
                    if (helpers.isArray(legendItem.text)) {
                        itemWidth = getMaxLineWidth(legendItem.text);
                        height = fontSize * legendItem.text.length;
                    }
                    else {
                        itemWidth = ctx.measureText(legendItem.text).width;
                        height = fontSize;
                    }
                    itemWidth += getBoxWidth(labelOpts, fontSize) + (fontSize / 2);
                    // If too tall, go to new column
                    if (currentColHeight + fontSize + 2 * vPadding > minSize.height) {
                        totalWidth += currentColWidth + labelOpts.padding;
                        columnWidths.push(currentColWidth); // previous column width
                        columnHeights.push(currentColHeight);
                        currentColWidth = 0;
                        currentColHeight = 0;
                        columnIndex++;
                    }
                    legendItem.lineOrColumnIndex = columnIndex;
                    // Get max width
                    currentColWidth = Math.max(currentColWidth, itemWidth);
                    currentColHeight += height + vPadding;
                    // Store the hitbox width and height here. Final position will be updated in `draw`
                    hitboxes[i] = {
                        left: 0,
                        top: 0,
                        width: itemWidth,
                        height: height
                    };
                }));
                totalWidth += currentColWidth;
                columnWidths.push(currentColWidth);
                columnHeights.push(currentColHeight);
                minSize.width += totalWidth;
            }
        }
        me.width = minSize.width;
        me.height = minSize.height;
    }
    /**
     * @return {?}
     */
    function draw() {
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var opts = me.options;
        /** @type {?} */
        var labelOpts = opts.labels;
        /** @type {?} */
        var globalDefaults = defaults.global;
        /** @type {?} */
        var defaultColor = globalDefaults.defaultColor;
        /** @type {?} */
        var lineDefault = globalDefaults.elements.line;
        /** @type {?} */
        var legendHeight = me.height;
        /** @type {?} */
        var columnHeights = me.columnHeights;
        /** @type {?} */
        var columnWidths = me.columnWidths;
        /** @type {?} */
        var legendWidth = me.width;
        /** @type {?} */
        var lineWidths = me.lineWidths;
        /** @type {?} */
        var lineHeights = me.lineHeights;
        if (opts.display) {
            /** @type {?} */
            var ctx = me.ctx;
            /** @type {?} */
            var fontColor = valueOrDefault(labelOpts.fontColor, globalDefaults.defaultFontColor);
            /** @type {?} */
            var labelFont = helpers.options._parseFont(labelOpts);
            /** @type {?} */
            var fontSize = labelFont.size;
            /** @type {?} */
            var cursor;
            // Canvas setup
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = fontColor; // for strikethrough effect
            ctx.fillStyle = fontColor; // render in correct colour
            ctx.font = labelFont.string;
            /** @type {?} */
            var boxWidth = getBoxWidth(labelOpts, fontSize);
            /** @type {?} */
            var hitboxes = me.legendHitBoxes;
            // current position
            /** @type {?} */
            var drawLegendBox = (/**
             * @param {?} x
             * @param {?} y
             * @param {?} legendItem
             * @return {?}
             */
            function (x, y, legendItem) {
                if (isNaN(boxWidth) || boxWidth <= 0) {
                    return;
                }
                // Set the ctx for the box
                ctx.save();
                /** @type {?} */
                var lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
                ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
                ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
                ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
                ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
                if (ctx.setLineDash) {
                    // IE 9 and 10 do not support line dash
                    ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
                }
                if (opts.labels && opts.labels.usePointStyle) {
                    // Recalculate x and y for drawPoint() because its expecting
                    // x and y to be center of figure (instead of top left)
                    /** @type {?} */
                    var radius = boxWidth * Math.SQRT2 / 2;
                    /** @type {?} */
                    var centerX = x + boxWidth / 2;
                    /** @type {?} */
                    var centerY = y + fontSize / 2;
                    // Draw pointStyle as legend symbol
                    helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
                }
                else {
                    // Draw box as legend symbol
                    if (lineWidth !== 0) {
                        ctx.strokeRect(x, y, boxWidth, fontSize);
                    }
                    ctx.fillRect(x, y, boxWidth, fontSize);
                }
                ctx.restore();
            });
            /** @type {?} */
            var drawStrikeThrough = (/**
             * @param {?} x
             * @param {?} y
             * @param {?} w
             * @return {?}
             */
            function (x, y, w) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.moveTo(x, y);
                ctx.lineTo(x + w, y);
                ctx.stroke();
            });
            /** @type {?} */
            var drawCrossOver = (/**
             * @param {?} x
             * @param {?} y
             * @param {?} w
             * @param {?} h
             * @return {?}
             */
            function (x, y, w, h) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.moveTo(x, y);
                ctx.lineTo(x + w, y + h);
                ctx.moveTo(x, y + h);
                ctx.lineTo(x + w, y);
                ctx.stroke();
            });
            /** @type {?} */
            var fillText = (/**
             * @param {?} x
             * @param {?} y
             * @param {?} legendItem
             * @param {?} textWidth
             * @return {?}
             */
            function (x, y, legendItem, textWidth) {
                /** @type {?} */
                var halfFontSize = fontSize / 2;
                /** @type {?} */
                var xLeft = boxWidth + halfFontSize + x;
                /** @type {?} */
                var yMiddle = y + halfFontSize;
                if (helpers.isArray(legendItem.text)) {
                    helpers.each(legendItem.text, (/**
                     * @param {?} textLine
                     * @param {?} index
                     * @return {?}
                     */
                    function (textLine, index) {
                        /** @type {?} */
                        var lineOffset = index * fontSize;
                        ctx.fillText(textLine, xLeft, yMiddle + lineOffset);
                    }));
                }
                else {
                    ctx.fillText(legendItem.text, xLeft, yMiddle);
                }
                if (legendItem.hidden) {
                    if (helpers.isArray(legendItem.text)) {
                        drawCrossOver(xLeft, yMiddle, textWidth, (legendItem.text.length - 1) * (fontSize - 1));
                    }
                    else {
                        drawStrikeThrough(xLeft, yMiddle, textWidth);
                    }
                }
            });
            /** @type {?} */
            var alignmentOffset = (/**
             * @param {?} dimension
             * @param {?} blockSize
             * @return {?}
             */
            function (dimension, blockSize) {
                switch (opts.align) {
                    case 'start':
                        return labelOpts.padding;
                    case 'end':
                        return dimension - blockSize;
                    default: // center
                        return (dimension - blockSize + labelOpts.padding) / 2;
                }
            });
            // Horizontal
            /** @type {?} */
            var isHorizontal = me.isHorizontal();
            if (isHorizontal) {
                cursor = {
                    x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
                    y: me.top + labelOpts.padding,
                    line: 0
                };
            }
            else {
                cursor = {
                    x: me.left + labelOpts.padding,
                    y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
                    line: 0
                };
            }
            helpers.each(me.legendItems, (/**
             * @param {?} legendItem
             * @param {?} i
             * @return {?}
             */
            function (legendItem, i) {
                /** @type {?} */
                var textWidth;
                /** @type {?} */
                var height;
                /** @type {?} */
                var boxTopOffset;
                if (legendItem.lineOrColumnIndex > cursor.line) {
                    if (isHorizontal) {
                        cursor.y += lineHeights[cursor.line];
                        cursor.line = legendItem.lineOrColumnIndex;
                        cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
                    }
                    else {
                        cursor.x += columnWidths[cursor.line] + labelOpts.padding;
                        cursor.line = legendItem.lineOrColumnIndex;
                        cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
                    }
                }
                if (helpers.isArray(legendItem.text)) {
                    textWidth = legendItem.text.map((/**
                     * @param {?} textLine
                     * @return {?}
                     */
                    function (textLine) {
                        return ctx.measureText(textLine).width;
                    })).reduce((/**
                     * @param {?} acc
                     * @param {?} v
                     * @return {?}
                     */
                    function (acc, v) {
                        return v > acc ? v : acc;
                    }), 0);
                    boxTopOffset = fontSize / 2 * (legendItem.text.length - 1);
                    height = fontSize * legendItem.text.length;
                }
                else {
                    textWidth = ctx.measureText(legendItem.text).width;
                    boxTopOffset = 0;
                    height = fontSize;
                }
                /** @type {?} */
                var width = boxWidth + (fontSize / 2) + textWidth;
                /** @type {?} */
                var x = cursor.x;
                /** @type {?} */
                var y = cursor.y;
                /** @type {?} */
                var topOffset = isHorizontal ? Math.trunc((lineHeights[cursor.line] - hitboxes[i].height) / 2) : 0;
                drawLegendBox(x, y + boxTopOffset + topOffset, legendItem);
                hitboxes[i].left = x;
                hitboxes[i].top = y;
                // Fill the actual label
                fillText(x, y + topOffset, legendItem, textWidth);
                if (isHorizontal) {
                    cursor.x += width + labelOpts.padding;
                }
                else {
                    cursor.y += height + labelOpts.padding;
                }
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ua2V5LXBhdGNoLWNoYXJ0LWpzLWxlZ2VuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9ua2V5LXBhdGNoLWNoYXJ0LWpzLWxlZ2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUdBQXFHLENBQUMsQ0FBQztRQUNuSCxPQUFPO0tBQ1I7O1FBQ0ssT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFOztRQUNoQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7UUFFaEMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPOztRQUN2QixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7O1FBQ3pCLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYzs7Ozs7O0lBRTdDLFNBQVMsV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRO1FBQ3RDLE9BQU8sU0FBUyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELFFBQVEsQ0FBQyxDQUFDO1lBQ1YsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsU0FBUyxHQUFHOztZQUNOLEVBQUUsR0FBRyxJQUFJOztZQUNULElBQUksR0FBRyxFQUFFLENBQUMsT0FBTzs7WUFD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QUN4QztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOnZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tdmFyLWtleXdvcmRcclxuLy8gdHNsaW50OmRpc2FibGU6cHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9ubHktYXJyb3ctZnVuY3Rpb25zXHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXHJcbi8vIHRzbGludDpkaXNhYmxlOnNwYWNlLWJlZm9yZS1mdW5jdGlvbi1wYXJlblxyXG5cclxuZGVjbGFyZSBjbGFzcyBDaGFydCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENoYXJ0OiB0eXBlb2YgQ2hhcnQ7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFRvb2x0aXA6IGFueTtcclxuICBzdGF0aWMgcmVhZG9ubHkgaGVscGVyczogYW55O1xyXG4gIHN0YXRpYyByZWFkb25seSBkZWZhdWx0czogYW55O1xyXG4gIHN0YXRpYyByZWFkb25seSBwbHVnaW5zOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25rZXlQYXRjaENoYXJ0SnNMZWdlbmQoKSB7XHJcbiAgaWYgKHR5cGVvZiBDaGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDaGFydCBub3QgZGVmaW5lZCAoZ3Vlc3NpbmcgdGhpcyBpcyBhIHVuaXZlcnNhbCBidWlsZCwgYW5kIEkgZG9uXFwndCBrbm93IHdoeSB0aGlzIGhhcHBlbnMgLS0gQXZpYWQpJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHBsdWdpbnMgPSBDaGFydC5wbHVnaW5zLmdldEFsbCgpO1xyXG4gIGNvbnN0IGxlZ2VuZCA9IHBsdWdpbnMuZmlsdGVyKHAgPT4gcC5pZCA9PT0gJ2xlZ2VuZCcpWzBdO1xyXG4gIGxlZ2VuZC5fZWxlbWVudC5wcm90b3R5cGUuZml0ID0gZml0O1xyXG4gIGxlZ2VuZC5fZWxlbWVudC5wcm90b3R5cGUuZHJhdyA9IGRyYXc7XHJcblxyXG4gIGNvbnN0IGhlbHBlcnMgPSBDaGFydC5oZWxwZXJzO1xyXG4gIGNvbnN0IGRlZmF1bHRzID0gQ2hhcnQuZGVmYXVsdHM7XHJcbiAgY29uc3QgdmFsdWVPckRlZmF1bHQgPSBoZWxwZXJzLnZhbHVlT3JEZWZhdWx0O1xyXG5cclxuICBmdW5jdGlvbiBnZXRCb3hXaWR0aChsYWJlbE9wdHMsIGZvbnRTaXplKSB7XHJcbiAgICByZXR1cm4gbGFiZWxPcHRzLnVzZVBvaW50U3R5bGUgJiYgbGFiZWxPcHRzLmJveFdpZHRoID4gZm9udFNpemUgP1xyXG4gICAgICBmb250U2l6ZSA6XHJcbiAgICAgIGxhYmVsT3B0cy5ib3hXaWR0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpdCgpIHtcclxuICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICB2YXIgb3B0cyA9IG1lLm9wdGlvbnM7XHJcbiAgICB2YXIgbGFiZWxPcHRzID0gb3B0cy5sYWJlbHM7XHJcbiAgICB2YXIgZGlzcGxheSA9IG9wdHMuZGlzcGxheTtcclxuXHJcbiAgICB2YXIgY3R4ID0gbWUuY3R4O1xyXG5cclxuICAgIHZhciBsYWJlbEZvbnQgPSBoZWxwZXJzLm9wdGlvbnMuX3BhcnNlRm9udChsYWJlbE9wdHMpO1xyXG4gICAgdmFyIGZvbnRTaXplID0gbGFiZWxGb250LnNpemU7XHJcblxyXG4gICAgLy8gUmVzZXQgaGl0IGJveGVzXHJcbiAgICB2YXIgaGl0Ym94ZXMgPSBtZS5sZWdlbmRIaXRCb3hlcyA9IFtdO1xyXG5cclxuICAgIHZhciBtaW5TaXplID0gbWUubWluU2l6ZTtcclxuICAgIHZhciBpc0hvcml6b250YWwgPSBtZS5pc0hvcml6b250YWwoKTtcclxuXHJcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XHJcbiAgICAgIG1pblNpemUud2lkdGggPSBtZS5tYXhXaWR0aDsgLy8gZmlsbCBhbGwgdGhlIHdpZHRoXHJcbiAgICAgIG1pblNpemUuaGVpZ2h0ID0gZGlzcGxheSA/IDEwIDogMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1pblNpemUud2lkdGggPSBkaXNwbGF5ID8gMTAgOiAwO1xyXG4gICAgICBtaW5TaXplLmhlaWdodCA9IG1lLm1heEhlaWdodDsgLy8gZmlsbCBhbGwgdGhlIGhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRNYXhMaW5lV2lkdGggPSBmdW5jdGlvbiAodGV4dExpbmVzKSB7XHJcbiAgICAgIHJldHVybiB0ZXh0TGluZXMubWFwKGZ1bmN0aW9uICh0ZXh0TGluZSkge1xyXG4gICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dExpbmUpLndpZHRoO1xyXG4gICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdikge1xyXG4gICAgICAgIHJldHVybiB2ID4gYWNjID8gdiA6IGFjYztcclxuICAgICAgfSwgMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluY3JlYXNlIHNpemVzIGhlcmVcclxuICAgIGlmIChkaXNwbGF5KSB7XHJcbiAgICAgIGN0eC5mb250ID0gbGFiZWxGb250LnN0cmluZztcclxuXHJcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcclxuXHJcbiAgICAgICAgLy8gTGFiZWxzXHJcblxyXG4gICAgICAgIC8vIFdpZHRoIG9mIGVhY2ggbGluZSBvZiBsZWdlbmQgYm94ZXMuIExhYmVscyB3cmFwIG9udG8gbXVsdGlwbGUgbGluZXMgd2hlbiB0aGVyZSBhcmUgdG9vIG1hbnkgdG8gZml0IG9uIG9uZVxyXG4gICAgICAgIHZhciBsaW5lV2lkdGhzID0gbWUubGluZVdpZHRocyA9IFswXTtcclxuICAgICAgICB2YXIgbGluZUhlaWdodHMgPSBtZS5saW5lSGVpZ2h0cyA9IFtdO1xyXG4gICAgICAgIHZhciBjdXJyZW50TGluZUhlaWdodCA9IDA7XHJcbiAgICAgICAgdmFyIGxpbmVJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG5cclxuICAgICAgICBoZWxwZXJzLmVhY2gobWUubGVnZW5kSXRlbXMsIGZ1bmN0aW9uIChsZWdlbmRJdGVtLCBpKSB7XHJcbiAgICAgICAgICB2YXIgd2lkdGgsIGhlaWdodDtcclxuXHJcbiAgICAgICAgICBpZiAoaGVscGVycy5pc0FycmF5KGxlZ2VuZEl0ZW0udGV4dCkpIHtcclxuICAgICAgICAgICAgd2lkdGggPSBnZXRNYXhMaW5lV2lkdGgobGVnZW5kSXRlbS50ZXh0KTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZm9udFNpemUgKiBsZWdlbmRJdGVtLnRleHQubGVuZ3RoICsgbGFiZWxPcHRzLnBhZGRpbmc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChsZWdlbmRJdGVtLnRleHQpLndpZHRoO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBmb250U2l6ZSArIGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2lkdGggKz0gZ2V0Qm94V2lkdGgobGFiZWxPcHRzLCBmb250U2l6ZSkgKyAoZm9udFNpemUgLyAyKTtcclxuXHJcbiAgICAgICAgICBpZiAobGluZVdpZHRoc1tsaW5lV2lkdGhzLmxlbmd0aCAtIDFdICsgd2lkdGggKyAyICogbGFiZWxPcHRzLnBhZGRpbmcgPiBtaW5TaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHRzLnB1c2goY3VycmVudExpbmVIZWlnaHQpO1xyXG4gICAgICAgICAgICBjdXJyZW50TGluZUhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIGxpbmVXaWR0aHNbbGluZVdpZHRocy5sZW5ndGggLSAoaSA+IDAgPyAwIDogMSldID0gMDtcclxuICAgICAgICAgICAgbGluZUluZGV4Kys7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGVnZW5kSXRlbS5saW5lT3JDb2x1bW5JbmRleCA9IGxpbmVJbmRleDtcclxuXHJcbiAgICAgICAgICBpZiAoaGVpZ2h0ID4gY3VycmVudExpbmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgY3VycmVudExpbmVIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU3RvcmUgdGhlIGhpdGJveCB3aWR0aCBhbmQgaGVpZ2h0IGhlcmUuIEZpbmFsIHBvc2l0aW9uIHdpbGwgYmUgdXBkYXRlZCBpbiBgZHJhd2BcclxuICAgICAgICAgIGhpdGJveGVzW2ldID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGxpbmVXaWR0aHNbbGluZVdpZHRocy5sZW5ndGggLSAxXSArPSB3aWR0aCArIGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaW5lSGVpZ2h0cy5wdXNoKGN1cnJlbnRMaW5lSGVpZ2h0KTtcclxuICAgICAgICBtaW5TaXplLmhlaWdodCArPSBsaW5lSGVpZ2h0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdikge1xyXG4gICAgICAgICAgcmV0dXJuIGFjYyArIHY7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2UGFkZGluZyA9IGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgIHZhciBjb2x1bW5XaWR0aHMgPSBtZS5jb2x1bW5XaWR0aHMgPSBbXTtcclxuICAgICAgICB2YXIgY29sdW1uSGVpZ2h0cyA9IG1lLmNvbHVtbkhlaWdodHMgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgIHZhciBjdXJyZW50Q29sV2lkdGggPSAwO1xyXG4gICAgICAgIHZhciBjdXJyZW50Q29sSGVpZ2h0ID0gMDtcclxuICAgICAgICB2YXIgY29sdW1uSW5kZXggPSAwO1xyXG5cclxuICAgICAgICBoZWxwZXJzLmVhY2gobWUubGVnZW5kSXRlbXMsIGZ1bmN0aW9uIChsZWdlbmRJdGVtLCBpKSB7XHJcbiAgICAgICAgICB2YXIgaXRlbVdpZHRoO1xyXG4gICAgICAgICAgdmFyIGhlaWdodDtcclxuXHJcbiAgICAgICAgICBpZiAoaGVscGVycy5pc0FycmF5KGxlZ2VuZEl0ZW0udGV4dCkpIHtcclxuICAgICAgICAgICAgaXRlbVdpZHRoID0gZ2V0TWF4TGluZVdpZHRoKGxlZ2VuZEl0ZW0udGV4dCk7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGZvbnRTaXplICogbGVnZW5kSXRlbS50ZXh0Lmxlbmd0aDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1XaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChsZWdlbmRJdGVtLnRleHQpLndpZHRoO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBmb250U2l6ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGl0ZW1XaWR0aCArPSBnZXRCb3hXaWR0aChsYWJlbE9wdHMsIGZvbnRTaXplKSArIChmb250U2l6ZSAvIDIpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRvbyB0YWxsLCBnbyB0byBuZXcgY29sdW1uXHJcbiAgICAgICAgICBpZiAoY3VycmVudENvbEhlaWdodCArIGZvbnRTaXplICsgMiAqIHZQYWRkaW5nID4gbWluU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBjdXJyZW50Q29sV2lkdGggKyBsYWJlbE9wdHMucGFkZGluZztcclxuICAgICAgICAgICAgY29sdW1uV2lkdGhzLnB1c2goY3VycmVudENvbFdpZHRoKTsgLy8gcHJldmlvdXMgY29sdW1uIHdpZHRoXHJcbiAgICAgICAgICAgIGNvbHVtbkhlaWdodHMucHVzaChjdXJyZW50Q29sSGVpZ2h0KTtcclxuICAgICAgICAgICAgY3VycmVudENvbFdpZHRoID0gMDtcclxuICAgICAgICAgICAgY3VycmVudENvbEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIGNvbHVtbkluZGV4Kys7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGVnZW5kSXRlbS5saW5lT3JDb2x1bW5JbmRleCA9IGNvbHVtbkluZGV4O1xyXG5cclxuICAgICAgICAgIC8vIEdldCBtYXggd2lkdGhcclxuICAgICAgICAgIGN1cnJlbnRDb2xXaWR0aCA9IE1hdGgubWF4KGN1cnJlbnRDb2xXaWR0aCwgaXRlbVdpZHRoKTtcclxuICAgICAgICAgIGN1cnJlbnRDb2xIZWlnaHQgKz0gaGVpZ2h0ICsgdlBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgLy8gU3RvcmUgdGhlIGhpdGJveCB3aWR0aCBhbmQgaGVpZ2h0IGhlcmUuIEZpbmFsIHBvc2l0aW9uIHdpbGwgYmUgdXBkYXRlZCBpbiBgZHJhd2BcclxuICAgICAgICAgIGhpdGJveGVzW2ldID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBpdGVtV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b3RhbFdpZHRoICs9IGN1cnJlbnRDb2xXaWR0aDtcclxuICAgICAgICBjb2x1bW5XaWR0aHMucHVzaChjdXJyZW50Q29sV2lkdGgpO1xyXG4gICAgICAgIGNvbHVtbkhlaWdodHMucHVzaChjdXJyZW50Q29sSGVpZ2h0KTtcclxuICAgICAgICBtaW5TaXplLndpZHRoICs9IHRvdGFsV2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZS53aWR0aCA9IG1pblNpemUud2lkdGg7XHJcbiAgICBtZS5oZWlnaHQgPSBtaW5TaXplLmhlaWdodDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgdmFyIG9wdHMgPSBtZS5vcHRpb25zO1xyXG4gICAgdmFyIGxhYmVsT3B0cyA9IG9wdHMubGFiZWxzO1xyXG4gICAgdmFyIGdsb2JhbERlZmF1bHRzID0gZGVmYXVsdHMuZ2xvYmFsO1xyXG4gICAgdmFyIGRlZmF1bHRDb2xvciA9IGdsb2JhbERlZmF1bHRzLmRlZmF1bHRDb2xvcjtcclxuICAgIHZhciBsaW5lRGVmYXVsdCA9IGdsb2JhbERlZmF1bHRzLmVsZW1lbnRzLmxpbmU7XHJcbiAgICB2YXIgbGVnZW5kSGVpZ2h0ID0gbWUuaGVpZ2h0O1xyXG4gICAgdmFyIGNvbHVtbkhlaWdodHMgPSBtZS5jb2x1bW5IZWlnaHRzO1xyXG4gICAgdmFyIGNvbHVtbldpZHRocyA9IG1lLmNvbHVtbldpZHRocztcclxuICAgIHZhciBsZWdlbmRXaWR0aCA9IG1lLndpZHRoO1xyXG4gICAgdmFyIGxpbmVXaWR0aHMgPSBtZS5saW5lV2lkdGhzO1xyXG4gICAgdmFyIGxpbmVIZWlnaHRzID0gbWUubGluZUhlaWdodHM7XHJcblxyXG4gICAgaWYgKG9wdHMuZGlzcGxheSkge1xyXG4gICAgICB2YXIgY3R4ID0gbWUuY3R4O1xyXG4gICAgICB2YXIgZm9udENvbG9yID0gdmFsdWVPckRlZmF1bHQobGFiZWxPcHRzLmZvbnRDb2xvciwgZ2xvYmFsRGVmYXVsdHMuZGVmYXVsdEZvbnRDb2xvcik7XHJcbiAgICAgIHZhciBsYWJlbEZvbnQgPSBoZWxwZXJzLm9wdGlvbnMuX3BhcnNlRm9udChsYWJlbE9wdHMpO1xyXG4gICAgICB2YXIgZm9udFNpemUgPSBsYWJlbEZvbnQuc2l6ZTtcclxuICAgICAgdmFyIGN1cnNvcjtcclxuXHJcbiAgICAgIC8vIENhbnZhcyBzZXR1cFxyXG4gICAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvbnRDb2xvcjsgLy8gZm9yIHN0cmlrZXRocm91Z2ggZWZmZWN0XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmb250Q29sb3I7IC8vIHJlbmRlciBpbiBjb3JyZWN0IGNvbG91clxyXG4gICAgICBjdHguZm9udCA9IGxhYmVsRm9udC5zdHJpbmc7XHJcblxyXG4gICAgICB2YXIgYm94V2lkdGggPSBnZXRCb3hXaWR0aChsYWJlbE9wdHMsIGZvbnRTaXplKTtcclxuICAgICAgdmFyIGhpdGJveGVzID0gbWUubGVnZW5kSGl0Qm94ZXM7XHJcblxyXG4gICAgICAvLyBjdXJyZW50IHBvc2l0aW9uXHJcbiAgICAgIHZhciBkcmF3TGVnZW5kQm94ID0gZnVuY3Rpb24gKHgsIHksIGxlZ2VuZEl0ZW0pIHtcclxuICAgICAgICBpZiAoaXNOYU4oYm94V2lkdGgpIHx8IGJveFdpZHRoIDw9IDApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgY3R4IGZvciB0aGUgYm94XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGxpbmVXaWR0aCA9IHZhbHVlT3JEZWZhdWx0KGxlZ2VuZEl0ZW0ubGluZVdpZHRoLCBsaW5lRGVmYXVsdC5ib3JkZXJXaWR0aCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHZhbHVlT3JEZWZhdWx0KGxlZ2VuZEl0ZW0uZmlsbFN0eWxlLCBkZWZhdWx0Q29sb3IpO1xyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gdmFsdWVPckRlZmF1bHQobGVnZW5kSXRlbS5saW5lQ2FwLCBsaW5lRGVmYXVsdC5ib3JkZXJDYXBTdHlsZSk7XHJcbiAgICAgICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gdmFsdWVPckRlZmF1bHQobGVnZW5kSXRlbS5saW5lRGFzaE9mZnNldCwgbGluZURlZmF1bHQuYm9yZGVyRGFzaE9mZnNldCk7XHJcbiAgICAgICAgY3R4LmxpbmVKb2luID0gdmFsdWVPckRlZmF1bHQobGVnZW5kSXRlbS5saW5lSm9pbiwgbGluZURlZmF1bHQuYm9yZGVySm9pblN0eWxlKTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHZhbHVlT3JEZWZhdWx0KGxlZ2VuZEl0ZW0uc3Ryb2tlU3R5bGUsIGRlZmF1bHRDb2xvcik7XHJcblxyXG4gICAgICAgIGlmIChjdHguc2V0TGluZURhc2gpIHtcclxuICAgICAgICAgIC8vIElFIDkgYW5kIDEwIGRvIG5vdCBzdXBwb3J0IGxpbmUgZGFzaFxyXG4gICAgICAgICAgY3R4LnNldExpbmVEYXNoKHZhbHVlT3JEZWZhdWx0KGxlZ2VuZEl0ZW0ubGluZURhc2gsIGxpbmVEZWZhdWx0LmJvcmRlckRhc2gpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRzLmxhYmVscyAmJiBvcHRzLmxhYmVscy51c2VQb2ludFN0eWxlKSB7XHJcbiAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSB4IGFuZCB5IGZvciBkcmF3UG9pbnQoKSBiZWNhdXNlIGl0cyBleHBlY3RpbmdcclxuICAgICAgICAgIC8vIHggYW5kIHkgdG8gYmUgY2VudGVyIG9mIGZpZ3VyZSAoaW5zdGVhZCBvZiB0b3AgbGVmdClcclxuICAgICAgICAgIHZhciByYWRpdXMgPSBib3hXaWR0aCAqIE1hdGguU1FSVDIgLyAyO1xyXG4gICAgICAgICAgdmFyIGNlbnRlclggPSB4ICsgYm94V2lkdGggLyAyO1xyXG4gICAgICAgICAgdmFyIGNlbnRlclkgPSB5ICsgZm9udFNpemUgLyAyO1xyXG5cclxuICAgICAgICAgIC8vIERyYXcgcG9pbnRTdHlsZSBhcyBsZWdlbmQgc3ltYm9sXHJcbiAgICAgICAgICBoZWxwZXJzLmNhbnZhcy5kcmF3UG9pbnQoY3R4LCBsZWdlbmRJdGVtLnBvaW50U3R5bGUsIHJhZGl1cywgY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIERyYXcgYm94IGFzIGxlZ2VuZCBzeW1ib2xcclxuICAgICAgICAgIGlmIChsaW5lV2lkdGggIT09IDApIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgYm94V2lkdGgsIGZvbnRTaXplKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCBib3hXaWR0aCwgZm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBkcmF3U3RyaWtlVGhyb3VnaCA9IGZ1bmN0aW9uICh4LCB5LCB3KSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdywgeSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIGRyYXdDcm9zc092ZXIgPSBmdW5jdGlvbiAoeCwgeSwgdywgaCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHgsIHkgKyBoKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyB3LCB5KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgZmlsbFRleHQgPSBmdW5jdGlvbiAoeCwgeSwgbGVnZW5kSXRlbSwgdGV4dFdpZHRoKSB7XHJcbiAgICAgICAgdmFyIGhhbGZGb250U2l6ZSA9IGZvbnRTaXplIC8gMjtcclxuICAgICAgICB2YXIgeExlZnQgPSBib3hXaWR0aCArIGhhbGZGb250U2l6ZSArIHg7XHJcbiAgICAgICAgdmFyIHlNaWRkbGUgPSB5ICsgaGFsZkZvbnRTaXplO1xyXG5cclxuICAgICAgICBpZiAoaGVscGVycy5pc0FycmF5KGxlZ2VuZEl0ZW0udGV4dCkpIHtcclxuICAgICAgICAgIGhlbHBlcnMuZWFjaChsZWdlbmRJdGVtLnRleHQsIGZ1bmN0aW9uICh0ZXh0TGluZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmVPZmZzZXQgPSBpbmRleCAqIGZvbnRTaXplO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dExpbmUsIHhMZWZ0LCB5TWlkZGxlICsgbGluZU9mZnNldCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGxlZ2VuZEl0ZW0udGV4dCwgeExlZnQsIHlNaWRkbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZ2VuZEl0ZW0uaGlkZGVuKSB7XHJcbiAgICAgICAgICBpZiAoaGVscGVycy5pc0FycmF5KGxlZ2VuZEl0ZW0udGV4dCkpIHtcclxuICAgICAgICAgICAgZHJhd0Nyb3NzT3Zlcih4TGVmdCwgeU1pZGRsZSwgdGV4dFdpZHRoLCAobGVnZW5kSXRlbS50ZXh0Lmxlbmd0aCAtIDEpICogKGZvbnRTaXplIC0gMSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHJhd1N0cmlrZVRocm91Z2goeExlZnQsIHlNaWRkbGUsIHRleHRXaWR0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIGFsaWdubWVudE9mZnNldCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGJsb2NrU2l6ZSkge1xyXG4gICAgICAgIHN3aXRjaCAob3B0cy5hbGlnbikge1xyXG4gICAgICAgICAgY2FzZSAnc3RhcnQnOlxyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxPcHRzLnBhZGRpbmc7XHJcbiAgICAgICAgICBjYXNlICdlbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gZGltZW5zaW9uIC0gYmxvY2tTaXplO1xyXG4gICAgICAgICAgZGVmYXVsdDogLy8gY2VudGVyXHJcbiAgICAgICAgICAgIHJldHVybiAoZGltZW5zaW9uIC0gYmxvY2tTaXplICsgbGFiZWxPcHRzLnBhZGRpbmcpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBIb3Jpem9udGFsXHJcbiAgICAgIHZhciBpc0hvcml6b250YWwgPSBtZS5pc0hvcml6b250YWwoKTtcclxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgIGN1cnNvciA9IHtcclxuICAgICAgICAgIHg6IG1lLmxlZnQgKyBhbGlnbm1lbnRPZmZzZXQobGVnZW5kV2lkdGgsIGxpbmVXaWR0aHNbMF0pLFxyXG4gICAgICAgICAgeTogbWUudG9wICsgbGFiZWxPcHRzLnBhZGRpbmcsXHJcbiAgICAgICAgICBsaW5lOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJzb3IgPSB7XHJcbiAgICAgICAgICB4OiBtZS5sZWZ0ICsgbGFiZWxPcHRzLnBhZGRpbmcsXHJcbiAgICAgICAgICB5OiBtZS50b3AgKyBhbGlnbm1lbnRPZmZzZXQobGVnZW5kSGVpZ2h0LCBjb2x1bW5IZWlnaHRzWzBdKSxcclxuICAgICAgICAgIGxpbmU6IDBcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoZWxwZXJzLmVhY2gobWUubGVnZW5kSXRlbXMsIGZ1bmN0aW9uIChsZWdlbmRJdGVtLCBpKSB7XHJcbiAgICAgICAgdmFyIHRleHRXaWR0aCwgaGVpZ2h0LCBib3hUb3BPZmZzZXQ7XHJcblxyXG4gICAgICAgIGlmIChsZWdlbmRJdGVtLmxpbmVPckNvbHVtbkluZGV4ID4gY3Vyc29yLmxpbmUpIHtcclxuICAgICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcclxuICAgICAgICAgICAgY3Vyc29yLnkgKz0gbGluZUhlaWdodHNbY3Vyc29yLmxpbmVdO1xyXG4gICAgICAgICAgICBjdXJzb3IubGluZSA9IGxlZ2VuZEl0ZW0ubGluZU9yQ29sdW1uSW5kZXg7XHJcbiAgICAgICAgICAgIGN1cnNvci54ID0gbWUubGVmdCArIGFsaWdubWVudE9mZnNldChsZWdlbmRXaWR0aCwgbGluZVdpZHRoc1tjdXJzb3IubGluZV0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3Vyc29yLnggKz0gY29sdW1uV2lkdGhzW2N1cnNvci5saW5lXSArIGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgICAgICBjdXJzb3IubGluZSA9IGxlZ2VuZEl0ZW0ubGluZU9yQ29sdW1uSW5kZXg7XHJcbiAgICAgICAgICAgIGN1cnNvci55ID0gbWUudG9wICsgYWxpZ25tZW50T2Zmc2V0KGxlZ2VuZEhlaWdodCwgY29sdW1uSGVpZ2h0c1tjdXJzb3IubGluZV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhlbHBlcnMuaXNBcnJheShsZWdlbmRJdGVtLnRleHQpKSB7XHJcbiAgICAgICAgICB0ZXh0V2lkdGggPSBsZWdlbmRJdGVtLnRleHQubWFwKGZ1bmN0aW9uICh0ZXh0TGluZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHRMaW5lKS53aWR0aDtcclxuICAgICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2ID4gYWNjID8gdiA6IGFjYztcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgYm94VG9wT2Zmc2V0ID0gZm9udFNpemUgLyAyICogKGxlZ2VuZEl0ZW0udGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIGhlaWdodCA9IGZvbnRTaXplICogbGVnZW5kSXRlbS50ZXh0Lmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGxlZ2VuZEl0ZW0udGV4dCkud2lkdGg7XHJcbiAgICAgICAgICBib3hUb3BPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgaGVpZ2h0ID0gZm9udFNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBib3hXaWR0aCArIChmb250U2l6ZSAvIDIpICsgdGV4dFdpZHRoO1xyXG4gICAgICAgIHZhciB4ID0gY3Vyc29yLng7XHJcbiAgICAgICAgdmFyIHkgPSBjdXJzb3IueTtcclxuXHJcbiAgICAgICAgdmFyIHRvcE9mZnNldCA9IGlzSG9yaXpvbnRhbCA/IE1hdGgudHJ1bmMoKGxpbmVIZWlnaHRzW2N1cnNvci5saW5lXSAtIGhpdGJveGVzW2ldLmhlaWdodCkgLyAyKSA6IDA7XHJcblxyXG4gICAgICAgIGRyYXdMZWdlbmRCb3goeCwgeSArIGJveFRvcE9mZnNldCArIHRvcE9mZnNldCwgbGVnZW5kSXRlbSk7XHJcblxyXG4gICAgICAgIGhpdGJveGVzW2ldLmxlZnQgPSB4O1xyXG4gICAgICAgIGhpdGJveGVzW2ldLnRvcCA9IHk7XHJcblxyXG4gICAgICAgIC8vIEZpbGwgdGhlIGFjdHVhbCBsYWJlbFxyXG4gICAgICAgIGZpbGxUZXh0KHgsIHkgKyB0b3BPZmZzZXQsIGxlZ2VuZEl0ZW0sIHRleHRXaWR0aCk7XHJcblxyXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcclxuICAgICAgICAgIGN1cnNvci54ICs9IHdpZHRoICsgbGFiZWxPcHRzLnBhZGRpbmc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnNvci55ICs9IGhlaWdodCArIGxhYmVsT3B0cy5wYWRkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==