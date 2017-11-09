define(["require", "exports", "tslib", "./abstract/a-widget", "../component/enum/e-basic-color-status", "jquery"], function (require, exports, tslib_1, a_widget_1, e_basic_color_status_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Alert = (function (_super) {
        tslib_1.__extends(Alert, _super);
        function Alert(text) {
            if (text === void 0) { text = ""; }
            var _this = _super.call(this, "div", "<div class=\"inputtt col-xs-12 col-md-12 form-group alert alert-success fade in\" data-alert=\"alert\">" + text + "</div>") || this;
            jquery(_this.element).addClass("Alert col-xs-12 col-md-12");
            return _this;
        }
        Alert.prototype.setText = function (text) {
            jquery(this.element).find(".inputtt").text(text);
            return this;
        };
        Alert.prototype.getText = function () {
            return jquery(this.element).find(".inputtt").text();
        };
        Alert.prototype.setColor = function (basic_color) {
            var classes = jquery(this.element).find(".inputtt").attr("class");
            var ns = classes.replace(/alert\-([^\s]*)/, "alert-" + e_basic_color_status_1.EBasicColorStatus[basic_color].toLowerCase());
            jquery(this.element).find(".inputtt").removeClass().addClass(ns);
            return this;
        };
        Alert.prototype.insertText = function (text, type_append) {
            jquery(this.element).find(".inputtt:first")[type_append](text);
        };
        Alert.prototype.prependText = function (text) {
            this.insertText(text, "prepend");
            return this;
        };
        Alert.prototype.appendText = function (text) {
            this.insertText(text, "append");
            return this;
        };
        return Alert;
    }(a_widget_1.AWidget));
    exports.Alert = Alert;
});

//# sourceMappingURL=alert.js.map
