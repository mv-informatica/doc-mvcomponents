define(["require", "exports", "tslib", "mvcomponents/container", "../select/select-simple-case", "../inputs/inputs-showcase"], function (require, exports, tslib_1, container_1, select_simple_case_1, inputs_showcase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotClosableShowcase = (function (_super) {
        tslib_1.__extends(NotClosableShowcase, _super);
        function NotClosableShowcase() {
            var _this = _super.call(this) || this;
            _this.build();
            return _this;
        }
        NotClosableShowcase.prototype.build = function () {
            var tabPanel = new container_1.TabPanel().setSize(12);
            var tab = new container_1.Tab("test1");
            tab.setClosable(true);
            tab.setContent(new select_simple_case_1.SelectSimpleCase());
            tabPanel.append(tab);
            var tab2 = new container_1.Tab("test2");
            tab2.setContent(new inputs_showcase_1.InputsShowcase());
            tabPanel.append(tab2);
            this.append(tabPanel);
        };
        return NotClosableShowcase;
    }(container_1.Box));
    exports.NotClosableShowcase = NotClosableShowcase;
});
