define(["require", "exports", "tslib", "jquery", "./abstract/a-text-input", "./input-addon", "../component/enum/e-mouse-event"], function (require, exports, tslib_1, jquery, a_text_input_1, input_addon_1, e_mouse_event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconPickerInput = (function (_super) {
        tslib_1.__extends(IconPickerInput, _super);
        function IconPickerInput() {
            var _this = _super.call(this, "text", "") || this;
            _this._valuefield = "id";
            _this._labelfield = "label";
            var $element = jquery(_this.element);
            var handler;
            _this.addStyleName("IconPickerInput");
            _this.itemRender = function (label, value) { return "<a \n\t\t\trole=\"presentation\"\n\t\t\tdata-value=\"" + value + "\"\n\t\t\tdata-label=\"" + label + "\"\n\t\t\tclass=\"col-xs-2 select_option_value\"\n\t\t\thref=\"#\">\n\t\t\t<span \n\t\t\t\taria-hidden=\"true\"\n\t\t\t\tclass=\"" + value + "\"\n\t\t\t\tdata-value=\"" + value + "\"\n\t\t\t\tdata-label=\"" + label + "\"></span>\n\t\t\t</a>"; };
            _this
                .append(new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-refresh"))
                .append(handler = new input_addon_1.InputAddon()
                .setIcon("glyphicon glyphicon-triangle-bottom"));
            $element.append("\n\t\t\t<ul id=\"uid_" + _this._uid + "_2\" style=\"z-index:9999;top:56px;left:37px;display:none;max-height:170px;overflow:auto\" \n\t\t\t  class=\"select-content dropdown-menu\" role=\"menu\">\n\t\t\t</ul>\n\t\t");
            handler.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function (event) { return _this.resizeList(event); });
            _this.getInput().hide();
            $element.find("ul.select-content").on("click", ".select_option_value", function (event) { return _this.getFromUpList(event); });
            return _this;
        }
        IconPickerInput.prototype.resizeList = function (evt) {
            evt.preventDefault();
            if (jquery("#uid_" + this._uid + "_2").css("display") === "block") {
                this.showList(false);
            }
            else if (!this.isDisabled()) {
                var width = this.getInput().outerWidth() + "px";
                this.showList(true);
                this.getList().css({ width: width });
            }
        };
        IconPickerInput.prototype.getList = function () {
            return jquery("#uid_" + this._uid + "_2");
        };
        IconPickerInput.prototype.showList = function (p_on) {
            this.getList().css("display", (p_on) ? "block" : "none");
        };
        IconPickerInput.prototype.getFromUpList = function (evt) {
            evt.preventDefault();
            var $target = jquery(evt.target);
            var p_vl = $target.attr("data-value");
            var tmpDesc = $target.attr("data-label");
            jquery(this.element)
                .attr({
                "data-prevalue": p_vl,
                "data-value": p_vl
            })
                .find(".addon1:first .icon1")
                .removeClass()
                .addClass("icon1 iconeinput " + p_vl);
            this.showList(false);
            this.getInput().val(tmpDesc).trigger("change");
        };
        IconPickerInput.prototype.setValueField = function (p_column) {
            this._valuefield = p_column;
        };
        IconPickerInput.prototype.setDescriptionField = function (p_column) {
            this._labelfield = p_column;
        };
        IconPickerInput.prototype.getValueField = function () {
            return this._valuefield;
        };
        IconPickerInput.prototype.getLabelField = function () {
            return this._labelfield;
        };
        IconPickerInput.prototype.setData = function (data) {
            var _this = this;
            var tm = data.length;
            var template = "";
            var valueField = this.getValueField();
            var labelField = this.getLabelField();
            if (data) {
                template = data.reduce(function (template, item) {
                    template += _this.itemRender(item[labelField], item[valueField]);
                }, "");
            }
            jquery(this.element)
                .find("#uid_" + this._uid + "_2")
                .html(template);
            template = null;
        };
        IconPickerInput.prototype.getValue = function () {
            return jquery(this.element).attr("data-value");
        };
        IconPickerInput.prototype.getText = function () {
            return this.getInput().val();
        };
        IconPickerInput.prototype.getDesc = function () {
            return this.getValue();
        };
        IconPickerInput.prototype.isValid = function () {
            var vl = this.getValue();
            if (!vl) {
                return false;
            }
            return vl.length > 0 === true;
        };
        IconPickerInput.prototype.setValue = function (value) {
            var tmpVl = "";
            if (!value) {
                jquery(this.element).attr({
                    "data-prevalue": value,
                    "data-value": value
                });
                this.getInput().val("");
                return this;
            }
            else {
                tmpVl = "" + value;
            }
            if (tmpVl.length > 0) {
                jquery(this.element)
                    .attr({
                    "data-prevalue": value,
                    "data-value": value
                });
                var tmpDesc = this.getDescFromServiceByValue(value);
                this.getInput().val(tmpDesc);
                jquery(this.element)
                    .find(".addon1:first .icon1")
                    .removeClass()
                    .addClass("icon1 iconeinput " + value);
            }
            else {
                this.getInput().val("");
            }
            return this;
        };
        IconPickerInput.prototype.getDescFromServiceByValue = function (p_vl) {
            var tmpDesc = "";
            jquery("#uid_" + this._uid + "_2 .select_option_value")
                .each(function () {
                var item = jquery(this);
                if (item.attr("data-value") === p_vl) {
                    tmpDesc = item.attr("data-label");
                    return false;
                }
                return true;
            });
            return tmpDesc;
        };
        return IconPickerInput;
    }(a_text_input_1.ATextInput));
    exports.IconPickerInput = IconPickerInput;
});

//# sourceMappingURL=icon-picker-input.js.map
