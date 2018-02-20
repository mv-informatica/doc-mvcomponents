define(["require", "exports", "tslib", "jquery", "./abstract/a-base-input", "../core/event-emitter", "./input-addon", "../component/enum/e-mouse-event", "./assets/css/select.css!"], function (require, exports, tslib_1, jquery, a_base_input_1, event_emitter_1, input_addon_1, e_mouse_event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Select = (function (_super) {
        tslib_1.__extends(Select, _super);
        function Select(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.config = {};
            _this.descriptionField = "text";
            _this.valueField = "id";
            _this.onBeforeDropdown = new event_emitter_1.EventEmitter();
            _this.onSelect = new event_emitter_1.EventEmitter();
            _this.onNoResultsFound = new event_emitter_1.EventEmitter();
            _this.onClearMultiItem = new event_emitter_1.EventEmitter();
            _this.data = [];
            _this.config = Object.assign({}, { minSearchLength: 0, listPosition: "bottom" }, config || {});
            _this.render();
            var $_this = _this;
            if ($_this.config) {
                if ($_this.config.searchIgnoreCase && $_this.config.autocomplete) {
                    console.warn("\"searchIgnoreCase\" n\u00E3o deve ser usado com \"autocomplete:true\", pois o \"searchIgnoreCase\" n\u00E3o ter\u00E1 o comportamento adequado em requisi\u00E7\u00F5es ajax!");
                }
                if ($_this.config.autocomplete && (!$_this.config.minSearchLength)) {
                    console.warn("\"minSearchLength\" precisa est\u00E1 definido e ser maior que 0 para \"autocomplete:true\"");
                }
                if ($_this.config.clearOnEmptyTerm && (!$_this.config.minSearchLength)) {
                    console.warn("\"minSearchLength\" precisa ser maior que 0 para \"clearOnEmptyTerm:true\"");
                }
            }
            if (config && config.multiple) {
                _this.addStyleName("is-multiple");
                _this.selecteds = [];
                _this.fnDisplayField = function (item) { return "<span class=\"mult-select-item\" data-id=\"" + $_this.getValueByPath(item, $_this.getValueField()) + "\">\n\t\t\t\t\t\t\t\t\t\t\t" + $_this.getValueByPath(item, $_this.getDescriptionField()) + "\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"mv-basico-fechar multi-icon mult-item-delete\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>"; };
            }
            else {
                _this.fnDisplayField = function (item) { return _this.getValueByPath(item, _this.getDescriptionField()); };
            }
            _this.fnDisplayListItem = function (item) { return _this.getValueByPath(item, _this.getDescriptionField()); };
            _this.fnNoResultsDisplay = function (term) { return "<span style=\"font-style:italic\"><strong>" + term + "</strong> n\u00E3o encontrado!<span>"; };
            _this.iconUp = "glyphicon glyphicon-menu-up";
            _this.iconDown = "glyphicon glyphicon-menu-down";
            _this.btnShowList = new input_addon_1.InputAddon()
                .setIcon(_this.iconDown);
            _this.append(_this.btnShowList);
            _this.btnShowList.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function () {
                _this.getInput().focus();
            });
            _this.getMenuListItem()
                .on("mouseover", function () {
                jquery(this).addClass("is-over");
            })
                .on("mouseout", function () {
                jquery(this).removeClass("is-over");
            });
            _this.getDisplayItem()
                .on("click", function () {
                $_this.showFieldInput(true);
            })
                .on("click", ".mult-select-item > .multi-icon", function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                var itemSlected = jquery(this);
                if (itemSlected.hasClass("mult-item-delete")) {
                    var tmpid_1 = itemSlected.parent().attr("data-id");
                    if (tmpid_1) {
                        $_this.selecteds.some(function (iten, indx) {
                            if (String($_this.getValueByPath(iten, $_this.getValueField())) === tmpid_1) {
                                $_this.selecteds.splice(indx, 1);
                                return true;
                            }
                            return false;
                        });
                        $_this.onClearMultiItem.emit($_this.getByValue(tmpid_1));
                    }
                    itemSlected.parent().remove();
                }
            });
            _this.getInput().on("focus", function () {
                if (!_this.getMenuListItem().hasClass("from-enter")) {
                    _this.showList(true);
                    $_this.showFieldInput(true, false);
                }
                else if (_this.getMenuListItem().hasClass("from-enter")) {
                    $_this.showFieldInput(false, false);
                    _this.getMenuListItem().removeClass("from-enter");
                }
            }).on("blur", function (evt) {
                if (!_this.getMenuListItem().hasClass("is-over")) {
                    _this.showList(false);
                }
                else if (_this.getMenuListItem().hasClass("from-enter")) {
                }
                _this.fakeFocus(false);
            }).on("keyup", function (evt) {
                if (!$_this.isReadonly()) {
                    var txtSearch_1 = jquery(this).val();
                    var tmpContainer_1 = $_this.getMenuListItem();
                    if (evt.which === 38 || evt.which === 40) {
                        evt.preventDefault();
                        evt.stopPropagation();
                        var lastSelected = tmpContainer_1.find("li.display-item-list.is-active:first");
                        tmpContainer_1.find("li.display-item-list.is-active").removeClass("is-active");
                        if (evt.which === 38) {
                            if (lastSelected.hasClass("is-first")) {
                                lastSelected.addClass("is-active");
                            }
                            else if (lastSelected.length) {
                                lastSelected.prev().addClass("is-active");
                            }
                            else {
                                tmpContainer_1.find("li.display-item-list:last").addClass("is-active");
                            }
                        }
                        else if (evt.which === 40) {
                            if (lastSelected.hasClass("is-last")) {
                                lastSelected.addClass("is-active");
                            }
                            else if (lastSelected.length) {
                                lastSelected.next().addClass("is-active");
                            }
                            else {
                                tmpContainer_1.find("li.display-item-list:first").addClass("is-active");
                            }
                        }
                        return false;
                    }
                    else if (evt.which === 13) {
                        var tmpItem = tmpContainer_1.find("li.display-item-list.is-active:first");
                        if (tmpItem.length) {
                            var itemT = $_this.getByValue(tmpItem.attr("data-value"));
                            $_this.setValue(itemT);
                            $_this.fakeFocus(true);
                            $_this.showList(false);
                            tmpContainer_1.addClass("from-enter");
                            $_this.getInput().focus();
                            $_this.onSelect.emit([$_this.getValue()]);
                        }
                        return;
                    }
                    else if (!(evt.which === 9 || evt.which === 16)) {
                        var delaySearch = 0;
                        if ($_this.config && $_this.config.searchDelayTime) {
                            delaySearch = $_this.config.searchDelayTime;
                        }
                        window.clearTimeout($_this.searchDelayTimeIns);
                        $_this.searchDelayTimeIns = window.setTimeout(function () {
                            $_this.searchTerm = txtSearch_1;
                            if (txtSearch_1.length === 0) {
                                $_this.preValue = null;
                                $_this.setValue(null);
                            }
                            if ($_this.config && $_this.config.clearOnEmptyTerm && txtSearch_1.length === 0) {
                                $_this.setData([]);
                            }
                            $_this.showFieldInput(true, false);
                            $_this.showList(true);
                            var tmpList = [];
                            if ($_this.config && $_this.config.searchSimbol && txtSearch_1.length && txtSearch_1.indexOf($_this.config.searchSimbol) > -1) {
                                tmpContainer_1
                                    .find("li.no-result-display")
                                    .addClass("is-visible")
                                    .removeClass("is-hidden")
                                    .html($_this.fnNoResultsDisplay(txtSearch_1));
                                $_this.onNoResultsFound.emit(txtSearch_1);
                            }
                            else if ($_this.config && $_this.config.autocomplete && txtSearch_1.length >= $_this.config.minSearchLength) {
                                if (!$_this.config.minSearchLength) {
                                    console.warn("minSearchLength precisa está definido e ser maior que 0");
                                }
                                else {
                                    tmpContainer_1
                                        .find("li.no-result-display")
                                        .addClass("is-visible")
                                        .removeClass("is-hidden")
                                        .html($_this.fnNoResultsDisplay(txtSearch_1));
                                    $_this.onNoResultsFound.emit(txtSearch_1);
                                }
                            }
                            else if (!tmpList.length && txtSearch_1.length >= $_this.config.minSearchLength) {
                                if ($_this.config && $_this.config.searchIgnoreCase) {
                                    var txtSearchIC_1 = txtSearch_1.toLowerCase();
                                    tmpList = $_this.data.filter(function (item) {
                                        var valueGroup = $_this.getValueByPath(item, $_this.getDescriptionField());
                                        return valueGroup.toLowerCase().indexOf(txtSearchIC_1) > -1;
                                    });
                                }
                                else {
                                    tmpList = $_this.data.filter(function (item) {
                                        var valueGroup = $_this.getValueByPath(item, $_this.getDescriptionField());
                                        return valueGroup.indexOf(txtSearch_1) > -1;
                                    });
                                }
                                $_this.setList(tmpList);
                                if (tmpList.length) {
                                    tmpContainer_1
                                        .find("li.no-result-display")
                                        .removeClass("is-visible")
                                        .addClass("is-hidden");
                                }
                                else {
                                    tmpContainer_1
                                        .find("li.no-result-display")
                                        .addClass("is-visible")
                                        .removeClass("is-hidden")
                                        .html($_this.fnNoResultsDisplay(txtSearch_1));
                                    $_this.onNoResultsFound.emit(txtSearch_1);
                                }
                            }
                        }, delaySearch);
                    }
                }
            });
            return _this;
        }
        Select.prototype.getValueByPath = function (item, path) {
            var valueGroup = item;
            if (path.indexOf(".") > -1) {
                valueGroup = path.split(".")
                    .reduce(function (prev, curr) {
                    return prev ? prev[curr] : null;
                }, item || this);
            }
            else {
                valueGroup = item[path];
            }
            return valueGroup;
        };
        Select.prototype.getMenuListItem = function () {
            return jquery(this.element).find("ul:first");
        };
        Select.prototype.getDisplayItem = function () {
            return jquery(this.element).find(".input-group:first > .display-item-input:first");
        };
        Select.prototype.showFieldInput = function (showInput, forceFocus) {
            if (forceFocus === void 0) { forceFocus = true; }
            this.getInput().removeClass(showInput ? "is-hidden" : "is-visible").addClass(showInput ? "is-visible" : "is-hidden");
            this.getDisplayItem().removeClass(showInput ? "is-visible" : "is-hidden").addClass(showInput ? "is-hidden" : "is-visible");
            if (showInput && forceFocus) {
                this.getInput().focus();
            }
            return this;
        };
        Select.prototype.render = function () {
            var $ = jquery(this.element);
            $.addClass("Select form-group col-xs-12 col-sm-4 col-md-4 is-list-" + this.config.listPosition);
            $.append("\n\t\t\t<label class=\"control-label\" for=\"input_" + this._uid + "\" style=\"display:none\"></label>\n\t\t\t<div class=\"col-xs-12 input-group input-group-sm\">\n\t\t\t\t<div class=\"form-control display-item-input is-visible\"></div>\n\t\t\t\t<input class=\"form-control is-hidden\" id=\"input_" + this._uid + "\" autocomplete=\"off\">\n\t\t\t\t<ul class=\"options-container is-hidden\" id=\"input_" + this._uid + "_\"></ul>\n\t\t\t</div>\n\t\t");
            this.getInput().css("width", "100%");
            var $this_ = this;
            this.getMenuListItem().on("click", "li.display-item-list", function () {
                var vlSelected = jquery(this).attr("data-value");
                if ($this_.labelAll && vlSelected && vlSelected === "-1") {
                    $this_.setValue($this_.labelAll);
                    $this_.onSelect.emit([null]);
                }
                else {
                    var indexItem_1 = -1;
                    var hasItem = $this_.data.some(function (item, indx) {
                        if (String($this_.getValueByPath(item, $this_.getValueField())) === vlSelected) {
                            indexItem_1 = indx;
                            return true;
                        }
                        return false;
                    });
                    if (hasItem) {
                        if ($this_.config && $this_.config.multiple) {
                            var hasItemInSelectes = $this_.selecteds.some(function (item, indx) {
                                if (String($this_.getValueByPath(item, $this_.getValueField())) === vlSelected) {
                                    return true;
                                }
                                return false;
                            });
                            if (!hasItemInSelectes) {
                                $this_.selecteds.unshift($this_.data[indexItem_1]);
                            }
                        }
                        $this_.setValue($this_.data[indexItem_1]);
                        $this_.onSelect.emit([$this_.getValue()]);
                    }
                }
                $this_.showFieldInput(false);
                $this_.showList(false);
                $this_.fakeFocus(true);
                $this_.getMenuListItem().addClass("from-enter");
                $this_.getInput().focus();
            });
        };
        Select.prototype.fakeFocus = function (on) {
            if (on) {
                this.getDisplayItem().addClass("is-focus");
            }
            else {
                this.getDisplayItem().removeClass("is-focus");
            }
            return this;
        };
        Select.prototype.normalizeWidth = function () {
            if (!this.hasStyleName("was-initialized")) {
                var subInput = jquery(this.element).find(".select2-selection__rendered:first");
                var widthRendered = subInput.width();
                if (widthRendered > 0) {
                    subInput.css({ width: (widthRendered + 28) + "px" });
                    this.addStyleName("was-initialized");
                }
            }
        };
        Select.prototype.getInput = function () {
            return jquery(this.element).find("input:first");
        };
        Select.prototype.updateValueByPath = function (value, pathObj, tree, branch) {
            if (branch === void 0) { branch = tree; }
            var path = pathObj.split(".");
            var last = path.length === 1;
            branch[path[0]] = last ? value : branch[path[0]] ? branch[path[0]] : {};
            return last ? tree : this.updateValueByPath(value, path.slice(1).join("."), tree, branch[path[0]]);
        };
        Select.prototype.setLabelAll = function (labelAll) {
            this.labelAll = {};
            this.updateValueByPath("-1", this.assignedProperty ? this.assignedProperty : this.getValueField(), this.labelAll);
            this.updateValueByPath(labelAll, this.getDescriptionField(), this.labelAll);
            this.setValue(this.labelAll);
            return this;
        };
        Select.prototype.setList = function (data) {
            var _this = this;
            var $_this = this;
            var select = this.getMenuListItem();
            var innerHTML = "";
            if (this.labelAll) {
                innerHTML += "<li \n\t\t\t\t\t\t\tdata-index=\"0\" \n\t\t\t\t\t\t\tclass=\"is-first display-item-list\" \n\t\t\t\t\t\t\tdata-value=\"" + this.getValueByPath(this.labelAll, this.getValueField()) + "\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t" + this.getValueByPath(this.labelAll, this.getDescriptionField()) + "\n\t\t\t\t\t\t\t</li>";
            }
            var tmList = data.length;
            data.forEach(function (dta, indx) {
                if (_this.labelAll) {
                    indx += 1;
                }
                var positionInd = (indx === 0 ? "is-first" : "");
                if (!positionInd) {
                    positionInd = (indx + 1 === tmList ? "is-last" : "");
                }
                innerHTML += "<li \n\t\t\t\tdata-index=\"" + indx + "\" \n\t\t\t\tclass=\"" + positionInd + " display-item-list\" \n\t\t\t\tdata-value=\"" + $_this.getValueByPath(dta, $_this.getValueField()) + "\"\n\t\t\t\t>\n\t\t\t\t" + _this.fnDisplayListItem(dta) + "    \n\t\t\t</li>";
            });
            innerHTML += "<li class=\"no-result-display is-hidden\"></li>";
            select.html(innerHTML);
            return this;
        };
        Select.prototype.init = function () {
            this.setList(this.data);
            return this.getInput();
        };
        Select.prototype.refresh = function (refreshData) {
            if (refreshData === void 0) { refreshData = false; }
            this.init();
            return this;
        };
        Select.prototype.insertAddon = function (method, addon) {
            var $container = jquery(this.element).children("div.input-group");
            $container[method](addon.element);
            return this;
        };
        Select.prototype.append = function (addon) {
            return this.insertAddon("append", addon);
        };
        Select.prototype.prepend = function (addon) {
            return this.insertAddon("prepend", addon);
        };
        Select.prototype.setNoResults = function (resultDisplay) {
            this.fnNoResultsDisplay = resultDisplay;
            return this;
        };
        Select.prototype.setPlaceholder = function (placeholder) {
            this.config.placeholder = placeholder;
            this.getInput().attr("placeholder", placeholder);
            this.getDisplayItem().html("<span class=\"is-placeholder\">" + placeholder + "</span>");
            return this;
        };
        Select.prototype.showList = function (visible) {
            var _this = this;
            var input = this.getInput();
            if (input.prop("disabled")) {
                return this;
            }
            this.onBeforeDropdown.emit(null).done(function () {
                var select = _this.getMenuListItem();
                if (visible) {
                    select.removeClass("is-hidden");
                    _this.btnShowList.addStyleName("is-menu-visible").setIcon(_this.iconUp);
                }
                else {
                    select.addClass("is-hidden");
                    _this.btnShowList.removeStyleName("is-menu-visible").setIcon(_this.iconDown);
                }
            });
            return this;
        };
        Select.prototype.setValueField = function (field) {
            this.valueField = field;
            return this.data ? this.refresh(true) : this;
        };
        Select.prototype.setAssignedProperty = function (field) {
            this.assignedProperty = field;
            return this.data ? this.refresh(true) : this;
        };
        Select.prototype.getAssignedProperty = function () {
            return this.assignedProperty;
        };
        Select.prototype.setDescriptionField = function (field) {
            this.descriptionField = field;
            return this.data ? this.refresh(true) : this;
        };
        Select.prototype.getValueField = function () {
            return this.valueField;
        };
        Select.prototype.getDescriptionField = function () {
            return this.descriptionField;
        };
        Select.prototype.setData = function (data) {
            this.data = data;
            if (this.config && this.config.multiple) {
                this.selecteds = [];
            }
            this.refresh(true);
            if (this.preValue) {
                this.setValue(this.preValue);
            }
            return this;
        };
        Select.prototype.getData = function () {
            return this.data;
        };
        Select.prototype.clear = function () {
            this.setValues([]);
            if (this.labelAll) {
                this.setValue(this.labelAll);
            }
            return this;
        };
        Select.prototype.getValue = function () {
            var item = null;
            if (this.getAttribute("data-value") === "-1") {
                item = null;
                if (this.assignedProperty) {
                    item = this.getValueByPath(this.labelAll, this.assignedProperty);
                }
                else {
                    item = "";
                }
            }
            else {
                item = this.getByValue(this.getAttribute("data-value"));
            }
            return item;
        };
        Select.prototype.getValues = function () {
            return this.selecteds || [];
        };
        Select.prototype.setValues = function (itens) {
            this.selecteds = itens;
            this.setValue(itens[0] || null);
            return this;
        };
        Select.prototype.addValues = function (itens) {
            this.selecteds = this.selecteds.concat(itens);
            this.setValue(this.selecteds[0] || null);
            return this;
        };
        Select.prototype.setValue = function (item) {
            var _this = this;
            if (item) {
                var tmpItem = null;
                if (this.labelAll && this.getValueByPath(this.labelAll, this.getValueField()) === this.getValueByPath(item, this.getValueField())) {
                    tmpItem = this.labelAll;
                }
                else {
                    tmpItem = this.getByValue(this.getValueByPath(item, this.getValueField()));
                }
                if (tmpItem) {
                    this.setAttribute("data-value", this.getValueByPath(item, this.getValueField()));
                    var valueGroup = this.getValueByPath(tmpItem, this.getDescriptionField());
                    this.getInput().val(valueGroup);
                    if (this.config && this.config.multiple) {
                        var concatedListStr_1 = "";
                        this.selecteds.forEach(function (item) { return concatedListStr_1 += _this.fnDisplayField(item); });
                        this.getDisplayItem().html(concatedListStr_1);
                    }
                    else {
                        this.getDisplayItem().html(this.fnDisplayField(tmpItem));
                    }
                    this.preValue = null;
                }
                else {
                    this.preValue = item;
                }
            }
            else {
                this.setAttribute("data-value", "");
                this.getInput().val("");
                this.getDisplayItem().html("");
                this.selecteds = [];
                if (this.labelAll) {
                    this.setValue(this.labelAll);
                }
            }
            if (this.isDirty()) {
                jquery(this.element).trigger("change");
            }
            return this;
        };
        Select.prototype.getRawValue = function () {
            return null;
        };
        Select.prototype.getByValue = function (value) {
            var _this = this;
            if (this.data && this.data.length) {
                var field_1 = this.getValueField();
                var itemFound = this
                    .data
                    .find(function (item) { return String(value) === String(_this.getValueByPath(item, field_1)); });
                return itemFound || null;
            }
            return null;
        };
        Select.prototype.setDisplayListItem = function (display) {
            this.fnDisplayListItem = display;
            return this;
        };
        Select.prototype.setDisplayItem = function (display) {
            this.fnDisplayField = display;
            return this;
        };
        return Select;
    }(a_base_input_1.ABaseInput));
    exports.Select = Select;
});

//# sourceMappingURL=select.js.map
