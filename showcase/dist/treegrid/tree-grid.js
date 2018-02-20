define(["require", "exports", "tslib", "jquery", "../core/event-emitter", "../component/abstract/a-basic-component", "incremental-dom", "./assets/css/tree-grid.css!", "jquery-treegrid/css/jquery.treegrid.css!", "jquery-treegrid/js/jquery.treegrid.min"], function (require, exports, tslib_1, jquery, event_emitter_1, a_basic_component_1, _idom_) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TreeGrid = (function (_super) {
        tslib_1.__extends(TreeGrid, _super);
        function TreeGrid(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.onSelect = new event_emitter_1.EventEmitter();
            _this.onCollapse = new event_emitter_1.EventEmitter();
            _this.onExpand = new event_emitter_1.EventEmitter();
            _this.onDoubleClick = new event_emitter_1.EventEmitter();
            _this.onItemChecked = new event_emitter_1.EventEmitter();
            _this.onItemUnChecked = new event_emitter_1.EventEmitter();
            _this.onItemCheckeds = new event_emitter_1.EventEmitter();
            _this.onGroupChecked = new event_emitter_1.EventEmitter();
            _this.setSize(12);
            _this.addStyleName("DataGridContainer TreeGrid");
            _this.columns = [];
            _this.data = [];
            var config_merged = Object.assign({
                expandedIcon: "glyphicon glyphicon-triangle-bottom",
                collapsedIcon: "glyphicon glyphicon-triangle-right",
                primaryColumn: "id",
                parentColumn: "parent"
            }, config);
            _this.primaryColumn = config_merged.primaryColumn;
            _this.parentColumn = config_merged.parentColumn;
            _this.expandedIcon = config_merged.expandedIcon;
            _this.collapsedIcon = config_merged.collapsedIcon;
            _this.selectedIndexs = [];
            _this.selectedGroupIds = [];
            window.onresize = function () {
                _this.verifyScroll();
            };
            return _this;
        }
        TreeGrid.prototype.verifyScroll = function () {
            var treegrid = jquery(this.element);
            var elementTHead = treegrid.find("table:first").find("thead");
            var elementTbody = treegrid.find("table:first").find("tbody");
            var hasScroll = elementTbody.get(0).scrollHeight > (treegrid.outerHeight() - elementTHead.height());
            if (hasScroll && treegrid.height() > 0 && elementTHead.height() > 0) {
                jquery(elementTbody)
                    .css({ "height": "calc( " + treegrid.height() + "px - " + elementTHead.height() + "px )" })
                    .find("tr").css({ "width": "calc( 100% + 18px )" });
                var lastCell = jquery(elementTbody).find("td.is-last-cell");
                lastCell.toArray().forEach(function (element) {
                    jquery(element).css({ "padding-right": "18px" });
                });
            }
            else {
                jquery(elementTbody).css({ "height": "100%)" });
                jquery(elementTbody).find("tr").css({ "width": "100%" });
                var lastCell = jquery(elementTbody).find("td.is-last-cell");
                lastCell.toArray().forEach(function (element) {
                    jquery(element).css({ "padding-right": "0px" });
                });
            }
        };
        TreeGrid.prototype.render = function () {
            var _this = this;
            var $treegrid = this;
            var clreaders = "";
            if (!jquery(this.element).find("table:first").length) {
                $treegrid.columns.forEach(function (column, $indxhead) {
                    var thStylesName = column._size_ ? column._size_ : "";
                    thStylesName += $indxhead === 0 ? "is-first-cell" : $indxhead === $treegrid.columns.length - 1 ? "is-last-cell" : "";
                    if (column.checkable && column.checkableHeader) {
                        clreaders += "<th class=\"is-header-checkable " + thStylesName + "\" >\n\t\t\t\t\t\t\t\t<div class=\"is-box-checkbox\"> <input type=\"checkbox\"/> </div>\n\t\t\t\t\t\t\t</th>";
                    }
                    else {
                        clreaders += "<th class=\"" + thStylesName + "\">\n\t\t\t\t\t\t\t\t" + column.title + "\n\t\t\t\t\t\t\t</th>";
                    }
                });
                var tbodyStyleHeight = $treegrid.height ? "height:" + $treegrid.height + "px" : "";
                var tableStyleNames = $treegrid.height ? "DataGrid-InfiniteScroll" : "";
                var tbla = "<table class=\"tree-grid table table-bordered table-hover table-striped " + tableStyleNames + "\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t" + clreaders + "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody style=\"" + tbodyStyleHeight + "\">\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>";
                jquery(this.element)
                    .append(tbla);
            }
            var tbody = jquery(this.element)
                .find("tbody:first");
            tbody.html("");
            $treegrid.data.forEach(function (data, indxrow) {
                var trclass = "treegrid-" + data[$treegrid.primaryColumn];
                trclass += data[$treegrid.parentColumn] ? " treegrid-parent-" + data[$treegrid.parentColumn] : "";
                trclass += $treegrid.indexSelected === indxrow ? " active " : "";
                var trow = jquery("<tr \n\t\t\t\t\tdata-index=\"" + indxrow + "\" \n\t\t\t\t\tclass=\"" + trclass + "\"\n\t\t\t\t\t>");
                $treegrid.columns.forEach(function (column, $indxhead) {
                    var tcellStyle = "" + (column._size_ ? column._size_ : "");
                    tcellStyle += column.name === $treegrid.parentColumn ? " is-parent-column" : "";
                    tcellStyle += $indxhead === 0 ? "is-first-cell" : $indxhead === $treegrid.columns.length - 1 ? "is-last-cell" : "";
                    var tcell = jquery("<td class=\"" + tcellStyle + "\">");
                    if (column.checkable) {
                        if (data[$treegrid.primaryColumn]) {
                            if (column.checkableGroup) {
                                tcell.addClass("is-group-checkable");
                                tcell.html("<div class=\"is-box-checkbox\">\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\tclass=\"checkable-group-" + data[$treegrid.primaryColumn] + "\" \n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t\tdata-index=\"" + indxrow + "\" \n\t\t\t\t\t\t\t\t\t\tdata-column-name=\"" + column.name + "\" \n\t\t\t\t\t\t\t\t\t\tdata-checkable-value=\"" + column.checkableValue + "\"/>\n\t\t\t\t\t\t\t\t\t</div>");
                            }
                            else {
                                tcell.addClass("is-item-checkable");
                                tcell.html("<div class=\"is-box-checkbox\">\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t\tdata-index=\"" + indxrow + "\" \n\t\t\t\t\t\t\t\t\t\tdata-column-name=\"" + column.name + "\" \n\t\t\t\t\t\t\t\t\t\tdata-checkable-value=\"" + column.checkableValue + "\" " + (data[column.name] === column.checkableValue ? "checked" : "") + "/>\n\t\t\t\t\t\t\t\t\t</div>");
                            }
                        }
                        else {
                            tcell.addClass("is-item-checkable");
                            tcell.html("<div class=\"is-box-checkbox\">\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t\tdata-index=\"" + indxrow + "\" \n\t\t\t\t\t\t\t\t\t\tdata-column-name=\"" + column.name + "\" \n\t\t\t\t\t\t\t\t\t\tdata-checkable-value=\"" + column.checkableValue + "\" " + (data[column.name] === column.checkableValue ? "checked" : "") + "/>\n\t\t\t\t\t\t\t\t\t</div>");
                        }
                    }
                    else if (column.render) {
                        tcell.html(column.render(data));
                    }
                    else if (column.renderElement) {
                        tcell.append(column.renderElement(data).element);
                    }
                    else if (column.template) {
                        _idom_.patch(tcell[0], column.template, data);
                    }
                    else if (column.group) {
                        var arrayKeys = Object.keys(data);
                        var valid = arrayKeys.some(function (item) {
                            return item.indexOf("_parent") > -1 && !data[item];
                        });
                        if (valid) {
                            if (column.name.indexOf(".") > -1) {
                                var arrayObj = column.name.split(".");
                                var valueGroup = _this.getValueByPath(data, column.name);
                                tcell.html(valueGroup || "");
                            }
                            else {
                                tcell.html(data[column.name] || "");
                            }
                        }
                        else {
                            tcell.html("");
                        }
                    }
                    else {
                        if (column.name.indexOf(".") > -1) {
                            var arrayObj = column.name.split(".");
                            var valueGroup = _this.getValueByPath(data, column.name);
                            tcell.html(valueGroup || "");
                        }
                        else {
                            tcell.html(data[column.name] || "");
                        }
                    }
                    trow.append(tcell);
                    var addChecked = !data[_this.primaryColumn] && data[column.name] === column.checkableValue ? 1 : 0;
                    if (column.checkable) {
                        _this.verifyAllCheckablesGroup(column, data, addChecked);
                    }
                });
                tbody.append(trow);
                _this.verifyScroll();
            });
        };
        TreeGrid.prototype.verifyAllCheckablesGroup = function (column, row, addCheckedCount) {
            var _this = this;
            if (addCheckedCount === void 0) { addCheckedCount = 0; }
            var isGroup = false;
            if (row[this.primaryColumn] && !row[this.parentColumn]) {
                isGroup = true;
            }
            var dataChildrensByGroup = this.data.filter(function (item) {
                return item[isGroup ? _this.primaryColumn : _this.parentColumn] === row[isGroup ? _this.primaryColumn : _this.parentColumn];
            });
            var dataChildrensItens = this.data.filter(function (item) {
                return !item[_this.primaryColumn];
            });
            if (!isGroup) {
                var tmp_checkbox_group = jquery(this.element).find("tbody > tr.treegrid-" + row[this.parentColumn] + " > td.is-group-checkable > .is-box-checkbox > input");
                var tmp_checkboxs_checked_byGroup = jquery(this.element)
                    .find("tbody > tr.treegrid-parent-" + row[this.parentColumn] + " > td.is-item-checkable > .is-box-checkbox > input:checked");
                tmp_checkbox_group.prop("checked", (tmp_checkboxs_checked_byGroup.toArray().length + addCheckedCount) === dataChildrensByGroup.length);
            }
            var tmp_checkbox_header = jquery(this.element).find("thead > tr > th.is-header-checkable > .is-box-checkbox > input");
            var tmp_checkboxs_checked_all_itens = jquery(this.element).find("tbody > tr > td.is-item-checkable > .is-box-checkbox > input:checked");
            tmp_checkbox_header.prop("checked", (tmp_checkboxs_checked_all_itens.length + addCheckedCount) === dataChildrensItens.length);
        };
        TreeGrid.prototype.attached = function () {
            this.loaded = true;
            this.applyRender();
            var $this = this;
            jquery(this.element)
                .find(".tree-grid:first")
                .find("thead:first")
                .on("click", "tr > th.is-header-checkable > .is-box-checkbox > input", function () {
                var tmp_tbody = jquery($this.element).find("tbody:first");
                var checked = jquery(this).prop("checked");
                var tmp_checkboxs_gourp = jquery(tmp_tbody).find("tr > td.is-group-checkable > .is-box-checkbox > input");
                var tmp_checkboxs_itens = jquery(tmp_tbody).find("tr > td.is-item-checkable > .is-box-checkbox > input");
                var indexItem = parseInt(jquery(this).attr("data-index"));
                jquery(tmp_checkboxs_itens).toArray().forEach(function (item) {
                    var indexItem = parseInt(jquery(item).attr("data-index"));
                    var columnName = jquery(item).attr("data-column-name");
                    $this.data[indexItem][columnName] = checked;
                });
                if (checked) {
                    tmp_checkboxs_gourp.prop("checked", true);
                    tmp_checkboxs_itens.prop("checked", true);
                    $this.onItemCheckeds.emit(true);
                }
                else {
                    tmp_checkboxs_gourp.prop("checked", false);
                    tmp_checkboxs_itens.prop("checked", false);
                    $this.onItemCheckeds.emit(false);
                }
            });
            jquery(this.element)
                .find(".tree-grid:first")
                .find("tbody:first")
                .on("click", "tr > td.is-group-checkable > .is-box-checkbox > input", function () {
                var tmp_tbody = jquery($this.element).find("tbody:first");
                var tmp_group = jquery(this).parents("tr:first");
                var classe = jquery(tmp_group).attr("class").split(" ").filter(function (valor) {
                    var regex = new RegExp("[0-9]");
                    return valor.indexOf("treegrid-") > -1 && regex.test(valor);
                });
                var index = classe[0].replace("treegrid-", "");
                var tmp_checkboxs_itens = jquery(tmp_tbody)
                    .find("tr.treegrid-parent-" + index + " > td.is-item-checkable > .is-box-checkbox > input");
                var tmp_checkboxs_itens_unchecked = jquery(tmp_tbody)
                    .find("tr.treegrid-parent-" + index + " > td.is-item-checkable > .is-box-checkbox > input:not(:checked)");
                var checked = jquery(this).prop("checked");
                var dataReturn = [];
                jquery(tmp_checkboxs_itens_unchecked).toArray().forEach(function (item) {
                    var indexItem = parseInt(jquery(item).attr("data-index"));
                    var columnName = jquery(item).attr("data-column-name");
                    $this.data[indexItem][columnName] = checked;
                    dataReturn.push($this.data[indexItem]);
                });
                tmp_checkboxs_itens.prop("checked", checked);
                var indexItem = parseInt(jquery(this).attr("data-index"));
                var objectGroup = { data: dataReturn, group: $this.data[indexItem], checked: dataReturn && dataReturn.length > 0 };
                $this.onGroupChecked.emit(objectGroup);
                var columnName = jquery(this).attr("data-column-name");
                var checkableValue = jquery(this).attr("data-checkable-value");
                $this.verifyAllCheckablesGroup({ name: columnName }, $this.data[indexItem]);
            });
            jquery(this.element)
                .find(".tree-grid:first")
                .find("tbody:first")
                .on("click", "tr > td.is-item-checkable > .is-box-checkbox > input", function () {
                var checked = jquery(this).prop("checked");
                var indexItem = parseInt(jquery(this).attr("data-index"));
                var columnName = jquery(this).attr("data-column-name");
                var checkableValue = jquery(this).attr("data-checkable-value");
                $this.data[indexItem][columnName] = checked;
                $this.verifyAllCheckablesGroup({ name: columnName }, $this.data[indexItem]);
                if (jquery(this).is(":checked")) {
                    $this.onItemChecked.emit($this.data[indexItem]);
                }
                else {
                    $this.onItemUnChecked.emit($this.data[indexItem]);
                }
            });
            jquery(this.element)
                .find(".tree-grid:first")
                .find("tbody:first")
                .on("click", "tr", function () {
                var tmpElem = jquery(this);
                var tmpIndex = parseInt(tmpElem.attr("data-index"));
                var tmpItem = $this.data[tmpIndex];
                $this.indexSelected = tmpIndex;
                var styleRules = this.className;
                var isParent = styleRules.indexOf("treegrid-parent-") > -1;
                if ($this.hasGroup() && !tmpItem[$this.getPrimaryColumn()]) {
                    $this.selectedIndexs = [tmpIndex];
                    $this.onSelect.emit([tmpItem]);
                }
                else if (!$this.hasGroup()) {
                    $this.selectedIndexs = [tmpIndex];
                    $this.selectedGroupIds = [tmpItem];
                    $this.onSelect.emit([tmpItem]);
                }
                else {
                    var group = {};
                    group[$this.getParentColumn()] = tmpElem.find("td:first").text();
                    $this.selectedGroupIds = [group];
                    $this.selectedIndexs = [tmpIndex];
                    $this.onSelect.emit([tmpItem]);
                }
                $this.clearSelection();
                tmpElem.addClass("active");
            })
                .on("dblclick", "tr", function (evt) {
                var styleRules = this.className;
                var isParent = styleRules.indexOf("treegrid-parent-") > -1;
                if (isParent) {
                    $this.selectedIndexs = [];
                }
                else if (styleRules.indexOf("treegrid-expanded") < 0
                    && styleRules.indexOf("treegrid-collapsed") < 0) {
                    $this.selectedGroupIds = [];
                }
                var tmpElem = jquery(this);
                var tmpIndex = parseInt(tmpElem.attr("data-index"));
                var tmpItem = $this.data[tmpIndex];
                $this.onDoubleClick.emit(tmpItem);
            });
            if (this.bottom) {
                var parent_1 = jquery(this.element).parent();
                var prevElement = jquery(this.element).prev();
                var top_1 = 0;
                if (parent_1.offset()) {
                    top_1 = parent_1.offset().top;
                }
                if (prevElement.length && prevElement.offset()) {
                    top_1 = prevElement.offset().top;
                }
                jquery(this.element).css("height", "calc( 100% - +" + (this.bottom + top_1) + "px )");
            }
        };
        TreeGrid.prototype.setCheckeds = function (indexes) {
            var $grid = this;
            var tmp_tbody = jquery(this.element).find("table:first > tbody:first");
            var checkedItens = [];
            tmp_tbody.find("tr > td.is-header-checkable > .is-box-checkbox > input").each(function (index) {
                var itemjq = jquery(this);
                var indexItem = parseInt(itemjq.attr("data-index"));
                if (indexes.indexOf(index) > -1) {
                    itemjq.prop("checked", "checked");
                }
                else {
                    itemjq.prop("checked", null);
                }
            });
            return this;
        };
        TreeGrid.prototype.getCheckeds = function () {
            var _this = this;
            var selectedItems = [];
            var checkeds = jquery(this.element)
                .find("table:first > tbody:first > tr > td.is-item-checkable > .is-box-checkbox > input:checked")
                .toArray().forEach(function (item) {
                selectedItems.push(_this.data[parseInt(jquery(item).attr("data-index"))]);
            });
            return selectedItems;
        };
        TreeGrid.prototype.getCheckedsIndexes = function () {
            var tmp_tbody = jquery(this.element).find("table:first > tbody:first");
            var checkedItens = [];
            tmp_tbody.find("tr > td.is-header-checkable > .is-box-checkbox > input").each(function (index) {
                if (jquery(this).prop("checked")) {
                    checkedItens.push(index);
                }
            });
            return checkedItens;
        };
        TreeGrid.prototype.getSelectedItems = function () {
            var _this = this;
            var selectedItems = [];
            this.selectedIndexs.forEach(function (index) {
                if (_this.data[index] !== undefined) {
                    selectedItems.push(_this.data[index]);
                }
            });
            return selectedItems;
        };
        TreeGrid.prototype.getSelectedGroups = function () {
            return this.selectedGroupIds;
        };
        TreeGrid.prototype.clearSelection = function () {
            jquery(this.element).find("tbody:first").find("tr.active").removeClass("active");
            return this;
        };
        TreeGrid.prototype.refresh = function () {
            var _this = this;
            if (this.loaded) {
                window.setTimeout(function () {
                    _this.applyRender();
                    _this.verifyScroll();
                }, 0);
            }
            return this;
        };
        TreeGrid.prototype.applyRender = function () {
            this.render();
            var element = jquery(this.element);
            var $this = this;
            if (!element.hasClass("is-rendered")) {
                element
                    .find(".tree-grid:first")
                    .treegrid({
                    expanderExpandedClass: this.expandedIcon,
                    expanderCollapsedClass: this.collapsedIcon,
                    onCollapse: function () {
                        var selectedIndx = parseInt(jquery(this).attr("data-index"));
                        $this.onCollapse.emit($this.data[selectedIndx]);
                    },
                    onExpand: function () {
                        var selectedIndx = parseInt(jquery(this).attr("data-index"));
                        $this.onExpand.emit($this.data[selectedIndx]);
                    }
                });
            }
            else {
                element
                    .find(".tree-grid:first")
                    .treegrid("render");
            }
            this.verifyScroll();
            return this;
        };
        TreeGrid.prototype.getData = function () {
            var _this = this;
            if (this.hasGroup()) {
                return this.data.filter(function (item) { return !item[_this.getPrimaryColumn()]; });
            }
            return this.data;
        };
        TreeGrid.prototype.hasGroup = function () {
            return this.columns.some(function (column) { return column.group; });
        };
        TreeGrid.prototype.getValueByPath = function (item, path) {
            var $_this = this;
            var valueGroup = path.split(".").reduce(function (prev, curr) {
                return prev && prev[curr] ? prev[curr] : null;
            }, item || this);
            return valueGroup;
        };
        TreeGrid.prototype.setData = function (data) {
            var _this = this;
            if (!data) {
                this.data = jquery.extend([], []);
            }
            else if (this.hasGroup()) {
                var data2_1 = [];
                var lastGroup_1 = "";
                var lastVtId_1 = 0;
                this.setPrimaryColumn("_vt_" + new Date().getTime() + "_");
                this.setParentColumn(this.getPrimaryColumn() + "_parent");
                data.forEach(function (item, indx) {
                    var groupObject = {};
                    var acumuledValue = "";
                    _this.columns.filter(function (column) { return column.group; }).forEach(function (column) {
                        if (column.name.indexOf(".") < 0) {
                            groupObject[column.name] = item[column.name];
                            acumuledValue += item[column.name];
                        }
                        else {
                            var arrayObj = column.name.split(".");
                            groupObject[arrayObj[0]] = item[arrayObj[0]];
                            acumuledValue += _this.getValueByPath(item, column.name);
                        }
                    });
                    if (lastGroup_1 !== acumuledValue) {
                        lastGroup_1 = acumuledValue;
                        lastVtId_1++;
                        groupObject[_this.getPrimaryColumn()] = lastVtId_1;
                        groupObject[_this.getParentColumn()] = "";
                        data2_1.push(groupObject);
                    }
                    item[_this.getPrimaryColumn()] = "";
                    item[_this.getParentColumn()] = lastVtId_1;
                    data2_1.push(item);
                });
                this.data = jquery.extend([], data2_1);
            }
            else {
                this.data = jquery.extend([], data);
            }
            this.refresh();
            return this;
        };
        TreeGrid.prototype.clear = function () {
            this.setData([]);
            return this;
        };
        TreeGrid.prototype.setHeight = function (height) {
            this.height = height;
            jquery(this.element).find("tbody:first").css({ "height": height });
            return this;
        };
        TreeGrid.prototype.setColumns = function (columns) {
            this.columns = columns.map(function (col) {
                var tmpcol = col;
                var tmpsize = "col-xs-1";
                if (col.size && col.size.length) {
                    tmpsize = "";
                    col.size.forEach(function (view) {
                        if (view.display && view.display.length) {
                            tmpsize += " ";
                            tmpsize += view
                                .display
                                .map(function (display) { return "col-" + a_basic_component_1.ABasicComponent.prototype.getSizeDesc.call(null, display) + "-" + view.size; })
                                .join(" ");
                        }
                        else {
                            tmpsize += "col-xs-" + view.size;
                        }
                    });
                }
                tmpcol["_size_"] = tmpsize;
                if (col.checkable) {
                    if (typeof col.checkableHeader === "undefined") {
                        col.checkableHeader = false;
                    }
                    if (typeof col.checkableGroup === "undefined") {
                        col.checkableGroup = false;
                    }
                    if (typeof col.checkableValue === "undefined") {
                        col.checkableValue = true;
                    }
                }
                return tmpcol;
            });
            return this;
        };
        TreeGrid.prototype.addColumns = function (columns) {
            (_a = this.columns).push.apply(_a, columns);
            this.refresh();
            return this;
            var _a;
        };
        TreeGrid.prototype.setPrimaryColumn = function (primaryColumn) {
            this.primaryColumn = primaryColumn;
            return this;
        };
        TreeGrid.prototype.setParentColumn = function (parentColumn) {
            this.parentColumn = parentColumn;
            return this;
        };
        TreeGrid.prototype.getPrimaryColumn = function () {
            return this.primaryColumn;
        };
        TreeGrid.prototype.getParentColumn = function () {
            return this.parentColumn;
        };
        TreeGrid.prototype.setBottom = function (bottom) {
            this.bottom = bottom;
            return this;
        };
        return TreeGrid;
    }(a_basic_component_1.ABasicComponent));
    exports.TreeGrid = TreeGrid;
});

//# sourceMappingURL=tree-grid.js.map
