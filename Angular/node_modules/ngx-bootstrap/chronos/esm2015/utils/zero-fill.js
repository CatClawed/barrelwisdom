/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
export function zeroFill(num, targetLength, forceSign) {
    /** @type {?} */
    const absNumber = `${Math.abs(num)}`;
    /** @type {?} */
    const zerosToFill = targetLength - absNumber.length;
    /** @type {?} */
    const sign = num >= 0;
    /** @type {?} */
    const _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    /** @type {?} */
    const _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVcsRUFDWCxZQUFvQixFQUNwQixTQUFtQjs7VUFDcEMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs7VUFDOUIsV0FBVyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTTs7VUFDN0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDOztVQUNmLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7VUFFM0MsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUxRSxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHplcm9GaWxsKG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlbmd0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2lnbj86IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBhYnNOdW1iZXIgPSBgJHtNYXRoLmFicyhudW0pfWA7XG4gIGNvbnN0IHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aDtcbiAgY29uc3Qgc2lnbiA9IG51bSA+PSAwO1xuICBjb25zdCBfc2lnbiA9IHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nO1xuICAvLyB0b2RvOiB0aGlzIGlzIGNyYXp5IHNsb3dcbiAgY29uc3QgX3plcm9zID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIChfc2lnbiArIF96ZXJvcyArIGFic051bWJlcik7XG59XG4iXX0=