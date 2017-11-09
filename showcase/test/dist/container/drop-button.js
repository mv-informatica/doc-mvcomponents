define(["require", "exports", "tslib", "../container/abstract/a-container", "../button/abstract/a-button", "../component/enum/e-basic-color-status", "jquery"], function (require, exports, tslib_1, a_container_1, a_button_1, e_basic_color_status_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropButton = (function (_super) {
        tslib_1.__extends(DropButton, _super);
        function DropButton(title) {
            var _this = _super.call(this, "div", "\n\t\t\t<button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"title\">" + title + "</span> <span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu\"></ul>\n\t\t\t<div class=\"dropmenu-closer\" style=\"position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 999;display:none;\"></div>\n\t\t") || this;
            _this.type = "dropdown";
            _this.addStyleName(_this.type);
            return _this;
        }
        DropButton.prototype.insertItem = function (item, method) {
            item.setSize(12);
            var li = jquery("<li>");
            li.append(item.element);
            jquery(this.element).find(".dropdown-menu:first")[method](li);
            this.resolveAttachement(item);
        };
        DropButton.prototype.attached = function () {
            var dropmenu = jquery(this.element);
            var toggleFunction = function () {
                dropmenu.find(".dropdown-menu:first").toggle();
                dropmenu.find(".dropmenu-closer:first").toggle();
            };
            dropmenu
                .delegate(".dropdown-toggle:first", "click", toggleFunction)
                .delegate(".dropmenu-closer:first", "click", toggleFunction);
            _super.prototype.attached.call(this);
        };
        DropButton.prototype.setOrientation = function (orientantion) {
            var dropmenu = jquery(this.element);
            this.removeStyleName(this.type);
            this.type = (orientantion === "DOWN" ? "dropdown" : "dropup");
            this.addStyleName(this.type);
            return this;
        };
        DropButton.prototype.addSeparator = function () {
            var li = jquery("<li class=\"col-xs-12 divider\" role=\"separator\">");
            jquery(this.element).find(".dropdown-menu:first")["append"](li);
            return this;
        };
        DropButton.prototype.setColor = function (color) {
            jquery(this.element)
                .find(".dropdown-toggle:first")
                .removeClass(a_button_1.AButton.prototype.getColors())
                .addClass("btn-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        DropButton.prototype.setTitle = function (title) {
            jquery(this.element).find(".dropdown-toggle:first span.title:first").text(title);
            return this;
        };
        return DropButton;
    }(a_container_1.AContainer));
    exports.DropButton = DropButton;
});

//# sourceMappingURL=drop-button.js.map
