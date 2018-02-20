define(["require", "exports", "tslib", "../enum/e-mouse-event", "../enum/e-keyboard-event", "../enum/e-input-event", "jquery", "./a-basic-component"], function (require, exports, tslib_1, e_mouse_event_1, e_keyboard_event_1, e_input_event_1, jquery, a_basic_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AVisualComponent = (function (_super) {
        tslib_1.__extends(AVisualComponent, _super);
        function AVisualComponent(tagh, tagc) {
            if (tagc === void 0) { tagc = ""; }
            var _this = _super.call(this, tagh, tagc) || this;
            jquery(_this.element)
                .addClass("AVisualComponent")
                .html(tagc)
                .attr("id", _this.getUID());
            return _this;
        }
        AVisualComponent.prototype.addEvent = function (type, handler) {
            jquery(this.element).on(this.eventTypeToString(type), handler);
        };
        AVisualComponent.prototype.eventTypeToString = function (type_evt) {
            if (type_evt < 10) {
                return e_input_event_1.EInputEvent[type_evt].toLowerCase();
            }
            else if (type_evt < 20) {
                return e_keyboard_event_1.EKeyboardEvent[type_evt].toLowerCase();
            }
            return e_mouse_event_1.EMouseEvent[type_evt].toLowerCase();
        };
        AVisualComponent.prototype.removeEvent = function (type, handler) {
            if (handler) {
                jquery(this.element).off(this.eventTypeToString(type), handler);
            }
            else {
                jquery(this.element).off(this.eventTypeToString(type));
            }
        };
        AVisualComponent.prototype.removeAllEvents = function (callback) {
            jquery(this.element).off();
        };
        AVisualComponent.prototype.fireEvent = function (type) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var evt = jquery.Event(this.eventTypeToString(type));
            jquery(this.element).trigger(evt, params);
            return evt;
        };
        return AVisualComponent;
    }(a_basic_component_1.ABasicComponent));
    exports.AVisualComponent = AVisualComponent;
});

//# sourceMappingURL=a-visual-component.js.map
