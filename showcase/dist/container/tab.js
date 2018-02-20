define(["require", "exports", "tslib", "../core/event-emitter", "./../button/abstract/a-button", "jquery"], function (require, exports, tslib_1, event_emitter_1, a_button_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tab = (function (_super) {
        tslib_1.__extends(Tab, _super);
        function Tab(title) {
            if (title === void 0) { title = ""; }
            var _this = _super.call(this, "li", "<a href=\"#\"><span class=\"linkbutton_label_\"></span></a>") || this;
            _this.onActive = new event_emitter_1.EventEmitter();
            _this.onClose = new event_emitter_1.EventEmitter();
            jquery(_this.element).addClass("Tab");
            _this.setLabel(title);
            return _this;
        }
        Tab.prototype.setIcon = function (psrc) {
            if (jquery(this.element).find("span.iconeinput:first").length === 0) {
                jquery(this.element)
                    .find("a:first")
                    .append("<span class=\"iconeinput " + psrc + "\"></span>");
            }
            else {
                var classes = jquery(this.element)
                    .find("span.iconeinput")
                    .attr("class");
                jquery(this.element)
                    .find("span.iconeinput")
                    .removeClass()
                    .addClass(psrc);
            }
            return this;
        };
        Tab.prototype.setBadge = function (badge) {
            if (jquery(this.element).find("span.badge:first").length > 0) {
                jquery(this.element)
                    .find("span.badge")
                    .remove();
            }
            jquery(this.element)
                .find("a:first")
                .append(jquery(badge.element));
            return this;
        };
        Tab.prototype.setLabel = function (label) {
            jquery(this.element)
                .find("a:first span.linkbutton_label_:first")
                .text(label);
            this.title = label;
            return this;
        };
        Tab.prototype.close = function () {
            jquery(this.element).remove();
            jquery(this.content.element).remove();
            this.onClose.emit(null);
            return this;
        };
        Tab.prototype.setContent = function (container) {
            this.content = container;
            return this;
        };
        Tab.prototype.setTooltip = function (tooltip) {
            if (tooltip) {
                jquery(this.element).children("a").attr("title", tooltip);
            }
            else {
                jquery(this.element).children("a").removeAttr("title");
            }
            return this;
        };
        Tab.prototype.getContent = function () {
            return this.content;
        };
        Tab.prototype.setActive = function (active) {
            var _this = this;
            if (active) {
                this.onActive.emit(null).done(function () {
                    jquery(_this.element).addClass("active");
                    jquery(_this.content.element).addClass("is-visible").removeClass("is-hidden");
                });
            }
            else {
                jquery(this.element).removeClass("active");
                jquery(this.content.element).addClass("is-hidden").removeClass("is-visible");
            }
            return this;
        };
        Tab.prototype.setTitle = function (title) {
            this.title = title;
            this.setLabel(title);
            return this;
        };
        Tab.prototype.getTitle = function () {
            return this.title;
        };
        Tab.prototype.setClosable = function (closable) {
            var _this = this;
            jquery(this.element)
                .find("i.close-handler")
                .remove();
            if (closable) {
                jquery(this.element)
                    .children("a")
                    .append(jquery("<i class=\"close-handler glyphicon glyphicon-remove\">")
                    .click(function () { return _this.close(); }));
            }
            return this;
        };
        return Tab;
    }(a_button_1.AButton));
    exports.Tab = Tab;
});

//# sourceMappingURL=tab.js.map
