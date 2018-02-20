define(["require", "exports", "tslib", "./abstract/a-container", "../input/select", "../input/chooser", "../core/event-emitter", "jquery"], function (require, exports, tslib_1, a_container_1, select_1, chooser_1, event_emitter_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Form = (function (_super) {
        tslib_1.__extends(Form, _super);
        function Form() {
            var _this = _super.call(this, "div", "") || this;
            _this.onValidate = new event_emitter_1.EventEmitter();
            _this.addStyleName("Form");
            _this._inputs = [];
            _this.data = {};
            return _this;
        }
        Object.defineProperty(Form.prototype, "inputs", {
            get: function () {
                return this._inputs.concat([]);
            },
            enumerable: true,
            configurable: true
        });
        Form.prototype.insertItem = function (element, method) {
            var input = element;
            var name = input.getName && input.getName();
            if (name) {
                this._inputs.push({ name: name, input: input });
            }
            else if (element.isFieldset) {
                (_a = this._inputs).push.apply(_a, element.inputs);
            }
            _super.prototype.insertItem.call(this, element, method);
            var _a;
        };
        Form.prototype.clear = function () {
            this.data = jquery.extend(true, {}, null);
            this._inputs.forEach(function (field) {
                if (field.input.isCleanable()) {
                    field.input.setDirty(false).setValue(null).markInvalid(false);
                }
            });
            return this;
        };
        Form.prototype.isValid = function () {
            return this._inputs.every(function (field) { return field.input.isValid(); });
        };
        Form.prototype.validate = function () {
            var _this = this;
            var validations = this._inputs
                .map(function (field) {
                return field.input
                    .setDirty(true)
                    .validate()
                    .then(function (errors) { return ({ input: field.input, errors: errors }); })
                    .catch(function (errors) { return ({ input: field.input, errors: errors }); });
            });
            return new Promise(function (sucess, fail) {
                var validation;
                Promise.all(validations)
                    .then(function (errors) {
                    var validation = errors.filter(function (error) { return error.errors.length > 0; });
                    _this.onValidate.emit(validation);
                    if (validation && validation.length) {
                        fail(validation);
                    }
                    else {
                        sucess(errors.filter(function (error) { return error.errors.length = 0; }));
                    }
                });
            });
        };
        Form.prototype.setData = function (data) {
            var _this = this;
            this.data = jquery.extend(true, {}, data);
            if (data) {
                this._inputs.forEach(function (_a) {
                    var input = _a.input, name = _a.name;
                    var value = null;
                    if (input instanceof select_1.Select === true && input.getAssignedProperty && input.getAssignedProperty()) {
                        var nameItem_1 = input.getAssignedProperty();
                        var valueItem_1;
                        valueItem_1 = _this.getValueByPath(data, name);
                        var datas = input.getData();
                        var valueResult = datas ? datas.filter(function (item) {
                            var valueByArrayItem = _this.getValueByPath(item, nameItem_1);
                            return valueByArrayItem === valueItem_1;
                        }) : null;
                        value = valueResult && valueResult.length > 0 ? valueResult[0] : null;
                        input.setValue(value);
                    }
                    else if (input instanceof chooser_1.Chooser === true && input.getAssignedProperty && input.getAssignedProperty()) {
                    }
                    else {
                        value = _this.getValueByPath(data, name);
                        if (!value && input.labelAll) {
                            value = input.labelAll;
                        }
                        input.setValue(value);
                        input.validate();
                    }
                });
            }
            return this;
        };
        Form.prototype.getValueByPath = function (item, path) {
            var valueGroup = item;
            if (path.indexOf(".") > -1) {
                valueGroup = path.split(".").reduce(function (prev, curr) {
                    return prev ? prev[curr] : null;
                }, item || this);
            }
            else {
                valueGroup = item ? item[path] : null;
            }
            return valueGroup;
        };
        Form.prototype.getData = function () {
            var _this = this;
            var data = {};
            this._inputs.forEach(function (_a) {
                var input = _a.input, name = _a.name;
                _this.setValueData(input, name, data);
            });
            return jquery.extend(true, {}, this.data, data);
        };
        Form.prototype.setValueData = function (input, name, data) {
            if (input.getAssignedProperty && input.getAssignedProperty()) {
                var nameAssigned = input.getAssignedProperty();
                this.updateValueByPath(this.getValueByPath(input.getValue(), nameAssigned), name, data);
            }
            else {
                this.updateValueByPath(input.getValue(), name, data);
            }
        };
        Form.prototype.updateValueByPath = function (value, pathObj, tree, branch) {
            if (branch === void 0) { branch = tree; }
            var path = pathObj.split(".");
            var last = path.length === 1;
            branch[path[0]] = last ? value : branch[path[0]] ? branch[path[0]] : {};
            return last ? tree : this.updateValueByPath(value, path.slice(1).join("."), tree, branch[path[0]]);
        };
        Form.prototype.reset = function () {
            this._inputs.forEach(function (field) { return field.input.reset(); });
            return this;
        };
        Form.prototype.rendered = function () {
            this.onAttached.emit(null);
        };
        return Form;
    }(a_container_1.AContainer));
    exports.Form = Form;
});

//# sourceMappingURL=form.js.map
