/* */ 
define(["require","exports","tslib","mvcomponents/container","../header-area/header-area","../application-area/application-area","../footer-area/footer-area","../menu/menu-area","jquery","../menu/menu-dispatch","../dispatch/workspace-dispatch","../themes/modern-blue/viewpager/css/workspace.css!css","mv-hosp/css/mv-hosp.old.css!css","mv-basico/css/mv-basico.old.css!css"], function (require, exports, tslib_1, container_1, header_area_1, application_area_1, footer_area_1, menu_area_1, jquery, menu_dispatch_1, workspace_dispatch_1) {
    "use strict";
    var WorkspaceViewPager = (function (_super) {
        tslib_1.__extends(WorkspaceViewPager, _super);
        function WorkspaceViewPager() {
            var _this = _super.call(this) || this;
            _this.addStyleName("workspace");
            _this.setSize(12);
            _this.size = { height: 0, width: 0 };
            _this
                .buildHeaderArea()
                .buildMenuArea()
                .buildApplicationArea()
                .buildFooterArea();
            window.setTimeout(function () {
                if (workspace_dispatch_1.workspaceDispatch.onResize.emittedValue) {
                    _this.adjusteApplicationHeight(workspace_dispatch_1.workspaceDispatch.onResize.emittedValue);
                }
                workspace_dispatch_1.workspaceDispatch.onResize.subscribe(function (size) { return _this.adjusteApplicationHeight(size); });
            }, 200);
            return _this;
        }
        WorkspaceViewPager.prototype.adjusteApplicationHeight = function (size) {
            var footerMargin = this.footer.isVisible() ? 27 : 0;
            var headerMargin = this.header.isVisible() ? 50 : 0;
            var totalMargin = headerMargin + footerMargin;
            this.size = Object.assign({}, size);
            this.menu.setCssProperties({ height: (size.height - totalMargin) + "px" });
            this.application.setCssProperties({ height: (size.height - totalMargin) + "px" });
            return this;
        };
        WorkspaceViewPager.prototype.buildHeaderArea = function () {
            var _this = this;
            this.header = new header_area_1.HeaderArea();
            this.append(this.header);
            this.header.onChangeVisibility.subscribe(function (on) {
                _this.menu.scaleToTop(on);
                _this.application.scaleToTop(on);
                _this.adjusteApplicationHeight(_this.size);
            });
            return this;
        };
        WorkspaceViewPager.prototype.buildApplicationArea = function () {
            this.application = new application_area_1.ApplicationArea();
            this.append(this.application);
            return this;
        };
        WorkspaceViewPager.prototype.buildFooterArea = function () {
            var _this = this;
            this.footer = new footer_area_1.FooterArea();
            this.append(this.footer);
            this.footer.onChangeVisibility.subscribe(function (on) {
                _this.menu.scaleToBottom(on);
                _this.application.scaleToBottom(on);
                _this.adjusteApplicationHeight(_this.size);
            });
            return this;
        };
        WorkspaceViewPager.prototype.buildMenuArea = function () {
            var _this = this;
            this.menu = new menu_area_1.MenuArea();
            this.append(this.menu);
            menu_dispatch_1.default.onChangeMenu.subscribe(function (tmp_mod) { return _this.loadModule(tmp_mod); });
            this.menu.onCollpase.subscribe(function (isCollapsed) {
                _this.application.expand(isCollapsed);
            });
            return this;
        };
        WorkspaceViewPager.prototype.clearModule = function () {
            if (this.lastmodule && this.lastmodule.onDestroy) {
                this.lastmodule.onDestroy();
            }
            jquery(this.application.content.element).html("");
        };
        WorkspaceViewPager.prototype.loadModule = function (item_module) {
            var _this = this;
            if (this.lastmodule && this.lastmodule.hide) {
                this.lastmodule.hide();
            }
            if (this.lastmodule && this.lastmodule.onDestroy) {
                this.lastmodule.onDestroy();
            }
            var path = item_module.path.replace(/\./g, "/");
            require([path], function (_modwindow) {
                jquery(_this.application.content.element).html("");
                _this.lastmodule = null;
                var moduleName = path.substring(path.lastIndexOf("/") + 1, path.length);
                moduleName = moduleName
                    .toLowerCase()
                    .replace(/-(.)/g, function (match, group1) { return group1.toUpperCase(); })
                    .replace(/(^\w)/g, function (p0, p1) { return p1.toUpperCase(); });
                var tmp_modwindow = new _modwindow[moduleName]();
                _this.application.content.append(tmp_modwindow);
                if (tmp_modwindow.onDestroy) {
                    _this.lastmodule = tmp_modwindow;
                }
                if (tmp_modwindow.onCreate) {
                    tmp_modwindow.onCreate(item_module.params ? item_module.params : {});
                }
                if (tmp_modwindow.show) {
                    tmp_modwindow.show();
                }
            });
        };
        return WorkspaceViewPager;
    }(container_1.ViewPager));
    exports.WorkspaceViewPager = WorkspaceViewPager;
});
