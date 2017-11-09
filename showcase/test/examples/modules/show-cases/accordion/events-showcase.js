define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "mvcomponents/button", "mvcomponents/component"], function (require, exports, tslib_1, container_1, widget_1, button_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsShowcase = (function (_super) {
        tslib_1.__extends(EventsShowcase, _super);
        function EventsShowcase() {
            var _this = _super.call(this) || this;
            _this.setSize(12);
            _this.buildAccordion1();
            return _this;
        }
        EventsShowcase.prototype.buildAccordion1 = function () {
            var alerts = new widget_1.Alert();
            this.append(alerts);
            var accordion = new container_1.Accordion().setSize(6);
            this.append(accordion);
            var lbTest = new widget_1.Label("Accordion A txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj")
                .setCssProperties({ "fontWeight": "normal" });
            var frTest = new container_1.Form();
            frTest.append(lbTest);
            var lbTest2 = new widget_1.Label("Expand canceled txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js")
                .setCssProperties({ "fontWeight": "normal" });
            var frTest2 = new container_1.Form();
            frTest2.append(lbTest2);
            var lbTest3 = new widget_1.Label("Usando Prepend! txt ttstst xts xttsl stsls ststl stsljs stljs tsttl jstslj ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js ts xttsl stsls ststl stsljs stljs tsttl js")
                .setCssProperties({ "fontWeight": "normal" });
            var frTest3 = new container_1.Form();
            frTest3.append(lbTest3);
            accordion
                .append(frTest, { "title": "Accordion A" })
                .append(frTest2, { "title": "Accordion B" })
                .append(frTest3, { "title": "Accordion C" });
            var btnGroup = new container_1.ButtonGroup().setSize(12);
            this.append(btnGroup);
            var btnExpandAll = new button_1.Button("Expandir");
            btnExpandAll.addEvent(component_1.EMouseEvent.CLICK, function () {
                accordion.expandAll();
            });
            btnGroup.append(btnExpandAll);
            var btnCollapseAll = new button_1.Button("Recolher");
            btnCollapseAll.addEvent(component_1.EMouseEvent.CLICK, function () {
                accordion.collapseAll();
            });
            btnGroup.append(btnCollapseAll);
            accordion.onExpand.subscribe(function (item) {
                alerts.setText("item '" + item.title + "' expandido!");
            });
            accordion.onCollapse.subscribe(function (item) {
                alerts.setText("item '" + item.title + "' recolhido!");
            });
        };
        return EventsShowcase;
    }(container_1.Box));
    exports.EventsShowcase = EventsShowcase;
});
