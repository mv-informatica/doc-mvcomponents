define(["require", "exports", "tslib", "../core/decorator/d-render", "../http/http", "jquery", "./assets/css/pagination.css!"], function (require, exports, tslib_1, d_render_1, http_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pagination = (function () {
        function Pagination(baseURL) {
            this.visiblePageNumbers = [];
            this.visiblePageNumbersTotal = 5;
            this.pageSize = 20;
            this.previousButtonDisabledClass = "disabled";
            this.nextButonDisabledClass = "disabled";
            this.lastURL = baseURL;
        }
        Pagination.prototype.loadPage = function (params, p_link) {
            var _this = this;
            p_link = (p_link) ? p_link : this.lastURL;
            if (params.size === undefined) {
                params.size = this.pageSize;
            }
            else {
                this.pageSize = params.size;
            }
            this.lastPaginationRequest = jquery.extend({}, params);
            params = this.prepareSortingParams(params);
            http_1.$http
                .get(p_link)
                .params(params, true)
                .then(function (dta) { return _this.onPaginationResultReceived(dta); });
            this.lastURL = p_link;
            return this;
        };
        Pagination.prototype.setStore = function (store) {
            this.store = store;
            return this;
        };
        Pagination.prototype.setTotalOfVisibleLinks = function (total) {
            this.visiblePageNumbersTotal = total;
            return this;
        };
        Pagination.prototype.getLastPaginationRequest = function () {
            return this.lastPaginationRequest;
        };
        Pagination.prototype.getLastPaginationResult = function () {
            return this.paginationResult;
        };
        Pagination.prototype.getLastURL = function () {
            return this.lastURL;
        };
        Pagination.prototype.getPaginationInfo = function () {
            var lastResult = this.getLastPaginationResult();
            if (lastResult === undefined || lastResult.number === undefined || this.paginationInfoTemplate === undefined) {
                return "";
            }
            var from = (lastResult.number * lastResult.size) + 1;
            var to = (lastResult.number * lastResult.size) + lastResult.size;
            to = (to > lastResult.totalElements) ? lastResult.totalElements : to;
            var info = this.paginationInfoTemplate
                .replace("{from}", new String(from).toString())
                .replace("{to}", new String(to).toString())
                .replace("{of}", new String(lastResult.totalElements).toString());
            return info;
        };
        Pagination.prototype.setPaginationInfoTemplate = function (template) {
            this.paginationInfoTemplate = template;
            return this;
        };
        Pagination.prototype.clear = function () {
            this.lastPaginationRequest = undefined;
            this.paginationResult = { number: undefined };
            this.store.set([]);
            this.visiblePageNumbers = [];
            this.refresh();
            return this;
        };
        Pagination.prototype.attached = function () {
        };
        Pagination.prototype.prepareSortingParams = function (params) {
            if (!params.sort) {
                return params;
            }
            var sortingParams = [];
            params.sort.forEach(function (pagingInfo) {
                var info = [pagingInfo.property, pagingInfo.direction].join(",");
                sortingParams.push(info);
            });
            params.sort = sortingParams;
            return params;
        };
        Pagination.prototype.onPaginationResultReceived = function (paginationResult) {
            this.paginationResult = paginationResult;
            this.calculateVisiblePageNumbers();
            this.store.set(paginationResult.content);
            this.refresh();
        };
        Pagination.prototype.calculateVisiblePageNumbers = function (startPage) {
            this.visiblePageNumbersTotal = (this.visiblePageNumbersTotal === 0) ? this.paginationResult.totalPages : this.visiblePageNumbersTotal;
            startPage = (!startPage) ? (this.paginationResult.number + 1) : startPage;
            startPage = (startPage > this.paginationResult.totalPages) ? this.paginationResult.totalPages : startPage;
            var lastVisiblePageNumber = this.visiblePageNumbers[this.visiblePageNumbers.length - 1];
            var isLastGroup = lastVisiblePageNumber === this.paginationResult.totalPages;
            var totalPageNumbers = this.visiblePageNumbersTotal;
            if (this.pageSize >= this.paginationResult.totalPages || (this.paginationResult.totalPages > this.pageSize && totalPageNumbers > this.paginationResult.totalPages)) {
                startPage = 1;
                totalPageNumbers = this.paginationResult.totalPages;
            }
            else if ((!((startPage % this.visiblePageNumbersTotal) === 1 || (startPage % this.visiblePageNumbersTotal === 0)) || (startPage % this.visiblePageNumbersTotal === 0)) && !isLastGroup) {
                for (var p = startPage; p > 0; p--) {
                    if (p % this.visiblePageNumbersTotal === 1) {
                        startPage = p;
                        break;
                    }
                }
            }
            else if (startPage + this.visiblePageNumbersTotal > this.paginationResult.totalPages) {
                startPage = (this.paginationResult.totalPages - (this.visiblePageNumbersTotal - 1));
            }
            if (this.needsRecalculateVisiblePageNumbers(startPage)) {
                var arr = Array.apply(null, Array(totalPageNumbers));
                this.visiblePageNumbers = arr.map(function (x, i) { return (startPage + i); });
            }
        };
        Pagination.prototype.needsRecalculateVisiblePageNumbers = function (startPage) {
            return true;
        };
        Pagination.prototype.nextVisiblePageNumbers = function () {
            var lastVisiblePageNumber = this.visiblePageNumbers[this.visiblePageNumbers.length - 1];
            if (lastVisiblePageNumber >= this.paginationResult.totalPages) {
                return;
            }
            this.calculateVisiblePageNumbers(lastVisiblePageNumber + 1);
            this.refresh();
        };
        Pagination.prototype.previousVisiblePageNumbers = function () {
            var firstVisiblePageNumber = this.visiblePageNumbers[0];
            var page = firstVisiblePageNumber - this.visiblePageNumbersTotal;
            page = (page <= 0 ? 1 : page);
            if (firstVisiblePageNumber === 1 || page < 0) {
                return;
            }
            this.calculateVisiblePageNumbers(page);
            this.refresh();
        };
        Pagination.prototype.requestPage = function (page) {
            var request = {
                "page": page,
                "size": this.pageSize
            };
            if (this.lastPaginationRequest && this.lastPaginationRequest.sort) {
                request.sort = this.lastPaginationRequest.sort;
            }
            if (this.lastPaginationRequest) {
                delete this.lastPaginationRequest.page;
                delete this.lastPaginationRequest.size;
                request = jquery.extend({}, request, this.lastPaginationRequest);
            }
            this.loadPage(request);
        };
        Pagination.prototype.refresh = function () {
            this.refreshRender();
        };
        Pagination.prototype.getNavigationButtonClass = function (btn) {
            switch (btn) {
                case "prev":
                    return (this.visiblePageNumbers[0] === 1) ? "disabled" : "";
                case "next":
                    return (this.visiblePageNumbers[this.visiblePageNumbers.length - 1] === this.paginationResult.totalPages) ? "disabled" : "";
                default:
                    return "";
            }
        };
        return Pagination;
    }());
    Pagination = tslib_1.__decorate([
        d_render_1.Render({
            templateUrl: "mvcomponents/pagination/assets/html/pagination.template"
        })
    ], Pagination);
    exports.Pagination = Pagination;
});

//# sourceMappingURL=pagination.js.map
