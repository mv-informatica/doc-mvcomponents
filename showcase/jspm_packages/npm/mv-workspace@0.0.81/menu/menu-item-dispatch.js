/* */ 
define(["require", "exports", "mvcomponents/core"], function (require, exports, core_1) {
    "use strict";
    var MenuItemDispatch = (function () {
        function MenuItemDispatch() {
            this.onChangeMenuItem = new core_1.EventEmitter();
            this.onCollapseAll = new core_1.EventEmitter();
        }
        return MenuItemDispatch;
    }());
    exports.MenuItemDispatch = MenuItemDispatch;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new MenuItemDispatch();
});
