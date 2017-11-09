/* */ 
define(["require", "exports", "mvcomponents/core"], function (require, exports, core_1) {
    "use strict";
    var ContainerArea = (function () {
        function ContainerArea() {
            this.onChangeVisibility = new core_1.EventEmitter();
        }
        ContainerArea.prototype.setHidden = function (on) {
            this.setVisible(!on);
            this.refresh();
            this.onChangeVisibility.emit(on);
        };
        ContainerArea.prototype.refresh = function () {
            this.refreshRender();
        };
        ContainerArea.prototype.attached = function () { };
        return ContainerArea;
    }());
    exports.ContainerArea = ContainerArea;
});
