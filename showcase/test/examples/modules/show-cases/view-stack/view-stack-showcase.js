define(["require", "exports", "tslib", "mvcomponents/container", "../inputs/inputs-showcase", "../select/select-simple-case"], function (require, exports, tslib_1, container_1, inputs_showcase_1, select_simple_case_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewStackShowcase = (function (_super) {
        tslib_1.__extends(ViewStackShowcase, _super);
        function ViewStackShowcase() {
            var _this = _super.call(this) || this;
            _this.append(new inputs_showcase_1.InputsShowcase());
            _this.append(new select_simple_case_1.SelectSimpleCase());
            _this.initTransition();
            return _this;
        }
        ViewStackShowcase.prototype.initTransition = function () {
            var _this = this;
            this.selectedIndex = 0;
            window.setTimeout(function () {
                _this.selectedIndex = 1;
            }, 3000);
        };
        return ViewStackShowcase;
    }(container_1.ViewStack));
    exports.ViewStackShowcase = ViewStackShowcase;
});
