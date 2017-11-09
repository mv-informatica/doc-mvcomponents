define(["require", "exports", "tslib", "../core/event-emitter", "./abstract/a-container", "./accordion-item", "jquery", "./assets/css/accordion.css!"], function (require, exports, tslib_1, event_emitter_1, a_container_1, accordion_item_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Accordion = (function (_super) {
        tslib_1.__extends(Accordion, _super);
        function Accordion(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.onCollapse = new event_emitter_1.EventEmitter();
            _this.onExpand = new event_emitter_1.EventEmitter();
            _this.addStyleName("accordion-box");
            _this.itens = [];
            _this.config = { titleColor: "#555", colorIcon: "#555", animationSpeed: "fast", expandIcon: "mv-basico-seta_baixo_simples", collapseIcon: "mv-basico-seta_cima_simples", isOpen: false };
            if (config) {
                _this.config = Object.assign({}, _this.config, config);
            }
            return _this;
        }
        Accordion.prototype.appendContainer = function (item, config, where) {
            var _this = this;
            var configResolved = Object.assign({}, this.config, config);
            var tmpContainer = new accordion_item_1.AccordionItem({
                title: config.title,
                expandIcon: configResolved.expandIcon,
                collapseIcon: configResolved.collapseIcon,
                colorIcon: configResolved.colorIcon,
                disabled: configResolved.disabled,
                iconPosition: configResolved.iconPosition,
                titleColor: configResolved.titleColor,
                animationSpeed: configResolved.animationSpeed,
                isOpen: configResolved.isOpen,
                titleRender: configResolved.titleRender
            });
            this.itens.push(tmpContainer);
            tmpContainer.onExpand.subscribe(function (config) {
                var tmpconfig = Object.assign({}, config);
                _this.onExpand.emit(tmpconfig).done(function () {
                    if (!tmpconfig.disabled) {
                        tmpContainer.expand();
                    }
                });
            });
            tmpContainer.onCollapse.subscribe(function (config) {
                var tmpconfig = Object.assign({}, config);
                _this.onCollapse.emit(tmpconfig).done(function () {
                    if (!tmpconfig.disabled) {
                        tmpContainer.collapse();
                    }
                });
            });
            tmpContainer.setSize(12).addStyleName("accordion-container");
            item.addStyleName("accordion-item");
            tmpContainer
                .body
                .append(item);
            this.insertItem(tmpContainer, where);
            if (configResolved.isOpen) {
                tmpContainer.expand();
            }
            else {
                tmpContainer.collapse();
            }
            return this;
        };
        Accordion.prototype.append = function (item, config) {
            this.appendContainer(item, config, "append");
            return this;
        };
        Accordion.prototype.prepend = function (item, config) {
            this.appendContainer(item, config, "prepend");
            return this;
        };
        Accordion.prototype.expandAll = function () {
            this.itens.forEach(function (item) { return item.expand(); });
            return this;
        };
        Accordion.prototype.collapseAll = function () {
            this.itens.forEach(function (item) { return item.collapse(); });
            return this;
        };
        Accordion.prototype.expandIndex = function (index) {
            if (index > -1 && index < this.itens.length) {
                this.itens[index].expand();
            }
            return this;
        };
        Accordion.prototype.collapseIndex = function (index) {
            if (index > -1 && index < this.itens.length) {
                this.itens[index].collapse();
            }
            return this;
        };
        Accordion.prototype.removeAllItens = function () {
            this.itens.forEach(function (item) {
                item.onAttached.unsubscribeAll();
                item.onCollapse.unsubscribeAll();
                item.onExpand.unsubscribeAll();
            });
            this.itens = [];
            jquery(this.element).children().detach();
            return this;
        };
        return Accordion;
    }(a_container_1.AContainer));
    exports.Accordion = Accordion;
});

//# sourceMappingURL=accordion.js.map
