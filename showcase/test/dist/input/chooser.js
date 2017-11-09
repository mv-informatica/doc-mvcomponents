define(["require", "exports", "tslib", "jquery", "../http/http", "../component/enum/e-input-event", "../component/enum/e-mouse-event", "./abstract/a-base-input", "./input-addon", "../core/event-emitter", "./assets/css/chooser.css!"], function (require, exports, tslib_1, jquery, http_1, e_input_event_1, e_mouse_event_1, a_base_input_1, input_addon_1, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chooser = (function (_super) {
        tslib_1.__extends(Chooser, _super);
        function Chooser(config) {
            var _this = _super.call(this, "div", "") || this;
            _this.config = {};
            _this.onSelect = new event_emitter_1.EventEmitter();
            _this.data = [];
            _this.params = {};
            _this.url = config ? config.url : null;
            _this.config = Object.assign({}, { minSearchLength: 0, listPosition: "bottom" }, config || {});
            _this.fnDisplayField = function (item) { return _this.getValueByPath(item, _this.getDescriptionField()); };
            _this.fnDisplayListItem = function (item) { return _this.getValueByPath(item, _this.getDescriptionField()); };
            _this.render();
            _this.btnClear = new input_addon_1.InputAddon().setIcon("mv-basico-fechar").setCssProperties({ "font-size": "15px", "padding-bottom": "0px", "padding-top": "1px", "line-height": "0px" });
            _this.btnClear.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function () {
                _this.setValue(null);
                _this.getMenuListItem().hide();
            });
            _this.insertAddon("append", _this.btnClear);
            _this.lastTextSearch = "";
            return _this;
        }
        Chooser.prototype.insertAddon = function (method, addon) {
            var $container = jquery(this.element).children("div.input-group");
            $container[method](addon.element);
            return this;
        };
        Chooser.prototype.init = function () {
            this.setList(this.data);
        };
        Chooser.prototype.fakeFocus = function (on) {
            if (on) {
                this.getDisplayItem().addClass("is-focus");
            }
            else {
                this.getDisplayItem().removeClass("is-focus");
            }
            return this;
        };
        Chooser.prototype.render = function () {
            var _this = this;
            var $ = jquery(this.element);
            var $this = this;
            $.addClass("Chooser form-group col-xs-12 col-sm-4 col-md-4 is-list-" + this.config.listPosition);
            $.append("\n\t\t\t<label class=\"control-label\" for=\"input_" + this._uid + "\" style=\"display:none\"></label>\n\t\t\t<div class=\"col-xs-12 input-group input-group-sm\">\n\t\t\t\t<div class=\"form-control display-item-input\"></div>\n\t\t\t\t<input class=\"form-control\" style=\"display:none\" id=\"input_" + this._uid + "\" autocomplete=\"off\">\n\t\t\t\t<ul class=\"options-container\" style=\"display:none\" id=\"input_" + this._uid + "_\"></ul>\n\t\t\t</div>\n\t\t");
            this.getMenuListItem().on("click", "li.display-item-list", function () {
                var dataIndex = jquery(this).attr("data-index");
                $this.itemSelected = $this.data[dataIndex];
                $this.setValue($this.itemSelected);
                $this.getMenuListItem().hide();
                $this.getInput().focus();
                $this.onSelect.emit([$this.itemSelected]);
            }).on("mouseover", function () {
                jquery($this.getMenuListItem()).addClass("is-over");
                jquery($this.getMenuListItem()).show();
            }).on("mouseleave", function () {
                jquery($this.getMenuListItem()).removeClass("is-over");
                if (!jquery($this.getInput()).hasClass("is-over")) {
                    jquery($this.getMenuListItem()).hide();
                }
            });
            this.getInput().on("keyup", function (evt) {
                if (!$this.isReadonly()) {
                    var txtSearch_1 = $this.getInput().val();
                    var tmpContainer_1 = $this.getMenuListItem();
                    if (txtSearch_1 && txtSearch_1.length >= _this.config.minSearchLength && txtSearch_1 !== _this.lastTextSearch) {
                        _this.lastTextSearch = txtSearch_1;
                        var paramSearch_1 = {};
                        if (_this.descriptionField) {
                            paramSearch_1[_this.descriptionField] = txtSearch_1.toUpperCase();
                        }
                        else {
                            paramSearch_1["descricao"] = txtSearch_1.toUpperCase();
                            if ($this.searchFields && $this.searchFields.length) {
                                $this.searchFields.forEach(function (field) {
                                    paramSearch_1[field] = txtSearch_1.toUpperCase();
                                });
                            }
                        }
                        if ((evt.which >= 35 && evt.which <= 40)
                            || (evt.which >= 16 && evt.which <= 18)
                            || evt.which === 46) {
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
                            else {
                                $this.load({ params: paramSearch_1 });
                                if (_this.data && _this.data.length) {
                                    jquery(tmpContainer_1).show();
                                }
                            }
                            return false;
                        }
                        else if (evt.which === 13) {
                            var tmpItem = tmpContainer_1.find("li.display-item-list.is-active:first");
                            if (tmpItem.length) {
                                var dataIndex = tmpItem.attr("data-index");
                                $this.itemSelected = $this.data[dataIndex];
                                if ($this.itemSelected) {
                                    $this.setValue($this.itemSelected);
                                    $this.getMenuListItem().hide();
                                    $this.getInput().focus();
                                    $this.onSelect.emit([$this.itemSelected]);
                                }
                            }
                            return;
                        }
                        else if (!(evt.which === 9)) {
                            $this.load({ params: paramSearch_1 }).then(function () {
                                if (_this.data && _this.data.length) {
                                    jquery(tmpContainer_1).show();
                                }
                            });
                        }
                    }
                    else {
                        jquery(tmpContainer_1).hide();
                    }
                }
            }).on("blur", function (evt) {
                if (!$this.getInput().val()) {
                    $this.getInput().hide();
                    $this.getDisplayItem().show();
                }
                if (!jquery($this.getMenuListItem()).hasClass("is-over")) {
                    jquery($this.getMenuListItem()).hide();
                }
            }).on("mouseover", function () {
                jquery($this.getInput()).addClass("is-over");
            }).on("mouseout", function () {
                jquery($this.getInput()).removeClass("is-over");
            }).on("click", function () {
                var txtSearch = $this.getInput().val();
                if (txtSearch && !_this.data) {
                    var paramSearch_2 = {};
                    if (_this.descriptionField) {
                        paramSearch_2[_this.descriptionField] = txtSearch.toUpperCase();
                    }
                    else {
                        paramSearch_2["descricao"] = txtSearch.toUpperCase();
                        if ($this.searchFields && $this.searchFields.length) {
                            $this.searchFields.forEach(function (field) {
                                paramSearch_2[field] = txtSearch.toUpperCase();
                            });
                        }
                    }
                    $this.load({ params: paramSearch_2 });
                }
                $this.showList(true);
            });
            jquery(this.getDisplayItem()).on("click", function () {
                if (!_this.isDisabled()) {
                    $this.getInput().show();
                    $this.getDisplayItem().hide();
                    $this.getInput().focus();
                }
            });
            this.getDisplayItem().html("<span class=\"is-placeholder\">Digite no m\u00EDnimo 2 d\u00EDgitos</span>");
        };
        Chooser.prototype.showList = function (visible) {
            var input = this.getInput();
            if (input.prop("disabled") || input.prop("readonly")) {
                return this;
            }
            else {
                var menuList = this.getMenuListItem();
                if (visible) {
                    menuList.show();
                }
                else {
                    menuList.hide();
                }
            }
            return this;
        };
        Chooser.prototype.setUrl = function (url) {
            this.url = url;
        };
        Chooser.prototype.getUrl = function () {
            return this.url;
        };
        Chooser.prototype.setParams = function (params) {
            this.params = params;
            return this;
        };
        Chooser.prototype.setAssignedProperty = function (field) {
            this.assignedProperty = field;
            return this.data ? this.refresh() : this;
        };
        Chooser.prototype.getAssignedProperty = function () {
            return this.assignedProperty;
        };
        Chooser.prototype.getParams = function () {
            return this.params;
        };
        Chooser.prototype.setDescriptionField = function (field) {
            this.descriptionField = field;
            return this;
        };
        Chooser.prototype.getDescriptionField = function () {
            return this.descriptionField;
        };
        Chooser.prototype.setSearchFields = function (field) {
            this.searchFields = field;
            return this;
        };
        Chooser.prototype.getSearchFields = function () {
            return this.searchFields;
        };
        Chooser.prototype.getDisplayItem = function () {
            return jquery(this.element).find(".input-group:first > .display-item-input:first");
        };
        Chooser.prototype.setPlaceholder = function (placeholder) {
            this.config.placeholder = placeholder;
            this.getInput().attr("placeholder", placeholder);
            this.getDisplayItem().html("<span class=\"is-placeholder\">" + placeholder + "</span>");
            return this;
        };
        Chooser.prototype.setData = function (data) {
            this.data = data;
            this.refresh();
            return this;
        };
        Chooser.prototype.getData = function () {
            return this.data;
        };
        Chooser.prototype.setValue = function (item) {
            this.itemSelected = item;
            if (this.itemSelected) {
                this.lastTextSearch = this.fnDisplayField(this.itemSelected);
                this.getInput().val(this.fnDisplayField(this.itemSelected));
                this.getInput().show();
                this.getDisplayItem().hide();
            }
            else {
                this.lastTextSearch = "";
                this.getInput().val("");
                this.getInput().hide();
                this.getDisplayItem().show();
            }
            if (this.isDirty()) {
                this.fireEvent(e_input_event_1.EInputEvent.CHANGE);
            }
            return this;
        };
        Chooser.prototype.getValue = function () {
            return this.itemSelected;
        };
        Chooser.prototype.refresh = function () {
            this.init();
            return this;
        };
        Chooser.prototype.load = function (configLoad) {
            var _this = this;
            var url = configLoad && configLoad.url ? configLoad.url : this.url;
            var params = configLoad && configLoad.params ? Object.assign({}, configLoad.params, this.params || {}) : this.params;
            return http_1.$http.get(url).params(params).then(function (data) {
                _this.setData(data);
                return data;
            }).catch(function () {
                _this.setData([]);
                return [];
            });
        };
        Chooser.prototype.getMenuListItem = function () {
            return jquery(this.element).find("ul:first");
        };
        Chooser.prototype.setList = function (data) {
            var _this = this;
            var $_this = this;
            var ulItens = this.getMenuListItem();
            var innerHTML = "";
            var tmList = data.length;
            data.forEach(function (dta, indx) {
                var positionInd = (indx === 0 ? "is-first" : "");
                if (!positionInd) {
                    positionInd = (indx + 1 === tmList ? "is-last" : "");
                }
                innerHTML += "<li data-index=\"" + indx + "\" class=\"" + positionInd + " display-item-list\">\n\t\t\t\t" + _this.fnDisplayListItem(dta) + "    \n\t\t\t</li>";
            });
            innerHTML += "<li class=\"no-result-display is-hidden\"></li>";
            ulItens.html(innerHTML);
            return this;
        };
        Chooser.prototype.setDisplayItem = function (display) {
            this.fnDisplayField = display;
            return this;
        };
        Chooser.prototype.setDisplayListItem = function (display) {
            this.fnDisplayListItem = display;
            return this;
        };
        Chooser.prototype.getInput = function () {
            return jquery(this.element).find("input:first");
        };
        Chooser.prototype.getValueByPath = function (item, path) {
            var valueGroup = item;
            if (path.indexOf(".") > -1) {
                valueGroup = path.split(".").reduce(function (prev, curr) {
                    return prev ? prev[curr] : null;
                }, item || this);
            }
            else {
                valueGroup = item ? item[path] : null;
            }
            return valueGroup;
        };
        return Chooser;
    }(a_base_input_1.ABaseInput));
    exports.Chooser = Chooser;
});

//# sourceMappingURL=chooser.js.map
