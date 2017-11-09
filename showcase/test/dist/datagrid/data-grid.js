define(["require", "exports", "tslib", "jquery", "../core/event-emitter", "./enum/e-data-grid", "../component/abstract/a-basic-component", "incremental-dom", "./assets/css/datagrid.css!"], function (require, exports, tslib_1, jquery, event_emitter_1, e_data_grid_1, a_basic_component_1, _idom_) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataGrid = (function (_super) {
        tslib_1.__extends(DataGrid, _super);
        function DataGrid(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.onItemChecked = new event_emitter_1.EventEmitter();
            _this.onItemUnChecked = new event_emitter_1.EventEmitter();
            _this.onItemCheckeds = new event_emitter_1.EventEmitter();
            _this.onItemSelect = new event_emitter_1.EventEmitter();
            _this.onSortingChange = new event_emitter_1.EventEmitter();
            _this.onScrollBottom = new event_emitter_1.EventEmitter();
            _this.onDoubleClick = new event_emitter_1.EventEmitter();
            _this.setSize(12);
            _this.addStyleName("DataGridContainer");
            _this.data = [];
            _this.styles = [];
            _this.selectedData = [];
            _this.sortingColumns = [];
            _this.emptyText = "-";
            _this.singleSelection = true;
            _this.defaultHeight = 400;
            _this.autoSort = config ? config.autoSort : false;
            return _this;
        }
        DataGrid.prototype.addTableStyle = function () {
            var style = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                style[_i] = arguments[_i];
            }
            this.styles = this.styles.concat(style);
            return this;
        };
        DataGrid.prototype.setData = function (data) {
            this.data = jquery.extend([], data);
            this.selectedData = [];
            this.refresh();
            if (!data || (data && data.length === 0)) {
                jquery(this.element)
                    .find("tbody")
                    .html("<tr>\n\t\t\t\t\t<td \n\t\t\t\t\t\tclass=\"text-center is-last-cell\" \n\t\t\t\t\t\tcolspan=\"" + this.columns.length + "\">\n\t\t\t\t\t\t" + this.emptyText + "\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>");
            }
            return this;
        };
        DataGrid.prototype.addData = function (data) {
            this.data = jquery.extend([], data.concat(this.data));
            this.selectedData = [];
            this.refresh();
            return this;
        };
        DataGrid.prototype.setEmptyText = function (text) {
            this.emptyText = text;
            return this;
        };
        DataGrid.prototype.clearSelection = function () {
            this.selectedData = [];
            jquery(this.element)
                .find("tbody:first")
                .find(".active")
                .removeClass("active");
            return this;
        };
        DataGrid.prototype.selectAll = function () {
            this.selectedData = this.getData().map(function (row, indx) { return indx; });
            jquery(this.element)
                .find("tbody:first")
                .children("tr")
                .addClass("active");
            return this;
        };
        DataGrid.prototype.setSelectedIndexes = function (indexs) {
            var _this = this;
            this.clearSelection();
            this.selectedData = indexs;
            var tmpbody = jquery(this.element)
                .find("tbody:first");
            this.selectedData.forEach(function (indx) {
                jquery(_this.element)
                    .find("tbody:first")
                    .children("tr:eq(" + indx + ")")
                    .addClass("active");
            });
            return this;
        };
        DataGrid.prototype.addSelectedIndexes = function (indexs) {
            this.selectedData = this.selectedData.concat(indexs);
            this.setSelectedIndexes(this.selectedData);
            return this;
        };
        DataGrid.prototype.setSingleSelection = function (yes) {
            this.singleSelection = yes;
            return this;
        };
        DataGrid.prototype.isSingleSelection = function () {
            return this.singleSelection;
        };
        DataGrid.prototype.setColumns = function (columns) {
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
                                .map(function (display) {
                                var coldisplays = "col-" + a_basic_component_1.ABasicComponent.prototype.getSizeDesc.call(null, display) + "-" + view.size;
                                return coldisplays;
                            })
                                .join(" ");
                        }
                        else {
                            tmpsize += " col-xs-" + view.size;
                        }
                    });
                }
                tmpcol["_size_"] = tmpsize;
                return tmpcol;
            });
            return this;
        };
        DataGrid.prototype.setHeight = function (height) {
            this.height = height;
            return this;
        };
        DataGrid.prototype.getHeight = function () {
            return this.height;
        };
        DataGrid.prototype.setInfiniteScroll = function (isInfiniteScroll) {
            this.infiniteScroll = isInfiniteScroll;
            if (!this.height) {
                this.height = this.defaultHeight;
            }
            return this;
        };
        DataGrid.prototype.isInfiniteScroll = function () {
            return this.infiniteScroll;
        };
        DataGrid.prototype.getEmptyText = function () {
            return this.emptyText;
        };
        DataGrid.prototype.clear = function () {
            this.setData([]);
            return this;
        };
        DataGrid.prototype.getStyle = function () {
            var styles = [];
            this.styles.forEach(function (style) {
                styles.push(e_data_grid_1.EGridStyle[style].toLowerCase().replace("_", "-"));
            });
            var hasBorder = styles.some(function (style) { return style === "table-bordered"; });
            if (!hasBorder) {
                styles.push("no-bordered");
            }
            return styles.join(" ");
        };
        DataGrid.prototype.setSelectedIndex = function (index) {
            if (index > -1 && index < this.data.length - 1) {
                this.clearSelection();
                this.selectedData = [index];
                jquery(this.element)
                    .find("tbody:first")
                    .children("tr:eq(" + index + ")")
                    .addClass("active");
                this.onItemSelect.emit(this.data[index]);
            }
            return this;
        };
        DataGrid.prototype.getSelectedItems = function () {
            var _this = this;
            var selectedItems = [];
            this.selectedData.forEach(function (index) {
                if (_this.data[index] !== undefined) {
                    selectedItems.push(_this.data[index]);
                }
            });
            return selectedItems;
        };
        DataGrid.prototype.getData = function () {
            return this.data;
        };
        DataGrid.prototype.getColumns = function () {
            return this.columns;
        };
        DataGrid.prototype.attached = function () {
            this.refreshRender();
        };
        DataGrid.prototype.setBottom = function (bottom) {
            this.bottom = bottom;
            return this;
        };
        DataGrid.prototype.setCheckeds = function (pindexes) {
            var indexes = pindexes.filter(function (indx) { return indx > -1; });
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
        DataGrid.prototype.getCheckeds = function () {
            var _this = this;
            var selectedItems = [];
            this.getCheckedsIndexes().forEach(function (index) {
                if (_this.data[index] !== undefined) {
                    selectedItems.push(_this.data[index]);
                }
            });
            return selectedItems;
        };
        DataGrid.prototype.getCheckedsIndexes = function () {
            var tmp_tbody = jquery(this.element).find("table:first > tbody:first");
            var checkedItens = [];
            tmp_tbody.find("tr > td.is-header-checkable > .is-box-checkbox > input").each(function (index) {
                if (jquery(this).prop("checked")) {
                    checkedItens.push(index);
                }
            });
            return checkedItens;
        };
        DataGrid.prototype.refreshRender = function () {
            var $dataGrid = this;
            var _tmpgrid;
            var _tmptable;
            if (!this.gridRendered) {
                this.gridRendered = true;
                _tmpgrid = jquery("<div class=\"grid-content\"></div>");
                jquery(this.element).append(_tmpgrid);
            }
            else {
                _tmpgrid = jquery(this.element).find(".grid-content:first");
            }
            if (!this.tableRendered) {
                this.tableRendered = true;
                var tbodyStyleName = $dataGrid.height ? "height:" + $dataGrid.height + "px" : "";
                _tmptable = jquery("\n\t\t\t\t<table \n\t\t\t\t\tclass=\"table " + $dataGrid.getStyle() + " DataGrid " + $dataGrid.getInfiniteScrollClass() + "\"\n\t\t\t\t\t>    \n\t\t\t\t\t<tbody \n\t\t\t\t\t\tstyle=\"" + tbodyStyleName + "\"\n\t\t\t\t\t></tbody>\n\t\t\t\t</table>\n\t\t\t");
                _tmpgrid.append(_tmptable);
                var tmp_tbody = _tmptable.find("tbody:first");
                tmp_tbody.on("scroll", function () {
                    var _this = this;
                    var realHeight = jquery(this)[0].scrollHeight;
                    var scrollTop = jquery(this).scrollTop();
                    var tbodyHeight = jquery(this).outerHeight();
                    if ((realHeight - scrollTop) === tbodyHeight) {
                        $dataGrid.onScrollBottom.emit(null).done(function () { return jquery(_this)[0].scrollTop -= 50; });
                    }
                })
                    .on("click", "tr", function () {
                    var tmpElem = jquery(this);
                    var index = tmpElem.attr("data-item-index");
                    $dataGrid.selectRow(Number("" + index));
                })
                    .on("dblclick", "tr", function () {
                    var tmpElem = jquery(this);
                    var index = tmpElem.attr("data-item-index");
                    $dataGrid.selectRow(Number("" + index), true);
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
                    jquery(this.element).css("height", "calc( 100% - " + (this.bottom + top_1) + "px )");
                }
                tmp_tbody.on("click", "tr > td.is-header-checkable > .is-box-checkbox > input", function () {
                    var indexItem = parseInt(jquery(this).attr("data-index"));
                    if (jquery(this).is(":checked")) {
                        $dataGrid.onItemChecked.emit($dataGrid.data[indexItem]);
                    }
                    else {
                        $dataGrid.onItemUnChecked.emit($dataGrid.data[indexItem]);
                    }
                });
            }
            else {
                _tmptable = _tmpgrid.find(".table:first");
            }
            if (!this.gridHeaderRendered && $dataGrid.columns && $dataGrid.columns.length) {
                this.gridHeaderRendered = true;
                var _tmptable_heade = jquery("<thead>\n\t\t\t<tr></tr>\n\t\t\t</thead>");
                var tr_head_1 = _tmptable_heade.find("tr");
                $dataGrid.columns.forEach(function (column, $indxhead) {
                    if (column.template) {
                        console.warn("\nmv-components: a coluna '" + column.name + "' est\u00E1 utilizando o m\u00E9todo 'DataGrid.column.template' que ser\u00E1 descontinuado\napartir da vers\u00E3o 1.2.0, por favor utilize o m\u00E9todo 'DataGrid.column.renderElement' ou 'DataGrid.column.render' para custumizar a exibi\u00E7\u00E3o da coluna!\n\t\t\t\t\t");
                    }
                    var tmp_th_head = null;
                    if (column.checkable) {
                        var thStyleName = column._size_ && !column.width ? column._size_ : "";
                        thStyleName += " ";
                        thStyleName += $indxhead === 0 ? "is-first-cell" : $indxhead === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                        tmp_th_head = jquery("\n\t\t\t\t\t\t<th \n\t\t\t\t\t\t\tstyle=\"width:" + column.width + "%\" \n\t\t\t\t\t\t\tclass=\"is-header-checkable " + thStyleName + "\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div class=\"is-box-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t");
                        tmp_th_head
                            .find("input:first")
                            .on("click", function () {
                            var tmp_tbody = _tmptable.find("tbody:first");
                            var checked = jquery(this).prop("checked");
                            var tmp_checkboxs = tmp_tbody.find("tr > td.is-header-checkable > .is-box-checkbox > input");
                            if (checked) {
                                tmp_checkboxs.prop("checked", "checked");
                                $dataGrid.onItemCheckeds.emit(true);
                            }
                            else {
                                tmp_checkboxs.prop("checked", null);
                                $dataGrid.onItemCheckeds.emit(false);
                            }
                        });
                        tr_head_1.append(tmp_th_head);
                    }
                    else if (column.headerRender) {
                        var thStyles = column.width ? "width:" + column.width + "%" : "";
                        var thStyleName = column._size_ && !column.width ? column._size_ : "";
                        thStyleName += " ";
                        thStyleName += $indxhead === 0 ? "is-first-cell" : $indxhead === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                        tmp_th_head = jquery("\n\t\t\t\t\t\t<th \n\t\t\t\t\t\t\tstyle=\"" + thStyles + "\" \n\t\t\t\t\t\t\tclass=\"" + thStyleName + "\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t" + column.headerRender(column) + "\n\t\t\t\t\t\t</th>\n\t\t\t\t\t");
                    }
                    else if (column.headerRenderElement) {
                        tmp_th_head = jquery("<th>");
                        var tmpelement = column.headerRenderElement(column).element;
                        tmp_th_head.append(tmpelement);
                        tr_head_1.append(tmp_th_head);
                    }
                    else {
                        var _title = column.title || column.name;
                        var thStyles = column.width ? "width:" + column.width + "%" : "";
                        var thStyleName = column._size_ && !column.width ? column._size_ : "";
                        thStyleName += " ";
                        thStyleName += $indxhead === 0 ? "is-first-cell" : $indxhead === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                        tmp_th_head = jquery("\n\t\t\t\t\t<th \n\t\t\t\t\t\tstyle=\"" + thStyles + "\" \n\t\t\t\t\t\tclass=\"" + thStyleName + "\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t" + _title + "\n\t\t\t\t\t</th>\n\t\t\t\t\t");
                    }
                    if (column.sortable) {
                        var sortAscStyleName = column.sortingDirection === 0 ? "active" : "";
                        var sortDescStyleName = column.sortingDirection === 1 ? "active" : "";
                        tmp_th_head.append("\n\t\t\t\t\t\t<span class=\"mv-datagrid-sort\">\n\t\t\t\t\t\t\t<div class=\"mv-datagrid-sort-asc " + sortAscStyleName + "\" >\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-triangle-top spin-sort-up\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mv-datagrid-sort-desc " + sortDescStyleName + "\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-triangle-bottom spin-sort-down\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>                            \n\t\t\t\t\t");
                        tmp_th_head
                            .find(".mv-datagrid-sort:first")
                            .on("click", ".spin-sort-up", $dataGrid.addSort.bind($dataGrid, $indxhead, true))
                            .on("click", ".spin-sort-down", $dataGrid.addSort.bind($dataGrid, $indxhead, false));
                    }
                    tr_head_1.append(tmp_th_head);
                });
                _tmptable.prepend(_tmptable_heade);
            }
            if ($dataGrid.columns && $dataGrid.columns.length && $dataGrid.data && $dataGrid.data.length) {
                var tmp_tbody_1 = _tmptable.find("tbody:first");
                tmp_tbody_1.html("");
                if ($dataGrid.height) {
                    tmp_tbody_1.css("height", $dataGrid.height + "px");
                }
                $dataGrid.data.forEach(function ($row, $indexRow) {
                    var tmp_row = jquery("\n\t\t\t\t\t<tr data-item-index=\"" + $indexRow + "\"></tr>\n\t\t\t\t");
                    $dataGrid.columns.forEach(function (column, $indexCol) {
                        var tmp_cell = null;
                        var style = column.width ? "width:" + column.width + "%" : "";
                        if (column.checkable) {
                            var tdStyleName = column._size_ && !column.width ? column._size_ : "";
                            tdStyleName = +" ";
                            tdStyleName = +$indexCol === 0 ? "is-first-cell" : $indexCol === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                            tmp_cell = jquery("\n\t\t\t\t\t\t\t<td style=\"" + style + "\" class=\"is-header-checkable " + tdStyleName + "\">\n\t\t\t\t\t\t\t\t<div class=\"is-box-checkbox\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" data-index=\"" + $indexRow + "\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t");
                        }
                        else if (column.template) {
                            var tdStyleName = column._size_ && !column.width ? column._size_ : "";
                            tdStyleName += " ";
                            tdStyleName += $indexCol === 0 ? "is-first-cell" : $indexCol === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                            tmp_cell = jquery("<td style=\"" + style + "\" class=\"" + tdStyleName + "\"></td>");
                            _idom_.patch(tmp_cell[0], column.template, $row);
                        }
                        else if (column.render) {
                            var tdStyleName = column._size_ && !column.width ? column._size_ : "";
                            tdStyleName += " ";
                            tdStyleName += $indexCol === 0 ? "is-first-cell" : $indexCol === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                            tmp_cell = jquery("\n\t\t\t\t\t\t<td style=\"" + style + "\" class=\"" + tdStyleName + "\">\n\t\t\t\t\t\t\t" + column.render($row) + "\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t");
                        }
                        else if (column.renderElement) {
                            var tdStyleName = column._size_ && !column.width ? column._size_ : "";
                            tdStyleName += " ";
                            tdStyleName += $indexCol === 0 ? "is-first-cell" : $indexCol === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                            tmp_cell = jquery("<td style=\"" + style + "\" class=\"" + tdStyleName + "\"></td>");
                            tmp_cell.append(column.renderElement($row).element);
                        }
                        else {
                            var tdStyleName = column._size_ && !column.width ? column._size_ : "";
                            tdStyleName += " ";
                            tdStyleName += $indexCol === 0 ? "is-first-cell" : $indexCol === $dataGrid.columns.length - 1 ? "is-last-cell" : "";
                            tmp_cell = jquery("\n\t\t\t\t\t\t\t<td style=\"" + style + "\" class=\"" + tdStyleName + "\">\n\t\t\t\t\t\t\t\t" + $dataGrid.getValueByPath($row, column.name) + "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t");
                        }
                        tmp_row.append(tmp_cell);
                    });
                    tmp_tbody_1.append(tmp_row);
                });
            }
            else {
                var tmp_tbody = _tmptable.find("tbody:first");
                tmp_tbody.html("");
            }
            if ($dataGrid.blocked) {
                jquery($dataGrid.element)
                    .append("<div class=\"DataGridBlockContainer\"></div>");
            }
            else {
                jquery($dataGrid.element)
                    .children(".DataGridBlockContainer:first")
                    .remove();
            }
            if ($dataGrid.infiniteScroll || $dataGrid.height) {
                this.verifyScroll();
            }
        };
        DataGrid.prototype.verifyScroll = function () {
            var item = jquery(this.element).find("table:first").find("tbody");
            var hasScroll = item.get(0).scrollHeight > item.height();
            var elementTHead = jquery(this.element).find("table:first").find("thead");
            var elementTbody = jquery(this.element).find("table:first").find("tbody");
            if (hasScroll) {
                elementTbody.find("tr").css({ "width": "calc( 100% + 18px )" });
            }
            else {
                elementTbody.find("tr").css({ "width": "100%" });
            }
        };
        DataGrid.prototype.getValueByPath = function (item, path) {
            var $_this = this;
            var valueGroup = path.split(".").reduce(function (prev, curr) {
                return prev && prev[curr] ? prev[curr] : null;
            }, item || this);
            return valueGroup;
        };
        DataGrid.prototype.refresh = function () {
            this.refreshRender();
            return this;
        };
        DataGrid.prototype.block = function (block) {
            this.blocked = block;
            return this;
        };
        DataGrid.prototype.addSort = function (index, asc) {
            var _this = this;
            var newSortingDirection = (asc) ? e_data_grid_1.EDataGridSortingDirection.ASCENDING : e_data_grid_1.EDataGridSortingDirection.DESCENDING;
            var shouldRemove = false;
            if (newSortingDirection === this.columns[index].sortingDirection) {
                delete this.columns[index].sortingDirection;
                shouldRemove = true;
            }
            else {
                shouldRemove = false;
                this.columns[index].sortingDirection = newSortingDirection;
            }
            var indexOf = jquery.inArray(index, this.sortingColumns);
            if (indexOf === -1) {
                this.sortingColumns[this.sortingColumns.length] = index;
            }
            else if (shouldRemove) {
                this.sortingColumns.splice(indexOf, 1);
            }
            var orderedSortingColumns = [];
            this.sortingColumns.forEach(function (idx) {
                orderedSortingColumns.push(_this.columns[idx]);
            });
            if (this.autoSort) {
                this.columns[index].sortingDirection = newSortingDirection;
                this.sortingColumns = [index];
                var columnOrder_1 = this.columns[index];
                this.columns
                    .filter(function (col) { return (col.name !== columnOrder_1.name); })
                    .forEach(function (col) { return col.sortingDirection = e_data_grid_1.EDataGridSortingDirection.NONE; });
                this.onSortingChange.emit([columnOrder_1]).done(function () {
                    if (columnOrder_1.sortingDirection === e_data_grid_1.EDataGridSortingDirection.ASCENDING) {
                        _this.setData(_this.getData().sort(function (a, b) {
                            return a[columnOrder_1.name] >= b[columnOrder_1.name] ? 1 : -1;
                        }));
                    }
                    else if (columnOrder_1.sortingDirection === e_data_grid_1.EDataGridSortingDirection.DESCENDING) {
                        _this.setData(_this.getData().sort(function (a, b) {
                            return a[columnOrder_1.name] <= b[columnOrder_1.name] ? 1 : -1;
                        }));
                    }
                });
            }
            else {
                this.onSortingChange.emit(orderedSortingColumns);
            }
            this.refresh();
        };
        DataGrid.prototype.selectRow = function (index, isDbClick) {
            isDbClick = isDbClick ? isDbClick : false;
            if (this.singleSelection) {
                this.clearSelection();
            }
            var indexOf = jquery.inArray(index, this.selectedData);
            if (indexOf === -1) {
                this.selectedData[this.selectedData.length] = index;
                jquery(this.element)
                    .find("tbody:first")
                    .children("tr:eq(" + index + ")")
                    .addClass("active");
            }
            else {
                this.selectedData.splice(indexOf, 1);
                jquery(this.element)
                    .find("tbody:first")
                    .children("tr:eq(" + index + ")")
                    .removeClass("active");
            }
            if (isDbClick) {
                this.onDoubleClick.emit(this.data[index]);
            }
            else {
                this.onItemSelect.emit(this.data[index]);
            }
        };
        DataGrid.prototype.getInfiniteScrollClass = function () {
            return (this.infiniteScroll || this.height) ? "DataGrid-InfiniteScroll" : "";
        };
        return DataGrid;
    }(a_basic_component_1.ABasicComponent));
    exports.DataGrid = DataGrid;
});

//# sourceMappingURL=data-grid.js.map
