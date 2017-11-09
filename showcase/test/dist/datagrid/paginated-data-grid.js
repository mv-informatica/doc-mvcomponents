define(["require", "exports", "tslib", "jquery", "../core/event-emitter", "../container/box", "../input/text-input", "../input/select", "./enum/e-data-grid", "../pagination/pagination", "./data-grid"], function (require, exports, tslib_1, jquery, event_emitter_1, box_1, text_input_1, select_1, e_data_grid_1, pagination_1, data_grid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PaginatedDataGrid = (function (_super) {
        tslib_1.__extends(PaginatedDataGrid, _super);
        function PaginatedDataGrid(baseURL) {
            var _this = _super.call(this) || this;
            _this.possiblePageSizes = [];
            jquery(_this.element).addClass("PaginatedDataGrid");
            _this.filterInput = new text_input_1.TextInput().setVisible(false);
            _this.pageSizeSelect = new select_1.Select().setVisible(false);
            _this.grid = new data_grid_1.DataGrid();
            _this.onItemSelect = _this.grid.onItemSelect;
            _this.onSortingChange = _this.grid.onSortingChange;
            _this.onDoubleClick = _this.grid.onDoubleClick;
            _this.pagination = new pagination_1.Pagination(baseURL);
            _this.subscribeToGrid();
            _this.subscribeToPagination();
            _this.buildBasicStore();
            return _this;
        }
        PaginatedDataGrid.prototype.setColumns = function (columns) {
            this.grid.setColumns(columns);
            return this;
        };
        PaginatedDataGrid.prototype.addTableStyle = function () {
            var style = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                style[_i] = arguments[_i];
            }
            (_a = this.grid).addTableStyle.apply(_a, style);
            return this;
            var _a;
        };
        PaginatedDataGrid.prototype.loadPage = function (params, url) {
            var _this = this;
            this.store.onChange.once(function () {
                _this.choosePageSize(params.size);
            });
            this.pagination.loadPage(params, url);
            return this;
        };
        PaginatedDataGrid.prototype.setEmptyText = function (text) {
            this.grid.setEmptyText(text);
            return this;
        };
        PaginatedDataGrid.prototype.getFilterInput = function () {
            console.warn("mv-components: metodo 'PaginatedDataGrid.getFilterInput' será descontinuado apartir da versão 1.1.0!");
            return this.filterInput;
        };
        PaginatedDataGrid.prototype.getGrid = function () {
            return this.grid;
        };
        PaginatedDataGrid.prototype.getPagination = function () {
            return this.pagination;
        };
        PaginatedDataGrid.prototype.setStore = function (store) {
            var _this = this;
            this.store = store;
            this.store.onChange.subscribe(function () {
                _this.grid.setData(_this.store.get());
            });
            this.pagination.setStore(store);
            return this;
        };
        PaginatedDataGrid.prototype.getStore = function () {
            return this.store;
        };
        PaginatedDataGrid.prototype.clear = function () {
            this.getPagination().clear();
            return this;
        };
        PaginatedDataGrid.prototype.attached = function () {
            this.append(this.filterInput);
            this.buildPageSizeSelect();
            this.append(this.grid);
            this.append(this.pagination);
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
            this.grid.attached();
        };
        PaginatedDataGrid.prototype.getPageSizeSelect = function () {
            console.warn("mv-components: metodo 'PaginatedDataGrid.getPageSizeSelect' será descontinuado apartir da versão 1.1.0!");
            return this.pageSizeSelect;
        };
        PaginatedDataGrid.prototype.setPossiblePageSizes = function () {
            var pageSizes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                pageSizes[_i] = arguments[_i];
            }
            this.possiblePageSizes = pageSizes;
            return this;
        };
        PaginatedDataGrid.prototype.subscribeToGrid = function () {
            var _this = this;
            this.grid.onSortingChange.subscribe(function (cols) { return _this.loadSortedPage(cols); });
        };
        PaginatedDataGrid.prototype.loadSortedPage = function (cols) {
            var sort = [];
            cols.forEach(function (c) {
                var direction = (c.sortingDirection === e_data_grid_1.EDataGridSortingDirection.ASCENDING) ? "asc" : "desc";
                sort.push({ "property": c.name, "direction": direction });
            });
            var lastParams = jquery.extend({}, this.pagination.getLastPaginationRequest());
            delete lastParams.page;
            delete lastParams.sort;
            var sortingParams = {
                page: this.pagination.getLastPaginationRequest().page,
                sort: sort
            };
            this.pagination.loadPage(jquery.extend(lastParams, sortingParams));
        };
        PaginatedDataGrid.prototype.subscribeToPagination = function () {
            this.pagination.setStore(this.store);
        };
        PaginatedDataGrid.prototype.buildPageSizeSelect = function () {
            var _this = this;
            this.pageSizeSelect.addStyleName("pull-right");
            this.pageSizeSelect.setValueField("value");
            this.pageSizeSelect.setDescriptionField("description");
            this.pageSizeSelect.setSize(2);
            this.pageSizeSelect.onSelect.subscribe(function (selection) { return _this.changePageSize(selection[0]); });
            var data = [];
            this.getPageSizes().forEach(function (size) {
                data.push({
                    description: new String(size).toString(),
                    value: size
                });
            });
            this.pageSizeSelect.setData(data);
            this.append(this.pageSizeSelect);
        };
        PaginatedDataGrid.prototype.getPageSizes = function () {
            return (this.possiblePageSizes.length > 0) ? this.possiblePageSizes : [10, 25, 50, 100];
        };
        PaginatedDataGrid.prototype.changePageSize = function (pageSize) {
            var lastPaginationRequest = this.pagination.getLastPaginationRequest();
            var lastPaginationResult = this.pagination.getLastPaginationResult();
            if (lastPaginationResult) {
                if (lastPaginationResult.totalElements <= pageSize.value) {
                    lastPaginationRequest.page = 0;
                }
            }
            lastPaginationRequest.size = pageSize.value;
            this.loadPage(lastPaginationRequest);
        };
        PaginatedDataGrid.prototype.choosePageSize = function (pageSize) {
            if (pageSize !== undefined && this.getPageSizes().indexOf(pageSize) !== -1) {
                this.pageSizeSelect.setValue({ description: new String(pageSize).toString(), value: pageSize });
            }
        };
        PaginatedDataGrid.prototype.buildBasicStore = function () {
            this.setStore(new BasicPaginationStore());
        };
        PaginatedDataGrid.prototype.setBotton = function (bottom) {
            this.bottom = bottom;
            return this;
        };
        return PaginatedDataGrid;
    }(box_1.Box));
    exports.PaginatedDataGrid = PaginatedDataGrid;
    var BasicPaginationStore = (function () {
        function BasicPaginationStore() {
            this.data = [];
            this.onChange = new event_emitter_1.EventEmitter();
        }
        BasicPaginationStore.prototype.get = function () {
            return this.data;
        };
        BasicPaginationStore.prototype.set = function (data) {
            this.data = data;
            this.onChange.emit(null);
        };
        return BasicPaginationStore;
    }());
});

//# sourceMappingURL=paginated-data-grid.js.map
