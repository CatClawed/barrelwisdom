/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// internal storage for locale config files
import { Locale } from './locale.class';
import { baseConfig } from './locale.defaults';
import { hasOwnProp, isArray, isObject, isString, isUndefined, toInt } from '../utils/type-checks';
import { compareArrays } from '../utils/compare-arrays';
import { initWeek } from '../units/week';
import { initWeekYear } from '../units/week-year';
import { initYear } from '../units/year';
import { initTimezone } from '../units/timezone';
import { initTimestamp } from '../units/timestamp';
import { initSecond } from '../units/second';
import { initQuarter } from '../units/quarter';
import { initOffset } from '../units/offset';
import { initMinute } from '../units/minute';
import { initMillisecond } from '../units/millisecond';
import { initMonth } from '../units/month';
import { initHour } from '../units/hour';
import { initDayOfYear } from '../units/day-of-year';
import { initDayOfWeek } from '../units/day-of-week';
import { initDayOfMonth } from '../units/day-of-month';
/** @type {?} */
const locales = {};
/** @type {?} */
const localeFamilies = {};
/** @type {?} */
let globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    /** @type {?} */
    let next;
    /** @type {?} */
    let locale;
    /** @type {?} */
    let i = 0;
    while (i < names.length) {
        /** @type {?} */
        const split = normalizeLocale(names[i]).split('-');
        /** @type {?} */
        let j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
export function mergeConfigs(parentConfig, childConfig) {
    /** @type {?} */
    const res = Object.assign({}, parentConfig);
    for (const childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[(/** @type {?} */ (childProp))] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[(/** @type {?} */ (childProp))] = childConfig[childProp];
        }
        else {
            delete res[(/** @type {?} */ (childProp))];
        }
    }
    for (const parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[(/** @type {?} */ (parentProp))])) {
            // make sure changes to properties don't modify parent config
            res[(/** @type {?} */ (parentProp))] = Object.assign({}, res[(/** @type {?} */ (parentProp))]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
     // TODO: Find a better way to register and load all the locales in Node
     if (!locales[name] && (typeof module !== 'undefined') &&
       module && module.exports) {
       try {
         oldLocale = globalLocale._abbr;
         var aliasedRequire = require;
         aliasedRequire('./locale/' + name);
         getSetGlobalLocale(oldLocale);
       } catch (e) {}
     }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error(`Khronos locale error: please load locale "${name}" before using it`);
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
export function getSetGlobalLocale(key, values) {
    /** @type {?} */
    let data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    /** @type {?} */
    let parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name, config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            defineLocale(x.name, x.config);
        }));
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function updateLocale(name, config) {
    /** @type {?} */
    let _config = config;
    if (_config != null) {
        /** @type {?} */
        let parentConfig = baseConfig;
        // MERGE
        /** @type {?} */
        const tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        /** @type {?} */
        const locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
// returns locale data
/**
 * @param {?=} key
 * @return {?}
 */
export function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    /** @type {?} */
    const _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
export function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales[`en`]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        /**
         * @param {?} num
         * @return {?}
         */
        ordinal(num) {
            /** @type {?} */
            const b = num % 10;
            /** @type {?} */
            const output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNC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QUcsR0FBRyxNQUFNLENBQUM7UUFDdEIsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUVILFFBQVEsRUFBRSxDQUFDO0lBQ1gsWUFBWSxFQUFFLENBQUM7SUFDZixRQUFRLEVBQUUsQ0FBQztJQUNYLFlBQVksRUFBRSxDQUFDO0lBQ2YsYUFBYSxFQUFFLENBQUM7SUFDaEIsVUFBVSxFQUFFLENBQUM7SUFDYixXQUFXLEVBQUUsQ0FBQztJQUNkLFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLENBQUM7SUFDWixVQUFVLEVBQUUsQ0FBQztJQUNiLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsYUFBYSxFQUFFLENBQUM7SUFDaEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsY0FBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2xvY2FsZS5kZWZhdWx0cyc7XG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNvbXBhcmVBcnJheXMgfSBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XG5cbmltcG9ydCB7IGluaXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XG5pbXBvcnQgeyBpbml0V2Vla1llYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xuaW1wb3J0IHsgaW5pdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGluaXRUaW1lem9uZSB9IGZyb20gJy4uL3VuaXRzL3RpbWV6b25lJztcbmltcG9ydCB7IGluaXRUaW1lc3RhbXAgfSBmcm9tICcuLi91bml0cy90aW1lc3RhbXAnO1xuaW1wb3J0IHsgaW5pdFNlY29uZCB9IGZyb20gJy4uL3VuaXRzL3NlY29uZCc7XG5pbXBvcnQgeyBpbml0UXVhcnRlciB9IGZyb20gJy4uL3VuaXRzL3F1YXJ0ZXInO1xuaW1wb3J0IHsgaW5pdE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpbml0TWludXRlIH0gZnJvbSAnLi4vdW5pdHMvbWludXRlJztcbmltcG9ydCB7IGluaXRNaWxsaXNlY29uZCB9IGZyb20gJy4uL3VuaXRzL21pbGxpc2Vjb25kJztcbmltcG9ydCB7IGluaXRNb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IGluaXRIb3VyIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XG5pbXBvcnQgeyBpbml0RGF5T2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXllYXInO1xuaW1wb3J0IHsgaW5pdERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IGluaXREYXlPZk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLW1vbnRoJztcblxuY29uc3QgbG9jYWxlczogeyBba2V5OiBzdHJpbmddOiBMb2NhbGUgfSA9IHt9O1xuY29uc3QgbG9jYWxlRmFtaWxpZXM6IHsgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgY29uZmlnOiBMb2NhbGVEYXRhfVtdIH0gPSB7fTtcbmxldCBnbG9iYWxMb2NhbGU6IExvY2FsZTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xufVxuXG4vLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LFxuLy8gYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzOiBzdHJpbmdbXSk6IExvY2FsZSB7XG4gIGxldCBuZXh0O1xuICBsZXQgbG9jYWxlO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICBjb25zdCBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcbiAgICBsZXQgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgfVxuICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAvLyB0aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGotLTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnOiBMb2NhbGVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZzogTG9jYWxlRGF0YSkge1xuICBjb25zdCByZXM6IExvY2FsZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRDb25maWcpO1xuXG4gIGZvciAoY29uc3QgY2hpbGRQcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBjaGlsZFByb3ApKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pKSB7XG4gICAgICByZXNbY2hpbGRQcm9wIGFzIGFueV0gPSB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIHBhcmVudENvbmZpZ1tjaGlsZFByb3BdKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbY2hpbGRQcm9wXSAhPSBudWxsKSB7XG4gICAgICByZXNbY2hpbGRQcm9wIGFzIGFueV0gPSBjaGlsZENvbmZpZ1tjaGlsZFByb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcCBhcyBhbnldO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHBhcmVudFByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxuICAgICkge1xuICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgcmVzW3BhcmVudFByb3AgYXMgYW55XSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZTogc3RyaW5nKTogTG9jYWxlIHtcbiAgLy8gbm8gd2F5IVxuICAvKiB2YXIgb2xkTG9jYWxlID0gbnVsbDtcbiAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgdHJ5IHtcbiAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICB9IGNhdGNoIChlKSB7fVxuICAgfSovXG4gIGlmICghbG9jYWxlc1tuYW1lXSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUuZXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBLaHJvbm9zIGxvY2FsZSBlcnJvcjogcGxlYXNlIGxvYWQgbG9jYWxlIFwiJHtuYW1lfVwiIGJlZm9yZSB1c2luZyBpdGApO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIGxvY2FsZSBhbmQgdGhlbiBzZXQgdGhlIGdsb2JhbCBsb2NhbGUuICBJZlxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbi8vIGxvY2FsZSBrZXkuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdLCB2YWx1ZXM/OiBMb2NhbGVEYXRhKTogc3RyaW5nIHtcbiAgbGV0IGRhdGE6IExvY2FsZTtcblxuICBpZiAoa2V5KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnbG9iYWxMb2NhbGUgJiYgZ2xvYmFsTG9jYWxlLl9hYmJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZSB7XG4gIGlmIChjb25maWcgPT09IG51bGwpIHtcbiAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICBnbG9iYWxMb2NhbGUgPSBnZXRMb2NhbGUoJ2VuJyk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xuICAgICAgfVxuICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7IG5hbWUsIGNvbmZpZyB9KTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXG4gIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcblxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZSB7XG4gIGxldCBfY29uZmlnID0gY29uZmlnO1xuXG4gIGlmIChfY29uZmlnICE9IG51bGwpIHtcbiAgICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAvLyBNRVJHRVxuICAgIGNvbnN0IHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICB9XG4gICAgX2NvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIF9jb25maWcpO1xuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBMb2NhbGUoX2NvbmZpZyk7XG4gICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcblxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdKTogTG9jYWxlIHtcbiAgc2V0RGVmYXVsdExvY2FsZSgpO1xuXG4gIGlmICgha2V5KSB7XG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgfVxuICAvLyBsZXQgbG9jYWxlO1xuICBjb25zdCBfa2V5ID0gaXNBcnJheShrZXkpID8ga2V5IDogW2tleV07XG5cbiAgcmV0dXJuIGNob29zZUxvY2FsZShfa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsZXMpO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxlKCk6IHZvaWQge1xuICBpZiAobG9jYWxlc1tgZW5gXSkge1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgb3JkaW5hbChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBjb25zdCBiID0gbnVtICUgMTA7XG4gICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICB0b0ludCgobnVtICUgMTAwKSAvIDEwKSA9PT0gMVxuICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgIDogYiA9PT0gMSA/ICdzdCcgOiBiID09PSAyID8gJ25kJyA6IGIgPT09IDMgPyAncmQnIDogJ3RoJztcblxuICAgICAgcmV0dXJuIG51bSArIG91dHB1dDtcbiAgICB9XG4gIH0pO1xuXG4gIGluaXRXZWVrKCk7XG4gIGluaXRXZWVrWWVhcigpO1xuICBpbml0WWVhcigpO1xuICBpbml0VGltZXpvbmUoKTtcbiAgaW5pdFRpbWVzdGFtcCgpO1xuICBpbml0U2Vjb25kKCk7XG4gIGluaXRRdWFydGVyKCk7XG4gIGluaXRPZmZzZXQoKTtcbiAgaW5pdE1vbnRoKCk7XG4gIGluaXRNaW51dGUoKTtcbiAgaW5pdE1pbGxpc2Vjb25kKCk7XG4gIGluaXRIb3VyKCk7XG4gIGluaXREYXlPZlllYXIoKTtcbiAgaW5pdERheU9mV2VlaygpO1xuICBpbml0RGF5T2ZNb250aCgpO1xufVxuIl19