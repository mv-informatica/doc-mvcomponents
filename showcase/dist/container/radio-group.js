define(["require", "exports", "tslib", "../component/abstract/a-visual-component", "../core/validator", "../input/abstract/a-base-input", "jquery"], function (require, exports, tslib_1, a_visual_component_1, validator_1, a_base_input_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioGroup = (function (_super) {
        tslib_1.__extends(RadioGroup, _super);
        function RadioGroup(label) {
            if (label === void 0) { label = ""; }
            var _this = _super.call(this, "div", "<label class=\"control-label\"></label><div class=\"input-group\"></div>") || this;
            _this.cleanable = true;
            _this.valid = false;
            _this.dirty = false;
            _this.defaultvalue = null;
            _this.validator = new validator_1.Validator();
            _this.setLabel(label);
            jquery(_this.element)
                .addClass("RadioGroup form-group col-sm-12 col-xs-12")
                .css({ "margin-bottom": "10px" })
                .on("change", "input", function () { return _this.validate(); });
            _this.validator.onValidate.subscribe(function (errors) { return _this.onValidate(errors); });
            return _this;
        }
        RadioGroup.prototype.attached = function () {
            this.validate();
        };
        RadioGroup.prototype.isValid = function () {
            return this.valid;
        };
        RadioGroup.prototype.validate = function () {
            return this.validator.validate(this.getValue());
        };
        RadioGroup.prototype.onValidate = function (errors) {
            var isValid = this.valid = errors.length === 0;
            this.markInvalid(!isValid);
        };
        RadioGroup.prototype.markInvalid = function (invalid) {
            jquery(this.element)[invalid && this.isDirty() ? "addClass" : "removeClass"]("is-invalid has-error");
            return this;
        };
        RadioGroup.prototype.isDirty = function () {
            return this.dirty;
        };
        RadioGroup.prototype.setLabel = function (label) {
            jquery(this.element).find("label").html(label);
            return this;
        };
        RadioGroup.prototype.setDirty = function (dirty) {
            this.dirty = dirty;
            return this;
        };
        RadioGroup.prototype.setName = function (name) {
            this.name = name;
            return this;
        };
        RadioGroup.prototype.getName = function () {
            return this.name;
        };
        RadioGroup.prototype.setDefaultValue = function (value) {
            this.defaultvalue = value;
            return this;
        };
        RadioGroup.prototype.getDefaultValue = function () {
            return this.defaultvalue;
        };
        RadioGroup.prototype.reset = function () {
            return this.setValue(this.getDefaultValue());
        };
        RadioGroup.prototype.setCleanable = function (cleanable) {
            this.cleanable = cleanable;
            return this;
        };
        RadioGroup.prototype.isCleanable = function () {
            return this.cleanable;
        };
        RadioGroup.prototype.insertElement = function (item, method) {
            item.setName(this.name);
            jquery(this.element).find(".input-group:first")[method](item.element);
        };
        RadioGroup.prototype.append = function (item) {
            this.insertElement(item, "append");
            return this;
        };
        RadioGroup.prototype.prepend = function (item) {
            this.insertElement(item, "append");
            return this;
        };
        RadioGroup.prototype.getValue = function () {
            return jquery(this.element).find("input:checked").val() || null;
        };
        RadioGroup.prototype.getRawValue = function () {
            var value = this.getValue();
            return value && value.toString();
        };
        RadioGroup.prototype.setValue = function (value) {
            var $el = jquery(this.element);
            $el.find("input")
                .removeAttr("checked");
            $el
                .find("input[value=\"" + value + "\"]")
                .prop("checked", true);
            return this;
        };
        RadioGroup.prototype.setDisabled = function (disabled) {
            jquery(this.element)
                .prop("disabled", disabled)
                .find("input")
                .prop("disabled", disabled);
            return this;
        };
        RadioGroup.prototype.setEnable = function (enable) {
            this.setDisabled(!enable);
            return this;
        };
        RadioGroup.prototype.isDisabled = function () {
            return jquery(this.element).prop("disabled");
        };
        RadioGroup.prototype.focus = function () {
            jquery(this.element).find("input:first").focus();
            return this;
        };
        RadioGroup.prototype.addEvent = function (type, event_fn) {
            _super.prototype.addEvent.call(this, type, event_fn);
        };
        RadioGroup.prototype.fireEvent = function (type) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return _super.prototype.fireEvent.call(this, type, params);
        };
        RadioGroup.prototype.markRequired = function (required) {
            a_base_input_1.ABaseInput.prototype.markRequired.apply(this, [required]);
            return this;
        };
        RadioGroup.prototype.setRequired = function (required) {
            a_base_input_1.ABaseInput.prototype.setRequired.apply(this, [required]);
            return this;
        };
        RadioGroup.prototype.getRequired = function () {
            return this.hasStyleName("is-required");
        };
        RadioGroup.prototype.addValidation = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            (_a = this.validator).add.apply(_a, validations);
            return this;
            var _a;
        };
        return RadioGroup;
    }(a_visual_component_1.AVisualComponent));
    exports.RadioGroup = RadioGroup;
});

//# sourceMappingURL=radio-group.js.map
