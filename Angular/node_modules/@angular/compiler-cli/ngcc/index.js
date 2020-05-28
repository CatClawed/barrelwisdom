(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/main", "@angular/compiler-cli/ngcc/src/logging/console_logger", "@angular/compiler-cli/ngcc/src/logging/logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var main_1 = require("@angular/compiler-cli/ngcc/src/main");
    var console_logger_1 = require("@angular/compiler-cli/ngcc/src/logging/console_logger");
    exports.ConsoleLogger = console_logger_1.ConsoleLogger;
    var logger_1 = require("@angular/compiler-cli/ngcc/src/logging/logger");
    exports.LogLevel = logger_1.LogLevel;
    function process(options) {
        file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
        return main_1.mainNgcc(options);
    }
    exports.process = process;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUF5RTtJQUV6RSw0REFBb0M7SUFHcEMsd0ZBQTJEO0lBQW5ELHlDQUFBLGFBQWEsQ0FBQTtJQUNyQix3RUFBc0Q7SUFBdEMsNEJBQUEsUUFBUSxDQUFBO0lBTXhCLFNBQWdCLE9BQU8sQ0FBQyxPQUFvQjtRQUMxQywyQkFBYSxDQUFDLElBQUksOEJBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sZUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFIRCwwQkFHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Tm9kZUpTRmlsZVN5c3RlbSwgc2V0RmlsZVN5c3RlbX0gZnJvbSAnLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcblxuaW1wb3J0IHttYWluTmdjY30gZnJvbSAnLi9zcmMvbWFpbic7XG5pbXBvcnQge0FzeW5jTmdjY09wdGlvbnMsIE5nY2NPcHRpb25zLCBTeW5jTmdjY09wdGlvbnN9IGZyb20gJy4vc3JjL25nY2Nfb3B0aW9ucyc7XG5cbmV4cG9ydCB7Q29uc29sZUxvZ2dlcn0gZnJvbSAnLi9zcmMvbG9nZ2luZy9jb25zb2xlX2xvZ2dlcic7XG5leHBvcnQge0xvZ2dlciwgTG9nTGV2ZWx9IGZyb20gJy4vc3JjL2xvZ2dpbmcvbG9nZ2VyJztcbmV4cG9ydCB7QXN5bmNOZ2NjT3B0aW9ucywgTmdjY09wdGlvbnMsIFN5bmNOZ2NjT3B0aW9uc30gZnJvbSAnLi9zcmMvbmdjY19vcHRpb25zJztcbmV4cG9ydCB7UGF0aE1hcHBpbmdzfSBmcm9tICcuL3NyYy9wYXRoX21hcHBpbmdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Mob3B0aW9uczogQXN5bmNOZ2NjT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5leHBvcnQgZnVuY3Rpb24gcHJvY2VzcyhvcHRpb25zOiBTeW5jTmdjY09wdGlvbnMpOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Mob3B0aW9uczogTmdjY09wdGlvbnMpOiB2b2lkfFByb21pc2U8dm9pZD4ge1xuICBzZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuICByZXR1cm4gbWFpbk5nY2Mob3B0aW9ucyk7XG59XG4iXX0=