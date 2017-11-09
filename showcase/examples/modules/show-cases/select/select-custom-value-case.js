define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectCustomValueCase = (function (_super) {
        tslib_1.__extends(SelectCustomValueCase, _super);
        function SelectCustomValueCase() {
            var _this = _super.call(this) || this;
            var itselect1 = new input_1.Select();
            itselect1
                .setValueField("id")
                .setDescriptionField("name")
                .setDisplayItem(function (item) { return "<strong>" + item.id + " - </strong> <span>" + item.name + "</span>"; });
            _this.append(itselect1);
            itselect1.setData([
                { id: 1, name: "teste 1" },
                { id: 2, name: "teste 2" },
                { id: 3, name: "teste 3" }
            ]);
            itselect1.setValue({ id: 2, name: "" });
            return _this;
        }
        return SelectCustomValueCase;
    }(container_1.Form));
    exports.SelectCustomValueCase = SelectCustomValueCase;
});
