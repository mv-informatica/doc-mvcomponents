define(["require", "exports", "../enum/e-view-size", "../../core/system-application", "../../core/event-emitter", "jquery"], function (require, exports, e_view_size_1, system_application_1, event_emitter_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ABasicComponent = (function () {
        function ABasicComponent(tagh, tagc) {
            if (tagc === void 0) { tagc = ""; }
            this.onBeforeDestroy = new event_emitter_1.EventEmitter();
            this._uid = 0;
            this._uid = system_application_1.SystemApplication.getUid();
            this.element = document.createElement(tagh);
            jquery(this.element)
                .addClass("ABasicComponent")
                .html(tagc)
                .attr("id", this.getUID());
        }
        ABasicComponent.prototype.getUID = function () {
            return "uid_" + this._uid;
        };
        ABasicComponent.prototype.getParent = function () {
            return jquery(this.element).parent[0];
        };
        ABasicComponent.prototype.setAttributes = function (properties) {
            jquery(this.element).attr(properties);
            return this;
        };
        ABasicComponent.prototype.setAttribute = function (attribute, value) {
            jquery(this.element).attr(attribute, value);
            return this;
        };
        ABasicComponent.prototype.getAttribute = function (properties) {
            return jquery(this.element).attr(properties);
        };
        ABasicComponent.prototype.setCssProperties = function (properties) {
            jquery(this.element).css(properties);
            return this;
        };
        ABasicComponent.prototype.hasStyleName = function (class_name) {
            return jquery(this.element).hasClass(class_name);
        };
        ABasicComponent.prototype.addStyleName = function (class_names) {
            jquery(this.element).addClass(class_names);
            return this;
        };
        ABasicComponent.prototype.removeStyleName = function (class_names) {
            jquery(this.element).removeClass(class_names);
            return this;
        };
        ABasicComponent.prototype.setStyleName = function (class_names) {
            jquery(this.element).removeClass().addClass(class_names);
            return this;
        };
        ABasicComponent.prototype.setSizeIndividual = function (size, view) {
            if (view === void 0) { view = e_view_size_1.EViewSize.MEDIUM; }
            var $element = jquery(this.element);
            var current = this.getSizeDesc(view);
            var classes = $element
                .attr("class")
                .replace(new RegExp("[^w]col-" + current + "-\\d+", 'g'), '');
            $element
                .removeClass();
            $element.addClass(classes + " col-" + current + "-" + size);
        };
        ABasicComponent.prototype.getSizeDesc = function (view) {
            var SIZEMAP = [];
            SIZEMAP[e_view_size_1.EViewSize.EXTRA_SMALL] = 'xs';
            SIZEMAP[e_view_size_1.EViewSize.SMALL] = 'sm';
            SIZEMAP[e_view_size_1.EViewSize.MEDIUM] = 'md';
            SIZEMAP[e_view_size_1.EViewSize.LARGE] = 'lg';
            return SIZEMAP[view];
        };
        ABasicComponent.prototype.setOffSetIndividual = function (size, view) {
            if (view === void 0) { view = e_view_size_1.EViewSize.MEDIUM; }
            var classes = jquery(this.element).attr("class");
            var _sizeChoose = this.getSizeDesc(view);
            var ns = classes + " col-" + _sizeChoose + "-offset-" + size;
            if (classes.indexOf("col-" + _sizeChoose + "-offset-") > -1) {
                var _reg = new RegExp('col-(' + _sizeChoose + ')-offset-(\\d{1,2})', 'g');
                ns = classes.replace(_reg, "col-$1-offset-" + size);
            }
            jquery(this.element).removeClass().addClass(ns);
        };
        ABasicComponent.prototype.sizesToArray = function () {
            var views = [];
            views.push(e_view_size_1.EViewSize.EXTRA_SMALL);
            views.push(e_view_size_1.EViewSize.SMALL);
            views.push(e_view_size_1.EViewSize.MEDIUM);
            views.push(e_view_size_1.EViewSize.LARGE);
            return views;
        };
        ABasicComponent.prototype.addSize = function (sizes) {
            for (var prop in sizes) {
                this.setSizeIndividual(sizes[prop], e_view_size_1.EViewSize[prop.toUpperCase()]);
            }
            ;
            return this;
        };
        ABasicComponent.prototype.addOffSet = function (sizes) {
            for (var prop in sizes) {
                this.setOffSetIndividual(sizes[prop], e_view_size_1.EViewSize[prop.toUpperCase()]);
            }
            ;
            return this;
        };
        ABasicComponent.prototype.setSize = function (size) {
            var _this = this;
            var views = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                views[_i - 1] = arguments[_i];
            }
            if (views.length == 0) {
                views = this.sizesToArray();
            }
            ;
            views.forEach(function (_tmview) { return _this.setSizeIndividual(size, _tmview); });
            return this;
        };
        ABasicComponent.prototype.setOffSet = function (size) {
            var _this = this;
            var views = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                views[_i - 1] = arguments[_i];
            }
            if (views.length == 0) {
                views = this.sizesToArray();
            }
            ;
            views.forEach(function (_tmview) { return _this.setOffSetIndividual(size, _tmview); });
            return this;
        };
        ABasicComponent.prototype.setVisible = function (show) {
            if (show) {
                jquery(this.element).show();
            }
            else {
                jquery(this.element).hide();
            }
            ;
            return this;
        };
        ABasicComponent.prototype.isVisible = function () {
            return jquery(this.element).is(":visible");
        };
        ABasicComponent.prototype.destroy = function () {
            var _this = this;
            this.onBeforeDestroy.emit(null).done(function () {
                for (var key in _this) {
                    var getType = {};
                    if (_this[key] && !(getType.toString.call(_this[key]) === '[object Function]')) {
                        if (_this[key].destroy) {
                            _this[key].destroy();
                        }
                        ;
                        try {
                            _this[key] = null;
                        }
                        catch (error) {
                        }
                    }
                    ;
                }
                ;
                jquery(_this.element).remove();
            });
        };
        return ABasicComponent;
    }());
    exports.ABasicComponent = ABasicComponent;
});

//# sourceMappingURL=a-basic-component.js.map
