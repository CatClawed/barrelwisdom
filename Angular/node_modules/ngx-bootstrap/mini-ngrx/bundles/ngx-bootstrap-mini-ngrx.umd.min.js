!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("rxjs"),require("rxjs/operators")):"function"==typeof define&&define.amd?define("ngx-bootstrap/mini-ngrx",["exports","rxjs","rxjs/operators"],e):e(((t=t||self)["ngx-bootstrap"]=t["ngx-bootstrap"]||{},t["ngx-bootstrap"]["mini-ngrx"]={}),t.rxjs,t.rxjs.operators)}(this,(function(t,e,r){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function n(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(t){function o(o,n,i){var p=t.call(this,o)||this;return n.pipe(r.observeOn(e.queueScheduler)).pipe(r.scan((function(t,e){return e?i(t,e):t}),o)).subscribe((function(t){return p.next(t)})),p}return n(o,t),o}(e.BehaviorSubject),p=function(t){function e(e,r,o){var n=t.call(this)||this;return n._dispatcher=e,n._reducer=r,n.source=o,n}return n(e,t),e.prototype.select=function(t){return this.source.pipe(r.map(t)).pipe(r.distinctUntilChanged())},e.prototype.lift=function(t){var r=new e(this._dispatcher,this._reducer,this);return r.operator=t,r},e.prototype.dispatch=function(t){this._dispatcher.next(t)},e.prototype.next=function(t){this._dispatcher.next(t)},e.prototype.error=function(t){this._dispatcher.error(t)},e.prototype.complete=function(){},e}(e.Observable);t.MiniState=i,t.MiniStore=p,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=ngx-bootstrap-mini-ngrx.umd.min.js.map