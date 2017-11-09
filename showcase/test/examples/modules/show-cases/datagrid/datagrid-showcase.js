define(["require", "exports", "tslib", "mvcomponents/component", "mvcomponents/core", "mvcomponents/button", "mvcomponents/input", "mvcomponents/container", "mvcomponents/datagrid", "./template/teste-grid", "./header-name-grid"], function (require, exports, tslib_1, component_1, core_1, button_1, input_1, container_1, datagrid_1, template, header_name_grid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PessoaStore = (function () {
        function PessoaStore() {
            this.onChange = new core_1.EventEmitter();
            this.data = [];
        }
        PessoaStore.prototype.get = function () {
            return this.data;
        };
        PessoaStore.prototype.set = function (objs) {
            this.data = objs;
            this.onChange.emit(this.data);
        };
        PessoaStore.prototype.save = function (obj) {
        };
        PessoaStore.prototype.remove = function (obj) {
        };
        return PessoaStore;
    }());
    var DatagridShowcase = (function (_super) {
        tslib_1.__extends(DatagridShowcase, _super);
        function DatagridShowcase() {
            var _this = _super.call(this) || this;
            _this.setCssProperties({ height: "100%" });
            _this.build();
            return _this;
        }
        DatagridShowcase.prototype.build = function () {
            var paginatedDataGrid = new datagrid_1.PaginatedDataGrid("/dist/mv-starter/pessoa/pagination");
            paginatedDataGrid
                .getPagination()
                .setTotalOfVisibleLinks(3);
            paginatedDataGrid
                .getPagination()
                .setPaginationInfoTemplate("Exibindo {from} - {to} de {of}");
            paginatedDataGrid
                .setColumns([
                { name: "nome", title: "Nome", sortable: true, width: 25 },
                { name: "sobrenome", title: "Sobrenome", sortable: true, width: 25 },
                { name: "idade", title: "Idade", sortable: true, width: 25, template: template.testeTemplate },
                { name: "pais", title: "País", sortable: true, width: 25 }
            ])
                .setPossiblePageSizes(3, 10, 20, 50, 100)
                .loadPage({ "page": 0, "size": 10 })
                .addTableStyle(datagrid_1.EGridStyle.TABLE_BORDERED, datagrid_1.EGridStyle.TABLE_HOVER)
                .setEmptyText("Sem dados para exibir")
                .getFilterInput()
                .setLabel("Filtro");
            var filtroPais = new input_1.TextInput().setLabel("País").setSize(2);
            var btnPesquisar = new button_1.IconButton().setIcon("glyphicon glyphicon-search").setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            var btnLimpar = new button_1.IconButton().setIcon("glyphicon glyphicon-erase").setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            btnLimpar.addEvent(component_1.EMouseEvent.CLICK, function () {
                paginatedDataGrid.getPagination().clear();
            });
            btnPesquisar.addEvent(component_1.EMouseEvent.CLICK, function () {
                var params = {};
                if (filtroPais.getValue()) {
                    params["pais"] = filtroPais.getValue();
                }
                paginatedDataGrid.loadPage(params);
            });
            this.append(filtroPais);
            this.append(btnPesquisar);
            this.append(btnLimpar);
            this.append(paginatedDataGrid);
            paginatedDataGrid
                .getPageSizeSelect()
                .setLabel("Registros por página");
            var itLoopGrid = new input_1.NumericStepper()
                .setLabel("Create")
                .setMin(0)
                .setMax(500)
                .setStep(10)
                .setValue(150)
                .setSize(1);
            this.append(itLoopGrid);
            var simpleGrid = new datagrid_1.DataGrid({ autoSort: true });
            var ops = {
                testeGid: function () {
                    alert("ops haaaa");
                },
                toogleCheck: function () {
                    console.log("check-me", this.checked);
                    this.checked = !this.checked;
                    if (this.checked) {
                        simpleGrid.selectAll();
                    }
                    else {
                        simpleGrid.clearSelection();
                    }
                }
            };
            simpleGrid.addTableStyle(datagrid_1.EGridStyle.TABLE_STRIPED, datagrid_1.EGridStyle.TABLE_BORDERED, datagrid_1.EGridStyle.TABLE_CONDENSED);
            simpleGrid.setBottom(120);
            simpleGrid.setColumns([
                {
                    name: "id",
                    title: "id",
                    checkable: true
                },
                {
                    name: "nome",
                    title: "Nome",
                    sortable: true,
                    headerRender: function (col) { return col.title + "-" + col.name; },
                    size: [{ size: 2 }],
                    render: function (item) { return "" + item.nome; }
                },
                {
                    name: "sobrenome",
                    headerRenderElement: function (col) {
                        return new button_1.Button(col.title);
                    },
                    title: "Sobrenome", sortable: true, size: [
                        { size: 3 }
                    ]
                },
                {
                    name: "idade",
                    sortable: false,
                    template: template.testeTemplate,
                    renderElement: function ($row) { return new input_1.NumericStepper()
                        .setValue($row.idade)
                        .setSize(12); },
                    size: [
                        { size: 3 }
                    ]
                },
                { name: "pais", title: "País", sortable: true,
                    headerRenderElement: function (col) {
                        return new header_name_grid_1.HeaderNameGrid(col);
                    },
                    render: function (item) { return "Nacionalidade de " + item.pais; },
                    size: [
                        { size: 1 },
                        { size: 4, display: [component_1.EViewSize.LARGE, component_1.EViewSize.MEDIUM] }
                    ] }
            ]);
            this.append(simpleGrid);
            var btnGroup = new container_1.ButtonGroup();
            this.append(btnGroup);
            var btnClearSelection = new button_1.Button("clear selection");
            btnClearSelection.addEvent(component_1.EMouseEvent.CLICK, function () {
                simpleGrid.clearSelection();
            });
            var btnGetSelecteds = new button_1.Button("selecteds");
            btnGetSelecteds.addEvent(component_1.EMouseEvent.CLICK, function () {
                console.log(simpleGrid.getSelectedItems());
            });
            simpleGrid.onItemSelect.subscribe(function (item) {
            });
            simpleGrid.onSortingChange.subscribe(function (gridcolumn) {
            });
            simpleGrid.onDoubleClick.subscribe(function (evt) {
            });
            var btnLoad = new button_1.Button("load").setIcon("mv-basico-atualizar");
            btnGroup.append(btnLoad).append(btnClearSelection).append(btnGetSelecteds);
            btnLoad.addEvent(component_1.EMouseEvent.CLICK, function () {
                console.log(simpleGrid);
                var pessoas = [];
                var tcreate = itLoopGrid.getValue();
                for (var i = 0; i < tcreate; i++) {
                    pessoas.push({
                        nome: ("pessoa-" + i),
                        sobrenome: "sobr.",
                        idade: i * 10,
                        pais: "BR",
                        nascimento: new Date()
                    });
                }
                pessoas[0].sobrenome = "test epslon iranc lorem solos claus faul ipsec not acep solloneus narmaulnes de lorem epsolon narius!";
                simpleGrid.setData(pessoas).setSize(12);
                simpleGrid.setSelectedIndex(9999);
            });
            var btnSelectItem = new button_1.Button("select index").setIcon("mv-basico-usuario");
            btnGroup.append(btnSelectItem);
            btnSelectItem.addEvent(component_1.EMouseEvent.CLICK, function () {
                simpleGrid.setSelectedIndex(2);
            });
            var btnSelectSomeIndex = new button_1.Button("select some indexs").setIcon("mv-basico-liberar_item");
            btnGroup.append(btnSelectSomeIndex);
            btnSelectSomeIndex.addEvent(component_1.EMouseEvent.CLICK, function () {
                var indicesImpares = [];
                simpleGrid
                    .getData()
                    .filter(function (item, indx) {
                    if (!(indx & 1)) {
                        indicesImpares.push(indx);
                    }
                    return !(indx & 1);
                });
                simpleGrid.setSelectedIndexes(indicesImpares);
            });
            var btnCheckSomeIndex = new button_1.Button("check some itens").setIcon("mv-basico-liberar_item");
            btnGroup.append(btnCheckSomeIndex);
            btnCheckSomeIndex.addEvent(component_1.EMouseEvent.CLICK, function () {
                var indicesImpares = [];
                simpleGrid
                    .getData()
                    .filter(function (item, indx) {
                    var isImpa = indx & 1;
                    if (!isImpa) {
                        indicesImpares.push(indx);
                    }
                    return !isImpa;
                });
                simpleGrid.setCheckeds(indicesImpares);
            });
            simpleGrid.onItemChecked.subscribe(function (item) {
                console.log("item " + item.nome + " checked!!!!");
            });
            simpleGrid.onItemUnChecked.subscribe(function (item) {
                console.log("item " + item.nome + " unchecked!!!!");
            });
            simpleGrid.onItemCheckeds.subscribe(function (ok) {
            });
        };
        return DatagridShowcase;
    }(container_1.Box));
    exports.DatagridShowcase = DatagridShowcase;
});
