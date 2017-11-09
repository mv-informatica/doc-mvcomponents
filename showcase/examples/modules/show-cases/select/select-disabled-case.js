define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectDisabledCase = (function (_super) {
        tslib_1.__extends(SelectDisabledCase, _super);
        function SelectDisabledCase() {
            var _this = _super.call(this) || this;
            var itselect1 = new input_1.Select();
            itselect1
                .setValueField("id")
                .setDescriptionField("name");
            _this.append(itselect1);
            itselect1.setData([
                { id: 1, name: "teste 1" },
                { id: 2, name: "teste 2" },
                { id: 3, name: "teste 3" }
            ]);
            itselect1.setDisabled(true);
            return _this;
        }
        return SelectDisabledCase;
    }(container_1.Form));
    exports.SelectDisabledCase = SelectDisabledCase;
});
