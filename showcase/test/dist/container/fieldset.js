define(["require", "exports", "tslib", "./abstract/a-container", "jquery", "./assets/css/fieldset.css!"], function (require, exports, tslib_1, a_container_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Fieldset = (function (_super) {
        tslib_1.__extends(Fieldset, _super);
        function Fieldset(legend) {
            var _this = _super.call(this, "fieldset", "<legend>" + legend + "</legend>") || this;
            _this.addStyleName("Fieldset");
            _this.inputs = [];
            _this.isFieldset = true;
            return _this;
        }
        Fieldset.prototype.insertItem = function (element, method) {
            var input = element;
            var name = input.getName && input.getName();
            if (name) {
                this.inputs.push({ name: name, input: input });
            }
            _super.prototype.insertItem.call(this, element, method);
        };
        Fieldset.prototype.setLegend = function (legend) {
            jquery(this.element).find("legend:first").text(legend);
            return this;
        };
        Fieldset.prototype.rendered = function () {
            this.onAttached.emit(null);
        };
        Fieldset.prototype.setEnable = function (on) {
            this.addBlockContainer();
            _super.prototype.setEnable.call(this, on);
            return this;
        };
        return Fieldset;
    }(a_container_1.AContainer));
    exports.Fieldset = Fieldset;
});

//# sourceMappingURL=fieldset.js.map
