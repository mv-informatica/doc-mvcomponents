/* */ 
define(["require", "exports", "mvcomponents/core"], function (require, exports, core_1) {
    "use strict";
    var MenuDispatch = (function () {
        function MenuDispatch() {
            this.onChangeMenu = new core_1.EventEmitter();
        }
        return MenuDispatch;
    }());
    exports.MenuDispatch = MenuDispatch;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new MenuDispatch();
});
