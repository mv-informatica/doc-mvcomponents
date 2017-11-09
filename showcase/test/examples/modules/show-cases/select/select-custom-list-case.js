define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectCustomListCase = (function (_super) {
        tslib_1.__extends(SelectCustomListCase, _super);
        function SelectCustomListCase() {
            var _this = _super.call(this) || this;
            var itselect1 = new input_1.Select();
            itselect1
                .setValueField("id")
                .setDescriptionField("name")
                .setDisplayListItem(function (item) { return "\n\t\t\t\t<i class=\"" + item.icon + "\" style=\"float:left;margin:2px 5px 0 0\"></i>\n\t\t\t\t<strong>" + item.id + " - </strong> \n\t\t\t\t<span>" + item.name + "</span>\n\t\t\t"; });
            _this.append(itselect1);
            itselect1.setData([
                { id: 1, name: "bom", icon: "mv-basico-desempenho_bom" },
                { id: 2, name: "médio", icon: "mv-basico-desempenho_medio" },
                { id: 3, name: "ruim", icon: "mv-basico-desempenho_ruim" }
            ]);
            return _this;
        }
        return SelectCustomListCase;
    }(container_1.Form));
    exports.SelectCustomListCase = SelectCustomListCase;
});
