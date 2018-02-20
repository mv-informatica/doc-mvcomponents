define(["require", "exports", "tslib", "jquery", "./text-input", "./input-addon", "./../core/validations", "farbtastic"], function (require, exports, tslib_1, jquery, text_input_1, input_addon_1, validations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColorPickerInput = (function (_super) {
        tslib_1.__extends(ColorPickerInput, _super);
        function ColorPickerInput(p_text) {
            if (p_text === void 0) { p_text = ""; }
            var _this = _super.call(this, p_text) || this;
            _this.setSize(2)
                .append(new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-tint"));
            var $element = jquery(_this.element)
                .addClass("ColorPickerInput")
                .on("change", function () { return _this.updateColor(_this.getValue()); })
                .append("\n\t\t\t\t<div id=\"uid_" + _this._uid + "_2\" style=\"z-index:9999;top:58px;left:5px;display:none;min-height:170px;overflow:auto\" \n\t\t\t\t class=\"select-content dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<div class=\"box_colors_colorpicker\"></div><div class=\"box_color_colorpicker\" style=\"height:32px\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
            var $input = $element.find("input:first")
                .on("blur", function (event) { return _this.onFocusOut(event); })
                .on("focus", function (event) { return _this.onFocos(event); });
            _this.validator.add(validations_1.Validations.color());
            return _this;
        }
        ColorPickerInput.prototype.onFocusOut = function (evt) {
            evt.stopImmediatePropagation();
            this.showColors(false);
        };
        ColorPickerInput.prototype.onFocos = function (evt) {
            evt.stopImmediatePropagation();
            this.showColors(true);
        };
        ColorPickerInput.prototype.updateColor = function (color) {
            jquery("#uid_" + this._uid)
                .find(".addon1:first")
                .css({ "backgroundColor": color })
                .end()
                .find(".box_color_colorpicker:first")
                .css({ "backgroundColor": color });
        };
        ColorPickerInput.prototype.showColors = function (show) {
            var _this = this;
            if (show) {
                var defaultcolor = this.isValid() ? this.getValue() : "#000000";
                jquery("#uid_" + this._uid + "_2")
                    .show()
                    .find(".box_colors_colorpicker:first")
                    .farbtastic({
                    width: 150,
                    callback: function (color) {
                        _this.updateColor(color);
                        _this.setValue(color);
                    }
                });
                this.updateColor(defaultcolor);
                jquery(this.element).addClass("box_visible");
            }
            else {
                jquery("#uid_" + this._uid + "_2")
                    .hide();
                jquery(this.element).removeClass("box_visible");
            }
        };
        ColorPickerInput.prototype.setValue = function (color) {
            this.updateColor(color);
            this.getInput().val(color);
            return this;
        };
        return ColorPickerInput;
    }(text_input_1.TextInput));
    exports.ColorPickerInput = ColorPickerInput;
});

//# sourceMappingURL=color-picker-input.js.map
