define(["require", "exports", "tslib", "./abstract/a-container"], function (require, exports, tslib_1, a_container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormBox = (function (_super) {
        tslib_1.__extends(FormBox, _super);
        function FormBox() {
            var _this = _super.call(this, "div", "") || this;
            _this.addStyleName("FormBox");
            _this.inputs = [];
            _this.isFieldset = true;
            return _this;
        }
        FormBox.prototype.insertItem = function (element, method) {
            var input = element;
            var name = input.getName && input.getName();
            if (name) {
                this.inputs.push({ name: name, input: input });
            }
            else if (element.isFieldset) {
                (_a = this.inputs).push.apply(_a, element.inputs);
            }
            _super.prototype.insertItem.call(this, element, method);
            var _a;
        };
        FormBox.prototype.rendered = function () {
            this.onAttached.emit(null);
        };
        FormBox.prototype.setEnable = function (on) {
            this.addBlockContainer();
            _super.prototype.setEnable.call(this, on);
            return this;
        };
        return FormBox;
    }(a_container_1.AContainer));
    exports.FormBox = FormBox;
});

//# sourceMappingURL=form-box.js.map
