define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/treeview"], function (require, exports, tslib_1, container_1, treeview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomCase = (function (_super) {
        tslib_1.__extends(CustomCase, _super);
        function CustomCase() {
            var _this = _super.call(this) || this;
            _this
                .buildTreeview()
                .fetchData();
            return _this;
        }
        CustomCase.prototype.buildTreeview = function () {
            var _this = this;
            var box1 = new container_1.Box();
            box1
                .setSize(3)
                .setCssProperties({ "background-color": "#EEE", height: "800px" });
            this.append(box1);
            this.treeview = new treeview_1.TreeView();
            box1.append(this.treeview);
            this.treeview.onSelect.subscribe(function (itens) {
                console.log(itens[0]);
                if (itens[0]["data"] && itens[0]["data"]["isLastChild"]) {
                    var autorized = itens[0]["data"]["autorized"] ? false : true;
                    itens[0].icon = autorized ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
                    itens[0]["data"]["autorized"] = autorized;
                    _this.treeview.updateNode(itens[0]);
                }
                else if (itens[0].id == "20") {
                    debugger;
                    _this.treeview.removeNode(itens[0]);
                }
            });
            return this;
        };
        CustomCase.prototype.fetchData = function () {
            var _this = this;
            fetch("examples/menu/menu.json")
                .then(function (res) { return res.json(); })
                .then(function (res) {
                var uid_id_inc = new Date().getTime();
                return res
                    .filter(function (menu) { return menu.itens && menu.itens.length; })
                    .map(function (menu) { return ({
                    id: "uid_" + menu.id + "_" + uid_id_inc++,
                    text: menu.label,
                    icon: menu.icon,
                    state: { opened: true },
                    children: menu.itens ? menu.itens.map(function (item) {
                        return {
                            id: "uid_" + item.id + "_" + uid_id_inc++,
                            text: item.label,
                            icon: "glyphicon glyphicon-unchecked",
                            data: {
                                isLastChild: item.itens && item.itens.length ? false : true
                            },
                            state: { opened: false },
                            children: [
                                {
                                    id: "uid_" + item.id + "_sub_" + uid_id_inc++,
                                    icon: "glyphicon glyphicon-trash",
                                    text: "permissão para excluir"
                                },
                                {
                                    id: "uid_" + item.id + "_sub_" + uid_id_inc++,
                                    icon: "glyphicon glyphicon-plus",
                                    text: "permissão para adicionar"
                                },
                                {
                                    id: "uid_" + item.id + "_sub_" + uid_id_inc++,
                                    icon: "glyphicon glyphicon-pencil",
                                    text: "permissão para alterar"
                                }
                            ]
                        };
                    }) : []
                }); });
            })
                .then(function (res) { return _this.treeview.setNodes(res); });
        };
        return CustomCase;
    }(container_1.Box));
    exports.CustomCase = CustomCase;
});
