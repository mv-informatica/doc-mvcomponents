define(["require", "exports", "tslib", "./a-input"], function (require, exports, tslib_1, a_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ATextInput = (function (_super) {
        tslib_1.__extends(ATextInput, _super);
        function ATextInput() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.blankWhenNull = false;
            _this.nullable = false;
            return _this;
        }
        ATextInput.prototype.setMask = function (mask) {
            this.getInput().mask(mask);
            return this;
        };
        ATextInput.prototype.setBlankWhenNull = function (on) {
            this.blankWhenNull = on;
            return this;
        };
        ATextInput.prototype.isBlankWhenNull = function () {
            return this.blankWhenNull;
        };
        ATextInput.prototype.setNullable = function (on) {
            this.nullable = on;
            return this;
        };
        ATextInput.prototype.isNullable = function () {
            return this.nullable;
        };
        ATextInput.prototype.getValue = function () {
            var value = _super.prototype.getValue.call(this);
            return value || (this.isBlankWhenNull() ? '' : null);
        };
        ATextInput.prototype.getRawValue = function () {
            return this.getInput().val();
        };
        ATextInput.prototype.setRawValue = function (value) {
            if (value === null && this.isNullable()) {
                this.getInput().val('null');
            }
            else {
                this.getInput().val(value);
            }
            return this;
        };
        ATextInput.prototype.setMaxLength = function (value) {
            this.getInput().attr("maxlength", value);
            return this;
        };
        ATextInput.prototype.decode = function (value) {
            return value;
        };
        ATextInput.prototype.encode = function (value) {
            return value;
        };
        return ATextInput;
    }(a_input_1.AInput));
    exports.ATextInput = ATextInput;
});

//# sourceMappingURL=a-text-input.js.map
