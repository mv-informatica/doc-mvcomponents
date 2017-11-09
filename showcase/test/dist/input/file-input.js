define(["require", "exports", "tslib", "../core/event-emitter", "./abstract/a-input", "./input-addon", "../component/enum/e-input-event", "../component/enum/e-mouse-event", "jquery", "./assets/css/file-input.css!"], function (require, exports, tslib_1, event_emitter_1, a_input_1, input_addon_1, e_input_event_1, e_mouse_event_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FileInput = (function (_super) {
        tslib_1.__extends(FileInput, _super);
        function FileInput(placeholder) {
            if (placeholder === void 0) { placeholder = "Nenhum arquivo selecionado."; }
            var _this = _super.call(this, "file") || this;
            _this.onSelectFile = new event_emitter_1.EventEmitter();
            jquery(_this.element).find("input:first").addClass("real-file-input");
            _this.addStyleName("FileInput")
                .append(_this.handler = new input_addon_1.InputAddon()
                .addStyleName("is-clickable")
                .setIcon("glyphicon glyphicon-folder-open"));
            _this.handler.addEvent(e_mouse_event_1.EMouseEvent.CLICK, function (event) { return _this.getRealFileInput().click(); });
            _this.display = jquery("<input class=\"file-display form-control\" readonly />").insertBefore(_this.getRealFileInput());
            _this.addEvent(e_input_event_1.EInputEvent.CHANGE, function (event) {
                var $input = _this.getRealFileInput()[0];
                var files = $input.files;
                _this.onSelectFile.emit({
                    filesCount: files.length,
                    fileLabel: $input.value
                });
                _this.display.val($input.value);
            });
            _this.setPlaceholder(placeholder);
            return _this;
        }
        FileInput.prototype.getRealFileInput = function () {
            return jquery(this.element).find(".real-file-input:first");
        };
        FileInput.prototype.setAccept = function (accept) {
            this.getRealFileInput().attr("accept", accept);
            return this;
        };
        FileInput.prototype.setPlaceholder = function (placeholder) {
            this.display.attr("placeholder", placeholder);
            return this;
        };
        FileInput.prototype.getValue = function () {
            var $input = this.getRealFileInput()[0];
            return ($input.files && $input.files.length) ? $input.files[0] : null;
        };
        FileInput.prototype.encode = function (value) {
            throw new Error("Método não disponível");
        };
        FileInput.prototype.decode = function (value) {
            throw new Error("Método não disponível");
        };
        FileInput.prototype.setValue = function (file) {
            if (!file) {
                this.clear();
                return this;
            }
            else {
                throw new Error("Método não disponível");
            }
        };
        FileInput.prototype.clear = function () {
            var $input = this.getRealFileInput()[0];
            $input.value = "";
            jquery(this.element).find(".file-display:first").val("");
            return this;
        };
        return FileInput;
    }(a_input_1.AInput));
    exports.FileInput = FileInput;
});

//# sourceMappingURL=file-input.js.map
