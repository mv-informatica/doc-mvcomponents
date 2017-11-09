define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisabledShowcase = (function (_super) {
        tslib_1.__extends(DisabledShowcase, _super);
        function DisabledShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(5);
            var fieldset = new container_1.Fieldset("Exemplo");
            fieldset.setEnable(false);
            _this.itDesc = new input_1.TextInput();
            _this.itDesc
                .setLabel("desc")
                .setName("desc")
                .setSize(8);
            fieldset.append(_this.itDesc);
            _this.append(fieldset);
            return _this;
        }
        return DisabledShowcase;
    }(container_1.Form));
    exports.DisabledShowcase = DisabledShowcase;
});
