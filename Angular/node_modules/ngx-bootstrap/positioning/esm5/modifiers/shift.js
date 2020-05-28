/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    var _a, _b, _c;
    /** @type {?} */
    var placement = data.placement;
    /** @type {?} */
    var basePlacement = placement.split(' ')[0];
    /** @type {?} */
    var shiftVariation = placement.split(' ')[1];
    if (shiftVariation) {
        var _d = data.offsets, host = _d.host, target = _d.target;
        /** @type {?} */
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        var side = isVertical ? 'left' : 'top';
        /** @type {?} */
        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        var shiftOffsets = {
            start: (_a = {}, _a[side] = host[side], _a),
            end: (_b = {},
                _b[side] = host[side] + host[measurement] - target[measurement],
                _b)
        };
        data.offsets.target = tslib_1.__assign({}, target, (_c = {},
            _c[side] = (side === shiftVariation ? ((/** @type {?} */ (shiftOffsets))).start[side] : ((/** @type {?} */ (shiftOffsets))).end[side]),
            _c));
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL3NoaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBVTs7O1FBQ3hCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUzs7UUFDMUIsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUN2QyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsSUFBSSxjQUFjLEVBQUU7UUFDWixJQUFBLGlCQUErQixFQUE3QixjQUFJLEVBQUUsa0JBQXVCOztZQUMvQixVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDNUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztZQUNsQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7O1lBRTdDLFlBQVksR0FBRztZQUNuQixLQUFLLFlBQUksR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFFO1lBQzdCLEdBQUc7Z0JBQ0QsR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO21CQUM3RDtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHdCQUNkLE1BQU07WUFDUCxHQUFDLElBQUksSUFBRyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsWUFBWSxFQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsWUFBWSxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTFHLENBQUM7S0FDSDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpZnQoZGF0YTogRGF0YSk6IERhdGEge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuICBjb25zdCBzaGlmdFZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIGlmIChzaGlmdFZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgaG9zdCwgdGFyZ2V0IH0gPSBkYXRhLm9mZnNldHM7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IHsgW3NpZGVdOiBob3N0W3NpZGVdIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgW3NpZGVdOiBob3N0W3NpZGVdICsgaG9zdFttZWFzdXJlbWVudF0gLSB0YXJnZXRbbWVhc3VyZW1lbnRdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7XG4gICAgICAuLi50YXJnZXQsIC4uLntcbiAgICAgICAgW3NpZGVdOiAoc2lkZSA9PT0gc2hpZnRWYXJpYXRpb24gPyAoc2hpZnRPZmZzZXRzIGFzIGFueSkuc3RhcnRbc2lkZV0gOiAoc2hpZnRPZmZzZXRzIGFzIGFueSkuZW5kW3NpZGVdKVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==