define(["require", "exports", "mv-workspace", "jquery"], function (require, exports, mv_workspace_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AreaManager = (function () {
        function AreaManager() {
            this.areaInstances = [];
            this.init();
        }
        AreaManager.prototype.init = function () {
            var _this = this;
            mv_workspace_1.workspaceDispatch.onRegisterArea.subscribe(function (area) { return _this.register(area); });
            mv_workspace_1.workspaceDispatch.onChangeArea.subscribe(function (area) { return _this.loadArea(area); });
            jquery('<div id="bottom_element_position">').css({
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                backgrounColor: "red",
                zIndex: -1,
                visibility: "hidden"
            }).appendTo('body:first');
            window.onresize = function () {
                _this.calcWindowSize();
            };
        };
        AreaManager.prototype.calcWindowSize = function () {
            var rect = jquery('#bottom_element_position')[0].getBoundingClientRect();
            mv_workspace_1.workspaceDispatch.onResize.emit({
                width: rect.right, height: rect.bottom
            });
        };
        AreaManager.prototype.register = function (area) {
            if (!this.areaInstances.some(function (area_item) { return area_item.name == area.name; })) {
                this.areaInstances.push(area);
            }
            ;
        };
        AreaManager.prototype.hideAreas = function (p_area) {
            var _this = this;
            return new Promise(function (success, fail) {
                var areasToHide = _this
                    .areaInstances
                    .filter(function (area_item) { return area_item.name != p_area.name && area_item.visible && area_item.instance; });
                areasToHide.forEach(function (area_item, indx) {
                    area_item.visible = false;
                    if (area_item.instance.onStop) {
                        area_item.instance.onStop();
                    }
                    area_item.visible = false;
                    jquery(area_item.instance.element).fadeOut("fast", function () {
                        area_item.instance.setVisible(false);
                        if (indx == 0) {
                            success(true);
                        }
                    });
                });
                if (!areasToHide.length) {
                    window.setTimeout(function () { return success(true); }, 200);
                }
            });
        };
        AreaManager.prototype.loadArea = function (p_area) {
            var _this = this;
            this.hideAreas(p_area).then(function (ok) {
                _this.areaInstances
                    .filter(function (area_item) { return area_item.name == p_area.name; })
                    .forEach(function (area_item) {
                    if (area_item.instance) {
                        if (area_item.instance.onRestart) {
                            area_item.instance.onRestart(p_area.params);
                        }
                        jquery(area_item.instance.element).fadeIn("normal", function () { return area_item.instance.setVisible(true); });
                        area_item.visible = true;
                        _this.calcWindowSize();
                    }
                    else {
                        require([area_item.path], function (_area_mod) {
                            var moduleName = area_item.path.substring(area_item.path.lastIndexOf("/") + 1, area_item.path.length);
                            moduleName = moduleName
                                .toLowerCase()
                                .replace(/-(.)/g, function (match, group1) {
                                return group1.toUpperCase();
                            })
                                .replace(/(^\w)/g, function (p0, p1) { return p1.toUpperCase(); });
                            area_item.instance = new _area_mod[moduleName]();
                            area_item.instance.setVisible(false);
                            area_item.instance.appendTo("body:first");
                            if (area_item.instance.onCreate) {
                                area_item.instance.onCreate(p_area.params);
                            }
                            area_item.visible = true;
                            _this.calcWindowSize();
                            jquery(area_item.instance.element).fadeIn("normal", function () { return area_item.instance.setVisible(true); });
                        });
                    }
                });
            });
        };
        return AreaManager;
    }());
    exports.AreaManager = AreaManager;
    exports.default = new AreaManager();
});
