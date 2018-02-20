define(["require", "exports", "tslib", "../container/abstract/a-container", "../button/abstract/a-button", "../component/enum/e-basic-color-status", "jquery"], function (require, exports, tslib_1, a_container_1, a_button_1, e_basic_color_status_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropMenu = (function (_super) {
        tslib_1.__extends(DropMenu, _super);
        function DropMenu(title) {
            var _this = _super.call(this, "li", "\n\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"title\">" + title + "</span> <span class=\"caret\"></span>\n\t\t\t</a>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\n\t\t\t</ul>\n\t\t\t<div class='dropmenu-closer' style='position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 999;display:none;'></div>\n\t\t") || this;
            _this.type = "dropdown";
            _this.addStyleName(_this.type);
            return _this;
        }
        DropMenu.prototype.insertItem = function (item, method) {
            item.setSize(12);
            var li = jquery("<li>");
            li.append(item.element);
            jquery(this.element).find(".dropdown-menu:first")[method](li);
            this.resolveAttachement(item);
        };
        DropMenu.prototype.attached = function () {
            var dropmenu = jquery(this.element);
            var toggleFunction = function () {
                dropmenu.find(".dropdown-menu:first").toggle();
                dropmenu.find(".dropmenu-closer:first").toggle();
            };
            dropmenu
                .delegate(".dropdown-toggle:first", "click", toggleFunction)
                .delegate(".dropmenu-closer:first", "click", toggleFunction)
                .delegate(".dropdown-menu:first > *", "click", toggleFunction);
            _super.prototype.attached.call(this);
        };
        DropMenu.prototype.setOrientation = function (orientantion) {
            var dropmenu = jquery(this.element);
            this.removeStyleName(this.type);
            this.type = (orientantion === "DOWN" ? "dropdown" : "dropup");
            this.addStyleName(this.type);
            return this;
        };
        DropMenu.prototype.addSeparator = function () {
            var li = jquery("<li class=\"col-xs-12 divider\" role=\"separator\" >");
            jquery(this.element).find(".dropdown-menu:first")["append"](li);
            return this;
        };
        DropMenu.prototype.setColor = function (color) {
            jquery(this.element)
                .find(".dropdown-toggle:first")
                .removeClass(a_button_1.AButton.prototype.getColors())
                .addClass("btn-" + e_basic_color_status_1.EBasicColorStatus[color].toLowerCase());
            return this;
        };
        DropMenu.prototype.setTitle = function (title) {
            jquery(this.element).find(".dropdown-toggle:first span.title:first").text(title);
            return this;
        };
        return DropMenu;
    }(a_container_1.AContainer));
    exports.DropMenu = DropMenu;
});

//# sourceMappingURL=drop-menu.js.map
