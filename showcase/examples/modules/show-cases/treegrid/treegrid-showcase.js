define(["require", "exports", "tslib", "mvcomponents/treegrid", "mvcomponents/container", "mvcomponents/button", "mvcomponents/input", "./template/treegrid-showcase-status", "mvcomponents/http", "moment", "mvcomponents/component"], function (require, exports, tslib_1, treegrid_1, container_1, button_1, input_1, statusRender, http_1, moment, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    var TreegridShowcase = (function (_super) {
        tslib_1.__extends(TreegridShowcase, _super);
        function TreegridShowcase() {
            var _this = _super.call(this) || this;
            _this.build();
            return _this;
        }
        TreegridShowcase.prototype.build = function () {
            var treegrid = new treegrid_1.TreeGrid({
                collapsedIcon: "glyphicon glyphicon-resize-small",
                expandedIcon: "glyphicon glyphicon-resize-full"
            });
            var nodesarray;
            treegrid
                .setParentColumn("cd_parent")
                .setPrimaryColumn("cd")
                .setColumns([
                { name: "cd", title: "cod.", render: function (data) { return "my id-" + data.cd; } },
                { name: "node", title: "node" },
                { name: "information", title: "information", size: [
                        { size: 2 }
                    ], render: function (data) { return data.information + " : " + data.cd; } },
                { name: "status", title: "status", template: statusRender.statusRender, size: [
                        { size: 1 }
                    ] },
                {
                    name: "cd_parent",
                    title: "parent",
                    renderElement: function ($row) { return new input_1.NumericStepper().setSize(12).setValue($row.cd_parent ? $row.cd_parent : 0); },
                    size: [
                        { size: 1, display: [component_1.EViewSize.EXTRA_SMALL, component_1.EViewSize.LARGE] }
                    ]
                },
                {
                    name: "checked_field",
                    checkableHeader: true,
                    checkableValue: "y",
                    checkableGroup: false,
                    title: "active",
                    checkable: true
                }
            ]);
            treegrid.onSelect.subscribe(function (row3) {
                console.log('on select:', row3[0]);
                console.log('group', JSON.stringify(treegrid.getSelectedGroups()));
            });
            treegrid.onCollapse.subscribe(function (row3) {
                console.log('item collapesed!', row3);
            });
            treegrid.onExpand.subscribe(function (row3) {
                console.log('item expanded!', row3);
            });
            this.append(treegrid);
            var btnSelectAll = new button_1.Button("check some");
            btnSelectAll.addEvent(component_1.EMouseEvent.CLICK, function () {
                treegrid.setCheckeds(treegrid.getData().map(function (item, indx) { return indx; }).filter(function (titem) { return !(titem & 1); }));
            });
            var btnGetAllChecked = new button_1.Button("get checkeds");
            btnGetAllChecked.addEvent(component_1.EMouseEvent.CLICK, function () {
                console.log(treegrid.getCheckeds());
            });
            this.append(new container_1.ButtonGroup()
                .setDefaultInnerVerticalAlign(component_1.EVerticalAlign.TOP)
                .append(btnSelectAll)
                .append(btnGetAllChecked));
            var treegrid2 = new treegrid_1.TreeGrid();
            treegrid2.setHeight(220);
            treegrid2
                .setColumns([
                { name: "usuario.login", title: "login", group: true },
                { name: "cadastro", title: "data cadastro", render: function (historico) {
                        var cadastro = historico.cadastro && historico.id ? moment(historico.cadastro).format("DD/MM/YYYY HH:mm:ss") : "";
                        return cadastro;
                    } },
                { name: "id", title: "cod. cadastro" },
                { name: "alteracaoSequencial", title: "alt.Seq" },
                { name: "valorCampoAnterior", title: "vl cmp Anterior" },
                { name: "alteracaoSequencialString", title: "alt.Seq.Str" }
            ]);
            treegrid2.onSelect.subscribe(function (item) {
            });
            treegrid2.onDoubleClick.subscribe(function (evt) {
                if (treegrid2.getSelectedItems().length) {
                    console.log('itens:', JSON.stringify(treegrid2.getSelectedItems()));
                }
                else if (treegrid2.getSelectedGroups().length) {
                    console.log('grups', JSON.stringify(treegrid2.getSelectedGroups()));
                }
            });
            var btnLoad = new button_1.Button("load");
            btnLoad.addEvent(component_1.EMouseEvent.CLICK, function () {
                http_1.$http
                    .get("examples/modules/mocks/historico.json")
                    .then(function (res) {
                    treegrid2.setData(res);
                });
                treegrid.setData([
                    { "cd": 1, "node": "novo no dinamico", "status": 0, "information": "one more time!", "checked_field": "y" },
                    { "cd": 2, "node": "novo no dinamico2", "status": 2, "information": "one more time2!", "cd_parent": 1, "checked_field": "y" },
                    { "cd": 3, "node": "novo no dinamico3", "status": 1, "information": "one more time3!", "cd_parent": 2, "checked_field": "n" },
                    { "cd": 4, "node": "novo no dinamico4", "status": 0, "information": "one more time4!", "cd_parent": 2, "checked_field": "n" },
                    { "cd": 5, "node": "novo no dinamico5", "status": 2, "information": "one more time5!", "cd_parent": 1, "checked_field": "y" }
                ]);
            });
            this.append(treegrid2).append(btnLoad);
        };
        return TreegridShowcase;
    }(container_1.Box));
    exports.TreegridShowcase = TreegridShowcase;
});
