define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window["$"] = window["jQuery"] = jquery;
    (function (_jq) {
        if (!_jq.browser) {
            var userAgent = window.navigator.userAgent;
            _jq.browser = {
                msie: !!(userAgent.match(/msie/gi) || userAgent.match(/Trident.*rv\:11\./))
            };
        }
    })(jquery);
});

//# sourceMappingURL=globals.js.map
