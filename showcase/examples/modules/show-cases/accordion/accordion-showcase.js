define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccordionShowcase = (function (_super) {
        tslib_1.__extends(AccordionShowcase, _super);
        function AccordionShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.buildAccordion1();
            return _this;
        }
        AccordionShowcase.prototype.buildAccordion1 = function () {
            var accordion = new container_1.Accordion().setSize(6);
            this.append(accordion);
            var lbTest = new widget_1.Label("Usando Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj");
            var frTest = new container_1.Form();
            frTest.append(lbTest);
            accordion
                .append(frTest, { "title": "Titulo Accordion A" });
            accordion.collapseAll();
        };
        return AccordionShowcase;
    }(container_1.Box));
    exports.AccordionShowcase = AccordionShowcase;
});
