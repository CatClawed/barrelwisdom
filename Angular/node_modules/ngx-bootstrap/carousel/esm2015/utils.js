/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
export function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
export function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nhcm91c2VsLyIsInNvdXJjZXMiOlsidXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsYUFBYSxDQUFJLEtBQVUsRUFBRSxTQUF5RDs7UUFDaEcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNO0lBRXBCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDVixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBSSxLQUFVLEVBQUUsSUFBWTs7VUFDakQsR0FBRyxHQUFHLEVBQUU7O1VBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDOztRQUN0QyxDQUFDLEdBQUcsQ0FBQztJQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs7Y0FDTixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FDeEIsQ0FBQyxFQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRDtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUFFLENBQUM7S0FDTDtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgYXJyYXkgd2hlcmUgcHJlZGljYXRlIGlzIHRydWUsIGFuZCAtMVxuICogb3RoZXJ3aXNlLlxuICogQHBhcmFtIGFycmF5IFRoZSBzb3VyY2UgYXJyYXkgdG8gc2VhcmNoIGluXG4gKiBAcGFyYW0gcHJlZGljYXRlIGZpbmQgY2FsbHMgcHJlZGljYXRlIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXksIGluIGRlc2NlbmRpbmdcbiAqIG9yZGVyLCB1bnRpbCBpdCBmaW5kcyBvbmUgd2hlcmUgcHJlZGljYXRlIHJldHVybnMgdHJ1ZS4gSWYgc3VjaCBhbiBlbGVtZW50IGlzIGZvdW5kLFxuICogZmluZExhc3RJbmRleCBpbW1lZGlhdGVseSByZXR1cm5zIHRoYXQgZWxlbWVudCBpbmRleC4gT3RoZXJ3aXNlLCBmaW5kTGFzdEluZGV4IHJldHVybnMgLTEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdEluZGV4PFQ+KGFycmF5OiBUW10sIHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBvYmo6IFRbXSkgPT4gYm9vbGVhbik6IG51bWJlciB7XG4gIGxldCBsID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChsLS0pIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2xdLCBsLCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNodW5rQnlOdW1iZXI8VD4oYXJyYXk6IFRbXSwgc2l6ZTogbnVtYmVyKTogVFtdW10ge1xuICBjb25zdCBvdXQgPSBbXTtcbiAgY29uc3QgbiA9IE1hdGguY2VpbCgoYXJyYXkubGVuZ3RoKSAvIHNpemUpO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBuKSB7XG4gICAgY29uc3QgY2h1bmsgPSBhcnJheS5zcGxpY2UoXG4gICAgICAwLFxuICAgICAgKGkgPT09IG4gLSAxKSAmJiBzaXplIDwgYXJyYXkubGVuZ3RoID8gYXJyYXkubGVuZ3RoIDogc2l6ZVxuICAgICk7XG5cbiAgICBvdXQucHVzaChjaHVuayk7XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbiJdfQ==