/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    /** @type {?} */
    const placement = data.placement;
    /** @type {?} */
    const basePlacement = placement.split(' ')[0];
    /** @type {?} */
    const shiftVariation = placement.split(' ')[1];
    if (shiftVariation) {
        const { host, target } = data.offsets;
        /** @type {?} */
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        const side = isVertical ? 'left' : 'top';
        /** @type {?} */
        const measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        const shiftOffsets = {
            start: { [side]: host[side] },
            end: {
                [side]: host[side] + host[measurement] - target[measurement]
            }
        };
        data.offsets.target = Object.assign({}, target, {
            [side]: (side === shiftVariation ? ((/** @type {?} */ (shiftOffsets))).start[side] : ((/** @type {?} */ (shiftOffsets))).end[side])
        });
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL3NoaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFVOztVQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1VBQzFCLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFDdkMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlDLElBQUksY0FBYyxFQUFFO2NBQ1osRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87O2NBQy9CLFVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUM1RCxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O2NBQ2xDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUTs7Y0FFN0MsWUFBWSxHQUFHO1lBQ25CLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLEdBQUcsRUFBRTtnQkFDSCxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUM3RDtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHFCQUNkLE1BQU0sRUFBSztZQUNaLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFlBQVksRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFlBQVksRUFBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hHLENBQ0YsQ0FBQztLQUNIO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdChkYXRhOiBEYXRhKTogRGF0YSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF07XG4gIGNvbnN0IHNoaWZ0VmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XG5cbiAgaWYgKHNoaWZ0VmFyaWF0aW9uKSB7XG4gICAgY29uc3QgeyBob3N0LCB0YXJnZXQgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogeyBbc2lkZV06IGhvc3Rbc2lkZV0gfSxcbiAgICAgIGVuZDoge1xuICAgICAgICBbc2lkZV06IGhvc3Rbc2lkZV0gKyBob3N0W21lYXN1cmVtZW50XSAtIHRhcmdldFttZWFzdXJlbWVudF1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgIC4uLnRhcmdldCwgLi4ue1xuICAgICAgICBbc2lkZV06IChzaWRlID09PSBzaGlmdFZhcmlhdGlvbiA/IChzaGlmdE9mZnNldHMgYXMgYW55KS5zdGFydFtzaWRlXSA6IChzaGlmdE9mZnNldHMgYXMgYW55KS5lbmRbc2lkZV0pXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIl19