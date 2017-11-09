define(["require", "exports", "tslib", "../nav-info/nav-info", "mvcomponents/http", "mvcomponents/button", "mvcomponents/component", "mv-workspace", "mvcomponents/container"], function (require, exports, tslib_1, nav_info_1, http_1, button_1, component_1, mv_workspace_1, container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShowcaseArea = (function (_super) {
        tslib_1.__extends(ShowcaseArea, _super);
        function ShowcaseArea() {
            var _this = _super.call(this) || this;
            _this.addStyleName('area-example');
            return _this;
        }
        ShowcaseArea.prototype.init = function () {
            this
                .buildSystemInfo()
                .buildLogo()
                .buildLogout()
                .buildMenu();
            this.footer.setHidden(true);
        };
        ShowcaseArea.prototype.onCreate = function () {
            this.init();
        };
        ShowcaseArea.prototype.buildWaitWindow = function () {
            var navInfo = new nav_info_1.NavInfo();
            this.append(navInfo);
            return this;
        };
        ShowcaseArea.prototype.buildLogo = function () {
            var _this = this;
            var logoArea = new mv_workspace_1.HeaderAreaLogo();
            logoArea.setLogoURL("assets/imgs/mvcomponents-logo.png");
            logoArea.onClickToggleMenu.subscribe(function () {
                _this.menu.toggleCollapseMenu();
            });
            this.header.append(logoArea);
            logoArea.toggleMenuPosition = "left";
            logoArea.marginTop = "10px";
            mv_workspace_1.workspaceDispatch.onResize.subscribe(function (size) {
                if (size.width < 600) {
                    _this.menu.collapseMenu(true);
                    logoArea.marginTop = "0px";
                    logoArea.setToggleMenuVisibility(false);
                }
                else {
                    logoArea.setToggleMenuVisibility(true);
                    logoArea.marginTop = "10px";
                }
            });
            return this;
        };
        ShowcaseArea.prototype.buildSystemInfo = function () {
            var menu = new container_1.DropMenu("versão 1.1.22");
            menu.addStyleName("hidden-xs pull-right");
            menu.append(new button_1.LinkButton("Perfil"));
            menu.append(new button_1.LinkButton("Mensagens"));
            menu.addSeparator();
            var btnOut = new button_1.LinkButton("Sair");
            btnOut.addEvent(component_1.EMouseEvent.CLICK, function () {
            });
            menu.append(btnOut);
            this
                .header
                .rightArea
                .prepend(menu);
            return this;
        };
        ShowcaseArea.prototype.buildLogout = function () {
            var iconLogout = new button_1.Icon().setIcon("mv-basico-notificacao").addStyleName("action-header-area pull-right").setCssProperties({ "font-size": "24px" }).setColor("#FFFFFF");
            iconLogout.addEvent(component_1.EMouseEvent.CLICK, function () {
                mv_workspace_1.workspaceDispatch.onSignOut.emit(null).done(function () {
                    mv_workspace_1.workspaceDispatch.onChangeArea.emit({
                        name: "login-area",
                        params: {}
                    });
                });
            });
            this.header.leftArea.addStyleName("pull-left");
            this.header.rightArea.prepend(iconLogout);
            this.header.addStyleName("pull-right");
            mv_workspace_1.workspaceDispatch.onResize.subscribe(function (size) {
                if (size.width < 600) {
                    iconLogout.setCssProperties({ marginTop: "5px" });
                }
                else {
                    iconLogout.setCssProperties({ marginTop: "0px" });
                }
            });
            return this;
        };
        ShowcaseArea.prototype.buildMenu = function () {
            var _this = this;
            this.menu.showTitle(false);
            http_1.$http.get("examples/menu/menu.json").then(function (dta) {
                _this.menu.setMenu(dta
                    .filter(function (item) { return !item["hidden"]; })
                    .map(function (item) {
                    item.itens = item.itens && item.itens.length ? item.itens.filter(function (subitem) { return !subitem["hidden"]; }) : [];
                    return item;
                }));
                setTimeout(function () { return _this.menu.loadMenuItem(0, 0); }, 0);
            });
            return this;
        };
        return ShowcaseArea;
    }(mv_workspace_1.WorkspaceViewPager));
    exports.ShowcaseArea = ShowcaseArea;
});
