define(["require", "exports", "tslib", "../core/event-emitter", "jquery", "./abstract/a-container", "./assets/css/tab-panel.css!"], function (require, exports, tslib_1, event_emitter_1, jquery, a_container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ETabPlacement;
    (function (ETabPlacement) {
        ETabPlacement[ETabPlacement["TOP"] = 0] = "TOP";
        ETabPlacement[ETabPlacement["BOTTOM"] = 1] = "BOTTOM";
    })(ETabPlacement = exports.ETabPlacement || (exports.ETabPlacement = {}));
    var TabPanel = (function (_super) {
        tslib_1.__extends(TabPanel, _super);
        function TabPanel() {
            var _this = _super.call(this, "div") || this;
            _this.$items = {};
            _this.onChange = new event_emitter_1.EventEmitter();
            _this.onClose = new event_emitter_1.EventEmitter();
            _this.onAdd = new event_emitter_1.EventEmitter();
            _this.render();
            return _this;
        }
        Object.defineProperty(TabPanel.prototype, "content", {
            get: function () {
                return jquery(this.element).children(".tab-content");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabPanel.prototype, "nav", {
            get: function () {
                return jquery(this.element).children(".nav.nav-tabs");
            },
            enumerable: true,
            configurable: true
        });
        TabPanel.prototype.render = function () {
            var _this = this;
            var element = jquery(this.element);
            var content = jquery("<div class=\"tab-content clearfix\">");
            var nav = jquery("<ul class=\"nav nav-tabs\">");
            nav.on("click", "li:not(.Disabled)", function (event) { return _this.setActive(_this.getTabByElement(jquery(event.currentTarget))); });
            element
                .addClass("TabPanel")
                .addClass("tabbable")
                .append(nav)
                .append(content);
        };
        TabPanel.prototype.setPlacement = function (placement) {
            var $element = jquery(this.element);
            switch (placement) {
                case ETabPlacement.BOTTOM:
                    this.nav.insertAfter(this.content);
                    $element.addClass("tabs-below");
                    break;
                case ETabPlacement.TOP:
                    this.nav.insertBefore(this.content);
                    $element.removeClass("tabs-below");
                    break;
            }
            return this;
        };
        TabPanel.prototype.setActive = function (tab) {
            var t = typeof tab === "number" ? this.getTabByElement(jquery(this.element).find("li").eq(tab)) : tab;
            t.setActive(true);
            return this;
        };
        TabPanel.prototype.closeAll = function () {
            for (var i in this.$items) {
                this.$items[i].close();
            }
            return this;
        };
        TabPanel.prototype.bind = function (tab) {
            var _this = this;
            tab.onActive.subscribe(function () { return _this.onTabActive(tab); });
            tab.onClose.subscribe(function () { return _this.onTabClose(tab); });
        };
        TabPanel.prototype.onTabActive = function (tab) {
            var active = this.getTabByElement(jquery(this.element).find("li.active").not(jquery(tab.element)));
            if (active) {
                active.setActive(false);
            }
            this.onChange.emit(tab);
        };
        TabPanel.prototype.onTabClose = function (tab) {
            delete this.$items[tab.getUID()];
            var active = this.getTabByElement(this.nav.find("li.active").not(jquery(tab.element)));
            if (!active && this.nav.find("li").length) {
                this.setActive(0);
            }
            this.onClose.emit(tab);
        };
        TabPanel.prototype.getTabByElement = function (element) {
            return this.$items[element.attr("id")];
        };
        TabPanel.prototype.insertItem = function (tab, method) {
            var _this = this;
            this.onAdd
                .emit(tab)
                .done(function () {
                var content = tab.getContent();
                var $el = jquery(tab.element);
                _this.nav.append($el);
                _this.content[method](jquery(content.element).addClass("tab-pane"));
                _this.$items[$el.attr("id")] = tab;
                tab.setActive(!jquery(_this.element).find("li.active").length);
                _this.bind(tab);
                _this.resolveAttachement(tab.getContent());
                _this.resolveAttachement(tab);
            });
            return this;
        };
        return TabPanel;
    }(a_container_1.AContainer));
    exports.TabPanel = TabPanel;
});

//# sourceMappingURL=tab-panel.js.map
