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
var locales = {};
/** @type {?} */
var localeFamilies = {};
/** @type {?} */
var globalLocale;
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
    var next;
    /** @type {?} */
    var locale;
    /** @type {?} */
    var i = 0;
    while (i < names.length) {
        /** @type {?} */
        var split = normalizeLocale(names[i]).split('-');
        /** @type {?} */
        var j = split.length;
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
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
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
    for (var parentProp in parentConfig) {
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
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
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
    var data;
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
    var parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
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
    var _config = config;
    if (_config != null) {
        /** @type {?} */
        var parentConfig = baseConfig;
        // MERGE
        /** @type {?} */
        var tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        /** @type {?} */
        var locale = new Locale(_config);
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
    var _key = isArray(key) ? key : [key];
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
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            /** @type {?} */
            var b = num % 10;
            /** @type {?} */
            var output = toInt((num % 100) / 10) === 1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNC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O1lBRTdELE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN0QixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsUUFBUSxFQUFFLENBQUM7SUFDWCxZQUFZLEVBQUUsQ0FBQztJQUNmLFFBQVEsRUFBRSxDQUFDO0lBQ1gsWUFBWSxFQUFFLENBQUM7SUFDZixhQUFhLEVBQUUsQ0FBQztJQUNoQixVQUFVLEVBQUUsQ0FBQztJQUNiLFdBQVcsRUFBRSxDQUFDO0lBQ2QsVUFBVSxFQUFFLENBQUM7SUFDYixTQUFTLEVBQUUsQ0FBQztJQUNaLFVBQVUsRUFBRSxDQUFDO0lBQ2IsZUFBZSxFQUFFLENBQUM7SUFDbEIsUUFBUSxFQUFFLENBQUM7SUFDWCxhQUFhLEVBQUUsQ0FBQztJQUNoQixhQUFhLEVBQUUsQ0FBQztJQUNoQixjQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xuaW1wb3J0IHsgTG9jYWxlLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vbG9jYWxlLmRlZmF1bHRzJztcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY29tcGFyZUFycmF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbXBhcmUtYXJyYXlzJztcblxuaW1wb3J0IHsgaW5pdFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7IGluaXRXZWVrWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWsteWVhcic7XG5pbXBvcnQgeyBpbml0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgaW5pdFRpbWV6b25lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xuaW1wb3J0IHsgaW5pdFRpbWVzdGFtcCB9IGZyb20gJy4uL3VuaXRzL3RpbWVzdGFtcCc7XG5pbXBvcnQgeyBpbml0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcbmltcG9ydCB7IGluaXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XG5pbXBvcnQgeyBpbml0T2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGluaXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xuaW1wb3J0IHsgaW5pdE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xuaW1wb3J0IHsgaW5pdE1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaW5pdEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcbmltcG9ydCB7IGluaXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XG5pbXBvcnQgeyBpbml0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgaW5pdERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xuXG5jb25zdCBsb2NhbGVzOiB7IFtrZXk6IHN0cmluZ106IExvY2FsZSB9ID0ge307XG5jb25zdCBsb2NhbGVGYW1pbGllczogeyBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBjb25maWc6IExvY2FsZURhdGF9W10gfSA9IHt9O1xubGV0IGdsb2JhbExvY2FsZTogTG9jYWxlO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsXG4vLyBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG5mdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXM6IHN0cmluZ1tdKTogTG9jYWxlIHtcbiAgbGV0IG5leHQ7XG4gIGxldCBsb2NhbGU7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgIGxldCBqID0gc3BsaXQubGVuZ3RoO1xuICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICB9XG4gICAgICBpZiAobmV4dCAmJiBuZXh0Lmxlbmd0aCA+PSBqICYmIGNvbXBhcmVBcnJheXMoc3BsaXQsIG5leHQsIHRydWUpID49IGogLSAxKSB7XG4gICAgICAgIC8vIHRoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgai0tO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWc6IExvY2FsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnOiBMb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHJlczogTG9jYWxlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudENvbmZpZyk7XG5cbiAgZm9yIChjb25zdCBjaGlsZFByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AoY2hpbGRDb25maWcsIGNoaWxkUHJvcCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcbiAgICAgIHJlc1tjaGlsZFByb3AgYXMgYW55XSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgcGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgY2hpbGRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1tjaGlsZFByb3BdICE9IG51bGwpIHtcbiAgICAgIHJlc1tjaGlsZFByb3AgYXMgYW55XSA9IGNoaWxkQ29uZmlnW2NoaWxkUHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSByZXNbY2hpbGRQcm9wIGFzIGFueV07XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgcGFyZW50UHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwYXJlbnRQcm9wKSAmJlxuICAgICAgaXNPYmplY3QocGFyZW50Q29uZmlnW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pXG4gICAgKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICByZXNbcGFyZW50UHJvcCBhcyBhbnldID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lOiBzdHJpbmcpOiBMb2NhbGUge1xuICAvLyBubyB3YXkhXG4gIC8qIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICB0cnkge1xuICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICB2YXIgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgIH0gY2F0Y2ggKGUpIHt9XG4gICB9Ki9cbiAgaWYgKCFsb2NhbGVzW25hbWVdKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc29sZS5lcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmcge1xuICBsZXQgZGF0YTogTG9jYWxlO1xuXG4gIGlmIChrZXkpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSkge1xuICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdsb2JhbExvY2FsZSAmJiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgIGdsb2JhbExvY2FsZSA9IGdldExvY2FsZSgnZW4nKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICB9XG4gICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHsgbmFtZSwgY29uZmlnIH0pO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcbiAgbGV0IF9jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKF9jb25maWcgIT0gbnVsbCkge1xuICAgIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgIC8vIE1FUkdFXG4gICAgY29uc3QgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgIH1cbiAgICBfY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgX2NvbmZpZyk7XG4gICAgY29uc3QgbG9jYWxlID0gbmV3IExvY2FsZShfY29uZmlnKTtcbiAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10pOiBMb2NhbGUge1xuICBzZXREZWZhdWx0TG9jYWxlKCk7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICB9XG4gIC8vIGxldCBsb2NhbGU7XG4gIGNvbnN0IF9rZXkgPSBpc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcblxuICByZXR1cm4gY2hvb3NlTG9jYWxlKF9rZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoKTogdm9pZCB7XG4gIGlmIChsb2NhbGVzW2BlbmBdKSB7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IGIgPSBudW0gJSAxMDtcbiAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgPyAndGgnXG4gICAgICAgICAgOiBiID09PSAxID8gJ3N0JyA6IGIgPT09IDIgPyAnbmQnIDogYiA9PT0gMyA/ICdyZCcgOiAndGgnO1xuXG4gICAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICAgIH1cbiAgfSk7XG5cbiAgaW5pdFdlZWsoKTtcbiAgaW5pdFdlZWtZZWFyKCk7XG4gIGluaXRZZWFyKCk7XG4gIGluaXRUaW1lem9uZSgpO1xuICBpbml0VGltZXN0YW1wKCk7XG4gIGluaXRTZWNvbmQoKTtcbiAgaW5pdFF1YXJ0ZXIoKTtcbiAgaW5pdE9mZnNldCgpO1xuICBpbml0TW9udGgoKTtcbiAgaW5pdE1pbnV0ZSgpO1xuICBpbml0TWlsbGlzZWNvbmQoKTtcbiAgaW5pdEhvdXIoKTtcbiAgaW5pdERheU9mWWVhcigpO1xuICBpbml0RGF5T2ZXZWVrKCk7XG4gIGluaXREYXlPZk1vbnRoKCk7XG59XG4iXX0=