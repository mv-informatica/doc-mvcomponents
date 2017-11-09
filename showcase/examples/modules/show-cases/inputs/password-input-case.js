define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PasswordInputCase = (function (_super) {
        tslib_1.__extends(PasswordInputCase, _super);
        function PasswordInputCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.PasswordInput()
                .setLabel("Senha:")
                .setPlaceholder("senha...");
            _this.append(txi);
            return _this;
        }
        return PasswordInputCase;
    }(container_1.Form));
    exports.PasswordInputCase = PasswordInputCase;
});
