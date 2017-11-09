/* */ 
define(["require","exports","tslib","mvcomponents/container","mvcomponents/container","mvcomponents/core","jquery","./i-item-menu","./menu-dispatch","./menu-item-dispatch","./menu-area-item","./menu-area-separator","../themes/modern-blue/menu/css/menu-area.css!css"], function (require, exports, tslib_1, container_1, container_2, core_1, jquery, i_item_menu_1, menu_dispatch_1, menu_item_dispatch_1, menu_area_item_1, menu_area_separator_1) {
    "use strict";
    var MenuArea = (function (_super) {
        tslib_1.__extends(MenuArea, _super);
        function MenuArea() {
            var _this = _super.call(this) || this;
            _this.onSelect = new core_1.EventEmitter();
            _this.onCollpase = new core_1.EventEmitter();
            _this.onClickTitle = new core_1.EventEmitter();
            _this.itemmenu = [];
            _this._title = "";
            _this._displayTitle = true;
            _this.addStyleName("menu-area pull-left is-expanded");
            _this.boxContainer = new container_1.Box().addStyleName("menu-container");
            _this.append(_this.boxContainer);
            if (!_this.boxMenu) {
                _this.boxMenu = new container_2.AContainer("ul", "");
                _this.boxMenu.addStyleName("menu-items menu-area-modules is-expanded");
                _this.boxContainer.append(_this.boxMenu);
            }
            menu_item_dispatch_1.default.onCollapseAll.subscribe(function (on) {
                if (on && _this.hasStyleName("is-collapsed")) {
                    _this.menuOutBoxVisible(on);
                }
            });
            return _this;
        }
        MenuArea.prototype.showTitle = function (on) {
            this._displayTitle = on;
        };
        Object.defineProperty(MenuArea.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (title) {
                this._title = title;
            },
            enumerable: true,
            configurable: true
        });
        MenuArea.prototype.setMenu = function (itens_menu) {
            var _this = this;
            menu_item_dispatch_1.default.onChangeMenuItem.unsubscribeAll();
            this.itemmenu = [];
            jquery(this.boxMenu.element).html("");
            itens_menu.forEach(function (item_menu) {
                if (item_menu.type === "divisor") {
                    _this.itemmenu.push(new menu_area_separator_1.MenuAreaSeparator(item_menu).addStyleName("first-level menu-is-expanded"));
                }
                else {
                    _this.itemmenu.push(new menu_area_item_1.MenuAreaItem(item_menu).addStyleName("first-level menu-is-expanded"));
                }
                _this.boxMenu.append(_this.itemmenu[_this.itemmenu.length - 1]);
            });
            menu_item_dispatch_1.default.onChangeMenuItem.subscribe(function (itemmenu) {
                _this.onSelect.emit(itemmenu).done(function () {
                    if (itemmenu.state !== i_item_menu_1.EItemMenuStatus.CANCELED) {
                        menu_dispatch_1.default.onChangeMenu.emit(itemmenu);
                    }
                });
            });
        };
        MenuArea.prototype.loadMenuItem = function (index, subItemIndex) {
            if (subItemIndex || subItemIndex === 0) {
                this.itemmenu[index].expand();
                this.itemmenu[index].itens[subItemIndex].active();
            }
            else {
                this.itemmenu[index].active();
            }
        };
        MenuArea.prototype.scaleToTop = function (on) {
            this.removeStyleName("is-top");
            if (on) {
                this.addStyleName("is-top");
            }
        };
        MenuArea.prototype.scaleToBottom = function (on) {
            this.removeStyleName("is-bottom");
            if (on) {
                this.addStyleName("is-bottom");
            }
        };
        MenuArea.prototype.collapseMenu = function (on) {
            var _this = this;
            var ele = jquery(this.element);
            var isExpanded = on;
            this.itemmenu.forEach(function (item_menu) {
                return item_menu
                    .collapse()
                    .removeStyleName(isExpanded ? "menu-is-expanded" : "menu-is-collapsed")
                    .addStyleName(!isExpanded ? "menu-is-expanded" : "menu-is-collapsed");
            });
            var gotoWidth = isExpanded ? "50px" : "220px";
            if (isExpanded) {
                ele.addClass("is-collapsed");
            }
            ele.animate({ width: gotoWidth }, "fast", function () {
                ele
                    .toggleClass("is-expanded");
                if (!isExpanded) {
                    ele.removeClass("is-collapsed");
                }
                _this.onCollpase.emit(isExpanded);
            });
            jquery(this.boxMenu.element).toggleClass("is-expanded");
            return this;
        };
        MenuArea.prototype.toggleCollapseMenu = function () {
            this.collapseMenu(this.hasStyleName("is-expanded"));
        };
        MenuArea.prototype.menuOutBoxVisible = function (show) {
            if (jquery(".menu-out-of-box:first").length === 0) {
                jquery("body:first")
                    .append("<div class=\"menu-out-of-box\" style=\"z-index:999;position:fixed;top:0px;bottom:0px;left:50px;right:0px;width:calc( 100% - 50px );height:100%\">");
            }
            jquery(".menu-out-of-box:first")
                .on("mouseover", function (evt) {
                menu_item_dispatch_1.default.onCollapseAll.emit(false);
                jquery(".menu-out-of-box:first").hide();
            });
            if (show) {
                jquery(".menu-out-of-box:first").show();
            }
            else {
                jquery(".menu-out-of-box:first").hide();
            }
            return this;
        };
        return MenuArea;
    }(container_1.Box));
    exports.MenuArea = MenuArea;
});
