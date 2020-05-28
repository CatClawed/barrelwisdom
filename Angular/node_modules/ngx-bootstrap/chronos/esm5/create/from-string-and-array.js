/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createInvalid, isValid } from './valid';
import { getParsingFlags } from './parsing-flags';
import { configFromStringAndFormat } from './from-string-and-format';
// date from string and array of format strings
/**
 * @param {?} config
 * @return {?}
 */
export function configFromStringAndArray(config) {
    /** @type {?} */
    var tempConfig;
    /** @type {?} */
    var bestMoment;
    /** @type {?} */
    var scoreToBeat;
    /** @type {?} */
    var currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    /** @type {?} */
    var i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        // or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFHckUsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQXlCOztRQUM1RCxVQUFVOztRQUNWLFVBQVU7O1FBQ1YsV0FBVzs7UUFDWCxZQUFZO0lBRWhCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUU3QyxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5Qjs7UUFFRyxDQUFDO0lBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQzFCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNyQztRQUNELFVBQVUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3Qix5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hCLFNBQVM7U0FDVjtRQUVELDBFQUEwRTtRQUMxRSxZQUFZLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUUxRCxZQUFZO1FBQ1osWUFBWSxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVyRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUVqRCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsRUFBRTtZQUNyRCxXQUFXLEdBQUcsWUFBWSxDQUFDO1lBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDekI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCB0ZW1wQ29uZmlnO1xuICBsZXQgYmVzdE1vbWVudDtcbiAgbGV0IHNjb3JlVG9CZWF0O1xuICBsZXQgY3VycmVudFNjb3JlO1xuXG4gIGlmICghY29uZmlnLl9mIHx8IGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG4gIH1cblxuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgdGVtcENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgIH1cbiAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgLy8gb3IgdG9rZW5zXG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XG59XG4iXX0=