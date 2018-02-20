define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/treeview"], function (require, exports, tslib_1, container_1, treeview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasicCase = (function (_super) {
        tslib_1.__extends(BasicCase, _super);
        function BasicCase() {
            var _this = _super.call(this) || this;
            _this.buildTreeview();
            return _this;
        }
        BasicCase.prototype.buildTreeview = function () {
            var box1 = new container_1.Box();
            box1
                .setSize(3)
                .setCssProperties({ "background-color": "#EEE", height: "200px" });
            this.append(box1);
            var treeview = new treeview_1.TreeView();
            box1.append(treeview);
            treeview.setNodes([
                {
                    id: 1,
                    text: "folder 1"
                },
                {
                    id: 2,
                    text: "folder 2",
                    children: [
                        { id: 21, text: "folder a" },
                        { id: 22, text: "folder b" },
                        { id: 23, text: "folder c" }
                    ]
                },
                {
                    id: 3,
                    text: "folder 3"
                }
            ]);
        };
        return BasicCase;
    }(container_1.Box));
    exports.BasicCase = BasicCase;
});
