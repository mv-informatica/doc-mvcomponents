/* */ 
define(["require", "exports", "tslib", "mvcomponents/core", "mvcomponents/component", "jquery"], function (require, exports, tslib_1, core_1, component_1, jquery) {
    "use strict";
    var HeaderAreaContent = (function (_super) {
        tslib_1.__extends(HeaderAreaContent, _super);
        function HeaderAreaContent(tag_element, html_content) {
            var _this = _super.call(this, tag_element, html_content) || this;
            _this.onAttached = new core_1.EventEmitter();
            _this.addStyleName("navbar-header");
            _this.defaultOrientation = "none";
            return _this;
        }
        HeaderAreaContent.prototype.resolveAttachement = function (renderable) {
            if (renderable.attached) {
                if (this.isAttached) {
                    renderable.attached();
                }
                else {
                    this.onAttached.once(function () { return renderable.attached(); });
                }
                if (renderable.rendered) {
                    renderable.rendered();
                }
            }
        };
        HeaderAreaContent.prototype.insertItem = function (item, method) {
            var li = jquery("<li>");
            if (this.defaultOrientation === "right") {
                li.addClass("pull-right");
            }
            else if (this.defaultOrientation === "left") {
                li.addClass("pull-left");
            }
            li.append(item.element);
            jquery(this.element).find("ul:first")[method]((item.element && item.element.tagName === "LI") ? item.element : li);
            this.resolveAttachement(item);
        };
        HeaderAreaContent.prototype.append = function (item) {
            this.insertItem(item, "append");
            return this;
        };
        HeaderAreaContent.prototype.prepend = function (item) {
            this.insertItem(item, "prepend");
            return this;
        };
        HeaderAreaContent.prototype.attached = function () {
            this.isAttached = true;
            this.onAttached.emit(null);
        };
        return HeaderAreaContent;
    }(component_1.AVisualComponent));
    exports.HeaderAreaContent = HeaderAreaContent;
});
