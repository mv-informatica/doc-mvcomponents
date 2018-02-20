/* */ 
define(["require", "exports", "tslib", "jquery", "./menu-item-dispatch", "mvcomponents/container"], function (require, exports, tslib_1, jquery, menu_item_dispatch_1, container_1) {
    "use strict";
    var MenuAreaItem = (function (_super) {
        tslib_1.__extends(MenuAreaItem, _super);
        function MenuAreaItem(config) {
            var _this = _super.call(this, "li", "<a class=\"\" href=\"#\" title=\"" + config.label + "\"><div class=\"icon\"></div><span class=\"desc-item\">" + config.label + "</span></a>") || this;
            _this.addStyleName("module-menu");
            _this.id = config.id;
            _this.label = config.label;
            _this.module = config.module;
            _this.path = config.path;
            _this.icon = config.icon;
            _this.image = config.image;
            _this.order = config.order;
            _this.params = config.params;
            _this.state = config.state;
            _this.itens = [];
            if (config.image) {
                _this.setImg(config.image);
            }
            else if (config.icon) {
                _this.setIcon(config.icon, config.iconColor);
            }
            if (config.itens) {
                _this.collapsedIcon = "glyphicon glyphicon-chevron-right";
                _this.expandedIcon = "glyphicon glyphicon-chevron-down";
                _this.addStyleName("has-subitens");
                _this.boxMenu = new container_1.AContainer("ul", "");
                _this.boxMenu.addStyleName("submenu");
                _this.boxMenu.setCssProperties({ "display": "none" });
                _this.append(_this.boxMenu);
                config.itens.forEach(function (item_menu) {
                    _this.itens.push(new MenuAreaItem(item_menu));
                    _this
                        .boxMenu
                        .append(_this.itens[_this.itens.length - 1]);
                });
                var $this_1 = _this;
                jquery(_this.element)
                    .find("a:first")
                    .addClass("has-subitens")
                    .append("<span style=\"font-size:9px\" class=\"" + _this.collapsedIcon + " pull-right item-menu-icon-expand\" aria-hidden=\"true\"></span>")
                    .on("click", function () {
                    if ($this_1.hasStyleName("is-open")) {
                        $this_1.collapse();
                    }
                    else {
                        if ($this_1.hasStyleName("first-level")) {
                            menu_item_dispatch_1.default.onCollapseAll.emit(true);
                        }
                        $this_1.expand();
                    }
                })
                    .on("mouseover", function () {
                    if (_this.hasStyleName("first-level") && _this.hasStyleName("menu-is-collapsed")) {
                        menu_item_dispatch_1.default.onCollapseAll.emit(true);
                        $this_1.expand();
                    }
                });
                menu_item_dispatch_1.default.onCollapseAll.subscribe(function (on) { return _this.collapse(); });
            }
            else {
                var $this_2 = _this;
                jquery(_this.element)
                    .find("a:first")
                    .on("click", function () {
                    menu_item_dispatch_1.default.onChangeMenuItem.emit({
                        id: $this_2.id,
                        label: $this_2.label,
                        module: $this_2.module,
                        path: $this_2.path,
                        icon: $this_2.icon,
                        image: $this_2.image,
                        order: $this_2.order,
                        params: $this_2.params,
                        state: $this_2.state
                    });
                    jquery(this).addClass("is-selected-active");
                })
                    .on("mouseover", function () {
                    if (_this.hasStyleName("first-level") && _this.hasStyleName("menu-is-collapsed")) {
                        menu_item_dispatch_1.default.onCollapseAll.emit(true);
                    }
                });
            }
            menu_item_dispatch_1.default.onChangeMenuItem.subscribe(function (item) {
                if (item.id !== _this.id) {
                    jquery(_this.element).find("a:first").removeClass("is-selected-active");
                }
            });
            return _this;
        }
        MenuAreaItem.prototype.setIcon = function (icon, color) {
            var colorStyle = color ? "color:" + color : "";
            jquery(this.element)
                .find(".icon:first")
                .append("<i class=\"" + icon + "\" aria-hidden=\"true\" style=\"" + colorStyle + "\"></i>");
            return this;
        };
        MenuAreaItem.prototype.setImg = function (imgsrc) {
            jquery(this.element)
                .find(".icon:first")
                .append("<img class=\"menu-item-image\" src=\"" + imgsrc + "\">");
            return this;
        };
        MenuAreaItem.prototype.expand = function () {
            var itemLink = jquery(this.element);
            itemLink
                .find(".item-menu-icon-expand:first")
                .removeClass(this.collapsedIcon)
                .addClass(this.expandedIcon);
            itemLink
                .addClass("is-open");
            if (this.hasStyleName("menu-is-expanded")) {
                itemLink
                    .find(".submenu:first")
                    .slideDown("fast");
            }
            else {
                itemLink
                    .find(".submenu:first")
                    .show();
            }
            return this;
        };
        MenuAreaItem.prototype.collapse = function () {
            var itemLink = jquery(this.element);
            itemLink
                .find(".item-menu-icon-expand:first")
                .removeClass(this.expandedIcon)
                .addClass(this.collapsedIcon);
            itemLink
                .removeClass("is-open");
            if (this.hasStyleName("menu-is-collapsed")) {
                itemLink.find(".submenu:first")
                    .hide();
            }
            else {
                itemLink.find(".submenu:first")
                    .slideUp("fast");
            }
            return this;
        };
        MenuAreaItem.prototype.active = function () {
            if (this.hasStyleName("has-subitens")) {
                this.expand();
                if (this.hasStyleName("first-level")) {
                    menu_item_dispatch_1.default.onCollapseAll.emit(true);
                }
            }
            else {
                jquery(this.element).find("a:first").click();
            }
            return this;
        };
        return MenuAreaItem;
    }(container_1.AContainer));
    exports.MenuAreaItem = MenuAreaItem;
});
