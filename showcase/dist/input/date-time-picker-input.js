define(["require", "exports", "tslib", "../button/button", "jquery", "moment", "./abstract/a-input", "./input-addon", "./numeric-stepper", "mvcomponents/component", "./assets/css/date-time-picker-input.css!"], function (require, exports, tslib_1, button_1, jquery, moment, a_input_1, input_addon_1, numeric_stepper_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateTimePickerInput = (function (_super) {
        tslib_1.__extends(DateTimePickerInput, _super);
        function DateTimePickerInput(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, "text", "") || this;
            var inputAddonChooseDate = new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-calendar");
            _this
                .addStyleName("ui-date-picker-timer-input")
                .append(inputAddonChooseDate);
            _this.setSize(3);
            var config = Object.assign({
                todayBtn: "linked",
                todayHighlight: true,
                inline: true,
                language: "pt-BR",
            }, options);
            options.format = options.format || "DD[/]MM[/]YYYY HH:mm";
            _this.format = options.format;
            jquery(_this.element).append("\n\t\t\t<div class=\"backdrop\"></div>\n\t\t\t<div class=\"box-date-picker-input\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"date-box\"></div>\n\t\t\t\t\t<div class=\"inputs-box\"></div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t");
            var dateBox = jquery(_this.element)
                .find(".date-box:first");
            dateBox
                .datepicker(config)
                .on("changeDate", function (evt) {
                _this.selectedDate = evt.date;
            });
            jquery(_this.element)
                .find(".backdrop:first")
                .on("click", function () {
                _this.removeStyleName("is-showing");
            });
            _this.hourInput = new numeric_stepper_1.NumericStepper()
                .setMax(23)
                .setSize(4)
                .setMin(0)
                .setLabel("Hora");
            _this.minuteInput = new numeric_stepper_1.NumericStepper()
                .setMax(59)
                .setSize(4)
                .setMin(0)
                .setLabel("Minutos");
            var btClose = new button_1.Button("Ok");
            btClose
                .setColor(component_1.EBasicColorStatus.PRIMARY)
                .setHorizontalAlign(component_1.EHorizontalAlign.RIGHT)
                .setVerticalAlign(component_1.EVerticalAlign.BOTTOM);
            btClose.addEvent(component_1.EMouseEvent.CLICK, function () {
                var hours = Number(_this.hourInput.getValue()) || 0;
                var mins = Number(_this.minuteInput.getValue()) || 0;
                _this.selectedDate = _this.selectedDate || new Date();
                _this.selectedDate.setHours(hours, mins);
                _this.removeStyleName("is-showing");
                _this.setValue(_this.selectedDate);
            });
            jquery(_this.element)
                .find(".inputs-box:first")
                .append(_this.hourInput.element)
                .append(_this.minuteInput.element)
                .append(btClose.element);
            inputAddonChooseDate.addEvent(component_1.EMouseEvent.CLICK, _this.showHandler.bind(_this));
            jquery(_this.element)
                .find("input:first")
                .on("click", _this.showHandler.bind(_this));
            return _this;
        }
        DateTimePickerInput.prototype.showHandler = function (evt) {
            if (this.hasStyleName("is-showing")) {
                this.removeStyleName("is-showing");
                return;
            }
            var dateBox = jquery(this.element)
                .find(".date-box:first");
            this.addStyleName("is-showing");
            var dtaAtual = this.getValue() || new Date();
            this.hourInput.setValue(dtaAtual.getHours());
            this.minuteInput.setValue(dtaAtual.getMinutes());
            dateBox.datepicker("setDates", new Date(dtaAtual.getFullYear(), dtaAtual.getMonth(), dtaAtual.getDate()));
        };
        DateTimePickerInput.prototype.encode = function (value) {
            return value && moment(value).format(this.format);
        };
        DateTimePickerInput.prototype.decode = function (value) {
            return value && moment(value, this.format).toDate();
        };
        DateTimePickerInput.prototype.setMask = function (mask) {
            return this;
        };
        return DateTimePickerInput;
    }(a_input_1.AInput));
    exports.DateTimePickerInput = DateTimePickerInput;
});

//# sourceMappingURL=date-time-picker-input.js.map
