define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconPositionShowcase = (function (_super) {
        tslib_1.__extends(IconPositionShowcase, _super);
        function IconPositionShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.buildAccordion1();
            return _this;
        }
        IconPositionShowcase.prototype.buildAccordion1 = function () {
            var accordion = new container_1.Accordion().setSize(6);
            this.append(accordion);
            var lbTest = new widget_1.Label("Titulo Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj").setCssProperties({ "fontWeight": "normal" });
            var frTest = new container_1.Form();
            frTest.append(lbTest);
            accordion
                .append(frTest, {
                "title": "Titulo Accordion A",
                iconPosition: "left"
            });
        };
        return IconPositionShowcase;
    }(container_1.Box));
    exports.IconPositionShowcase = IconPositionShowcase;
});
