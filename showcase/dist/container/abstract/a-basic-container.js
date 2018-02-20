define(["require", "exports", "tslib", "../../component/abstract/a-visual-component", "../../core/event-emitter", "jquery"], function (require, exports, tslib_1, a_visual_component_1, event_emitter_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ABasicContainer = (function (_super) {
        tslib_1.__extends(ABasicContainer, _super);
        function ABasicContainer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onAttached = new event_emitter_1.EventEmitter();
            return _this;
        }
        ABasicContainer.prototype.addBlockContainer = function () {
            if (!jquery(this.element).hasClass("RadioGroup")) {
                if (jquery(this.element).children(".blockContainer").length === 0) {
                    jquery(this.element).append('<div class="blockContainer" style="display:none;z-index:2;width:100%;height: 100%;position: absolute;top: 0px;left: 0px;"></div>');
                }
                ;
            }
            return this;
        };
        Object.defineProperty(ABasicContainer.prototype, "blockContainer", {
            get: function () {
                var _this = this;
                return {
                    getElement: function () {
                        _this.addBlockContainer();
                        return jquery(_this.element).children(".blockContainer:first")[0];
                    },
                    addEvent: function (p_event, handler) {
                        jquery(_this.blockContainer.getElement()).on(p_event, handler);
                    },
                    prepend: function (p_element) {
                        _this.addBlockContainer();
                        jquery(_this.blockContainer.getElement()).prepend(jquery(p_element.element));
                    },
                    append: function (p_element) {
                        _this.addBlockContainer();
                        jquery(_this.blockContainer.getElement()).append(jquery(p_element.element));
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        ABasicContainer.prototype.resolveAttachement = function (renderable) {
            if (renderable.attached) {
                if (this.isAttached) {
                    renderable.attached();
                }
                else {
                    this.onAttached.once(function () { return renderable.attached(); });
                }
                ;
                if (renderable.rendered) {
                    renderable.rendered();
                }
            }
        };
        ABasicContainer.prototype.insertItem = function (item, method) {
            jquery(this.element)[method](item.element);
            this.resolveAttachement(item);
        };
        ABasicContainer.prototype.append = function (item) {
            this.insertItem(item, 'append');
            return this;
        };
        ABasicContainer.prototype.prepend = function (item) {
            this.insertItem(item, 'prepend');
            return this;
        };
        ABasicContainer.prototype.setEnable = function (on) {
            var elemtJQ = jquery(this.element);
            if (!elemtJQ.hasClass("RadioGroup")) {
                if (on) {
                    jquery(this.blockContainer.getElement()).hide();
                }
                else {
                    jquery(this.blockContainer.getElement()).show();
                }
                ;
            }
            ;
            if (on) {
                elemtJQ.css("opacity", 1).removeClass("Disabled").removeAttr("disabled");
            }
            else {
                elemtJQ.css("opacity", 0.6).addClass("Disabled").attr("disabled", "true");
            }
            ;
            return this;
        };
        ABasicContainer.prototype.isEnable = function () {
            return !jquery(this.element).hasClass("Disabled");
        };
        ABasicContainer.prototype.attached = function () {
            var _this = this;
            this.onAttached.emit(null).done(function () { return _this.isAttached = true; });
        };
        return ABasicContainer;
    }(a_visual_component_1.AVisualComponent));
    exports.ABasicContainer = ABasicContainer;
});

//# sourceMappingURL=a-basic-container.js.map
