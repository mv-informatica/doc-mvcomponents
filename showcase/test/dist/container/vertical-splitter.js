define(["require", "exports", "tslib", "./abstract/a-container", "./box", "../core/event-emitter", "jquery", "./assets/css/vertical-splitter.css!"], function (require, exports, tslib_1, a_container_1, box_1, event_emitter_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalSplitter = (function (_super) {
        tslib_1.__extends(VerticalSplitter, _super);
        function VerticalSplitter() {
            var _this = _super.call(this, "div", "") || this;
            _this.onCollapse = new event_emitter_1.EventEmitter();
            _this.onExpande = new event_emitter_1.EventEmitter();
            var $this = _this;
            jquery(_this.element)
                .addClass("VerticalSplitter")
                .on("click", ".splitter-content .splitter-divisor-content.is-right", function () {
                if (jquery(this).parent().hasClass("is-right")) {
                    var element_1 = jquery(this).parents(".splitter-content:first");
                    var nextItem = element_1.next();
                    var configItemAtual_1 = $this.getSplitterContentConfig(element_1[0]);
                    var configNextIten = Object.assign({}, {
                        size: 12,
                        minSize: 0,
                        maxSize: 12,
                        stepSize: 1
                    });
                    if (nextItem.length) {
                        configNextIten = $this.getSplitterContentConfig(nextItem[0]);
                    }
                    if ((configItemAtual_1.size + configItemAtual_1.stepSize) <= configItemAtual_1.maxSize
                        &&
                            (configNextIten.size - configItemAtual_1.stepSize) >= configNextIten.minSize
                        &&
                            (configNextIten.size - configItemAtual_1.stepSize) <= configNextIten.maxSize) {
                        var isOkToExpand = true;
                        if (nextItem.length) {
                            if ((configNextIten.size - configItemAtual_1.stepSize) >= configItemAtual_1.minSize) {
                                nextItem.attr("data-size", (configNextIten.size - configItemAtual_1.stepSize));
                            }
                            else {
                                isOkToExpand = false;
                            }
                        }
                        if (isOkToExpand) {
                            $this.onExpande.emit(null).done(function () {
                                element_1.attr("data-size", (configItemAtual_1.size + configItemAtual_1.stepSize));
                                $this.reRender();
                            });
                        }
                    }
                }
            })
                .on("click", ".splitter-content .splitter-divisor-content.is-left", function () {
                if (jquery(this).parent().hasClass("is-right")) {
                    var element_2 = jquery(this).parents(".splitter-content:first");
                    var configItemAtual_2 = $this.getSplitterContentConfig(element_2[0]);
                    if ((configItemAtual_2.size - configItemAtual_2.stepSize) >= configItemAtual_2.minSize) {
                        $this.onCollapse.emit(null).done(function () {
                            element_2.attr("data-size", (configItemAtual_2.size - configItemAtual_2.stepSize));
                            var nextItem = element_2.next();
                            if (nextItem.length) {
                                var elementSizeNext = parseInt(nextItem.attr("data-size"));
                                nextItem.attr("data-size", (elementSizeNext + configItemAtual_2.stepSize));
                                if ((configItemAtual_2.size - configItemAtual_2.stepSize) === 0) {
                                    nextItem.removeClass("aux-is-hidden");
                                }
                            }
                            $this.reRender();
                        });
                    }
                }
            })
                .on("click", ".splitter-content .splitter-divisor-content.is-right", function () {
                if (jquery(this).parent().hasClass("is-left")) {
                    var element_3 = jquery(this).parents(".splitter-content:first");
                    var prevItem_1 = element_3.prev();
                    var configItemAtual_3 = $this.getSplitterContentConfig(element_3[0]);
                    var configPrevIten_1 = Object.assign({}, configItemAtual_3);
                    if (prevItem_1.length) {
                        configPrevIten_1 = $this.getSplitterContentConfig(prevItem_1[0]);
                    }
                    if ((configItemAtual_3.size - configPrevIten_1.stepSize) >= configItemAtual_3.minSize) {
                        $this.onExpande.emit(null).done(function () {
                            element_3.attr("data-size", (configItemAtual_3.size - configPrevIten_1.stepSize));
                            if (prevItem_1.length) {
                                prevItem_1.attr("data-size", (configPrevIten_1.size + configPrevIten_1.stepSize));
                            }
                            element_3.addClass("aux-is-hidden");
                            $this.reRender();
                        });
                    }
                }
            });
            return _this;
        }
        VerticalSplitter.prototype.append = function (item, config) {
            return this.insertSplitterItem(item, "append", config);
        };
        VerticalSplitter.prototype.attached = function () {
        };
        VerticalSplitter.prototype.prepend = function (item, config) {
            return this.insertSplitterItem(item, "prepend", config);
        };
        VerticalSplitter.prototype.getSplitterContentConfig = function (element) {
            var tmpElement = jquery(element);
            var configObject = {
                minSize: parseInt(tmpElement.attr("data-min-size")),
                maxSize: parseInt(tmpElement.attr("data-max-size")),
                stepSize: parseInt(tmpElement.attr("data-step-size")),
                size: parseInt(tmpElement.attr("data-size"))
            };
            return configObject;
        };
        VerticalSplitter.prototype.insertSplitterItem = function (item, type, config) {
            var defaultConfig = jquery.extend({}, {
                minSize: 0,
                maxSize: 12,
                stepSize: 1,
                size: 0
            }, config);
            var lgSize = defaultConfig.size || this.getRemaingAmountSize();
            item
                .addStyleName("splitter-content aux-is-hidden")
                .setAttributes({
                "data-size": lgSize,
                "data-default-size": defaultConfig.size || 0,
                "data-min-size": defaultConfig.minSize,
                "data-max-size": defaultConfig.maxSize,
                "data-step-size": defaultConfig.stepSize
            });
            var boxdivsright = new box_1.Box().addStyleName("box-splitter-divisor-content is-right");
            boxdivsright
                .prepend(new box_1.Box().addStyleName("splitter-divisor-content is-right"))
                .prepend(new box_1.Box().addStyleName("splitter-divisor-content is-left"));
            var boxdivsleft = new box_1.Box().addStyleName("box-splitter-divisor-content is-left");
            boxdivsleft
                .prepend(new box_1.Box().addStyleName("splitter-divisor-content is-right"));
            item
                .append(boxdivsright)
                .prepend(boxdivsleft);
            _super.prototype[type].call(this, item);
            return this.reCalculate().reRender();
        };
        VerticalSplitter.prototype.getRemaingAmountSize = function () {
            var nsize = 12;
            jquery(this.element).children().filter(".splitter-content").each(function (indx) {
                nsize -= parseInt(jquery(this).attr("data-default-size"));
            });
            return nsize;
        };
        VerticalSplitter.prototype.reCalculate = function () {
            var ncount = 0;
            jquery(this.element).children().filter(".splitter-content").each(function (indx) {
                var nsize = parseInt(jquery(this).attr("data-default-size"));
                if (nsize < 1) {
                    ncount++;
                }
            });
            var naverage = 1;
            if (ncount && this.getRemaingAmountSize()) {
                naverage = this.getRemaingAmountSize() / ncount;
            }
            var nremant = 0;
            if (naverage !== Number("" + naverage)) {
                naverage = Number("" + naverage);
                nremant++;
            }
            jquery(this.element)
                .children()
                .filter(".splitter-content")
                .each(function (indx) {
                var element = jquery(this);
                var nsize = parseInt(jquery(this).attr("data-default-size"));
                if (nsize < 1) {
                    jquery(this).attr("data-size", (naverage + nremant));
                    nremant = 0;
                }
            });
            return this;
        };
        VerticalSplitter.prototype.reRender = function () {
            var $this = this;
            jquery(this.element).children().filter(".splitter-content").each(function (indx) {
                var element = jquery(this);
                var atualElementConfig = $this.getSplitterContentConfig(this);
                var elementclass = element.attr("class");
                elementclass = elementclass.replace(/col-xs-\d{1,2}/g, "");
                if (atualElementConfig.size === 0) {
                    elementclass += " col-xs-1 is-hidden";
                }
                else {
                    elementclass = elementclass.replace(" is-hidden", "");
                    elementclass += " col-xs-" + atualElementConfig.size;
                }
                if (atualElementConfig.maxSize === atualElementConfig.size) {
                    elementclass += " is-max";
                }
                else {
                    elementclass = elementclass.replace(" is-max", "");
                }
                if (atualElementConfig.minSize === atualElementConfig.size) {
                    elementclass += " is-min";
                }
                else {
                    elementclass = elementclass.replace(" is-min", "");
                }
                element.attr("class", "")
                    .addClass(elementclass + " col-xs-" + atualElementConfig.size);
            });
            return this;
        };
        return VerticalSplitter;
    }(a_container_1.AContainer));
    exports.VerticalSplitter = VerticalSplitter;
});

//# sourceMappingURL=vertical-splitter.js.map
