/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
//! author : Levan Tskipuri : https://github.com/tskipa
/** @type {?} */
export const kaLocale = {
    abbr: 'ka',
    months: {
        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_'),
        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_')
    },
    monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays: {
        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
        isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY h:mm A',
        LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
        sameDay: '[დღეს] LT[-ზე]',
        nextDay: '[ხვალ] LT[-ზე]',
        lastDay: '[გუშინ] LT[-ზე]',
        nextWeek: '[შემდეგ] dddd LT[-ზე]',
        lastWeek: '[წინა] dddd LT-ზე',
        sameElse: 'L'
    },
    relativeTime: {
        /**
         * @param {?} s
         * @return {?}
         */
        future(s) {
            /** @type {?} */
            var st = s.toString();
            return (/(წამი|წუთი|საათი|წელი)/).test(st) ?
                st.replace(/ი$/, 'ში') :
                st + 'ში';
        },
        /**
         * @param {?} s
         * @return {?}
         */
        past(s) {
            /** @type {?} */
            var st = s.toString();
            if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(st)) {
                return st.replace(/(ი|ე)$/, 'ის წინ');
            }
            if ((/წელი/).test(st)) {
                return st.replace(/წელი$/, 'წლის წინ');
            }
        },
        s: 'რამდენიმე წამი',
        ss: '%d წამი',
        m: 'წუთი',
        mm: '%d წუთი',
        h: 'საათი',
        hh: '%d საათი',
        d: 'დღე',
        dd: '%d დღე',
        M: 'თვე',
        MM: '%d თვე',
        y: 'წელი',
        yy: '%d წელი'
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    /**
     * @param {?} _num
     * @param {?} _period
     * @return {?}
     */
    ordinal(_num, _period) {
        /** @type {?} */
        const num = Number(_num);
        if (num === 0) {
            return num.toString();
        }
        if (num === 1) {
            return num + '-ლი';
        }
        if ((num < 20) || (num <= 100 && (num % 20 === 0)) || (num % 100 === 0)) {
            return 'მე-' + num;
        }
        return num + '-ე';
    },
    week: {
        dow: 1,
        doy: 4
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2thLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLE9BQU8sUUFBUSxHQUFnQjtJQUNuQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRztRQUNQLE1BQU0sRUFBRSxxR0FBcUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hILFVBQVUsRUFBRSxvR0FBb0csQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQzVIO0lBQ0QsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsUUFBUSxFQUFHO1FBQ1QsVUFBVSxFQUFFLCtEQUErRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEYsTUFBTSxFQUFFLGdFQUFnRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbkYsUUFBUSxFQUFFLGVBQWU7S0FDMUI7SUFDRCxhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsUUFBUTtRQUNiLEdBQUcsRUFBRyxXQUFXO1FBQ2pCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxvQkFBb0I7UUFDMUIsSUFBSSxFQUFHLDBCQUEwQjtLQUNsQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFHLGdCQUFnQjtRQUMxQixPQUFPLEVBQUcsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRyx1QkFBdUI7UUFDbEMsUUFBUSxFQUFHLG1CQUFtQjtRQUM5QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHOzs7OztRQUNiLE1BQU0sQ0FBQyxDQUFTOztnQkFDVixFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNyQixPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNaLENBQUM7Ozs7O1FBQ0QsSUFBSSxDQUFDLENBQVM7O2dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDO1FBQ0QsQ0FBQyxFQUFHLGdCQUFnQjtRQUNwQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxNQUFNO1FBQ1YsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsT0FBTztRQUNYLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsUUFBUTtRQUNiLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLFFBQVE7UUFDYixDQUFDLEVBQUcsTUFBTTtRQUNWLEVBQUUsRUFBRyxTQUFTO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRSw2QkFBNkI7Ozs7OztJQUNyRCxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQWU7O2NBQzdCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNiLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3ZFLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNwQjtRQUNELE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlb3JnaWFuIFtrYV1cbi8vISBhdXRob3IgOiBJcmFrbGkgSmFuaWFzaHZpbGkgOiBodHRwczovL2dpdGh1Yi5jb20vaXJha2xpLWphbmlhc2h2aWxpXG4vLyEgYXV0aG9yIDogTGV2YW4gVHNraXB1cmkgOiBodHRwczovL2dpdGh1Yi5jb20vdHNraXBhXG5cbmV4cG9ydCBjb25zdCBrYUxvY2FsZTogTG9jYWxlRGF0YSA9ICB7XG4gIGFiYnI6ICdrYScsXG4gIG1vbnRocyA6IHtcbiAgICBmb3JtYXQ6ICfhg5jhg5Dhg5zhg5Xhg5Dhg6Dhg6Ff4YOX4YOU4YOR4YOU4YOg4YOV4YOQ4YOa4YOhX+GDm+GDkOGDoOGDouGDoV/hg5Dhg57hg6Dhg5jhg5rhg5jhg6Ff4YOb4YOQ4YOY4YOh4YOhX+GDmOGDleGDnOGDmOGDoeGDoV/hg5jhg5Xhg5rhg5jhg6Hhg6Ff4YOQ4YOS4YOV4YOY4YOh4YOi4YOhX+GDoeGDlOGDpeGDouGDlOGDm+GDkeGDlOGDoOGDoV/hg53hg6Xhg6Lhg53hg5vhg5Hhg5Thg6Dhg6Ff4YOc4YOd4YOU4YOb4YOR4YOU4YOg4YOhX+GDk+GDlOGDmeGDlOGDm+GDkeGDlOGDoOGDoScuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAn4YOY4YOQ4YOc4YOV4YOQ4YOg4YOYX+GDl+GDlOGDkeGDlOGDoOGDleGDkOGDmuGDmF/hg5vhg5Dhg6Dhg6Lhg5hf4YOQ4YOe4YOg4YOY4YOa4YOYX+GDm+GDkOGDmOGDoeGDmF/hg5jhg5Xhg5zhg5jhg6Hhg5hf4YOY4YOV4YOa4YOY4YOh4YOYX+GDkOGDkuGDleGDmOGDoeGDouGDnV/hg6Hhg5Thg6Xhg6Lhg5Thg5vhg5Hhg5Thg6Dhg5hf4YOd4YOl4YOi4YOd4YOb4YOR4YOU4YOg4YOYX+GDnOGDneGDlOGDm+GDkeGDlOGDoOGDmF/hg5Phg5Thg5nhg5Thg5vhg5Hhg5Thg6Dhg5gnLnNwbGl0KCdfJylcbiAgfSxcbiAgbW9udGhzU2hvcnQgOiAn4YOY4YOQ4YOcX+GDl+GDlOGDkV/hg5vhg5Dhg6Bf4YOQ4YOe4YOgX+GDm+GDkOGDmF/hg5jhg5Xhg5xf4YOY4YOV4YOaX+GDkOGDkuGDlV/hg6Hhg5Thg6Vf4YOd4YOl4YOiX+GDnOGDneGDlF/hg5Phg5Thg5knLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDoge1xuICAgIHN0YW5kYWxvbmU6ICfhg5nhg5Xhg5jhg6Dhg5Bf4YOd4YOg4YOo4YOQ4YOR4YOQ4YOX4YOYX+GDoeGDkOGDm+GDqOGDkOGDkeGDkOGDl+GDmF/hg53hg5fhg67hg6jhg5Dhg5Hhg5Dhg5fhg5hf4YOu4YOj4YOX4YOo4YOQ4YOR4YOQ4YOX4YOYX+GDnuGDkOGDoOGDkOGDoeGDmeGDlOGDleGDmF/hg6jhg5Dhg5Hhg5Dhg5fhg5gnLnNwbGl0KCdfJyksXG4gICAgZm9ybWF0OiAn4YOZ4YOV4YOY4YOg4YOQ4YOhX+GDneGDoOGDqOGDkOGDkeGDkOGDl+GDoV/hg6Hhg5Dhg5vhg6jhg5Dhg5Hhg5Dhg5fhg6Ff4YOd4YOX4YOu4YOo4YOQ4YOR4YOQ4YOX4YOhX+GDruGDo+GDl+GDqOGDkOGDkeGDkOGDl+GDoV/hg57hg5Dhg6Dhg5Dhg6Hhg5nhg5Thg5Xhg6Ff4YOo4YOQ4YOR4YOQ4YOX4YOhJy5zcGxpdCgnXycpLFxuICAgIGlzRm9ybWF0OiAvKOGDrOGDmOGDnOGDkHzhg6jhg5Thg5vhg5Phg5Thg5IpL1xuICB9LFxuICB3ZWVrZGF5c1Nob3J0IDogJ+GDmeGDleGDmF/hg53hg6Dhg6hf4YOh4YOQ4YObX+GDneGDl+GDrl/hg67hg6Phg5df4YOe4YOQ4YOgX+GDqOGDkOGDkScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAn4YOZ4YOVX+GDneGDoF/hg6Hhg5Bf4YOd4YOXX+GDruGDo1/hg57hg5Bf4YOo4YOQJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdoOm1tIEEnLFxuICAgIExUUyA6ICdoOm1tOnNzIEEnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBoOm1tIEEnLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgaDptbSBBJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1vhg5Phg6bhg5Thg6FdIExUWy3hg5bhg5RdJyxcbiAgICBuZXh0RGF5IDogJ1vhg67hg5Xhg5Dhg5pdIExUWy3hg5bhg5RdJyxcbiAgICBsYXN0RGF5IDogJ1vhg5Lhg6Phg6jhg5jhg5xdIExUWy3hg5bhg5RdJyxcbiAgICBuZXh0V2VlayA6ICdb4YOo4YOU4YOb4YOT4YOU4YOSXSBkZGRkIExUWy3hg5bhg5RdJyxcbiAgICBsYXN0V2VlayA6ICdb4YOs4YOY4YOc4YOQXSBkZGRkIExULeGDluGDlCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZShzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgdmFyIHN0ID0gcy50b1N0cmluZygpO1xuICAgICAgcmV0dXJuICgvKOGDrOGDkOGDm+GDmHzhg6zhg6Phg5fhg5h84YOh4YOQ4YOQ4YOX4YOYfOGDrOGDlOGDmuGDmCkvKS50ZXN0KHN0KSA/XG4gICAgICBzdC5yZXBsYWNlKC/hg5gkLywgJ+GDqOGDmCcpIDpcbiAgICAgIHN0ICsgJ+GDqOGDmCc7XG4gICAgfSxcbiAgICBwYXN0KHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICB2YXIgc3QgPSBzLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoKC8o4YOs4YOQ4YOb4YOYfOGDrOGDo+GDl+GDmHzhg6Hhg5Dhg5Dhg5fhg5h84YOT4YOm4YOUfOGDl+GDleGDlCkvKS50ZXN0KHN0KSkge1xuICAgICAgICByZXR1cm4gc3QucmVwbGFjZSgvKOGDmHzhg5QpJC8sICfhg5jhg6Eg4YOs4YOY4YOcJyk7XG4gICAgICB9XG4gICAgICBpZiAoKC/hg6zhg5Thg5rhg5gvKS50ZXN0KHN0KSkge1xuICAgICAgICByZXR1cm4gc3QucmVwbGFjZSgv4YOs4YOU4YOa4YOYJC8sICfhg6zhg5rhg5jhg6Eg4YOs4YOY4YOcJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzIDogJ+GDoOGDkOGDm+GDk+GDlOGDnOGDmOGDm+GDlCDhg6zhg5Dhg5vhg5gnLFxuICAgIHNzIDogJyVkIOGDrOGDkOGDm+GDmCcsXG4gICAgbSA6ICfhg6zhg6Phg5fhg5gnLFxuICAgIG1tIDogJyVkIOGDrOGDo+GDl+GDmCcsXG4gICAgaCA6ICfhg6Hhg5Dhg5Dhg5fhg5gnLFxuICAgIGhoIDogJyVkIOGDoeGDkOGDkOGDl+GDmCcsXG4gICAgZCA6ICfhg5Phg6bhg5QnLFxuICAgIGRkIDogJyVkIOGDk+GDpuGDlCcsXG4gICAgTSA6ICfhg5fhg5Xhg5QnLFxuICAgIE1NIDogJyVkIOGDl+GDleGDlCcsXG4gICAgeSA6ICfhg6zhg5Thg5rhg5gnLFxuICAgIHl5IDogJyVkIOGDrOGDlOGDmuGDmCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogLzB8MS3hg5rhg5h84YOb4YOULVxcZHsxLDJ9fFxcZHsxLDJ9LeGDlC8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBfcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBpZiAobnVtID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgIHJldHVybiBudW0gKyAnLeGDmuGDmCc7XG4gICAgfVxuICAgIGlmICgobnVtIDwgMjApIHx8IChudW0gPD0gMTAwICYmIChudW0gJSAyMCA9PT0gMCkpIHx8IChudW0gJSAxMDAgPT09IDApKSB7XG4gICAgICByZXR1cm4gJ+GDm+GDlC0nICsgbnVtO1xuICAgIH1cbiAgICByZXR1cm4gbnVtICsgJy3hg5QnO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsXG4gICAgZG95IDogNFxuICB9XG59O1xuIl19