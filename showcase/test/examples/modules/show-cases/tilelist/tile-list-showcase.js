define(["require", "exports", "tslib", "mvcomponents/tilelist", "mvcomponents/container", "mvcomponents/button", "mvcomponents/input", "mvcomponents/component"], function (require, exports, tslib_1, tilelist_1, container_1, button_1, input_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TileListShowcase = (function (_super) {
        tslib_1.__extends(TileListShowcase, _super);
        function TileListShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            var myForm = new container_1.Form();
            myForm.setSize(12);
            _this.append(myForm);
            var nsIndex = new input_1.NumericStepper();
            myForm.append(nsIndex);
            var btnLoad = new button_1.Button("refresh").setIcon("glyphicon glyphicon-circle-arrow-down");
            myForm.append(new container_1.ButtonGroup().setSize(3).append(btnLoad.setVerticalAlign(component_1.EVerticalAlign.BOTTOM)));
            var listView = new tilelist_1.TileList({ urlTemplate: "test/examples/modules/show-cases/tilelist/template/tile-list-showcase.template" });
            myForm.append(listView);
            btnLoad.addEvent(component_1.EMouseEvent.CLICK, function () {
                listView.setData([
                    { id: 1, name: "Simple user case", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-user" },
                    { id: 2, name: "Estudant user variant", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-education" },
                    { id: 3, name: "Super user root admin", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-king" },
                    { id: 4, name: "Executive user profile", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-briefcase" },
                    { id: 1, name: "Simple user case", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-user" },
                    { id: 2, name: "Estudant user variant", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-education" },
                    { id: 3, name: "Super user root admin", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-king" },
                    { id: 4, name: "Executive user profile", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-briefcase" },
                    { id: 1, name: "Simple user case", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-user" },
                    { id: 2, name: "Estudant user variant", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-education" },
                    { id: 3, name: "Super user root admin", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-king" },
                    { id: 4, name: "Executive user profile", desc: "sub description of item TEST1", icon: "glyphicon glyphicon-briefcase" }
                ]);
                nsIndex.setMax(listView.getData().length - 1);
                nsIndex.incrementHandler.setDisabled(false);
                nsIndex.decrementHandler.setDisabled(false);
                listView.clearSelecteds();
            });
            listView.onSelectItem.subscribe(function (item) {
                console.log(item);
                nsIndex.setValue(listView.index);
            });
            nsIndex
                .setLabel("Change index:")
                .setSize(2)
                .setStep(1)
                .setMax(0)
                .setMin(0)
                .setValue(0)
                .addEvent(component_1.EInputEvent.CHANGE, function () {
                if (listView.index != nsIndex.getValue()) {
                    listView.index = nsIndex.getValue();
                }
                ;
            });
            listView
                .setSize(12)
                .setHeight(220);
            listView.onScrolledToBottom.once(function (on) {
                listView
                    .addParams({ "param1": "title test" })
                    .refresh();
            });
            return _this;
        }
        return TileListShowcase;
    }(container_1.Box));
    exports.TileListShowcase = TileListShowcase;
});
