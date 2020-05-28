/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { isArray, isDate, isNumber, isObject, isObjectEmpty, isString, isUndefined } from '../utils/type-checks';
import { getLocale } from '../locale/locales';
import { createInvalid, isValid } from './valid';
import { configFromStringAndArray } from './from-string-and-array';
import { configFromStringAndFormat } from './from-string-and-format';
import { cloneDate } from './clone';
import { configFromString } from './from-string';
import { configFromArray } from './from-array';
import { configFromObject } from './from-object';
import { checkOverflow } from './check-overflow';
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    /** @type {?} */
    const res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
export function prepareConfig(config) {
    /** @type {?} */
    let input = config._i;
    /** @type {?} */
    const format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    /** @type {?} */
    const input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        /** @type {?} */
        const _arr = input.slice(0);
        config._a = _arr.map((/**
         * @param {?} obj
         * @return {?}
         */
        obj => isString(obj) ? parseInt(obj, 10) : obj));
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    /** @type {?} */
    const config = {};
    /** @type {?} */
    let _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1hbnl0aGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBR2pELFNBQVMsZ0JBQWdCLENBQUMsTUFBeUI7O1VBQzNDLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELHlFQUF5RTtJQUN6RSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUMs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QUFFO1FBQzFCLG9CQUFvQjtRQUNwQixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO1NBQU07UUFDTCwyQ0FBMkM7UUFDM0MsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBZ0IsRUFBRSxNQUEwQixFQUFFLFNBQWtCLEVBQUUsTUFBZ0IsRUFBRSxLQUFlOztVQUM1SCxNQUFNLEdBQXNCLEVBQUU7O1FBQ2hDLE1BQU0sR0FBRyxLQUFLO0lBRWxCLHNDQUFzQztJQUN0QyxtREFBbUQ7SUFDbkQsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixJQUFJO0lBRUosNENBQTRDO0lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtRQUMzRixNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQ3BCO0lBQ0QsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQyxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN0QixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNuQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUV4QixPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZSwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdEVtcHR5LCBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4vY2xvbmUnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21PYmplY3QgfSBmcm9tICcuL2Zyb20tb2JqZWN0JztcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHJlcyA9IGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKTtcbiAgLy8gdG9kbzogcmVtb3ZlLCBpbiBtb21lbnQuanMgaXQncyBuZXZlciBjYWxsZWQgY3V6IG9mIG1vbWVudCBjb25zdHJ1Y3RvclxuICByZXMuX2QgPSBuZXcgRGF0ZShyZXMuX2QgIT0gbnVsbCA/IHJlcy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICBpZiAoIWlzVmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB7X2lzVmFsaWQ6IG51bGx9KSkpIHtcbiAgICByZXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIC8vIHRvZG86IHVwZGF0ZSBvZmZzZXRcbiAgLyppZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgcmVzLl9kID0gYWRkKHJlcy5fZCwgMSwgJ2RheScpO1xuICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgfSovXG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pO1xuICBjb25zdCBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcsIHsgbnVsbElucHV0OiB0cnVlIH0pO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgcmVjdXJzaW9uXG5cbiAgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgY29uZmlnLl9kID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XG4gIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzQXJyYXk8c3RyaW5nIHwgbnVtYmVyPihpbnB1dCkgJiYgaW5wdXQubGVuZ3RoKSB7XG4gICAgY29uc3QgX2FycjogKHN0cmluZyB8IG51bWJlcilbXSA9IGlucHV0LnNsaWNlKDApO1xuICAgIGNvbmZpZy5fYSA9IF9hcnIubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9O1xuICBsZXQgX2lucHV0ID0gaW5wdXQ7XG5cbiAgLy8gcGFyYW1zIHN3aXRjaCAtPiBza2lwOyB0ZXN0IGl0IHdlbGxcbiAgLy8gaWYgKGxvY2FsZUtleSA9PT0gdHJ1ZSB8fCBsb2NhbGVLZXkgPT09IGZhbHNlKSB7XG4gIC8vICAgICBzdHJpY3QgPSBsb2NhbGVLZXk7XG4gIC8vICAgICBsb2NhbGVLZXkgPSB1bmRlZmluZWQ7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBmYWlsIGZhc3QgYW5kIHJldHVybiBub3QgdmFsaWQgZGF0ZVxuICBpZiAoKGlzT2JqZWN0KF9pbnB1dCkgJiYgaXNPYmplY3RFbXB0eShfaW5wdXQpKSB8fCAoaXNBcnJheShfaW5wdXQpICYmIF9pbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgX2lucHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAvLyBjb25maWcuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gIGNvbmZpZy5fdXNlVVRDID0gY29uZmlnLl9pc1VUQyA9IGlzVVRDO1xuICBjb25maWcuX2wgPSBsb2NhbGVLZXk7XG4gIGNvbmZpZy5faSA9IF9pbnB1dDtcbiAgY29uZmlnLl9mID0gZm9ybWF0O1xuICBjb25maWcuX3N0cmljdCA9IHN0cmljdDtcblxuICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpO1xufVxuIl19