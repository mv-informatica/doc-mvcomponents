define(["require", "exports", "tslib", "jquery", "../../component/enum/e-input-event", "../../component/abstract/a-visual-component", "../../core/validator", "../../core/validations", "../../core/validation"], function (require, exports, tslib_1, jquery, e_input_event_1, a_visual_component_1, validator_1, validations_1, validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ABaseInput = (function (_super) {
        tslib_1.__extends(ABaseInput, _super);
        function ABaseInput(tag, content) {
            if (content === void 0) { content = ""; }
            var _this = _super.call(this, tag, content) || this;
            _this.dirty = false;
            _this.valid = false;
            _this.defaultValue = null;
            _this.cleanable = true;
            _this.validator = new validator_1.Validator();
            _this.validator.onValidate.subscribe(function (errors) { return _this.onValidate(errors); });
            _this.addEvent(e_input_event_1.EInputEvent.CHANGE, function () {
                if (_this.isDirty()) {
                    _this.onValueChange(_this.getValue());
                }
            });
            return _this;
        }
        ABaseInput.prototype.attached = function () {
            var _this = this;
            this.getInput().on('blur', function () {
                _this.setDirty(true);
                _this.validate().then(function (ok) { }).catch(function (err) {
                    _this.markInvalid(true);
                });
            });
        };
        ABaseInput.prototype.configure = function (method) {
            method(this);
            return this;
        };
        ABaseInput.prototype.onValidate = function (errors) {
            var isValid = this.valid = errors.length === 0;
            this.markInvalid(!isValid);
        };
        ABaseInput.prototype.addValidation = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            (_a = this.validator).add.apply(_a, validations);
            return this;
            var _a;
        };
        ABaseInput.prototype.removeValidation = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            (_a = this.validator).remove.apply(_a, validations);
            return this;
            var _a;
        };
        ABaseInput.prototype.addAsyncValidation = function () {
            var validations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                validations[_i] = arguments[_i];
            }
            (_a = this.validator).addAsync.apply(_a, validations);
            return this;
            var _a;
        };
        ABaseInput.prototype.onValueChange = function (value) {
            this.validator.validate(value);
        };
        ABaseInput.prototype.markInvalid = function (invalid) {
            jquery(this.element)[invalid ? 'addClass' : 'removeClass']('is-invalid has-error');
            return this;
        };
        ABaseInput.prototype.isDirty = function () {
            return this.dirty;
        };
        ABaseInput.prototype.setDirty = function (dirty) {
            this.dirty = dirty;
            return this;
        };
        ABaseInput.prototype.fireEvent = function (type) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return _super.prototype.fireEvent.call(this, type, params);
        };
        ABaseInput.prototype.addEvent = function (type, event_fn) {
            _super.prototype.addEvent.call(this, type, event_fn);
        };
        ABaseInput.prototype.removeEvent = function (type, callback) {
            _super.prototype.removeEvent.call(this, type, callback);
        };
        ABaseInput.prototype.focus = function () {
            this.getInput().focus();
            return this;
        };
        ABaseInput.prototype.setLabel = function (label) {
            jquery(this.element).find("label:first").show().text(label);
            return this;
        };
        ABaseInput.prototype.getLabel = function () {
            return jquery(this.element).find("label:first").text();
        };
        ABaseInput.prototype.setReadonly = function (on) {
            this.getInput().prop("readonly", on);
            return this;
        };
        ABaseInput.prototype.isReadonly = function () {
            return this.getInput().prop("readonly");
        };
        ABaseInput.prototype.setCleanable = function (on) {
            this.cleanable = on;
            return this;
        };
        ABaseInput.prototype.isCleanable = function () {
            return this.cleanable;
        };
        ABaseInput.prototype.isDisabled = function () {
            return this.getInput().prop('disabled');
        };
        ABaseInput.prototype.setDisabled = function (disabled) {
            this.getInput().prop('disabled', disabled).css({
                "backgroundColor": (disabled ? "#eee" : "#fff")
            });
            this.setCssProperties({
                "opacity": (disabled ? 0.5 : 1)
            });
            return this;
        };
        ABaseInput.prototype.setEnable = function (enable) {
            this.setDisabled(!enable);
            return this;
        };
        ABaseInput.prototype.isValid = function () {
            return this.valid;
        };
        ABaseInput.prototype.setName = function (name) {
            this.getInput().attr("name", name);
            return this;
        };
        ABaseInput.prototype.getName = function () {
            return this.getInput().attr("name");
        };
        ABaseInput.prototype.validate = function () {
            var value = this.getValue();
            if (!value && this.labelAll) {
                value = this.labelAll;
            }
            return this.validator.validate(value);
        };
        ABaseInput.prototype.setDefaultValue = function (value) {
            this.defaultValue = value;
            return this;
        };
        ABaseInput.prototype.getDefaultValue = function () {
            return this.defaultValue;
        };
        ABaseInput.prototype.reset = function () {
            this.setValue(this.defaultValue);
            return this;
        };
        ABaseInput.prototype.markRequired = function (required) {
            jquery(this.element).find("label:first > span.is-required-text").remove();
            this.removeStyleName("is-required is-not-empty");
            if (required) {
                jquery(this.element).find("label:first").append('<span class="is-required-text"> * </span>');
                this.addStyleName("is-required is-not-empty");
            }
            return this;
        };
        ABaseInput.prototype.setRequired = function (required) {
            if (this.notEmptyValidation) {
                this.removeValidation(this.notEmptyValidation);
            }
            this.notEmptyValidation = new validation_1.Validation();
            this.notEmptyValidation
                .setMethod(function (vl) {
                return validations_1.Validations.notEmpty().validate(vl);
            })
                .setMessage(validations_1.Validations.notEmpty().getMessage(""));
            if (this.getLabel && this.getLabel()) {
                this.notEmptyValidation
                    .setMessage("O campo '" + this.getLabel() + "' \u00E9 obrigat\u00F3rio");
            }
            else if (this.getName && this.getName()) {
                this.notEmptyValidation
                    .setMessage("O campo '" + this.getName() + "' \u00E9 obrigat\u00F3rio");
            }
            jquery(this.element).find("label:first > span.is-required-text").remove();
            this.removeStyleName("is-required is-not-empty");
            this.markInvalid(false);
            if (required) {
                jquery(this.element).find("label:first").append('<span class="is-required-text"> * </span>');
                this.addStyleName("is-required is-not-empty");
                this.addValidation(this.notEmptyValidation);
            }
            return this;
        };
        ABaseInput.prototype.getRequired = function () {
            return this.hasStyleName("is-required");
        };
        return ABaseInput;
    }(a_visual_component_1.AVisualComponent));
    exports.ABaseInput = ABaseInput;
});

//# sourceMappingURL=a-base-input.js.map
