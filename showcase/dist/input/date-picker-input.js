define(["require", "exports", "tslib", "moment", "./abstract/a-input", "./input-addon", "bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css!", "bootstrap-datepicker", "bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min", "bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min"], function (require, exports, tslib_1, moment, a_input_1, input_addon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EDatePickerStartType;
    (function (EDatePickerStartType) {
        EDatePickerStartType[EDatePickerStartType["month"] = 0] = "month";
        EDatePickerStartType[EDatePickerStartType["year"] = 1] = "year";
        EDatePickerStartType[EDatePickerStartType["decade"] = 2] = "decade";
    })(EDatePickerStartType = exports.EDatePickerStartType || (exports.EDatePickerStartType = {}));
    var EDatePartType;
    (function (EDatePartType) {
        EDatePartType[EDatePartType["day"] = 0] = "day";
        EDatePartType[EDatePartType["month"] = 1] = "month";
        EDatePartType[EDatePartType["year"] = 2] = "year";
    })(EDatePartType = exports.EDatePartType || (exports.EDatePartType = {}));
    var DatePickerInput = (function (_super) {
        tslib_1.__extends(DatePickerInput, _super);
        function DatePickerInput(options) {
            if (options === void 0) { options = {}; }
            var _this = _super.call(this, "text", "") || this;
            _this
                .addStyleName("DatePickerInput")
                .append(new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-calendar"));
            _this.setSize(3);
            var config = Object.assign({
                todayBtn: "linked",
                autoclose: true,
                todayHighlight: true
            }, options);
            options.format = options.format || "DD[/]MM[/]YYYY";
            config.format = options.format.replace(/\[|\]/g, "").toLowerCase();
            _this.format = options.format;
            _this.getInput().datepicker(config);
            return _this;
        }
        DatePickerInput.prototype.encode = function (value) {
            return value && moment(value).format(this.format);
        };
        DatePickerInput.prototype.decode = function (value) {
            return value && moment(value, this.format).toDate();
        };
        DatePickerInput.prototype.setMask = function (mask) {
            this.getInput().mask(mask);
            return this;
        };
        return DatePickerInput;
    }(a_input_1.AInput));
    exports.DatePickerInput = DatePickerInput;
});

//# sourceMappingURL=date-picker-input.js.map
