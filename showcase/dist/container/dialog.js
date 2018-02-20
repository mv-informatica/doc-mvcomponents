define(["require", "exports", "tslib", "./abstract/a-container", "../core/event-emitter", "../component/enum/e-vertical-align", "../component/enum/e-horizontal-align", "./box", "jquery", "./assets/css/dialog.css!"], function (require, exports, tslib_1, a_container_1, event_emitter_1, e_vertical_align_1, e_horizontal_align_1, box_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dialog = (function (_super) {
        tslib_1.__extends(Dialog, _super);
        function Dialog(title, destroyOnHide) {
            if (title === void 0) { title = ""; }
            var _this = _super.call(this, "div", "\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\u00D7</button>\n\t\t\t\t\t\t<h4 class=\"modal-title\"></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row modal-body-append\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>") || this;
            _this.onClose = new event_emitter_1.EventEmitter();
            _this.setTitle(title);
            _this.footer = new box_1.Box()
                .addStyleName("modal-footer");
            var $element = jquery(_this.element);
            $element
                .addClass("Dialog modal");
            $element.find(".modal-content")
                .append(_this.footer.element);
            $element.find("button.close")
                .on("click", function (evt) { return _this.onCloseEvent(evt); });
            _this.setHorizontalAlign(e_horizontal_align_1.EHorizontalAlign.CENTER);
            _this.setVerticalAlign(e_vertical_align_1.EVerticalAlign.MIDDLE);
            _this.destroyOnHide = destroyOnHide;
            return _this;
        }
        Dialog.prototype.onCloseEvent = function (evt) {
            var _this = this;
            this.onClose.emit(evt).done(function () { return _this.hide(); });
        };
        Dialog.prototype.insertItem = function (item, method) {
            jquery(this.element).find(".modal-body-append:first")[method](item.element);
            this.resolveAttachement(item);
        };
        Dialog.prototype.setTitle = function (title) {
            jquery(this.element).find(".modal-title:first").text(title);
            return this;
        };
        Dialog.prototype.setModal = function (modal) {
            jquery(this.element)[modal ? "removeClass" : "addClass"]("is-not-modal");
            return this;
        };
        Dialog.prototype.show = function () {
            if (!this.isLoaded) {
                this.isLoaded = true;
                jquery("body").append(this.element);
                this.attached();
            }
            return this.setVisible(true);
        };
        Dialog.prototype.hide = function () {
            this.setVisible(false);
            if (this.destroyOnHide) {
                jquery("#" + this.getUID()).detach();
            }
            return this;
        };
        Dialog.prototype.setVerticalAlign = function (align) {
            var $element = jquery(this.element);
            [
                {
                    clazz: "is-middle",
                    value: e_vertical_align_1.EVerticalAlign.MIDDLE
                },
                {
                    clazz: "is-top",
                    value: e_vertical_align_1.EVerticalAlign.TOP
                },
                {
                    clazz: "is-bottom",
                    value: e_vertical_align_1.EVerticalAlign.BOTTOM
                }
            ].forEach(function (_a) {
                var clazz = _a.clazz, value = _a.value;
                return $element[align === value ? "addClass" : "removeClass"](clazz);
            });
            return this;
        };
        Dialog.prototype.setHorizontalAlign = function (align) {
            var $element = jquery(this.element);
            [
                {
                    clazz: "is-center",
                    value: e_horizontal_align_1.EHorizontalAlign.CENTER
                },
                {
                    clazz: "is-left",
                    value: e_horizontal_align_1.EHorizontalAlign.LEFT
                },
                {
                    clazz: "is-right",
                    value: e_horizontal_align_1.EHorizontalAlign.RIGHT
                }
            ].forEach(function (_a) {
                var clazz = _a.clazz, value = _a.value;
                return $element[align === value ? "addClass" : "removeClass"](clazz);
            });
            return this;
        };
        return Dialog;
    }(a_container_1.AContainer));
    exports.Dialog = Dialog;
});

//# sourceMappingURL=dialog.js.map
