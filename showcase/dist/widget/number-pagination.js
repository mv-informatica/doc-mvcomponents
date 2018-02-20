define(["require", "exports", "tslib", "../container/box", "../core/event-emitter", "jquery", "twbs-pagination"], function (require, exports, tslib_1, box_1, event_emitter_1, _jq) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberPagination = (function (_super) {
        tslib_1.__extends(NumberPagination, _super);
        function NumberPagination(config) {
            var _this = _super.call(this) || this;
            _this.onSelectPage = new event_emitter_1.EventEmitter();
            _this.setSize(12);
            _this.config = Object.assign({}, {
                page: 1,
                rowsPerPage: 5,
                visiblePages: 4
            }, config);
            _this.refresh();
            var _this_ = _this;
            return _this;
        }
        NumberPagination.prototype.setRowsPerPage = function (rowsPerPage) {
            this.config.rowsPerPage = rowsPerPage;
            return this;
        };
        NumberPagination.prototype.setVisiblePages = function (visiblePages) {
            this.config.visiblePages = visiblePages;
            return this;
        };
        NumberPagination.prototype.setCount = function (count) {
            this.config.count = count;
            return this;
        };
        NumberPagination.prototype.setPage = function (page) {
            this.config.page = page;
            return this;
        };
        NumberPagination.prototype.refresh = function () {
            var _this_ = this;
            var totalPages = parseInt((_this_.config.count / _this_.config.rowsPerPage) + "") + 1;
            _jq(this.element)
                .find(".pagination-box:first")
                .remove();
            _jq(this.element).append("<ul class=\"pagination-box\" style=\"margin-top: 0px\"></ul>");
            _jq(this.element)
                .find(".pagination-box:first")
                .twbsPagination({
                totalPages: totalPages,
                visiblePages: _this_.config.visiblePages,
                startPage: _this_.config.page,
                onPageClick: function (event, page) {
                    if (page !== _this_.config.page) {
                        _this_.config.page = page;
                        _this_.onSelectPage.emit(_this_.config.page);
                    }
                },
                first: "Primeira",
                prev: "Anterior",
                next: "Próxima",
                last: "Última"
            });
        };
        return NumberPagination;
    }(box_1.Box));
    exports.NumberPagination = NumberPagination;
});

//# sourceMappingURL=number-pagination.js.map
