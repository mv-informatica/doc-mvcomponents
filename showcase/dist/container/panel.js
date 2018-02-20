define(["require", "exports", "tslib", "./abstract/a-container", "./button-group", "../component/enum/e-basic-color-status", "jquery", "./assets/css/panel.css!"], function (require, exports, tslib_1, a_container_1, button_group_1, e_basic_color_status_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Panel = (function (_super) {
        tslib_1.__extends(Panel, _super);
        function Panel(title) {
            var _this = _super.call(this, "div", "\n\t\t\t<div class=\"subcontent_modwindow panel panel-default\">\n\t\t\t\t<div class=\"panel-heading subtitlemodwindow\" style=\"display:none\">\n\t\t\t\t\t<span class=\"panel-heading mv-panel-title\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"conteudo_form panel-body\">\n\t\t\t\t</div>\n\t\t\t\t<div style=\"display:none\" class=\"panel-footer block_module_details\">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t<div>") || this;
            _this.header = new button_group_1.ButtonGroup().addStyleName("panel-header-box pull-right").removeStyleName("col-sm-offset-0 col-sm-12 col-xs-12");
            jquery(_this.element)
                .find(".subtitlemodwindow:first")
                .append(_this.header.element);
            _this.addStyleName("col-xs-12 col-sm-12 col-md-12 col-lg-12 column Panel")
                .setTitle(title);
            return _this;
        }
        Panel.prototype.showTitle = function (show) {
            jquery(this.element).find("div.subtitlemodwindow:first")[show ? "show" : "hide"]();
            return this;
        };
        Panel.prototype.setTitle = function (title) {
            this.title = title;
            if (title) {
                jquery(this.element)
                    .find("div.subtitlemodwindow:first")
                    .show()
                    .find(".mv-panel-title:first")
                    .text(title);
            }
            else {
                jquery(this.element)
                    .find("div.subtitlemodwindow:first")
                    .hide()
                    .find(".mv-panel-title:first")
                    .text("");
            }
            return this;
        };
        Panel.prototype.getTitle = function () {
            return this.title || "";
        };
        Panel.prototype.setColor = function (color) {
            jquery(this.element).find("div.subcontent_modwindow:first")
                .removeAttr("class")
                .addClass("subcontent_modwindow panel panel-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        Panel.prototype.insertItem = function (item, method) {
            jquery(this.element).find("div.conteudo_form:first")[method](item.element);
            this.resolveAttachement(item);
        };
        return Panel;
    }(a_container_1.AContainer));
    exports.Panel = Panel;
});

//# sourceMappingURL=panel.js.map
