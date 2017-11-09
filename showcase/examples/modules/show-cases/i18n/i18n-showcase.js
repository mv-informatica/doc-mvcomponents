define(["require", "exports", "tslib", "mvcomponents/i18n", "mvcomponents/container", "mvcomponents/widget"], function (require, exports, tslib_1, i18n_1, container_1, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var I18nShowcase = (function (_super) {
        tslib_1.__extends(I18nShowcase, _super);
        function I18nShowcase() {
            var _this = _super.call(this) || this;
            i18n_1.i18n.setConfig({ lng: "pt-BR" });
            i18n_1.i18n
                .loadResource('assets/locales/')
                .then(function (resource) { return _this.append(new widget_1.Alert(i18n_1.i18n.key("modulob.titulo") + " : " + i18n_1.i18n.key("lbtitle", { nome: "fulano" }) + " : " + i18n_1.i18n.lng)); });
            return _this;
        }
        return I18nShowcase;
    }(container_1.Box));
    exports.I18nShowcase = I18nShowcase;
});
