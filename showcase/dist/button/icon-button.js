define(["require", "exports", "tslib", "jquery", "./button"], function (require, exports, tslib_1, jquery, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconButton = (function (_super) {
        tslib_1.__extends(IconButton, _super);
        function IconButton() {
            var _this = _super.call(this) || this;
            jquery(_this.element).addClass("btn-icon IconButton ButtonComponent");
            return _this;
        }
        IconButton.prototype.setIcon = function (icon) {
            _super.prototype.setLabel.call(this, "");
            return _super.prototype.setIcon.call(this, icon);
        };
        IconButton.prototype.setLabel = function (label) {
            _super.prototype.setIcon.call(this, "");
            return _super.prototype.setLabel.call(this, label.substr(0, 1));
        };
        return IconButton;
    }(button_1.Button));
    exports.IconButton = IconButton;
});

//# sourceMappingURL=icon-button.js.map
