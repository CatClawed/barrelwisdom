/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/* tslint:disable-next-line: no-any */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
export function OnChange(defaultValue) {
    /** @type {?} */
    var sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */
    function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /* tslint:disable-next-line: no-any */
            /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /* tslint:disable-next-line: no-any */
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJkZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsUUFBUSxDQUFDLFlBQWtCOztRQUNuQyxLQUFLLEdBQUcsUUFBUTtJQUV0QixzQ0FBc0M7SUFDdEM7Ozs7O0lBQU8sU0FBUyxlQUFlLENBQUMsTUFBVyxFQUFFLFdBQW1COztZQUN4RCxJQUFJLEdBQUcsUUFBTSxXQUFXLFVBQU87UUFDckMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3pDLHNDQUFzQztZQUN0QyxHQUFHOzs7O1lBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUNELHNDQUFzQztZQUN0QyxHQUFHOzs7OztZQUFILFVBQUksS0FBVTs7b0JBQ04sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxFQUFFO29CQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzICovXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlKGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gIGNvbnN0IHN1Zml4ID0gJ0NoYW5nZSc7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIE9uQ2hhbmdlSGFuZGxlcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICBnZXQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNbX2tleV07XG4gICAgICB9LFxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXNbX2tleV07XG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gdmFsdWUgJiYgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XSkge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0uZW1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbiJdfQ==