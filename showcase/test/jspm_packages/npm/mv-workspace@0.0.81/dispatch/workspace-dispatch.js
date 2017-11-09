/* */ 
define(["require", "exports", "mvcomponents/core"], function (require, exports, core_1) {
    "use strict";
    var WorkspaceDispatch = (function () {
        function WorkspaceDispatch() {
            this.onChangeArea = new core_1.EventEmitter();
            this.onRegisterArea = new core_1.EventEmitter();
            this.onRaiseException = new core_1.EventEmitter();
            this.onSignOut = new core_1.EventEmitter();
            this.onResize = new core_1.EventEmitter();
            this.onDispatch = new core_1.EventEmitter();
        }
        return WorkspaceDispatch;
    }());
    exports.WorkspaceDispatch = WorkspaceDispatch;
    exports.workspaceDispatch = new WorkspaceDispatch();
});
