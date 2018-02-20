define(["require", "exports", "tslib", "mvcomponents/core"], function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeaderNameGrid = (function () {
        function HeaderNameGrid(row) {
            this.title = row.title;
        }
        HeaderNameGrid.prototype.attached = function () {
            this.element.className = 'col-xs-8';
        };
        HeaderNameGrid.prototype.toogleCheck = function () {
            this.checked = !this.checked;
            this.refreshRender();
        };
        HeaderNameGrid.prototype.testeGid = function () {
            alert('clicado:' + this.checked);
        };
        return HeaderNameGrid;
    }());
    HeaderNameGrid = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "test/examples/modules/show-cases/datagrid/template/header-name-grid"
        })
    ], HeaderNameGrid);
    exports.HeaderNameGrid = HeaderNameGrid;
});
