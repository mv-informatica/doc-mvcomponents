define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectOneKeyCase = (function (_super) {
        tslib_1.__extends(SelectOneKeyCase, _super);
        function SelectOneKeyCase() {
            var _this = _super.call(this) || this;
            var itselect1 = new input_1.Select();
            itselect1
                .setValueField("user")
                .setDescriptionField("user");
            _this.append(itselect1);
            itselect1.setData([
                { user: "pablo@teste.com.br" },
                { user: "mario@ids.com.br" },
                { user: "mariana.sicrano@gbail.com" }
            ]);
            return _this;
        }
        return SelectOneKeyCase;
    }(container_1.Form));
    exports.SelectOneKeyCase = SelectOneKeyCase;
});
