define(["require", "exports", "tslib", "jquery", "./a-base-input", "../assets/css/input.css!", "jquery.maskedinput/src/jquery.maskedinput.js"], function (require, exports, tslib_1, jquery, a_base_input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IAddonPosition;
    (function (IAddonPosition) {
        IAddonPosition[IAddonPosition["RIGHT"] = 0] = "RIGHT";
        IAddonPosition[IAddonPosition["LEFT"] = 1] = "LEFT";
    })(IAddonPosition || (IAddonPosition = {}));
    var AInput = (function (_super) {
        tslib_1.__extends(AInput, _super);
        function AInput(tipo, valor) {
            if (valor === void 0) { valor = null; }
            var _this = _super.call(this, 'div', '') || this;
            _this.render();
            if (tipo) {
                _this.getInput()
                    .attr('type', tipo)
                    .val(valor);
            }
            return _this;
        }
        AInput.prototype.render = function () {
            jquery(this.element)
                .addClass("form-group col-xs-12 col-sm-4 col-md-4")
                .append("\n\t\t\t\t<label class=\"control-label\" for=\"input_" + this._uid + "\" style=\"display:none\"></label>\n\t\t\t\t<div class=\"col-xs-12 input-group input-group-sm no-addon\">\n\t\t\t\t\t<input class=\"form-control cposi_2 cposis\" id=\"input_" + this._uid + "\">\n\t\t\t\t</div>\n\t\t\t");
            return this;
        };
        AInput.prototype.getInput = function () {
            return jquery(this.element).find("input:first");
        };
        AInput.prototype.insertAddon = function (method, addon) {
            var $container = jquery(this.element).children('div.input-group').removeClass("no-addon");
            $container[method](addon.element);
            return this;
        };
        AInput.prototype.append = function (addon) {
            return this.insertAddon('append', addon);
        };
        AInput.prototype.prepend = function (addon) {
            return this.insertAddon('prepend', addon);
        };
        AInput.prototype.setPlaceholder = function (p_placeholder) {
            this.getInput().attr("placeholder", p_placeholder);
            return this;
        };
        AInput.prototype.getValue = function () {
            return this.decode(this.getRawValue());
        };
        AInput.prototype.setDisplayItem = function (display) {
            this.fnDisplayItem = display;
            return this;
        };
        AInput.prototype.setValue = function (value) {
            if (this.fnDisplayItem) {
                this.setRawValue(this.encode(this.fnDisplayItem(value)));
            }
            else {
                this.setRawValue(this.encode(value));
            }
            return this;
        };
        AInput.prototype.getRawValue = function () {
            return this.getInput().val();
        };
        AInput.prototype.setRawValue = function (value) {
            this.getInput().val(value);
            return this;
        };
        return AInput;
    }(a_base_input_1.ABaseInput));
    exports.AInput = AInput;
});

//# sourceMappingURL=a-input.js.map
