define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/widget", "jquery", "./default-module-window.css!"], function (require, exports, tslib_1, container_1, widget_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultModuleWindow = (function (_super) {
        tslib_1.__extends(DefaultModuleWindow, _super);
        function DefaultModuleWindow(title, description) {
            var _this = _super.call(this) || this;
            _this.addStyleName("default-module-window");
            _this.title = title;
            _this.description = description;
            _this.marginTopExample = 21;
            _this.buildHeader();
            return _this;
        }
        DefaultModuleWindow.prototype.buildHeader = function () {
            var lblTitle = new widget_1.Label(this.title).addStyleName("h1 text-primary");
            var lblDescription = new widget_1.Label(this.description).addStyleName("description-lbl-dft").setSize(12).setCssProperties({
                "font-weight": "normal",
                "font-size": "14px",
                "marginTop": "5px",
                "marginBottom": "16px"
            });
            this.append(lblTitle).append(lblDescription);
            return this;
        };
        DefaultModuleWindow.prototype.buildExample = function (path, className) {
            var _this = this;
            require([path], function (mod) {
                _this.append(new mod[className]());
                _this.buildCodeBlock(path, className);
            });
            return this;
        };
        DefaultModuleWindow.prototype.buildCodeBlock = function (path, className) {
            var codPanel = new container_1.TabPanel();
            codPanel
                .addStyleName("tab-panel-box-example-case cod-block")
                .setCssProperties({ marginTop: this.marginTopExample + "px" });
            this.append(codPanel);
            var codTab = new container_1.Tab("JS")
                .setCssProperties({ textAlign: "center" })
                .setSize(2);
            var codBlock = new container_1.CodeContainer();
            jquery(codBlock.element)
                .find("pre:first")
                .addClass("sunlight-highlight-actionscript");
            jquery.get("/" + path + ".ts").then(function (dta) {
                codBlock.setCodeText(dta);
                window.setTimeout(function () {
                    Sunlight.highlightAll({ lineNumbers: false });
                }, 1000);
            });
            codTab.setContent(codBlock);
            codPanel.append(codTab);
            codPanel.setSize(12);
            return this;
        };
        DefaultModuleWindow.prototype.loadExample = function (path, className) {
            this.buildExample(path, className);
            return this;
        };
        DefaultModuleWindow.prototype.setMarginTopExample = function (margin) {
            this.marginTopExample = margin;
            return this;
        };
        return DefaultModuleWindow;
    }(container_1.Box));
    exports.DefaultModuleWindow = DefaultModuleWindow;
});
