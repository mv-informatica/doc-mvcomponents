define(["require", "exports", "tslib", "mvcomponents/container", "../select/select-simple-case", "../inputs/inputs-showcase", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, select_simple_case_1, inputs_showcase_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsShowcase = (function (_super) {
        tslib_1.__extends(EventsShowcase, _super);
        function EventsShowcase() {
            var _this = _super.call(this) || this;
            _this.build();
            return _this;
        }
        EventsShowcase.prototype.build = function () {
            var alert1 = new widget_1.Alert("Eventos");
            this.append(alert1);
            var tabPanel = new container_1.TabPanel().setSize(12);
            var tab = new container_1.Tab("test1");
            tab.setContent(new select_simple_case_1.SelectSimpleCase());
            tabPanel.append(tab);
            var tab2 = new container_1.Tab("test2");
            tab2.setContent(new inputs_showcase_1.InputsShowcase());
            tabPanel.append(tab2);
            this.append(tabPanel);
            tabPanel.onChange.subscribe(function (tab) {
                alert1.setText("alterado para \"" + tab.getTitle() + "\"");
            });
            tab2.onActive.subscribe(function () {
                alert1.setText("\"" + tab2.getTitle() + "\" ativada!");
            });
        };
        return EventsShowcase;
    }(container_1.Box));
    exports.EventsShowcase = EventsShowcase;
});
