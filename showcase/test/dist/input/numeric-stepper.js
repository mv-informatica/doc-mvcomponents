define(["require", "exports", "tslib", "./abstract/a-input", "../component/enum/e-input-event", "../component/enum/e-mouse-event", "./input-addon", "jquery", "./assets/css/numeric-stepper.css!"], function (require, exports, tslib_1, a_input_1, e_input_event_1, e_mouse_event_1, input_addon_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumericStepper = (function (_super) {
        tslib_1.__extends(NumericStepper, _super);
        function NumericStepper() {
            var _this = _super.call(this, "text", "") || this;
            _this.setMax(9999)
                .setMin(0)
                .setStep(1)
                .addStyleName("NumericStepper");
            _this.incrementHandler = new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-triangle-top");
            _this.decrementHandler = new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-triangle-bottom");
            jquery(_this.element).find(".input-group-btn-vertical:first")
                .append(_this.incrementHandler.element)
                .append(_this.decrementHandler.element);
            _this.incrementHandler.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function (event) { return _this.increaseValue(); });
            _this.decrementHandler.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function (event) { return _this.reduceValue(); });
            _this.addEvent(e_input_event_1.EInputEvent.CHANGE, function () { return _this.refreshHandlers(); });
            _this.incrementHandler.addStyleName("btn").setCssProperties({ "padding": "0px" });
            _this.decrementHandler.addStyleName("btn").setCssProperties({ "padding": "0px" });
            return _this;
        }
        NumericStepper.prototype.render = function () {
            jquery(this.element)
                .addClass("form-group col-xs-12 col-sm-4 col-md-4")
                .append("\n\t\t\t\t<label class=\"control-label\" for=\"inputIcon_" + this._uid + "\" style=\"display:none\"></label>\n\t\t\t\t<div class=\"col-xs-12 input-group input-group-sm\">\n\t\t\t\t\t<input class=\"form-control cposi_2 cposis\" id=\"inputIcon_" + this._uid + "\">\n\t\t\t\t\t<div class=\"input-group-btn-vertical\"></div>\n\t\t\t\t</div>                \n\t\t\t");
            return this;
        };
        NumericStepper.prototype.setValue = function (value) {
            this.getInput().val("" + value);
            this.fireEvent(e_input_event_1.EInputEvent.CHANGE);
            return this;
        };
        NumericStepper.prototype.encode = function (value) {
            return value && value.toString();
        };
        NumericStepper.prototype.decode = function (value) {
            return value && parseFloat(value);
        };
        NumericStepper.prototype.refreshHandlers = function () {
            var value = this.getValue();
            this.incrementHandler.setDisabled(value >= this.maxvl);
            this.decrementHandler.setDisabled(value <= this.minvl);
        };
        NumericStepper.prototype.increaseValue = function () {
            return this.setValue(Math.min((this.getValue() || 0) + this.stepvl, this.maxvl));
        };
        NumericStepper.prototype.reduceValue = function () {
            return this.setValue(Math.max((this.getValue() || 0) - this.stepvl, this.minvl));
        };
        NumericStepper.prototype.setMin = function (min) {
            this.minvl = min;
            this.getInput().attr("min", min);
            return this;
        };
        NumericStepper.prototype.setMax = function (max) {
            this.maxvl = max;
            this.getInput().attr("max", max);
            return this;
        };
        NumericStepper.prototype.setStep = function (step) {
            this.stepvl = step;
            this.getInput().attr("step", step);
            return this;
        };
        NumericStepper.prototype.setPlaceholder = function (placeholder) {
            this.getInput().attr("placeholder", placeholder);
            return this;
        };
        return NumericStepper;
    }(a_input_1.AInput));
    exports.NumericStepper = NumericStepper;
});

//# sourceMappingURL=numeric-stepper.js.map
