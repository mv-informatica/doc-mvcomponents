define(["require", "exports", "tslib", "./box", "../button/icon", "../widget/label", "../core/event-emitter", "../component/enum/e-mouse-event", "jquery"], function (require, exports, tslib_1, box_1, icon_1, label_1, event_emitter_1, e_mouse_event_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccordionItem = (function (_super) {
        tslib_1.__extends(AccordionItem, _super);
        function AccordionItem(config) {
            var _this = _super.call(this) || this;
            _this.onCollapse = new event_emitter_1.EventEmitter();
            _this.onExpand = new event_emitter_1.EventEmitter();
            _this.config = config;
            _this
                .setSize(12)
                .addStyleName("accordion-item");
            var iconTltStyle = _this.config.iconPosition && _this.config.iconPosition === "left" ? "left" : "right";
            _this.iconTitle = new icon_1.Icon()
                .addStyleName("pull-" + iconTltStyle)
                .setIcon(config.expandIcon)
                .setColor(config.colorIcon ? config.colorIcon : "");
            if (_this.config.disabled) {
                _this.setCssProperties({ opacity: 0.6 });
            }
            _this.header = new box_1.Box()
                .addStyleName("accordion-header");
            if (config.titleRender) {
                jquery(_this.header.element).append(config.titleRender);
            }
            else {
                _this.header
                    .append(new label_1.Label(config.title || "").setCssProperties({ color: _this.config.titleColor }).setSize(11))
                    .setCssProperties({ color: _this.config.titleColor });
            }
            if (_this.config.iconPosition && _this.config.iconPosition === "right") {
                _this.header.append(_this.iconTitle);
            }
            else {
                _this.header.prepend(_this.iconTitle);
            }
            _this.append(_this.header);
            _this.body = new box_1.Box()
                .setSize(12)
                .addStyleName("accordion-body");
            _this.append(_this.body);
            _this.header.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function (evt) { return _this.toogleHeight(evt); });
            return _this;
        }
        AccordionItem.prototype.toogleHeight = function (evt) {
            this.config.originClick = evt.target;
            var tmpConfig = this.config;
            if (!this.config.disabled) {
                if (this.iconTitle.hasStyleName(this.config.collapseIcon)) {
                    this.onExpand
                        .emit(tmpConfig);
                }
                else {
                    this.onCollapse
                        .emit(tmpConfig);
                }
            }
        };
        AccordionItem.prototype.expand = function () {
            var tmpConfig = this.config;
            this.iconTitle
                .removeStyleName(tmpConfig.collapseIcon)
                .addStyleName(tmpConfig.expandIcon);
            jquery(this.body.element).slideDown(tmpConfig.animationSpeed);
            return this;
        };
        AccordionItem.prototype.collapse = function () {
            var tmpConfig = this.config;
            this.iconTitle
                .removeStyleName(tmpConfig.expandIcon)
                .addStyleName(tmpConfig.collapseIcon);
            jquery(this.body.element).slideUp(tmpConfig.animationSpeed);
            return this;
        };
        return AccordionItem;
    }(box_1.Box));
    exports.AccordionItem = AccordionItem;
});

//# sourceMappingURL=accordion-item.js.map
