define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var I18nStatic = (function () {
        function I18nStatic() {
            this.defaults = {
                lng: window.navigator.language || window.navigator.userLanguage || "pt",
                backend: "{{lng}}/{{ns}}.json"
            };
            this.keys = {};
        }
        Object.defineProperty(I18nStatic.prototype, "lng", {
            get: function () {
                return this.defaults.lng;
            },
            enumerable: true,
            configurable: true
        });
        I18nStatic.prototype.setConfig = function (config) {
            this.defaults.lng = config.lng || this.defaults.lng;
            this.defaults.backend = config.backend || this.defaults.backend;
            return this;
        };
        I18nStatic.prototype.key = function (key, objReplace, configs) {
            if (objReplace === void 0) { objReplace = null; }
            var keytranslated = key;
            if (key.indexOf(".") > -1) {
                keytranslated = Function("context", "return context.keys." + key)(this);
            }
            else if (this.keys[key]) {
                keytranslated = this.keys[key];
            }
            if (objReplace) {
                for (var k in objReplace) {
                    keytranslated = keytranslated.replace("{{" + k + "}}", objReplace[k]);
                }
            }
            return keytranslated;
        };
        I18nStatic.prototype.loadResource = function (url, config) {
            var _this = this;
            if (config === void 0) { config = {}; }
            config.backend = config.backend || this.defaults.backend;
            config.lng = config.lng || this.defaults.lng;
            var urlload = url + config
                .backend
                .replace("{{lng}}", config.lng)
                .replace("{{ns}}", "translation");
            return fetch(urlload)
                .then(function (res) { return res.json(); })
                .then(function (res) {
                for (var k in res) {
                    _this.keys[k] = res[k];
                }
                return res;
            });
        };
        return I18nStatic;
    }());
    exports.I18nStatic = I18nStatic;
    exports.i18n = new I18nStatic();
});

//# sourceMappingURL=i18n.js.map
