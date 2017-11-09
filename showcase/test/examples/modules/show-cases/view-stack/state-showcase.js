define(["require", "exports", "tslib", "mvcomponents/container", "../inputs/inputs-showcase", "../select/select-simple-case"], function (require, exports, tslib_1, container_1, inputs_showcase_1, select_simple_case_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StateShowcase = (function (_super) {
        tslib_1.__extends(StateShowcase, _super);
        function StateShowcase() {
            var _this = _super.call(this) || this;
            _this.append(new inputs_showcase_1.InputsShowcase(), "state1");
            _this.append(new select_simple_case_1.SelectSimpleCase(), "state2");
            _this.initTransition();
            return _this;
        }
        StateShowcase.prototype.initTransition = function () {
            var _this = this;
            this.selectedState = "state1";
            window.setTimeout(function () {
                _this.selectedState = "state2";
            }, 10000);
        };
        return StateShowcase;
    }(container_1.ViewStack));
    exports.StateShowcase = StateShowcase;
});
