define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmailInputCase = (function (_super) {
        tslib_1.__extends(EmailInputCase, _super);
        function EmailInputCase() {
            var _this = _super.call(this) || this;
            var txi = new input_1.EmailInput()
                .setLabel("Email:")
                .setPlaceholder("email...");
            _this.append(txi);
            return _this;
        }
        return EmailInputCase;
    }(container_1.Form));
    exports.EmailInputCase = EmailInputCase;
});
