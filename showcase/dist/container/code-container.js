define(["require", "exports", "tslib", "./abstract/a-container", "jquery"], function (require, exports, tslib_1, a_container_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CodeContainer = (function (_super) {
        tslib_1.__extends(CodeContainer, _super);
        function CodeContainer() {
            return _super.call(this, "div", "<pre class=\"pre-cod\"></pre>") || this;
        }
        CodeContainer.prototype.setCodeText = function (codeText) {
            jquery(this.element)
                .find("pre.pre-cod:first")
                .text(codeText);
            return this;
        };
        return CodeContainer;
    }(a_container_1.AContainer));
    exports.CodeContainer = CodeContainer;
});

//# sourceMappingURL=code-container.js.map
