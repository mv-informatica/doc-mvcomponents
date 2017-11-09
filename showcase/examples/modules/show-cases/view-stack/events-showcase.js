define(["require", "exports", "tslib", "mvcomponents/container", "../inputs/inputs-showcase", "../select/select-simple-case", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, inputs_showcase_1, select_simple_case_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsShowcase = (function (_super) {
        tslib_1.__extends(EventsShowcase, _super);
        function EventsShowcase() {
            var _this = _super.call(this) || this;
            var view1 = new container_1.ViewStack();
            view1.append(new inputs_showcase_1.InputsShowcase(), "state1");
            view1.append(new select_simple_case_1.SelectSimpleCase(), "state2");
            var btn1 = new button_1.Button("alterar para state2");
            view1.selectedState = "state1";
            view1.onChangeState.subscribe(function (view) {
                var state = view.state === "state1" ? "state2" : "state1";
                btn1.setLabel("alterar para " + state);
            });
            btn1.addEvent(component_1.EMouseEvent.CLICK, function () {
                view1.selectedState = (view1.selectedState === "state1") ? "state2" : "state1";
            });
            _this.append(new container_1.ButtonGroup().append(btn1));
            _this.append(view1);
            return _this;
        }
        return EventsShowcase;
    }(container_1.Box));
    exports.EventsShowcase = EventsShowcase;
});
