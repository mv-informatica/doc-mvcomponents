define(["require", "exports", "mvcomponents/assets/mvtheme.min.css!", "mvcomponents/assets/mvcomponents.css!", "./globals"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SystemApplicationStatic = (function () {
        function SystemApplicationStatic() {
            this._uid = 571;
            this._projectVersion = "1";
            this.relativePathPackage = "";
        }
        SystemApplicationStatic.prototype.getUid = function () {
            this._uid++;
            return this._uid;
        };
        SystemApplicationStatic.prototype.getLastUid = function () {
            return this._uid;
        };
        SystemApplicationStatic.prototype.getNextUid = function () {
            return this._uid + 1;
        };
        SystemApplicationStatic.prototype.getUrlParam = function (p_name) {
            var results = new RegExp("[?&]" + p_name + "=([^&#]*)").exec(window.location.href);
            if (results === null) {
                return "";
            }
            return results[1] || "";
        };
        SystemApplicationStatic.prototype.removeInvalidChars = function (p_url) {
            var indexOfSharp = p_url.indexOf("#");
            if (indexOfSharp > -1) {
                p_url = p_url.substring(0, indexOfSharp);
            }
            var indexOfCharQuestion = p_url.indexOf("?");
            if (indexOfCharQuestion > -1) {
                p_url = p_url.substring(0, indexOfCharQuestion);
            }
            return p_url;
        };
        SystemApplicationStatic.prototype.getLocation = function () {
            var tmpHref = window.location.href;
            tmpHref = this.removeInvalidChars(tmpHref);
            return tmpHref.substring(0, tmpHref.lastIndexOf("/") + 1);
        };
        SystemApplicationStatic.prototype.getDomain = function () {
            var protocolL = window
                .document
                .location
                .protocol;
            var hostL = window
                .document
                .location
                .host;
            return protocolL + "//" + hostL;
        };
        return SystemApplicationStatic;
    }());
    exports.SystemApplicationStatic = SystemApplicationStatic;
    exports.SystemApplication = new SystemApplicationStatic();
});

//# sourceMappingURL=system-application.js.map
